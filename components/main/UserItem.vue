<script lang="ts" setup>
import { ChevronsLeftRight } from 'lucide-vue-next'
import { SignOutButton, useUser } from 'vue-clerk'

const { user } = useUser()
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child class="flex items-center text-sm p-3 w-full">
        <div role="button" class="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div class="gap-x-2 inline-flex items-center max-w-[150px]">
            <Avatar class="size-5">
              <AvatarImage :src="user?.imageUrl || ''" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span class="text-start font-medium line-clamp-1">
              {{ user?.fullName }}&apos;s Jotion
            </span>
          </div>
          <ChevronsLeftRight class="size-4 rotate-90 ml-2 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-80" align="start" :align-offset="11">
        <div class="flex flex-col space-y-4 p-2">
          <p class="text-xs font-medium leading-none text-muted-foreground">
            {{ user?.emailAddresses[0].emailAddress }}
          </p>
          <div class="flex items-center gap-x-2">
            <div class="rounded-md bg-secondary p-1">
              <Avatar class="size-8">
                <AvatarImage :src="user?.imageUrl || ''" alt="avatar" />
              </Avatar>
            </div>
            <div class="space-y-1">
              <p class="text-sm line-clamp-1">
                {{ user?.fullName }}&apos;s Jotion
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="w-full cursor-pointer text-muted-foreground">
          <ClientOnly>
            <SignOutButton v-slot="{ handler }">
              <span @click="handler">
                Sign out
              </span>
            </SignOutButton>
          </ClientOnly>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ClientOnly>
</template>
