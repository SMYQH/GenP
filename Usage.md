# 📖 Adobe Photoshop + GenP 完整安装与修补指南

---

## 一、 前置准备与注意事项

1. **系统环境**：适用于 **Windows 10 / Windows 11 (64位)**。
2. **管理员权限**：所有操作（包括安装与运行补丁）建议使用管理员账号权限进行。
3. **杀毒软件误报处理**：
   - GenP 属于二进制修改工具（Hex Patcher），部分杀毒软件（如 Windows Defender）可能会拦截或删除 `GenP.exe`。
   - 修补前建议将 GenP 所在文件夹添加到杀毒软件的**排除项/白名单**中。
4. **彻底关闭 Adobe 后台**：
   - 在修补前，必须结束所有运行中的 Adobe 软件及后台服务，避免出现 `File Lock`（文件被锁无法修改）报错。

---

## 二、 第一阶段：安装 Adobe Photoshop

### 方法 A：通过 Adobe Creative Cloud 官方客户端安装（推荐）

1. **下载客户端**：前往 [Adobe 官网](https://www.adobe.com/) 下载并安装 **Adobe Creative Cloud** (简称 CC) 桌面端。
2. **注册/登录**：打开 CC 客户端，登录你的 Adobe 账号（如果没有，可免费注册新账号，建议地区选择美国或无限制地区）。
3. **安装 Photoshop**：
   - 在 CC 客户端主页找到 **Photoshop**。
   - 点击 **“试用”** 或 **“安装”**，等待进度达到 100%。
4. **完全退出客户端（关键）**：
   - **安装完成后切勿直接点击“启动”！**
   - 检查电脑右下角任务栏托盘，右键点击 Adobe Creative Cloud 图标，选择 **“退出”**。
   - 按 `Ctrl + Shift + Esc` 打开任务管理器，确保没有 `Adobe Desktop Service` 或 `CoreSync` 相关的残留进程。

---

## 三、 第二阶段：准备 GenP 修补工具

1. **获取可执行程序**：
   - **如果从本 GitHub 仓库构建**：
     在提升权限的 PowerShell 7 中输入以下指令：
     ```powershell
     python verify_binaries.py
     pwsh -ExecutionPolicy Bypass -File .\build.ps1
     ```
     构建成功后，在 [Release/](file:///e:/GitHub/GenP/Release) 文件夹下即可拿到 `GenP-v4.2.1.exe`。
2. **启动工具**：
   - 右键点击 `GenP-v4.2.1.exe`，选择 **“以管理员身份运行”**。

---

## 四、 第三阶段：使用 GenP 修补 Photoshop

1. **指定安装路径**：
   - 点击 GenP 界面底部的 **“路径” (Path)** 按钮。
   - 导航并选中你的 Photoshop 安装目录（默认安装路径通常为：`C:\Program Files\Adobe\Adobe Photoshop 2024` 或对应年份版本）。
2. **扫描需修补文件**：
   - 点击 **“搜索” (Search)** 按钮。
   - GenP 将开始检索该目录内所有匹配特征码的 `.dll` 和 `.exe` 文件。
3. **勾选目标文件**：
   - 扫描完成后，中间列表将列出检索结果。
   - 点击 **“未修补” (Check Unpatched)** 或 **“全部选中” (Check All)** 按钮，勾选要应用补丁的文件。
4. **执行修补**：
   - 点击 **“修补” (Cure / Patch)** 按钮。
   - GenP 会对文件应用 Hex 补丁（并自动保留原文件备份）。
   - 等待底部日志区域提示 **`Patching Complete`**（修补完成）。

---

## 五、 第四阶段：防弹窗与反正版验证（防封关键）

修补主程序后，需要阻止 Adobe 的远程服务器检测和弹窗警告：

### 1. 更新 Hosts 域名屏蔽

- 在 GenP 主界面中找到 **“更新 hosts” (Update Hosts)** 按钮并点击。
- 该功能将自动把预设的 Adobe 验证域名屏蔽列表写入 `C:\Windows\System32\drivers\etc\hosts`。

### 2. 添加 Windows 防火墙出站规则

- 在 GenP 中点击 **“添加规则” (Create Rules)**。
- 自动为 Photoshop 主程序添加 Windows 防火墙出站阻断规则，彻底切断其向 Adobe 验证服务器发送授权请求。

### 3. 移除 AGS (Adobe Genuine Service)

- 点击 **“移除 AGS” (Remove AGS)** 按钮。
- 清理或停用系统后台安装的正版检测服务，防止后续后台偷偷扫描并恢复补丁。

---

## 六、 常见问题排错指南 (Troubleshooting)

| 问题现象                                            | 原因分析                                                                  | 解决方法                                                                                                                            |
| :-------------------------------------------------- | :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| **修补时提示 `File Locked` 或 `Permission Denied`** | Photoshop 或 Adobe 后台进程未完全关闭，导致文件被占用锁死。               | 打开任务管理器（`Ctrl+Shift+Esc`），强制结束所有以 `Adobe` 开头的进程，然后再重新运行 GenP。                                        |
| **运行一段时间后出现“非正版应用将被禁用”弹窗**      | 1. Hosts 屏蔽失效；<br>2. 防火墙未切断软件联网；<br>3. AGS 服务自动复活。 | 1. 重新在 GenP 中点击 **Update Hosts**；<br>2. 使用 GenP 点击 **Create Rules** 再次添加防火墙规则；<br>3. 再次点击 **Remove AGS**。 |
| **软件更新后激活状态失效**                          | 通过 Creative Cloud 更新 Photoshop 后，原有的修改过的文件被官方更新替换。 | 无需重新安装，只需在更新完成后再次打开 GenP，对 PS 目录重复执行一次 **Path → Search → Cure** 即可。                                 |
| **启动 Photoshop 闪退**                             | 勾选了不兼容的文件或安装包版本被篡改。                                    | 打开 GenP，点击 **“还原” (Restore)** 恢复备份文件，确认官方试用版无误后再重新修补。                                                 |
