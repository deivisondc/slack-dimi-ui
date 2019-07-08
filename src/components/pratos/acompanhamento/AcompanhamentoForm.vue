<template>
    <app-form-layout>
        <template slot="title">
            Acompanhamento
        </template>
        <template>
            <el-form-item label="Descrição">
                <el-input v-model="form.descricao"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button>Cancelar</el-button>
                <el-button type="primary" @click="onSubmit">Salvar</el-button>
            </el-form-item>
        </template>
    </app-form-layout>
</template>

<script>

    import FormLayout from '../../layout/FormLayout'

    export default {
        data() {
            return {
                form: {
                    descricao: ''
                }
            }
        },
        methods: {
            onSubmit() {
                
            }
        },
        components: {
            AppFormLayout: FormLayout
        }
    }
</script>

<style scoped>

</style>
