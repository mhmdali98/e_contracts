<template>
  <v-app>
    <smenu v-if="auth" class="pos"/>
    <router-view/>
  </v-app>
</template>
<script>
import smenu from './views/About'
export default {
  components:{
    smenu
  },
  data() {
    return {
      
    }
  },
   computed:{
    auth(){
      console.log(this.$store.getters.auth)
      return this.$store.getters.auth
    }
    },
    
}
</script>
<style>
.pos{
  position:absolute
}
</style>
