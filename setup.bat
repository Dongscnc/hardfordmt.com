@echo off
cd /d D:\AI\hardfordmt.com
echo === npm init ===
call npm init -y
echo === npm install astro ===
call npm install astro @astrojs/tailwind tailwindcss@3 --save
echo === DONE ===