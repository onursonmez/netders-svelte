function E(){}const mt=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function yt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function et(t){return t()}function Y(){return Object.create(null)}function A(t){t.forEach(et)}function F(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Qt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function gt(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ut(t){let e;return nt(t,n=>e=n)(),e}function Vt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Xt(t,e,n,i){if(t){const s=it(t,e,n,i);return t[0](s)}}function it(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Zt(t,e,n,i,s,o){if(s){const r=it(e,n,i,o);t.p(r,s)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ie(t,e,n){return t.set(n),e}function se(t){return t&&F(t.destroy)?t.destroy:E}const st=typeof window<"u";let bt=st?()=>window.performance.now():()=>Date.now(),Q=st?t=>requestAnimationFrame(t):E;const S=new Set;function rt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Q(rt)}function wt(t){let e;return S.size===0&&Q(rt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let I=!1;function $t(){I=!0}function xt(){I=!1}function vt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:vt(1,s,d=>e[n[d]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(r[c],_)}}function Et(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=ot("style");return St(ct(t),e),e.sheet}function St(t,e){return Et(t.head||t,e),e.sheet}function At(t,e){if(I){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function re(t,e,n){I&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function le(){return U(" ")}function oe(){return U("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ut(t,i,e[i])}function _e(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:ut(t,e,n)}function de(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function he(t){return t===""?null:+t}function Dt(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,s=!1){Mt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return at(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function me(t,e,n){return ft(t,e,n,ot)}function pe(t,e,n){return ft(t,e,n,jt)}function Tt(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ye(t){return Tt(t," ")}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function be(t,e){t.value=e==null?"":e}function we(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $e(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function xe(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ve(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ke(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Ee(t,e){return new t(e)}const z=new Map;let B=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Nt(e),rules:{}};return z.set(t,n),n}function Z(t,e,n,i,s,o,r,l=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*o(y);u+=y*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${l}`,d=ct(t),{stylesheet:a,rules:h}=z.get(d)||Pt(d,t);h[f]||(h[f]=!0,a.insertRule(`@keyframes ${f} ${_}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,B+=1,f}function qt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Rt())}function Rt(){Q(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&lt(e)}),z.clear())})}let M;function $(t){M=t}function T(){if(!M)throw new Error("Function called outside component initialization");return M}function Ne(t){T().$$.on_mount.push(t)}function Se(t){T().$$.after_update.push(t)}function Ae(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function je(t,e){return T().$$.context.set(t,e),e}function Ce(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const D=[],tt=[],R=[],J=[],dt=Promise.resolve();let K=!1;function ht(){K||(K=!0,dt.then(V))}function De(){return ht(),dt}function H(t){R.push(t)}function Me(t){J.push(t)}const W=new Set;let q=0;function V(){const t=M;do{for(;q<D.length;){const e=D[q];q++,$(e),Lt(e.$$)}for($(null),D.length=0,q=0;tt.length;)tt.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];W.has(n)||(W.add(n),n())}R.length=0}while(D.length);for(;J.length;)J.pop()();K=!1,W.clear(),$(t)}function Lt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let C;function zt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function G(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const L=new Set;let x;function Bt(){x={r:0,c:[],p:x}}function Ht(){x.r||A(x.c),x=x.p}function X(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),x.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It={duration:0};function Te(t,e,n,i){const s={direction:"both"};let o=e(t,n,s),r=i?0:1,l=null,c=null,u=null;function _(){u&&qt(t,u)}function f(a,h){const p=a.b-r;return h*=Math.abs(p),{a:r,b:a.b,d:p,duration:h,start:a.start,end:a.start+h,group:a.group}}function d(a){const{delay:h=0,duration:p=300,easing:y=mt,tick:g=E,css:v}=o||It,N={start:bt()+h,b:a};a||(N.group=x,x.r+=1),l||c?c=N:(v&&(_(),u=Z(t,r,a,p,h,y,v)),a&&g(0,1),l=f(N,p),H(()=>G(t,a,"start")),wt(k=>{if(c&&k>c.start&&(l=f(c,p),c=null,G(t,l.b,"start"),v&&(_(),u=Z(t,r,l.b,l.duration,0,y,o.css))),l){if(k>=l.end)g(r=l.b,1-r),G(t,l.b,"end"),c||(l.b?_():--l.group.r||A(l.group.c)),l=null;else if(k>=l.start){const j=k-l.start;r=l.a+l.d*y(j/l.duration),g(r,1-r)}}return!!(l||c)}))}return{run(a){F(o)?zt().then(()=>{o=o(s),d(a)}):d(a)},end(){_(),l=c=null}}}function Oe(t,e){const n=e.token={};function i(s,o,r,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=l);const u=s&&(e.current=s)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(Bt(),Ft(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Ht())}):e.block.d(1),u.c(),X(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[o]=u),_&&V()}if(yt(t)){const s=T();if(t.then(o=>{$(s),i(e.then,1,e.value,o),$(null)},o=>{if($(s),i(e.catch,2,e.error,o),$(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Pe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Re(t,e){t.d(1),e.delete(t.key)}function Le(t,e,n,i,s,o,r,l,c,u,_,f){let d=t.length,a=o.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const y=[],g=new Map,v=new Map;for(h=a;h--;){const m=f(s,o,h),b=n(m);let w=r.get(b);w?i&&w.p(m,e):(w=u(b,m),w.c()),g.set(b,y[h]=w),b in p&&v.set(b,Math.abs(h-p[b]))}const N=new Set,k=new Set;function j(m){X(m,1),m.m(l,_),r.set(m.key,m),_=m.first,a--}for(;d&&a;){const m=y[a-1],b=t[d-1],w=m.key,O=b.key;m===b?(_=m.first,d--,a--):g.has(O)?!r.has(w)||N.has(w)?j(m):k.has(O)?d--:v.get(w)>v.get(O)?(k.add(w),j(m)):(N.add(O),d--):(c(b,r),d--)}for(;d--;){const m=t[d];g.has(m.key)||c(m,r)}for(;a;)j(y[a-1]);return y}function ze(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Be(t){return typeof t=="object"&&t!==null?t:{}}function He(t,e,n,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,i===void 0&&n(t.$$.ctx[s]))}function Fe(t){t&&t.c()}function Ie(t,e){t&&t.l(e)}function Wt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(et).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),o.forEach(H)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(D.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,n,i,s,o,r,l=[-1]){const c=M;$(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...a)=>{const h=a.length?a[0]:d;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Jt(t,f)),d}):[],u.update(),_=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const f=Dt(e.target);u.fragment&&u.fragment.l(f),f.forEach(lt)}else u.fragment&&u.fragment.c();e.intro&&X(t.$$.fragment),Wt(t,e.target,e.anchor,e.customElement),xt(),V()}$(c)}class Ge{$destroy(){Gt(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ee as $,De as A,E as B,Xt as C,Zt as D,te as E,Yt as F,Qt as G,At as H,Vt as I,ce as J,jt as K,pe as L,ve as M,se as N,ue as O,A as P,Ut as Q,be as R,Ge as S,ae as T,ie as U,V,pt as W,fe as X,ze as Y,ne as Z,Ae as _,le as a,tt as a0,Oe as a1,Pe as a2,ke as a3,je as a4,Ce as a5,_e as a6,F as a7,H as a8,Te as a9,T as aa,Be as ab,de as ac,Le as ad,Re as ae,$e as af,he as ag,xe as ah,bt as ai,wt as aj,nt as ak,qe as al,He as am,Me as an,re as b,ye as c,Ht as d,oe as e,X as f,Bt as g,lt as h,We as i,Se as j,ot as k,me as l,Dt as m,ut as n,Ne as o,we as p,U as q,Tt as r,Kt as s,Ft as t,ge as u,Ee as v,Fe as w,Ie as x,Wt as y,Gt as z};