<template>
  <div class="service-mapping">
    <section class="hero is-dark">
      <p class="title">Service Mapping</p>
      <p class="subtitle">Find services you need</p>
    </section>
    <section class="section">
      <div class="content">
        <div class="content">
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <div class="select is-rounded">
                <select id="category-select" v-model="selectedCategory">
                  <option disabled value="">Please select one</option>
                  <option v-for="item in categories" :key="item.cat_description" :value="item.cat_id">{{item.cat_description}}</option>
                </select>
              </div>
              <button class="button is-link" @click="findOrganisationByCategory()">
                Filter by category
              </button>
            </div>
          </div>
        </div>

        <progress v-bind:class="{'is-hidden': !$store.state.isLoading }" class="progress is-medium is-dark" max="100">45%</progress>

        <div class="content">
          <div v-if="!result || !result.length" class="columns is-multiline">
            <p>Sorry! No results.</p>
          </div>
          <div v-else class="columns is-multiline">
            <OrganisationBox
              v-for="organisation in result"
              v-bind:key="organisation.org_id"
              v-bind:organisation="organisation" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OrganisationBox from '@/components/OrganisationBox'
import { createDbWorker } from 'sql.js-httpvfs';

const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';

const workerUrl = new URL(`${publicPath}sql.js-httpvfs/sqlite.worker.js`, import.meta.url);

const wasmUrl = new URL(`${publicPath}sql.js-httpvfs/sql-wasm.wasm`, import.meta.url);

export default {
  name: 'Map',
  components: {
    OrganisationBox
  },
  data() {
    return {
      result: undefined,
      categories: undefined,
      selectedCategory: null
    };
  },
  async mounted() {
    this.worker = await createDbWorker(
      [
        {
          from: 'inline',
          config: {
            serverMode: 'full',
            url: `${publicPath}db/data.sqlite3`,
            requestChunkSize: 4096,
          },
        },
      ],
      workerUrl.toString(),
      wasmUrl.toString()
    );
    document.title = 'Service Mapping | Cyber Clinic';
    this.categories = await this.worker.db.query('SELECT * FROM category');
    this.runSql('SELECT * FROM organisation')
  },
  methods: {
    async runSql(sql) {
      this.result = await this.worker.db.query(sql);
    },
    async findOrganisationByCategory() {
      this.$store.commit('setIsLoading', true)
      var cat = document.getElementById('category-select').value;
      this.result = await this.worker.db.query('SELECT * FROM organisation INNER JOIN category_mapping ON category_mapping.cam_org_id = organisation.org_id INNER JOIN category ON category_mapping.cam_cat_id = category.cat_id WHERE category_mapping.cam_cat_id=?', [cat])
      this.$store.commit('setIsLoading', false)
    }
  },
};
</script>