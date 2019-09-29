<template>
    <div class="inp">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col>
           <form>
             <v-col cols="12" sm="12">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="30"
      label="الاسم الكامل"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
             </v-col>
             <v-col cols="12" sm="12">
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="البريد الالكتروني"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
             </v-col>
    <v-col cols="12" sm="12">
          <v-text-field
            :append-icon="show2 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="كلمة المرور"
            hint="كلمة المرور مقبولة"
            value=""
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="نوع المستخدم"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
        </v-col>


    <v-btn class="mr-4 but" @click="submit" color="light-blue darken-3" >اضافة</v-btn>
  </form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</div>
</template>
<script>
import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {

     mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      email: { required, email },
      select: { required },
     
    },

    data: () => ({
      show2: false,
      password: '',
      rules: {
          required: value => !!value || 'مطلوب',
          min: v => v.length >= 8 || 'يجب ان يكون اكثر من 8 مدخلات',
        },
      name: '',
      email: '',
      select: null,
      items: [
        'سوبر ادمن',
        'كاتب',
        'قراءة فقط',
      ],
      drawer: null,

    }),

    computed: {
      
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('يجب اختيار نوع المستخدم')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('يجب ان يكون الاسم اقل من 30 حرف')
        !this.$v.name.required && errors.push('الاسم مطلوب')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('خطا في ادخال البريد الالكتروني')
        !this.$v.email.required && errors.push('البريد الالكتروني مطلوب')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
     
    },
  }
</script>
<style scoped>
.inp{
  width: 50%;
   margin: 0 auto;
   margin-top: 50px;
   font-family: cairo
}
.but{
   color:white;
    font-family: cairo
}
@media only screen and (max-width: 444px) {
    .inp{
        width: 100%;
    }
}
</style>