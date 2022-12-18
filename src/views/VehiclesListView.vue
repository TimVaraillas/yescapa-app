<template>
  <div>
    <el-container>
      <el-aside width="400px">
        <Filters v-model="filters" />
      </el-aside>
      <el-main>
        <List :vehicles="filteredVehicles" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import Filters from "../components/vehicle/Filters.vue";
import List from "../components/vehicle/List.vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    List,
    Filters,
  },
  data() {
    return {
      vehicles: [] as any[],
      filters: {
        title: "",
        starting_price: [0, 100],
        vehicle_beds: 1,
        vehicle_seats: 1,
        review_average: 0,
      },
    };
  },
  computed: {
    filteredVehicles() {
      return this.vehicles
        .filter((v: any) => {
          if (this.filters.title) {
            return v.title
              .toLowerCase()
              .includes(this.filters.title.toLowerCase())
              ? true
              : false;
          }
          return true;
        })
        .filter((v: any) => {
          if (
            v.starting_price >= this.filters.starting_price[0] &&
            v.starting_price <= this.filters.starting_price[1]
          ) {
            return true;
          }
          return false;
        })
        .filter((v: any) => {
          if (v.vehicle_beds >= this.filters.vehicle_beds) {
            return true;
          }
          return false;
        })
        .filter((v: any) => {
          if (v.vehicle_seats >= this.filters.vehicle_seats) {
            return true;
          }
          return false;
        })
        .filter((v: any) => {
          if (v.review_average >= this.filters.review_average) {
            return true;
          }
          return false;
        });
    },
  },
  methods: {
    async loadVehicles() {
      const response = await axios.get<any>(
        "https://gitlab.com/api/v4/snippets/2095016/raw"
      );
      this.vehicles = response.data.results;
    },
  },
  async mounted() {
    await this.loadVehicles();
  },
});
</script>

<style scoped>
.el-aside {
  min-height: calc(100vh - 59px);
  padding: 30px;
  background-color: #222;
}
</style>
