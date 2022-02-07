<template>
  <div class="home">
    <section class="hero is-small is-dark">
      <div class="hero-body">
          <p class="title is-size-1">
            {{ $t('branding.organisation_name') }}
          </p>
          <p class="subtitle">
            {{ $t('branding.motto') }}
          </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = `${this.$t('pages.home')} | ${this.$t('branding.organisation_name')}`
  },
}
</script>
