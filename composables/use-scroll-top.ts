export function useScrollTop(threshold = 10) {
  const scrolled = ref(false)

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      scrolled.value = true
    }
    else {
      scrolled.value = false
    }
  }

  window.addEventListener('scroll', handleScroll)

  return scrolled
}
