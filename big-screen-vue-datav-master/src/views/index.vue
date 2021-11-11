<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">乡镇大数据平台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
       <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text"></span>
            </div>
            <div class="react-right ml-3">
              <span class="text"></span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div> 


        <div class="body-box">
          <div class="content-box"  style="display:flex">
            <div class="width">
              <dv-border-box-12>
                
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div class="width">
                <!-- <center/> -->
                <centerRight2 />
            </div>
            <div class="width">
              <dv-border-box-1>
                <bottomLeft/>
              </dv-border-box-1>
            </div>
          </div>


        <div class="middle-box" style="display:flex;height:370px">
            <div  class="" style="flex:2">
               <dv-border-box-12>
                 <!-- <middleLeft /> -->
                                    <bottomRight />
              </dv-border-box-12>
            </div>
             <div  class="width6" style="flex:2">
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <div  class="" style="flex:2">
              <dv-border-box-12>
                   
                   <bottomRight />
                <!-- <centerRight2 /> -->
              </dv-border-box-12>
            </div>
        </div>
          <!-- 第四行数据 -->
           <div class="bototm-box" style="display:flex">
             
            <div  class="width2">
                <dv-border-box-12>
                <middleRight />
                </dv-border-box-12>
            </div>
            <div  class="width2">
                <dv-border-box-12>
                <bottomLeft/>
                </dv-border-box-12>
              </div>
          
        
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import centerLeft1 from './centerLeft1'
import centerLeft2 from './centerLeft2'
// import centerRight1 from './centerRight1'
 import centerRight2 from './centerRight2'

//import middleLeft from './middleLeft'
import middleRight from './middleRight'
 //import center from './center'
 import bottomLeft from './bottomLeft'
 import bottomRight from './bottomRight'
//import Center from './center.vue';

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
       img:''
    }
  },
  components: {
     centerLeft1,
    centerLeft2,
    // centerRight1,
     centerRight2,
    //middleLeft,
    middleRight,
    // center,
     bottomLeft,
     bottomRight
   // Center
    
  },
  mounted() {
    this.timeFn()
    this.cancelLoading()
  },
  unMounted() {
    clearInterval(this.timing)
  },
    created(){
        this.axios.get('/ding/approveDetail/getBackImg?corpId=ding0b3219e0d629f0acf5bf40eda33b7ba0', {corpId: 'ding0b3219e0d629f0acf5bf40eda33b7ba0'}).then(res =>{
          this.img = res.data.data.img.file
        })
   },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
.width{
    flex: 2;
    height: 300px;
}
.width6{
    //width: 100%;
    // flex: 4;
}
.width2{
    flex: 2;
    height: 250px;
}
</style>
