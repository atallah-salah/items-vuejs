<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Update</h5>
      <form id="app" v-on:submit.prevent="update" method="post">
        <div class="form-group">
          <label for="name">Title</label>
          <input class="form-control" id="name" v-model="name" type="text" name="name" required placeholder="Enter title">
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" v-model="description" type="text" name="description" placeholder="Description..."></textarea>
        </div>

        <div class="form-group button-group">
          <button class="btn btn-danger" v-on:click="$router.push('/')">cancel</button>
          <input class="btn btn-info" type="submit" value="Submit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from '../services/firebase';
export default {
  name: 'updateItem',
  data:function(){
    return {
      name:null,
      description:"",
      id:this.$route.params.id
    }
  },
  created:function(){
    if(this.$store.state.currentItem){
      this.name=this.$store.state.currentItem.name
      this.description=this.$store.state.currentItem.description
    }
  },
  methods:{
    update(){
      firebase.doc(this.id).set({
        name:this.name,
        description:this.description,
        updated_at:Date.now()
      }).then((res)=>{
        console.log(res)
          this.$router.push('/')
      }).catch((error) => {
          console.log(error);
      })

    }
  }
}
</script>
<style scoped>
form{
  flex-direction: column;
}
.form-group{
  width: 80%;
}
.card-title{
    background-color: #00f7c640;
    padding: 22px;
    text-align: center;
    font-size: 28px;
}
.card-body{
  width:360px;
}
.button-group{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.button-group .btn{
  width: 44%;
}
</style>

