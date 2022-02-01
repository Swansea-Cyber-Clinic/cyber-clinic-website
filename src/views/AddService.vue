<template>
  <div class="about">
    <section class="hero is-dark">
      <p class="title">Add Service</p>
      <p class="subtitle">Add a service to our Interactive Service Map</p>
    </section>
    <section class="section">
      <iframe src= "https://forms.office.com/Pages/ResponsePage.aspx?id=LrXKu76f1kOi859mxD3yaGn1tofYq71LnODQeAaeSYlUNkc2MlRNOEE2VEg1UkxTUU01N0I5MVFUSCQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; width:100%; height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </section>
  </div>
</template>

<script>

export default {
  name: 'About',
  mounted() {
    document.title = 'Add Service | Cyber Clinic'
  }
}
</script>
