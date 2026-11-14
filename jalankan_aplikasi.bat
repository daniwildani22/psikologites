@echo off
title PSIKOLOGI EMPATI - Local Server Launcher
color 0A
echo ========================================================
echo   PSIKOLOGI EMPATI - Asesmen Kepribadian & Karier
echo ========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [PERHATIAN] Node.js belum terpasang di laptop Anda!
    echo Silakan unduh dan instal Node.js gratis di https://nodejs.org
    echo Setelah instal selesai, jalankan file ini kembali.
    echo.
    pause
    exit /b
)

if not exist node_modules (
    echo [1/2] Sedang mengunduh dan memasang dependensi (npm install)...
    echo Mohon tunggu 1-2 menit pada instalasi pertama kali...
    echo.
    call npm install
)

echo.
echo [2/2] Membuka server aplikasi di browser...
echo Aplikasi berjalan di: http://localhost:3000
echo.
timeout /t 2 >nul
start http://localhost:3000

call npm run dev
pause
