# Repository Guidelines

## Project Structure & Module Organization

GenP is a Windows-only Adobe Creative Cloud patch utility. The AutoIt application lives in `GenP/GenP-v4.2.1.au3`; patch signatures and options are in `GenP/config.ini`. Supporting scripts, hosts data, and embedded mitmproxy/CCX assets are under `GenP/resources/`. `WinTrust/` contains the stock `wintrust.dll` and its patch script. `BuildEnv/` stores the local AutoIt/SciTE toolchain. `build.ps1` orchestrates setup and compilation; `Release/` and `Logs/` contain generated output and are ignored by Git. CI is defined in `.github/workflows/release.yml`.

## Build, Test, and Development Commands

Run from repository root in an elevated PowerShell 7 session:

```powershell
python verify_binaries.py
pwsh -ExecutionPolicy Bypass -File .\build.ps1
```

`verify_binaries.py` checks bundled UPX and `wintrust.dll` hashes against upstream sources. `build.ps1` downloads missing AutoIt/SciTE components, prepares patched WinTrust files, compiles the single `.au3` source, appends release hashes, and writes the executable to `Release/`. Use `git diff --check` before committing to catch whitespace errors.

## Coding Style & Naming Conventions

Keep AutoIt indentation consistent with the existing tab-based source. Use descriptive `PascalCase` function names, `$camelCase` locals, and the existing `$g_` prefix for shared globals. Preserve AutoIt wrapper directives at the top of the main source. PowerShell uses four-space indentation, `Set-StrictMode -Version Latest`, and `$ErrorActionPreference = 'Stop'`; use clear `Verb-Noun` function names. Python follows standard PEP 8 formatting and type hints where already present.

## Testing Guidelines

No unit-test suite exists. Every change should pass `python verify_binaries.py` and a complete `build.ps1` smoke build on Windows 10/11. For GUI, registry, hosts, firewall, or patch-rule changes, manually exercise the affected workflow with Adobe applications stopped and record relevant logs from `Logs/`. Do not treat a build as proof that runtime patching is correct.

## Commit & Pull Request Guidelines

History uses short Conventional Commit-style subjects, for example `chore: 微调` and `chore: 构建实测`. Keep subjects imperative and focused (`fix: ...`, `feat: ...`, `docs: ...`). PRs should explain behavior and risk, list verification commands and results, link related issues, and include screenshots for visible GUI changes. Do not commit generated files, downloaded archives, patched DLLs, or local logs.

## Security & Configuration Tips

Treat `wintrust.dll`, UPX, patch offsets, hosts entries, and registry edits as security-sensitive. Verify third-party hashes before building; keep `WinTrust/wintrust.dll` stock and let scripts create patched copies. Test only on systems you own or are authorized to modify, back up hosts/registry state, and review every `config.ini` rule change for scope and reversibility.
