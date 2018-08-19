<template>
  <div class="footer">
    <div class="backgroundPhoto">
      <img class="footerBG" src="../../assets/images/footerBG.png" alt="">
      <div class="footerText" v-if="needDiamond == true">
        <img class="icon" src="../../assets/images/prizeIcon.png" alt="">
        <p class="text">抽奖需消耗{{diamond}}方圆</p>
        <img class="icon" src="../../assets/images/prizeIcon.png" alt="">
      </div>
    </div>
    <img class="indexBackground" src="../../assets/images/indexBackground.png" alt="" />
  </div>
</template>



<script lang="ts">
import { Vue } from 'vue-property-decorator';
import API from '../../assets/js/api';

export default class Footer extends Vue {
  // 需要方圆或者是不需要
  private needDiamond: boolean = true;
  // 方圆数量
  private diamond: number = 0;

  // 当用户加载页面的时候
  created() {
    console.log('?asass?');
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  .backgroundPhoto {
    position: absolute;
    bottom: -2px;
    z-index: 20;
    .footerBG {
      width: 100%;
    }
    .footerText {
      position: absolute;
      bottom: (90rem)/75;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        color: #ffce74;
        letter-spacing: 5px;
        font-size: 15px;
        margin: 0 (16rem)/75;
      }
      .icon {
        width: (41rem)/75;
        height: (36rem)/75;
      }
    }
  }
  .indexBackground {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    width: (716rem)/75;
    height: (657rem)/75;
    bottom: (80rem)/75;
  }
}
</style>

