/**
 * Type definitions for website constants
 */

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactInfo {
  EMAIL: string;
  SUPPORT_EMAIL: string;
  BUSINESS_EMAIL: string;
  ADDRESS: {
    STREET: string;
    CITY: string;
    STATE: string;
    ZIP: string;
    COUNTRY: string;
  };
  PHONE: {
    PRIMARY: string;
    BUSINESS: string;
  };
}

export interface SocialMediaLinks {
  LINKEDIN: string;
  GITHUB: string;
  TWITTER: string;
  INSTAGRAM: string;
  HANDLES: {
    TWITTER: string;
    INSTAGRAM: string;
    GITHUB: string;
  };
}

export interface WebsiteMetadata {
  NAME: string;
  DOMAIN: string;
  URL: string;
  DESCRIPTION: string;
  TAGLINE: string;
  META: {
    TITLE_TEMPLATE: string;
    DEFAULT_TITLE: string;
    KEYWORDS: string[];
    AUTHOR: string;
    LANGUAGE: string;
  };
}

export interface BusinessInfo {
  LEGAL_NAME: string;
  REGISTRATION_NUMBER: string;
  TAX_ID: string;
  HOURS: {
    TIMEZONE: string;
    BUSINESS_DAYS: string[];
    BUSINESS_HOURS: string;
  };
  SERVICES: string[];
}

export interface TechnicalConfig {
  API: {
    BASE_URL: string;
    LOCAL_URL: string;
    VERSION: string;
  };
  ANALYTICS: {
    GOOGLE_ANALYTICS_ID: string;
  };
  FEATURES: {
    CONTACT_FORM: boolean;
    NEWSLETTER: boolean;
    BLOG: boolean;
    PORTFOLIO: boolean;
  };
}

export interface LegalInfo {
  PRIVACY_POLICY_URL: string;
  TERMS_OF_SERVICE_URL: string;
  COOKIE_POLICY_URL: string;
  COPYRIGHT: {
    YEAR: number;
    OWNER: string;
    NOTICE: string;
  };
}

export interface NavigationConfig {
  MAIN: NavigationItem[];
  FOOTER: NavigationItem[];
}

export interface SiteConfig {
  WEBSITE: WebsiteMetadata;
  CONTACT: ContactInfo;
  SOCIAL_MEDIA: SocialMediaLinks;
  BUSINESS: BusinessInfo;
  TECHNICAL: TechnicalConfig;
  LEGAL: LegalInfo;
  NAVIGATION: NavigationConfig;
}
