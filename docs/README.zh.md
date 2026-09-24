# Sulparang Ambient Free 0.1.2

## 通过 HACS 仓库地址安装

在已安装 HACS 的 Home Assistant 中添加免费版。仓库类型请选择 Dashboard（仪表板）。

尚未安装 HACS？请先按照官方指南进行设置。 [HACS](https://www.hacs.xyz/docs/use/download/download/)

### 1. 打开自定义仓库

在 Home Assistant 中打开 HACS，点击右上角 ⋮ 菜单 → Custom repositories（自定义仓库）。

### 2. 添加仓库地址

粘贴下方地址，将类型设为 Dashboard（仪表板），然后点击 Add（添加）。

```
https://github.com/glory-stone/sulparang-ambient
```

### 3. 下载免费版

在 HACS 中搜索并打开 Sulparang Ambient，点击下载，完成后刷新浏览器。尚未列入默认目录，请先添加自定义仓库。

### 4. 添加仪表板卡片

编辑仪表板 → 添加卡片 → 手动，保存下方配置。点击声音图标即可在当前设备上播放。

```
type: custom:sulparang-ambient
language: zh
```

如果找不到卡片，请在设置 → 仪表板 → 资源中确认下方地址的类型为 JavaScript 模块。YAML 仪表板可能需要手动注册。从手动安装切换时，请移除旧的 /local/sulparang-ambient/ 资源，仅保留 HACS 资源。

```
/hacsfiles/sulparang-ambient/sulparang-ambient.js
```

在 HACS 中下载更新后刷新浏览器。卸载时，请移除仪表板卡片及 HACS 中的下载。

## 使用 ZIP 手动安装


需要 Home Assistant 管理员账户及配置文件夹访问权限。请使用支持 Web Audio 的 Chrome、Edge、Firefox 或 Safari 浏览器。

## 1. 下载并解压

解压 ZIP，保留 sulparang-ambient 文件夹中的 JavaScript 文件和 MP3 文件。

## 2. 复制到 Home Assistant

通过 Samba、Studio Code Server 等工具将整个文件夹复制到下方路径。没有 www 时请创建；首次创建后重启 Home Assistant。Container 安装使用配置卷中的 www。

```
/config/www/sulparang-ambient/
  sulparang-ambient.js
  rain.mp3
  fire.mp3
```

## 3. 注册资源

在个人资料中启用高级模式。打开设置 → 仪表盘 → 右上角菜单 → 资源，添加以下 URL，类型选择 JavaScript 模块。

```
/local/sulparang-ambient/sulparang-ambient.js?v=0.1.2
```

## 4. 添加卡片

编辑仪表盘 → 添加卡片 → 手动，粘贴并保存以下配置。语言可选 ko、en、zh、es、ja。

```
type: custom:sulparang-ambient
language: zh
```

## 5. 刷新并聆听

刷新页面并点击声音图标，再次点击即可停止。选择多个声音即可混合播放，声音从当前浏览器的输出设备播放。

## 6. 更新或卸载

更新前备份旧文件夹，替换文件并修改资源 URL 的版本后刷新。卸载时先移除卡片与资源，再删除 sulparang-ambient 文件夹。

## FAQ

### 找不到自定义卡片？

检查资源 URL 和 JavaScript 模块类型。在已登录的浏览器中打开 /local/sulparang-ambient/sulparang-ambient.js，然后强制刷新。

### 没有声音？

检查设备音量、浏览器标签页静音和输出设备。MP3 文件必须位于 JavaScript 文件旁。浏览器可能需要首次点击才允许播放。

### 能控制远程扬声器吗？

免费版只在当前浏览器播放，不包含远程扬声器控制、广播、整点报时或系统监控。
