@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"
title MUN AI Setup

echo.
echo ==========================================
echo              MUN AI - LOCAL SETUP
echo ==========================================
echo.
echo MUN AI now defaults to local Ollama.
echo No OpenAI, Groq, Mistral or Unlimitless API key is required
echo for the normal local AI experience.
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found on PATH.
  echo Install Node.js LTS, then run this file again.
  echo.
  pause
  exit /b 1
)

where ollama >nul 2>nul
if errorlevel 1 (
  echo ERROR: Ollama was not found on PATH.
  echo Install/start Ollama, then run this file again.
  echo.
  pause
  exit /b 1
)

for /f "tokens=* " %%v in ('node -v') do set "NODE_VERSION=%%v"
echo Node.js detected: !NODE_VERSION!
echo.

echo Checking Ollama...
ollama list >nul 2>nul
if errorlevel 1 (
  echo ERROR: Ollama is not responding.
  echo Start the Ollama application and run setup again.
  echo.
  pause
  exit /b 1
)

ollama list | findstr /i /b /c:"llama3.2" >nul 2>nul
if errorlevel 1 (
  echo llama3.2 is not installed. Downloading it through Ollama...
  echo This may take a while.
  ollama pull llama3.2
  if errorlevel 1 (
    echo.
    echo ERROR: Could not install llama3.2.
    echo.
    pause
    exit /b 1
  )
)

> .env.local echo AI_PROVIDER=ollama
>> .env.local echo OLLAMA_BASE_URL=http://127.0.0.1:11434/v1
>> .env.local echo OLLAMA_MODEL=llama3.2
>> .env.local echo.
>> .env.local echo # Cloud providers are intentionally disabled unless AI_PROVIDER is changed manually.
>> .env.local echo OPENAI_API_KEY=
>> .env.local echo OPENAI_MODEL=gpt-5.6-luna
>> .env.local echo GROQ_API_KEY=
>> .env.local echo GROQ_MODEL=groq/compound
>> .env.local echo GROQ_WRITING_MODEL=openai/gpt-oss-120b
>> .env.local echo MISTRAL_API_KEY=
>> .env.local echo MISTRAL_MODEL=mistral-small-latest
>> .env.local echo UNLIMITLESS_API_KEY=
>> .env.local echo VIREONIX_MODEL=auto

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
echo Setup complete - LOCAL OLLAMA MODE
echo ==========================================
echo Model: llama3.2
echo Endpoint: http://127.0.0.1:11434
echo Cloud API fallback: DISABLED
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
