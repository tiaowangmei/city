<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-13 18:50:40
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\centerLeft\centerLeft2Chart\index.vue
-->
<template>
  <div style="width:100%">
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: [
      ]
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>