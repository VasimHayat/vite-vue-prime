<template>
  <div class="overflow-x-auto p-6">
    <table class="min-w-full border rounded-lg shadow-sm text-sm">
      <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
        <tr>
          <th class="px-4 py-2 text-left">Avatar</th>
          <th class="px-4 py-2 text-left">First Name</th>
          <th class="px-4 py-2 text-left">Last Name</th>
          <th class="px-4 py-2 text-left">Email</th>
          <th class="px-4 py-2 text-left">Access</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-b">
          <td class="px-4 py-3">
            <img :src="user.avatar" class="w-8 h-8 rounded-full" />
          </td>
          <td class="px-4 py-3">{{ user.firstName }}</td>
          <td class="px-4 py-3">{{ user.lastName }}</td>
          <td class="px-4 py-3">{{ user.email }}</td>
          <td class="px-4 py-3">
            <span
              :class="user.access ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
              class="px-2 py-1 rounded text-xs"
            >
              {{ user.access ? 'Yes' : 'No' }}
            </span>
          </td>
          <td class="px-4 py-3 space-x-2">
            <button class="text-indigo-500 hover:underline">Edit</button>
            <button class="text-red-500 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const users = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/40?img=1',
    firstName: 'Olivia',
    lastName: 'Rhye',
    email: 'olivia.rhye@company.com',
    access: true,
  },
  // Add more users
]
</script>
