<template>
  <div class="about">
    <section class="hero is-dark">
      <p class="title">{{ $t('privacy_policy.title') }}</p>
          <p class="subtitle">{{ $t('privacy_policy.subtitle') }}</p>
    </section>
    <section class="section">
      <div class="content">
        <h2 id="notes">Notes</h2>
        <p>The following is adopted from the template provided by the <a href="https://gdpr.eu/wp-content/uploads/2019/01/Our-Company-Privacy-Policy.pdf">Horizon 2020 Framework Programme</a></p>
        <h2 id="contact-details">Contact details</h2>
        <p>Swansea Cyber Clinic is a website created and deployed by the Swansea Cyber Clinic team as a website for the project. This privacy policy explains how your personal data is collected when you interact with the Swansea Cyber Clinic website or through Microsoft Forms (i.e. Interactive Service Mapping (ISM)) that are used by the Swansea Cyber Clinic. The words ‘we’ and ‘our’ refer to the <a href="mailto:cyberclinic@swansea.ac.uk">Swansea Cyber Clinic</a>.</p>
        <h2 id="what-data-do-we-collect">What data do we collect?</h2>
        <p>No personal data is collected through this website. We optionally collect email addresses from the ISM form. </p>
        <p>Although it is not personal data, we collect the following data about organisations submitted through the ISM form:</p>
        <ul>
          <li>Organisation name</li>
          <li>Description of organisation</li>
          <li>Contact details of organisation</li>
          <li>Self-selected categorisation of organisation into overarching description, nation-level service provision, and if applicable, Welsh Police Force area service provison</li>
        </ul>
        <h2 id="how-will-we-use-your-data">How will we use your data?</h2>
        <p>Email addresses are collected through the ISM form to allow us to update stakeholders that have opted-in when we have updated the database with information, and should we have queries about your response.</p>

        <p>Data collected on organisations through ISM will be used to feed our interactive service mapping web application. We will share the link to this application with our <router-link to="/about">partners</router-link> and assoiciated third sector, local government, and law enforcement agencies, including but not limited to: South Wales Police (SWP), Swansea Council, and Swansea Council for Voluntary Services (SCVS).</p>
        <h2 id="how-will-we-store-your-data">How will we store your data?</h2>
        <p>Raw data collected from the form is stored in a linked online Excel spreadsheet hosted on Swansea University's Sharepoint service. Data submitted here is accessible through Office 365 access rights, which is granted only to <router-link to="/team">our team</router-link>. Anonymised data (i.e. all the data mentioned previously for ISM bar personal emails for submitter) will be transformed into a publicly accessible SQLite database.</p>
        <h2 id="what-are-your-data-protection-rights">What are your data protection rights?</h2>
        <p>We would like to make sure you are fully aware of all your data protection rights. Every user is entitled to the following:</p>
        <ul>
        <li>The right to access — You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
        <li>The right to rectification — You have the right to request that we correct any information you believe is inaccurate. You also have the right to request us to complete the information you believe is incomplete.</li>
        <li>The right to erasure — You have the right to request that we erase your personal data, under certain conditions.</li>
        <li>The right to restrict processing — You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li>The right to object to processing — You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li>The right to data portability — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:cyberclinic@swansea.ac.uk">cyberclinic@swansea.ac.uk</a>.</p>
        <p>In addition, we will also extend these rights to non-personal data held by ourselves, i.e. we will rectify our records with updates to organisation details hosted through ISM.</p>
        <h2 id="cookies">Cookies</h2>
        <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.</p>
        <p>For further information, visit <a href="https://allaboutcookies.org">allaboutcookies.org</a>.</p>
        <h2 id="how-do-we-use-cookies">How do we use cookies?</h2>
        <p>We use functional cookies on this website to determine if you have toggled the drop-down menu to access other links on this website. This cookie will be stored indefinitely on your computer, until the cookie expires. No other cookies are used on this website.</p>
        <h2 id="how-to-manage-cookies">How to manage cookies</h2>
        <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website's features may not function as a result.</p>
        <h2 id="privacy-policies-of-other-websites">Privacy policies of other websites</h2>
        <p>Our website contains links to other websites. Our privacy policy applies only to this website, so if you click on a link to another website, you should read their privacy policy.</p>
        <h2 id="changes-to-our-privacy-policy">Changes to our privacy policy</h2>
        <p>We keep our privacy policy under regular review and place any updates on this web page. This privacy policy was last updated on 1 February 2022.</p>
        <p>Change summary: Included references to Interactive Service Mapping (ISM).</p>
        <p>You can browse through previous versions of this document <a href="https://github.com/Swansea-Cyber-Clinic/cyber-clinic-website/commits/main/src/views/Privacy.vue">here</a>.</p>
        <h2 id="how-to-contact-the-appropriate-authority">How to contact the appropriate authority</h2>
        <p>Should you wish to report a complaint or if you feel that we have not addressed your concern in a satisfactory manner, you may contact the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'About',
  mounted() {
    document.title = 'Privacy Policy | Cyber Clinic'
  }
}
</script>
