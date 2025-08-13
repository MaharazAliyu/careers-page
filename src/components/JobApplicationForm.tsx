import { useState, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  position: string;
  experience: string;
  education: string;
  resume: File | null;
  coverLetter: string;
  passportNumber: string;
  visaStatus: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  nationality?: string;
  position?: string;
  experience?: string;
  education?: string;
  resume?: string;
  coverLetter?: string;
  passportNumber?: string;
  visaStatus?: string;
}

export default function JobApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    position: '',
    experience: '',
    education: '',
    resume: null,
    coverLetter: '',
    passportNumber: '',
    visaStatus: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          nationality: '',
          position: '',
          experience: '',
          education: '',
          resume: null,
          coverLetter: '',
          passportNumber: '',
          visaStatus: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl border border-green-100 backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-900 animate-fade-in">Employment Application Form</h2>
          <p className="text-gray-600 mt-2 text-center animate-slide-up">Please fill out all the required fields marked with an asterisk (*)</p>
        </div>
        
        {submitSuccess && (
          <div className="mb-6 p-6 bg-green-50 border border-green-400 rounded-lg shadow-md animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce-in">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-green-800 text-center mb-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-green-700 text-center">
              Thank you for your interest in joining the Consulate General of Nigeria Dubai.
              We will review your application and contact you soon.
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.fullName ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.phone ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume (PDF, DOC, or DOCX)
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              required
              className={`mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100 ${
                  errors.resume ? 'border-red-300' : 'border-gray-300'
                }`}
              onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
            />
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                Nationality *
              </label>
              <input
                type="text"
                id="nationality"
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                  errors.nationality ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              />
              {errors.nationality && (
                <p className="mt-1 text-sm text-red-600">{errors.nationality}</p>
              )}
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position Applied For *
              </label>
              <input
                type="text"
                id="position"
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                  errors.position ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-600">{errors.position}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">
                Passport Number *
              </label>
              <input
                type="text"
                id="passportNumber"
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                  errors.passportNumber ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.passportNumber}
                onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
              />
              {errors.passportNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.passportNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="visaStatus" className="block text-sm font-medium text-gray-700">
                UAE Visa Status *
              </label>
              <select
                id="visaStatus"
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                  errors.visaStatus ? 'border-red-300' : 'border-gray-300'
                }`}
                value={formData.visaStatus}
                onChange={(e) => setFormData({ ...formData, visaStatus: e.target.value })}
              >
                <option value="">Select Visa Status</option>
                <option value="resident">UAE Resident</option>
                <option value="tourist">Tourist Visa</option>
                <option value="visit">Visit Visa</option>
                <option value="none">No UAE Visa</option>
              </select>
              {errors.visaStatus && (
                <p className="mt-1 text-sm text-red-600">{errors.visaStatus}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Years of Relevant Experience *
            </label>
            <input
              type="text"
              id="experience"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                errors.experience ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700">
              Highest Education Qualification *
            </label>
            <input
              type="text"
              id="education"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                errors.education ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            />
            {errors.education && (
              <p className="mt-1 text-sm text-red-600">{errors.education}</p>
            )}
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
              Cover Letter *
            </label>
            <textarea
              id="coverLetter"
              rows={4}
              required
              placeholder="Please describe why you would be a good fit for this position..."
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
                errors.coverLetter ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
            {errors.coverLetter && (
              <p className="mt-1 text-sm text-red-600">{errors.coverLetter}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white 
                ${isSubmitting 
                  ? 'bg-green-400 cursor-not-allowed' 
                  : 'bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-all duration-200 hover:scale-[1.02]'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
