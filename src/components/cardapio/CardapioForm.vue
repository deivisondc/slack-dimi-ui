<template>
  <div>
    <app-form-layout
      :form-model="form"
      :form-rules="formRules"
      :on-submit="save"
    >
      <template slot="title">
        Cardápio
      </template>

      <template>
        <el-form-item label="Dia da Semana" prop="weekDay">
          <app-select-week-day
            :model="form"
            :placeholder="'Selecione um dia da semana'"
            :showWeekend="false"
          />
        </el-form-item>
        <el-form-item label="Prato Principal" prop="mainFood">
          <el-select
            v-model="form.mainFood"
            placeholder="Selecione um prato principal"
            style="width: 100%"
          >
            <el-option
              v-for="pratoPrincipal in pratosPrincipais"
              :key="pratoPrincipal.name"
              :label="pratoPrincipal.name"
              :value="pratoPrincipal"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Acompanhamentos" prop="secondaryFood">
          <el-select
            v-model="form.secondaryFood"
            multiple
            placeholder="Selecione um ou mais acompanhamentos"
            style="width:100%"
          >
            <el-option
              v-for="acompanhamento in acompanhamentos"
              :key="acompanhamento"
              :label="acompanhamento"
              :value="acompanhamento"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Saladas" prop="salad">
          <el-checkbox-group
            v-model="form.salad"
            style="width: 100%; text-align: left"
          >
            <el-checkbox
              v-for="salada in saladas"
              :key="salada"
              :label="salada"
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
      form: {
        weekDay: '',
        mainFood: '',
        secondaryFood: [],
        salad: [],
      },
      formRules: {
        weekDay: [
          { required: true, message: 'Selecione o dia da semana.'}
        ],
        mainFood: [
          { required: true, message: 'Selecione o prato principal.'}
        ],
        secondaryFood: [
          { required: true, type: 'array', message: 'Selecione pelo menos um acompanhamento.'}
        ],
        salad: [
          { required: true, type: 'array', message: 'Selecione pelo menos uma salada.'}
        ]
      },
      saladas: ['Alface e Tomate em rodelas', 'Vinagrete'],
      acompanhamentos: ['Ovo e Couve', 'Legumes na mateiga', 'Teste3', 'Teste4'],
      pratosPrincipais: [
        {name: 'Cupim'}, {name: 'Panqueca'}, {name: 'Churrasco'}],
    };
  },
  methods: {
    findById(id) {

    },
    save() {
      this.$router.push('/cadastro/cardapio');
    },
  },
  created() {
    this.form.weekDay = this.$route.query.weekDay || null;

    if (this.$route.query.copyId || this.$route.query.id) {
      const id = this.$route.query.copyId || this.$route.query.id;
      this.form = findById(id);
    }
  }
};
</script>

<style scoped>

</style>
