# Firebase Backend Setup for VG Website

This backend folder contains Firebase configuration and services for the VG Website contact forms.

## Setup Instructions

### 1. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Firestore Database:
   - Go to "Firestore Database" in the left sidebar
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location for your database

### 2. Get Firebase Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web" (</>)
4. Register your app with a name (e.g., "VG Website")
5. Copy the Firebase configuration object

### 3. Update Firebase Configuration
1. Open `backend/firebase.js`
2. Replace the placeholder values in `firebaseConfig` with your actual Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-actual-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-actual-messaging-sender-id",
     appId: "your-actual-app-id",
     measurementId: "your-actual-measurement-id"
   };
   ```

### 4. Firestore Collections
The following collections will be created automatically when forms are submitted:
- `contacts` - Contact form submissions
- `service_inquiries` - Service inquiry form submissions  
- `training_inquiries` - Training inquiry form submissions

### 5. Firestore Security Rules (Optional)
For production, update your Firestore security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access for contact forms
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if false; // Only allow creation from frontend
    }
    
    match /service_inquiries/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    match /training_inquiries/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## Usage

The backend services are imported and used in the React components:

```javascript
import { submitContactForm } from '../backend/contactService.js';

// In your form submit handler
const handleSubmit = async (formData) => {
  try {
    const docId = await submitContactForm(formData);
    console.log('Form submitted successfully with ID:', docId);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

## Data Structure

### Contact Form Data Structure
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  subject: "General inquiry message",
  additionalSubject: "Meeting Request",
  phoneNumber: "+1234567890",
  phone: "+1234567890",
  message: "Additional message content",
  createdAt: "2024-01-01T12:00:00Z", // Server timestamp
  status: "new",
  source: "website_contact_form"
}
```

## Environment Variables (Optional)
For added security, you can store Firebase config in environment variables:

1. Create `.env` file in project root
2. Add Firebase config:
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

3. Update `firebase.js` to use environment variables:
   ```javascript
   const firebaseConfig = {
     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     // ... other config values
   };
   ```

## Testing

To test the Firebase integration:
1. Fill out the contact form on your website
2. Check the Firebase Console > Firestore Database
3. You should see a new document in the `contacts` collection
4. The document should contain all the form data with a timestamp 