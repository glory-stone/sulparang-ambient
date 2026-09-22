// Generated from oas-asmr-nature-card.js by build-nature-scene.py.
class SulparangNatureScene extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'}).innerHTML=`<style>
      :host{display:block;width:100%}*{box-sizing:border-box}ha-card{padding:12px 16px;border:0;background:transparent;box-shadow:none}
      .columns{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);gap:16px;
        height:calc(100dvh - 136px);min-height:442px;max-height:700px}
      .sounds{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(8,minmax(50px,1fr));gap:6px;min-width:0}
      .row{display:grid;grid-template-columns:44px 108px minmax(60px,1fr) 36px;
        align-items:center;gap:8px;padding:2px 10px;border:1px solid var(--divider-color);
        border-radius:12px;background:var(--card-background-color);min-width:0}
      button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;
        background:var(--secondary-background-color);color:var(--disabled-text-color);
        cursor:pointer;touch-action:manipulation}
      .on button{color:var(--sound-color);background:color-mix(in srgb,var(--sound-color) 15%,transparent)}
      button:focus-visible,input:focus-visible{outline:3px solid var(--primary-color);outline-offset:3px}
      button:disabled{cursor:wait;opacity:.6}ha-icon{--mdc-icon-size:28px}.sound-icon{width:32px;height:32px}
      .name{font-size:14px;font-weight:500;line-height:1.5;color:var(--primary-text-color)}
      .state{font-size:11px;line-height:1.4;color:var(--secondary-text-color)}
      .volume{font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:var(--secondary-text-color)}
      input{appearance:none;-webkit-appearance:none;width:100%;min-width:0;height:44px;margin:0;
        background:transparent;cursor:pointer;touch-action:pan-y;--level-color:var(--disabled-text-color)}
      .on input{--level-color:var(--sound-color)}
      input::-webkit-slider-runnable-track{height:5px;border-radius:8px;
        background:linear-gradient(to right,var(--level-color) 0 var(--level),var(--divider-color) var(--level) 100%)}
      input::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:22px;height:22px;
        margin-top:-8.5px;border-radius:50%;background:var(--level-color);border:2px solid var(--card-background-color)}
      input::-moz-range-track{height:5px;border-radius:8px;background:var(--divider-color)}
      input::-moz-range-progress{height:5px;border-radius:8px;background:var(--level-color)}
      input::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--level-color);border:0}
      input:disabled{opacity:.45;cursor:default}.error:empty{display:none}
      .error{color:var(--error-color);font-size:13px;padding-top:5px}
      footer{padding:12px 2px 0;color:var(--secondary-text-color);font-size:12px;line-height:1.5}
      .help{display:flex;flex-wrap:wrap;gap:4px 20px;align-items:center}
      .help span{white-space:nowrap}.help ha-icon{--mdc-icon-size:15px;margin-right:5px;vertical-align:-3px}
      .scene{position:relative;overflow:hidden;isolation:isolate;border-radius:18px;background:#091725;
        border:1px solid #304453;color:#e4eef1;min-width:0}
      .landscape{position:absolute;inset:0;width:100%;height:100%}
      .scene[data-mode="day"]{background:#c1dcd5;border-color:#a9c8bc;color:#294c41}
      .scene[data-mode="day"] .scene-heading{color:#345c51}
      .scene[data-mode="day"] .scene-heading::before{background:#568675;box-shadow:none}
      .scene[data-mode="day"] .caption{background:linear-gradient(transparent,rgba(224,239,219,.96))}
      .scene[data-mode="day"] .scene-detail{color:#426557}
      .scene[data-mode="day"] .night-art,.scene[data-mode="night"] .day-art{display:none}
      .clouds{animation:clouds 32s ease-in-out infinite alternate}
      .perched-tree{--branch:#826647;--leaf:#6c9b73;--bird-one:#d3a85c;--bird-two:#78a6a0;--bird-wing:#597e6c;--bird-eye:#193d38;--bird-beak:#bc8548}
      .night-art .perched-tree{--branch:#829c95;--leaf:#496f60;--bird-one:#bcb180;--bird-two:#8fb6b8;--bird-wing:#658582;--bird-eye:#173439;--bird-beak:#c4af7b}
      .cricket-scene{--cricket-leaf:#94b26f;--cricket-body:#507b46;--cricket-detail:#315b3e;--cricket-eye:#183b2a}
      .night-art .cricket-scene{--cricket-leaf:#4c7660;--cricket-body:#a2b777;--cricket-detail:#789c70;--cricket-eye:#233f35}
      .scene .bird-body{transform-origin:0 0;animation:bird-breathe 7s ease-in-out infinite alternate}
      .scene .bird-two .bird-body{animation-delay:-3s}
      .scene .cricket-antennae{transform-origin:14px -12px;animation:antennae 8s ease-in-out infinite alternate}
      .grass-light{animation:breathe 12s ease-in-out infinite alternate}
      .scene-heading{position:absolute;top:22px;left:24px;right:24px;display:flex;align-items:center;gap:8px;
        font-size:11px;letter-spacing:3px;color:#bed7de}
      .scene-heading::before{content:'';width:5px;height:5px;border-radius:50%;background:#9be0d2;box-shadow:0 0 10px #80d4c8}
      .caption{position:absolute;bottom:0;left:0;right:0;padding:45px 24px 24px;
        background:linear-gradient(transparent,rgba(3,13,22,.9));pointer-events:none}
      .scene-title{font-size:25px;letter-spacing:-.8px;font-weight:400;line-height:1.35;margin:0 0 7px}
      .scene-detail{font-size:12px;line-height:1.7;color:#adc6d1;min-height:21px;word-break:keep-all}
      .aurora{transform-origin:250px 160px;animation:aurora 24s ease-in-out infinite alternate}
      .aurora.second{animation-delay:-12s;animation-duration:31s}
      .mist{animation:drift 26s ease-in-out infinite alternate}
      .stars{animation:breathe 11s ease-in-out infinite alternate}
      .effect{opacity:0;transition:opacity 1.5s ease;pointer-events:none}
      .effect.visible{opacity:1}.effect:not(.visible) *{animation-play-state:paused!important}
      .rain-drop{stroke-linecap:round;opacity:var(--rain-opacity);
        transform:translate(var(--rain-static-x),var(--rain-static-y));
        animation:rain-drop var(--rain-duration) linear var(--rain-delay) infinite}
      .wave-patch{opacity:var(--wave-still-opacity,.55);transform-origin:center;transform-box:fill-box;
        animation:wave-arrive var(--wave-duration) ease-in-out var(--wave-delay) infinite}
      .river-light{animation:breathe 6s ease-in-out infinite alternate}
      .fire-light{animation:glow 6s ease-in-out infinite alternate;transform-origin:374px 388px}
      .flame{animation:flame 3s ease-in-out infinite alternate;transform-origin:374px 407px}
      .ember{animation:ember 7s ease-out infinite}.ember.two{animation-delay:-3.5s}
      .fireflies{animation:float 14s ease-in-out infinite alternate}
      .color-cloud{animation:aurora 23s ease-in-out infinite alternate;transform-origin:center}
      .motion-paused *{animation-play-state:paused!important}
      @keyframes aurora{from{transform:translate(-14px,5px) rotate(-5deg) scale(1);opacity:.5}to{transform:translate(16px,-8px) rotate(4deg) scale(1.12);opacity:.85}}
      @keyframes drift{from{transform:translateX(-20px);opacity:.35}to{transform:translateX(18px);opacity:.65}}
      @keyframes breathe{from{opacity:.4}to{opacity:.9}}
      @keyframes rain-drop{
        0%{transform:translate(0,0);opacity:0}
        8%,85%{opacity:var(--rain-opacity)}
        100%{transform:translate(var(--rain-drift),560px);opacity:0}}
      @keyframes wave-arrive{0%,12%{opacity:0;transform:translateY(-2px) scaleX(.72)}
        36%{opacity:.75}62%{opacity:.48}88%,100%{opacity:0;transform:translateY(5px) scaleX(1.12)}}
      @keyframes bird-breathe{from{transform:scale(1)}to{transform:scale(1.015,1.025)}}
      @keyframes antennae{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
      @keyframes glow{from{opacity:.6;transform:scale(.94)}to{opacity:.95;transform:scale(1.06)}}
      @keyframes flame{from{transform:scale(.96,1.02)}to{transform:scale(1.05,.91)}}
      @keyframes ember{0%{transform:translate(0,0);opacity:0}25%{opacity:.8}100%{transform:translate(12px,-52px);opacity:0}}
      @keyframes float{from{transform:translate(-4px,4px);opacity:.4}to{transform:translate(6px,-8px);opacity:.9}}
      @keyframes clouds{from{transform:translateX(-15px)}to{transform:translateX(20px)}}
      @media(prefers-reduced-motion:reduce){.scene *{animation:none!important;transition:none!important}}
      @media(max-width:900px){.columns{gap:12px;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr)}
        .row{grid-template-columns:44px 94px minmax(50px,1fr) 33px;gap:6px;padding:2px 7px}.name{font-size:13px}}
      @media(max-width:760px){ha-card{padding:10px}.columns{height:auto;max-height:none;grid-template-columns:1fr}
        .sounds{grid-template-rows:repeat(8,54px)}.scene{height:330px}.scene-title{font-size:23px}.help{gap:5px 15px}}
    
      :host{display:block;height:100%;width:100%}.scene{width:100%;height:100%;border:0;border-radius:0}
    </style><div class="scene" data-mode="day">${this.sceneSvg()}</div>`;
  }
  show(dark,selected=[]){
    const scene=this.shadowRoot.querySelector('.scene');
    scene.dataset.mode=dark?'night':'day';
    for(const el of scene.querySelectorAll('[data-effect]'))el.classList.toggle('visible',selected.includes(el.dataset.effect));
  }
  pause(value){this.shadowRoot.querySelector('.scene').classList.toggle('motion-paused',value);}
  sceneSvg(){return this.daySvg()+this.nightSvg();}
  birdDrawing(){
    return `<path d="m-3-1-1 5m9-6 1 4m-12 1h5m3-1h5" fill="none" stroke="var(--branch,currentColor)" stroke-width="1.2" stroke-linecap="round"/>
      <g class="bird-body"><path d="m-9-12-17-5 11 13 10-1Z" fill="var(--bird-wing,currentColor)"/>
      <ellipse cx="-1" cy="-9" rx="13" ry="10" fill="var(--bird-color,currentColor)"/>
      <circle cx="9" cy="-18" r="8" fill="var(--bird-color,currentColor)"/>
      <path d="M-12-12q14-9 18 7-10 8-18-7Z" fill="var(--bird-wing,currentColor)" opacity=".6"/>
      <path d="m16-19 9 3-9 3Z" fill="var(--bird-beak,currentColor)"/>
      <circle cx="12" cy="-20" r="1.5" fill="var(--bird-eye,var(--card-background-color))"/>
      <path d="M-8-3q6 4 12-1" fill="none" stroke="var(--bird-eye,currentColor)" stroke-opacity=".2" stroke-linecap="round"/></g>`;
  }
  cricketDrawing(){
    return `<g fill="none" stroke="var(--cricket-detail,currentColor)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="m-7-7-17-13 8 26-13 3m19-11-6 14-9 2m28-21 7 11 11 1m-11-9 12 1 6 7"/>
      <g class="cricket-antennae"><path d="M14-16q1-15 15-21M17-14q10-15 20-12"/></g></g>
      <path d="M-20-6q17-14 31-5L3 2q-12 1-23-8Z" fill="var(--cricket-body,currentColor)"/>
      <path d="m-16-6 20-3-4 9" fill="none" stroke="var(--cricket-detail,currentColor)" stroke-width="1.2"/>
      <circle cx="13" cy="-12" r="6.5" fill="var(--cricket-body,currentColor)"/>
      <circle cx="15" cy="-14" r="1.4" fill="var(--cricket-eye,var(--card-background-color))"/>`;
  }
  soundIcon(id,icon){
    if(id==='forest')return `<svg class="sound-icon" viewBox="0 0 80 64" aria-hidden="true"><path d="M5 57V36m0 17q38 2 68-15M5 35q-8-13 6-18 10 3 7 13-2 7-13 5Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><g transform="translate(26 47) scale(.8)">${this.birdDrawing()}</g><g transform="translate(57 39) scale(-.75 .75)">${this.birdDrawing()}</g></svg>`;
    if(id==='night')return `<svg class="sound-icon" viewBox="-35 -42 76 65" aria-hidden="true"><path d="M-29 17q24-17 56-7-25 18-56 7Z" fill="currentColor" opacity=".25"/>${this.cricketDrawing()}</svg>`;
    if(id==='ocean')return `<svg class="sound-icon" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 10q3-4 6 0t6 0M17 17q3-4 6 0t6 0M5 24q3-4 6 0t6 0"/></svg>`;
    return `<ha-icon icon="${icon}"></ha-icon>`;
  }
  forestSvg(){
    return `<g data-effect="forest" class="effect perched-tree" transform="translate(500 20) scale(-1 1)">
      <g fill="none" stroke="var(--branch)" stroke-linecap="round" stroke-linejoin="round">
        <path d="M31 373C29 352 29 332 32 317C33 308 34 299 36 291C39 278 42 268 46 263" stroke-width="5"/>
        <path d="M32 317C51 314 69 310 88 305C105 301 122 295 137 289C149 285 160 281 171 277" stroke-width="4.5"/>
        <path d="M36 291Q31 287 28 282M155 283Q158 287 161 291" stroke-width="3"/>
      </g>
      <g fill="var(--leaf)"><path d="M46 263Q40 246 56 238Q68 257 46 263ZM28 282Q12 285 10 270Q25 263 28 282ZM171 277Q176 260 188 264Q187 279 171 277ZM161 291Q177 285 185 301Q169 308 161 291Z"/></g>
      <g class="perched-bird bird-one" transform="translate(88 301)" style="--bird-color:var(--bird-one)">${this.birdDrawing()}</g>
      <g class="perched-bird bird-two" transform="translate(137 287) scale(-.92 .92)" style="--bird-color:var(--bird-two)">${this.birdDrawing()}</g>
    </g>`;
  }
  cricketSvg(){
    return `<g data-effect="night" class="effect cricket-scene">
      <path d="M96 396q49-25 86-37M106 390q-4-23-21-36m48 23q4-23 23-33" fill="none" stroke="var(--cricket-leaf)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M109 384q30-35 91-23-32 35-91 23Z" fill="var(--cricket-leaf)"/>
      <path d="m115 383 75-19" fill="none" stroke="var(--cricket-detail)" stroke-opacity=".5" stroke-width="1.2"/>
      <g class="cricket" transform="translate(157 361) rotate(-10) scale(.95)">${this.cricketDrawing()}</g>
    </g>`;
  }
  oceanSvg(){
    const patches=[[153,328,27],[231,334,36],[313,329,30],[112,349,33],[193,353,45],[289,351,38],
      [349,366,29],[155,375,47],[240,377,41],[92,397,34],[203,400,52],[301,397,43]];
    return `<g data-effect="ocean" class="effect" fill="none" stroke="var(--wave-color)" stroke-width="1.4" stroke-linecap="round">${patches.map(([x,y,width],i)=>{
      const q=width/4;
      return `<g transform="translate(${x} ${y})"><g class="wave-patch" style="--wave-duration:${(5.2+(i*1.37)%4.7).toFixed(2)}s;--wave-delay:${(-i*.83-1.6).toFixed(2)}s;--wave-still-opacity:${(.35+(i%4)*.12).toFixed(2)}"><path d="M0 0q${q/2} -4 ${q} 0t${q} 0t${q} 0t${q} 0"/><path d="M7 6h${Math.max(9,width-17)}" opacity=".35"/></g></g>`;
    }).join('')}</g>`;
  }
  rainSvg(){
    // Generate once so HA state updates do not reshuffle the rain or restart its motion.
    if(this.rainMarkup)return this.rainMarkup;
    const between=(min,max)=>min+Math.random()*(max-min);
    this.rainMarkup=Array.from({length:44},()=>{
      const x=between(4,588),length=between(8,27),slope=between(.08,.25);
      const duration=between(3.1,6.7),phase=Math.random(),drift=-560*slope;
      const style=`--rain-duration:${duration.toFixed(3)}s;--rain-delay:${(-duration*phase).toFixed(3)}s;--rain-drift:${drift.toFixed(2)}px;--rain-opacity:${between(.38,.88).toFixed(2)};--rain-static-x:${(drift*phase).toFixed(2)}px;--rain-static-y:${(560*phase).toFixed(2)}px`;
      return `<path class="rain-drop" d="M${x.toFixed(2)} -32l${(-length*slope).toFixed(2)} ${length.toFixed(2)}" stroke-width="${between(.5,1).toFixed(2)}" style="${style}"/>`;
    }).join('');
    return this.rainMarkup;
  }
  daySvg(){
    const rain=this.rainSvg();
    const trees=Array.from({length:13},(_,i)=>{
      const x=i<6?i*20-12:388+(i-6)*22,y=291+(i%3)*15,s=.65+(i%4)*.13;
      return `<use href="#day-tree" transform="translate(${x} ${y}) scale(${s})"/>`;
    }).join('');
    return `<svg class="landscape day-art" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="day-sky" x2="0" y2="1"><stop stop-color="#abcfd9"/><stop offset=".7" stop-color="#e1e8d1"/><stop offset="1" stop-color="#e9e8c6"/></linearGradient>
        <linearGradient id="day-lake" x2="0" y2="1"><stop stop-color="#95c4bb"/><stop offset="1" stop-color="#6caa9a"/></linearGradient>
        <radialGradient id="day-sun"><stop stop-color="#fbebaa" stop-opacity=".9"/><stop offset=".3" stop-color="#f7e7b1" stop-opacity=".6"/><stop offset="1" stop-color="#efe9bd" stop-opacity="0"/></radialGradient>
        <radialGradient id="day-fire"><stop stop-color="#eeac62" stop-opacity=".7"/><stop offset="1" stop-color="#eab574" stop-opacity="0"/></radialGradient>
        <radialGradient id="day-pink"><stop stop-color="#e0a3b3" stop-opacity=".48"/><stop offset="1" stop-color="#edc1c2" stop-opacity="0"/></radialGradient>
        <radialGradient id="day-brown"><stop stop-color="#dab073" stop-opacity=".5"/><stop offset="1" stop-color="#e4d39f" stop-opacity="0"/></radialGradient>
        <g id="day-tree"><path stroke="#537360" stroke-width="3" d="M0 6v70m0-33-14-13m14 23 14-13"/><path fill="#65957a" d="M-23 20C-37 4-17-11-9-8-8-28 20-25 20-7 43-8 40 18 29 22 40 43 12 48 0 40-22 53-39 35-23 20Z"/><path fill="#87ad86" opacity=".65" d="M-22 13C-29-1-10-14-3-7 9-22 24-10 18 1 34 4 24 22 13 21-1 32-12 23-22 13Z"/></g>
      </defs>
      <path fill="url(#day-sky)" d="M0 0h500v500H0z"/>
      <circle cx="342" cy="119" r="108" fill="url(#day-sun)"/><circle cx="342" cy="119" r="23" fill="#f8e9b4"/>
      <g class="clouds" fill="#f5f2df" opacity=".64"><path d="M32 121q-11-14 8-20 2-23 28-19 12-20 31-4 31-7 35 20 22 0 23 17-58 12-125 6Z"/><path d="M326 183q1-14 20-14 2-14 17-10 13-15 28-1 25-1 26 18 21 0 25 13-67 7-116-6Z"/></g>
      <g data-effect="brown" class="effect"><ellipse class="color-cloud" cx="215" cy="170" rx="265" ry="185" fill="url(#day-brown)"/></g>
      <g data-effect="pink" class="effect"><ellipse class="color-cloud" cx="290" cy="185" rx="260" ry="190" fill="url(#day-pink)"/></g>
      <path fill="#a4bfb0" d="M-20 290q58-79 109-50t108-23q73-88 152 15t173 23v75H-20Z"/>
      <path fill="#7fa68f" d="M-20 288q98-74 157-22t129 13q109-84 185-11l70 28v51H-20Z"/>
      <path fill="url(#day-lake)" d="M0 309q242-20 500 0v191H0Z"/>
      <path fill="#86aa82" d="M0 275q68-15 146 47l-17 12-129 15zm500 6q-62-13-135 44l58 27 77-7Z"/>
      <path class="mist" fill="#e4ebd5" opacity=".2" d="M-25 303q140-14 286 0t269-4v5q-251 11-555 9Z"/>
      <g>${trees}</g>
      ${this.forestSvg()}
      <g style="--wave-color:#e4efe0">${this.oceanSvg()}</g>
      <g data-effect="stream" class="effect"><path class="river-light" fill="#d3e8d9" opacity=".65" d="M232 312q-105 29 16 47t-66 33q-85 19 36 49t-116 59h43q179-31 95-61t-14-40q203-29 35-44t-16-43Z"/></g>
      <path fill="#5d9170" d="M500 373q-48-13-78 6t-78 16l-32 22q107-9 188 48Zm-500 19q67-17 106 10l-34 22 92 35-164 29Z"/>
      <g fill="#c4d3a2"><path d="m28 408 5-21 3 21 9-13-4 21Zm441-6 1-21 7 19 9-10-4 20Z"/><g class="grass-light"><circle cx="45" cy="406" r="2.3"/><circle cx="64" cy="397" r="2"/><circle cx="463" cy="412" r="2.2"/><circle cx="485" cy="418" r="2"/></g></g>
      <g data-effect="fire" class="effect"><ellipse class="fire-light" cx="378" cy="395" rx="64" ry="43" fill="url(#day-fire)"/>
        <path stroke="#866346" stroke-width="5" stroke-linecap="round" d="m362 408 25-4m-22-2 25 8"/>
        <g class="flame"><path fill="#dc833e" d="M364 402c-8-13 5-19 5-31 14 14 1 18 12 10 1 12 13 14 4 23-7 5-15 3-21-2Z"/><path fill="#f8d085" d="M370 403c-5-7 5-11 4-18 10 9 6 13 9 17-3 5-9 4-13 1Z"/></g>
        <circle class="ember" cx="372" cy="376" r="1.2" fill="#c98842"/><circle class="ember two" cx="380" cy="375" r="1" fill="#c98842"/></g>
      ${this.cricketSvg()}
      <g data-effect="rain" class="effect" stroke="#3c778b" stroke-opacity=".4">${rain}</g>
    </svg>`;
  }
  nightSvg(){
    const stars=Array.from({length:36},(_,i)=>`<circle cx="${(i*137+21)%490+5}" cy="${(i*53+33)%226+20}" r="${i%5===0?1.3:.65}"/>`).join('');
    const rain=this.rainSvg();
    const pines=Array.from({length:22},(_,i)=>{
      const x=i<11?i*13-18:375+(i-11)*15,y=281+(i%4)*9,s=.6+(i%5)*.14;
      return `<use href="#pine" transform="translate(${x} ${y}) scale(${s})"/>`;
    }).join('');
    return `<svg class="landscape night-art" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x2="0" y2="1"><stop stop-color="#071322"/><stop offset=".53" stop-color="#163348"/><stop offset="1" stop-color="#235362"/></linearGradient>
        <linearGradient id="lake" x2="0" y2="1"><stop stop-color="#244d5b"/><stop offset="1" stop-color="#0b1d2b"/></linearGradient>
        <linearGradient id="aurora" x2=".2" y2="1"><stop stop-color="#6ab1b8" stop-opacity="0"/><stop offset=".62" stop-color="#64bcba" stop-opacity=".05"/><stop offset=".9" stop-color="#74c7bc" stop-opacity=".46"/><stop offset="1" stop-color="#90d7b6" stop-opacity="0"/></linearGradient>
        <radialGradient id="moon-halo"><stop stop-color="#c1ddd9" stop-opacity=".17"/><stop offset="1" stop-color="#b5d2dc" stop-opacity="0"/></radialGradient>
        <radialGradient id="fire-halo"><stop stop-color="#ffae59" stop-opacity=".57"/><stop offset=".4" stop-color="#e18747" stop-opacity=".21"/><stop offset="1" stop-color="#e07a42" stop-opacity="0"/></radialGradient>
        <radialGradient id="pink-cloud"><stop stop-color="#b988b6" stop-opacity=".42"/><stop offset="1" stop-color="#a076bb" stop-opacity="0"/></radialGradient>
        <radialGradient id="brown-cloud"><stop stop-color="#d4a071" stop-opacity=".4"/><stop offset="1" stop-color="#c68d56" stop-opacity="0"/></radialGradient>
        <linearGradient id="mist" x2="1" y2="0"><stop stop-color="#bdd8d6" stop-opacity="0"/><stop offset=".5" stop-color="#bbd7d6" stop-opacity=".17"/><stop offset="1" stop-color="#bdd8d6" stop-opacity="0"/></linearGradient>
        <path id="pine" d="M0 0l-10 20h5l-12 20h10l-14 22h19v13h4V62h19L7 40h10L5 20h5Z"/>
      </defs>
      <path fill="url(#sky)" d="M0 0h500v500H0z"/>
      <g class="stars" fill="#d3e4e8">${stars}</g>
      <g class="aurora"><path fill="url(#aurora)" d="M-70-10H560V93C427 211 270 29 116 159S-33 90-70-10Z"/></g>
      <g class="aurora second"><path fill="url(#aurora)" d="M-30-80H560V84C414 181 266 112 151 211S9 118-30-80Z"/></g>
      <g data-effect="brown" class="effect"><ellipse class="color-cloud" cx="215" cy="160" rx="260" ry="185" fill="url(#brown-cloud)"/></g>
      <g data-effect="pink" class="effect"><ellipse class="color-cloud" cx="300" cy="160" rx="265" ry="190" fill="url(#pink-cloud)"/></g>
      <circle cx="354" cy="117" r="75" fill="url(#moon-halo)"/>
      <circle cx="354" cy="117" r="17" fill="#d1e1db"/><circle cx="349" cy="112" r="2.5" fill="#becfcb" opacity=".5"/>
      <path fill="#234556" d="M0 290V259L68 203 118 244 191 174 241 222 281 204 350 260 396 209 455 249 500 222V315Z"/>
      <path fill="#193847" d="M0 282l53-39 64 54 87-62 71 60 70-45 75 40 80-55v100H0Z"/>
      <path fill="url(#lake)" d="M0 302h500v198H0z"/>
      <path class="mist" fill="url(#mist)" d="M-40 288Q90 272 264 286T540 282v19Q292 294-40 309Z"/>
      <path fill="#102c37" d="M0 272q60 6 89 41l65 34-74 9-80-3zm500-5q-59 17-109 57l-25 19 77 10 57-6Z"/>
      <g fill="#0c2631" opacity=".85">${pines}</g>
      ${this.forestSvg()}
      <g style="--wave-color:#9ccdcc">${this.oceanSvg()}</g>
      <g data-effect="stream" class="effect"><path class="river-light" fill="#72bcca" opacity=".4" d="M232 312q-105 29 16 47t-66 33q-85 19 36 49t-116 59h43q179-31 95-61t-14-40q203-29 35-44t-16-43Z"/></g>
      <path fill="#081e29" d="M500 373q-48-13-78 6t-78 16l-32 22q107-9 188 48Zm-500 19q67-17 106 10l-34 22 92 35-164 29Z"/>
      <g data-effect="fire" class="effect"><ellipse class="fire-light" cx="378" cy="395" rx="92" ry="65" fill="url(#fire-halo)"/>
        <path stroke="#866346" stroke-width="5" stroke-linecap="round" d="m362 408 25-4m-22-2 25 8"/>
        <g class="flame"><path fill="#ec9a55" d="M364 402c-8-13 5-19 5-31 14 14 1 18 12 10 1 12 13 14 4 23-7 5-15 3-21-2Z"/><path fill="#f7ce83" d="M370 403c-5-7 5-11 4-18 10 9 6 13 9 17-3 5-9 4-13 1Z"/></g>
        <circle class="ember" cx="372" cy="376" r="1.2" fill="#ffce90"/><circle class="ember two" cx="380" cy="375" r="1" fill="#ffbe73"/></g>
      ${this.cricketSvg()}
      <g data-effect="rain" class="effect" stroke="#bbd6df" stroke-opacity=".35">${rain}</g>
    </svg>`;
  }

}
if(!customElements.get('sulparang-nature-scene'))customElements.define('sulparang-nature-scene',SulparangNatureScene);
