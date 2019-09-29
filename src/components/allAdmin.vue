<template>
    <div>
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
       <v-card>
      <v-card-title>
      الاداريين
      <div class="flex-grow-1"></div>
      <v-flex xs8 sm8 md3>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="ابحث هنا"
        single-line
        class="serch"
      ></v-text-field>
      </v-flex>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :single-select="singleSelect"
      v-model="selected"
      item-key="name"
      show-select
      class="elevation-1"
    >
    <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </v-data-table>
    </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-content>
    </div>
</template>
<script>
export default {
    data() {
      return {
        singleSelect: false,
        selected: [],
              search: '',
        headers: [
          {
            text: 'الاسم',
            align: 'right',
            sortable: false,
            value: 'name',
          },
          { text: 'البريد الالكتروني', value: 'calories' },
          { text: 'نوع الاداري', value: 'fat' },
          
        ],
        desserts: [
          {
            name: 'عباس كرار ',
            calories: "abbas@gmail.com",
            fat: "سوبر ادمن",
            
          },
          {
            name: 'عمر مظفر',
            calories: "omar@gmail.com",
            fat: "كاتب",
            
          },
          {
            name: 'همام محمد',
            calories: "humam@gmail.com",
            fat: "قارئ فقط",
            
          },
          {
            name: 'احمد جاسم',
            calories: "ahmed@gmail.com",
            fat: "كاتب",
            
          },
          
          
        ],
      }
    },
}
</script>
<style scoped>

</style>