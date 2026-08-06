# GenP — Adobe CC 通用补丁工具

GenP 是一款用 AutoIt 编写的开源 Adobe 补丁工具，通过对 Adobe Creative Cloud 应用程序文件应用二进制十六进制补丁，修改其许可验证行为。它支持 Windows 10 和 11 上的整个 Creative Cloud 套件。

## 二进制文件验证

仓库根目录中包含两个第三方二进制文件，它们并非由本仓库生成，而是来自上游的 GenP 补丁开发者。为确保它们未被篡改，我们会对照官方来源进行验证：

| 二进制文件        | 来源                                                               | 验证方法                                                                                             |
| ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `upx-*-win64.zip` | [github.com/upx/upx/releases](https://github.com/upx/upx/releases) | 与对应 GitHub 发布版本的 SHA-256 进行比较                                                            |
| `wintrust.dll`    | Microsoft Windows（原版，未修改）                                  | 在 [winbindex](https://winbindex.m417z.com/) 中查询 SHA-256，确认其为已知的 Microsoft 签名二进制文件 |

仓库中的 `wintrust.dll` 是**未经修改**的 Microsoft DLL。在构建时，会由 `patch_wintrust.ps1` 对其进行修补（偏移量 `0x1C86`–`0x1C87` 处的两个字节）。

**本地验证：**

```bash
python verify_binaries.py          # 检查第三方二进制文件哈希
```

在每次发布构建前的 CI 流程中，此检查也会自动运行。

## 项目结构

项目源代码及构建依赖位于仓库根目录：

```
.
├── GenP/
│   ├── GenP-v4.2.1.au3   # AutoIt 源代码
│   ├── config.ini        # 补丁定义与目标文件
│   └── Skull.ico         # 应用程序图标
├── WinTrust/
│   ├── patch_wintrust.ps1
│   └── wintrust.dll
├── UPX/
│   └── upx-5.0.1-win64.zip
├── build.ps1             # PowerShell 构建脚本
├── run_build.bat         # 构建入口（以管理员身份运行）
├── build_info.txt        # 构建说明
├── verify_binaries.py    # 二进制校验脚本
└── README.md
```

## 构建

以管理员身份运行 `run_build.bat`。构建脚本将执行以下操作：

1. 下载 AutoIt 和 SciTE
2. 修补 `wintrust.dll`
3. 将 `.au3` 源代码编译为可执行文件

编译后的 `.exe` 将输出到 `Release/` 文件夹中。

向 `main` 分支推送代码或提交版本 Tag 后，也会通过 GitHub Actions 自动构建发布版本。
