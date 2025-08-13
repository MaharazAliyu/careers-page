import JobApplicationForm from './components/JobApplicationForm'

function App() {
  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <header className="bg-green-900 bg-opacity-90 text-white shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-bounce-in">
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                Consulate General of Nigeria Dubai
              </h1>
            </div>
            <div className="animate-slide-up">
              <p className="text-xl text-green-200 text-center">
                Join Our Team - Career Opportunities
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
        <div className="text-center mb-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">
            Job Application Portal
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="mt-2 text-gray-700 text-lg leading-relaxed">
              Thank you for your interest in joining the Consulate General of Nigeria Dubai.
              Please complete the form below with your details.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional Environment</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Competitive Benefits</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Career Growth</span>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-slide-up delay-300">
          <JobApplicationForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 bg-opacity-90 text-white mt-auto backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h3 className="text-lg font-semibold text-green-200">Contact Us</h3>
              <p className="mt-2 text-sm">Dubai, United Arab Emirates</p>
              <p className="text-sm">Email: careers@nigerianconsulatedubai.org</p>
            </div>
            <div className="text-center animate-fade-in">
              <p className="text-sm text-green-200">
                © {new Date().getFullYear()} Consulate General of Nigeria Dubai
                <br />All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right animate-fade-in">
              <h3 className="text-lg font-semibold text-green-200">Working Hours</h3>
              <p className="mt-2 text-sm">Monday - Friday</p>
              <p className="text-sm">9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
