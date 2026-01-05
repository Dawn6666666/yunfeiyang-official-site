<template>
  <div class="hero-bg-layer">
    <!-- 背景层 -->
    <div class="hero__bg"></div>
    <!-- 噪点纹理 -->
    <div class="hero__noise"></div>
  </div>
</template>

<style scoped>
/* 背景层 - 微妙渐变 */
.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(77, 163, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(77, 163, 255, 0.05) 0%, transparent 50%),
    var(--bg);
  z-index: 0;
}

/* 噪点纹理层 */
.hero__noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
