<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-11-07 12:25:41
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-11 01:02:30
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\middleLeft.vue
-->
<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2" v-if="false">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex" v-if="false">
          <span class="fs-xl text mx-2">矛盾纠纷解决统计图</span>
        </div>
      </div>
      <div>
        <BottomLeftChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomLeftChart from '@/components/echart/middle/mLeftChart'
export default {
  components: {
    BottomLeftChart
  }
}
</script>

<style lang="scss" scoped>
$box-height: 300px;
$box-width: 100%;
#bottomLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 35px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
