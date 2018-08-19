<template>
  <div class="top">
    <div class="father">
      <img src="../../assets/images/topText.png" alt="">
    </div>
    <img class="prize1" src="../../assets/images/prize1.png" alt="">
    <img class="prize2" src="../../assets/images/prize2.png" alt="">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top {
  .father {
    padding-top: (82rem)/75;
    text-align: center;
    img {
      width: (616rem)/75;
      height: (276rem)/75;
    }
  }
  .prize1 {
    position: fixed;
    top: (392rem)/75;
    left: (81rem)/75;
    width: (121rem)/75;
    height: (131rem)/75;
  }
  .prize2 {
    position: fixed;
    top: (480rem)/75;
    left: (550rem)/75;
    width: (81rem)/75;
    height: (83rem)/75;
  }
}
</style>

