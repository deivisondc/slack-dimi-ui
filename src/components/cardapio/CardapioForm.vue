<template>
  <div>
    <el-card>
      <span>Cardápio de X-feira </span>
    </el-card>
    <el-form
      ref="form"
      :model="form"
      label-width="200px"
      style="padding: 20px"
    >
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
          />
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        dayOfWeek: 0,
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

  },
};
</script>

<style scoped>

</style>
