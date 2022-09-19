import { createRouter, createWebHistory } from "vue-router";

import NotFound from '../pages/NotFound.vue'
import Jobs from '../pages/jobs/Jobs.vue'
import JobDetails from '../pages/jobs/JobDetails.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    // lazy load component
    component: () => import('../pages/Home.vue'),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router