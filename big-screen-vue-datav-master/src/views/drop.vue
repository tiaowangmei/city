<template>
    <div class="zq-drop-list" @click="onDplOver($event)">
        <span v-if="labelProperty">请选择村社区<i></i></span>
        <span v-else>{{choose||isQ}}<i></i></span>
        <ul class="test-1" v-if="labelProperty"  v-show="isShow">
            <li class="scrollbar-r" v-for="(item, index) in dataList" :key="index" @click="onLiClick(item, $event)">{{item.unionOrgName}}</li>
        </ul>
        <ul class="test-1" v-else v-show="isShow">
            <li class="scrollbar-r" v-for="(item, index) in dataList" :key="index" @click="onLiClick(item,index)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DropDownList",
    data(){
        return {
            activeIndex:0,
            choose:'',
            isShow:false,
            isQ:'请选择乡镇街道办'
        }
    },
    props:{
        dataList:{
            type:Array,
            default(){
                return [
                    {name: "选项一"},
                    {name: "选项二"}
                ]
            }
        },
        labelProperty:{
            type:Boolean,
            default(){ return true }
        }
    },
    watch:{
        id(v){
            console.log("opoop",v)
         this.isQ = v == 'ding0b3219e0d629f0acf5bf40eda33b7ba0'?'请选择乡镇街道办':'请选择村社区'
        }
    },
    mounted(){
       // if(this.dataList.length == 1) this.choose = this.dataList[0].name
      // console.log("000000",this.$store.state.subId)
       this.isQ = this.$store.state.initId == 'ding0b3219e0d629f0acf5bf40eda33b7ba0'?'请选择乡镇街道办':'请选择村社区'
      // console.log("item22222222",this.dataList )
    },
    methods:{
        onDplOver(){
             this.isShow = !this.isShow
        },
        onDplOut(){
          this.isShow = false
        },
        onLiClick(item){
            this.choose = item.name
            this.isShow = false
         
           if(this.labelProperty){
            this.isQ = '请选择村社区'
              //console.log("item", this.isQ )
              this.$store.commit("setClick",true)
             this.$emit("change", {
                index:item
            })
           }else{
                this.$emit("change", {
                index:item
            })
           }
           
        }
    },
    computed:{
        dplLable(){
            return this.dataList[this.activeIndex][this.labelProperty]
        },
        
        id(){
            return this.$store.state.initId
        }
    }
}
</script>


<style scoped lang="scss">
    .zq-drop-list{
        display: inline-block;
        min-width: 100px;
        position: relative;
        width: 100%;
        background: transparent;
        span{
            display: block;
            height: 30px;
            line-height: 30px;
            background: #ddd;
            font-size: 14px;
            text-align: center;
            color: #ffffff;
            background: transparent;
            border:1px solid #034c6a;
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
            border: 1px solid #034c6a;
            border-radius: 4px;
            overflow: hidden;
            max-height: 180px;
            cursor: pointer;
             width: 100%;
             z-index: 999;
             background: rgba(19, 25, 47, 0.6);
             overflow:auto;
            li{
                list-style: none;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                border-bottom:1px solid #034c6a;
                 width: 100%;
                background: transparent;
                text-align: center;
            }
            li:last-child{
                border-bottom: none;
            }
            li:hover{
                color:#32c5e9;
                background: transparent;
            }
        }
    }
   .test-1::-webkit-scrollbar {/*滚动条整体样式*/

        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/

        height: 1px;

    }

.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #535353;

    }

.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: rgba(0,0,0,1);

}
</style>