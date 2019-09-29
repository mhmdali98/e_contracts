<template>
  <div class="login">
        <center>
        <div class="card">
          <v-container class="grey lighten-5">
    <v-row
      v-for="n in 1"
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
      no-gutters
    >
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <h2 class="dkhol">تسجيل الدخول</h2>
          <form class="bg2">
    
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="البريدالالكتروني"
      prepend-icon="mdi-account"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
  <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="كلمة المرور"
       type="password"
      prepend-icon="mdi-lock-question"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      label="تذكرني"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

   <div class="text-center">
     
    <v-btn
      class="ma-2 colorbut"
      :loading="loading"
      :disabled="loading"
      color="light-blue darken-3"
      @click="loader = 'loading'"
    >
    <v-icon>mdi-login</v-icon> 
            &nbsp;
    
    دخول
    </v-btn>
    </div>
  </form>
        </v-card>
      </v-col>
       <v-col class="bg">
          <h1 class="txt3gd">عقد الكتروني</h1>
          <h4 class="txt3gd2">منصة لعمل عقود الكترونية 
          <br>لمنصات انجاز
          </h4>
      </v-col>
    </v-row>
  </v-container>
   

        </div>
        </center>
        
  </div>
</template>

<script>
 import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import router from '../router'
import store from '../store'


export default {
 mixins: [validationMixin],

    validations: {
      password: { required},
      email: { required, email },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      password: '',
      email: '',
      auth: true,
     loader: null,
        loading: false,
      checkbox: false,
    }),
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)
        this.submit()
        this.loader = null
        
      },
    },
  created() {
    if (window.localStorage.getItem('auth') == true) {
      this.$router.push('/home');
    }
    },
    computed: {
     
   
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('يجب ادخال كلمة المرور')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('خطا في كتابة البريد الالكتروني')
        !this.$v.email.required && errors.push('يجب ادخال البريد الالكتروني')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        
        if (this.email.length !== 0 && this.password.length !== 0) {
        const userData = {
          auth: this.auth
        }
        this.$store.dispatch('login',userData)

        }
      }
    },
}
</script>
<style scoped>
.login{
  font-family: cairo;
  text-align: center;
  color: #2c3e50;
   background: linear-gradient(to top right , #002C49 ,#005792 ) ;
   background-size: cover;
   min-height: 100%;
   
}
.card{
  box-shadow: -10px 10px 20px 0px #00000054;
  width: 66%;
  margin-top: 120px;
  

}
 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .colorbut{
    color:white;
  }
  .container{
    padding: 0;
  }
  .v-application .pa-2{
    padding: 0 !important;
  }
  .theme--light.v-card.v-card--outlined{
    border: none;
  }
  .bg{
    background: url(../assets/login.svg) no-repeat ;

    background-size: 500px 514px
  }
  .dkhol{
    padding-top: 90px;
    padding-bottom: 50px;
     font-family: cairo;
  text-align: center;
  color: #2c3e50;
  }
  .bg2{

    padding:0 100px 100px 100px
  }
  .txt3gd{
    color: white;
    padding-top:50px;
    font-family: cairo;
  }
  .txt3gd2{
     padding-top:10px;
     color: #C2C2C2;
  }
  @media only screen and (max-width: 444px) {
    .card{
        width: 100%;
        margin-top:0
      }
      .bg{
        height: 200px;
      }
  }
</style>