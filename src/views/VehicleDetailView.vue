<template>
  <main>
    <Detail :vehicle="vehicle" />
  </main>
</template>

<script lang="ts">
import Detail from "../components/vehicle/Detail.vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    Detail,
  },
  data() {
    return {
      vehicle: null,
    };
  },
  methods: {
    loadVehicle() {
      axios
        .get<any>("https://gitlab.com/api/v4/snippets/2095016/raw")
        .then((response: any) => {
          const vehicle = response.data.results.find(
            (v: any) => v.id.toString() === this.$route.params.id
          );
          this.vehicle = vehicle;
        });
    },
  },
  mounted() {
    this.loadVehicle();
  },
});
</script>
