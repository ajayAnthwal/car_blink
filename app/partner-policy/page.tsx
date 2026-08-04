import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Policy | CarBlink",
  description: "Partner Policy for CarBlink",
};

export default function PartnerPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-4">Partner Policy</h1>
        <p className="text-neutral-text-muted mb-4 text-sm md:text-base">Effective Date: [DD/MM/YYYY]</p>
        <p className="font-body text-neutral-text-dark mb-8">
          Welcome to CarBlink. This Partner Policy outlines the rules, responsibilities, and expectations for all workshops, detailing studios, service centres, and automotive businesses ("Partners") associated with the CarBlink Platform. By registering as a CarBlink Partner, you agree to comply with this Policy, the Partner Agreement, and all applicable laws.
        </p>

        <div className="space-y-8 font-body text-neutral-text-dark leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">1. Partner Eligibility</h2>
            <p className="mb-2">To become a CarBlink Partner, you must:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Be a legally operating automotive business.</li>
              <li>Provide accurate business information.</li>
              <li>Submit all required verification documents.</li>
              <li>Accept CarBlink's Partner Agreement.</li>
              <li>Meet CarBlink's quality standards.</li>
            </ul>
            <p>CarBlink reserves the right to approve or reject any partner application.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">2. Partner Verification</h2>
            <p className="mb-2">Partners may be required to submit:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Business Registration (if applicable)</li>
              <li>GST Registration (if applicable)</li>
              <li>PAN Card</li>
              <li>Aadhaar/Identity Proof</li>
              <li>Bank Account Details</li>
              <li>Workshop Address Proof</li>
              <li>Business Photographs</li>
              <li>Owner Contact Details</li>
            </ul>
            <p>Additional verification may be requested where necessary.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">3. Partner Responsibilities</h2>
            <p className="mb-2">Partners agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Deliver services professionally.</li>
              <li>Use qualified staff.</li>
              <li>Follow applicable safety standards.</li>
              <li>Maintain a clean and safe workshop.</li>
              <li>Provide accurate quotations.</li>
              <li>Inform customers before carrying out any additional work.</li>
              <li>Treat every customer respectfully.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">4. Pricing Policy</h2>
            <p className="mb-2">Partners must:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Submit fair and transparent quotations.</li>
              <li>Avoid hidden charges.</li>
              <li>Not increase prices after booking without customer approval.</li>
              <li>Clearly explain any additional work before proceeding.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">5. Booking Management</h2>
            <p className="mb-2">Partners shall:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Accept or decline booking requests promptly.</li>
              <li>Update booking status through the Partner Dashboard.</li>
              <li>Notify CarBlink of any expected delays.</li>
              <li>Complete services within the agreed timeline where reasonably possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">6. Payment & Settlement</h2>
            <p className="mb-2">Where CarBlink facilitates payments:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Customer payments may be collected through the CarBlink Platform.</li>
              <li>Partner payments will be processed according to the CarBlink Payment & Settlement Policy.</li>
              <li>Partners must provide valid invoices where required.</li>
              <li>Applicable taxes remain the responsibility of the respective party under applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">7. Customer Satisfaction</h2>
            <p className="mb-2">Before closing a booking:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>The completed work should be shown to the customer.</li>
              <li>The customer should be given an opportunity to inspect the vehicle.</li>
              <li>The partner should assist the customer in completing the service confirmation process through the CarBlink Platform where applicable.</li>
              <li>Partners must not pressure customers into providing positive reviews or confirmations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">8. Customer Data</h2>
            <p className="mb-2">Partners may only use customer information for completing the booked service. Partners must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Share customer information without permission.</li>
              <li>Use customer data for unrelated marketing.</li>
              <li>Sell or misuse customer information.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">9. Reviews & Ratings</h2>
            <p className="mb-2">Partners must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Create fake reviews.</li>
              <li>Offer incentives for positive ratings.</li>
              <li>Manipulate customer feedback.</li>
            </ul>
            <p>CarBlink may remove fraudulent reviews and take appropriate action.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">10. Prohibited Conduct</h2>
            <p className="mb-2">Partners must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Provide false quotations.</li>
              <li>Submit fake invoices.</li>
              <li>Misrepresent services.</li>
              <li>Engage in fraudulent activities.</li>
              <li>Use abusive or discriminatory behaviour.</li>
              <li>Damage customer property intentionally.</li>
              <li>Violate applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">11. Suspension & Termination</h2>
            <p className="mb-2">CarBlink may suspend or terminate a Partner account in cases including:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Fraud.</li>
              <li>Repeated poor service quality.</li>
              <li>Fake documents.</li>
              <li>Misuse of customer information.</li>
              <li>Serious customer complaints.</li>
              <li>Violation of this Policy or other agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">12. Limitation of Liability</h2>
            <p>Partners are responsible for the services they provide. CarBlink acts as a technology platform facilitating bookings and communication between customers and verified partners. Nothing in this Policy limits any liability that cannot legally be excluded under applicable law.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">13. Policy Updates</h2>
            <p>CarBlink may modify this Partner Policy from time to time. Updated versions will become effective upon publication on the Platform.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">14. Contact Us</h2>
            <p>CarBlink</p>
            <p>Email: partners@carblink.in (replace with your official email)</p>
            <p>Website: www.carblink.in</p>
            <p>Registered Office: [Add Registered Office Address]</p>
          </section>
        </div>
      </div>
    </main>
  );
}
