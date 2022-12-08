<template>
  <header class="shadow bg-slate-200 dark:bg-slate-800 dark:text-white">
    <div class="container p-5">
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="text-3xl">Home</RouterLink>
        <div>
          <RouterLink
            to="/about"
            class="px-4 py-2 text-xl hover:bg-slate-300 dark:hover:bg-slate-900">
            About
          </RouterLink>
          <RouterLink
            class="px-4 py-2 text-xl hover:bg-slate-300 dark:hover:bg-slate-900"
            to="/protected">
            Protected
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
