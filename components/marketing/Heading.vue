<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
import { SignInButton, useAuth } from 'vue-clerk'

const { isLoaded, isSignedIn } = useAuth()
</script>

<template>
  <div class="max-w-3xl space-y-4">
    <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold">
      Your Ideas, Documents, & Plans. Unified. Welcome to
      <span class="underline">
        Jotion
      </span>
    </h1>
    <h3 class="text-base sm:text-xl md:text-2xl font-medium">
      Jotion is the connected workspace where <br>
      better, faster work happens.
    </h3>
    <div v-if="!isLoaded" class="w-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>
    <Button v-if="isSignedIn && isLoaded" as-child>
      <NuxtLink href="/documents">
        Enter Jotion
        <ArrowRight class="size-4 ml-2" />
      </NuxtLink>
    </Button>
    <template v-if="!isSignedIn">
      <SignInButton v-slot="{ handler }" mode="modal">
        <Button size="sm" @click="handler">
          Get Jotion free
          <ArrowRight class="size-4 ml-2" />
        </Button>
      </SignInButton>
    </template>
  </div>
</template>
