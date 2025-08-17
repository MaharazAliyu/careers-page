import './App.css'
import JobApplicationForm from './components/JobApplicationForm'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white/20 z-0" />
        <header className="relative z-10">
          <nav className="container mx-auto px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-900">
              Consulate General of Nigeria Dubai
            </h1>
          </nav>
          <div className="container mx-auto px-4 pt-16 pb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-emerald-700 max-w-2xl mx-auto mb-12">
              Be part of a dynamic team dedicated to serving the Nigerian community and fostering international relations
            </p>
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full
                       text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Apply Now
            </button>
          </div>
        </header>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
              <p className="text-emerald-900">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <p className="text-emerald-900">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10000+</div>
              <p className="text-emerald-900">Services Provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-emerald-900 text-center mb-16">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-sm
                            group-hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Global Impact</h3>
                <p className="text-emerald-700">Make a meaningful difference in international relations and community service.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-sm
                            group-hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Career Growth</h3>
                <p className="text-emerald-700">Excellent opportunities for professional development and advancement.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-sm
                            group-hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Dynamic Environment</h3>
                <p className="text-emerald-700">Work in a multicultural setting with diverse and talented professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-emerald-900 text-center mb-16">
            Start Your Journey With Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <JobApplicationForm selectedJob="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-emerald-900">&copy; 2024 Consulate General of Nigeria Dubai. All rights reserved.</p>
            <p className="mt-2 text-emerald-600">For inquiries: careers@consulnigeria.ae</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
