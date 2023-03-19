import React, { FC } from 'react';
import { HeadFC, Link } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Terms: FC = () => {
  return (
    <WebsiteLayout currentPage=''>
      {/* main body with text */}
      <article className={styles.legal_main}>
        <h1>Memoriter Terms of Use</h1>

        <p>
          <strong>Last Updated: March 16, 2023</strong>
        </p>

        <p>
          The Memoriter website is a copyrighted work belonging to Memoriter LLC ("Company," "we,"
          "us," or "our"). Certain features of the site may be subject to additional guidelines,
          terms, or rules, which will be posted on the site in connection with such features.
        </p>
        <p>
          All such additional terms, guidelines, and rules between us and you and any organisation
          or entity you represent (collectively, "you") are incorporated by reference into these
          terms.
        </p>
        <p>
          These terms of use described the legally binding terms and conditions that oversee your
          use of the site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and
          you represent that you have the authority and capacity to enter into these Terms. IF YOU
          DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
        </p>

        <h2>TL;DR</h2>
        <ul>
          <li>Do not use our services to do illegal stuff or other bad things.</li>
          <li>
            As an open source project, Memoriter is licensed under the{' '}
            <a
              href='https://github.com/MemoriterApp/MemoriterWebsite/blob/main/LICENSE'
              target='_blank'
              rel='noreferrer'
            >
              GNU General Public License v3.0
            </a>
            .
          </li>
          <li>
            Some content of our services is intellectual property of third parties and might be
            licensed under different terms and conditions.
          </li>
          <li>Enjoy Memoriter!</li>
        </ul>

        <h2>Access to Our Services</h2>
        <p>
          Memoriter LLC reserves the right to change, suspend, or cease the Site with or without
          notice to you. You approved that Memoriter LLC will not be held liable to you or any third
          party for any change, interruption, or termination of the Site or any part.
        </p>
        <p>
          No Support or Maintenance. You agree that Memoriter LLC will have no obligation to provide
          you with any support in connection with our services.
        </p>
        <p>
          To ensure safety and availability od our services for all users please use our services in
          a lawful way. When using our services and website, you need to comply with the following
          rules:
        </p>
        <ul>
          <li>You must not attempt to gain unlawful access to our services.</li>
          <li>
            You must not attack our website via any kind of volumetric attack, or attempt to exploit
            any bugs, weaknesses and vulnerabilities present in our website.
          </li>
          <li>
            You must not misuse the site by introducing harmful materials, programs or code designed
            to negatively affect the operation of our services.
          </li>
        </ul>
        <p>
          These particular rules might also be against the law, and you may be committing a criminal
          offence by engaging in these activities.
        </p>

        <h2>User Content</h2>
        <p>
          You are exclusively responsible for the content you post on Memoriter. You bear all risks
          associated with use of your user Content. You hereby certify that your User Content does
          not violate our Acceptable Use Policy. You may not represent or imply to others that your
          personal user content is in any way provided, sponsored or endorsed by Memoriter LLC.
          Because you alone are responsible for your user Content, you may expose yourself to
          liability. Memoriter LLC is not obliged to backup any user content that you post. In
          addition your user content may be deleted at any time without prior notice to you. You are
          solely responsible for making your own backup copies of your User Content if you desire.
        </p>
        <p>
          You agree not to use the Site to collect, upload, transmit, display, or distribute any
          content (i) that violates any third-party right or any intellectual property or
          proprietary right; (ii) that is unlawful, harassing, abusive, tortious, threatening,
          harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally
          misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism,
          bigotry, hatred, or physical harm of any kind against any group or individual; (iii) that
          is harmful to minors in any way; or (iv) that is in violation of any law, regulation, or
          obligations or restrictions imposed by any third party.
        </p>
        <p>
          In addition, you agree not to: (i) upload, transmit, or distribute to or through our
          services any software intended to damage or alter a computer system or data; (ii) send
          through our services unsolicited or unauthorized advertising, promotional materials, junk
          mail, spam, chain letters, pyramid schemes, or any other form of duplicative or
          unsolicited messages; (iii) use our services to harvest, collect, gather or assemble
          information or data regarding other users without their consent; (iv) interfere with,
          disrupt, or create an undue burden on servers or networks connected to our services, or
          violate the regulations, policies or procedures of such networks; (v) attempt to gain
          unauthorized access to our services, whether through password mining or any other means;
          (vi) harass or interfere with any other user’s use and enjoyment of our services; or (vi)
          use software or automated agents or scripts to produce multiple accounts on our services,
          or to generate automated searches, requests, or queries to our services.
        </p>
        <p>
          If you provide Memoriter LLC with any feedback or suggestions regarding the Site, you
          hereby assign to Memoriter LLC all rights in such Feedback and agree that Memoriter LLC
          shall have the right to use and fully use such Feedback and related information in any
          manner it believes appropriate. Memoriter LLC will treat any feedback you provide to
          Memoriter LLC as non-confidential and non-proprietary.
        </p>

        <h2>Privacy</h2>
        <p>
          You can learn more about how we protect user data under the following link:{' '}
          <Link to='/privacy'>https://memoriter.de/privacy</Link>.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The site is provided on an "as-is" and "as available" basis, and Memoriter LLC expressly
          disclaims any and all warranties and conditions of any kind, whether express, implied, or
          statutory, including all warranties or conditions of merchantability, fitness for a
          particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We do not make
          guarantees that the site will meet your requirements, will be available on an
          uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of
          viruses or other harmful code, complete, legal, or safe. If applicable law requires any
          warranties with respect to the site, all such warranties are limited in duration to ninety
          (90) days from the date of first use.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of implied warranties, so the above
          exclusion may not apply to you. Some jurisdictions do not allow limitations on how long an
          implied warranty lasts, so the above limitation may not apply to you.
        </p>

        <h2>Limitation on Liability</h2>
        <p>
          To the maximum extent permitted by law, in no event shall Memoriter LLC or our suppliers
          be liable to you or any third-party for any lost profits, lost data, costs of procurement
          of substitute products, or any indirect, consequential, exemplary, incidental, special or
          punitive damages arising from or relating to these terms or your use of, or incapability
          to use the site even if Memoriter LLC has been advised of the possibility of such damages.
          Access to and use of the site is at your own discretion and risk, and you will be solely
          responsible for any damage to your device or computer system, or loss of data resulting
          therefrom.
        </p>
        <p>
          Some jurisdictions do not allow the limitation or exclusion of liability for incidental or
          consequential damages, so the above limitation or exclusion may not apply to you.
        </p>

        <h2>External links or Third Party Providers</h2>
        <p>
          To make full use of our website and services, you may need to follow a link of a third
          party domain. You may also need to register with or make an account with a third party
          (for example, making an account at GitHub). We are not responsible for any content or
          material posted on those external websites or services, and are not responsible for the
          accuracy or correct labelling of links.
        </p>
        <p>
          They naturally will have their own privacy policies and terms of services we assume you
          are familiar with and agreed to, if you take part in our communities or services outside
          of this domain.
        </p>
        <p>
          Likewise, we are not responsible for any issues directly or indirectly arising out of
          their oversight, irresponsibility, negligence or which occur via a third party’s website
          or service. We have no power over these third parties and so cannot be held liable for
          problems relating to or happening on those sites.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless Memoriter, our contributors, licensors,
          and partners; and the respective directors, officers, employees and agents of the
          aforementioned (“indemnified parties”), from and against any and all third party claims
          and expenses, including legal or attorney fees, arising out of or related to your use of
          our website and services (including, but not limited to, from your content submissions or
          from your violation of any of these terms).
        </p>

        <h2>Disputes and Jurisdiction</h2>
        <p>
          In the event of any dispute, in the first instance you will seek to settle this with us
          informally by contacting us via{' '}
          <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>
        <p>
          If we’re unable to informally come to a solution, you agree we will go through arbitration
          at a place of our choosing. In any event, you’ll need to give us written notice otherwise
          we won’t be able to help you.
        </p>
        <p>
          These terms represent an agreement between you and us. If any provision of these terms are
          held to be invalid or unenforceable, you agree that provision will be limited to the
          minimum enforcement possible, and the remaining terms held with full effect.
        </p>

        <h2>Licenses</h2>
        <p>
          Various parts of our services use different licenses. Anyone intending to use or replicate
          the website and services should do their own research and due diligence into the various
          licenses used to ensure they are suitable for an intended purpose.
        </p>
        <p>
          The majority of Memoriter is licensed under the GNU General Public License as published by
          the Free Software Foundation; either version 3 of the License, or (at your option) any
          later version. Memoriter is distributed in the hope that it will be useful, but without
          any warranty, without even the implied warranty of merchantability or fitness for a
          particular purpose. See the{' '}
          <a
            href='https://github.com/MemoriterApp/MemoriterWebsite/blob/main/LICENSE'
            target='_blank'
            rel='noreferrer'
          >
            GNU General Public License 3.0
          </a>{' '}
          for more details.
        </p>
        <p>
          You can find more information of the licenses of specific third party content licensed by
          Memoriter LLC here:
        </p>
        <ul>
          <li>
            All fonts are licensed under the{' '}
            <a href='http://scripts.sil.org/OFL' target='_blank' rel='noreferrer'>
              SIL Open Font License, Version 1.1.
            </a>
          </li>
          <li>
            The{' '}
            <a href='https://twemoji.twitter.com/' target='_blank' rel='noreferrer'>
              Twitter emoji graphics
            </a>{' '}
            ("Twemoji") are licensed under{' '}
            <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank' rel='noreferrer'>
              CC-BY 4.0.
            </a>
          </li>
          <li>
            Software libraries, frameworks and similar third party technologies used for the
            development of Memoriter are licensed under the{' '}
            <a href='https://spdx.org/licenses/MIT.html' target='_blank' rel='noreferrer'>
              MIT license
            </a>{' '}
            or similar open source licenses. The specific license texts can be found alongside the
            source code files of the corresponding technologies used by Memoriter.
          </li>
        </ul>

        <h2>Contact Information</h2>
        <ul>
          <li>Memoriter LLC</li>
          <li>Business ID: 1372720</li>
          <li>Rudolf-Breitscheid-Straße 160c</li>
          <li>14482 Potsdam, Germany</li>
          <li>
            Email: <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>
          </li>
        </ul>

        <h2>Changes to these Terms and Conditions</h2>
        <p>
          We may update these terms of use from time to time. The updated version will be indicated
          by an updated date and the updated version will be effective as soon as it is accessible.
          If we make material changes to this terms of use, we may notify you either by prominently
          posting a notice of such changes or by directly sending you a notification. We encourage
          you to review this terms of use frequently.
        </p>
      </article>
    </WebsiteLayout>
  );
};
export default Terms;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Terms of Use'
      description='This page contains information about the legal agreement between Memoriter and customers.'
      keywords='terms, conditions, legal'
      type='website'
    />
  );
};
