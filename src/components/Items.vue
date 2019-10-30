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
    <tr class="row-item" v-for="(item,index) in items" v-bind:key="item.id" v-on:click="selectItem(index)">
      <th scope="row">{{index+1}}</th>
      <td style="max-width:300px;">{{item.name}}</td>
      <td>{{item.updated_at}}</td>
      <td>
        <div class="buttons-container">
        <button v-on:click="updateItem(item.id)" class="btn btn-info"><i class="fas fa-edit"></i></button> 
        <button v-on:click="deleteItem(item.id)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
        </td>
    </tr>
  </tbody>
</table>
  <button v-on:click="createNewItem" class="btn btn-info add-new btn-lg btn-circle "><i class="fas fa-plus"></i></button>
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
          let dateTime = new Date(doc.data().updated_at)
          items.push({
              id: doc.id,
              name: doc.data().name,
              description:doc.data().description,
              updated_at:dateTime.getFullYear()+'-'+(dateTime.getMonth()+1)+'-'+dateTime.getDate() +' / '+dateTime.getHours() + ":" + dateTime.getMinutes()
          })
        })
        this.items=items;
      })
    },
    selectItem:function(index){            
      this.$store.commit('setCurrentItem',this.items[index])
    },
    deleteItem: function(id) {
      if (id) {
        firebase.doc(id).delete().then(function() {
          console.log('Document successfully deleted')
        }).catch(function(error) {
          this.error = error
        })
      }
    },
    updateItem:function(id){
      this.$router.push(`/update/${id}`)
    }
  }
}
</script>
<style scoped>
.table td, .table th{
  border-top: unset;
  text-align: center;
}
.buttons-container{
  display: flex;
  justify-content: space-evenly;
}
.add-new{
  position: absolute;
  left: 4%;
  bottom: 4%;
  background-color: #3dbb9f;
}
.btn-circle {
  width: 50px; 
  height: 50px; 
  padding: 7px 10px; 
  border-radius: 25px; 
  text-align: center; 
}
.row-item:hover{
  background-color: rgba(127, 255, 212, 0.534);
}
</style>
