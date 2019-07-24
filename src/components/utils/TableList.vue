<template>
    <div>
        <el-table :data="dataTable" stripe>
            <el-table-column 
                v-for="column in columns" 
                :key="column.name"
                :prop="column.value"
                :label="column.name">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        props: {
            dataTable: Array,
            columns: Array
        }
    }
</script>

<style scoped>

</style>
