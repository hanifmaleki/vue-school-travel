<template>
  <div>
    <h2>Invoices</h2>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'

export default {
    setup() {
        onBeforeRouteLeave((to, from) => {
            const answer = window.confirm(
                'Are you sure you want to leave? Invoices are super awsome!'
            )

            if(!answer) return false
        })        
    }
}
</script>

<style>

</style>