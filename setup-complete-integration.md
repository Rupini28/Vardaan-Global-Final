# Complete Setup Guide: Firebase + EmailJS Integration

Your Contact Us form now includes **complete integration** with:
- ✅ **Firebase Firestore** - Saves form submissions to database
- ✅ **EmailJS** - Sends emails to Gmail and Outlook
- ✅ **Form validation** - Client-side validation
- ✅ **Success/Error handling** - User feedback

## 🔧 Configuration Required

### 1. Firebase Setup

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "vg-contact-form")
4. Enable Google Analytics (optional)
5. Click "Create project"

#### Step 2: Enable Firestore Database
1. In Firebase Console, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users
5. Click "Done"

#### Step 3: Get Firebase Configuration
1. In Firebase Console, click gear icon (⚙️) → "Project settings"
2. Scroll to "Your apps" section
3. Click "Add app" → select "Web" (</>)
4. Enter app nickname: "VG Website"
5. Copy the Firebase configuration object

#### Step 4: Update Firebase Configuration
Open `src/firebase-config.js` and replace:

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

### 2. EmailJS Setup

#### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Connect Email Services
**For Gmail:**
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Follow authentication process
5. Note the Service ID (should be similar to `service_x13f8yk`)

**For Outlook:**
1. Click "Add New Service" again
2. Select "Outlook"
3. Follow authentication process
4. Note the Service ID (should be similar to `service_qeqqcc4`)

#### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission: {{title}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via VG Website Contact Form
```

4. Note the Template ID (should be similar to `template_aj48ek6`)

#### Step 4: Get Public Key
1. Go to "Integration" in EmailJS dashboard
2. Copy your Public Key (should be similar to `flisNrOTBQ4pv0eSn`)

#### Step 5: Update Service Configuration
The current configuration in your Contact Us component:
- Gmail Service ID: `service_x13f8yk`
- Outlook Service ID: `service_qeqqcc4`
- Template ID: `template_aj48ek6`
- Public Key: `flisNrOTBQ4pv0eSn`

**Replace these with your actual IDs** in the `handleSubmit` function.

## 🎯 What Happens When Form is Submitted

1. **Validation** ✅ - Client-side validation of required fields
2. **Firestore Save** 📝 - Form data saved to `contacts` collection
3. **Gmail Email** 📧 - Email sent via your Gmail service
4. **Outlook Email** 📧 - Email sent via your Outlook service
5. **Success Modal** 🎉 - User sees success confirmation
6. **Form Reset** 🔄 - Form fields are cleared

## 📊 Data Structure Saved to Firestore

```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  subject: "General Inquiry",
  message: "User's message content"
}
```

## 🔒 Security Considerations

### Firebase Security Rules
Update your Firestore security rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### EmailJS Security
- Public Key is safe to expose in frontend code
- Service IDs and Template IDs are also safe to expose
- Never expose your EmailJS Private Key in frontend code

## 🧪 Testing the Integration

1. **Start your React app**: `npm start`
2. **Go to Contact Us page**
3. **Fill out the form** with test data
4. **Click Submit**
5. **Check results**:
   - Success modal should appear
   - Check Firebase Console → Firestore Database → `contacts` collection
   - Check your Gmail and Outlook for received emails

## 🔧 Troubleshooting

### Common Issues:

1. **"Firebase not configured" error**
   - Update `src/firebase-config.js` with your actual config
   
2. **"EmailJS failed" error**
   - Check your Service IDs, Template ID, and Public Key
   - Verify email services are connected in EmailJS dashboard
   
3. **Emails not received**
   - Check spam/junk folders
   - Verify template variables match form field names
   - Check EmailJS dashboard for usage limits

4. **Form submission hangs**
   - Check browser console for error messages
   - Verify internet connection
   - Check Firebase and EmailJS service status

## 📈 Current Configuration Summary

**Your form now uses:**
- **Firebase Project**: Update with your project details
- **Gmail Service**: `service_x13f8yk` (replace with yours)
- **Outlook Service**: `service_qeqqcc4` (replace with yours)  
- **Email Template**: `template_aj48ek6` (replace with yours)
- **Public Key**: `flisNrOTBQ4pv0eSn` (replace with yours)

## ✅ Setup Checklist

- [ ] Firebase project created and Firestore enabled
- [ ] Firebase configuration updated in `src/firebase-config.js`
- [ ] EmailJS account created
- [ ] Gmail service connected in EmailJS
- [ ] Outlook service connected in EmailJS
- [ ] Email template created in EmailJS
- [ ] Service IDs, Template ID, and Public Key updated in code
- [ ] Form tested with real submission
- [ ] Firestore data verified
- [ ] Emails received and verified

**Your Contact Us form is now fully integrated! 🚀** 