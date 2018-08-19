<template>
  <div class="noDiamond">
    <div class="allHeight">
      <div :style="backgroundDiv" class="mask">
        <img class="photo" src="../../assets/images/getNoPrizeText.png" alt="">
        <div class="hints">
          <p>抱歉，您的方圆不足</p>
          <p class="second">快去获取更多方圆吧</p>
        </div>
        <div class="chooseFather">
          <div class="long">
            <div class="same" @click="touchCancel()">
              <img src="../../assets/images/cancel.png" alt="">
            </div>
          </div>
          <div class="long" @click="goDiamond()">
            <div class="same">
              <img src="../../assets/images/go.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// export default {
//   name: "NoDiamond",
//   data() {
//     return {
//       msg: "",
//       backgroundDiv: {
//         backgroundImage:
//           "url(" + require("../../assets/images/noPrize.png") + ")"
//       }
//     };
//   },
//   props: ["showType"],
//   methods: {
//     touchCancel() {
//       this.$emit("popS", { showNoDiamond: false });
//     },
//     goDiamond() {
//       let host = window.location.host;
//       let protocol = window.location.protocol;
//       // 跳转至个人中心界面
//       window.location.replace(
//         protocol + "//" + host + "/xyx/platform/getDiamond"
//       );
//     }
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.noDiamond {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000000;
  .allHeight {
    width: (547rem)/75;
    height: (800rem)/75;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    .mask {
      width: (547rem)/75;
      height: (665rem)/75;
      background: no-repeat center;
      background-size: 100% 100%;
      .photo {
        margin-top: (194rem)/75;
        width: (220rem)/75;
        height: (41rem)/75;
      }
      .hints {
        margin-top: (60rem)/75;
        font-size: 18px;
        color: #666666;
        font-weight: 600;
        .second {
          margin-top: (20rem)/75;
        }
      }
    }
    .chooseFather {
      display: flex;
      justify-content: center;
      align-items: center;
      width: (547rem)/75;
      padding-top: (341rem)/75;
      .long {
        width: 50%;
        text-align: center;
        .same {
          width: (212rem)/75;
          height: (63rem)/75;
          margin: 0 auto;
          img {
            width: (212rem)/75;
            height: (63rem)/75;
          }
        }
      }
    }
  }
}
</style>

