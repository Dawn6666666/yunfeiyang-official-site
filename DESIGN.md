# 云飞扬社团官网 — 设计理念与结构

---

## 一、整体设计理念

### 1.1 核心定位

> **"一个让人想加入的技术社区入口"**

本站不是信息展示站，而是一次 **情绪驱动的品牌体验**。访客（尤其大一新生）在 5 秒内应感受到：

- **年轻、前沿、有活力**
- 这里是创造者的圈子，而非课业延伸

### 1.2 视觉策略

| 维度 | 策略 |
|------|------|
| **色彩** | 深空背景 `#0B0D12` + 强调蓝 `#4DA3FF`，克制使用高饱和 |
| **排版** | 超大标题 + 留白呼吸，拒绝信息堆砌 |
| **动效** | 一次性关键动画，仅用 `transform/opacity`，情绪>炫技 |
| **差异化** | 明确区别于"高校官网"的机构感，走独立工作室路线 |

### 1.3 情绪曲线

```
进入 → 惊喜（Hero 冲击）→ 好奇（滚动发现）→ 认同（About 故事）→ 向往（Tech/成就）
```

---

## 二、页面结构

```
/
├── Home          # 沉浸式首页（核心 Hero + 滚动叙事）
├── About         # 社团故事、文化、指导老师
├── Tech          # 技术方向：Cloud / AI / Software 成长路径
└── Achievements  # 成果展示与荣誉墙
```

### 2.1 页面职责

| 页面 | 一句话定位 | 情绪关键词 |
|------|-----------|-----------|
| **Home** | 情绪入口，制造 WOW | 冲击、好奇 |
| **About** | 回答"你们是谁" | 温度、归属 |
| **Tech** | 展示技术深度与成长可能 | 专业、向上 |
| **Achievements** | 证明实力 | 自豪、激励 |

---

## 三、首页（Home）结构

首页采用 **全屏分段滚动叙事**，而非传统栅格堆叠。

### 3.1 模块序列

```
┌─────────────────────────────────────────┐
│  Hero（100vh）                          │  ← 情绪起点
│  "We Code / the Future"                 │
└─────────────────────────────────────────┘
           ↓ scroll
┌─────────────────────────────────────────┐
│  留白缓冲区（50vh）                      │  ← 情绪换挡
│  可选微文案                              │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  About 预览（引入身份）                  │  ← 故事开场
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Tech 方向预览卡片                       │  ← 专业印象
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Achievements 精选                       │  ← 信任建立
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Footer / CTA                            │
└─────────────────────────────────────────┘
```

---

## 四、Hero 区设计概要

### 4.1 布局原则

- **非对称**：主标题偏左或偏右，打破居中惯性
- **超大字号**：`clamp(4rem, 12vw, 10rem)` 级别
- **留白优先**：副标题与辅助信息保持视觉距离

### 4.2 文案层级

| 层级 | 内容 | 视觉权重 |
|------|------|---------|
| L1 | We Code / the Future | 主视觉锚点 |
| L2 | Student Tech Community · Est. 2014 | 辅助定位 |
| L3 | Cloud · AI · Software / Prof. Chen Ke | 次级信息 |
| L4 | Scroll ↓ | 行为引导 |

### 4.3 动效概念

| 元素 | 动效 | 语义 |
|------|------|------|
| **Code** | 描边 stroke → 填充 fill | 从抽象到实现 |
| **Future** | 遮罩渐显 Reveal（延迟触发） | 愿景正在构建 |
| **滚动后** | Code 弱化 / Future 微放大 | 焦点迁移 |

---

## 五、配色与字体速查

### 配色 — Midnight Code

```css
:root {
  --bg:      #0B0D12;
  --text:    #F5F7FA;
  --accent:  #4DA3FF;
  --muted:   #9AA3B2;
  --divider: #1A1F2B;
}
```

### 字体

| 用途 | 字体 | 字重 |
|------|------|------|
| Hero 主标题 | Space Grotesk | 600 / 700 |
| 正文 / 导航 | Inter | 400 / 500 |

---

## 六、技术约束摘要

| 允许 | 禁止 |
|------|------|
| Nuxt 3 / Vue 3 / Vite | Three.js / WebGL / Canvas |
| Tailwind CSS | ScrollMagic |
| Intersection Observer | 连续 `window.scroll` 监听 |
| CSS `transform` / `opacity` | 高频 JS 动画计算 |

---

---

## 七、Hero 区详细动效说明

### 7.1 入场动画时序（Page Load）

整个 Hero 入场动画控制在 **2.5 秒内完成**，避免用户等待焦虑。

```
时间轴（ms）
0        400      800      1200     1600     2000     2400
│─────────│────────│────────│────────│────────│────────│
│                                                       │
│  [We]   ─────────────────→ fade-in + slide-up        │
│         0–400ms, ease-out                             │
│                                                       │
│         [Code]  ─────────→ stroke → fill             │
│                 200–900ms, cubic-bezier              │
│                                                       │
│                  [the]   ─→ fade-in                  │
│                          600–900ms                    │
│                                                       │
│                          [Future] ──→ mask-reveal    │
│                                   800–1500ms          │
│                                                       │
│                                    [副标题 + 辅助信息]│
│                                    1400–1800ms        │
│                                                       │
│                                         [Scroll ↓]   │
│                                         1800–2200ms   │
│                                         + 呼吸动画    │
└───────────────────────────────────────────────────────┘
```

### 7.2 各元素动效细节

#### 7.2.1 "We" — 淡入 + 上滑

| 属性 | 值 |
|------|-----|
| 初始状态 | `opacity: 0; transform: translateY(20px)` |
| 结束状态 | `opacity: 1; transform: translateY(0)` |
| 时长 | 400ms |
| 缓动 | `ease-out` |
| 延迟 | 0ms |

#### 7.2.2 "Code" — 描边填充

| 阶段 | 描述 |
|------|------|
| **Phase 1** | 文字以 `stroke` 描边形式出现（`-webkit-text-stroke`） |
| **Phase 2** | 描边颜色从 `#4DA3FF` 渐变填充为实心 `#F5F7FA` |

```css
/* 关键帧示意 */
@keyframes stroke-to-fill {
  0% {
    color: transparent;
    -webkit-text-stroke: 2px var(--accent);
  }
  60% {
    color: transparent;
    -webkit-text-stroke: 2px var(--accent);
  }
  100% {
    color: var(--text);
    -webkit-text-stroke: 0px transparent;
  }
}
```

| 属性 | 值 |
|------|-----|
| 时长 | 700ms |
| 缓动 | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 延迟 | 200ms |

#### 7.2.3 "the" — 简单淡入

| 属性 | 值 |
|------|-----|
| 初始状态 | `opacity: 0` |
| 结束状态 | `opacity: 0.6`（保持次级权重） |
| 时长 | 300ms |
| 延迟 | 600ms |

#### 7.2.4 "Future" — 遮罩揭示

| 阶段 | 描述 |
|------|------|
| **初始** | 文字被 `clip-path: inset(0 100% 0 0)` 完全遮挡 |
| **揭示** | `clip-path` 从右向左展开至 `inset(0 0 0 0)` |

```css
@keyframes mask-reveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
```

| 属性 | 值 |
|------|-----|
| 时长 | 700ms |
| 缓动 | `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) |
| 延迟 | 800ms |

#### 7.2.5 副标题 & 辅助信息 — 逐行淡入

| 属性 | 值 |
|------|-----|
| 动画 | `opacity: 0 → 1` + `translateY(10px) → 0` |
| 时长 | 400ms per line |
| 延迟 | 1400ms（副标题）/ 1600ms（辅助信息） |
| 交错 | 每行间隔 150ms |

#### 7.2.6 "Scroll ↓" — 淡入 + 呼吸循环

| 阶段 | 描述 |
|------|------|
| **入场** | 1800ms 延迟后淡入 |
| **呼吸** | 入场后开始无限循环 `translateY(0 → 8px → 0)`，周期 2s |

```css
@keyframes scroll-breathe {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50%      { transform: translateY(8px); opacity: 0.6; }
}
```

---

### 7.3 滚动交互动效（Scroll → Hero 解构）

当用户开始滚动时，Hero 元素逐步 **解构** 而非突然消失。

#### 触发机制

- 使用 `Intersection Observer` 监测 Hero 容器
- 当 Hero 可见比例 `< 0.7` 时，添加 `.is-scrolling` class

#### 状态变化

| 元素 | 正常状态 | 滚动状态（.is-scrolling） |
|------|---------|-------------------------|
| **"We Code"** | `opacity: 1` | `opacity: 0.3; transform: translateY(-20px)` |
| **"the"** | `opacity: 0.6` | `opacity: 0` |
| **"Future"** | `opacity: 1; scale: 1` | `opacity: 1; scale: 1.05` ← 焦点强化 |
| **副标题** | `opacity: 1` | `opacity: 0` |
| **Scroll ↓** | 可见 | `opacity: 0` |

```css
/* 过渡示意 */
.hero-element {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero.is-scrolling .hero-code {
  opacity: 0.3;
  transform: translateY(-20px);
}

.hero.is-scrolling .hero-future {
  transform: scale(1.05);
}
```

---

## 八、Hero → About 过渡动效说明

### 8.1 叙事目标

```
Hero（行动 / 宣言）
       ↓
   留白缓冲（情绪换挡）
       ↓
About（身份 / 归属）
```

用户从「我们在做什么」平滑过渡到「我们是谁」。

### 8.2 过渡区结构

```
┌─────────────────────────────────────────┐
│  Hero 区（100vh）                        │
│  "We Code the Future"                   │
└─────────────────────────────────────────┘
                    │
                    ▼ scroll
┌─────────────────────────────────────────┐
│  留白缓冲区（50vh）                       │
│                                         │
│     ┌─────────────────────────────┐     │
│     │  可选过渡文案（极小字号）     │     │
│     │  "It started with curiosity."│     │
│     └─────────────────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│  About 内容区                            │
│  ┌───────────────────────────────┐      │
│  │  标题 "About Us"               │ ←先出现│
│  └───────────────────────────────┘      │
│  ┌───────────────────────────────┐      │
│  │  段落 1                        │ ←逐段 │
│  └───────────────────────────────┘      │
│  ┌───────────────────────────────┐      │
│  │  段落 2                        │      │
│  └───────────────────────────────┘      │
└─────────────────────────────────────────┘
```

### 8.3 留白区动效

#### 过渡文案（可选）

| 属性 | 值 |
|------|-----|
| 字号 | `0.75rem` / 12px |
| 颜色 | `var(--muted)` |
| 触发 | 进入视口 50% 时 |
| 动画 | `opacity: 0 → 0.8`，400ms |

```
候选文案（任选其一）：
• "It started with curiosity."
• "Everything begins with learning."
• "Before the future, there was passion."
```

### 8.4 About 区入场动效

#### 触发机制

每个 About 内容块使用独立的 `Intersection Observer`：
- `threshold: 0.2`（元素 20% 进入视口时触发）
- `rootMargin: '0px 0px -50px 0px'`（提前 50px 触发）

#### 动画序列

| 元素 | 动画 | 延迟 |
|------|------|------|
| **标题** | `opacity: 0 → 1` + `translateY(30px) → 0` | 0ms |
| **段落 1** | 同上 | 150ms |
| **段落 2** | 同上 | 300ms |
| **段落 N** | 同上 | N × 150ms |

```css
.about-block {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.about-block.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 8.5 技术实现要点

| 要求 | 实现方式 |
|------|---------|
| 禁止 `window.scroll` 监听 | ✅ 全部使用 `IntersectionObserver` |
| 仅用 `transform/opacity` | ✅ 无其他 GPU 合成属性 |
| 单次播放 | ✅ 动画完成后移除 observer |
| 移动端降级 | ✅ 可通过 `prefers-reduced-motion` 禁用动画 |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 九、动效速查表

| 模块 | 元素 | 动效类型 | 时长 | 触发 |
|------|------|---------|------|------|
| Hero | "We" | fade + slide | 400ms | page load |
| Hero | "Code" | stroke → fill | 700ms | page load |
| Hero | "the" | fade | 300ms | page load |
| Hero | "Future" | mask reveal | 700ms | page load |
| Hero | "Scroll ↓" | fade + breathe loop | 400ms + ∞ | page load |
| Hero 滚动 | 整体 | 解构（弱化/强调） | 600ms | IntersectionObserver |
| 过渡区 | 过渡文案 | fade | 400ms | IntersectionObserver |
| About | 标题/段落 | fade + slide | 600ms | IntersectionObserver |

---


---

## 十、About 章节：结构与节奏设计

### 10.1 设计意图

About 章节承接在 **Hero (高能量)** 和 **Buffer (情绪留白)** 之后。
设计目标是：**从“视觉冲击”平滑过渡到“价值认同”**。

我们需要一种**“双栏视差”**或**“左固定右滚动”**的结构，来控制阅读节奏，避免大段枯燥的文本堆砌。

### 10.2 内容分段与层级

整体采用 **Sticky Title（左侧锚点） + Scrolling Content（右侧叙事）** 的布局。

| 序号 | 模块 | 层级 | 视觉说明 | 信息量 |
|------|------|------|---------|-------|
| **L** | **Section Anchor** | H2 | 左侧固定展示 "About." | 极简锚点 |
| **R1** | **The Identity** | Display Text | "Not just a club.<br>A playground for future builders." | **高** (核心定义) |
| **R2** | **The Origin** | Body Text | 成立于 2014 年。<br>在陈可老师指导下，我们探索代码的边界。 | 中 (信任背书) |
| **R3** | **The Vibe** | Keywords | [ Exploration ] [ Growth ] [ Passion ]<br>这里没有打卡主要求，只有对技术最纯粹的热爱。 | 中 (文化共鸣) |

### 10.3 节奏控制 (Rhythm)

```
[ Buffer Zone Ends ]
      │
      ▼
┌──────────────┬───────────────────────────────┐
│              │                               │
│  Sticky:     │  [R1: Identity]               │
│  "About."    │  大字排版，强调"Builders"       │
│              │                               │
│              │  (Gap: 10vh)                  │
│              │                               │
│              │  [R2: Origin]                 │
│              │  正常字号，高可读性             │
│              │  Tech Community since 2014    │
│              │                               │
│              │  (Gap: 10vh)                  │
│              │                               │
│              │  [R3: The Vibe]               │
│              │  关键词列表 / 短句              │
│              │  "Code is our language."      │
│              │                               │
└──────────────┴───────────────────────────────┘
```

### 10.4 交互细节设计

- **进入**：右侧内容块（R1, R2, R3）随滚动逐个进入视口，带轻微 `TranslateY` 和 `Opacity` 动画（这也是为什么我们在 Hero 组件中做了状态封装，这里可以复用）。
- **左侧 Title**：当 R1 进入时，"About." 固定在视口左上方；当 R3 离开时，"About." 同步向上离开。


---

## 十一、Tech 章节：结构与叙事设计

### 11.1 设计意图

Tech 章节承接 About 的“价值观”，负责展示**“硬实力”与“成长路径”**。
我们拒绝堆砌 Logo 墙（React / Vue / Java...），而是展示**领域（Domains）与方向（Tracks）**。

核心叙事：**"We don't just learn languages. We master domains."**

### 11.2 信息分组策略：三大技术赛道 (The 3 Tracks)

我们将技术栈重新封装为三个核心领域，每个领域代表一种成长路径：

#### Track 1: Cloud Native (基础设施)
*   **定位**：The Backbone. 构建高可用、可扩展的数字基座。
*   **关键词**：Kubernetes, Docker, Go, Microservices.
*   **成长目标**：成为系统架构师 (System Architect).

#### Track 2: Intelligence (AI & LLM)
*   **定位**：The Frontier. 探索生成式 AI 的应用边界。
*   **关键词**：Transformers, RAG, PyTorch, Agents.
*   **成长目标**：成为 AI 工程师 (AI Engineer).

#### Track 3: Modern Engineering (全栈/软件工程)
*   **定位**：The Craft. 打造极致体验与优雅代码。
*   **关键词**：Next.js, Rust, Design Systems, Performance.
*   **成长目标**：成为全栈创造者 (Full-stack Maker).

### 11.3 结构与顺序

```
┌─────────────────────────────────────────┐
│  Section Header                         │
│  "Tech Tracks."                         │
│  Sub: "Find your path."                 │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Card 1: Cloud Native                   │
│  [Icon/Abstract Shape]                  │
│  [Title] + [Keywords]                   │
│  [Outcome Description]                  │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Card 2: Intelligence (AI)              │
│  ...                                    │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Card 3: Modern Engineering             │
│  ...                                    │
└─────────────────────────────────────────┘
```

### 11.4 交互意图 (Preview)

- **Hover 交互**：默认只显示 Title 和 Keywords。鼠标 Hover 时，展开显示“成长目标”与详细描述，背景微亮。
- **布局**：PC 端建议采用 **横向网格 (Grid)** 或 **手风琴 (Accordion)**，移动端为垂直堆叠。


---

## 十二、Achievements 章节：结构与叙事设计

### 12.1 设计意图

Achievements 章节承接 Tech 的“能力展示”，负责提供**“现实背书 (Proof of Work)”**。
核心叙事：**"Quiet Confidence." (静水流深)**
我们不需要炫耀奖杯，而是客观陈述事实。风格应**克制、理性、数据化**，避免使用大红大紫的喜报风格。

### 12.2 信息分组策略：三个维度 (Dimensions)

我们将成果分为三个维度，从不同侧面验证社团价值：

#### Dimension 1: The Peaks (竞技巅峰)
*   **内容**："互联网+"、"挑战杯"、ACM 等高含金量奖项。
*   **叙事重点**：展现我们在顶尖竞技场的竞争力。
*   **展示形式**：**精选列表 (Curated List)**。只列出 Top 3-5 级别的奖项，避免滥竽充数。

#### Dimension 2: The Soil (开源与项目)
*   **内容**：GitHub Stars、开源贡献、校内服务工具（如抢课脚本、校园导航）。
*   **叙事重点**：展现我们对代码的实际热爱与产出。
*   **展示形式**：**数据概览 (Data Points)** + **项目卡片**。

#### Dimension 3: The Legacy (校友去向)
*   **内容**：成员毕业去向（大厂 Offer、海外名校）。
*   **叙事重点**："Our members shape the future everywhere."
*   **展示形式**：**Logo 墙 (灰阶)** 或 **极简名单**。

### 12.3 结构与布局

整体采用 **"Table / List" (表格/列表)** 的主要形态，强调信息密度与整洁度。

```
┌─────────────────────────────────────────┐
│  Section Header: "Impact."              │
└─────────────────────────────────────────┘

[ Layout: Grid or Columns ]

┌───────────────┐  ┌──────────────────────┐
│  The Peaks    │  │  The Legacy          │
│  (List)       │  │  (Data/Logos)        │
│               │  │                      │
│  2023 Gold    │  │  Alumni at:          │
│  National...  │  │  [ByteDance]         │
│               │  │  [Tencent]           │
│  2022 Silver  │  │  [CMU]               │
│  Challenge... │  │                      │
└───────────────┘  └──────────────────────┘

┌─────────────────────────────────────────┐
│  The Soil (Highlighted Project)         │
│  "Campus OS" - 2k+ Stars                │
└─────────────────────────────────────────┘
```

### 12.4 视觉策略

- **字体**：大量使用 **Monospace (等宽字体)** 来展示年份和数据，营造理性、工程感。
- **色彩**：主要使用灰阶 (`--muted`, `--text`)，仅在极少数关键数据上使用 `--accent`。
- **装饰**：极简分割线，无阴影，无圆角（或极小圆角），强调硬朗风格。

> **下一步**：实现 Achievements v1 静态组件（以表格/列表布局为主）。




