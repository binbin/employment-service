# GitHub Actions 工作流说明

本项目包含两个主要的 GitHub Actions 工作流：

## 1. 部署工作流 (deploy.yml)

### 触发条件：

- 推送到 `main` 或 `master` 分支
- 对 `main` 或 `master` 分支的 Pull Request
- 手动触发

### 功能：

- 自动构建 React 项目
- 将构建结果部署到 GitHub Pages
- 使用 pnpm 作为包管理器
- 包含缓存优化以提高构建速度

## 2. 持续集成工作流 (ci.yml)

### 触发条件：

- 推送到 `main`、`master` 或 `develop` 分支
- 对 `main` 或 `master` 分支的 Pull Request

### 功能：

- 代码质量检查（ESLint）
- 构建验证
- 确保代码符合项目标准

## 设置 GitHub Pages

要启用 GitHub Pages 部署，请按以下步骤操作：

1. 转到仓库的 Settings 页面
2. 在左侧菜单中选择 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"
4. 保存设置

## 注意事项

- 确保 `vite.config.js` 中的 `base` 路径与您的仓库名称匹配
- 如果仓库名称不是 `employment-service`，请更新配置文件中的路径
- 工作流需要适当的权限才能部署到 GitHub Pages

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建项目
pnpm run build

# 预览构建结果
pnpm run preview

# 运行代码检查
pnpm run lint
```
