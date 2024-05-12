<template>
    <ul>
        <li>
            <AppLink :to="{ name: 'Protected' }">Dashboard</AppLink>
        </li>
        <li>
            <AppLink :to="{ name: 'Invoices' }">Invoices</AppLink>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    background: white;
    padding: 10px;
    list-style: none;
    margin-right: 20px;
}

li {
    margin: 10px;
}
</style>