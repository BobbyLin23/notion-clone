<script lang="ts" setup>
import { PlusCircle } from 'lucide-vue-next'
import { useUser } from 'vue-clerk'

definePageMeta({
  layout: 'main',
})

const { user } = useUser()
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center space-y-4">
    <NuxtImg src="/empty.png" height="300" width="300" alt="Empty" class="dark:hidden" />
    <NuxtImg src="/empty-dark.png" height="300" width="300" alt="Empty" class="dark:block hidden" />
    <h2 class="text-lg font-medium">
      Welcome to {{ user?.firstName }} &apos;s Jotion
    </h2>
    <Button>
      <PlusCircle class="size-4 mr-2" />
      Create a note
    </Button>
  </div>
</template>
