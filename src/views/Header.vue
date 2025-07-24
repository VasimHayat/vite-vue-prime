
<script setup lang="ts">
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/vue/24/outline'
</script>


<template>
  <header class="sticky top-0 z-50 bg-white h-16 flex items-center justify-between px-6 shadow-sm ">
    <!-- Left: Company Logo/Name -->
    <div class="flex items-center space-x-2">
      <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
      <span class="font-semibold text-lg text-gray-800">Company</span>
    </div>

    <!-- Right: Search, Bell, Avatar -->
    <div class="flex items-center space-x-6">
      <!-- Search box -->
      <div class="flex items-center border rounded-lg px-3 py-1.5 text-sm text-gray-600 focus-within:ring-2 focus-within:ring-indigo-400">
        <input
          type="text"
          placeholder="Search for name, email, etc"
          class="outline-none bg-transparent text-sm w-56"
        />
        <MagnifyingGlassIcon class="w-4 h-4 ml-2 text-gray-500" />
      </div>

      <!-- Notification bell -->
      <div class="relative">
        <BellIcon class="w-5 h-5 text-gray-600 cursor-pointer" />
        <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
      </div>

      <!-- User avatar with status dot -->
      <div class="relative">
        <img
          src="https://i.pravatar.cc/32?img=1"
          class="w-8 h-8 rounded-full object-cover"
          alt="User Avatar"
        />
        <span class="absolute bottom-0 right-0 h-2 w-2 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
    </div>
  </header>
</template>
