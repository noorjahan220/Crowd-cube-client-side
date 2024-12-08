# Crowdcube: A Crowdfunding Application 🌐

*Live Site URL*: [https://your-site-link.com](https://your-site-link.com)  
This is a crowdfunding platform where users can raise money for various projects, ideas, or causes.

## 🚀 Features:

- *User Authentication*: Users can log in and register using email/password or third-party services like Google/GitHub.
- *Campaign Management*: Users can add, update, or delete their own campaigns. They can also donate to campaigns.
- *Responsive Design*: The site is fully responsive, optimized for mobile, tablet, and desktop views.
- *Running Campaigns*: Display of active campaigns with details and a "Donate" button.
- *Toast Notifications*: Success and error messages are shown via toast notifications for better UX.

## 📱 Pages and Routes:

### 1. *Home Page* 🏠
   - Contains a banner/slider with at least 3 slides
   - Displays a list of 6 running campaigns
   - Includes 2 extra sections for additional content
   - Responsive design for all devices

### 2. *All Campaigns Page* 📊
   - Shows all campaigns created by users
   - Includes a "See More" button that redirects to the campaign details page

### 3. *Add New Campaign Page* ➕
   - A private route where logged-in users can create new campaigns
   - Includes fields for image, title, type, description, donation amount, and deadline

### 4. *Campaign Details Page* 📝
   - Displays detailed information about the campaign
   - Includes a "Donate" button for making contributions

### 5. *My Campaigns Page* 👤
   - A private route where users can see their own campaigns
   - Allows updating or deleting campaigns

### 6. *Update Campaign Page* 🔄
   - A private route where users can update their campaigns

## 🔐 Authentication:
   - Login and Register using email/password or Google/GitHub
   - After successful login, users are redirected to their dashboard or home page
   - Password requirements for registration: 
     - Must include at least one uppercase letter
     - Must include at least one lowercase letter
     - Must be at least 6 characters long

## 🌍 Deployment:
   - *Client Side*: Hosted on Netlify/Surge/Firebase
   - *Server Side*: Hosted on Vercel
   - *Firebase*: Used for authentication and storing campaign data
   - *MongoDB*: Used for storing user and campaign information

## 🛠 Technologies Used:
   - *Frontend*: React.js, React Router, React Hook Form, TailwindCSS
   - *Backend*: Node.js, Express, MongoDB, Firebase Authentication
   - *Third-Party APIs*: Firebase (authentication), Google & GitHub login
   - *Hosting*: Netlify (client-side), Vercel (server-side)

## 💻 Installation:
   1. Clone the repository:  
      git clone https://github.com/your-username/crowdcube.git
   2. Navigate to the client and server directories and install dependencies:
      - cd client && npm install
      - cd server && npm install
   3. Set up Firebase and MongoDB configurations as environment variables.
   4. Start the client and server:
      - npm start for both client and server

## ⚠ Important Notes:
   - Make sure to use environment variables to protect Firebase and MongoDB credentials.
   - Ensure that your application is responsive across all devices.
   - Don't use Lorem Ipsum text; instead, fill your site with meaningful content.
   - The Add New Campaign, My Campaign, and Donate features are private routes and require user authentication.

## 🔗 Links:
   - *GitHub Repository*: [https://github.com/your-username/crowdcube](https://github.com/your-username/crowdcube)
   - *Live Site*: [https://your-site-link.com](https://your-site-link.com)








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
