function A(){}const vt=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function Et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ot(t){return t()}function et(){return Object.create(null)}function C(t){t.forEach(ot)}function G(t){return typeof t=="function"}function ee(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function ne(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function At(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ie(t){let e;return lt(t,n=>e=n)(),e}function se(t,e,n){t.$$.on_destroy.push(lt(e,n))}function re(t,e,n,i){if(t){const s=at(t,e,n,i);return t[0](s)}}function at(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function oe(t,e,n,i,s,c){if(s){const r=at(e,n,i,c);t.p(r,s)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ae(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ue(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function fe(t){const e={};for(const n in t)e[n]=!0;return e}function de(t,e,n){return t.set(n),e}function _e(t){return t&&G(t.destroy)?t.destroy:A}const ut=typeof window<"u";let Nt=ut?()=>window.performance.now():()=>Date.now(),X=ut?t=>requestAnimationFrame(t):A;const T=new Set;function ft(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&X(ft)}function Tt(t){let e;return T.size===0&&X(ft),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let I=!1;function St(){I=!0}function Ct(){I=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:jt(1,s,_=>e[n[_]].claim_order,a))-1;i[o]=n[d]+1;const f=d+1;n[f]=o,s=Math.max(f,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[o],d)}}function dt(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=U("style");return Ht(_t(t),e),e.sheet}function Ht(t,e){return dt(t.head||t,e),e.sheet}function Ot(t,e){if(I){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function zt(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){I&&!n?Ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function he(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function me(){return Y(" ")}function pe(){return Y("")}function nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ye(t){return function(e){return e.preventDefault(),t.call(this,e)}}function mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ge(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:mt(t,i,e[i])}function be(t,e){Object.keys(e).forEach(n=>{Pt(t,n,e[n])})}function Pt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:mt(t,e,n)}function we(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function xe(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function $e(t){return t===""?null:+t}function qt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){pt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function gt(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ve(t,e,n){return gt(t,e,n,U)}function ke(t,e,n){return gt(t,e,n,ht)}function Rt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function Ee(t){return Rt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ae(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);pt(t);const s=t.splice(n,i-n+1);S(s[0]),S(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(c,e)}function Ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Te(t,e){t.value=e==null?"":e}function Se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ce(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function je(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let L;function Bt(){if(L===void 0){L=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{L=!0}}return L}function Me(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=U("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Bt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=nt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=nt(i.contentWindow,"resize",e)}),dt(t,i),()=>{(s||c&&i.contentWindow)&&c(),S(i)}}function De(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function He(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ht(n.nodeName):this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)zt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class st extends Wt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}function Oe(t,e){return new t(e)}const B=new Map;let W=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Dt(e),rules:{}};return B.set(t,n),n}function rt(t,e,n,i,s,c,r,l=0){const o=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*c(y);a+=y*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ft(d)}_${l}`,_=_t(t),{stylesheet:u,rules:h}=B.get(_)||Gt(_,t);h[f]||(h[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,W+=1,f}function It(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Ut())}function Ut(){X(()=>{W||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&S(e)}),B.clear())})}let H;function x(t){H=t}function v(){if(!H)throw new Error("Function called outside component initialization");return H}function ze(t){v().$$.before_update.push(t)}function Le(t){v().$$.on_mount.push(t)}function Pe(t){v().$$.after_update.push(t)}function qe(t){v().$$.on_destroy.push(t)}function Re(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Be(t,e){return v().$$.context.set(t,e),e}function We(t){return v().$$.context.get(t)}function Fe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const D=[],ct=[],q=[],Q=[],wt=Promise.resolve();let V=!1;function xt(){V||(V=!0,wt.then(Z))}function Ge(){return xt(),wt}function F(t){q.push(t)}function Ie(t){Q.push(t)}const J=new Set;let P=0;function Z(){const t=H;do{for(;P<D.length;){const e=D[P];P++,x(e),Jt(e.$$)}for(x(null),D.length=0,P=0;ct.length;)ct.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];J.has(n)||(J.add(n),n())}q.length=0}while(D.length);for(;Q.length;)Q.pop()();V=!1,J.clear(),x(t)}function Jt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let M;function Kt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function K(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const R=new Set;let $;function Qt(){$={r:0,c:[],p:$}}function Vt(){$.r||C($.c),$=$.p}function tt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),$.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Xt={duration:0};function Ue(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,l=null,o=null,a=null;function d(){a&&It(t,a)}function f(u,h){const p=u.b-r;return h*=Math.abs(p),{a:r,b:u.b,d:p,duration:h,start:u.start,end:u.start+h,group:u.group}}function _(u){const{delay:h=0,duration:p=300,easing:y=vt,tick:g=A,css:k}=c||Xt,N={start:Nt()+h,b:u};u||(N.group=$,$.r+=1),l||o?o=N:(k&&(d(),a=rt(t,r,u,p,h,y,k)),u&&g(0,1),l=f(N,p),F(()=>K(t,u,"start")),Tt(E=>{if(o&&E>o.start&&(l=f(o,p),o=null,K(t,l.b,"start"),k&&(d(),a=rt(t,r,l.b,l.duration,0,y,c.css))),l){if(E>=l.end)g(r=l.b,1-r),K(t,l.b,"end"),o||(l.b?d():--l.group.r||C(l.group.c)),l=null;else if(E>=l.start){const j=E-l.start;r=l.a+l.d*y(j/l.duration),g(r,1-r)}}return!!(l||o)}))}return{run(u){G(c)?Kt().then(()=>{c=c(s),_(u)}):_(u)},end(){d(),l=o=null}}}function Je(t,e){const n=e.token={};function i(s,c,r,l){if(e.token!==n)return;e.resolved=l;let o=e.ctx;r!==void 0&&(o=o.slice(),o[r]=l);const a=s&&(e.current=s)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,_)=>{_!==c&&f&&(Qt(),$t(f,1,1,()=>{e.blocks[_]===f&&(e.blocks[_]=null)}),Vt())}):e.block.d(1),a.c(),tt(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[c]=a),d&&Z()}if(Et(t)){const s=v();if(t.then(c=>{x(s),i(e.then,1,e.value,c),x(null)},c=>{if(x(s),i(e.catch,2,e.error,c),x(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ke(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ve(t,e){t.d(1),e.delete(t.key)}function Xe(t,e){$t(t,1,1,()=>{e.delete(t.key)})}function Ye(t,e,n,i,s,c,r,l,o,a,d,f){let _=t.length,u=c.length,h=_;const p={};for(;h--;)p[t[h].key]=h;const y=[],g=new Map,k=new Map;for(h=u;h--;){const m=f(s,c,h),b=n(m);let w=r.get(b);w?i&&w.p(m,e):(w=a(b,m),w.c()),g.set(b,y[h]=w),b in p&&k.set(b,Math.abs(h-p[b]))}const N=new Set,E=new Set;function j(m){tt(m,1),m.m(l,d),r.set(m.key,m),d=m.first,u--}for(;_&&u;){const m=y[u-1],b=t[_-1],w=m.key,O=b.key;m===b?(d=m.first,_--,u--):g.has(O)?!r.has(w)||N.has(w)?j(m):E.has(O)?_--:k.get(w)>k.get(O)?(E.add(w),j(m)):(N.add(O),_--):(o(b,r),_--)}for(;_--;){const m=t[_];g.has(m.key)||o(m,r)}for(;u;)j(y[u-1]);return y}function Ze(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function tn(t){return typeof t=="object"&&t!==null?t:{}}function en(t,e,n,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,i===void 0&&n(t.$$.ctx[s]))}function nn(t){t&&t.c()}function sn(t,e){t&&t.l(e)}function Yt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(ot).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),c.forEach(F)}function Zt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function te(t,e){t.$$.dirty[0]===-1&&(D.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rn(t,e,n,i,s,c,r,l=[-1]){const o=H;x(t);const a=t.$$={fragment:null,ctx:[],props:c,update:A,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:et(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...u)=>{const h=u.length?u[0]:_;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&te(t,f)),_}):[],a.update(),d=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){St();const f=qt(e.target);a.fragment&&a.fragment.l(f),f.forEach(S)}else a.fragment&&a.fragment.c();e.intro&&tt(t.$$.fragment),Yt(t,e.target,e.anchor,e.customElement),Ct(),Z()}x(o)}class cn{$destroy(){Zt(this,1),this.$destroy=A}$on(e,n){if(!G(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Re as $,Ge as A,A as B,ht as C,ke as D,De as E,ne as F,Ot as G,_e as H,nt as I,C as J,se as K,re as L,oe as M,le as N,ce as O,he as P,G as Q,ct as R,cn as S,Te as T,ye as U,de as V,Z as W,kt as X,ge as Y,Ze as Z,ue as _,me as a,ae as a0,Je as a1,Ke as a2,He as a3,Ye as a4,Ve as a5,we as a6,Be as a7,Fe as a8,be as a9,F as aa,Ue as ab,v as ac,tn as ad,en as ae,Ie as af,$e as ag,ie as ah,ze as ai,Pt as aj,Me as ak,Xe as al,st as am,Ae as an,xe as ao,qe as ap,Qe as aq,Nt as ar,Tt as as,lt as at,fe as au,We as av,Ce as aw,je as ax,Lt as b,Ee as c,Vt as d,pe as e,tt as f,Qt as g,S as h,rn as i,Pe as j,U as k,ve as l,qt as m,mt as n,Le as o,Se as p,Y as q,Rt as r,ee as s,$t as t,Ne as u,Oe as v,nn as w,sn as x,Yt as y,Zt as z};