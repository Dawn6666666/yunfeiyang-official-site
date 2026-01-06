export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const gaId = config.public.gaId

    if (!gaId) {
        console.warn('GA4 Measurement ID not found. Analytics disabled.')
        return
    }

    // Inject Gtag Script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    // Init Data Layer
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
        window.dataLayer.push(args)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', gaId, {
        send_page_view: false // Manual handling for SPA
    })

    // Track Page Views
    nuxtApp.hook('page:finish', () => {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        })
    })
})

// Type augmentation
declare global {
    interface Window {
        dataLayer: any[]
        gtag: (...args: any[]) => void
    }
}
