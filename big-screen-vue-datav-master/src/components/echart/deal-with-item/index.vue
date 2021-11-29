<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-23 21:19:40
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\deal-with-item\index.vue
-->
<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: {
        xData: ["零陵区", "七里店街道", "菱角塘镇", "珠山镇", "南津渡街道", "石山脚街道"],
        seriesData: [
          { value: 10, name: "零陵区" },
          { value: 5, name: "七里店街道" },
          { value: 15, name: "菱角塘镇" },
          { value: 25, name: "珠山镇" },
          { value: 20, name: "南津渡街道" },
          { value: 35, name: "石山脚街道" }
        ]
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>