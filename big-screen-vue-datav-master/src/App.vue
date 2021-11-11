<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-09 20:36:29
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
