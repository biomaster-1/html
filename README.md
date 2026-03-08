# 博客网站

这是一个使用纯HTML、CSS和JavaScript创建的静态博客网站，可以部署到GitHub Pages。

## 功能特性

- 响应式设计，适配不同设备
- 文章列表展示
- 文章详情页
- 搜索功能
- 分类展示
- 美观的界面设计

## 目录结构

```
blog-site/
├── index.html          # 主页，显示文章列表
├── post.html           # 文章详情页
├── style.css           # 样式文件
├── script.js           # JavaScript文件
└── README.md           # 说明文档
```

## 如何部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 登录GitHub账号
2. 点击右上角的"+"按钮，选择"New repository"
3. 输入仓库名称，例如"blog-site"
4. 选择"Public"（公开仓库）
5. 不要勾选"Initialize this repository with a README"（因为我们已经有了README文件）
6. 点击"Create repository"按钮

### 步骤2：在本地配置Git并推送代码

#### 方法一：使用GitHub Desktop（推荐，适合新手）
1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 打开GitHub Desktop，登录你的GitHub账号
3. 点击"File" > "Clone repository"
4. 选择"URL"选项卡，输入你刚创建的仓库URL（例如：https://github.com/your-username/blog-site.git）
5. 选择本地保存位置，点击"Clone"
6. 打开克隆的仓库文件夹，将blog-site文件夹中的所有文件复制到这里
7. 回到GitHub Desktop，你会看到文件已添加
8. 在左下角的"Summary"框中输入"Initial commit"
9. 点击"Commit to main"
10. 点击右上角的"Push origin"按钮

#### 方法二：使用Git命令行
1. 确保你已经安装了Git（可从 [git-scm.com](https://git-scm.com/) 下载）
2. 打开命令行工具（Windows下为CMD或PowerShell）
3. 导航到blog-site文件夹：
   ```bash
   cd d:\programme\python\mito\blog-site
   ```
4. 初始化Git仓库：
   ```bash
   git init
   ```
5. 配置Git用户信息（替换为你的姓名和邮箱）：
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```
6. 添加所有文件到暂存区：
   ```bash
   git add .
   ```
7. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```
8. 添加远程仓库（替换为你的GitHub用户名）：
   ```bash
   git remote add origin https://github.com/your-username/blog-site.git
   ```
9. 推送代码到GitHub：
   ```bash
   git push -u origin main
   ```

### 步骤3：配置GitHub Pages
1. 进入你刚创建的GitHub仓库
2. 点击上方导航栏中的"Settings"选项
3. 在左侧菜单中找到并点击"Pages"
4. 在"Build and deployment"部分的"Source"下拉菜单中选择"Deploy from a branch"
5. 在"Branch"下拉菜单中选择"main"分支，然后选择"/(root)"作为目录
6. 点击"Save"按钮
7. 等待几分钟，GitHub Pages会生成网站链接

### 步骤4：访问你的博客
- GitHub Pages配置完成后，你可以通过以下格式的URL访问你的博客：
  `https://your-username.github.io/blog-site/`
- 替换"your-username"为你的GitHub用户名
- 首次部署可能需要几分钟时间，请耐心等待

## 如何添加新文章

1. 打开 `script.js` 文件
2. 在 `posts` 数组中添加新的文章对象，包含以下字段：
   - `id`: 唯一标识符
   - `title`: 文章标题
   - `content`: 文章内容
   - `excerpt`: 文章摘要
   - `date`: 发布日期
   - `category`: 文章分类
3. 保存文件并重新部署到GitHub

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Pages

## 浏览器兼容性

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT