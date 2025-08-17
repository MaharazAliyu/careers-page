import { useState, useEffect, useMemo } from 'react';
import type { FormEvent } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

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

interface JobApplicationFormProps {
  selectedJob: string;
}

export default function JobApplicationForm({ selectedJob }: JobApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    position: selectedJob,
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
  const countries = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, position: selectedJob }));
  }, [selectedJob]);

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
    }

    if (!formData.nationality) {
      newErrors.nationality = 'Nationality is required';
    }

    if (!formData.education.trim()) {
      newErrors.education = 'Education is required';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    // Cover letter is optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    if (validateForm()) {
      try {
        // Simulated API call
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
    <div className="max-w-xl mx-auto">
      <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl border border-green-100 backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Form</h2>
            <p className="text-gray-600">Please fill out all required fields</p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg text-center">
              <p className="text-green-800">Thank you for your application! We will contact you soon.</p>
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-center">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-center ${
                errors.fullName ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-center">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-center ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-center">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-center ${
                errors.phone ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 text-center">
              Nationality *
            </label>
            <Select
              id="nationality"
              options={countries}
              value={countries.find(country => country.value === formData.nationality)}
              onChange={(option: any) => setFormData({ ...formData, nationality: option?.value || '' })}
              className="mt-1"
              classNames={{
                control: (state) => 
                  `rounded-md shadow-sm ${errors.nationality ? 'border-red-300' : 'border-gray-300'} 
                  focus:ring-green-500 focus:border-green-500`
              }}
            />
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.nationality}</p>
            )}
          </div>

          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 text-center">
              Highest Education Qualification *
            </label>
            <input
              type="text"
              id="education"
              required
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-center ${
                errors.education ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            />
            {errors.education && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.education}</p>
            )}
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 text-center">
              Resume/CV *
            </label>
            <input
              type="file"
              id="resume"
              required
              accept=".pdf,.doc,.docx"
              className={`mt-1 block w-full text-center ${
                errors.resume ? 'text-red-600' : 'text-gray-600'
              }`}
              onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
            />
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600 text-center">{errors.resume}</p>
            )}
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 text-center">
              Cover Letter <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              id="coverLetter"
              rows={4}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-center ${
                errors.coverLetter ? 'border-red-300' : 'border-gray-300'
              }`}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              placeholder="Please describe why you would be a good fit for this position..."
            />
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
