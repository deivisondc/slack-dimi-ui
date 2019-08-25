<template>
  <div>
    <base-form-layout
      :form-model="form"
      :form-rules="formRules"
      @submitForm="saveForm"
      @cancelForm="cancelForm"
    >
      <template slot="title">
        Cardápio
      </template>

      <template>
        <el-form-item label="Dia da Semana" prop="weekday">
          <app-select-weekday
            :model="form"
            :placeholder="'Selecione um ou mais dias da semana'"
            :multiple="!isEditing"
            :show-weekend="false"
          />
        </el-form-item>
        <el-form-item label="Prato Principal" prop="main_dish_id">
          <el-select
            v-model="form.main_dish_id"
            placeholder="Selecione um prato principal"
            style="width: 100%"
          >
            <el-option
              v-for="mainDish in mainDishList"
              :key="mainDish._id"
              :label="mainDish.description"
              :value="mainDish._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Acompanhamentos" prop="side_dishes">
          <el-select
            v-model="form.side_dishes"
            multiple
            placeholder="Selecione um ou mais acompanhamentos"
            style="width:100%"
          >
            <el-option
              v-for="sideDish in sideDishList"
              :key="sideDish._id"
              :label="sideDish.description"
              :value="sideDish._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Saladas" prop="salads">
          <el-select
            v-model="form.salads"
            multiple
            placeholder="Selecione uma ou mais saladas"
            style="width:100%"
          >
            <el-option
              v-for="salad in saladList"
              :key="salad._id"
              :label="salad.description"
              :value="salad._id"
            />
          </el-select>
        </el-form-item>
      </template>
    </base-form-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseFormLayout from '@/components/layout/BaseFormLayout';
import SelectWeekday from '@/components/utils/SelectWeekday.vue';

export default {
  components: {
    BaseFormLayout,
    AppSelectWeekday: SelectWeekday,
  },
  data() {
    return {
      form: {
        _id: null,
        weekday: [],
        main_dish_id: null,
        side_dishes: [],
        salads: [],
      },
      formRules: {
        weekday: [
          { required: true, message: 'Selecione pelo menos um dia da semana.' },
        ],
        main_dish_id: [
          { required: true, message: 'Selecione o prato principal.' },
        ],
        side_dishes: [
          { required: true, type: 'array', message: 'Selecione pelo menos um acompanhamento.' },
        ],
        salads: [
          { required: true, type: 'array', message: 'Selecione pelo menos uma salada.' },
        ],
      },
    };
  },
  computed: {
    ...mapGetters('salad', ['saladList']),
    ...mapGetters('sideDish', ['sideDishList']),
    ...mapGetters('mainDish', ['mainDishList']),
    ...mapGetters('menu', ['menuById']),
    isEditing() {
      return this.$route.fullPath.includes('edit');
    },
  },
  async created() {
    this.getAllMainDishes();
    this.getAllSideDishes();
    this.getAllSalads();

    if (this.$route.query.weekday) {
      this.form.weekday.push(this.$route.query.weekday.toString());
    }

    if (this.$route.params.id) {
      const menu = this.menuById(this.$route.params.id);
      if (this.$route.fullPath.includes('copy')) {
        menu._id = null;
        menu.weekday = [];
      } else {
        menu.weekday = menu.weekday.toString();
      }

      this.form = menu;
    }
  },
  methods: {
    getAllMainDishes() {
      this.$store.dispatch('mainDish/fetchMainDishList');
    },
    getAllSideDishes() {
      this.$store.dispatch('sideDish/fetchSideDishList');
    },
    async getAllSalads() {
      this.$store.dispatch('salad/fetchSaladList');
    },
    saveForm() {
      const operation = this.isEditing ? 'edit' : 'create';
      this.$store.dispatch('menu/saveMenu', { menu: this.form, operation });
    },
    cancelForm() {
      this.$router.push({ name: 'MenuList' });
    },
  },
};
</script>

<style scoped>

</style>
