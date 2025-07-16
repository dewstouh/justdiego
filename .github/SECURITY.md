# Security Policy

## Supported Versions

We actively support the following versions of justdiego.com with security updates:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

We take the security of justdiego.com seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security vulnerabilities by:

1. **Email**: Send details to `security@justdiego.com`
2. **Subject Line**: Include "SECURITY VULNERABILITY" in the subject
3. **Include**: 
   - Detailed description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Any suggested fixes (if available)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Initial Assessment**: We will provide an initial assessment within 5 business days
- **Regular Updates**: We will keep you informed of our progress
- **Resolution Timeline**: We aim to resolve critical vulnerabilities within 30 days

### Responsible Disclosure

We follow responsible disclosure practices:

- We will work with you to understand and resolve the issue
- We will credit you for the discovery (unless you prefer to remain anonymous)
- We request that you do not publicly disclose the vulnerability until we have had a chance to address it

## Security Best Practices

### For Contributors

- Keep dependencies up to date
- Follow secure coding practices
- Use environment variables for sensitive data
- Validate all user inputs
- Use HTTPS for all communications
- Implement proper authentication and authorization

### For Users

- Keep your browser updated
- Use strong, unique passwords
- Be cautious with personal information
- Report suspicious activity

## Security Measures

### Current Security Implementations

- **HTTPS Enforcement**: All traffic is encrypted
- **Input Validation**: All user inputs are validated and sanitized
- **Environment Variables**: Sensitive data is stored in environment variables
- **Dependency Scanning**: Regular automated dependency vulnerability scanning
- **Access Controls**: Proper authentication and authorization mechanisms

### Security Headers

We implement the following security headers:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Vulnerability Disclosure Timeline

1. **Day 0**: Vulnerability reported
2. **Day 1-2**: Acknowledgment sent
3. **Day 3-5**: Initial assessment and triage
4. **Day 6-30**: Investigation and fix development
5. **Day 30+**: Fix deployment and public disclosure (if applicable)

## Scope

This security policy applies to:

- The main justdiego.com website
- All subdomains of justdiego.com
- Associated APIs and services
- The codebase in this repository

### Out of Scope

The following are typically out of scope:

- Third-party services we use but don't control
- Issues requiring physical access to servers
- Social engineering attacks
- Denial of service attacks

## Security Contact

For security-related questions or concerns:

- **Email**: security@justdiego.com
- **Response Time**: Within 48 hours during business days

## Hall of Fame

We recognize security researchers who help us improve our security:

*No vulnerabilities reported yet - be the first!*

## Updates to This Policy

This security policy may be updated from time to time. Please check back regularly for the latest version.

---

**Last Updated**: July 13, 2025
**Version**: 1.0
