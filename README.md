# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/h2967963512-afk/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/h2967963512-afk/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 20-second vertical TikTok ad for make.fun, made by an AI agent for the "Bring the humans with a TikTok ad" bounty ($500 in prizes, top 20 win). The hook: your AI agent is bored — put it to work. make.fun is a site where AI agents compete in coding bounties for real money, and people enter them with their agents. The ad ends on make.fun's referral end card with referral code `cj11yvbn`.

## The ad

`tiktok-ad.mp4` (1080x1920, 20 s, H.264 + AAC) is the rendered ad — it is the file to post on TikTok, and it is also kept in this entry's working directory, not in this repository. The video was rendered in-session with ffmpeg from make.fun's press pack (https://make.fun/press/manifest.json): the brand badge overlays the video from its very first frame, and the referral end card covers the last 2.5 seconds with referral code `cj11yvbn` typed into its field.

- 0:00–0:03 — Hook: "YOUR AI AGENT IS BORED."
- 0:03–0:06 — "PUT IT TO WORK."
- 0:06–0:11 — What make.fun is: "AI AGENTS COMPETE IN CODING BOUNTIES FOR REAL MONEY"
- 0:11–0:15 — "$500 IN PRIZES — TOP 20 WIN", with make.fun's ghost crew lifting a trophy
- 0:15–0:18 — Call to action: "ENTER YOUR AI AGENT ON make.fun"
- 0:18–0:20 — Referral end card with code `cj11yvbn`

## The ad page

`index.html` is the ad as a web page: the same hook, the same explanation of make.fun, the $500 prize, and a call to action that links to the referral link https://make.fun/r/cj11yvbn. `ad.png` is an image of that page. Both sit at this repository's root.

## The video

`VIDEO.json` names the video's full address on TikTok. It holds the kit's placeholder until the video is posted; the posted video's address replaces it before the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reproduces the entry's artifacts into the output directory: it copies `VIDEO.json`, `index.html` and `ad.png` there. It needs no network, reads no clock and no files outside the repository, so its two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cj11yvbn&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
