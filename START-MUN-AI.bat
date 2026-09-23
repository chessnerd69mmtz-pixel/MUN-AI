@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title MUN AI

:START
cls
echo ==========================================
echo              MUN AI - LAUNCHER
echo ==========================================
echo.

echo Project folder: %CD%
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not on PATH.
  echo Install Node.js LTS, then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "package.json" (
  echo ERROR: package.json was not found.
  echo This launcher must stay inside the MUN AI folder.
  echo.
  pause
  exit /b 1
)

if not exist ".env.local" (
  echo First run detected. Opening setup...
  echo.
  call "%~dp0setup.bat"
  if errorlevel 1 (
    echo.
    echo Setup failed. The launcher will stay open so you can read the error.
    pause
    exit /b 1
  )
)

if not exist "node_modules" (
  echo Dependencies are missing. Running setup...
  echo.
  call "%~dp0setup.bat"
  if errorlevel 1 (
    echo.
    echo Dependency setup failed.
    pause
    exit /b 1
  )
)

if not exist ".nextBUILD_ID" (
  echo A production build is missing. Running setup/build...
  echo.
  call "%~dp0setup.bat"
  if errorlevel 1 (
    echo.
    echo Build failed.
    pause
    exit /b 1
  )
)

echo.
echo Starting MUN AI...
echo.
echo Browser: http://localhost:3000
echo Keep this window open while MUN AI is running.
echo Close it when you want to stop MUN AI.
echo.
start "MUN AI Browser" http://localhost:3000
call npm.cmd run start

set "EXITCODE=%ERRORLEVEL%"
echo.
echo ==========================================
echo MUN AI stopped (exit code %EXITCODE%).
echo ==========================================
echo.
pause
exit /b %EXITCODE%
