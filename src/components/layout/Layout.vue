<template>
    <el-container>
        <el-header>
            <el-menu class="el-menu-demo" mode="horizontal" style="padding-left: 50px">
                <el-menu-item index="1">Cardápio</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Cadastro de Pratos</template>
                    <el-menu-item index="2-1">Principal</el-menu-item>
                    <el-menu-item index="2-2">Acompanhamento</el-menu-item>
                    <el-menu-item index="2-3">Salada</el-menu-item>
                </el-submenu>
            </el-menu>  
        </el-header>

        <el-main>
            <div >
                <el-card shadow="always"style="
        width: 75%;
        display: inline-block;">
                <app-cardapio ></app-cardapio>
                </el-card>

            </div>
        </el-main>

        <el-footer/>
    </el-container>
</template>

<script>
    import Cardapio from '../cardapio/Cardapio.vue'
    import SaladaForm from '../pratos/salada/SaladaForm.vue'

    export default {
        components: {
            appCardapio: Cardapio
        }
    }
</script>

<style scoped>

    .el-header {
        padding: 0;
    }

    .el-footer {
        height: 20px !important;
        background-color: #b2b2b2;
    }
    
</style>

