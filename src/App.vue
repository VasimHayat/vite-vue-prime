 

<script setup lang="ts">
import Sidebar from './views/Sidebar.vue';
import Header from './views/Header.vue';
</script>


<template> 
  <div class="flex">
    <Sidebar />
   
    <div class="flex-1">
       <Header />
      <router-view />
    </div>
  </div>
</template>




