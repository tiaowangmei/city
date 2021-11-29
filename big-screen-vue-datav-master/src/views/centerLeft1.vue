<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xxxl text mx-2">特殊人员占比</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="d-flex jc-center" style="width:100%;height:calc(100% - 50px)">
        <CenterLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data" v-if="false">
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
          <div class="d-flex">
            <span class="coin"> *</span>
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
          </div>
          <p class="text" style="text-align: center;">
            {{ item.text }}
            <span class="colorYellow">(人)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeft1Chart from '@/components/echart/centerLeft/centerLeft1Chart'
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
    CenterLeft1Chart
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
$box-width: 100%;
$box-height: 100%;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height:100%;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
