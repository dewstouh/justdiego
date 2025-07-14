/**
 * Business information and configuration constants
 */

export const BUSINESS = {
  /**
   * Legal business information
   */
  LEGAL_NAME: 'Just Diego',
  REGISTRATION_NUMBER: '',
  TAX_ID: '',
  
  /**
   * Business hours
   */
  HOURS: {
    TIMEZONE: 'UTC',
    BUSINESS_DAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    BUSINESS_HOURS: '9:00 AM - 6:00 PM',
  },
} as const;
