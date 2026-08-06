# GenP — Adobe CC 通用补丁工具

GenP 是一款用 AutoIt 编写的开源 Adobe 补丁工具，通过对 Adobe Creative Cloud 应用程序文件应用二进制十六进制补丁，修改其许可验证行为。它支持 Windows 10 和 11 上的整个 Creative Cloud 套件。

## 项目结构

```text
.
├── GenP/
│   ├── resources/
│   │   ├── com.adobe.ccx.start-10.8.1/  # CCX 启动界面/主页插件模块
│   │   ├── mitmproxy/                   # 代理拦截与反编译工具
│   │   ├── RemoveGudeLogs.ps1           # Adobe 验证日志清理脚本
│   │   ├── UpdateHostsFile.ps1          # Hosts 文件自动更新脚本
│   │   └── hosts                        # 预设的 Adobe 验证域名屏蔽列表
│   ├── GenP-v4.2.1.au3                  # AutoIt 主程序源代码
│   ├── config.ini                       # 补丁规则与目标特征文件
│   └── Skull.ico                        # 应用图标
├── WinTrust/
│   ├── patch_wintrust.ps1               # wintrust.dll Hex 补丁脚本
│   └── wintrust.dll                     # 微软官方原版 wintrust.dll
├── UPX/
│   └── upx-5.0.1-win64.zip              # UPX 官方发布包（用于给生成的 .exe 打壳压缩）
├── build.ps1                            # PowerShell 7 构建脚本（管理员）
├── verify_binaries.py                   # 二进制校验脚本
└── README.md
```

## 构建

以管理员身份运行 `build.ps1`：

1. 下载 AutoIt 和 SciTE
2. 修补 `wintrust.dll`
3. 将 `.au3` 源代码编译为可执行文件

编译后的 `.exe` 将输出到 `Release/` 中。

向 `main` 分支推送代码或提交 Tag 后，也会通过 GitHub Actions 自动构建。

## 二进制文件验证

仓库根目录包含两个来自上游 GenP 补丁开发者的第三方二进制文件。为确保它们未被篡改，请对照官渠以验证：

| 二进制文件        | 来源                                                               | 验证方法                                                                                             |
| ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `upx-*-win64.zip` | [github.com/upx/upx/releases](https://github.com/upx/upx/releases) | 与对应 GitHub 发布版本的 SHA-256 进行比较                                                            |
| `wintrust.dll`    | Microsoft Windows（原版，未修改）                                  | 在 [winbindex](https://winbindex.m417z.com/) 中查询 SHA-256，确认其为已知的 Microsoft 签名二进制文件 |

仓库中的 `wintrust.dll` 是**未经修改**的 Microsoft DLL。在构建时，会由 `patch_wintrust.ps1` 对其进行修补（偏移量 `0x1C86`–`0x1C87` 处的两个字节）。

**本地验证：**

```pwsh
python verify_binaries.py          # 检查第三方二进制文件哈希
```

在每次发布构建前的 CI 流程中，此检查也会自动运行。
