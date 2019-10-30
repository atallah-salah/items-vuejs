<template>
<form id="app" v-on:submit.prevent="create" method="post">

  <p>
    <label for="name">Title</label>
    <input id="name" v-model="name" type="text" name="name" required>
  </p>

  <p>
    <label for="description">Description</label>
    <input id="description" v-model="description" type="text" name="description">
  </p>

  <p>
    <input type="submit" value="Submit">
    <button v-on:click="$router.push('/')">cancel</button>
  </p>

</form>
</template>

<script>
import firebase from '../services/firebase';
export default {
  name: 'createItem',
  data:function(){
    return {
      name:null,
      description:""
    }
  },
  methods:{
    create(form){
      console.log(form);
        firebase.add({
        name: this.name,
        description:this.description,
        updated_at: Date.now()
      }).then((response) => {
        if (response) {
          console.log(response);
          this.$router.push('/')
        }
      }).catch((error) => {
          console.log(error);
      })
    }
  }
}
</script>
<style scoped>
</style>
