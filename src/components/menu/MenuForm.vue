<template>
  <div>
    <app-form-layout
      :form-model="form"
      :form-rules="formRules"
      :on-submit="save"
      :list-url="listUrl"
    >
      <template slot="title">
        Cardápio
      </template>

      <template>
        <el-form-item label="Dia da Semana" prop="weekDay">
          <app-select-week-day
            :model="form"
            :placeholder="'Selecione um ou mais dias da semana'"
            :multiple="true"
            :show-weekend="false"
          />
        </el-form-item>
        <el-form-item label="Prato Principal" prop="mainDish">
          <el-select
            v-model="form.mainDish"
            placeholder="Selecione um prato principal"
            style="width: 100%"
          >
            <el-option
              v-for="mainDish in mainDishes"
              :key="mainDish._id"
              :label="mainDish.description"
              :value="mainDish._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Acompanhamentos" prop="sideDish">
          <el-select
            v-model="form.sideDish"
            multiple
            placeholder="Selecione um ou mais acompanhamentos"
            style="width:100%"
          >
            <el-option
              v-for="sideDish in sideDishes"
              :key="sideDish._id"
              :label="sideDish.description"
              :value="sideDish._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Saladas" prop="salad">
          <el-checkbox-group
            v-model="form.salad"
            style="width: 100%; text-align: left"
          >
            <el-checkbox
              v-for="salad in salads"
              :key="salad._id"
              :label="salad.description"
              :value="salad._id"
              name="type"
              checked
            />
          </el-checkbox-group>
        </el-form-item>
      </template>
    </app-form-layout>
  </div>
</template>

<script>
import FormLayout from '../layout/FormLayout.vue';
import SelectWeekDay from '../utils/SelectWeekDay.vue';

export default {
  components: {
    AppFormLayout: FormLayout,
    AppSelectWeekDay: SelectWeekDay,
  },
  data() {
    return {
      listUrl: '/menu',
      form: {
        weekDay: [],
        mainDish: null,
        sideDish: [],
        salad: [],
      },
      formRules: {
        weekDay: [
          { required: true, type: 'array', message: 'Selecione pelo menos um dia da semana.' },
        ],
        mainDish: [
          { required: true, message: 'Selecione o prato principal.' },
        ],
        sideDish: [
          { required: true, type: 'array', message: 'Selecione pelo menos um acompanhamento.' },
        ],
        salad: [
          { required: true, type: 'array', message: 'Selecione pelo menos uma salada.' },
        ],
      },
      salads: [
        { _id: 1, description: 'Alface e Tomate em rodelas' },
        { _id: 2, description: 'Vinagrete' },
      ],
      sideDishes: [
        { _id: 1, description: 'Ovo e Couve' },
        { _id: 2, description: 'Legumes na mateiga' },
        { _id: 3, description: 'Teste3' },
        { _id: 4, description: 'Teste4' },
      ],
      mainDishes: [
        { _id: 1, description: 'Cupim' },
        { _id: 2, description: 'Panqueca' },
        { _id: 3, description: 'Churrasco' },
      ],
    };
  },
  created() {
    if (this.$route.query.weekDay) {
      this.form.weekDay.push(this.$route.query.weekDay);
    }

    if (this.$route.params.id) {
      this.findById(this.$route.params.id);
    }
  },
  methods: {
    findById(id) {
      this.id = id;
    },
    save() {
      const [action] = this.$route.params;
      if (action === 'edit') {
        this.$router.push(`${this.listUrl}?weekDay=${this.form.weekDay}`);
      } else {
        this.$router.push(`${this.listUrl}?weekDay=${this.form.weekDay}`);
      }
    },
  },
};
</script>

<style scoped>

</style>
