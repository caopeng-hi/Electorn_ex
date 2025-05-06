##### Electron 自动更新

- Electron 内置了 autoUpdater 模块，它利用 GitHub Releases 或自建服务器的方式获取新版本信息并进行更新。当检测到新版本时，它能自动下载并安装新的更新包，从而实现了无缝、便捷的更新体验。

```javaScript
const { autoUpdater } = require("electron-updater");
// 初始化自动更新器
autoUpdater.checkForUpdatesAndNotify();

// 监听更新事件
autoUpdater.on('update-available', () => {
  console.log('发现新版本');
});
// 更新下载完成
autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall();
});

```

##### 配置更新服务器

1.  使用 GitHub Releases： 如果你的项目托管在 GitHub 上，可以非常方便地利用 electron-updater 库配合 GitHub Releases 实现自动更新。只需在主进程初始化时设置 provider 为 github 并配置相应的 repository 信息即可。

2.  自建更新服务器： 若选择自建更新服务器，则需确保服务器能够根据特定协议（如 Squirrel ）返回正确的更新信息。这通常包括一个 JSON 文件，列出所有可用版本及其下载地址。

##### mac 打包遇到的权限问题

- 在 macOS 或 Linux 上，可能会遇到权限问题。你可以尝试使用 sudo 来解决：
