// Contact form service for Firebase Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

// Collection name for contact form submissions
const CONTACTS_COLLECTION = 'contacts';

// Form validation utilities
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const sanitizeString = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
};

const validateContactForm = (formData) => {
  const errors = [];
  
  if (!formData.name || formData.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!formData.email || formData.email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
    errors.push('Please enter a valid phone number');
  }
  
  if (formData.phone && !isValidPhoneNumber(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  if (formData.name && formData.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  if (formData.email && formData.email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }
  
  if (formData.subject && formData.subject.length > 1000) {
    errors.push('Subject must be less than 1000 characters');
  }
  
  if (formData.message && formData.message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
};

const cleanFormData = (formData) => {
  return {
    name: sanitizeString(formData.name),
    email: sanitizeString(formData.email).toLowerCase(),
    subject: sanitizeString(formData.subject),
    additionalSubject: sanitizeString(formData.additionalSubject),
    phoneNumber: sanitizeString(formData.phoneNumber),
    phone: sanitizeString(formData.phone),
    message: sanitizeString(formData.message)
  };
};

/**
 * Submit contact form data to Firestore
 * @param {Object} formData - The contact form data
 * @returns {Promise<string>} - Document ID of the created record
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    // Clean and prepare data for Firestore
    const cleanedData = cleanFormData(formData);
    
    // Check if Firebase is configured (basic check)
    if (!db || !db._delegate) {
      throw new Error('Firebase is not properly configured. Please set up your Firebase configuration.');
    }

    const contactData = {
      ...cleanedData,
      // Add server timestamp
      createdAt: serverTimestamp(),
      // Add status for tracking
      status: 'new',
      // Add source information
      source: 'website_contact_form',
      // Add user agent if available
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
    };

    // Add document to Firestore
    const docRef = await addDoc(collection(db, CONTACTS_COLLECTION), contactData);
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // If Firebase is not configured, provide a fallback
    if (error.message.includes('not properly configured') || 
        error.message.includes('your-api-key-here') || 
        error.message.includes('your-project-id')) {
      
      console.log('=== FORM SUBMISSION (Firebase not configured) ===');
      console.log('Form Data:', formData);
      console.log('Timestamp:', new Date().toISOString());
      console.log('=============================================');
      
      // Simulate successful submission
      return 'temp-' + Date.now();
    }
    
    throw new Error(`Failed to submit contact form: ${error.message}`);
  }
};

/**
 * Submit service inquiry form data to Firestore
 */
export const submitServiceInquiry = async (formData) => {
  try {
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    const cleanedData = cleanFormData(formData);
    const inquiryData = {
      ...cleanedData,
      createdAt: serverTimestamp(),
      status: 'new',
      source: 'website_service_inquiry'
    };

    const docRef = await addDoc(collection(db, 'service_inquiries'), inquiryData);
    console.log('Service inquiry submitted successfully with ID:', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('Error submitting service inquiry:', error);
    throw new Error(`Failed to submit service inquiry: ${error.message}`);
  }
};

/**
 * Submit training inquiry form data to Firestore
 */
export const submitTrainingInquiry = async (formData) => {
  try {
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    const cleanedData = cleanFormData(formData);
    const inquiryData = {
      ...cleanedData,
      createdAt: serverTimestamp(),
      status: 'new',
      source: 'website_training_inquiry'
    };

    const docRef = await addDoc(collection(db, 'training_inquiries'), inquiryData);
    console.log('Training inquiry submitted successfully with ID:', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('Error submitting training inquiry:', error);
    throw new Error(`Failed to submit training inquiry: ${error.message}`);
  }
}; 