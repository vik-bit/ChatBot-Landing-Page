ChatBot AI - Landing Page
A modern, responsive landing page for the ChatBot AI product built with Next.js and ShadCN UI components. This project features a clean and professional UI with navigation, buttons, and dynamic content sections like features, pricing, and more.

🚀 Features
Responsive Design: Fully responsive layout optimized for all devices (desktop, tablet, mobile).
ShadCN UI Components: Uses ShadCN for styled UI elements like buttons and dropdown menus.
Navigation Menu: Sticky navbar with dynamic navigation links.
Login and Sign Up: Includes Log In and Sign Up buttons with route management.
Chatbox: Placeholder for a mock chatbot interaction.
📦 Prerequisites
To run this project locally, ensure you have the following installed:

Node.js (v16 or later)
npm (v8 or later)
🛠️ Setup & Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/chatbot-ai-landing-page.git
cd chatbot-ai-landing-page
2. Install Dependencies
Run the following command to install all required dependencies:

bash
Copy code
npm install
3. Start the Development Server
Start the local development server with the command:

bash
Copy code
npm run dev
Now, open your browser and go to http://localhost:3000 to see the landing page.

🖥️ Project Structure
bash
Copy code
chatbot-ai-landing-page/
├── components/          # React components (buttons, navbar, etc.)
├── pages/               # Next.js pages (e.g. /, /login, /signup, etc.)
├── public/              # Static assets (images, fonts, etc.)
├── styles/              # Global styles (Tailwind CSS)
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
🎨 Styling
This project uses Tailwind CSS for styling and ShadCN UI for UI components. Tailwind provides a utility-first CSS framework that allows you to quickly build custom designs.

1. Tailwind CSS Setup
Tailwind CSS is already set up in this project. If you'd like to make any changes to the Tailwind setup, you can update the tailwind.config.js file.

2. ShadCN UI Components
ShadCN UI components are used for building reusable UI elements like buttons, navigation menus, dropdowns, etc. You can find more about ShadCN UI here: ShadCN UI Docs.

🔧 Customization
You can customize the following sections:

Navbar: Change the logo, navigation items, and buttons.
Features Section: Modify the Features section with your own content and styling.
Pricing Section: Update the pricing plans as needed.
About Section: Customize the "About Us" content with your company details.
Chatbox: Integrate an actual chatbot API or keep it as a placeholder.
💡 Future Improvements
Integrate a real chatbot for the Chat section.
Add a contact form or newsletter signup.
Enhance SEO with custom metadata and page optimizations.
Implement analytics (e.g., Google Analytics).
