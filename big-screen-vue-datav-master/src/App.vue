<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-20 19:40:58
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\App.vue
-->
<template>
  <div id="app" >
    <router-view />
  </div>
</template>
<script>
export default {
   data(){
       return{
        //    img:''
       }
   },
   created(){
        // this.axios.get('/ding/approveDetail/getBackImg?corpId=dinga2aca3ea5ed4e330ffe93478753d9884', {corpId: 'dinga2aca3ea5ed4e330ffe93478753d9884'}).then(res =>{
           
        //    this.img = res.data.data.img.file
        //    console.log("rrr", this.img)
        // })
      //  this.setFontSize()
   },
   methods:{
       setFontSize() {
      // 获取整个文档元素
      var docEl = document.documentElement,
      resizeEvt =
        // 获取移动端屏幕是否翻转  
        // 判断windows中是否有这个属性orientationchange 因为orientationchange会遇到兼容性问题，有的浏览器不支持  resize窗体发生改变就会触发这个事件
        'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth //clientWidth的实际宽度=width+左右padding
        if (!clientWidth) return
        var size = 100 * (clientWidth / 1920)
        docEl.style.fontSize = (size < 100 ? size : 100) + 'px'
      }
      // 判断addEventListener是否存在，addEventListener的第三个参数true 代表捕获 false是冒泡
      if (!document.addEventListener) return
      window.addEventListener(resizeEvt, recalc, false)
      document.addEventListener('DOMContentLoaded', recalc, false)//DOMContentLoaded可以检测dom是否加载完成
      // console.log('docEl',docEl);
      
    }
  }
   }
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
