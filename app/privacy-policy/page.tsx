import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CarBlink",
  description: "Privacy Policy for CarBlink",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-4">Privacy Policy</h1>
        <p className="text-neutral-text-muted mb-8 text-sm md:text-base">Effective Date: [DD/MM/YYYY]</p>

        <div className="space-y-8 font-body text-neutral-text-dark leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">1. Introduction</h2>
            <p>
              Welcome to CarBlink. Your privacy is important to us. This Privacy Policy explains how CarBlink collects, uses, stores and protects your personal information when you use our website, mobile application or services.
              By using CarBlink, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Vehicle Details</li>
              <li>Service Requests</li>
              <li>Booking History</li>
              <li>Payment Information (processed through secure payment providers)</li>
              <li>Device and Browser Information</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Process bookings</li>
              <li>Connect you with verified service partners</li>
              <li>Manage payments</li>
              <li>Provide customer support</li>
              <li>Maintain your My Garage records</li>
              <li>Improve our services</li>
              <li>Send booking updates and important notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">4. Sharing of Information</h2>
            <p className="mb-2">We only share necessary information with:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Verified Service Partners</li>
              <li>Payment Gateway Providers</li>
              <li>Technology Service Providers</li>
              <li>Government authorities when legally required</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">5. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your information against unauthorized access, misuse or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">6. My Garage</h2>
            <p>
              CarBlink may store your vehicle service history, invoices and booking records within the My Garage feature for your convenience.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">7. Cookies</h2>
            <p>
              Our website may use cookies to improve your browsing experience and analyze website performance.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">8. Your Rights</h2>
            <p className="mb-2">You may:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Access your information</li>
              <li>Request corrections</li>
              <li>Request deletion of your account (subject to legal requirements)</li>
              <li>Contact us regarding your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be available on our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">10. Contact Us</h2>
            <p>CarBlink</p>
            <p>Email: support@carblink.in (replace with your official email)</p>
            <p>Website: https://carblink.in (replace if required)</p>
          </section>
        </div>
      </div>
    </main>
  );
}
