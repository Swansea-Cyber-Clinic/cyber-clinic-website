<template>
  <div class="column is-3">
    <h3 class="is-size-4">
      {{ organisation.org_name }}
    </h3>
    <p class="is-small has-text-grey">
      {{ organisation.org_description }}
    </p>
    <a v-if="organisation.org_web" v-bind:href="organisation.org_web" class="is-small">
      <i class="fas fa-home"></i>
    </a>
    <a v-if="organisation.org_email_office" v-bind:href="organisation.org_email_office" class="is-small">
      <i class="fa-solid fa-at"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'OrganisationBox',
  props: {
    organisation: Object
  }
}
</script>