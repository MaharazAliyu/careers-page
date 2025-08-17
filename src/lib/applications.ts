import { supabase } from './supabase';
import type { Application, Document } from './supabase';

export async function submitApplication(
  applicationData: Omit<Application, 'id' | 'created_at' | 'status'>,
  resumeFile: File,
  coverLetterFile?: File
) {
  try {
    // 1. Create the application record
    const { data: application, error: applicationError } = await supabase
      .from('applications')
      .insert([{
        ...applicationData,
        status: 'pending'
      }])
      .select()
      .single();

    if (applicationError) throw applicationError;

    // 2. Upload resume file
    const resumePath = `${application.id}/resume/${resumeFile.name}`;
    const { error: resumeUploadError } = await supabase.storage
      .from('applications')
      .upload(resumePath, resumeFile);

    if (resumeUploadError) throw resumeUploadError;

    // 3. Create resume document record
    const { error: resumeDocError } = await supabase
      .from('documents')
      .insert([{
        application_id: application.id,
        file_path: resumePath,
        file_name: resumeFile.name,
        file_type: resumeFile.type,
        file_size: resumeFile.size,
        document_type: 'resume'
      }]);

    if (resumeDocError) throw resumeDocError;

    // 4. If cover letter exists, upload it
    if (coverLetterFile) {
      const coverLetterPath = `${application.id}/cover_letter/${coverLetterFile.name}`;
      const { error: coverLetterUploadError } = await supabase.storage
        .from('applications')
        .upload(coverLetterPath, coverLetterFile);

      if (coverLetterUploadError) throw coverLetterUploadError;

      // Create cover letter document record
      const { error: coverLetterDocError } = await supabase
        .from('documents')
        .insert([{
          application_id: application.id,
          file_path: coverLetterPath,
          file_name: coverLetterFile.name,
          file_type: coverLetterFile.type,
          file_size: coverLetterFile.size,
          document_type: 'cover_letter'
        }]);

      if (coverLetterDocError) throw coverLetterDocError;
    }

    return { success: true, application };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false, error };
  }
}
