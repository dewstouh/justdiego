/**
 * Contact information constants
 */

export const CONTACT = {
  /**
   * Primary contact information
   */
  EMAIL: 'contact@justdiego.com',
  SUPPORT_EMAIL: 'support@justdiego.com',
  BUSINESS_EMAIL: 'business@justdiego.com',
  
  /**
   * Physical address (if applicable)
   */
  ADDRESS: {
    STREET: '',
    CITY: '',
    STATE: '',
    ZIP: '',
    COUNTRY: '',
  },
  
  /**
   * Phone numbers
   */
  PHONE: {
    PRIMARY: '',
    BUSINESS: '',
  },
} as const;
