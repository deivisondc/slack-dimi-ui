<template>
    <el-card
        class="layout-content"
        shadow="always">
        <el-card class="form-title">
            <h2>{{ title }}</h2>
            <p>{{ subTitle }}</p>
        </el-card>

        <br>
        <el-button 
            v-if="formRoute"
            type="success"
            round
            @click="goTo(formRoute)">Cadastrar</el-button>
        
        <app-table-list
            :dataTable="dataTable"
            :columns="columns" />
        
    </el-card>
</template>

<script>
    import TableList from '../utils/TableList';

    export default {
        props: {
            title: String,
            subTitle: String,
            dataTable: Array,
            columns: Array,
            formRoute: String,
        },
        methods: {
            goTo(route) {
                this.$router.push(route)
            }
        },
        components: {
            AppTableList: TableList
        },
    }
</script>

<style scoped>
    .form-title {
        margin-top: -35px;
        background-color: darkblue;
        border-radius: 15px;
        color: #fff;
        text-align: left;
        padding: 5px;
    }

    .form-content {
        margin-top: 20px;
        text-align: right;
    }

    .el-card {
        overflow: unset;
    }
</style>
