const DOWNLOAD_URL = "https://app.mediafire.com/folder/rivp9vtaty5hr";

export const zhCN = {
  meta: {
    htmlLang: "zh-CN",
    title: "Dawnlight Shaderspack",
  },
  messages: {
    nav: {
      intro: "介绍",
      versions: "版本",
      install: "安装",
      team: "致谢",
      donate: "捐赠",
      menu: "菜单",
      menuAria: "打开导航菜单",
    },
    controls: {
      themeAria: "切换主题",
      languageAria: "切换到英文",
      languageText: "EN",
      download: "下载",
      copyEmail: "复制邮箱",
      copied: "已复制",
    },
    hero: {
      subtitle: "Based On Survivalcraft 2.4 API 1.8 (1.9 Coming Soon)",
      primaryCta: "立即下载",
      secondaryCta: "了解更多",
    },
    sections: {
      intro: "光影包介绍",
      versions: "版本下载",
      team: "项目贡献 & 致谢",
      install: "安装教程",
      community: "加入社区交流",
      feedback: "邮件反馈",
      changelog: "更新日志",
      donate: "捐赠",
    },
    community: {
      qq: "QQ群",
    },
    footer: "© 2026 Dawnlight Project | Updated 2026-04-23",
  },
  content: {
    introHtml: `
      <div class="content-box">
        <div class="intro-section">
          <p class="intro-lead">
            一款为提升 Survivalcraft 视觉体验而生的光影包，优化方块世界的细节与氛围感，兼顾视觉震撼与运行流畅度，适配各类建筑展示、生存冒险与风景观光场景，让每一次探索都充满沉浸式惊喜。
          </p>
        </div>

        <div class="showcase">
          <div class="showcase-overlap">
            <img src="/pictures/demo-1.png" class="img-small" alt="光影效果展示1" loading="lazy" decoding="async">
            <img src="/pictures/demo-2.png" class="img-large" alt="光影效果展示2" loading="lazy" decoding="async">
          </div>

          <div class="showcase-single">
            <img src="/pictures/demo-3.png" alt="光影效果展示3" loading="lazy" decoding="async">
          </div>

          <div class="showcase-pair">
            <img src="/pictures/demo-4.png" alt="光影效果展示4" loading="lazy" decoding="async">
            <img src="/pictures/demo-5.png" alt="光影效果展示5" loading="lazy" decoding="async">
          </div>
        </div>

        <div class="intro-section">
          <h3 class="section-subtitle">核心特性</h3>

          <div class="feature-group">
            <div class="feature-card">
              <div class="feature-card-title">☀️ 实时阴影与软阴影</div>
              <div class="feature-card-desc">告别生硬色块，光影过渡自然柔和，还原真实光影投射逻辑，让每一处角落都充满层次感。</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">🌿 植被交互效果</div>
              <div class="feature-card-desc">风吹草动皆有反馈，植被摇曳细腻逼真，让场景更具生机与活力。</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">☁️ 体积云与大气散射</div>
              <div class="feature-card-desc">云层层次分明，随昼夜与天气动态变化，搭配四季专属大气散射效果。</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">🌙 夜间渲染增强</div>
              <div class="feature-card-desc">搭配体积光与泛光效果，火把、灯笼等光源照亮路径的同时呈现自然光影衰减。</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">💎 PBR 材质渲染</div>
              <div class="feature-card-desc">真实物理材质渲染，还原不同方块的物理质感，金属的光泽、石头的粗糙都清晰可见。</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">💧 屏幕空间反射</div>
              <div class="feature-card-desc">地面积水、雨涟漪效果逼真，水面倒映周围景致，雨天更具沉浸感。</div>
            </div>
          </div>
        </div>

        <div class="intro-highlight">
          <p class="intro-highlight-text">
            <strong>四季适配：</strong>每一季都有独特的视觉质感。
          </p>
        </div>

        <div class="showcase">
          <div class="showcase-triple">
            <div class="showcase-placeholder">🖼️ 图片 1</div>
            <div class="showcase-placeholder">🖼️ 图片 2</div>
            <div class="showcase-placeholder">🖼️ 图片 3</div>
          </div>
        </div>

        <div class="intro-section intro-section-spaced">
          <p class="intro-paragraph">
            无需复杂配置，一键启用即可享受电影级视觉体验。Dawnlight 兼顾性能与画质，适配多数设备，让你在熟悉的方块世界中，遇见不一样的视觉盛宴。
          </p>
        </div>

        <div class="inline-points">
          <div class="inline-point">动态阴影</div>
          <div class="inline-point">SSR</div>
          <div class="inline-point">体积雾</div>
          <div class="inline-point">Bloom</div>
          <div class="inline-point">PBR</div>
          <div class="inline-point">体积云</div>
        </div>
      </div>
    `,
    installHtml: `
      <div class="content-box install-box">
        <div class="sub-block">
          <div class="sub-block-title">1️⃣ 下载光影包</div>
          <p class="sub-block-text">前往下载页面获取最新版本：</p>
          <a href="${DOWNLOAD_URL}" target="_blank" class="ext-link" rel="noopener noreferrer">MediaFire 下载页 ↗</a>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Android 安装包版本</div>
          <p class="sub-block-text">下载光影压缩包（如 <code>[2.4][Android] Dawnlight v2.5.zip</code>）</p>
          <p class="sub-block-text">找到压缩包内的 APK 文件（如 <code>Survivalcraft 2.4 With Dawnlight v2.5.apk</code>）</p>
          <div class="install-img-group">
            <img src="/pictures/apk.png" class="install-img" alt="APK 文件" loading="lazy" decoding="async">
            <img src="/pictures/apk-installed.png" class="install-img" alt="已安装 APK" loading="lazy" decoding="async">
          </div>
          <p class="sub-block-text">安装 APK 文件</p>
          <p class="sub-block-hint">💡 共存版：与官方 API 版本共存，存档独立存储于 <code>/storage/emulated/0/Survivalcraft2.4_Dawnlight/</code></p>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Windows 版本</div>
          <p class="sub-block-text">首先安装 .NET 10.0（或 9.0）运行时：</p>
          <img src="/pictures/Runtime-Win.png" class="install-img install-img-medium" alt="Windows 运行时安装" loading="lazy" decoding="async">
          <p class="sub-block-text">下载光影压缩包（如 <code>[2.4][Win64] Dawnlight v2.5.zip</code>）</p>
          <img src="/pictures/Zip-Win.png" class="install-img install-img-medium" alt="Windows 压缩包" loading="lazy" decoding="async">
          <img src="/pictures/Folder-Win.png" class="install-img install-img-medium" alt="Windows 文件夹" loading="lazy" decoding="async">
          <p class="sub-block-text">解压并启动：</p>
          <span class="code-label">目录结构</span>
          <pre><code class="language-plaintext">Folder/
└─ Survivalcraft.exe</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Mod 版本</div>
          <p class="sub-block-text">解压并放入目录：</p>
          <span class="code-label">目录结构</span>
          <pre><code class="language-plaintext">Survivalcraft/
└─ Mods/
   └─ Dawnlight.scmod</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Linux 版本</div>
          <p class="sub-block-text">首先安装 .NET 10.0（或 9.0）运行时：</p>
          <span class="code-label">Ubuntu | Debian</span>
          <pre><code class="language-bash"># 更新包列表
sudo apt update

# 安装 .NET 10.0 运行时
sudo apt install -y dotnet-runtime-10.0

# 检查安装是否成功
dotnet --list-runtimes

# 或查看版本
dotnet --info</code></pre>
          <span class="code-label">Arch | Manjaro</span>
          <pre><code class="language-bash"># 更新包数据库
sudo pacman -Syu

# 安装 .NET 10.0 运行时
sudo pacman -S dotnet-runtime-10.0

# 检查版本
dotnet --version</code></pre>
          <div class="install-img-group">
            <img src="/pictures/Commandline-Linux.png" class="install-img install-img-narrow" alt="Linux 命令行" loading="lazy" decoding="async">
            <img src="/pictures/Gaming-Linux.png" class="install-img install-img-medium" alt="Linux 游戏" loading="lazy" decoding="async">
          </div>
          <p class="sub-block-text">解压并启动：</p>
          <span class="code-label">命令行</span>
          <pre><code class="language-bash">user@localmachine:~# ./Survivalcraft</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">3️⃣ 启动游戏</div>
          <p class="sub-block-text">确保版本匹配后启动游戏即可体验光影效果。</p>
          <p class="sub-block-text">游戏内按下 U 键可调用光影菜单。</p>
        </div>

        <details class="install-more">
          <summary>推荐配置 & 常见问题</summary>

          <p class="sub-block-title">推荐配置</p>
          <span class="code-label">硬件要求</span>
          <pre><code class="language-plaintext">CPU:
  AMD Ryzen 5 6600H
  Intel i5-12500H

内存:
  12GB DDR4 3200

显卡:
  NVIDIA 1060
  AMD RX580
  Intel Arc A580

光影配置:
  ViewDistance = 368
  Shadow = ON
  VolumetricLight = ON
  WaterEffect = ON</code></pre>

          <p class="sub-block-hint">⌨️ 菜单快捷键：<strong>U</strong>（暂不支持更改热键）</p>
          <p class="sub-block-hint">📱 手机端推荐性能优化：更好的树叶[关闭]，软阴影[关闭]，波浪更新[禁用]</p>
          <p class="sub-block-hint">🎨 若视觉上屏幕过亮或对比度过高，可以在设置中切换 Tonemapping（色调映射）</p>
          <p class="sub-block-hint">⚠️ [Android] 联发科设备可能由于不支持 SSBO 特性导致兼容性问题，若遇到请尝试更换其他平台的处理器</p>
          <p class="sub-block-hint">⚠️ [Linux] 若生成世界时崩溃，请先将视距调整至最低，等待进入游戏后再恢复视距</p>

          <br>
          <p class="sub-block-text">关于 API 版本、模组安装：Dawnlight 2.5 的 API 版本为 1.8.2.3，但接口和依赖版本并非与中文官方版完全一致，且光影对渲染管线等进行了修改，可能导致模组兼容性问题。</p>
          <p class="sub-block-text">若您遇到了这类问题，请发送邮件到 <code>annularwind@outlook.com</code>，或加入 Discord / QQ 开发群进行反馈。</p>
          <p class="sub-block-text">目前已知兼容的模组：美好时代、十亿伏特、铃兰辅助等，欢迎继续补充。</p>
          <br>

          <p class="sub-block-text">
            若出现性能问题，请参考
            <a href="https://example.com/faq" target="_blank" class="ext-link" rel="noopener noreferrer">性能优化指南 ↗</a>
          </p>
        </details>
      </div>
    `,
    versionGroups: [
      {
        id: "beta",
        label: "测试版更新",
        items: [
          {
            version: "v3.0",
            tagLabel: "Beta",
            tagType: "beta",
            description: "大气与 PBR - 即将推出",
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
    ],
    changelogGroups: [
      {
        version: "v3.0 [Coming Soon]",
        type: "minor",
        date: "Expected 2026-05",
        items: [
          { icon: "✨", type: "added", text: "添加适配四季的大气散射" },
          { icon: "✨", type: "added", text: "全新版本的体积云" },
          { icon: "✨", type: "added", text: "支持部分方块的 PBR 纹理" },
          { icon: "✨", type: "added", text: "海洋及地面积水支持反射天空" },
          { icon: "⚡", type: "improved", text: "SSR 反射法线优化，阴影 / 体积云性能优化" },
          { icon: "🔄", type: "changed", text: "重构阴影系统，减少偏移，降低浮空感" },
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
    ],
    teamRows: [
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
    ],
    donationSections: [
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
        buttonLabel: "展开赞赏列表（不定期更新）",
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
    ],
  },
};
