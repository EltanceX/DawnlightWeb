export const DOWNLOAD_URL = "https://app.mediafire.com/folder/rivp9vtaty5hr";

export const versionGroups = [
  {
    id: "beta",
    label: "测试版更新",
    items: [
      {
        version: "v3.0",
        tagLabel: "Beta",
        tagType: "beta",
        description: "大气与PBR - 即将推出",
        href: DOWNLOAD_URL,
        disabled: true,
      },
    ],
  },
  {
    id: "stable",
    label: "稳定版本",
    items: [
      {
        version: "v2.56",
        tagLabel: "最新",
        tagType: "latest",
        description: "海洋更新与优化 (Win+Android+Linux) - 推荐使用",
        href: DOWNLOAD_URL,
      },
      {
        version: "v2.50",
        tagLabel: "稳定",
        tagType: "stable",
        description: "海洋更新 (Win+Android+Linux)",
        href: DOWNLOAD_URL,
      },
      {
        version: "v2.01",
        tagLabel: "稳定",
        tagType: "stable",
        description: "点光源 + 体积云 (Windows Only)",
        href: DOWNLOAD_URL,
      },
    ],
  },
  {
    id: "legacy",
    label: "历史版本",
    items: [
      {
        version: "v1.04",
        tagLabel: "历史",
        tagType: "legacy",
        description: "SSR + 实时阴影 (Scmod)",
        href: DOWNLOAD_URL,
      },
      {
        version: "v1.02",
        tagLabel: "历史",
        tagType: "legacy",
        description: "基础光影版 (Scmod)",
        href: DOWNLOAD_URL,
      },
      {
        version: "v1.00",
        tagLabel: "历史",
        tagType: "legacy",
        description: "首个公测版本 (Windows Only)",
        href: DOWNLOAD_URL,
      },
      {
        version: "v0.95",
        tagLabel: "历史",
        tagType: "legacy",
        description: "内测版本 - SSR",
        href: DOWNLOAD_URL,
      },
    ],
  },
];

export const changelogGroups = [
  {
    version: "v3.0 [Coming Soon]",
    type: "minor",
    date: "Expected 2026-05",
    items: [
      { icon: "✨", type: "added", text: "添加适配四季的大气散射" },
      { icon: "✨", type: "added", text: "全新版本的体积云" },
      { icon: "✨", type: "added", text: "支持部分方块的PBR纹理" },
      { icon: "✨", type: "added", text: "海洋及地面积水支持反射天空" },
      { icon: "⚡", type: "improved", text: "SSR反射法线优化，阴影/体积云性能优化" },
      { icon: "🔄", type: "changed", text: "重构阴影系统，减少偏移降低浮空感" },
      { icon: "🐛", type: "fixed", text: "修复楼梯渲染亮度异常问题" },
      { icon: "🐛", type: "fixed", text: "修复藤蔓亮度与部分面不渲染的问题" },
    ],
  },
  {
    version: "v2.5x",
    type: "major",
    date: "2026-02",
    items: [
      { icon: "✨", type: "added", text: "新增海洋渲染效果，支持动态波浪和水面反射" },
      { icon: "✨", type: "added", text: "添加 Linux 平台原生支持" },
      { icon: "⚡", type: "improved", text: "优化体积云渲染性能，帧率提升约 15%" },
      { icon: "🔄", type: "changed", text: "重构 PBR 材质系统，提升金属和玻璃质感" },
    ],
  },
  {
    version: "v2.0x",
    type: "major",
    date: "2025-11",
    items: [
      { icon: "✨", type: "added", text: "新增点光源系统，支持火把、灯笼等动态光源" },
      { icon: "✨", type: "added", text: "添加体积云效果，支持昼夜动态变化" },
      { icon: "✨", type: "added", text: "新增四季光影预设，每季独特视觉风格" },
      { icon: "⚡", type: "improved", text: "优化阴影渲染算法，减少锯齿感" },
      { icon: "🔄", type: "changed", text: "改进 Bloom 效果，光晕更加自然柔和" },
      { icon: "🐛", type: "fixed", text: "修复雨天水面反射丢失的问题" },
    ],
  },
  {
    version: "v1.0x",
    type: "major",
    date: "2025-08",
    items: [
      { icon: "✨", type: "added", text: "首次发布，支持 SSR 屏幕空间反射" },
      { icon: "✨", type: "added", text: "实现实时动态阴影系统" },
      { icon: "✨", type: "added", text: "添加体积雾效果，支持深度感知" },
      { icon: "✨", type: "added", text: "支持 Android 移动端平台" },
      { icon: "⚡", type: "improved", text: "基础光影配置界面，支持快捷键 U 调用" },
    ],
  },
  {
    version: "v0.9x",
    type: "patch",
    date: "2025-05",
    items: [
      { icon: "✨", type: "added", text: "内测版本发布，基础光影框架" },
      { icon: "✨", type: "added", text: "SSR 反射效果预览" },
      { icon: "⚡", type: "improved", text: "基础阴影渲染实现" },
      { icon: "🐛", type: "fixed", text: "修复早期版本内存泄漏问题" },
      { icon: "🗑️", type: "removed", text: "移除旧版固定管线代码" },
    ],
  },
];

export const teamRows = [
  [
    {
      avatar: "E",
      names: ["EltanceX"],
      details: ["Author", "annularwind@outlook.com"],
    },
    {
      avatar: "B",
      names: ["被遗忘的青色剑士"],
      details: ["算法", "技术支持"],
    },
  ],
  [
    {
      avatar: "X",
      names: ["销锋镝铸"],
      details: ["萤火虫", "接口支持"],
    },
    {
      avatar: "T",
      names: ["Tp_16b 隐形守护者 69猫", "把红色赋予黑海"],
      details: ["测试", "意见反馈"],
    },
    {
      avatar: "P",
      names: ["玩家 - 您"],
      details: ["感谢各位玩家的陪伴与支持！"],
    },
  ],
];

export const donationSections = [
  {
    id: "donation-code",
    buttonLabel: "展开赞赏码",
    buttonExpandedLabel: "收起赞赏码",
    items: [
      {
        type: "image",
        src: "/pictures/donate.jpg",
        alt: "赞赏码",
      },
    ],
  },
  {
    id: "donation-list",
    buttonLabel: "展开赞赏列表(不定期更新)",
    buttonExpandedLabel: "收起赞赏列表",
    items: [
      {
        type: "entry",
        name: "VoxelPhysics",
        version: "-",
        date: "1970-01-01",
      },
    ],
  },
];
