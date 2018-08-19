<template>
  <div class="handFather">
    <img class="hand hand-animate" src="../../assets/images/Hand.png" />
  </div>
</template>

<script>
export default {
  name: "Hand",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.handFather {
  position: fixed;
  bottom: (251rem)/75;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  z-index: 10;
  .hand {
    width: (261rem)/75;
    height: (405rem)/75;
  }
}

.hand-animate {
  -webkit-animation: hand_move infinite 1.75s;
  -webkit-transform-origin: center bottom;
}

@-webkit-keyframes hand_move {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>

