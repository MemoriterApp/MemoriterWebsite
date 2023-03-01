import React, { FC } from 'react';
import { HeadFC, Link } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Privacy: FC = () => {
  return (
    <WebsiteLayout currentPage=''>
      {/* main body with text */}
      <article className={styles.legal_main}>
        <h1>Memoriter Privacy Policy</h1>

        <p>
          <strong>Last Updated: March 1, 2023</strong>
        </p>

        <p>
          We are happy that you decided to use Memoriter. The collection of user data is crucial for
          the app to work, therefore the collection of personal data is unavoidable. We are
          interested in informing you about for you to feel save while visiting our website and app.
          In the following, it will be explained how and why we process personal and user data.
        </p>
        <p>
          This privacy policy for Memoriter LLC ("Company," "we," "us," or "our"), describes how and
          why we might collect, store, use, and/or share ("process") your information when you use
          our services, such as when you:
        </p>
        <ul>
          <li>
            Visit our website at{' '}
            <a href='https://www.memoriter.de' target='_blank' rel='noreferrer'>
              https://www.memoriter.de
            </a>{' '}
            or{' '}
            <a href='https://app.memoriter.de' target='_blank' rel='noreferrer'>
              https://app.memoriter.de
            </a>
            , or any website of ours that links to this privacy policy.
          </li>
          <li>
            Engage with us in other related ways, including any sales, support, marketing, or
            events.
          </li>
        </ul>
        <p>
          Questions or concerns? Reading this privacy policy will help you understand your privacy
          rights and choices. If you do not agree with our policies and practices, please do not use
          our services.
        </p>

        <h2>1. Legal Bases We Rely On to Process Personal information</h2>
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid
          legal bases we rely on in order to process your personal information. As such, we may rely
          on the following legal bases to process your personal information:
        </p>
        <ul>
          <li>
            Consent. We may process your information if you have given us permission to use your
            personal information for a specific purpose. You can withdraw your consent at any time.
            Please note, however, that this will not affect the lawfulness of the processing before
            its withdrawal, nor will it affect the other things we may do with your personal
            information.
          </li>
          <li>
            Performance of a Contract. We may process your personal information when we believe it
            is necessary to fulfill our contractual obligations to you, including providing our
            Services or at your request prior to entering into a contract with you.
          </li>
          <li>
            Legitimate Interests. We may process your information when we believe it is reasonably
            necessary to achieve our legitimate business interests and those interests do not
            outweigh your interests and fundamental rights and freedoms.
          </li>
          <li>
            Legal Obligations. We may process your information where we believe it is necessary for
            compliance with our legal obligations, such as to cooperate with a law enforcement body
            or regulatory agency, exercise or defend our legal rights, or disclose your information
            as evidence in litigation in which we are involved.
          </li>
          <li>
            Vital Interests. We may process your information where we believe it is necessary to
            protect your vital interests or the vital interests of a third party, such as situations
            involving potential threats to the safety of any person.
          </li>
        </ul>

        <h2>2. Who is Responsible For Processing Your Personal Data?</h2>
        <p>
          Memoriter LLC, the company behind the project is responsible for processing your personal
          data:
        </p>
        <ul>
          <li>Memoriter LLC</li>
          <li>Business ID: 1372720</li>
          <li>Rudolf-Breitscheid-Straße 160c</li>
          <li>14482 Potsdam, Germany</li>
        </ul>
        <p>
          If you have any questions or concerns about how we handle personal data, please contact us
          at <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>

        <h2>3. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register to
          the services, express an interest in obtaining information about us or our products and
          services, when you participate in activities on the services, or otherwise when you
          contact us. The personal information that we collect depends on the context of your
          interactions with us and the services, the choices you make, and the products and features
          you use. The personal information we collect may include the following:
        </p>
        <ul>
          <li>Email addresses</li>
          <li>Debit or credit card numbers</li>
          <li>Your name</li>
          <li>
            Personal or sensitive information you provide to our services (e.g. content entered to
            note pages or flashcards)
          </li>
          <li>Your IP address</li>
          <li>Date and time when you interact with our services</li>
          <li>Browser and device characteristics</li>
        </ul>
        <p>
          Account/Login Data. We may provide you with the option to register at our services. This
          can be done with a Memoriter account. For this type of account we need to process your
          email address. You might also ude existing social media account details, like your
          Facebook, Twitter, or other social media account. If you choose to register in this way,
          we might collect the information described in a section called "HOW DO WE HANDLE YOUR
          SOCIAL LOGINS?" below.
        </p>
        <p>
          Payment Data. We may collect data necessary to process your payment if you make purchases
          or donations, such as your payment instrument number, and the security code associated
          with your payment instrument. All payment data is stored by a third party service, Stripe.
          You may find their privacy policy here:{' '}
          <a href='https://stripe.com/privacy' target='_blank' rel='noreferrer'>
            https://stripe.com/privacy
          </a>
          .
        </p>
        <p>
          User data. Some of our services allow you to store additional personal data voluntarily.
          This data might not be stored locally but on our servers and includes user data of your
          account as note pages or flashcards.
        </p>
        <p>
          Contact data. If you interact with us directly, for example contacting us via email, we
          might collect personal data such as your email address or the date and time of these
          interactions.
        </p>
        <p>
          Information automatically collect. We automatically collect certain information when you
          visit, use, or navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include device and usage
          information, such as your IP address, browser and device characteristics, operating
          system, language preferences, referring URLs, device name, country, location, information
          about how and when you use our Services, and other technical information. This information
          is needed to maintain the security and operation of our services.
        </p>

        <h2>4. How Personal Information Is Used</h2>
        <p>
          We process your personal information for a variety of reasons, depending on how you
          interact with our services, including:
        </p>
        <ul>
          <li>
            To facilitate account creation and authentication and otherwise manage user accounts. We
            may process your information so you can create and log in to your account, as well as
            keep your account in working order.
          </li>
          <li>
            To provide the essential features of our services such as creating, saving and
            synchronizing user data like note pages or flashcards between devices.
          </li>
          <li>
            To fulfill and manage your orders. We may process your information to fulfill and manage
            your orders, payments, returns, and exchanges made through the services.
          </li>
          <li>
            To request feedback. We may process your information when necessary to request feedback
            and to contact you about your use of our services.
          </li>
          <li>
            To save or protect an individual's vital interest. We may process your information when
            necessary to save or protect an individual's vital interest, such as to prevent harm.
          </li>
        </ul>
        <p>
          WE DO NOT SELL OR SHARE YOUR PERSONAL DATA WITH THIRD PARTIES, UNLESS REQUIRED FOR LEGAL
          OBLIGATIONS.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We may use cookies and similar technologies to access or store information.
          {/* -UNUSED- Specific
          information about how we use such technologies and how you can refuse certain cookies is
            set out in our Cookie notice: <Link to='/cookies'>https://www.memoriter.de/cookies</Link>. */}
        </p>

        <h2>6. Storage Period</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the
          purposes set out in this privacy policy, unless a longer retention period is required or
          permitted by law (such as tax, accounting, or other legal requirements). No purpose in
          this notice will require us keeping your personal information for longer than the period
          of time in which users have an account with us, or, if this is not possible (for example,
          because your personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any further processing until
          deletion is possible.
        </p>

        <h2>7. Your Privacy Rights</h2>
        <p>
          In some regions (like the EEA and UK), you have certain rights under applicable data
          protection laws. These may include the right (i) to request access and obtain a copy of
          your personal information, (ii) to request rectification or erasure; (iii) to restrict the
          processing of your personal information; and (iv) if applicable, to data portability. In
          certain circumstances, you may also have the right to object to the processing of your
          personal information. You can make such a request by contacting us by using the contact
          details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
        </p>
        <p>
          We will consider and act upon any request in accordance with applicable data protection
          laws.
        </p>
        <p>
          If you are located in the EEA or UK and you believe we are unlawfully processing your
          personal information, you also have the right to complain to your local data protection
          supervisory authority. You can find their contact details here:{' '}
          <a
            href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'
            target='_blank'
            rel='noreferrer'
          >
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </p>
        <p>
          If you are located in Switzerland, the contact details for the data protection authorities
          are available here:{' '}
          <a href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank' rel='noreferrer'>
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </a>
          .
        </p>
        <p>
          Withdrawing your consent: If we are relying on your consent to process your personal
          information, you have the right to withdraw your consent at any time. You can withdraw
          your consent at any time by contacting us by using the contact details provided in the
          section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the processing before its
          withdrawal nor, will it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>
        <p>
          Opting out of marketing and promotional communications: You can unsubscribe from our
          marketing and promotional communications at any time by clicking on the unsubscribe link
          in the emails that we send, or by contacting us using the details provided in the section
          "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the
          marketing lists. However, we may still communicate with you — for example, to send you
          service-related messages that are necessary for the administration and use of your
          account, to respond to service requests, or for other non-marketing purposes.
        </p>
        <p>
          Account Information. If you would at any time like to review or change the information in
          your account or terminate your account, you can log in to your account settings and update
          your user account.
        </p>
        <p>
          Upon your request to terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some information in our
          files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </p>
        <p>
          Cookies and similar technologies: Most Web browsers are set to accept cookies by default.
          If you prefer, you can usually choose to set your browser to remove cookies and to reject
          cookies. If you choose to remove cookies or reject cookies, this could affect certain
          features or services of our Services. To opt out of interest-based advertising by
          advertisers on our Services visit http://www.aboutads.info/choices/. For further
          information, please see our Cookie Notice: http://www.memoriter.de/Cookies.
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>

        <h2>9. Specific privacy Rights to California Residents</h2>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits
          our users who are California residents to request and obtain from us, once a year and free
          of charge, information about categories of personal information (if any) we disclosed to
          third parties for direct marketing purposes and the names and addresses of all third
          parties with which we shared personal information in the immediately preceding calendar
          year. If you are a California resident and would like to make such a request, please
          submit your request in writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a registered account with
          our saervices, you have the right to request removal of unwanted data that you publicly
          create. To request removal of such data, please contact us and include the email address
          associated with your account and a statement that you reside in California:{' '}
          <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>. We will make sure the data
          is not publicly displayed at the services, but please be aware that the data may not be
          completely or comprehensively removed from all our systems (e.g., backups, etc.).
        </p>

        <h3>CCPA Privacy Notice</h3>
        <p>The California Code of Regulations defines a "resident" as:</p>
        <p>
          (1) every individual who is in the State of California for other than a temporary or
          transitory purpose and (2) every individual who is domiciled in the State of California
          who is outside the State of California for a temporary or transitory purpose
        </p>
        <p>All other individuals are defined as "non-residents."</p>
        <p>
          If this definition of "resident" applies to you, we must adhere to certain rights and
          obligations regarding your personal information.
        </p>

        <h3>How We Use and Share Your Personal Information</h3>
        <p>
          More information about our data collection and sharing practices can be found in this
          privacy notice and our Cookie Notice: http://www.memoriter.de/Cookies
        </p>
        <p>
          You may contact us by email at contact@memoriter.de, or by referring to the contact
          details at the bottom of this document.
        </p>
        <p>
          If you are using an authorized agent to exercise your right to opt out we may deny a
          request if the authorized agent does not submit proof that they have been validly
          authorized to act on your behalf.
        </p>

        <h3>Will your information be shared with anyone else?</h3>
        <p>
          Memoriter LLC has not disclosed, sold, or shared any personal information to third parties
          for a business or commercial purpose in the preceding twelve (12) months. Memoriter LLC
          will not sell or share personal information in the future belonging to website visitors,
          users, and other consumers.
        </p>

        <h3>Your Rights With Respect to Your Personal Data</h3>
        <p>
          You can ask for the deletion of your personal information. If you ask us to delete your
          personal information, we will respect your request and delete your personal information,
          subject to certain exceptions provided by law, such as (but not limited to) the exercise
          by another consumer of his or her right to free speech, our compliance requirements
          resulting from a legal obligation, or any processing that may be required to protect
          against illegal activities.
        </p>
        <p>Depending on the circumstances, you have a right to know:</p>
        <ul>
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>the purposes for which the collected personal information is used;</li>
          <li>whether we sell your personal information to third parties;</li>
          <li>
            the categories of personal information that we sold or disclosed for a business purpose;
          </li>
          <li>
            the categories of personal information that we sold, shared, or disclosed for a business
            purpose;
          </li>
          <li>
            the business or commercial purpose for collecting, selling, or sharing personal
            information; and
          </li>
          <li>the specific pieces of personal information we collected about you.</li>
        </ul>
        <p>
          In accordance with applicable law, we are not obligated to provide or delete consumer
          information that is de-identified in response to a consumer request or to re-identify
          individual data to verify a consumer request.
        </p>
        <p>We will not discriminate against you if you exercise your privacy rights.</p>
        <p>We do not process consumer's sensitive personal information.</p>
        <p>
          Upon receiving your request, we will need to verify your identity to determine you are the
          same person about whom we have the information in our system. These verification efforts
          require us to ask you to provide information so that we can match it with information you
          have previously provided us. For instance, depending on the type of request you submit, we
          may ask you to provide certain information so that we can match the information you
          provide with the information we already have on file, or we may contact you through a
          communication method (e.g., phone or email) that you have previously provided to us. We
          may also use other verification methods as the circumstances dictate.
        </p>
        <p>
          We will only use personal information provided in your request to verify your identity or
          authority to make the request. To the extent possible, we will avoid requesting additional
          information from you for the purposes of verification. However, if we cannot verify your
          identity from the information already maintained by us, we may request that you provide
          additional information for the purposes of verifying your identity and for security or
          fraud-prevention purposes. We will delete such additionally provided information as soon
          as we finish verifying you.
        </p>

        <h2>10. Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. The updated version will be indicated
          by an updated date and the updated version will be effective as soon as it is accessible.
          If we make material changes to this privacy policy, we may notify you either by
          prominently posting a notice of such changes or by directly sending you a notification. We
          encourage you to review this privacy policy frequently to be informed of how we are
          protecting your information.
        </p>
      </article>
    </WebsiteLayout>
  );
};
export default Privacy;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Privacy Policy'
      description='At Memoriter we think privacy and data protection are importent. Therefore this page contains information regarding how we use and process personal data.'
      keywords='privacy, data protection, policy, legal'
      type='website'
    />
  );
};
