/*
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-23 21:22:18
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      allData:[],
      id:'',
      id1:'',
      initId:'',
      subId:'',
      orgBranch:{}
  },
  mutations: {
    setData(state,allData){
        state.allData = allData
    },
    setId(state,id){
        state.id = id
    },
    setId1(state,id){
        state.id1= id
    },
    setInitId(state,id){
        state.initId= id
    },
    setSubId(state,id){
        state.subId= id
    },
    seetorgBranch(state,orgBranch){
        state.orgBranch= orgBranch
    }
  },
  actions: {
  },
  modules: {
  }
})
