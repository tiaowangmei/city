<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-23 21:20:07
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\deal-with.vue
-->
<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xxxl text mx-2" style="font-size:20px">数据统计</span>
          <!-- <dv-decoration-1 class="dv-dec-1" /> -->
        </div>
      </div>
      <div class="d-flex jc-center" style="height:100%;width:100%">
      <!-- <dealWithItem/> -->
      <div style="width:100%;height:100%">
        <dv-border-box-3 >
           <div style="font-size:20px;line-height:50px;padding:30px 30px 20px" v-for="(item,index) in getUserDataInfo" :key="index">
        <!-- </dv-border-box-3> -->
            <span style="color:#fff;margin-right:10px;font-weight:blod">{{item.kpiName}}:</span>
            <span :style="Number(item.stats)>2?'color:#00EC00':'color:#FF0000'">{{item.stats}}</span>
           </div>
          
        </dv-border-box-3>
      </div>
     
      
      </div>
    </div>
  </div>
</template>

<script>
// import dealWithItem from '@/components/echart/deal-with-item'
export default {
  components: {
    // dealWithItem
  },
  data(){
      return{
          getUserDataInfo:[]
      }
  },
  computed:{
       cId(){
          return this.$store.state.id
       }
  },
   watch: {
    cId: {
      handler(val) {
       this.getData(val)
      }}
      },
  mounted(){
      console.log("this.$store.22222",this.$store.state.id)
     
  },
  methods:{
//     getData(id){
//      this.axios.post('/ding/approveDetail/getUserDataInfo?corpId='+id, {}).then(res=>{
//       res.data.data.OrgStats.forEach(val => {
//           val.stats = Number(val.stats).toFixed(2)
//       });
//       this.getUserDataInfo = res.data.data.OrgStats
//    })
//     }
  }
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