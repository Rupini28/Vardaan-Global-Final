// Form validation utilities
// This file contains validation functions for form data

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether phone number is valid
 */
export const isValidPhoneNumber = (phone) => {
  // Basic phone validation - allows various formats
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

/**
 * Sanitize string input
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeString = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, ''); // Basic XSS prevention
};

/**
 * Validate contact form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with errors array
 */
export const validateContactForm = (formData) => {
  const errors = [];
  
  // Required fields validation
  if (!formData.name || formData.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!formData.email || formData.email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Optional fields validation
  if (formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
    errors.push('Please enter a valid phone number');
  }
  
  if (formData.phone && !isValidPhoneNumber(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  // Length validation
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

/**
 * Clean and prepare form data for storage
 * @param {Object} formData - Raw form data
 * @returns {Object} - Cleaned form data
 */
export const cleanFormData = (formData) => {
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