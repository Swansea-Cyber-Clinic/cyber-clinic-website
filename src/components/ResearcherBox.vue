<template>
  <div class="column is-3">
    <figure class="image mb-4">
      <img v-bind:src="researcher.image">
    </figure>
    <h3 class="is-size-4">
      {{ researcher.name }}
    </h3>
    <p class="is-small has-text-grey">
      {{ researcher.description }}
    </p>
    <a v-if="researcher.twitter" v-bind:href="researcher.twitter" class="is-small">
      <i class="fab fa-twitter"></i>
    </a>
    <a v-if="researcher.link" v-bind:href="researcher.link" class="is-small">
      <i class="fas fa-home"></i>
    </a>
    <a v-if="researcher.email" v-bind:href="researcher.email" class="is-small">
      <i class="fas fa-envelope"></i>
    </a>
    <a v-if="researcher.uni" v-bind:href="researcher.uni" class="is-small">
      <i class="fas fa-university"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ResearcherBox',
  props: {
    researcher: Object
  }
}
</script>