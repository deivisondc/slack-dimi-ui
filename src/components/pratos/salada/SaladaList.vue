<template>
    <div>
        <app-list-layout
            :title="'Saladas'"
            :subTitle="'Listagem de todas as saladas cadastradas'"
            :dataTable="dataTable"
            :columns="columns"
            :formRoute="formRoute">

        </app-list-layout>
    </div>    
</template>

<script>
    import ListLayout from '../../layout/ListLayout';

    export default {
        data() {
            return {
                formRoute: '/cadastro/prato/salada/new',
                dataTable: [
                    {
                        name: 'joao',
                        address: 'teste xpto'
                    }
                ],
                columns: [
                    {
                        name: 'Primeira Coluna',
                        value: 'name'
                    }
                ]
            }
        },
        components: {
            AppListLayout: ListLayout
        }
    }
</script>

<style scoped>
    
</style>
