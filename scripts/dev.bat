@echo off

if not "%CI%"=="" (
    timeout /t 5
    firebase emulators:start --debug
) else (
    timeout /t 5
    firebase emulators:start --import=./firebase-emulator-data --export-on-exit=./firebase-emulator-data
)

set NEXT_PUBLIC_GIT_SHA=%(git rev-parse --short HEAD)%
set GCLOUD_PROJECT=test-51072
set FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9099
set FIRESTORE_EMULATOR_HOST=127.0.0.1:8081
set PORT=3000
set FIREBASE_STORAGE_EMULATOR_HOST=127.0.0.1:9199
npm run dev -p 3000
