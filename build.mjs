import fs from 'node:fs';
const root=new URL('.',import.meta.url);
const scene=fs.readFileSync(new URL('src/nature-scene.js',root),'utf8');
const card=fs.readFileSync(new URL('src/card.js',root),'utf8').replaceAll('oas-nature-scene','sulparang-nature-scene');
fs.mkdirSync(new URL('dist/',root),{recursive:true});
fs.writeFileSync(new URL('dist/sulparang-ambient.js',root),scene+'\n'+card);
console.log('Built Sulparang Ambient. Keep both MP3 files next to the JavaScript.');
