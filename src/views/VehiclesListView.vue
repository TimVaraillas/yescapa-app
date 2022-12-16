<template>
  <main>
    <List :vehicles="vehicles" />
  </main>
</template>

<script lang="ts">
import List from "../components/vehicle/List.vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    List,
  },
  data() {
    return {
      vehicles: [] as any[],
    };
  },
  methods: {
    async fetchVehicles() {
      const response = await axios.get<any>(
        "https://gitlab.com/api/v4/snippets/2095016/raw"
      );
      this.vehicles = response.data.results;
    },
  },
  async mounted() {
    await this.fetchVehicles();
  },
});
</script>
