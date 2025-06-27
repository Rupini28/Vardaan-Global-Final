# Firebase Setup Guide for VG Website Contact Form

## 🚀 Quick Setup Steps

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "vg-website-contact")
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Enable Firestore Database
1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### Step 3: Get Firebase Configuration
1. In Firebase Console, click the gear icon (⚙️) → "Project settings"
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web" (</> icon)
4. Enter app nickname: "VG Website"
5. Click "Register app"
6. Copy the Firebase configuration object

### Step 4: Update Your Firebase Configuration
1. Open `VG Website/backend/firebase.js`
2. Replace the placeholder config with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id",
  measurementId: "your-actual-measurement-id"
};
```

### Step 5: Test the Integration
1. Start your React development server:
   ```bash
   npm start
   ```
2. Navigate to the Contact Us page
3. Fill out the contact form and submit
4. Check Firebase Console → Firestore Database
5. You should see a new document in the "contacts" collection

## 📊 Viewing Submitted Data

After successful setup, you can view form submissions in Firebase Console:

1. Go to Firebase Console
2. Select your project  
3. Click "Firestore Database" in the left sidebar
4. Click on "contacts" collection
5. You'll see all submitted contact forms with:
   - Name, email, subject, phone numbers
   - Timestamp of submission
   - Status (new)
   - Source (website_contact_form)

## 🔒 Security Rules (Production)

For production deployment, update your Firestore security rules:

1. In Firebase Console, go to "Firestore Database"
2. Click "Rules" tab
3. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if false;
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

4. Click "Publish"

## 🐛 Troubleshooting

### Common Issues:

1. **"Firebase not initialized" error**
   - Make sure you've updated the Firebase config in `backend/firebase.js`
   - Check that all config values are correct

2. **"Permission denied" error**
   - Ensure Firestore is set to "test mode" or update security rules
   - Check that you're using the correct project ID

3. **Form not submitting**
   - Check browser console for error messages
   - Verify Firebase project is active
   - Ensure internet connection is stable

4. **Import errors**
   - Make sure Firebase is installed: `npm install firebase`
   - Check that import paths are correct in your components

### Success Indicators:
- ✅ Form submits without errors
- ✅ Success dialog appears
- ✅ New document appears in Firestore "contacts" collection
- ✅ Console shows "Contact form submitted successfully with ID: [document-id]"

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Firebase configuration
3. Ensure Firestore rules allow writes
4. Test with a simple form submission

## 🎯 Next Steps

After successful setup, you can:
1. Set up email notifications for new submissions
2. Create an admin panel to view submissions
3. Add more form validation
4. Set up automated responses
5. Export submissions to CSV/Excel

Your contact form is now connected to Firebase and ready to collect submissions! 🎉 