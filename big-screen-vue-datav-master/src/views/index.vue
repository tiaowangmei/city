<template>
<!-- ref="appRef" -->
<div id="index" ref="appRef" >
     <!-- <dv-full-screen-container> -->
    <!-- <div> -->
 <dv-loading v-if="loading">Loading...</dv-loading>
  <div style="width:100%;height:100%"  v-else>
      
<!--header开始-->
<div class="header">
       <div class="d-flex jc-center" style="position: relative;height:100%">
      <dv-decoration-5 style="width:100%;height:40px;position: absolute;left:0;bottom:0;"/>
      <div class="title">{{title}}</div>
            </div> 
</div>
<!--header结束-->

<!--content开始 https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/-->
<div class="data_content" :style="{backgroundImage: 'url(' + srcImgUrl + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">
    <div class="data_time"  v-if="false">
        <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/data_time.png" alt="" class="fl">
       {{ dateYear }} {{ dateWeek }} {{ dateDay }}
    </div>
    <div class="data_info">
        <div :class="index === 1?'info_1 fl':index===2?'info_2 fl':'info_3 fr'" v-for="(item,index) in getUserDataInfo" :key="index">
            <div class="" :class="index === 1?'text_1':index===2?'text_2':'text_3'"> 
                <div class="fl" v-for="(t,ind) in item " :key="ind">
                    <img v-if="ind==0 && index == 0" :src='a' alt="" class="fl">
                    <img v-if="ind==0 && index ==1" :src='b'  alt="" class="fl">
                    <img v-if="ind==0 && index == 2" :src='c' alt="" class="fl">
                    <img v-if="ind==1&& index == 0" :src='d'  alt="" class="fl">
                    <img v-if="ind==1&& index == 1" :src='e'  alt="" class="fl">
                    <img v-if="ind==1&& index == 2" :src='f'  alt="" class="fl">
                   <img v-if="ind==2&& index == 0" :src='g'   alt="" class="fl">
                    <img v-if="ind==2&& index == 1" :src='h'   alt="" class="fl">
                    <img v-if="ind==2&& index == 2" :src='i'   alt="" class="fl"> 
                    <img v-if="ind==3" src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_4.png" alt="" class="fl">
                    <div class="fl">
                        <p>{{t.kpiName}}</p>
                        <p>{{t.stats}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="data_main">
        <div class="main_left fl">
            <div class="left_1">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_1.png" alt="">
                    特殊人群管理
                </div>
                <div style="width:100%;height:100%" v-if="isPerson">
                  <Echart :options="options" :subId='subId' class="echarts" id="chart_1" ></Echart>
               </div>
               <div style="width:100%;height:100%;position: relative;" v-else>
                   <div style="width:45%;height:100% ;float:left">
                     <Echart :options="optionsPZ" :subId='subId' class="echarts" id="chart_1" ></Echart>
                   </div>
                    <div style="width:45%;height:100% ;float:left">
                     <Echart :options="optionsPR" :subId='subId' class="echarts" id="chart_1" ></Echart>
                   </div>
                   <div class="lo-title" style="width:100%;height:40px;float:left;display:flex">
                       <div>重点人群</div>
                       <div>弱势人群</div>
                   </div>
               </div>
            </div>
            <div class="left_2">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_2.png" alt="">
                    乡风文明
                </div>
                
              <div style="width:100%;height:calc(100% - 35px);" v-if="isPerson">
                   <Echart class="echarts" :subId='subId' :options="optionsXFWM" id="chart_2" height="280px" width="100%" ></Echart>
              </div>
                <div  style="width:100%;height:calc(100% - 35px);"  v-else>
                 <div style="width:80%;height:100%;float:left" >
                    <Echart class="echarts" :subId='subId' :options="optionsXFWM" id="chart_2" height="280px" width="100%" ></Echart>
                </div>
               <div style="width:20%;height:100%;float:left;margin-top:4%">
                   <p v-for="(n,index) in cdata.x.oData" :key="index" style="clear:both">
                       <span style="width:15px;height:15px;float:left" :style="{'background':colorConfirm(index)}"></span>
                       <span style="float:left;width:calc(100% - 15px);height:100%;overflow:hidden">{{n.name}}</span>
                   </p>
               </div>
              </div>
            </div>
        </div>
        <div class="main_center fl">
            <div class="center_text" style="position: relative">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_3.png" alt="">
                    区域地图
                </div>
                <div class="describ"  style="width:30%;height:90%">
                    <div>{{name}}</div>
                      {{remark}}
                 </div>
                 <div style="width:70%;height:100%" v-if="subId">
                      <centerLeft2/>
                 </div>
               
            </div>
        </div>
        <div class="main_right fr">
            <div class="right_1">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_4.png" alt="">
                    你钉我办
                </div>
                 <Echart class="echarts" :subId='subId' :options="optionsym" id="chart_4" height="280px" width="100%" ></Echart>
            </div>


            <div class="right_2">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_5.png" alt="">
                   党员137
                </div>
               <div style="width:100%;height:calc(100% - 35px);" v-if="isPerson">
                    <Echart class="echarts" :subId='subId' :options="optionsCB" id="chart_3" height="280px" width="100%" ></Echart>
              </div>
                <div  style="width:100%;height:calc(100% - 35px);"  v-else>
                 <div style="width:80%;height:100%;float:left" >
                    <Echart class="echarts" :subId='subId' :options="optionsCB" id="chart_3" height="280px" width="100%" ></Echart>
                </div>
               <div style="width:20%;height:100%;float:left;margin-top:4%">
                   <p v-for="(n,index) in cdata.m.oData" :key="index" style="clear:both">
                       <span style="width:15px;height:15px;float:left" :style="{'background':colorConfirm(index)}"></span>
                       <span style="float:left;width:calc(100% - 15px);height:100%;overflow:hidden">{{n.name}}</span>
                   </p>
               </div>
              </div>

            </div>
        </div>
    </div>
    <div class="data_bottom">
        <div class="bottom_1 fl">
            <div class="main_title">
                <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                乡村调解反馈
            </div>
    
             <Echart class="echarts" :subId='subId' :options="optionsxctj" id="chart_3" height="100px" width="100%" ></Echart>
        </div>
        <div class="bottom_center fl">
            <div class="bottom_2 fl">
                <div class="main_title" style="width:380px;margin-left: -190px">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                    党务村务民主协商监督月例会
                </div>

                <div style="width:100%;height:100%" v-if="isPerson">
                  <Echart class="echarts" :subId='subId' :options="optionshy" id="chart_3" height="200px" width="100%" ></Echart>
               </div>
               <div style="width:100%;height:100%;position: relative;" v-else>
                   <div style="width:45%;height:100%;float:left">
                     <Echart :options="optionsDN" :subId='subId' class="echarts" id="chart_3" ></Echart>
                   </div>
                    <div style="width:45%;height:100%;float:left">
                     <Echart :options="optionsDY" :subId='subId' class="echarts" id="chart_3" ></Echart>
                   </div>
                   <div class="lo-title lo-title1" style="width:100%;height:40px;float:left;display:flex">
                       <div>当年</div>
                       <div>当月</div>
                   </div>
               </div>
              
            </div>
            <div class="bottom_3 fl">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                    惠农电商
                </div>
                 <Echart class="echarts" :subId='subId' :options="optionsmall" id="chart_3" height="200px" width="100%" ></Echart>
            </div>
        </div>
        <div class="bottom_4 fr">
            <div class="main_title">
                <img src="https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/title_5.png" alt="">
                群防群治
            </div>
            <Echart class="echarts" :subId='subId' :options="optionsq" id="chart_3" height="200px" width="100%" ></Echart>
        </div>
    </div>
</div>


</div>
<!-- </dv-full-screen-container> -->
</div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import Echart from '@/common/echartT'
import { formatTime } from '../utils/index.js'
import centerLeft2 from './centerLeft2'
export default {
  mixins: [ drawMixin ],
  data() {
    return { 
        a:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_5.png',
        b:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_1.png',
        c:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_8.png',
        d:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_6.png',
        e:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_2.png',
        f:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_9.png',
        g:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_7.png',
        h:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_3.png',
        i:'https://gitee.com/meiling_wu/city/raw/master/big-screen-vue-datav-master/src/assets/img/info_10.png',
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
       srcImgUrl:'',
        chart: null,
        options:{},
        optionsXFWM:{},
        getUserDataInfo:[],
        optionsym:{},
        optionsCB:{},
        optionsxctj:{},
        optionsmall:{},
        optionsPZ:{},
        optionsPR:{},
        optionsq:{},
        optionshy:{},
        optionsDN:{},
        optionsDY:{},
        name:'123',
        remark:'remark',
        title:'',
        subId:'',
        isPerson:true,
         colors:[
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#8378ea"
          ]
    }
  },
  computed:{
    cdata(){
        return this.$store.state.allData
    },
   
  },
    watch: {
        cdata(val) {
            this.getAllPic(val)
            this.getData(this.$store.state.id1)
        }
   
   },
  components: {Echart,centerLeft2},
  mounted() {
    this.timeFn()
    this.cancelLoading()
    window.addEventListener('resize', () => {
    console.log('resize')
    this.resize()
})

  },
  unMounted() {
    clearInterval(this.timing)
  },
    created(){
          let query=this.$route.query;
            let corpId = query.corpId||'ding0b3219e0d629f0acf5bf40eda33b7ba0'
             this.axios.post('/ding//approveDetail/getInfo?corpId='+corpId, {}).then(re=>{
                 let d = re.data.data.orgBranch
                 if(d.length == 1){
                      this.$store.commit("setInitId", d[0].parentId)
                      this.axios.post('/ding//approveDetail/getInfo?corpId='+d[0].parentId, {}).then(r=>{
                       this.$store.commit("setorgBranch",r.data.data.orgBranch)
                      })
                 }else{
                      this.$store.commit("setInitId",corpId)
                      this.$store.commit("setorgBranch",d)
                 }
                  this.$store.commit("setSubId",corpId)
                 this.subId = corpId
             })

          this.axios.get('/ding/approveDetail/getBackImg?corpId='+corpId, {}).then(res =>{
          this.srcImgUrl = res.data.data.img.file
          this.title = res.data.data.title
        })
   },
  methods: {
       colorConfirm(e){
        return this.colors[e]
    },
      resize() {
	// 记录开发时候的尺寸
            const width = 1920 ,height = 1080
            let w = window.innerWidth / width
            let h = window.innerHeight / height
            let scale = w < h ? w : h
            let body = document.body
            // 通过transform 去对body进行等比缩小
            body.style.transform = 'scale(' + scale + ')'
            body.style.transformOrigin = '0 0'
        },

    getData(id){
     this.axios.post('/ding/approveDetail/getUserDataInfo?corpId='+id, {}).then(res=>{
      this.getUserDataInfo = []
        let  first=[], second=[], three=[],detail=[]
      res.data.data.OrgStats.forEach((val,index) => {
          val.stats = Number(val.stats).toFixed(2)
          if(index < 4){
              second.push(val)
              
          }else if(index <7){
             three.push(val)
          }else if(index < 10){
               first.push(val)
          }else{
            detail.push(val)
          }
      });
     this.getUserDataInfo.push(first)
     this.getUserDataInfo.push(second)
     this.getUserDataInfo.push(three)
   })
     
   },
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
    },
    
   getoptionscgb(val){
      this.isPerson = val.d.rPerson?.length || val.d.zPerson?.length?false:true
       var colors =  [
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#8378ea"
          ];

        var legendData= val.m.xData
        var serieData = [];
         var metaDate = val.m.type == 'pie'?val.m.oData:val.m.xDataAll
         var type = val.m.type ||  'line'
            var serie = {
                name:legendData,
                type: type,
                symbol:"circle",
                symbolSize:10,
                data: metaDate,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieData.push(serie)
            this.optionsCB = {
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieData

        };

         var legendData1= val.online.xData
        var serieData1 = [];
        //  var metaDate1 = val.online.xDataAll
         var metaDate1 = val.online.xDataAll
         var type1 = val.online.type || 'bar'
         if( val.online.type){
            var serie1 = {
                name:legendData1,
                type: type1,
                symbol:"circle",
                symbolSize:10,
                data: metaDate1,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieData1.push(serie1)

        this.optionsxctj ={
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieData1

        };
        }else{
           this.optionsxctj = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: val.d.xData,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.online.oData
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data:val.online.oData
            }]
        }
        }

        var legendDatahy= val.hy.xData
        var serieDatahy = [];
          var metaDatehy =val.hy.xDataAll
         if( val.hy.type){
                 console.log("val.hy.yueYlh",val.hy.yueYlh)
            this.optionsDY = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color: ['#ffff43','#0035f9', '#f36f8a',  '#25f3e6'],
                legend: { //图例组件，颜色和名字
                    left: '60%',
                    top: '25%',
                    orient: 'vertical',
                    itemGap: 12, //图例每项之间的间隔
                    itemWidth: 16,
                    itemHeight: 12,

                    icon: 'rect',
                    data: val.hy.yueYlh,
                    textStyle: {
                        color: [],
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                series: [{
                    name:'',
                    type: 'pie',
                    clockwise: false, //饼图的扇区是否是顺时针排布
                    minAngle: 20, //最小的扇区角度（0 ~ 360）
                    center: ['35%', '50%'], //饼图的中心（圆心）坐标
                    radius: [40, 60], //饼图的半径
                    avoidLabelOverlap: true, ////是否启用防止标签重叠
                    itemStyle: { //图形样式
                        normal: {
                            borderColor: '#1e2239',
                            borderWidth: 1.5,
                            color:function(e){
                                return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                            }
                        },
                    },

                    label: { //标签的位置
                        normal: {
                            show: false,
                            position: 'inside', //标签的位置
                            formatter: "{d}%",
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: val.hy.yueYlh,
                }, {
                    name: '',
                    type: 'pie',
                    clockwise: false,
                    silent: true,
                    minAngle: 20, //最小的扇区角度（0 ~ 360）
                    center: ['35%', '50%'], //饼图的中心（圆心）坐标
                    radius: [0, 45], //饼图的半径
                    itemStyle: { //图形样式
                        normal: {
                            borderColor: '#1e2239',
                            borderWidth: 1.5,
                            opacity: 0.21,
                            color:function(e){
                                return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                            }
                        }
                    },
                    label: { //标签的位置
                        normal: {
                            show: false,
                        }
                    },
                    data:  val.hy.yueYlh,
                }]
            }

          this.optionsDN = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#25f3e6','#0035f9', '#f36f8a', '#ffff43'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '25%',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: val.hy.nianYlh,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#f36f8a':e.percent<5?'#0035f9':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.hy.nianYlh
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: val.hy.nianYlh
            }]
        }

          
   }else{ 
          var seriehy = {
                name:legendDatahy,
                type:'bar',
                symbol:"circle",
                symbolSize:10,
                data: metaDatehy,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieDatahy.push(seriehy)
        this.optionshy={
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieDatahy

        };

      }
            
   },

    getPerson(val){
        this.isPerson = val.d.rPerson?.length || val.d.zPerson?.length?false:true
        this.options = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: val.d.xData,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 80], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.d.oData
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: val.d.oData
            }]
        }

         this.optionsPZ = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data:val.d.zPerson,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.d.zPerson
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: val.d.zPerson
            }]
        }

         this.optionsPR = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: val.d.rPerson,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.d.rPerson
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: val.d.rPerson
            }]
        }
    },
 
    getPersonyoume(val){
        this.optionsym = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: val.p.xData,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                roseType: 'area',
                clockwise: true, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 80], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: val.p.oData
            }, {
                name: '',
                type: 'pie',
                roseType: 'area',
                clockwise: true,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: val.p.oData
            }]
        }
    },
    getMall(val){
        var colors =  [
            "#ffdb5c",
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ff9f7f",
            "#8378ea"
          ];

        var legendData= val.mall.xData
        var serieData = [];
           var metaDate = val.mall.xDataAll
         var type = val.mall.type || 'line'
         if(val.mall.type){
            var serie = {
                name:legendData,
                type: type,
                symbol:"circle",
                symbolSize:10,
                data: metaDate,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieData.push(serie)
            this.optionsmall = {
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieData

        };
         }else{
           this.optionsmall = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: function(v){
                    return v.name
                }
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '60%',
                top: '30',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,
                icon: 'rect',
                data: val.mall.oData,
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['30%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                         color:function(e){
                            return e.percent<3?'#0035f9':e.percent<5?'#f36f8a':e.percent<8?'#ffff43':'#25f3e6'
                        }
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data:  val.mall.oData
            }, 
            ]
            }
         }

            var legendDataq= val.q.xData
            var serieDataq = [];
            var metaDateq = val.q.type == 'pie'?val.q.oData:val.q.xDataAll
            var type1 = val.q.type || 'line'
            var serieq = {
                name:legendDataq,
                type: type1,
                symbol:"circle",
                symbolSize:10,
                data: metaDateq,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieDataq.push(serieq)
            this.optionsq = {
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieDataq

        };
    },
    getAllPic(val){
     this.getPersonyoume(val)
     this.getPerson(val)
     this.getMall(val)
     this.getoptionscgb(val)
       var colors =  [
            "#8378ea",
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
          ];

        var legendData= val.x.xData
        var serieData = [];
            var metaDate = val.x.type == 'pie'?val.x.oData:val.x.xDataAll
            var type = val.x.type || 'line'
            var serie = {
                name:legendData,
                type: type,
                symbol:"circle",
                symbolSize:10,
                data: metaDate,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        color: function(e){
                            return colors[e.dataIndex]
                            }
                    },
                },
            };
            serieData.push(serie)
            this.optionsXFWM = {
                    backgroundColor: 'transparent',
                    color:colors,
                    grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
                     tooltip: {
                        trigger: 'item',
                        formatter: function(e){
                            let d = e.seriesId.split(",")
                            return d[e.dataIndex]+"-"+e.data
                        }
                    },
                    // legend: { //图例组件，颜色和名字
                    //     show:true,
                    //     orient: 'vertical',
                    // },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                            axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                            axisTick : {show: false},
                            data:[],
                        },
                    ],
                    yAxis: [
                        {
                            axisTick : {show: false},
                            splitLine: {show:false},
                            axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                            axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                        },
                    ],
                    series:serieData
        };
        let query=this.$route.query;
        let corpId = query.corpId||'ding0b3219e0d629f0acf5bf40eda33b7ba0'
        let id = this.$store.state.id1? this.$store.state.id1:corpId
         this.axios.post('/ding//approveDetail/getInfo?corpId='+id, {}).then(res=>{
         this.name = res.data.data.orgBranch[0].unionOrgName
         this.remark = res.data.data.orgBranch[0].remark
      })
    }
  }
}
</script>

<style lang='scss'>
 @import '../assets/scss/index.scss';
@import '../assets/css/bootstrap.css';
@import '../assets/css/common.css';
@import '../assets/css/data_text.css';
@import '../assets/css/foundation-datepicker.css';
.title{
    position: absolute;left:0;top:0;width:100%;height:100%;text-align:center;color:#fff;line-height: 80px;font-size: 30px;
}
.echarts{
    // width: 100%;
    height: 280px;
    width: 200px;
}
.width{
    flex: 2;
    height: 300px;
}

.width2{
    flex: 2;
    height: 250px;
}
.host-body{
    height: 100%;
    
    top: 0;
    left: 0;
}
.describ{
    color: #fff;
    width: 35%;
    height: 30%;
    position: absolute;
    right: 0;
    bottom: 20px;
    padding: 0 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
}
.lo-title{
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.lo-title div{
    width:45%;
    height: 100%;
    padding-left:7%;
    text-align: left;
}
.lo-title1{
     position: absolute;
    bottom:30px;
    left: 0;
}
.lo-title1 div{
    padding-left:12%; 
}
.lo-title1 div:nth-child(1){
    padding-left:10%;
}
</style>
