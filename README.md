# Sulparang Ambient

**술파랑 · Sulparang · 術波浪**  
기술로 빚어낸 자연의 물결.  
소리와 풍경으로 일상에 편안한 흐름을 만듭니다.

A free Home Assistant dashboard card for mixing ambient sounds with day/night nature scenes.

[Live demo](https://sulparang.com/?lang=en#experience) · [Website](https://sulparang.com/) · [Manual-install ZIP](https://sulparang.com/downloads/sulparang-ambient-free-0.1.2.zip)

## Installation guides

[English](docs/README.en.md) · [한국어](docs/README.ko.md) · [中文](docs/README.zh.md) · [日本語](docs/README.ja.md) · [Español](docs/README.es.md)

## Install with HACS

Sulparang Free is a HACS dashboard card. Open HACS in the Home Assistant sidebar → ⋮ → Custom repositories, and select Dashboard as the type.

> Adding this URL under Settings → Apps → Repositories causes ‘is not a valid app repository’. App (add-on) repositories and HACS repositories are different.

[Open Sulparang in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=glory-stone&repository=sulparang-ambient&category=plugin) — Install and configure HACS first. After clicking, check that the Home Assistant address is the server where you want to install it.

1. Install and configure [HACS](https://www.hacs.xyz/docs/use/download/download/) if needed.
2. Open **HACS → ⋮ → Custom repositories**.
3. Add `https://github.com/glory-stone/sulparang-ambient` with type **Dashboard**.
4. Find **Sulparang Ambient**, download it and refresh the browser.
5. Add a manual card to your dashboard:

```yaml
type: custom:sulparang-ambient
language: en
```

Supported languages: `ko`, `en`, `zh`, `ja`, `es`.

If the resource is not registered automatically, add
`/hacsfiles/sulparang-ambient/sulparang-ambient.js` as a **JavaScript module** under Settings → Dashboards → Resources.
Remove any previous manual-install resource before switching to HACS to avoid loading the card twice.
This repository is installable as a custom repository; it is not listed in the HACS default catalog.

## Free edition

- Gentle rain and fireplace recordings, bundled locally.
- Browser-generated brown and pink noise.
- Multiple sounds at once, with independent volume controls.
- Day/night nature scenes and five interface languages.
- Playback on the device you are using; no Sulparang account or playback server needed.

Tap a sound icon again to stop it. Closing or refreshing the page stops playback.
Browser autoplay and sleep restrictions apply. No radio, remote speakers, hourly chimes,
system monitoring, payments or paid features are included.

## Manual installation

Download the [installation ZIP](https://sulparang.com/downloads/sulparang-ambient-free-0.1.2.zip),
or copy all three files from `dist/` into `/config/www/sulparang-ambient/`.
Keep `rain.mp3` and `fire.mp3` beside `sulparang-ambient.js`.
Register `/local/sulparang-ambient/sulparang-ambient.js?v=0.1.2` as a JavaScript module,
then add the card configuration above. See the translated guides for full instructions.

## Development

Use Node.js 22 or newer and run `node build.mjs`. No npm dependencies are required.
Edit `src/card.js` and `src/nature-scene.js`; commit the rebuilt `dist/sulparang-ambient.js`.
Both MP3 files are kept in `dist/` so HACS can download them alongside the card.

## License and credits

Code: [MIT](LICENSE). Audio recordings: CC0; see [third-party notices](THIRD-PARTY-NOTICES.txt).
The code license does not grant trademark rights. Sulparang is an independent community product,
not affiliated with Home Assistant.
