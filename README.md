# Job Application Web App

A lightweight web application built with React, TypeScript, and Tailwind CSS for candidates to submit job applications.

## Project Setup

### Prerequisites
- Node.js (v22.18.0 or higher)
- npm (comes with Node.js)

### Technologies Used
- React with TypeScript
- Vite (Build tool)
- Tailwind CSS (Styling)

### Step-by-Step Setup Guide

1. **Create Vite Project**
```bash
# Create a new project with Vite and React + TypeScript template
npx create-vite@latest . --template react-ts
```

2. **Install Dependencies**
```bash
# Install base project dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss
```

3. **Configure Tailwind CSS**

Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
```

4. **Set up CSS**

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Create Job Application Form**

Created a form component in `src/components/JobApplicationForm.tsx` with the following fields:
- Full Name
- Email Address
- Phone Number
- Resume Upload
- Cover Letter

6. **Update App Component**

Modified `src/App.tsx` to use the job application form:
```typescript
import JobApplicationForm from './components/JobApplicationForm'

function App() {
  return (
    <div>
      <JobApplicationForm />
    </div>
  );
}

export default App;
```

## Project Structure
```
job_app/
├── src/
│   ├── components/
│   │   └── JobApplicationForm.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Features
- Modern React with TypeScript for type safety
- Responsive design with Tailwind CSS
- Form validation for required fields
- File upload support for resumes
- Clean and intuitive user interface

## Running the Application

1. **Start Development Server**
```bash
npm run dev
```

2. **Access the Application**
Open your browser and navigate to:
- http://localhost:5173 (or)
- http://localhost:5174 (if 5173 is in use) (or)
- http://localhost:5175 (if both above ports are in use)

## Development Notes
- The application uses Vite's built-in PostCSS support
- Tailwind CSS is configured with minimal setup for optimal performance
- Form component uses React's controlled components pattern
- File upload supports PDF and DOC/DOCX formats

## Next Steps
Potential improvements that can be added:
1. Form submission handling
2. Success/Error messages
3. Form validation enhancements
4. Backend integration
5. Email notifications
6. Adding more form fields as needed
