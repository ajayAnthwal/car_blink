import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | CarBlink",
  description: "Refund and Cancellation Policy for CarBlink",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-4">Refund & Cancellation Policy</h1>
        <p className="text-neutral-text-muted mb-4 text-sm md:text-base">Effective Date: 05/08/2026</p>
        <p className="font-body text-neutral-text-dark mb-8">
          At CarBlink, we strive to provide a transparent and fair booking experience for both customers and our verified service partners. This Refund & Cancellation Policy explains how cancellations, refunds, and payment-related situations are handled on our platform.
        </p>

        <div className="space-y-8 font-body text-neutral-text-dark leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">1. Booking Cancellation by Customer</h2>
            <p className="mb-2">Customers may cancel a booking before the service has started. Depending on the stage of the booking, the following may apply:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Before a partner is assigned: Full refund (if payment has been collected).</li>
              <li>After a partner has been assigned but before service starts: A cancellation fee may apply if the partner has already incurred costs (such as inspection, pickup, or preparation).</li>
              <li>After the service has started: The booking generally cannot be cancelled, and refund eligibility will depend on the work already completed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">2. Cancellation by Service Partner</h2>
            <p className="mb-2">If a verified partner cancels a confirmed booking:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>CarBlink will try to assign another suitable partner.</li>
              <li>If an alternative partner is unavailable and the customer chooses not to proceed, any eligible payment collected through CarBlink will be refunded.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">3. Cancellation by CarBlink</h2>
            <p className="mb-2">CarBlink reserves the right to cancel a booking in situations such as:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Incorrect or incomplete booking information.</li>
              <li>Safety or legal concerns.</li>
              <li>Suspected fraud or misuse.</li>
              <li>Unavailability of suitable partners.</li>
              <li>Technical or operational issues.</li>
            </ul>
            <p>If payment has already been collected and the booking is cancelled by CarBlink before service begins, the eligible amount will be refunded.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">4. Refund Eligibility</h2>
            <p className="mb-2">Refunds may be considered in situations including:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Duplicate payment.</li>
              <li>Payment collected but booking not completed.</li>
              <li>Partner unable to provide the confirmed service.</li>
              <li>Payment gateway processing error.</li>
              <li>Other situations reviewed and approved by CarBlink.</li>
            </ul>
            <p>Refunds are not automatically available for every complaint and will be reviewed based on the facts of each case.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">5. Non-Refundable Situations</h2>
            <p className="mb-2">Refunds may not be available if:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>The customer changes their mind after the service has been completed.</li>
              <li>The customer approved additional work during the service.</li>
              <li>Incorrect vehicle details were provided by the customer.</li>
              <li>The issue is outside the scope of the booked service.</li>
              <li>The complaint is unsupported by available information or evidence.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">6. Service Quality Concerns</h2>
            <p className="mb-2">If a customer is dissatisfied with a completed service:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>The issue should be reported to CarBlink as soon as reasonably possible after service completion.</li>
              <li>CarBlink may request photographs, invoices, or other supporting information.</li>
              <li>The concerned service partner will be given an opportunity to respond.</li>
              <li>CarBlink may facilitate communication between the customer and the partner to help resolve the matter.</li>
            </ul>
            <p>Any refund, rework, goodwill credit, or other resolution will depend on the specific circumstances and applicable policies.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">7. Payment Processing Time</h2>
            <p>Approved refunds will generally be processed within 7–10 business days, depending on the payment method and banking partner.</p>
            <p className="mt-2">Actual credit timelines may vary based on the customer's bank or payment provider.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">8. Payment Gateway Issues</h2>
            <p className="mb-2">If a payment fails but the amount is debited:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Customers should first check with their bank.</li>
              <li>If the transaction is confirmed as successful but the booking is not created, customers should contact CarBlink Support.</li>
              <li>CarBlink will coordinate with the payment gateway to resolve the issue.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">9. Customer Responsibilities</h2>
            <p className="mb-2">Customers should:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark">
              <li>Review booking details before confirming.</li>
              <li>Provide accurate vehicle information.</li>
              <li>Inspect the vehicle before accepting delivery.</li>
              <li>Raise concerns promptly through CarBlink Support.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">10. Changes to this Policy</h2>
            <p>CarBlink may update this Refund & Cancellation Policy from time to time.</p>
            <p className="mt-2">The latest version will always be available on the Platform.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-blue mb-3">11. Contact Us</h2>
            <p>CarBlink</p>
            <p>Email: support@carblink.in (replace with your official email)</p>
            <p>Website: www.carblink.in</p>
            <p>Registered Office: [Add Registered Office Address]</p>
          </section>
        </div>
      </div>
    </main>
  );
}
