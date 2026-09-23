# MUN AI v5 public source package

This directory contains the complete MUN AI v5 release source package in a reproducible form.

## Reconstruct the release ZIP

Run `RECONSTRUCT-V5.bat` from this directory on Windows. It decodes `MUN-AI-Public-Source-v5.zip.b64` into the exact release archive.

Expected SHA-256:

`4e2c63d5ef5608466e13210d9b11833349ed99d4ca97dbe43ed20fae6235e5b1`

The package contains the complete app source, including the Next.js page, styling and all API routes.

## API keys

Every user must create and enter their own keys. No developer secrets are included in the public release.

- Groq: https://console.groq.com/keys
- Mistral: https://console.mistral.ai/api-keys
- Unlimitless: https://unlimitless.ai/portal

`setup.bat` writes the user's keys to local `.env.local`, which is ignored by Git.