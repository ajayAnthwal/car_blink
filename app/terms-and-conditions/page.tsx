import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Terms & Conditions | CarBlink",
  description: "Official Customer Terms and Conditions for CarBlink Services Private Limited (carblink.in)",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-6 mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-primary-blue text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Legal Document
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-3">
            Customer Terms &amp; Conditions
          </h1>
          <div className="text-xs md:text-sm text-neutral-text-muted space-y-1">
            <p><span className="font-medium text-neutral-text-dark">Platform Operator:</span> CarBlink Services Private Limited</p>
            <p><span className="font-medium text-neutral-text-dark">Website:</span> <a href="https://carblink.in" className="text-primary-blue underline">https://carblink.in</a></p>
            <p><span className="font-medium text-neutral-text-dark">Applicability:</span> For legal review &amp; platform use</p>
          </div>
          <p className="font-body text-neutral-text-dark mt-4 text-sm md:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
            By accessing, using, submitting a service request, or making a booking through CarBlink.in, the customer agrees to these Terms &amp; Conditions.
          </p>
        </div>

        {/* 27 Sections */}
        <div className="space-y-8 font-body text-neutral-text-dark leading-relaxed text-sm md:text-base">
          {/* Section 1 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              1. Nature of CarBlink Platform
            </h2>
            <p className="mb-2">
              CarBlink Services Private Limited (&quot;CarBlink&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates an online platform that facilitates customers in discovering, comparing, selecting, and booking automotive services offered by independent partner workshops.
            </p>
            <p className="mb-2">
              CarBlink acts as an intermediary and service aggregator. CarBlink does not itself own, operate, manage, or directly perform vehicle repairs, servicing, denting, painting, detailing, washing, mechanical work, or other automotive services unless expressly stated otherwise.
            </p>
            <p>
              Automotive services are performed by independent partner workshops selected by the customer through the platform.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              2. Price Comparison &amp; Best Available Price
            </h2>
            <p className="mb-2">
              CarBlink enables customers to compare service quotations from multiple partner workshops and choose a suitable workshop based on price, service offerings, location, availability, customer preferences, and other relevant factors.
            </p>
            <p className="mb-2">
              CarBlink aims to help customers obtain quality automotive services at competitive and affordable prices.
            </p>
            <p className="mb-2">
              The lowest quotation displayed or communicated may depend upon the vehicle, service requirements, workshop availability, inspection findings, applicable taxes, parts, materials, and other conditions.
            </p>
            <p>
              CarBlink does not guarantee that the displayed price will be the lowest price available throughout the entire market.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              3. Partner Workshops
            </h2>
            <p className="mb-2">
              Partner workshops are independent third-party service providers. The customer acknowledges that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-text-dark">
              <li>The workshop is independently responsible for performing the automotive service.</li>
              <li>The workshop is responsible for its employees, technicians, premises, equipment, tools, licenses, workmanship, and service operations.</li>
              <li>CarBlink does not employ the technicians or staff of partner workshops.</li>
              <li>The customer and workshop may enter into a direct service relationship for the repair or maintenance of the vehicle.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              4. Booking &amp; Confirmation
            </h2>
            <p className="mb-2">
              A booking request submitted through CarBlink does not automatically constitute a confirmed service appointment.
            </p>
            <p className="mb-2">
              A booking shall be considered confirmed when the customer receives confirmation through the platform, WhatsApp, SMS, email, telephone, or another official communication channel.
            </p>
            <p className="mb-2">The customer must provide accurate information regarding:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Vehicle make and model</li>
              <li>Vehicle registration details, where required</li>
              <li>Required service</li>
              <li>Vehicle condition</li>
              <li>Contact information</li>
              <li>Any relevant issue, damage, or special requirement</li>
            </ul>
            <p>
              Incorrect or incomplete information may affect the quotation, availability, service outcome, or booking.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              5. Quotations &amp; Final Service Price
            </h2>
            <p className="mb-2">
              Quotes provided through CarBlink are based on the information available at the time of quotation. The partner workshop may require physical inspection of the vehicle before confirming the final scope and price.
            </p>
            <p className="mb-2">
              Any additional repair, replacement, labour, parts, material, or service charges not included in the approved quotation must be communicated to the customer and must receive the customer&apos;s approval before such additional work is undertaken.
            </p>
            <p className="mb-2">
              The workshop shall not impose undisclosed or unauthorized additional charges for work that was not approved by the customer.
            </p>
            <p>
              The customer may decline additional work and request clarification regarding the revised quotation.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              6. Booking Amount, Platform Fee &amp; Payments
            </h2>
            <p className="mb-2">
              Customers may be required to pay a booking amount, advance payment, platform fee, or other amount displayed during the booking process. The applicable amount, payment method, payment recipient, and payment terms shall be disclosed before payment.
            </p>
            <p className="mb-2">
              Where the remaining service amount is payable directly to the partner workshop, the customer shall pay such amount directly to the workshop in accordance with the agreed quotation and service terms.
            </p>
            <p className="mb-2">
              CarBlink shall not be responsible for payments made directly to a workshop outside the platform, except to the extent required under applicable law.
            </p>
            <p>
              Customers must retain payment receipts, invoices, booking confirmations, and other transaction records.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60">
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              7. Cancellation &amp; Refund Policy
            </h2>
            <p className="mb-3">
              Cancellation requests shall be governed by the cancellation terms displayed at the time of booking.
            </p>
            <p className="font-semibold text-neutral-text-dark mb-1">
              Unless a different cancellation policy is expressly displayed for a particular booking:
            </p>
            <div className="pl-4 border-l-2 border-primary-blue my-2 space-y-1">
              <p className="font-medium text-primary-navy">Cancellation before the customer visits or hands over the vehicle to the workshop:</p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark text-sm">
                <li><strong>10%</strong> of the booking amount may be retained as the applicable platform/processing fee, where disclosed at the time of booking.</li>
                <li><strong>90%</strong> of the booking amount shall be eligible for refund.</li>
              </ul>
            </div>
            <p className="mt-3 mb-2 text-sm">
              Refunds shall be processed through the original payment method or another permitted payment method, subject to payment gateway and banking timelines.
            </p>
            <p className="text-sm">
              Cancellation after the vehicle has been handed over, inspection has commenced, or work has started may be subject to the workshop&apos;s applicable charges, the services already performed, parts or materials purchased, and the disclosed booking terms. Customers should contact CarBlink support promptly to request cancellation.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              8. Vehicle Handover &amp; Workshop Custody
            </h2>
            <p className="mb-2">
              Upon handing over the vehicle to the partner workshop and the workshop accepting custody of the vehicle, the partner workshop shall be responsible for the vehicle&apos;s custody, care, safety, and security while the vehicle remains under its possession or control.
            </p>
            <p className="mb-2">
              The workshop shall take reasonable care of the vehicle and shall not use, drive, transfer, or otherwise operate the vehicle except as reasonably necessary for inspection, testing, repair, maintenance, or with the customer&apos;s consent.
            </p>
            <p className="mb-2">
              The workshop shall be responsible, subject to applicable law and the circumstances, for loss, theft, damage, unauthorized use, negligent handling, missing components, or incidents involving the vehicle occurring while the vehicle is under the workshop&apos;s custody or control.
            </p>
            <p className="mb-2">
              The customer should obtain a vehicle handover acknowledgement and ensure that the vehicle&apos;s condition, accessories, fuel level, and relevant existing damage are recorded where reasonably possible.
            </p>
            <p>
              CarBlink does not itself take physical custody of vehicles and shall not be directly responsible for incidents arising solely during the independent workshop&apos;s custody, subject to applicable law and CarBlink&apos;s own legal obligations.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              9. Personal Belongings &amp; Valuables
            </h2>
            <p className="mb-2">
              Customers are advised to remove cash, jewellery, documents, electronic devices, personal belongings, valuables, and other unnecessary items from the vehicle before handing it over to a partner workshop.
            </p>
            <p className="mb-2">
              The customer should not leave valuable or sensitive items inside the vehicle.
            </p>
            <p className="mb-2">
              Responsibility for loss of personal belongings shall be determined according to the circumstances, applicable law, and the responsibility of the party having custody or control.
            </p>
            <p>
              CarBlink shall not be directly responsible for personal belongings left inside the vehicle merely because a booking was made through CarBlink.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              10. Repair Quality &amp; Workmanship
            </h2>
            <p className="mb-2">
              All repair, maintenance, inspection, painting, detailing, washing, mechanical, electrical, and other automotive work is performed by the partner workshop.
            </p>
            <p className="mb-2">The partner workshop shall be responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Quality of workmanship</li>
              <li>Proper performance of the agreed service</li>
              <li>Use of appropriate parts and materials</li>
              <li>Safety-related workmanship</li>
              <li>Technical diagnosis</li>
              <li>Accuracy of repair recommendations</li>
              <li>Applicable service warranties or guarantees</li>
              <li>Correcting defects in its work where required by law or its warranty terms</li>
            </ul>
            <p className="mb-2">
              Any warranty or guarantee on repair work, parts, materials, or services shall be provided by the workshop, manufacturer, supplier, or other responsible service provider, as applicable.
            </p>
            <p>
              CarBlink may assist in communicating service complaints to the workshop but does not independently guarantee repair outcomes unless expressly stated in writing.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              11. Vehicle Condition, Inspection &amp; Pre-Existing Issues
            </h2>
            <p className="mb-2">
              Customers must disclose known vehicle issues, warning lights, existing damage, modifications, mechanical defects, accident history, and relevant information that may affect the service.
            </p>
            <p className="mb-2">
              The workshop may conduct an inspection and identify additional issues not included in the original quotation.
            </p>
            <p className="mb-2">
              The customer acknowledges that certain repairs may reveal additional defects or complications due to the vehicle&apos;s age, condition, previous repairs, corrosion, accident history, modifications, or other factors.
            </p>
            <p>
              The workshop must communicate material additional work and charges for customer approval before proceeding, subject to emergency or legally permitted circumstances.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              12. Delays &amp; Service Completion
            </h2>
            <p className="mb-2">Estimated completion times are indicative and may change due to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Parts availability</li>
              <li>Additional inspection requirements</li>
              <li>Unexpected mechanical issues</li>
              <li>Workshop workload</li>
              <li>Customer approvals</li>
              <li>Technical complications</li>
              <li>Force majeure events</li>
            </ul>
            <p>
              CarBlink may assist with communication regarding delays but does not control the independent workshop&apos;s operations or guarantee completion times unless expressly confirmed in writing.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              13. Customer Responsibilities
            </h2>
            <p className="mb-2">The customer agrees to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-text-dark">
              <li>Provide accurate booking and vehicle information.</li>
              <li>Ensure lawful ownership or authority to submit the vehicle for service.</li>
              <li>Attend appointments or communicate changes promptly.</li>
              <li>Remove valuables and personal belongings.</li>
              <li>Review quotations and approve additional work.</li>
              <li>Make payments according to the agreed terms.</li>
              <li>Treat workshop employees and CarBlink representatives respectfully.</li>
              <li>Not misuse the platform or provide false, fraudulent, abusive, or misleading information.</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              14. Workshop Responsibility &amp; Customer–Workshop Relationship
            </h2>
            <p className="mb-2">
              The customer understands that the partner workshop is the actual service provider for automotive work.
            </p>
            <p className="mb-2">
              The customer may be required to sign a workshop job card, inspection sheet, terms of service, invoice, or other documents provided by the workshop.
            </p>
            <p className="mb-2">
              The workshop remains responsible for fulfilling the automotive services agreed with the customer, subject to applicable law, contract, and consumer protection regulations.
            </p>
            <p>
              CarBlink does not waive any consumer rights available under applicable law.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              15. Complaints &amp; Dispute Resolution Support
            </h2>
            <p className="mb-2">
              If a customer encounters an issue with service quality, delayed service, billing discrepancy, or misconduct by a partner workshop, the customer should promptly report the concerns to CarBlink through its official customer support channels.
            </p>
            <p className="mb-2">CarBlink may assist by:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Communicating with the partner workshop.</li>
              <li>Sharing booking-related information.</li>
              <li>Facilitating complaint resolution.</li>
              <li>Requesting clarification or supporting documents.</li>
              <li>Assisting in coordination between the customer and workshop.</li>
            </ul>
            <p>
              CarBlink does not guarantee a particular outcome in disputes involving independent workshops but will provide reasonable assistance in accordance with its platform processes and applicable law.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              16. Limitation of Platform Responsibility
            </h2>
            <p className="mb-2">
              To the maximum extent permitted by applicable law, CarBlink shall not be responsible for acts, omissions, negligence, misconduct, service failures, repair defects, warranties, delays, theft, damage, accidents, or other events arising from the independent operations of partner workshops, except where liability arises from CarBlink&apos;s own acts, omissions, negligence, statutory obligations, or liability that cannot legally be excluded.
            </p>
            <p>
              Nothing in these Terms shall deprive a customer of rights available under applicable consumer protection laws.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              17. Platform Availability &amp; Technical Issues
            </h2>
            <p className="mb-2">
              CarBlink may temporarily suspend, modify, restrict, or discontinue parts of the platform for maintenance, security, technical improvements, operational reasons, or other legitimate reasons.
            </p>
            <p className="mb-2">
              CarBlink does not guarantee uninterrupted, error-free, or continuous availability of the platform.
            </p>
            <p>
              Customers should not rely exclusively on the platform for emergency roadside assistance or emergency vehicle repairs unless such service is expressly offered.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              18. Fraud, Misuse &amp; Prohibited Activities
            </h2>
            <p className="mb-2">Customers shall not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-text-dark mb-2">
              <li>Submit fraudulent bookings.</li>
              <li>Misrepresent vehicle details or service requirements.</li>
              <li>Attempt to manipulate quotations or platform operations.</li>
              <li>Harass workshops, employees, or other users.</li>
              <li>Use the platform for unlawful activities.</li>
              <li>Circumvent security or interfere with platform systems.</li>
              <li>Provide false reviews or knowingly misleading information.</li>
            </ul>
            <p>
              CarBlink may investigate suspected misuse and take reasonable action, including cancellation, restriction, suspension, or termination of platform access, subject to applicable law.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              19. Privacy &amp; Personal Information
            </h2>
            <p className="mb-2">
              CarBlink may collect and process customer information necessary for booking, quotation comparison, communication, payment processing, service facilitation, customer support, fraud prevention, legal compliance, and platform improvement.
            </p>
            <p className="mb-2">
              Information may be shared with partner workshops, payment providers, service providers, and other relevant parties to facilitate the requested service or where legally required.
            </p>
            <p className="mb-2">
              Customer information shall be handled in accordance with CarBlink&apos;s Privacy Policy and applicable data protection laws.
            </p>
            <p>
              Customers should refer to the Privacy Policy for details regarding information collection, use, sharing, retention, and applicable rights.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              20. Third-Party Services
            </h2>
            <p className="mb-2">
              The platform may use third-party payment gateways, communication services, maps, software providers, analytics services, or other integrations.
            </p>
            <p>
              CarBlink does not control all third-party services and shall not be responsible for their independent acts, omissions, outages, policies, or technical failures, except as required by applicable law.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              21. Reviews, Feedback &amp; Content
            </h2>
            <p className="mb-2">
              Customers may submit reviews, ratings, feedback, photographs, or other content through the platform.
            </p>
            <p className="mb-2">
              Customers agree that submitted content shall not be unlawful, defamatory, fraudulent, abusive, misleading, infringing, or otherwise prohibited.
            </p>
            <p>
              CarBlink may moderate, remove, restrict, or investigate content where reasonably necessary and permitted by law.
            </p>
          </section>

          {/* Section 22 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              22. Force Majeure
            </h2>
            <p>
              CarBlink and partner workshops shall not be responsible for delays or failures caused by events beyond reasonable control, including natural disasters, severe weather, fire, government restrictions, strikes, war, civil unrest, epidemics, supply chain disruptions, power failures, telecommunications failures, or other force majeure events, subject to applicable law.
            </p>
          </section>

          {/* Section 23 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              23. Modification of Terms
            </h2>
            <p className="mb-2">
              CarBlink may update or modify these Terms from time to time to reflect changes in its platform, operations, business model, legal requirements, or services.
            </p>
            <p className="mb-2">
              Updated Terms shall be published on the platform with an updated effective date.
            </p>
            <p>
              Continued use of the platform after the updated Terms become effective shall constitute acceptance where legally permissible.
            </p>
          </section>

          {/* Section 24 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              24. Suspension or Termination
            </h2>
            <p className="mb-2">
              CarBlink may restrict or terminate access to the platform where reasonably necessary due to fraud, misuse, security concerns, violation of these Terms, legal requirements, or operational reasons.
            </p>
            <p>
              Termination shall not affect rights or obligations relating to bookings already confirmed, payments already made, refunds, disputes, or other matters that survive termination.
            </p>
          </section>

          {/* Section 25 */}
          <section>
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              25. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mb-2">
              These Terms shall be governed by the laws of India.
            </p>
            <p className="mb-2">
              Subject to applicable consumer protection laws and the jurisdiction of competent statutory authorities, disputes relating to these Terms shall be subject to the jurisdiction of competent courts in India.
            </p>
            <p>
              Nothing in these Terms shall restrict the customer&apos;s right to approach a competent consumer commission or other authority under applicable law.
            </p>
          </section>

          {/* Section 26 */}
          <section className="bg-blue-50/50 p-5 rounded-2xl border border-blue-200/60">
            <h2 className="font-heading font-semibold text-xl text-primary-navy mb-3">
              26. Grievance Redressal
            </h2>
            <p className="mb-3 text-sm">
              For booking complaints, platform-related issues, refund requests, or grievances, customers may contact:
            </p>
            <div className="text-sm space-y-1 font-medium text-slate-800">
              <p><span className="text-slate-500">Company:</span> CarBlink Services Private Limited</p>
              <p><span className="text-slate-500">Website:</span> <a href="https://carblink.in" className="text-primary-blue hover:underline">https://carblink.in</a></p>
              <p><span className="text-slate-500">Support Email:</span> <a href="mailto:support@carblink.in" className="text-primary-blue hover:underline">support@carblink.in</a></p>
              <p><span className="text-slate-500">Grievance Contact:</span> Grievance Officer, CarBlink Services Private Limited</p>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              CarBlink shall acknowledge and address customer grievances within the timelines prescribed by applicable law.
            </p>
          </section>

          {/* Section 27 */}
          <section className="bg-slate-900 text-white p-6 rounded-2xl">
            <h2 className="font-heading font-bold text-xl text-white mb-2">
              27. Acceptance
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              By clicking &quot;I Agree&quot;, &quot;Accept Terms &amp; Conditions&quot;, proceeding with a booking, or making a payment through the platform, the customer confirms that they have read, understood, and agreed to these Terms &amp; Conditions and the applicable booking-specific terms.
            </p>
            <p className="text-xs text-slate-400 mt-3">
              If the customer does not agree with these Terms, they should not proceed with the booking or use the platform.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
