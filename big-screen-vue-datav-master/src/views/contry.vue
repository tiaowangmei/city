<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-11-07 12:25:30
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-14 23:04:04
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\contry.vue
-->
<template>
  <div id="bottomRight" style="width:100%;height:100%">
    <div class="bg-color-black" style="width:100%;height:100%">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-area" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xxxl text mx-2"> 乡风文明</span>
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:6rem;" />
          </div>
        </div>
      </div>
      <div style="width:100%;height:calc(100% - 50px)">
        <BottomRightChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomRightChart from "@/components/echart/middle/bottomRightChart";
export default {
  components: {
    BottomRightChart
  }
};
</script>

<style lang="scss" class>
$box-height: 100%;
$box-width: 100%;
#bottomRight {
  padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height:100%;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
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