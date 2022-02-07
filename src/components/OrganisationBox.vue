<template>
  <div class="column is-3">
    <h3 class="is-size-4">
      {{ organisation.org_name }}
    </h3>
    <p class="is-small has-text-grey">
      {{ organisation.org_description }}
    </p>
    <p v-if="organisation.org_web" v-bind:href="organisation.org_web" class="is-small">
      <a v-bind:href="organisation.org_web" class="is-small">
      Website</a>
    </p>
    <p v-if="organisation.org_email_office">
      <a v-bind:href="`mailto:${organisation.org_email_office}`" class="is-small">
      Email (enquiries)</a>
    </p>
    <p v-if="organisation.org_email_help">
      <a v-bind:href="`mailto:${organisation.org_email_help}`" class="is-small">
      Email (helpline)</a>
    </p>
    <p class="is-small has-text-grey" v-if="organisation.org_tel_office">
      {{organisation.org_tel_office }} (enquiries)
    </p>
    <p class="is-small has-text-grey" v-if="organisation.org_tel_help">
      {{organisation.org_tel_help }} (helpline)
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