<template>
    <div class="t">
        <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
         <v-col class="">
          <apexchart  type="bar" :options="options2" :series="series2"></apexchart>
          </v-col>
          <v-col class="">
          <apexchart  type="line" :options="options2" :series="series2"></apexchart>
          </v-col>
          <v-col class="">
          <apexchart  type="donut" class="apexchart" :options="options1" :series="series1" ></apexchart>
          </v-col>

        </v-row>
        </v-container>
        </v-content>
    </div>
</template>
<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

export default {
    data: function() {
    return {
      options1: {
          
        labels: ["  تاجر ", " اقساطي", " دلال ", " معاملتي ", " التقاعد "],
       
      },
      series1: [40, 55, 41, 17, 15],

      options2: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series2: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
        
    }},
  }

</script>
<style scoped>
.apexchart{
    font-size: 15px !important;
    font-family: cairo;

}
@media only screen and (max-width: 444px) {
  .col{
    flex-basis:100%
  }
  }
</style>