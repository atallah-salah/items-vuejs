<template>
  <div class="card-group">
  <div class="card items">
    <Items/>
  </div>
  <div class="card item">
    <Item/>
  </div>
</div>
</template>

<script>
import Items from './Items'
import Item from './Item'

export default {
  name:'Container',
  components:{
    Items,
    Item
  }
}
</script>

<style scoped>
.card-group{
  width: 100%;
  max-width: 930px;
}
.items{
  flex-grow: 2.5 !important;
  min-height: 500px;
  max-height: 750px;
  border-radius: 20px 0px 0px 20px;
  padding-top: 10px;


}
.item{
  border-radius: 0px 20px 20px 0px;
  padding: 10px
}
</style>