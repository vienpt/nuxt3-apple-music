<template>
  <nav class="sidebar">
<!--    header-->
    <header class="sidebar-header">
      <div class="py-4 px-8 grid gap-8">
        <NuxtLink to="/">
          <Logo id="logo" />
        </NuxtLink>
      </div>
    </header>
<!--    content-->
    <div class="sidebar-content">
      <div class="sidebar-content_items">
        <div v-for="emp in employees" :key="emp.id">
          <NuxtLink :to="`/profile/${emp.id}`">
            <span :class="[popularity !== 0 ? `text-${POPULARITY[popularity]}` : `text-${POPULARITY[emp.popularity]}`]">{{ emp.name }}</span>
          </NuxtLink>
          <ul class="sidebar-content_items-colleagues">
            <li class="cursor-default" v-for="(colleague, index) in emp.colleagues" :key="index">
              <span class="italic">{{ colleague }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from "~/components/Svg/Logo.vue";
import {useEmployeesStore} from "~/store/employees";
import {POPULARITY} from "~/type";
const useEmployees = useEmployeesStore()
const popularity = ref(0)
const employees = computed(() => useEmployees.getEmployees)

watch(() => useEmployees.popularity, (val) => {
  if (val) {
    nextTick(() => {
      popularity.value = val
    })
  }

})
</script>

<style lang="postcss" scoped>
  .sidebar {
    height: auto;
    width: 260px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 250px auto;
    grid-template-areas:
      "logo"
      "items";
    background-color: #262626;


    &-header {
      grid-area: logo;
      opacity: 0.5;
      @apply flex justify-center items-center;
    }

    &-content {
      opacity: 1;
      grid-area: items;
      @apply mt-20 overflow-y-auto overflow-x-hidden text-center;

      &_items {
        @apply flex flex-col p-5;

        &-colleagues {
          grid-area: category;
          @apply flex flex-col px-10;
        }
      }
    }

    #logo {
      @apply fill-white;
    }
  }
</style>
