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
      <div class="title"><img style="width: 50px;height: 50px; border-radius: 50%;margin-right: 10px;" src="http://szdp.hnyfsk.com:8080/profile/upload/2022/03/15/20220330164850.png" mode="" />{{title}}</div>
            </div> 
</div>
<!--header结束-->

<!--content开始 https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/-->
<div class="data_content" :style="{backgroundImage: 'url(' + srcImgUrl + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">
    <div class="data_time"  v-if="false">
        <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/data_time.png" alt="" class="fl">
       {{ dateYear }} {{ dateWeek }} {{ dateDay }}
    </div>
    <div class="data_info">
        <div :class="index === 1?'info_1 fl':index===2?'info_2 fl':'info_3 fr'" v-for="(item,index) in getUserDataInfo" :key="index">
            <div class="" :class="index === 1?'text_1':index===2?'text_2':'text_3'"> 
                <div class="fl" v-for="(t,ind) in item " :key="ind">
                    <img v-if="ind==0 && index == 0" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_5.png" alt="" class="fl">
                    <img v-if="ind==0 && index ==1" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_1.png" alt="" class="fl">
                    <img v-if="ind==0 && index == 2" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_8.png" alt="" class="fl">
                    <img v-if="ind==1&& index == 0" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_6.png" alt="" class="fl">
                    <img v-if="ind==1&& index == 1" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_2.png" alt="" class="fl">
                    <img v-if="ind==1&& index == 2" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_9.png" alt="" class="fl">
                    <img v-if="ind==2&& index == 0" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_7.png" alt="" class="fl">
                    <img v-if="ind==2&& index == 1" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_3.png" alt="" class="fl">
                    <img v-if="ind==2&& index == 2" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_10.png" alt="" class="fl"> 
                    <img v-if="ind==3" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_4.png" alt="" class="fl">
                    <div class="fl">
                        <p>{{t.kpiName}}</p>
                        <p>{{t.stats}}{{t.kpiName== '激活率'||t.kpiName=='组织在线率'?'%':'' }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="data_main" v-if="isNeed">
        <div class="main_left fl">
            <div class="left_1">
                <div class="main_title">
                    <img @error="imgLoadError()" src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_1.png" alt="">
                    特殊人群管理
                </div>
                <div style="width:100%;height:100%;position: relative;" v-if="isPerson">
                    <div style="width:calc(100% - 100px);height:100%;float:left">
                       <Echart :options="options" :subId='subId' class="echarts" id="chart_1"  ref="terq"></Echart>
                    </div>
                    <div style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right:0px;top:20px">
                      <drop v-if="tsrq.length > 1" :labelProperty='false' :dataList='tsrq' @change="selectFnPr"></drop>
                   </div>
                   
               </div>
               <div style="width:100%;height:100%;position: relative;" v-else>
                   <div style="width:45%;height:100% ;float:left">
                        <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100%;height:100%">
                            <Echart :options="optionsPZ" ref="zdrq" :subId='subId' class="echarts" id="chart_1" ></Echart>
                            </div>
                            <!-- <div v-if="isP" style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right:0;top:20px">
                              <drop v-if="zdrq.length > 1" :labelProperty='false' :dataList='zdrq' @change="selectFnzdrq"></drop>
                           </div> -->
                            <div style="width:80px;height:120px;z-index: 9999;position: absolute;right:0;top:20px;font-size:10px">
                                <p v-for="(n,index) in zdrq" :key="index" style="clear:both;width: 100%;height:15px;overflow:hidden">
                                    <span style="width:8px;margin-top: 5px;height:5px;float:left" :style="{'background':colorConfirm(index)}"></span>
                                    <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                                </p>
                            </div>
                      </div>
                    
                   </div>
                    <div style="width:45%;height:100% ;float:left">
                         <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100% ;height:100%;float:left">
                            <Echart :options="optionsPR" ref="rsrq" :subId='subId' class="echarts" id="chart_1" ></Echart>
                            </div>
                            <div style="width:80px;height:120px;z-index: 9999;position: absolute;right:0;top:20px;font-size:10px">
                                <p v-for="(n,index) in rsrq" :key="index" style="clear:both;width: 100%;height:15px;overflow:hidden">
                                    <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                                    <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                                </p>
                            </div>
                            <!-- <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:20px">
                            <drop v-if="rsrq.length > 1"  :labelProperty='false' :dataList='rsrq' @change="selectFnrsrq"></drop>
                         </div> -->
                     </div>
                     
                   </div>
                   <div class="lo-title" style="width:100%;height:40px;float:left;display:flex">
                       <div>重点人群</div>
                       <div>弱势人群</div>
                   </div>
               </div>
            </div>
            <div class="left_2">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_2.png" alt="">
                    乡风文明
                </div>
                
              <div style="width:100%;height:calc(100% - 35px);" v-if="isPerson">
                    <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100% ;height:100%;float:left">
                            <Echart class="echarts" ref="xfwm" :subId='subId' :options="optionsXFWM" id="chart_2" height="280px" width="100%" ></Echart>
                   
                            <!-- <Echart :options="optionsPR" ref="rsrq" :subId='subId' class="echarts" id="chart_1" ></Echart> -->
                            </div>
                            <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:0px">
                            <drop  :labelProperty='false' :dataList='xfwm' @change="selectFnxfwm"></drop>
                         </div>
                     </div>
              </div>
                <div  style="width:100%;height:calc(100% - 35px);"  v-else>
                 <div style="width:80%;height:100%;float:left" >
                    <Echart class="echarts" :subId='subId' :options="optionsXFWM" id="chart_2" height="280px" width="100%" ></Echart>
                </div>
               <div style="width:20%;height:100%;float:left;margin-top:4%">
                   <p v-for="(n,index) in cdata.x.oData" :key="index" style="clear:both">
                       <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                       <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                   </p>
               </div>
              </div>
            </div>
        </div>
        <div class="main_center fl">
            <div class="center_text" style="position: relative">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_3.png" alt="">
                    区域地图
                </div>
                <div class="describ"  style="width:30%;height:90%">
                    <div>{{name}}</div>
                      {{remark}}
                 </div>
                 <div  class="bg-color-black" style="width:73%;height:90%"  v-if="subId">
                    <div class="bg-color-black" style="width:200px;height:40px;position: absolute;left: 1%;top:20px;z-index: 9999;" v-if="orgBranch.length>1 && orgBranch[0].parentId!=0">
                       <drop :dataList='org' @change="selectFn"></drop>
                    </div>
                     <div style="height:100% ;" :style="{width:orgBranch.length>1 && orgBranch[0].parentId!=0?'calc(100% - 200px)':'100%'}">
                         <centerLeft2 ref="t"/>
                     </div>
               
                 </div>
               
            </div>
        </div>
        <div class="main_right fr">
            <div class="right_1">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_4.png" alt="">
                    你钉我办
                </div>

                 <div style="width:100%;height:100%;position: relative;">
                    <div style="width:calc(100% - 100px);height:100%;float:left">
                       <Echart class="echarts" ref="ndwb" :subId='subId' :options="optionsym" id="chart_4" height="280px" width="100%" ></Echart>
           
                    </div>
                    <div style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right:0px;top:20px">
                      <drop v-if="ndwb.length > 1" :labelProperty='false' :dataList='ndwb' @change="selectFnndwb"></drop>
                      <div v-else>{{ndwb0}}</div>
                   </div>
                   
               </div>
                 </div>


            <div class="right_2">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_5.png" alt="">
                   党员137
                </div>
               <div style="width:100%;height:calc(100% - 35px);" v-if="isPerson">
                    <!-- <Echart class="echarts" :subId='subId' :options="optionsCB" id="chart_3" height="280px" width="100%" ></Echart>
              -->
                  <div style="width:100%;height:100%;position: relative;">
                    <div style="width:calc(100% - 100px);height:100%;float:left">
                        <Echart class="echarts" ref='dy137' :subId='subId' :options="optionsCB" id="chart_3" height="280px" width="100%" ></Echart>
             
                    </div>
                    <div style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right:0;top:20px">
                      <drop v-if="dy137.length > 1" :labelProperty='false' :dataList='dy137' @change="selectFndy137"></drop>
                   </div>
                   
               </div>
              </div>
                <div  style="width:100%;height:calc(100% - 35px);"  v-else>
                 <div style="width:80%;height:100%;float:left" >
                    <Echart class="echarts" :subId='subId' :options="optionsCB" id="chart_3" height="280px" width="100%" ></Echart>
                </div>
               <div style="width:20%;height:100%;float:left;margin-top:4%">
                   <p v-for="(n,index) in cdata.m.oData" :key="index" style="clear:both">
                       <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                       <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                   </p>
               </div>
              </div>

            </div>
        </div>
    </div>
    <div class="data_bottom">
        <div class="bottom_1 fl">
            <div class="main_title">
                <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                乡村调解反馈
            </div>
               <div style="width:100%;height:100%;position: relative;">
                    <div style="width:calc(100% - 100px);height:100%;float:left">
                       <Echart class="echarts" ref="xctj" :subId='subId' :options="optionsxctj" id="chart_3" height="100px" width="100%" ></Echart>
                    </div>
                    <div style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right: 0px;top:20px">
                      <drop v-if="xctj.length > 1"  :labelProperty='false' :dataList='xctj' @change="selectFnxctj"></drop>
                      <div v-else>{{xctj0}}</div>
                     </div>
                   
               </div>
            </div>
        <div class="bottom_center fl">
            <div class="bottom_2 fl">
                <div class="main_title" style="width:380px;margin-left: -190px">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                    党务村务民主协商监督月例会
                </div>

                <div style="width:100%;height:100%" v-if="isPerson">
                     <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100% ;height:100%;float:left">
                                <Echart class="echarts" ref="dwhy" :subId='subId' :options="optionshy" id="chart_3" height="200px" width="100%" ></Echart>
              
                            </div>
                            <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:20px">
                            <drop  v-if="dwhy.length > 1" :labelProperty='false' :dataList='dwhy' @change="selectFndwhy"></drop>
                         </div>
                     </div>
                  </div>
               <div style="width:100%;height:100%;position: relative;" v-else>
                   <div style="width:45%;height:100%;float:left">
                        <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100% ;height:100%;float:left">
                                <Echart :options="optionsDN" ref='dn' :subId='subId' class="echarts" id="chart_3" ></Echart>
                            </div>
                              <div style="width:80px;height:120px;z-index: 9999;position: absolute;right:0;top:40px;font-size:10px">
                                <p v-for="(n,index) in dn" :key="index" style="clear:both;width: 100%;height:15px;overflow:hidden">
                                    <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                                    <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                                </p>
                            </div>
                            <!-- <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:20px">
                            <drop  v-if="dn.length > 1" :labelProperty='false' :dataList='dn' @change="selectFndn"></drop>
                         </div> -->
                     </div>
                     
                   </div>
                    <div style="width:45%;height:100%;float:left">
                         <div style="width:100%;height:100%;position: relative;">
                            <div style="width:100% ;height:100%;float:left">
                            <Echart :options="optionsDY" ref="dy" :subId='subId' class="echarts" id="chart_1" ></Echart>
                            </div>
                             <div style="width:80px;height:120px;z-index: 9999;position: absolute;right:0;top:40px;font-size:10px">
                                <p v-for="(n,index) in dy" :key="index" style="clear:both;width: 100%;height:15px;overflow:hidden">
                                    <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                                    <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                                </p>
                            </div>
                              <!-- <div style="width:20%;height:100%;float:left;margin-top:4%">
                   <p v-for="(n,index) in dy" :key="index" style="clear:both">
                       <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                       <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                   </p>
               </div> -->
                            <!-- <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:20px">
                            <drop  v-if="dy.length > 1"  :labelProperty='false' :dataList='dy' @change="selectFndy"></drop>
                         </div> -->
                     </div>
                   </div>
                   <div class="lo-title lo-title1" style="width:100%;height:40px;float:left;display:flex">
                       <div>当年</div>
                       <div>当月</div>
                   </div>
               </div>
              
            </div>
            <div class="bottom_3 fl">
                <div class="main_title">
                    <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_6.png" alt="">
                    惠农电商
                </div>
                <div style="width:100%;height:100%;position: relative;">
                    <div style="width:calc(100% - 100px);height:100%;float:left">
                       <Echart class="echarts" ref="hnds" :subId='subId' :options="optionsmall" id="chart_3" height="200px" width="100%" ></Echart>
            
                    </div>
                    <div style="width:130px;height:40px;float:left;z-index: 9999;position: absolute;right:0px;top:20px">
                      <drop v-if="hnds.length > 1"  :labelProperty='false' :dataList='hnds' @change="selectFnhnds"></drop>
                      <div v-else>{{hnds0}}</div>
                   </div>
                   
               </div>
                </div>
        </div>
        <div class="bottom_4 fr">
            <div class="main_title">
                <img src="https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/title_5.png" alt="">
                群防群治
            </div>
               <div style="width:100%;height:100%;position: relative;" v-if="isPerson">
                            <div style="width:100%;height:100%;float:left" >
                                <!-- <Echart class="echarts" ref="dwhi" :subId='subId' :options="optionshy" id="chart_3" height="200px" width="100%" ></Echart> -->
                              <Echart class="echarts" ref="qfqz" :subId='subId' :options="optionsq" id="chart_3" ></Echart>
                            </div>
                            <div style="width:130px;height:40px;z-index: 9999;position: absolute;right:0;top:20px" >
                                 <drop v-if="qfqz.length > 1" :labelProperty='false' :dataList='qfqz' @change="selectFnqfqz"></drop>
                            </div>
                     </div>
                     <div  style="width:100%;height:calc(100% - 35px);" v-else>
                            <div style="width:80%;height:100%;float:left;" >
                                <Echart class="echarts" ref="qfqz" :subId='subId' :options="optionsq" id="chart_2" height="280px" width="80%"></Echart>
                            </div>
                        <div style="width:20%;height:100%;float:left;margin-top:4%">
                            <p v-for="(n,index) in qfqz" :key="index" style="clear:both">
                                <span style="width:8px;margin-top: 5px;height:8px;float:left" :style="{'background':colorConfirm(index)}"></span>
                                <span style="float:left;width:calc(100% - 8px);height:100%;overflow:hidden">{{n.name}}</span>
                            </p>
                        </div>
                        </div>
              
                      
           
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
import drop from './drop'
export default {
  mixins: [ drawMixin ],
  data() {
    return { 
        a:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_5.png',
        b:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_1.png',
        c:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_8.png',
        d:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_6.png',
        e:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_2.png',
        f:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_9.png',
        g:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_7.png',
        h:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_3.png',
        i:'https://gitee.com/meiling_wu/city/raw/57d99d5a3792198348799e170407a4ce7b9eb060/big-screen-vue-datav-master/src/assets/img/info_10.png',
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
          ],
           colors1:[
             "#8378ea",
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
          ],
          colors2:[
             "#8378ea",
            "#fb7293",
            "#37a2da",
             "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#8378ea",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c", 
            "#fb7293",
            "#37a2da",
            "#e7bcf3",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#8378ea",
            "#ff9f7f",
          ],
          orgBranch:[],
          org:[],
          selectItem:'',
          tsrq:[],
          xctj:[],
          ndwb:[],
          hnds:[],
          isNeed:true,
          zdrq:[],
          rsrq:[],
          dn:[],
          dy:[],
          xfwm:[],
          dy137:[],
          dwhy:[],
          qfqz:[],
          ndwb0:'',
         xctj0:'',
         hnds0:''
    }
  },
  computed:{
    cdata(){
        return this.$store.state.allData
    },
   
  },
    watch: {
        cdata(val) {
             console.log(val)
             this.dwhy = val.hy.oData
             this.qfqz = val.q.oData
             this.tsrq = val.d.oData
             this.ndwb = val.p.oData
             this.xctj = val.online.oData
             this.zdrq = val.d.zPerson
             this.rsrq=val.d.rPerson
             this.hnds = val.mall.oData 
              this.ndwb0=  this.ndwb[0].name
         this.xctj0=this.xctj[0].name
         this.hnds0 = this.hnds[0].name

            this.orgBranch = val.allData
            this.dy137 =val.m.oData
            this.xfwm = val.x.oData
            this.dy=val.hy.yueYlh
            this.dn=val.hy.nianYlh
            this.org = val.allData.filter((v,index)=>{
                return index > 0
            })
            this.getAllPic(val)
            this.getData(this.$store.state.id1)
        }
   
   },
  components: {Echart,centerLeft2,drop},
  mounted() {
    this.timeFn()
    this.cancelLoading()
    window.addEventListener('resize', () => {
    console.log('resize')
    this.resize()

   // imgs.onLoad()
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
      
      imgLoadError(){
          this.isNeed = false
      },
      toDetailInit(init){
        this.getDataInit(init.unionCorpid)
      },
      selectFn(item){
          console.log("tt",item)
          this.getDataInit(item.index.unionCorpid)
      },
      selectFndwhy(index){
            let indexT= this.cdata.hy.oData.findIndex(v=>v.name == index.index.name)
            this.$refs.dwhy.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnqfqz(index){
            let indexT= this.cdata.q.oData.findIndex(v=>v.name == index.index.name)
            this.$refs.qfqz.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnxfwm(index){
            let indexT= this.cdata.x.oData.findIndex(v=>v.name == index.index.name)
            this.$refs.xfwm.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
       selectFndy137(index){
            let indexT= this.cdata.m.oData.findIndex(v=>v.name == index.index.name)
            this.$refs.dy137.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
       selectFndn(index){
       
            let indexT= this.cdata.hy.nianYlh.findIndex(v=>v.name == index.index.name)
            this.$refs.dn.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
       selectFndy(index){
       
            let indexT= this.cdata.hy.yueYlh.findIndex(v=>v.name == index.index.name)
            this.$refs.dy.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnPr(index){
       
            let indexT= this.cdata.d.oData.findIndex(v=>v.name == index.index.name)
            this.$refs.terq.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnzdrq(index){
      // val.d.zPerson
            let indexT= this.cdata.d.zPerson.findIndex(v=>v.name == index.index.name)
            this.$refs.zdrq.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnrsrq(index){
      // val.d.zPerson
            let indexT= this.cdata.d.rPerson.findIndex(v=>v.name == index.index.name)
            this.$refs.rsrq.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: indexT
            })  
      },
      selectFnndwb(index){
        let indexT= this.cdata.p.oData.findIndex(v=>v.name == index.index.name)
        this.$refs.ndwb.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: indexT
        })  
      },
      selectFnxctj(index){
        let indexT= this.cdata.online.oData.findIndex(v=>v.name == index.index.name)
        console.log("this.$refs.xctj",this.$refs.xctj)
        this.$refs.xctj.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: indexT
        })  
      },
      selectFnhnds(index){
        let indexT= this.cdata.mall.oData.findIndex(v=>v.name == index.index.name)
        this.$refs.hnds.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: indexT
        })  
      },
     getDataInit(id){
        this.$store.commit("setId1", id)
        this.axios.post('/ding//approveDetail/getInfo?corpId='+id, {}).then(res=>{
          this.allData = res.data.data
          let p={},d={},x={},m={},q={},hy={},online={},mall={}
          if(res.data.data.orgBranch.length == 1){
              let data = res.data.data.villageData
              let person = data.filter(val=>{return val.templateName == '特殊人群管理'})
              let zPerson = person.filter(val=>{return val.type == '重点人群'})
              let rPerson = person.filter(val=>{return val.type == '弱势群体'})
              let dangy  = data.filter(val=>{return val.templateName == '党员137'})
              let xfwm  = data.filter(val=>{return val.templateName == '乡风文明'})
              let qfqz  = data.filter(val=>{return val.templateName == '群防群治'})
              let ylh  = data.filter(val=>{return val.templateName == '党务村务民主协商监督月例会'})
              let yueYlh = ylh.filter(val=>{return val.type == '当月'})
               let nianYlh = ylh.filter(val=>{return val.type == '当年'})
                mall.type = 'pie'
                online.type = 'pie'
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                d.xData = person.map(val=>{
                    return val.name
                })
                d.xDataAll =person.map(val=>{
                    return val.number
                })
                d.oData = person.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                d.rPerson = rPerson.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                 d.zPerson = zPerson.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                m.xData = [];
                m.xDataAll =[];
                m.oData =[]
                m.type = 'bar'
                m.xData = dangy.map(val=>{
                    return val.name
                })
                 m.xDataAll =dangy.map(val=>{
                    return val.number
                })
                m.oData = dangy.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })

                x.xData = [];
                x.xDataAll =[];
                x.oData =[]
                x.xData = xfwm.map(val=>{
                    return val.name
                })
                 x.xDataAll =xfwm.map(val=>{
                    return val.number
                })
                x.oData = xfwm.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })


               q.xData = [];
               q.xDataAll =[];
                q.oData =[]
                q.xData = qfqz.map(val=>{
                    return val.name
                })
                q.xDataAll =qfqz.map(val=>{
                    return val.number
                })
                q.oData = qfqz.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })

           

                hy.xData = [];
                hy.xDataAll =[];
                hy.oData =[]
                hy.type = 'line'
                hy.xData = ylh.map(val=>{
                    return val.name
                })
               hy.xDataAll =ylh.map(val=>{
                    return val.number
                })
                hy.oData = ylh.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                
                hy.type = 'pie'
                hy.yueYlh = yueYlh.map(val=>{
                    return  {
                         name: val.name,
                         value:val.number
                    }
                })
                hy.nianYlh = nianYlh.map(val=>{
                    return  {
                         name: val.name,
                         value:val.number
                    }
                })
          }else{
               let data =  res.data.data?.template
                mall.type = undefined
                online.type = undefined
          data.forEach(val=>{
            if(val.name == '特殊人群管理'){
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                if(val.list.length > 0){
                 val.list.forEach(val => {
                d.xData.push(val.orgName)
                d.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    d.oData.push(o)
                });   
                }else{
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                }
               
           }else if(val.name == '党员137'){
                m.xData = [];
                m.xDataAll =[];
                m.oData =[]
                val.list.forEach(val => {
                m.xData.push(val.orgName)
                m.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    m.oData.push(o)
                });   
           }
             else if(val.name == '群防群治'){
                 q.xData = [];
                q.xDataAll =[];
                q.oData =[]
                val.list.forEach(val => {
                q.xData.push(val.orgName)
                q.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    q.oData.push(o)
                });   
             }

             else if(val.name == '乡风文明'){
                 x.xData = [];
                x.xDataAll =[];
                x.oData =[]
                val.list.forEach(val => {
                x.xData.push(val.orgName)
                x.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    x.oData.push(o)
                });   
             }
             else if(val.name == '党务村务民主协商监督月例会'){
                 hy.xData = [];
                hy.xDataAll =[];
                hy.oData =[]
                val.list.forEach(val => {
                hy.xData.push(val.orgName)
                hy.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    hy.oData.push(o)
                });   
             }
          })
          }
           let datathree =  res.data.data?.template
              let ndwb  = datathree.filter(val=>{return val.name == '你钉我办'})[0]
              let hnds  = datathree.filter(val=>{return val.name == '惠农电商'})[0]
              let tangj  = datathree.filter(val=>{return val.name == '乡村调解反馈'})[0]
                mall.xData = [];
                mall.xDataAll =[];
                mall.oData =[]
                hnds.list.forEach(val => {
                mall.xData.push(val.orgName)
                mall.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    mall.oData.push(o)
                });

                 p.xData = [];
                p.xDataAll =[];
                p.oData =[]
                ndwb.list.forEach(val => {
                p.xData.push(val.orgName)
                p.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    p.oData.push(o)
                });   
             
                online.xData = [];
                online.xDataAll =[];
                online.oData =[]
                tangj.list.forEach(val => {
                online.xData.push(val.orgName)
                online.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    online.oData.push(o)
                });   

            let dataA ={
                d:d,
                p:p,
                q:q,
                online:online,
                mall:mall,
                x:x,
                m:m,
                hy:hy,
                allData:this.allData.orgBranch
            }
         //  console.log("fff",dataA)
          this.$store.commit("setData", dataA)  
        })
    },
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
          val.stats = Number(val.stats)
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
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
                data: val.online.oData
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
                // legend: { //图例组件，颜色和名字
                //     left: '60%',
                //     top: '25%',
                //     orient: 'vertical',
                //     itemGap: 12, //图例每项之间的间隔
                //     itemWidth: 16,
                //     itemHeight: 12,

                //     icon: 'rect',
                //     data: val.hy.yueYlh,
                //     textStyle: {
                //         color: [],
                //         fontStyle: 'normal',
                //         fontFamily: '微软雅黑',
                //         fontSize: 12,
                //     }
                // },
                series: [{
                    name:'',
                    type: 'pie',
                    clockwise: false, //饼图的扇区是否是顺时针排布
                    minAngle: 20, //最小的扇区角度（0 ~ 360）
                    center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
                }]
            }

          this.optionsDN = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#25f3e6','#0035f9', '#f36f8a', '#ffff43'],
            //legend: { //图例组件，颜色和名字
            //     left: '60%',
            //     top: '25%',
            //     orient: 'vertical',
            //     itemGap: 12, //图例每项之间的间隔
            //     itemWidth: 16,
            //     itemHeight: 12,

            //     icon: 'rect',
            //     data: val.hy.nianYlh,
            //     textStyle: {
            //         color: [],
            //         fontStyle: 'normal',
            //         fontFamily: '微软雅黑',
            //         fontSize: 12,
            //     }
            // },
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
            // legend: { //图例组件，颜色和名字
            //     left: '60%',
            //     top: '30',
            //     orient: 'vertical',
            //     itemGap: 12, //图例每项之间的间隔
            //     itemWidth: 16,
            //     itemHeight: 12,

            //     icon: 'rect',
            //     data: val.d.xData,
            //     textStyle: {
            //         color: [],
            //         fontStyle: 'normal',
            //         fontFamily: '微软雅黑',
            //         fontSize: 12,
            //     }
            // },
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
            }]
        }

         this.optionsPZ = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            
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
            }]
        }

         this.optionsPR = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            // legend: { //图例组件，颜色和名字
            //     left: '60%',
            //     top: '30',
            //     orient: 'vertical',
            //     itemGap: 12, //图例每项之间的间隔
            //     itemWidth: 16,
            //     itemHeight: 12,

            //     icon: 'rect',
            //     data: val.d.rPerson,
            //     textStyle: {
            //         color: [],
            //         fontStyle: 'normal',
            //         fontFamily: '微软雅黑',
            //         fontSize: 12,
            //     }
            // },
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
            color:['#f36f8a', '#ffff43','#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            // legend: { //图例组件，颜色和名字
            //     left: '60%',
            //     top: '30',
            //     orient: 'vertical',
            //     itemGap: 12, //图例每项之间的间隔
            //     itemWidth: 16,
            //     itemHeight: 12,

            //     icon: 'rect',
            //     data: val.p.xData,
            //     textStyle: {
            //         color: [],
            //         fontStyle: 'normal',
            //         fontFamily: '微软雅黑',
            //         fontSize: 12,
            //     }
            // },
            series: [{
                name:'',
                type: 'pie',
                // roseType: 'area',
                clockwise: true, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
                radius: [50, 80], //饼图的半径
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
                    // grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
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
            series: [{
                name:'',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
                    // grid: {left: '2%',top:"30%",bottom: "5%",right:"8%",containLabel: true},
                   grid:{
                    x:25,
                    y:45,
                    x2:this.isPerson?50:100,
                    y2:20,
                    borderWidth:1
                },
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
 .zq-drop-list{
        display: inline-block;
        min-width: 100px;
        position: relative;
        span{
            display: block;
            height: 30px;
            line-height: 30px;
            background: #f1f1f1;
            font-size: 14px;
            text-align: center;
            color: #333333;
            border-radius: 4px;
            i{
                background: url(https://www.easyicon.net/api/resizeApi.php?id=1189852&size=16) no-repeat center center;
                margin-left: 6px;
                display: inline-block;
            }
        }
        ul{
            position: absolute;
            top: 30px;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            border: solid 1px #f1f1f1;
            border-radius: 4px;
            overflow: hidden;
            li{
                list-style: none;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                border-bottom: solid 1px #f1f1f1;
                background: #ffffff;
            }
            li:last-child{
                border-bottom: none;
            }
            li:hover{
                background: #f6f6f6;
            }
        }
    }
</style>
