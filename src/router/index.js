import { createRouter, createWebHistory } from 'vue-router'

// Impor komponen view untuk setiap topik
import Home from '../views/Home.vue'
import DeclarativeRendering from '../views/DeclarativeRendering.vue'
import AttributeBindings from '../views/AttributeBindings.vue'
import FormBindings from '../views/FormBindings.vue'
import ConditionalRendering from '../views/ConditionalRendering.vue'
import ListRendering from '../views/ListRendering.vue'
import ComputedProperty from '../views/ComputedProperty.vue'
import LifecycleTemplateRefs from '../views/LifecycleTemplateRefs.vue'
import Watchers from '../views/Watchers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/declarative-rendering',
    name: 'DeclarativeRendering',
    component: DeclarativeRendering
  },
  {
    path: '/attribute-bindings',
    name: 'AttributeBindings',
    component: AttributeBindings
  },
  {
    path: '/form-bindings',
    name: 'FormBindings',
    component: FormBindings
  },
  {
    path: '/conditional-rendering',
    name: 'ConditionalRendering',
    component: ConditionalRendering
  },
  {
    path: '/list-rendering',
    name: 'ListRendering',
    component: ListRendering
  },
  {
    path: '/computed-property',
    name: 'ComputedProperty',
    component: ComputedProperty
  },
  {
    path: '/lifecycle-template-refs',
    name: 'LifecycleTemplateRefs',
    component: LifecycleTemplateRefs
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
