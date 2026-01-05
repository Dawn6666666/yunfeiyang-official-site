
import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(target: Ref<HTMLElement | null>, options = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }) {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        if (!target.value) return

        // 获取所有带有 .reveal 或 .reveal-stagger 的子元素 (或 target 本身)
        const elements = target.value.querySelectorAll('.reveal, .reveal-stagger')
        const targets = elements.length > 0 ? elements : [target.value]

        // 如果 target 本身就是 reveal (例如单元素组件)
        if (target.value.classList.contains('reveal') || target.value.classList.contains('reveal-stagger')) {
            targets[0] = target.value
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    // Optional: unobserve after reveal
                    observer?.unobserve(entry.target)
                }
            })
        }, options)

        targets.forEach(el => observer?.observe(el))
    })

    onUnmounted(() => {
        observer?.disconnect()
    })
}
