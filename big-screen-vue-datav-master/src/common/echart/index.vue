<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-12-06 10:10:22
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\common\echart\index.vue
-->
<template>
  <div :id="id" :class="className" ref="chart" style="width:100%;height:100%" />
</template>

<script>
import tdTheme from './theme.json' // 引入默认主题

export default {
  name: 'echart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: ()=>({})
    },
    isPic:{
      type: String,
      default: '零陵区'
    },
    subId:{
      type: String,
      default: ''
    },
  },
  data () {
    return {
      chart: null,
      geoCoordMap:{},
    }
  },
  computed:{
     ids(){
         return this.$store.state.initId
     }
  },
  watch: {
    options: {
      handler (options) {
           this.chart?.setOption(options, true)
      },
      deep: true
    },
     ids :{
      handler(val) {
          return val
        },
      immediate: true,
      deep: true,
    },
  },
  mounted () {
            this.$echarts.registerTheme('tdTheme', tdTheme); // 覆盖默认主题 
            this.getData()
  },
  methods: {
    initChart () {
      let $this =this
      let  res = this.dataReturn()
      this.chart.on('click', function (params) {
          let corpId = params.data.id
          if(corpId){
                $this.axios.post('/ding//approveDetail/getInfo?corpId='+corpId, {}).then(re=>{
                    $this.$store.commit("setorgBranch",re.data.data.orgBranch)
                if($this.options.series.length == 2 || params.dimensionNames[0]=="lng"){
                  if(params.dimensionNames[0]=="lng")  $this.$emit('handleMapRandomSelect',params)
                    }else{
                    let all = {}
                    let allCity = res.features.filter(val=>{
                        return val.properties.name == params.name
                    })
                    all.features = []
                    all.type = res.type;
                    let obj= {}
                    obj.type = "Feature"
                    obj.properties = {
                        name:params.name
                    }
                    obj.geometry = allCity[0].geometry
                    all.features.push(obj)
                    let  ids =  re.data.data.orgBranch.filter(val=>{return val.unionOrgName == params.name})[0].unionCorpid
                    $this.$store.commit("setId", ids)
                    $this.$echarts.registerMap('零陵区',all)
                    $this.$emit('handleMapRandomSelect',params)
                    $this.$echarts.registerMap(params.name,all)
                    $this.chart.setOption( $this.options, true)
                    }
                })
                
           }else{
             $this.$emit('handleMapRandomSelect',params)
           }
       })
    },
    getData(){
       let res = this.dataReturn()
       let corpId =this.ids
           this.axios.post('/ding//approveDetail/getInfo?corpId='+corpId, {}).then(re=>{
                let  name =  re.data.data.orgBranch.filter(val=>{return val.unionCorpid == corpId})[0]?.unionOrgName
                  let allData = {}
                  if(name =='零陵区' ){
                   allData = res
                  }else{
                    let allCity = res.features.filter(val=>{
                        return val.properties.name == name
                    })
                    allData.features = []
                    allData.type = res.type;
                    let obj= {}
                    obj.type = "Feature"
                    obj.properties = {
                        name:name
                    }
                    obj.geometry = allCity[0].geometry
                    allData.features.push(obj)
                 }
                  this.$echarts.registerMap(name,allData)
                  this.chart = this.$echarts.init(this.$el, 'tdTheme')
                  this.chart.setOption(this.options, true)
                  this.initChart()
           })
    }
    
  }
}
</script>

<style>
</style>
