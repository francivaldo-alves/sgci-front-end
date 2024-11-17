<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          SGCI - Sistema Gerenciador de Cadastro Imobiliário
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Gerenciar Pessoas',
    caption: 'Físicas e Jurídicas',
    icon: 'group',
    link: 'https://quasar.dev'
  },
  {
    title: 'Gerenciar Imóveis',
    caption: 'Rurais e Urbanos',
    icon: 'other_houses',
    link: 'https://github.com/quasarframework',
    disable: true
  },
  {
    title: 'Gerenciar Acesso',
    caption: 'Usuários e Perfis',
    icon: 'manage_accounts',
    link: 'https://chat.quasar.dev',
    disable: true
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
