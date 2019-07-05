<template>
    <div>
        <el-carousel type="card" :autoplay="false" :loop="false" height="500px">
            <el-carousel-item v-for="item in ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']" :key="item">
                <el-card>
                    <div slot="header">
                        <span>{{ item }}-feira</span>
                        <el-button style="float:right; padding:0;" type="text" @click="goTo('/cadastro/cardapio')">Editar</el-button>
                    </div>
                    <div>
                        
                    </div>
                </el-card>
            </el-carousel-item>
        </el-carousel>
    </div>    
</template>

<script>
    export default {
        methods: {
            goTo(route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
