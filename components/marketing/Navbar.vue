<script lang="ts" setup>
import { SignInButton, SignUpButton, UserButton, useAuth } from 'vue-clerk'
import { cn } from '~/lib/utils'

const scrolled = ref(true)

const { isLoaded, isSignedIn } = useAuth()
</script>

<template>
  <div :class="cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')">
    <MarketingLogo />
    <div class="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
      <Spinner v-if="!isLoaded" />
      <template v-if="!isSignedIn && isLoaded">
        <ClientOnly>
          <SignInButton v-slot="{ handler }" mode="modal">
            <Button variant="ghost" size="sm" @click="handler">
              Log in
            </Button>
          </SignInButton>
          <SignUpButton v-slot="{ handler }" mode="modal">
            <Button size="sm" @click="handler">
              Get Jotion
            </Button>
          </SignUpButton>
        </ClientOnly>
      </template>
      <template v-if="isSignedIn && isLoaded">
        <Button variant="ghost" size="sm" as-child>
          <NuxtLink href="/documents">
            Enter Jotion
          </NuxtLink>
        </Button>
        <ClientOnly>
          <UserButton after-sign-out-url="/" />
        </ClientOnly>
      </template>
      <ModeToggle />
    </div>
  </div>
</template>
