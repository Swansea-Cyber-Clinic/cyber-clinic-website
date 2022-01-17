<template>
  <div class="about">
    <div class="columns is-multiline">
      <div class="column is-12">
        <section class="hero is-dark">
          <p class="title">Our team</p>
          <p class="subtitle">Get to know us better!</p>
        </section>
      </div>
      <ResearcherBox
      v-for="researcher in researchers"
      v-bind:key="researcher.id"
      v-bind:researcher="researcher" />

    </div>
  </div>
</template>

<script>

import ResearcherBox from '@/components/ResearcherBox'

export default {
  name: 'Team',
  components: {
    ResearcherBox
  },
  mounted() {
    document.title = 'Team | Cyber Clinic'
  },
  data() {
    return {
      researchers: [
        {
          'name': 'Dr Sara Correia',
          'twitter': 'https://twitter.com/SGCorreia',
          'uni': 'https://www.swansea.ac.uk/staff/law/correia-s-g/',
          'email': 'mailto:s.correia@swansea.ac.uk',
          'job_title': 'Lecturer in Cyber Threats',
          'description': 'Principal Investigator'
        },
        {
          'name': 'Dr Nnenna Ifeanyi-Ajufo',
          'uni': 'https://www.swansea.ac.uk/staff/law/ifeanyi-ajufo-n-o/',
          'email': 'mailto:n.o.ifeanyi-ajufo@swansea.ac.uk',
          'job_title': 'Senior Lecturer in Law & Technology',
          'description': 'Researcher'
        },
        {
          'name': 'Dr Stuart Nicholson',
          'uni': 'https://www.swansea.ac.uk/staff/science/compsci/nicholson-s-a/',
          'email':'mailto:s.a.nicholson@swansea.ac.uk',
          'job_title': 'Lecturer in Human Computer Interaction',
          'description': 'Researcher'
        },
        {
          'name': 'Dr Martin Porcheron',
          'link': 'https://www.porcheron.uk',
          'twitter': 'https://twitter.com/MPorcheron',
          'description': 'Researcher',
          'email': 'mailto:m.a.w.porcheron@swansea.ac.uk',
          'job_title': 'Lecturer in Computer Science',
          'uni': 'https://www.swansea.ac.uk/staff/science/compsci/porcheron-m-a-w/'
        },
        {
          'name': 'Dr Leigh Clark',
          'uni': 'https://www.swansea.ac.uk/staff/science/compsci/clark-l-m-h/',
          'email': 'mailto:l.m.h.clark@swansea.ac.uk',
          'link': 'https://lmhclark.com/',
          'job_title': 'Lecturer in Human Computer Interaction',
          'twitter': 'https://twitter.com/lmhclark',
          'description': 'Researcher'
        },
        {
          'name': 'Genevieve Clifford',
          'link': 'https://home.becquerel.me',
          'twitter': 'https://twitter.com/gencyfrifiadur',
          'email': 'mailto:genevieve.clifford@swansea.ac.uk',
          'description': 'Research Assistant',
        },
      ]
    }
  }
}
</script>