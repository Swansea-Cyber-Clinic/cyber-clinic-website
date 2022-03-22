<template>
<div id="wrapper">
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><strong>{{ $t('branding.organisation_name') }}</strong></router-link>
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
      <div class="navbar-end">
        <router-link to="/service-map" class="navbar-item">{{ $t('pages.service_mapping') }}</router-link>
        <router-link to="/add-service" class="navbar-item">{{ $t('pages.add_service') }}</router-link>
        <router-link to="/about" class="navbar-item">{{ $t('pages.about') }}</router-link>
        <router-link to="/team" class="navbar-item">{{ $t('pages.team') }}</router-link>
        <router-link to="/privacy" class="navbar-item">{{ $t('pages.privacy_policy') }}</router-link>
        <div class="navbar-item">{{ $t('language') }} <LocaleChanger/></div>
      </div>
    </div>
  </nav>
  
  <section class="section">
    <router-view/>
  </section>

  <footer class="footer">
    <small>
      <p v-html="$t('branding.blurb_1')"></p>
      <p v-html="$t('branding.blurb_2')"></p>
      <p v-html="$t('branding.blurb_3')"></p>
      <a rel='license' href='http://creativecommons.org/licenses/by-sa/4.0/'><img alt='Creative Commons Licence' style='border-width:0' src='https://i.creativecommons.org/l/by-sa/4.0/80x15.png' /></a>
    </small>
  </footer>

</div>
</template>

<script>
import LocaleChanger from './components/LocaleChanger.vue'

export default {
  data () {
    return {
      showMobileMenu: false
    }
  },
  components: {
    LocaleChanger
  }
}

</script>

<style lang="scss">
@import '../node_modules/bulma'
</style>
