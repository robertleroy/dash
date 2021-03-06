## Vue 3

<code-group>
  <code-block title="Vue Cli" >
  ``` bash
  vue create <project-name>
  ```
  </code-block>

  <code-block title="Vite" active>
  ``` bash
  /* Vite */  
  npm init vite-app <project-name>
  cd <project-name>
  npm install
  npm run dev
  
  /* Utilities */
  npm install -D sass
  npm install vue-router@next
  npm install vuex@next
  ```
  </code-block>
</code-group>


## App.vue
``` vue
<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Vue 3!"
      }
    }
  }
</script>

<template>
  <div id="appgrid" v-cloak>
    <header>
      <h4>{{title}}</h4>

      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
    </header>

    <main>
      <!-- <router-view v-slot="{ Component }">
        <transition name='fade' mode='out-in'>
          <component :is="Component"/>
        </transition>
      </router-view> -->
    </main>
  </div> 
</template>

<style lang="scss">
  @import './scss/baseline';

  #appgrid {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  header, main {
    padding: 1rem 2rem;
  }

  header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    @include shadow(3);
  }
</style>
```