# 博客网站更新指南

本文档将指导您如何更新博客网站，包括添加新文章、修改现有内容、更新样式等操作。

## 📝 目录

- [添加新文章](#添加新文章)
- [修改现有文章](#修改现有文章)
- [删除文章](#删除文章)
- [更新网站样式](#更新网站样式)
- [添加新图片](#添加新图片)
- [提交更改到GitHub](#提交更改到github)
- [常见问题](#常见问题)

---

## 添加新文章

### 步骤1：打开 script.js 文件

在项目根目录找到 `script.js` 文件并打开。

### 步骤2：找到文章数据数组

在文件开头找到 `posts` 数组：

```javascript
const posts = [
    {
        id: 1,
        title: '如何开始学习编程',
        content: '学习编程是一个循序渐进的过程...',
        excerpt: '学习编程的入门指南和实践建议',
        date: '2026-03-01',
        category: '编程'
    },
    // 更多文章...
];
```

### 步骤3：添加新文章

在数组末尾添加新的文章对象（注意：在最后一个元素后不要加逗号）：

```javascript
const posts = [
    // 现有文章...
    {
        id: 7,  // 确保ID唯一，递增
        title: '我的新文章标题',
        content: '这是文章的完整内容，可以写很长...',
        excerpt: '这是文章的简短摘要，会显示在文章列表中',
        date: '2026-03-10',  // 格式：YYYY-MM-DD
        category: '分类名称'  // 如：技术、生活、旅行等
    }
];
```

### 文章字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 文章唯一标识符，必须是数字且唯一 | `7` |
| `title` | 文章标题 | `'我的新文章'` |
| `content` | 文章完整内容 | `'这是文章的详细内容...'` |
| `excerpt` | 文章摘要（显示在列表中） | `'文章的简短介绍'` |
| `date` | 发布日期 | `'2026-03-10'` |
| `category` | 文章分类 | `'技术'` |

### 步骤4：保存文件

保存 `script.js` 文件。

---

## 修改现有文章

### 步骤1：找到要修改的文章

在 `script.js` 的 `posts` 数组中找到对应的文章（通过 `id` 或 `title` 查找）。

### 步骤2：修改文章内容

直接修改对应字段的值：

```javascript
{
    id: 1,
    title: '修改后的标题',  // 修改标题
    content: '修改后的内容...',  // 修改内容
    excerpt: '修改后的摘要',  // 修改摘要
    date: '2026-03-01',  // 修改日期
    category: '新分类'  // 修改分类
}
```

### 步骤3：保存文件

保存 `script.js` 文件。

---

## 删除文章

### 步骤1：找到要删除的文章

在 `script.js` 的 `posts` 数组中找到要删除的文章。

### 步骤2：删除整个文章对象

删除整个文章对象（包括花括号和逗号）：

```javascript
const posts = [
    {
        id: 1,
        title: '文章1',
        // ...
    },
    // 删除下面这个文章
    // {
    //     id: 2,
    //     title: '要删除的文章',
    //     ...
    // },
    {
        id: 3,
        title: '文章3',
        // ...
    }
];
```

**注意**：删除后要确保数组格式正确，最后一个元素后面不要有逗号。

---

## 更新网站样式

### 修改颜色

打开 `style.css` 文件，找到对应的样式规则：

```css
/* 修改主题颜色 */
.nav-links a:hover {
    color: #4CAF50;  /* 修改为你想要的颜色 */
}

.read-more {
    background: #4CAF50;  /* 修改按钮颜色 */
}
```

### 修改字体大小

```css
.hero h2 {
    font-size: 3rem;  /* 修改标题大小 */
}

.hero p {
    font-size: 1.3rem;  /* 修改段落大小 */
}
```

### 修改布局

```css
.post-list {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;  /* 修改卡片间距 */
}
```

---

## 添加新图片

### 步骤1：准备图片文件

将图片文件放入 `images` 文件夹中。

### 步骤2：在文章中使用图片

如果需要为文章添加图片，可以扩展文章数据结构：

```javascript
{
    id: 7,
    title: '带图片的文章',
    content: '文章内容...',
    excerpt: '文章摘要',
    date: '2026-03-10',
    category: '摄影',
    image: 'images/your-image.jpg'  // 添加图片路径
}
```

### 步骤3：修改渲染逻辑（可选）

如果需要在文章卡片中显示图片，需要修改 `script.js` 中的 `renderPosts` 函数。

---

## 提交更改到GitHub

### 方法一：使用命令行（推荐）

#### 步骤1：查看更改状态

```bash
git status
```

#### 步骤2：添加所有更改

```bash
git add .
```

#### 步骤3：提交更改

```bash
git commit -m "描述你的更改内容"
```

示例：
```bash
git commit -m "添加新文章：我的旅行日记"
```

#### 步骤4：推送到GitHub

```bash
git push origin main
```

### 方法二：使用GitHub Desktop

1. 打开 GitHub Desktop
2. 查看更改的文件
3. 在左下角输入提交信息
4. 点击 "Commit to main"
5. 点击 "Push origin" 推送到远程仓库

---

## 常见问题

### Q1: 文章不显示怎么办？

**检查以下几点**：
1. 确保 `id` 唯一且为数字
2. 检查JSON格式是否正确（逗号、引号等）
3. 确保所有字段都已填写
4. 检查浏览器控制台是否有错误信息

### Q2: 如何修改网站标题？

打开 `index.html`，找到 `<title>` 标签：

```html
<title>我的博客</title>
```

修改为你想要的标题。

### Q3: 如何修改导航栏链接？

打开 `index.html`，找到导航部分：

```html
<ul class="nav-links">
    <li><a href="index.html">首页</a></li>
    <li><a href="#about">关于</a></li>
    <li><a href="#contact">联系</a></li>
</ul>
```

修改链接地址和文字。

### Q4: 如何更改英雄区域的背景图片？

打开 `style.css`，找到 `.hero` 样式：

```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                url('images/your-new-image.jpg');
}
```

修改图片路径即可。

### Q5: 如何添加新的页面？

1. 创建新的HTML文件（如 `about.html`）
2. 复制 `index.html` 的基本结构
3. 修改内容
4. 在导航栏添加链接

### Q6: 网站更新后看不到变化？

**可能的原因**：
1. 浏览器缓存：按 `Ctrl + F5` 强制刷新
2. GitHub Pages延迟：等待1-2分钟
3. 未正确推送：检查 `git status`

### Q7: 如何添加评论功能？

可以考虑集成第三方评论系统：
- Disqus
- Gitalk
- Valine

需要额外的JavaScript代码和配置。

---

## 📋 快速检查清单

发布新文章前，请检查：

- [ ] 文章 `id` 唯一
- [ ] 所有字段都已填写
- [ ] 日期格式正确（YYYY-MM-DD）
- [ ] JSON格式正确（逗号、引号）
- [ ] 已保存文件
- [ ] 已提交到Git
- [ ] 已推送到GitHub
- [ ] 等待GitHub Pages更新（1-2分钟）
- [ ] 清除浏览器缓存并测试

---

## 🔗 有用的链接

- [GitHub仓库](https://github.com/biomaster-1/html)
- [GitHub Pages](https://biomaster-1.github.io/html)
- [Markdown语法指南](https://www.markdownguide.org/)
- [CSS参考手册](https://www.w3schools.com/css/)

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看浏览器控制台的错误信息
2. 检查文件格式和语法
3. 参考本文档的常见问题部分
4. 查看GitHub仓库的Issues

---

**最后更新**: 2026-03-09
