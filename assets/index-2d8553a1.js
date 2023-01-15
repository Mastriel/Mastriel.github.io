var ot=Object.defineProperty;var rt=(t,e,n)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>(rt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function B(){}function Ze(t){return t()}function Be(){return Object.create(null)}function J(t){t.forEach(Ze)}function Ke(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let he;function Ee(t,e){return he||(he=document.createElement("a")),he.href=e,t===he.href}function lt(t){return Object.keys(t).length===0}function Ge(t,...e){if(t==null)return B;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function V(t){let e;return Ge(t,n=>e=n)(),e}function N(t,e,n){t.$$.on_destroy.push(Ge(e,n))}function v(t,e){t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function de(t){return document.createTextNode(t)}function P(){return de(" ")}function We(){return de("")}function O(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Me(t,e){return new t(e)}let ae;function ue(t){ae=t}function ut(){if(!ae)throw new Error("Function called outside component initialization");return ae}function He(t){ut().$$.on_mount.push(t)}const ce=[],_e=[],we=[],Pe=[],at=Promise.resolve();let Ce=!1;function ft(){Ce||(Ce=!0,at.then(Je))}function Ie(t){we.push(t)}const ye=new Set;let me=0;function Je(){const t=ae;do{for(;me<ce.length;){const e=ce[me];me++,ue(e),dt(e.$$)}for(ue(null),ce.length=0,me=0;_e.length;)_e.pop()();for(let e=0;e<we.length;e+=1){const n=we[e];ye.has(n)||(ye.add(n),n())}we.length=0}while(ce.length);for(;Pe.length;)Pe.pop()();Ce=!1,ye.clear(),ue(t)}function dt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ie)}}const ge=new Set;let H;function Ae(){H={r:0,c:[],p:H}}function ze(){H.r||J(H.c),H=H.p}function Y(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(ge.has(t))return;ge.add(t),H.c.push(()=>{ge.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function pt(t,e){R(t,1,1,()=>{e.delete(t.key)})}function ht(t,e,n,s,i,o,l,c,u,r,_,g){let a=t.length,f=o.length,d=a;const b={};for(;d--;)b[t[d].key]=d;const j=[],M=new Map,S=new Map;for(d=f;d--;){const k=g(i,o,d),E=n(k);let p=l.get(E);p?s&&p.p(k,e):(p=r(E,k),p.c()),M.set(E,j[d]=p),E in b&&S.set(E,Math.abs(d-b[E]))}const A=new Set,z=new Set;function q(k){Y(k,1),k.m(c,_),l.set(k.key,k),_=k.first,f--}for(;a&&f;){const k=j[f-1],E=t[a-1],p=k.key,C=E.key;k===E?(_=k.first,a--,f--):M.has(C)?!l.has(p)||A.has(p)?q(k):z.has(C)?a--:S.get(p)>S.get(C)?(z.add(p),q(k)):(A.add(C),a--):(u(E,l),a--)}for(;a--;){const k=t[a];M.has(k.key)||u(k,l)}for(;f;)q(j[f-1]);return j}function fe(t){t&&t.c()}function ne(t,e,n,s){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),s||Ie(()=>{const l=t.$$.on_mount.map(Ze).filter(Ke);t.$$.on_destroy?t.$$.on_destroy.push(...l):J(l),t.$$.on_mount=[]}),o.forEach(Ie)}function se(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,s,i,o,l,c=[-1]){const u=ae;ue(t);const r=t.$$={fragment:null,ctx:[],props:o,update:B,not_equal:i,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Be(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};l&&l(r.root);let _=!1;if(r.ctx=n?n(t,e.props||{},(g,a,...f)=>{const d=f.length?f[0]:a;return r.ctx&&i(r.ctx[g],r.ctx[g]=d)&&(!r.skip_bound&&r.bound[g]&&r.bound[g](d),_&&mt(t,g)),a}):[],r.update(),_=!0,J(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const g=ct(e.target);r.fragment&&r.fragment.l(g),g.forEach(I)}else r.fragment&&r.fragment.c();e.intro&&Y(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),Je()}ue(u)}class oe{$destroy(){se(this,1),this.$destroy=B}$on(e,n){if(!Ke(n))return B;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=[];function x(t,e=B){let n;const s=new Set;function i(c){if(Q(t,c)&&(t=c,n)){const u=!ee.length;for(const r of s)r[1](),ee.push(r,t);if(u){for(let r=0;r<ee.length;r+=2)ee[r][0](ee[r+1]);ee.length=0}}}function o(c){i(c(t))}function l(c,u=B){const r=[c,u];return s.add(r),s.size===1&&(n=e(i)||B),c(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:l}}function wt(){return{close:!0,minimize:!0,maximize:!1}}class gt{constructor(e,n,s,i){m(this,"stores");this.stores=new _t(e,n,s,i)}get x(){return V(this.stores.x)}set x(e){this.stores.x.set(e)}get y(){return V(this.stores.y)}set y(e){this.stores.y.set(e)}get width(){return V(this.stores.width)}set width(e){this.stores.width.set(e)}get height(){return V(this.stores.height)}set height(e){this.stores.height.set(e)}get title(){return V(this.stores.title)}set title(e){this.stores.title.set(e)}get classes(){return V(this.stores.classes)}set classes(e){this.stores.classes.set(e)}get style(){return V(this.stores.style)}set style(e){this.stores.style.set(e)}get resizable(){return V(this.stores.resizable)}set resizable(e){this.stores.resizable.set(e)}get important(){return V(this.stores.important)}set important(e){this.stores.important.set(e)}get isVisible(){return V(this.stores.isVisible)}set isVisible(e){this.stores.isVisible.set(e)}get icon(){return V(this.stores.icon)}set icon(e){this.stores.icon.set(e)}get controlButtons(){return V(this.stores.controlButtons)}set controlButtons(e){this.stores.controlButtons.set(e)}}class _t{constructor(e,n,s,i){m(this,"classes",x(""));m(this,"style",x(""));m(this,"title",x());m(this,"icon",x());m(this,"resizable",x(!1));m(this,"important",x(!1));m(this,"isVisible",x(!0));m(this,"controlButtons",x(wt()));m(this,"height");m(this,"width");m(this,"y");m(this,"x");this.x=x(e),this.y=x(n),this.width=x(s),this.height=x(i)}}const D=class extends gt{constructor(n,s,i,o,l){super(n,s,i,o);m(this,"_process");m(this,"windowElement");m(this,"onPopInEnd",n=>{let s=i=>{i.animationName=="pop-in"&&(this.windowElement.removeEventListener("animationend",s),n())};this.windowElement.onanimationend=s});m(this,"playCloseAnimation",()=>{this.windowElement.classList.remove("window-spawn"),this.windowElement.style.animationDirection="reverse",this.windowElement.offsetWidth,this.windowElement.classList.add("window-spawn")});m(this,"kill",()=>{let n=D.windows.filter(s=>s!=this);D.windowsStore.set(n)});this.component=l}static get activeWindow(){return V(this.activeWindowStore)}static set activeWindow(n){this.activeWindowStore.set(n)}static getWindows(){return[...this.windows]}get process(){return this._process}get isAlive(){return this._process!=null}get isActive(){return D.activeWindow==this}get isVisible(){return V(this.stores.isVisible)}set isVisible(n){n?this.stores.isVisible.set(n):(this.playCloseAnimation(),this.onPopInEnd(()=>this.stores.isVisible.set(n)))}hide(){this.isVisible=!1}unhide(){this.isVisible=!0}close(){this.playCloseAnimation(),this.onPopInEnd(this.kill)}};let T=D;m(T,"windowsStore",x([])),m(T,"windows"),m(T,"activeWindowStore",x(void 0)),m(T,"spawn",(n,s)=>(D.windowsStore.set([...D.windows,n]),n._process=s,n.title=n.process.app.name,n)),(()=>{D.windowsStore.subscribe(n=>{D.windows=n})})();let Qe=0;const ke=()=>Qe++,Ve=()=>Qe;function xe(t){let e;return{c(){e=y("div"),L(e,"height",t[2]+"px"),L(e,"width",t[5]+"px"),h(e,"class","absolute")},m(n,s){W(n,e,s)},p(n,s){s&4&&L(e,"height",n[2]+"px"),s&32&&L(e,"width",n[5]+"px")},d(n){n&&I(e)}}}function bt(t){let e,n,s,i,o,l=t[1]&&xe(t);var c=t[0].component;function u(r){return{props:{window:r[0],process:r[0].process}}}return c&&(s=Me(c,u(t))),{c(){e=y("div"),l&&l.c(),n=P(),s&&fe(s.$$.fragment),h(e,"style",i="height: "+t[2]+"px;"+t[3]),h(e,"class",t[4])},m(r,_){W(r,e,_),l&&l.m(e,null),v(e,n),s&&ne(s,e,null),o=!0},p(r,[_]){r[1]?l?l.p(r,_):(l=xe(r),l.c(),l.m(e,n)):l&&(l.d(1),l=null);const g={};if(_&1&&(g.window=r[0]),_&1&&(g.process=r[0].process),c!==(c=r[0].component)){if(s){Ae();const a=s;R(a.$$.fragment,1,0,()=>{se(a,1)}),ze()}c?(s=Me(c,u(r)),fe(s.$$.fragment),Y(s.$$.fragment,1),ne(s,e,null)):s=null}else c&&s.$set(g);(!o||_&12&&i!==(i="height: "+r[2]+"px;"+r[3]))&&h(e,"style",i),(!o||_&16)&&h(e,"class",r[4])},i(r){o||(s&&Y(s.$$.fragment,r),o=!0)},o(r){s&&R(s.$$.fragment,r),o=!1},d(r){r&&I(e),l&&l.d(),s&&se(s)}}}function vt(t,e,n){let s,i,o,l,{window:c}=e,{notImportant:u}=e,{style:r,classes:_,height:g,width:a}=c.stores;return N(t,r,f=>n(3,i=f)),N(t,_,f=>n(4,o=f)),N(t,g,f=>n(2,s=f)),N(t,a,f=>n(5,l=f)),t.$$set=f=>{"window"in f&&n(0,c=f.window),"notImportant"in f&&n(1,u=f.notImportant)},[c,u,s,i,o,l,r,_,g,a]}class yt extends oe{constructor(e){super(),ie(this,e,vt,bt,Q,{window:0,notImportant:1})}}function Ne(t){let e,n,s,i,o,l,c,u,r,_,g,a,f,d,b=t[8]!==void 0&&t[8].length!==0&&Oe(t);function j(p,C){return p[10]===p[0]?Et:kt}let M=j(t),S=M(t),A=t[11].minimize&&je(),z=t[11].maximize&&Xe();function q(p,C){return p[11].close?It:Ct}let k=q(t),E=k(t);return g=new yt({props:{window:t[0],notImportant:t[3]}}),{c(){e=y("div"),n=y("div"),s=y("div"),b&&b.c(),i=P(),S.c(),o=P(),l=y("div"),c=y("span"),A&&A.c(),u=P(),z&&z.c(),r=P(),E.c(),_=P(),fe(g.$$.fragment),h(s,"class","flex items-center"),h(c,"class","pr-2.5 mb-1"),h(l,"class","flex items-center"),h(n,"class","h-7 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none svelte-jpt6my"),L(n,"width",t[5]-2+"px"),h(e,"class","absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md window-spawn"),L(e,"width",t[5]+"px"),L(e,"left",t[6]+"px"),L(e,"top",t[7]+"px"),L(e,"z-index",t[2])},m(p,C){W(p,e,C),v(e,n),v(n,s),b&&b.m(s,null),v(s,i),S.m(s,null),v(n,o),v(n,l),v(l,c),A&&A.m(c,null),v(c,u),z&&z.m(c,null),v(c,r),E.m(c,null),t[25](n),v(e,_),ne(g,e,null),t[26](e),a=!0,f||(d=[O(n,"mousedown",t[21]),O(n,"mouseup",t[22]),O(n,"mousemove",t[23]),O(e,"mousedown",t[19])],f=!0)},p(p,C){p[8]!==void 0&&p[8].length!==0?b?b.p(p,C):(b=Oe(p),b.c(),b.m(s,i)):b&&(b.d(1),b=null),M===(M=j(p))&&S?S.p(p,C):(S.d(1),S=M(p),S&&(S.c(),S.m(s,null))),p[11].minimize?A||(A=je(),A.c(),A.m(c,u)):A&&(A.d(1),A=null),p[11].maximize?z||(z=Xe(),z.c(),z.m(c,r)):z&&(z.d(1),z=null),k===(k=q(p))&&E?E.p(p,C):(E.d(1),E=k(p),E&&(E.c(),E.m(c,null))),(!a||C[0]&32)&&L(n,"width",p[5]-2+"px");const F={};C[0]&1&&(F.window=p[0]),C[0]&8&&(F.notImportant=p[3]),g.$set(F),(!a||C[0]&32)&&L(e,"width",p[5]+"px"),(!a||C[0]&64)&&L(e,"left",p[6]+"px"),(!a||C[0]&128)&&L(e,"top",p[7]+"px"),(!a||C[0]&4)&&L(e,"z-index",p[2])},i(p){a||(Y(g.$$.fragment,p),a=!0)},o(p){R(g.$$.fragment,p),a=!1},d(p){p&&I(e),b&&b.d(),S.d(),A&&A.d(),z&&z.d(),E.d(),t[25](null),se(g),t[26](null),f=!1,J(d)}}}function Oe(t){let e,n,s;return{c(){e=y("img"),Ee(e.src,n=t[8])||h(e,"src",n),h(e,"alt",s=t[9]+" icon"),h(e,"height",18),h(e,"width",18),h(e,"class","ml-1.5")},m(i,o){W(i,e,o)},p(i,o){o[0]&256&&!Ee(e.src,n=i[8])&&h(e,"src",n),o[0]&512&&s!==(s=i[9]+" icon")&&h(e,"alt",s)},d(i){i&&I(e)}}}function kt(t){let e,n;return{c(){e=y("span"),n=de(t[9]),h(e,"class","pl-2 text-gray-400")},m(s,i){W(s,e,i),v(e,n)},p(s,i){i[0]&512&&Se(n,s[9])},d(s){s&&I(e)}}}function Et(t){let e,n;return{c(){e=y("span"),n=de(t[9]),h(e,"class","pl-2")},m(s,i){W(s,e,i),v(e,n)},p(s,i){i[0]&512&&Se(n,s[9])},d(s){s&&I(e)}}}function je(t){let e;return{c(){e=y("span"),e.textContent="_",h(e,"class","pr-1.5")},m(n,s){W(n,e,s)},d(n){n&&I(e)}}}function Xe(t){let e;return{c(){e=y("span"),e.textContent="□",h(e,"class","pr-1.5")},m(n,s){W(n,e,s)},d(n){n&&I(e)}}}function Ct(t){let e;return{c(){e=y("span"),e.textContent="x",h(e,"class","text-gray-500")},m(n,s){W(n,e,s)},p:B,d(n){n&&I(e)}}}function It(t){let e,n,s;return{c(){e=y("span"),e.textContent="x"},m(i,o){W(i,e,o),n||(s=O(e,"mouseup",t[24]),n=!0)},p:B,d(i){i&&I(e),n=!1,s()}}}function Wt(t){let e,n,s=t[4]&&Ne(t);return{c(){s&&s.c(),e=We()},m(i,o){s&&s.m(i,o),W(i,e,o),n=!0},p(i,o){i[4]?s?(s.p(i,o),o[0]&16&&Y(s,1)):(s=Ne(i),s.c(),Y(s,1),s.m(e.parentNode,e)):s&&(Ae(),R(s,1,1,()=>{s=null}),ze())},i(i){n||(Y(s),n=!0)},o(i){R(s),n=!1},d(i){s&&s.d(i),i&&I(e)}}}function Ye(t){let e=0,n=0;if(t instanceof MouseEvent)e=t.pageX,n=t.pageY;else if(t instanceof TouchEvent){const s=t.touches[0];e=s.pageX,n=s.pageY}return[e,n]}function St(t,e,n){let s,i,o,l,c,u,r,_,g,{window:a}=e,{classes:f,title:d,icon:b,x:j,y:M,width:S,height:A,style:z,controlButtons:q,isVisible:k}=a.stores;N(t,d,w=>n(9,r=w)),N(t,b,w=>n(8,u=w)),N(t,j,w=>n(6,l=w)),N(t,M,w=>n(7,c=w)),N(t,S,w=>n(5,o=w)),N(t,q,w=>n(11,g=w)),N(t,k,w=>n(4,i=w));let E,p,C,F=!1,$;He(()=>{n(2,$=ke())});function et(){s||(T.activeWindowStore.set(a),$<=Ve()&&n(2,$=ke()))}let{activeWindowStore:Le}=T;N(t,Le,w=>n(10,_=w));function tt(w){if(s||w instanceof MouseEvent&&w.button!==0)return;let[X,ve]=Ye(w);const pe=document.body,Te=E.getBoundingClientRect();p=X-(Te.left+pe.scrollLeft-pe.clientLeft),C=ve-(Te.top+pe.scrollTop-pe.clientTop),F=!0,$<=Ve()&&n(2,$=ke()),w instanceof MouseEvent&&w.preventDefault(),document.addEventListener("mousemove",Z=>{le(Z)}),document.addEventListener("mouseup",Z=>{re(Z)}),document.addEventListener("touchmove",Z=>{le(Z)},{passive:!1}),document.addEventListener("touchend",Z=>{re(Z)},{passive:!1})}function re(w){w instanceof MouseEvent&&w.button!==0||(F=!1,w instanceof MouseEvent&&w.preventDefault(),document.removeEventListener("mousemove",X=>{le(X)}),document.removeEventListener("mouseup",X=>{re(X)}),document.removeEventListener("touchmove",X=>{le(X)}),document.removeEventListener("touchend",X=>{re(X)}))}function le(w){if(s||!F)return;let[X,ve]=Ye(w);n(0,a.x=X-(p??0),a),n(0,a.y=ve-(C??0),a),w.preventDefault()}const nt=()=>a.close();function st(w){_e[w?"unshift":"push"](()=>{E=w,n(1,E)})}function it(w){_e[w?"unshift":"push"](()=>{a.windowElement=w,n(0,a)})}return t.$$set=w=>{"window"in w&&n(0,a=w.window)},t.$$.update=()=>{t.$$.dirty[0]&1&&n(3,s=a.process.getImportantWindows().length!=0&&!a.important)},[a,E,$,s,i,o,l,c,u,r,_,g,d,b,j,M,S,q,k,et,Le,tt,re,le,nt,st,it]}class At extends oe{constructor(e){super(),ie(this,e,St,Wt,Q,{window:0},null,[-1,-1])}}function Ue(t,e,n){const s=t.slice();return s[3]=e[n],s}function qe(t,e){let n,s,i;return s=new At({props:{window:e[3]}}),{key:t,first:null,c(){n=We(),fe(s.$$.fragment),this.first=n},m(o,l){W(o,n,l),ne(s,o,l),i=!0},p(o,l){e=o;const c={};l&1&&(c.window=e[3]),s.$set(c)},i(o){i||(Y(s.$$.fragment,o),i=!0)},o(o){R(s.$$.fragment,o),i=!1},d(o){o&&I(n),se(s,o)}}}function zt(t){let e=[],n=new Map,s,i,o=t[0];const l=c=>c[3];for(let c=0;c<o.length;c+=1){let u=Ue(t,o,c),r=l(u);n.set(r,e[c]=qe(r,u))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();s=We()},m(c,u){for(let r=0;r<e.length;r+=1)e[r].m(c,u);W(c,s,u),i=!0},p(c,[u]){u&1&&(o=c[0],Ae(),e=ht(e,u,l,1,c,o,n,s.parentNode,pt,qe,s,Ue),ze())},i(c){if(!i){for(let u=0;u<o.length;u+=1)Y(e[u]);i=!0}},o(c){for(let u=0;u<e.length;u+=1)R(e[u]);i=!1},d(c){for(let u=0;u<e.length;u+=1)e[u].d(c);c&&I(s)}}}function Lt(t,e,n){let s,i,o=T.windowsStore;return N(t,o,l=>n(2,i=l)),t.$$.update=()=>{t.$$.dirty&4&&n(0,s=i)},[s,o,i]}class Tt extends oe{constructor(e){super(),ie(this,e,Lt,zt,Q,{})}}const $e="/assets/mastrielIcon-6c62ac08.svg";function Bt(t){let e,n,s,i,o,l,c;return l=new Tt({}),{c(){e=y("div"),n=y("img"),i=P(),o=y("div"),fe(l.$$.fragment),Ee(n.src,s=$e)||h(n,"src",s),h(n,"alt","Site icon"),h(n,"height",256),h(n,"width",256),h(n,"class","drop-shadow-3xl"),h(e,"class","flex items-center justify-center h-screen w-screen absolute"),h(o,"class","absolute")},m(u,r){W(u,e,r),v(e,n),W(u,i,r),W(u,o,r),ne(l,o,null),c=!0},p:B,i(u){c||(Y(l.$$.fragment,u),c=!0)},o(u){R(l.$$.fragment,u),c=!1},d(u){u&&I(e),u&&I(i),u&&I(o),se(l)}}}class Mt extends oe{constructor(e){super(),ie(this,e,null,Bt,Q,{})}}const te=class{constructor(e,n,s=$e){this.name=e,this.mainWindow=n,this.icon=s}};let U=te;m(U,"registeredApps",[]),m(U,"registerApp",e=>{te.registeredApps.push(e)}),m(U,"getApp",e=>te.registeredApps.find(n=>n.name==e)),m(U,"getAllApps",()=>[...te.registeredApps]),m(U,"getAppByType",e=>{let n=te.registeredApps.find(s=>s instanceof e);if(n==null)throw new Error("Invalid app specified. Is it registered?");return n});let De=0;function Pt(){return De++,De-1}function Re(t){let e,n,s;return{c(){e=y("button"),e.textContent="Continue"},m(i,o){W(i,e,o),n||(s=O(e,"mousedown",t[3]),n=!0)},p:B,d(i){i&&I(e),n=!1,s()}}}function Vt(t){let e,n,s,i,o=t[0].message+"",l,c,u,r,_,g,a,f=!t[0].unrecoverable&&Re(t);return{c(){e=y("div"),n=y("div"),s=y("div"),i=y("span"),l=de(o),c=P(),u=y("div"),f&&f.c(),r=P(),_=y("button"),_.textContent="End Process",h(i,"class","text-center error-message whitespace-pre-line select-text svelte-wbgunv"),h(i,"style",""),h(s,"class","flex justify-center"),h(n,"class","h-20 error-message overflow-y-scroll scrollbar-hide svelte-wbgunv"),L(n,"width",t[1]+"px"),h(e,"class","bg-red-800 border-b border-b-red-700 pt-3 drop-shadow-xl"),h(u,"class","flex justify-around pt-5")},m(d,b){W(d,e,b),v(e,n),v(n,s),v(s,i),v(i,l),W(d,c,b),W(d,u,b),f&&f.m(u,null),v(u,r),v(u,_),g||(a=O(_,"mousedown",t[4]),g=!0)},p(d,[b]){b&1&&o!==(o=d[0].message+"")&&Se(l,o),b&2&&L(n,"width",d[1]+"px"),d[0].unrecoverable?f&&(f.d(1),f=null):f?f.p(d,b):(f=Re(d),f.c(),f.m(u,r))},i:B,o:B,d(d){d&&I(e),d&&I(c),d&&I(u),f&&f.d(),g=!1,a()}}}function xt(t,e,n){let s,{process:i}=e,{window:o}=e,{width:l}=o.stores;N(t,l,r=>n(1,s=r)),o.classes="bg-red-900",o.title=o.errorTitle,o.important=!0,o.controlButtons={maximize:!1,minimize:!1,close:!1},T.activeWindow=o;const c=()=>{o.close(),T.activeWindow=i.mainWindow},u=()=>{i.kill()};return t.$$set=r=>{"process"in r&&n(5,i=r.process),"window"in r&&n(0,o=r.window)},[o,s,l,c,u,i]}class Nt extends oe{constructor(e){super(),ie(this,e,xt,Vt,Q,{process:5,window:0})}}class Fe extends T{constructor(e,n,s=!1){super(500,500,400,160,Nt),this.errorTitle=e,this.message=n,this.unrecoverable=s}}const G=class{constructor(e,n,s){m(this,"id");m(this,"app");m(this,"mainWindow");m(this,"options");m(this,"spawnWindow",e=>T.spawn(e,this));m(this,"kill",()=>{for(const e of this.getWindows())e.close();G.processes=G.processes.filter(e=>e!=this)});m(this,"crash",e=>{this.spawnWindow(new Fe("Fatal Error",`${this.app.name} has crashed:
${e}`,!0))});m(this,"error",e=>{this.spawnWindow(new Fe("Error",`An error has occurred in ${this.app.name}:
${e}


hi`,!1))});this.id=n,this.app=e,s!=null&&(this.options=s)}getWindows(){return T.getWindows().filter(e=>e.process==this)??[]}getImportantWindows(){return this.getWindows().filter(e=>e.important)??[]}static mergeOptions(e,n){return{...n,...e}}};let K=G;m(K,"processes",[]),m(K,"getProcesses",()=>[...G.processes]),m(K,"spawn",(e,n)=>{let s=U.getAppByType(e),i=G.mergeOptions(n,e.defaultOptions),o=new G(s,Pt(),i),l=new T(300,300,400,400,s.mainWindow);return o.mainWindow=T.spawn(l,o),o});function Ot(t){return t[Math.floor(Math.random()*t.length)]}const jt="/assets/consoleIcon-9d1dc8de.svg",Xt=t=>new Promise(e=>setTimeout(e,t));function Yt(t){let e,n,s,i,o,l,c,u,r,_,g,a,f,d,b,j;return{c(){e=y("div"),n=y("span"),n.textContent="Remove process",s=P(),i=y("span"),i.textContent="Update color",o=P(),l=y("span"),l.textContent="Update title",c=P(),u=y("span"),u.textContent="Spawn another",r=P(),_=y("span"),_.textContent="Show error",g=P(),a=y("span"),a.textContent="Show unrecoverable error",f=P(),d=y("span"),d.textContent="Turn invisible temporarily",h(n,"class","link svelte-18apmpb"),h(i,"class","link svelte-18apmpb"),h(l,"class","link svelte-18apmpb"),h(u,"class","link svelte-18apmpb"),h(_,"class","link svelte-18apmpb"),h(a,"class","link svelte-18apmpb"),h(d,"class","link svelte-18apmpb"),h(e,"class","pt-2 pl-3 options svelte-18apmpb")},m(M,S){W(M,e,S),v(e,n),v(e,s),v(e,i),v(e,o),v(e,l),v(e,c),v(e,u),v(e,r),v(e,_),v(e,g),v(e,a),v(e,f),v(e,d),b||(j=[O(n,"click",t[0]),O(i,"click",t[2]),O(l,"click",t[3]),O(u,"click",t[1]),O(_,"click",t[4]),O(a,"click",t[5]),O(d,"click",t[6])],b=!0)},p:B,i:B,o:B,d(M){M&&I(e),b=!1,J(j)}}}function Ut(t,e,n){let{process:s}=e,{window:i}=e,o=s.options;i.icon=jt,i.style="background-color: "+o.backgroundColor;let l;He(()=>{l=0});function c(){s.kill(),console.log("Process killed!")}const u=()=>{let d=K.spawn(be);console.log("New process spawned!"),console.log(d)},r=()=>{let d=["bg-red","bg-blue","bg-lime","bg-black"];n(7,i.classes=Ot(d),i),console.log("Color updated!")},_=()=>{l+=1,n(7,i.title=l.toString(),i),console.log("Title updated!")},g=()=>{s.error("User has initiated an error.")},a=()=>{s.crash("User has forced a crash.")},f=async()=>{n(7,i.isVisible=!1,i),await Xt(3e3),n(7,i.isVisible=!0,i)};return t.$$set=d=>{"process"in d&&n(8,s=d.process),"window"in d&&n(7,i=d.window)},[c,u,r,_,g,a,f,i,s]}class qt extends oe{constructor(e){super(),ie(this,e,Ut,Yt,Q,{process:8,window:7})}}class be extends U{constructor(){super("Console",qt)}}m(be,"defaultOptions",{backgroundColor:"#000000"});new Mt({target:document.getElementById("app")});U.registerApp(new be);K.spawn(be,{backgroundColor:"#1a1d1e"});
