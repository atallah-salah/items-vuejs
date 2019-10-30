
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html,body{
    height: 100%;
  }
  body{
    background: linear-gradient(45deg, #00ff6f, #00f2ff);
  }
  #app{
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
</style>
