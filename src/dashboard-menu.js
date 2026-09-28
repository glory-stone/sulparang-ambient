// Only owns the Home Assistant chrome while this dashboard card is connected.
export function attachSulparangMenu(card){
 let root=null,main=null,drawer=null;
 for(let node=card;node;node=node.parentElement||node.getRootNode()?.host){
  if(node.localName==='hui-root')root=node.shadowRoot;
  if(node.localName==='home-assistant-main')main=node;
  if(node.localName==='ha-drawer')drawer=node;
 }
 if(!root||!main?.shadowRoot||!drawer?.shadowRoot)return ()=>{};
 const key=Symbol.for('sulparang.dashboard-menu.v1');
 if(main[key]){main[key].users.add(card);return ()=>main[key]?.release(card);}
 const users=new Set([card]),styles=[],titles=new Map();let visible=false,press=null,suppressUntil=0;
 const style=(parent,css)=>{const el=document.createElement('style');el.textContent=css;parent.append(el);styles.push(el);return el;};
 const sidebar=style(main.shadowRoot,''),layout=style(drawer.shadowRoot,''),header=style(root,'.main-title{user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:manipulation;cursor:pointer}.main-title:focus-visible{outline:2px solid var(--primary-color);outline-offset:4px}');
 const apply=()=>{
  sidebar.textContent=visible?'ha-sidebar{display:block!important}ha-drawer{--ha-sidebar-width:var(--app-drawer-width,256px)!important;--ha-top-app-bar-width:calc(100% - var(--app-drawer-width,256px))!important}@media(max-width:870px){ha-drawer{--ha-sidebar-width:0px!important;--ha-top-app-bar-width:100%!important}}':'ha-sidebar{display:none!important}ha-drawer{--ha-sidebar-width:0px!important;--ha-top-app-bar-width:100%!important}';
  layout.textContent=visible?'.sidebar-shell{display:block!important}.app-content{padding-inline-start:var(--app-drawer-width,256px)!important}@media(max-width:870px){.app-content{padding-inline-start:0!important}}':'.sidebar-shell{display:none!important}.app-content{padding-inline-start:0!important}';
  const title=root.querySelector('.main-title');if(!title)return;
  if(!titles.has(title))titles.set(title,Object.fromEntries(['role','tabindex','aria-expanded','title'].map(k=>[k,title.getAttribute(k)])));
  title.setAttribute('role','button');title.setAttribute('tabindex','0');title.setAttribute('aria-expanded',String(visible));
  title.title='Long press / Enter: menu · 길게 누르기: 메뉴';
 };
 const toggle=()=>{visible=!visible;apply();if(visible){main.dispatchEvent(new CustomEvent('hass-dock-sidebar',{detail:{dock:'docked'},bubbles:true,composed:true}));if(drawer.getAttribute('type')==='modal')main.dispatchEvent(new CustomEvent('hass-toggle-menu',{bubbles:true,composed:true}));}};
 const target=e=>e.composedPath().find(el=>el?.matches?.('.main-title')&&el.getRootNode()===root);
 const cancel=()=>{if(press)clearTimeout(press.timer);press=null;};
 const down=e=>{if(!target(e)||e.button!==0||e.isPrimary===false){cancel();return;}cancel();press={id:e.pointerId,x:e.clientX,y:e.clientY};press.timer=setTimeout(()=>{press=null;suppressUntil=Date.now()+1200;toggle();},800);};
 const move=e=>{if(press&&e.pointerId===press.id&&Math.hypot(e.clientX-press.x,e.clientY-press.y)>12)cancel();};
 const click=e=>{if(target(e)&&Date.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation();suppressUntil=0;}};
 const context=e=>{if(target(e))e.preventDefault();};
 const keydown=e=>{if(target(e)&&(e.key==='Enter'||e.key===' ')&&!e.repeat){e.preventDefault();cancel();toggle();}};
 const listeners={pointerdown:down,pointermove:move,pointerup:cancel,pointercancel:cancel,click,contextmenu:context,keydown};
 for(const [event,fn]of Object.entries(listeners))document.addEventListener(event,fn,true);
 window.addEventListener('blur',cancel);
 const observer=new MutationObserver(()=>{if(!root.querySelector('.main-title')?.hasAttribute('aria-expanded'))apply();});
 observer.observe(root,{childList:true,subtree:true});apply();
 const release=owner=>{users.delete(owner);if(users.size)return;cancel();observer.disconnect();for(const [event,fn]of Object.entries(listeners))document.removeEventListener(event,fn,true);window.removeEventListener('blur',cancel);styles.forEach(el=>el.remove());for(const [el,attrs]of titles)for(const [k,v]of Object.entries(attrs)){if(v===null)el.removeAttribute(k);else el.setAttribute(k,v);}delete main[key];};
 main[key]={users,release};return ()=>release(card);
}
