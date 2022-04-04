import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bcc4bef = () => interopDefault(import('..\\pages\\alarms.vue' /* webpackChunkName: "pages/alarms" */))
const _6a387612 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _68359d00 = () => interopDefault(import('..\\pages\\devices.vue' /* webpackChunkName: "pages/devices" */))
const _e8b61668 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4f746090 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2a3e79c8 = () => interopDefault(import('..\\pages\\templates.vue' /* webpackChunkName: "pages/templates" */))
const _604b997f = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _e1e3bd1e = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _7c055c96 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/alarms",
    component: _1bcc4bef,
    name: "alarms"
  }, {
    path: "/dashboard",
    component: _6a387612,
    name: "dashboard"
  }, {
    path: "/devices",
    component: _68359d00,
    name: "devices"
  }, {
    path: "/login",
    component: _e8b61668,
    name: "login"
  }, {
    path: "/register",
    component: _4f746090,
    name: "register"
  }, {
    path: "/templates",
    component: _2a3e79c8,
    name: "templates"
  }, {
    path: "/test",
    component: _604b997f,
    name: "test"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _e1e3bd1e,
    name: "GeneralViews-NotFoundPage"
  }, {
    path: "/",
    component: _7c055c96,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
