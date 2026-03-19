# 🪺 The Nest — Family Daily App

A cozy private app for your family of 5 to connect every day with a shared prompt.

## Features
- 🌙 Beautiful dark starry theme
- 💬 Daily rotating prompts (30 included!)
- 📝 Answer & share with family
- ❤️ React to each other's answers
- 🔥 Family streak tracker
- 📖 Memory Lane — see every answer ever shared
- 📚 Prompt library — pick or randomise today's question
- 📱 Works as a real mobile app (Add to Home Screen)
- 💾 Works offline

## How to deploy (free, no coding needed)

### Step 1 — Push to GitHub
1. Create a new repo on github.com called `the-nest-app`
2. Upload all these files to the repo

### Step 2 — Deploy on Vercel
1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Click Deploy — done!

### Step 3 — Add app icon (optional)
Replace the files in `/icons/` with real PNG images:
- `icon-192.png` (192×192 px)
- `icon-512.png` (512×512 px)

Use a 🪺 nest emoji on a dark purple background.

### Step 4 — Share with family
Send the Vercel link to everyone:
- **iPhone**: Safari → Share → Add to Home Screen
- **Android**: Chrome → menu → Add to Home Screen

## Customise member names
Open `index.html` and find the `.member-select` section.
Open `js/app.js` and find the `MEMBERS` array at the top.
Change the names, emojis, and colours to match your family!

## How it works
All data is stored locally on each device using `localStorage`.
This means each family member's phone remembers their own answers.
No server, no account, no cost — ever.

> To share answers across devices, each person opens the app on their own phone and answers independently. The feed shows whoever has answered on *that device*.

For a fully shared feed (everyone sees everyone's answers in real-time), you'd need a backend like Firebase — ask Claude to help upgrade when you're ready!
