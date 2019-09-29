<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      class="menu"
    ><v-list dense>
     <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/photo.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>محمد علي</v-list-item-title>
            <v-list-item-subtitle>enjaz@mail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <br>
         <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        class="colorIcon"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :links="subItem.link"
        >
        <router-link  :to="subItem.link">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block
          @click="logout()"
          class="logout">
            <v-icon>mdi-logout-variant</v-icon>
            &nbsp;
            تسجيل خروج 
            </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    
    <v-app-bar
      app
      color="cyan"
      dark
      >
      <div ></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="flex-grow-1"></div>
      <v-btn icon>
            <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>


  </v-app>
</template>

<script>
import router from '../router'

  export default {
    props: {
    },
    

    data: () => ({
      drawer: null,
      auth:false,

       items: [
            {
            action: 'mdi-view-dashboard-outline',
            title: 'الرئيسية',
            items: [
              { title: 'المخططات',link:'/home' },
              { title: 'التقارير',link:'' },
            ],
          },
          {
            action: 'mdi-account-group-outline ',
            title: 'الاداره',
            items: [
              { title: 'كل الاداريين',link:'/allAdmin' },
              { title: 'اضافة اداري',link:'/addAdmin' },
            ],
          },
          {
            action: 'mdi-bookmark-multiple-outline ',
            title: 'العقود',
            items: [
              { title: 'كل العقود',link:'/allContract' },
              { title: 'اضافة عقد',link:'/addContract' },
            ],
          },
         
          
        ],


    }),

    methods: {
    
      logout(){
        const userData = {
          auth: this.auth
        }
        this.$store.dispatch('logout',userData)
      },
      
    },
  }
</script>
<style scoped>
.v-application .cyan{
  background: #005792  !important
}
.menu{
  /* background: linear-gradient(to top left, #002C49 ,#005792 ) ; */
  background-image: url(../assets/menu.svg);

}

.colorIcon{

  color: white !important
}
.mdi-logout-variant,
.logout{
  color:red !important;
  font-family: cairo

}
.v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle{
  color: white;
  font-family: cairo
}
.title{
  font-family: cairo !important
}
</style>