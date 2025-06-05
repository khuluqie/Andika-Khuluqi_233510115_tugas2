<template>
  <nav class="sidebar">
    <h2 class="sidebar-title">Pertemuan 2 dan 3</h2>
    <ul class="nav-list">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/declarative-rendering">Declarative Rendering</router-link>
      </li>
      <li>
        <router-link to="/attribute-bindings">Attribute Bindings</router-link>
      </li>
      <li>
        <router-link to="/form-bindings">Form Bindings</router-link>
      </li>
      <li>
        <router-link to="/conditional-rendering">Conditional Rendering</router-link>
      </li>
      <li>
        <router-link to="/list-rendering">List Rendering</router-link>
      </li>
      <li>
        <router-link to="/computed-property">Computed Property</router-link>
      </li>
      <li>
        <router-link to="/lifecycle-template-refs">Lifecycle &amp; Template Refs</router-link>
      </li>
      <li>
        <router-link to="/watchers">Watchers</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  padding: 20px;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  height: 100%;
}

.sidebar-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.nav-list {
  list-style: none;
  padding: 0;
}

.nav-list li {
  margin-bottom: 0.75rem;
}

.nav-list li a {
  text-decoration: none;
  color: #333;
}

.nav-list li a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
