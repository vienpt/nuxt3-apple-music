
<script setup lang="ts">

import {Employee, useEmployeesStore} from "~/store/employees";

const route = useRoute()
const useEmployees = useEmployeesStore()

const profileId = +route.params?.id
const employeeProfile = computed(() => {
  return useEmployees.getEmployees.find((f) => f.id === profileId) as Employee
})

const sliderPopularity = ref(employeeProfile.value.popularity)

function updateSliderPopularity(popularity: string, id: number) {
  useEmployees.setPopularity(popularity, id)
}
</script>


<template>
    <div class="grid md:grid-cols-4 place-content-center">
      <div class="md:col-span-1">
        <figure class="relative">
          <nuxt-picture
            :src="`/images/profile/${employeeProfile.image}`"
            width="128"
            height="128"
            sizes="xs:128px md:350px"
            class="md:absolute -top-2"
          />
        </figure>
      </div>
      <div class="flex flex-col md:col-span-3 gap-4">
        <h2 class="text-3xl">{{ employeeProfile.name }}</h2>
        <div class="flex items-center gap-3 max-w-[640px]">
          <p>Popularity</p>
          <input
            type="range"
            v-model="sliderPopularity"
            @input="updateSliderPopularity($event.target.value, employeeProfile.id)"
            min="0"
            max="10"
          >{{ sliderPopularity }}
        </div>
        <div class="bg-gray-800 p-5 max-w-[640px]">
          <p class="font-bold text-xl mb-2">Biography</p>
          <article class="text-slate-500">{{ employeeProfile.biography }}</article>
        </div>
      </div>
    </div>

</template>

<style scoped lang="postcss">

</style>
