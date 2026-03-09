// 博客文章数据
const posts = [
    {
        id: 1,
        title: '如何开始学习编程',
        content: '学习编程是一个循序渐进的过程，首先需要选择一门适合的编程语言，然后通过实践项目来巩固知识。本文将分享我的学习经验和建议，帮助你更快地入门编程世界。',
        excerpt: '学习编程的入门指南和实践建议',
        date: '2026-03-01',
        category: '编程'
    },
    {
        id: 2,
        title: '现代前端开发工具链',
        content: '现代前端开发涉及多种工具和技术，包括构建工具、包管理器、版本控制等。本文将介绍常用的前端开发工具链，帮助你提高开发效率。',
        excerpt: '探索现代前端开发的工具和技术',
        date: '2026-02-25',
        category: '前端'
    },
    {
        id: 3,
        title: '数据结构与算法基础',
        content: '数据结构和算法是计算机科学的基础，掌握它们对于解决复杂问题至关重要。本文将介绍常见的数据结构和算法，以及它们的应用场景。',
        excerpt: '数据结构与算法的核心概念和应用',
        date: '2026-02-20',
        category: '算法'
    },
    {
        id: 4,
        title: '人工智能发展趋势',
        content: '人工智能技术正在快速发展，从机器学习到深度学习，从自然语言处理到计算机视觉。本文将探讨AI的最新发展趋势和未来可能的应用场景。',
        excerpt: '人工智能技术的最新发展和应用前景',
        date: '2026-02-15',
        category: '人工智能'
    },
    {
        id: 5,
        title: '健康生活方式指南',
        content: '保持健康的生活方式对于工作和学习都非常重要。本文将分享一些健康生活的建议，包括饮食、运动、睡眠等方面的注意事项。',
        excerpt: '如何建立健康的生活习惯',
        date: '2026-02-10',
        category: '生活'
    },
    {
        id: 6,
        title: '人生的智慧与成长',
        content: '人生是一场漫长的旅程，每个人都在寻找属于自己的意义和价值。在这个过程中，我们会经历无数的挑战和机遇，每一次经历都是成长的契机。本文将分享一些关于人生的思考和感悟，希望能给你带来启发和力量。人生没有标准答案，重要的是找到属于自己的道路，勇敢地走下去。',
        excerpt: '关于人生的思考与成长感悟',
        date: '2026-02-05',
        category: '人生'
    }
];

// 渲染文章列表
function renderPosts(postsToRender) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    if (postsToRender.length === 0) {
        postList.innerHTML = '<p>没有找到匹配的文章</p>';
        return;
    }

    postsToRender.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h4><a href="post.html?id=${post.id}">${post.title}</a></h4>
            <div class="post-meta">${post.date} | ${post.category}</div>
            <div class="post-excerpt">${post.excerpt}</div>
            <a href="post.html?id=${post.id}" class="read-more">阅读更多</a>
        `;
        postList.appendChild(postCard);
    });
}

// 搜索功能
function setupSearch() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-input" class="search-input" placeholder="搜索文章...">
        <button id="search-button" class="search-button">搜索</button>
    `;

    const postsSection = document.querySelector('.posts .container');
    const h3 = postsSection.querySelector('h3');
    postsSection.insertBefore(searchContainer, h3.nextSibling);

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) &&
            post.content.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );
        renderPosts(filteredPosts);
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 初始化页面
function init() {
    renderPosts(posts);
    setupSearch();
}

// 当DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 文章详情页逻辑
function initPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = posts.find(p => p.id === postId);

    if (post) {
        document.title = post.title + ' | 我的博客';
        const postDetailContainer = document.getElementById('post-detail');
        if (postDetailContainer) {
            postDetailContainer.innerHTML = `
                <h2>${post.title}</h2>
                <div class="post-meta">${post.date} | ${post.category}</div>
                <div class="post-content">
                    <p>${post.content}</p>
                </div>
                <a href="index.html" class="read-more">返回首页</a>
            `;
        }
    } else {
        const postDetailContainer = document.getElementById('post-detail');
        if (postDetailContainer) {
            postDetailContainer.innerHTML = `
                <h2>文章未找到</h2>
                <p>抱歉，您请求的文章不存在。</p>
                <a href="index.html" class="read-more">返回首页</a>
            `;
        }
    }
}

// 如果是文章详情页，初始化详情页逻辑
if (window.location.pathname.includes('post.html')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPostDetail);
    } else {
        initPostDetail();
    }
}