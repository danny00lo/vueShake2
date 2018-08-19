<template>
  <div class="index">
    <div class="posistion" @click="">
      <Top></Top>
      <Hand v-show="showHand"></Hand>
      <Footer></Footer>
    </div>
    <!-- <NoDiamond v-on:popS='popS' v-bind:showType='showNoDiamond' v-if="showNoDiamond"></NoDiamond>
    <div class="tips" v-if="showTips">
      <div class="text">{{showMsg}}</div>
    </div>
    <HavePrize v-if="showHavePrize" :prizeInfo="prizeInfo"></HavePrize>
    <NoPrize v-if="showNoPrize"></NoPrize> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Shake from 'shake.js';
import Top from '@/components/Index/Top.vue'; // @ is an alias to /src
import Hand from '@/components/Index/Hand.vue';
import Footer from '@/components/Index/Footer.vue';
import API from '../assets/js/api';

@Component({
  components: {
    Top,
    Hand,
    Footer,
  },
})
export default class Index extends Vue {
  // 定义其函数
  private showHand: boolean = true;
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';
.index {
  background: #040506;
  width: 100%;
  height: 100%;
  .posistion {
    width: 100%;
    height: 100%;
  }
  .tips {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 10000;
    border-radius: pxTorem(15);
    width: pxTorem(600);
    height: pxTorem(180);
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      text-align: center;
      color: #ffffff;
      font-size: 13px;
    }
  }
}
</style>

