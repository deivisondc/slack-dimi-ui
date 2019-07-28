<template>
  <div>
    <app-form-layout
      :form-model="form"
      :on-submit="save"
    >
      <template slot="title">
        Cardápio
      </template>

      <template>
        <el-form-item label="Dia da Semana">
          <app-select-week-day
            :model="form"
            :placeholder="'Selecione um dia da semana'"
            :showWeekend="false"
          />
        </el-form-item>
        <el-form-item label="Prato Principal">
          <el-select
            v-model="form.pratoPrincipal"
            placeholder="Selecione um prato principal"
            style="width: 100%"
          >
            <el-option
              v-for="pratoPrincipal in pratosPrincipais"
              :key="pratoPrincipal"
              :label="pratoPrincipal"
              :value="pratoPrincipal"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Acompanhamentos">
          <el-select
            v-model="form.acompanhamentos"
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
        <el-form-item label="Saladas">
          <el-checkbox-group
            v-model="form.saladas"
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
        weekDay: null,
        pratoPrincipal: '',
        acompanhamentos: [],
        saladas: [],
      },
      saladas: ['Alface e Tomate em rodelas', 'Vinagrete'],
      acompanhamentos: ['Ovo e Couve', 'Legumes na mateiga', 'Teste3', 'Teste4'],
      pratosPrincipais: ['Cupim', 'Panqueca', 'Churrasco'],
    };
  },
  methods: {
    findById(id) {

    },
    save() {
      return true;
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
