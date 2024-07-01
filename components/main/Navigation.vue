<script lang="ts" setup>
import { ChevronsLeftIcon, MenuIcon, PlusCircle, Search, Settings } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { cn } from '~/lib/utils'

const router = useRouter()

const isMobile = useMediaQuery('(max-width: 768px)')

const isResizing = ref(false)
const sidebarRef = ref<HTMLElement | null>(null)
const navbarRef = ref<HTMLElement | null>(null)
const isResetting = ref(false)
const isCollapsed = ref(isMobile.value)

function handleMouseDown(event: MouseEvent) {
  event.preventDefault()
  event.stopPropagation()

  isResizing.value = true
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(event: MouseEvent) {
  if (!isResizing.value)
    return
  let newWidth = event.clientX

  if (newWidth < 240)
    newWidth = 240
  if (newWidth > 480)
    newWidth = 480

  if (sidebarRef.value && navbarRef.value) {
    sidebarRef.value.style.width = `${newWidth}px`
    navbarRef.value.style.setProperty('left', `${newWidth}px`)
    navbarRef.value.style.setProperty('width', `calc(100% - ${newWidth}px)`)
  }
}

function handleMouseUp() {
  isResizing.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

function resetWidth() {
  if (sidebarRef.value && navbarRef.value) {
    isCollapsed.value = false
    isResetting.value = true
    sidebarRef.value.style.width = isMobile.value ? '100%' : '240px'
    navbarRef.value.style.setProperty('width', isMobile.value ? '0' : 'calc(100% - 240px)')
    navbarRef.value.style.setProperty('left', isMobile.value ? '100%' : '240px')

    setTimeout(() => {
      isResetting.value = false
    }, 300)
  }
}

function collapse() {
  if (sidebarRef.value && navbarRef.value) {
    isCollapsed.value = true
    isResetting.value = true

    sidebarRef.value.style.width = '0'
    navbarRef.value.style.setProperty('width', '100%')
    navbarRef.value.style.setProperty('left', '0')

    setTimeout(() => {
      isResetting.value = false
    }, 300)
  }
}

function handleCreate() {
  const promise = useFetch('/api/documents', {
    method: 'post',
    body: {
      title: 'Untitled',
    },
  })
    .then(documentId => router.push(`/documents/${documentId}`))

  toast.promise(promise, {
    loading: 'Creating a new note...',
    success: () => 'New note created!',
    error: () => 'Failed to create a new note.',
  })
}

watch(isMobile, () => {
  if (isMobile.value) {
    collapse()
  }
  else {
    resetWidth()
  }
})
</script>

<template>
  <aside
    ref="sidebarRef"
    :class="cn('group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[99999]',
               isResetting && 'transition-all ease-in-out duration-300',
               isMobile && 'w-0')"
  >
    <div
      role="button"
      :class="cn('size-6 text-mute-foreground rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition', isMobile && 'opacity-100')"
      @click="collapse"
    >
      <ChevronsLeftIcon class="size-6" />
    </div>

    <div>
      <MainUserItem />
      <MainItem :icon="Search" label="Search" is-search :on-click="() => {}" />
      <MainItem :icon="Settings" label="Settings" :on-click="() => {}" />
      <MainItem :icon="PlusCircle" label="New Page" :on-click="handleCreate" />
    </div>

    <div class="mt-4 flex-1">
      <p>Documents</p>
    </div>
    <div
      class="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute w-1 h-full bg-primary/10 right-0 top-0"
      @click="resetWidth"
      @mousedown="handleMouseDown"
    />
  </aside>
  <div ref="navbarRef" :class="cn('absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]', isResetting && 'transition-all ease-in-out duration-300', isMobile && 'left-0 w-full')">
    <nav class="bg-transparent px-3 py-2 w-full">
      <MenuIcon v-if="isCollapsed" class="size-6 text-muted-foreground" @click="resetWidth" />
    </nav>
  </div>
</template>
