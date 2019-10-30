<template>
<form id="app" v-on:submit.prevent="update" method="post">

  <p>
    <label for="name">Title</label>
    <input id="name" v-model="name" type="text" name="name" required>
  </p>

  <p>
    <label for="description">Description</label>
    <input id="description" v-model="description" type="text" name="description">
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
    <button v-on:click="$router.push('/')">cancel</button>
  </p>

</form>
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
</style>
