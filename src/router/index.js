import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ImageGallery from '../views/ImageGallery.vue';
import Habitat from '../views/Habitat.vue';
import Behavior from '../views/Behavior.vue';
import Diet from '../views/Diet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/image-gallery',
    name: 'Image Gallery',
    component: ImageGallery,
  },
  {
    path: '/habitat-distribution',
    name: 'Habitat & Distribution',
    component: Habitat,
  },
  {
    path: '/behavior',
    name: 'Behavior',
    component: Behavior,
  },
  {
    path: '/diet',
    name: 'Diet',
    component: Diet,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
