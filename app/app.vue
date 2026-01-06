<template>
  <div class="app">
    <TheNav />
    <TheHero />
    <TheTransitionBuffer />
    <TheAbout />
    <TheTech />
    <TheAchievements />
    <JoinForm />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import '@/assets/css/main.css'
import '@/assets/css/blueprint.css'
import '@fontsource/inter/400.css'

const title = '云飞扬社团 | We Code the Future'
const description = '成立于2014年的学生科技社团，专注于云计算、AI与现代软件开发。'
const url = 'https://yunfeiyang.club'
const image = 'https://yunfeiyang.club/og-image.png'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    { rel: 'canonical', href: url }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '云飞扬社团 (Yun Fei Yang Club)',
        url: url,
        logo: 'https://yunfeiyang.club/logo.png',
        foundingDate: '2014',
        slogan: 'We Code the Future',
        description: description,
        member: [
          {
            '@type': 'Person',
            name: 'Chen Ke',
            roleName: 'Advisor'
          }
        ],
        sameAs: [
          'https://github.com/Dawn6666666/yunfeiyang-official-site'
        ]
      })
    }
  ]
})
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
