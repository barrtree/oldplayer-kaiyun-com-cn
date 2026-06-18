const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      keywords: ["开云", "主页", "游戏"],
      items: [
        { name: "平台介绍", url: "https://www.oldplayer-kaiyun.com.cn/about" },
        { name: "新手指南", url: "https://www.oldplayer-kaiyun.com.cn/guide" }
      ]
    },
    {
      id: "news",
      title: "新闻动态",
      keywords: ["开云", "资讯", "更新"],
      items: [
        { name: "版本更新", url: "https://www.oldplayer-kaiyun.com.cn/news/update" },
        { name: "活动公告", url: "https://www.oldplayer-kaiyun.com.cn/news/events" }
      ]
    },
    {
      id: "community",
      title: "玩家社区",
      keywords: ["开云", "论坛", "讨论"],
      items: [
        { name: "热门话题", url: "https://www.oldplayer-kaiyun.com.cn/community/hot" },
        { name: "攻略分享", url: "https://www.oldplayer-kaiyun.com.cn/community/tips" }
      ]
    },
    {
      id: "support",
      title: "客服支持",
      keywords: ["开云", "帮助", "FAQ"],
      items: [
        { name: "常见问题", url: "https://www.oldplayer-kaiyun.com.cn/support/faq" },
        { name: "联系客服", url: "https://www.oldplayer-kaiyun.com.cn/support/contact" }
      ]
    }
  ],

  getSectionById: function(id) {
    return this.sections.find(section => section.id === id) || null;
  },

  search: function(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];
    this.sections.forEach(section => {
      const matchedItems = section.items.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
      );
      if (matchedItems.length > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          items: matchedItems
        });
      }
    });
    return results;
  },

  getKeywordCount: function() {
    const keywordMap = {};
    this.sections.forEach(section => {
      section.keywords.forEach(kw => {
        if (!keywordMap[kw]) keywordMap[kw] = 0;
        keywordMap[kw]++;
      });
    });
    return keywordMap;
  },

  filterByKeyword: function(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return this.sections
      .filter(section =>
        section.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
      )
      .map(section => ({
        sectionId: section.id,
        sectionTitle: section.title,
        items: section.items
      }));
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = contentMap;
}