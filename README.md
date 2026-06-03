# ❄️ AI Front Desk — Client Meeting Kit · Pragmatic HVAC Pvt Ltd

Everything you need to run the appointment. Two files, no installs, works on your laptop.

| File | What it is |
|------|-----------|
| **`presentation.html`** | The animated pitch deck (10 slides) with a **live ROI calculator** in ₹ |
| **`demo.html`** | The working AI voice agent "**Maya**" — she actually talks and listens |

> Branded for **Pragmatic HVAC**, agent name **Maya**, all figures in **₹**. Scenario: a peak-summer **AC breakdown** emergency — the relatable, high-emotion call for an Indian HVAC business.

---

## 📧 To SEND in an email (recorded, real AI voice)

The call is now pre-rendered with a natural **ElevenLabs** voice — it sounds the same on every device (no robotic browser voice).

| Deliverable | Where |
|---|---|
| **Live demo — one link, EN + हिंदी toggle** | **https://zenv-art.github.io/pragmatic-hvac-ai-demo/** |
| **MP4 — English** (attach / WhatsApp) | `video/pragmatic-hvac-ai-demo.mp4` (3.2 MB, portrait, 88s) |
| **MP4 — Hindi** (attach / WhatsApp) | `video/pragmatic-hvac-ai-demo-hindi.mp4` (3.4 MB, portrait, 99s) |
| GitHub repo (public) | https://github.com/ZenV-art/pragmatic-hvac-ai-demo |

The live link is a **single minimal page — just the demo** — with an **EN | हिंदी** toggle in the top-right that swaps the voice, transcript and labels in place. Send the one link to any prospect; they pick the language. (Attach the matching MP4 if you also want a video.)

**Ready-to-send email:**
> Subject: Here's your front desk answering a call you'd normally miss
>
> Hi [Name], rather than tell you what an AI receptionist does, I recorded one. This is *Maya* handling a 9 PM AC emergency for a business like yours — she calms the customer, flags the priority, captures every detail and books the technician in 90 seconds. 30-second listen 👇
> 🔊 **https://zenv-art.github.io/pragmatic-hvac-ai-demo/**
> (Video attached too.) Worth a quick call to set one up on your line?

### 🎙️ Want an authentic Indian accent for Maya?
The current voice is a warm, neutral professional one. To swap in an Indian-accented voice:
1. In ElevenLabs → **Voice Library**, add an Indian voice you like (e.g. search "Indian"), open it, copy its **Voice ID**.
2. Add to `.env`: `MAYA_VOICE_ID=...` and optionally `CALLER_VOICE_ID=...`
3. Re-run: `python tools/generate_audio.py` then `node tools/build_video.js`, and `git add -A && git commit -m "new voice" && git push` to update the live link.

### 🔁 Regenerate / rebuild commands
First start the helpers: `python -m http.server 8755` (in this folder) and Chrome with `--remote-debugging-port=9222`.
- **English** audio + video: `python tools/generate_audio.py` then `node tools/build_video.js`
- **Hindi** audio + video: `python tools/generate_audio_hi.py` then `node tools/build_video.js demo-recorded-hi.html audio-hi pragmatic-hvac-ai-demo-hindi.mp4`
- Update live links: `git add -A && git commit -m "update" && git push`

To use a **native Hindi voice**, set `MAYA_VOICE_ID_HI` / `CALLER_VOICE_ID_HI` in `.env` and re-run the Hindi commands. (The current Hindi uses the same multilingual voice as English — clear, but lightly accented; a true Hindi library voice will sound more native.)

> 🔐 Your ElevenLabs key lives only in `.env` (git-ignored — **not** published). Since it was shared in chat, consider rotating it in the ElevenLabs dashboard when convenient.
> 🗑️ To take the public demo down: `gh repo delete ZenV-art/pragmatic-hvac-ai-demo` (or make it private in repo settings).

---

## ▶ How to run (60 seconds before the meeting)

1. **Use Google Chrome** (or Edge). Double-click **`presentation.html`** to start the deck.
2. Have **`demo.html`** ready in another tab — or click the **"Launch the live call demo"** button on slide 7.
3. **Turn your volume up.** Maya speaks out loud using your device's built-in voice.
4. **Test it once before the client arrives:** open `demo.html`, hit **"Play the demo call,"** confirm you hear her talk.

> 💡 **Pick a good voice in advance.** If your laptop's default voice sounds robotic, change your Windows Text-to-Speech voice (Settings → Time & Language → Speech) to a natural one. **Microsoft Heera** is an Indian-English female voice and sounds great for Maya — the demo auto-selects it if installed.

---

## 🎤 The demo has 3 modes

| Mode | Button | Needs internet? | Use it for |
|------|--------|:--:|-----|
| **Scripted call** | ▶ Play the demo call | ❌ No | **Your safe bet.** A flawless, pre-written 44°C AC-breakdown emergency. Use this as the main demo. |
| **Live mic** | 🎤 Live mic mode | ✅ Yes (Chrome) | The "wow" moment — hand the client the laptop and let *them* talk to Maya. |
| **Typed** | the text box | ❌ No | Backup if the mic is flaky — type the caller's lines, Maya still responds out loud. |

**Recommendation:** Lead with the **scripted call** (it's emotional and bulletproof). If the room is impressed, offer: *"Want to try talking to her yourself?"* → switch to **Live mic mode.**

---

## 🗣️ Talk track (slide by slide)

1. **Title** — "Before we start: how many calls do you think your team misses in a week? Most owners guess low."
2. **The leak** — Land the 3 stats. *"A missed call isn't a missed call — it's a booked job for someone else."*
3. **The math (ROI calc)** — **This is the gut-punch. Drag the sliders to THEIR real numbers.** Ask: *"How many calls a month? What's an average service ticket?"* Watch the yearly ₹ figure climb. Let it sit.
4. **Why calls get missed** — Take the blame off them. *"In peak summer your phone rings off the hook — and your best techs are on a rooftop, not at a desk."*
5. **Meet Maya** — Position her as a teammate, not software.
6. **How it works** — Emphasize *"forward only the calls you miss"* — zero risk to their current setup.
7. **LIVE DEMO** — *"Let me just show you."* → launch `demo.html`, hit play, **stop talking and let Maya sell.**
8. **The return** — *"₹58,000 a month walking out the door vs ₹12,999. One AC install pays for her for the whole month."*
9. **Packages** — Point at **Pro**. Anchor on the ROI number from slide 3 vs. ₹12,999.
10. **Close** — Read the headline out loud. Ask for the start date, not permission: *"Want me to have her answering your line by this weekend?"*

---

## 💰 The numbers (all editable)

**ROI calculator defaults** (slide 3): 300 calls/mo · 27% missed · ₹1,800 avg job · 40% booking rate → **≈ ₹58,320/mo (₹6.99 lakh/yr) lost.** Every slider is live — plug in the client's real figures during the meeting.

**Packages** (slide 9):

| Plan | Price | Setup |
|------|-------|-------|
| Starter | ₹6,999/mo | + ₹9,999 one-time |
| **Pro** (most popular) | ₹12,999/mo | + ₹9,999 one-time |
| Done-For-You | Custom | multi-location |

> These are starting-point numbers — change them to whatever you're quoting (see below).

---

## ✏️ Make it even more theirs (optional, high-impact)

Open the files in any text editor (Notepad works) and edit:

**`demo.html`** — top of the `<script>`, the `CONFIG` block:
```js
company: "Pragmatic HVAC",                       // ← spoken name Maya uses
agent:   "Maya",                                 // ← receptionist name
techs:   ["Ramesh","Suresh","Arjun","Vikram"],   // ← their real technicians
recoveredPerJob: 2400,                           // ₹ added to the "recovered today" ticker
jobValueRange: "₹1,500–₹6,000",                  // ← shown when a job is booked
```
The header legal name "Pragmatic HVAC Pvt Ltd" is in the top bar markup.

**`presentation.html`** — prices are on the **Packages** slide and the **Return** slide (search the file for `₹12,999`). The ROI calculator defaults are the `value="..."` attributes on the sliders.

---

## ⚠️ Gotchas (read before the meeting)

- **No sound?** Click anywhere on the page once first (browsers block audio until you interact), then hit play.
- **Live mic does nothing?** It needs Chrome **+ internet**. On weak wifi, just use the scripted mode — it's offline and looks identical.
- **Voice sounds robotic / too American?** Install/select **Microsoft Heera** (English – India) in Windows Speech settings. The demo prefers it automatically.
- **Going full screen?** In the deck, press **F**. Use **← →** or **Space** to move between slides.

---

*Stats are industry estimates for home-services call handling, shown as ranges and fully adjustable in the live calculator — so you're never overstating. Plug in Pragmatic HVAC's real numbers and let the math do the closing.*
