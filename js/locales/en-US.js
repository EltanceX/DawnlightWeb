const DOWNLOAD_URL = "https://app.mediafire.com/folder/rivp9vtaty5hr";

export const enUS = {
  meta: {
    htmlLang: "en-US",
    title: "Dawnlight Shaderspack",
  },
  messages: {
    nav: {
      intro: "Intro",
      versions: "Versions",
      install: "Install",
      team: "Credits",
      donate: "Donate",
      menu: "Menu",
      menuAria: "Open navigation menu",
    },
    controls: {
      themeAria: "Toggle theme",
      languageAria: "Switch to Chinese",
      languageText: "中",
      download: "Download",
      copyEmail: "Copy Email",
      copied: "Copied",
    },
    hero: {
      subtitle: "Based On Survivalcraft 2.4 API 1.8 (1.9 Coming Soon)",
      primaryCta: "Download Now",
      secondaryCta: "Learn More",
    },
    sections: {
      intro: "About the Shader Pack",
      versions: "Downloads",
      team: "Project Credits & Thanks",
      install: "Installation Guide",
      community: "Join the Conversation",
      feedback: "Email Feedback",
      changelog: "Changelog",
      donate: "Donate",
    },
    community: {
      qq: "QQ Group",
    },
    footer: "© 2026 Dawnlight Project | Updated 2026-04-23",
  },
  content: {
    introHtml: `
      <div class="content-box">
        <div class="intro-section">
          <p class="intro-lead">
            A shader pack built to elevate the visual experience of Survivalcraft. It enhances detail, atmosphere, and immersion while keeping performance practical for everyday play, builds, adventures, and scenic exploration.
          </p>
        </div>

        <div class="showcase">
          <div class="showcase-overlap">
            <img src="/pictures/demo-1.png" class="img-small" alt="Shader showcase 1" loading="lazy" decoding="async">
            <img src="/pictures/demo-2.png" class="img-large" alt="Shader showcase 2" loading="lazy" decoding="async">
          </div>

          <div class="showcase-single">
            <img src="/pictures/demo-3.png" alt="Shader showcase 3" loading="lazy" decoding="async">
          </div>

          <div class="showcase-pair">
            <img src="/pictures/demo-4.png" alt="Shader showcase 4" loading="lazy" decoding="async">
            <img src="/pictures/demo-5.png" alt="Shader showcase 5" loading="lazy" decoding="async">
          </div>
        </div>

        <div class="intro-section">
          <h3 class="section-subtitle">Core Features</h3>

          <div class="feature-group">
            <div class="feature-card">
              <div class="feature-card-title">☀️ Real-time Shadows & Soft Shadows</div>
              <div class="feature-card-desc">Natural shadow transitions replace flat shading and bring more believable depth to every scene.</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">🌿 Vegetation Interaction</div>
              <div class="feature-card-desc">Subtle movement in grass and foliage makes environments feel more alive and reactive.</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">☁️ Volumetric Clouds & Atmospheric Scattering</div>
              <div class="feature-card-desc">Layered clouds and seasonal sky tones shift dynamically with time of day and weather.</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">🌙 Enhanced Night Rendering</div>
              <div class="feature-card-desc">Torches, lanterns, bloom, and volumetric lighting create richer nighttime ambience.</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">💎 PBR Material Rendering</div>
              <div class="feature-card-desc">Physically based shading helps metals, stone, glass, and other surfaces feel more grounded.</div>
            </div>

            <div class="feature-card">
              <div class="feature-card-title">💧 Screen Space Reflections</div>
              <div class="feature-card-desc">Wet ground, puddles, and rainy scenes gain extra depth through reflective surfaces.</div>
            </div>
          </div>
        </div>

        <div class="intro-highlight">
          <p class="intro-highlight-text">
            <strong>Season-ready:</strong> each season comes with its own visual tone and atmosphere.
          </p>
        </div>

        <div class="showcase">
          <div class="showcase-triple">
            <div class="showcase-placeholder">🖼️ Image 1</div>
            <div class="showcase-placeholder">🖼️ Image 2</div>
            <div class="showcase-placeholder">🖼️ Image 3</div>
          </div>
        </div>

        <div class="intro-section intro-section-spaced">
          <p class="intro-paragraph">
            No complicated setup is required. Enable it and get a more cinematic look right away. Dawnlight balances image quality and performance so most devices can enjoy a more striking Survivalcraft world.
          </p>
        </div>

        <div class="inline-points">
          <div class="inline-point">Dynamic Shadows</div>
          <div class="inline-point">SSR</div>
          <div class="inline-point">Volumetric Fog</div>
          <div class="inline-point">Bloom</div>
          <div class="inline-point">PBR</div>
          <div class="inline-point">Volumetric Clouds</div>
        </div>
      </div>
    `,
    installHtml: `
      <div class="content-box install-box">
        <div class="sub-block">
          <div class="sub-block-title">1️⃣ Download the shader pack</div>
          <p class="sub-block-text">Get the latest release from the download page:</p>
          <a href="${DOWNLOAD_URL}" target="_blank" class="ext-link" rel="noopener noreferrer">MediaFire Download Page ↗</a>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Android package version</div>
          <p class="sub-block-text">Download the shader archive, for example <code>[2.4][Android] Dawnlight v2.5.zip</code>.</p>
          <p class="sub-block-text">Find the APK inside the archive, for example <code>Survivalcraft 2.4 With Dawnlight v2.5.apk</code>.</p>
          <div class="install-img-group">
            <img src="/pictures/apk.png" class="install-img" alt="APK file" loading="lazy" decoding="async">
            <img src="/pictures/apk-installed.png" class="install-img" alt="Installed APK" loading="lazy" decoding="async">
          </div>
          <p class="sub-block-text">Install the APK file.</p>
          <p class="sub-block-hint">💡 Coexisting build: it can be installed alongside the official API build, with saves stored separately in <code>/storage/emulated/0/Survivalcraft2.4_Dawnlight/</code>.</p>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Windows version</div>
          <p class="sub-block-text">Install the .NET 10.0 (or 9.0) runtime first:</p>
          <img src="/pictures/Runtime-Win.png" class="install-img install-img-medium" alt="Windows runtime installation" loading="lazy" decoding="async">
          <p class="sub-block-text">Download the shader archive, for example <code>[2.4][Win64] Dawnlight v2.5.zip</code>.</p>
          <img src="/pictures/Zip-Win.png" class="install-img install-img-medium" alt="Windows archive" loading="lazy" decoding="async">
          <img src="/pictures/Folder-Win.png" class="install-img install-img-medium" alt="Windows folder" loading="lazy" decoding="async">
          <p class="sub-block-text">Extract and launch:</p>
          <span class="code-label">Folder Layout</span>
          <pre><code class="language-plaintext">Folder/
└─ Survivalcraft.exe</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Mod version</div>
          <p class="sub-block-text">Extract the file into this directory:</p>
          <span class="code-label">Folder Layout</span>
          <pre><code class="language-plaintext">Survivalcraft/
└─ Mods/
   └─ Dawnlight.scmod</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">2️⃣ Linux version</div>
          <p class="sub-block-text">Install the .NET 10.0 (or 9.0) runtime first:</p>
          <span class="code-label">Ubuntu | Debian</span>
          <pre><code class="language-bash"># Update package list
sudo apt update

# Install the .NET 10.0 runtime
sudo apt install -y dotnet-runtime-10.0

# Verify installation
dotnet --list-runtimes

# Or check runtime info
dotnet --info</code></pre>
          <span class="code-label">Arch | Manjaro</span>
          <pre><code class="language-bash"># Update package database
sudo pacman -Syu

# Install the .NET 10.0 runtime
sudo pacman -S dotnet-runtime-10.0

# Check version
dotnet --version</code></pre>
          <div class="install-img-group">
            <img src="/pictures/Commandline-Linux.png" class="install-img install-img-narrow" alt="Linux terminal" loading="lazy" decoding="async">
            <img src="/pictures/Gaming-Linux.png" class="install-img install-img-medium" alt="Linux gameplay" loading="lazy" decoding="async">
          </div>
          <p class="sub-block-text">Extract and launch:</p>
          <span class="code-label">Command Line</span>
          <pre><code class="language-bash">user@localmachine:~# ./Survivalcraft</code></pre>
        </div>

        <div class="sub-block">
          <div class="sub-block-title">3️⃣ Launch the game</div>
          <p class="sub-block-text">Make sure the versions match, then start the game and enjoy the shader effects.</p>
          <p class="sub-block-text">Press <strong>U</strong> in-game to open the shader menu.</p>
        </div>

        <details class="install-more">
          <summary>Recommended Setup & FAQ</summary>

          <p class="sub-block-title">Recommended Hardware</p>
          <span class="code-label">Reference Specs</span>
          <pre><code class="language-plaintext">CPU:
  AMD Ryzen 5 6600H
  Intel i5-12500H

Memory:
  12GB DDR4 3200

GPU:
  NVIDIA 1060
  AMD RX580
  Intel Arc A580

Shader Settings:
  ViewDistance = 368
  Shadow = ON
  VolumetricLight = ON
  WaterEffect = ON</code></pre>

          <p class="sub-block-hint">⌨️ Menu hotkey: <strong>U</strong> (currently not remappable)</p>
          <p class="sub-block-hint">📱 Suggested mobile optimizations: Better Leaves [Off], Soft Shadows [Off], Wave Update [Disabled]</p>
          <p class="sub-block-hint">🎨 If the image looks too bright or contrast-heavy, try changing Tonemapping in the settings.</p>
          <p class="sub-block-hint">⚠️ [Android] Some MediaTek devices may have compatibility issues because SSBO is not fully supported.</p>
          <p class="sub-block-hint">⚠️ [Linux] If world generation crashes, lower view distance first, enter the game, then raise it again.</p>

          <br>
          <p class="sub-block-text">About API compatibility: Dawnlight 2.5 targets API version 1.8.2.3, but some interfaces and dependencies differ from the Chinese official build. Shader-side rendering changes may also affect mod compatibility.</p>
          <p class="sub-block-text">If you run into this kind of problem, send feedback to <code>annularwind@outlook.com</code> or report it in the Discord / QQ development group.</p>
          <p class="sub-block-text">Known compatible mods currently include Better Times, Billion Volts, and Lily Assistant. More confirmations are welcome.</p>
          <br>

          <p class="sub-block-text">
            If you encounter performance issues, please see the
            <a href="https://example.com/faq" target="_blank" class="ext-link" rel="noopener noreferrer">performance optimization guide ↗</a>.
          </p>
        </details>
      </div>
    `,
    versionGroups: [
      {
        id: "beta",
        label: "Beta Updates",
        items: [
          {
            version: "v3.0",
            tagLabel: "Beta",
            tagType: "beta",
            description: "Atmosphere & PBR - Coming Soon",
            href: DOWNLOAD_URL,
            disabled: true,
          },
        ],
      },
      {
        id: "stable",
        label: "Stable Releases",
        items: [
          {
            version: "v2.56",
            tagLabel: "Latest",
            tagType: "latest",
            description: "Ocean update and optimization (Win+Android+Linux) - Recommended",
            href: DOWNLOAD_URL,
          },
          {
            version: "v2.50",
            tagLabel: "Stable",
            tagType: "stable",
            description: "Ocean update (Win+Android+Linux)",
            href: DOWNLOAD_URL,
          },
          {
            version: "v2.01",
            tagLabel: "Stable",
            tagType: "stable",
            description: "Point lights + volumetric clouds (Windows Only)",
            href: DOWNLOAD_URL,
          },
        ],
      },
      {
        id: "legacy",
        label: "Legacy Versions",
        items: [
          {
            version: "v1.04",
            tagLabel: "Legacy",
            tagType: "legacy",
            description: "SSR + Real-time shadows (Scmod)",
            href: DOWNLOAD_URL,
          },
          {
            version: "v1.02",
            tagLabel: "Legacy",
            tagType: "legacy",
            description: "Base shader build (Scmod)",
            href: DOWNLOAD_URL,
          },
          {
            version: "v1.00",
            tagLabel: "Legacy",
            tagType: "legacy",
            description: "First public preview (Windows Only)",
            href: DOWNLOAD_URL,
          },
          {
            version: "v0.95",
            tagLabel: "Legacy",
            tagType: "legacy",
            description: "Internal test build - SSR",
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
          { icon: "✨", type: "added", text: "Added seasonal atmospheric scattering support" },
          { icon: "✨", type: "added", text: "A brand-new volumetric cloud implementation" },
          { icon: "✨", type: "added", text: "PBR textures for selected blocks" },
          { icon: "✨", type: "added", text: "Sky reflections on oceans and ground puddles" },
          { icon: "⚡", type: "improved", text: "Optimized SSR normals plus shadow and cloud performance" },
          { icon: "🔄", type: "changed", text: "Refactored the shadow system to reduce offset and floating" },
          { icon: "🐛", type: "fixed", text: "Fixed abnormal brightness on stair rendering" },
          { icon: "🐛", type: "fixed", text: "Fixed vine brightness and missing face rendering issues" },
        ],
      },
      {
        version: "v2.5x",
        type: "major",
        date: "2026-02",
        items: [
          { icon: "✨", type: "added", text: "Added ocean rendering with dynamic waves and reflections" },
          { icon: "✨", type: "added", text: "Added native Linux platform support" },
          { icon: "⚡", type: "improved", text: "Improved volumetric cloud performance by roughly 15%" },
          { icon: "🔄", type: "changed", text: "Reworked the PBR material system for stronger metal and glass" },
        ],
      },
      {
        version: "v2.0x",
        type: "major",
        date: "2025-11",
        items: [
          { icon: "✨", type: "added", text: "Added point lights for torches, lanterns, and other light sources" },
          { icon: "✨", type: "added", text: "Added volumetric clouds with day-night changes" },
          { icon: "✨", type: "added", text: "Added four seasonal presets with unique moods" },
          { icon: "⚡", type: "improved", text: "Improved shadow rendering to reduce jagged edges" },
          { icon: "🔄", type: "changed", text: "Refined bloom for a softer and more natural glow" },
          { icon: "🐛", type: "fixed", text: "Fixed missing water reflections during rain" },
        ],
      },
      {
        version: "v1.0x",
        type: "major",
        date: "2025-08",
        items: [
          { icon: "✨", type: "added", text: "Initial release with screen space reflections" },
          { icon: "✨", type: "added", text: "Implemented real-time dynamic shadows" },
          { icon: "✨", type: "added", text: "Added volumetric fog with depth-aware rendering" },
          { icon: "✨", type: "added", text: "Added Android mobile platform support" },
          { icon: "⚡", type: "improved", text: "Introduced the basic shader settings menu with U hotkey" },
        ],
      },
      {
        version: "v0.9x",
        type: "patch",
        date: "2025-05",
        items: [
          { icon: "✨", type: "added", text: "Internal test release with the base shader framework" },
          { icon: "✨", type: "added", text: "SSR preview build" },
          { icon: "⚡", type: "improved", text: "Initial shadow rendering implementation" },
          { icon: "🐛", type: "fixed", text: "Fixed early memory leak issues" },
          { icon: "🗑️", type: "removed", text: "Removed old fixed-pipeline legacy code" },
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
          names: ["The Forgotten Cyan Swordsman"],
          details: ["Algorithm", "Technical Support"],
        },
      ],
      [
        {
          avatar: "X",
          names: ["Xiaofeng Dizhu"],
          details: ["Firefly", "Interface Support"],
        },
        {
          avatar: "T",
          names: ["Tp_16b Invisible Guardian 69Cat", "Red to the Black Sea"],
          details: ["Testing", "Feedback"],
        },
        {
          avatar: "P",
          names: ["Player - You"],
          details: ["Thank you for your support and company!"],
        },
      ],
    ],
    donationSections: [
      {
        id: "donation-code",
        buttonLabel: "Show QR Code",
        buttonExpandedLabel: "Hide QR Code",
        items: [
          {
            type: "image",
            src: "/pictures/donate.jpg",
            alt: "Donation QR code",
          },
        ],
      },
      {
        id: "donation-list",
        buttonLabel: "Show Donor List (updated occasionally)",
        buttonExpandedLabel: "Hide Donor List",
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
