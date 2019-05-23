# electron-getsources-example

The repo helps to reproduce problem with desktopCapturer.getSources().

The problem is getSources() doesn't return minimized windows at Windows OS. Also it doesn't return standart windows like Settings, Camera and etc.

**How to reproduce**

```bash
# Clone this repository
git clone https://github.com/Inviles/electron-getsources-example.git
# Go into the repository
cd electron-getsources-example
# Install dependencies
npm install
# Run the app
npm start

// If npm start does not work (it was not on my virtual Windows machine) you could use: npm run build:win
```
