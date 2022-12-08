<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="shadow bg-slate-200 shadow-primary">
      <div class="container p-5">
        <div class="flex items-center justify-between">
          <RouterLink to="/">
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/logo.svg"
              width="96"
              height="96"
            />
          </RouterLink>

          <div class="wrapper">
            <nav>
              <RouterLink
                to="/"
                class="px-4 py-2 font-semibold text-black transition-all duration-500 bg-primary hover:bg-secondary hover:text-primary"
              >
                Home
              </RouterLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div>
      <div class="container p-3">
        <RouterView />
      </div>
    </div>
  </main>
</template>
