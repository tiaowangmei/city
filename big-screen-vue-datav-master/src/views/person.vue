<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-13 18:00:40
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\person.vue
-->
<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xxxl text mx-2">党务村务民主监督协商月例会</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
      <div class="d-flex jc-center" style="height:100%;width:100%">
       <personItem/>
      </div>
    </div>
  </div>
</template>

<script>
import personItem from '@/components/echart/person-item'
export default {
  components: {
    personItem
  },
};
</script>

<style lang="scss" scoped>
#centerLeft1 {
  $box-width: 100%;
  $box-height: 100% ;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: 100%;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
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