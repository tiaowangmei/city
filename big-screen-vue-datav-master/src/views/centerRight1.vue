<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-13 18:27:05
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\centerRight1.vue
-->
<template>
  <div id="centerRight1" style="overflow: hidden">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xxxl text mx-2">惠农电商销售排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: [ '地区', '数量',''],
        data:[],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  watch: {
    cdata: {
      handler (val) {
        this.config.data = val.mall?.oData
      },
      immediate: true,
      deep: true
    },
  },
   computed:{
    cdata(){
        return this.$store.state.allData
    }
  },
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$box-height: 100%;
$box-width: 100%;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
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
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 100%;
      height: 340px;
    }
  }
}
.dv-scroll-board .header .header-item{
 width: 50%!important;
}
</style>
