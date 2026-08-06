# Agent Guidelines for GenP

## 1. Project Overview

**GenP** is an open-source patch tool for Adobe Creative Cloud applications on Windows, built primarily using **AutoIt** and **PowerShell**. It modifies licensing verification behavior by applying targeted hex patches.

### Repository Architecture

```text
.
├── GenP/
│   ├── GenP-v4.2.1.au3       # AutoIt main program source code
│   ├── config.ini            # Patch rules and target signature definitions
│   └── resources/            # Embedded modules, hosts script, and helper tools
├── WinTrust/
│   ├── patch_wintrust.ps1    # Hex patching script for wintrust.dll
│   └── wintrust.dll          # Microsoft original (unmodified) DLL binary
├── UPX/
│   └── upx-5.0.1-win64.zip   # Official UPX release archive (for executable compression)
├── build.ps1                 # PowerShell build script for AutoIt toolchain setup & compilation
├── verify_binaries.py        # Python script verifying SHA-256 signatures against upstream sources
└── README.md
```

---

## 2. Environment & Tooling Requirements

- **Operating System**: Windows 10 / 11.
- **Shell**: PowerShell 7 (`pwsh`). _Always use `pwsh` instead of `powershell` for all command executions._
- **Python**: Python 3.8+ (for binary integrity verification).
- **AutoIt Toolchain**: AutoIt v3 & SciTE (managed automatically by `build.ps1` under `BuildEnv/`).

---

## 3. Agent Execution Workflow

### 1. Verify Third-Party Binaries

Always run binary integrity checks before modifying or building code:

```pwsh
python verify_binaries.py
```

### 2. Run Workspace Build

Execute the main build script to set up environment, apply DLL patches, and compile `.au3` source to `Release/`:

```pwsh
pwsh -ExecutionPolicy Bypass -File .\build.ps1
```

---

## 4. Security & Quality Guidelines

1. **Binary Integrity Standards**:
   - `WinTrust/wintrust.dll` MUST remain an unmodified, Microsoft-signed DLL file. Modifications occur dynamically at build time via `patch_wintrust.ps1`.
   - Any updates to UPX archives in `UPX/` must match official GitHub releases and pass verification in `verify_binaries.py`.
2. **PowerShell Guidelines**:
   - Use `pwsh` syntax exclusively.
   - Retain `Set-StrictMode -Version Latest` and `$ErrorActionPreference = 'Stop'` in scripts.
3. **AutoIt Source & Rules**:
   - Keep `GenP/config.ini` in sync with rule additions in `GenP-v*.au3`.
   - Test builds locally to verify `.exe` compilation succeeds without errors.
