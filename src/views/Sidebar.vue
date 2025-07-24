<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  Bars3Icon,
  Squares2X2Icon,
  UsersIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline'

const route = useRoute()

const menuItems = [
  { label: 'Dashboard', to: '/', icon: Squares2X2Icon },
  { label: 'Employees', to: '/employees', icon: UsersIcon },
  { label: 'Timesheets', to: '/timesheets', icon: ClipboardDocumentListIcon },
  { label: 'Approvals', to: '/approvals', icon: Cog6ToothIcon },
]
</script>


<template>
  <aside class="h-screen w-20 bg-white shadow-lg flex flex-col items-center py-4 rounded-tr-3xl rounded-br-3xl">
    <!-- Hamburger icon for mobile (optional) -->
    <button class="mb-8">
      <Bars3Icon class="w-6 h-6 text-gray-600" />
    </button>

    <!-- Navigation items -->
    <nav class="flex flex-col space-y-8 mt-2 w-full">
      <router-link
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
        class="group flex flex-col items-center w-full relative py-2 text-xs text-gray-500 hover:text-indigo-600"
        :class="{ 'text-indigo-600 font-semibold': $route.path === item.to }"
      >
        <!-- Left active bar -->
        <span
          v-if="$route.path === item.to"
          class="absolute left-0 h-full w-1 bg-indigo-600 rounded-r-full"
        ></span>

        <!-- Icon -->
        <component :is="item.icon" class="w-6 h-6 mb-1" />

        <!-- Label -->
        <span class="text-[10px]">{{ item.label }}</span>
      </router-link>
    </nav>
  </aside>
</template>

