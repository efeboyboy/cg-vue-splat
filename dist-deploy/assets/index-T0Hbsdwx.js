var mp=Object.defineProperty;var gp=(i,e,t)=>e in i?mp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xe=(i,e,t)=>gp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mc(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const gt={},ks=[],Qn=()=>{},Ap=()=>!1,ea=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),gc=i=>i.startsWith("onUpdate:"),en=Object.assign,Ac=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Sp=Object.prototype.hasOwnProperty,ct=(i,e)=>Sp.call(i,e),Ye=Array.isArray,Vs=i=>ta(i)==="[object Map]",pd=i=>ta(i)==="[object Set]",Ke=i=>typeof i=="function",Ft=i=>typeof i=="string",zi=i=>typeof i=="symbol",Mt=i=>i!==null&&typeof i=="object",md=i=>(Mt(i)||Ke(i))&&Ke(i.then)&&Ke(i.catch),gd=Object.prototype.toString,ta=i=>gd.call(i),xp=i=>ta(i).slice(8,-1),Ad=i=>ta(i)==="[object Object]",Sc=i=>Ft(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,xr=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},_p=/-(\w)/g,bn=na(i=>i.replace(_p,(e,t)=>t?t.toUpperCase():"")),vp=/\B([A-Z])/g,ps=na(i=>i.replace(vp,"-$1").toLowerCase()),ia=na(i=>i.charAt(0).toUpperCase()+i.slice(1)),ga=na(i=>i?`on${ia(i)}`:""),Bi=(i,e)=>!Object.is(i,e),Aa=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Sd=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},yp=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let mu;const sa=()=>mu||(mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(i){if(Ye(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Ft(n)?Tp(n):xc(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(i)||Mt(i))return i}const Ep=/;(?![^(]*\))/g,Cp=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Tp(i){const e={};return i.replace(Mp,"").split(Ep).forEach(t=>{if(t){const n=t.split(Cp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function _c(i){let e="";if(Ft(i))e=i;else if(Ye(i))for(let t=0;t<i.length;t++){const n=_c(i[t]);n&&(e+=n+" ")}else if(Mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=mc(bp);function xd(i){return!!i||i===""}const _d=i=>!!(i&&i.__v_isRef===!0),vc=i=>Ft(i)?i:i==null?"":Ye(i)||Mt(i)&&(i.toString===gd||!Ke(i.toString))?_d(i)?vc(i.value):JSON.stringify(i,vd,2):String(i),vd=(i,e)=>_d(e)?vd(i,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[Sa(n,r)+" =>"]=s,t),{})}:pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sa(t))}:zi(e)?Sa(e):Mt(e)&&!Ye(e)&&!Ad(e)?String(e):e,Sa=(i,e="")=>{var t;return zi(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ip(){return dn}let mt;const xa=new WeakSet;class yd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xa.has(this)&&(xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gu(this),Md(this);const e=mt,t=Nn;mt=this,Nn=!0;try{return this.fn()}finally{Td(this),mt=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cc(e);this.deps=this.depsTail=void 0,gu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fl(this)&&this.run()}get dirty(){return fl(this)}}let Ed=0,_r,vr;function Cd(i,e=!1){if(i.flags|=8,e){i.next=vr,vr=i;return}i.next=_r,_r=i}function yc(){Ed++}function Ec(){if(--Ed>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;_r;){let e=_r;for(_r=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Md(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Td(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Cc(n),Dp(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function fl(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function bd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Dr))return;i.globalVersion=Dr;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!fl(i)){i.flags&=-3;return}const t=mt,n=Nn;mt=i,Nn=!0;try{Md(i);const s=i.fn(i._value);(e.version===0||Bi(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{mt=t,Nn=n,Td(i),i.flags&=-3}}function Cc(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Cc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dp(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Nn=!0;const wd=[];function Hi(){wd.push(Nn),Nn=!1}function ki(){const i=wd.pop();Nn=i===void 0?!0:i}function gu(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let Dr=0;class Pp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!mt||!Nn||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new Pp(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,Rd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=n)}return t}trigger(e){this.version++,Dr++,this.notify(e)}notify(e){yc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ec()}}}function Rd(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Rd(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const dl=new WeakMap,cs=Symbol(""),hl=Symbol(""),Pr=Symbol("");function Vt(i,e,t){if(Nn&&mt){let n=dl.get(i);n||dl.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new Mc),s.map=n,s.key=t),s.track()}}function di(i,e,t,n,s,r){const o=dl.get(i);if(!o){Dr++;return}const a=l=>{l&&l.trigger()};if(yc(),e==="clear")o.forEach(a);else{const l=Ye(i),c=l&&Sc(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Pr||!zi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Vs(i)&&a(o.get(hl)));break;case"delete":l||(a(o.get(cs)),Vs(i)&&a(o.get(hl)));break;case"set":Vs(i)&&a(o.get(cs));break}}Ec()}function As(i){const e=lt(i);return e===i?e:(Vt(e,"iterate",Pr),zn(i)?e:e.map(Kt))}function Tc(i){return Vt(i=lt(i),"iterate",Pr),i}const Fp={__proto__:null,[Symbol.iterator](){return _a(this,Symbol.iterator,Kt)},concat(...i){return As(this).concat(...i.map(e=>Ye(e)?As(e):e))},entries(){return _a(this,"entries",i=>(i[1]=Kt(i[1]),i))},every(i,e){return Jn(this,"every",i,e,void 0,arguments)},filter(i,e){return Jn(this,"filter",i,e,t=>t.map(Kt),arguments)},find(i,e){return Jn(this,"find",i,e,Kt,arguments)},findIndex(i,e){return Jn(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Jn(this,"findLast",i,e,Kt,arguments)},findLastIndex(i,e){return Jn(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Jn(this,"forEach",i,e,void 0,arguments)},includes(...i){return va(this,"includes",i)},indexOf(...i){return va(this,"indexOf",i)},join(i){return As(this).join(i)},lastIndexOf(...i){return va(this,"lastIndexOf",i)},map(i,e){return Jn(this,"map",i,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...i){return ur(this,"push",i)},reduce(i,...e){return Au(this,"reduce",i,e)},reduceRight(i,...e){return Au(this,"reduceRight",i,e)},shift(){return ur(this,"shift")},some(i,e){return Jn(this,"some",i,e,void 0,arguments)},splice(...i){return ur(this,"splice",i)},toReversed(){return As(this).toReversed()},toSorted(i){return As(this).toSorted(i)},toSpliced(...i){return As(this).toSpliced(...i)},unshift(...i){return ur(this,"unshift",i)},values(){return _a(this,"values",Kt)}};function _a(i,e,t){const n=Tc(i),s=n[e]();return n!==i&&!zn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Bp=Array.prototype;function Jn(i,e,t,n,s,r){const o=Tc(i),a=o!==i&&!zn(i),l=o[e];if(l!==Bp[e]){const f=l.apply(i,r);return a?Kt(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Kt(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function Au(i,e,t,n){const s=Tc(i);let r=t;return s!==i&&(zn(i)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,i)}):r=function(o,a,l){return t.call(this,o,Kt(a),l,i)}),s[e](r,...n)}function va(i,e,t){const n=lt(i);Vt(n,"iterate",Pr);const s=n[e](...t);return(s===-1||s===!1)&&Ic(t[0])?(t[0]=lt(t[0]),n[e](...t)):s}function ur(i,e,t=[]){Hi(),yc();const n=lt(i)[e].apply(i,t);return Ec(),ki(),n}const Lp=mc("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(zi));function Up(i){zi(i)||(i=String(i));const e=lt(this);return Vt(e,"has",i),e.hasOwnProperty(i)}class Dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?qp:Ld:r?Bd:Fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=Fp[t]))return l;if(t==="hasOwnProperty")return Up}const a=Reflect.get(e,t,Wt(e)?e:n);return(zi(t)?Id.has(t):Lp(t))||(s||Vt(e,"get",t),r)?a:Wt(a)?o&&Sc(t)?a:a.value:Mt(a)?s?Ud(a):wc(a):a}}class Pd extends Dd{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=fs(r);if(!zn(n)&&!fs(n)&&(r=lt(r),n=lt(n)),!Ye(e)&&Wt(r)&&!Wt(n))return l?!1:(r.value=n,!0)}const o=Ye(e)&&Sc(t)?Number(t)<e.length:ct(e,t),a=Reflect.set(e,t,n,Wt(e)?e:s);return e===lt(s)&&(o?Bi(n,r)&&di(e,"set",t,n):di(e,"add",t,n)),a}deleteProperty(e,t){const n=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&di(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!zi(t)||!Id.has(t))&&Vt(e,"has",t),n}ownKeys(e){return Vt(e,"iterate",Ye(e)?"length":cs),Reflect.ownKeys(e)}}class Op extends Dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Np=new Pd,zp=new Op,Hp=new Pd(!0);const pl=i=>i,Yr=i=>Reflect.getPrototypeOf(i);function kp(i,e,t){return function(...n){const s=this.__v_raw,r=lt(s),o=Vs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?pl:e?ml:Kt;return!e&&Vt(r,"iterate",l?hl:cs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Kr(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Vp(i,e){const t={get(s){const r=this.__v_raw,o=lt(r),a=lt(s);i||(Bi(s,a)&&Vt(o,"get",s),Vt(o,"get",a));const{has:l}=Yr(o),c=e?pl:i?ml:Kt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Vt(lt(s),"iterate",cs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=lt(r),a=lt(s);return i||(Bi(s,a)&&Vt(o,"has",s),Vt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=lt(a),c=e?pl:i?ml:Kt;return!i&&Vt(l,"iterate",cs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return en(t,i?{add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear")}:{add(s){!e&&!zn(s)&&!fs(s)&&(s=lt(s));const r=lt(this);return Yr(r).has.call(r,s)||(r.add(s),di(r,"add",s,s)),this},set(s,r){!e&&!zn(r)&&!fs(r)&&(r=lt(r));const o=lt(this),{has:a,get:l}=Yr(o);let c=a.call(o,s);c||(s=lt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Bi(r,u)&&di(o,"set",s,r):di(o,"add",s,r),this},delete(s){const r=lt(this),{has:o,get:a}=Yr(r);let l=o.call(r,s);l||(s=lt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=lt(this),r=s.size!==0,o=s.clear();return r&&di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=kp(s,i,e)}),t}function bc(i,e){const t=Vp(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ct(t,s)&&s in n?t:n,s,r)}const Gp={get:bc(!1,!1)},Wp={get:bc(!1,!0)},Xp={get:bc(!0,!1)};const Fd=new WeakMap,Bd=new WeakMap,Ld=new WeakMap,qp=new WeakMap;function Qp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(i){return i.__v_skip||!Object.isExtensible(i)?0:Qp(xp(i))}function wc(i){return fs(i)?i:Rc(i,!1,Np,Gp,Fd)}function Kp(i){return Rc(i,!1,Hp,Wp,Bd)}function Ud(i){return Rc(i,!0,zp,Xp,Ld)}function Rc(i,e,t,n,s){if(!Mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=Yp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function yr(i){return fs(i)?yr(i.__v_raw):!!(i&&i.__v_isReactive)}function fs(i){return!!(i&&i.__v_isReadonly)}function zn(i){return!!(i&&i.__v_isShallow)}function Ic(i){return i?!!i.__v_raw:!1}function lt(i){const e=i&&i.__v_raw;return e?lt(e):i}function jp(i){return!ct(i,"__v_skip")&&Object.isExtensible(i)&&Sd(i,"__v_skip",!0),i}const Kt=i=>Mt(i)?wc(i):i,ml=i=>Mt(i)?Ud(i):i;function Wt(i){return i?i.__v_isRef===!0:!1}function li(i){return $p(i,!1)}function $p(i,e){return Wt(i)?i:new Zp(i,e)}class Zp{constructor(e,t){this.dep=new Mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:lt(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||zn(e)||fs(e);e=n?e:lt(e),Bi(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}}function Jp(i){return Wt(i)?i.value:i}const em={get:(i,e,t)=>e==="__v_raw"?i:Jp(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Wt(s)&&!Wt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Od(i){return yr(i)?i:new Proxy(i,em)}class tm{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return Cd(this,!0),!0}get value(){const e=this.dep.track();return bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nm(i,e,t=!1){let n,s;return Ke(i)?n=i:(n=i.get,s=i.set),new tm(n,s,t)}const jr={},zo=new WeakMap;let Zi;function im(i,e=!1,t=Zi){if(t){let n=zo.get(t);n||zo.set(t,n=[]),n.push(i)}}function sm(i,e,t=gt){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=S=>s?S:zn(S)||s===!1||s===0?Pi(S,1):Pi(S);let u,f,h,d,g=!1,A=!1;if(Wt(i)?(f=()=>i.value,g=zn(i)):yr(i)?(f=()=>c(i),g=!0):Ye(i)?(A=!0,g=i.some(S=>yr(S)||zn(S)),f=()=>i.map(S=>{if(Wt(S))return S.value;if(yr(S))return c(S);if(Ke(S))return l?l(S,2):S()})):Ke(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Hi();try{h()}finally{ki()}}const S=Zi;Zi=u;try{return l?l(i,3,[d]):i(d)}finally{Zi=S}}:f=Qn,e&&s){const S=f,M=s===!0?1/0:s;f=()=>Pi(S(),M)}const m=Ip(),p=()=>{u.stop(),m&&m.active&&Ac(m.effects,u)};if(r&&e){const S=e;e=(...M)=>{S(...M),p()}}let x=A?new Array(i.length).fill(jr):jr;const _=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const M=u.run();if(s||g||(A?M.some((w,y)=>Bi(w,x[y])):Bi(M,x))){h&&h();const w=Zi;Zi=u;try{const y=[M,x===jr?void 0:A&&x[0]===jr?[]:x,d];l?l(e,3,y):e(...y),x=M}finally{Zi=w}}}else u.run()};return a&&a(_),u=new yd(f),u.scheduler=o?()=>o(_,!1):_,d=S=>im(S,!1,u),h=u.onStop=()=>{const S=zo.get(u);if(S){if(l)l(S,4);else for(const M of S)M();zo.delete(u)}},e?n?_(!0):x=u.run():o?o(_.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Pi(i,e=1/0,t){if(e<=0||!Mt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Wt(i))Pi(i.value,e,t);else if(Ye(i))for(let n=0;n<i.length;n++)Pi(i[n],e,t);else if(pd(i)||Vs(i))i.forEach(n=>{Pi(n,e,t)});else if(Ad(i)){for(const n in i)Pi(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Pi(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vr(i,e,t,n){try{return n?i(...n):i()}catch(s){ra(s,e,t)}}function Kn(i,e,t,n){if(Ke(i)){const s=Vr(i,e,t,n);return s&&md(s)&&s.catch(r=>{ra(r,e,t)}),s}if(Ye(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Kn(i[r],e,t,n));return s}}function ra(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){Hi(),Vr(r,null,10,[i,l,c]),ki();return}}rm(i,t,s,n,o)}function rm(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const jt=[];let kn=-1;const Gs=[];let bi=null,Os=0;const Nd=Promise.resolve();let Ho=null;function om(i){const e=Ho||Nd;return i?e.then(this?i.bind(this):i):e}function am(i){let e=kn+1,t=jt.length;for(;e<t;){const n=e+t>>>1,s=jt[n],r=Fr(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function Dc(i){if(!(i.flags&1)){const e=Fr(i),t=jt[jt.length-1];!t||!(i.flags&2)&&e>=Fr(t)?jt.push(i):jt.splice(am(e),0,i),i.flags|=1,zd()}}function zd(){Ho||(Ho=Nd.then(kd))}function lm(i){Ye(i)?Gs.push(...i):bi&&i.id===-1?bi.splice(Os+1,0,i):i.flags&1||(Gs.push(i),i.flags|=1),zd()}function Su(i,e,t=kn+1){for(;t<jt.length;t++){const n=jt[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;jt.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Hd(i){if(Gs.length){const e=[...new Set(Gs)].sort((t,n)=>Fr(t)-Fr(n));if(Gs.length=0,bi){bi.push(...e);return}for(bi=e,Os=0;Os<bi.length;Os++){const t=bi[Os];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}bi=null,Os=0}}const Fr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function kd(i){try{for(kn=0;kn<jt.length;kn++){const e=jt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<jt.length;kn++){const e=jt[kn];e&&(e.flags&=-2)}kn=-1,jt.length=0,Hd(),Ho=null,(jt.length||Gs.length)&&kd()}}let Un=null,Vd=null;function ko(i){const e=Un;return Un=i,Vd=i&&i.type.__scopeId||null,e}function cm(i,e=Un,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&wu(-1);const r=ko(e);let o;try{o=i(...s)}finally{ko(r),n._d&&wu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Wi(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Hi(),Kn(l,t,8,[i.el,a,i,e]),ki())}}const um=Symbol("_vte"),fm=i=>i.__isTeleport;function Pc(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Pc(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Gd(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Vo(i,e,t,n,s=!1){if(Ye(i)){i.forEach((g,A)=>Vo(g,e&&(Ye(e)?e[A]:e),t,n,s));return}if(Er(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Vo(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?Lc(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,f=a.setupState,h=lt(f),d=f===gt?()=>!1:g=>ct(h,g);if(c!=null&&c!==l&&(Ft(c)?(u[c]=null,d(c)&&(f[c]=null)):Wt(c)&&(c.value=null)),Ke(l))Vr(l,a,12,[o,u]);else{const g=Ft(l),A=Wt(l);if(g||A){const m=()=>{if(i.f){const p=g?d(l)?f[l]:u[l]:l.value;s?Ye(p)&&Ac(p,r):Ye(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):A&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,fn(m,t)):m()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const Er=i=>!!i.type.__asyncLoader,Wd=i=>i.type.__isKeepAlive;function dm(i,e){Xd(i,"a",e)}function hm(i,e){Xd(i,"da",e)}function Xd(i,e,t=Gt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(oa(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Wd(s.parent.vnode)&&pm(n,e,t,s),s=s.parent}}function pm(i,e,t,n){const s=oa(e,i,n,!0);Yd(()=>{Ac(n[e],s)},t)}function oa(i,e,t=Gt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{Hi();const a=Gr(t),l=Kn(e,t,i,o);return a(),ki(),l});return n?s.unshift(r):s.push(r),r}}const xi=i=>(e,t=Gt)=>{(!Lr||i==="sp")&&oa(i,(...n)=>e(...n),t)},mm=xi("bm"),qd=xi("m"),gm=xi("bu"),Am=xi("u"),Qd=xi("bum"),Yd=xi("um"),Sm=xi("sp"),xm=xi("rtg"),_m=xi("rtc");function vm(i,e=Gt){oa("ec",i,e)}const ym="components";function Em(i,e){return Mm(ym,i,!0,e)||i}const Cm=Symbol.for("v-ndc");function Mm(i,e,t=!0,n=!1){const s=Un||Gt;if(s){const r=s.type;{const a=hg(r,!1);if(a&&(a===e||a===bn(e)||a===ia(bn(e))))return r}const o=xu(s[i]||r[i],e)||xu(s.appContext[i],e);return!o&&n?r:o}}function xu(i,e){return i&&(i[e]||i[bn(e)]||i[ia(bn(e))])}const gl=i=>i?Ah(i)?Lc(i):gl(i.parent):null,Cr=en(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>gl(i.parent),$root:i=>gl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>jd(i),$forceUpdate:i=>i.f||(i.f=()=>{Dc(i.update)}),$nextTick:i=>i.n||(i.n=om.bind(i.proxy)),$watch:i=>Qm.bind(i)}),ya=(i,e)=>i!==gt&&!i.__isScriptSetup&&ct(i,e),Tm={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ya(n,e))return o[e]=1,n[e];if(s!==gt&&ct(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&ct(c,e))return o[e]=3,r[e];if(t!==gt&&ct(t,e))return o[e]=4,t[e];Al&&(o[e]=0)}}const u=Cr[e];let f,h;if(u)return e==="$attrs"&&Vt(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==gt&&ct(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ct(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return ya(s,e)?(s[e]=t,!0):n!==gt&&ct(n,e)?(n[e]=t,!0):ct(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==gt&&ct(i,o)||ya(e,o)||(a=r[0])&&ct(a,o)||ct(n,o)||ct(Cr,o)||ct(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ct(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function _u(i){return Ye(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Al=!0;function bm(i){const e=jd(i),t=i.proxy,n=i.ctx;Al=!1,e.beforeCreate&&vu(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:A,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:_,unmounted:S,render:M,renderTracked:w,renderTriggered:y,errorCaptured:R,serverPrefetch:C,expose:v,inheritAttrs:D,components:z,directives:L,filters:N}=e;if(c&&wm(c,n,null),o)for(const W in o){const k=o[W];Ke(k)&&(n[W]=k.bind(t))}if(s){const W=s.call(t,t);Mt(W)&&(i.data=wc(W))}if(Al=!0,r)for(const W in r){const k=r[W],Y=Ke(k)?k.bind(t,t):Ke(k.get)?k.get.bind(t,t):Qn,ce=!Ke(k)&&Ke(k.set)?k.set.bind(t):Qn,Se=mg({get:Y,set:ce});Object.defineProperty(n,W,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ie=>Se.value=Ie})}if(a)for(const W in a)Kd(a[W],n,t,W);if(l){const W=Ke(l)?l.call(t):l;Reflect.ownKeys(W).forEach(k=>{Bm(k,W[k])})}u&&vu(u,i,"c");function H(W,k){Ye(k)?k.forEach(Y=>W(Y.bind(t))):k&&W(k.bind(t))}if(H(mm,f),H(qd,h),H(gm,d),H(Am,g),H(dm,A),H(hm,m),H(vm,R),H(_m,w),H(xm,y),H(Qd,x),H(Yd,S),H(Sm,C),Ye(v))if(v.length){const W=i.exposed||(i.exposed={});v.forEach(k=>{Object.defineProperty(W,k,{get:()=>t[k],set:Y=>t[k]=Y})})}else i.exposed||(i.exposed={});M&&i.render===Qn&&(i.render=M),D!=null&&(i.inheritAttrs=D),z&&(i.components=z),L&&(i.directives=L),C&&Gd(i)}function wm(i,e,t=Qn){Ye(i)&&(i=Sl(i));for(const n in i){const s=i[n];let r;Mt(s)?"default"in s?r=wo(s.from||n,s.default,!0):r=wo(s.from||n):r=wo(s),Wt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function vu(i,e,t){Kn(Ye(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Kd(i,e,t,n){let s=n.includes(".")?uh(t,n):()=>t[n];if(Ft(i)){const r=e[i];Ke(r)&&rs(s,r)}else if(Ke(i))rs(s,i.bind(t));else if(Mt(i))if(Ye(i))i.forEach(r=>Kd(r,e,t,n));else{const r=Ke(i.handler)?i.handler.bind(t):e[i.handler];Ke(r)&&rs(s,r,i)}}function jd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Go(l,c,o,!0)),Go(l,e,o)),Mt(e)&&r.set(e,l),l}function Go(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Go(i,r,t,!0),s&&s.forEach(o=>Go(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Rm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Rm={data:yu,props:Eu,emits:Eu,methods:Ar,computed:Ar,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Ar,directives:Ar,watch:Dm,provide:yu,inject:Im};function yu(i,e){return e?i?function(){return en(Ke(i)?i.call(this,this):i,Ke(e)?e.call(this,this):e)}:e:i}function Im(i,e){return Ar(Sl(i),Sl(e))}function Sl(i){if(Ye(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function qt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ar(i,e){return i?en(Object.create(null),i,e):e}function Eu(i,e){return i?Ye(i)&&Ye(e)?[...new Set([...i,...e])]:en(Object.create(null),_u(i),_u(e??{})):e}function Dm(i,e){if(!i)return e;if(!e)return i;const t=en(Object.create(null),i);for(const n in e)t[n]=qt(i[n],e[n]);return t}function $d(){return{app:null,config:{isNativeTag:Ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pm=0;function Fm(i,e){return function(n,s=null){Ke(n)||(n=en({},n)),s!=null&&!Mt(s)&&(s=null);const r=$d(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Pm++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:gg,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...f)):Ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Yn(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Lc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Kn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ws;Ws=c;try{return u()}finally{Ws=f}}};return c}}let Ws=null;function Bm(i,e){if(Gt){let t=Gt.provides;const n=Gt.parent&&Gt.parent.provides;n===t&&(t=Gt.provides=Object.create(n)),t[i]=e}}function wo(i,e,t=!1){const n=Gt||Un;if(n||Ws){const s=Ws?Ws._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ke(e)?e.call(n&&n.proxy):e}}const Zd={},Jd=()=>Object.create(Zd),eh=i=>Object.getPrototypeOf(i)===Zd;function Lm(i,e,t,n=!1){const s={},r=Jd();i.propsDefaults=Object.create(null),th(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Kp(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Um(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=lt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(aa(i.emitsOptions,h))continue;const d=e[h];if(l)if(ct(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=bn(h);s[g]=xl(l,a,g,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{th(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!ct(e,f)&&((u=ps(f))===f||!ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=xl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!ct(e,f))&&(delete r[f],c=!0)}c&&di(i.attrs,"set","")}function th(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(xr(l))continue;const c=e[l];let u;s&&ct(s,u=bn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:aa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=lt(t),c=a||gt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=xl(s,l,f,c[f],i,!ct(c,f))}}return o}function xl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=ct(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const u=Gr(s);n=c[t]=l.call(null,e),u()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ps(t))&&(n=!0))}return n}const Om=new WeakMap;function nh(i,e,t=!1){const n=t?Om:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ke(i)){const u=f=>{l=!0;const[h,d]=nh(f,e,!0);en(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Mt(i)&&n.set(i,ks),ks;if(Ye(r))for(let u=0;u<r.length;u++){const f=bn(r[u]);Cu(f)&&(o[f]=gt)}else if(r)for(const u in r){const f=bn(u);if(Cu(f)){const h=r[u],d=o[f]=Ye(h)||Ke(h)?{type:h}:en({},h),g=d.type;let A=!1,m=!0;if(Ye(g))for(let p=0;p<g.length;++p){const x=g[p],_=Ke(x)&&x.name;if(_==="Boolean"){A=!0;break}else _==="String"&&(m=!1)}else A=Ke(g)&&g.name==="Boolean";d[0]=A,d[1]=m,(A||ct(d,"default"))&&a.push(f)}}const c=[o,a];return Mt(i)&&n.set(i,c),c}function Cu(i){return i[0]!=="$"&&!xr(i)}const ih=i=>i[0]==="_"||i==="$stable",Fc=i=>Ye(i)?i.map(Vn):[Vn(i)],Nm=(i,e,t)=>{if(e._n)return e;const n=cm((...s)=>Fc(e(...s)),t);return n._c=!1,n},sh=(i,e,t)=>{const n=i._ctx;for(const s in i){if(ih(s))continue;const r=i[s];if(Ke(r))e[s]=Nm(s,r,n);else if(r!=null){const o=Fc(r);e[s]=()=>o}}},rh=(i,e)=>{const t=Fc(e);i.slots.default=()=>t},oh=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},zm=(i,e,t)=>{const n=i.slots=Jd();if(i.vnode.shapeFlag&32){const s=e._;s?(oh(n,e,t),t&&Sd(n,"_",s,!0)):sh(e,n)}else e&&rh(i,e)},Hm=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=gt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:oh(s,e,t):(r=!e.$stable,sh(e,s)),o=e}else e&&(rh(i,e),o={default:1});if(r)for(const a in s)!ih(a)&&o[a]==null&&delete s[a]},fn=eg;function km(i){return Vm(i)}function Vm(i,e){const t=sa();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Qn,insertStaticContent:g}=i,A=(P,B,b,re=null,$=null,ie=null,Z=void 0,ae=null,te=!!B.dynamicChildren)=>{if(P===B)return;P&&!fr(P,B)&&(re=de(P),Ie(P,$,ie,!0),P=null),B.patchFlag===-2&&(te=!1,B.dynamicChildren=null);const{type:T,ref:E,shapeFlag:O}=B;switch(T){case la:m(P,B,b,re);break;case ds:p(P,B,b,re);break;case Ro:P==null&&x(B,b,re,Z);break;case ci:z(P,B,b,re,$,ie,Z,ae,te);break;default:O&1?M(P,B,b,re,$,ie,Z,ae,te):O&6?L(P,B,b,re,$,ie,Z,ae,te):(O&64||O&128)&&T.process(P,B,b,re,$,ie,Z,ae,te,Ee)}E!=null&&$&&Vo(E,P&&P.ref,ie,B||P,!B)},m=(P,B,b,re)=>{if(P==null)n(B.el=a(B.children),b,re);else{const $=B.el=P.el;B.children!==P.children&&c($,B.children)}},p=(P,B,b,re)=>{P==null?n(B.el=l(B.children||""),b,re):B.el=P.el},x=(P,B,b,re)=>{[P.el,P.anchor]=g(P.children,B,b,re,P.el,P.anchor)},_=({el:P,anchor:B},b,re)=>{let $;for(;P&&P!==B;)$=h(P),n(P,b,re),P=$;n(B,b,re)},S=({el:P,anchor:B})=>{let b;for(;P&&P!==B;)b=h(P),s(P),P=b;s(B)},M=(P,B,b,re,$,ie,Z,ae,te)=>{B.type==="svg"?Z="svg":B.type==="math"&&(Z="mathml"),P==null?w(B,b,re,$,ie,Z,ae,te):C(P,B,$,ie,Z,ae,te)},w=(P,B,b,re,$,ie,Z,ae)=>{let te,T;const{props:E,shapeFlag:O,transition:Q,dirs:J}=P;if(te=P.el=o(P.type,ie,E&&E.is,E),O&8?u(te,P.children):O&16&&R(P.children,te,null,re,$,Ea(P,ie),Z,ae),J&&Wi(P,null,re,"created"),y(te,P,P.scopeId,Z,re),E){for(const _e in E)_e!=="value"&&!xr(_e)&&r(te,_e,null,E[_e],ie,re);"value"in E&&r(te,"value",null,E.value,ie),(T=E.onVnodeBeforeMount)&&Hn(T,re,P)}J&&Wi(P,null,re,"beforeMount");const K=Gm($,Q);K&&Q.beforeEnter(te),n(te,B,b),((T=E&&E.onVnodeMounted)||K||J)&&fn(()=>{T&&Hn(T,re,P),K&&Q.enter(te),J&&Wi(P,null,re,"mounted")},$)},y=(P,B,b,re,$)=>{if(b&&d(P,b),re)for(let ie=0;ie<re.length;ie++)d(P,re[ie]);if($){let ie=$.subTree;if(B===ie||dh(ie.type)&&(ie.ssContent===B||ie.ssFallback===B)){const Z=$.vnode;y(P,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},R=(P,B,b,re,$,ie,Z,ae,te=0)=>{for(let T=te;T<P.length;T++){const E=P[T]=ae?Ri(P[T]):Vn(P[T]);A(null,E,B,b,re,$,ie,Z,ae)}},C=(P,B,b,re,$,ie,Z)=>{const ae=B.el=P.el;let{patchFlag:te,dynamicChildren:T,dirs:E}=B;te|=P.patchFlag&16;const O=P.props||gt,Q=B.props||gt;let J;if(b&&Xi(b,!1),(J=Q.onVnodeBeforeUpdate)&&Hn(J,b,B,P),E&&Wi(B,P,b,"beforeUpdate"),b&&Xi(b,!0),(O.innerHTML&&Q.innerHTML==null||O.textContent&&Q.textContent==null)&&u(ae,""),T?v(P.dynamicChildren,T,ae,b,re,Ea(B,$),ie):Z||k(P,B,ae,null,b,re,Ea(B,$),ie,!1),te>0){if(te&16)D(ae,O,Q,b,$);else if(te&2&&O.class!==Q.class&&r(ae,"class",null,Q.class,$),te&4&&r(ae,"style",O.style,Q.style,$),te&8){const K=B.dynamicProps;for(let _e=0;_e<K.length;_e++){const he=K[_e],ve=O[he],He=Q[he];(He!==ve||he==="value")&&r(ae,he,ve,He,$,b)}}te&1&&P.children!==B.children&&u(ae,B.children)}else!Z&&T==null&&D(ae,O,Q,b,$);((J=Q.onVnodeUpdated)||E)&&fn(()=>{J&&Hn(J,b,B,P),E&&Wi(B,P,b,"updated")},re)},v=(P,B,b,re,$,ie,Z)=>{for(let ae=0;ae<B.length;ae++){const te=P[ae],T=B[ae],E=te.el&&(te.type===ci||!fr(te,T)||te.shapeFlag&70)?f(te.el):b;A(te,T,E,null,re,$,ie,Z,!0)}},D=(P,B,b,re,$)=>{if(B!==b){if(B!==gt)for(const ie in B)!xr(ie)&&!(ie in b)&&r(P,ie,B[ie],null,$,re);for(const ie in b){if(xr(ie))continue;const Z=b[ie],ae=B[ie];Z!==ae&&ie!=="value"&&r(P,ie,ae,Z,$,re)}"value"in b&&r(P,"value",B.value,b.value,$)}},z=(P,B,b,re,$,ie,Z,ae,te)=>{const T=B.el=P?P.el:a(""),E=B.anchor=P?P.anchor:a("");let{patchFlag:O,dynamicChildren:Q,slotScopeIds:J}=B;J&&(ae=ae?ae.concat(J):J),P==null?(n(T,b,re),n(E,b,re),R(B.children||[],b,E,$,ie,Z,ae,te)):O>0&&O&64&&Q&&P.dynamicChildren?(v(P.dynamicChildren,Q,b,$,ie,Z,ae),(B.key!=null||$&&B===$.subTree)&&ah(P,B,!0)):k(P,B,b,E,$,ie,Z,ae,te)},L=(P,B,b,re,$,ie,Z,ae,te)=>{B.slotScopeIds=ae,P==null?B.shapeFlag&512?$.ctx.activate(B,b,re,Z,te):N(B,b,re,$,ie,Z,te):V(P,B,te)},N=(P,B,b,re,$,ie,Z)=>{const ae=P.component=lg(P,re,$);if(Wd(P)&&(ae.ctx.renderer=Ee),cg(ae,!1,Z),ae.asyncDep){if($&&$.registerDep(ae,H,Z),!P.el){const te=ae.subTree=Yn(ds);p(null,te,B,b)}}else H(ae,P,B,b,$,ie,Z)},V=(P,B,b)=>{const re=B.component=P.component;if(Zm(P,B,b))if(re.asyncDep&&!re.asyncResolved){W(re,B,b);return}else re.next=B,re.update();else B.el=P.el,re.vnode=B},H=(P,B,b,re,$,ie,Z)=>{const ae=()=>{if(P.isMounted){let{next:O,bu:Q,u:J,parent:K,vnode:_e}=P;{const U=lh(P);if(U){O&&(O.el=_e.el,W(P,O,Z)),U.asyncDep.then(()=>{P.isUnmounted||ae()});return}}let he=O,ve;Xi(P,!1),O?(O.el=_e.el,W(P,O,Z)):O=_e,Q&&Aa(Q),(ve=O.props&&O.props.onVnodeBeforeUpdate)&&Hn(ve,K,O,_e),Xi(P,!0);const He=Tu(P),pe=P.subTree;P.subTree=He,A(pe,He,f(pe.el),de(pe),P,$,ie),O.el=He.el,he===null&&Jm(P,He.el),J&&fn(J,$),(ve=O.props&&O.props.onVnodeUpdated)&&fn(()=>Hn(ve,K,O,_e),$)}else{let O;const{el:Q,props:J}=B,{bm:K,m:_e,parent:he,root:ve,type:He}=P,pe=Er(B);Xi(P,!1),K&&Aa(K),!pe&&(O=J&&J.onVnodeBeforeMount)&&Hn(O,he,B),Xi(P,!0);{ve.ce&&ve.ce._injectChildStyle(He);const U=P.subTree=Tu(P);A(null,U,b,re,P,$,ie),B.el=U.el}if(_e&&fn(_e,$),!pe&&(O=J&&J.onVnodeMounted)){const U=B;fn(()=>Hn(O,he,U),$)}(B.shapeFlag&256||he&&Er(he.vnode)&&he.vnode.shapeFlag&256)&&P.a&&fn(P.a,$),P.isMounted=!0,B=b=re=null}};P.scope.on();const te=P.effect=new yd(ae);P.scope.off();const T=P.update=te.run.bind(te),E=P.job=te.runIfDirty.bind(te);E.i=P,E.id=P.uid,te.scheduler=()=>Dc(E),Xi(P,!0),T()},W=(P,B,b)=>{B.component=P;const re=P.vnode.props;P.vnode=B,P.next=null,Um(P,B.props,re,b),Hm(P,B.children,b),Hi(),Su(P),ki()},k=(P,B,b,re,$,ie,Z,ae,te=!1)=>{const T=P&&P.children,E=P?P.shapeFlag:0,O=B.children,{patchFlag:Q,shapeFlag:J}=B;if(Q>0){if(Q&128){ce(T,O,b,re,$,ie,Z,ae,te);return}else if(Q&256){Y(T,O,b,re,$,ie,Z,ae,te);return}}J&8?(E&16&&me(T,$,ie),O!==T&&u(b,O)):E&16?J&16?ce(T,O,b,re,$,ie,Z,ae,te):me(T,$,ie,!0):(E&8&&u(b,""),J&16&&R(O,b,re,$,ie,Z,ae,te))},Y=(P,B,b,re,$,ie,Z,ae,te)=>{P=P||ks,B=B||ks;const T=P.length,E=B.length,O=Math.min(T,E);let Q;for(Q=0;Q<O;Q++){const J=B[Q]=te?Ri(B[Q]):Vn(B[Q]);A(P[Q],J,b,null,$,ie,Z,ae,te)}T>E?me(P,$,ie,!0,!1,O):R(B,b,re,$,ie,Z,ae,te,O)},ce=(P,B,b,re,$,ie,Z,ae,te)=>{let T=0;const E=B.length;let O=P.length-1,Q=E-1;for(;T<=O&&T<=Q;){const J=P[T],K=B[T]=te?Ri(B[T]):Vn(B[T]);if(fr(J,K))A(J,K,b,null,$,ie,Z,ae,te);else break;T++}for(;T<=O&&T<=Q;){const J=P[O],K=B[Q]=te?Ri(B[Q]):Vn(B[Q]);if(fr(J,K))A(J,K,b,null,$,ie,Z,ae,te);else break;O--,Q--}if(T>O){if(T<=Q){const J=Q+1,K=J<E?B[J].el:re;for(;T<=Q;)A(null,B[T]=te?Ri(B[T]):Vn(B[T]),b,K,$,ie,Z,ae,te),T++}}else if(T>Q)for(;T<=O;)Ie(P[T],$,ie,!0),T++;else{const J=T,K=T,_e=new Map;for(T=K;T<=Q;T++){const ge=B[T]=te?Ri(B[T]):Vn(B[T]);ge.key!=null&&_e.set(ge.key,T)}let he,ve=0;const He=Q-K+1;let pe=!1,U=0;const ue=new Array(He);for(T=0;T<He;T++)ue[T]=0;for(T=J;T<=O;T++){const ge=P[T];if(ve>=He){Ie(ge,$,ie,!0);continue}let Ue;if(ge.key!=null)Ue=_e.get(ge.key);else for(he=K;he<=Q;he++)if(ue[he-K]===0&&fr(ge,B[he])){Ue=he;break}Ue===void 0?Ie(ge,$,ie,!0):(ue[Ue-K]=T+1,Ue>=U?U=Ue:pe=!0,A(ge,B[Ue],b,null,$,ie,Z,ae,te),ve++)}const De=pe?Wm(ue):ks;for(he=De.length-1,T=He-1;T>=0;T--){const ge=K+T,Ue=B[ge],Ve=ge+1<E?B[ge+1].el:re;ue[T]===0?A(null,Ue,b,Ve,$,ie,Z,ae,te):pe&&(he<0||T!==De[he]?Se(Ue,b,Ve,2):he--)}}},Se=(P,B,b,re,$=null)=>{const{el:ie,type:Z,transition:ae,children:te,shapeFlag:T}=P;if(T&6){Se(P.component.subTree,B,b,re);return}if(T&128){P.suspense.move(B,b,re);return}if(T&64){Z.move(P,B,b,Ee);return}if(Z===ci){n(ie,B,b);for(let O=0;O<te.length;O++)Se(te[O],B,b,re);n(P.anchor,B,b);return}if(Z===Ro){_(P,B,b);return}if(re!==2&&T&1&&ae)if(re===0)ae.beforeEnter(ie),n(ie,B,b),fn(()=>ae.enter(ie),$);else{const{leave:O,delayLeave:Q,afterLeave:J}=ae,K=()=>n(ie,B,b),_e=()=>{O(ie,()=>{K(),J&&J()})};Q?Q(ie,K,_e):_e()}else n(ie,B,b)},Ie=(P,B,b,re=!1,$=!1)=>{const{type:ie,props:Z,ref:ae,children:te,dynamicChildren:T,shapeFlag:E,patchFlag:O,dirs:Q,cacheIndex:J}=P;if(O===-2&&($=!1),ae!=null&&Vo(ae,null,b,P,!0),J!=null&&(B.renderCache[J]=void 0),E&256){B.ctx.deactivate(P);return}const K=E&1&&Q,_e=!Er(P);let he;if(_e&&(he=Z&&Z.onVnodeBeforeUnmount)&&Hn(he,B,P),E&6)fe(P.component,b,re);else{if(E&128){P.suspense.unmount(b,re);return}K&&Wi(P,null,B,"beforeUnmount"),E&64?P.type.remove(P,B,b,Ee,re):T&&!T.hasOnce&&(ie!==ci||O>0&&O&64)?me(T,B,b,!1,!0):(ie===ci&&O&384||!$&&E&16)&&me(te,B,b),re&&Oe(P)}(_e&&(he=Z&&Z.onVnodeUnmounted)||K)&&fn(()=>{he&&Hn(he,B,P),K&&Wi(P,null,B,"unmounted")},b)},Oe=P=>{const{type:B,el:b,anchor:re,transition:$}=P;if(B===ci){j(b,re);return}if(B===Ro){S(P);return}const ie=()=>{s(b),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:ae}=$,te=()=>Z(b,ie);ae?ae(P.el,ie,te):te()}else ie()},j=(P,B)=>{let b;for(;P!==B;)b=h(P),s(P),P=b;s(B)},fe=(P,B,b)=>{const{bum:re,scope:$,job:ie,subTree:Z,um:ae,m:te,a:T}=P;Mu(te),Mu(T),re&&Aa(re),$.stop(),ie&&(ie.flags|=8,Ie(Z,P,B,b)),ae&&fn(ae,B),fn(()=>{P.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},me=(P,B,b,re=!1,$=!1,ie=0)=>{for(let Z=ie;Z<P.length;Z++)Ie(P[Z],B,b,re,$)},de=P=>{if(P.shapeFlag&6)return de(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const B=h(P.anchor||P.el),b=B&&B[um];return b?h(b):B};let be=!1;const Ne=(P,B,b)=>{P==null?B._vnode&&Ie(B._vnode,null,null,!0):A(B._vnode||null,P,B,null,null,null,b),B._vnode=P,be||(be=!0,Su(),Hd(),be=!1)},Ee={p:A,um:Ie,m:Se,r:Oe,mt:N,mc:R,pc:k,pbc:v,n:de,o:i};return{render:Ne,hydrate:void 0,createApp:Fm(Ne)}}function Ea({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xi({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Gm(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function ah(i,e,t=!1){const n=i.children,s=e.children;if(Ye(n)&&Ye(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ri(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ah(o,a)),a.type===la&&(a.el=o.el)}}function Wm(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function lh(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lh(e)}function Mu(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Xm=Symbol.for("v-scx"),qm=()=>wo(Xm);function rs(i,e,t){return ch(i,e,t)}function ch(i,e,t=gt){const{immediate:n,deep:s,flush:r,once:o}=t,a=en({},t),l=e&&n||!e&&r!=="post";let c;if(Lr){if(r==="sync"){const d=qm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qn,d.resume=Qn,d.pause=Qn,d}}const u=Gt;a.call=(d,g,A)=>Kn(d,u,g,A);let f=!1;r==="post"?a.scheduler=d=>{fn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Dc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=sm(i,e,a);return Lr&&(c?c.push(h):l&&h()),h}function Qm(i,e,t){const n=this.proxy,s=Ft(i)?i.includes(".")?uh(n,i):()=>n[i]:i.bind(n,n);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=Gr(this),a=ch(s,r.bind(n),t);return o(),a}function uh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const Ym=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${bn(e)}Modifiers`]||i[`${ps(e)}Modifiers`];function Km(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||gt;let s=t;const r=e.startsWith("update:"),o=r&&Ym(n,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(yp)));let a,l=n[a=ga(e)]||n[a=ga(bn(e))];!l&&r&&(l=n[a=ga(ps(e))]),l&&Kn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Kn(c,i,6,s)}}function fh(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ke(i)){const l=c=>{const u=fh(c,e,!0);u&&(a=!0,en(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Mt(i)&&n.set(i,null),null):(Ye(r)?r.forEach(l=>o[l]=null):en(o,r),Mt(i)&&n.set(i,o),o)}function aa(i,e){return!i||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(i,e[0].toLowerCase()+e.slice(1))||ct(i,ps(e))||ct(i,e))}function Tu(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:A}=i,m=ko(i);let p,x;try{if(t.shapeFlag&4){const S=s||n,M=S;p=Vn(c.call(M,S,u,f,d,h,g)),x=a}else{const S=e;p=Vn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),x=e.props?a:jm(a)}}catch(S){Mr.length=0,ra(S,i,1),p=Yn(ds)}let _=p;if(x&&A!==!1){const S=Object.keys(x),{shapeFlag:M}=_;S.length&&M&7&&(r&&S.some(gc)&&(x=$m(x,r)),_=js(_,x,!1,!0))}return t.dirs&&(_=js(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&Pc(_,t.transition),p=_,ko(m),p}const jm=i=>{let e;for(const t in i)(t==="class"||t==="style"||ea(t))&&((e||(e={}))[t]=i[t]);return e},$m=(i,e)=>{const t={};for(const n in i)(!gc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Zm(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?bu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!aa(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?bu(n,o,c):!0:!!o;return!1}function bu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!aa(t,r))return!0}return!1}function Jm({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const dh=i=>i.__isSuspense;function eg(i,e){e&&e.pendingBranch?Ye(i)?e.effects.push(...i):e.effects.push(i):lm(i)}const ci=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),ds=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),Mr=[];let hn=null;function Bn(i=!1){Mr.push(hn=i?null:[])}function tg(){Mr.pop(),hn=Mr[Mr.length-1]||null}let Br=1;function wu(i,e=!1){Br+=i,i<0&&hn&&e&&(hn.hasOnce=!0)}function hh(i){return i.dynamicChildren=Br>0?hn||ks:null,tg(),Br>0&&hn&&hn.push(i),i}function ui(i,e,t,n,s,r){return hh(Qt(i,e,t,n,s,r,!0))}function ph(i,e,t,n,s){return hh(Yn(i,e,t,n,s,!0))}function mh(i){return i?i.__v_isVNode===!0:!1}function fr(i,e){return i.type===e.type&&i.key===e.key}const gh=({key:i})=>i??null,Io=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ft(i)||Wt(i)||Ke(i)?{i:Un,r:i,k:e,f:!!t}:i:null);function Qt(i,e=null,t=null,n=0,s=null,r=i===ci?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&gh(e),ref:e&&Io(e),scopeId:Vd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(Bc(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Br>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const Yn=ng;function ng(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Cm)&&(i=ds),mh(i)){const a=js(i,e,!0);return t&&Bc(a,t),Br>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(i)]=a:hn.push(a)),a.patchFlag=-2,a}if(pg(i)&&(i=i.__vccOpts),e){e=ig(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=_c(a)),Mt(l)&&(Ic(l)&&!Ye(l)&&(l=en({},l)),e.style=xc(l))}const o=Ft(i)?1:dh(i)?128:fm(i)?64:Mt(i)?4:Ke(i)?2:0;return Qt(i,e,t,n,s,o,r,!0)}function ig(i){return i?Ic(i)||eh(i)?en({},i):i:null}function js(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?rg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&gh(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(Io(e)):[r,Io(e)]:Io(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==ci?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&js(i.ssContent),ssFallback:i.ssFallback&&js(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Pc(u,l.clone(u)),u}function _l(i=" ",e=0){return Yn(la,null,i,e)}function sg(i,e){const t=Yn(Ro,null,i);return t.staticCount=e,t}function wi(i="",e=!1){return e?(Bn(),ph(ds,null,i)):Yn(ds,null,i)}function Vn(i){return i==null||typeof i=="boolean"?Yn(ds):Ye(i)?Yn(ci,null,i.slice()):mh(i)?Ri(i):Yn(la,null,String(i))}function Ri(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:js(i)}function Bc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Bc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!eh(e)?e._ctx=Un:s===3&&Un&&(Un.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:Un},t=32):(e=String(e),n&64?(t=16,e=[_l(e)]):t=8);i.children=e,i.shapeFlag|=t}function rg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=_c([e.class,n.class]));else if(s==="style")e.style=xc([e.style,n.style]);else if(ea(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Hn(i,e,t,n=null){Kn(i,e,7,[t,n])}const og=$d();let ag=0;function lg(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||og,r={uid:ag++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(n,s),emitsOptions:fh(n,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:n.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Km.bind(null,r),i.ce&&i.ce(r),r}let Gt=null,Wo,vl;{const i=sa(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Wo=e("__VUE_INSTANCE_SETTERS__",t=>Gt=t),vl=e("__VUE_SSR_SETTERS__",t=>Lr=t)}const Gr=i=>{const e=Gt;return Wo(i),i.scope.on(),()=>{i.scope.off(),Wo(e)}},Ru=()=>{Gt&&Gt.scope.off(),Wo(null)};function Ah(i){return i.vnode.shapeFlag&4}let Lr=!1;function cg(i,e=!1,t=!1){e&&vl(e);const{props:n,children:s}=i.vnode,r=Ah(i);Lm(i,n,r,e),zm(i,s,t);const o=r?ug(i,e):void 0;return e&&vl(!1),o}function ug(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Tm);const{setup:n}=t;if(n){Hi();const s=i.setupContext=n.length>1?dg(i):null,r=Gr(i),o=Vr(n,i,0,[i.props,s]),a=md(o);if(ki(),r(),(a||i.sp)&&!Er(i)&&Gd(i),a){if(o.then(Ru,Ru),e)return o.then(l=>{Iu(i,l)}).catch(l=>{ra(l,i,0)});i.asyncDep=o}else Iu(i,o)}else Sh(i)}function Iu(i,e,t){Ke(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Mt(e)&&(i.setupState=Od(e)),Sh(i)}function Sh(i,e,t){const n=i.type;i.render||(i.render=n.render||Qn);{const s=Gr(i);Hi();try{bm(i)}finally{ki(),s()}}}const fg={get(i,e){return Vt(i,"get",""),i[e]}};function dg(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,fg),slots:i.slots,emit:i.emit,expose:e}}function Lc(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Od(jp(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cr)return Cr[t](i)},has(e,t){return t in e||t in Cr}})):i.proxy}function hg(i,e=!0){return Ke(i)?i.displayName||i.name:i.name||e&&i.__name}function pg(i){return Ke(i)&&"__vccOpts"in i}const mg=(i,e)=>nm(i,e,Lr),gg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yl;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{yl=Du.createPolicy("vue",{createHTML:i=>i})}catch{}const xh=yl?i=>yl.createHTML(i):i=>i,Ag="http://www.w3.org/2000/svg",Sg="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,Pu=ai&&ai.createElement("template"),xg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?ai.createElementNS(Ag,i):e==="mathml"?ai.createElementNS(Sg,i):t?ai.createElement(i,{is:t}):ai.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ai.createTextNode(i),createComment:i=>ai.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ai.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pu.innerHTML=xh(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Pu.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_g=Symbol("_vtc");function vg(i,e,t){const n=i[_g];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Fu=Symbol("_vod"),yg=Symbol("_vsh"),Eg=Symbol(""),Cg=/(^|;)\s*display\s*:/;function Mg(i,e,t){const n=i.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Do(n,a,"")}else for(const o in e)t[o]==null&&Do(n,o,"");for(const o in t)o==="display"&&(r=!0),Do(n,o,t[o])}else if(s){if(e!==t){const o=n[Eg];o&&(t+=";"+o),n.cssText=t,r=Cg.test(t)}}else e&&i.removeAttribute("style");Fu in i&&(i[Fu]=r?n.display:"",i[yg]&&(n.display="none"))}const Bu=/\s*!important$/;function Do(i,e,t){if(Ye(t))t.forEach(n=>Do(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Tg(i,e);Bu.test(t)?i.setProperty(ps(n),t.replace(Bu,""),"important"):i[n]=t}}const Lu=["Webkit","Moz","ms"],Ca={};function Tg(i,e){const t=Ca[e];if(t)return t;let n=bn(e);if(n!=="filter"&&n in i)return Ca[e]=n;n=ia(n);for(let s=0;s<Lu.length;s++){const r=Lu[s]+n;if(r in i)return Ca[e]=r}return e}const Uu="http://www.w3.org/1999/xlink";function Ou(i,e,t,n,s,r=wp(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Uu,e.slice(6,e.length)):i.setAttributeNS(Uu,e,t):t==null||r&&!xd(t)?i.removeAttribute(e):i.setAttribute(e,r?"":zi(t)?String(t):t)}function Nu(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?xh(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=xd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function bg(i,e,t,n){i.addEventListener(e,t,n)}function wg(i,e,t,n){i.removeEventListener(e,t,n)}const zu=Symbol("_vei");function Rg(i,e,t,n,s=null){const r=i[zu]||(i[zu]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Ig(e);if(n){const c=r[e]=Fg(n,s);bg(i,a,c,l)}else o&&(wg(i,a,o,l),r[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function Ig(i){let e;if(Hu.test(i)){e={};let n;for(;n=i.match(Hu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ps(i.slice(2)),e]}let Ma=0;const Dg=Promise.resolve(),Pg=()=>Ma||(Dg.then(()=>Ma=0),Ma=Date.now());function Fg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Kn(Bg(n,t.value),e,5,[n])};return t.value=i,t.attached=Pg(),t}function Bg(i,e){if(Ye(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ku=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Lg=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?vg(i,n,o):e==="style"?Mg(i,t,n):ea(e)?gc(e)||Rg(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ug(i,e,n,o))?(Nu(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ou(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Ft(n))?Nu(i,bn(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Ou(i,e,n,o))};function Ug(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&ku(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ku(e)&&Ft(t)?!1:e in i}const Og=en({patchProp:Lg},xg);let Vu;function Ng(){return Vu||(Vu=km(Og))}const zg=(...i)=>{const e=Ng().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=kg(n);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Hg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hg(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function kg(i){return Ft(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="174",Ss={ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vg=0,Gu=1,Gg=2,_h=1,Wg=2,oi=3,jn=0,an=1,Cn=2,Li=0,Ui=1,Wu=2,Xu=3,qu=4,vh=5,ts=100,Xg=101,qg=102,Qg=103,Yg=104,Kg=200,jg=201,$g=202,Zg=203,Ur=204,Or=205,Jg=206,e0=207,t0=208,n0=209,i0=210,s0=211,r0=212,o0=213,a0=214,El=0,Cl=1,Ml=2,$s=3,Tl=4,bl=5,wl=6,Rl=7,yh=0,l0=1,c0=2,Oi=0,u0=1,f0=2,d0=3,h0=4,p0=5,m0=6,g0=7,Eh=300,Zs=301,Js=302,Il=303,Dl=304,ca=306,Pl=1e3,os=1001,Fl=1002,mn=1003,A0=1004,$r=1005,Wn=1006,Ta=1007,as=1008,$n=1009,Ch=1010,Mh=1011,Nr=1012,Oc=1013,Mn=1014,On=1015,or=1016,Nc=1017,zc=1018,er=1020,Th=35902,bh=1021,wh=1022,Zt=1023,Rh=1024,Ih=1025,us=1026,tr=1027,Dh=1028,ua=1029,Ph=1030,Hc=1031,Xs=1033,Po=33776,Fo=33777,Bo=33778,Lo=33779,Bl=35840,Ll=35841,Ul=35842,Ol=35843,Nl=36196,zl=37492,Hl=37496,kl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Ql=37814,Yl=37815,Kl=37816,jl=37817,$l=37818,Zl=37819,Jl=37820,ec=37821,Uo=36492,tc=36494,nc=36495,Fh=36283,ic=36284,sc=36285,rc=36286,S0=3200,x0=3201,_0=0,v0=1,Fi="",yn="srgb",nr="srgb-linear",Xo="linear",ht="srgb",_s=7680,Qu=519,y0=512,E0=513,C0=514,Bh=515,M0=516,T0=517,b0=518,w0=519,Yu=35044,R0=35048,Ku="300 es",mi=2e3,qo=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,oc=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function I0(i,e){return(i%e+e)%e}function ba(i,e,t){return(1-t)*i+t*e}function dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:Oo};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],A=s[0],m=s[3],p=s[6],x=s[1],_=s[4],S=s[7],M=s[2],w=s[5],y=s[8];return r[0]=o*A+a*x+l*M,r[3]=o*m+a*_+l*w,r[6]=o*p+a*S+l*y,r[1]=c*A+u*x+f*M,r[4]=c*m+u*_+f*w,r[7]=c*p+u*S+f*y,r[2]=h*A+d*x+g*M,r[5]=h*m+d*_+g*w,r[8]=h*p+d*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return e[0]=f*A,e[1]=(s*c-u*n)*A,e[2]=(a*n-s*o)*A,e[3]=h*A,e[4]=(u*t-s*l)*A,e[5]=(s*r-a*t)*A,e[6]=d*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ge;function Uh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D0(){const i=Qo("canvas");return i.style.display="block",i}const ju={};function Ji(i){i in ju||(ju[i]=!0,console.warn(i))}function P0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function F0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $u=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){const i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Xo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:e,whitePoint:n,transfer:Xo,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}const it=L0();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vs;class U0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Qo("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O0=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]))}else r=Ra(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?U0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;class Jt extends ms{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=os,s=os,r=Wn,o=as,a=Zt,l=$n,c=Jt.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Wr(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pl:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pl:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Eh;Jt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],A=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(d+1)/2,M=(p+1)/2,w=(u+h)/4,y=(f+A)/4,R=(g+m)/4;return _>S&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=y/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=R/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=y/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-A)*(f-A)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-A)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends ms{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new kc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends z0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],A=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=A;return}if(f!==A||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*A,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),w=Math.atan2(M,p*x);m=Math.sin(m*w)/M,a=Math.sin(a*w)/M}const S=a*x;if(l=l*m+h*S,c=c*m+d*S,u=u*m+g*S,f=f*m+A*S,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new F,Ju=new yt;class Xn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Jr.subVectors(this.max,hr),ys.subVectors(e.a,hr),Es.subVectors(e.b,hr),Cs.subVectors(e.c,hr),_i.subVectors(Es,ys),vi.subVectors(Cs,Es),qi.subVectors(ys,Cs);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-qi.z,qi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,qi.z,0,-qi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-qi.y,qi.x,0];return!Da(t,ys,Es,Cs,Jr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,ys,Es,Cs,Jr))?!1:(eo.crossVectors(_i,vi),t=[eo.x,eo.y,eo.z],Da(t,ys,Es,Cs,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,Zr=new Xn,ys=new F,Es=new F,Cs=new F,_i=new F,vi=new F,qi=new F,hr=new F,Jr=new F,eo=new F,Qi=new F;function Da(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const k0=new Xn,pr=new F,Pa=new F;class Vc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):k0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Pa)),this.expandByPoint(pr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new F,Fa=new F,to=new F,yi=new F,Ba=new F,no=new F,La=new F;let Nh=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fa.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=yi.dot(this.direction),l=-yi.dot(to),c=yi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const A=1/u;f*=A,h*=A,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fa).addScaledVector(to,h),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,r){Ba.subVectors(t,e),no.subVectors(n,e),La.crossVectors(Ba,no);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(yi,no));if(l<0)return null;const c=a*this.direction.dot(Ba.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(La);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Xe{constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,g,A,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,g,A,m)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,g,A,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,A=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-A*c,t[9]=-a*l,t[2]=A-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,A=c*f;t[0]=h+A*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=A+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,A=c*f;t[0]=h-A*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=A-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,A=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+A,t[1]=l*f,t[5]=A*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=A-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-A*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+A,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=A*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,G0)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ei.crossVectors(n,cn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ei.crossVectors(n,cn)),Ei.normalize(),io.crossVectors(cn,Ei),s[0]=Ei.x,s[4]=io.x,s[8]=cn.x,s[1]=Ei.y,s[5]=io.y,s[9]=cn.y,s[2]=Ei.z,s[6]=io.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],A=n[6],m=n[10],p=n[14],x=n[3],_=n[7],S=n[11],M=n[15],w=s[0],y=s[4],R=s[8],C=s[12],v=s[1],D=s[5],z=s[9],L=s[13],N=s[2],V=s[6],H=s[10],W=s[14],k=s[3],Y=s[7],ce=s[11],Se=s[15];return r[0]=o*w+a*v+l*N+c*k,r[4]=o*y+a*D+l*V+c*Y,r[8]=o*R+a*z+l*H+c*ce,r[12]=o*C+a*L+l*W+c*Se,r[1]=u*w+f*v+h*N+d*k,r[5]=u*y+f*D+h*V+d*Y,r[9]=u*R+f*z+h*H+d*ce,r[13]=u*C+f*L+h*W+d*Se,r[2]=g*w+A*v+m*N+p*k,r[6]=g*y+A*D+m*V+p*Y,r[10]=g*R+A*z+m*H+p*ce,r[14]=g*C+A*L+m*W+p*Se,r[3]=x*w+_*v+S*N+M*k,r[7]=x*y+_*D+S*V+M*Y,r[11]=x*R+_*z+S*H+M*ce,r[15]=x*C+_*L+S*W+M*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],A=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+A*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],A=e[13],m=e[14],p=e[15],x=f*m*c-A*h*c+A*l*d-a*m*d-f*l*p+a*h*p,_=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,S=u*A*c-g*f*c+g*a*d-o*A*d-u*a*p+o*f*p,M=g*f*l-u*A*l-g*a*h+o*A*h+u*a*m-o*f*m,w=t*x+n*_+s*S+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=x*y,e[1]=(A*h*r-f*m*r-A*s*d+n*m*d+f*s*p-n*h*p)*y,e[2]=(a*m*r-A*l*r+A*s*c-n*m*c-a*s*p+n*l*p)*y,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*y,e[4]=_*y,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*y,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*y,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*y,e[8]=S*y,e[9]=(g*f*r-u*A*r-g*n*d+t*A*d+u*n*p-t*f*p)*y,e[10]=(o*A*r-g*a*r+g*n*c-t*A*c-o*n*p+t*a*p)*y,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*d-t*a*d)*y,e[12]=M*y,e[13]=(u*A*s-g*f*s+g*n*h-t*A*h-u*n*m+t*f*m)*y,e[14]=(g*a*s-o*A*s-g*n*l+t*A*l+o*n*m-t*a*m)*y,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*y,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,A=o*u,m=o*f,p=a*f,x=l*c,_=l*u,S=l*f,M=n.x,w=n.y,y=n.z;return s[0]=(1-(A+p))*M,s[1]=(d+S)*M,s[2]=(g-_)*M,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(h+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+_)*y,s[9]=(m-x)*y,s[10]=(1-(h+A))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let d,g;if(a===mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi){const l=this.elements,c=1/(t-e),u=1/(n-s),f=1/(o-r),h=(t+e)*c,d=(n+s)*u;let g,A;if(a===mi)g=(o+r)*f,A=-2*f;else if(a===qo)g=r*f,A=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ms=new F,Pn=new Xe,V0=new F(0,0,0),G0=new F(1,1,1),Ei=new F,io=new F,cn=new F,ef=new Xe,tf=new yt;class Si{constructor(e=0,t=0,n=0,s=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const nf=new F,Ts=new yt,ni=new Xe,so=new F,mr=new F,X0=new F,q0=new yt,sf=new F(1,0,0),rf=new F(0,1,0),of=new F(0,0,1),af={type:"added"},Q0={type:"removed"},bs={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Pt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new F,t=new Si,n=new yt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ge}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(mr,so,this.up):ni.lookAt(so,mr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(ni),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q0),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new F,ii=new F,Oa=new F,si=new F,ws=new F,Rs=new F,lf=new F,Na=new F,za=new F,Ha=new F,ka=new vt,Va=new vt,Ga=new vt;class Ln{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ii.subVectors(n,t),Oa.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(ii),l=Fn.dot(Oa),c=ii.dot(ii),u=ii.dot(Oa),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ka.setScalar(0),Va.setScalar(0),Ga.setScalar(0),ka.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Ga.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ii.subVectors(e,t),Fn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Fn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,n),Rs.subVectors(r,n),Na.subVectors(e,n);const l=ws.dot(Na),c=Rs.dot(Na);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,s);const u=ws.dot(za),f=Rs.dot(za);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ws,o);Ha.subVectors(e,r);const d=ws.dot(Ha),g=Rs.dot(Ha);if(g>=0&&d<=g)return t.copy(r);const A=d*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Rs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return lf.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(lf,a);const p=1/(m+A+h);return o=A*p,a=h*p,t.copy(n).addScaledVector(ws,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=I0(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wa(o,r,e+1/3),this.g=Wa(o,r,e),this.b=Wa(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return it.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ze(kt.r*255,0,255))*65536+Math.round(Ze(kt.g*255,0,255))*256+Math.round(Ze(kt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=yn){it.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(ro);const n=ba(Ci.h,ro.h,t),s=ba(Ci.s,ro.s,t),r=ba(Ci.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new st;st.NAMES=Hh;let Y0=0;class fa extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ui,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Or,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hi=K0();function K0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function j0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ze(i,-65504,65504),hi.floatView[0]=i;const e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function $0(i){const e=i>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(i&1023)]+hi.exponentTable[e],hi.floatView[0]}class zr{static toHalfFloat(e){return j0(e)}static fromHalfFloat(e){return $0(e)}}const It=new F,oo=new Le;let Z0=0;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}}class kh extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let J0=0;const _n=new Xe,Xa=new Pt,Is=new F,un=new Xn,gr=new Xn,Ut=new F;class wn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?Vh:kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(un.min,gr.min),un.expandByPoint(Ut),Ut.addVectors(un.max,gr.max),un.expandByPoint(Ut)):(un.expandByPoint(gr.min),un.expandByPoint(gr.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Ut.add(Is)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,f=new F,h=new Le,d=new Le,g=new Le,A=new F,m=new F;function p(R,C,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,v),h.fromBufferAttribute(r,R),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(A.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[R].add(A),a[C].add(A),a[v].add(A),l[R].add(m),l[C].add(m),l[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,C=x.length;R<C;++R){const v=x[R],D=v.start,z=v.count;for(let L=D,N=D+z;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new F,S=new F,M=new F,w=new F;function y(R){M.fromBufferAttribute(s,R),w.copy(M);const C=a[R];_.copy(C),_.sub(M.multiplyScalar(M.dot(C))).normalize(),S.crossVectors(w,C);const D=S.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,C=x.length;R<C;++R){const v=x[R],D=v.start,z=v.count;for(let L=D,N=D+z;L<N;L+=3)y(e.getX(L+0)),y(e.getX(L+1)),y(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),A=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?d=l[A]*a.data.stride+a.offset:d=l[A]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new Xe,Yi=new Nh,ao=new Vc,uf=new F,lo=new F,co=new F,uo=new F,qa=new F,fo=new F,ff=new F,ho=new F;class Tt extends Pt{constructor(e=new wn,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(qa.fromBufferAttribute(f,e),o?fo.addScaledVector(qa,u):fo.addScaledVector(qa.sub(t),u))}t.add(fo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(ao.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ao,uf)===null||Yi.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,M=_;S<M;S+=3){const w=a.getX(S),y=a.getX(S+1),R=a.getX(S+2);s=po(this,p,e,n,c,u,f,w,y,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),A=Math.min(a.count,d.start+d.count);for(let m=g,p=A;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);s=po(this,o,e,n,c,u,f,x,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,M=_;S<M;S+=3){const w=S,y=S+1,R=S+2;s=po(this,p,e,n,c,u,f,w,y,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let m=g,p=A;m<p;m+=3){const x=m,_=m+1,S=m+2;s=po(this,o,e,n,c,u,f,x,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function eA(i,e,t,n,s,r,o,a){let l;if(e.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===jn,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:i}}function po(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,lo),i.getVertexPosition(l,co),i.getVertexPosition(c,uo);const u=eA(i,e,t,n,lo,co,uo,ff);if(u){const f=new F;Ln.getBarycoord(ff,lo,co,uo,f),s&&(u.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new Le)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,a,l,c,f,new Le)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Ln.getNormal(lo,co,uo,h.normal),u.face=h,u.barycoord=f}return u}class ar extends wn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function g(A,m,p,x,_,S,M,w,y,R,C){const v=S/y,D=M/R,z=S/2,L=M/2,N=w/2,V=y+1,H=R+1;let W=0,k=0;const Y=new F;for(let ce=0;ce<H;ce++){const Se=ce*D-L;for(let Ie=0;Ie<V;Ie++){const Oe=Ie*v-z;Y[A]=Oe*x,Y[m]=Se*_,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[A]=0,Y[m]=0,Y[p]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Ie/y),f.push(1-ce/R),W+=1}}for(let ce=0;ce<R;ce++)for(let Se=0;Se<y;Se++){const Ie=h+Se+V*ce,Oe=h+Se+V*(ce+1),j=h+(Se+1)+V*(ce+1),fe=h+(Se+1)+V*ce;l.push(Ie,Oe,fe),l.push(Oe,j,fe),k+=6}a.addGroup(d,k,C),d+=k,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=ir(i[t]);for(const s in n)e[s]=n[s]}return e}function tA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const nA={clone:ir,merge:Yt};var iA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iA,this.fragmentShader=sA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=tA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new F,df=new Le,hf=new Le;class En extends Wh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,df,hf),t.subVectors(hf,df)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ps=1;class rA extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Ds,Ps,e,t);s.layers=this.layers,this.add(s);const r=new En(Ds,Ps,e,t);r.layers=this.layers,this.add(r);const o=new En(Ds,Ps,e,t);o.layers=this.layers,this.add(o);const a=new En(Ds,Ps,e,t);a.layers=this.layers,this.add(a);const l=new En(Ds,Ps,e,t);l.layers=this.layers,this.add(l);const c=new En(Ds,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xh extends Jt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oA extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ar(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Li});r.uniforms.tEquirect.value=t;const o=new Tt(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Wn),new rA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class mo extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aA={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,n),p=this._getHandJoint(c,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lA extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ti extends Jt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=mn,u=mn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cA extends Tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ya=new F,uA=new F,fA=new Ge;class Ii{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ya.subVectors(n,t).cross(uA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fA.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Vc,go=new F;class qh{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],A=s[10],m=s[11],p=s[12],x=s[13],_=s[14],S=s[15];if(n[0].setComponents(l-r,h-c,m-d,S-p).normalize(),n[1].setComponents(l+r,h+c,m+d,S+p).normalize(),n[2].setComponents(l+o,h+u,m+g,S+x).normalize(),n[3].setComponents(l-o,h-u,m-g,S-x).normalize(),n[4].setComponents(l-a,h-f,m-A,S-_).normalize(),t===mi)n[5].setComponents(l+a,h+f,m+A,S+_).normalize();else if(t===qo)n[5].setComponents(a,f,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gc extends Jt{constructor(e,t,n,s,r,o,a,l,c,u=us){if(u!==us&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Mn),n===void 0&&u===tr&&(n=er),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hr extends wn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const A=[],m=n/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(d,2));function x(){const S=new F,M=new F;let w=0;const y=(t-e)/n;for(let R=0;R<=r;R++){const C=[],v=R/r,D=v*(t-e)+e;for(let z=0;z<=s;z++){const L=z/s,N=L*l+a,V=Math.sin(N),H=Math.cos(N);M.x=D*V,M.y=-v*n+m,M.z=D*H,f.push(M.x,M.y,M.z),S.set(V,y,H).normalize(),h.push(S.x,S.y,S.z),d.push(L,1-v),C.push(g++)}A.push(C)}for(let R=0;R<s;R++)for(let C=0;C<r;C++){const v=A[C][R],D=A[C+1][R],z=A[C+1][R+1],L=A[C][R+1];(e>0||C!==0)&&(u.push(v,D,L),w+=3),(t>0||C!==r-1)&&(u.push(D,z,L),w+=3)}c.addGroup(p,w,0),p+=w}function _(S){const M=g,w=new Le,y=new F;let R=0;const C=S===!0?e:t,v=S===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*v,0),h.push(0,v,0),d.push(.5,.5),g++;const D=g;for(let z=0;z<=s;z++){const N=z/s*l+a,V=Math.cos(N),H=Math.sin(N);y.x=C*H,y.y=m*v,y.z=C*V,f.push(y.x,y.y,y.z),h.push(0,v,0),w.x=V*.5+.5,w.y=H*.5*v+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){const L=M+z,N=D+z;S===!0?u.push(N,N+1,L):u.push(N+1,N,L),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wc extends Hr{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],A=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let _=0;_<c;_++){const S=_*f-r;g.push(S,-x,0),A.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,S=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;d.push(_,S,w),d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yo extends wn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,h=new F,d=[],g=[],A=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const w=M/t;f.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),A.push(h.x,h.y,h.z),m.push(w+S,1-_),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=u[p][x+1],S=u[p][x],M=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&d.push(_,S,w),(p!==n-1||l<Math.PI)&&d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dA extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hA extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xc extends Wh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pA extends wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class mA extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class pf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function mf(i,e,t,n){const s=gA(n);switch(t){case bh:return i*e;case Rh:return i*e;case Ih:return i*e*2;case Dh:return i*e/s.components*s.byteLength;case ua:return i*e/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case Hc:return i*e*2/s.components*s.byteLength;case wh:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case Xs:return i*e*4/s.components*s.byteLength;case Po:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Ol:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case Ul:return Math.max(i,8)*Math.max(e,8)/2;case Nl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uo:case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fh:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gA(i){switch(i){case $n:case Ch:return{byteLength:1,components:1};case Nr:case Mh:case or:return{byteLength:2,components:1};case Nc:case zc:return{byteLength:2,components:4};case Mn:case Oc:case On:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function AA(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],A=f[d];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++h,f[h]=A)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const A=f[d];i.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var SA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YA="gl_FragColor = linearToOutputTexel( gl_FragColor );",KA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_S=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:SA,alphahash_pars_fragment:xA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:yA,alphatest_pars_fragment:EA,aomap_fragment:CA,aomap_pars_fragment:MA,batching_pars_vertex:TA,batching_vertex:bA,begin_vertex:wA,beginnormal_vertex:RA,bsdfs:IA,iridescence_fragment:DA,bumpmap_pars_fragment:PA,clipping_planes_fragment:FA,clipping_planes_pars_fragment:BA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:UA,color_fragment:OA,color_pars_fragment:NA,color_pars_vertex:zA,color_vertex:HA,common:kA,cube_uv_reflection_fragment:VA,defaultnormal_vertex:GA,displacementmap_pars_vertex:WA,displacementmap_vertex:XA,emissivemap_fragment:qA,emissivemap_pars_fragment:QA,colorspace_fragment:YA,colorspace_pars_fragment:KA,envmap_fragment:jA,envmap_common_pars_fragment:$A,envmap_pars_fragment:ZA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:uS,envmap_vertex:eS,fog_vertex:tS,fog_pars_vertex:nS,fog_fragment:iS,fog_pars_fragment:sS,gradientmap_pars_fragment:rS,lightmap_pars_fragment:oS,lights_lambert_fragment:aS,lights_lambert_pars_fragment:lS,lights_pars_begin:cS,lights_toon_fragment:fS,lights_toon_pars_fragment:dS,lights_phong_fragment:hS,lights_phong_pars_fragment:pS,lights_physical_fragment:mS,lights_physical_pars_fragment:gS,lights_fragment_begin:AS,lights_fragment_maps:SS,lights_fragment_end:xS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:ES,map_fragment:CS,map_pars_fragment:MS,map_particle_fragment:TS,map_particle_pars_fragment:bS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:RS,morphinstance_vertex:IS,morphcolor_vertex:DS,morphnormal_vertex:PS,morphtarget_pars_vertex:FS,morphtarget_vertex:BS,normal_fragment_begin:LS,normal_fragment_maps:US,normal_pars_fragment:OS,normal_pars_vertex:NS,normal_vertex:zS,normalmap_pars_fragment:HS,clearcoat_normal_fragment_begin:kS,clearcoat_normal_fragment_maps:VS,clearcoat_pars_fragment:GS,iridescence_pars_fragment:WS,opaque_fragment:XS,packing:qS,premultiplied_alpha_fragment:QS,project_vertex:YS,dithering_fragment:KS,dithering_pars_fragment:jS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:JS,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ox,specularmap_fragment:ax,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:ux,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:hx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:Ax,background_frag:Sx,backgroundCube_vert:xx,backgroundCube_frag:_x,cube_vert:vx,cube_frag:yx,depth_vert:Ex,depth_frag:Cx,distanceRGBA_vert:Mx,distanceRGBA_frag:Tx,equirect_vert:bx,equirect_frag:wx,linedashed_vert:Rx,linedashed_frag:Ix,meshbasic_vert:Dx,meshbasic_frag:Px,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:Lx,meshmatcap_frag:Ux,meshnormal_vert:Ox,meshnormal_frag:Nx,meshphong_vert:zx,meshphong_frag:Hx,meshphysical_vert:kx,meshphysical_frag:Vx,meshtoon_vert:Gx,meshtoon_frag:Wx,points_vert:Xx,points_frag:qx,shadow_vert:Qx,shadow_frag:Yx,sprite_vert:Kx,sprite_frag:jx},Te={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Gn={basic:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([Te.points,Te.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([Te.common,Te.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([Te.sprite,Te.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([Te.common,Te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([Te.lights,Te.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Gn.physical={uniforms:Yt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ao={r:0,b:0,g:0},ji=new Si,$x=new Xe;function Zx(i,e,t,n,s,r,o){const a=new st(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function A(_){let S=!1;const M=g(_);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===ca)?(u===void 0&&(u=new Tt(new ar(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ir(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ji.copy(S.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(ji)),u.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Tt(new sr(2,2),new An({name:"BackgroundMaterial",uniforms:ir(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(Ao,Gh(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,S,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:A,addToRenderList:m,dispose:x}}function Jx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,D,z,L,N){let V=!1;const H=f(L,z,D);r!==H&&(r=H,c(r.object)),V=d(v,L,z,N),V&&g(v,L,z,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(v,D,z,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,D,z){const L=z.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let V=N[D.id];V===void 0&&(V={},N[D.id]=V);let H=V[L];return H===void 0&&(H=h(l()),V[L]=H),H}function h(v){const D=[],z=[],L=[];for(let N=0;N<t;N++)D[N]=0,z[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:v,attributes:{},index:null}}function d(v,D,z,L){const N=r.attributes,V=D.attributes;let H=0;const W=z.getAttributes();for(const k in W)if(W[k].location>=0){const ce=N[k];let Se=V[k];if(Se===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(v,D,z,L){const N={},V=D.attributes;let H=0;const W=z.getAttributes();for(const k in W)if(W[k].location>=0){let ce=V[k];ce===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),N[k]=Se,H++}r.attributes=N,r.attributesNum=H,r.index=L}function A(){const v=r.newAttributes;for(let D=0,z=v.length;D<z;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const z=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;z[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),N[v]!==D&&(i.vertexAttribDivisor(v,D),N[v]=D)}function x(){const v=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==v[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function _(v,D,z,L,N,V,H){H===!0?i.vertexAttribIPointer(v,D,z,N,V):i.vertexAttribPointer(v,D,z,L,N,V)}function S(v,D,z,L){A();const N=L.attributes,V=z.getAttributes(),H=D.defaultAttributeValues;for(const W in V){const k=V[W];if(k.location>=0){let Y=N[W];if(Y===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const ce=Y.normalized,Se=Y.itemSize,Ie=e.get(Y);if(Ie===void 0)continue;const Oe=Ie.buffer,j=Ie.type,fe=Ie.bytesPerElement,me=j===i.INT||j===i.UNSIGNED_INT||Y.gpuType===Oc;if(Y.isInterleavedBufferAttribute){const de=Y.data,be=de.stride,Ne=Y.offset;if(de.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)p(k.location+Ee,de.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)m(k.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<k.locationSize;Ee++)_(k.location+Ee,Se/k.locationSize,j,ce,be*fe,(Ne+Se/k.locationSize*Ee)*fe,me)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)p(k.location+de,Y.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<k.locationSize;de++)m(k.location+de);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let de=0;de<k.locationSize;de++)_(k.location+de,Se/k.locationSize,j,ce,Se*fe,Se/k.locationSize*de*fe,me)}}else if(H!==void 0){const ce=H[W];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(k.location,ce);break;case 3:i.vertexAttrib3fv(k.location,ce);break;case 4:i.vertexAttrib4fv(k.location,ce);break;default:i.vertexAttrib1fv(k.location,ce)}}}}x()}function M(){R();for(const v in n){const D=n[v];for(const z in D){const L=D[z];for(const N in L)u(L[N].object),delete L[N];delete D[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const z in D){const L=D[z];for(const N in L)u(L[N].object),delete L[N];delete D[z]}delete n[v.id]}function y(v){for(const D in n){const z=n[D];if(z[v.id]===void 0)continue;const L=z[v.id];for(const N in L)u(L[N].object),delete L[N];delete z[v.id]}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:A,enableAttribute:m,disableUnusedAttributes:x}}function e_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let A=0;A<f;A++)g+=u[A]*h[A];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Zt&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const R=y===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==$n&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==On&&!R)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:M,maxSamples:w}}function n_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ii,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,A=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,_=x*4;let S=p.clippingState||null;l.value=S,S=u(g,h,_,d);for(let M=0;M!==_;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const A=f!==null?f.length:0;let m=null;if(A!==0){if(m=l.value,g!==!0||m===null){const p=d+A*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=d;_!==A;++_,S+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function i_(i){let e=new WeakMap;function t(o,a){return a===Il?o.mapping=Zs:a===Dl&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Il||a===Dl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oA(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const zs=4,gf=[.125,.215,.35,.446,.526,.582],ns=20,Ka=new Xc,Af=new st;let ja=null,$a=0,Za=0,Ja=!1;const es=(1+Math.sqrt(5))/2,Fs=1/es,Sf=[new F(-es,Fs,0),new F(es,Fs,0),new F(-Fs,0,es),new F(Fs,0,es),new F(0,es,-Fs),new F(0,es,Fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],s_=new F;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=s_}=r;ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,$a,Za),this._renderer.xr.enabled=Ja,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:or,format:Zt,colorSpace:nr,depthBuffer:!1},s=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(r)),this._blurMaterial=o_(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,s,r){const l=new En(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Af),f.toneMapping=Oi,f.autoClear=!1;const g=new hs({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),A=new Tt(new ar,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Af),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const S=this._cubeSize;So(s,_*S,x>2?S:0,S,S),f.setRenderTarget(s),m&&f.render(A,l),f.render(e,l)}A.geometry.dispose(),A.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;So(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sf[(s-r-1)%Sf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Tt(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),A=r/g,m=isFinite(r)?1+Math.floor(u*A):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let x=0;for(let y=0;y<ns;++y){const R=y/A,C=Math.exp(-R*R/2);p.push(C),y===0?x+=C:y<m&&(x+=2*C)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[s],M=3*S*(s>_-zs?s-_+zs:0),w=4*(this._cubeSize-S);So(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Ka)}}function r_(i){const e=[],t=[],n=[];let s=i;const r=i-zs+1+gf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zs?l=gf[o-i+zs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,A=3,m=2,p=1,x=new Float32Array(A*g*d),_=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const y=w%3*2/3-1,R=w>2?0:-1,C=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];x.set(C,A*g*w),_.set(h,m*g*w);const v=[w,w,w,w,w,w];S.set(v,p*g*w)}const M=new wn;M.setAttribute("position",new Tn(x,A)),M.setAttribute("uv",new Tn(_,m)),M.setAttribute("faceIndex",new Tn(S,p)),e.push(M),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function o_(i,e,t){const n=new Float32Array(ns),s=new F(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vf(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function yf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function a_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Il||l===Dl,u=l===Zs||l===Js;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new xf(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new xf(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function l_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function c_(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let A=0;if(d!==null){const x=d.array;A=d.version;for(let _=0,S=x.length;_<S;_+=3){const M=x[_+0],w=x[_+1],y=x[_+2];h.push(M,w,w,y,y,M)}}else if(g!==void 0){const x=g.array;A=g.version;for(let _=0,S=x.length/3-1;_<S;_+=3){const M=_+0,w=_+1,y=_+2;h.push(M,w,w,y,y,M)}}else return;const m=new(Uh(h)?Vh:kh)(h,1);m.version=A;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function u_(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,A){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],A[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,A,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*A[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function f_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d_(i,e,t){const n=new WeakMap,s=new vt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),A===!0&&(S=2),m===!0&&(S=3);let M=a.attributes.position.count*S,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const y=new Float32Array(M*w*4*f),R=new Oh(y,M,w,f);R.type=On,R.needsUpdate=!0;const C=S*4;for(let D=0;D<f;D++){const z=p[D],L=x[D],N=_[D],V=M*w*4*D;for(let H=0;H<z.count;H++){const W=H*C;g===!0&&(s.fromBufferAttribute(z,H),y[V+W+0]=s.x,y[V+W+1]=s.y,y[V+W+2]=s.z,y[V+W+3]=0),A===!0&&(s.fromBufferAttribute(L,H),y[V+W+4]=s.x,y[V+W+5]=s.y,y[V+W+6]=s.z,y[V+W+7]=0),m===!0&&(s.fromBufferAttribute(N,H),y[V+W+8]=s.x,y[V+W+9]=s.y,y[V+W+10]=s.z,y[V+W+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new Le(M,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function h_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Yh=new Jt,Ef=new Gc(1,1),Kh=new Oh,jh=new H0,$h=new Xh,Cf=[],Mf=[],Tf=new Float32Array(16),bf=new Float32Array(9),wf=new Float32Array(4);function lr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function da(i,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function S_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Bt(t,n))return;wf.set(n),i.uniformMatrix2fv(this.addr,!1,wf),Lt(t,n)}}function x_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Bt(t,n))return;bf.set(n),i.uniformMatrix3fv(this.addr,!1,bf),Lt(t,n)}}function __(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Bt(t,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),Lt(t,n)}}function v_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function M_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function R_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=Bh,r=Ef):r=Yh,t.setTexture2D(e||r,s)}function I_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function D_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$h,s)}function P_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kh,s)}function F_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return A_;case 35674:return S_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return E_;case 35669:case 35673:return C_;case 5125:return M_;case 36294:return T_;case 36295:return b_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return P_}}function B_(i,e){i.uniform1fv(this.addr,e)}function L_(i,e){const t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function U_(i,e){const t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function O_(i,e){const t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function N_(i,e){const t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z_(i,e){const t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function H_(i,e){const t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k_(i,e){i.uniform1iv(this.addr,e)}function V_(i,e){i.uniform2iv(this.addr,e)}function G_(i,e){i.uniform3iv(this.addr,e)}function W_(i,e){i.uniform4iv(this.addr,e)}function X_(i,e){i.uniform1uiv(this.addr,e)}function q_(i,e){i.uniform2uiv(this.addr,e)}function Q_(i,e){i.uniform3uiv(this.addr,e)}function Y_(i,e){i.uniform4uiv(this.addr,e)}function K_(i,e,t){const n=this.cache,s=e.length,r=da(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yh,r[o])}function j_(i,e,t){const n=this.cache,s=e.length,r=da(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jh,r[o])}function $_(i,e,t){const n=this.cache,s=e.length,r=da(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$h,r[o])}function Z_(i,e,t){const n=this.cache,s=e.length,r=da(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kh,r[o])}function J_(i){switch(i){case 5126:return B_;case 35664:return L_;case 35665:return U_;case 35666:return O_;case 35674:return N_;case 35675:return z_;case 35676:return H_;case 5124:case 35670:return k_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}}class nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Rf(i,e){i.seq.push(e),i.map[e.id]=e}function iv(i,e,t){const n=i.name,s=n.length;for(el.lastIndex=0;;){const r=el.exec(n),o=el.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rf(t,c===void 0?new ev(a,i,e):new tv(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new nv(a),Rf(t,f)),t=f}}}class No{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);iv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function If(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sv=37297;let rv=0;function ov(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Df=new Ge;function av(i){it._getMatrix(Df,it.workingColorSpace,i);const e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Xo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ov(i.getShaderSource(e),o)}else return s}function lv(i,e){const t=av(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cv(i,e){let t;switch(e){case u0:t="Linear";break;case f0:t="Reinhard";break;case d0:t="Cineon";break;case h0:t="ACESFilmic";break;case m0:t="AgX";break;case g0:t="Neutral";break;case p0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xo=new F;function uv(){it.getLuminanceCoefficients(xo);const i=xo.x.toFixed(4),e=xo.y.toFixed(4),t=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function dv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sr(i){return i!==""}function Ff(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(pv,gv)}const mv=new Map;function gv(i,e){let t=$e[e];if(t===void 0){const n=mv.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(i){return i.replace(Av,Sv)}function Sv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function _v(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case l0:e="ENVMAP_BLENDING_MIX";break;case c0:e="ENVMAP_BLENDING_ADD";break}return e}function Ev(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xv(t),c=_v(t),u=vv(t),f=yv(t),h=Ev(t),d=fv(t),g=dv(r),A=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Oi?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=ac(o),o=Ff(o,t),o=Bf(o,t),a=ac(a),a=Ff(a,t),a=Bf(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,S=x+p+a,M=If(s,s.VERTEX_SHADER,_),w=If(s,s.FRAGMENT_SHADER,S);s.attachShader(A,M),s.attachShader(A,w),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function y(D){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(A).trim(),L=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(w).trim();let V=!0,H=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,M,w);else{const W=Pf(s,M,"vertex"),k=Pf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+W+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||N==="")&&(H=!1);H&&(D.diagnostics={runnable:V,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(w),R=new No(s,A),C=hv(s,A)}let R;this.getUniforms=function(){return R===void 0&&y(this),R};let C;this.getAttributes=function(){return C===void 0&&y(this),C};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(A,sv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=M,this.fragmentShader=w,this}let Mv=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bv(e),t.set(e,n)),n}}class bv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function wv(i,e,t,n,s,r,o){const a=new zh,l=new Tv,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,v,D,z,L){const N=z.fog,V=L.geometry,H=C.isMeshStandardMaterial?z.environment:null,W=(C.isMeshStandardMaterial?t:e).get(C.envMap||H),k=W&&W.mapping===ca?W.image.height:null,Y=g[C.type];C.precision!==null&&(d=s.getMaxPrecision(C.precision),d!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",d,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let Oe,j,fe,me;if(Y){const ut=Gn[Y];Oe=ut.vertexShader,j=ut.fragmentShader}else Oe=C.vertexShader,j=C.fragmentShader,l.update(C),fe=l.getVertexShaderID(C),me=l.getFragmentShaderID(C);const de=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,je=!!C.map,P=!!C.matcap,B=!!W,b=!!C.aoMap,re=!!C.lightMap,$=!!C.bumpMap,ie=!!C.normalMap,Z=!!C.displacementMap,ae=!!C.emissiveMap,te=!!C.metalnessMap,T=!!C.roughnessMap,E=C.anisotropy>0,O=C.clearcoat>0,Q=C.dispersion>0,J=C.iridescence>0,K=C.sheen>0,_e=C.transmission>0,he=E&&!!C.anisotropyMap,ve=O&&!!C.clearcoatMap,He=O&&!!C.clearcoatNormalMap,pe=O&&!!C.clearcoatRoughnessMap,U=J&&!!C.iridescenceMap,ue=J&&!!C.iridescenceThicknessMap,De=K&&!!C.sheenColorMap,ge=K&&!!C.sheenRoughnessMap,Ue=!!C.specularMap,Ve=!!C.specularColorMap,et=!!C.specularIntensityMap,G=_e&&!!C.transmissionMap,Me=_e&&!!C.thicknessMap,se=!!C.gradientMap,le=!!C.alphaMap,we=C.alphaTest>0,Ce=!!C.alphaHash,We=!!C.extensions;let pt=Oi;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(pt=i.toneMapping);const zt={shaderID:Y,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:j,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nr,alphaToCoverage:!!C.alphaToCoverage,map:je,matcap:P,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:k,aoMap:b,lightMap:re,bumpMap:$,normalMap:ie,displacementMap:h&&Z,emissiveMap:ae,normalMapObjectSpace:ie&&C.normalMapType===v0,normalMapTangentSpace:ie&&C.normalMapType===_0,metalnessMap:te,roughnessMap:T,anisotropy:E,anisotropyMap:he,clearcoat:O,clearcoatMap:ve,clearcoatNormalMap:He,clearcoatRoughnessMap:pe,dispersion:Q,iridescence:J,iridescenceMap:U,iridescenceThicknessMap:ue,sheen:K,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:Ue,specularColorMap:Ve,specularIntensityMap:et,transmission:_e,transmissionMap:G,thicknessMap:Me,gradientMap:se,opaque:C.transparent===!1&&C.blending===Ui&&C.alphaToCoverage===!1,alphaMap:le,alphaTest:we,alphaHash:Ce,combine:C.combine,mapUv:je&&A(C.map.channel),aoMapUv:b&&A(C.aoMap.channel),lightMapUv:re&&A(C.lightMap.channel),bumpMapUv:$&&A(C.bumpMap.channel),normalMapUv:ie&&A(C.normalMap.channel),displacementMapUv:Z&&A(C.displacementMap.channel),emissiveMapUv:ae&&A(C.emissiveMap.channel),metalnessMapUv:te&&A(C.metalnessMap.channel),roughnessMapUv:T&&A(C.roughnessMap.channel),anisotropyMapUv:he&&A(C.anisotropyMap.channel),clearcoatMapUv:ve&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:He&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:ge&&A(C.sheenRoughnessMap.channel),specularMapUv:Ue&&A(C.specularMap.channel),specularColorMapUv:Ve&&A(C.specularColorMap.channel),specularIntensityMapUv:et&&A(C.specularIntensityMap.channel),transmissionMapUv:G&&A(C.transmissionMap.channel),thicknessMapUv:Me&&A(C.thicknessMap.channel),alphaMapUv:le&&A(C.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(je||le),fog:!!N,useFog:C.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:je&&C.map.isVideoTexture===!0&&it.getTransfer(C.map.colorSpace)===ht,decodeVideoTextureEmissive:ae&&C.emissiveMap.isVideoTexture===!0&&it.getTransfer(C.emissiveMap.colorSpace)===ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Cn,flipSided:C.side===an,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:We&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&C.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(C){const v=[];if(C.shaderID?v.push(C.shaderID):(v.push(C.customVertexShaderID),v.push(C.customFragmentShaderID)),C.defines!==void 0)for(const D in C.defines)v.push(D),v.push(C.defines[D]);return C.isRawShaderMaterial===!1&&(x(v,C),_(v,C),v.push(i.outputColorSpace)),v.push(C.customProgramCacheKey),v.join()}function x(C,v){C.push(v.precision),C.push(v.outputColorSpace),C.push(v.envMapMode),C.push(v.envMapCubeUVHeight),C.push(v.mapUv),C.push(v.alphaMapUv),C.push(v.lightMapUv),C.push(v.aoMapUv),C.push(v.bumpMapUv),C.push(v.normalMapUv),C.push(v.displacementMapUv),C.push(v.emissiveMapUv),C.push(v.metalnessMapUv),C.push(v.roughnessMapUv),C.push(v.anisotropyMapUv),C.push(v.clearcoatMapUv),C.push(v.clearcoatNormalMapUv),C.push(v.clearcoatRoughnessMapUv),C.push(v.iridescenceMapUv),C.push(v.iridescenceThicknessMapUv),C.push(v.sheenColorMapUv),C.push(v.sheenRoughnessMapUv),C.push(v.specularMapUv),C.push(v.specularColorMapUv),C.push(v.specularIntensityMapUv),C.push(v.transmissionMapUv),C.push(v.thicknessMapUv),C.push(v.combine),C.push(v.fogExp2),C.push(v.sizeAttenuation),C.push(v.morphTargetsCount),C.push(v.morphAttributeCount),C.push(v.numDirLights),C.push(v.numPointLights),C.push(v.numSpotLights),C.push(v.numSpotLightMaps),C.push(v.numHemiLights),C.push(v.numRectAreaLights),C.push(v.numDirLightShadows),C.push(v.numPointLightShadows),C.push(v.numSpotLightShadows),C.push(v.numSpotLightShadowsWithMaps),C.push(v.numLightProbes),C.push(v.shadowMapType),C.push(v.toneMapping),C.push(v.numClippingPlanes),C.push(v.numClipIntersection),C.push(v.depthPacking)}function _(C,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),C.push(a.mask)}function S(C){const v=g[C.type];let D;if(v){const z=Gn[v];D=nA.clone(z.uniforms)}else D=C.uniforms;return D}function M(C,v){let D;for(let z=0,L=u.length;z<L;z++){const N=u[z];if(N.cacheKey===v){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Cv(i,v,C,r),u.push(D)),D}function w(C){if(--C.usedTimes===0){const v=u.indexOf(C);u[v]=u[u.length-1],u.pop(),C.destroy()}}function y(C){l.remove(C)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:y,programs:u,dispose:R}}function Rv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Of(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,d,g,A,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:A,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=A,p.group=m),e++,p}function a(f,h,d,g,A,m){const p=o(f,h,d,g,A,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,A,m){const p=o(f,h,d,g,A,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Iv),n.length>1&&n.sort(h||Of),s.length>1&&s.sort(h||Of)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Dv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nf,i.set(n,[o])):s>=r.length?(o=new Nf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new st};break;case"SpotLight":t={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Fv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bv=0;function Lv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uv(i){const e=new Pv,t=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new Xe,o=new Xe;function a(c){let u=0,f=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,g=0,A=0,m=0,p=0,x=0,_=0,S=0,M=0,w=0,y=0;c.sort(Lv);for(let C=0,v=c.length;C<v;C++){const D=c[C],z=D.color,L=D.intensity,N=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*L,f+=z.g*L,h+=z.b*L;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],L);y++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(z).multiplyScalar(L),H.distance=N,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[A]=H;const W=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,W.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[A]=W.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=V,S++}A++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(z).multiplyScalar(L),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const W=D.shadow,k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(L),H.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==A||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==S||R.numSpotMaps!==M||R.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,R.directionalLength=d,R.pointLength=g,R.spotLength=A,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=S,R.numSpotMaps=M,R.numLightProbes=y,n.version=Bv++)}function l(c,u){let f=0,h=0,d=0,g=0,A=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=n.hemi[A];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),A++}}}return{setup:a,setupView:l,state:n}}function zf(i){const e=new Uv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ov(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zf(i),e.set(s,[a])):r>=o.length?(a=new zf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hv(i,e,t){let n=new qh;const s=new Le,r=new Le,o=new vt,a=new dA({depthPacking:x0}),l=new hA,c={},u=t.maxTextureSize,f={[jn]:an,[an]:jn,[Cn]:Cn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Nv,fragmentShader:zv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Tt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let p=this.type;this.render=function(w,y,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const C=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=p!==oi&&this.type===oi,N=p===oi&&this.type!==oi;for(let V=0,H=w.length;V<H;V++){const W=w[V],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Y=k.getFrameExtents();if(s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y)),k.map===null||L===!0||N===!0){const Se=this.type!==oi?{minFilter:mn,magFilter:mn}:{};k.map!==null&&k.map.dispose(),k.map=new Ni(s.x,s.y,Se),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ce=k.getViewportCount();for(let Se=0;Se<ce;Se++){const Ie=k.getViewport(Se);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),z.viewport(o),k.updateMatrices(W,Se),n=k.getFrustum(),S(y,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===oi&&x(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,v,D)};function x(w,y){const R=e.update(A);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,R,h,A,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,R,d,A,null)}function _(w,y,R,C){let v=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=R.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const z=v.uuid,L=y.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let V=N[L];V===void 0&&(V=v.clone(),N[L]=V,y.addEventListener("dispose",M)),v=V}if(v.visible=y.visible,v.wireframe=y.wireframe,C===oi?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:f[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=R}return v}function S(w,y,R,C,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const L=e.update(w),N=w.material;if(Array.isArray(N)){const V=L.groups;for(let H=0,W=V.length;H<W;H++){const k=V[H],Y=N[k.materialIndex];if(Y&&Y.visible){const ce=_(w,Y,C,v);w.onBeforeShadow(i,w,y,R,L,ce,k),i.renderBufferDirect(R,null,L,ce,w,k),w.onAfterShadow(i,w,y,R,L,ce,k)}}}else if(N.visible){const V=_(w,N,C,v);w.onBeforeShadow(i,w,y,R,L,V,null),i.renderBufferDirect(R,null,L,V,w,null),w.onAfterShadow(i,w,y,R,L,V,null)}}const z=w.children;for(let L=0,N=z.length;L<N;L++)S(z[L],y,R,C,v)}function M(w){w.target.removeEventListener("dispose",M);for(const R in c){const C=c[R],v=w.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const kv={[El]:Cl,[Ml]:wl,[Tl]:Rl,[$s]:bl,[Cl]:El,[wl]:Ml,[Rl]:Tl,[bl]:$s};function Vv(i,e){function t(){let G=!1;const Me=new vt;let se=null;const le=new vt(0,0,0,0);return{setMask:function(we){se!==we&&!G&&(i.colorMask(we,we,we,we),se=we)},setLocked:function(we){G=we},setClear:function(we,Ce,We,pt,zt){zt===!0&&(we*=pt,Ce*=pt,We*=pt),Me.set(we,Ce,We,pt),le.equals(Me)===!1&&(i.clearColor(we,Ce,We,pt),le.copy(Me))},reset:function(){G=!1,se=null,le.set(-1,0,0,0)}}}function n(){let G=!1,Me=!1,se=null,le=null,we=null;return{setReversed:function(Ce){if(Me!==Ce){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const pt=we;we=null,this.setClear(pt)}Me=Ce},getReversed:function(){return Me},setTest:function(Ce){Ce?de(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ce){se!==Ce&&!G&&(i.depthMask(Ce),se=Ce)},setFunc:function(Ce){if(Me&&(Ce=kv[Ce]),le!==Ce){switch(Ce){case El:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ce}},setLocked:function(Ce){G=Ce},setClear:function(Ce){we!==Ce&&(Me&&(Ce=1-Ce),i.clearDepth(Ce),we=Ce)},reset:function(){G=!1,se=null,le=null,we=null,Me=!1}}}function s(){let G=!1,Me=null,se=null,le=null,we=null,Ce=null,We=null,pt=null,zt=null;return{setTest:function(ut){G||(ut?de(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ut){Me!==ut&&!G&&(i.stencilMask(ut),Me=ut)},setFunc:function(ut,Rn,Zn){(se!==ut||le!==Rn||we!==Zn)&&(i.stencilFunc(ut,Rn,Zn),se=ut,le=Rn,we=Zn)},setOp:function(ut,Rn,Zn){(Ce!==ut||We!==Rn||pt!==Zn)&&(i.stencilOp(ut,Rn,Zn),Ce=ut,We=Rn,pt=Zn)},setLocked:function(ut){G=ut},setClear:function(ut){zt!==ut&&(i.clearStencil(ut),zt=ut)},reset:function(){G=!1,Me=null,se=null,le=null,we=null,Ce=null,We=null,pt=null,zt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,A=!1,m=null,p=null,x=null,_=null,S=null,M=null,w=null,y=new st(0,0,0),R=0,C=!1,v=null,D=null,z=null,L=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=W>=2);let Y=null,ce={};const Se=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Oe=new vt().fromArray(Se),j=new vt().fromArray(Ie);function fe(G,Me,se,le){const we=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(G,Ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Me+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ce}const me={};me[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc($s),$(!1),ie(Gu),de(i.CULL_FACE),b(Li);function de(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function be(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ne(G,Me){return f[G]!==Me?(i.bindFramebuffer(G,Me),f[G]=Me,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Me),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ee(G,Me){let se=d,le=!1;if(G){se=h.get(Me),se===void 0&&(se=[],h.set(Me,se));const we=G.textures;if(se.length!==we.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,We=we.length;Ce<We;Ce++)se[Ce]=i.COLOR_ATTACHMENT0+Ce;se.length=we.length,le=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,le=!0);le&&i.drawBuffers(se)}function je(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const P={[ts]:i.FUNC_ADD,[Xg]:i.FUNC_SUBTRACT,[qg]:i.FUNC_REVERSE_SUBTRACT};P[Qg]=i.MIN,P[Yg]=i.MAX;const B={[Kg]:i.ZERO,[jg]:i.ONE,[$g]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[i0]:i.SRC_ALPHA_SATURATE,[t0]:i.DST_COLOR,[Jg]:i.DST_ALPHA,[Zg]:i.ONE_MINUS_SRC_COLOR,[Or]:i.ONE_MINUS_SRC_ALPHA,[n0]:i.ONE_MINUS_DST_COLOR,[e0]:i.ONE_MINUS_DST_ALPHA,[s0]:i.CONSTANT_COLOR,[r0]:i.ONE_MINUS_CONSTANT_COLOR,[o0]:i.CONSTANT_ALPHA,[a0]:i.ONE_MINUS_CONSTANT_ALPHA};function b(G,Me,se,le,we,Ce,We,pt,zt,ut){if(G===Li){A===!0&&(be(i.BLEND),A=!1);return}if(A===!1&&(de(i.BLEND),A=!0),G!==vh){if(G!==m||ut!==C){if((p!==ts||S!==ts)&&(i.blendEquation(i.FUNC_ADD),p=ts,S=ts),ut)switch(G){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wu:i.blendFunc(i.ONE,i.ONE);break;case Xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,_=null,M=null,w=null,y.set(0,0,0),R=0,m=G,C=ut}return}we=we||Me,Ce=Ce||se,We=We||le,(Me!==p||we!==S)&&(i.blendEquationSeparate(P[Me],P[we]),p=Me,S=we),(se!==x||le!==_||Ce!==M||We!==w)&&(i.blendFuncSeparate(B[se],B[le],B[Ce],B[We]),x=se,_=le,M=Ce,w=We),(pt.equals(y)===!1||zt!==R)&&(i.blendColor(pt.r,pt.g,pt.b,zt),y.copy(pt),R=zt),m=G,C=!1}function re(G,Me){G.side===Cn?be(i.CULL_FACE):de(i.CULL_FACE);let se=G.side===an;Me&&(se=!se),$(se),G.blending===Ui&&G.transparent===!1?b(Li):b(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const le=G.stencilWrite;a.setTest(le),le&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(G){v!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),v=G)}function ie(G){G!==Vg?(de(i.CULL_FACE),G!==D&&(G===Gu?i.cullFace(i.BACK):G===Gg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),D=G}function Z(G){G!==z&&(H&&i.lineWidth(G),z=G)}function ae(G,Me,se){G?(de(i.POLYGON_OFFSET_FILL),(L!==Me||N!==se)&&(i.polygonOffset(Me,se),L=Me,N=se)):be(i.POLYGON_OFFSET_FILL)}function te(G){G?de(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function T(G){G===void 0&&(G=i.TEXTURE0+V-1),Y!==G&&(i.activeTexture(G),Y=G)}function E(G,Me,se){se===void 0&&(Y===null?se=i.TEXTURE0+V-1:se=Y);let le=ce[se];le===void 0&&(le={type:void 0,texture:void 0},ce[se]=le),(le.type!==G||le.texture!==Me)&&(Y!==se&&(i.activeTexture(se),Y=se),i.bindTexture(G,Me||me[G]),le.type=G,le.texture=Me)}function O(){const G=ce[Y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Q(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(G){Oe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function ge(G){j.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function Ue(G,Me){let se=c.get(Me);se===void 0&&(se=new WeakMap,c.set(Me,se));let le=se.get(G);le===void 0&&(le=i.getUniformBlockIndex(Me,G.name),se.set(G,le))}function Ve(G,Me){const le=c.get(Me).get(G);l.get(Me)!==le&&(i.uniformBlockBinding(Me,le,G.__bindingPointIndex),l.set(Me,le))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,ce={},f={},h=new WeakMap,d=[],g=null,A=!1,m=null,p=null,x=null,_=null,S=null,M=null,w=null,y=new st(0,0,0),R=0,C=!1,v=null,D=null,z=null,L=null,N=null,Oe.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:be,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:je,setBlending:b,setMaterial:re,setFlipSided:$,setCullFace:ie,setLineWidth:Z,setPolygonOffset:ae,setScissorTest:te,activeTexture:T,bindTexture:E,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:U,texImage3D:ue,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:He,texStorage3D:pe,texSubImage2D:K,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:De,viewport:ge,reset:et}}function Gv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,E){return d?new OffscreenCanvas(T,E):Qo("canvas")}function A(T,E,O){let Q=1;const J=te(T);if((J.width>O||J.height>O)&&(Q=O/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Q*J.width),_e=Math.floor(Q*J.height);f===void 0&&(f=g(K,_e));const he=E?g(K,_e):f;return he.width=K,he.height=_e,he.getContext("2d").drawImage(T,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+_e+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,E,O,Q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=E;if(E===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),E===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),E===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){const _e=J?Xo:it.getTransfer(Q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=_e===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(T,E){let O;return T?E===null||E===Mn||E===er?O=i.DEPTH24_STENCIL8:E===On?O=i.DEPTH32F_STENCIL8:E===Nr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mn||E===er?O=i.DEPTH_COMPONENT24:E===On?O=i.DEPTH_COMPONENT32F:E===Nr&&(O=i.DEPTH_COMPONENT16),O}function M(T,E){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==mn&&T.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function w(T){const E=T.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&u.delete(E)}function y(T){const E=T.target;E.removeEventListener("dispose",y),v(E)}function R(T){const E=n.get(T);if(E.__webglInit===void 0)return;const O=T.source,Q=h.get(O);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(T),Object.keys(Q).length===0&&h.delete(O)}n.remove(T)}function C(T){const E=n.get(T);i.deleteTexture(E.__webglTexture);const O=T.source,Q=h.get(O);delete Q[E.__cacheKey],o.memory.textures--}function v(T){const E=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=T.textures;for(let Q=0,J=O.length;Q<J;Q++){const K=n.get(O[Q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(O[Q])}n.remove(T)}let D=0;function z(){D=0}function L(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function N(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function V(T,E){const O=n.get(T);if(T.isVideoTexture&&Z(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,T,E);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}function H(T,E){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)}function W(T,E){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,E);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)}function k(T,E){const O=n.get(T);if(T.version>0&&O.__version!==T.version){fe(O,T,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)}const Y={[Pl]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[Fl]:i.MIRRORED_REPEAT},ce={[mn]:i.NEAREST,[A0]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},Se={[y0]:i.NEVER,[w0]:i.ALWAYS,[E0]:i.LESS,[Bh]:i.LEQUAL,[C0]:i.EQUAL,[b0]:i.GEQUAL,[M0]:i.GREATER,[T0]:i.NOTEQUAL};function Ie(T,E){if(E.type===On&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Ta||E.magFilter===$r||E.magFilter===as||E.minFilter===Wn||E.minFilter===Ta||E.minFilter===$r||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Y[E.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[E.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[E.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==$r&&E.minFilter!==as||E.type===On&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(T,E){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const K=N(E);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[K].usedTimes++;const _e=J[T.__cacheKey];_e!==void 0&&(J[T.__cacheKey].usedTimes--,_e.usedTimes===0&&C(E)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return O}function j(T,E,O){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const J=Oe(T,E),K=E.source;t.bindTexture(Q,T.__webglTexture,i.TEXTURE0+O);const _e=n.get(K);if(K.version!==_e.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const he=it.getPrimaries(it.workingColorSpace),ve=E.colorSpace===Fi?null:it.getPrimaries(E.colorSpace),He=E.colorSpace===Fi||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let pe=A(E.image,!1,s.maxTextureSize);pe=ae(E,pe);const U=r.convert(E.format,E.colorSpace),ue=r.convert(E.type);let De=_(E.internalFormat,U,ue,E.colorSpace,E.isVideoTexture);Ie(Q,E);let ge;const Ue=E.mipmaps,Ve=E.isVideoTexture!==!0,et=_e.__version===void 0||J===!0,G=K.dataReady,Me=M(E,pe);if(E.isDepthTexture)De=S(E.format===tr,E.type),et&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,De,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,De,pe.width,pe.height,0,U,ue,null));else if(E.isDataTexture)if(Ue.length>0){Ve&&et&&t.texStorage2D(i.TEXTURE_2D,Me,De,Ue[0].width,Ue[0].height);for(let se=0,le=Ue.length;se<le;se++)ge=Ue[se],Ve?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,U,ue,ge.data):t.texImage2D(i.TEXTURE_2D,se,De,ge.width,ge.height,0,U,ue,ge.data);E.generateMipmaps=!1}else Ve?(et&&t.texStorage2D(i.TEXTURE_2D,Me,De,pe.width,pe.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,U,ue,pe.data)):t.texImage2D(i.TEXTURE_2D,0,De,pe.width,pe.height,0,U,ue,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,De,Ue[0].width,Ue[0].height,pe.depth);for(let se=0,le=Ue.length;se<le;se++)if(ge=Ue[se],E.format!==Zt)if(U!==null)if(Ve){if(G)if(E.layerUpdates.size>0){const we=mf(ge.width,ge.height,E.format,E.type);for(const Ce of E.layerUpdates){const We=ge.data.subarray(Ce*we/ge.data.BYTES_PER_ELEMENT,(Ce+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ce,ge.width,ge.height,1,U,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,pe.depth,U,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,pe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,pe.depth,U,ue,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,pe.depth,0,U,ue,ge.data)}else{Ve&&et&&t.texStorage2D(i.TEXTURE_2D,Me,De,Ue[0].width,Ue[0].height);for(let se=0,le=Ue.length;se<le;se++)ge=Ue[se],E.format!==Zt?U!==null?Ve?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,U,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,se,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,U,ue,ge.data):t.texImage2D(i.TEXTURE_2D,se,De,ge.width,ge.height,0,U,ue,ge.data)}else if(E.isDataArrayTexture)if(Ve){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,De,pe.width,pe.height,pe.depth),G)if(E.layerUpdates.size>0){const se=mf(pe.width,pe.height,E.format,E.type);for(const le of E.layerUpdates){const we=pe.data.subarray(le*se/pe.data.BYTES_PER_ELEMENT,(le+1)*se/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,U,ue,we)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,U,ue,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,U,ue,pe.data);else if(E.isData3DTexture)Ve?(et&&t.texStorage3D(i.TEXTURE_3D,Me,De,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,U,ue,pe.data)):t.texImage3D(i.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,U,ue,pe.data);else if(E.isFramebufferTexture){if(et)if(Ve)t.texStorage2D(i.TEXTURE_2D,Me,De,pe.width,pe.height);else{let se=pe.width,le=pe.height;for(let we=0;we<Me;we++)t.texImage2D(i.TEXTURE_2D,we,De,se,le,0,U,ue,null),se>>=1,le>>=1}}else if(Ue.length>0){if(Ve&&et){const se=te(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Me,De,se.width,se.height)}for(let se=0,le=Ue.length;se<le;se++)ge=Ue[se],Ve?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,U,ue,ge):t.texImage2D(i.TEXTURE_2D,se,De,U,ue,ge);E.generateMipmaps=!1}else if(Ve){if(et){const se=te(pe);t.texStorage2D(i.TEXTURE_2D,Me,De,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,U,ue,pe)}else t.texImage2D(i.TEXTURE_2D,0,De,U,ue,pe);m(E)&&p(Q),_e.__version=K.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function fe(T,E,O){if(E.image.length!==6)return;const Q=Oe(T,E),J=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const K=n.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);const _e=it.getPrimaries(it.workingColorSpace),he=E.colorSpace===Fi?null:it.getPrimaries(E.colorSpace),ve=E.colorSpace===Fi||_e===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,U=[];for(let le=0;le<6;le++)!He&&!pe?U[le]=A(E.image[le],!0,s.maxCubemapSize):U[le]=pe?E.image[le].image:E.image[le],U[le]=ae(E,U[le]);const ue=U[0],De=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),Ue=_(E.internalFormat,De,ge,E.colorSpace),Ve=E.isVideoTexture!==!0,et=K.__version===void 0||Q===!0,G=J.dataReady;let Me=M(E,ue);Ie(i.TEXTURE_CUBE_MAP,E);let se;if(He){Ve&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ue,ue.width,ue.height);for(let le=0;le<6;le++){se=U[le].mipmaps;for(let we=0;we<se.length;we++){const Ce=se[we];E.format!==Zt?De!==null?Ve?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ue,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Ce.width,Ce.height,De,ge,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,Ue,Ce.width,Ce.height,0,De,ge,Ce.data)}}}else{if(se=E.mipmaps,Ve&&et){se.length>0&&Me++;const le=te(U[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ue,le.width,le.height)}for(let le=0;le<6;le++)if(pe){Ve?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,U[le].width,U[le].height,De,ge,U[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ue,U[le].width,U[le].height,0,De,ge,U[le].data);for(let we=0;we<se.length;we++){const We=se[we].image[le].image;Ve?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,We.width,We.height,De,ge,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ue,We.width,We.height,0,De,ge,We.data)}}else{Ve?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De,ge,U[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ue,De,ge,U[le]);for(let we=0;we<se.length;we++){const Ce=se[we];Ve?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,De,ge,Ce.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,Ue,De,ge,Ce.image[le])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),K.__version=J.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function me(T,E,O,Q,J,K){const _e=r.convert(O.format,O.colorSpace),he=r.convert(O.type),ve=_(O.internalFormat,_e,he,O.colorSpace),He=n.get(E),pe=n.get(O);if(pe.__renderTarget=E,!He.__hasExternalTextures){const U=Math.max(1,E.width>>K),ue=Math.max(1,E.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ve,U,ue,E.depth,0,_e,he,null):t.texImage2D(J,K,ve,U,ue,0,_e,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,pe.__webglTexture,0,$(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,pe.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=S(E.stencilBuffer,J),_e=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=$(E);ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,K,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const K=Q[J],_e=r.convert(K.format,K.colorSpace),he=r.convert(K.type),ve=_(K.internalFormat,_e,he,K.colorSpace),He=$(E);O&&ie(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ve,E.width,E.height):ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const J=Q.__webglTexture,K=$(E);if(E.depthTexture.format===us)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===tr)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const E=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Q}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,T)}else if(O){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),de(E.__webglDepthbuffer[Q],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),de(E.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(T,E,O){const Q=n.get(T);E!==void 0&&me(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ne(T)}function je(T){const E=T.texture,O=n.get(T),Q=n.get(E);T.addEventListener("dispose",y);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let ve=0;ve<E.mipmaps.length;ve++)O.__webglFramebuffer[he][ve]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let he=0,ve=J.length;he<ve;he++){const He=n.get(J[he]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ie(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const ve=J[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const He=r.convert(ve.format,ve.colorSpace),pe=r.convert(ve.type),U=_(ve.internalFormat,He,pe,ve.colorSpace,T.isXRRenderTarget===!0),ue=$(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,U,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),de(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)me(O.__webglFramebuffer[he][ve],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else me(O.__webglFramebuffer[he],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let he=0,ve=J.length;he<ve;he++){const He=J[he],pe=n.get(He);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Ie(i.TEXTURE_2D,He),me(O.__webglFramebuffer,T,He,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(He)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),Ie(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)me(O.__webglFramebuffer[ve],T,E,i.COLOR_ATTACHMENT0,he,ve);else me(O.__webglFramebuffer,T,E,i.COLOR_ATTACHMENT0,he,0);m(E)&&p(he),t.unbindTexture()}T.depthBuffer&&Ne(T)}function P(T){const E=T.textures;for(let O=0,Q=E.length;O<Q;O++){const J=E[O];if(m(J)){const K=x(T),_e=n.get(J).__webglTexture;t.bindTexture(K,_e),p(K),t.unbindTexture()}}}const B=[],b=[];function re(T){if(T.samples>0){if(ie(T)===!1){const E=T.textures,O=T.width,Q=T.height;let J=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),he=E.length>1;if(he)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const He=n.get(E[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,i.NEAREST),l===!0&&(B.length=0,b.length=0,B.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(B.push(K),b.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const He=n.get(E[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const E=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $(T){return Math.min(s.maxSamples,T.samples)}function ie(T){const E=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(T){const E=o.render.frame;u.get(T)!==E&&(u.set(T,E),T.update())}function ae(T,E){const O=T.colorSpace,Q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==nr&&O!==Fi&&(it.getTransfer(O)===ht?(Q!==Zt||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=je,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ie}function Zh(i,e){function t(n,s=Fi){let r;const o=it.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Oc)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===or)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===wh)return i.RGB;if(n===Zt)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ih)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Dh)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Xs)return i.RGBA_INTEGER;if(n===Po||n===Fo||n===Bo||n===Lo)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Ll||n===Ul||n===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===zl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Ql||n===Yl||n===Kl||n===jl||n===$l||n===Zl||n===Jl||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qv extends ms{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const A=new qv,m=t.getContextAttributes();let p=null,x=null;const _=[],S=[],M=new Le;let w=null;const y=new En;y.viewport=new vt;const R=new En;R.viewport=new vt;const C=[y,R],v=new mA;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=_[j];return fe===void 0&&(fe=new Qa,_[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=_[j];return fe===void 0&&(fe=new Qa,_[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=_[j];return fe===void 0&&(fe=new Qa,_[j]=fe),fe.getHandSpace()};function L(j){const fe=S.indexOf(j.inputSource);if(fe===-1)return;const me=_[fe];me!==void 0&&(me.update(j.inputSource,j.frame,c||o),me.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let j=0;j<_.length;j++){const fe=S[j];fe!==null&&(S[j]=null,_[j].disconnect(fe))}D=null,z=null,A.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,x=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,de=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?tr:us,de=m.stencil?er:Mn);const Ne={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Ne),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ni(h.textureWidth,h.textureHeight,{format:Zt,type:$n,depthTexture:new Gc(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ni(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function V(j){for(let fe=0;fe<j.removed.length;fe++){const me=j.removed[fe],de=S.indexOf(me);de>=0&&(S[de]=null,_[de].disconnect(me))}for(let fe=0;fe<j.added.length;fe++){const me=j.added[fe];let de=S.indexOf(me);if(de===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=S.length){S.push(me),de=Ne;break}else if(S[Ne]===null){S[Ne]=me,de=Ne;break}if(de===-1)break}const be=_[de];be&&be.connect(me)}}const H=new F,W=new F;function k(j,fe,me){H.setFromMatrixPosition(fe.matrixWorld),W.setFromMatrixPosition(me.matrixWorld);const de=H.distanceTo(W),be=fe.projectionMatrix.elements,Ne=me.projectionMatrix.elements,Ee=be[14]/(be[10]-1),je=be[14]/(be[10]+1),P=(be[9]+1)/be[5],B=(be[9]-1)/be[5],b=(be[8]-1)/be[0],re=(Ne[8]+1)/Ne[0],$=Ee*b,ie=Ee*re,Z=de/(-b+re),ae=Z*-b;if(fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ae),j.translateZ(Z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const te=Ee+Z,T=je+Z,E=$-ae,O=ie+(de-ae),Q=P*je/T*te,J=B*je/T*te;j.projectionMatrix.makePerspective(E,O,Q,J,te,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Y(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let fe=j.near,me=j.far;A.texture!==null&&(A.depthNear>0&&(fe=A.depthNear),A.depthFar>0&&(me=A.depthFar)),v.near=R.near=y.near=fe,v.far=R.far=y.far=me,(D!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,z=v.far),y.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,v.layers.mask=y.layers.mask|R.layers.mask;const de=j.parent,be=v.cameras;Y(v,de);for(let Ne=0;Ne<be.length;Ne++)Y(be[Ne],de);be.length===2?k(v,y,R):v.projectionMatrix.copy(y.projectionMatrix),ce(j,v,de)};function ce(j,fe,me){me===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=oc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let Se=null;function Ie(j,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;me.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let Ee=0;Ee<me.length;Ee++){const je=me[Ee];let P=null;if(d!==null)P=d.getViewport(je);else{const b=f.getViewSubImage(h,je);P=b.viewport,Ee===0&&(e.setRenderTargetTextures(x,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(x))}let B=C[Ee];B===void 0&&(B=new En,B.layers.enable(Ee),B.viewport=new vt,C[Ee]=B),B.matrix.fromArray(je.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(je.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(P.x,P.y,P.width,P.height),Ee===0&&(v.matrix.copy(B.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(B)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ee=f.getDepthInformation(me[0]);Ee&&Ee.isValid&&Ee.texture&&A.init(e,Ee,s.renderState)}}for(let me=0;me<_.length;me++){const de=S[me],be=_[me];de!==null&&be!==void 0&&be.update(de,fe,c||o)}Se&&Se(j,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Oe=new Qh;Oe.setAnimationLoop(Ie),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const $i=new Si,Yv=new Xe;function Kv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,S=x.envMapRotation;_&&(m.envMap.value=_,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler($i)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const S=_.program;n.uniformBlockBinding(x,S)}function c(x,_){let S=s[x.id];S===void 0&&(g(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(x,M);const w=e.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const _=f();x.__bindingPointIndex=_;const S=i.createBuffer(),M=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=s[x.id],S=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,y=S.length;w<y;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let C=0,v=R.length;C<v;C++){const D=R[C];if(d(D,w,C,M)===!0){const z=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let V=0;V<L.length;V++){const H=L[V],W=A(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+N,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,S,M){const w=x.value,y=_+"_"+S;if(M[y]===void 0)return typeof w=="number"||typeof w=="boolean"?M[y]=w:M[y]=w.clone(),!0;{const R=M[y];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return M[y]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const _=x.uniforms;let S=0;const M=16;for(let y=0,R=_.length;y<R;y++){const C=Array.isArray(_[y])?_[y]:[_[y]];for(let v=0,D=C.length;v<D;v++){const z=C[v],L=Array.isArray(z.value)?z.value:[z.value];for(let N=0,V=L.length;N<V;N++){const H=L[N],W=A(H),k=S%M,Y=k%W.boundary,ce=k+Y;S+=Y,ce!==0&&M-ce<W.storage&&(S+=M-ce),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=W.storage}}}const w=S%M;return w>0&&(S+=M-w),x.__size=S,x.__cache={},this}function A(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $v{constructor(e={}){const{canvas:t=D0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),A=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Oi,this.toneMappingExposure=1;const S=this;let M=!1,w=0,y=0,R=null,C=-1,v=null;const D=new vt,z=new vt;let L=null;const N=new st(0);let V=0,H=t.width,W=t.height,k=1,Y=null,ce=null;const Se=new vt(0,0,H,W),Ie=new vt(0,0,H,W);let Oe=!1;const j=new qh;let fe=!1,me=!1;this.transmissionResolutionScale=1;const de=new Xe,be=new Xe,Ne=new F,Ee=new vt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function B(){return R===null?k:1}let b=n;function re(I,X){return t.getContext(I,X)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),b===null){const X="webgl2";if(b=re(X,I),b===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let $,ie,Z,ae,te,T,E,O,Q,J,K,_e,he,ve,He,pe,U,ue,De,ge,Ue,Ve,et,G;function Me(){$=new l_(b),$.init(),Ve=new Zh(b,$),ie=new t_(b,$,e,Ve),Z=new Vv(b,$),ie.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),ae=new f_(b),te=new Rv,T=new Gv(b,$,Z,te,ie,Ve,ae),E=new i_(S),O=new a_(S),Q=new AA(b),et=new Jx(b,Q),J=new c_(b,Q,ae,et),K=new h_(b,J,Q,ae),De=new d_(b,ie,T),pe=new n_(te),_e=new wv(S,E,O,$,ie,et,pe),he=new Kv(S,te),ve=new Dv,He=new Ov($),ue=new Zx(S,E,O,Z,K,d,l),U=new Hv(S,K,ie),G=new jv(b,ae,ie,Z),ge=new e_(b,$,ae),Ue=new u_(b,$,ae),ae.programs=_e.programs,S.capabilities=ie,S.extensions=$,S.properties=te,S.renderLists=ve,S.shadowMap=U,S.state=Z,S.info=ae}Me();const se=new Qv(S,b);this.xr=se,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const I=$.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=$.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(H,W,!1))},this.getSize=function(I){return I.set(H,W)},this.setSize=function(I,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,W=X,t.width=Math.floor(I*k),t.height=Math.floor(X*k),ee===!0&&(t.style.width=I+"px",t.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(H*k,W*k).floor()},this.setDrawingBufferSize=function(I,X,ee){H=I,W=X,k=ee,t.width=Math.floor(I*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(D)},this.getViewport=function(I){return I.copy(Se)},this.setViewport=function(I,X,ee,ne){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,X,ee,ne),Z.viewport(D.copy(Se).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(Ie)},this.setScissor=function(I,X,ee,ne){I.isVector4?Ie.set(I.x,I.y,I.z,I.w):Ie.set(I,X,ee,ne),Z.scissor(z.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(I){Z.setScissorTest(Oe=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){ce=I},this.getClearColor=function(I){return I.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(I=!0,X=!0,ee=!0){let ne=0;if(I){let q=!1;if(R!==null){const Ae=R.texture.format;q=Ae===Xs||Ae===Hc||Ae===ua}if(q){const Ae=R.texture.type,Re=Ae===$n||Ae===Mn||Ae===Nr||Ae===er||Ae===Nc||Ae===zc,Pe=ue.getClearColor(),Be=ue.getClearAlpha(),qe=Pe.r,Qe=Pe.g,ze=Pe.b;Re?(g[0]=qe,g[1]=Qe,g[2]=ze,g[3]=Be,b.clearBufferuiv(b.COLOR,0,g)):(A[0]=qe,A[1]=Qe,A[2]=ze,A[3]=Be,b.clearBufferiv(b.COLOR,0,A))}else ne|=b.COLOR_BUFFER_BIT}X&&(ne|=b.DEPTH_BUFFER_BIT),ee&&(ne|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ue.dispose(),ve.dispose(),He.dispose(),te.dispose(),E.dispose(),O.dispose(),K.dispose(),et.dispose(),G.dispose(),_e.dispose(),se.dispose(),se.removeEventListener("sessionstart",lu),se.removeEventListener("sessionend",cu),Vi.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=ae.autoReset,X=U.enabled,ee=U.autoUpdate,ne=U.needsUpdate,q=U.type;Me(),ae.autoReset=I,U.enabled=X,U.autoUpdate=ee,U.needsUpdate=ne,U.type=q}function Ce(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function We(I){const X=I.target;X.removeEventListener("dispose",We),pt(X)}function pt(I){zt(I),te.remove(I)}function zt(I){const X=te.get(I).programs;X!==void 0&&(X.forEach(function(ee){_e.releaseProgram(ee)}),I.isShaderMaterial&&_e.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,ee,ne,q,Ae){X===null&&(X=je);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Pe=cp(I,X,ee,ne,q);Z.setMaterial(ne,Re);let Be=ee.index,qe=1;if(ne.wireframe===!0){if(Be=J.getWireframeAttribute(ee),Be===void 0)return;qe=2}const Qe=ee.drawRange,ze=ee.attributes.position;let tt=Qe.start*qe,rt=(Qe.start+Qe.count)*qe;Ae!==null&&(tt=Math.max(tt,Ae.start*qe),rt=Math.min(rt,(Ae.start+Ae.count)*qe)),Be!==null?(tt=Math.max(tt,0),rt=Math.min(rt,Be.count)):ze!=null&&(tt=Math.max(tt,0),rt=Math.min(rt,ze.count));const Rt=rt-tt;if(Rt<0||Rt===1/0)return;et.setup(q,ne,Pe,ee,Be);let Ct,nt=ge;if(Be!==null&&(Ct=Q.get(Be),nt=Ue,nt.setIndex(Ct)),q.isMesh)ne.wireframe===!0?(Z.setLineWidth(ne.wireframeLinewidth*B()),nt.setMode(b.LINES)):nt.setMode(b.TRIANGLES);else if(q.isLine){let ke=ne.linewidth;ke===void 0&&(ke=1),Z.setLineWidth(ke*B()),q.isLineSegments?nt.setMode(b.LINES):q.isLineLoop?nt.setMode(b.LINE_LOOP):nt.setMode(b.LINE_STRIP)}else q.isPoints?nt.setMode(b.POINTS):q.isSprite&&nt.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if($.get("WEBGL_multi_draw"))nt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,Ot=q._multiDrawCounts,ot=q._multiDrawCount,In=Be?Q.get(Be).bytesPerElement:1,gs=te.get(ne).currentProgram.getUniforms();for(let ln=0;ln<ot;ln++)gs.setValue(b,"_gl_DrawID",ln),nt.render(ke[ln]/In,Ot[ln])}else if(q.isInstancedMesh)nt.renderInstances(tt,Rt,q.count);else if(ee.isInstancedBufferGeometry){const ke=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ot=Math.min(ee.instanceCount,ke);nt.renderInstances(tt,Rt,Ot)}else nt.render(tt,Rt)};function ut(I,X,ee){I.transparent===!0&&I.side===Cn&&I.forceSinglePass===!1?(I.side=an,I.needsUpdate=!0,Qr(I,X,ee),I.side=jn,I.needsUpdate=!0,Qr(I,X,ee),I.side=Cn):Qr(I,X,ee)}this.compile=function(I,X,ee=null){ee===null&&(ee=I),p=He.get(ee),p.init(X),_.push(p),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),I!==ee&&I.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ne=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Re=0;Re<Ae.length;Re++){const Pe=Ae[Re];ut(Pe,ee,q),ne.add(Pe)}else ut(Ae,ee,q),ne.add(Ae)}),p=_.pop(),ne},this.compileAsync=function(I,X,ee=null){const ne=this.compile(I,X,ee);return new Promise(q=>{function Ae(){if(ne.forEach(function(Re){te.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){q(I);return}setTimeout(Ae,10)}$.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rn=null;function Zn(I){Rn&&Rn(I)}function lu(){Vi.stop()}function cu(){Vi.start()}const Vi=new Qh;Vi.setAnimationLoop(Zn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(I){Rn=I,se.setAnimationLoop(I),I===null?Vi.stop():Vi.start()},se.addEventListener("sessionstart",lu),se.addEventListener("sessionend",cu),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),I.isScene===!0&&I.onBeforeRender(S,I,X,R),p=He.get(I,_.length),p.init(X),_.push(p),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(be),me=this.localClippingEnabled,fe=pe.init(this.clippingPlanes,me),m=ve.get(I,x.length),m.init(),x.push(m),se.enabled===!0&&se.isPresenting===!0){const Ae=S.xr.getDepthSensingMesh();Ae!==null&&pa(Ae,X,-1/0,S.sortObjects)}pa(I,X,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Y,ce),P=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,P&&ue.addToRenderList(m,I),this.info.render.frame++,fe===!0&&pe.beginShadows();const ee=p.state.shadowsArray;U.render(ee,I,X),fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(q.length>0)for(let Re=0,Pe=Ae.length;Re<Pe;Re++){const Be=Ae[Re];fu(ne,q,I,Be)}P&&ue.render(I);for(let Re=0,Pe=Ae.length;Re<Pe;Re++){const Be=Ae[Re];uu(m,I,Be,Be.viewport)}}else q.length>0&&fu(ne,q,I,X),P&&ue.render(I),uu(m,I,X);R!==null&&y===0&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(S,I,X),et.resetDefaultState(),C=-1,v=null,_.pop(),_.length>0?(p=_[_.length-1],fe===!0&&pe.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function pa(I,X,ee,ne){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||j.intersectsSprite(I)){ne&&Ee.setFromMatrixPosition(I.matrixWorld).applyMatrix4(be);const Re=K.update(I),Pe=I.material;Pe.visible&&m.push(I,Re,Pe,ee,Ee.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||j.intersectsObject(I))){const Re=K.update(I),Pe=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ee.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ee.copy(Re.boundingSphere.center)),Ee.applyMatrix4(I.matrixWorld).applyMatrix4(be)),Array.isArray(Pe)){const Be=Re.groups;for(let qe=0,Qe=Be.length;qe<Qe;qe++){const ze=Be[qe],tt=Pe[ze.materialIndex];tt&&tt.visible&&m.push(I,Re,tt,ee,Ee.z,ze)}}else Pe.visible&&m.push(I,Re,Pe,ee,Ee.z,null)}}const Ae=I.children;for(let Re=0,Pe=Ae.length;Re<Pe;Re++)pa(Ae[Re],X,ee,ne)}function uu(I,X,ee,ne){const q=I.opaque,Ae=I.transmissive,Re=I.transparent;p.setupLightsView(ee),fe===!0&&pe.setGlobalState(S.clippingPlanes,ee),ne&&Z.viewport(D.copy(ne)),q.length>0&&qr(q,X,ee),Ae.length>0&&qr(Ae,X,ee),Re.length>0&&qr(Re,X,ee),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fu(I,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new Ni(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?or:$n,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Ae=p.state.transmissionRenderTarget[ne.id],Re=ne.viewport||D;Ae.setSize(Re.z*S.transmissionResolutionScale,Re.w*S.transmissionResolutionScale);const Pe=S.getRenderTarget();S.setRenderTarget(Ae),S.getClearColor(N),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),P&&ue.render(ee);const Be=S.toneMapping;S.toneMapping=Oi;const qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),fe===!0&&pe.setGlobalState(S.clippingPlanes,ne),qr(I,ee,ne),T.updateMultisampleRenderTarget(Ae),T.updateRenderTargetMipmap(Ae),$.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,tt=X.length;ze<tt;ze++){const rt=X[ze],Rt=rt.object,Ct=rt.geometry,nt=rt.material,ke=rt.group;if(nt.side===Cn&&Rt.layers.test(ne.layers)){const Ot=nt.side;nt.side=an,nt.needsUpdate=!0,du(Rt,ee,ne,Ct,nt,ke),nt.side=Ot,nt.needsUpdate=!0,Qe=!0}}Qe===!0&&(T.updateMultisampleRenderTarget(Ae),T.updateRenderTargetMipmap(Ae))}S.setRenderTarget(Pe),S.setClearColor(N,V),qe!==void 0&&(ne.viewport=qe),S.toneMapping=Be}function qr(I,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ae=I.length;q<Ae;q++){const Re=I[q],Pe=Re.object,Be=Re.geometry,qe=ne===null?Re.material:ne,Qe=Re.group;Pe.layers.test(ee.layers)&&du(Pe,X,ee,Be,qe,Qe)}}function du(I,X,ee,ne,q,Ae){I.onBeforeRender(S,X,ee,ne,q,Ae),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(S,X,ee,ne,I,Ae),q.transparent===!0&&q.side===Cn&&q.forceSinglePass===!1?(q.side=an,q.needsUpdate=!0,S.renderBufferDirect(ee,X,ne,q,I,Ae),q.side=jn,q.needsUpdate=!0,S.renderBufferDirect(ee,X,ne,q,I,Ae),q.side=Cn):S.renderBufferDirect(ee,X,ne,q,I,Ae),I.onAfterRender(S,X,ee,ne,q,Ae)}function Qr(I,X,ee){X.isScene!==!0&&(X=je);const ne=te.get(I),q=p.state.lights,Ae=p.state.shadowsArray,Re=q.state.version,Pe=_e.getParameters(I,q.state,Ae,X,ee),Be=_e.getProgramCacheKey(Pe);let qe=ne.programs;ne.environment=I.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(I.isMeshStandardMaterial?O:E).get(I.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&I.envMap===null?X.environmentRotation:I.envMapRotation,qe===void 0&&(I.addEventListener("dispose",We),qe=new Map,ne.programs=qe);let Qe=qe.get(Be);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===Re)return pu(I,Pe),Qe}else Pe.uniforms=_e.getUniforms(I),I.onBeforeCompile(Pe,S),Qe=_e.acquireProgram(Pe,Be),qe.set(Be,Qe),ne.uniforms=Pe.uniforms;const ze=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=pe.uniform),pu(I,Pe),ne.needsLights=fp(I),ne.lightsStateVersion=Re,ne.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function hu(I){if(I.uniformsList===null){const X=I.currentProgram.getUniforms();I.uniformsList=No.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function pu(I,X){const ee=te.get(I);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function cp(I,X,ee,ne,q){X.isScene!==!0&&(X=je),T.resetTextureUnits();const Ae=X.fog,Re=ne.isMeshStandardMaterial?X.environment:null,Pe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:nr,Be=(ne.isMeshStandardMaterial?O:E).get(ne.envMap||Re),qe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!ee.morphAttributes.position,tt=!!ee.morphAttributes.normal,rt=!!ee.morphAttributes.color;let Rt=Oi;ne.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Rt=S.toneMapping);const Ct=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,nt=Ct!==void 0?Ct.length:0,ke=te.get(ne),Ot=p.state.lights;if(fe===!0&&(me===!0||I!==v)){const Xt=I===v&&ne.id===C;pe.setState(ne,I,Xt)}let ot=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ot.state.version||ke.outputColorSpace!==Pe||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Be||ne.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==pe.numPlanes||ke.numIntersection!==pe.numIntersection)||ke.vertexAlphas!==qe||ke.vertexTangents!==Qe||ke.morphTargets!==ze||ke.morphNormals!==tt||ke.morphColors!==rt||ke.toneMapping!==Rt||ke.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,ke.__version=ne.version);let In=ke.currentProgram;ot===!0&&(In=Qr(ne,X,q));let gs=!1,ln=!1,cr=!1;const St=In.getUniforms(),Sn=ke.uniforms;if(Z.useProgram(In.program)&&(gs=!0,ln=!0,cr=!0),ne.id!==C&&(C=ne.id,ln=!0),gs||v!==I){Z.buffers.depth.getReversed()?(de.copy(I.projectionMatrix),F0(de),B0(de),St.setValue(b,"projectionMatrix",de)):St.setValue(b,"projectionMatrix",I.projectionMatrix),St.setValue(b,"viewMatrix",I.matrixWorldInverse);const tn=St.map.cameraPosition;tn!==void 0&&tn.setValue(b,Ne.setFromMatrixPosition(I.matrixWorld)),ie.logarithmicDepthBuffer&&St.setValue(b,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&St.setValue(b,"isOrthographic",I.isOrthographicCamera===!0),v!==I&&(v=I,ln=!0,cr=!0)}if(q.isSkinnedMesh){St.setOptional(b,q,"bindMatrix"),St.setOptional(b,q,"bindMatrixInverse");const Xt=q.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),St.setValue(b,"boneTexture",Xt.boneTexture,T))}q.isBatchedMesh&&(St.setOptional(b,q,"batchingTexture"),St.setValue(b,"batchingTexture",q._matricesTexture,T),St.setOptional(b,q,"batchingIdTexture"),St.setValue(b,"batchingIdTexture",q._indirectTexture,T),St.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&St.setValue(b,"batchingColorTexture",q._colorsTexture,T));const xn=ee.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&De.update(q,ee,In),(ln||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,St.setValue(b,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Sn.envMap.value=Be,Sn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Sn.envMapIntensity.value=X.environmentIntensity),ln&&(St.setValue(b,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&up(Sn,cr),Ae&&ne.fog===!0&&he.refreshFogUniforms(Sn,Ae),he.refreshMaterialUniforms(Sn,ne,k,W,p.state.transmissionRenderTarget[I.id]),No.upload(b,hu(ke),Sn,T)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(No.upload(b,hu(ke),Sn,T),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&St.setValue(b,"center",q.center),St.setValue(b,"modelViewMatrix",q.modelViewMatrix),St.setValue(b,"normalMatrix",q.normalMatrix),St.setValue(b,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Xt=ne.uniformsGroups;for(let tn=0,ma=Xt.length;tn<ma;tn++){const Gi=Xt[tn];G.update(Gi,In),G.bind(Gi,In)}}return In}function up(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function fp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,X,ee){te.get(I.texture).__webglTexture=X,te.get(I.depthTexture).__webglTexture=ee;const ne=te.get(I);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,X){const ee=te.get(I);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const dp=b.createFramebuffer();this.setRenderTarget=function(I,X=0,ee=0){R=I,w=X,y=ee;let ne=!0,q=null,Ae=!1,Re=!1;if(I){const Be=te.get(I);if(Be.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(b.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)T.setupRenderTarget(I);else if(Be.__hasExternalTextures)T.rebindTextures(I,te.get(I.texture).__webglTexture,te.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const ze=I.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&te.has(ze)&&(I.width!==ze.image.width||I.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(I)}}const qe=I.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const Qe=te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?q=Qe[X][ee]:q=Qe[X],Ae=!0):I.samples>0&&T.useMultisampledRTT(I)===!1?q=te.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[ee]:q=Qe,D.copy(I.viewport),z.copy(I.scissor),L=I.scissorTest}else D.copy(Se).multiplyScalar(k).floor(),z.copy(Ie).multiplyScalar(k).floor(),L=Oe;if(ee!==0&&(q=dp),Z.bindFramebuffer(b.FRAMEBUFFER,q)&&ne&&Z.drawBuffers(I,q),Z.viewport(D),Z.scissor(z),Z.setScissorTest(L),Ae){const Be=te.get(I.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(Re){const Be=te.get(I.texture),qe=X;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Be.__webglTexture,ee,qe)}else if(I!==null&&ee!==0){const Be=te.get(I.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Be.__webglTexture,ee)}C=-1},this.readRenderTargetPixels=function(I,X,ee,ne,q,Ae,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){Z.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const Be=I.texture,qe=Be.format,Qe=Be.type;if(!ie.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-ne&&ee>=0&&ee<=I.height-q&&b.readPixels(X,ee,ne,q,Ve.convert(qe),Ve.convert(Qe),Ae)}finally{const Be=R!==null?te.get(R).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(I,X,ee,ne,q,Ae,Re){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){const Be=I.texture,qe=Be.format,Qe=Be.type;if(!ie.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=I.width-ne&&ee>=0&&ee<=I.height-q){Z.bindFramebuffer(b.FRAMEBUFFER,Pe);const ze=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.bufferData(b.PIXEL_PACK_BUFFER,Ae.byteLength,b.STREAM_READ),b.readPixels(X,ee,ne,q,Ve.convert(qe),Ve.convert(Qe),0);const tt=R!==null?te.get(R).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,tt);const rt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await P0(b,rt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ae),b.deleteBuffer(ze),b.deleteSync(rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,X=null,ee=0){I.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,I=arguments[1]);const ne=Math.pow(2,-ee),q=Math.floor(I.image.width*ne),Ae=Math.floor(I.image.height*ne),Re=X!==null?X.x:0,Pe=X!==null?X.y:0;T.setTexture2D(I,0),b.copyTexSubImage2D(b.TEXTURE_2D,ee,0,0,Re,Pe,q,Ae),Z.unbindTexture()};const hp=b.createFramebuffer(),pp=b.createFramebuffer();this.copyTextureToTexture=function(I,X,ee=null,ne=null,q=0,Ae=null){I.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,I=arguments[1],X=arguments[2],Ae=arguments[3]||0,ee=null),Ae===null&&(q!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Re,Pe,Be,qe,Qe,ze,tt,rt,Rt;const Ct=I.isCompressedTexture?I.mipmaps[Ae]:I.image;if(ee!==null)Re=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,qe=ee.min.x,Qe=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{const xn=Math.pow(2,-q);Re=Math.floor(Ct.width*xn),Pe=Math.floor(Ct.height*xn),I.isDataArrayTexture?Be=Ct.depth:I.isData3DTexture?Be=Math.floor(Ct.depth*xn):Be=1,qe=0,Qe=0,ze=0}ne!==null?(tt=ne.x,rt=ne.y,Rt=ne.z):(tt=0,rt=0,Rt=0);const nt=Ve.convert(X.format),ke=Ve.convert(X.type);let Ot;X.isData3DTexture?(T.setTexture3D(X,0),Ot=b.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),Ot=b.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),Ot=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,X.unpackAlignment);const ot=b.getParameter(b.UNPACK_ROW_LENGTH),In=b.getParameter(b.UNPACK_IMAGE_HEIGHT),gs=b.getParameter(b.UNPACK_SKIP_PIXELS),ln=b.getParameter(b.UNPACK_SKIP_ROWS),cr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ct.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ct.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,qe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ze);const St=I.isDataArrayTexture||I.isData3DTexture,Sn=X.isDataArrayTexture||X.isData3DTexture;if(I.isDepthTexture){const xn=te.get(I),Xt=te.get(X),tn=te.get(xn.__renderTarget),ma=te.get(Xt.__renderTarget);Z.bindFramebuffer(b.READ_FRAMEBUFFER,tn.__webglFramebuffer),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Gi=0;Gi<Be;Gi++)St&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(I).__webglTexture,q,ze+Gi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(X).__webglTexture,Ae,Rt+Gi)),b.blitFramebuffer(qe,Qe,Re,Pe,tt,rt,Re,Pe,b.DEPTH_BUFFER_BIT,b.NEAREST);Z.bindFramebuffer(b.READ_FRAMEBUFFER,null),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||te.has(I)){const xn=te.get(I),Xt=te.get(X);Z.bindFramebuffer(b.READ_FRAMEBUFFER,hp),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,pp);for(let tn=0;tn<Be;tn++)St?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xn.__webglTexture,q,ze+tn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xn.__webglTexture,q),Sn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Xt.__webglTexture,Ae,Rt+tn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Xt.__webglTexture,Ae),q!==0?b.blitFramebuffer(qe,Qe,Re,Pe,tt,rt,Re,Pe,b.COLOR_BUFFER_BIT,b.NEAREST):Sn?b.copyTexSubImage3D(Ot,Ae,tt,rt,Rt+tn,qe,Qe,Re,Pe):b.copyTexSubImage2D(Ot,Ae,tt,rt,qe,Qe,Re,Pe);Z.bindFramebuffer(b.READ_FRAMEBUFFER,null),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Sn?I.isDataTexture||I.isData3DTexture?b.texSubImage3D(Ot,Ae,tt,rt,Rt,Re,Pe,Be,nt,ke,Ct.data):X.isCompressedArrayTexture?b.compressedTexSubImage3D(Ot,Ae,tt,rt,Rt,Re,Pe,Be,nt,Ct.data):b.texSubImage3D(Ot,Ae,tt,rt,Rt,Re,Pe,Be,nt,ke,Ct):I.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Ae,tt,rt,Re,Pe,nt,ke,Ct.data):I.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Ae,tt,rt,Ct.width,Ct.height,nt,Ct.data):b.texSubImage2D(b.TEXTURE_2D,Ae,tt,rt,Re,Pe,nt,ke,Ct);b.pixelStorei(b.UNPACK_ROW_LENGTH,ot),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,In),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gs),b.pixelStorei(b.UNPACK_SKIP_ROWS,ln),b.pixelStorei(b.UNPACK_SKIP_IMAGES,cr),Ae===0&&X.generateMipmaps&&b.generateMipmap(Ot),Z.unbindTexture()},this.copyTextureToTexture3D=function(I,X,ee=null,ne=null,q=0){return I.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,I=arguments[2],X=arguments[3],q=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,X,ee,ne,q)},this.initRenderTarget=function(I){te.get(I).__webglFramebuffer===void 0&&T.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?T.setTextureCube(I,0):I.isData3DTexture?T.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?T.setTexture2DArray(I,0):T.setTexture2D(I,0),Z.unbindTexture()},this.resetState=function(){w=0,y=0,R=null,Z.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const ss=class ss{constructor(e,t){let n,s;this.promise=new Promise((c,u)=>{n=c,s=u});const r=n.bind(this),o=s.bind(this),a=(...c)=>{r(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=ss.idGen++}then(e){return new ss((t,n)=>{this.promise=this.promise.then((...s)=>{const r=e(...s);r instanceof Promise||r instanceof ss?r.then((...o)=>{t(...o)}):t(r)}).catch(s=>{n(s)})},this.abortHandler)}catch(e){return new ss(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};xe(ss,"idGen",0);let kr=ss;class Jh extends Error{constructor(e){super(e)}}(function(){const i=new Float32Array(1),e=new Int32Array(i.buffer);return function(t){i[0]=t;const n=e[0];let s=n>>16&32768,r=n>>12&2047;const o=n>>23&255;return o<103?s:o>142?(s|=31744,s|=(o==255?0:1)&&n&8388607,s):o<113?(r|=2048,s|=(r>>114-o)+(r>>113-o&1),s):(s|=o-112<<10|r>>1,s+=r&1,s)}})();const tl=function(){const i=new Float32Array(1),e=new Int32Array(i.buffer);return function(t){return i[0]=t,e[0]}}(),Zv=function(i,e){return i[e]+(i[e+1]<<8)+(i[e+2]<<16)+(i[e+3]<<24)},ha=function(i,e,t=!0,n){const s=new AbortController,r=s.signal;let o=!1;const a=u=>{s.abort(u),o=!0};let l=!1;const c=(u,f,h,d)=>{e&&!l&&(e(u,f,h,d),u===100&&(l=!0))};return new kr((u,f)=>{const h={signal:r};n&&(h.headers=n),fetch(i,h).then(async d=>{if(!d.ok){const _=await d.text();f(new Error(`Fetch failed: ${d.status} ${d.statusText} ${_}`));return}const g=d.body.getReader();let A=0,m=d.headers.get("Content-Length"),p=m?parseInt(m):void 0;const x=[];for(;!o;)try{const{value:_,done:S}=await g.read();if(S){if(c(100,"100%",_,p),t){const y=new Blob(x).arrayBuffer();u(y)}else u();break}A+=_.length;let M,w;p!==void 0&&(M=A/p*100,w=`${M.toFixed(2)}%`),t&&x.push(_),c(M,w,_,p)}catch(_){f(_);return}}).catch(d=>{f(new Jh(d))})},a)},_t=function(i,e,t){return Math.max(Math.min(i,t),e)},Bs=function(){return performance.now()/1e3},Ns=i=>{if(i.geometry&&(i.geometry.dispose(),i.geometry=null),i.material&&(i.material.dispose(),i.material=null),i.children)for(let e of i.children)Ns(e)},pn=(i,e)=>new Promise(t=>{window.setTimeout(()=>{t(i?i():void 0)},e?1:50)}),Qs=(i=0)=>{let e=0;if(i===1)e=9;else if(i===2)e=24;else if(i===3)e=45;else if(i>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Qc=()=>{let i,e;return{promise:new Promise((n,s)=>{i=n,e=s}),resolve:i,reject:e}},nl=i=>{let e,t;return i||(i=()=>{}),{promise:new kr((s,r)=>{e=s,t=r},i),resolve:e,reject:t}};class Jv{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function Yc(){const i=navigator.userAgent;return i.indexOf("iPhone")>0||i.indexOf("iPad")>0}function ep(){if(Yc()){const i=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new Jv(parseInt(i[1]||0,10),parseInt(i[2]||0,10),parseInt(i[3]||0,10))}else return null}const ey=14,Ir=class Ir{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Qs(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+ey,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Qs(e);for(let s=0;s<n;s++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Ir.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,s,r,o,a,l,c,u,f,h,d,g,...A){const m=[e,t,n,s,r,o,a,l,c,u,f,h,d,g,...this.defaultSphericalHarmonics];for(let p=0;p<A.length&&p<this.sphericalHarmonicsCount;p++)m[p]=A[p];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],s=Ir.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)s[r]=n[r];this.addSplat(s)}};xe(Ir,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let ye=Ir;class Je{}xe(Je,"DefaultSplatSortDistanceMapPrecision",16),xe(Je,"MemoryPageSize",65536),xe(Je,"BytesPerFloat",4),xe(Je,"BytesPerInt",4),xe(Je,"MaxScenes",32),xe(Je,"ProgressiveLoadSectionSize",262144),xe(Je,"ProgressiveLoadSectionDelayDuration",15),xe(Je,"SphericalHarmonics8BitCompressionRange",3);const ty=Je.SphericalHarmonics8BitCompressionRange,_o=ty/2,Dt=zr.toHalfFloat.bind(zr),Kc=zr.fromHalfFloat.bind(zr),xt=(i,e,t=!1,n,s)=>{if(e===0)return i;if(e===1||e===2&&!t)return zr.fromHalfFloat(i);if(e===2)return jc(i,n,s)},Tr=(i,e,t)=>{i=_t(i,e,t);const n=t-e;return _t(Math.floor((i-e)/n*255),0,255)},jc=(i,e,t)=>{const n=t-e;return i/255*n+e},tp=(i,e,t)=>Tr(Kc(i,e,t)),ny=(i,e,t)=>Dt(jc(i,e,t)),at=(i,e,t,n=!1)=>t===0?i.getFloat32(e*4,!0):t===1||t===2&&!n?i.getUint16(e*2,!0):i.getUint8(e,!0),iy=function(){const i=e=>e;return function(e,t,n,s=!1){if(t===n)return e;let r=i;return t===2&&s?n===1?r=ny:n==0&&(r=jc):t===2||t===1?n===0?r=Kc:n==2&&(s?r=tp:r=i):t===0&&(n===1?r=Dt:n==2&&(s?r=Tr:r=Dt)),r(e)}}(),Ls=(i,e,t,n,s=0)=>{const r=new Uint8Array(i,e),o=new Uint8Array(t,n);for(let a=0;a<s;a++)o[a]=r[a]},oe=class oe{constructor(e,t=!0){xe(this,"getSplatScaleAndRotation",function(){const e=new Xe,t=new Xe,n=new Xe,s=new F,r=new F,o=new yt;return function(a,l,c,u,f){const h=this.globalSplatIndexToSectionMap[a],d=this.sections[h],g=a-d.splatCountOffset,A=d.bytesPerSplat*g+oe.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,d.dataBase+A);r.set(xt(at(m,0,this.compressionLevel),this.compressionLevel),xt(at(m,1,this.compressionLevel),this.compressionLevel),xt(at(m,2,this.compressionLevel),this.compressionLevel)),f&&(f.x!==void 0&&(r.x=f.x),f.y!==void 0&&(r.y=f.y),f.z!==void 0&&(r.z=f.z)),o.set(xt(at(m,4,this.compressionLevel),this.compressionLevel),xt(at(m,5,this.compressionLevel),this.compressionLevel),xt(at(m,6,this.compressionLevel),this.compressionLevel),xt(at(m,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(s,c,l)):(l.copy(r),c.copy(o))}}());xe(this,"fillSplatScaleRotationArray",function(){const e=new Xe,t=new Xe,n=new Xe,s=new F,r=new yt,o=new F,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,f,h,d,g,A){const m=this.splatCount;f=f||0,h=h||m-1,d===void 0&&(d=f);const p=(x,_)=>iy(x,_,g);for(let x=f;x<=h;x++){const _=this.globalSplatIndexToSectionMap[x],S=this.sections[_],M=x-S.splatCountOffset,w=S.bytesPerSplat*M+oe.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,y=(x-f+d)*oe.ScaleComponentCount,R=(x-f+d)*oe.RotationComponentCount,C=new DataView(this.bufferData,S.dataBase+w),v=A&&A.x!==void 0?A.x:at(C,0,this.compressionLevel),D=A&&A.y!==void 0?A.y:at(C,1,this.compressionLevel),z=A&&A.z!==void 0?A.z:at(C,2,this.compressionLevel),L=at(C,3,this.compressionLevel),N=at(C,4,this.compressionLevel),V=at(C,5,this.compressionLevel),H=at(C,6,this.compressionLevel);s.set(xt(v,this.compressionLevel),xt(D,this.compressionLevel),xt(z,this.compressionLevel)),r.set(xt(N,this.compressionLevel),xt(V,this.compressionLevel),xt(H,this.compressionLevel),xt(L,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,r,s),r.normalize()),a(r),l&&(l[y]=p(s.x,0),l[y+1]=p(s.y,0),l[y+2]=p(s.z,0)),c&&(c[R]=p(r.x,0),c[R+1]=p(r.y,0),c[R+2]=p(r.z,0),c[R+3]=p(r.w,0))}}}());xe(this,"fillSphericalHarmonicsArray",function(){for(let N=0;N<15;N++)new F;const e=new Ge,t=new Xe,n=new F,s=new F,r=new yt,o=[],a=[],l=[],c=[],u=[],f=[],h=[],d=[],g=[],A=[],m=[],p=[],x=[],_=[],S=[],M=[],w=[],y=[],R=N=>N,C=(N,V,H,W)=>{N[0]=V,N[1]=H,N[2]=W},v=(N,V,H,W,k)=>{N[0]=at(V,W,k,!0),N[1]=at(V,W+H,k,!0),N[2]=at(V,W+H+H,k,!0)},D=(N,V)=>{V[0]=N[0],V[1]=N[1],V[2]=N[2]},z=(N,V,H,W)=>{V[H]=W(N[0]),V[H+1]=W(N[1]),V[H+2]=W(N[2])},L=(N,V,H,W,k)=>(V[0]=xt(N[0],H,!0,W,k),V[1]=xt(N[1],H,!0,W,k),V[2]=xt(N[2],H,!0,W,k),V);return function(N,V,H,W,k,Y,ce){const Se=this.splatCount;W=W||0,k=k||Se-1,Y===void 0&&(Y=W),H&&V>=1&&(t.copy(H),t.decompose(n,r,s),r.normalize(),t.makeRotationFromQuaternion(r),e.setFromMatrix4(t),C(o,e.elements[4],-e.elements[7],e.elements[1]),C(a,-e.elements[5],e.elements[8],-e.elements[2]),C(l,e.elements[3],-e.elements[6],e.elements[0]));const Ie=j=>tp(j,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Oe=j=>Tr(j,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let j=W;j<=k;j++){const fe=this.globalSplatIndexToSectionMap[j],me=this.sections[fe];V=Math.min(V,me.sphericalHarmonicsDegree);const de=Qs(V),be=j-me.splatCountOffset,Ne=me.bytesPerSplat*be+oe.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ee=new DataView(this.bufferData,me.dataBase+Ne),je=(j-W+Y)*de;let P=H?0:this.compressionLevel,B=R;P!==ce&&(P===1?ce===0?B=Kc:ce==2&&(B=Ie):P===0&&(ce===1?B=Dt:ce==2&&(B=Oe)));const b=this.minSphericalHarmonicsCoeff,re=this.maxSphericalHarmonicsCoeff;V>=1&&(v(g,Ee,3,0,this.compressionLevel),v(A,Ee,3,1,this.compressionLevel),v(m,Ee,3,2,this.compressionLevel),H?(L(g,g,this.compressionLevel,b,re),L(A,A,this.compressionLevel,b,re),L(m,m,this.compressionLevel,b,re),oe.rotateSphericalHarmonics3(g,A,m,o,a,l,_,S,M)):(D(g,_),D(A,S),D(m,M)),z(_,N,je,B),z(S,N,je+3,B),z(M,N,je+6,B),V>=2&&(v(g,Ee,5,9,this.compressionLevel),v(A,Ee,5,10,this.compressionLevel),v(m,Ee,5,11,this.compressionLevel),v(p,Ee,5,12,this.compressionLevel),v(x,Ee,5,13,this.compressionLevel),H?(L(g,g,this.compressionLevel,b,re),L(A,A,this.compressionLevel,b,re),L(m,m,this.compressionLevel,b,re),L(p,p,this.compressionLevel,b,re),L(x,x,this.compressionLevel,b,re),oe.rotateSphericalHarmonics5(g,A,m,p,x,o,a,l,c,u,f,h,d,_,S,M,w,y)):(D(g,_),D(A,S),D(m,M),D(p,w),D(x,y)),z(_,N,je+9,B),z(S,N,je+12,B),z(M,N,je+15,B),z(w,N,je+18,B),z(y,N,je+21,B)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const s=e.fullBucketCount*e.bucketSize;if(t<s)n=Math.floor(t/e.bucketSize);else{let r=s;n=e.fullBucketCount;let o=0;for(;r<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=r&&t<r+a)break;r+=a,n++,o++}}return n}getSplatCenter(e,t,n){const s=this.globalSplatIndexToSectionMap[e],r=this.sections[s],o=e-r.splatCountOffset,a=r.bytesPerSplat*o,l=new DataView(this.bufferData,r.dataBase+a),c=at(l,0,this.compressionLevel),u=at(l,1,this.compressionLevel),f=at(l,2,this.compressionLevel);if(this.compressionLevel>=1){const d=this.getBucketIndex(r,o)*oe.BucketStorageSizeFloats,g=r.compressionScaleFactor,A=r.compressionScaleRange;t.x=(c-A)*g+r.bucketArray[d],t.y=(u-A)*g+r.bucketArray[d+1],t.z=(f-A)*g+r.bucketArray[d+2]}else t.x=c,t.y=u,t.z=f;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],s=this.sections[n],r=e-s.splatCountOffset,o=s.bytesPerSplat*r+oe.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,s.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,s,r){const o=this.splatCount;n=n||0,s=s||o-1,r===void 0&&(r=n);const a=new F;for(let l=n;l<=s;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],f=l-u.splatCountOffset,h=(l-n+r)*oe.CenterComponentCount,d=u.bytesPerSplat*f,g=new DataView(this.bufferData,u.dataBase+d),A=at(g,0,this.compressionLevel),m=at(g,1,this.compressionLevel),p=at(g,2,this.compressionLevel);if(this.compressionLevel>=1){const _=this.getBucketIndex(u,f)*oe.BucketStorageSizeFloats,S=u.compressionScaleFactor,M=u.compressionScaleRange;a.x=(A-M)*S+u.bucketArray[_],a.y=(m-M)*S+u.bucketArray[_+1],a.z=(p-M)*S+u.bucketArray[_+2]}else a.x=A,a.y=m,a.z=p;t&&a.applyMatrix4(t),e[h]=a.x,e[h+1]=a.y,e[h+2]=a.z}}fillSplatCovarianceArray(e,t,n,s,r,o){const a=this.splatCount,l=new F,c=new yt;n=n||0,s=s||a-1,r===void 0&&(r=n);for(let u=n;u<=s;u++){const f=this.globalSplatIndexToSectionMap[u],h=this.sections[f],d=u-h.splatCountOffset,g=(u-n+r)*oe.CovarianceComponentCount,A=h.bytesPerSplat*d+oe.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,h.dataBase+A);l.set(xt(at(m,0,this.compressionLevel),this.compressionLevel),xt(at(m,1,this.compressionLevel),this.compressionLevel),xt(at(m,2,this.compressionLevel),this.compressionLevel)),c.set(xt(at(m,4,this.compressionLevel),this.compressionLevel),xt(at(m,5,this.compressionLevel),this.compressionLevel),xt(at(m,6,this.compressionLevel),this.compressionLevel),xt(at(m,3,this.compressionLevel),this.compressionLevel)),oe.computeCovariance(l,c,t,e,g,o)}}fillSplatColorArray(e,t,n,s,r){const o=this.splatCount;n=n||0,s=s||o-1,r===void 0&&(r=n);for(let a=n;a<=s;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,f=(a-n+r)*oe.ColorComponentCount,h=c.bytesPerSplat*u+oe.CompressionLevels[this.compressionLevel].ColorOffsetBytes,d=new Uint8Array(this.bufferData,c.dataBase+h);let g=d[3];g=g>=t?g:0,e[f]=d[0],e[f+1]=d[1],e[f+2]=d[2],e[f+3]=g}}static parseHeader(e){const t=new Uint8Array(e,0,oe.HeaderSizeBytes),n=new Uint16Array(e,0,oe.HeaderSizeBytes/2),s=new Uint32Array(e,0,oe.HeaderSizeBytes/4),r=new Float32Array(e,0,oe.HeaderSizeBytes/4),o=t[0],a=t[1],l=s[1],c=s[2],u=s[3],f=s[4],h=n[10],d=new F(r[6],r[7],r[8]),g=r[9]||-1.5,A=r[10]||_o;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:f,compressionLevel:h,sceneCenter:d,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:A}}static writeHeaderCountsToBuffer(e,t,n){const s=new Uint32Array(n,0,oe.HeaderSizeBytes/4);s[2]=e,s[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,oe.HeaderSizeBytes),s=new Uint16Array(t,0,oe.HeaderSizeBytes/2),r=new Uint32Array(t,0,oe.HeaderSizeBytes/4),o=new Float32Array(t,0,oe.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,s[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-1.5,o[10]=e.maxSphericalHarmonicsCoeff||_o}static parseSectionHeaders(e,t,n=0,s){const r=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*oe.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*oe.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*oe.SectionHeaderSizeBytes/4),u=[];let f=0,h=f/2,d=f/4,g=oe.HeaderSizeBytes+e.maxSectionCount*oe.SectionHeaderSizeBytes,A=0;for(let m=0;m<o;m++){const p=l[d+1],x=l[d+2],_=l[d+3],S=c[d+4],M=S/2,w=a[h+10],y=l[d+6]||oe.CompressionLevels[r].ScaleRange,R=l[d+8],C=l[d+9],v=C*4,D=w*_+v,z=a[h+20],{bytesPerSplat:L}=oe.calculateComponentStorage(r,z),N=L*p,V=N+D,H={bytesPerSplat:L,splatCountOffset:A,splatCount:s?p:0,maxSplatCount:p,bucketSize:x,bucketCount:_,bucketBlockSize:S,halfBucketBlockSize:M,bucketStorageSizeBytes:w,bucketsStorageSizeBytes:D,splatDataStorageSizeBytes:N,storageSizeBytes:V,compressionScaleRange:y,compressionScaleFactor:M/y,base:g,bucketsBase:g+v,dataBase:g+D,fullBucketCount:R,partiallyFilledBucketCount:C,sphericalHarmonicsDegree:z};u[m]=H,g+=V,f+=oe.SectionHeaderSizeBytes,h=f/2,d=f/4,A+=p}return u}static writeSectionHeaderToBuffer(e,t,n,s=0){const r=new Uint16Array(n,s,oe.SectionHeaderSizeBytes/2),o=new Uint32Array(n,s,oe.SectionHeaderSizeBytes/4),a=new Float32Array(n,s,oe.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?oe.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const s=new Uint32Array(t,n,oe.SectionHeaderSizeBytes/4);s[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=oe.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new F().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=oe.parseSectionHeaders(n,this.bufferData,oe.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=oe.CompressionLevels[e].BytesPerCenter,s=oe.CompressionLevels[e].BytesPerScale,r=oe.CompressionLevels[e].BytesPerRotation,o=oe.CompressionLevels[e].BytesPerColor,a=Qs(t),l=oe.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+s+r+o+l;return{bytesPerCenter:n,bytesPerScale:s,bytesPerRotation:r,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*oe.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let s=0;s<n.maxSplatCount;s++){const r=e+s;this.globalSplatIndexToLocalSplatIndexMap[r]=s,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){oe.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=oe.HeaderSizeBytes+oe.SectionHeaderSizeBytes*e;oe.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,s,r,o,a=[]){let l=0;for(let M=0;M<e.length;M++){const w=e[M];l=Math.max(w.sphericalHarmonicsDegree,l)}let c,u;for(let M=0;M<e.length;M++){const w=e[M];for(let y=0;y<w.splats.length;y++){const R=w.splats[y];for(let C=ye.OFFSET.FRC0;C<ye.OFFSET.FRC23&&C<R.length;C++)(!c||R[C]<c)&&(c=R[C]),(!u||R[C]>u)&&(u=R[C])}}c=c||-1.5,u=u||_o;const{bytesPerSplat:f}=oe.calculateComponentStorage(n,l),h=oe.CompressionLevels[n].ScaleRange,d=[],g=[];let A=0;for(let M=0;M<e.length;M++){const w=e[M],y=new ye(l);for(let fe=0;fe<w.splatCount;fe++){const me=w.splats[fe];(me[ye.OFFSET.OPACITY]||0)>=t&&y.addSplat(me)}const R=a[M]||{},C=(R.blockSizeFactor||1)*(r||oe.BucketBlockSize),v=Math.ceil((R.bucketSizeFactor||1)*(o||oe.BucketSize)),D=oe.computeBucketsForUncompressedSplatArray(y,C,v),z=D.fullBuckets.length,L=D.partiallyFullBuckets.map(fe=>fe.splats.length),N=L.length,V=[...D.fullBuckets,...D.partiallyFullBuckets],H=y.splats.length*f,W=N*4,k=n>=1?V.length*oe.BucketStorageSizeBytes+W:0,Y=H+k,ce=new ArrayBuffer(Y),Se=h/(C*.5),Ie=new F;let Oe=0;for(let fe=0;fe<V.length;fe++){const me=V[fe];Ie.fromArray(me.center);for(let de=0;de<me.splats.length;de++){let be=me.splats[de];const Ne=y.splats[be],Ee=k+Oe*f;oe.writeSplatDataToSectionBuffer(Ne,ce,Ee,n,l,Ie,Se,h,c,u),Oe++}}if(A+=Oe,n>=1){const fe=new Uint32Array(ce,0,L.length*4);for(let de=0;de<L.length;de++)fe[de]=L[de];const me=new Float32Array(ce,W,V.length*oe.BucketStorageSizeFloats);for(let de=0;de<V.length;de++){const be=V[de],Ne=de*3;me[Ne]=be.center[0],me[Ne+1]=be.center[1],me[Ne+2]=be.center[2]}}d.push(ce);const j=new ArrayBuffer(oe.SectionHeaderSizeBytes);oe.writeSectionHeaderToBuffer({maxSplatCount:Oe,splatCount:Oe,bucketSize:v,bucketCount:V.length,bucketBlockSize:C,compressionScaleRange:h,storageSizeBytes:Y,fullBucketCount:z,partiallyFilledBucketCount:N,sphericalHarmonicsDegree:l},n,j,0),g.push(j)}let m=0;for(let M of d)m+=M.byteLength;const p=oe.HeaderSizeBytes+oe.SectionHeaderSizeBytes*d.length+m,x=new ArrayBuffer(p);oe.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:d.length,sectionCount:d.length,maxSplatCount:A,splatCount:A,compressionLevel:n,sceneCenter:s,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},x);let _=oe.HeaderSizeBytes;for(let M of g)new Uint8Array(x,_,oe.SectionHeaderSizeBytes).set(new Uint8Array(M)),_+=oe.SectionHeaderSizeBytes;for(let M of d)new Uint8Array(x,_,M.byteLength).set(new Uint8Array(M)),_+=M.byteLength;return new oe(x)}static computeBucketsForUncompressedSplatArray(e,t,n){let s=e.splatCount;const r=t/2,o=new F,a=new F;for(let A=0;A<s;A++){const m=e.splats[A],p=[m[ye.OFFSET.X],m[ye.OFFSET.Y],m[ye.OFFSET.Z]];(A===0||p[0]<o.x)&&(o.x=p[0]),(A===0||p[0]>a.x)&&(a.x=p[0]),(A===0||p[1]<o.y)&&(o.y=p[1]),(A===0||p[1]>a.y)&&(a.y=p[1]),(A===0||p[2]<o.z)&&(o.z=p[2]),(A===0||p[2]>a.z)&&(a.z=p[2])}const l=new F().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),f=new F,h=[],d={};for(let A=0;A<s;A++){const m=e.splats[A],p=[m[ye.OFFSET.X],m[ye.OFFSET.Y],m[ye.OFFSET.Z]],x=Math.floor((p[0]-o.x)/t),_=Math.floor((p[1]-o.y)/t),S=Math.floor((p[2]-o.z)/t);f.x=x*t+o.x+r,f.y=_*t+o.y+r,f.z=S*t+o.z+r;const M=x*(c*u)+_*u+S;let w=d[M];w||(d[M]=w={splats:[],center:f.toArray()}),w.splats.push(A),w.splats.length>=n&&(h.push(w),d[M]=null)}const g=[];for(let A in d)if(d.hasOwnProperty(A)){const m=d[A];m&&g.push(m)}return{fullBuckets:h,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const n=oe.CompressionLevels[0].SphericalHarmonicsDegrees[t],s=oe.HeaderSizeBytes+oe.SectionHeaderSizeBytes,r=s+n.BytesPerSplat*e,o=new ArrayBuffer(r);return oe.writeHeaderToBuffer({versionMajor:oe.CurrentMajorVersion,versionMinor:oe.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new F},o),oe.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,oe.HeaderSizeBytes),{splatBuffer:new oe(o,!0),splatBufferDataOffsetBytes:s}}};xe(oe,"CurrentMajorVersion",0),xe(oe,"CurrentMinorVersion",1),xe(oe,"CenterComponentCount",3),xe(oe,"ScaleComponentCount",3),xe(oe,"RotationComponentCount",4),xe(oe,"ColorComponentCount",4),xe(oe,"CovarianceComponentCount",6),xe(oe,"SplatScaleOffsetFloat",3),xe(oe,"SplatRotationOffsetFloat",6),xe(oe,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),xe(oe,"CovarianceSizeFloats",6),xe(oe,"HeaderSizeBytes",4096),xe(oe,"SectionHeaderSizeBytes",1024),xe(oe,"BucketStorageSizeBytes",12),xe(oe,"BucketStorageSizeFloats",3),xe(oe,"BucketBlockSize",5),xe(oe,"BucketSize",256),xe(oe,"computeCovariance",function(){const e=new Xe,t=new Ge,n=new Ge,s=new Ge,r=new Ge,o=new Ge,a=new Ge;return function(l,c,u,f,h=0,d){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),s.copy(n).multiply(t),r.copy(s).transpose().premultiply(s),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),r.multiply(a),r.premultiply(o)),d>=1?(f[h]=Dt(r.elements[0]),f[h+1]=Dt(r.elements[3]),f[h+2]=Dt(r.elements[6]),f[h+3]=Dt(r.elements[4]),f[h+4]=Dt(r.elements[7]),f[h+5]=Dt(r.elements[8])):(f[h]=r.elements[0],f[h+1]=r.elements[3],f[h+2]=r.elements[6],f[h+3]=r.elements[4],f[h+4]=r.elements[7],f[h+5]=r.elements[8])}}()),xe(oe,"dot3",(e,t,n,s,r)=>{r[0]=r[1]=r[2]=0;const o=s[0],a=s[1],l=s[2];oe.addInto3(e[0]*o,e[1]*o,e[2]*o,r),oe.addInto3(t[0]*a,t[1]*a,t[2]*a,r),oe.addInto3(n[0]*l,n[1]*l,n[2]*l,r)}),xe(oe,"addInto3",(e,t,n,s)=>{s[0]=s[0]+e,s[1]=s[1]+t,s[2]=s[2]+n}),xe(oe,"dot5",(e,t,n,s,r,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],f=o[3],h=o[4];oe.addInto3(e[0]*l,e[1]*l,e[2]*l,a),oe.addInto3(t[0]*c,t[1]*c,t[2]*c,a),oe.addInto3(n[0]*u,n[1]*u,n[2]*u,a),oe.addInto3(s[0]*f,s[1]*f,s[2]*f,a),oe.addInto3(r[0]*h,r[1]*h,r[2]*h,a)}),xe(oe,"rotateSphericalHarmonics3",(e,t,n,s,r,o,a,l,c)=>{oe.dot3(e,t,n,s,a),oe.dot3(e,t,n,r,l),oe.dot3(e,t,n,o,c)}),xe(oe,"rotateSphericalHarmonics5",(e,t,n,s,r,o,a,l,c,u,f,h,d,g,A,m,p,x)=>{const _=Math.sqrt(.25),S=Math.sqrt(3/4),M=Math.sqrt(1/3),w=Math.sqrt(4/3),y=Math.sqrt(1/12);c[0]=_*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=S*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=_*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),oe.dot5(e,t,n,s,r,c,g),u[0]=_*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=S*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=_*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),oe.dot5(e,t,n,s,r,u,A),f[0]=M*(a[2]*a[0]+a[0]*a[2])+-y*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),f[1]=w*a[1]*a[0]+-M*(l[1]*l[0]+o[1]*o[0]),f[2]=a[1]*a[1]+-_*(l[1]*l[1]+o[1]*o[1]),f[3]=w*a[1]*a[2]+-M*(l[1]*l[2]+o[1]*o[2]),f[4]=M*(a[2]*a[2]-a[0]*a[0])+-y*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),oe.dot5(e,t,n,s,r,f,m),h[0]=_*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),h[1]=a[1]*l[0]+l[1]*a[0],h[2]=S*(a[1]*l[1]+l[1]*a[1]),h[3]=a[1]*l[2]+l[1]*a[2],h[4]=_*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),oe.dot5(e,t,n,s,r,h,p),d[0]=_*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),d[1]=l[1]*l[0]-o[1]*o[0],d[2]=S*(l[1]*l[1]-o[1]*o[1]),d[3]=l[1]*l[2]-o[1]*o[2],d[4]=_*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),oe.dot5(e,t,n,s,r,d,x)}),xe(oe,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),s=new ArrayBuffer(4),r=new ArrayBuffer(256),o=new yt,a=new F,l=new F,{X:c,Y:u,Z:f,SCALE0:h,SCALE1:d,SCALE2:g,ROTATION0:A,ROTATION1:m,ROTATION2:p,ROTATION3:x,FDC0:_,FDC1:S,FDC2:M,OPACITY:w,FRC0:y,FRC9:R}=ye.OFFSET,C=(v,D,z)=>{const L=z*2+1;return v=Math.round(v*D)+z,_t(v,0,L)};return function(v,D,z,L,N,V,H,W,k=-1.5,Y=_o){const ce=Qs(N),Se=oe.CompressionLevels[L].BytesPerCenter,Ie=oe.CompressionLevels[L].BytesPerScale,Oe=oe.CompressionLevels[L].BytesPerRotation,j=oe.CompressionLevels[L].BytesPerColor,fe=z,me=fe+Se,de=me+Ie,be=de+Oe,Ne=be+j;if(v[A]!==void 0?(o.set(v[A],v[m],v[p],v[x]),o.normalize()):o.set(1,0,0,0),v[h]!==void 0?a.set(v[h]||0,v[d]||0,v[g]||0):a.set(0,0,0),L===0){const je=new Float32Array(D,fe,oe.CenterComponentCount),P=new Float32Array(D,de,oe.RotationComponentCount),B=new Float32Array(D,me,oe.ScaleComponentCount);if(P.set([o.x,o.y,o.z,o.w]),B.set([a.x,a.y,a.z]),je.set([v[c],v[u],v[f]]),N>0){const b=new Float32Array(D,Ne,ce);if(N>=1){for(let re=0;re<9;re++)b[re]=v[y+re]||0;if(N>=2)for(let re=0;re<15;re++)b[re+9]=v[R+re]||0}}}else{const je=new Uint16Array(e,0,oe.CenterComponentCount),P=new Uint16Array(n,0,oe.RotationComponentCount),B=new Uint16Array(t,0,oe.ScaleComponentCount);if(P.set([Dt(o.x),Dt(o.y),Dt(o.z),Dt(o.w)]),B.set([Dt(a.x),Dt(a.y),Dt(a.z)]),l.set(v[c],v[u],v[f]).sub(V),l.x=C(l.x,H,W),l.y=C(l.y,H,W),l.z=C(l.z,H,W),je.set([l.x,l.y,l.z]),N>0){const b=L===1?Uint16Array:Uint8Array,re=L===1?2:1,$=new b(r,0,ce);if(N>=1){for(let Z=0;Z<9;Z++){const ae=v[y+Z]||0;$[Z]=L===1?Dt(ae):Tr(ae,k,Y)}const ie=9*re;if(Ls($.buffer,0,D,Ne,ie),N>=2){for(let Z=0;Z<15;Z++){const ae=v[R+Z]||0;$[Z+9]=L===1?Dt(ae):Tr(ae,k,Y)}Ls($.buffer,ie,D,Ne+ie,15*re)}}}Ls(je.buffer,0,D,fe,6),Ls(B.buffer,0,D,me,6),Ls(P.buffer,0,D,de,8)}const Ee=new Uint8ClampedArray(s,0,4);Ee.set([v[_]||0,v[S]||0,v[M]||0]),Ee[3]=v[w]||0,Ls(Ee.buffer,0,D,be,4)}}());let Fe=oe;const Hf=new Uint8Array([112,108,121,10]),kf=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),il="end_header",sl=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),qn=(i,e)=>{const t=(1<<e)-1;return(i&t)/t},Vf=(i,e)=>{i.x=qn(e>>>21,11),i.y=qn(e>>>11,10),i.z=qn(e,11)},sy=(i,e)=>{i.x=qn(e>>>24,8),i.y=qn(e>>>16,8),i.z=qn(e>>>8,8),i.w=qn(e,8)},ry=(i,e)=>{const t=1/(Math.sqrt(2)*.5),n=(qn(e>>>20,10)-.5)*t,s=(qn(e>>>10,10)-.5)*t,r=(qn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+s*s+r*r));switch(e>>>30){case 0:i.set(o,n,s,r);break;case 1:i.set(n,o,s,r);break;case 2:i.set(n,s,o,r);break;case 3:i.set(n,s,r,o);break}},ri=(i,e,t)=>i*(1-t)+e*t,Et=(i,e)=>{var t;return(t=i.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},dt=class dt{static decodeHeaderText(e){let t,n,s,r;const o=e.split(`
`).filter(f=>!f.startsWith("comment "));let a=0,l=!1;for(let f=1;f<o.length;++f){const h=o[f].split(" ");switch(h[0]){case"format":if(h[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:h[1],count:parseInt(h[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?s=t:t.name==="sh"&&(r=t);break;case"property":{if(!sl.has(h[1]))throw new Error(`Unrecognized property data type '${h[1]}' in ply header`);const d=sl.get(h[1]),g=d.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=d.BYTES_PER_ELEMENT),t.properties.push({type:h[1],name:h[2],storage:null,byteSize:d.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case il:l=!0;break;default:throw new Error(`Unrecognized header value '${h[0]}' in ply header`)}if(l)break}let c=0,u=0;return r&&(u=r.properties.length,r.properties.length>=45?c=3:r.properties.length>=24?c=2:r.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:s,shElement:r,bytesPerSplat:a,headerSizeBytes:e.indexOf(il)+il.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:u}}static decodeHeader(e){const t=(d,g)=>{const A=d.length-g.length;let m,p;for(m=0;m<=A;++m){for(p=0;p<g.length&&d[m+p]===g[p];++p);if(p===g.length)return m}return-1},n=(d,g)=>{if(d.length<g.length)return!1;for(let A=0;A<g.length;++A)if(d[A]!==g[A])return!1;return!0};let s=new Uint8Array(e),r;if(s.length>=Hf.length&&!n(s,Hf))throw new Error("Invalid PLY header");if(r=t(s,kf),r===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(s.slice(0,r)),{chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:f,bytesPerSplat:h}=dt.decodeHeaderText(o);return{headerSizeBytes:r+kf.length,bytesPerSplat:h,chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:f}}static readElementData(e,t,n,s,r,o=null){let a=t instanceof DataView?t:new DataView(t);s=s||0,r=r||e.count-1;for(let l=s;l<=r;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],f=sl.get(u.type),h=f.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<h)&&(!o||o(u.name))&&(u.storage=new f(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=dt.decodeHeader(e);let s=dt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return s=dt.readElementData(n.vertexElement,e,s,null,null,t),dt.readElementData(n.shElement,e,s,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const s={};if(t){const r=Et(e,"min_r"),o=Et(e,"min_g"),a=Et(e,"min_b"),l=Et(e,"max_r"),c=Et(e,"max_g"),u=Et(e,"max_b"),f=Et(e,"min_x"),h=Et(e,"min_y"),d=Et(e,"min_z"),g=Et(e,"max_x"),A=Et(e,"max_y"),m=Et(e,"max_z"),p=Et(e,"min_scale_x"),x=Et(e,"min_scale_y"),_=Et(e,"min_scale_z"),S=Et(e,"max_scale_x"),M=Et(e,"max_scale_y"),w=Et(e,"max_scale_z"),y=Et(t,"packed_position"),R=Et(t,"packed_rotation"),C=Et(t,"packed_scale"),v=Et(t,"packed_color");s.colorExtremes={minR:r,maxR:l,minG:o,maxG:c,minB:a,maxB:u},s.positionExtremes={minX:f,maxX:g,minY:h,maxY:A,minZ:d,maxZ:m},s.scaleExtremes={minScaleX:p,maxScaleX:S,minScaleY:x,maxScaleY:M,minScaleZ:_,maxScaleZ:w},s.position=y,s.rotation=R,s.scale=C,s.color=v}if(n){const r={};for(let o=0;o<45;o++){const a=`f_rest_${o}`,l=Et(n,a);if(l)r[a]=l;else break}s.sh=r}return s}static parseToUncompressedSplatBufferSection(e,t,n,s,r,o,a,l,c=null){dt.readElementData(t,o,0,n,s,c);const u=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:f,scaleExtremes:h,colorExtremes:d,position:g,rotation:A,scale:m,color:p}=dt.getElementStorageArrays(e,t),x=ye.createSplat();for(let _=n;_<=s;++_){dt.decompressBaseSplat(_,r,g,f,m,h,A,d,p,x);const S=_*u+l;Fe.writeSplatDataToSectionBuffer(x,a,S,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,s,r,o,a,l=null){dt.readElementData(t,o,0,n,s,l);const{positionExtremes:c,scaleExtremes:u,colorExtremes:f,position:h,rotation:d,scale:g,color:A}=dt.getElementStorageArrays(e,t);for(let m=n;m<=s;++m){const p=ye.createSplat();dt.decompressBaseSplat(m,r,h,c,g,u,d,f,A,p),a.addSplat(p)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,s,r,o,a,l,c,u=null){dt.readElementData(t,r,o,n,s,u);const{sh:f}=dt.getElementStorageArrays(e,void 0,t),h=Object.values(f);for(let d=n;d<=s;++d)dt.decompressSphericalHarmonics(d,h,a,l,c.splats[d])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:s,shElement:r,sphericalHarmonicsDegree:o}=dt.readPly(e);t=Math.min(t,o);const a=new ye(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:u,position:f,rotation:h,scale:d,color:g}=dt.getElementStorageArrays(n,s);let A;if(t>0){const{sh:m}=dt.getElementStorageArrays(n,void 0,r);A=Object.values(m)}for(let m=0;m<s.count;++m){a.addDefaultSplat();const p=a.getSplat(a.splatCount-1);dt.decompressBaseSplat(m,0,f,l,d,c,h,u,g,p),t>0&&dt.decompressSphericalHarmonics(m,A,t,o,p)}return a}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:s,shElement:r,sphericalHarmonicsDegree:o}=dt.readPly(e);t=Math.min(t,o);const{splatBuffer:a,splatBufferDataOffsetBytes:l}=Fe.preallocateUncompressed(s.count,t),{positionExtremes:c,scaleExtremes:u,colorExtremes:f,position:h,rotation:d,scale:g,color:A}=dt.getElementStorageArrays(n,s);let m;if(t>0){const{sh:_}=dt.getElementStorageArrays(n,void 0,r);m=Object.values(_)}const p=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,x=ye.createSplat(t);for(let _=0;_<s.count;++_){dt.decompressBaseSplat(_,0,h,c,g,u,d,f,A,x),t>0&&dt.decompressSphericalHarmonics(_,m,t,o,x);const S=_*p+l;Fe.writeSplatDataToSectionBuffer(x,a.bufferData,S,0,t)}return a}};xe(dt,"decompressBaseSplat",function(){const e=new F,t=new yt,n=new F,s=new vt,r=ye.OFFSET;return function(o,a,l,c,u,f,h,d,g,A){A=A||ye.createSplat();const m=Math.floor((a+o)/256);return Vf(e,l[o]),ry(t,h[o]),Vf(n,u[o]),sy(s,g[o]),A[r.X]=ri(c.minX[m],c.maxX[m],e.x),A[r.Y]=ri(c.minY[m],c.maxY[m],e.y),A[r.Z]=ri(c.minZ[m],c.maxZ[m],e.z),A[r.ROTATION0]=t.x,A[r.ROTATION1]=t.y,A[r.ROTATION2]=t.z,A[r.ROTATION3]=t.w,A[r.SCALE0]=Math.exp(ri(f.minScaleX[m],f.maxScaleX[m],n.x)),A[r.SCALE1]=Math.exp(ri(f.minScaleY[m],f.maxScaleY[m],n.y)),A[r.SCALE2]=Math.exp(ri(f.minScaleZ[m],f.maxScaleZ[m],n.z)),d.minR&&d.maxR?A[r.FDC0]=_t(Math.round(ri(d.minR[m],d.maxR[m],s.x)*255),0,255):A[r.FDC0]=_t(Math.floor(s.x*255),0,255),d.minG&&d.maxG?A[r.FDC1]=_t(Math.round(ri(d.minG[m],d.maxG[m],s.y)*255),0,255):A[r.FDC1]=_t(Math.floor(s.y*255),0,255),d.minB&&d.maxB?A[r.FDC2]=_t(Math.round(ri(d.minB[m],d.maxB[m],s.z)*255),0,255):A[r.FDC2]=_t(Math.floor(s.z*255),0,255),A[r.OPACITY]=_t(Math.floor(s.w*255),0,255),A}}()),xe(dt,"decompressSphericalHarmonics",function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,s,r,o,a){a=a||ye.createSplat();let l=e[r],c=e[o];for(let u=0;u<3;++u)for(let f=0;f<15;++f){const h=t[u*15+f];f<l&&f<c&&(a[ye.OFFSET.FRC0+h]=s[u*c+f][n]*(8/255)-4)}return a}}());let pi=dt;const $t={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[np,$c,Zc,Jc,eu,tu,nu]=[0,1,2,3,4,5,6],Gf={double:np,int:$c,uint:Zc,float:Jc,short:eu,ushort:tu,uchar:nu},oy={[np]:8,[$c]:4,[Zc]:4,[Jc]:4,[eu]:2,[tu]:2,[nu]:1},sn=class sn{static decodeSectionHeader(e,t,n=0){const s=[];let r=!1,o=-1,a=0,l=!1,c=null;const u=[],f=[],h=[],d={};for(let p=n;p<e.length;p++){const x=e[p].trim();if(x.startsWith("element"))if(r){o--;break}else{r=!0,n=p,o=p;const _=x.split(" ");let S=0;for(let M of _){const w=M.trim();w.length>0&&(S++,S===2?c=w:S===3&&(a=parseInt(w)))}}else if(x.startsWith("property")){const _=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(_){const S=_[2],M=_[3];h.push(M);const w=t[M];d[M]=S;const y=Gf[S];w!==void 0&&(u.push(w),f[w]=y)}}if(x===sn.HeaderEndToken){l=!0;break}r&&(s.push(x),o++)}const g=[];let A=0;for(let p of h){const x=d[p];if(d.hasOwnProperty(p)){const _=t[p];_!==void 0&&(g[_]=A)}A+=oy[Gf[x]]}const m=sn.decodeSphericalHarmonicsFromSectionHeader(h,t);return{headerLines:s,headerStartLine:n,headerEndLine:o,fieldTypes:f,fieldIds:u,fieldOffsets:g,bytesPerVertex:A,vertexCount:a,dataSizeBytes:A*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,s=0;for(let l of e)l.startsWith("f_rest")&&n++;s=n/3;let r=0;s>=3&&(r=1),s>=8&&(r=2);let o=[],a=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+s*l)]);if(r>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+s*l+3)])}return{degree:r,coefficientsPerChannel:s,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const s=n.split(" ");let r=0;for(let o of s){const a=o.trim();a.length>0&&(r++,r===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(sn.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,s){const r=new Uint8Array(e,Math.max(0,t-n),n),o=s.decode(r);return sn.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,s="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(s+=t.decode(o),n+=r,sn.checkBufferForEndHeader(e,n,r*2,t))break}return s}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,s="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(s+=t.decode(o),n+=r,sn.checkBufferForEndHeader(e,n,r*2,t))break}return s}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let s=0;s<t.length;s++){const r=t[s].trim();if(n.push(r),r===sn.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=sn.convertHeaderTextToLines(e);let n=$t.INRIAV1;for(let s=0;s<t.length;s++){const r=t[s].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=$t.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=$t.INRIAV2;else if(r===sn.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=sn.extractHeaderFromBufferToText(e);return sn.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,s,r,o,a=!0){const l=n*t.bytesPerVertex+s,c=t.fieldOffsets,u=t.fieldTypes;for(let f of r){const h=u[f];h===Jc?o[f]=e.getFloat32(l+c[f],!0):h===eu?o[f]=e.getInt16(l+c[f],!0):h===tu?o[f]=e.getUint16(l+c[f],!0):h===$c?o[f]=e.getInt32(l+c[f],!0):h===Zc?o[f]=e.getUint32(l+c[f],!0):h===nu&&(a?o[f]=e.getUint8(l+c[f])/255:o[f]=e.getUint8(l+c[f]))}}};xe(sn,"HeaderEndToken","end_header");let bt=sn;const ip=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],ay=ip.map((i,e)=>e),[Wf,ly,cy,uy,fy,dy,hy,py,my,gy,Xf,Ay,Sy,qf,Qf,xy,_y,vy]=ay,vn=class vn{static decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((u,f)=>`f_rest_${f+1}`);const o=[...ip,...r],a=o.map((u,f)=>f),l=a.reduce((u,f)=>(u[o[f]]=f,u),{}),c=bt.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}static decodeHeaderText(e){const t=bt.convertHeaderTextToLines(e),n=vn.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(bt.HeaderEndToken)+bt.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=bt.readHeaderFromBuffer(e);return vn.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,s,r,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const f=vn.parseToUncompressedSplat(s,u,e,r,l),h=u*c+a;Fe.writeSplatDataToSectionBuffer(f,o,h,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,s,r,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=vn.parseToUncompressedSplat(s,l,e,r,a);o.addSplat(c)}}static decodeSectionSplatData(e,t,n,s,r=!0){if(s=Math.min(s,n.sphericalHarmonicsDegree),r){const o=new ye(s);for(let a=0;a<t;a++){const l=vn.parseToUncompressedSplat(e,a,n,0,s);o.addSplat(l)}return o}else{const{splatBuffer:o,splatBufferDataOffsetBytes:a}=Fe.preallocateUncompressed(t,s);return vn.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,o.bufferData,a,s),o}}static readSplat(e,t,n,s,r){return bt.readVertex(e,t,n,s,t.fieldsToReadIndexes,r,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:s,splatData:r}=Yf(e);return vn.decodeSectionSplatData(r,s,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:s,splatData:r}=Yf(e);return vn.decodeSectionSplatData(r,s,n,t,!1)}};xe(vn,"parseToUncompressedSplat",function(){let e=[];const t=new yt,n=ye.OFFSET.X,s=ye.OFFSET.Y,r=ye.OFFSET.Z,o=ye.OFFSET.SCALE0,a=ye.OFFSET.SCALE1,l=ye.OFFSET.SCALE2,c=ye.OFFSET.ROTATION0,u=ye.OFFSET.ROTATION1,f=ye.OFFSET.ROTATION2,h=ye.OFFSET.ROTATION3,d=ye.OFFSET.FDC0,g=ye.OFFSET.FDC1,A=ye.OFFSET.FDC2,m=ye.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=ye.OFFSET.FRC0+x;return function(x,_,S,M=0,w=0){w=Math.min(w,S.sphericalHarmonicsDegree),vn.readSplat(x,S,_,M,e);const y=ye.createSplat(w);if(e[Wf]!==void 0?(y[o]=Math.exp(e[Wf]),y[a]=Math.exp(e[ly]),y[l]=Math.exp(e[cy])):(y[o]=.01,y[a]=.01,y[l]=.01),e[Xf]!==void 0){const R=.28209479177387814;y[d]=(.5+R*e[Xf])*255,y[g]=(.5+R*e[Ay])*255,y[A]=(.5+R*e[Sy])*255}else e[Qf]!==void 0?(y[d]=e[Qf]*255,y[g]=e[xy]*255,y[A]=e[_y]*255):(y[d]=0,y[g]=0,y[A]=0);if(e[qf]!==void 0&&(y[m]=1/(1+Math.exp(-e[qf]))*255),y[d]=_t(Math.floor(y[d]),0,255),y[g]=_t(Math.floor(y[g]),0,255),y[A]=_t(Math.floor(y[A]),0,255),y[m]=_t(Math.floor(y[m]),0,255),w>=1&&e[vy]!==void 0){for(let R=0;R<9;R++)y[p[R]]=e[S.sphericalHarmonicsDegree1Fields[R]];if(w>=2)for(let R=0;R<15;R++)y[p[9+R]]=e[S.sphericalHarmonicsDegree2Fields[R]]}return t.set(e[uy],e[fy],e[dy],e[hy]),t.normalize(),y[c]=t.x,y[u]=t.y,y[f]=t.z,y[h]=t.w,y[n]=e[py],y[s]=e[my],y[r]=e[gy],y}}());let Ai=vn;function Yf(i){const e=Ai.decodeHeaderFromBuffer(i),t=e.splatCount,n=Ai.findSplatData(i,e);return{header:e,splatCount:t,splatData:n}}const sp=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],vo=sp.map((i,e)=>e),[yo,yy,Ey,Kf,Eo,Cy,rl]=[0,1,4,16,17,18,19],rp=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],lc=rp.map((i,e)=>e),[jf,My,Ty,by,wy,Ry,Iy,Dy,Py,Fy,cc,op,ap,$f]=lc,Zf=cc,By=op,Ly=ap,Co=i=>{const e=(31744&i)>>10,t=1023&i;return(i>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},rn=class rn{static decodeSectionHeadersFromHeaderLines(e){const t=lc.reduce((u,f)=>(u[rp[f]]=f,u),{}),n=vo.reduce((u,f)=>(u[sp[f]]=f,u),{}),s=bt.getHeaderSectionNames(e);let r;for(let u=0;u<s.length;u++)s[u]==="codebook_centers"&&(r=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===r?u=bt.decodeSectionHeader(e,n,o):u=bt.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=bt.convertHeaderTextToLines(e);return rn.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(bt.HeaderEndToken)+bt.HeaderEndToken.length+1,n=rn.decodeSectionHeadersFromHeaderText(e),s=rn.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:s}}static decodeHeaderFromBuffer(e){const t=bt.readHeaderFromBuffer(e);return rn.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let s=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){const o=t.sectionHeaders[r];s+=o.dataSizeBytes}return new DataView(e,s,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],s=[];for(let r=0;r<t.vertexCount;r++){bt.readVertex(e,t,r,0,vo,n);for(let o of vo){const a=vo[o];let l=s[a];l||(s[a]=l=[]),l.push(n[o])}}for(let r=0;r<s.length;r++){const o=s[r],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=Co(o[l]);r===Kf?o[l]=Math.round(1/(1+Math.exp(-c))*255):r===yo?o[l]=Math.round((.5+a*c)*255):r===Eo?o[l]=Math.exp(c):o[l]=c}}return s}static decodeSectionSplatData(e,t,n,s,r){r=Math.min(r,n.sphericalHarmonicsDegree);const o=new ye(r);for(let a=0;a<t;a++){const l=rn.parseToUncompressedSplat(e,a,n,s,0,r);o.addSplat(l)}return o}static readSplat(e,t,n,s,r){return bt.readVertex(e,t,n,s,lc,r,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],s=rn.decodeHeaderFromBuffer(e,t);let r;for(let a=0;a<s.sectionHeaders.length;a++){const l=s.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=rn.findVertexData(e,s,a);r=rn.decodeCodeBook(c,l)}}for(let a=0;a<s.sectionHeaders.length;a++){const l=s.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=rn.findVertexData(e,s,a),f=rn.decodeSectionSplatData(u,c,l,r,t);n.push(f)}}const o=new ye(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}};xe(rn,"parseToUncompressedSplat",function(){let e=[];const t=new yt,n=ye.OFFSET.X,s=ye.OFFSET.Y,r=ye.OFFSET.Z,o=ye.OFFSET.SCALE0,a=ye.OFFSET.SCALE1,l=ye.OFFSET.SCALE2,c=ye.OFFSET.ROTATION0,u=ye.OFFSET.ROTATION1,f=ye.OFFSET.ROTATION2,h=ye.OFFSET.ROTATION3,d=ye.OFFSET.FDC0,g=ye.OFFSET.FDC1,A=ye.OFFSET.FDC2,m=ye.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=ye.OFFSET.FRC0+x;return function(x,_,S,M,w=0,y=0){y=Math.min(y,S.sphericalHarmonicsDegree),rn.readSplat(x,S,_,w,e);const R=ye.createSplat(y);if(e[jf]!==void 0?(R[o]=M[Eo][e[jf]],R[a]=M[Eo][e[My]],R[l]=M[Eo][e[Ty]]):(R[o]=.01,R[a]=.01,R[l]=.01),e[cc]!==void 0?(R[d]=M[yo][e[cc]],R[g]=M[yo][e[op]],R[A]=M[yo][e[ap]]):e[Zf]!==void 0?(R[d]=e[Zf]*255,R[g]=e[By]*255,R[A]=e[Ly]*255):(R[d]=0,R[g]=0,R[A]=0),e[$f]!==void 0&&(R[m]=M[Kf][e[$f]]),R[d]=_t(Math.floor(R[d]),0,255),R[g]=_t(Math.floor(R[g]),0,255),R[A]=_t(Math.floor(R[A]),0,255),R[m]=_t(Math.floor(R[m]),0,255),y>=1&&S.sphericalHarmonicsDegree>=1){for(let L=0;L<9;L++){const N=M[yy+L%3];R[p[L]]=N[e[S.sphericalHarmonicsDegree1Fields[L]]]}if(y>=2&&S.sphericalHarmonicsDegree>=2)for(let L=0;L<15;L++){const N=M[Ey+L%5];R[p[9+L]]=N[e[S.sphericalHarmonicsDegree2Fields[L]]]}}const C=M[Cy][e[by]],v=M[rl][e[wy]],D=M[rl][e[Ry]],z=M[rl][e[Iy]];return t.set(C,v,D,z),t.normalize(),R[c]=t.x,R[u]=t.y,R[f]=t.z,R[h]=t.w,R[n]=Co(e[Dy]),R[s]=Co(e[Py]),R[r]=Co(e[Fy]),R}}());let uc=rn;class Jf{static parseToUncompressedSplatArray(e,t=0){const n=bt.determineHeaderFormatFromPlyBuffer(e);if(n===$t.PlayCanvasCompressed)return pi.parseToUncompressedSplatArray(e,t);if(n===$t.INRIAV1)return Ai.parseToUncompressedSplatArray(e,t);if(n===$t.INRIAV2)return uc.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=bt.determineHeaderFormatFromPlyBuffer(e);if(n===$t.PlayCanvasCompressed)return pi.parseToUncompressedSplatBuffer(e,t);if(n===$t.INRIAV1)return Ai.parseToUncompressedSplatBuffer(e,t);if(n===$t.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class iu{constructor(e,t,n,s){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=s}partitionUncompressedSplatArray(e){let t,n,s;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,s=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,s=this.sectionFilters;const r=[];for(let o=0;o<n;o++){const a=new ye(e.sphericalHarmonicsDegree),l=s[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);r.push(a)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new F,n=Fe.BucketBlockSize,s=Fe.BucketSize){const r=o=>{const a=ye.OFFSET.X,l=ye.OFFSET.Y,c=ye.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new F,f=.5,h=p=>{p.x=Math.floor(p.x/f)*f,p.y=Math.floor(p.y/f)*f,p.z=Math.floor(p.z/f)*f};o.splats.forEach(p=>{u.set(p[a],p[l],p[c]).sub(t),h(u),p.centerDist=u.lengthSq()}),o.splats.sort((p,x)=>{let _=p.centerDist,S=x.centerDist;return _>S?1:-1});const d=[],g=[];e=Math.min(o.splatCount,e);const A=Math.ceil(o.splatCount/e);let m=0;for(let p=0;p<A;p++){let x=m;d.push(_=>_>=x&&_<x+e),g.push({blocksSize:n,bucketSize:s}),m+=e}return{sectionCount:d.length,sectionFilters:d,groupingParameters:g}};return new iu(void 0,void 0,void 0,r)}}class Xr{constructor(e,t,n,s,r,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=s,this.sceneCenter=r?new F().copy(r):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Fe.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,s=new F,r=Fe.BucketBlockSize,o=Fe.BucketSize){const a=iu.getStandardPartitioner(n,s,r,o);return new Xr(a,e,t,n,s,r,o)}}const wt={Downloading:0,Processing:1,Done:2};class Ko extends Error{constructor(e){super(e)}}const At={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function ed(i,e){let t=0;for(let s of i)t+=s.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let s of i)new Uint8Array(e,n,s.sizeBytes).set(s.data),n+=s.sizeBytes;return e}function td(i,e,t,n,s,r,o,a){return e?Xr.getStandardGenerator(t,n,s,r,o,a).generateFromUncompressedSplatArray(i):Fe.generateFromUncompressedSplatArrays([i],t,0,new F)}class su{static loadFromURL(e,t,n,s,r,o,a=!0,l=0,c,u,f,h,d){let g;!n&&!a?g=At.DownloadBeforeProcessing:a?g=At.ProgressiveToSplatArray:g=At.ProgressiveToSplatBuffer;const A=Je.ProgressiveLoadSectionSize,m=Fe.HeaderSizeBytes+Fe.SectionHeaderSizeBytes,p=1;let x,_,S,M,w,y=0,R=0,C=0,v=!1,D=!1,z=!1;const L=Qc();let N=0,V=0,H=0,W=0,k="",Y=null,ce=[],Se;const Ie=new TextDecoder,Oe=(j,fe,me)=>{const de=j>=100;if(me&&(ce.push({data:me,sizeBytes:me.byteLength,startBytes:H,endBytes:H+me.byteLength}),H+=me.byteLength),g===At.DownloadBeforeProcessing)de&&L.resolve(ce);else{if(v){if(x===$t.PlayCanvasCompressed&&!D){const be=Y.headerSizeBytes+Y.chunkElement.storageSizeBytes;w=ed(ce,w),w.byteLength>=be&&(pi.readElementData(Y.chunkElement,w,Y.headerSizeBytes),N=be,V=be,D=!0)}}else if(k+=Ie.decode(me),bt.checkTextForEndHeader(k)){if(x=bt.determineHeaderFormatFromHeaderText(k),x===$t.INRIAV1)Y=Ai.decodeHeaderText(k),l=Math.min(l,Y.sphericalHarmonicsDegree),y=Y.splatCount,D=!0,W=Y.headerSizeBytes+Y.bytesPerSplat*y;else if(x===$t.PlayCanvasCompressed){if(Y=pi.decodeHeaderText(k),l=Math.min(l,Y.sphericalHarmonicsDegree),g===At.ProgressiveToSplatBuffer&&l>0)throw new Ko("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");y=Y.vertexElement.count,W=Y.headerSizeBytes+Y.bytesPerSplat*y+Y.chunkElement.storageSizeBytes}else{if(g===At.ProgressiveToSplatBuffer)throw new Ko("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=At.DownloadBeforeProcessing;return}if(g===At.ProgressiveToSplatBuffer){const be=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[l],Ne=m+be.BytesPerSplat*y;S=new ArrayBuffer(Ne),Fe.writeHeaderToBuffer({versionMajor:Fe.CurrentMajorVersion,versionMinor:Fe.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:y,splatCount:0,compressionLevel:0,sceneCenter:new F},S)}else Se=new ye(l);N=Y.headerSizeBytes,V=Y.headerSizeBytes,v=!0}if(v&&D&&ce.length>0&&(_=ed(ce,_),H-N>A||H>=W&&!z||de)){const Ne=z?Y.sphericalHarmonicsPerSplat:Y.bytesPerSplat,je=(z?H:Math.min(W,H))-V,P=Math.floor(je/Ne),B=P*Ne,b=H-V-B,re=V-ce[0].startBytes,$=new DataView(_,re,B);if(z)x===$t.PlayCanvasCompressed&&g===At.ProgressiveToSplatArray&&(pi.parseSphericalHarmonicsToUncompressedSplatArraySection(Y.chunkElement,Y.shElement,C,C+P-1,$,0,l,Y.sphericalHarmonicsDegree,Se),C+=P);else{if(g===At.ProgressiveToSplatBuffer){const ie=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[l],Z=R*ie.BytesPerSplat+m;x===$t.PlayCanvasCompressed?pi.parseToUncompressedSplatBufferSection(Y.chunkElement,Y.vertexElement,0,P-1,R,$,S,Z):Ai.parseToUncompressedSplatBufferSection(Y,0,P-1,$,0,S,Z,l)}else x===$t.PlayCanvasCompressed?pi.parseToUncompressedSplatArraySection(Y.chunkElement,Y.vertexElement,0,P-1,R,$,Se):Ai.parseToUncompressedSplatArraySection(Y,0,P-1,$,0,Se,l);R+=P,g===At.ProgressiveToSplatBuffer&&(M||(Fe.writeSectionHeaderToBuffer({maxSplatCount:y,splatCount:R,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,S,Fe.HeaderSizeBytes),M=new Fe(S,!1)),M.updateLoadedCounts(1,R)),H>=W&&(z=!0)}if(b===0)ce=[];else{let ie=[],Z=0;for(let ae=ce.length-1;ae>=0;ae--){const te=ce[ae];if(Z+=te.sizeBytes,ie.unshift(te),Z>=b)break}ce=ie}N+=A,V+=B}s&&M&&s(M,de),de&&(g===At.ProgressiveToSplatBuffer?L.resolve(M):L.resolve(Se))}t&&t(j,fe,wt.Downloading)};return t&&t(0,"0%",wt.Downloading),ha(e,Oe,!1,c).then(()=>(t&&t(0,"0%",wt.Processing),L.promise.then(j=>{if(t&&t(100,"100%",wt.Done),g===At.DownloadBeforeProcessing){const fe=ce.map(me=>me.data);return new Blob(fe).arrayBuffer().then(me=>su.loadFromFileData(me,r,o,a,l,u,f,h,d))}else return g===At.ProgressiveToSplatBuffer?j:pn(()=>td(j,a,r,o,u,f,h,d))})))}static loadFromFileData(e,t,n,s,r=0,o,a,l,c){return s?pn(()=>Jf.parseToUncompressedSplatArray(e,r)).then(u=>td(u,s,t,n,o,a,l,c)):pn(()=>Jf.parseToUncompressedSplatBuffer(e,r))}}const Uy=i=>new ReadableStream({async start(e){e.enqueue(i),e.close()}});async function Oy(i){try{const e=Uy(i);if(!e)throw new Error("Failed to create stream from data");return await Ny(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function Ny(i){const e=i.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const zy=1347635022,Hy=1,ky=.15;function Vy(i){const e=i>>15&1,t=i>>10&31,n=i&1023,s=e===1?-1:1;return t===0?s*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:s*(1/0):s*Math.pow(2,t-15)*(1+n/1024)}function Gy(i){return(i-128)/128}function ls(i){switch(i){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${i}`),0}}const Wy=function(){let i=[];const e=new yt,t=ye.OFFSET.X,n=ye.OFFSET.Y,s=ye.OFFSET.Z,r=ye.OFFSET.SCALE0,o=ye.OFFSET.SCALE1,a=ye.OFFSET.SCALE2,l=ye.OFFSET.ROTATION0,c=ye.OFFSET.ROTATION1,u=ye.OFFSET.ROTATION2,f=ye.OFFSET.ROTATION3,h=ye.OFFSET.FDC0,d=ye.OFFSET.FDC1,g=ye.OFFSET.FDC2,A=ye.OFFSET.OPACITY,m=[ls(0),ls(1),ls(2),ls(3)],p=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(x,_,S){S=Math.min(_,S);const M=ye.createSplat(S);x.scale[0]!==void 0?(M[r]=x.scale[0],M[o]=x.scale[1],M[a]=x.scale[2]):(M[r]=.01,M[o]=.01,M[a]=.01),x.color[0]!==void 0?(M[h]=x.color[0],M[d]=x.color[1],M[g]=x.color[2]):i[RED]!==void 0?(M[h]=i[RED]*255,M[d]=i[GREEN]*255,M[g]=i[BLUE]*255):(M[h]=0,M[d]=0,M[g]=0),x.alpha!==void 0&&(M[A]=x.alpha),M[h]=_t(Math.floor(M[h]),0,255),M[d]=_t(Math.floor(M[d]),0,255),M[g]=_t(Math.floor(M[g]),0,255),M[A]=_t(Math.floor(M[A]),0,255);let w=m[S],y=m[_];for(let R=0;R<3;++R)for(let C=0;C<15;++C){const v=p[R*15+C];C<w&&C<y&&(M[ye.OFFSET.FRC0+v]=x.sh[R*y+C])}return e.set(x.rotation[3],x.rotation[0],x.rotation[1],x.rotation[2]),e.normalize(),M[l]=e.x,M[c]=e.y,M[u]=e.z,M[f]=e.w,M[t]=x.position[0],M[n]=x.position[1],M[s]=x.position[2],M}}();function Xy(i,e,t,n){return!(i.positions.length!==e*3*(n?2:3)||i.scales.length!==e*3||i.rotations.length!==e*3||i.alphas.length!==e||i.colors.length!==e*3||i.sh.length!==e*t*3)}function nd(i,e,t,n,s){e=Math.min(e,i.shDegree);const r=i.numPoints,o=ls(i.shDegree),a=i.positions.length===r*3*2;if(!Xy(i,r,o,a))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;a&&(c=new Uint16Array(i.positions.buffer,i.positions.byteOffset,r*3));const u=1/(1<<i.fractionalBits),f=ls(i.shDegree),h=.28209479177387814;for(let d=0;d<r;d++){if(a)for(let x=0;x<3;x++)l.position[x]=Vy(c[d*3+x]);else for(let x=0;x<3;x++){const _=d*9+x*3;let S=i.positions[_];S|=i.positions[_+1]<<8,S|=i.positions[_+2]<<16,S|=S&8388608?4278190080:0,l.position[x]=S*u}for(let x=0;x<3;x++)l.scale[x]=Math.exp(i.scales[d*3+x]/16-10);const g=i.rotations.subarray(d*3,d*3+3),A=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];l.rotation[0]=A[0],l.rotation[1]=A[1],l.rotation[2]=A[2];const m=A[0]*A[0]+A[1]*A[1]+A[2]*A[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(i.alphas[d]);for(let x=0;x<3;x++)l.color[x]=Math.floor(((i.colors[d*3+x]/255-.5)/ky*h+.5)*255);for(let x=0;x<3;x++)for(let _=0;_<f;_++)l.sh[x*f+_]=Gy(i.sh[f*3*d+_*3+x]);const p=Wy(l,i.shDegree,e);if(t){const x=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,_=d*x+s;Fe.writeSplatDataToSectionBuffer(p,n,_,0,e)}else n.addSplat(p)}}const qy=16,Qy=1e7;function Yy(i){const e=new DataView(i);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=qy,n.magic!==zy)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>Qy)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const s=n.numPoints,r=ls(n.shDegree),o=n.version===1,a={numPoints:s,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&Hy)!==0,positions:new Uint8Array(s*3*(o?2:3)),scales:new Uint8Array(s*3),rotations:new Uint8Array(s*3),alphas:new Uint8Array(s),colors:new Uint8Array(s*3),sh:new Uint8Array(s*r*3)};try{const l=new Uint8Array(i);let c=a.positions.length,u=t;if(a.positions.set(l.slice(u,u+c)),u+=c,a.alphas.set(l.slice(u,u+a.alphas.length)),u+=a.alphas.length,a.colors.set(l.slice(u,u+a.colors.length)),u+=a.colors.length,a.scales.set(l.slice(u,u+a.scales.length)),u+=a.scales.length,a.rotations.set(l.slice(u,u+a.rotations.length)),u+=a.rotations.length,a.sh.set(l.slice(u,u+a.sh.length)),u+a.sh.length!==i.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return a}async function Ky(i){try{const e=await Oy(i);return Yy(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class ru{static loadFromURL(e,t,n,s,r=!0,o=0,a,l,c,u,f){return t&&t(0,"0%",wt.Downloading),ha(e,t,!0,a).then(h=>(t&&t(0,"0%",wt.Processing),ru.loadFromFileData(h,n,s,r,o,l,c,u,f)))}static async loadFromFileData(e,t,n,s,r=0,o,a,l,c){await pn();const u=await Ky(e);r=Math.min(u.shDegree,r);const f=new ye(r);if(s)return nd(u,r,!1,f,0),Xr.getStandardGenerator(t,n,o,a,l,c).generateFromUncompressedSplatArray(f);{const{splatBuffer:h,splatBufferDataOffsetBytes:d}=Fe.preallocateUncompressed(u.numPoints,r);return nd(u,r,!0,h.bufferData,d),h}}}const ft=class ft{static parseToUncompressedSplatBufferSection(e,t,n,s,r,o){const a=Fe.CompressionLevels[0].BytesPerCenter,l=Fe.CompressionLevels[0].BytesPerScale,c=Fe.CompressionLevels[0].BytesPerRotation,u=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let f=e;f<=t;f++){const h=f*ft.RowSizeBytes+s,d=new Float32Array(n,h,3),g=new Float32Array(n,h+ft.CenterSizeBytes,3),A=new Uint8Array(n,h+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),m=new Uint8Array(n,h+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.RotationSizeBytes,4),p=new yt((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);p.normalize();const x=f*u+o,_=new Float32Array(r,x,3),S=new Float32Array(r,x+a,3),M=new Float32Array(r,x+a+l,4),w=new Uint8Array(r,x+a+l+c,4);_[0]=d[0],_[1]=d[1],_[2]=d[2],S[0]=g[0],S[1]=g[1],S[2]=g[2],M[0]=p.w,M[1]=p.x,M[2]=p.y,M[3]=p.z,w[0]=A[0],w[1]=A[1],w[2]=A[2],w[3]=A[3]}}static parseToUncompressedSplatArraySection(e,t,n,s,r){for(let o=e;o<=t;o++){const a=o*ft.RowSizeBytes+s,l=new Float32Array(n,a,3),c=new Float32Array(n,a+ft.CenterSizeBytes,3),u=new Uint8Array(n,a+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),f=new Uint8Array(n,a+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.RotationSizeBytes,4),h=new yt((f[1]-128)/128,(f[2]-128)/128,(f[3]-128)/128,(f[0]-128)/128);h.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],h.w,h.x,h.y,h.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ft.RowSizeBytes,n=new ye;for(let s=0;s<t;s++){const r=s*ft.RowSizeBytes,o=new Float32Array(e,r,3),a=new Float32Array(e,r+ft.CenterSizeBytes,3),l=new Uint8Array(e,r+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),c=new Uint8Array(e,r+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.ColorSizeBytes,4),u=new yt((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};xe(ft,"RowSizeBytes",32),xe(ft,"CenterSizeBytes",12),xe(ft,"ScaleSizeBytes",12),xe(ft,"RotationSizeBytes",4),xe(ft,"ColorSizeBytes",4);let is=ft;function id(i,e,t,n,s,r,o,a){return e?Xr.getStandardGenerator(t,n,s,r,o,a).generateFromUncompressedSplatArray(i):Fe.generateFromUncompressedSplatArrays([i],t,0,new F)}class ou{static loadFromURL(e,t,n,s,r,o,a=!0,l,c,u,f,h){let d=n?At.ProgressiveToSplatBuffer:At.ProgressiveToSplatArray;a&&(d=At.ProgressiveToSplatArray);const g=Fe.HeaderSizeBytes+Fe.SectionHeaderSizeBytes,A=Je.ProgressiveLoadSectionSize,m=1;let p,x,_,S=0,M=0,w;const y=Qc();let R=0,C=0,v=[];const D=(z,L,N,V)=>{const H=z>=100;if(N&&v.push(N),d===At.DownloadBeforeProcessing){H&&y.resolve(v);return}if(!V){if(n)throw new Ko("Cannon directly load .splat because no file size info is available.");d=At.DownloadBeforeProcessing;return}if(!p){S=V/is.RowSizeBytes,p=new ArrayBuffer(V);const W=Fe.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,k=g+W*S;d===At.ProgressiveToSplatBuffer?(x=new ArrayBuffer(k),Fe.writeHeaderToBuffer({versionMajor:Fe.CurrentMajorVersion,versionMinor:Fe.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:S,splatCount:M,compressionLevel:0,sceneCenter:new F},x)):w=new ye(0)}if(N){new Uint8Array(p,C,N.byteLength).set(new Uint8Array(N)),C+=N.byteLength;const W=C-R;if(W>A||H){const Y=(H?W:A)/is.RowSizeBytes,ce=M+Y;d===At.ProgressiveToSplatBuffer?is.parseToUncompressedSplatBufferSection(M,ce-1,p,0,x,g):is.parseToUncompressedSplatArraySection(M,ce-1,p,0,w),M=ce,d===At.ProgressiveToSplatBuffer&&(_||(Fe.writeSectionHeaderToBuffer({maxSplatCount:S,splatCount:M,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,x,Fe.HeaderSizeBytes),_=new Fe(x,!1)),_.updateLoadedCounts(1,M),s&&s(_,H)),R+=A}}H&&(d===At.ProgressiveToSplatBuffer?y.resolve(_):y.resolve(w)),t&&t(z,L,wt.Downloading)};return t&&t(0,"0%",wt.Downloading),ha(e,D,!1,l).then(()=>(t&&t(0,"0%",wt.Processing),y.promise.then(z=>(t&&t(100,"100%",wt.Done),d===At.DownloadBeforeProcessing?new Blob(v).arrayBuffer().then(L=>ou.loadFromFileData(L,r,o,a,c,u,f,h)):d===At.ProgressiveToSplatBuffer?z:pn(()=>id(z,a,r,o,c,u,f,h))))))}static loadFromFileData(e,t,n,s,r,o,a,l){return pn(()=>{const c=is.parseStandardSplatToUncompressedSplatArray(e);return id(c,s,t,n,r,o,a,l)})}}const Hs=class Hs{static checkVersion(e){const t=Fe.CurrentMajorVersion,n=Fe.CurrentMinorVersion,s=Fe.parseHeader(e);if(s.versionMajor===t&&s.versionMinor>=n||s.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${s.versionMajor}.${s.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,s,r){let o,a,l,c,u=!1,f=!1,h,d=[],g=!1,A=!1,m=0,p=0,x=0,_=!1,S=!1,M=!1,w=[];const y=Qc(),R=()=>{!u&&!f&&m>=Fe.HeaderSizeBytes&&(f=!0,new Blob(w).arrayBuffer().then(V=>{l=new ArrayBuffer(Fe.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(V,0,Fe.HeaderSizeBytes)),Hs.checkVersion(l),f=!1,u=!0,c=Fe.parseHeader(l),window.setTimeout(()=>{D()},1)}))};let C=0;const v=()=>{C===0&&(C++,window.setTimeout(()=>{C--,z()},1))},D=()=>{const N=()=>{A=!0,new Blob(w).arrayBuffer().then(H=>{A=!1,g=!0,h=new ArrayBuffer(c.maxSectionCount*Fe.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(H,Fe.HeaderSizeBytes,c.maxSectionCount*Fe.SectionHeaderSizeBytes)),d=Fe.parseSectionHeaders(c,h,0,!1);let W=0;for(let Y=0;Y<c.maxSectionCount;Y++)W+=d[Y].storageSizeBytes;const k=Fe.HeaderSizeBytes+c.maxSectionCount*Fe.SectionHeaderSizeBytes+W;if(!o){o=new ArrayBuffer(k);let Y=0;for(let ce=0;ce<w.length;ce++){const Se=w[ce];new Uint8Array(o,Y,Se.byteLength).set(new Uint8Array(Se)),Y+=Se.byteLength}}x=Fe.HeaderSizeBytes+Fe.SectionHeaderSizeBytes*c.maxSectionCount;for(let Y=0;Y<=d.length&&Y<c.maxSectionCount;Y++)x+=d[Y].storageSizeBytes;v()})};!A&&!g&&u&&m>=Fe.HeaderSizeBytes+Fe.SectionHeaderSizeBytes*c.maxSectionCount&&N()},z=()=>{if(M)return;M=!0;const N=()=>{if(M=!1,g){if(S)return;if(_=m>=x,m-p>Je.ProgressiveLoadSectionSize||_){p+=Je.ProgressiveLoadSectionSize,S=p>=x,a||(a=new Fe(o,!1));const H=Fe.HeaderSizeBytes+Fe.SectionHeaderSizeBytes*c.maxSectionCount;let W=0,k=0,Y=0;for(let Ie=0;Ie<c.maxSectionCount;Ie++){const Oe=d[Ie],j=W+Oe.partiallyFilledBucketCount*4+Oe.bucketStorageSizeBytes*Oe.bucketCount,fe=H+j;if(p>=fe){k++;const me=p-fe,Ne=Fe.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[Oe.sphericalHarmonicsDegree].BytesPerSplat;let Ee=Math.floor(me/Ne);Ee=Math.min(Ee,Oe.maxSplatCount),Y+=Ee,a.updateLoadedCounts(k,Y),a.updateSectionLoadedCounts(Ie,Ee)}else break;W+=Oe.storageSizeBytes}s(a,S);const ce=p/x*100,Se=ce.toFixed(2)+"%";t&&t(ce,Se,wt.Downloading),S?y.resolve(a):z()}}};window.setTimeout(N,Je.ProgressiveLoadSectionDelayDuration)};return ha(e,(N,V,H)=>{H&&(w.push(H),o&&new Uint8Array(o,m,H.byteLength).set(new Uint8Array(H)),m+=H.byteLength),n?(R(),D(),z()):t&&t(N,V,wt.Downloading)},!n,r).then(N=>(t&&t(0,"0%",wt.Processing),(n?y.promise:Hs.loadFromFileData(N)).then(H=>(t&&t(100,"100%",wt.Done),H))))}static loadFromFileData(e){return pn(()=>(Hs.checkVersion(e),new Fe(e)))}};xe(Hs,"downloadFile",function(){let e;return function(t,n){const s=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(s),e.click()}}());let fc=Hs;const on={Splat:0,KSplat:1,Ply:2,Spz:3},sd=i=>i.endsWith(".ply")?on.Ply:i.endsWith(".splat")?on.Splat:i.endsWith(".ksplat")?on.KSplat:i.endsWith(".spz")?on.Spz:null,rd={type:"change"},ol={type:"start"},od={type:"end"},Mo=new Nh,ad=new Ii,jy=Math.cos(70*Lh.DEG2RAD);class To extends ms{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Q),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(rd),n.update(),r=s.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const U=new F,ue=new yt().setFromUnitVectors(e.up,new F(0,1,0)),De=ue.clone().invert(),ge=new F,Ue=new yt,Ve=new F,et=2*Math.PI;return function(){ue.setFromUnitVectors(e.up,new F(0,1,0)),De.copy(ue).invert();const Me=n.object.position;U.copy(Me).sub(n.target),U.applyQuaternion(ue),a.setFromVector3(U),n.autoRotate&&r===s.NONE&&D(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let se=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(se)&&isFinite(le)&&(se<-Math.PI?se+=et:se>Math.PI&&(se-=et),le<-Math.PI?le+=et:le>Math.PI&&(le-=et),se<=le?a.theta=Math.max(se,Math.min(le,a.theta)):a.theta=a.theta>(se+le)/2?Math.max(se,a.theta):Math.min(le,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(De),Me.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let we=!1;if(n.zoomToCursor&&w){let Ce=null;if(n.object.isPerspectiveCamera){const We=U.length();Ce=Y(We*c);const pt=We-Ce;n.object.position.addScaledVector(S,pt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const We=new F(M.x,M.y,0);We.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),we=!0;const pt=new F(M.x,M.y,0);pt.unproject(n.object),n.object.position.sub(pt).add(We),n.object.updateMatrixWorld(),Ce=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<jy?e.lookAt(n.target):(ad.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(ad,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),we=!0);return c=1,w=!1,we||ge.distanceToSquared(n.object.position)>o||8*(1-Ue.dot(n.object.quaternion))>o||Ve.distanceToSquared(n.target)>0?(n.dispatchEvent(rd),ge.copy(n.object.position),Ue.copy(n.object.quaternion),Ve.copy(n.target),we=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_e),n.domElement.removeEventListener("pointerdown",Z),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",O),n.domElement.removeEventListener("pointermove",ae),n.domElement.removeEventListener("pointerup",te),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Q),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new pf,l=new pf;let c=1;const u=new F,f=new Le,h=new Le,d=new Le,g=new Le,A=new Le,m=new Le,p=new Le,x=new Le,_=new Le,S=new F,M=new Le;let w=!1;const y=[],R={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function D(U){l.theta-=U}function z(U){l.phi-=U}const L=function(){const U=new F;return function(De,ge){U.setFromMatrixColumn(ge,0),U.multiplyScalar(-De),u.add(U)}}(),N=function(){const U=new F;return function(De,ge){n.screenSpacePanning===!0?U.setFromMatrixColumn(ge,1):(U.setFromMatrixColumn(ge,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(De),u.add(U)}}(),V=function(){const U=new F;return function(De,ge){const Ue=n.domElement;if(n.object.isPerspectiveCamera){const Ve=n.object.position;U.copy(Ve).sub(n.target);let et=U.length();et*=Math.tan(n.object.fov/2*Math.PI/180),L(2*De*et/Ue.clientHeight,n.object.matrix),N(2*ge*et/Ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(De*(n.object.right-n.object.left)/n.object.zoom/Ue.clientWidth,n.object.matrix),N(ge*(n.object.top-n.object.bottom)/n.object.zoom/Ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(U){if(!n.zoomToCursor)return;w=!0;const ue=n.domElement.getBoundingClientRect(),De=U.clientX-ue.left,ge=U.clientY-ue.top,Ue=ue.width,Ve=ue.height;M.x=De/Ue*2-1,M.y=-(ge/Ve)*2+1,S.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function Y(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function ce(U){f.set(U.clientX,U.clientY)}function Se(U){k(U),p.set(U.clientX,U.clientY)}function Ie(U){g.set(U.clientX,U.clientY)}function Oe(U){h.set(U.clientX,U.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ue=n.domElement;D(2*Math.PI*d.x/ue.clientHeight),z(2*Math.PI*d.y/ue.clientHeight),f.copy(h),n.update()}function j(U){x.set(U.clientX,U.clientY),_.subVectors(x,p),_.y>0?H(v()):_.y<0&&W(v()),p.copy(x),n.update()}function fe(U){A.set(U.clientX,U.clientY),m.subVectors(A,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(A),n.update()}function me(U){k(U),U.deltaY<0?W(v()):U.deltaY>0&&H(v()),n.update()}function de(U){let ue=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ue=!0;break}ue&&(U.preventDefault(),n.update())}function be(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),ue=.5*(y[0].pageY+y[1].pageY);f.set(U,ue)}}function Ne(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),ue=.5*(y[0].pageY+y[1].pageY);g.set(U,ue)}}function Ee(){const U=y[0].pageX-y[1].pageX,ue=y[0].pageY-y[1].pageY,De=Math.sqrt(U*U+ue*ue);p.set(0,De)}function je(){n.enableZoom&&Ee(),n.enablePan&&Ne()}function P(){n.enableZoom&&Ee(),n.enableRotate&&be()}function B(U){if(y.length==1)h.set(U.pageX,U.pageY);else{const De=pe(U),ge=.5*(U.pageX+De.x),Ue=.5*(U.pageY+De.y);h.set(ge,Ue)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ue=n.domElement;D(2*Math.PI*d.x/ue.clientHeight),z(2*Math.PI*d.y/ue.clientHeight),f.copy(h)}function b(U){if(y.length===1)A.set(U.pageX,U.pageY);else{const ue=pe(U),De=.5*(U.pageX+ue.x),ge=.5*(U.pageY+ue.y);A.set(De,ge)}m.subVectors(A,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(A)}function re(U){const ue=pe(U),De=U.pageX-ue.x,ge=U.pageY-ue.y,Ue=Math.sqrt(De*De+ge*ge);x.set(0,Ue),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),H(_.y),p.copy(x)}function $(U){n.enableZoom&&re(U),n.enablePan&&b(U)}function ie(U){n.enableZoom&&re(U),n.enableRotate&&B(U)}function Z(U){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",ae),n.domElement.addEventListener("pointerup",te)),he(U),U.pointerType==="touch"?J(U):T(U))}function ae(U){n.enabled!==!1&&(U.pointerType==="touch"?K(U):E(U))}function te(U){ve(U),y.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",ae),n.domElement.removeEventListener("pointerup",te)),n.dispatchEvent(od),r=s.NONE}function T(U){let ue;switch(U.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Ss.DOLLY:if(n.enableZoom===!1)return;Se(U),r=s.DOLLY;break;case Ss.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;Ie(U),r=s.PAN}else{if(n.enableRotate===!1)return;ce(U),r=s.ROTATE}break;case Ss.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ce(U),r=s.ROTATE}else{if(n.enablePan===!1)return;Ie(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ol)}function E(U){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Oe(U);break;case s.DOLLY:if(n.enableZoom===!1)return;j(U);break;case s.PAN:if(n.enablePan===!1)return;fe(U);break}}function O(U){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(U.preventDefault(),n.dispatchEvent(ol),me(U),n.dispatchEvent(od))}function Q(U){n.enabled===!1||n.enablePan===!1||de(U)}function J(U){switch(He(U),y.length){case 1:switch(n.touches.ONE){case xs.ROTATE:if(n.enableRotate===!1)return;be(),r=s.TOUCH_ROTATE;break;case xs.PAN:if(n.enablePan===!1)return;Ne(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case xs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;je(),r=s.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ol)}function K(U){switch(He(U),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;B(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;b(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(U),n.update();break;default:r=s.NONE}}function _e(U){n.enabled!==!1&&U.preventDefault()}function he(U){y.push(U)}function ve(U){delete R[U.pointerId];for(let ue=0;ue<y.length;ue++)if(y[ue].pointerId==U.pointerId){y.splice(ue,1);return}}function He(U){let ue=R[U.pointerId];ue===void 0&&(ue=new Le,R[U.pointerId]=ue),ue.set(U.pageX,U.pageY)}function pe(U){const ue=U.pointerId===y[0].pointerId?y[1]:y[0];return R[ue.pointerId]}n.domElement.addEventListener("contextmenu",_e),n.domElement.addEventListener("pointerdown",Z),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",O,{passive:!1}),this.update()}}const $y=(i,e,t,n,s)=>{const r=performance.now();let o=i.style.display==="none"?0:parseFloat(i.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-r;let u=Math.min(c/n,1);u>.999&&(u=1);let f;e?(f=(1-u)*o,f<1e-4&&(f=0)):f=(1-o)*u+o,f>0?(i.style.display=t,i.style.opacity=f):i.style.display="none",u>=1&&(s&&s(),window.clearInterval(a))},16);return a},Zy=500,Zo=class Zo{constructor(e,t){this.taskIDGen=0,this.elementID=Zo.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(s,r,o,a,l)=>{o?s.style.display=r?a:"none":this.fadeTransitions[l]=$y(s,!r,a,Zy,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};xe(Zo,"elementIDGen",0);let dc=Zo;class Jy{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class eE{constructor(e){xe(this,"update",function(e,t,n,s,r,o,a,l,c,u,f,h,d,g){const A=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==A&&(this.infoCells.cameraPosition.innerHTML=A),n){const p=n,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==x&&(this.infoCells.cameraLookAt.innerHTML=x)}const m=`${s.x.toFixed(5)}, ${s.y.toFixed(5)}, ${s.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",o){const p=o,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=x}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${f.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${h.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${d.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const s=document.createElement("div");s.style.display="table";for(let r of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${r[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),s.appendChild(o)}this.infoPanel.appendChild(s),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const ld=new F;class tE extends Pt{constructor(e=new F(0,0,1),t=new F(0,0,0),n=1,s=.1,r=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new Hr(s,s,n,32);l.translate(0,n/2,0);const c=new Hr(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new Tt(l,new hs({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(c,new hs({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ld.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ld,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class br{constructor(e){xe(this,"updateFocusMarker",function(){const e=new F,t=new Xe,n=new F;return function(s,r,o){t.copy(r.matrixWorld).invert(),e.copy(s).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(s);const a=n.length();this.focusMarker.position.copy(s),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(s),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());xe(this,"positionAndOrientControlPlane",function(){const e=new yt,t=new F(0,1,0);return function(n,s){e.setFromUnitVectors(t,s),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Ni(e,t,{format:Zt,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Gc(e,t),this.splatRenderTarget.depthTexture.format=us,this.splatRenderTarget.depthTexture.type=Mn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new An({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:vh,blendSrc:Ur,blendSrcAlpha:Ur,blendDst:Or,blendDstAlpha:Or});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Tt(new sr(2,2),t),this.renderTargetCopyCamera=new Xc(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Ns(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Wc(.5,1.5,32),t=new hs({color:16777215}),n=new Tt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const s=new Tt(e,t);s.position.set(0,-1,0);const r=new Tt(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);const o=new Tt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new Pt,this.meshCursor.add(n),this.meshCursor.add(s),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Ns(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Yo(.5,32,32),t=br.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Tt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Ns(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new sr(1,1);e.rotateX(-Math.PI/2);const t=new hs({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=Cn;const n=new Tt(e,t),s=new F(0,1,0);s.normalize();const r=new F(0,0,0),o=.5,a=.01,l=56576,c=new tE(s,r,o,a,l,.1,.03);this.controlPlane=new Pt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Ns(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Ns(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Yo(1,32,32),n=new Pt,s=(r,o)=>{let a=new Tt(t,br.buildDebugMaterial(r));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return s(16711680,[-50,0,0]),s(16711680,[50,0,0]),s(65280,[0,0,-50]),s(65280,[0,0,50]),s(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ar(3,3,3),n=new Pt;let s=12303291;const r=a=>{let l=new Tt(t,br.buildDebugMaterial(s));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return r([-10,0,-10]),r([-10,0,o]),r([o,0,-10]),r([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,s={color:{type:"v3",value:new st(e)}},r=new An({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:jn});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,s={color:{type:"v3",value:new st(e)},realFocusPosition:{type:"v3",value:new F},viewport:{type:"v2",value:new Le},opacity:{value:0}};return new An({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:jn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const nE=new F(1,0,0),iE=new F(0,1,0),sE=new F(0,0,1);class al{constructor(e=new F,t=new F){xe(this,"intersectBox",function(){const e=new F,t=[],n=[],s=[];return function(r,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,s[0]=this.direction.x,s[1]=this.direction.y,s[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(s[a]==0)continue;const l=a==0?nE:a==1?iE:sE,c=s[a]<0?r.max:r.min;let u=-Math.sign(s[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let f=t[0]-n[a];if(f*u<0){const h=(a+1)%3,d=(a+2)%3;if(t[2]=s[h]/s[a]*f+n[h],t[1]=s[d]/s[a]*f+n[d],e.set(t[a],t[d],t[h]),this.boxContainsPoint(r,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());xe(this,"intersectSphere",function(){const e=new F;return function(t,n,s){e.copy(t).sub(this.origin);const r=e.dot(this.direction),o=r*r,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),f=r-u,h=r+u;if(h<0)return!1;let d=f<0?h:f;return s&&(s.origin.copy(this.origin).addScaledVector(this.direction,d),s.normal.copy(s.origin).sub(t).normalize(),s.distance=d),!0}}());this.origin=new F,this.direction=new F,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class au{constructor(){this.origin=new F,this.normal=new F,this.distance=0,this.splatIndex=0}set(e,t,n,s){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=s}clone(){const e=new au;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const fi={ThreeD:0,TwoD:1};class rE{constructor(e,t,n=!1){xe(this,"setFromCameraAndScreenPosition",function(){const e=new Le;return function(t,n,s){if(e.x=n.x/s.x*2-1,e.y=(s.y-n.y)/s.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());xe(this,"intersectSplatMesh",function(){const e=new Xe,t=new Xe,n=new Xe,s=new al,r=new F;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),s.origin.copy(this.ray.origin).applyMatrix4(e),s.direction.copy(this.ray.origin).add(this.ray.direction),s.direction.applyMatrix4(e).sub(s.origin).normalize();const f=[];u.rootNode&&this.castRayAtSplatTreeNode(s,l,u.rootNode,f),f.forEach(h=>{h.origin.applyMatrix4(t),h.normal.applyMatrix4(t).normalize(),h.distance=r.copy(h.origin).sub(this.ray.origin).length()}),a.push(...f)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());xe(this,"castRayAtSplatTreeNode",function(){const e=new vt,t=new F,n=new F,s=new yt,r=new au,o=1e-7,a=new F(0,0,0),l=new Xe,c=new Xe,u=new Xe,f=new Xe,h=new Xe,d=new al;return function(g,A,m,p=[]){if(g.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let x=0;x<m.data.indexes.length;x++){const _=m.data.indexes[x],S=A.splatMesh.getSceneIndexForSplat(_);if(A.splatMesh.getScene(S).visible&&(A.splatMesh.getSplatColor(_,e),A.splatMesh.getSplatCenter(_,t),A.splatMesh.getSplatScaleAndRotation(_,n,s),!(n.x<=o||n.y<=o||A.splatMesh.splatRenderMode===fi.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(s);const w=Math.log10(e.w)*2;if(l.makeScale(w,w,w),h.copy(l).multiply(u).multiply(c),f.copy(h).invert(),d.origin.copy(g.origin).sub(t).applyMatrix4(f),d.direction.copy(g.origin).add(g.direction).sub(t),d.direction.applyMatrix4(f).sub(d.origin).normalize(),d.intersectSphere(a,1,r)){const y=r.clone();y.splatIndex=_,y.origin.applyMatrix4(h).add(t),p.push(y)}}else{let w=n.x+n.y,y=2;if(A.splatMesh.splatRenderMode===fi.ThreeD&&(w+=n.z,y=3),w=w/y,g.intersectSphere(t,w,r)){const R=r.clone();R.splatIndex=_,p.push(R)}}}if(m.children&&m.children.length>0)for(let x of m.children)this.castRayAtSplatTreeNode(g,A,x,p);return p}}}());this.ray=new al(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Ys{static buildVertexShaderBase(e=!1,t=!1,n=0,s=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${Je.MaxScenes}];
            uniform int sceneVisibility[${Je.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${Je.MaxScenes}];
        `),r+=`
        ${s}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Je.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Je.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?r+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:r+="mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?r+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:r+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,s=1,r=!1){const o={sceneCenter:{type:"v3",value:new F},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Le},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Le},basisViewport:{type:"v2",value:new Le},debugColor:{type:"v3",value:new st},centersColorsTextureSize:{type:"v2",value:new Le(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Le(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:s},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Le(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<Je.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(Je.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<Je.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<Je.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<Je.MaxScenes;l++)a.push(new Xe);o.transforms={type:"mat4",value:a}}return o}}class jo{static build(e=!1,t=!1,n=!1,s=2048,r=1,o=!1,a=0,l=.3){let u=Ys.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=jo.buildVertexShaderProjection(n,t,s,l);const f=jo.buildFragmentShader(),h=Ys.getUniforms(e,t,a,r,o);return h.covariancesTextureSize={type:"v2",value:new Le(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new An({uniforms:h,vertexShader:u,fragmentShader:f,transparent:!0,alphaTest:1,blending:Ui,depthTest:!0,depthWrite:!1,side:Cn})}static buildVertexShaderProjection(e,t,n,s){let r=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?r+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:r+=`
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
            `,r+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(r+=`
                vColor.a *= splatOpacityFromScene;
            `),r+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,r+=Ys.getVertexShaderFadeIn(),r+="}",r}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class $o{static build(e=!1,t=!1,n=1,s=!1,r=0){let a=Ys.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=$o.buildVertexShaderProjection();const l=$o.buildFragmentShader(),c=Ys.getUniforms(e,t,r,n,s);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Le(1024,1024)},new An({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Ui,depthTest:!0,depthWrite:!1,side:Cn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Ys.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class oE{static build(e){const t=new wn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),s=new Tn(n,3);t.setAttribute("position",s),s.setXYZ(0,-1,-1,0),s.setXYZ(1,-1,1,0),s.setXYZ(2,1,1,0),s.setXYZ(3,1,-1,0),s.needsUpdate=!0;const r=new pA().copy(t),o=new Uint32Array(e),a=new cA(o,1,!1);return a.setUsage(R0),r.setAttribute("splatIndex",a),r.instanceCount=0,r}}class aE extends Pt{constructor(e,t=new F,n=new yt,s=new F(1,1,1),r=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(s),this.transform=new Xe,this.minimumAlpha=r,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const Jo=class Jo{constructor(e,t,n,s){this.min=new F().copy(e),this.max=new F().copy(t),this.boundingBox=new Xn(this.min,this.max),this.center=new F().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=s||Jo.idGen++}};xe(Jo,"idGen",0);let hc=Jo;class wr{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new F,this.sceneMin=new F,this.sceneMax=new F,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new F().fromArray(e.min),n=new F().fromArray(e.max),s=new hc(t,n,e.depth,e.id);if(e.data.indexes){s.data={indexes:[]};for(let r of e.data.indexes)s.data.indexes.push(r)}if(e.children)for(let r of e.children)s.children.push(wr.convertWorkerSubTreeNode(r));return s}static convertWorkerSubTree(e,t){const n=new wr(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new F().fromArray(e.sceneMin),n.sceneMax=new F().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=wr.convertWorkerSubTreeNode(e.rootNode);const s=(r,o)=>{r.children.length===0&&o(r);for(let a of r.children)s(a,o)};return n.nodesWithIndexes=[],s(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}}function lE(i){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class s{constructor(l,c,u,f){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=f||e++}}processSplatTreeNode=function(a,l,c,u){const f=l.data.indexes.length;if(f<a.maxCentersPerNode||l.depth>a.maxDepth){const x=[];for(let _=0;_<l.data.indexes.length;_++)a.addedIndexes[l.data.indexes[_]]||(x.push(l.data.indexes[_]),a.addedIndexes[l.data.indexes[_]]=!0);l.data.indexes=x,l.data.indexes.sort((_,S)=>_>S?1:-1),a.nodesWithIndexes.push(l);return}const h=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],d=[h[0]*.5,h[1]*.5,h[2]*.5],g=[l.min[0]+d[0],l.min[1]+d[1],l.min[2]+d[2]],A=[new t([g[0]-d[0],g[1],g[2]-d[2]],[g[0],g[1]+d[1],g[2]]),new t([g[0],g[1],g[2]-d[2]],[g[0]+d[0],g[1]+d[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+d[0],g[1]+d[1],g[2]+d[2]]),new t([g[0]-d[0],g[1],g[2]],[g[0],g[1]+d[1],g[2]+d[2]]),new t([g[0]-d[0],g[1]-d[1],g[2]-d[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-d[1],g[2]-d[2]],[g[0]+d[0],g[1],g[2]]),new t([g[0],g[1]-d[1],g[2]],[g[0]+d[0],g[1],g[2]+d[2]]),new t([g[0]-d[0],g[1]-d[1],g[2]],[g[0],g[1],g[2]+d[2]])],m=[];for(let x=0;x<A.length;x++)m[x]=[];const p=[0,0,0];for(let x=0;x<f;x++){const _=l.data.indexes[x],S=c[_];p[0]=u[S],p[1]=u[S+1],p[2]=u[S+2];for(let M=0;M<A.length;M++)A[M].containsPoint(p)&&m[M].push(_)}for(let x=0;x<A.length;x++){const _=new s(A[x].min,A[x].max,l.depth+1);_.data={indexes:m[x]},l.children.push(_)}l.data={};for(let x of l.children)processSplatTreeNode(a,x,c,u)};const r=(a,l,c)=>{const u=[0,0,0],f=[0,0,0],h=[],d=Math.floor(a.length/4);for(let A=0;A<d;A++){const m=A*4,p=a[m],x=a[m+1],_=a[m+2],S=Math.round(a[m+3]);(A===0||p<u[0])&&(u[0]=p),(A===0||p>f[0])&&(f[0]=p),(A===0||x<u[1])&&(u[1]=x),(A===0||x>f[1])&&(f[1]=x),(A===0||_<u[2])&&(u[2]=_),(A===0||_>f[2])&&(f[2]=_),h.push(S)}const g=new n(l,c);return g.sceneMin=u,g.sceneMax=f,g.rootNode=new s(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:h},g};function o(a,l,c){const u=[];for(let h of a){const d=Math.floor(h.length/4);for(let g=0;g<d;g++){const A=g*4,m=Math.round(h[A+3]);u[m]=A}}const f=[];for(let h of a){const d=r(h,l,c);f.push(d),processSplatTreeNode(d,d.rootNode,u,h)}i.postMessage({subTrees:f})}i.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function cE(i,e,t,n,s){i.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:s}},t)}function uE(){return new Worker(URL.createObjectURL(new Blob(["(",lE.toString(),")(self)"],{type:"application/javascript"})))}class fE{constructor(e,t){xe(this,"processSplatMesh",function(e,t=()=>!0,n,s){this.splatTreeWorker||(this.splatTreeWorker=uE()),this.splatMesh=e,this.subTrees=[];const r=new F,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let f=0;f<l;f++){const h=f+a;if(t(h)){e.getSplatCenter(h,r);const d=u*4;c[d]=r.x,c[d+1]=r.y,c[d+2]=r.z,c[d+3]=h,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),pn(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let f=0;f<e.scenes.length;f++){const d=e.getScene(f).splatBuffer.getSplatCount(),g=o(u,d);c.push(g),u+=d}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(s&&s(!1),pn(()=>{if(!l()){for(let f of u.data.subTrees){const h=wr.convertWorkerSubTree(f,e);this.subTrees.push(h)}this.diposeSplatTreeWorker(),s&&s(!0),pn(()=>{a()})}}))},pn(()=>{if(l())return;n&&n(!0);const u=c.map(f=>f.buffer);cE(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,s)=>{n.children.length===0&&s(n);for(let r of n.children)t(r,s)};for(let n of this.subTrees)t(n.rootNode,e)}}function dE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hE(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,S=o||e.has("OES_texture_float"),M=_&&S,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:w}}const Rr={Default:0,Instant:2},Ks={None:0,Info:3},cd=new wn,pE=new hs,bo=6,mE=4,gE=4,AE=4,SE=6,xE=8,ll=4,cl=4,ud=1,_E=.012,vE=.003,fd=1,dd=16777216;class Nt extends Tt{constructor(t=fi.ThreeD,n=!1,s=!1,r=!1,o=1,a=!0,l=!1,c=!1,u=1024,f=Ks.None,h=0,d=1,g=.3){super(cd,pE);xe(this,"buildSplatTree",function(t=[],n,s){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new fE(8,1e3);const o=performance.now(),a=new vt;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},n,s).then(()=>{const l=performance.now()-o;if(this.logLevel>=Ks.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,f=0;this.splatTree.visitLeaves(h=>{const d=h.data.indexes.length;d>0&&(u+=d,f++,c++)}),this.logLevel>=Ks.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/f,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})});xe(this,"updateUniforms",function(){const t=new Le;return function(n,s,r,o,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(s,r),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=_t(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());xe(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const s=this.lastRenderer!==this.renderer,r=t!==n;if(!s&&!r)return;s?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(d,g,A)=>{const m=d.createShader(g);if(!m)return console.error("Fatal error: gl could not create a shader object."),null;if(d.shaderSource(m,A),d.compileShader(m),!d.getShaderParameter(m,d.COMPILE_STATUS)){let x="unknown";g===d.VERTEX_SHADER?x="vertex shader":g===d.FRAGMENT_SHADER&&(x="fragement shader");const _=d.getShaderInfoLog(m);return console.error("Failed to compile "+x+" with these errors:"+_),d.deleteShader(m),null}return m};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),f=o.getParameter(o.CURRENT_PROGRAM),h=f?o.getProgramParameter(f,o.DELETE_STATUS):!1;if(s&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),s){const d=o.createProgram(),g=a(o,o.VERTEX_SHADER,l),A=a(o,o.FRAGMENT_SHADER,c);if(!g||!A)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(d,g),o.attachShader(d,A),o.transformFeedbackVaryings(d,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(d),!o.getProgramParameter(d,o.LINK_STATUS)){const p=o.getProgramInfoLog(d);throw console.error("Fatal error: Failed to link program: "+p),o.deleteProgram(d),o.deleteShader(A),o.deleteShader(g),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=d,this.distancesTransformFeedback.vertexShader=g,this.distancesTransformFeedback.vertexShader=A}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let d=0;d<this.scenes.length;d++)this.distancesTransformFeedback.transformsLocs[d]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${d}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(s||r)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(s||r)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),s&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),f&&h!==!0&&o.useProgram(f),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());xe(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let s=0;s<this.scenes.length;s++){const o=this.getScene(s).transform.elements;for(let a=0;a<16;a++)t[s*16+a]=o[a]}n.set(t)}}());xe(this,"computeDistancesOnGPU",function(){const t=new Xe;return function(n,s){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING),a=r.getParameter(r.CURRENT_PROGRAM),l=a?r.getProgramParameter(a,r.DELETE_STATUS):!1;if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let f=0;f<this.scenes.length;f++)if(t.copy(this.getScene(f).transform),t.premultiply(n),this.integerBasedDistancesComputation){const h=Nt.getIntegerMatrixArray(t),d=[h[2],h[6],h[10],h[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[f],d[0],d[1],d[2],d[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[f],!1,t.elements);else if(this.integerBasedDistancesComputation){const f=Nt.getIntegerMatrixArray(n),h=[f[2],f[6],f[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}else{const f=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,f[0],f[1],f[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const c=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const u=new Promise(f=>{const h=()=>{if(this.disposed)f();else switch(r.clientWaitSync(c,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(h),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(c);const m=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,s),r.bindBuffer(r.ARRAY_BUFFER,null),m&&r.bindVertexArray(m),f()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(h)});return a&&l!==!0&&r.useProgram(a),o&&r.bindVertexArray(o),u}}());xe(this,"getSplatCenter",function(){const t={};return function(n,s,r){this.getLocalSplatParameters(n,t,r),t.splatBuffer.getSplatCenter(t.localIndex,s,t.sceneTransform)}}());xe(this,"getSplatScaleAndRotation",function(){const t={},n=new F;return function(s,r,o,a){this.getLocalSplatParameters(s,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===fi.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,r,o,t.sceneTransform,n)}}());xe(this,"getSplatColor",function(){const t={};return function(n,s){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,s)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=s,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=g,this.maxScreenSpaceSplatSize=u,this.logLevel=f,this.sphericalHarmonicsDegree=h,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=d,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Xn,this.calculatedSceneCenter=new F,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,s){const r=[];r.length=n.length;for(let o=0;o<n.length;o++){const a=n[o],l=s[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],f=l.scale||[1,1,1];const h=new F().fromArray(c),d=new yt().fromArray(u),g=new F().fromArray(f),A=Nt.createScene(a,h,d,g,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(A),r[o]=A}return r}static createScene(t,n,s,r,o,a=1,l=!0){return new aE(t,n,s,r,o,a,l)}static buildSplatIndexMaps(t){const n=[],s=[];let r=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)n[r]=c,s[r]=o,r++}return{localSplatIndexMap:n,sceneIndexMap:s}}build(t,n,s=!0,r=!1,o,a,l=!0){this.sceneOptions=n,this.finalBuild=r;const c=Nt.getTotalMaxSplatCountForSplatBuffers(t),u=Nt.buildScenes(this,t,n);if(s)for(let m=0;m<this.scenes.length&&m<u.length;m++){const p=u[m],x=this.getScene(m);p.copyTransformData(x)}this.scenes=u;let f=3;for(let m of t){const p=m.getMinSphericalHarmonicsDegree();p<f&&(f=p)}this.minSphericalHarmonicsDegree=Math.min(f,this.sphericalHarmonicsDegree);let h=!1;if(t.length!==this.lastBuildScenes.length)h=!0;else for(let m=0;m<t.length;m++)if(t[m]!==this.lastBuildScenes[m].splatBuffer){h=!0;break}let d=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||h)&&(d=!1),!d){this.boundingBox=new Xn,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=oE.build(c),this.splatRenderMode===fi.ThreeD?this.material=jo.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=$o.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const m=Nt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=m.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=m.sceneIndexMap}const g=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const A=this.refreshGPUDataFromSplatBuffers(d);for(let m=0;m<this.scenes.length;m++)this.lastBuildScenes[m]=this.scenes[m];return this.lastBuildSplatCount=g,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(m=>m.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,A}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Xn,this.calculatedSceneCenter=new F,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==cd&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const s=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),r=this.getSceneIndexes(t,n);return{centers:s,sceneIndexes:r}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const s=t?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(s,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,o,t),{from:s,to:n-1,count:n-s,centers:r,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,s=!1){const r=s?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(s,t,r),this.updateGPUTransformIndexesBufferForDistancesComputation(s,n,r)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),s=this.lastBuildSplatCount,r=n-1;t?this.updateBaseDataFromSplatBuffers(s,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(s,r),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const s=(R,C)=>{const v=new Le(4096,1024);for(;v.x*v.y*R<t*C;)v.y*=2;return v},r=R=>R>=1?SE:gE,o=R=>{const C=r(R),v=s(C,6);return{elementsPerTexelStored:C,texSize:v}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,f,h;if(this.splatRenderMode===fi.ThreeD){const R=o(a);R.texSize.x*R.texSize.y>dd&&a===0&&(a=1),u=new Float32Array(t*bo)}else f=new Float32Array(t*3),h=new Float32Array(t*4);const d=new Float32Array(t*3),g=new Uint8Array(t*4);let A=Float32Array;c===1?A=Uint16Array:c===2&&(A=Uint8Array);const m=Qs(this.minSphericalHarmonicsDegree),p=this.minSphericalHarmonicsDegree?new A(t*m):void 0,x=s(cl,4),_=new Uint32Array(x.x*x.y*cl);Nt.updateCenterColorsPaddedData(0,n-1,d,g,_);const S=new Ti(_,x.x,x.y,Xs,Mn);if(S.internalFormat="RGBA32UI",S.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=S,this.material.uniforms.centersColorsTextureSize.value.copy(x),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:f,rotations:h,centers:d,colors:g,sphericalHarmonics:p},centerColors:{data:_,texture:S,size:x}},this.splatRenderMode===fi.ThreeD){const R=o(a),C=R.elementsPerTexelStored,v=R.texSize;let D=a>=1?Uint32Array:Float32Array;const z=a>=1?xE:AE,L=new D(v.x*v.y*z);a===0?L.set(u):Nt.updatePaddedCompressedCovariancesTextureData(u,L,0,0,u.length);let N;if(a>=1)N=new Ti(L,v.x,v.y,Xs,Mn),N.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=N;else{N=new Ti(L,v.x,v.y,Zt,On),this.material.uniforms.covariancesTexture.value=N;const V=new Ti(new Uint32Array(32),2,2,Xs,Mn);V.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=V,V.needsUpdate=!0}N.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(v),this.splatDataTextures.covariances={data:L,texture:N,size:v,compressionLevel:a,elementsPerTexelStored:C,elementsPerTexelAllocated:z}}else{const C=s(ll,6);let v=Float32Array,D=On;const z=new v(C.x*C.y*ll);Nt.updateScaleRotationsPaddedData(0,n-1,f,h,z);const L=new Ti(z,C.x,C.y,Zt,D);L.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=L,this.material.uniforms.scaleRotationsTextureSize.value.copy(C),this.splatDataTextures.scaleRotations={data:z,texture:L,size:C,compressionLevel:l}}if(p){const R=c===2?$n:or;let C=m;C%2!==0&&C++;const v=4,D=Zt;let z=s(v,C);if(z.x*z.y<=dd){const L=z.x*z.y*v,N=new A(L);for(let H=0;H<n;H++){const W=m*H,k=C*H;for(let Y=0;Y<m;Y++)N[k+Y]=p[W+Y]}const V=new Ti(N,z.x,z.y,D,R);V.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=V,this.splatDataTextures.sphericalHarmonics={componentCount:m,paddedComponentCount:C,data:N,textureCount:1,texture:V,size:z,compressionLevel:c,elementsPerTexel:v}}else{const L=m/3;C=L,C%2!==0&&C++,z=s(v,C);const N=z.x*z.y*v,V=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],H=[],W=[];for(let k=0;k<3;k++){const Y=new A(N);H.push(Y);for(let Se=0;Se<n;Se++){const Ie=m*Se,Oe=C*Se;if(L>=3){for(let j=0;j<3;j++)Y[Oe+j]=p[Ie+k*3+j];if(L>=8)for(let j=0;j<5;j++)Y[Oe+3+j]=p[Ie+9+k*5+j]}}const ce=new Ti(Y,z.x,z.y,D,R);W.push(ce),ce.needsUpdate=!0,V[k].value=ce}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:m,componentCountPerChannel:L,paddedComponentCount:C,data:H,textureCount:3,textures:W,size:z,compressionLevel:c,elementsPerTexel:v}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(z),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let L=0;L<this.scenes.length;L++){const N=this.scenes[L].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[L]=N.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[L]=N.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const M=s(ud,4),w=new Uint32Array(M.x*M.y*ud);for(let R=0;R<n;R++)w[R]=this.globalSplatIndexToSceneIndexMap[R];const y=new Ti(w,M.x,M.y,ua,Mn);y.internalFormat="R32UI",y.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=y,this.material.uniforms.sceneIndexesTextureSize.value.copy(M),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:w,texture:y,size:M},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const s=this.splatDataTextures.covariances,r=s?s.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const s=this.splatDataTextures.covariances,r=s?s.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,f=u.data,h=u.texture;Nt.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,f);const d=this.renderer?this.renderer.properties.get(h):null;if(!d||!d.__webglTexture?h.needsUpdate=!0:this.updateDataTexture(f,u.texture,u.size,d,cl,mE,4,t,n),s){const _=s.texture,S=t*bo,M=n*bo;if(r===0)for(let y=S;y<=M;y++){const R=this.splatDataTextures.baseData.covariances[y];s.data[y]=R}else Nt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,s.data,t*s.elementsPerTexelAllocated,S,M);const w=this.renderer?this.renderer.properties.get(_):null;!w||!w.__webglTexture?_.needsUpdate=!0:r===0?this.updateDataTexture(s.data,s.texture,s.size,w,s.elementsPerTexelStored,bo,4,t,n):this.updateDataTexture(s.data,s.texture,s.size,w,s.elementsPerTexelAllocated,s.elementsPerTexelAllocated,2,t,n)}if(o){const _=o.data,S=o.texture,M=6,w=a===0?4:2;Nt.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,_);const y=this.renderer?this.renderer.properties.get(S):null;!y||!y.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(_,o.texture,o.size,y,ll,M,w,t,n)}const g=this.splatDataTextures.baseData.sphericalHarmonics;if(g){let _=4;c===1?_=2:c===2&&(_=1);const S=(y,R,C,v,D)=>{const z=this.renderer?this.renderer.properties.get(y):null;!z||!z.__webglTexture?y.needsUpdate=!0:this.updateDataTexture(v,y,R,z,C,D,_,t,n)},M=l.componentCount,w=l.paddedComponentCount;if(l.textureCount===1){const y=l.data;for(let R=t;R<=n;R++){const C=M*R,v=w*R;for(let D=0;D<M;D++)y[v+D]=g[C+D]}S(l.texture,l.size,l.elementsPerTexel,y,w)}else{const y=l.componentCountPerChannel;for(let R=0;R<3;R++){const C=l.data[R];for(let v=t;v<=n;v++){const D=M*v,z=w*v;if(y>=3){for(let L=0;L<3;L++)C[z+L]=g[D+R*3+L];if(y>=8)for(let L=0;L<5;L++)C[z+3+L]=g[D+9+R*5+L]}}S(l.textures[R],l.size,l.elementsPerTexel,C,w)}}}const A=this.splatDataTextures.sceneIndexes,m=A.data;for(let _=this.lastBuildSplatCount;_<=n;_++)m[_]=this.globalSplatIndexToSceneIndexMap[_];const p=A.texture,x=this.renderer?this.renderer.properties.get(p):null;!x||!x.__webglTexture?p.needsUpdate=!0:this.updateDataTexture(m,A.texture,A.size,x,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel>t)&&(t=r.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel<t)&&(t=r.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,s,r,o){const a=o/r,l=t*a,c=Math.floor(l/s),u=c*s*r,f=n*a,h=Math.floor(f/s),d=h*s*r+s*r;return{dataStart:u,dataEnd:d,startRow:c,endRow:h}}updateDataTexture(t,n,s,r,o,a,l,c,u){const f=this.renderer.getContext(),h=Nt.computeTextureUpdateRegion(c,u,s.x,o,a),d=h.dataEnd-h.dataStart,g=new t.constructor(t.buffer,h.dataStart*l,d),A=h.endRow-h.startRow+1,m=this.webGLUtils.convert(n.type),p=this.webGLUtils.convert(n.format,n.colorSpace),x=f.getParameter(f.TEXTURE_BINDING_2D);f.bindTexture(f.TEXTURE_2D,r.__webglTexture),f.texSubImage2D(f.TEXTURE_2D,0,0,h.startRow,s.x,A,p,m,g),f.bindTexture(f.TEXTURE_2D,x)}static updatePaddedCompressedCovariancesTextureData(t,n,s,r,o){let a=new DataView(n.buffer),l=s,c=0;for(let u=r;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,s,r,o){for(let a=t;a<=n;a++){const l=a*4,c=a*3,u=a*4;o[u]=Zv(r,l),o[u+1]=tl(s[c]),o[u+2]=tl(s[c+1]),o[u+3]=tl(s[c+2])}}static updateScaleRotationsPaddedData(t,n,s,r,o){for(let l=t;l<=n;l++){const c=l*3,u=l*4,f=l*6;o[f]=s[c],o[f+1]=s[c+1],o[f+2]=s[c+2],o[f+3]=r[u],o[f+4]=r[u+1],o[f+5]=r[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),s=new F;if(!t){const o=new F;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const r=t?this.lastBuildSplatCount:0;for(let o=r;o<n;o++){this.getSplatCenter(o,s,!0);const a=s.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>fd&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-fd,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=Rr.Default){const n=_E*this.sceneFadeInRateMultiplier,s=vE*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:s,o=t===Rr.Default?r:s;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===Rr.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const s=this.geometry;s.attributes.splatIndex.set(t),s.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),s.instanceCount=n,s.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?Nt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getSplatCount();return n}getMaxSplatCount(){return Nt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),s=new dE(n),r=new hE(n,s,{});if(s.init(r),this.webGLUtils=new Zh(n,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,s){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=s*l;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,c,n);else{const u=new a(this.getMaxSplatCount()*l);u.set(n),r.bufferData(r.ARRAY_BUFFER,u,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,s){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=s*4;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}getSceneIndexes(t,n){let s;const r=n-t+1;s=new Uint32Array(r);for(let o=t;o<=n;o++)s[o]=this.globalSplatIndexToSceneIndexMap[o];return s}getLocalSplatParameters(t,n,s){s==null&&(s=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=s?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,s,r,o,a,l,c=0,u=0,f=1,h,d,g=0,A){const m=new F;m.x=void 0,m.y=void 0,this.splatRenderMode===fi.ThreeD?m.z=void 0:m.z=1;const p=new Xe;let x=0,_=this.scenes.length-1;A!=null&&A>=0&&A<=this.scenes.length&&(x=A,_=A);for(let S=x;S<=_;S++){l==null&&(l=!this.dynamicMode);const M=this.getScene(S),w=M.splatBuffer;let y;if(l&&(this.getSceneTransform(S,p),y=p),t&&w.fillSplatCovarianceArray(t,y,h,d,g,c),n||s){if(!n||!s)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');w.fillSplatScaleRotationArray(n,s,y,h,d,g,u,m)}r&&w.fillSplatCenterArray(r,y,h,d,g),o&&w.fillSplatColorArray(o,M.minimumAlpha,h,d,g),a&&w.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,y,h,d,g,f),g+=w.getSplatCount()}}getIntegerCenters(t,n,s=!1){const r=n-t+1,o=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=s?4:3;a=new Int32Array(r*l);for(let c=0;c<r;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);s&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,s=!1){const r=n-t+1,o=new Float32Array(r*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!s)return o;let a=new Float32Array(r*4);for(let l=0;l<r;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const s=this.getScene(t);s.updateTransform(this.dynamicMode),n.copy(s.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,s=[];for(let r=0;r<16;r++)s[r]=Math.round(n[r]*1e3);return s}computeBoundingBox(t=!1,n){let s=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");s=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,r,null,null,t,void 0,void 0,void 0,void 0,n);const o=new F,a=new F;for(let l=0;l<s;l++){const c=l*3,u=r[c],f=r[c+1],h=r[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||f<o.y)&&(o.y=f),(l===0||h<o.z)&&(o.z=h),(l===0||u>a.x)&&(a.x=u),(l===0||f>a.y)&&(a.y=f),(l===0||h>a.z)&&(a.z=h)}return new Xn(o,a)}}var yE="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",hd="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",EE="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",CE="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function ME(i){let e,t,n,s,r,o,a,l,c,u,f,h,d,g,A,m,p,x,_,S;function M(w,y,R,C,v,D,z){const L=performance.now();if(!n&&(new Uint32Array(t,a,v.byteLength/S.BytesPerInt).set(v),new Float32Array(t,u,z.byteLength/S.BytesPerFloat).set(z),C)){let k;s?k=new Int32Array(t,f,D.byteLength/S.BytesPerInt):k=new Float32Array(t,f,D.byteLength/S.BytesPerFloat),k.set(D)}m||(m=new Uint32Array(x)),new Float32Array(t,A,16).set(R),new Uint32Array(t,d,x).set(m),e.exports.sortIndexes(a,g,f,h,d,A,l,c,u,x,w,y,o,C,s,r);const N={sortDone:!0,splatSortCount:w,splatRenderCount:y,sortTime:0};if(!n){const H=new Uint32Array(t,l,y);(!p||p.length<y)&&(p=new Uint32Array(y)),p.set(H),N.sortedIndexes=p}const V=performance.now();N.sortTime=V-L,i.postMessage(N)}i.onmessage=w=>{if(w.data.centers)centers=w.data.centers,sceneIndexes=w.data.sceneIndexes,s?new Int32Array(t,g+w.data.range.from*S.BytesPerInt*4,w.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+w.data.range.from*S.BytesPerFloat*4,w.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,c+w.data.range.from*4,w.data.range.count).set(new Uint32Array(sceneIndexes)),_=w.data.range.from+w.data.range.count;else if(w.data.sort){const y=Math.min(w.data.sort.splatRenderCount||0,_),R=Math.min(w.data.sort.splatSortCount||0,_),C=w.data.sort.usePrecomputedDistances;let v,D,z;n||(v=w.data.sort.indexesToSort,z=w.data.sort.transforms,C&&(D=w.data.sort.precomputedDistances)),M(R,y,w.data.sort.modelViewProj,C,v,D,z)}else if(w.data.init){S=w.data.init.Constants,o=w.data.init.splatCount,n=w.data.init.useSharedMemory,s=w.data.init.integerBasedSort,r=w.data.init.dynamicMode,x=w.data.init.distanceMapRange,_=0;const y=s?S.BytesPerInt*4:S.BytesPerFloat*4,R=new Uint8Array(w.data.init.sorterWasmBytes),C=16*S.BytesPerFloat,v=o*S.BytesPerInt,D=o*y,z=C,L=s?o*S.BytesPerInt:o*S.BytesPerFloat,N=o*S.BytesPerInt,V=o*S.BytesPerInt,H=s?x*S.BytesPerInt*2:x*S.BytesPerFloat*2,W=r?o*S.BytesPerInt:0,k=r?S.MaxScenes*C:0,Y=S.MemoryPageSize*32,ce=v+D+z+L+N+H+V+W+k+Y,Se=Math.floor(ce/S.MemoryPageSize)+1,Ie={module:{},env:{memory:new WebAssembly.Memory({initial:Se,maximum:Se,shared:!0})}};WebAssembly.compile(R).then(Oe=>WebAssembly.instantiate(Oe,Ie)).then(Oe=>{e=Oe,a=0,g=a+v,A=g+D,f=A+z,h=f+L,d=h+N,l=d+H,c=l+V,u=c+W,t=Ie.env.memory.buffer,n?i.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:f,transformsBuffer:t,transformsOffset:u}):i.postMessage({sortSetupPhase1Complete:!0})})}}}function TE(i,e,t,n,s,r=Je.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",ME.toString(),")(self)"],{type:"application/javascript"})));let a=yE;const l=Yc()?ep():null;!t&&!e?(a=hd,l&&l.major<=16&&l.minor<4&&(a=CE)):t?e||l&&l.major<=16&&l.minor<4&&(a=EE):a=hd;const c=atob(a),u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:i,useSharedMemory:e,integerBasedSort:n,dynamicMode:s,distanceMapRange:1<<r,Constants:{BytesPerFloat:Je.BytesPerFloat,BytesPerInt:Je.BytesPerInt,MemoryPageSize:Je.MemoryPageSize,MaxScenes:Je.MaxScenes}}}),o}const Us={None:0,VR:1,AR:2};class rr{static createButton(e,t={}){const n=document.createElement("button");function s(){let c=null;async function u(d){d.addEventListener("end",f),await e.xr.setSession(d),n.textContent="EXIT VR",c=d}function f(){c.removeEventListener("end",f),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",h).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?s():o(),c&&rr.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{rr.xrSessionIsGranted=!0})}}}rr.xrSessionIsGranted=!1;rr.registerSessionGrantedListener();class bE{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",38),d.setAttribute("height",38),d.style.position="absolute",d.style.right="20px",d.style.top="20px",d.addEventListener("click",function(){c.end()}),h.appendChild(d);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),d.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function u(h){h.addEventListener("end",f),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function f(){c.removeEventListener("end",f),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?s():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const ul={Always:0,Never:2},wE=50,RE=.75,IE=15e5,DE=10,PE=2.5,FE=60,Di=class Di{constructor(e={}){xe(this,"onKeyDown",function(){const e=new F,t=new Xe,n=new Xe;return function(s){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),s.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());xe(this,"onMouseUp",function(){const e=new Le;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Bs()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());xe(this,"checkForFocalPointChange",function(){const e=new Le,t=new F,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>RE&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Bs())}}}());xe(this,"updateSplatMesh",function(){const e=new Le;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,s=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*r,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,s*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());xe(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,s=!0,r=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(f=>{s&&(c=this.loadingSpinner.addTask("Processing splats...")),pn(()=>{if(this.isDisposingOrDisposed())f();else{const h=this.addSplatBuffersToMesh(e,t,n,r,o,l),d=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==d&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:h.centers.buffer,sceneIndexes:h.sceneIndexes.buffer,range:{from:h.from,to:h.to,count:h.count}}),(!this.sortWorker&&d>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(A=>{!this.sortWorker||!A?(this.splatRenderReady=!0,u(),f()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),f()}))})})}},!0)})}}());xe(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,s=!0,r=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(d=>d.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(d=>d):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=d=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();r&&g>=IE&&!d&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},f=d=>{this.isDisposingOrDisposed()||d&&e&&(this.loadingSpinner.removeTask(e),e=null)},h=this.splatMesh.build(l,c,!0,s,u,f,a);return s&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}}());xe(this,"shouldRender",function(){let e=0;const t=new F,n=new yt,s=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>s||Math.abs(a.y-t.y)>s||Math.abs(a.z-t.z)>s||Math.abs(l.x-n.x)>s||Math.abs(l.y-n.y)>s||Math.abs(l.z-n.z)>s||Math.abs(l.w-n.w)>s}return r=this.renderMode!==ul.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===ul.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}}());xe(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let s of n.children)if(s.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());xe(this,"updateFPS",function(){let e=Bs(),t=0;return function(){if(this.consecutiveRenderFrames>FE){const n=Bs();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());xe(this,"updateForRendererSizeChanges",function(){const e=new Le,t=new Le;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());xe(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Bs();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());xe(this,"updateCameraTransition",function(){let e=new F,t=new F,n=new F;return function(s){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(s-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());xe(this,"updateFocusMarker",function(){const e=new Le;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const s=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let r=Math.min(s+DE*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let s;if(t?s=1:s=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),s>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(s-PE*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}s>0&&this.forceRenderNextFrame(),t=!1}}}());xe(this,"updateMeshCursor",function(){const e=[],t=new Le;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());xe(this,"updateInfoPanel",function(){const e=new Le;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,s=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,s,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());xe(this,"runSplatSort",function(){const e=new Xe,t=[],n=new F(0,0,-1),s=new F(0,0,-1),r=new F,o=new F,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let f=0,h=0,d=!1,g=!1;if(s.set(0,0,-1).applyQuaternion(this.camera.quaternion),f=s.dot(n),h=o.copy(this.camera.position).sub(r).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(f<=.99&&(d=!0),h>=1&&(g=!0),!d&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:A,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||u,this.splatRenderCount=A,e.copy(this.camera.matrixWorld).invert();const p=this.perspectiveCamera||this.camera;e.premultiply(p.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let x=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(x=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),x.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let M of l)if(f<M.angleThreshold){for(let w of M.sortFractions)a.push(Math.floor(this.splatRenderCount*w));break}a.push(this.splatRenderCount)}let _=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=_,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const S={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:_,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(S.indexesToSort=this.sortWorkerIndexesToSort,S.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(S.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(M=>{this.sortPromiseResolver=M}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(M=>{this.sortWorker.postMessage(M)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:S}),a.length===0&&(r.copy(this.camera.position),n.copy(s)),!0}),x}}());xe(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new F,s=new F,r=new F,o=new Xe,a=new Xe,l=new Xe,c=new F,u=new F(0,0,-1),f=new F,h=d=>f.copy(d.max).sub(d.min).length();return function(d=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*Lh.DEG2RAD),A=Math.atan(c.x/2/g),m=Math.atan(c.y/2/g),p=Math.cos(A),x=Math.cos(m),_=this.splatMesh.getSplatTree();if(_){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let S=0,M=0;for(let y=0;y<_.subTrees.length;y++){const R=_.subTrees[y];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(y,l),o.multiply(l));const C=R.nodesWithIndexes.length;for(let v=0;v<C;v++){const D=R.nodesWithIndexes[v];if(!D.data||!D.data.indexes||D.data.indexes.length===0)continue;r.copy(D.center).applyMatrix4(o);const z=r.length();r.normalize(),n.copy(r).setX(0).normalize(),s.copy(r).setY(0).normalize();const L=u.dot(s),N=u.dot(n),V=h(D),H=N<x-.6,W=L<p-.6;!d&&(W||H)&&z>V||(M+=D.data.indexes.length,e[S]=D,D.data.distanceToNode=z,S++)}}e.length=S,e.sort((y,R)=>y.data.distanceToNode<R.data.distanceToNode?-1:1);let w=M*Je.BytesPerInt;for(let y=0;y<S;y++){const R=e[y],C=R.data.indexes.length,v=C*Je.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,w-v,C).set(R.data.indexes),w-=v}return{splatRenderCount:M,shouldSortAll:!1}}else{const S=this.splatMesh.getSplatCount();if(!t||t.length!==S){t=new Uint32Array(S);for(let M=0;M<S;M++)t[M]=M}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:S,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new F().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new F().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new F().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Us.None,this.webXRMode!==Us.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||ul.Always,this.sceneRevealMode=e.sceneRevealMode||Rr.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ks.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,Yc()){const n=ep();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=fi.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Je.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=_t(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new rE,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new F,this.nextCameraTarget=new F,this.mousePosition=new Le,this.mouseDownPosition=new Le,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new dc(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new Jy(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new eE(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Nt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new lA,this.sceneHelper=new br(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Le;this.getRenderDimensions(e),this.perspectiveCamera=new En(wE,e.x/e.y,.1,1e3),this.orthographicCamera=new Xc(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Le;this.getRenderDimensions(e),this.renderer=new $v({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new st(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Us.VR?this.rootElement.appendChild(rr.createButton(this.renderer,e)):this.webXRMode===Us.AR&&this.rootElement.appendChild(bE.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Us.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new To(this.camera,this.renderer.domElement):this.perspectiveControls=new To(this.camera,this.renderer.domElement):(this.perspectiveControls=new To(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new To(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Us.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Bs()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const s=a=>{a.saveState(),a.reset()},r=this.controls,o=e?this.orthographicControls:this.perspectiveControls;s(o),s(r),o.target.copy(r.target),e?Di.setCameraZoomFromPosition(n,t,r):Di.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],s=this.camera.projectionMatrix.elements[0];e.x*=s/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:sd(e),s=Di.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;r&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(A,m,p)=>{if(r)if(p===wt.Downloading)if(A==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(s)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const x=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${x}`)}else p===wt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const f=(A,m)=>{r&&((A&&s||m&&!s)&&(this.loadingSpinner.removeTask(o),!m&&!c&&this.loadingProgressBar.show()),s&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},h=(A,m,p)=>{u=A,l(A,m,p),t.onProgress&&t.onProgress(A,m,p)},d=(A,m,p)=>{!s&&t.onProgress&&t.onProgress(0,"0%",wt.Processing);const x={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([A],[x],p,m&&r,r,s,s).then(()=>{!s&&t.onProgress&&t.onProgress(100,"100%",wt.Processing),f(m,p)})};return(s?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,d.bind(this),h,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,s,r,o,a){const l=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t,a),c=nl(l.abortHandler);return l.then(u=>(this.removeSplatSceneDownloadPromise(l),s(u,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(u,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,s,r,o,a){let l=0,c=!1;const u=[],f=()=>{if(u.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=u.shift();s(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?g.resolve():m.finalBuild&&(A.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&pn(()=>f())})}},h=(m,p)=>{this.isDisposingOrDisposed()||(p||u.length===0||m.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:m,firstBuild:l===0,finalBuild:p}),l++,f())},d=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,h,t,a),g=nl(d.abortHandler),A=nl();return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(A.promise),d.then(()=>{this.removeSplatSceneDownloadPromise(d)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d);const p=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(p),o&&o(p)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const s=e.length,r=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(f,h,d,g)=>{r[f]=h;let A=0;for(let m=0;m<s;m++)A+=r[m]||0;A=A/s,d=`${A.toFixed(2)}%`,t&&g===wt.Downloading&&this.loadingSpinner.setMessageForTask(o,A==100?"Download complete!":`Downloading: ${d}`),n&&n(A,d,g)},l=[],c=[];for(let f=0;f<e.length;f++){const h=e[f],d=h.format!==void 0&&h.format!==null?h.format:sd(h.path),g=this.downloadSplatSceneToSplatBuffer(h.path,h.splatAlphaRemovalThreshold,a.bind(this,f),!1,void 0,d,h.headers);l.push(g),c.push(g.promise)}const u=new kr((f,h)=>{Promise.all(c).then(d=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",wt.Processing),this.addSplatBuffers(d,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",wt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),f()})}).catch(d=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),h(this.updateError(d,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},f=>{for(let h of l)h.abort(f)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,s=!1,r=void 0,o,a){try{if(o===on.Splat||o===on.KSplat||o===on.Ply){const l=s?!1:this.optimizeSplatData;if(o===on.Splat)return ou.loadFromURL(e,n,s,r,t,this.inMemoryCompressionLevel,l,a);if(o===on.KSplat)return fc.loadFromURL(e,n,s,r,a);if(o===on.Ply)return su.loadFromURL(e,n,s,r,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}else if(o===on.Spz)return ru.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===on.Splat||e===on.KSplat||e===on.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,s=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=TE(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=Ks.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,Je.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(Je.MaxScenes*16));for(let a=0;a<s;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=r,this.logLevel>=Ks.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof Jh?e:e instanceof Ko?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((s,r)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?r(u):s()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],f=[],h=[];for(let d=0;d<this.splatMesh.scenes.length;d++){let g=!1;for(let A of e)if(A===d){g=!0;break}if(!g){const A=this.splatMesh.scenes[d];u.push(A.splatBuffer),f.push(this.splatMesh.sceneOptions[d]),h.push({position:A.position.clone(),quaternion:A.quaternion.clone(),scale:A.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Rr.Instant,this.createSplatMesh(),this.addSplatBuffers(u,f,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((d,g)=>{d.position.copy(h[g].position),d.quaternion.copy(h[g].quaternion),d.scale.copy(h[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(d=>{l(d)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const s=this.splatSceneDownloadPromises[n];t.push(s),e.push(s.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Di.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};xe(Di,"setCameraPositionFromZoom",function(){const e=new F;return function(t,n,s){const r=1/(n.zoom*.001);e.copy(s.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(s.target).add(e)}}()),xe(Di,"setCameraZoomFromPosition",function(){const e=new F;return function(t,n,s){const r=e.copy(s.target).sub(n.position).length();t.zoom=1/(r*.001)}}());let pc=Di;const lp=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},BE={name:"GaussianSplat",props:{src:{type:String,required:!0},position:{type:Array,default:()=>[0,0,0]},rotation:{type:Array,default:()=>[0,0,0,1]},scale:{type:Array,default:()=>[1,1,1]},cameraPosition:{type:Array,default:()=>[0,0,3]},cameraLookAt:{type:Array,default:()=>[0,0,0]},cameraUp:{type:Array,default:()=>[0,-1,0]},fov:{type:Number,default:45},showLoadingUI:{type:Boolean,default:!0},splatAlphaRemovalThreshold:{type:Number,default:5},selfDrivenMode:{type:Boolean,default:!0},gpuAcceleratedSort:{type:Boolean,default:!1},enableSIMDInSort:{type:Boolean,default:!0},sharedMemoryForWorkers:{type:Boolean,default:!1},integerBasedSort:{type:Boolean,default:!0},halfPrecisionCovariancesOnGPU:{type:Boolean,default:!1},antialiased:{type:Boolean,default:!0},dynamicScene:{type:Boolean,default:!1},progressiveLoad:{type:Boolean,default:!0},focusDistance:{type:Number,default:1.2},sphericalHarmonicsDegree:{type:Number,default:0,validator:i=>[0,1,2].includes(i)},maxScreenSpaceSplatSize:{type:Number,default:2048},kernel2DSize:{type:Number,default:.5},autoRotate:{type:Boolean,default:!1},autoRotateSpeed:{type:Number,default:.5},showFps:{type:Boolean,default:!1},responsive:{type:Boolean,default:!0},enableControls:{type:Boolean,default:!0}},emits:["loaded","error"],setup(i,{emit:e}){const t=li(null),n=li(!1),s=li("");let r=null;const o=async()=>{if(!t.value){e("error",new Error("Container not found"));return}n.value=!0,s.value="";try{a(),console.log("Initializing viewer with src:",i.src),console.log("Container dimensions:",t.value.clientWidth,"x",t.value.clientHeight),r=new pc({rootElement:t.value,cameraUp:i.cameraUp,initialCameraPosition:i.cameraPosition,initialCameraLookAt:i.cameraLookAt,fov:i.fov,selfDrivenMode:i.selfDrivenMode,gpuAcceleratedSort:i.gpuAcceleratedSort,sharedMemoryForWorkers:i.sharedMemoryForWorkers,enableSIMDInSort:i.enableSIMDInSort,integerBasedSort:i.integerBasedSort,halfPrecisionCovariancesOnGPU:i.halfPrecisionCovariancesOnGPU,antialiased:i.antialiased,dynamicScene:i.dynamicScene,focalAdjustment:i.focusDistance,sphericalHarmonicsDegree:i.sphericalHarmonicsDegree,kernel2DSize:i.kernel2DSize,maxScreenSpaceSplatSize:i.maxScreenSpaceSplatSize,autoRotate:i.autoRotate,autoRotateSpeed:i.autoRotateSpeed,showFps:i.showFps,responsive:i.responsive,controls:i.enableControls}),r.threeRenderer&&r.threeRenderer.domElement&&(r.threeRenderer.domElement.style.width="100%",r.threeRenderer.domElement.style.height="100%",r.threeRenderer.domElement.style.display="block"),console.log("Loading splat file:",i.src);const c=i.src;await r.addSplatScene(c,{splatAlphaRemovalThreshold:i.splatAlphaRemovalThreshold,showLoadingUI:i.showLoadingUI,position:i.position,rotation:i.rotation,scale:i.scale,progressiveLoad:i.progressiveLoad}),console.log("Starting viewer"),r.start(),console.log("Viewer started successfully"),setTimeout(()=>{t.value&&t.value.isConnected&&(e("loaded"),n.value=!1)},100)}catch(c){console.error("Error initializing GaussianSplats3D viewer:",c),s.value=`Error: ${c.message}`,a(),e("error",c),n.value=!1}},a=()=>{if(r){try{r.dispose?r.dispose():r.stop&&r.stop()}catch(c){console.warn("Error disposing viewer:",c)}r=null}};let l=null;return qd(()=>{console.log("Component mounted, initializing viewer"),setTimeout(o,300),l=new ResizeObserver(()=>{if(r&&r.threeRenderer){const c=t.value.clientWidth,u=t.value.clientHeight;r.setSize(c,u)}}),t.value&&l.observe(t.value)}),Qd(()=>{l&&(l.disconnect(),l=null),a()}),rs(()=>i.src,c=>{console.log("src changed to:",c),setTimeout(o,300)}),rs(()=>i.position,c=>{try{r&&r.splatMesh&&r.splatMesh.position.fromArray(c)}catch(u){console.error("Error updating position:",u)}},{deep:!0}),rs(()=>i.rotation,c=>{try{r&&r.splatMesh&&r.splatMesh.quaternion.fromArray(c)}catch(u){console.error("Error updating rotation:",u)}},{deep:!0}),rs(()=>i.scale,c=>{try{r&&r.splatMesh&&r.splatMesh.scale.fromArray(c)}catch(u){console.error("Error updating scale:",u)}},{deep:!0}),{containerWrapper:t,loading:n,errorMsg:s}}},LE={ref:"containerWrapper",class:"gaussian-splat-container"},UE={key:0,class:"loading-overlay"},OE={key:1,class:"error-overlay"};function NE(i,e,t,n,s,r){return Bn(),ui("div",LE,[n.loading?(Bn(),ui("div",UE,"Loading splat...")):wi("",!0),n.errorMsg?(Bn(),ui("div",OE,vc(n.errorMsg),1)):wi("",!0)],512)}const zE=lp(BE,[["render",NE],["__scopeId","data-v-78c67811"]]),HE="/favicon.svg",kE={name:"App",components:{GaussianSplat:zE},setup(){const i=li(!1),e=li(""),t=li(!1),n=li(!1),s=li(!1),r=li("/splats/bonsai.splat");return{isLoading:i,errorMessage:e,showSplat:t,loadLocalSplat:()=>{r.value="/splats/bonsai.splat",s.value=!1,i.value=!0,t.value=!0,n.value=!0},loadExternalSplat:()=>{r.value="https://storage.googleapis.com/reefos-3d/splats/reef-full.splat",s.value=!0,i.value=!0,t.value=!0,n.value=!0},loadingStarted:n,splatSrc:r,useExternalUrl:s,onSplatLoaded:()=>{console.log("Splat loaded successfully!"),i.value=!1},onSplatError:f=>{console.error("Error loading splat:",f),e.value=`Failed to load: ${f.message}`,i.value=!1},goBack:()=>{t.value=!1,n.value=!1,e.value=""}}}},VE={class:"app"},GE={class:"viewer-container"},WE={key:1,class:"placeholder"},XE={class:"splash-content"},qE={class:"button-container"},QE={key:3,class:"viewer-loading"},YE={key:0,class:"loading-message note"},KE={key:4,class:"error-message"};function jE(i,e,t,n,s,r){const o=Em("GaussianSplat");return Bn(),ui("div",VE,[e[10]||(e[10]=sg('<header class="header"><div class="header-content"><div class="logo"><img src="'+HE+'" alt="CG Vue Splat Logo"><h1>CG Vue Splat</h1></div><div class="links"><a href="https://github.com/efeboyboy/cg-vue-splat" target="_blank" class="github-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> GitHub </a><a href="https://www.npmjs.com/package/cg-vue-splat" target="_blank" class="npm-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24v-24h-24zm6.8 6.8h10.4v10.4h-10.4v-10.4zm5.2 5.2h-2.6v-2.6h2.6v2.6zm5.2 5.2v-10.4h-2.6v10.4h2.6z"></path></svg> NPM </a></div></div></header>',1)),Qt("div",GE,[n.showSplat?(Bn(),ph(o,{key:0,src:n.splatSrc,cameraPosition:[0,0,3],cameraLookAt:[0,0,0],cameraUp:[0,-1,0],fov:45,maxScreenSpaceSplatSize:2048,selfDrivenMode:!0,autoRotate:"",autoRotateSpeed:.5,showFps:!0,responsive:!0,enableControls:!0,onLoaded:n.onSplatLoaded,onError:n.onSplatError},null,8,["src","onLoaded","onError"])):wi("",!0),n.loadingStarted?wi("",!0):(Bn(),ui("div",WE,[Qt("div",XE,[e[4]||(e[4]=Qt("h2",null,"Vue 3 Gaussian Splats Renderer",-1)),e[5]||(e[5]=Qt("p",null,"View 3D point cloud models in your Vue applications",-1)),Qt("div",qE,[Qt("button",{class:"load-button",onClick:e[0]||(e[0]=(...a)=>n.loadLocalSplat&&n.loadLocalSplat(...a))}," Load Local 3D Model "),Qt("button",{class:"load-button external",onClick:e[1]||(e[1]=(...a)=>n.loadExternalSplat&&n.loadExternalSplat(...a))}," Load External 3D Model ")])])])),n.showSplat&&!n.isLoading?(Bn(),ui("button",{key:2,onClick:e[2]||(e[2]=(...a)=>n.goBack&&n.goBack(...a)),class:"back-button"},e[6]||(e[6]=[Qt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Qt("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),_l(" Back ")]))):wi("",!0),n.isLoading?(Bn(),ui("div",QE,[e[7]||(e[7]=Qt("div",{class:"loader"},null,-1)),e[8]||(e[8]=Qt("div",null,"Loading 3D Gaussian Splat...",-1)),e[9]||(e[9]=Qt("div",{class:"loading-message"},"This may take a few moments",-1)),n.useExternalUrl?(Bn(),ui("div",YE," Note: External URLs require proper CORS headers ")):wi("",!0)])):wi("",!0),n.errorMessage?(Bn(),ui("div",KE,[_l(vc(n.errorMessage)+" ",1),Qt("button",{onClick:e[3]||(e[3]=(...a)=>n.goBack&&n.goBack(...a)),class:"error-back-button"},"Go Back")])):wi("",!0)])])}const $E=lp(kE,[["render",jE]]);zg($E).mount("#app");
