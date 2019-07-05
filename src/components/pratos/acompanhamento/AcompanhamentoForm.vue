<template>
    <div>
        <el-card>
            <span>Cadastro de acompanhamentos</span>
        </el-card>
        <el-form ref="form" :model="form" label-width="200px" style="padding: 20px">
            <el-form-item label="Descrição">
                <el-input v-model="form.descricao"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button>Cancelar</el-button>
                <el-button type="primary" @click="onSubmit">Salvar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
