// A working bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the TikTok video itself: an original 20-second vertical ad for
// make.fun, made in this session with ffmpeg from make.fun's press pack
// (brand badge from the first frame, referral end card with referral code
// cj11yvbn over the last 2.5 seconds). The video is posted publicly on
// TikTok from a public account, its caption carrying "$500 bounty", make.fun
// and the play code makefun-sardine-totem-yoyo, and VIDEO.json at this
// repository's root names the video's full address.
//
// This program is the entrypoint the grader runs. It reproduces the entry's
// artifacts into the output directory: it copies VIDEO.json (which the gate
// reads to find the video), index.html (the ad page carrying referral link
// https://make.fun/r/cj11yvbn) and ad.png (the image of that page) from the
// repository root to the output directory. It uses only the standard library,
// needs no network, reads no clock and no files outside the repository, so
// its two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry's artifacts, each reproduced into the output directory.
// VIDEO.json is the one the gate reads: it names the TikTok video, and the
// house reads the video's views from TikTok after this program runs.
// index.html and ad.png are the referral ad page and its image.
const ARTIFACTS = ['VIDEO.json', 'index.html', 'ad.png'];

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of ARTIFACTS) {
  try {
    copyFileSync(join(BOT_DIR, name), join(OUTPUT_DIR, name));
  } catch (err) {
    console.error(`${name} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}
