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
    <a v-if="organisation.org_email_office" v-bind:href="`mailto:${organisation.org_email_office}`" class="is-small">
      <i class="fas fa-at"></i>
    </a>
    <p class="is-small has-text-grey" v-if="organisation.org_tel_office">
      <i class="fas fa-question-circle"></i> {{organisation.org_tel_office }}
    </p>
    <p class="is-small has-text-grey" v-if="organisation.org_tel_help">
      <i class="fas fa-exclamation-circle"></i> {{organisation.org_tel_help }}
    </p>
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