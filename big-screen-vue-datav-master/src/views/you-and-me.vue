<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-11-12 20:14:13
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-14 22:56:22
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\views\you-and-me.vue
-->
<template>
  <div id="centerLeft1" style="width:100%;height:100%">
    <div class="bg-color-black" style="width:100%;height:100%">
      <div class="d-flex pt-2 pl-2">
        <!-- <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span> -->
        <div class="d-flex">
          <span class="fs-xxxl text mx-2">你钉我办</span>
          <!-- <dv-decoration-3 class="dv-dec-3" /> -->
        </div>
      </div>
      <div class="d-flex jc-center" style="width:100%;height:calc(100% - 50px)">
        <!-- <CenterLeft1Chart /> -->
        <you-and-me/>
      </div>
    </div>
  </div>
</template>

<script>
//import CenterLeft1Chart from '@/components/echart/centerLeft/centerLeft1Chart'
import youAndMe from '@/components/echart/you-and-me'
export default {
  data() {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 34
            }
          },
          text: '特殊人员'
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 34
            }
          },
          text: '总人数'
        },
      ]
    }
  },
  components: {
    youAndMe
  },
  mounted() {
    this.changeTiming()
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber()
      }, 3000)
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index
        item.number = { ...item.number }
      })
    }
  }
}
</script>

<style lang="scss" scoped>