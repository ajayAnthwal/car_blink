import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | CarBlink",
  description: "Terms and Conditions for CarBlink",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-4">Terms & Conditions</h1>
        <p className="text-neutral-text-muted mb-4 text-sm md:text-base">Effective Date: 05/08/2026</p>
        <p className="font-body text-neutral-text-dark mb-8">
          Welcome to CarBlink. By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree with these Terms, please do not use the Platform.
        </p>

        <div className="space-y-8 font-body text-neutral-text-dark leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">1. About CarBlink</h2>
            <p>
              CarBlink is a technology platform that helps customers compare, book, and manage automotive services through verified service partners such as workshops, detailing studios, battery dealers, tyre shops, and other automotive service providers.
            </p>
            <p className="mt-2">
              CarBlink is not the direct provider of all services listed on the Platform. Services are performed by independent verified partners.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">2. User Eligibility</h2>
            <p className="mb-2">To use CarBlink, you must:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Be at least 18 years of age.</li>
              <li>Provide accurate and complete information.</li>
              <li>Use the Platform only for lawful purposes.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">3. Booking Services</h2>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Customers can request quotations from multiple verified partners.</li>
              <li>Booking confirmation is subject to partner availability.</li>
              <li>Prices, timelines, and service details may vary depending on the selected partner and vehicle condition.</li>
              <li>CarBlink reserves the right to refuse or cancel bookings in exceptional circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">4. Payments</h2>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Payments may be collected through CarBlink or directly through approved payment methods available on the Platform.</li>
              <li>Payment terms will be displayed before confirming the booking.</li>
              <li>Where applicable, CarBlink may facilitate payment settlement between the customer and the service partner according to its Payment & Settlement Policy.</li>
              <li>Applicable taxes, including GST, may be charged where required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">5. Customer Responsibilities</h2>
            <p className="mb-2">Customers agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Provide accurate vehicle information.</li>
              <li>Ensure the vehicle is legally owned or authorized for service.</li>
              <li>Be available at the scheduled service time.</li>
              <li>Inspect the vehicle before accepting delivery.</li>
              <li>Report any concerns promptly through CarBlink Support.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">6. Partner Responsibilities</h2>
            <p className="mb-2">Verified partners are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Delivering services professionally.</li>
              <li>Following applicable laws and safety standards.</li>
              <li>Providing accurate quotations.</li>
              <li>Issuing valid invoices where applicable.</li>
              <li>Maintaining service quality.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">7. Pricing</h2>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Prices shown on the Platform may be estimates or average market prices unless stated otherwise.</li>
              <li>Final pricing may vary depending on vehicle condition, service scope, additional work approved by the customer, or partner assessment.</li>
              <li>No additional work should be performed without customer approval.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">8. Cancellation</h2>
            <p>Customers and partners may cancel bookings subject to the CarBlink Refund & Cancellation Policy.</p>
            <p className="mt-2">Applicable cancellation charges, if any, will be communicated before confirmation.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">9. Customer Satisfaction</h2>
            <p>Customers are encouraged to inspect the completed service before confirming satisfaction.</p>
            <p className="mt-2">Where applicable, confirmation of service completion may be used as part of CarBlink's service completion and payment workflow.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">10. Warranty</h2>
            <p>Any warranty on services or products is provided by the respective service partner unless explicitly stated otherwise.</p>
            <p className="mt-2">CarBlink does not independently provide product or service warranties.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">11. Limitation of Liability</h2>
            <p className="mb-2">CarBlink acts as a technology platform connecting customers with verified service partners. To the maximum extent permitted by law, CarBlink shall not be liable for:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Service defects caused by the partner.</li>
              <li>Delays beyond reasonable control.</li>
              <li>Manufacturer defects.</li>
              <li>Third-party actions.</li>
              <li>Indirect or consequential losses.</li>
            </ul>
            <p>Nothing in these Terms excludes liability that cannot legally be excluded.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">12. User Conduct</h2>
            <p className="mb-2">Users must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Provide false information.</li>
              <li>Misuse the Platform.</li>
              <li>Attempt unauthorized access.</li>
              <li>Upload harmful content.</li>
              <li>Violate applicable laws.</li>
              <li>Interfere with Platform operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">13. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, designs, software, and branding displayed on CarBlink are owned by or licensed to CarBlink and may not be copied or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">14. Privacy</h2>
            <p>
              Use of the Platform is also governed by our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">15. Changes to Terms</h2>
            <p>
              CarBlink may update these Terms from time to time. The updated version will become effective upon publication on the Platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">16. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts where CarBlink's registered office is located, unless otherwise required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">17. Contact Us</h2>
            <p>CarBlink</p>
            <p>Email: support@carblink.in (replace with your official email)</p>
            <p>Website: www.carblink.in (replace if required)</p>
            <p>Registered Office: [Add Registered Office Address]</p>
          </section>
        </div>
      </div>
    </main>
  );
}
