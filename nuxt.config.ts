// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-PLACEHOLDER'
    }
  },

  app: {
    head: {
      title: '云飞扬社团 | We Code the Future',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Student Tech Community · Est. 2014 · Cloud · AI · Software' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=Merriweather:wght@300;400;700;900&display=swap'
        }
      ],
      script: [
        {
          innerHTML: `(function(){try{const s=localStorage.getItem('yfy-theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='light'||(!s&&!d))document.documentElement.classList.add('light-mode');}catch(e){}})()`,
          type: 'text/javascript'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
