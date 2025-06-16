# 智能面试题生成器 (Interview Generator)

基于AI的个性化面试题库生成工具，帮助求职者更好地准备面试。

## 🚀 功能特性

- **智能简历分析**: 上传PDF简历，AI自动分析技能和经验
- **个性化题库**: 根据简历内容和职位要求生成定制化面试题
- **多维度筛选**: 按类别、难度筛选面试题
- **答案解析**: 提供详细的参考答案和解题思路
- **收藏功能**: 标记重要题目，便于复习
- **导出功能**: 支持导出题库为PDF或其他格式
- **现代化UI**: 响应式设计，支持多设备访问

## 🛠️ 技术栈

- **前端框架**: Next.js 15 (App Router)
- **开发语言**: TypeScript
- **样式框架**: TailwindCSS 4
- **包管理器**: pnpm
- **图标库**: Font Awesome + Lucide React
- **文件上传**: react-dropzone
- **代码质量**: ESLint

## 📦 安装和运行

### 环境要求

- Node.js 18+
- pnpm (推荐) 或 npm/yarn

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建
pnpm build

# 启动生产服务器
pnpm start
```

## 📁 项目结构

```
interview-generator/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 主页面
│   └── components/         # React 组件
│       ├── Navigation.tsx  # 导航栏
│       ├── HeroSection.tsx # 英雄区域
│       ├── FileUpload.tsx  # 文件上传
│       ├── JobRequirements.tsx # 职位要求输入
│       ├── LoadingSection.tsx  # 加载状态
│       ├── QuestionResults.tsx # 题目结果展示
│       ├── FeaturesSection.tsx # 功能特性
│       └── Footer.tsx      # 页脚
├── public/                 # 静态资源
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.js     # TailwindCSS 配置
└── next.config.ts         # Next.js 配置
```

## 🎯 使用指南

1. **上传简历**: 点击上传区域或拖拽PDF简历文件
2. **输入职位要求**: 在文本框中描述目标职位的具体要求
3. **生成题库**: 点击"开始生成"按钮，AI将分析并生成个性化面试题
4. **查看结果**: 浏览生成的面试题，点击查看详细答案
5. **筛选和收藏**: 使用筛选功能找到合适难度的题目，收藏重要题目
6. **导出题库**: 将题库导出为PDF等格式，便于离线学习

## 🔧 开发说明

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 代码规范
- 组件采用函数式组件 + Hooks
- 使用 TailwindCSS 进行样式开发

### 组件设计原则

- 单一职责：每个组件只负责一个功能
- 可复用性：组件设计考虑复用场景
- 类型安全：使用 TypeScript 接口定义 props
- 响应式：支持多种屏幕尺寸

## 🚀 部署

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

- **Netlify**: 支持静态导出
- **Docker**: 可容器化部署
- **传统服务器**: 使用 `pnpm build && pnpm start`

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/sunlianqiang/interview-generator/issues)
- Email: [联系邮箱]

---

**让AI助力你的面试准备，提升求职成功率！** 🎯