import{S as L,i as O,s as P,M as $,k as B,a as b,D as C,l as j,m as v,h as f,c as E,E as I,n as i,b as y,H as k,J as M,O as S,P as V,Q as q,g as H,d as J,K as Q,Z,w as z}from"./index.ec65748e.mjs";const A=s=>({}),K=s=>({});function F(s){let r,c,t,p,h,l,u,d,m,_;const g=s[4].header,o=$(g,s,s[3],K),w=s[4].default,n=$(w,s,s[3],null);return{c(){r=B("div"),c=b(),t=B("div"),o&&o.c(),p=b(),n&&n.c(),h=b(),l=C("svg"),u=C("path"),this.h()},l(e){r=j(e,"DIV",{class:!0}),v(r).forEach(f),c=E(e),t=j(e,"DIV",{class:!0,role:!0,"aria-modal":!0});var a=v(t);o&&o.l(a),p=E(a),n&&n.l(a),h=E(a),l=I(a,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var D=v(l);u=I(D,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(u).forEach(f),D.forEach(f),a.forEach(f),this.h()},h(){i(r,"class","modal-background svelte-bhvapa"),i(u,"stroke-linecap","round"),i(u,"stroke-linejoin","round"),i(u,"d","M6 18L18 6M6 6l12 12"),i(l,"xmlns","http://www.w3.org/2000/svg"),i(l,"fill","none"),i(l,"viewBox","0 0 24 24"),i(l,"stroke-width","1.5"),i(l,"stroke","currentColor"),i(l,"class","modalCloseButton svelte-bhvapa"),i(t,"class","modal svelte-bhvapa"),i(t,"role","dialog"),i(t,"aria-modal","true")},m(e,a){y(e,r,a),y(e,c,a),y(e,t,a),o&&o.m(t,null),k(t,p),n&&n.m(t,null),k(t,h),k(t,l),k(l,u),s[5](t),d=!0,m||(_=[M(window,"keydown",s[2]),M(r,"click",s[1]),M(l,"click",s[1])],m=!0)},p(e,[a]){o&&o.p&&(!d||a&8)&&S(o,g,e,e[3],d?q(g,e[3],a,A):V(e[3]),K),n&&n.p&&(!d||a&8)&&S(n,w,e,e[3],d?q(w,e[3],a,null):V(e[3]),null)},i(e){d||(H(o,e),H(n,e),d=!0)},o(e){J(o,e),J(n,e),d=!1},d(e){e&&f(r),e&&f(c),e&&f(t),o&&o.d(e),n&&n.d(e),s[5](null),m=!1,Q(_)}}}function G(s,r,c){let{$$slots:t={},$$scope:p}=r;const h=Z(),l=()=>h("close");let u;const d=_=>{_.key==="Escape"&&l()};function m(_){z[_?"unshift":"push"](()=>{u=_,c(0,u)})}return s.$$set=_=>{"$$scope"in _&&c(3,p=_.$$scope)},[u,l,d,p,t,m]}class R extends L{constructor(r){super(),O(this,r,G,F,P,{})}}export{R as M};