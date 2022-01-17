<template>
  <div class="home">
    <section class="hero is-small is-dark">
      <div class="hero-body">
          <p class="title is-size-1">
            Swansea Cyber Clinic
          </p>
          <p class="subtitle">
            Researching support services for victims of cyber crime in South Wales
          </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'Home | Cyber Clinic'
  },
}
</script>
