const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'pessoas', component: () => import('pages/pessoas/CreateEditPessoa.vue') },
      { path: 'pessoas/form', component: () => import('pages/pessoas/CreateEditPessoa.vue') },
      { path: 'pessoas/form/:id', component: () => import('pages/pessoas/CreateEditPessoa.vue') },
      { path: 'pessoas/view/:id', component: () => import('pages/pessoas/ViewPessoa.vue') },
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
