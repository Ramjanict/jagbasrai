import CommonSpace from "@/components/common/space/CommonSpace";
import CommonWrapper from "@/components/common/space/CommonWrapper";
import SectionHeader from "@/components/reuseable/SectionHeader";
import { T } from "@/components/translated-text";

export default function PrivacyPolicy() {
  return (
    <CommonWrapper className=" bg-white">
      <CommonSpace className="">
        <h1 className="sr-only">Privacy Policy</h1>
        <SectionHeader
          bigTitle="Privacy Policy for GoAutomate Inc"
          description="Last Updated: November 2025"
        />

        <div className="space-y-6 mt-6 ">
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4 ">
              <T>1. Introduction</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                GoAutomate Inc. ("we," "us," or "our") is committed to
                protecting the privacy and security of your personal information
                and, most importantly, Personal Health Information ("PHI"). This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our Services (as defined
                below). By using our Services, you consent to the practices
                described in this policy and confirm your understanding and
                acceptance of the terms outlined herein.
              </T>
            </p>

            <p className="text-[#353535] leading-relaxed">
              <T>
                We are committed to compliance with the Health Insurance
                Portability and Accountability Act (HIPAA) in the United States,
                the Personal Health Information Protection Act (PHIPA) in
                Canada, and the Personal Information Protection and Electronic
                Documents Act (PIPEDA).
              </T>
            </p>
          </section>

          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>2. Information We Collect</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                We collect information in several ways, depending on how you
                interact with our Services.
              </T>
            </p>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>A. Information You Provide to Us</T>
            </h3>

            <ul className="list-disc pl-6 mb-6 text-[#353535] space-y-2">
              <li>
                <T>
                  Account Information: Name, email address, phone number,
                  professional credentials, and billing information when you
                  register for our Services.
                </T>
              </li>
              <li>
                <T>
                  Support Data: Information you provide when contacting customer
                  support.
                </T>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>B. Information Collected via the Services (PHI/ePHI)</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>
                In the course of providing our automation tools, we process
                Personal Health Information (PHI) on behalf of our clients
                (Healthcare Providers, Covered Entities, or Health Information
                Custodians). This may include:
              </T>
            </p>

            <ul className="list-disc pl-6 mb-6 text-[#353535] space-y-2">
              <li>
                <T>Patient names and demographics.</T>
              </li>
              <li>
                <T>Medical history, diagnoses, and treatment plans.</T>
              </li>
              <li>
                <T>Prescription information (via GoAutomateRX).</T>
              </li>
              <li>
                <T>Laboratory results (via GoAutomate/LAB).</T>
              </li>
              <li>
                <T>
                  Medical imaging and DICOM data (via
                  GoAutomateRAD/GoAutomateDC).
                </T>
              </li>
              <li>
                <T>Cardiac data (via GoAutomateCARD).</T>
              </li>
              <li>
                <T>Emergency ward records (via GoAutomateER).</T>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>C. Automatically Collected Information (Website Data)</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>When you visit our website, we may collect:</T>
            </p>

            <ul className="list-disc pl-6 mb-6 text-[#353535] space-y-2">
              <li>
                <T>
                  Log Data: IP address, browser type, operating system,
                  referring URLs.
                </T>
              </li>
              <li>
                <T>
                  Cookies: Data used to enhance site functionality and analyze
                  usage patterns.
                </T>
              </li>
            </ul>
          </section>

          {/* --- SECTION 3 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>3. How We Use Your Information</T>
            </h2>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>A. To Provide Services</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-6">
              <T>
                We use PHI solely for the purpose of providing the information
                services requested by our clients. This includes processing
                prescriptions, analyzing lab results, automating imaging
                workflows, and managing patient records.
              </T>
            </p>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>B. Communication</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-6">
              <T>
                We may use contact information to send administrative
                information, such as updates to terms, security alerts, and
                support messages.
              </T>
            </p>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>C. Service Improvement and AI Training (De-identified Data)</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>
                We may use de-identified or anonymized data to train our
                Artificial Intelligence (AI) or Machine Learning (ML) models.
              </T>
            </p>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>
                However, we may de-identify or anonymize data in accordance with
                the Safe Harbor method under HIPAA and relevant standards for
                PHIPA/PIPEDA. Once data is fully de-identified, meaning it can
                no longer be linked to a specific individual, we may use the
                modified data to:
              </T>
            </p>

            <ul className="list-disc pl-6 mb-6 text-[#353535] space-y-2">
              <li>
                <T>Train and improve our AI algorithms.</T>
              </li>
              <li>
                <T>Enhance the accuracy of our automation tools.</T>
              </li>
              <li>
                <T>Conduct statistical analysis and research.</T>
              </li>
            </ul>
          </section>

          {/* --- SECTION 4 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>4. Data Residency and Sovereignty</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                We understand the critical importance of data sovereignty for
                healthcare data.
              </T>
            </p>

            <ul className="list-disc pl-6 mb-4 text-[#353535] space-y-2">
              <li>
                <T>
                  For Canadian clients, data will be stored on servers
                  physically located and retained exclusively within Canada. We
                  utilize secure data centers hosted within Canadian borders to
                  comply with provincial and federal regulations.
                </T>
              </li>

              <li>
                <T>
                  GoAutomate acts as a "Business Service Provider" and/or
                  "Agent" in "Health Information Custodians." We comply with the
                  requirements of PHIPA regarding the collection, use, and
                  disclosure of personal health information. We ensure that all
                  data remains within Canada and is protected for safeguards
                  comparable to the territoriality of the information.
                </T>
              </li>

              <li>
                <T>
                  For United States clients, all Personal Health Information
                  (PHI) will be stored, processed, and retained exclusively
                  within US borders to comply with HIPAA regulations.
                </T>
              </li>
            </ul>

            <p className="text-[#353535] leading-relaxed">
              <T>
                If we engage third-party "Business Associates" or "Covered
                Entities" clients, We comply with the HIPAA Privacy Rule,
                Security Rule, and Breach Notification Rule. We may sign a
                Business Associate Agreement (BAA) with such service-based
                clients upon request.
              </T>
            </p>
          </section>

          {/* --- SECTION 5 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>5. Disclosure of Information</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                We do not sell your data. We may disclose information in the
                following circumstances:
              </T>
            </p>

            <ul className="list-disc pl-6 mb-4 text-[#353535] space-y-2">
              <li>
                <T>
                  Business Associates / Third-Party Vendors: We may share data
                  with trusted third-party vendors (e.g., cloud hosting
                  providers) who assist us in operating our Services. These
                  vendors are bound by strict Business Associate Agreements
                  (BAAs) requiring them to comply with privacy laws and use PHI
                  only for the purpose of providing services on our behalf.
                </T>
              </li>

              <li>
                <T>
                  Legal Requirements: We may disclose information if required to
                  do so by law or in response to valid requests by public or
                  authorities (e.g., a court order or government agency).
                </T>
              </li>

              <li>
                <T>
                  Business Transfers: In the event of a merger, acquisition, or
                  sale of all or a portion of our assets, user information may
                  be transferred as part of that transaction, subject to the
                  same privacy protections.
                </T>
              </li>
            </ul>
          </section>

          {/* --- SECTION 6 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>6. Security of Your Information</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                We employ administrative, technical, and physical safeguards
                designed to protect PHI and personal information. These measures
                include:
              </T>
            </p>

            <ul className="list-disc pl-6 mb-4 text-[#353535] space-y-2">
              <li>
                <T>
                  Encryption: Data is encrypted both in transit using TLS 1.2
                  (or later) using AES-256.
                </T>
              </li>

              <li>
                <T>
                  Access Controls: Strict role-based access controls (RBAC)
                  ensure only authorized personnel can access sensitive data.
                </T>
              </li>

              <li>
                <T>
                  Audits: Regular security audits and vulnerability assessments.
                </T>
              </li>

              <li>
                <T>
                  Compliance: Adherence to HIPAA Security Rule and PHIPA
                  security requirements.
                </T>
              </li>
            </ul>
          </section>

          {/* --- SECTION 7 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>7. Your Rights</T>
            </h2>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>A. For Patients</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-6">
              <T>
                If you are a patient, or one of your clients, please direct your
                privacy inquiries (such as requests to access, correct, or
                delete your medical records) directly to your healthcare
                provider (or data processor/service provider, GoAutomate Inc.
                functions primarily as a "Business Associate" or "Agent" for the
                purpose of processing information on behalf of healthcare
                providers.
              </T>
            </p>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>B. For Clients (Healthcare Providers)</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>You have the right to:</T>
            </p>

            <ul className="list-disc pl-6 mb-6 text-[#353535] space-y-2">
              <li>
                <T>Access and correct your account information.</T>
              </li>
              <li>
                <T>
                  Request data export or deletion upon termination of services,
                  subject to data retention laws.
                </T>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mb-3">
              <T>B. Data Retention</T>
            </h3>

            <p className="text-[#353535] leading-relaxed mb-3">
              <T>
                We retain PHI only for as long as necessary to fulfill the
                purposes for which it was collected, and to comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </T>
            </p>

            <ul className="list-disc pl-6 mb-4 text-[#353535] space-y-2">
              <li>
                <T>
                  Canadian Data: Retained in accordance with provincial health
                  data retention schedules.
                </T>
              </li>
              <li>
                <T>
                  US Data: Retained in accordance with HIPAA and state-specific
                  retention laws.
                </T>
              </li>
            </ul>
          </section>

          {/* --- SECTION 9 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>9. Cookies and Tracking Technologies</T>
            </h2>

            <p className="text-[#353535] leading-relaxed">
              <T>
                We use cookies to enhance your experience on our website. You
                can instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, if you do not accept
                cookies, you may not be able to use some portions of our
                Services.
              </T>
            </p>
          </section>

          {/* --- SECTION 10 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>10. Children's Privacy</T>
            </h2>

            <p className="text-[#353535] leading-relaxed">
              <T>
                Our Services are intended for use by healthcare professionals.
                We do not knowingly collect personal information from children
                under the age of 13. Patient data regarding children is
                processed under the strict authorization of the healthcare
                provider.
              </T>
            </p>
          </section>

          {/* --- SECTION 11 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>11. Changes to This Privacy Policy</T>
            </h2>

            <p className="text-[#353535] leading-relaxed">
              <T>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </T>
            </p>
          </section>

          {/* --- SECTION 12 --- */}
          <section className="">
            <h2 className="text-xl font-bold text-black mb-4">
              <T>12. Contact Us</T>
            </h2>

            <p className="text-[#353535] leading-relaxed mb-4">
              <T>
                If you have any questions about this Privacy Policy or if you
                wish to report a privacy concern, please contact our Privacy
                Officer:
              </T>
            </p>

            <div className="text-[#353535]">
              <p className="font-semibold">
                <T>GoAutomate Inc.</T>
              </p>
              <p className="font-semibold">
                <T>Attn: Privacy Officer</T>
              </p>

              <p className="mt-2">
                <span className="font-semibold">
                  <T>Email:</T>
                </span>{" "}
                <T>privacy@goautomate.com</T>
              </p>
            </div>
          </section>
        </div>
      </CommonSpace>
    </CommonWrapper>
  );
}
