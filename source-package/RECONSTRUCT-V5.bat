@echo off
setlocal
cd /d "%~dp0"
echo Reconstructing MUN AI v5 source package...
certutil -decode "MUN-AI-Public-Source-v5.zip.b64" "MUN-AI-Public-Source-v5.zip" >nul
if errorlevel 1 (
  echo ERROR: certutil could not decode the source package.
  pause
  exit /b 1
)
echo.
echo SHA-256:
certutil -hashfile "MUN-AI-Public-Source-v5.zip" SHA256
echo.
echo Expected SHA-256:
echo 4e2c63d5ef5608466e13210d9b11833349ed99d4ca97dbe43ed20fae6235e5b1
echo.
echo The ZIP contains the complete public MUN AI v5 source.
echo Extract it, then run setup.bat and enter your own API keys.
echo.
pause