export const metadata = {
  title: "Privacy Policy",
  description: "Venus Privacy Policy",
};

const styles = `
  body.docs-page {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", ui-sans-serif, system-ui, sans-serif;
    line-height: 1.7;
    color: #d4d4d8; /* zinc-300 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.01em;
  }
  .docs-page h1 { 
    color: #ffffff; 
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .docs-page h2 { 
    color: #ffffff; 
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  .docs-page h3 { 
    color: #e4e4e7; 
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .docs-page p {
    color: #a1a1aa; /* zinc-400 */
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  .docs-page ul, .docs-page ol {
    color: #a1a1aa;
    line-height: 1.7;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  .docs-page li {
    margin-bottom: 0.5rem;
  }
  .docs-page strong {
    color: #e4e4e7;
    font-weight: 600;
  }
  .docs-page .last-updated { 
    font-style: italic; 
    color: #71717a; /* zinc-500 */
    margin-bottom: 2rem;
    font-size: 0.9375rem;
  }
  .docs-page .important { 
    background-color: #18181b; /* zinc-900 */
    border: 1px solid #3f3f46; /* zinc-700 */
    padding: 1.5rem;
    border-radius: 12px;
    margin: 2rem 0;
  }
  .docs-page .important strong {
    color: #ffffff;
  }
  .docs-page .contact-info { 
    background-color: #18181b; /* zinc-900 */
    border: 1px solid #3f3f46; /* zinc-700 */
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 2rem;
  }
  .docs-page .contact-info a {
    color: #60a5fa; /* blue-400 */
    text-decoration: underline;
  }
  .docs-page .contact-info a:hover {
    color: #93c5fd; /* blue-300 */
  }
  .docs-page .data-table { 
    width: 100%; 
    border-collapse: collapse; 
    margin: 2rem 0; 
    border: 1px solid #3f3f46;
    border-radius: 8px;
    overflow: hidden;
  }
  .docs-page .data-table th, .docs-page .data-table td { 
    border: 1px solid #3f3f46; 
    padding: 1rem; 
    text-align: left;
  }
  .docs-page .data-table th { 
    background-color: #18181b;
    color: #ffffff;
    font-weight: 600;
  }
  .docs-page .data-table td {
    color: #a1a1aa;
  }
  .docs-page em {
    color: #71717a;
    font-style: italic;
  }
`;

const html = `
    <h1>Venus Privacy Policy</h1>
    <p class="last-updated">Last updated: October 18, 2025</p>
    <div class="important">
        <strong>Your Privacy Matters:</strong> This Privacy Policy explains how Venus collects, uses, and protects your personal information when you use our social media platform.
    </div>
    <h2>1. Information We Collect</h2>
    <h3>1.1 Information You Provide</h3>
    <p>We collect information you provide directly to us, including:</p>
    <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, profile photo</li>
        <li><strong>Content:</strong> Photos, videos, text posts, comments, messages</li>
        <li><strong>Property Listings:</strong> Property details, photos, contact information</li>
        <li><strong>Advertising:</strong> Ad content, targeting preferences, payment information</li>
        <li><strong>Communications:</strong> Messages sent through our platform</li>
    </ul>
    <h3>1.2 Information We Collect Automatically</h3>
    <p>When you use Venus, we automatically collect:</p>
    <ul>
        <li><strong>Usage Data:</strong> How you interact with content, features used, time spent</li>
        <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
        <li><strong>Location Data:</strong> General location (with your permission) for location-based features</li>
        <li><strong>Analytics Data:</strong> App performance, crash reports, user behavior patterns</li>
    </ul>
    <h3>1.3 Payment Information</h3>
    <p>For sponsored content and promotions, we collect:</p>
    <ul>
        <li><strong>Payment Details:</strong> Billing information processed through secure third-party payment processors (Stripe)</li>
        <li><strong>Transaction Records:</strong> Payment amounts, dates, and status</li>
        <li><strong>Financial Data:</strong> We do not store credit card information; this is handled by our payment processor</li>
    </ul>
    <h2>2. How We Use Your Information</h2>
    <table class="data-table">
        <tr>
            <th>Purpose</th>
            <th>Information Used</th>
            <th>Legal Basis</th>
        </tr>
        <tr>
            <td>Provide and maintain the Service</td>
            <td>Account info, content, device data</td>
            <td>Contract performance</td>
        </tr>
        <tr>
            <td>Process payments for ads/promotions</td>
            <td>Payment info, transaction data</td>
            <td>Contract performance</td>
        </tr>
        <tr>
            <td>Personalize your experience</td>
            <td>Usage data, preferences, location</td>
            <td>Legitimate interest</td>
        </tr>
        <tr>
            <td>Show relevant advertisements</td>
            <td>Usage data, interests, demographics</td>
            <td>Legitimate interest</td>
        </tr>
        <tr>
            <td>Communicate with you</td>
            <td>Contact info, messages</td>
            <td>Contract performance</td>
        </tr>
        <tr>
            <td>Ensure platform safety</td>
            <td>Content, usage patterns, reports</td>
            <td>Legitimate interest</td>
        </tr>
    </table>
    <h2>3. Information Sharing</h2>
    <h3>3.1 We Do Not Sell Your Personal Information</h3>
    <p>Venus does not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
    <h3>3.2 Information We Share</h3>
    <p>We may share your information in the following circumstances:</p>
    <ul>
        <li><strong>Public Content:</strong> Content you choose to make public (posts, comments, profile information)</li>
        <li><strong>Service Providers:</strong> Third-party services that help us operate Venus (analytics, payment processing, cloud storage)</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
        <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
    </ul>
    <h3>3.3 Third-Party Services</h3>
    <p>We use the following third-party services:</p>
    <ul>
        <li><strong>Firebase:</strong> Authentication, database, analytics</li>
        <li><strong>Stripe:</strong> Payment processing for sponsored content</li>
        <li><strong>Algolia:</strong> Search functionality</li>
        <li><strong>Apple:</strong> Sign in with Apple authentication</li>
    </ul>
    <h2>4. Data Security</h2>
    <p>We implement appropriate security measures to protect your information:</p>
    <ul>
        <li>Encryption of data in transit and at rest</li>
        <li>Secure authentication and access controls</li>
        <li>Regular security audits and updates</li>
        <li>Limited access to personal information on a need-to-know basis</li>
    </ul>
    <div class="important">
        <strong>Important:</strong> While we implement security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
    </div>
    <h2>5. Your Rights and Choices</h2>
    <h3>5.1 Account Controls</h3>
    <p>You can:</p>
    <ul>
        <li>Update your profile information in app settings</li>
        <li>Control who can see your content through privacy settings</li>
        <li>Delete your account and associated data</li>
        <li>Opt out of promotional communications</li>
    </ul>
    <h3>5.2 Data Rights</h3>
    <p>Depending on your location, you may have the right to:</p>
    <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Delete your personal information</li>
        <li>Port your data to another service</li>
        <li>Object to certain processing activities</li>
    </ul>
    <h2>6. Children's Privacy</h2>
    <p>Venus is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete it promptly.</p>
    <h2>7. International Users</h2>
    <p>If you are using Venus from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located.</p>
    <h2>8. Data Retention</h2>
    <p>We retain your information for as long as necessary to:</p>
    <ul>
        <li>Provide our services to you</li>
        <li>Comply with legal obligations</li>
        <li>Resolve disputes and enforce agreements</li>
    </ul>
    <p>When you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal or business purposes.</p>
    <h2>9. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
    <h2>10. Contact Us</h2>
    <div class="contact-info">
        <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
        <p>Email: privacy@venuslabs.net<br/>Website: https://venuslabs.net/</p>
        <p><strong>Analytics Disclosure:</strong> We use privacy-friendly, cookie-less analytics to measure basic usage and performance. No personal data is sold or used for cross-site tracking.</p>
    </div>
    <p><em>This Privacy Policy is effective as of the date listed above and applies to all information collected by Venus.</em></p>
`;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-medium tracking-tight text-white hover:text-blue-400 transition-colors">
            Venus
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="/#features" className="text-zinc-400 hover:text-blue-400 transition-colors font-medium">Features</a>
            <a href="/#about" className="text-zinc-400 hover:text-blue-400 transition-colors font-medium">About</a>
            <a href="/#contact" className="text-zinc-400 hover:text-blue-400 transition-colors font-medium">Contact</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="docs-page" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer className="border-t border-zinc-700 py-10 text-center text-sm text-zinc-300">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} Venus Technologies, Inc</span>
            <div className="flex items-center gap-4">
              <a className="text-zinc-300 hover:text-blue-400 hover:underline transition-colors" href="/privacy">Privacy</a>
              <a className="text-zinc-300 hover:text-blue-400 hover:underline transition-colors" href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


