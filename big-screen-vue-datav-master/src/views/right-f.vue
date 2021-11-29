<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-12 22:33:43
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\right-f.vue
-->
<template>
  <div id="centerLeft12">
    <div class="bg-color-black">
      <div class="d-flex jc-center" style="display:flex;height:50%;">
        <div  style="flex:1;float: left;width:50%;height:100%">
            <dv-border-box-12>
               <centerLeft1 />
            </dv-border-box-12>
        </div>
        <div  style="flex:1;float: left;width:50%;height:100%">
             <dv-border-box-12>
               <youAndMe />
            </dv-border-box-12>
        </div>
      </div>


      <div class="d-flex jc-center" style="display:flex;height:50%;">
        <div style="flex:1;float: left;width:50%;height:100%">
            <dv-border-box-12 title="群防群治">
                  <bottomRight />
            </dv-border-box-12>
        </div>
        <div  style="flex:1;float: left;width:50%;height:100%">
            <dv-border-box-12 title="乡风文明">
                <contry/>
            </dv-border-box-12>
        </div>
        
      </div>
      

    </div>
  </div>
</template>

<script>
// import CenterLeft2Chart from "@/components/echart/centerLeft/centerLeft2Chart";

import centerLeft1 from './centerLeft1'
import youAndMe from './you-and-me.vue'
import contry from './contry.vue'
 import bottomRight from './bottomRight'
export default {
  components: {
    // CenterLeft2Chart
    centerLeft1,
    youAndMe,
    bottomRight,
    contry
  },
};
</script>

<style lang="scss" scoped>
#centerLeft12 {
  $box-width: 100%;
  $box-height: 60% ;
  padding: 16px;
  height: $box-height;
  width:$box-width ;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: 100%;
    border-radius: 10px;
    width: 100%;
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