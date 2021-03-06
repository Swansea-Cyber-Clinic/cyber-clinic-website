<template>
  <div class="about">
    <section class="hero is-dark">
      <p class="title">About</p>
      <p class="subtitle">Information about the Swansea Cyber Clinic</p>
    </section>
    <section class="section">
      <div class="content">
        <h2>Project Background</h2>
        <p>Digital technology is embedded into daily life and cannot be meaningfully separated from ‘real’ world experiences, including those of crime victims (Powell et al. 2018). ONS (2020) estimates that volumes of fraud and computer misuse (e.g. hacking) approximate all other crime combined. These crimes lead to financial losses and impacts on health and wellbeing (Button & Cross 2017). Additionally, tech now plays a role in gender-based violence (Harris & Vitis 2020) and hate crime (Perry & Olsson 2009, Williams et al. 2020). As such, crimes are increasingly ‘hybrid’, taking place both online and offline. However, the victim response to online harms has been shown to be inconsistent, particularly with respect to identifying vulnerable victims (Skidmore et al. 2020) and addressing repeat victimisation (Correia 2020). In parallel, victim support services vary widely across geographical areas and the extent to which they are equipped to respond to the role of digital tech is ill understood. </p>

        <h2>What are our aims?</h2>
        <p>Researchers at Swansea University in partnership with South Wales Police (SWP) and the Swansea Council for Voluntary Service (SCVS) would like to take stock of the services available to victims locally and understand how we might actively improve them through a ‘Cyber Clinic’ based at the University. Our short-term aims are to (1) explore the extent to which victim services are adequate in a digital world, and (2) develop a ‘Cyber Clinic’ prototype, offering a blend of face-to-face and digital support, to both increase and research individuals’ resilience to and post-victimisation. </p>

        <h2>Who are we?</h2>
        <p>This project is led by <router-link to="/team">researchers</router-link> at Swansea University’s HRC School of Law and the Computational Foundry, in partnership with South Wales Police (SWP) and the Swansea Council for Voluntary Service (SCVS). We are funded by a small ‘Basecamp’ grant from the <a href="https://www.swansea.ac.uk/masi/">Morgan Advanced Studies Institute</a>.</p>

        <h2>What research activities are we planning?</h2>
        <ul>
          <li><b>Service Mapping:</b> Desk research will be undertaken to map what support services are available to victims of cyber and hybrid crimes in South Wales.</li>
          <li><b>Practitioner's Focus Groups:</b> Support practitioners will participate in focus groups to reflect on the impact of digital technology on victimisation and the support that is currently available to crime victims. This data will help refine the service mapping data.</li>
          <li><b>Victim Interviews and Case Study Animations:</b> We will interview individuals of have experienced ‘cyber’ and ‘hybrid’ victimisation, to understand the impact of these crimes and victims’ needs. Data gathered from practitioner focus group and interviews with victims will be used to create (anonymous) animations, illustrating experiences of victimisation to cyber and hybrid crimes.</li>
          <li><b>Co-design Workshops</b> We will run workshops based on established values and practices of co-design. Adapting the interactive ‘Disney method’, we will connect practitioners’ experiences, skills and resources to provide new, practical knowledge about what our prototype Cyber Clinic should look like. </li>
        </ul>

        <h2>What are the research outputs of this project?</h2>
        <ul>
          <li>We will co-design a Cyber Clinic focused on restoring the harms suffered by victims of ‘cyber’ and ‘hybrid’ crimes. Our prototype may include the development and delivery of training sessions, as well as a mix of digital and face-to-face support and research activity.</li>
          <li>We will develop an interactive map of the support services available to victims in South Wales which will both enable the project team to conduct a gap analysis and generate a resource for project partners and the wider public.</li>
          <li>We will also produce a series of short animations aimed at the public, to raise awareness of victimisation and increasing resilience to victimisation.</li>
          <li>This project is intended to develop into a larger study and therefore further funding will be sought from funding bodies.</li>
        </ul>

        <h2>What if I have a complaint or concern about the project?</h2>
        <p>You can contact the Cyber Clinic's shared email box (<a href="mailto:cyberclinic@swansea.ac.uk">cyberclinic@swansea.ac.uk</a>) or <router-link to="/team">one of our research team</router-link>. Alternatively, in line with the university's ethical guidelines, you may prefer to contact the lead researcher's manager - Professor Helen Quane - via the following details:</p>
        <ul>
          <li><i class="fa-solid fa-phone"></i> +44 (0)1792 295113</li>
          <li><i class="fa-solid fa-at"></i> <a href="mailto:h.quane@swansea.ac.uk">h.quane@swansea.ac.uk</a></li>
          <li><i class="fa-solid fa-envelope"></i> HRC School of Law, Richard Price Building, Swansea University, Singleton Park, Swansea, SA2 8PP</li>
        </ul>
        <p>We would like to reassure you that all queries are dealt with confidentially.</p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'About',
  mounted() {
    document.title = 'About | Cyber Clinic'
  }
}
</script>
