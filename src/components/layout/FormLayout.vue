<template>
    <div>
        <el-card class="form-title">
            <h2><slot name="title"></slot></h2>
            <p>Dados cadastrais</p>
        </el-card>
        <el-form :model="form" label-width="200px" class="form-content">
            <slot></slot>
        </el-form>
    </div>        
</template>

<script>
export default {
    
}
</script>

<style>
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
</style>
