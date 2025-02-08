<div align="center" style="padding-bottom: 30px;">
  <img src="./src/assets/LOGO.avif" alt="Neurona Logo" />
</div>

# Neurona Web Site

Neurona Group is a pioneering company in the development of advanced Artificial Intelligence (AI) solutions and specialized software. We offer consulting services in data protection based on the strictest international standards, such as HIPAA and GDPR, as well as technological solutions that enhance efficiency and accessibility in HealthTech. Our focus is on delivering responsible and secure AI, with a strong emphasis on innovation and regulatory compliance, improving the quality of healthcare and data management in the process.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Before you begin, make sure you have the following software and tools installed on your system.

1. [Node](https://nodejs.org/en/blog/release/v18.17.1) version 18 or later.
2. npm version 9 or later (Normally shipped with Node).
3. Port 3000 available.
4. [git](https://git-scm.com/) version 2.33 or later.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository to your local machine.

2. Navigate to the root folder.
   ```bash
   cd Neurona
   ```

3. Create an [EmailJS Account](https://www.emailjs.com/):

   These are the steps you need to follow for setting up EmailJS:

   - Go to [EmailJS](https://www.emailjs.com/).
   - **Sign Up Free**: Fill out the form with the email address that will receive the contact messages.
   - **Add New Service**:
     - Choose the service associated with the registered email.
     - Enter the credentials of your email account.
     - Click **Create Service**.
   - Navigate to **Email Templates**:
     - Click **Create New Template**.
     - The variables you can use in your template are:
       ```
       {{name}}
       {{lastName}}
       {{message}}
       {{email}}
       {{company}}
       ```
     - **Note**: In the 'To Email' field, ensure the email that will receive the messages is specified.
   - Make sure you have the following credentials ready:
     - **Service ID**
     - **Template ID**
     - **Public Key** (found in the Account section).

4. Inside the folder, there is a file called *.env.example*. Rename it to *.env* and update it with the credentials obtained from EmailJS:
   ```bash
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

5. Install project dependencies using npm.
   ```bash
   npm install
   ```

## Running the App

To start the development server, use the following command:

```bash
npm start
```

This will start the development server, and you can access the app in your web browser by visiting [http://localhost:3000](http://localhost:3000).
