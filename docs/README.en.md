# Sulparang Ambient Free 0.1.2

## Install with a repository URL in HACS

Sulparang Free is a HACS dashboard card. Open HACS in the Home Assistant sidebar → ⋮ → Custom repositories, and select Dashboard as the type.

> Adding this URL under Settings → Apps → Repositories causes ‘is not a valid app repository’. App (add-on) repositories and HACS repositories are different.

[Open Sulparang in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=glory-stone&repository=sulparang-ambient&category=plugin) — Install and configure HACS first. After clicking, check that the Home Assistant address is the server where you want to install it.

New to HACS? Follow its official setup guide first. [HACS](https://www.hacs.xyz/docs/use/download/download/)

### 1. Open Custom repositories

In Home Assistant, open HACS, then the top-right ⋮ menu → Custom repositories.

### 2. Add the repository

Paste the URL below, select Dashboard as the type, then choose Add.

```
https://github.com/glory-stone/sulparang-ambient
```

### 3. Download the free edition

Find Sulparang Ambient in HACS, open it and download it. Refresh your browser when finished. Add the custom repository first; it is not yet in the default catalog.

### 4. Add the card

Edit your dashboard → Add card → Manual. Save the configuration below, then tap a sound icon to play on this device.

```
type: custom:sulparang-ambient
language: en
```

If the card is not found, check Settings → Dashboards → Resources for the URL below as a JavaScript module. YAML dashboards may need manual registration. When switching from a manual installation, remove the previous /local/sulparang-ambient/ resource and keep only the HACS resource.

```
/hacsfiles/sulparang-ambient/sulparang-ambient.js
```

Download updates in HACS and refresh your browser. To uninstall, remove the dashboard card and the download in HACS.

## Install manually with a ZIP


You need a Home Assistant administrator account and access to its configuration folder. Use a Web Audio-capable browser such as Chrome, Edge, Firefox or Safari.

## 1. Download and extract

Unzip the download. Keep the sulparang-ambient folder, JavaScript file and MP3 files together.

## 2. Copy to Home Assistant

Use Samba, Studio Code Server or another file-transfer tool to copy the whole folder here. Create www if missing. Restart Home Assistant if you created www for the first time. Container installations use www in the configuration volume.

```
/config/www/sulparang-ambient/
  sulparang-ambient.js
  rain.mp3
  fire.mp3
```

## 3. Register the resource

Enable Advanced mode in your profile. Open Settings → Dashboards → top-right menu → Resources. Add this URL and choose JavaScript module.

```
/local/sulparang-ambient/sulparang-ambient.js?v=0.1.2
```

## 4. Add the card

Edit a dashboard → Add card → Manual. Paste and save the configuration below. Available language values: ko, en, zh, es, ja.

```
type: custom:sulparang-ambient
language: en
```

## 5. Refresh and listen

Refresh the page and tap a sound icon. Tap again to stop. Select multiple sounds to layer them. Audio uses the current browser’s output device.

## 6. Update or uninstall

Before updating, back up the old folder, replace the files, change the version in the resource URL and refresh. To uninstall, remove the card and resource, then delete the sulparang-ambient folder.

## FAQ

### Custom element not found?

Check the resource URL and JavaScript module type. Open /local/sulparang-ambient/sulparang-ambient.js in your signed-in browser and perform a hard refresh.

### No sound?

Check the device volume, muted browser tab and output device. The MP3 files must be next to the JavaScript file. Browsers may require a tap before allowing audio.

### Can I control a remote speaker?

This free edition plays in the browser you are using. Remote speakers, radio, hourly chimes and system monitoring are not included.
