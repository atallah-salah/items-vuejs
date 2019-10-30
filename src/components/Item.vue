<template>
<div class="item">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{item.updated_at}}</h6>
    <p class="card-text">{{item.description}}</p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Item',
  computed: {
    item () {
      if(this.$store.state.currentItem){
        return this.$store.state.currentItem
      }else{
        return {name:"Select item to show details",updated_at:"",description:""}
      }
    }
  }
}
</script>
<style scoped>
</style>
