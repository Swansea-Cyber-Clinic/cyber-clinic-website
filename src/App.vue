<template>
<div id="wrapper">
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><strong>Swansea Cyber Clinic</strong></router-link>
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
      <div class="navbar-end">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/team" class="navbar-item">Team</router-link>
        <router-link to="/privacy" class="navbar-item">Privacy Policy</router-link>
      </div>
    </div>
  </nav>
  
  <section class="section">
    <router-view/>
  </section>

  <footer class="footer">
    <small>
      The <strong>Swansea Cyber Clinic</strong> is a joint research project between the <a href="https://www.swansea.ac.uk/law/">HRC School of Law</a> and the <a href="https://www.swansea.ac.uk/science/computationalfoundry/">Computational Foundry</a> at Swansea University.<br>
      Where indicated, content hosted on this site is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br>
      Made with <i class="fas fa-heart"></i> by the <router-link to="/team">Swansea Cyber Clinic team</router-link>.<br>
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>
    </small>
    
  </footer>

</div>
</template>

<script>

export default {
  data () {
    return {
      showMobileMenu: false
    }
  }
}

</script>

<style lang="scss">
@import '../node_modules/bulma'
</style>
