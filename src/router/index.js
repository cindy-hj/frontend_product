import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryAddView from '../views/CategoryAddView.vue'
import CategoryListView from '../views/CategoryListView.vue'
import CategoryEditView from '../views/CategoryEditView.vue'
import CategoryDeleteView from '../views/CategoryDeleteView.vue'
import ProductAddView from '../views/ProductAddView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductEditView from '../views/ProductEditView.vue'
import ProductDeleteView from '../views/ProductDeleteView.vue'
import UserAddView from '../views/UserAddView.vue'
import UserPwCheckView from '../views/UserPwCheckView.vue'
import UserEditView from '../views/UserEditView.vue'
import FileUploadView from '../views/FileUploadView.vue'
import UserListView from '../views/UserListView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categoryadd',
    name: 'categoryadd',
    component: CategoryAddView
  },
  {
    path: '/categorylist',
    name: 'categorylist',
    component: CategoryListView
  },
  {
    path: '/categoryedit',
    name: 'categoryedit',
    component: CategoryEditView
  },
  {
    path: '/categorydelete',
    name: 'categorydelete',
    component: CategoryDeleteView
  },
  {
    path: '/productadd',
    name: 'productadd',
    component: ProductAddView
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductListView
  },
  {
    path: '/productedit',
    name: 'productedit',
    component: ProductEditView
  },
  {
    path: '/productdelete',
    name: 'productdelete',
    component: ProductDeleteView
  },
  {
    path: '/useradd',
    name: 'useradd',
    component: UserAddView
  },
  {
    path: '/userpwcheck',
    name: 'userpwcheck',
    component: UserPwCheckView
  },
  {
    path: '/useredit',
    name: 'useredit',
    component: UserEditView
  },
  {
    path: '/fileupload',
    name: 'fileupload',
    component: FileUploadView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
