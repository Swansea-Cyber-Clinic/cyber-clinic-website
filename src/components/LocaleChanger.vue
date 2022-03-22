<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      langs: [
        {
          'name': 'English',
          'code': 'en'
        },
        {
          'name': 'Español',
          'code': 'es'
        },
        {
          'name': 'Cymraeg',
          'code': 'cy'
        }
      ]
    }
  }
}
</script>