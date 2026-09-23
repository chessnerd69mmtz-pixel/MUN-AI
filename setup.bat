@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"
title MUN AI Setup

echo.
echo ==========================================
echo              MUN AI - SETUP
echo ==========================================
echo.
echo Every user must enter their own API keys.
echo This repository does not contain developer credentials.
echo.
echo Get your keys here:
echo   Groq:        https://console.groq.com/keys
echo   Mistral:     https://console.mistral.ai/api-keys
echo   Unlimitless: https://unlimitless.ai/portal
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found on PATH.
  echo Install Node.js LTS, then run this file again.
  echo.
  pause
  exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set "NODE_VERSION=%%v"
echo Node.js detected: !NODE_VERSION!
echo.

if not exist ".env.local" (
  set /p "GROQ_KEY=Enter your Groq API key: "
  if "!GROQ_KEY!"=="" (
    echo ERROR: Groq API key cannot be blank.
    pause
    exit /b 1
  )
  echo.
  set /p "MISTRAL_KEY=Enter your Mistral API key: "
  if "!MISTRAL_KEY!"=="" (
    echo ERROR: Mistral API key cannot be blank.
    pause
    exit /b 1
  )
  echo.
  echo Unlimitless is used by Niv AI and Brainstorm for settled reasoning context.
  set /p "UNLIMITLESS_KEY=Enter your Unlimitless API key: "
  if "!UNLIMITLESS_KEY!"=="" (
    echo ERROR: Unlimitless API key cannot be blank.
    pause
    exit /b 1
  )

  >.env.local echo GROQ_API_KEY=!GROQ_KEY!
  >>.env.local echo GROQ_MODEL=groq/compound
  >>.env.local echo GROQ_WRITING_MODEL=openai/gpt-oss-120b
  >>.env.local echo MISTRAL_API_KEY=!MISTRAL_KEY!
  >>.env.local echo MISTRAL_MODEL=mistral-small-latest
  >>.env.local echo UNLIMITLESS_API_KEY=!UNLIMITLESS_KEY!
  >>.env.local echo VIREONIX_MODEL=auto
) else (
  echo .env.local already exists. Keeping the existing user-entered keys.
  echo To change keys, edit .env.local and rerun this setup.
)

echo.
echo Installing dependencies...
call npm.cmd install
if errorlevel 1 (
  echo.
  echo ERROR: npm install failed.
  echo Check your internet connection and the error above.
  echo.
  pause
  exit /b 1
)

echo.
echo Building MUN AI...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo ERROR: The Next.js build failed.
  echo The window will remain open so you can read the error above.
  echo.
  pause
  exit /b 1
)

echo.
echo ==========================================
echo Setup complete!
echo ==========================================
echo Groq: configured as primary provider
echo Mistral: configured as second fallback
echo Unlimitless: configured for Niv AI / Brainstorm reasoning context
echo Vireonix: keyless final text-generation fallback
echo.
echo Starting MUN AI at http://localhost:3000
echo ==========================================
echo.
start "MUN AI Browser" http://localhost:3000
call npm.cmd run start
set "EXITCODE=%ERRORLEVEL%"
echo.
echo MUN AI stopped (exit code %EXITCODE%).
echo.
pause
exit /b %EXITCODE%
