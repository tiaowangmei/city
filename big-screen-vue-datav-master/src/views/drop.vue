<template>
    <div class="zq-drop-list" @click="onDplOver($event)">
        <span>请选择下级机构<i></i></span>
        <ul v-dpl>
            <li v-for="(item, index) in dataList" :key="index" @click="onLiClick(item, $event)">{{item.unionOrgName}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DropDownList",
    data(){
        return {
            activeIndex:0
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
            type:String,
            default(){ return "name" }
        }
    },
    directives:{
        dpl:{
            bind(el){
                el.style.display = "none";
            }
        }
    },
    methods:{
        onDplOver(event){
            let ul = event.currentTarget.childNodes[1];
            ul.style.display = ul.style.display=="block"?ul.style.display='none':ul.style.display='block';
        },
        onDplOut(event){
            let ul = event.currentTarget.childNodes[1];
            ul.style.display = "none";
        },
        onLiClick(item){
            
          //  path[1].style.display = "none";
          //  this.activeIndex = index;
            this.$emit("change", {
                index:item,
            })
        }
    },
    computed:{
        dplLable(){
            return this.dataList[this.activeIndex][this.labelProperty]
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
            max-height: 280px;
             width: 100%;
             z-index: 999;
             background: rgba(0,0,0,0.5);
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
</style>