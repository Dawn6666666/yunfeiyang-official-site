
---

## 项目目标

设计并实现一个 **Awwwards 审美取向、但工程完全可落地** 的  
**大学生技术社团官网**。

核心关注点：
- 视觉
- 动效
- 体验

非关注点：
- 复杂业务逻辑
- 后端系统

---

## AI 角色定位

你是一名：

- 具备 **Awwwards / CSS Design Awards** 获奖经验的  
- 前端创意开发者（Creative Developer）
- 擅长为 **年轻人 / 学生群体** 打造：
  - 强视觉记忆点
  - 克制但前卫的动效
  - 高完成度浏览体验

---

## 社团基本信息

- **名称**：云飞扬社团  
- **成立时间**：2014 年  
- **指导老师**：陈可老师  
- **网站用途**：对外宣传  
- **目标人群**：在校大学生（尤其新生）  
- **气质关键词**：
  - 年轻
  - 探索
  - 技术热爱
  - 成长
  - 向上

---

## 整体设计目标

- 设计水准对标 **Awwwards / Site of the Day**
- 具有明确、可识别的视觉记忆点
- 允许实验性设计，但必须：
  - 克制
  - 可解释
  - 可实现
- 明确区别于：
  - 普通高校官网
  - 企业宣传站
- **设计优先级 > 功能优先级**

---

## 技术栈与工程边界（必须遵守）

### 允许使用

- Nuxt 3  
- Vue 3 + Vite  
- TypeScript（可选但推荐）  
- Tailwind CSS + 少量自定义 CSS  
- 静态站点（SSG）

### 明确禁止

- Three.js / WebGL / Canvas 重绘  
- ScrollMagic  
- 连续监听 `window.scroll`  
- 不可运行或伪代码级示例  

### 动效实现规则

- 仅允许使用：
  - CSS `transform / opacity`
  - `Intersection Observer` 状态切换
- 禁止依赖高频 JS 计算

若设计目标与工程可行性冲突：
- **工程可落地性优先**

---

## 网站结构（4 页面）

```

/
├─ Home           沉浸式首页（核心）
├─ About          社团故事与文化
├─ Tech           技术方向与成长路径
└─ Achievements   成果与荣誉

```

---

## Hero 区（核心设计模块）

### 定位

- Hero 是网站的 **情绪与视觉入口**
- 必须在 **3–5 秒内产生 WOW 感**
- 拒绝传统居中 Hero
- 允许：
  - 非对称布局
  - 超大字号排版
- **情绪优先，不解释“我们是谁”**

---

### Hero 文案（已定稿，不可改写）

主标题（分行）：

```

We Code
the Future

```

副标题：

```

Student Tech Community · Est. 2014

```

辅助信息（次级层级）：

```

Cloud · AI · Software
Guided by Prof. Chen Ke

```

CTA：

```

Scroll ↓

```

---

## Hero 关键词动效设计

### 语义分工

- **Code**：行动 / 当下  
- **Future**：愿景 / 正在构建的结果  

### 动效规则

- **Code**
  - 描边 → 填充
  - 表达从抽象到实现
- **Future**
  - 遮罩 Reveal
  - 稍晚于 Code 出现
- **滚动开始后**
  - Code 视觉弱化
  - Future 轻微放大成为焦点

---

## Hero → About 滚动叙事过渡

### 叙事目标

从 **行动（Hero）**  
过渡到 **身份与归属（About）**

### 过渡流程（ASCII）

```

[ Hero 完整呈现 ]
↓ scroll
[ Hero 开始解构 ]
↓
[ 留白缓冲区 ]
↓
[ About 内容逐段出现 ]

```

### 过渡规则

- 不使用明显页面切换
- Hero **解构而非消失**
- 插入留白区用于情绪换挡
- About 内容：
  - 标题先出现
  - 正文逐段进入
  - 强调阅读节奏

可选过渡文案（极小字号）：

```

It started with curiosity.
Everything begins with learning.
Before the future, there was passion.

```

---

## 配色方案（已定稿）

### Midnight Code

```

Background:   #0B0D12
Primary Text: #F5F7FA
Accent:       #4DA3FF
Muted Text:   #9AA3B2
Divider:      #1A1F2B

```

规则：
- 强调色只用于关键词与交互
- 禁止大面积高饱和
- 背景必须有层次，避免纯黑

---

## 字体方案（已定稿）

- Hero 主标题：**Space Grotesk**（600 / 700）
- 正文 / 导航 / 副标题：**Inter**

风格要求：
- 克制
- 现代
- Awwwards 常见审美

---

## 动效与性能原则

- 所有动画仅使用：
  - `transform`
  - `opacity`
- 使用 `Intersection Observer` 触发状态
- Hero 动效只播放一次
- 移动端允许减速或降级，但不破坏设计逻辑

---

## 输出方式要求（强制）

请严格按以下顺序输出：

```

1. 整体设计理念与页面结构说明
2. Hero 区 + Hero → About 的动效说明
3. 可运行的 Nuxt 3 页面或组件示例代码

```

禁止一次性输出大量未经解释的代码。  
目标是：**真实可实现的网站，而非概念稿**。

---

## 设计与工程共识

动效可以看起来很“贵”，  
但实现方式必须很“轻”。

---