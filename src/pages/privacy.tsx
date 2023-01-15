import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Privacy: FC = () => {
  return (
    <WebsiteLayout currentPage="">
      {/* main body with text */}
      <section className={styles.legal_main}>
        <h1>Memoriter Privacy Policy</h1>

        <p>
          <strong>Last Updated: 15.01, 2023</strong>
        </p>
        <article>
        <p>
          We are happy that you decided to use our app Memoriter. The collection
          of user data is crucial for the app to work, therefore the collection
          of personal data is unavoidable, but we are interested in informing
          you about for you to feel save while visiting our website and app. In
          the following, it will be explained how and why we process personal
          and user data.
        </p>
        <p>
          This privacy notice for Memoriter LLC ("Company," "we," "us," or
          "our"), describes how and why we might collect, store, use, and/or
          share ("process") your information when you use our services
          ("Services"), such as when you:
        </p>
        <ul>
          <li>
            Visit our website at http://www.app.memoriter.de, or any website of
            ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          contact@memoriter.de.
        </p>
        </article>
      
        <article>
          <h2>Summary of key points</h2>
          <p>
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with Memoriter LLC and the Services, the choices
            you make, and the products and features you use.
          </p>
          <p>
            Do we process any sensitive personal information? We do not process
            sensitive personal information.
          </p>
          <p>
            Do we receive any information from third parties? We do not receive
            any information from third parties.
          </p>
          <p>
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
            We process your information only when we have a valid legal reason
            to do so.
          </p>
          <p>
            In what situations and with which parties do we share personal
            information? We may share information in specific situations and
            with specific third parties.
          </p>
          <p>
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information.
          </p>
          <p>
            How do you exercise your rights? The easiest way to exercise your
            rights is by filling out our data subject request form available
            here: http://www.app.memoriter.de, or by contacting us. We will
            consider and act upon any request in accordance with applicable data
            protection laws.
          </p>
        </article>

        <article>
          <h1>1. What information do we collect?</h1>
          <article>
            <h2>Personal information you disclose to us</h2>
            <p>
            We collect personal information that you voluntarily provide to us when you register on the Services, 
            express an interest in obtaining information about us or our products and Services, 
            when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p>
            Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, 
            the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul>
              <li>email addresses</li>
              <li>passwords</li>
              <li>billing addresses</li>
              <li>debit/credit card numbers</li>
              <li>names</li>
            </ul>
            <p>
            Sensitive Information. We do not process sensitive information.
            </p>
            <p>
            Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number,
            and the security code associated with your payment instrument. 
            All payment data is stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/de/privacy.
            </p>
            <p>
            Social Media Login Data. We may provide you with the option to register with us using your existing social media account details,
            like your Facebook, Twitter, or other social media account. 
            If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
            </p>
            <p>
            All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
            </p>
          </article>

          <article>
            <h2>Information automatically collected</h2>
            <p>
              In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
            </p>
            <p>
            We automatically collect certain information when you visit, use, or navigate the Services. 
            This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, 
            such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, 
            information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation 
            of our Services, and for our internal analytics and reporting purposes.
            </p>
            <p>
            Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: http://www.memoriter.de/Cookies.
            </p>
            <p>
              The information we collect includes:
            </p>
            <ul>
              <li>
                Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use 
                our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser 
                type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, 
                and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and 
                hardware settings).
              </li>
              <li>
                Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the 
                device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser 
                type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
              </li>
              <li>
                Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect 
                depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. 
                However, if you choose to opt out, you may not be able to use certain aspects of the Services.
              </li>
            </ul>
          </article>
        </article>

        <article>
          <h1>2. How do we use your information?</h1>
          <p>
            In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. 
            We may also process your information for other purposes with your consent.
          </p>
          <p>
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul>
            <li>
              To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, 
              as well as keep your account in working order.
            </li>
            <li>
            To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
            </li>
            <li>
            To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.
            </li>
            <li>
            To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
            </li>
          </ul>
        </article>

        <article>
          <h1>3. What legal bases do we rely on to process your information?</h1>
          <p>
          In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law,
          like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our 
          legitimate business interests.
          </p>
          <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we 
          may rely on the following legal bases to process your personal information:
          </p>
          <ul>
            <li>
            Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. 
            You can withdraw your consent at any time. Please note, however, that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the other things we may do with your personal information.
            </li>
            <li>
            Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
            </li>
            <li>
            Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, 
            we may process your personal information for some of the purposes described in order to:
            </li>
            <ul>
              <li>
              Understand how our users use our products and services so we can improve user experience
              </li>
            </ul>
            <li>
            Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law 
            enforcement body or regulatory agency, exercise or defend our legal rights, or 
            disclose your information as evidence in litigation in which we are involved.
            </li>
            <li>
              Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, 
              such as situations involving potential threats to the safety of any person.
            </li>
            </ul>
        </article>

        <article>
          <h1>4. When and with whom do we share your personal information</h1>
          <p>
          In Short: We may share information in specific situations described in this section and/or with the following third parties.
          </p>
          <p>
          We may need to share your personal information in the following situations:
          </p>
          <ul>
            <li>
            Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
          </ul>
        </article>

        <article>
          <h1>5. Do we use cookies and other tracking technologies?</h1>
          <p>
          In Short: We may use cookies and other tracking technologies to collect and store your information.
          </p>
          <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such 
          technologies and how you can refuse certain cookies is set out in our Cookie Notice: http://www.memoriter.de/Cookies.
          </p>
        </article>

        <article>
          <h1>6. How do we handle your social logins?</h1>
          <p>
            In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
          </p>
          <p>
          Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). 
          Where you choose to do this, we will receive certain profile information about you from your social media provider. 
          The profile information we receive may vary depending on the social media provider concerned, 
          but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform. 
          </p>
          <p>
          We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. 
          Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. 
          We recommend that you review their 
          privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
          </p>
        </article>

        <article>
          <h1>7. How long do we keep your information?</h1>
          <p>
          In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>
          <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is 
          required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us
          keeping your personal information for longer than the period of time in which users have an account with us.
          </p>
          <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, 
          if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal 
          information and isolate it from any further processing until deletion is possible.
          </p>
        </article>

        <article>
          <h1>8. What are your privacy rights?</h1>
          <p>
          In Short: In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
          </p>
          <p>
          In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p>
          We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
          <p>
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          </p>
          <p>
          If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
          </p>
          <p>
          Withdrawing your consent: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
          </p>
          <p>
          Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
          </p>
          <p>
          Account Information
          </p>
          <p>
          If you would at any time like to review or change the information in your account or terminate your account, you can:
          </p>
          <ul>
            <li>
            Log in to your account settings and update your user account.
            </li>
          </ul>
          <p>
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
          </p>
          <p>
          Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/. For further information, please see our Cookie Notice: http://www.memoriter.de/Cookies.
          </p>
          <p>
          If you have questions or comments about your privacy rights, you may email us at contact@memoriter.de.
          </p>
        </article>

        <article>
          <h1>9. Controls for Do-Not-Track features</h1>
          <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
          </p>
        </article>

        <article>
          <h1>10. Do California residents have specific privacy rights?</h1>
          <p>
          In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
          </p>
          <p>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
          </p>
          <p>
          If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
          </p>
          <h2>
          CCPA Privacy Notice
          </h2>
          <p>
          The California Code of Regulations defines a "resident" as:
          </p>
          <p>
            (1) every individual who is in the State of California for other than a temporary or transitory purpose and
            (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
          </p>
          <p>
          All other individuals are defined as "non-residents."
          </p>
          <p>
            If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
          </p>
          <h2>
          How do we use and share your personal information?
          </h2>
          <p> 
            More information about our data collection and sharing practices can be found in this privacy notice and our Cookie Notice: http://www.memoriter.de/Cookies
          </p>
          <p>
          You may contact us by email at contact@memoriter.de, or by referring to the contact details at the bottom of this document.
          </p>
          <p>
          If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
          </p>
          <h2>
          Will your information be shared with anyone else?
          </h2>
          <p>
          We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.
          </p>
          <p>
          Memoriter LLC has not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Memoriter LLC will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
          </p>

          <h2>
          Your rights with respect to your personal data
          </h2>
          <p>
          You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
          </p>
          <p>
          Depending on the circumstances, you have a right to know:
          </p>
          <ul>
            <li>	
              whether we collect and use your personal information;
            </li>
            <li>
              the categories of personal information that we collect;
            </li>
            <li>
              the purposes for which the collected personal information is used;
            </li>
            <li>
              whether we sell your personal information to third parties;
            </li>
            <li>
              the categories of personal information that we sold or disclosed for a business purpose;
            </li>
            <li>
              the categories of personal information that we sold, shared, or disclosed for a business purpose;
            </li>
            <li>
              the business or commercial purpose for collecting, selling, or sharing personal information; and
            </li>
            <li>
              the specific pieces of personal information we collected about you.
            </li>
          </ul>
          <p>
          In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
          </p>
          <p>
          We will not discriminate against you if you exercise your privacy rights.
          </p>
          <p>
          We do not process consumer's sensitive personal information.
          </p>
          <p>
          Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
          </p>
          <p>
          We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
          </p>
        </article>

        <article>
          <h1>11. Do we make updates to this notice?</h1>
          <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          </p>
        </article>

        <article>
          <h1>12. How can you contact us about this notice?</h1>
          <p>
          If you have questions or comments about this notice, you may email us at contact@memoriter.de or by post to:
          </p>
          <p>
          Memoriter LLC
          </p>
          <p>
          Rudolf-Breitscheid-straße 160 C
          </p>
          <p>
          Potsdam, Brandenburg 14482
          </p>
          <p>
          Germany
          </p>
        </article>

        <article>
          <h1>13. How can you review, update, or delete the data we collect from you?</h1>
          <p>
          You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: http://www.app.memoriter.de.
          </p>
        </article>
      </section>
    </WebsiteLayout>
  );
};
export default Privacy;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Privacy Policy'
      description='This page contains information regarding how Memoriter uses and processes personal data.'
      keywords='privacy, data protection, policy, legal, data, information'
      type='website'
    />
  );
};
