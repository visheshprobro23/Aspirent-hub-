#!/usr/bin/env bash
set -e
npm install
npm run build
echo ""
echo "Build complete. Start with: npm run start"
