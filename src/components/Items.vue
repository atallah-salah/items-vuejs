<template>
<div>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Last update</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in items" v-bind:key="item.id">
      <th scope="row">{{index}}</th>
      <td>{{item.name}}</td>
      <td>{{item.updated_at}}</td>
      <td>
        <div>
        <button>Edit</button> 
        <button>Delete</button>
        </div>
        </td>
    </tr>
  </tbody>
</table>
  <button v-on:click="getAllItems">trhui</button>
</div>
</template>

<script>
import firebase from '../services/firebase';
export default {
  name: 'Items',
  data:function(){
    return {
      items:[]
    }
  },
  created:function(){
    this.getAllItems()
  }, 
  methods:{
    createNewItem:function(){
      this.$router.push('/create')
    },
    getAllItems:function(){
      firebase.orderBy('updated_at').onSnapshot((snapshot) => {
        let items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, name: doc.data().name ,description:doc.data().description, updated_at:doc.data().updated_at})
        })
        this.items=items;
        console.log(this.items);
      })
    }
  }
}
</script>
<style scoped>

</style>
