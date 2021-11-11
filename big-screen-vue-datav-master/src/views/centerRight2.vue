<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-08 19:35:43
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\centerRight2.vue
-->
<template>
  <div id="centerRight2" style="overflow: hidden">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2">乡风文明</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <centerRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from '@/components/echart/centerRight/centerRightChart'

export default {
  data() {
    return {
      config: {
        data: [
          {
            name: '零陵区',
            value: 167
          },
          {
            name: '七里店街道',
            value: 67
          },
          {
            name: '菱角塘镇',
            value: 123
          },
          {
            name: '南津渡街道',
            value: 55
          },
          {
            name: '石山脚街道',
            value: 98
          }
        ]
      }
    }
  },
  components: { centerRight2Chart1 }
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 370px;
  $box-width: 685px;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 320px;
    }
  }
}
</style>
