"use client";

import PolicyListing from "@/components/PolicyListing";
import { FullWidthContent } from "@/components/Sections";
import Link from "next/link";
// export const metadata = {
//   title: "Privacy Policy",
//   // description: "About PCT Conformal Coating",
// };
export default function PrivacyPolicy() {
  const contentTable = [
    `WHAT INFORMATION DO WE COLLECT?`,
    `HOW DO WE PROCESS YOUR INFORMATION?`,
    `WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?`,
    `WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?`,
    `HOW LONG DO WE KEEP YOUR INFORMATION?`,
    `HOW DO WE KEEP YOUR INFORMATION SAFE?`,
    `DO WE COLLECT INFORMATION FROM MINORS?`,
    `WHAT ARE YOUR PRIVACY RIGHTS?`,
    `CONTROLS FOR DO-NOT-TRACK FEATURES`,
    `DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?`,
    `DO WE MAKE UPDATES TO THIS NOTICE?`,
    `HOW CAN YOU CONTACT US ABOUT THIS NOTICE?`,
    `HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?`,
  ];
  return (
    <section>
      <FullWidthContent className={"max-w-[1920px]"}>
        <div className="py-8 md:py-14">
          <h1 className="text-center text-3xl md:text-5xl">Privacy Policy</h1>
        </div>
        <div className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            PRIVACY NOTICE
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]">
            {`Last updated __________

This privacy notice for __________ ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:`}
          </p>
          <PolicyListing
            list={[
              `Visit our website at pctconformalcoating.com, or any website of ours that links to this privacy notice`,
              `Engage with us in other related ways, including any sales, marketing, or events`,
            ]}
          />
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]">
            {`Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at __________.`}
          </p>
        </div>
         <div className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            SUMMARY OF KEY POINTS
          </h2>
          <p
            className="whitespace-pre-wrap py-[13px] md:py-[15px]"
            dangerouslySetInnerHTML={{
              __html: `<b>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also <a href="#tableOfContent" class="underline">click here</a> to go directly to our table of contents.</b>

<b>What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with __________ and the Services, the choices you make, and the products and features you use. Click <a href="#personalInformationDisclose" class="underline">here</a> to learn more.
            
<b>Do we process any sensitive personal information?</b> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. <a href="#sensitivePersonalInformation" class="underline">Click here</a> to learn more.
            
<b>Do we receive any information from third parties?</b> We do not receive any information from third parties.
            
<b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. 
<a href="#HOW DO WE PROCESS YOUR INFORMATION?" class="underline">Click here</a> to learn more.
            
<b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. <a href="#WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" class="underline">Click here</a> to learn more.
            
<b>How do we keep your information safe?</b> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click <a href="#HOW DO WE KEEP YOUR INFORMATION SAFE?" class="underline">here</a> to learn more.
            
<b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <a href="#WHAT ARE YOUR PRIVACY RIGHTS?" class="underline">here</a> to learn more.
            
<b>How do you exercise your rights?</b> The easiest way to exercise your rights is by filling out our data subject request form available <a href="https://app.termly.io/notify/5ff4da52-0df2-4a72-aca3-3c3b4257ea39" target="_blank" class="underline">here</a>. You may also contact us via email at __________, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
            
Want to learn more about what __________ does with any information we collect? Click <a href="#tableOfContent" class="underline">here</a> to review the notice in full.`,
            }}
          ></p>
        </div>
        <div className="mb-6 md:mb-10">
          <h2
            id="tableOfContent"
            className="mb-4 text-red text-xl md:text-2xl font-rob500"
          >
            TABLE OF CONTENTS
          </h2>
          <ul className="list-decimal space-y-1">
            {contentTable.map((item) => {
              return (
                <li
                  key={item}
                  className="text-[16px] md:text-lg font-pop400 underline ml-5"
                >
                  <Link href={`#${item}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="#WHAT INFORMATION DO WE COLLECT?" className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <p
            id="personalInformationDisclose"
            className="whitespace-pre-wrap text-[13px] md:text-[15px]"
            dangerouslySetInnerHTML={{
              __html: `<b>Personal information you disclose to us</b>
<b>In Short:</b> We collect personal information that you provide to us.
We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
            `,
            }}
          ></p>
          <PolicyListing
            list={["names", "phone numbers", "email addresses", "job titles"]}
          />
          <p
            id="sensitivePersonalInformation"
            className="whitespace-pre-wrap text-[13px] md:text-[15px]"
          >
            {`Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:`}
          </p>
          <PolicyListing list={["confidential material"]} />
          <p
            className="whitespace-pre-wrap text-[13px] md:text-[15px]"
            dangerouslySetInnerHTML={{
              __html: `Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by PayPal. You may find their privacy notice link(s) here: <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" class="underline">https://www.paypal.com/webapps/mpp/ua/privacy-full</a>.
All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
        

<b>Information automatically collected</b>
<b>In Short:</b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
The information we collect includes:`,
            }}
          ></p>
          <PolicyListing
            list={[
              `Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).`,
              `Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.`,
              `Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.`,
            ]}
          />
        </div>
        <div id="HOW DO WE PROCESS YOUR INFORMATION?" className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p
            className="whitespace-pre-wrap text-[13px] md:text-[15px]"
            dangerouslySetInnerHTML={{
              __html: `<b>In Short:</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
<b>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</b>
To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.`,
            }}
          ></p>
          <PolicyListing
            list={[
              `<b>To deliver and facilitate delivery of services to the user.</b> We may process your information to provide you with the requested service.`,
              `<b>To respond to user inquiries/offer support to users.</b> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.`,
              `<b>To enable user-to-user communications.</b> We may process your information if you choose to use any of our offerings that allow for communication with another user.`,
              `<b>To request feedback.</b> We may process your information when necessary to request feedback and to contact you about your use of our Services.`,
              `<b>To send you marketing and promotional communications.</b> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "<a href="#WHAT ARE YOUR PRIVACY RIGHTS?" className='underline' >WHAT ARE YOUR PRIVACY RIGHTS?</a>" below).`,
              `<b>To deliver targeted advertising to you.</b> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.`,
              `<b>To protect our Services.</b> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.`,
              `<b>To evaluate and improve our Services, products, marketing, and your experience.</b> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.`,
              `<b>To identify usage trends.</b> We may process information about how you use our Services to better understand how they are being used so we can improve them.`,
              `<b>To determine the effectiveness of our marketing and promotional campaigns.</b> W e may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.`,
              `<b>To comply with our legal obligations.</b> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.`,
            ]}
          />
        </div>
        <div
          id="WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h2>
          <p
            className="whitespace-pre-wrap py-[13px] md:py-[15px]"
            dangerouslySetInnerHTML={{
              __html: `<b>In Short:</b> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
<b>If you are located in Canada, this section applies to you.</b>
We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click <a href="#Withdrawing your consent" class="underline">here</a> to learn more.
In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:`,
            }}
          ></p>
          <PolicyListing
            list={[
              `If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way`,
              `For investigations and fraud detection and prevention`,
              `For business transactions provided certain conditions are met`,
              `If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim`,
              `For identifying injured, ill, or deceased persons and communicating with next of kin`,
              `If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse`,
              `If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province`,
              `If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records`,
              `If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced`,
              `If the collection is solely for journalistic, artistic, or literary purposes`,
              `If the information is publicly available and is specified by the regulations`,
            ]}
          />
        </div>
        <div
          id="WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `<b>In Short:</b> We may share information in specific situations described in this section and/or with the following third parties.
<b>Vendors, Consultants, and Other Third-Party Service Providers.</b> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The third parties we may share personal information with are as follows:`}
}></p>
<PolicyListing list={
  [
    `<b>Allow Users to Connect to Their Third-Party Accounts</b>
Google account`,
    `<b>Content Optimization</b>
Google Site Search`,
    `<b>Retargeting Platforms</b>
Google Ads Remarketing and Google Analytics Remarketing`,
    `<b>Social Media Sharing and Advertising</b>
Facebook advertising and Google+ social plugins`,
    `<b>User Account Registration and Authentication</b>
Google Sign-In`,
    `<b>Web and Mobile Analytics</b>
Google Analytics, Google Tag Manager and Google Ads`,
    `<b>Website Hosting</b>
Shopify
We also may need to share your personal information in the following situations:`,
    `<b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.`,
  ]
} />
        </div>
        <div
          id="HOW LONG DO WE KEEP YOUR INFORMATION?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `<b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.
We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`}
          }>
          </p>
        </div>
        <div
          id="HOW DO WE KEEP YOUR INFORMATION SAFE?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `<b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.
We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at krager@pctcc.com.`}
          }>
          </p>
        </div>
        <div
          id="DO WE COLLECT INFORMATION FROM MINORS?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
          {__html: `<b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.
We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at krager@pctcc.com.`}
          }>
            
          </p>
        </div>
        <div id="WHAT ARE YOUR PRIVACY RIGHTS?" className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `In Short: In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "<a href="#HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" class="underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
We will consider and act upon any request in accordance with applicable data protection laws.
If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html" target="_blank" class="underline">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html</a>.
If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" class="underline">https://www.edoeb.admin.ch/edoeb/en/home.html</a.`}
          }>
          </p>
<p id="Withdrawing your consent" className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
  {__html: `Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" class="underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "<a href="#HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" class="underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
If you have questions or comments about your privacy rights, you may email us at <a href="mailto:krager@pctcc.com">krager@pctcc.com</a>.`}
}></p>

        </div>
        <div id="CONTROLS FOR DO-NOT-TRACK FEATURES" className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]">
            {`Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.`}
          </p>
        </div>
        <div
          id="DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `<b>In Short:</b> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).`}
          }>
          </p>
        </div>
        <div id="DO WE MAKE UPDATES TO THIS NOTICE?" className="mb-6 md:mb-10">
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]">
            {`In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.`}
          </p>
        </div>
        <div
          id="HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]">
            {`If you have questions or comments about this notice, you may email us at krager@pctcc.com or by post to:
__________
__________
__________`}
          </p>
        </div>
        <div
          id="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
          className="mb-6 md:mb-10"
        >
          <h2 className="mb-4 text-red text-xl md:text-2xl font-rob500">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="whitespace-pre-wrap py-[13px] md:py-[15px]" dangerouslySetInnerHTML={
            {__html: `Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here.
This privacy policy was created using Termly's <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" class='underline'>Privacy Policy Generator</a>.`}
          }>

          </p>
        </div> 
      </FullWidthContent>
    </section>
  );
}
