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
              v-for="mainDish in mainDishesList"
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
              v-for="sideDish in sideDishesList"
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
              v-for="salad in saladsList"
              :key="salad._id"
              :label="salad.description"
              :value="salad._id"
            />
          </el-select>
          <!-- <el-checkbox-group
            v-model="form.salads"
            style="width: 100%; text-align: left"
          >
            <el-checkbox
              v-for="salad in saladsList"
              :key="salad._id"
              :label="salad.description"
              :value="salad._id"
              checked
            />
          </el-checkbox-group> -->
        </el-form-item>
      </template>
    </base-form-layout>
  </div>
</template>

<script>
import BaseFormLayout from '@/components/layout/BaseFormLayout';
import SelectWeekday from '@/components/utils/SelectWeekday.vue';

import menuService from '@/services/modules/menuService';
import mainDishService from '@/services/modules/mainDishService';
import sideDishService from '@/services/modules/sideDishService';
import saladService from '@/services/modules/saladService';

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
      mainDishesList: [],
      sideDishesList: [],
      saladsList: [],
    };
  },
  computed: {
    isEditing() {
      return this.$route.fullPath.includes('edit');
    },
  },
  async created() {
    this.getAllMainDishes();
    this.getAllSideDishes();
    this.getAllSalads()
      .then(() => {
        this.form.salads = this.saladsList.map(salad => salad._id);
      });

    if (this.$route.query.weekday) {
      this.form.weekday.push(this.$route.query.weekday.toString());
    }

    if (this.$route.params.id) {
      menuService.find(this.$route.params.id)
        .then((res) => {
          const { result } = res.data;

          if (this.$route.fullPath.includes('copy')) {
            result._id = null;
            result.weekday = [];
          } else {
            result.weekday = result.weekday.toString();
          }

          this.form = result;
        })
        .catch(err => console.log(err));
    }
  },
  methods: {
    getAllMainDishes() {
      mainDishService.all()
        .then((res) => {
          this.mainDishesList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    getAllSideDishes() {
      sideDishService.all()
        .then((res) => {
          this.sideDishesList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    async getAllSalads() {
      return saladService.all()
        .then((res) => {
          this.saladsList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    saveForm() {
      if (this.isEditing) {
        menuService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push({ name: 'MenuList', query: { weekday: this.form.weekday } });
          })
          .catch(err => console.log(err));
      } else {
        menuService.create(this.form)
          .then(() => {
            this.$router.push({ name: 'MenuList', query: { weekday: this.form.weekday } });
          })
          .catch(err => console.log(err));
      }
    },
    cancelForm() {
      this.$router.push({ name: 'MenuList' });
    },
  },
};
</script>

<style scoped>

</style>
