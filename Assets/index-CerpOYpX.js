(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function gE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ey={exports:{}},Cd={},ty={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc=Symbol.for("react.element"),_E=Symbol.for("react.portal"),vE=Symbol.for("react.fragment"),xE=Symbol.for("react.strict_mode"),yE=Symbol.for("react.profiler"),SE=Symbol.for("react.provider"),ME=Symbol.for("react.context"),EE=Symbol.for("react.forward_ref"),TE=Symbol.for("react.suspense"),wE=Symbol.for("react.memo"),AE=Symbol.for("react.lazy"),u0=Symbol.iterator;function CE(n){return n===null||typeof n!="object"?null:(n=u0&&n[u0]||n["@@iterator"],typeof n=="function"?n:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,ry={};function El(n,e,t){this.props=n,this.context=e,this.refs=ry,this.updater=t||ny}El.prototype.isReactComponent={};El.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};El.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sy(){}sy.prototype=El.prototype;function wg(n,e,t){this.props=n,this.context=e,this.refs=ry,this.updater=t||ny}var Ag=wg.prototype=new sy;Ag.constructor=wg;iy(Ag,El.prototype);Ag.isPureReactComponent=!0;var c0=Array.isArray,oy=Object.prototype.hasOwnProperty,Cg={current:null},ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,i)&&!ay.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:tc,type:n,key:s,ref:o,props:r,_owner:Cg.current}}function bE(n,e){return{$$typeof:tc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function bg(n){return typeof n=="object"&&n!==null&&n.$$typeof===tc}function RE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var f0=/\/+/g;function Zd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?RE(""+n.key):e.toString(36)}function df(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case tc:case _E:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Zd(o,0):i,c0(r)?(t="",n!=null&&(t=n.replace(f0,"$&/")+"/"),df(r,e,t,"",function(u){return u})):r!=null&&(bg(r)&&(r=bE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(f0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",c0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Zd(s,a);o+=df(s,e,t,l,r)}else if(l=CE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Zd(s,a++),o+=df(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fc(n,e,t){if(n==null)return n;var i=[],r=0;return df(n,i,"","",function(s){return e.call(t,s,r++)}),i}function PE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ri={current:null},hf={transition:null},DE={ReactCurrentDispatcher:ri,ReactCurrentBatchConfig:hf,ReactCurrentOwner:Cg};function uy(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:fc,forEach:function(n,e,t){fc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return fc(n,function(){e++}),e},toArray:function(n){return fc(n,function(e){return e})||[]},only:function(n){if(!bg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ut.Component=El;ut.Fragment=vE;ut.Profiler=yE;ut.PureComponent=wg;ut.StrictMode=xE;ut.Suspense=TE;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE;ut.act=uy;ut.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=iy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)oy.call(e,l)&&!ay.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:tc,type:n.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(n){return n={$$typeof:ME,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:SE,_context:n},n.Consumer=n};ut.createElement=ly;ut.createFactory=function(n){var e=ly.bind(null,n);return e.type=n,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(n){return{$$typeof:EE,render:n}};ut.isValidElement=bg;ut.lazy=function(n){return{$$typeof:AE,_payload:{_status:-1,_result:n},_init:PE}};ut.memo=function(n,e){return{$$typeof:wE,type:n,compare:e===void 0?null:e}};ut.startTransition=function(n){var e=hf.transition;hf.transition={};try{n()}finally{hf.transition=e}};ut.unstable_act=uy;ut.useCallback=function(n,e){return ri.current.useCallback(n,e)};ut.useContext=function(n){return ri.current.useContext(n)};ut.useDebugValue=function(){};ut.useDeferredValue=function(n){return ri.current.useDeferredValue(n)};ut.useEffect=function(n,e){return ri.current.useEffect(n,e)};ut.useId=function(){return ri.current.useId()};ut.useImperativeHandle=function(n,e,t){return ri.current.useImperativeHandle(n,e,t)};ut.useInsertionEffect=function(n,e){return ri.current.useInsertionEffect(n,e)};ut.useLayoutEffect=function(n,e){return ri.current.useLayoutEffect(n,e)};ut.useMemo=function(n,e){return ri.current.useMemo(n,e)};ut.useReducer=function(n,e,t){return ri.current.useReducer(n,e,t)};ut.useRef=function(n){return ri.current.useRef(n)};ut.useState=function(n){return ri.current.useState(n)};ut.useSyncExternalStore=function(n,e,t){return ri.current.useSyncExternalStore(n,e,t)};ut.useTransition=function(){return ri.current.useTransition()};ut.version="18.3.1";ty.exports=ut;var xt=ty.exports;const LE=gE(xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=xt,IE=Symbol.for("react.element"),UE=Symbol.for("react.fragment"),FE=Object.prototype.hasOwnProperty,OE=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kE={key:!0,ref:!0,__self:!0,__source:!0};function cy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)FE.call(e,i)&&!kE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:IE,type:n,key:s,ref:o,props:r,_owner:OE.current}}Cd.Fragment=UE;Cd.jsx=cy;Cd.jsxs=cy;ey.exports=Cd;var B=ey.exports,gp={},fy={exports:{}},Vi={},dy={exports:{}},hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,X){var P=O.length;O.push(X);e:for(;0<P;){var te=P-1>>>1,pe=O[te];if(0<r(pe,X))O[te]=X,O[P]=pe,P=te;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],P=O.pop();if(P!==X){O[0]=P;e:for(var te=0,pe=O.length,He=pe>>>1;te<He;){var Ue=2*(te+1)-1,Le=O[Ue],K=Ue+1,ae=O[K];if(0>r(Le,P))K<pe&&0>r(ae,Le)?(O[te]=ae,O[K]=P,te=K):(O[te]=Le,O[Ue]=P,te=Ue);else if(K<pe&&0>r(ae,P))O[te]=ae,O[K]=P,te=K;else break e}}return X}function r(O,X){var P=O.sortIndex-X.sortIndex;return P!==0?P:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var X=t(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=O)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(u)}}function S(O){if(v=!1,x(O),!_)if(t(l)!==null)_=!0,z(w);else{var X=t(u);X!==null&&U(S,X.startTime-O)}}function w(O,X){_=!1,v&&(v=!1,p(y),y=-1),h=!0;var P=f;try{for(x(X),d=t(l);d!==null&&(!(d.expirationTime>X)||O&&!D());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var pe=te(d.expirationTime<=X);X=n.unstable_now(),typeof pe=="function"?d.callback=pe:d===t(l)&&i(l),x(X)}else i(l);d=t(l)}if(d!==null)var He=!0;else{var Ue=t(u);Ue!==null&&U(S,Ue.startTime-X),He=!1}return He}finally{d=null,f=P,h=!1}}var T=!1,E=null,y=-1,C=5,R=-1;function D(){return!(n.unstable_now()-R<C)}function L(){if(E!==null){var O=n.unstable_now();R=O;var X=!0;try{X=E(!0,O)}finally{X?G():(T=!1,E=null)}}else T=!1}var G;if(typeof g=="function")G=function(){g(L)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,N=j.port2;j.port1.onmessage=L,G=function(){N.postMessage(null)}}else G=function(){m(L,0)};function z(O){E=O,T||(T=!0,G())}function U(O,X){y=m(function(){O(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){_||h||(_=!0,z(w))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var P=f;f=X;try{return O()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=f;f=O;try{return X()}finally{f=P}},n.unstable_scheduleCallback=function(O,X,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,O){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=P+pe,O={id:c++,callback:X,priorityLevel:O,startTime:P,expirationTime:pe,sortIndex:-1},P>te?(O.sortIndex=P,e(u,O),t(l)===null&&O===t(u)&&(v?(p(y),y=-1):v=!0,U(S,P-te))):(O.sortIndex=pe,e(l,O),_||h||(_=!0,z(w))),O},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(O){var X=f;return function(){var P=f;f=X;try{return O.apply(this,arguments)}finally{f=P}}}})(hy);dy.exports=hy;var BE=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE=xt,Oi=BE;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,Au={};function na(n,e){ol(n,e),ol(n+"Capture",e)}function ol(n,e){for(Au[n]=e,n=0;n<e.length;n++)py.add(e[n])}var ds=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,VE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d0={},h0={};function HE(n){return _p.call(h0,n)?!0:_p.call(d0,n)?!1:VE.test(n)?h0[n]=!0:(d0[n]=!0,!1)}function GE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function WE(n,e,t,i){if(e===null||typeof e>"u"||GE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function si(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Nn[n]=new si(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Nn[e]=new si(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Nn[n]=new si(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Nn[n]=new si(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Nn[n]=new si(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Nn[n]=new si(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Nn[n]=new si(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Nn[n]=new si(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Nn[n]=new si(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rg=/[\-:]([a-z])/g;function Pg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rg,Pg);Nn[e]=new si(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rg,Pg);Nn[e]=new si(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rg,Pg);Nn[e]=new si(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Nn[n]=new si(n,1,!1,n.toLowerCase(),null,!1,!1)});Nn.xlinkHref=new si("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Nn[n]=new si(n,1,!1,n.toLowerCase(),null,!0,!0)});function Dg(n,e,t,i){var r=Nn.hasOwnProperty(e)?Nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WE(e,t,r,i)&&(t=null),i||r===null?HE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ys=zE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dc=Symbol.for("react.element"),Pa=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),Lg=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),Ng=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),yp=Symbol.for("react.suspense_list"),Ig=Symbol.for("react.memo"),Ns=Symbol.for("react.lazy"),_y=Symbol.for("react.offscreen"),p0=Symbol.iterator;function bl(n){return n===null||typeof n!="object"?null:(n=p0&&n[p0]||n["@@iterator"],typeof n=="function"?n:null)}var Yt=Object.assign,Qd;function jl(n){if(Qd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+n}var Jd=!1;function eh(n,e){if(!n||Jd)return"";Jd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?jl(n):""}function XE(n){switch(n.tag){case 5:return jl(n.type);case 16:return jl("Lazy");case 13:return jl("Suspense");case 19:return jl("SuspenseList");case 0:case 2:case 15:return n=eh(n.type,!1),n;case 11:return n=eh(n.type.render,!1),n;case 1:return n=eh(n.type,!0),n;default:return""}}function Sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Da:return"Fragment";case Pa:return"Portal";case vp:return"Profiler";case Lg:return"StrictMode";case xp:return"Suspense";case yp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case gy:return(n.displayName||"Context")+".Consumer";case my:return(n._context.displayName||"Context")+".Provider";case Ng:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ig:return e=n.displayName||null,e!==null?e:Sp(n.type)||"Memo";case Ns:e=n._payload,n=n._init;try{return Sp(n(e))}catch{}}return null}function jE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sp(e);case 8:return e===Lg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function io(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YE(n){var e=vy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hc(n){n._valueTracker||(n._valueTracker=YE(n))}function xy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mp(n,e){var t=e.checked;return Yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function m0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=io(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yy(n,e){e=e.checked,e!=null&&Dg(n,"checked",e,!1)}function Ep(n,e){yy(n,e);var t=io(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Tp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Tp(n,e.type,io(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function g0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Tp(n,e,t){(e!=="number"||Bf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Yl=Array.isArray;function Xa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+io(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function wp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(Yl(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:io(t)}}function Sy(n,e){var t=io(e.value),i=io(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function v0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function My(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ap(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?My(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pc,Ey=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pc=pc||document.createElement("div"),pc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Cu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var su={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qE=["Webkit","ms","Moz","O"];Object.keys(su).forEach(function(n){qE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),su[e]=su[n]})});function Ty(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||su.hasOwnProperty(n)&&su[n]?(""+e).trim():e+"px"}function wy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ty(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var $E=Yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(n,e){if(e){if($E[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function bp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=null;function Ug(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pp=null,ja=null,Ya=null;function x0(n){if(n=rc(n)){if(typeof Pp!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=Ld(e),Pp(n.stateNode,n.type,e))}}function Ay(n){ja?Ya?Ya.push(n):Ya=[n]:ja=n}function Cy(){if(ja){var n=ja,e=Ya;if(Ya=ja=null,x0(n),e)for(n=0;n<e.length;n++)x0(e[n])}}function by(n,e){return n(e)}function Ry(){}var th=!1;function Py(n,e,t){if(th)return n(e,t);th=!0;try{return by(n,e,t)}finally{th=!1,(ja!==null||Ya!==null)&&(Ry(),Cy())}}function bu(n,e){var t=n.stateNode;if(t===null)return null;var i=Ld(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var Dp=!1;if(ds)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){Dp=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{Dp=!1}function KE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ou=!1,zf=null,Vf=!1,Lp=null,ZE={onError:function(n){ou=!0,zf=n}};function QE(n,e,t,i,r,s,o,a,l){ou=!1,zf=null,KE.apply(ZE,arguments)}function JE(n,e,t,i,r,s,o,a,l){if(QE.apply(this,arguments),ou){if(ou){var u=zf;ou=!1,zf=null}else throw Error(fe(198));Vf||(Vf=!0,Lp=u)}}function ia(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Dy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function y0(n){if(ia(n)!==n)throw Error(fe(188))}function eT(n){var e=n.alternate;if(!e){if(e=ia(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return y0(r),n;if(s===i)return y0(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function Ly(n){return n=eT(n),n!==null?Ny(n):null}function Ny(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ny(n);if(e!==null)return e;n=n.sibling}return null}var Iy=Oi.unstable_scheduleCallback,S0=Oi.unstable_cancelCallback,tT=Oi.unstable_shouldYield,nT=Oi.unstable_requestPaint,tn=Oi.unstable_now,iT=Oi.unstable_getCurrentPriorityLevel,Fg=Oi.unstable_ImmediatePriority,Uy=Oi.unstable_UserBlockingPriority,Hf=Oi.unstable_NormalPriority,rT=Oi.unstable_LowPriority,Fy=Oi.unstable_IdlePriority,bd=null,Fr=null;function sT(n){if(Fr&&typeof Fr.onCommitFiberRoot=="function")try{Fr.onCommitFiberRoot(bd,n,void 0,(n.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:lT,oT=Math.log,aT=Math.LN2;function lT(n){return n>>>=0,n===0?32:31-(oT(n)/aT|0)|0}var mc=64,gc=4194304;function ql(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ql(a):(s&=o,s!==0&&(i=ql(s)))}else o=t&~r,o!==0?i=ql(o):s!==0&&(i=ql(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vr(e),r=1<<t,i|=n[t],e&=~r;return i}function uT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-vr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=uT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Np(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oy(){var n=mc;return mc<<=1,!(mc&4194240)&&(mc=64),n}function nh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function nc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vr(e),n[e]=t}function fT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Og(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Mt=0;function ky(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var By,kg,zy,Vy,Hy,Ip=!1,_c=[],js=null,Ys=null,qs=null,Ru=new Map,Pu=new Map,Us=[],dT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function M0(n,e){switch(n){case"focusin":case"focusout":js=null;break;case"dragenter":case"dragleave":Ys=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":Ru.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pu.delete(e.pointerId)}}function Pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=rc(e),e!==null&&kg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function hT(n,e,t,i,r){switch(e){case"focusin":return js=Pl(js,n,e,t,i,r),!0;case"dragenter":return Ys=Pl(Ys,n,e,t,i,r),!0;case"mouseover":return qs=Pl(qs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ru.set(s,Pl(Ru.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pu.set(s,Pl(Pu.get(s)||null,n,e,t,i,r)),!0}return!1}function Gy(n){var e=Ro(n.target);if(e!==null){var t=ia(e);if(t!==null){if(e=t.tag,e===13){if(e=Dy(t),e!==null){n.blockedOn=e,Hy(n.priority,function(){zy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Up(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Rp=i,t.target.dispatchEvent(i),Rp=null}else return e=rc(t),e!==null&&kg(e),n.blockedOn=t,!1;e.shift()}return!0}function E0(n,e,t){pf(n)&&t.delete(e)}function pT(){Ip=!1,js!==null&&pf(js)&&(js=null),Ys!==null&&pf(Ys)&&(Ys=null),qs!==null&&pf(qs)&&(qs=null),Ru.forEach(E0),Pu.forEach(E0)}function Dl(n,e){n.blockedOn===e&&(n.blockedOn=null,Ip||(Ip=!0,Oi.unstable_scheduleCallback(Oi.unstable_NormalPriority,pT)))}function Du(n){function e(r){return Dl(r,n)}if(0<_c.length){Dl(_c[0],n);for(var t=1;t<_c.length;t++){var i=_c[t];i.blockedOn===n&&(i.blockedOn=null)}}for(js!==null&&Dl(js,n),Ys!==null&&Dl(Ys,n),qs!==null&&Dl(qs,n),Ru.forEach(e),Pu.forEach(e),t=0;t<Us.length;t++)i=Us[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Us.length&&(t=Us[0],t.blockedOn===null);)Gy(t),t.blockedOn===null&&Us.shift()}var qa=ys.ReactCurrentBatchConfig,Wf=!0;function mT(n,e,t,i){var r=Mt,s=qa.transition;qa.transition=null;try{Mt=1,Bg(n,e,t,i)}finally{Mt=r,qa.transition=s}}function gT(n,e,t,i){var r=Mt,s=qa.transition;qa.transition=null;try{Mt=4,Bg(n,e,t,i)}finally{Mt=r,qa.transition=s}}function Bg(n,e,t,i){if(Wf){var r=Up(n,e,t,i);if(r===null)dh(n,e,i,Xf,t),M0(n,i);else if(hT(r,n,e,t,i))i.stopPropagation();else if(M0(n,i),e&4&&-1<dT.indexOf(n)){for(;r!==null;){var s=rc(r);if(s!==null&&By(s),s=Up(n,e,t,i),s===null&&dh(n,e,i,Xf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else dh(n,e,i,null,t)}}var Xf=null;function Up(n,e,t,i){if(Xf=null,n=Ug(i),n=Ro(n),n!==null)if(e=ia(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Dy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xf=n,null}function Wy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iT()){case Fg:return 1;case Uy:return 4;case Hf:case rT:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var ks=null,zg=null,mf=null;function Xy(){if(mf)return mf;var n,e=zg,t=e.length,i,r="value"in ks?ks.value:ks.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return mf=r.slice(n,1<i?1-i:void 0)}function gf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function vc(){return!0}function T0(){return!1}function Hi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vc:T0,this.isPropagationStopped=T0,this}return Yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vc)},persist:function(){},isPersistent:vc}),e}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vg=Hi(Tl),ic=Yt({},Tl,{view:0,detail:0}),_T=Hi(ic),ih,rh,Ll,Rd=Yt({},ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ll&&(Ll&&n.type==="mousemove"?(ih=n.screenX-Ll.screenX,rh=n.screenY-Ll.screenY):rh=ih=0,Ll=n),ih)},movementY:function(n){return"movementY"in n?n.movementY:rh}}),w0=Hi(Rd),vT=Yt({},Rd,{dataTransfer:0}),xT=Hi(vT),yT=Yt({},ic,{relatedTarget:0}),sh=Hi(yT),ST=Yt({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),MT=Hi(ST),ET=Yt({},Tl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),TT=Hi(ET),wT=Yt({},Tl,{data:0}),A0=Hi(wT),AT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=bT[n])?!!e[n]:!1}function Hg(){return RT}var PT=Yt({},ic,{key:function(n){if(n.key){var e=AT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?CT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hg,charCode:function(n){return n.type==="keypress"?gf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),DT=Hi(PT),LT=Yt({},Rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C0=Hi(LT),NT=Yt({},ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hg}),IT=Hi(NT),UT=Yt({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),FT=Hi(UT),OT=Yt({},Rd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kT=Hi(OT),BT=[9,13,27,32],Gg=ds&&"CompositionEvent"in window,au=null;ds&&"documentMode"in document&&(au=document.documentMode);var zT=ds&&"TextEvent"in window&&!au,jy=ds&&(!Gg||au&&8<au&&11>=au),b0=" ",R0=!1;function Yy(n,e){switch(n){case"keyup":return BT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var La=!1;function VT(n,e){switch(n){case"compositionend":return qy(e);case"keypress":return e.which!==32?null:(R0=!0,b0);case"textInput":return n=e.data,n===b0&&R0?null:n;default:return null}}function HT(n,e){if(La)return n==="compositionend"||!Gg&&Yy(n,e)?(n=Xy(),mf=zg=ks=null,La=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jy&&e.locale!=="ko"?null:e.data;default:return null}}var GT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!GT[n.type]:e==="textarea"}function $y(n,e,t,i){Ay(i),e=jf(e,"onChange"),0<e.length&&(t=new Vg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var lu=null,Lu=null;function WT(n){oS(n,0)}function Pd(n){var e=Ua(n);if(xy(e))return n}function XT(n,e){if(n==="change")return e}var Ky=!1;if(ds){var oh;if(ds){var ah="oninput"in document;if(!ah){var D0=document.createElement("div");D0.setAttribute("oninput","return;"),ah=typeof D0.oninput=="function"}oh=ah}else oh=!1;Ky=oh&&(!document.documentMode||9<document.documentMode)}function L0(){lu&&(lu.detachEvent("onpropertychange",Zy),Lu=lu=null)}function Zy(n){if(n.propertyName==="value"&&Pd(Lu)){var e=[];$y(e,Lu,n,Ug(n)),Py(WT,e)}}function jT(n,e,t){n==="focusin"?(L0(),lu=e,Lu=t,lu.attachEvent("onpropertychange",Zy)):n==="focusout"&&L0()}function YT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pd(Lu)}function qT(n,e){if(n==="click")return Pd(e)}function $T(n,e){if(n==="input"||n==="change")return Pd(e)}function KT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var yr=typeof Object.is=="function"?Object.is:KT;function Nu(n,e){if(yr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!_p.call(e,r)||!yr(n[r],e[r]))return!1}return!0}function N0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function I0(n,e){var t=N0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=N0(t)}}function Qy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var n=window,e=Bf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bf(n.document)}return e}function Wg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ZT(n){var e=Jy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qy(t.ownerDocument.documentElement,t)){if(i!==null&&Wg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=I0(t,s);var o=I0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var QT=ds&&"documentMode"in document&&11>=document.documentMode,Na=null,Fp=null,uu=null,Op=!1;function U0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Op||Na==null||Na!==Bf(i)||(i=Na,"selectionStart"in i&&Wg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uu&&Nu(uu,i)||(uu=i,i=jf(Fp,"onSelect"),0<i.length&&(e=new Vg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Na)))}function xc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ia={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},lh={},eS={};ds&&(eS=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Dd(n){if(lh[n])return lh[n];if(!Ia[n])return n;var e=Ia[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in eS)return lh[n]=e[t];return n}var tS=Dd("animationend"),nS=Dd("animationiteration"),iS=Dd("animationstart"),rS=Dd("transitionend"),sS=new Map,F0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function co(n,e){sS.set(n,e),na(e,[n])}for(var uh=0;uh<F0.length;uh++){var ch=F0[uh],JT=ch.toLowerCase(),ew=ch[0].toUpperCase()+ch.slice(1);co(JT,"on"+ew)}co(tS,"onAnimationEnd");co(nS,"onAnimationIteration");co(iS,"onAnimationStart");co("dblclick","onDoubleClick");co("focusin","onFocus");co("focusout","onBlur");co(rS,"onTransitionEnd");ol("onMouseEnter",["mouseout","mouseover"]);ol("onMouseLeave",["mouseout","mouseover"]);ol("onPointerEnter",["pointerout","pointerover"]);ol("onPointerLeave",["pointerout","pointerover"]);na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));na("onBeforeInput",["compositionend","keypress","textInput","paste"]);na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("cancel close invalid load scroll toggle".split(" ").concat($l));function O0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,JE(i,e,void 0,n),n.currentTarget=null}function oS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;O0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;O0(r,a,u),s=l}}}if(Vf)throw n=Lp,Vf=!1,Lp=null,n}function Ut(n,e){var t=e[Hp];t===void 0&&(t=e[Hp]=new Set);var i=n+"__bubble";t.has(i)||(aS(e,n,2,!1),t.add(i))}function fh(n,e,t){var i=0;e&&(i|=4),aS(t,n,i,e)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Iu(n){if(!n[yc]){n[yc]=!0,py.forEach(function(t){t!=="selectionchange"&&(tw.has(t)||fh(t,!1,n),fh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[yc]||(e[yc]=!0,fh("selectionchange",!1,e))}}function aS(n,e,t,i){switch(Wy(e)){case 1:var r=mT;break;case 4:r=gT;break;default:r=Bg}t=r.bind(null,e,t,n),r=void 0,!Dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function dh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ro(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Py(function(){var u=s,c=Ug(t),d=[];e:{var f=sS.get(n);if(f!==void 0){var h=Vg,_=n;switch(n){case"keypress":if(gf(t)===0)break e;case"keydown":case"keyup":h=DT;break;case"focusin":_="focus",h=sh;break;case"focusout":_="blur",h=sh;break;case"beforeblur":case"afterblur":h=sh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=w0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=xT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=IT;break;case tS:case nS:case iS:h=MT;break;case rS:h=FT;break;case"scroll":h=_T;break;case"wheel":h=kT;break;case"copy":case"cut":case"paste":h=TT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=C0}var v=(e&4)!==0,m=!v&&n==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=bu(g,p),S!=null&&v.push(Uu(g,S,x)))),m)break;g=g.return}0<v.length&&(f=new h(f,_,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==Rp&&(_=t.relatedTarget||t.fromElement)&&(Ro(_)||_[hs]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(_=t.relatedTarget||t.toElement,h=u,_=_?Ro(_):null,_!==null&&(m=ia(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=u),h!==_)){if(v=w0,S="onMouseLeave",p="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=C0,S="onPointerLeave",p="onPointerEnter",g="pointer"),m=h==null?f:Ua(h),x=_==null?f:Ua(_),f=new v(S,g+"leave",h,t,c),f.target=m,f.relatedTarget=x,S=null,Ro(c)===u&&(v=new v(p,g+"enter",_,t,c),v.target=x,v.relatedTarget=m,S=v),m=S,h&&_)t:{for(v=h,p=_,g=0,x=v;x;x=ua(x))g++;for(x=0,S=p;S;S=ua(S))x++;for(;0<g-x;)v=ua(v),g--;for(;0<x-g;)p=ua(p),x--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ua(v),p=ua(p)}v=null}else v=null;h!==null&&k0(d,f,h,v,!1),_!==null&&m!==null&&k0(d,m,_,v,!0)}}e:{if(f=u?Ua(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var w=XT;else if(P0(f))if(Ky)w=$T;else{w=YT;var T=jT}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=qT);if(w&&(w=w(n,u))){$y(d,w,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Tp(f,"number",f.value)}switch(T=u?Ua(u):window,n){case"focusin":(P0(T)||T.contentEditable==="true")&&(Na=T,Fp=u,uu=null);break;case"focusout":uu=Fp=Na=null;break;case"mousedown":Op=!0;break;case"contextmenu":case"mouseup":case"dragend":Op=!1,U0(d,t,c);break;case"selectionchange":if(QT)break;case"keydown":case"keyup":U0(d,t,c)}var E;if(Gg)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else La?Yy(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(jy&&t.locale!=="ko"&&(La||y!=="onCompositionStart"?y==="onCompositionEnd"&&La&&(E=Xy()):(ks=c,zg="value"in ks?ks.value:ks.textContent,La=!0)),T=jf(u,y),0<T.length&&(y=new A0(y,n,null,t,c),d.push({event:y,listeners:T}),E?y.data=E:(E=qy(t),E!==null&&(y.data=E)))),(E=zT?VT(n,t):HT(n,t))&&(u=jf(u,"onBeforeInput"),0<u.length&&(c=new A0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}oS(d,e)})}function Uu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function jf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bu(n,t),s!=null&&i.unshift(Uu(n,s,r)),s=bu(n,e),s!=null&&i.push(Uu(n,s,r))),n=n.return}return i}function ua(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function k0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=bu(t,s),l!=null&&o.unshift(Uu(t,l,a))):r||(l=bu(t,s),l!=null&&o.push(Uu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var nw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function B0(n){return(typeof n=="string"?n:""+n).replace(nw,`
`).replace(iw,"")}function Sc(n,e,t){if(e=B0(e),B0(n)!==e&&t)throw Error(fe(425))}function Yf(){}var kp=null,Bp=null;function zp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vp=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(n){return z0.resolve(null).then(n).catch(ow)}:Vp;function ow(n){setTimeout(function(){throw n})}function hh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Du(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Du(e)}function $s(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function V0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var wl=Math.random().toString(36).slice(2),Pr="__reactFiber$"+wl,Fu="__reactProps$"+wl,hs="__reactContainer$"+wl,Hp="__reactEvents$"+wl,aw="__reactListeners$"+wl,lw="__reactHandles$"+wl;function Ro(n){var e=n[Pr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[hs]||t[Pr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=V0(n);n!==null;){if(t=n[Pr])return t;n=V0(n)}return e}n=t,t=n.parentNode}return null}function rc(n){return n=n[Pr]||n[hs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ua(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function Ld(n){return n[Fu]||null}var Gp=[],Fa=-1;function fo(n){return{current:n}}function Ft(n){0>Fa||(n.current=Gp[Fa],Gp[Fa]=null,Fa--)}function It(n,e){Fa++,Gp[Fa]=n.current,n.current=e}var ro={},Yn=fo(ro),fi=fo(!1),Xo=ro;function al(n,e){var t=n.type.contextTypes;if(!t)return ro;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function di(n){return n=n.childContextTypes,n!=null}function qf(){Ft(fi),Ft(Yn)}function H0(n,e,t){if(Yn.current!==ro)throw Error(fe(168));It(Yn,e),It(fi,t)}function lS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,jE(n)||"Unknown",r));return Yt({},t,i)}function $f(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ro,Xo=Yn.current,It(Yn,n),It(fi,fi.current),!0}function G0(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=lS(n,e,Xo),i.__reactInternalMemoizedMergedChildContext=n,Ft(fi),Ft(Yn),It(Yn,n)):Ft(fi),It(fi,t)}var Jr=null,Nd=!1,ph=!1;function uS(n){Jr===null?Jr=[n]:Jr.push(n)}function uw(n){Nd=!0,uS(n)}function ho(){if(!ph&&Jr!==null){ph=!0;var n=0,e=Mt;try{var t=Jr;for(Mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Jr=null,Nd=!1}catch(r){throw Jr!==null&&(Jr=Jr.slice(n+1)),Iy(Fg,ho),r}finally{Mt=e,ph=!1}}return null}var Oa=[],ka=0,Kf=null,Zf=0,qi=[],$i=0,jo=null,is=1,rs="";function So(n,e){Oa[ka++]=Zf,Oa[ka++]=Kf,Kf=n,Zf=e}function cS(n,e,t){qi[$i++]=is,qi[$i++]=rs,qi[$i++]=jo,jo=n;var i=is;n=rs;var r=32-vr(i)-1;i&=~(1<<r),t+=1;var s=32-vr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,is=1<<32-vr(e)+r|t<<r|i,rs=s+n}else is=1<<s|t<<r|i,rs=n}function Xg(n){n.return!==null&&(So(n,1),cS(n,1,0))}function jg(n){for(;n===Kf;)Kf=Oa[--ka],Oa[ka]=null,Zf=Oa[--ka],Oa[ka]=null;for(;n===jo;)jo=qi[--$i],qi[$i]=null,rs=qi[--$i],qi[$i]=null,is=qi[--$i],qi[$i]=null}var Ii=null,Di=null,Bt=!1,pr=null;function fS(n,e){var t=Ji(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function W0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ii=n,Di=$s(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ii=n,Di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=jo!==null?{id:is,overflow:rs}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ji(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ii=n,Di=null,!0):!1;default:return!1}}function Wp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xp(n){if(Bt){var e=Di;if(e){var t=e;if(!W0(n,e)){if(Wp(n))throw Error(fe(418));e=$s(t.nextSibling);var i=Ii;e&&W0(n,e)?fS(i,t):(n.flags=n.flags&-4097|2,Bt=!1,Ii=n)}}else{if(Wp(n))throw Error(fe(418));n.flags=n.flags&-4097|2,Bt=!1,Ii=n}}}function X0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ii=n}function Mc(n){if(n!==Ii)return!1;if(!Bt)return X0(n),Bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!zp(n.type,n.memoizedProps)),e&&(e=Di)){if(Wp(n))throw dS(),Error(fe(418));for(;e;)fS(n,e),e=$s(e.nextSibling)}if(X0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Di=$s(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Di=null}}else Di=Ii?$s(n.stateNode.nextSibling):null;return!0}function dS(){for(var n=Di;n;)n=$s(n.nextSibling)}function ll(){Di=Ii=null,Bt=!1}function Yg(n){pr===null?pr=[n]:pr.push(n)}var cw=ys.ReactCurrentBatchConfig;function Nl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function Ec(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function j0(n){var e=n._init;return e(n._payload)}function hS(n){function e(p,g){if(n){var x=p.deletions;x===null?(p.deletions=[g],p.flags|=16):x.push(g)}}function t(p,g){if(!n)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=Js(p,g),p.index=0,p.sibling=null,p}function s(p,g,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags|=2,g):x):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,g,x,S){return g===null||g.tag!==6?(g=Sh(x,p.mode,S),g.return=p,g):(g=r(g,x),g.return=p,g)}function l(p,g,x,S){var w=x.type;return w===Da?c(p,g,x.props.children,S,x.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ns&&j0(w)===g.type)?(S=r(g,x.props),S.ref=Nl(p,g,x),S.return=p,S):(S=Ef(x.type,x.key,x.props,null,p.mode,S),S.ref=Nl(p,g,x),S.return=p,S)}function u(p,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Mh(x,p.mode,S),g.return=p,g):(g=r(g,x.children||[]),g.return=p,g)}function c(p,g,x,S,w){return g===null||g.tag!==7?(g=Oo(x,p.mode,S,w),g.return=p,g):(g=r(g,x),g.return=p,g)}function d(p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sh(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dc:return x=Ef(g.type,g.key,g.props,null,p.mode,x),x.ref=Nl(p,null,g),x.return=p,x;case Pa:return g=Mh(g,p.mode,x),g.return=p,g;case Ns:var S=g._init;return d(p,S(g._payload),x)}if(Yl(g)||bl(g))return g=Oo(g,p.mode,x,null),g.return=p,g;Ec(p,g)}return null}function f(p,g,x,S){var w=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(p,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case dc:return x.key===w?l(p,g,x,S):null;case Pa:return x.key===w?u(p,g,x,S):null;case Ns:return w=x._init,f(p,g,w(x._payload),S)}if(Yl(x)||bl(x))return w!==null?null:c(p,g,x,S,null);Ec(p,x)}return null}function h(p,g,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(g,p,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case dc:return p=p.get(S.key===null?x:S.key)||null,l(g,p,S,w);case Pa:return p=p.get(S.key===null?x:S.key)||null,u(g,p,S,w);case Ns:var T=S._init;return h(p,g,x,T(S._payload),w)}if(Yl(S)||bl(S))return p=p.get(x)||null,c(g,p,S,w,null);Ec(g,S)}return null}function _(p,g,x,S){for(var w=null,T=null,E=g,y=g=0,C=null;E!==null&&y<x.length;y++){E.index>y?(C=E,E=null):C=E.sibling;var R=f(p,E,x[y],S);if(R===null){E===null&&(E=C);break}n&&E&&R.alternate===null&&e(p,E),g=s(R,g,y),T===null?w=R:T.sibling=R,T=R,E=C}if(y===x.length)return t(p,E),Bt&&So(p,y),w;if(E===null){for(;y<x.length;y++)E=d(p,x[y],S),E!==null&&(g=s(E,g,y),T===null?w=E:T.sibling=E,T=E);return Bt&&So(p,y),w}for(E=i(p,E);y<x.length;y++)C=h(E,p,y,x[y],S),C!==null&&(n&&C.alternate!==null&&E.delete(C.key===null?y:C.key),g=s(C,g,y),T===null?w=C:T.sibling=C,T=C);return n&&E.forEach(function(D){return e(p,D)}),Bt&&So(p,y),w}function v(p,g,x,S){var w=bl(x);if(typeof w!="function")throw Error(fe(150));if(x=w.call(x),x==null)throw Error(fe(151));for(var T=w=null,E=g,y=g=0,C=null,R=x.next();E!==null&&!R.done;y++,R=x.next()){E.index>y?(C=E,E=null):C=E.sibling;var D=f(p,E,R.value,S);if(D===null){E===null&&(E=C);break}n&&E&&D.alternate===null&&e(p,E),g=s(D,g,y),T===null?w=D:T.sibling=D,T=D,E=C}if(R.done)return t(p,E),Bt&&So(p,y),w;if(E===null){for(;!R.done;y++,R=x.next())R=d(p,R.value,S),R!==null&&(g=s(R,g,y),T===null?w=R:T.sibling=R,T=R);return Bt&&So(p,y),w}for(E=i(p,E);!R.done;y++,R=x.next())R=h(E,p,y,R.value,S),R!==null&&(n&&R.alternate!==null&&E.delete(R.key===null?y:R.key),g=s(R,g,y),T===null?w=R:T.sibling=R,T=R);return n&&E.forEach(function(L){return e(p,L)}),Bt&&So(p,y),w}function m(p,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Da&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case dc:e:{for(var w=x.key,T=g;T!==null;){if(T.key===w){if(w=x.type,w===Da){if(T.tag===7){t(p,T.sibling),g=r(T,x.props.children),g.return=p,p=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ns&&j0(w)===T.type){t(p,T.sibling),g=r(T,x.props),g.ref=Nl(p,T,x),g.return=p,p=g;break e}t(p,T);break}else e(p,T);T=T.sibling}x.type===Da?(g=Oo(x.props.children,p.mode,S,x.key),g.return=p,p=g):(S=Ef(x.type,x.key,x.props,null,p.mode,S),S.ref=Nl(p,g,x),S.return=p,p=S)}return o(p);case Pa:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(p,g.sibling),g=r(g,x.children||[]),g.return=p,p=g;break e}else{t(p,g);break}else e(p,g);g=g.sibling}g=Mh(x,p.mode,S),g.return=p,p=g}return o(p);case Ns:return T=x._init,m(p,g,T(x._payload),S)}if(Yl(x))return _(p,g,x,S);if(bl(x))return v(p,g,x,S);Ec(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(p,g.sibling),g=r(g,x),g.return=p,p=g):(t(p,g),g=Sh(x,p.mode,S),g.return=p,p=g),o(p)):t(p,g)}return m}var ul=hS(!0),pS=hS(!1),Qf=fo(null),Jf=null,Ba=null,qg=null;function $g(){qg=Ba=Jf=null}function Kg(n){var e=Qf.current;Ft(Qf),n._currentValue=e}function jp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function $a(n,e){Jf=n,qg=Ba=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ci=!0),n.firstContext=null)}function rr(n){var e=n._currentValue;if(qg!==n)if(n={context:n,memoizedValue:e,next:null},Ba===null){if(Jf===null)throw Error(fe(308));Ba=n,Jf.dependencies={lanes:0,firstContext:n}}else Ba=Ba.next=n;return e}var Po=null;function Zg(n){Po===null?Po=[n]:Po.push(n)}function mS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Zg(e)):(t.next=r.next,r.next=t),e.interleaved=t,ps(n,i)}function ps(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Is=!1;function Qg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function as(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ks(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,gt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ps(n,t)}return r=i.interleaved,r===null?(e.next=e,Zg(i)):(e.next=r.next,r.next=e),i.interleaved=e,ps(n,t)}function _f(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Og(n,t)}}function Y0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ed(n,e,t,i){var r=n.updateQueue;Is=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,v=a;switch(f=e,h=t,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(h,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(h,d,f):_,f==null)break e;d=Yt({},d,f);break e;case 2:Is=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qo|=o,n.lanes=o,n.memoizedState=d}}function q0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var sc={},Or=fo(sc),Ou=fo(sc),ku=fo(sc);function Do(n){if(n===sc)throw Error(fe(174));return n}function Jg(n,e){switch(It(ku,e),It(Ou,n),It(Or,sc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ap(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ap(e,n)}Ft(Or),It(Or,e)}function cl(){Ft(Or),Ft(Ou),Ft(ku)}function _S(n){Do(ku.current);var e=Do(Or.current),t=Ap(e,n.type);e!==t&&(It(Ou,n),It(Or,t))}function e_(n){Ou.current===n&&(Ft(Or),Ft(Ou))}var Gt=fo(0);function td(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mh=[];function t_(){for(var n=0;n<mh.length;n++)mh[n]._workInProgressVersionPrimary=null;mh.length=0}var vf=ys.ReactCurrentDispatcher,gh=ys.ReactCurrentBatchConfig,Yo=0,jt=null,hn=null,wn=null,nd=!1,cu=!1,Bu=0,fw=0;function Fn(){throw Error(fe(321))}function n_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!yr(n[t],e[t]))return!1;return!0}function i_(n,e,t,i,r,s){if(Yo=s,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vf.current=n===null||n.memoizedState===null?mw:gw,n=t(i,r),cu){s=0;do{if(cu=!1,Bu=0,25<=s)throw Error(fe(301));s+=1,wn=hn=null,e.updateQueue=null,vf.current=_w,n=t(i,r)}while(cu)}if(vf.current=id,e=hn!==null&&hn.next!==null,Yo=0,wn=hn=jt=null,nd=!1,e)throw Error(fe(300));return n}function r_(){var n=Bu!==0;return Bu=0,n}function Ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?jt.memoizedState=wn=n:wn=wn.next=n,wn}function sr(){if(hn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var e=wn===null?jt.memoizedState:wn.next;if(e!==null)wn=e,hn=n;else{if(n===null)throw Error(fe(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},wn===null?jt.memoizedState=wn=n:wn=wn.next=n}return wn}function zu(n,e){return typeof e=="function"?e(n):e}function _h(n){var e=sr(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=hn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,jt.lanes|=c,qo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,yr(i,e.memoizedState)||(ci=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,jt.lanes|=s,qo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function vh(n){var e=sr(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);yr(s,e.memoizedState)||(ci=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function vS(){}function xS(n,e){var t=jt,i=sr(),r=e(),s=!yr(i.memoizedState,r);if(s&&(i.memoizedState=r,ci=!0),i=i.queue,s_(MS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||wn!==null&&wn.memoizedState.tag&1){if(t.flags|=2048,Vu(9,SS.bind(null,t,i,r,e),void 0,null),An===null)throw Error(fe(349));Yo&30||yS(t,e,r)}return r}function yS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function SS(n,e,t,i){e.value=t,e.getSnapshot=i,ES(e)&&TS(n)}function MS(n,e,t){return t(function(){ES(e)&&TS(n)})}function ES(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!yr(n,t)}catch{return!0}}function TS(n){var e=ps(n,1);e!==null&&xr(e,n,1,-1)}function $0(n){var e=Ar();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zu,lastRenderedState:n},e.queue=n,n=n.dispatch=pw.bind(null,jt,n),[e.memoizedState,n]}function Vu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function wS(){return sr().memoizedState}function xf(n,e,t,i){var r=Ar();jt.flags|=n,r.memoizedState=Vu(1|e,t,void 0,i===void 0?null:i)}function Id(n,e,t,i){var r=sr();i=i===void 0?null:i;var s=void 0;if(hn!==null){var o=hn.memoizedState;if(s=o.destroy,i!==null&&n_(i,o.deps)){r.memoizedState=Vu(e,t,s,i);return}}jt.flags|=n,r.memoizedState=Vu(1|e,t,s,i)}function K0(n,e){return xf(8390656,8,n,e)}function s_(n,e){return Id(2048,8,n,e)}function AS(n,e){return Id(4,2,n,e)}function CS(n,e){return Id(4,4,n,e)}function bS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function RS(n,e,t){return t=t!=null?t.concat([n]):null,Id(4,4,bS.bind(null,e,n),t)}function o_(){}function PS(n,e){var t=sr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&n_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function DS(n,e){var t=sr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&n_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function LS(n,e,t){return Yo&21?(yr(t,e)||(t=Oy(),jt.lanes|=t,qo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ci=!0),n.memoizedState=t)}function dw(n,e){var t=Mt;Mt=t!==0&&4>t?t:4,n(!0);var i=gh.transition;gh.transition={};try{n(!1),e()}finally{Mt=t,gh.transition=i}}function NS(){return sr().memoizedState}function hw(n,e,t){var i=Qs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},IS(n))US(e,t);else if(t=mS(n,e,t,i),t!==null){var r=ni();xr(t,n,i,r),FS(t,e,i)}}function pw(n,e,t){var i=Qs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(IS(n))US(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,yr(a,o)){var l=e.interleaved;l===null?(r.next=r,Zg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=mS(n,e,r,i),t!==null&&(r=ni(),xr(t,n,i,r),FS(t,e,i))}}function IS(n){var e=n.alternate;return n===jt||e!==null&&e===jt}function US(n,e){cu=nd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function FS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Og(n,t)}}var id={readContext:rr,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},mw={readContext:rr,useCallback:function(n,e){return Ar().memoizedState=[n,e===void 0?null:e],n},useContext:rr,useEffect:K0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xf(4194308,4,bS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xf(4194308,4,n,e)},useInsertionEffect:function(n,e){return xf(4,2,n,e)},useMemo:function(n,e){var t=Ar();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ar();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=hw.bind(null,jt,n),[i.memoizedState,n]},useRef:function(n){var e=Ar();return n={current:n},e.memoizedState=n},useState:$0,useDebugValue:o_,useDeferredValue:function(n){return Ar().memoizedState=n},useTransition:function(){var n=$0(!1),e=n[0];return n=dw.bind(null,n[1]),Ar().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=jt,r=Ar();if(Bt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),An===null)throw Error(fe(349));Yo&30||yS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,K0(MS.bind(null,i,s,n),[n]),i.flags|=2048,Vu(9,SS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ar(),e=An.identifierPrefix;if(Bt){var t=rs,i=is;t=(i&~(1<<32-vr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Bu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},gw={readContext:rr,useCallback:PS,useContext:rr,useEffect:s_,useImperativeHandle:RS,useInsertionEffect:AS,useLayoutEffect:CS,useMemo:DS,useReducer:_h,useRef:wS,useState:function(){return _h(zu)},useDebugValue:o_,useDeferredValue:function(n){var e=sr();return LS(e,hn.memoizedState,n)},useTransition:function(){var n=_h(zu)[0],e=sr().memoizedState;return[n,e]},useMutableSource:vS,useSyncExternalStore:xS,useId:NS,unstable_isNewReconciler:!1},_w={readContext:rr,useCallback:PS,useContext:rr,useEffect:s_,useImperativeHandle:RS,useInsertionEffect:AS,useLayoutEffect:CS,useMemo:DS,useReducer:vh,useRef:wS,useState:function(){return vh(zu)},useDebugValue:o_,useDeferredValue:function(n){var e=sr();return hn===null?e.memoizedState=n:LS(e,hn.memoizedState,n)},useTransition:function(){var n=vh(zu)[0],e=sr().memoizedState;return[n,e]},useMutableSource:vS,useSyncExternalStore:xS,useId:NS,unstable_isNewReconciler:!1};function dr(n,e){if(n&&n.defaultProps){e=Yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Yp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ud={isMounted:function(n){return(n=n._reactInternals)?ia(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ni(),r=Qs(n),s=as(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ks(n,s,r),e!==null&&(xr(e,n,r,i),_f(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ni(),r=Qs(n),s=as(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ks(n,s,r),e!==null&&(xr(e,n,r,i),_f(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ni(),i=Qs(n),r=as(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ks(n,r,i),e!==null&&(xr(e,n,i,t),_f(e,n,i))}};function Z0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nu(t,i)||!Nu(r,s):!0}function OS(n,e,t){var i=!1,r=ro,s=e.contextType;return typeof s=="object"&&s!==null?s=rr(s):(r=di(e)?Xo:Yn.current,i=e.contextTypes,s=(i=i!=null)?al(n,r):ro),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ud,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Q0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ud.enqueueReplaceState(e,e.state,null)}function qp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Qg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=rr(s):(s=di(e)?Xo:Yn.current,r.context=al(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ud.enqueueReplaceState(r,r.state,null),ed(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function fl(n,e){try{var t="",i=e;do t+=XE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function xh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function $p(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function kS(n,e,t){t=as(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sd||(sd=!0,sm=i),$p(n,e)},t}function BS(n,e,t){t=as(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){$p(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){$p(n,e),typeof i!="function"&&(Zs===null?Zs=new Set([this]):Zs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function J0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new vw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Lw.bind(null,n,e,t),e.then(n,n))}function ev(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function tv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=as(-1,1),e.tag=2,Ks(t,e,1))),t.lanes|=1),n)}var xw=ys.ReactCurrentOwner,ci=!1;function Qn(n,e,t,i){e.child=n===null?pS(e,null,t,i):ul(e,n.child,t,i)}function nv(n,e,t,i,r){t=t.render;var s=e.ref;return $a(e,r),i=i_(n,e,t,i,s,r),t=r_(),n!==null&&!ci?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ms(n,e,r)):(Bt&&t&&Xg(e),e.flags|=1,Qn(n,e,i,r),e.child)}function iv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!p_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,zS(n,e,s,i,r)):(n=Ef(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Nu,t(o,i)&&n.ref===e.ref)return ms(n,e,r)}return e.flags|=1,n=Js(s,i),n.ref=e.ref,n.return=e,e.child=n}function zS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Nu(s,i)&&n.ref===e.ref)if(ci=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ci=!0);else return e.lanes=n.lanes,ms(n,e,r)}return Kp(n,e,t,i,r)}function VS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Va,wi),wi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,It(Va,wi),wi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,It(Va,wi),wi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,It(Va,wi),wi|=i;return Qn(n,e,r,t),e.child}function HS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Kp(n,e,t,i,r){var s=di(t)?Xo:Yn.current;return s=al(e,s),$a(e,r),t=i_(n,e,t,i,s,r),i=r_(),n!==null&&!ci?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ms(n,e,r)):(Bt&&i&&Xg(e),e.flags|=1,Qn(n,e,t,r),e.child)}function rv(n,e,t,i,r){if(di(t)){var s=!0;$f(e)}else s=!1;if($a(e,r),e.stateNode===null)yf(n,e),OS(e,t,i),qp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=rr(u):(u=di(t)?Xo:Yn.current,u=al(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Q0(e,o,i,u),Is=!1;var f=e.memoizedState;o.state=f,ed(e,i,o,r),l=e.memoizedState,a!==i||f!==l||fi.current||Is?(typeof c=="function"&&(Yp(e,t,c,i),l=e.memoizedState),(a=Is||Z0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:dr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=rr(l):(l=di(t)?Xo:Yn.current,l=al(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Q0(e,o,i,l),Is=!1,f=e.memoizedState,o.state=f,ed(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||fi.current||Is?(typeof h=="function"&&(Yp(e,t,h,i),_=e.memoizedState),(u=Is||Z0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Zp(n,e,t,i,s,r)}function Zp(n,e,t,i,r,s){HS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&G0(e,t,!1),ms(n,e,s);i=e.stateNode,xw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ul(e,n.child,null,s),e.child=ul(e,null,a,s)):Qn(n,e,a,s),e.memoizedState=i.state,r&&G0(e,t,!0),e.child}function GS(n){var e=n.stateNode;e.pendingContext?H0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&H0(n,e.context,!1),Jg(n,e.containerInfo)}function sv(n,e,t,i,r){return ll(),Yg(r),e.flags|=256,Qn(n,e,t,i),e.child}var Qp={dehydrated:null,treeContext:null,retryLane:0};function Jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function WS(n,e,t){var i=e.pendingProps,r=Gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),It(Gt,r&1),n===null)return Xp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kd(o,i,0,null),n=Oo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Jp(t),e.memoizedState=Qp,n):a_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Js(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Js(a,s):(s=Oo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Jp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Qp,i}return s=n.child,n=s.sibling,i=Js(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function a_(n,e){return e=kd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Tc(n,e,t,i){return i!==null&&Yg(i),ul(e,n.child,null,t),n=a_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function yw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=xh(Error(fe(422))),Tc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kd({mode:"visible",children:i.children},r,0,null),s=Oo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ul(e,n.child,null,o),e.child.memoizedState=Jp(o),e.memoizedState=Qp,s);if(!(e.mode&1))return Tc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=xh(s,i,void 0),Tc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ci||a){if(i=An,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ps(n,r),xr(i,n,r,-1))}return h_(),i=xh(Error(fe(421))),Tc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Nw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Di=$s(r.nextSibling),Ii=e,Bt=!0,pr=null,n!==null&&(qi[$i++]=is,qi[$i++]=rs,qi[$i++]=jo,is=n.id,rs=n.overflow,jo=e),e=a_(e,i.children),e.flags|=4096,e)}function ov(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),jp(n.return,e,t)}function yh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function XS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qn(n,e,i.children,t),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ov(n,t,e);else if(n.tag===19)ov(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(It(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&td(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),yh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&td(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}yh(e,!0,t,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ms(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),qo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=Js(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Js(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Sw(n,e,t){switch(e.tag){case 3:GS(e),ll();break;case 5:_S(e);break;case 1:di(e.type)&&$f(e);break;case 4:Jg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;It(Qf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(It(Gt,Gt.current&1),e.flags|=128,null):t&e.child.childLanes?WS(n,e,t):(It(Gt,Gt.current&1),n=ms(n,e,t),n!==null?n.sibling:null);It(Gt,Gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return XS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),It(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,VS(n,e,t)}return ms(n,e,t)}var jS,em,YS,qS;jS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};em=function(){};YS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Do(Or.current);var s=null;switch(t){case"input":r=Mp(n,r),i=Mp(n,i),s=[];break;case"select":r=Yt({},r,{value:void 0}),i=Yt({},i,{value:void 0}),s=[];break;case"textarea":r=wp(n,r),i=wp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yf)}Cp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Au.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Au.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Il(n,e){if(!Bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function On(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Mw(n,e,t){var i=e.pendingProps;switch(jg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(e),null;case 1:return di(e.type)&&qf(),On(e),null;case 3:return i=e.stateNode,cl(),Ft(fi),Ft(Yn),t_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Mc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pr!==null&&(lm(pr),pr=null))),em(n,e),On(e),null;case 5:e_(e);var r=Do(ku.current);if(t=e.type,n!==null&&e.stateNode!=null)YS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return On(e),null}if(n=Do(Or.current),Mc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Pr]=e,i[Fu]=s,n=(e.mode&1)!==0,t){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<$l.length;r++)Ut($l[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":m0(i,s),Ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ut("invalid",i);break;case"textarea":_0(i,s),Ut("invalid",i)}Cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sc(i.textContent,a,n),r=["children",""+a]):Au.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ut("scroll",i)}switch(t){case"input":hc(i),g0(i,s,!0);break;case"textarea":hc(i),v0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=My(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Pr]=e,n[Fu]=i,jS(n,e,!1,!1),e.stateNode=n;e:{switch(o=bp(t,i),t){case"dialog":Ut("cancel",n),Ut("close",n),r=i;break;case"iframe":case"object":case"embed":Ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<$l.length;r++)Ut($l[r],n);r=i;break;case"source":Ut("error",n),r=i;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),r=i;break;case"details":Ut("toggle",n),r=i;break;case"input":m0(n,i),r=Mp(n,i),Ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Yt({},i,{value:void 0}),Ut("invalid",n);break;case"textarea":_0(n,i),r=wp(n,i),Ut("invalid",n);break;default:r=i}Cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ey(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Cu(n,l):typeof l=="number"&&Cu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Au.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ut("scroll",n):l!=null&&Dg(n,s,l,o))}switch(t){case"input":hc(n),g0(n,i,!1);break;case"textarea":hc(n),v0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+io(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Xa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Xa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return On(e),null;case 6:if(n&&e.stateNode!=null)qS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=Do(ku.current),Do(Or.current),Mc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Pr]=e,(s=i.nodeValue!==t)&&(n=Ii,n!==null))switch(n.tag){case 3:Sc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Pr]=e,e.stateNode=i}return On(e),null;case 13:if(Ft(Gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Di!==null&&e.mode&1&&!(e.flags&128))dS(),ll(),e.flags|=98560,s=!1;else if(s=Mc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[Pr]=e}else ll(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;On(e),s=!1}else pr!==null&&(lm(pr),pr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Gt.current&1?mn===0&&(mn=3):h_())),e.updateQueue!==null&&(e.flags|=4),On(e),null);case 4:return cl(),em(n,e),n===null&&Iu(e.stateNode.containerInfo),On(e),null;case 10:return Kg(e.type._context),On(e),null;case 17:return di(e.type)&&qf(),On(e),null;case 19:if(Ft(Gt),s=e.memoizedState,s===null)return On(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Il(s,!1);else{if(mn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=td(n),o!==null){for(e.flags|=128,Il(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return It(Gt,Gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&tn()>dl&&(e.flags|=128,i=!0,Il(s,!1),e.lanes=4194304)}else{if(!i)if(n=td(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Bt)return On(e),null}else 2*tn()-s.renderingStartTime>dl&&t!==1073741824&&(e.flags|=128,i=!0,Il(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tn(),e.sibling=null,t=Gt.current,It(Gt,i?t&1|2:t&1),e):(On(e),null);case 22:case 23:return d_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wi&1073741824&&(On(e),e.subtreeFlags&6&&(e.flags|=8192)):On(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function Ew(n,e){switch(jg(e),e.tag){case 1:return di(e.type)&&qf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return cl(),Ft(fi),Ft(Yn),t_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return e_(e),null;case 13:if(Ft(Gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));ll()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ft(Gt),null;case 4:return cl(),null;case 10:return Kg(e.type._context),null;case 22:case 23:return d_(),null;case 24:return null;default:return null}}var wc=!1,Hn=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,Re=null;function za(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){$t(n,e,i)}else t.current=null}function tm(n,e,t){try{t()}catch(i){$t(n,e,i)}}var av=!1;function ww(n,e){if(kp=Wf,n=Jy(),Wg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bp={focusedElem:n,selectionRange:t},Wf=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:dr(e.type,v),m);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(S){$t(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return _=av,av=!1,_}function fu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&tm(e,t,s)}r=r.next}while(r!==i)}}function Fd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function nm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $S(n){var e=n.alternate;e!==null&&(n.alternate=null,$S(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Pr],delete e[Fu],delete e[Hp],delete e[aw],delete e[lw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function KS(n){return n.tag===5||n.tag===3||n.tag===4}function lv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||KS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function im(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yf));else if(i!==4&&(n=n.child,n!==null))for(im(n,e,t),n=n.sibling;n!==null;)im(n,e,t),n=n.sibling}function rm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(rm(n,e,t),n=n.sibling;n!==null;)rm(n,e,t),n=n.sibling}var bn=null,hr=!1;function ws(n,e,t){for(t=t.child;t!==null;)ZS(n,e,t),t=t.sibling}function ZS(n,e,t){if(Fr&&typeof Fr.onCommitFiberUnmount=="function")try{Fr.onCommitFiberUnmount(bd,t)}catch{}switch(t.tag){case 5:Hn||za(t,e);case 6:var i=bn,r=hr;bn=null,ws(n,e,t),bn=i,hr=r,bn!==null&&(hr?(n=bn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):bn.removeChild(t.stateNode));break;case 18:bn!==null&&(hr?(n=bn,t=t.stateNode,n.nodeType===8?hh(n.parentNode,t):n.nodeType===1&&hh(n,t),Du(n)):hh(bn,t.stateNode));break;case 4:i=bn,r=hr,bn=t.stateNode.containerInfo,hr=!0,ws(n,e,t),bn=i,hr=r;break;case 0:case 11:case 14:case 15:if(!Hn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tm(t,e,o),r=r.next}while(r!==i)}ws(n,e,t);break;case 1:if(!Hn&&(za(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){$t(t,e,a)}ws(n,e,t);break;case 21:ws(n,e,t);break;case 22:t.mode&1?(Hn=(i=Hn)||t.memoizedState!==null,ws(n,e,t),Hn=i):ws(n,e,t);break;default:ws(n,e,t)}}function uv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Tw),e.forEach(function(i){var r=Iw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ar(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bn=a.stateNode,hr=!1;break e;case 3:bn=a.stateNode.containerInfo,hr=!0;break e;case 4:bn=a.stateNode.containerInfo,hr=!0;break e}a=a.return}if(bn===null)throw Error(fe(160));ZS(s,o,r),bn=null,hr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){$t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)QS(e,n),e=e.sibling}function QS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ar(e,n),Er(n),i&4){try{fu(3,n,n.return),Fd(3,n)}catch(v){$t(n,n.return,v)}try{fu(5,n,n.return)}catch(v){$t(n,n.return,v)}}break;case 1:ar(e,n),Er(n),i&512&&t!==null&&za(t,t.return);break;case 5:if(ar(e,n),Er(n),i&512&&t!==null&&za(t,t.return),n.flags&32){var r=n.stateNode;try{Cu(r,"")}catch(v){$t(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yy(r,s),bp(a,o);var u=bp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?wy(r,d):c==="dangerouslySetInnerHTML"?Ey(r,d):c==="children"?Cu(r,d):Dg(r,c,d,u)}switch(a){case"input":Ep(r,s);break;case"textarea":Sy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Xa(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xa(r,!!s.multiple,s.defaultValue,!0):Xa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fu]=s}catch(v){$t(n,n.return,v)}}break;case 6:if(ar(e,n),Er(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){$t(n,n.return,v)}}break;case 3:if(ar(e,n),Er(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Du(e.containerInfo)}catch(v){$t(n,n.return,v)}break;case 4:ar(e,n),Er(n);break;case 13:ar(e,n),Er(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(c_=tn())),i&4&&uv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Hn=(u=Hn)||c,ar(e,n),Hn=u):ar(e,n),Er(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Re=n,c=n.child;c!==null;){for(d=Re=c;Re!==null;){switch(f=Re,h=f.child,f.tag){case 0:case 11:case 14:case 15:fu(4,f,f.return);break;case 1:za(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){$t(i,t,v)}}break;case 5:za(f,f.return);break;case 22:if(f.memoizedState!==null){fv(d);continue}}h!==null?(h.return=f,Re=h):fv(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ty("display",o))}catch(v){$t(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){$t(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ar(e,n),Er(n),i&4&&uv(n);break;case 21:break;default:ar(e,n),Er(n)}}function Er(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(KS(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Cu(r,""),i.flags&=-33);var s=lv(n);rm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lv(n);im(n,a,o);break;default:throw Error(fe(161))}}catch(l){$t(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Aw(n,e,t){Re=n,JS(n)}function JS(n,e,t){for(var i=(n.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Hn;a=wc;var u=Hn;if(wc=o,(Hn=l)&&!u)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?dv(r):l!==null?(l.return=o,Re=l):dv(r);for(;s!==null;)Re=s,JS(s),s=s.sibling;Re=r,wc=a,Hn=u}cv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):cv(n)}}function cv(n){for(;Re!==null;){var e=Re;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Hn||Fd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Hn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:dr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&q0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}q0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Du(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Hn||e.flags&512&&nm(e)}catch(f){$t(e,e.return,f)}}if(e===n){Re=null;break}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}}function fv(n){for(;Re!==null;){var e=Re;if(e===n){Re=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Re=t;break}Re=e.return}}function dv(n){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Fd(4,e)}catch(l){$t(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){$t(e,r,l)}}var s=e.return;try{nm(e)}catch(l){$t(e,s,l)}break;case 5:var o=e.return;try{nm(e)}catch(l){$t(e,o,l)}}}catch(l){$t(e,e.return,l)}if(e===n){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Cw=Math.ceil,rd=ys.ReactCurrentDispatcher,l_=ys.ReactCurrentOwner,nr=ys.ReactCurrentBatchConfig,gt=0,An=null,cn=null,Dn=0,wi=0,Va=fo(0),mn=0,Hu=null,qo=0,Od=0,u_=0,du=null,li=null,c_=0,dl=1/0,Zr=null,sd=!1,sm=null,Zs=null,Ac=!1,Bs=null,od=0,hu=0,om=null,Sf=-1,Mf=0;function ni(){return gt&6?tn():Sf!==-1?Sf:Sf=tn()}function Qs(n){return n.mode&1?gt&2&&Dn!==0?Dn&-Dn:cw.transition!==null?(Mf===0&&(Mf=Oy()),Mf):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Wy(n.type)),n):1}function xr(n,e,t,i){if(50<hu)throw hu=0,om=null,Error(fe(185));nc(n,t,i),(!(gt&2)||n!==An)&&(n===An&&(!(gt&2)&&(Od|=t),mn===4&&Fs(n,Dn)),hi(n,i),t===1&&gt===0&&!(e.mode&1)&&(dl=tn()+500,Nd&&ho()))}function hi(n,e){var t=n.callbackNode;cT(n,e);var i=Gf(n,n===An?Dn:0);if(i===0)t!==null&&S0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&S0(t),e===1)n.tag===0?uw(hv.bind(null,n)):uS(hv.bind(null,n)),sw(function(){!(gt&6)&&ho()}),t=null;else{switch(ky(i)){case 1:t=Fg;break;case 4:t=Uy;break;case 16:t=Hf;break;case 536870912:t=Fy;break;default:t=Hf}t=a1(t,e1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function e1(n,e){if(Sf=-1,Mf=0,gt&6)throw Error(fe(327));var t=n.callbackNode;if(Ka()&&n.callbackNode!==t)return null;var i=Gf(n,n===An?Dn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ad(n,i);else{e=i;var r=gt;gt|=2;var s=n1();(An!==n||Dn!==e)&&(Zr=null,dl=tn()+500,Fo(n,e));do try{Pw();break}catch(a){t1(n,a)}while(!0);$g(),rd.current=s,gt=r,cn!==null?e=0:(An=null,Dn=0,e=mn)}if(e!==0){if(e===2&&(r=Np(n),r!==0&&(i=r,e=am(n,r))),e===1)throw t=Hu,Fo(n,0),Fs(n,i),hi(n,tn()),t;if(e===6)Fs(n,i);else{if(r=n.current.alternate,!(i&30)&&!bw(r)&&(e=ad(n,i),e===2&&(s=Np(n),s!==0&&(i=s,e=am(n,s))),e===1))throw t=Hu,Fo(n,0),Fs(n,i),hi(n,tn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Mo(n,li,Zr);break;case 3:if(Fs(n,i),(i&130023424)===i&&(e=c_+500-tn(),10<e)){if(Gf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ni(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Vp(Mo.bind(null,n,li,Zr),e);break}Mo(n,li,Zr);break;case 4:if(Fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-vr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cw(i/1960))-i,10<i){n.timeoutHandle=Vp(Mo.bind(null,n,li,Zr),i);break}Mo(n,li,Zr);break;case 5:Mo(n,li,Zr);break;default:throw Error(fe(329))}}}return hi(n,tn()),n.callbackNode===t?e1.bind(null,n):null}function am(n,e){var t=du;return n.current.memoizedState.isDehydrated&&(Fo(n,e).flags|=256),n=ad(n,e),n!==2&&(e=li,li=t,e!==null&&lm(e)),n}function lm(n){li===null?li=n:li.push.apply(li,n)}function bw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!yr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fs(n,e){for(e&=~u_,e&=~Od,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vr(e),i=1<<t;n[t]=-1,e&=~i}}function hv(n){if(gt&6)throw Error(fe(327));Ka();var e=Gf(n,0);if(!(e&1))return hi(n,tn()),null;var t=ad(n,e);if(n.tag!==0&&t===2){var i=Np(n);i!==0&&(e=i,t=am(n,i))}if(t===1)throw t=Hu,Fo(n,0),Fs(n,e),hi(n,tn()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Mo(n,li,Zr),hi(n,tn()),null}function f_(n,e){var t=gt;gt|=1;try{return n(e)}finally{gt=t,gt===0&&(dl=tn()+500,Nd&&ho())}}function $o(n){Bs!==null&&Bs.tag===0&&!(gt&6)&&Ka();var e=gt;gt|=1;var t=nr.transition,i=Mt;try{if(nr.transition=null,Mt=1,n)return n()}finally{Mt=i,nr.transition=t,gt=e,!(gt&6)&&ho()}}function d_(){wi=Va.current,Ft(Va)}function Fo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,rw(t)),cn!==null)for(t=cn.return;t!==null;){var i=t;switch(jg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&qf();break;case 3:cl(),Ft(fi),Ft(Yn),t_();break;case 5:e_(i);break;case 4:cl();break;case 13:Ft(Gt);break;case 19:Ft(Gt);break;case 10:Kg(i.type._context);break;case 22:case 23:d_()}t=t.return}if(An=n,cn=n=Js(n.current,null),Dn=wi=e,mn=0,Hu=null,u_=Od=qo=0,li=du=null,Po!==null){for(e=0;e<Po.length;e++)if(t=Po[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Po=null}return n}function t1(n,e){do{var t=cn;try{if($g(),vf.current=id,nd){for(var i=jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nd=!1}if(Yo=0,wn=hn=jt=null,cu=!1,Bu=0,l_.current=null,t===null||t.return===null){mn=1,Hu=e,cn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ev(o);if(h!==null){h.flags&=-257,tv(h,o,a,s,e),h.mode&1&&J0(s,u,e),e=h,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){J0(s,u,e),h_();break e}l=Error(fe(426))}}else if(Bt&&a.mode&1){var m=ev(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tv(m,o,a,s,e),Yg(fl(l,a));break e}}s=l=fl(l,a),mn!==4&&(mn=2),du===null?du=[s]:du.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=kS(s,l,e);Y0(s,p);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zs===null||!Zs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=BS(s,a,e);Y0(s,S);break e}}s=s.return}while(s!==null)}r1(t)}catch(w){e=w,cn===t&&t!==null&&(cn=t=t.return);continue}break}while(!0)}function n1(){var n=rd.current;return rd.current=id,n===null?id:n}function h_(){(mn===0||mn===3||mn===2)&&(mn=4),An===null||!(qo&268435455)&&!(Od&268435455)||Fs(An,Dn)}function ad(n,e){var t=gt;gt|=2;var i=n1();(An!==n||Dn!==e)&&(Zr=null,Fo(n,e));do try{Rw();break}catch(r){t1(n,r)}while(!0);if($g(),gt=t,rd.current=i,cn!==null)throw Error(fe(261));return An=null,Dn=0,mn}function Rw(){for(;cn!==null;)i1(cn)}function Pw(){for(;cn!==null&&!tT();)i1(cn)}function i1(n){var e=o1(n.alternate,n,wi);n.memoizedProps=n.pendingProps,e===null?r1(n):cn=e,l_.current=null}function r1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Ew(t,e),t!==null){t.flags&=32767,cn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,cn=null;return}}else if(t=Mw(t,e,wi),t!==null){cn=t;return}if(e=e.sibling,e!==null){cn=e;return}cn=e=n}while(e!==null);mn===0&&(mn=5)}function Mo(n,e,t){var i=Mt,r=nr.transition;try{nr.transition=null,Mt=1,Dw(n,e,t,i)}finally{nr.transition=r,Mt=i}return null}function Dw(n,e,t,i){do Ka();while(Bs!==null);if(gt&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(fT(n,s),n===An&&(cn=An=null,Dn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ac||(Ac=!0,a1(Hf,function(){return Ka(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=nr.transition,nr.transition=null;var o=Mt;Mt=1;var a=gt;gt|=4,l_.current=null,ww(n,t),QS(t,n),ZT(Bp),Wf=!!kp,Bp=kp=null,n.current=t,Aw(t),nT(),gt=a,Mt=o,nr.transition=s}else n.current=t;if(Ac&&(Ac=!1,Bs=n,od=r),s=n.pendingLanes,s===0&&(Zs=null),sT(t.stateNode),hi(n,tn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sd)throw sd=!1,n=sm,sm=null,n;return od&1&&n.tag!==0&&Ka(),s=n.pendingLanes,s&1?n===om?hu++:(hu=0,om=n):hu=0,ho(),null}function Ka(){if(Bs!==null){var n=ky(od),e=nr.transition,t=Mt;try{if(nr.transition=null,Mt=16>n?16:n,Bs===null)var i=!1;else{if(n=Bs,Bs=null,od=0,gt&6)throw Error(fe(331));var r=gt;for(gt|=4,Re=n.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Re=u;Re!==null;){var c=Re;switch(c.tag){case 0:case 11:case 15:fu(8,c,s)}var d=c.child;if(d!==null)d.return=c,Re=d;else for(;Re!==null;){c=Re;var f=c.sibling,h=c.return;if($S(c),c===u){Re=null;break}if(f!==null){f.return=h,Re=f;break}Re=h}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Re=p;break e}Re=s.return}}var g=n.current;for(Re=g;Re!==null;){o=Re;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Re=x;else e:for(o=g;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fd(9,a)}}catch(w){$t(a,a.return,w)}if(a===o){Re=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Re=S;break e}Re=a.return}}if(gt=r,ho(),Fr&&typeof Fr.onPostCommitFiberRoot=="function")try{Fr.onPostCommitFiberRoot(bd,n)}catch{}i=!0}return i}finally{Mt=t,nr.transition=e}}return!1}function pv(n,e,t){e=fl(t,e),e=kS(n,e,1),n=Ks(n,e,1),e=ni(),n!==null&&(nc(n,1,e),hi(n,e))}function $t(n,e,t){if(n.tag===3)pv(n,n,t);else for(;e!==null;){if(e.tag===3){pv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zs===null||!Zs.has(i))){n=fl(t,n),n=BS(e,n,1),e=Ks(e,n,1),n=ni(),e!==null&&(nc(e,1,n),hi(e,n));break}}e=e.return}}function Lw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ni(),n.pingedLanes|=n.suspendedLanes&t,An===n&&(Dn&t)===t&&(mn===4||mn===3&&(Dn&130023424)===Dn&&500>tn()-c_?Fo(n,0):u_|=t),hi(n,e)}function s1(n,e){e===0&&(n.mode&1?(e=gc,gc<<=1,!(gc&130023424)&&(gc=4194304)):e=1);var t=ni();n=ps(n,e),n!==null&&(nc(n,e,t),hi(n,t))}function Nw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),s1(n,t)}function Iw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),s1(n,t)}var o1;o1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||fi.current)ci=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ci=!1,Sw(n,e,t);ci=!!(n.flags&131072)}else ci=!1,Bt&&e.flags&1048576&&cS(e,Zf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yf(n,e),n=e.pendingProps;var r=al(e,Yn.current);$a(e,t),r=i_(null,e,i,n,r,t);var s=r_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,di(i)?(s=!0,$f(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qg(e),r.updater=Ud,e.stateNode=r,r._reactInternals=e,qp(e,i,n,t),e=Zp(null,e,i,!0,s,t)):(e.tag=0,Bt&&s&&Xg(e),Qn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fw(i),n=dr(i,n),r){case 0:e=Kp(null,e,i,n,t);break e;case 1:e=rv(null,e,i,n,t);break e;case 11:e=nv(null,e,i,n,t);break e;case 14:e=iv(null,e,i,dr(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dr(i,r),Kp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dr(i,r),rv(n,e,i,r,t);case 3:e:{if(GS(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gS(n,e),ed(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fl(Error(fe(423)),e),e=sv(n,e,i,t,r);break e}else if(i!==r){r=fl(Error(fe(424)),e),e=sv(n,e,i,t,r);break e}else for(Di=$s(e.stateNode.containerInfo.firstChild),Ii=e,Bt=!0,pr=null,t=pS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ll(),i===r){e=ms(n,e,t);break e}Qn(n,e,i,t)}e=e.child}return e;case 5:return _S(e),n===null&&Xp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,zp(i,r)?o=null:s!==null&&zp(i,s)&&(e.flags|=32),HS(n,e),Qn(n,e,o,t),e.child;case 6:return n===null&&Xp(e),null;case 13:return WS(n,e,t);case 4:return Jg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ul(e,null,i,t):Qn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dr(i,r),nv(n,e,i,r,t);case 7:return Qn(n,e,e.pendingProps,t),e.child;case 8:return Qn(n,e,e.pendingProps.children,t),e.child;case 12:return Qn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,It(Qf,i._currentValue),i._currentValue=o,s!==null)if(yr(s.value,o)){if(s.children===r.children&&!fi.current){e=ms(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=as(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),jp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),jp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$a(e,t),r=rr(r),i=i(r),e.flags|=1,Qn(n,e,i,t),e.child;case 14:return i=e.type,r=dr(i,e.pendingProps),r=dr(i.type,r),iv(n,e,i,r,t);case 15:return zS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:dr(i,r),yf(n,e),e.tag=1,di(i)?(n=!0,$f(e)):n=!1,$a(e,t),OS(e,i,r),qp(e,i,r,t),Zp(null,e,i,!0,n,t);case 19:return XS(n,e,t);case 22:return VS(n,e,t)}throw Error(fe(156,e.tag))};function a1(n,e){return Iy(n,e)}function Uw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ji(n,e,t,i){return new Uw(n,e,t,i)}function p_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fw(n){if(typeof n=="function")return p_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ng)return 11;if(n===Ig)return 14}return 2}function Js(n,e){var t=n.alternate;return t===null?(t=Ji(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ef(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")p_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Da:return Oo(t.children,r,s,e);case Lg:o=8,r|=8;break;case vp:return n=Ji(12,t,e,r|2),n.elementType=vp,n.lanes=s,n;case xp:return n=Ji(13,t,e,r),n.elementType=xp,n.lanes=s,n;case yp:return n=Ji(19,t,e,r),n.elementType=yp,n.lanes=s,n;case _y:return kd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case my:o=10;break e;case gy:o=9;break e;case Ng:o=11;break e;case Ig:o=14;break e;case Ns:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=Ji(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Oo(n,e,t,i){return n=Ji(7,n,i,e),n.lanes=t,n}function kd(n,e,t,i){return n=Ji(22,n,i,e),n.elementType=_y,n.lanes=t,n.stateNode={isHidden:!1},n}function Sh(n,e,t){return n=Ji(6,n,null,e),n.lanes=t,n}function Mh(n,e,t){return e=Ji(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ow(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function m_(n,e,t,i,r,s,o,a,l){return n=new Ow(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ji(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qg(s),n}function kw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function l1(n){if(!n)return ro;n=n._reactInternals;e:{if(ia(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(di(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(di(t))return lS(n,t,e)}return e}function u1(n,e,t,i,r,s,o,a,l){return n=m_(t,i,!0,n,r,s,o,a,l),n.context=l1(null),t=n.current,i=ni(),r=Qs(t),s=as(i,r),s.callback=e??null,Ks(t,s,r),n.current.lanes=r,nc(n,r,i),hi(n,i),n}function Bd(n,e,t,i){var r=e.current,s=ni(),o=Qs(r);return t=l1(t),e.context===null?e.context=t:e.pendingContext=t,e=as(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ks(r,e,o),n!==null&&(xr(n,r,o,s),_f(n,r,o)),o}function ld(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function g_(n,e){mv(n,e),(n=n.alternate)&&mv(n,e)}function Bw(){return null}var c1=typeof reportError=="function"?reportError:function(n){console.error(n)};function __(n){this._internalRoot=n}zd.prototype.render=__.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));Bd(n,e,null,null)};zd.prototype.unmount=__.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$o(function(){Bd(null,n,null,null)}),e[hs]=null}};function zd(n){this._internalRoot=n}zd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Vy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Us.length&&e!==0&&e<Us[t].priority;t++);Us.splice(t,0,n),t===0&&Gy(n)}};function v_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gv(){}function zw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ld(o);s.call(u)}}var o=u1(e,i,n,0,null,!1,!1,"",gv);return n._reactRootContainer=o,n[hs]=o.current,Iu(n.nodeType===8?n.parentNode:n),$o(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ld(l);a.call(u)}}var l=m_(n,0,!1,null,null,!1,!1,"",gv);return n._reactRootContainer=l,n[hs]=l.current,Iu(n.nodeType===8?n.parentNode:n),$o(function(){Bd(e,l,t,i)}),l}function Hd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ld(o);a.call(l)}}Bd(e,o,n,r)}else o=zw(t,e,n,r,i);return ld(o)}By=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ql(e.pendingLanes);t!==0&&(Og(e,t|1),hi(e,tn()),!(gt&6)&&(dl=tn()+500,ho()))}break;case 13:$o(function(){var i=ps(n,1);if(i!==null){var r=ni();xr(i,n,1,r)}}),g_(n,1)}};kg=function(n){if(n.tag===13){var e=ps(n,134217728);if(e!==null){var t=ni();xr(e,n,134217728,t)}g_(n,134217728)}};zy=function(n){if(n.tag===13){var e=Qs(n),t=ps(n,e);if(t!==null){var i=ni();xr(t,n,e,i)}g_(n,e)}};Vy=function(){return Mt};Hy=function(n,e){var t=Mt;try{return Mt=n,e()}finally{Mt=t}};Pp=function(n,e,t){switch(e){case"input":if(Ep(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ld(i);if(!r)throw Error(fe(90));xy(i),Ep(i,r)}}}break;case"textarea":Sy(n,t);break;case"select":e=t.value,e!=null&&Xa(n,!!t.multiple,e,!1)}};by=f_;Ry=$o;var Vw={usingClientEntryPoint:!1,Events:[rc,Ua,Ld,Ay,Cy,f_]},Ul={findFiberByHostInstance:Ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hw={bundleType:Ul.bundleType,version:Ul.version,rendererPackageName:Ul.rendererPackageName,rendererConfig:Ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ys.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ly(n),n===null?null:n.stateNode},findFiberByHostInstance:Ul.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{bd=Cc.inject(Hw),Fr=Cc}catch{}}Vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;Vi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v_(e))throw Error(fe(200));return kw(n,e,null,t)};Vi.createRoot=function(n,e){if(!v_(n))throw Error(fe(299));var t=!1,i="",r=c1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=m_(n,1,!1,null,null,t,!1,i,r),n[hs]=e.current,Iu(n.nodeType===8?n.parentNode:n),new __(e)};Vi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=Ly(e),n=n===null?null:n.stateNode,n};Vi.flushSync=function(n){return $o(n)};Vi.hydrate=function(n,e,t){if(!Vd(e))throw Error(fe(200));return Hd(null,n,e,!0,t)};Vi.hydrateRoot=function(n,e,t){if(!v_(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=c1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=u1(e,null,n,1,t??null,r,!1,s,o),n[hs]=e.current,Iu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new zd(e)};Vi.render=function(n,e,t){if(!Vd(e))throw Error(fe(200));return Hd(null,n,e,!1,t)};Vi.unmountComponentAtNode=function(n){if(!Vd(n))throw Error(fe(40));return n._reactRootContainer?($o(function(){Hd(null,null,n,!1,function(){n._reactRootContainer=null,n[hs]=null})}),!0):!1};Vi.unstable_batchedUpdates=f_;Vi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Vd(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Hd(n,e,t,!1,i)};Vi.version="18.3.1-next-f1338f8080-20240426";function f1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1)}catch(n){console.error(n)}}f1(),fy.exports=Vi;var Gw=fy.exports,_v=Gw;gp.createRoot=_v.createRoot,gp.hydrateRoot=_v.hydrateRoot;function Qr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gu={duration:.5,overwrite:!1,delay:0},x_,Ln,zt,er=1e8,Pt=1/er,um=Math.PI*2,Ww=um/4,Xw=0,h1=Math.sqrt,jw=Math.cos,Yw=Math.sin,Cn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},gs=function(e){return typeof e=="number"},y_=function(e){return typeof e>"u"},Hr=function(e){return typeof e=="object"},pi=function(e){return e!==!1},S_=function(){return typeof window<"u"},bc=function(e){return Kt(e)||Cn(e)},p1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,qw=/random\([^)]+\)/g,$w=/,\s*/g,vv=/(?:-?\.?\d|\.)+/gi,m1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ha=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g1=/[+-]=-?[.\d]+/,Kw=/[^,'"\[\]\s]+/gi,Zw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Cr,cm,M_,ki={},ud={},_1,v1=function(e){return(ud=hl(e,ki))&&xi},E_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wu=function(e,t){return!t&&console.warn(e)},x1=function(e,t){return e&&(ki[e]=t)&&ud&&(ud[e]=t)||ki},Xu=function(){return 0},Qw={suppressEvents:!0,isStart:!0,kill:!1},Tf={suppressEvents:!0,kill:!1},Jw={suppressEvents:!0},T_={},eo=[],fm={},y1,Ci={},Th={},xv=30,wf=[],w_="",A_=function(e){var t=e[0],i,r;if(Hr(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=wf.length;r--&&!wf[r].targetTest(t););i=wf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new H1(e[r],i)))||e.splice(r,1);return e},ko=function(e){return e._gsap||A_(tr(e))[0]._gsap},S1=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():y_(i)&&e.getAttribute&&e.getAttribute(t)||i},mi=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Za=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},eA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},cd=function(){var e=eo.length,t=eo.slice(0),i,r;for(fm={},eo.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},C_=function(e){return!!(e._initted||e._startAt||e.add)},M1=function(e,t,i,r){eo.length&&!Ln&&cd(),e.render(t,i,!!(Ln&&t<0&&C_(e))),eo.length&&!Ln&&cd()},E1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kw).length<2?t:Cn(e)?e.trim():e},T1=function(e){return e},Bi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},tA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},hl=function(e,t){for(var i in t)e[i]=t[i];return e},yv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Hr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},fd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},pu=function(e){var t=e.parent||Wt,i=e.keyframes?tA(jn(e.keyframes)):Bi;if(pi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},w1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Gd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},so=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},iA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dm=function(e,t,i,r){return e._startAt&&(Ln?e._startAt.revert(Tf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rA=function n(e){return!e||e._ts&&n(e.parent)},Sv=function(e){return e._repeat?pl(e._tTime,e=e.duration()+e._rDelay)*e:0},pl=function(e,t){var i=Math.floor(e=Ht(e/t));return e&&i===e?i-1:i},dd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wd=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Xd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wd(e),i._dirty||Bo(i,e)),e},A1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=dd(e.rawTime(),t),(!t._dur||oc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Bo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},Dr=function(e,t,i,r){return t.parent&&so(t),t._start=Ht((gs(i)?i:i||e!==Wt?ji(e,i,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),w1(e,t,"_first","_last",e._sort?"_start":0),hm(t)||(e._recent=t),r||A1(e,t),e._ts<0&&Xd(e,e._tTime),e},C1=function(e,t){return(ki.ScrollTrigger||E_("scrollTrigger",t))&&ki.ScrollTrigger.create(t,e)},b1=function(e,t,i,r,s){if(R_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&y1!==Ri.frame)return eo.push(e),e._lazy=[s,r],1},sA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},hm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sA(e)&&!(!e._initted&&hm(e))||(e._ts<0||e._dp._ts<0)&&!hm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=oc(0,e._tDur,t),c=pl(l,a),e._yoyo&&c&1&&(o=1-o),c!==pl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&b1(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&dm(e,t,i,!0),e._onUpdate&&!i&&Li(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&so(e,1),!i&&!Ln&&(Li(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ml=function(e,t,i,r){var s=e._repeat,o=Ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Xd(e,e._tTime=e._tDur*a),e.parent&&Wd(e),i||Bo(e.parent,e),e},Mv=function(e){return e instanceof ui?Bo(e):ml(e,e._dur)},lA={_start:0,endTime:Xu,totalDuration:Xu},ji=function n(e,t,i){var r=e.labels,s=e._recent||lA,o=e.duration()>=er?s.endTime(!1):e._dur,a,l,u;return Cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(jn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},mu=function(e,t,i){var r=gs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pi(l.vars.inherit)&&l.parent;o.immediateRender=pi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new un(t[0],o,t[s+1])},po=function(e,t){return e||e===0?t(e):t},oc=function(e,t,i){return i<e?e:i>t?t:i},Gn=function(e,t){return!Cn(e)||!(t=Zw.exec(e))?"":t[1]},uA=function(e,t,i){return po(i,function(r){return oc(e,t,r)})},pm=[].slice,R1=function(e,t){return e&&Hr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hr(e[0]))&&!e.nodeType&&e!==Cr},cA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Cn(r)&&!t||R1(r,1)?(s=i).push.apply(s,tr(r)):i.push(r)})||i},tr=function(e,t,i){return zt&&!t&&zt.selector?zt.selector(e):Cn(e)&&!i&&(cm||!gl())?pm.call((t||M_).querySelectorAll(e),0):jn(e)?cA(e,i):R1(e)?pm.call(e,0):e?[e]:[]},mm=function(e){return e=tr(e)[0]||Wu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return tr(t,i.querySelectorAll?i:i===e?Wu("Invalid scope")||M_.createElement("div"):e)}},P1=function(e){return e.sort(function(){return .5-Math.random()})},D1=function(e){if(Kt(e))return e;var t=Hr(e)?e:{each:e},i=zo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Cn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,h,_){var v=(_||t).length,m=o[v],p,g,x,S,w,T,E,y,C;if(!m){if(C=t.grid==="auto"?0:(t.grid||[1,er])[1],!C){for(E=-er;E<(E=_[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(m=o[v]=[],p=l?Math.min(C,v)*c-.5:r%C,g=C===er?0:l?v*d/C-.5:r/C|0,E=0,y=er,T=0;T<v;T++)x=T%C-p,S=g-(T/C|0),m[T]=w=u?Math.abs(u==="y"?S:x):h1(x*x+S*S),w>E&&(E=w),w<y&&(y=w);r==="random"&&P1(m),m.max=E-y,m.min=y,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:u?u==="y"?v/C:C:Math.max(C,v/C))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=Gn(t.amount||t.each)||0,i=i&&v<0?EA(i):i}return v=(m[f]-m.min)/m.max||0,Ht(m.b+(i?i(v):v)*m.v)+m.u}},gm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(gs(i)?0:Gn(i))}},L1=function(e,t){var i=jn(e),r,s;return!i&&Hr(e)&&(r=i=e.radius||er,e.values?(e=tr(e.values),(s=!gs(e[0]))&&(r*=r)):e=gm(e.increment)),po(t,i?Kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=er,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||gs(o)?c:c+Gn(o)}:gm(e))},N1=function(e,t,i,r){return po(jn(e)?!t:i===!0?!!(i=0):!r,function(){return jn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},fA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},dA=function(e,t){return function(i){return e(parseFloat(i))+(t||Gn(i))}},hA=function(e,t,i){return U1(e,t,0,1,i)},I1=function(e,t,i){return po(i,function(r){return e[~~t(r)]})},pA=function n(e,t,i){var r=t-e;return jn(e)?I1(e,n(0,e.length),t):po(i,function(s){return(r+(s-e)%r)%r+e})},mA=function n(e,t,i){var r=t-e,s=r*2;return jn(e)?I1(e,n(0,e.length-1),t):po(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ju=function(e){return e.replace(qw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split($w);return N1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},U1=function(e,t,i,r,s){var o=t-e,a=r-i;return po(s,function(l){return i+((l-e)/o*a||0)})},gA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Cn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return c[v](_-v)},i=t}else r||(e=hl(jn(e)?[]:{},e));if(!c){for(l in t)b_.call(a,e,l,"get",t[l]);s=function(_){return L_(_,a)||(o?e.p:e)}}}return po(i,s)},Ev=function(e,t,i){var r=e.labels,s=er,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Li=function(e,t,i){var r=e.vars,s=r[t],o=zt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&eo.length&&cd(),a&&(zt=a),c=l?s.apply(u,l):s.call(u),zt=o,c},Kl=function(e){return so(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Li(e,"onInterrupt"),e},Ga,F1=[],O1=function(e){if(e)if(e=!e.name&&e.default||e,S_()||e.headless){var t=e.name,i=Kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Xu,render:L_,add:b_,kill:NA,modifier:LA,rawVars:0},o={targetTest:0,get:0,getSetter:D_,aliases:{},register:0};if(gl(),e!==r){if(Ci[t])return;Bi(r,Bi(fd(e,s),o)),hl(r.prototype,hl(s,fd(e,o))),Ci[r.prop=t]=r,e.targetTest&&(wf.push(r),T_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}x1(t,r),e.register&&e.register(xi,r,gi)}else F1.push(e)},Rt=255,Zl={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},wh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},k1=function(e,t,i){var r=e?gs(e)?[e>>16,e>>8&Rt,e&Rt]:0:Zl.black,s,o,a,l,u,c,d,f,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zl[e])r=Zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(vv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=wh(l+1/3,s,o),r[1]=wh(l,s,o),r[2]=wh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(m1),i&&r.length<4&&(r[3]=1),r}else r=e.match(vv)||Zl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},B1=function(e){var t=[],i=[],r=-1;return e.split(to).forEach(function(s){var o=s.match(Ha)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Tv=function(e,t,i){var r="",s=(e+r).match(to),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=k1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=B1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(to,"1").split(Ha),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(to),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},to=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),_A=/hsl[a]?\(/,z1=function(e){var t=e.join(" "),i;if(to.lastIndex=0,to.test(t))return i=_A.test(t),e[1]=Tv(e[1],i),e[0]=Tv(e[0],i,B1(e[1])),!0},Yu,Ri=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,h,_=function v(m){var p=n()-r,g=m===!0,x,S,w,T;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,x=w-o,(x>0||g)&&(T=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,o+=x+(x>=s?4:s-x),S=1),g||(l=u(v)),S)for(h=0;h<a.length;h++)a[h](w,f,T,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){_1&&(!cm&&S_()&&(Cr=cm=window,M_=Cr.document||{},ki.gsap=xi,(Cr.gsapVersions||(Cr.gsapVersions=[])).push(xi.version),v1(ud||Cr.GreenSockGlobals||!Cr.gsap&&Cr||{}),F1.forEach(O1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Yu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Yu=0,u=Xu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,g){var x=p?function(S,w,T,E){m(S,w,T,E),d.remove(x)}:m;return d.remove(m),a[g?"unshift":"push"](x),gl(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),gl=function(){return!Yu&&Ri.wake()},ht={},vA=/^[\d.\-M][\d.\-,\s]/,xA=/["']/g,yA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(xA,"").trim():+u,r=l.substr(a+1).trim();return t},SA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},MA=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yA(t[1])]:SA(e).split(",").map(E1)):ht._CE&&vA.test(e)?ht._CE("",e):i},EA=function(e){return function(t){return 1-e(1-t)}},zo=function(e,t){return e&&(Kt(e)?e:ht[e]||MA(e))||t},ra=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return mi(e,function(a){ht[a]=ki[a]=s,ht[o=a.toLowerCase()]=i;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},V1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ah=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/um*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Yw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:V1(a);return s=um/s,l.config=function(u,c){return n(e,u,c)},l},Ch=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:V1(i);return r.config=function(s){return n(e,s)},r};mi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ra(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;ra("Elastic",Ah("in"),Ah("out"),Ah());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ra("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ra("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ra("Circ",function(n){return-(h1(1-n*n)-1)});ra("Sine",function(n){return n===1?1:-jw(n*Ww)+1});ra("Back",Ch("in"),Ch("out"),Ch());ht.SteppedEase=ht.steps=ki.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*oc(0,o,a)|0)+s)*i}}};Gu.ease=ht["quad.out"];mi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return w_+=n+","+n+"Params,"});var H1=function(e,t){this.id=Xw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:S1,this.set=t?t.getSetter:D_},qu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ml(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),Yu||Ri.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ml(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(gl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xd(this,i),!s._dp||s.parent||A1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Dr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),M1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Sv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Sv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?pl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?dd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(oc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Wd(this),iA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Dr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Jw);var r=Ln;return Ln=i,C_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Mv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Mv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ji(this,i),pi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pi(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Kt(i)?i:T1,l=function(){var c=r.then;r.then=null,s&&s(),Kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Kl(this)},n}();Bi(qu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var ui=function(n){d1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pi(i.sortChildren),Wt&&Dr(i.parent||Wt,Qr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&C1(Qr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return mu(0,arguments,this),this},t.from=function(r,s,o){return mu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return mu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,pu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new un(r,s,ji(this,o),1),this},t.call=function(r,s,o){return Dr(this,un.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new un(r,o,ji(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,pu(o).immediateRender=pi(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,pu(a).immediateRender=pi(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ht(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,_,v,m,p,g,x,S,w,T,E;if(this!==Wt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,p=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ht(c%m),c===l?(v=this._repeat,f=u):(w=Ht(c/m),v=~~w,v&&v===w&&(f=u,v--),f>u&&(f=u)),w=pl(this._tTime,m),!a&&this._tTime&&w!==v&&this._tTime-w*m-this._dur<=0&&(w=v),T&&v&1&&(f=u-f,E=1),v!==w&&!this._lock){var y=T&&w&1,C=y===(T&&v&1);if(v<w&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Ht(v*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Li(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=v),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=aA(this,Ht(a),Ht(f)),g&&(c-=f-(f=g._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Li(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){g=0,_&&(c+=this._zTime=-Pt);break}}h=_}else{h=this._last;for(var R=r<0?r:f;h;){if(_=h._prev,(h._act||R<=h._end)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,o||Ln&&C_(h)),f!==this._time||!this._ts&&!p){g=0,_&&(c+=this._zTime=R?-Pt:Pt);break}}h=_}}if(g&&!s&&(this.pause(),g.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Wd(this),this.render(r,s,o);this._onUpdate&&!s&&Li(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&so(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Li(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(gs(s)||(s=ji(this,s,r)),!(r instanceof qu)){if(jn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Cn(r))return this.addLabel(r,s);if(Kt(r))r=un.delayedCall(0,r);else return this}return this!==r?Dr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-er);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof un?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Cn(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(r.parent===this&&Gd(this,r),r===this._recent&&(this._recent=this._last),Bo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(Ri.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ji(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=un.delayedCall(0,s||Xu,o);return a.data="isPause",this._hasPause=1,Dr(this,a,ji(this,r))},t.removePause=function(r){var s=this._first;for(r=ji(this,r);s;)s._start===r&&s.data==="isPause"&&so(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)zs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=tr(r),l=this._first,u=gs(s),c;l;)l instanceof un?eA(l._targets,a)&&(u?(!zs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ji(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=un.to(o,Bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&ml(_,m,0,1).render(_._time,!0,!0),h=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bi({startAt:{time:ji(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ev(this,ji(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ev(this,ji(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Bo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Bo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=er,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Dr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ht(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ml(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Wt._ts&&(M1(Wt,dd(r,Wt)),y1=Ri.frame),Ri.frame>=xv){xv+=Ui.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Ui.autoSleep&&Ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ri.sleep()}}},e}(qu);Bi(ui.prototype,{_lock:0,_hasPause:0,_forcing:0});var TA=function(e,t,i,r,s,o,a){var l=new gi(this._pt,e,t,0,1,q1,null,s),u=0,c=0,d,f,h,_,v,m,p,g;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ju(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),f=i.match(Eh)||[];d=Eh.exec(r);)_=d[0],v=r.substring(u,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:m,c:_.charAt(1)==="="?Za(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},u=Eh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(g1.test(r)||p)&&(l.e=0),this._pt=l,l},b_=function(e,t,i,r,s,o,a,l,u,c){Kt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Kt(d)?u?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=Kt(d)?u?RA:j1:P_,_;if(Cn(r)&&(~r.indexOf("random(")&&(r=ju(r)),r.charAt(1)==="="&&(_=Za(f,r)+(Gn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||_m)return!isNaN(f*r)&&r!==""?(_=new gi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?DA:Y1,0,h),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&E_(t,r),TA.call(this,e,t,f,r,h,l||Ui.stringFilter,u))},wA=function(e,t,i,r,s){if(Kt(e)&&(e=gu(e,s,t,i,r)),!Hr(e)||e.style&&e.nodeType||jn(e)||p1(e))return Cn(e)?gu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=gu(e[a],s,t,i,r);return o},G1=function(e,t,i,r,s,o){var a,l,u,c;if(Ci[e]&&(a=new Ci[e]).init(s,a.rawVars?t[e]:wA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new gi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ga))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},zs,_m,R_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,_=e._dur,v=e._startAt,m=e._targets,p=e.parent,g=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!x_,S=e.timeline,w=r.easeReverse||d,T,E,y,C,R,D,L,G,j,N,z,U,O;if(S&&(!f||!s)&&(s="none"),e._ease=zo(s,Gu.ease),e._rEase=w&&(zo(w)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(G=m[0]?ko(m[0]).harness:0,U=G&&r[G.prop],T=fd(r,T_),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!h?v.render(-1,!0):v.revert(c&&_?Tf:Qw),v._lazy=0),o){if(so(e._startAt=un.set(m,Bi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&pi(l),startAt:null,delay:0,onUpdate:u&&function(){return Li(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!h)&&e._startAt.revert(Tf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!v){if(t&&(a=!1),y=Bi({overwrite:!1,data:"isFromStart",lazy:a&&!v&&pi(l),immediateRender:a,stagger:0,parent:p},T),U&&(y[G.prop]=U),so(e._startAt=un.set(m,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(Tf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&pi(l)||l&&!_,E=0;E<m.length;E++){if(R=m[E],L=R._gsap||A_(m)[E]._gsap,e._ptLookup[E]=N={},fm[L.id]&&eo.length&&cd(),z=g===m?E:g.indexOf(R),G&&(j=new G).init(R,U||T,e,z,g)!==!1&&(e._pt=C=new gi(e._pt,R,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(X){N[X]=C}),j.priority&&(D=1)),!G||U)for(y in T)Ci[y]&&(j=G1(y,T,e,z,R,g))?j.priority&&(D=1):N[y]=C=b_.call(e,R,y,"get",T[y],z,g,0,r.stringFilter);e._op&&e._op[E]&&e.kill(R,e._op[E]),x&&e._pt&&(zs=e,Wt.killTweensOf(R,N,e.globalTime(t)),O=!e.parent,zs=0),e._pt&&l&&(fm[L.id]=1)}D&&$1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(er,!0,!0)},AA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return _m=1,e.vars[t]="+=0",R_(e,a),_m=0,l?Wu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=en(i)+Gn(d.e)),d.b&&(d.b=c.s+Gn(d.b))},CA=function(e,t){var i=e[0]?ko(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=hl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(jn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},gu=function(e,t,i,r,s){return Kt(e)?e.call(t,i,r,s):Cn(e)&&~e.indexOf("random(")?ju(e):e},W1=w_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",X1={};mi(W1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return X1[n]=1});var un=function(n){d1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:pu(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,v=l.defaults,m=l.scrollTrigger,p=r.parent||Wt,g=(jn(i)||p1(i)?gs(i[0]):"length"in r)?[i]:tr(i),x,S,w,T,E,y,C,R;if(a._targets=g.length?A_(g):Wu("GSAP target "+i+" not found. https://gsap.com",!Ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||f||bc(u)||bc(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new ui({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:g}),x.kill(),x.parent=x._dp=Qr(a),x._start=0,f||bc(u)||bc(c)){if(T=g.length,C=f&&D1(f),Hr(f))for(E in f)~W1.indexOf(E)&&(R||(R={}),R[E]=f[E]);for(S=0;S<T;S++)w=fd(r,X1),w.stagger=0,D&&(w.easeReverse=D),R&&hl(w,R),y=g[S],w.duration=+gu(u,Qr(a),S,y,g),w.delay=(+gu(c,Qr(a),S,y,g)||0)-a._delay,!f&&T===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),x.to(y,w,C?C(S,y,g):0),x._ease=ht.none;x.duration()?u=c=0:a.timeline=0}else if(_){pu(Bi(x.vars.defaults,{ease:"none"})),x._ease=zo(_.ease||r.ease||"none");var L=0,G,j,N;if(jn(_))_.forEach(function(z){return x.to(g,z,">")}),x.duration();else{w={};for(E in _)E==="ease"||E==="easeEach"||bA(E,_[E],w,_.easeEach);for(E in w)for(G=w[E].sort(function(z,U){return z.t-U.t}),L=0,S=0;S<G.length;S++)j=G[S],N={ease:j.e,duration:(j.t-(S?G[S-1].t:0))/100*u},N[E]=j.v,x.to(g,N,L),L+=N.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!x_&&(zs=Qr(a),Wt.killTweensOf(g),zs=0),Dr(p,Qr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Ht(p._time)&&pi(d)&&rA(Qr(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-c)||0)),m&&C1(Qr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Pt&&!c?l:r<Pt?0:r,f,h,_,v,m,p,g,x;if(!u)oA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(f=Ht(d%v),d===l?(_=this._repeat,f=u):(m=Ht(d/v),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),p=this._yoyo&&_&1,p&&(f=u-f),m=pl(this._tTime,v),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Ht(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(b1(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var w=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/u);if(this._from&&(this.ratio=g=1-g),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Li(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(g,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&dm(this,r,s,o),Li(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&dm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&so(this,1),!s&&!(c&&!a)&&(d||a||p)&&(Li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Yu||Ri.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||R_(this,u),c=this._ease(u/this._dur),AA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Xd(this,0),this.parent||w1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,zs&&zs.vars.overwrite!==!0)._first||Kl(this),this.parent&&o!==this.timeline.totalDuration()&&ml(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?tr(r):a,u=this._ptLookup,c=this._pt,d,f,h,_,v,m,p;if((!s||s==="all")&&nA(a,l))return s==="all"&&(this._pt=0),Kl(this);for(d=this._op=this._op||[],s!=="all"&&(Cn(s)&&(v={},mi(s,function(g){return v[g]=1}),s=v),s=CA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(d[p]=s,_=f,h={}):(h=d[p]=d[p]||{},_=s);for(v in _)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Gd(this,m,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&c&&Kl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return mu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return mu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Wt.killTweensOf(r,s,o)},e}(qu);Bi(un.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mi("staggerTo,staggerFrom,staggerFromTo",function(n){un[n]=function(){var e=new ui,t=pm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var P_=function(e,t,i){return e[t]=i},j1=function(e,t,i){return e[t](i)},RA=function(e,t,i,r){return e[t](r.fp,i)},PA=function(e,t,i){return e.setAttribute(t,i)},D_=function(e,t){return Kt(e[t])?j1:y_(e[t])&&e.setAttribute?PA:P_},Y1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},q1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},L_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},LA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},NA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Gd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},IA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},$1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},gi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Y1,this.d=l||this,this.set=u||P_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=IA,this.m=i,this.mt=s,this.tween=r},n}();mi(w_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return T_[n]=1});ki.TweenMax=ki.TweenLite=un;ki.TimelineLite=ki.TimelineMax=ui;Wt=new ui({sortChildren:!1,defaults:Gu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ui.stringFilter=z1;var Vo=[],Af={},UA=[],wv=0,FA=0,bh=function(e){return(Af[e]||UA).map(function(t){return t()})},vm=function(){var e=Date.now(),t=[];e-wv>2&&(bh("matchMediaInit"),Vo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),bh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),wv=e,bh("matchMedia"))},K1=function(){function n(t,i){this.selector=i&&mm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=FA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Kt(i)&&(s=r,r=i,i=Kt);var o=this,a=function(){var u=zt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=mm(s)),zt=o,d=r.apply(o,arguments),Kt(d)&&o._r.push(d),zt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=zt;zt=null,i(this),zt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof un&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof ui?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof un)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Vo.length;o--;)Vo[o].id===this.id&&Vo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),OA=function(){function n(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Hr(i)||(i={matches:i});var o=new K1(0,s||this.scope),a=o.conditions={},l,u,c;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Cr.matchMedia(i[u]),l&&(Vo.indexOf(o)<0&&Vo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(vm):l.addEventListener("change",vm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),hd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return O1(r)})},timeline:function(e){return new ui(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Cn(e)&&(e=tr(e)[0]);var s=ko(e||{}).get,o=i?T1:E1;return i==="native"&&(i=""),e&&(t?o((Ci[t]&&Ci[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ci[a]&&Ci[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=tr(e),e.length>1){var r=e.map(function(c){return xi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Ci[t],a=ko(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ga._pt=0,d.init(e,i?c+i:c,Ga,0,[e]),d.render(1,d),Ga._pt&&L_(1,Ga)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=xi.to(e,Bi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zo(e.ease,Gu.ease)),yv(Gu,e||{})},config:function(e){return yv(Ui,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ci[a]&&!ki[a]&&Wu(t+" effect requires "+a+" plugin.")}),Th[t]=function(a,l,u){return i(tr(a),Bi(l||{},s),u)},o&&(ui.prototype[t]=function(a,l,u){return this.add(Th[t](a,Hr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ht[e]=zo(t)},parseEase:function(e,t){return arguments.length?zo(e,t):ht},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ui(e),r,s;for(i.smoothChildTiming=pi(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof un&&r.vars.onComplete===r._targets[0]))&&Dr(i,r,r._start-r._delay),r=s;return Dr(Wt,i,0),i},context:function(e,t){return e?new K1(e,t):zt},matchMedia:function(e){return new OA(e)},matchMediaRefresh:function(){return Vo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||vm()},addEventListener:function(e,t){var i=Af[e]||(Af[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Af[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:pA,wrapYoyo:mA,distribute:D1,random:N1,snap:L1,normalize:hA,getUnit:Gn,clamp:uA,splitColor:k1,toArray:tr,selector:mm,mapRange:U1,pipe:fA,unitize:dA,interpolate:gA,shuffle:P1},install:v1,effects:Th,ticker:Ri,updateRoot:ui.updateRoot,plugins:Ci,globalTimeline:Wt,core:{PropTween:gi,globals:x1,Tween:un,Timeline:ui,Animation:qu,getCache:ko,_removeLinkedListItem:Gd,reverting:function(){return Ln},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return x_=e}}};mi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return hd[n]=un[n]});Ri.add(ui.updateRoot);Ga=hd.to({},{duration:0});var kA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},BA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Rh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Cn(s)&&(l={},mi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}BA(a,s)}}}},xi=hd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Rh("roundProps",gm),Rh("modifiers"),Rh("snap",L1))||hd;un.version=ui.version=xi.version="3.15.0";_1=1;S_()&&gl();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Av,Vs,Qa,N_,Lo,Cv,I_,zA=function(){return typeof window<"u"},_s={},Eo=180/Math.PI,Ja=Math.PI/180,ca=Math.atan2,bv=1e8,U_=/([A-Z])/g,VA=/(left|right|width|margin|padding|x)/i,HA=/[\s,\(]\S/,Lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Z1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Q1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YA=function(e,t,i){return e.style[t]=i},qA=function(e,t,i){return e.style.setProperty(t,i)},$A=function(e,t,i){return e._gsap[t]=i},KA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ZA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},QA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Xt="transform",_i=Xt+"Origin",JA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in _s&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=es(r,a)}):this.tfm[e]=o.x?o[e]:es(r,e),e===_i&&(this.tfm.zOrigin=o.zOrigin);else return Lr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},J1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(U_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=I_(),(!s||!s.isStart)&&!i[Xt]&&(J1(i),r.zOrigin&&i[_i]&&(i[_i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},eM=function(e,t){var i={target:e,props:[],revert:eC,save:JA};return e._gsap||xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},tM,ym=function(e,t){var i=Vs.createElementNS?Vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vs.createElement(e);return i&&i.style?i:Vs.createElement(e)},Ni=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(U_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,_l(t)||t,1)||""},Rv="O,Moz,ms,Ms,Webkit".split(","),_l=function(e,t,i){var r=t||Lo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rv[o]:"")+e},Sm=function(){zA()&&window.document&&(Av=window,Vs=Av.document,Qa=Vs.documentElement,Lo=ym("div")||{style:{}},ym("div"),Xt=_l(Xt),_i=Xt+"Origin",Lo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tM=!!_l("perspective"),I_=xi.core.reverting,N_=1)},Pv=function(e){var t=e.ownerSVGElement,i=ym("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Qa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Qa.removeChild(i),s},Dv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},nM=function(e){var t,i;try{t=e.getBBox()}catch{t=Pv(e),i=1}return t&&(t.width||t.height)||i||(t=Pv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dv(e,["x","cx","x1"])||0,y:+Dv(e,["y","cy","y1"])||0,width:0,height:0}:t},iM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nM(e))},oo=function(e,t){if(t){var i=e.style,r;t in _s&&t!==_i&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(U_,"-$1").toLowerCase())):i.removeAttribute(t)}},Hs=function(e,t,i,r,s,o){var a=new gi(e._pt,t,i,0,1,o?Q1:Z1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Lv={deg:1,rad:1,turn:1},tC={grid:1,flex:1},ao=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Lo.style,l=VA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",_,v,m,p;if(r===o||!s||Lv[r]||Lv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&iM(e),(h||o==="%")&&(_s[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[c],en(h?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Vs||!v.appendChild)&&(v=Vs.body),m=v._gsap,m&&h&&m.width&&l&&m.time===Ri.time&&!m.uncache)return en(s/m.width*d);if(h&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,_=e[c],g?e.style[t]=g:oo(e,t)}else(h||o==="%")&&!tC[Ni(v,"display")]&&(a.position=Ni(e,"position")),v===e&&(a.position="static"),v.appendChild(Lo),_=Lo[c],v.removeChild(Lo),a.position="absolute";return l&&h&&(m=ko(v),m.time=Ri.time,m.width=v[c]),en(f?_*s/d:_&&s?d/_*s:0)},es=function(e,t,i,r){var s;return N_||Sm(),t in Lr&&t!=="transform"&&(t=Lr[t],~t.indexOf(",")&&(t=t.split(",")[0])),_s[t]&&t!=="transform"?(s=Ku(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:md(Ni(e,_i))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=pd[t]&&pd[t](e,t,i)||Ni(e,t)||S1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ao(e,t,s,i)+i:s},nC=function(e,t,i,r){if(!i||i==="none"){var s=_l(t,e,1),o=s&&Ni(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ni(e,"borderTopColor"))}var a=new gi(this._pt,e.style,t,0,1,q1),l=0,u=0,c,d,f,h,_,v,m,p,g,x,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ni(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Ni(e,t)||r,v?e.style[t]=v:oo(e,t)),c=[i,r],z1(c),i=c[0],r=c[1],f=i.match(Ha)||[],w=r.match(Ha)||[],w.length){for(;d=Ha.exec(r);)m=d[0],g=r.substring(l,d.index),_?_=(_+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(_=1),m!==(v=f[u++]||"")&&(h=parseFloat(v)||0,S=v.substr((h+"").length),m.charAt(1)==="="&&(m=Za(h,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=Ha.lastIndex-x.length,x||(x=x||Ui.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=ao(e,t,v,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Q1:Z1;return g1.test(r)&&(a.e=0),this._pt=a,a},Nv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Nv[i]||i,t[1]=Nv[r]||r,t.join(" ")},rC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],_s[a]&&(l=1,a=a==="transformOrigin"?_i:Xt),oo(i,a);l&&(oo(i,Xt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ku(i,1),o.uncache=1,J1(r)))}},pd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new gi(e._pt,t,i,0,0,rC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},$u=[1,0,0,1,0,0],rM={},sM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Iv=function(e){var t=Ni(e,Xt);return sM(t)?$u:t.substr(7).match(m1).map(en)},F_=function(e,t){var i=e._gsap||ko(e),r=e.style,s=Iv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$u:s):(s===$u&&!e.offsetParent&&e!==Qa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Qa.appendChild(e)),s=Iv(e),l?r.display=l:oo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mm=function(e,t,i,r,s,o){var a=e._gsap,l=s||F_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],_=l[1],v=l[2],m=l[3],p=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,E,y,C;i?l!==$u&&(E=h*m-_*v)&&(y=S*(m/E)+w*(-v/E)+(v*g-m*p)/E,C=S*(-_/E)+w*(h/E)-(h*g-_*p)/E,S=y,w=C):(T=nM(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(p=S-u,g=w-c,a.xOffset=d+(p*h+g*v)-p,a.yOffset=f+(p*_+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[_i]="0px 0px",o&&(Hs(o,a,"xOrigin",u,S),Hs(o,a,"yOrigin",c,w),Hs(o,a,"xOffset",d,a.xOffset),Hs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},Ku=function(e,t){var i=e._gsap||new H1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ni(e,_i)||"0",c,d,f,h,_,v,m,p,g,x,S,w,T,E,y,C,R,D,L,G,j,N,z,U,O,X,P,te,pe,He,Ue,Le;return c=d=f=v=m=p=g=x=S=0,h=_=1,i.svg=!!(e.getCTM&&iM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),E=F_(e,i.svg),i.svg&&(i.uncache?(O=e.getBBox(),u=i.xOrigin-O.x+"px "+(i.yOrigin-O.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Mm(e,U||u,!!U||i.originIsAbsolute,i.smooth!==!1,E)),w=i.xOrigin||0,T=i.yOrigin||0,E!==$u&&(D=E[0],L=E[1],G=E[2],j=E[3],c=N=E[4],d=z=E[5],E.length===6?(h=Math.sqrt(D*D+L*L),_=Math.sqrt(j*j+G*G),v=D||L?ca(L,D)*Eo:0,g=G||j?ca(G,j)*Eo+v:0,g&&(_*=Math.abs(Math.cos(g*Ja))),i.svg&&(c-=w-(w*D+T*G),d-=T-(w*L+T*j))):(Le=E[6],He=E[7],P=E[8],te=E[9],pe=E[10],Ue=E[11],c=E[12],d=E[13],f=E[14],y=ca(Le,pe),m=y*Eo,y&&(C=Math.cos(-y),R=Math.sin(-y),U=N*C+P*R,O=z*C+te*R,X=Le*C+pe*R,P=N*-R+P*C,te=z*-R+te*C,pe=Le*-R+pe*C,Ue=He*-R+Ue*C,N=U,z=O,Le=X),y=ca(-G,pe),p=y*Eo,y&&(C=Math.cos(-y),R=Math.sin(-y),U=D*C-P*R,O=L*C-te*R,X=G*C-pe*R,Ue=j*R+Ue*C,D=U,L=O,G=X),y=ca(L,D),v=y*Eo,y&&(C=Math.cos(y),R=Math.sin(y),U=D*C+L*R,O=N*C+z*R,L=L*C-D*R,z=z*C-N*R,D=U,N=O),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,p=180-p),h=en(Math.sqrt(D*D+L*L+G*G)),_=en(Math.sqrt(z*z+Le*Le)),y=ca(N,z),g=Math.abs(y)>2e-4?y*Eo:0,S=Ue?1/(Ue<0?-Ue:Ue):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!sM(Ni(e,Xt)),U&&e.setAttribute("transform",U))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(h*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=en(h),i.scaleY=en(_),i.rotation=en(v)+a,i.rotationX=en(m)+a,i.rotationY=en(p)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[_i]=md(u)),i.xOffset=i.yOffset=0,i.force3D=Ui.force3D,i.renderTransform=i.svg?oC:tM?oM:sC,i.uncache=0,i},md=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ph=function(e,t,i){var r=Gn(t);return en(parseFloat(t)+parseFloat(ao(e,"x",i+"px",r)))+r},sC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,oM(e,t)},mo="0deg",Fl="0px",go=") ",oM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,_=i.scaleX,v=i.scaleY,m=i.transformPerspective,p=i.force3D,g=i.target,x=i.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==mo||c!==mo)){var T=parseFloat(c)*Ja,E=Math.sin(T),y=Math.cos(T),C;T=parseFloat(d)*Ja,C=Math.cos(T),o=Ph(g,o,E*C*-x),a=Ph(g,a,-Math.sin(T)*-x),l=Ph(g,l,y*C*-x+x)}m!==Fl&&(S+="perspective("+m+go),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==Fl||a!==Fl||l!==Fl)&&(S+=l!==Fl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+go),u!==mo&&(S+="rotate("+u+go),c!==mo&&(S+="rotateY("+c+go),d!==mo&&(S+="rotateX("+d+go),(f!==mo||h!==mo)&&(S+="skew("+f+", "+h+go),(_!==1||v!==1)&&(S+="scale("+_+", "+v+go),g.style[Xt]=S||"translate(0, 0)"},oC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,_=i.xOrigin,v=i.yOrigin,m=i.xOffset,p=i.yOffset,g=i.forceCSS,x=parseFloat(o),S=parseFloat(a),w,T,E,y,C;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ja,u*=Ja,w=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Ja,C=Math.tan(u-c),C=Math.sqrt(1+C*C),E*=C,y*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),w*=C,T*=C)),w=en(w),T=en(T),E=en(E),y=en(y)):(w=d,y=f,T=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=ao(h,"x",o,"px"),S=ao(h,"y",a,"px")),(_||v||m||p)&&(x=en(x+_-(_*w+v*E)+m),S=en(S+v-(_*T+v*y)+p)),(r||s)&&(C=h.getBBox(),x=en(x+r/100*C.width),S=en(S+s/100*C.height)),C="matrix("+w+","+T+","+E+","+y+","+x+","+S+")",h.setAttribute("transform",C),g&&(h.style[Xt]=C)},aC=function(e,t,i,r,s){var o=360,a=Cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Eo:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*bv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*bv)%o-~~(u/o)*o)),e._pt=f=new gi(e._pt,t,i,r,u,GA),f.e=c,f.u="deg",e._props.push(i),f},Uv=function(e,t){for(var i in t)e[i]=t[i];return e},lC=function(e,t,i){var r=Uv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,h,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Xt]=t,a=Ku(i,1),oo(i,Xt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Xt],o[Xt]=t,a=Ku(i,1),o[Xt]=u);for(l in _s)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Gn(u),_=Gn(c),d=h!==_?ao(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new gi(e._pt,a,l,d,f-d,xm),e._pt.u=_||0,e._props.push(l));Uv(a,r)};mi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});pd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,h;if(arguments.length<4)return f=o.map(function(_){return es(a,_,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},o.forEach(function(_,v){return h[_]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,h,d)}});var aM={name:"css",register:Sm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,h,_,v,m,p,g,x,S,w,T,E,y,C;N_||Sm(),this.styles=this.styles||eM(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(Ci[v]&&G1(v,t,i,r,e,s)))){if(h=typeof c,_=pd[v],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=ju(c)),_)_(this,e,v,c,i)&&(E=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",to.lastIndex=0,to.test(u)||(m=Gn(u),p=Gn(c),p?m!==p&&(u=ao(e,v,u,p)+p):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),y.push(v,0,a[v]);else if(h!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Cn(u)&&~u.indexOf("random(")&&(u=ju(u)),Gn(u+"")||u==="auto"||(u+=Ui.units[v]||Gn(es(e,v))||""),(u+"").charAt(1)==="="&&(u=es(e,v))):u=es(e,v),f=parseFloat(u),g=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),v in Lr&&(v==="autoAlpha"&&(f===1&&es(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),Hs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Lr[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in _s,x){if(this.styles.save(v),C=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Ni(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=c,c=Ni(e,"perspective"),R?e.style.perspective=R:oo(e,"perspective")}d=parseFloat(c)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ku(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new gi(this._pt,a,Xt,0,1,w.renderTransform,w,0,-1),S.dep=1),v==="scale")this._pt=new gi(this._pt,w,"scaleY",w.scaleY,(g?Za(w.scaleY,g+d):d)-w.scaleY||0,xm),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(_i,0,a[_i]),c=iC(c),w.svg?Mm(e,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==w.zOrigin&&Hs(this,w,"zOrigin",w.zOrigin,p),Hs(this,a,v,md(u),md(c)));continue}else if(v==="svgOrigin"){Mm(e,c,1,T,0,this);continue}else if(v in rM){aC(this,w,v,f,g?Za(f,g+c):c);continue}else if(v==="smoothOrigin"){Hs(this,w,"smooth",w.smooth,c);continue}else if(v==="force3D"){w[v]=c;continue}else if(v==="transform"){lC(this,c,e);continue}}else v in a||(v=_l(v)||v);if(x||(d||d===0)&&(f||f===0)&&!HA.test(c)&&v in a)m=(u+"").substr((f+"").length),d||(d=0),p=Gn(c)||(v in Ui.units?Ui.units[v]:m),m!==p&&(f=ao(e,v,u,p)),this._pt=new gi(this._pt,x?w:a,v,f,(g?Za(f,g+d):d)-f,!x&&(p==="px"||v==="zIndex")&&t.autoRound!==!1?jA:xm),this._pt.u=p||0,x&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=XA):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=WA);else if(v in a)nC.call(this,e,v,u,g?g+c:c);else if(v in e)this.add(e,v,u||e[v],g?g+c:c,r,s);else if(v!=="parseTransform"){E_(v,c);continue}x||(v in a?y.push(v,0,a[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),o.push(v)}}E&&$1(this)},render:function(e,t){if(t.tween._time||!I_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:es,aliases:Lr,getSetter:function(e,t,i){var r=Lr[t];return r&&r.indexOf(",")<0&&(t=r),t in _s&&t!==_i&&(e._gsap.x||es(e,"x"))?i&&Cv===i?t==="scale"?KA:$A:(Cv=i||{})&&(t==="scale"?ZA:QA):e.style&&!y_(e.style[t])?YA:~t.indexOf("-")?qA:D_(e,t)},core:{_removeProperty:oo,_getMatrix:F_}};xi.utils.checkPrefix=_l;xi.core.getStyleSaver=eM;(function(n,e,t,i){var r=mi(n+","+e+","+t,function(s){_s[s]=1});mi(e,function(s){Ui.units[s]="deg",rM[s]=1}),Lr[r[13]]=n+","+e,mi(i,function(s){var o=s.split(":");Lr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ui.units[n]="px"});xi.registerPlugin(aM);var zi=xi.registerPlugin(aM)||xi;zi.core.Tween;function uC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function cC(n,e,t){return e&&uC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rn,Cf,Pi,Gs,Ws,el,lM,To,tl,uM,ss,fr,cM,fM=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},dM=1,Wa=[],at=[],kr=[],_u=Date.now,Em=function(e,t){return t},fC=function(){var e=tl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,at),r.push.apply(r,kr),at=i,kr=r,Em=function(o,a){return t[o](a)}},no=function(e,t){return~kr.indexOf(e)&&kr[kr.indexOf(e)+1][t]},vu=function(e){return!!~uM.indexOf(e)},$n=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},qn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Rc="scrollLeft",Pc="scrollTop",Tm=function(){return ss&&ss.isPressed||at.cache++},gd=function(e,t){var i=function r(s){if(s||s===0){dM&&(Pi.history.scrollRestoration="manual");var o=ss&&ss.isPressed;s=r.v=Math.round(s)||(ss&&ss.iOS?1:0),e(s),r.cacheID=at.cache,o&&Em("ss",s)}else(t||at.cache!==r.cacheID||Em("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ti={s:Rc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gd(function(n){return arguments.length?Pi.scrollTo(n,pn.sc()):Pi.pageXOffset||Gs[Rc]||Ws[Rc]||el[Rc]||0})},pn={s:Pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ti,sc:gd(function(n){return arguments.length?Pi.scrollTo(ti.sc(),n):Pi.pageYOffset||Gs[Pc]||Ws[Pc]||el[Pc]||0})},ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||Rn.utils.toArray)(e)[0]||(typeof e=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},lo=function(e,t){var i=t.s,r=t.sc;vu(e)&&(e=Gs.scrollingElement||Ws);var s=at.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||$n(e,"scroll",Tm);var a=at[s+o],l=a||(at[s+o]=gd(no(e,i),!0)||(vu(e)?r:gd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Rn.getProperty(e,"scrollBehavior")==="smooth"),l},wm=function(e,t,i){var r=e,s=e,o=_u(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,v){var m=_u();v||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var v=a,m=s,p=_u();return(_||_===0)&&_!==r&&c(_),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-v)*1e3};return{update:c,reset:d,getVelocity:f}},Ol=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},hM=function(){tl=Rn.core.globals().ScrollTrigger,tl&&tl.core&&fC()},pM=function(e){return Rn=e||fM(),!Cf&&Rn&&typeof document<"u"&&document.body&&(Pi=window,Gs=document,Ws=Gs.documentElement,el=Gs.body,uM=[Pi,Gs,Ws,el],Rn.utils.clamp,cM=Rn.core.context||function(){},To="onpointerenter"in el?"pointer":"mouse",lM=rn.isTouch=Pi.matchMedia&&Pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fr=rn.eventTypes=("ontouchstart"in Ws?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ws?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dM=0},500),Cf=1),tl||hM(),Cf};ti.op=pn;at.cache=0;var rn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Cf||pM(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),tl||hM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,_=i.wheelSpeed,v=i.event,m=i.onDragStart,p=i.onDragEnd,g=i.onDrag,x=i.onPress,S=i.onRelease,w=i.onRight,T=i.onLeft,E=i.onUp,y=i.onDown,C=i.onChangeX,R=i.onChangeY,D=i.onChange,L=i.onToggleX,G=i.onToggleY,j=i.onHover,N=i.onHoverEnd,z=i.onMove,U=i.ignoreCheck,O=i.isNormalizer,X=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,pe=i.onEnable,He=i.onDisable,Ue=i.onClick,Le=i.scrollSpeed,K=i.capture,ae=i.allowClicks,le=i.lockAxis,be=i.onLockAxis;this.target=a=ai(a)||Ws,this.vars=i,h&&(h=Rn.utils.toArray(h)),r=r||1e-9,s=s||0,_=_||1,Le=Le||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Pi.getComputedStyle(el).lineHeight)||22);var ze,De,nt,Ae,Ge,et,Ve,Y=this,lt=0,Vt=0,F=i.passive||!c&&i.passive!==!1,Ke=lo(a,ti),Ye=lo(a,pn),ct=Ke(),_e=Ye(),Je=~o.indexOf("touch")&&!~o.indexOf("pointer")&&fr[0]==="pointerdown",b=vu(a),M=a.ownerDocument||Gs,V=[0,0,0],Q=[0,0,0],ne=0,me=function(){return ne=_u()},re=function(he,ke){return(Y.event=he)&&h&&dC(he.target,h)||ke&&Je&&he.pointerType!=="touch"||U&&U(he,ke)},Z=function(){Y._vx.reset(),Y._vy.reset(),De.pause(),d&&d(Y)},ee=function(){var he=Y.deltaX=Fv(V),ke=Y.deltaY=Fv(Q),se=Math.abs(he)>=r,Be=Math.abs(ke)>=r;D&&(se||Be)&&D(Y,he,ke,V,Q),se&&(w&&Y.deltaX>0&&w(Y),T&&Y.deltaX<0&&T(Y),C&&C(Y),L&&Y.deltaX<0!=lt<0&&L(Y),lt=Y.deltaX,V[0]=V[1]=V[2]=0),Be&&(y&&Y.deltaY>0&&y(Y),E&&Y.deltaY<0&&E(Y),R&&R(Y),G&&Y.deltaY<0!=Vt<0&&G(Y),Vt=Y.deltaY,Q[0]=Q[1]=Q[2]=0),(Ae||nt)&&(z&&z(Y),nt&&(m&&nt===1&&m(Y),g&&g(Y),nt=0),Ae=!1),et&&!(et=!1)&&be&&be(Y),Ge&&(te(Y),Ge=!1),ze=0},xe=function(he,ke,se){V[se]+=he,Q[se]+=ke,Y._vx.update(he),Y._vy.update(ke),u?ze||(ze=requestAnimationFrame(ee)):ee()},we=function(he,ke){le&&!Ve&&(Y.axis=Ve=Math.abs(he)>Math.abs(ke)?"x":"y",et=!0),Ve!=="y"&&(V[2]+=he,Y._vx.update(he,!0)),Ve!=="x"&&(Q[2]+=ke,Y._vy.update(ke,!0)),u?ze||(ze=requestAnimationFrame(ee)):ee()},ge=function(he){if(!re(he,1)){he=Ol(he,c);var ke=he.clientX,se=he.clientY,Be=ke-Y.x,Ne=se-Y.y,Xe=Y.isDragging;Y.x=ke,Y.y=se,(Xe||(Be||Ne)&&(Math.abs(Y.startX-ke)>=s||Math.abs(Y.startY-se)>=s))&&(nt||(nt=Xe?2:1),Xe||(Y.isDragging=!0),we(Be,Ne))}},ce=Y.onPress=function(oe){re(oe,1)||oe&&oe.button||(Y.axis=Ve=null,De.pause(),Y.isPressed=!0,oe=Ol(oe),lt=Vt=0,Y.startX=Y.x=oe.clientX,Y.startY=Y.y=oe.clientY,Y._vx.reset(),Y._vy.reset(),$n(O?a:M,fr[1],ge,F,!0),Y.deltaX=Y.deltaY=0,x&&x(Y))},ve=Y.onRelease=function(oe){if(!re(oe,1)){qn(O?a:M,fr[1],ge,!0);var he=!isNaN(Y.y-Y.startY),ke=Y.isDragging,se=ke&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Be=Ol(oe);!se&&he&&(Y._vx.reset(),Y._vy.reset(),c&&ae&&Rn.delayedCall(.08,function(){if(_u()-ne>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(M.createEvent){var Ne=M.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,Pi,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ne)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&ke&&!O&&De.restart(!0),nt&&ee(),p&&ke&&p(Y),S&&S(Y,se)}},We=function(he){return he.touches&&he.touches.length>1&&(Y.isGesturing=!0)&&X(he,Y.isDragging)},qe=function(){return(Y.isGesturing=!1)||P(Y)},I=function(he){if(!re(he)){var ke=Ke(),se=Ye();xe((ke-ct)*Le,(se-_e)*Le,1),ct=ke,_e=se,d&&De.restart(!0)}},ue=function(he){if(!re(he)){he=Ol(he,c),te&&(Ge=!0);var ke=(he.deltaMode===1?l:he.deltaMode===2?Pi.innerHeight:1)*_;xe(he.deltaX*ke,he.deltaY*ke,0),d&&!O&&De.restart(!0)}},J=function(he){if(!re(he)){var ke=he.clientX,se=he.clientY,Be=ke-Y.x,Ne=se-Y.y;Y.x=ke,Y.y=se,Ae=!0,d&&De.restart(!0),(Be||Ne)&&we(Be,Ne)}},Se=function(he){Y.event=he,j(Y)},de=function(he){Y.event=he,N(Y)},ie=function(he){return re(he)||Ol(he,c)&&Ue(Y)};De=Y._dc=Rn.delayedCall(f||.25,Z).pause(),Y.deltaX=Y.deltaY=0,Y._vx=wm(0,50,!0),Y._vy=wm(0,50,!0),Y.scrollX=Ke,Y.scrollY=Ye,Y.isDragging=Y.isGesturing=Y.isPressed=!1,cM(this),Y.enable=function(oe){return Y.isEnabled||($n(b?M:a,"scroll",Tm),o.indexOf("scroll")>=0&&$n(b?M:a,"scroll",I,F,K),o.indexOf("wheel")>=0&&$n(a,"wheel",ue,F,K),(o.indexOf("touch")>=0&&lM||o.indexOf("pointer")>=0)&&($n(a,fr[0],ce,F,K),$n(M,fr[2],ve),$n(M,fr[3],ve),ae&&$n(a,"click",me,!0,!0),Ue&&$n(a,"click",ie),X&&$n(M,"gesturestart",We),P&&$n(M,"gestureend",qe),j&&$n(a,To+"enter",Se),N&&$n(a,To+"leave",de),z&&$n(a,To+"move",J)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ae=nt=!1,Y._vx.reset(),Y._vy.reset(),ct=Ke(),_e=Ye(),oe&&oe.type&&ce(oe),pe&&pe(Y)),Y},Y.disable=function(){Y.isEnabled&&(Wa.filter(function(oe){return oe!==Y&&vu(oe.target)}).length||qn(b?M:a,"scroll",Tm),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),qn(O?a:M,fr[1],ge,!0)),qn(b?M:a,"scroll",I,K),qn(a,"wheel",ue,K),qn(a,fr[0],ce,K),qn(M,fr[2],ve),qn(M,fr[3],ve),qn(a,"click",me,!0),qn(a,"click",ie),qn(M,"gesturestart",We),qn(M,"gestureend",qe),qn(a,To+"enter",Se),qn(a,To+"leave",de),qn(a,To+"move",J),Y.isEnabled=Y.isPressed=Y.isDragging=!1,He&&He(Y))},Y.kill=Y.revert=function(){Y.disable();var oe=Wa.indexOf(Y);oe>=0&&Wa.splice(oe,1),ss===Y&&(ss=0)},Wa.push(Y),O&&vu(a)&&(ss=Y),Y.enable(v)},cC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();rn.version="3.15.0";rn.create=function(n){return new rn(n)};rn.register=pM;rn.getAll=function(){return Wa.slice()};rn.getById=function(n){return Wa.filter(function(e){return e.vars.id===n})[0]};fM()&&Rn.registerPlugin(rn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,ba,ot,yt,bi,vt,O_,_d,Zu,xu,Ql,Dc,zn,jd,Am,Jn,Ov,kv,Ra,mM,Dh,gM,Zn,Cm,_M,vM,Ls,bm,k_,nl,B_,yu,Rm,Lh,Lc=1,Vn=Date.now,Nh=Vn(),ir=0,Jl=0,Bv=function(e,t,i){var r=Ai(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},zv=function(e,t){return t&&(!Ai(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hC=function n(){return Jl&&requestAnimationFrame(n)},Vv=function(){return jd=1},Hv=function(){return jd=0},br=function(e){return e},eu=function(e){return Math.round(e*1e5)/1e5||0},xM=function(){return typeof window<"u"},yM=function(){return Pe||xM()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Ko=function(e){return!!~O_.indexOf(e)},SM=function(e){return(e==="Height"?B_:ot["inner"+e])||bi["client"+e]||vt["client"+e]},MM=function(e){return no(e,"getBoundingClientRect")||(Ko(e)?function(){return Lf.width=ot.innerWidth,Lf.height=B_,Lf}:function(){return ts(e)})},pC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=no(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?SM(s):e["client"+s])||0}},mC=function(e,t){return!t||~kr.indexOf(e)?MM(e):function(){return Lf}},Nr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=no(e,i))?o()-MM(e)()[s]:Ko(e)?(bi[i]||vt[i])-SM(r):e[i]-e["offset"+r])},Nc=function(e,t){for(var i=0;i<Ra.length;i+=3)(!t||~t.indexOf(Ra[i+1]))&&e(Ra[i],Ra[i+1],Ra[i+2])},Ai=function(e){return typeof e=="string"},Wn=function(e){return typeof e=="function"},tu=function(e){return typeof e=="number"},wo=function(e){return typeof e=="object"},kl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},fa=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},da=Math.abs,EM="left",TM="top",z_="right",V_="bottom",Ho="width",Go="height",Su="Right",Mu="Left",Eu="Top",Tu="Bottom",ln="padding",Ki="margin",vl="Width",H_="Height",dn="px",Zi=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gC=function(e){var t=Zi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ts=function(e,t){var i=t&&Zi(e)[Am]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},vd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},wM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},_C=function(e){return function(t){return Pe.utils.snap(wM(e),t)}},G_=function(e){var t=Pe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},vC=function(e){return function(t,i){return G_(wM(e))(t,i.direction)}},Ic=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Tn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},En=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Uc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Wv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fc={toggleActions:"play",anticipatePin:0},xd={top:0,left:0,center:.5,bottom:1,right:1},bf=function(e,t){if(Ai(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in xd?xd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Oc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=yt.createElement("div"),v=Ko(i)||no(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=v?vt:i.tagName==="IFRAME"?i.contentDocument.body:i,g=e.indexOf("start")!==-1,x=g?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&v?"fixed;":"absolute;"),(m||l||!v)&&(S+=(r===pn?z_:V_)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=g,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],Rf(_,0,r,g),_},Rf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+vl]=1,s["border"+a+vl]=0,s[i.p]=t+"px",Pe.set(e,s)},rt=[],Pm={},Qu,Xv=function(){return Vn()-ir>34&&(Qu||(Qu=requestAnimationFrame(ls)))},ha=function(){(!Zn||!Zn.isPressed||Zn.startX>vt.clientWidth)&&(at.cache++,Zn?Qu||(Qu=requestAnimationFrame(ls)):ls(),ir||Qo("scrollStart"),ir=Vn())},Ih=function(){vM=ot.innerWidth,_M=ot.innerHeight},nu=function(e){at.cache++,(e===!0||!zn&&!gM&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Cm||vM!==ot.innerWidth||Math.abs(ot.innerHeight-_M)>ot.innerHeight*.25))&&_d.restart(!0)},Zo={},xC=[],AM=function n(){return En(Qe,"scrollEnd",n)||No(!0)},Qo=function(e){return Zo[e]&&Zo[e].map(function(t){return t()})||xC},Ti=[],CM=function(e){for(var t=0;t<Ti.length;t+=5)(!e||Ti[t+4]&&Ti[t+4].query===e)&&(Ti[t].style.cssText=Ti[t+1],Ti[t].getBBox&&Ti[t].setAttribute("transform",Ti[t+2]||""),Ti[t+3].uncache=1)},bM=function(){return at.forEach(function(e){return Wn(e)&&++e.cacheID&&(e.rec=e())})},W_=function(e,t){var i;for(Jn=0;Jn<rt.length;Jn++)i=rt[Jn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));yu=!0,t&&CM(t),t||Qo("revert")},RM=function(e,t){at.cache++,(t||!ei)&&at.forEach(function(i){return Wn(i)&&i.cacheID++&&(i.rec=0)}),Ai(e)&&(ot.history.scrollRestoration=k_=e)},ei,Wo=0,jv,yC=function(){if(jv!==Wo){var e=jv=Wo;requestAnimationFrame(function(){return e===Wo&&No(!0)})}},PM=function(){vt.appendChild(nl),B_=!Zn&&nl.offsetHeight||ot.innerHeight,vt.removeChild(nl)},Yv=function(e){return Zu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},No=function(e,t){if(bi=yt.documentElement,vt=yt.body,O_=[ot,yt,bi,vt],ir&&!e&&!yu){Tn(Qe,"scrollEnd",AM);return}PM(),ei=Qe.isRefreshing=!0,yu||bM();var i=Qo("refreshInit");mM&&Qe.sort(),t||W_(),at.forEach(function(r){Wn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),yu=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Rm=1,Yv(!0),rt.forEach(function(r){var s=Nr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Yv(!1),Rm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){Wn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),RM(k_,1),_d.pause(),Wo++,ei=2,ls(2),rt.forEach(function(r){return Wn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ei=Qe.isRefreshing=!1,Qo("refresh")},Dm=0,Pf=1,wu,ls=function(e){if(e===2||!ei&&!yu){Qe.isUpdating=!0,wu&&wu.update(0);var t=rt.length,i=Vn(),r=i-Nh>=50,s=t&&rt[0].scroll();if(Pf=Dm>s?-1:1,ei||(Dm=s),r&&(ir&&!jd&&i-ir>200&&(ir=0,Qo("scrollEnd")),Ql=Nh,Nh=i),Pf<0){for(Jn=t;Jn-- >0;)rt[Jn]&&rt[Jn].update(0,r);Pf=1}else for(Jn=0;Jn<t;Jn++)rt[Jn]&&rt[Jn].update(0,r);Qe.isUpdating=!1}Qu=0},Lm=[EM,TM,V_,z_,Ki+Tu,Ki+Su,Ki+Eu,Ki+Mu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Df=Lm.concat([Ho,Go,"boxSizing","max"+vl,"max"+H_,"position",Ki,ln,ln+Eu,ln+Su,ln+Tu,ln+Mu]),SC=function(e,t,i){il(i);var r=e._gsap;if(r.spacerIsNative)il(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Uh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Lm.length,o=t.style,a=e.style,l;s--;)l=Lm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[V_]=a[z_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ho]=vd(e,ti)+dn,o[Go]=vd(e,pn)+dn,o[ln]=a[Ki]=a[TM]=a[EM]="0",il(r),a[Ho]=a["max"+vl]=i[Ho],a[Go]=a["max"+H_]=i[Go],a[ln]=i[ln],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MC=/([A-Z])/g,il=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(MC,"-$1").toLowerCase())}},kc=function(e){for(var t=Df.length,i=e.style,r=[],s=0;s<t;s++)r.push(Df[s],i[Df[s]]);return r.t=e,r},EC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Lf={left:0,top:0},qv=function(e,t,i,r,s,o,a,l,u,c,d,f,h,_){Wn(e)&&(e=e(l)),Ai(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?bf("0"+e.substr(3),i):0));var v=h?h.time():0,m,p,g;if(h&&h.seek(0),isNaN(e)||(e=+e),tu(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&Rf(a,i,r,!0);else{Wn(t)&&(t=t(l));var x=(e||"0").split(" "),S,w,T,E;g=ai(t,l)||vt,S=ts(g)||{},(!S||!S.left&&!S.top)&&Zi(g).display==="none"&&(E=g.style.display,g.style.display="block",S=ts(g),E?g.style.display=E:g.style.removeProperty("display")),w=bf(x[0],S[r.d]),T=bf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+w+s-T,a&&Rf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var y=e+i,C=o._isStart;m="scroll"+r.d2,Rf(o,y,r,C&&y>20||!C&&(d?Math.max(vt[m],bi[m]):o.parentNode[m])<=y+1),d&&(u=ts(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+dn))}return h&&g&&(m=ts(g),h.seek(f),p=ts(g),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},TC=/(webkit|moz|length|cssText|inset)/i,$v=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Zi(e);for(o in a)!+o&&!TC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},DM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Bc=function(e,t,i){var r={};r[t.p]="+="+i,Pe.set(e,r)},Kv=function(e,t){var i=lo(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,h=l.onComplete,_={};u=u||i();var v=DM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return v(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&ls()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Pe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Tn(e,"wheel",i.wheelHandler),Qe.isTouch&&Tn(e,"touchmove",i.wheelHandler),s},Qe=function(){function n(t,i){ba||n.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jl){this.update=this.refresh=this.kill=br;return}i=Gv(Ai(i)||tu(i)||i.nodeType?{trigger:i}:i,Fc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,v=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,g=s.onSnapComplete,x=s.once,S=s.snap,w=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,y=s.fastScrollEnd,C=s.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ti:pn,D=!d&&d!==0,L=ai(i.scroller||ot),G=Pe.core.getCache(L),j=Ko(L),N=("pinType"in i?i.pinType:no(L,"pinType")||j&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=D&&i.toggleActions.split(" "),O="markers"in i?i.markers:Fc.markers,X=j?0:parseFloat(Zi(L)["border"+R.p2+vl])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},pe=pC(L,j,R),He=mC(L,j),Ue=0,Le=0,K=0,ae=lo(L,R),le,be,ze,De,nt,Ae,Ge,et,Ve,Y,lt,Vt,F,Ke,Ye,ct,_e,Je,b,M,V,Q,ne,me,re,Z,ee,xe,we,ge,ce,ve,We,qe,I,ue,J,Se,de;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=L,P.scroll=E?E.time.bind(E):ae,De=ae(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(mM=1,i.refreshPriority===-9999&&(wu=P)),G.tweenScroll=G.tweenScroll||{top:Kv(L,pn),left:Kv(L,ti)},P.tweenTo=le=G.tweenScroll[R.p],P.scrubDuration=function(se){We=tu(se)&&se,We?ve?ve.duration(se):ve=Pe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:We,paused:!0,onComplete:function(){return p&&p(P)}}):(ve&&ve.progress(1).kill(),ve=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),ge=0,l||(l=r.vars.id)),S&&((!wo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in vt.style&&Pe.set(j?[vt,bi]:L,{scrollBehavior:"auto"}),at.forEach(function(se){return Wn(se)&&se.target===(j?yt.scrollingElement||bi:L)&&(se.smooth=!1)}),ze=Wn(S.snapTo)?S.snapTo:S.snapTo==="labels"?_C(r):S.snapTo==="labelsDirectional"?vC(r):S.directional!==!1?function(se,Be){return G_(S.snapTo)(se,Vn()-Le<500?0:Be.direction)}:Pe.utils.snap(S.snapTo),qe=S.duration||{min:.1,max:2},qe=wo(qe)?xu(qe.min,qe.max):xu(qe,qe),I=Pe.delayedCall(S.delay||We/2||.1,function(){var se=ae(),Be=Vn()-Le<500,Ne=le.tween;if((Be||Math.abs(P.getVelocity())<10)&&!Ne&&!jd&&Ue!==se){var Xe=(se-Ae)/Ke,sn=r&&!D?r.totalProgress():Xe,st=Be?0:(sn-ce)/(Vn()-Ql)*1e3||0,Ot=Pe.utils.clamp(-Xe,1-Xe,da(st/2)*st/.185),kt=Xe+(S.inertia===!1?0:Ot),Dt,At,_t=S,In=_t.onStart,Lt=_t.onInterrupt,xn=_t.onComplete;if(Dt=ze(kt,P),tu(Dt)||(Dt=kt),At=Math.max(0,Math.round(Ae+Dt*Ke)),se<=Ge&&se>=Ae&&At!==se){if(Ne&&!Ne._initted&&Ne.data<=da(At-se))return;S.inertia===!1&&(Ot=Dt-Xe),le(At,{duration:qe(da(Math.max(da(kt-sn),da(Dt-sn))*.185/st/.05||0)),ease:S.ease||"power3",data:da(At-se),onInterrupt:function(){return I.restart(!0)&&Lt&&fa(P,Lt)},onComplete:function(){P.update(),Ue=ae(),r&&!D&&(ve?ve.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),ge=ce=r&&!D?r.totalProgress():P.progress,g&&g(P),xn&&fa(P,xn)}},se,Ot*Ke,At-se-Ot*Ke),In&&fa(P,In,le.tween)}}else P.isActive&&Ue!==se&&I.restart(!0)}).pause()),l&&(Pm[l]=P),f=P.trigger=ai(f||h!==!0&&h),de=f&&f._gsap&&f._gsap.stRevert,de&&(de=de(P)),h=h===!0?f:ai(h),Ai(a)&&(a={targets:f,className:a}),h&&(_===!1||_===Ki||(_=!_&&h.parentNode&&h.parentNode.style&&Zi(h.parentNode).display==="flex"?!1:ln),P.pin=h,be=Pe.core.getCache(h),be.spacer?Ye=be.pinState:(T&&(T=ai(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),be.spacerIsNative=!!T,T&&(be.spacerState=kc(T))),be.spacer=Je=T||yt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),be.pinState=Ye=kc(h)),i.force3D!==!1&&Pe.set(h,{force3D:!0}),P.spacer=Je=be.spacer,we=Zi(h),me=we[_+R.os2],M=Pe.getProperty(h),V=Pe.quickSetter(h,R.a,dn),Uh(h,Je,we),_e=kc(h)),O){Vt=wo(O)?Gv(O,Wv):Wv,Y=Oc("scroller-start",l,L,R,Vt,0),lt=Oc("scroller-end",l,L,R,Vt,0,Y),b=Y["offset"+R.op.d2];var ie=ai(no(L,"content")||L);et=this.markerStart=Oc("start",l,ie,R,Vt,b,0,E),Ve=this.markerEnd=Oc("end",l,ie,R,Vt,b,0,E),E&&(Se=Pe.quickSetter([et,Ve],R.a,dn)),!N&&!(kr.length&&no(L,"fixedMarkers")===!0)&&(gC(j?vt:L),Pe.set([Y,lt],{force3D:!0}),Z=Pe.quickSetter(Y,R.a,dn),xe=Pe.quickSetter(lt,R.a,dn))}if(E){var oe=E.vars.onUpdate,he=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),oe&&oe.apply(E,he||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(se,Be){if(!Be)return P.kill(!0);var Ne=se!==!1||!P.enabled,Xe=zn;Ne!==P.isReverted&&(Ne&&(ue=Math.max(ae(),P.scroll.rec||0),K=P.progress,J=r&&r.progress()),et&&[et,Ve,Y,lt].forEach(function(sn){return sn.style.display=Ne?"none":"block"}),Ne&&(zn=P,P.update(Ne)),h&&(!w||!P.isActive)&&(Ne?SC(h,Je,Ye):Uh(h,Je,Zi(h),re)),Ne||P.update(Ne),zn=Xe,P.isReverted=Ne)},P.refresh=function(se,Be,Ne,Xe){if(!((zn||!P.enabled)&&!Be)){if(h&&se&&ir){Tn(n,"scrollEnd",AM);return}!ei&&te&&te(P),zn=P,le.tween&&!Ne&&(le.tween.kill(),le.tween=0),ve&&ve.pause(),v&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var sn=pe(),st=He(),Ot=E?E.duration():Nr(L,R),kt=Ke<=.01||!Ke,Dt=0,At=Xe||0,_t=wo(Ne)?Ne.end:i.end,In=i.endTrigger||f,Lt=wo(Ne)?Ne.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),xn=P.pinnedContainer=i.pinnedContainer&&ai(i.pinnedContainer,P),yi=f&&Math.max(0,rt.indexOf(P))||0,on=yi,fn,yn,Xr,oa,Sn,Zt,Gi,A,k,q,H,W,ye;for(O&&wo(Ne)&&(W=Pe.getProperty(Y,R.p),ye=Pe.getProperty(lt,R.p));on-- >0;)Zt=rt[on],Zt.end||Zt.refresh(0,1)||(zn=P),Gi=Zt.pin,Gi&&(Gi===f||Gi===h||Gi===xn)&&!Zt.isReverted&&(q||(q=[]),q.unshift(Zt),Zt.revert(!0,!0)),Zt!==rt[on]&&(yi--,on--);for(Wn(Lt)&&(Lt=Lt(P)),Lt=Bv(Lt,"start",P),Ae=qv(Lt,f,sn,R,ae(),et,Y,P,st,X,N,Ot,E,P._startClamp&&"_startClamp")||(h?-.001:0),Wn(_t)&&(_t=_t(P)),Ai(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Ai(Lt)?Lt.split(" ")[0]:"")+_t:(Dt=bf(_t.substr(2),sn),_t=Ai(Lt)?Lt:(E?Pe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+Dt,In=f)),_t=Bv(_t,"end",P),Ge=Math.max(Ae,qv(_t||(In?"100% 0":Ot),In,sn,R,ae()+Dt,Ve,lt,P,st,X,N,Ot,E,P._endClamp&&"_endClamp"))||-.001,Dt=0,on=yi;on--;)Zt=rt[on]||{},Gi=Zt.pin,Gi&&Zt.start-Zt._pinPush<=Ae&&!E&&Zt.end>0&&(fn=Zt.end-(P._startClamp?Math.max(0,Zt.start):Zt.start),(Gi===f&&Zt.start-Zt._pinPush<Ae||Gi===xn)&&isNaN(Lt)&&(Dt+=fn*(1-Zt.progress)),Gi===h&&(At+=fn));if(Ae+=Dt,Ge+=Dt,P._startClamp&&(P._startClamp+=Dt),P._endClamp&&!ei&&(P._endClamp=Ge||-.001,Ge=Math.min(Ge,Nr(L,R))),Ke=Ge-Ae||(Ae-=.01)&&.001,kt&&(K=Pe.utils.clamp(0,1,Pe.utils.normalize(Ae,Ge,ue))),P._pinPush=At,et&&Dt&&(fn={},fn[R.a]="+="+Dt,xn&&(fn[R.p]="-="+ae()),Pe.set([et,Ve],fn)),h&&!(Rm&&P.end>=Nr(L,R)))fn=Zi(h),oa=R===pn,Xr=ae(),Q=parseFloat(M(R.a))+At,!Ot&&Ge>1&&(H=(j?yt.scrollingElement||bi:L).style,H={style:H,value:H["overflow"+R.a.toUpperCase()]},j&&Zi(vt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(H.style["overflow"+R.a.toUpperCase()]="scroll")),Uh(h,Je,fn),_e=kc(h),yn=ts(h,!0),A=N&&lo(L,oa?ti:pn)(),_?(re=[_+R.os2,Ke+At+dn],re.t=Je,on=_===ln?vd(h,R)+Ke+At:0,on&&(re.push(R.d,on+dn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=on+dn)),il(re),xn&&rt.forEach(function(Me){Me.pin===xn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),N&&ae(ue)):(on=vd(h,R),on&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=on+dn)),N&&(Sn={top:yn.top+(oa?Xr-Ae:A)+dn,left:yn.left+(oa?A:Xr-Ae)+dn,boxSizing:"border-box",position:"fixed"},Sn[Ho]=Sn["max"+vl]=Math.ceil(yn.width)+dn,Sn[Go]=Sn["max"+H_]=Math.ceil(yn.height)+dn,Sn[Ki]=Sn[Ki+Eu]=Sn[Ki+Su]=Sn[Ki+Tu]=Sn[Ki+Mu]="0",Sn[ln]=fn[ln],Sn[ln+Eu]=fn[ln+Eu],Sn[ln+Su]=fn[ln+Su],Sn[ln+Tu]=fn[ln+Tu],Sn[ln+Mu]=fn[ln+Mu],ct=EC(Ye,Sn,w),ei&&ae(0)),r?(k=r._initted,Dh(1),r.render(r.duration(),!0,!0),ne=M(R.a)-Q+Ke+At,ee=Math.abs(Ke-ne)>1,N&&ee&&ct.splice(ct.length-2,2),r.render(0,!0,!0),k||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Dh(0)):ne=Ke,H&&(H.value?H.style["overflow"+R.a.toUpperCase()]=H.value:H.style.removeProperty("overflow-"+R.a));else if(f&&ae()&&!E)for(yn=f.parentNode;yn&&yn!==vt;)yn._pinOffset&&(Ae-=yn._pinOffset,Ge-=yn._pinOffset),yn=yn.parentNode;q&&q.forEach(function(Me){return Me.revert(!1,!0)}),P.start=Ae,P.end=Ge,De=nt=ei?ue:ae(),!E&&!ei&&(De<ue&&ae(ue),P.scroll.rec=0),P.revert(!1,!0),Le=Vn(),I&&(Ue=-1,I.restart(!0)),zn=0,r&&D&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(kt||K!==P.progress||E||v||r&&!r._initted)&&(r&&!D&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(E&&Ae<-.001&&!K?Pe.utils.normalize(Ae,Ge,0):K,!0),P.progress=kt||(De-Ae)/Ke===K?0:K),h&&_&&(Je._pinOffset=Math.round(P.progress*ne)),ve&&ve.invalidate(),isNaN(W)||(W-=Pe.getProperty(Y,R.p),ye-=Pe.getProperty(lt,R.p),Bc(Y,R,W),Bc(et,R,W-(Xe||0)),Bc(lt,R,ye),Bc(Ve,R,ye-(Xe||0))),kt&&!ei&&P.update(),c&&!ei&&!F&&(F=!0,c(P),F=!1)}},P.getVelocity=function(){return(ae()-nt)/(Vn()-Ql)*1e3||0},P.endAnimation=function(){kl(P.callbackAnimation),r&&(ve?ve.progress(1):r.paused()?D||kl(r,P.direction<0,1):kl(r,r.reversed()))},P.labelToScroll=function(se){return r&&r.labels&&(Ae||P.refresh()||Ae)+r.labels[se]/r.duration()*Ke||0},P.getTrailing=function(se){var Be=rt.indexOf(P),Ne=P.direction>0?rt.slice(0,Be).reverse():rt.slice(Be+1);return(Ai(se)?Ne.filter(function(Xe){return Xe.vars.preventOverlaps===se}):Ne).filter(function(Xe){return P.direction>0?Xe.end<=Ae:Xe.start>=Ge})},P.update=function(se,Be,Ne){if(!(E&&!Ne&&!se)){var Xe=ei===!0?ue:P.scroll(),sn=se?0:(Xe-Ae)/Ke,st=sn<0?0:sn>1?1:sn||0,Ot=P.progress,kt,Dt,At,_t,In,Lt,xn,yi;if(Be&&(nt=De,De=E?ae():Xe,S&&(ce=ge,ge=r&&!D?r.totalProgress():st)),m&&h&&!zn&&!Lc&&ir&&(!st&&Ae<Xe+(Xe-nt)/(Vn()-Ql)*m?st=1e-4:st===1&&Ge>Xe+(Xe-nt)/(Vn()-Ql)*m&&(st=.9999)),st!==Ot&&P.enabled){if(kt=P.isActive=!!st&&st<1,Dt=!!Ot&&Ot<1,Lt=kt!==Dt,In=Lt||!!st!=!!Ot,P.direction=st>Ot?1:-1,P.progress=st,In&&!zn&&(At=st&&!Ot?0:st===1?1:Ot===1?2:3,D&&(_t=!Lt&&U[At+1]!=="none"&&U[At+1]||U[At],yi=r&&(_t==="complete"||_t==="reset"||_t in r))),C&&(Lt||yi)&&(yi||d||!r)&&(Wn(C)?C(P):P.getTrailing(C).forEach(function(Xr){return Xr.endAnimation()})),D||(ve&&!zn&&!Lc?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",st,r._tTime/r._tDur):(ve.vars.totalProgress=st,ve.invalidate().restart())):r&&r.totalProgress(st,!!(zn&&(Le||se)))),h){if(se&&_&&(Je.style[_+R.os2]=me),!N)V(eu(Q+ne*st));else if(In){if(xn=!se&&st>Ot&&Ge+1>Xe&&Xe+1>=Nr(L,R),w)if(!se&&(kt||xn)){var on=ts(h,!0),fn=Xe-Ae;$v(h,vt,on.top+(R===pn?fn:0)+dn,on.left+(R===pn?0:fn)+dn)}else $v(h,Je);il(kt||xn?ct:_e),ee&&st<1&&kt||V(Q+(st===1&&!xn?ne:0))}}S&&!le.tween&&!zn&&!Lc&&I.restart(!0),a&&(Lt||x&&st&&(st<1||!Lh))&&Zu(a.targets).forEach(function(Xr){return Xr.classList[kt||x?"add":"remove"](a.className)}),o&&!D&&!se&&o(P),In&&!zn?(D&&(yi&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),o&&o(P)),(Lt||!Lh)&&(u&&Lt&&fa(P,u),z[At]&&fa(P,z[At]),x&&(st===1?P.kill(!1,1):z[At]=0),Lt||(At=st===1?1:3,z[At]&&fa(P,z[At]))),y&&!kt&&Math.abs(P.getVelocity())>(tu(y)?y:2500)&&(kl(P.callbackAnimation),ve?ve.progress(1):kl(r,_t==="reverse"?1:!st,1))):D&&o&&!zn&&o(P)}if(xe){var yn=E?Xe/E.duration()*(E._caScrollDist||0):Xe;Z(yn+(Y._isFlipped?1:0)),xe(yn)}Se&&Se(-Xe/E.duration()*(E._caScrollDist||0))}},P.enable=function(se,Be){P.enabled||(P.enabled=!0,Tn(L,"resize",nu),j||Tn(L,"scroll",ha),te&&Tn(n,"refreshInit",te),se!==!1&&(P.progress=K=0,De=nt=Ue=ae()),Be!==!1&&P.refresh())},P.getTween=function(se){return se&&le?le.tween:ve},P.setPositions=function(se,Be,Ne,Xe){if(E){var sn=E.scrollTrigger,st=E.duration(),Ot=sn.end-sn.start;se=sn.start+Ot*se/st,Be=sn.start+Ot*Be/st}P.refresh(!1,!1,{start:zv(se,Ne&&!!P._startClamp),end:zv(Be,Ne&&!!P._endClamp)},Xe),P.update()},P.adjustPinSpacing=function(se){if(re&&se){var Be=re.indexOf(R.d)+1;re[Be]=parseFloat(re[Be])+se+dn,re[1]=parseFloat(re[1])+se+dn,il(re)}},P.disable=function(se,Be){if(se!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Be||ve&&ve.pause(),ue=0,be&&(be.uncache=1),te&&En(n,"refreshInit",te),I&&(I.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!j)){for(var Ne=rt.length;Ne--;)if(rt[Ne].scroller===L&&rt[Ne]!==P)return;En(L,"resize",nu),j||En(L,"scroll",ha)}},P.kill=function(se,Be){P.disable(se,Be),ve&&!Be&&ve.kill(),l&&delete Pm[l];var Ne=rt.indexOf(P);Ne>=0&&rt.splice(Ne,1),Ne===Jn&&Pf>0&&Jn--,Ne=0,rt.forEach(function(Xe){return Xe.scroller===P.scroller&&(Ne=1)}),Ne||ei||(P.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),Be||r.kill()),et&&[et,Ve,Y,lt].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),wu===P&&(wu=0),h&&(be&&(be.uncache=1),Ne=0,rt.forEach(function(Xe){return Xe.pin===h&&Ne++}),Ne||(be.spacer=0)),i.onKill&&i.onKill(P)},rt.push(P),P.enable(!1,!1),de&&de(P),r&&r.add&&!Ke){var ke=P.update;P.update=function(){P.update=ke,at.cache++,Ae||Ge||P.refresh()},Pe.delayedCall(.01,P.update),Ke=.01,Ae=Ge=0}else P.refresh();h&&yC()},n.register=function(i){return ba||(Pe=i||yM(),xM()&&window.document&&n.enable(),ba=Jl),ba},n.defaults=function(i){if(i)for(var r in i)Fc[r]=i[r];return Fc},n.disable=function(i,r){Jl=0,rt.forEach(function(o){return o[r?"kill":"disable"](i)}),En(ot,"wheel",ha),En(yt,"scroll",ha),clearInterval(Dc),En(yt,"touchcancel",br),En(vt,"touchstart",br),Ic(En,yt,"pointerdown,touchstart,mousedown",Vv),Ic(En,yt,"pointerup,touchend,mouseup",Hv),_d.kill(),Nc(En);for(var s=0;s<at.length;s+=3)Uc(En,at[s],at[s+1]),Uc(En,at[s],at[s+2])},n.enable=function(){if(ot=window,yt=document,bi=yt.documentElement,vt=yt.body,Pe){if(Zu=Pe.utils.toArray,xu=Pe.utils.clamp,bm=Pe.core.context||br,Dh=Pe.core.suppressOverwrites||br,k_=ot.history.scrollRestoration||"auto",Dm=ot.pageYOffset||0,Pe.core.globals("ScrollTrigger",n),vt){Jl=1,nl=document.createElement("div"),nl.style.height="100vh",nl.style.position="absolute",PM(),hC(),rn.register(Pe),n.isTouch=rn.isTouch,Ls=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cm=rn.isTouch===1,Tn(ot,"wheel",ha),O_=[ot,yt,bi,vt],Pe.matchMedia?(n.matchMedia=function(c){var d=Pe.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Pe.addEventListener("matchMediaInit",function(){bM(),W_()}),Pe.addEventListener("matchMediaRevert",function(){return CM()}),Pe.addEventListener("matchMedia",function(){No(0,1),Qo("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Ih(),Ih})):console.warn("Requires GSAP 3.11.0 or later"),Ih(),Tn(yt,"scroll",ha);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ts(vt),pn.m=Math.round(a.top+pn.sc())||0,ti.m=Math.round(a.left+ti.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),Dc=setInterval(Xv,250),Pe.delayedCall(.5,function(){return Lc=0}),Tn(yt,"touchcancel",br),Tn(vt,"touchstart",br),Ic(Tn,yt,"pointerdown,touchstart,mousedown",Vv),Ic(Tn,yt,"pointerup,touchend,mouseup",Hv),Am=Pe.utils.checkPrefix("transform"),Df.push(Am),ba=Vn(),_d=Pe.delayedCall(.2,No).pause(),Ra=[yt,"visibilitychange",function(){var c=ot.innerWidth,d=ot.innerHeight;yt.hidden?(Ov=c,kv=d):(Ov!==c||kv!==d)&&nu()},yt,"DOMContentLoaded",No,ot,"load",No,ot,"resize",nu],Nc(Tn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)Uc(En,at[l],at[l+1]),Uc(En,at[l],at[l+2])}else if(yt){var u=function c(){n.enable(),yt.removeEventListener("DOMContentLoaded",c)};yt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Lh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Dc)||(Dc=r)&&setInterval(Xv,r),"ignoreMobileResize"in i&&(Cm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Nc(En)||Nc(Tn,i.autoRefreshEvents||"none"),gM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ai(i),o=at.indexOf(s),a=Ko(s);~o&&at.splice(o,a?6:2),r&&(a?kr.unshift(ot,r,vt,r,bi,r):kr.unshift(s,r))},n.clearMatchMedia=function(i){rt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ai(i)?ai(i):i).getBoundingClientRect(),a=o[s?Ho:Go]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){Ai(i)&&(i=ai(i));var o=i.getBoundingClientRect(),a=o[s?Ho:Go],l=r==null?a/2:r in xd?xd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Zo.killAll||[];Zo={},r.forEach(function(s){return s()})}},n}();Qe.version="3.15.0";Qe.saveStyles=function(n){return n?Zu(n).forEach(function(e){if(e&&e.style){var t=Ti.indexOf(e);t>=0&&Ti.splice(t,5),Ti.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),bm())}}):Ti};Qe.revert=function(n,e){return W_(!n,e)};Qe.create=function(n,e){return new Qe(n,e)};Qe.refresh=function(n){return n?nu(!0):(ba||Qe.register())&&No(!0)};Qe.update=function(n){return++at.cache&&ls(n===!0?2:0)};Qe.clearScrollMemory=RM;Qe.maxScroll=function(n,e){return Nr(n,e?ti:pn)};Qe.getScrollFunc=function(n,e){return lo(ai(n),e?ti:pn)};Qe.getById=function(n){return Pm[n]};Qe.getAll=function(){return rt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!ir};Qe.snapDirectional=G_;Qe.addEventListener=function(n,e){var t=Zo[n]||(Zo[n]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(n,e){var t=Zo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Qe.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],h=Pe.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Wn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Wn(s)&&(s=s(),Tn(Qe,"refresh",function(){return s=e.batchMax()})),Zu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Qe.create(u))}),t};var Zv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Fh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===bi&&n(vt,t)},zc={auto:1,scroll:1},wC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=Vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zc[(l=Zi(s)).overflowY]||zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ko(s)&&(zc[(l=Zi(s)).overflowY]||zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},LM=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&wC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Tn(yt,rn.eventTypes[0],Jv,!1,!0)},onDisable:function(){return En(yt,rn.eventTypes[0],Jv,!0)}})},AC=/(input|label|select|textarea)/i,Qv,Jv=function(e){var t=AC.test(e.target.tagName);(t||Qv)&&(e._gsapAllow=!0,Qv=t)},CC=function(e){wo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ai(e.target)||bi,c=Pe.core.globals().ScrollSmoother,d=c&&c.get(),f=Ls&&(e.content&&ai(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=lo(u,pn),_=lo(u,ti),v=1,m=(rn.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,g=Wn(r)?function(){return r(a)}:function(){return r||2.8},x,S,w=LM(u,e.type,!0,s),T=function(){return S=!1},E=br,y=br,C=function(){l=Nr(u,pn),y=xu(Ls?1:0,l),i&&(E=xu(0,Nr(u,ti))),x=Wo},R=function(){f._gsap.y=eu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(S){requestAnimationFrame(T);var O=eu(a.deltaY/2),X=y(h.v-O);if(f&&X!==h.v+h.offset){h.offset=X-h.v;var P=eu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=at.cache,ls()}return!0}h.offset&&R(),S=!0},L,G,j,N,z=function(){C(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Ls&&U.type==="touchmove"&&D()||v>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){S=!1;var U=v;v=eu((ot.visualViewport&&ot.visualViewport.scale||1)/m),L.pause(),U!==v&&Fh(u,v>1.01?!0:i?!1:"x"),G=_(),j=h(),C(),x=Wo},e.onRelease=e.onGestureStart=function(U,O){if(h.offset&&R(),!O)N.restart(!0);else{at.cache++;var X=g(),P,te;i&&(P=_(),te=P+X*.05*-U.velocityX/.227,X*=Zv(_,P,te,Nr(u,ti)),L.vars.scrollX=E(te)),P=h(),te=P+X*.05*-U.velocityY/.227,X*=Zv(h,P,te,Nr(u,pn)),L.vars.scrollY=y(te),L.invalidate().duration(X).play(.01),(Ls&&L.vars.scrollY>=l||P>=l-1)&&Pe.to({},{onUpdate:z,duration:X})}o&&o(U)},e.onWheel=function(){L._ts&&L.pause(),Vn()-p>1e3&&(x=0,p=Vn())},e.onChange=function(U,O,X,P,te){if(Wo!==x&&C(),O&&i&&_(E(P[2]===O?G+(U.startX-U.x):_()+O-P[1])),X){h.offset&&R();var pe=te[2]===X,He=pe?j+U.startY-U.y:h()+X-te[1],Ue=y(He);pe&&He!==Ue&&(j+=Ue-He),h(Ue)}(X||O)&&ls()},e.onEnable=function(){Fh(u,i?!1:"x"),Qe.addEventListener("refresh",z),Tn(ot,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){Fh(u,!0),En(ot,"resize",z),Qe.removeEventListener("refresh",z),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Ls,Ls&&!h()&&h(1),Ls&&Pe.ticker.add(br),N=a._dc,L=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:DM(h,h(),function(){return L.pause()})},onUpdate:ls,onComplete:N.vars.onComplete}),a};Qe.sort=function(n){if(Wn(n))return rt.sort(n);var e=ot.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),rt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(n){return new rn(n)};Qe.normalizeScroll=function(n){if(typeof n>"u")return Zn;if(n===!0&&Zn)return Zn.enable();if(n===!1){Zn&&Zn.kill(),Zn=n;return}var e=n instanceof rn?n:CC(n);return Zn&&Zn.target===e.target&&Zn.kill(),Ko(e.target)&&(Zn=e),e};Qe.core={_getVelocityProp:wm,_inputObserver:LM,_scrollers:at,_proxies:kr,bridge:{ss:function(){ir||Qo("scrollStart"),ir=Vn()},ref:function(){return zn}}};yM()&&Pe.registerPlugin(Qe);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),or=(n,e)=>{const t=xt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>xt.createElement("svg",{ref:c,...bC,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${RC(n)}`,a].join(" "),...u},[...e.map(([d,f])=>xt.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=or("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=or("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=or("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=or("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=or("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=or("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=or("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=or("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=or("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=or("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=or("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=or("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]),zC=()=>{const n=xt.useRef(null);return xt.useEffect(()=>{zi.fromTo(n.current,{y:-100,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",delay:.2})},[]),B.jsx("nav",{ref:n,className:"fixed top-0 left-0 w-full z-50 bg-[#000000] border-b border-white/5",children:B.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative",children:[B.jsx("div",{className:"flex items-center gap-2 cursor-pointer z-10",children:B.jsx("img",{src:"/assets/ifix-india-logo.png",alt:"iFix India",className:"h-11 object-contain"})}),B.jsxs("div",{className:"hidden md:flex items-center gap-8 text-sm font-medium text-secondary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:[B.jsx("a",{href:"#services",className:"hover:text-white transition-colors duration-300",children:"Services"}),B.jsx("a",{href:"#about",className:"hover:text-white transition-colors duration-300",children:"Apple Care"}),B.jsx("a",{href:"#locations",className:"hover:text-white transition-colors duration-300",children:"Locations"}),B.jsx("a",{href:"#business",className:"hover:text-white transition-colors duration-300",children:"Business"})]}),B.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[B.jsx("a",{href:"tel:+917676400900",className:"text-sm font-medium text-white hover:text-[#ED1C24] transition-colors duration-300",children:"+91 7676 400 900"}),B.jsx("button",{className:"bg-[#ED1C24] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(237,28,36,0.5)]",children:"Fix My Device"})]}),B.jsx("button",{className:"md:hidden text-white",children:B.jsx(NC,{className:"w-6 h-6"})})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const X_="184",VC=0,ex=1,HC=2,Nf=1,GC=2,iu=3,uo=0,vi=1,ns=2,us=0,rl=1,tx=2,nx=3,ix=4,WC=5,Co=100,XC=101,jC=102,YC=103,qC=104,$C=200,KC=201,ZC=202,QC=203,Im=204,Um=205,JC=206,eb=207,tb=208,nb=209,ib=210,rb=211,sb=212,ob=213,ab=214,Fm=0,Om=1,km=2,xl=3,Bm=4,zm=5,Vm=6,Hm=7,IM=0,lb=1,ub=2,Br=0,UM=1,FM=2,OM=3,kM=4,BM=5,zM=6,VM=7,HM=300,Jo=301,yl=302,Oh=303,kh=304,Yd=306,Gm=1e3,os=1001,Wm=1002,Pn=1003,cb=1004,Vc=1005,Xn=1006,Bh=1007,Io=1008,Qi=1009,GM=1010,WM=1011,Ju=1012,j_=1013,Gr=1014,Ir=1015,vs=1016,Y_=1017,q_=1018,ec=1020,XM=35902,jM=35899,YM=1021,qM=1022,_r=1023,xs=1026,Uo=1027,$M=1028,$_=1029,ea=1030,K_=1031,Z_=1033,If=33776,Uf=33777,Ff=33778,Of=33779,Xm=35840,jm=35841,Ym=35842,qm=35843,$m=36196,Km=37492,Zm=37496,Qm=37488,Jm=37489,yd=37490,eg=37491,tg=37808,ng=37809,ig=37810,rg=37811,sg=37812,og=37813,ag=37814,lg=37815,ug=37816,cg=37817,fg=37818,dg=37819,hg=37820,pg=37821,mg=36492,gg=36494,_g=36495,vg=36283,xg=36284,Sd=36285,yg=36286,fb=3200,rx=0,db=1,Os="",Yi="srgb",Md="srgb-linear",Ed="linear",St="srgb",pa=7680,sx=519,hb=512,pb=513,mb=514,Q_=515,gb=516,_b=517,J_=518,vb=519,ox=35044,ax="300 es",Ur=2e3,Td=2001;function xb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yb(){const n=wd("canvas");return n.style.display="block",n}const lx={};function ux(...n){const e="THREE."+n.shift();console.log(e,...n)}function KM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=KM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=KM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Sg(...n){const e=n.join(" ");e in lx||(lx[e]=!0,je(...n))}function Sb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Mb={[Fm]:Om,[km]:Vm,[Bm]:Hm,[xl]:zm,[Om]:Fm,[Vm]:km,[Hm]:Bm,[zm]:xl};class sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=Math.PI/180,Mg=180/Math.PI;function ac(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Eb(n,e){return(n%e+e)%e}function Vh(n,e,t){return(1-t)*n+t*e}function Bl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const i0=class i0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};i0.prototype.isVector2=!0;let Et=i0;class Al{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],_=s[o+2],v=s[o+3];if(d!==v||l!==f||u!==h||c!==_){let m=l*f+u*h+c*_+d*v;m<0&&(f=-f,h=-h,_=-_,v=-v,m=-m);let p=1-a;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);p=Math.sin(p*g)/x,a=Math.sin(a*g)/x,l=l*p+f*a,u=u*p+h*a,c=c*p+_*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+_*a,d=d*p+v*a;const g=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=g,u*=g,c*=g,d*=g}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*h-u*f,e[t+1]=l*_+c*f+u*d-a*h,e[t+2]=u*_+c*h+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*h*_,this._y=u*h*d-f*c*_,this._z=u*c*_+f*h*d,this._w=u*c*d-f*h*_;break;case"YXZ":this._x=f*c*d+u*h*_,this._y=u*h*d-f*c*_,this._z=u*c*_-f*h*d,this._w=u*c*d+f*h*_;break;case"ZXY":this._x=f*c*d-u*h*_,this._y=u*h*d+f*c*_,this._z=u*c*_+f*h*d,this._w=u*c*d-f*h*_;break;case"ZYX":this._x=f*c*d-u*h*_,this._y=u*h*d+f*c*_,this._z=u*c*_-f*h*d,this._w=u*c*d+f*h*_;break;case"YZX":this._x=f*c*d+u*h*_,this._y=u*h*d+f*c*_,this._z=u*c*_-f*h*d,this._w=u*c*d-f*h*_;break;case"XZY":this._x=f*c*d-u*h*_,this._y=u*h*d-f*c*_,this._z=u*c*_+f*h*d,this._w=u*c*d+f*h*_;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const r0=class r0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};r0.prototype.isVector3=!0;let $=r0;const Hh=new $,cx=new Al,s0=class s0{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=r[0],m=r[3],p=r[6],g=r[1],x=r[4],S=r[7],w=r[2],T=r[5],E=r[8];return s[0]=o*v+a*g+l*w,s[3]=o*m+a*x+l*T,s[6]=o*p+a*S+l*E,s[1]=u*v+c*g+d*w,s[4]=u*m+c*x+d*T,s[7]=u*p+c*S+d*E,s[2]=f*v+h*g+_*w,s[5]=f*m+h*x+_*T,s[8]=f*p+h*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,h=u*s-o*l,_=t*d+i*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gh.makeScale(e,t)),this}rotate(e){return this.premultiply(Gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};s0.prototype.isMatrix3=!0;let $e=s0;const Gh=new $e,fx=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dx=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tb(){const n={enabled:!0,workingColorSpace:Md,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=sl(r.r),r.g=sl(r.g),r.b=sl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Os?Ed:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sg("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sg("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Md]:{primaries:e,whitePoint:i,transfer:Ed,toXYZ:fx,fromXYZ:dx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:e,whitePoint:i,transfer:St,toXYZ:fx,fromXYZ:dx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),n}const ft=Tb();function cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ma;class wb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=wd("canvas")),ma.width=e.width,ma.height=e.height;const r=ma.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cs(t[i]/255)*255):t[i]=cs(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class e0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wh(r[o].image)):s.push(Wh(r[o]))}else s=Wh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Cb=0;const Xh=new $;class ii extends sa{constructor(e=ii.DEFAULT_IMAGE,t=ii.DEFAULT_MAPPING,i=os,r=os,s=Xn,o=Io,a=_r,l=Qi,u=ii.DEFAULT_ANISOTROPY,c=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ac(),this.name="",this.source=new e0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==HM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gm:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case Wm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gm:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case Wm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=HM;ii.DEFAULT_ANISOTROPY=1;const o0=class o0{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(h+1)/2,w=(p+1)/2,T=(c+f)/4,E=(d+v)/4,y=(_+m)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=E/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(f-c)/g,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};o0.prototype.isVector4=!0;let nn=o0;class bb extends sa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ii(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new e0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends bb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ZM extends ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rb extends ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=class Ad{constructor(e,t,i,r,s,o,a,l,u,c,d,f,h,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,h,_,v,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ad().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),o=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,h=o*d,_=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+_*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=_+h*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,_=u*c,v=u*d;t[0]=f+v*a,t[4]=_*a-h,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=h*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,_=u*c,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,_=a*c,v=a*d;t[0]=l*c,t[4]=_*u-h,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=h*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=v-f*d,t[8]=_*d+h,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=o*c,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pb,e,Db)}lookAt(e,t,i){const r=this.elements;return Mi.subVectors(e,t),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),As.crossVectors(i,Mi),As.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),As.crossVectors(i,Mi)),As.normalize(),Hc.crossVectors(Mi,As),r[0]=As.x,r[4]=Hc.x,r[8]=Mi.x,r[1]=As.y,r[5]=Hc.y,r[9]=Mi.y,r[2]=As.z,r[6]=Hc.z,r[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],g=i[3],x=i[7],S=i[11],w=i[15],T=r[0],E=r[4],y=r[8],C=r[12],R=r[1],D=r[5],L=r[9],G=r[13],j=r[2],N=r[6],z=r[10],U=r[14],O=r[3],X=r[7],P=r[11],te=r[15];return s[0]=o*T+a*R+l*j+u*O,s[4]=o*E+a*D+l*N+u*X,s[8]=o*y+a*L+l*z+u*P,s[12]=o*C+a*G+l*U+u*te,s[1]=c*T+d*R+f*j+h*O,s[5]=c*E+d*D+f*N+h*X,s[9]=c*y+d*L+f*z+h*P,s[13]=c*C+d*G+f*U+h*te,s[2]=_*T+v*R+m*j+p*O,s[6]=_*E+v*D+m*N+p*X,s[10]=_*y+v*L+m*z+p*P,s[14]=_*C+v*G+m*U+p*te,s[3]=g*T+x*R+S*j+w*O,s[7]=g*E+x*D+S*N+w*X,s[11]=g*y+x*L+S*z+w*P,s[15]=g*C+x*G+S*U+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15],g=l*h-u*f,x=a*h-u*d,S=a*f-l*d,w=o*h-u*c,T=o*f-l*c,E=o*d-a*c;return t*(v*g-m*x+p*S)-i*(_*g-m*w+p*T)+r*(_*x-v*w+p*E)-s*(_*S-v*T+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],g=t*a-i*o,x=t*l-r*o,S=t*u-s*o,w=i*l-r*a,T=i*u-s*a,E=r*u-s*l,y=c*v-d*_,C=c*m-f*_,R=c*p-h*_,D=d*m-f*v,L=d*p-h*v,G=f*p-h*m,j=g*G-x*L+S*D+w*R-T*C+E*y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/j;return e[0]=(a*G-l*L+u*D)*N,e[1]=(r*L-i*G-s*D)*N,e[2]=(v*E-m*T+p*w)*N,e[3]=(f*T-d*E-h*w)*N,e[4]=(l*R-o*G-u*C)*N,e[5]=(t*G-r*R+s*C)*N,e[6]=(m*S-_*E-p*x)*N,e[7]=(c*E-f*S+h*x)*N,e[8]=(o*L-a*R+u*y)*N,e[9]=(i*R-t*L-s*y)*N,e[10]=(_*T-v*S+p*g)*N,e[11]=(d*S-c*T-h*g)*N,e[12]=(a*C-o*D-l*y)*N,e[13]=(t*D-i*C+r*y)*N,e[14]=(v*x-_*w-m*g)*N,e[15]=(c*w-d*x+f*g)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,h=s*c,_=s*d,v=o*c,m=o*d,p=a*d,g=l*u,x=l*c,S=l*d,w=i.x,T=i.y,E=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(f+p))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(_+x)*E,r[9]=(m-g)*E,r[10]=(1-(f+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ga.set(r[0],r[1],r[2]).length();const a=ga.set(r[4],r[5],r[6]).length(),l=ga.set(r[8],r[9],r[10]).length();s<0&&(o=-o),lr.copy(this);const u=1/o,c=1/a,d=1/l;return lr.elements[0]*=u,lr.elements[1]*=u,lr.elements[2]*=u,lr.elements[4]*=c,lr.elements[5]*=c,lr.elements[6]*=c,lr.elements[8]*=d,lr.elements[9]*=d,lr.elements[10]*=d,t.setFromRotationMatrix(lr),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Ur,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===Ur)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Td)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ur,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===Ur)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===Td)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ad.prototype.isMatrix4=!0;let gn=Ad;const ga=new $,lr=new gn,Pb=new $(0,0,0),Db=new $(1,1,1),As=new $,Hc=new $,Mi=new $,hx=new gn,px=new Al;class ta{constructor(e=0,t=0,i=0,r=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return px.setFromEuler(this),this.setFromQuaternion(px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class QM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lb=0;const mx=new $,_a=new Al,jr=new gn,Gc=new $,zl=new $,Nb=new $,Ib=new Al,gx=new $(1,0,0),_x=new $(0,1,0),vx=new $(0,0,1),xx={type:"added"},Ub={type:"removed"},va={type:"childadded",child:null},jh={type:"childremoved",child:null};class Fi extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fi.DEFAULT_UP.clone();const e=new $,t=new ta,i=new Al,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gn},normalMatrix:{value:new $e}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new QM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(gx,e)}rotateY(e){return this.rotateOnAxis(_x,e)}rotateZ(e){return this.rotateOnAxis(vx,e)}translateOnAxis(e,t){return mx.copy(e).applyQuaternion(this.quaternion),this.position.add(mx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gx,e)}translateY(e){return this.translateOnAxis(_x,e)}translateZ(e){return this.translateOnAxis(vx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gc.copy(e):Gc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jr.lookAt(zl,Gc,this.up):jr.lookAt(Gc,zl,this.up),this.quaternion.setFromRotationMatrix(jr),r&&(jr.extractRotation(r.matrixWorld),_a.setFromRotationMatrix(jr),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xx),va.child=e,this.dispatchEvent(va),va.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ub),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xx),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,e,Nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,Ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fi.DEFAULT_UP=new $(0,1,0);Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wc extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fb={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,_=.005;u.inputState.pinching&&f>h+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const JM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class wt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=Eb(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qh(o,s,e+1/3),this.g=qh(o,s,e),this.b=qh(o,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Yi){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yi){const i=JM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=sl(e.r),this.g=sl(e.g),this.b=sl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return ft.workingToColorSpace(Bn.copy(this),e),Math.round(dt(Bn.r*255,0,255))*65536+Math.round(dt(Bn.g*255,0,255))*256+Math.round(dt(Bn.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,r=Bn.g,s=Bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Yi){ft.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,i=Bn.g,r=Bn.b;return e!==Yi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cs),this.setHSL(Cs.h+e,Cs.s+t,Cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cs),e.getHSL(Xc);const i=Vh(Cs.h,Xc.h,t),r=Vh(Cs.s,Xc.s,t),s=Vh(Cs.l,Xc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new wt;wt.NAMES=JM;class Ob extends Fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ur=new $,Yr=new $,$h=new $,qr=new $,xa=new $,ya=new $,yx=new $,Kh=new $,Zh=new $,Qh=new $,Jh=new nn,ep=new nn,tp=new nn;class gr{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ur.subVectors(e,t),r.cross(ur);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ur.subVectors(r,t),Yr.subVectors(i,t),$h.subVectors(e,t);const o=ur.dot(ur),a=ur.dot(Yr),l=ur.dot($h),u=Yr.dot(Yr),c=Yr.dot($h),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qr)===null?!1:qr.x>=0&&qr.y>=0&&qr.x+qr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qr.x),l.addScaledVector(o,qr.y),l.addScaledVector(a,qr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jh.setScalar(0),ep.setScalar(0),tp.setScalar(0),Jh.fromBufferAttribute(e,t),ep.fromBufferAttribute(e,i),tp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jh,s.x),o.addScaledVector(ep,s.y),o.addScaledVector(tp,s.z),o}static isFrontFacing(e,t,i,r){return ur.subVectors(i,t),Yr.subVectors(e,t),ur.cross(Yr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),Yr.subVectors(this.a,this.b),ur.cross(Yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xa.subVectors(r,i),ya.subVectors(s,i),Kh.subVectors(e,i);const l=xa.dot(Kh),u=ya.dot(Kh);if(l<=0&&u<=0)return t.copy(i);Zh.subVectors(e,r);const c=xa.dot(Zh),d=ya.dot(Zh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(xa,o);Qh.subVectors(e,s);const h=xa.dot(Qh),_=ya.dot(Qh);if(_>=0&&h<=_)return t.copy(s);const v=h*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ya,a);const m=c*_-h*d;if(m<=0&&d-c>=0&&h-_>=0)return yx.subVectors(s,r),a=(d-c)/(d-c+(h-_)),t.copy(r).addScaledVector(yx,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(xa,o).addScaledVector(ya,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lc{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cr):cr.fromBufferAttribute(s,o),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jc.copy(i.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vl),Yc.subVectors(this.max,Vl),Sa.subVectors(e.a,Vl),Ma.subVectors(e.b,Vl),Ea.subVectors(e.c,Vl),bs.subVectors(Ma,Sa),Rs.subVectors(Ea,Ma),_o.subVectors(Sa,Ea);let t=[0,-bs.z,bs.y,0,-Rs.z,Rs.y,0,-_o.z,_o.y,bs.z,0,-bs.x,Rs.z,0,-Rs.x,_o.z,0,-_o.x,-bs.y,bs.x,0,-Rs.y,Rs.x,0,-_o.y,_o.x,0];return!np(t,Sa,Ma,Ea,Yc)||(t=[1,0,0,0,1,0,0,0,1],!np(t,Sa,Ma,Ea,Yc))?!1:(qc.crossVectors(bs,Rs),t=[qc.x,qc.y,qc.z],np(t,Sa,Ma,Ea,Yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $r=[new $,new $,new $,new $,new $,new $,new $,new $],cr=new $,jc=new lc,Sa=new $,Ma=new $,Ea=new $,bs=new $,Rs=new $,_o=new $,Vl=new $,Yc=new $,qc=new $,vo=new $;function np(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vo.fromArray(n,s);const a=r.x*Math.abs(vo.x)+r.y*Math.abs(vo.y)+r.z*Math.abs(vo.z),l=e.dot(vo),u=t.dot(vo),c=i.dot(vo);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const an=new $,$c=new Et;let kb=0;class Vr extends sa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ox,this.updateRanges=[],this.gpuType=Ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$c.fromBufferAttribute(this,t),$c.applyMatrix3(e),this.setXY(t,$c.x,$c.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bl(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bl(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bl(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),r=oi(r,this.array),s=oi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ox&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class eE extends Vr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tE extends Vr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fs extends Vr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Bb=new lc,Hl=new $,ip=new $;class t0{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hl.subVectors(e,this.center);const t=Hl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ip.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hl.copy(e.center).add(ip)),this.expandByPoint(Hl.copy(e.center).sub(ip))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zb=0;const Xi=new gn,rp=new Fi,Ta=new $,Ei=new lc,Gl=new lc,Mn=new $;class Ss extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xb(e)?tE:eE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return rp.lookAt(e),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fs(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new t0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gl.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Ei.min,Gl.min),Ei.expandByPoint(Mn),Mn.addVectors(Ei.max,Gl.max),Ei.expandByPoint(Mn)):(Ei.expandByPoint(Gl.min),Ei.expandByPoint(Gl.max))}Ei.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Mn.fromBufferAttribute(a,u),l&&(Ta.fromBufferAttribute(e,u),Mn.add(Ta)),r=Math.max(r,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new $,l[y]=new $;const u=new $,c=new $,d=new $,f=new Et,h=new Et,_=new Et,v=new $,m=new $;function p(y,C,R){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,C),_.fromBufferAttribute(s,R),c.sub(u),d.sub(u),h.sub(f),_.sub(f);const D=1/(h.x*_.y-_.x*h.y);isFinite(D)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-_.x).multiplyScalar(D),a[y].add(v),a[C].add(v),a[R].add(v),l[y].add(m),l[C].add(m),l[R].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,C=g.length;y<C;++y){const R=g[y],D=R.start,L=R.count;for(let G=D,j=D+L;G<j;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new $,S=new $,w=new $,T=new $;function E(y){w.fromBufferAttribute(r,y),T.copy(w);const C=a[y];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(T,C);const D=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,D)}for(let y=0,C=g.length;y<C;++y){const R=g[y],D=R.start,L=R.count;for(let G=D,j=D+L;G<j;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,c=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[_++]=u[h++]}return new Vr(f,c,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ss,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Vb=0;class qd extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=rl,this.side=uo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Im,this.blendDst=Um,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rl&&(i.blending=this.blending),this.side!==uo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Im&&(i.blendSrc=this.blendSrc),this.blendDst!==Um&&(i.blendDst=this.blendDst),this.blendEquation!==Co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kr=new $,sp=new $,Kc=new $,Ps=new $,op=new $,Zc=new $,ap=new $;class Hb{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kr.copy(this.origin).addScaledVector(this.direction,t),Kr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sp.copy(e).add(t).multiplyScalar(.5),Kc.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(sp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kc),a=Ps.dot(this.direction),l=-Ps.dot(Kc),u=Ps.lengthSq(),c=Math.abs(1-o*o);let d,f,h,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sp).addScaledVector(Kc,f),h}intersectSphere(e,t){Kr.subVectors(e.center,this.origin);const i=Kr.dot(this.direction),r=Kr.dot(Kr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kr)!==null}intersectTriangle(e,t,i,r,s){op.subVectors(t,e),Zc.subVectors(i,e),ap.crossVectors(op,Zc);let o=this.direction.dot(ap),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);const l=a*this.direction.dot(Zc.crossVectors(Ps,Zc));if(l<0)return null;const u=a*this.direction.dot(op.cross(Ps));if(u<0||l+u>o)return null;const c=-a*Ps.dot(ap);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nE extends qd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=IM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sx=new gn,xo=new Hb,Qc=new t0,Mx=new $,Jc=new $,ef=new $,tf=new $,lp=new $,nf=new $,Ex=new $,rf=new $;class Wr extends Fi{constructor(e=new Ss,t=new nE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(lp.fromBufferAttribute(d,e),o?nf.addScaledVector(lp,c):nf.addScaledVector(lp.sub(t),c))}t.add(nf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qc.copy(i.boundingSphere),Qc.applyMatrix4(s),xo.copy(e.ray).recast(e.near),!(Qc.containsPoint(xo.origin)===!1&&(xo.intersectSphere(Qc,Mx)===null||xo.origin.distanceToSquared(Mx)>(e.far-e.near)**2))&&(Sx.copy(s).invert(),xo.copy(e.ray).applyMatrix4(Sx),!(i.boundingBox!==null&&xo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],g=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=g,w=x;S<w;S+=3){const T=a.getX(S),E=a.getX(S+1),y=a.getX(S+2);r=sf(this,p,e,i,u,c,d,T,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=sf(this,o,e,i,u,c,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],g=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=g,w=x;S<w;S+=3){const T=S,E=S+1,y=S+2;r=sf(this,p,e,i,u,c,d,T,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const g=m,x=m+1,S=m+2;r=sf(this,o,e,i,u,c,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gb(n,e,t,i,r,s,o,a){let l;if(e.side===vi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===uo,a),l===null)return null;rf.copy(a),rf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(rf);return u<t.near||u>t.far?null:{distance:u,point:rf.clone(),object:n}}function sf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Jc),n.getVertexPosition(l,ef),n.getVertexPosition(u,tf);const c=Gb(n,e,t,i,Jc,ef,tf,Ex);if(c){const d=new $;gr.getBarycoord(Ex,Jc,ef,tf,d),r&&(c.uv=gr.getInterpolatedAttribute(r,a,l,u,d,new Et)),s&&(c.uv1=gr.getInterpolatedAttribute(s,a,l,u,d,new Et)),o&&(c.normal=gr.getInterpolatedAttribute(o,a,l,u,d,new $),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new $,materialIndex:0};gr.getNormal(Jc,ef,tf,f.normal),c.face=f,c.barycoord=d}return c}class Wb extends ii{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Pn,c=Pn,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const up=new $,Xb=new $,jb=new $e;class Ao{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=up.subVectors(i,t).cross(Xb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(up),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jb.getNormalMatrix(e),r=this.coplanarPoint(up).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yo=new t0,Yb=new Et(.5,.5),of=new $;class iE{constructor(e=new Ao,t=new Ao,i=new Ao,r=new Ao,s=new Ao,o=new Ao){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ur,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],_=s[8],v=s[9],m=s[10],p=s[11],g=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-o,h-c,p-_,w-g).normalize(),r[1].setComponents(u+o,h+c,p+_,w+g).normalize(),r[2].setComponents(u+a,h+d,p+v,w+x).normalize(),r[3].setComponents(u-a,h-d,p-v,w-x).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,h-f,p-m,w-S).normalize();else if(r[4].setComponents(u-l,h-f,p-m,w-S).normalize(),t===Ur)r[5].setComponents(u+l,h+f,p+m,w+S).normalize();else if(t===Td)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yo)}intersectsSprite(e){yo.center.set(0,0,0);const t=Yb.distanceTo(e.center);return yo.radius=.7071067811865476+t,yo.applyMatrix4(e.matrixWorld),this.intersectsSphere(yo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(of.x=r.normal.x>0?e.max.x:e.min.x,of.y=r.normal.y>0?e.max.y:e.min.y,of.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(of)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rE extends ii{constructor(e=[],t=Jo,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sl extends ii{constructor(e,t,i=Gr,r,s,o,a=Pn,l=Pn,u,c=xs,d=1){if(c!==xs&&c!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new e0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qb extends Sl{constructor(e,t=Gr,i=Jo,r,s,o=Pn,a=Pn,l,u=xs){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sE extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uc extends Ss{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fs(u,3)),this.setAttribute("normal",new fs(c,3)),this.setAttribute("uv",new fs(d,2));function _(v,m,p,g,x,S,w,T,E,y,C){const R=S/E,D=w/y,L=S/2,G=w/2,j=T/2,N=E+1,z=y+1;let U=0,O=0;const X=new $;for(let P=0;P<z;P++){const te=P*D-G;for(let pe=0;pe<N;pe++){const He=pe*R-L;X[v]=He*g,X[m]=te*x,X[p]=j,u.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=T>0?1:-1,c.push(X.x,X.y,X.z),d.push(pe/E),d.push(1-P/y),U+=1}}for(let P=0;P<y;P++)for(let te=0;te<E;te++){const pe=f+te+N*P,He=f+te+N*(P+1),Ue=f+(te+1)+N*(P+1),Le=f+(te+1)+N*P;l.push(pe,He,Le),l.push(He,Ue,Le),O+=6}a.addGroup(h,O,C),h+=O,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cc extends Ss{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,h=[],_=[],v=[],m=[];for(let p=0;p<c;p++){const g=p*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const x=g+u*p,S=g+u*(p+1),w=g+1+u*(p+1),T=g+1+u*p;h.push(x,S,T),h.push(S,w,T)}this.setIndex(h),this.setAttribute("position",new fs(_,3)),this.setAttribute("normal",new fs(v,3)),this.setAttribute("uv",new fs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ml(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Tx(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Tx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const i=Ml(n[t]);for(const r in i)e[r]=i[r]}return e}function Tx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $b(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function oE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Kb={clone:Ml,merge:Kn};var Zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends qd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ml(e.uniforms),this.uniformsGroups=$b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jb extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eR extends qd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tR extends qd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const af=new $,lf=new Al,Tr=new $;class aE extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Ur,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(af,lf,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(af,lf,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(af,lf,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(af,lf,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new $,wx=new Et,Ax=new Et;class mr extends aE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mg*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,wx,Ax),t.subVectors(Ax,wx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class n0 extends aE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wa=-90,Aa=1;class nR extends Fi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mr(wa,Aa,e,t);r.layers=this.layers,this.add(r);const s=new mr(wa,Aa,e,t);s.layers=this.layers,this.add(s);const o=new mr(wa,Aa,e,t);o.layers=this.layers,this.add(o);const a=new mr(wa,Aa,e,t);a.layers=this.layers,this.add(a);const l=new mr(wa,Aa,e,t);l.layers=this.layers,this.add(l);const u=new mr(wa,Aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ur)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Td)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class iR extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const a0=class a0{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};a0.prototype.isMatrix2=!0;let Cx=a0;function bx(n,e,t,i){const r=rR(i);switch(t){case YM:return n*e;case $M:return n*e/r.components*r.byteLength;case $_:return n*e/r.components*r.byteLength;case ea:return n*e*2/r.components*r.byteLength;case K_:return n*e*2/r.components*r.byteLength;case qM:return n*e*3/r.components*r.byteLength;case _r:return n*e*4/r.components*r.byteLength;case Z_:return n*e*4/r.components*r.byteLength;case If:case Uf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Of:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jm:case qm:return Math.max(n,16)*Math.max(e,8)/4;case Xm:case Ym:return Math.max(n,8)*Math.max(e,8)/2;case $m:case Km:case Qm:case Jm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zm:case yd:case eg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ng:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ig:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case og:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ag:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ug:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mg:case gg:case _g:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vg:case xg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sd:case yg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rR(n){switch(n){case Qi:case GM:return{byteLength:1,components:1};case Ju:case WM:case vs:return{byteLength:2,components:1};case Y_:case q_:return{byteLength:2,components:4};case Gr:case j_:case Ir:return{byteLength:4,components:1};case XM:case jM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X_}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var oR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aR=`#ifdef USE_ALPHAHASH
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
#endif`,lR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dR=`#ifdef USE_AOMAP
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
#endif`,hR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xR=`#ifdef USE_IRIDESCENCE
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
#endif`,yR=`#ifdef USE_BUMPMAP
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
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`#define PI 3.141592653589793
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
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DR=`vec3 transformedNormal = objectNormal;
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
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FR="gl_FragColor = linearToOutputTexel( gl_FragColor );",OR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
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
#endif`,VR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YR=`#ifdef USE_GRADIENTMAP
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
}`,qR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZR=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,QR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,JR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,r2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s2=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,a2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g2=`#if defined( USE_POINTS_UV )
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
#endif`,_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M2=`#ifdef USE_MORPHTARGETS
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
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R2=`#ifdef USE_NORMALMAP
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
#endif`,P2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,G2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,X2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,j2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y2=`#ifdef USE_SKINNING
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
#endif`,q2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$2=`#ifdef USE_SKINNING
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
#endif`,K2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eP=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tP=`#ifdef USE_TRANSMISSION
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
#endif`,nP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aP=`uniform sampler2D t2D;
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
}`,lP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dP=`#include <common>
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
}`,hP=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pP=`#define DISTANCE
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
}`,mP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_P=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vP=`uniform float scale;
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
}`,xP=`uniform vec3 diffuse;
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
}`,yP=`#include <common>
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
}`,SP=`uniform vec3 diffuse;
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
}`,MP=`#define LAMBERT
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
}`,EP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TP=`#define MATCAP
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
}`,wP=`#define MATCAP
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
}`,AP=`#define NORMAL
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
}`,CP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bP=`#define PHONG
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
}`,RP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,PP=`#define STANDARD
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
}`,DP=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,LP=`#define TOON
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
}`,NP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,IP=`uniform float size;
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
}`,UP=`uniform vec3 diffuse;
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
}`,FP=`#include <common>
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
}`,OP=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,kP=`uniform float rotation;
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
}`,BP=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:oR,alphahash_pars_fragment:aR,alphamap_fragment:lR,alphamap_pars_fragment:uR,alphatest_fragment:cR,alphatest_pars_fragment:fR,aomap_fragment:dR,aomap_pars_fragment:hR,batching_pars_vertex:pR,batching_vertex:mR,begin_vertex:gR,beginnormal_vertex:_R,bsdfs:vR,iridescence_fragment:xR,bumpmap_pars_fragment:yR,clipping_planes_fragment:SR,clipping_planes_pars_fragment:MR,clipping_planes_pars_vertex:ER,clipping_planes_vertex:TR,color_fragment:wR,color_pars_fragment:AR,color_pars_vertex:CR,color_vertex:bR,common:RR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:DR,displacementmap_pars_vertex:LR,displacementmap_vertex:NR,emissivemap_fragment:IR,emissivemap_pars_fragment:UR,colorspace_fragment:FR,colorspace_pars_fragment:OR,envmap_fragment:kR,envmap_common_pars_fragment:BR,envmap_pars_fragment:zR,envmap_pars_vertex:VR,envmap_physical_pars_fragment:QR,envmap_vertex:HR,fog_vertex:GR,fog_pars_vertex:WR,fog_fragment:XR,fog_pars_fragment:jR,gradientmap_pars_fragment:YR,lightmap_pars_fragment:qR,lights_lambert_fragment:$R,lights_lambert_pars_fragment:KR,lights_pars_begin:ZR,lights_toon_fragment:JR,lights_toon_pars_fragment:e2,lights_phong_fragment:t2,lights_phong_pars_fragment:n2,lights_physical_fragment:i2,lights_physical_pars_fragment:r2,lights_fragment_begin:s2,lights_fragment_maps:o2,lights_fragment_end:a2,lightprobes_pars_fragment:l2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:c2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:d2,map_fragment:h2,map_pars_fragment:p2,map_particle_fragment:m2,map_particle_pars_fragment:g2,metalnessmap_fragment:_2,metalnessmap_pars_fragment:v2,morphinstance_vertex:x2,morphcolor_vertex:y2,morphnormal_vertex:S2,morphtarget_pars_vertex:M2,morphtarget_vertex:E2,normal_fragment_begin:T2,normal_fragment_maps:w2,normal_pars_fragment:A2,normal_pars_vertex:C2,normal_vertex:b2,normalmap_pars_fragment:R2,clearcoat_normal_fragment_begin:P2,clearcoat_normal_fragment_maps:D2,clearcoat_pars_fragment:L2,iridescence_pars_fragment:N2,opaque_fragment:I2,packing:U2,premultiplied_alpha_fragment:F2,project_vertex:O2,dithering_fragment:k2,dithering_pars_fragment:B2,roughnessmap_fragment:z2,roughnessmap_pars_fragment:V2,shadowmap_pars_fragment:H2,shadowmap_pars_vertex:G2,shadowmap_vertex:W2,shadowmask_pars_fragment:X2,skinbase_vertex:j2,skinning_pars_vertex:Y2,skinning_vertex:q2,skinnormal_vertex:$2,specularmap_fragment:K2,specularmap_pars_fragment:Z2,tonemapping_fragment:Q2,tonemapping_pars_fragment:J2,transmission_fragment:eP,transmission_pars_fragment:tP,uv_pars_fragment:nP,uv_pars_vertex:iP,uv_vertex:rP,worldpos_vertex:sP,background_vert:oP,background_frag:aP,backgroundCube_vert:lP,backgroundCube_frag:uP,cube_vert:cP,cube_frag:fP,depth_vert:dP,depth_frag:hP,distance_vert:pP,distance_frag:mP,equirect_vert:gP,equirect_frag:_P,linedashed_vert:vP,linedashed_frag:xP,meshbasic_vert:yP,meshbasic_frag:SP,meshlambert_vert:MP,meshlambert_frag:EP,meshmatcap_vert:TP,meshmatcap_frag:wP,meshnormal_vert:AP,meshnormal_frag:CP,meshphong_vert:bP,meshphong_frag:RP,meshphysical_vert:PP,meshphysical_frag:DP,meshtoon_vert:LP,meshtoon_frag:NP,points_vert:IP,points_frag:UP,shadow_vert:FP,shadow_frag:OP,sprite_vert:kP,sprite_frag:BP},Ee={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Rr={basic:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Kn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Kn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Kn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Kn([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Kn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Kn([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Kn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Kn([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Kn([Ee.common,Ee.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Kn([Ee.lights,Ee.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Rr.physical={uniforms:Kn([Rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const uf={r:0,b:0,g:0},zP=new gn,uE=new $e;uE.set(-1,0,0,0,1,0,0,0,1);function VP(n,e,t,i,r,s){const o=new wt(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const S=g.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(g){let x=!1;const S=h(g);S===null?m(o,a):S&&S.isColor&&(m(S,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,x){const S=h(x);S&&(S.isCubeTexture||S.mapping===Yd)?(u===void 0&&(u=new Wr(new uc(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Ml(Rr.backgroundCube.uniforms),vertexShader:Rr.backgroundCube.vertexShader,fragmentShader:Rr.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zP.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(uE),u.material.toneMapped=ft.getTransfer(S.colorSpace)!==St,(c!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Wr(new cc(2,2),new Sr({name:"BackgroundMaterial",uniforms:Ml(Rr.background.uniforms),vertexShader:Rr.background.vertexShader,fragmentShader:Rr.background.fragmentShader,side:uo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ft.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,x){g.getRGB(uf,oE(n)),t.buffers.color.setClear(uf.r,uf.g,uf.b,x,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:_,addToRenderList:v,dispose:p}}function HP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,L,G,j,N){let z=!1;const U=d(D,j,G,L);s!==U&&(s=U,u(s.object)),z=h(D,j,G,N),z&&_(D,j,G,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(D,L,G,j),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function u(D){return n.bindVertexArray(D)}function c(D){return n.deleteVertexArray(D)}function d(D,L,G,j){const N=j.wireframe===!0;let z=i[L.id];z===void 0&&(z={},i[L.id]=z);const U=D.isInstancedMesh===!0?D.id:0;let O=z[U];O===void 0&&(O={},z[U]=O);let X=O[G.id];X===void 0&&(X={},O[G.id]=X);let P=X[N];return P===void 0&&(P=f(l()),X[N]=P),P}function f(D){const L=[],G=[],j=[];for(let N=0;N<t;N++)L[N]=0,G[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:j,object:D,attributes:{},index:null}}function h(D,L,G,j){const N=s.attributes,z=L.attributes;let U=0;const O=G.getAttributes();for(const X in O)if(O[X].location>=0){const te=N[X];let pe=z[X];if(pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;U++}return s.attributesNum!==U||s.index!==j}function _(D,L,G,j){const N={},z=L.attributes;let U=0;const O=G.getAttributes();for(const X in O)if(O[X].location>=0){let te=z[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),N[X]=pe,U++}s.attributes=N,s.attributesNum=U,s.index=j}function v(){const D=s.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){const G=s.newAttributes,j=s.enabledAttributes,N=s.attributeDivisors;G[D]=1,j[D]===0&&(n.enableVertexAttribArray(D),j[D]=1),N[D]!==L&&(n.vertexAttribDivisor(D,L),N[D]=L)}function g(){const D=s.newAttributes,L=s.enabledAttributes;for(let G=0,j=L.length;G<j;G++)L[G]!==D[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function x(D,L,G,j,N,z,U){U===!0?n.vertexAttribIPointer(D,L,G,N,z):n.vertexAttribPointer(D,L,G,j,N,z)}function S(D,L,G,j){v();const N=j.attributes,z=G.getAttributes(),U=L.defaultAttributeValues;for(const O in z){const X=z[O];if(X.location>=0){let P=N[O];if(P===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){const te=P.normalized,pe=P.itemSize,He=e.get(P);if(He===void 0)continue;const Ue=He.buffer,Le=He.type,K=He.bytesPerElement,ae=Le===n.INT||Le===n.UNSIGNED_INT||P.gpuType===j_;if(P.isInterleavedBufferAttribute){const le=P.data,be=le.stride,ze=P.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)p(X.location+De,le.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let De=0;De<X.locationSize;De++)x(X.location+De,pe/X.locationSize,Le,te,be*K,(ze+pe/X.locationSize*De)*K,ae)}else{if(P.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,P.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let le=0;le<X.locationSize;le++)x(X.location+le,pe/X.locationSize,Le,te,pe*K,pe/X.locationSize*le*K,ae)}}else if(U!==void 0){const te=U[O];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}g()}function w(){C();for(const D in i){const L=i[D];for(const G in L){const j=L[G];for(const N in j){const z=j[N];for(const U in z)c(z[U].object),delete z[U];delete j[N]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const G in L){const j=L[G];for(const N in j){const z=j[N];for(const U in z)c(z[U].object),delete z[U];delete j[N]}}delete i[D.id]}function E(D){for(const L in i){const G=i[L];for(const j in G){const N=G[j];if(N[D.id]===void 0)continue;const z=N[D.id];for(const U in z)c(z[U].object),delete z[U];delete N[D.id]}}}function y(D){for(const L in i){const G=i[L],j=D.isInstancedMesh===!0?D.id:0,N=G[j];if(N!==void 0){for(const z in N){const U=N[z];for(const O in U)c(U[O].object),delete U[O];delete N[z]}delete G[j],Object.keys(G).length===0&&delete i[L]}}}function C(){R(),o=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function GP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function WP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==_r&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const y=E===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ir&&!y)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(je("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:T}}function XP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ao,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,x=g*4;let S=p.clippingState||null;l.value=S,S=c(_,f,x,h);for(let w=0;w!==x;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=h;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Xs=4,Rx=[.125,.215,.35,.446,.526,.582],bo=20,jP=256,Wl=new n0,Px=new wt;let cp=null,fp=0,dp=0,hp=!1;const YP=new $;class Dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=YP}=s;cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cp,fp,dp),this._renderer.xr.enabled=hp,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jo||e.mapping===yl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:vs,format:_r,colorSpace:Md,depthBuffer:!1},r=Lx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lx(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qP(s)),this._blurMaterial=KP(s,e,t),this._ggxMaterial=$P(s,e,t)}return r}_compileMaterial(e){const t=new Wr(new Ss,e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,i,r,s){const l=new mr(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Px),d.toneMapping=Br,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wr(new uc,new nE({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(Px),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const w=this._cubeSize;Ca(r,S*w,x>2?w:0,w,w),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jo||e.mapping===yl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Xs?i-_+Xs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Ca(s,m,p,3*v,2*v),r.setRenderTarget(s),r.render(a,Wl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ca(e,m,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Wl)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*bo-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):bo;m>bo&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bo}`);const p=[];let g=0;for(let E=0;E<bo;++E){const y=E/v,C=Math.exp(-y*y/2);p.push(C),E===0?g+=C:E<m&&(g+=2*C)}for(let E=0;E<p.length;E++)p[E]=p[E]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Xs?r-x+Xs:0),T=4*(this._cubeSize-S);Ca(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Wl)}}function qP(n){const e=[],t=[],i=[];let r=n;const s=n-Xs+1+Rx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Xs?l=Rx[o-n+Xs-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,_=6,v=3,m=2,p=1,g=new Float32Array(v*_*h),x=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let T=0;T<h;T++){const E=T%3*2/3-1,y=T>2?0:-1,C=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];g.set(C,v*_*T),x.set(f,m*_*T);const R=[T,T,T,T,T,T];S.set(R,p*_*T)}const w=new Ss;w.setAttribute("position",new Vr(g,v)),w.setAttribute("uv",new Vr(x,m)),w.setAttribute("faceIndex",new Vr(S,p)),i.push(new Wr(w,null)),r>Xs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lx(n,e,t){const i=new zr(n,e,t);return i.texture.mapping=Yd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $P(n,e,t){return new Sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$d(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function KP(n,e,t){const i=new Float32Array(bo),r=new $(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:bo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Nx(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Ix(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}class cE extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rE(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uc(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:Ml(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:us});s.uniforms.tEquirect.value=t;const o=new Wr(r,s),a=t.minFilter;return t.minFilter===Io&&(t.minFilter=Xn),new nR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function ZP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Oh||h===kh)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new cE(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,_=h===Oh||h===kh,v=h===Jo||h===yl;if(_||v){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Dx(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return _&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new Dx(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function a(f,h){return h===Oh?f.mapping=Jo:h===kh&&(f.mapping=yl),f}function l(f){let h=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&h++;return h===_}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function QP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sg("WebGLRenderer: "+i+" extension not supported."),r}}}function JP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(h!==null){const g=h.array;v=h.version;for(let x=0,S=g.length;x<S;x+=3){const w=g[x+0],T=g[x+1],E=g[x+2];f.push(w,T,T,E,E,w)}}else{const g=_.array;v=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const w=x+0,T=x+1,E=x+2;f.push(w,T,T,E,E,w)}}const m=new(_.count>=65535?tE:eE)(f,1);m.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function e3(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let v=0;for(let m=0;m<h;m++)v+=f[m];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function t3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function n3(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let R=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var h=R;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*d),y=new ZM(E,w,T,d);y.type=Ir,y.needsUpdate=!0;const C=S*4;for(let D=0;D<d;D++){const L=p[D],G=g[D],j=x[D],N=w*T*4*D;for(let z=0;z<L.count;z++){const U=z*C;_===!0&&(r.fromBufferAttribute(L,z),E[N+U+0]=r.x,E[N+U+1]=r.y,E[N+U+2]=r.z,E[N+U+3]=0),v===!0&&(r.fromBufferAttribute(G,z),E[N+U+4]=r.x,E[N+U+5]=r.y,E[N+U+6]=r.z,E[N+U+7]=0),m===!0&&(r.fromBufferAttribute(j,z),E[N+U+8]=r.x,E[N+U+9]=r.y,E[N+U+10]=r.z,E[N+U+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new Et(w,T)},i.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function i3(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const r3={[UM]:"LINEAR_TONE_MAPPING",[FM]:"REINHARD_TONE_MAPPING",[OM]:"CINEON_TONE_MAPPING",[kM]:"ACES_FILMIC_TONE_MAPPING",[zM]:"AGX_TONE_MAPPING",[VM]:"NEUTRAL_TONE_MAPPING",[BM]:"CUSTOM_TONE_MAPPING"};function s3(n,e,t,i,r){const s=new zr(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Sl(e,t):void 0}),o=new zr(e,t,{type:vs,depthBuffer:!1,stencilBuffer:!1}),a=new Ss;a.setAttribute("position",new fs([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fs([0,2,0,0,2,0],2));const l=new Jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Wr(a,l),c=new n0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,v=null,m=[],p=!1;this.setSize=function(g,x){s.setSize(g,x),o.setSize(g,x);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(g,x)}},this.setEffects=function(g){m=g,p=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(x,S)}},this.begin=function(g,x){if(h||g.toneMapping===Br&&m.length===0)return!1;if(v=x,x!==null){const S=x.width,w=x.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return p===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=Br,!0},this.hasRenderPass=function(){return p},this.end=function(g,x){g.toneMapping=_,h=!0;let S=s,w=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(g,w,S,x),E.needsSwap!==!1)){const y=S;S=w,w=y}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},ft.getTransfer(d)===St&&(l.defines.SRGB_TRANSFER="");const T=r3[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(v),g.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const fE=new ii,Eg=new Sl(1,1),dE=new ZM,hE=new Rb,pE=new rE,Ux=[],Fx=[],Ox=new Float32Array(16),kx=new Float32Array(9),Bx=new Float32Array(4);function Cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ux[r];if(s===void 0&&(s=new Float32Array(r),Ux[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kd(n,e){let t=Fx[e];t===void 0&&(t=new Int32Array(e),Fx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function l3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function u3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function c3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;Bx.set(i),n.uniformMatrix2fv(this.addr,!1,Bx),vn(t,i)}}function f3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;kx.set(i),n.uniformMatrix3fv(this.addr,!1,kx),vn(t,i)}}function d3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;Ox.set(i),n.uniformMatrix4fv(this.addr,!1,Ox),vn(t,i)}}function h3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function _3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function x3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function S3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Eg.compareFunction=t.isReversedDepthBuffer()?J_:Q_,s=Eg):s=fE,t.setTexture2D(e||s,r)}function M3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hE,r)}function E3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pE,r)}function T3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dE,r)}function w3(n){switch(n){case 5126:return o3;case 35664:return a3;case 35665:return l3;case 35666:return u3;case 35674:return c3;case 35675:return f3;case 35676:return d3;case 5124:case 35670:return h3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return _3;case 36294:return v3;case 36295:return x3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return T3}}function A3(n,e){n.uniform1fv(this.addr,e)}function C3(n,e){const t=Cl(e,this.size,2);n.uniform2fv(this.addr,t)}function b3(n,e){const t=Cl(e,this.size,3);n.uniform3fv(this.addr,t)}function R3(n,e){const t=Cl(e,this.size,4);n.uniform4fv(this.addr,t)}function P3(n,e){const t=Cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D3(n,e){const t=Cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L3(n,e){const t=Cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N3(n,e){n.uniform1iv(this.addr,e)}function I3(n,e){n.uniform2iv(this.addr,e)}function U3(n,e){n.uniform3iv(this.addr,e)}function F3(n,e){n.uniform4iv(this.addr,e)}function O3(n,e){n.uniform1uiv(this.addr,e)}function k3(n,e){n.uniform2uiv(this.addr,e)}function B3(n,e){n.uniform3uiv(this.addr,e)}function z3(n,e){n.uniform4uiv(this.addr,e)}function V3(n,e,t){const i=this.cache,r=e.length,s=Kd(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Eg:o=fE;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function H3(n,e,t){const i=this.cache,r=e.length,s=Kd(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hE,s[o])}function G3(n,e,t){const i=this.cache,r=e.length,s=Kd(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pE,s[o])}function W3(n,e,t){const i=this.cache,r=e.length,s=Kd(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dE,s[o])}function X3(n){switch(n){case 5126:return A3;case 35664:return C3;case 35665:return b3;case 35666:return R3;case 35674:return P3;case 35675:return D3;case 35676:return L3;case 5124:case 35670:return N3;case 35667:case 35671:return I3;case 35668:case 35672:return U3;case 35669:case 35673:return F3;case 5125:return O3;case 36294:return k3;case 36295:return B3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return G3;case 36289:case 36303:case 36311:case 36292:return W3}}class j3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w3(t.type)}}class Y3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X3(t.type)}}class q3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pp=/(\w+)(\])?(\[|\.)?/g;function zx(n,e){n.seq.push(e),n.map[e.id]=e}function $3(n,e,t){const i=n.name,r=i.length;for(pp.lastIndex=0;;){const s=pp.exec(i),o=pp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){zx(t,u===void 0?new j3(a,n,e):new Y3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new q3(a),zx(t,d)),t=d}}}class kf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$3(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const K3=37297;let Z3=0;function Q3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hx=new $e;function J3(n){ft._getMatrix(Hx,ft.workingColorSpace,n);const e=`mat3( ${Hx.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Ed:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Q3(n.getShaderSource(e),a)}else return s}function eD(n,e){const t=J3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tD={[UM]:"Linear",[FM]:"Reinhard",[OM]:"Cineon",[kM]:"ACESFilmic",[zM]:"AgX",[VM]:"Neutral",[BM]:"Custom"};function nD(n,e){const t=tD[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cf=new $;function iD(){ft.getLuminanceCoefficients(cf);const n=cf.x.toFixed(4),e=cf.y.toFixed(4),t=cf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ru).join(`
`)}function sD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ru(n){return n!==""}function Wx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tg(n){return n.replace(aD,uD)}const lD=new Map;function uD(n,e){let t=tt[e];if(t===void 0){const i=lD.get(e);if(i!==void 0)t=tt[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tg(t)}const cD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jx(n){return n.replace(cD,fD)}function fD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dD={[Nf]:"SHADOWMAP_TYPE_PCF",[iu]:"SHADOWMAP_TYPE_VSM"};function hD(n){return dD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pD={[Jo]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE",[Yd]:"ENVMAP_TYPE_CUBE_UV"};function mD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const gD={[yl]:"ENVMAP_MODE_REFRACTION"};function _D(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vD={[IM]:"ENVMAP_BLENDING_MULTIPLY",[lb]:"ENVMAP_BLENDING_MIX",[ub]:"ENVMAP_BLENDING_ADD"};function xD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vD[n.combine]||"ENVMAP_BLENDING_NONE"}function yD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hD(t),u=mD(t),c=_D(t),d=xD(t),f=yD(t),h=rD(t),_=sD(s),v=r.createProgram();let m,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ru).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ru).join(`
`),p.length>0&&(p+=`
`)):(m=[Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ru).join(`
`),p=[Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?tt.tonemapping_pars_fragment:"",t.toneMapping!==Br?nD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,eD("linearToOutputTexel",t.outputColorSpace),iD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ru).join(`
`)),o=Tg(o),o=Wx(o,t),o=Xx(o,t),a=Tg(a),a=Wx(a,t),a=Xx(a,t),o=jx(o),a=jx(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+m+o,S=g+p+a,w=Vx(r,r.VERTEX_SHADER,x),T=Vx(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(w)||"",j=r.getShaderInfoLog(T)||"",N=L.trim(),z=G.trim(),U=j.trim();let O=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,T);else{const P=Gx(r,w,"vertex"),te=Gx(r,T,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+P+`
`+te)}else N!==""?je("WebGLProgram: Program Info Log:",N):(z===""||U==="")&&(X=!1);X&&(D.diagnostics={runnable:O,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:p}})}r.deleteShader(w),r.deleteShader(T),y=new kf(r,v),C=oD(r,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,K3)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let MD=0;class ED{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TD(e),t.set(e,i)),i}}class TD{constructor(e){this.id=MD++,this.code=e,this.usedTimes=0}}function wD(n){return n===ea||n===yd||n===Sd}function AD(n,e,t,i,r,s){const o=new QM,a=new ED,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,C,R,D,L,G){const j=D.fog,N=L.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||z,U),X=O&&O.mapping===Yd?O.image.height:null,P=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=te!==void 0?te.length:0;let He=0;N.morphAttributes.position!==void 0&&(He=1),N.morphAttributes.normal!==void 0&&(He=2),N.morphAttributes.color!==void 0&&(He=3);let Ue,Le,K,ae;if(P){const he=Rr[P];Ue=he.vertexShader,Le=he.fragmentShader}else Ue=y.vertexShader,Le=y.fragmentShader,a.update(y),K=a.getVertexShaderID(y),ae=a.getFragmentShaderID(y);const le=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,nt=!!y.map,Ae=!!y.matcap,Ge=!!O,et=!!y.aoMap,Ve=!!y.lightMap,Y=!!y.bumpMap,lt=!!y.normalMap,Vt=!!y.displacementMap,F=!!y.emissiveMap,Ke=!!y.metalnessMap,Ye=!!y.roughnessMap,ct=y.anisotropy>0,_e=y.clearcoat>0,Je=y.dispersion>0,b=y.iridescence>0,M=y.sheen>0,V=y.transmission>0,Q=ct&&!!y.anisotropyMap,ne=_e&&!!y.clearcoatMap,me=_e&&!!y.clearcoatNormalMap,re=_e&&!!y.clearcoatRoughnessMap,Z=b&&!!y.iridescenceMap,ee=b&&!!y.iridescenceThicknessMap,xe=M&&!!y.sheenColorMap,we=M&&!!y.sheenRoughnessMap,ge=!!y.specularMap,ce=!!y.specularColorMap,ve=!!y.specularIntensityMap,We=V&&!!y.transmissionMap,qe=V&&!!y.thicknessMap,I=!!y.gradientMap,ue=!!y.alphaMap,J=y.alphaTest>0,Se=!!y.alphaHash,de=!!y.extensions;let ie=Br;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ie=n.toneMapping);const oe={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:Le,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Ae,envMap:Ge,envMapMode:Ge&&O.mapping,envMapCubeUVHeight:X,aoMap:et,lightMap:Ve,bumpMap:Y,normalMap:lt,displacementMap:Vt,emissiveMap:F,normalMapObjectSpace:lt&&y.normalMapType===db,normalMapTangentSpace:lt&&y.normalMapType===rx,packedNormalMap:lt&&y.normalMapType===rx&&wD(y.normalMap.format),metalnessMap:Ke,roughnessMap:Ye,anisotropy:ct,anisotropyMap:Q,clearcoat:_e,clearcoatMap:ne,clearcoatNormalMap:me,clearcoatRoughnessMap:re,dispersion:Je,iridescence:b,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:ge,specularColorMap:ce,specularIntensityMap:ve,transmission:V,transmissionMap:We,thicknessMap:qe,gradientMap:I,opaque:y.transparent===!1&&y.blending===rl&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Se,combine:y.combine,mapUv:nt&&_(y.map.channel),aoMapUv:et&&_(y.aoMap.channel),lightMapUv:Ve&&_(y.lightMap.channel),bumpMapUv:Y&&_(y.bumpMap.channel),normalMapUv:lt&&_(y.normalMap.channel),displacementMapUv:Vt&&_(y.displacementMap.channel),emissiveMapUv:F&&_(y.emissiveMap.channel),metalnessMapUv:Ke&&_(y.metalnessMap.channel),roughnessMapUv:Ye&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(y.sheenRoughnessMap.channel),specularMapUv:ge&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:ve&&_(y.specularIntensityMap.channel),transmissionMapUv:We&&_(y.transmissionMap.channel),thicknessMapUv:qe&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(lt||ct),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(nt||ue),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:He,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:F&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ns,flipSided:y.side===vi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function m(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)C.push(R),C.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(C,y),g(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function g(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const C=h[y.type];let R;if(C){const D=Rr[C];R=Kb.clone(D.uniforms)}else R=y.uniforms;return R}function S(y,C){let R=c.get(C);return R!==void 0?++R.usedTimes:(R=new SD(n,C,y,r),u.push(R),c.set(C,R)),R}function w(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:E}}function CD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $x(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,_,v,m,p){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=_,g.materialVariant=o(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=m,g.group=p),e++,g}function l(f,h,_,v,m,p){const g=a(f,h,_,v,m,p);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):t.push(g)}function u(f,h,_,v,m,p){const g=a(f,h,_,v,m,p);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||bD),i.length>1&&i.sort(h||qx),r.length>1&&r.sort(h||qx)}function d(){for(let f=e,h=n.length;f<h;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function RD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $x,n.set(i,[o])):r>=s.length?(o=new $x,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new wt};break;case"SpotLight":t={position:new $,direction:new $,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function DD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LD=0;function ND(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ID(n){const e=new PD,t=DD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new gn,o=new gn;function a(u){let c=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,g=0,x=0,S=0,w=0,T=0,E=0;u.sort(ND);for(let C=0,R=u.length;C<R;C++){const D=u[C],L=D.color,G=D.intensity,j=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ea?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=L.r*G,d+=L.g*G,f+=L.b*G;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],G);E++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,O=t.get(D);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=D.shadow.matrix,g++}i.directional[h]=z,h++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(L).multiplyScalar(G),z.distance=j,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[v]=z;const U=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,U.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=U.matrix,D.castShadow){const O=t.get(D);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=N,S++}v++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(L).multiplyScalar(G),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const U=D.shadow,O=t.get(D);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=z,_++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(G),z.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==g||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,y.directionalLength=h,y.pointLength=_,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=g,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=E,i.version=LD++)}function l(u,c){let d=0,f=0,h=0,_=0,v=0;const m=c.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const x=u[p];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Kx(n){const e=new ID(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function UD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kx(n),e.set(r,[a])):s>=o.length?(a=new Kx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const FD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kD=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],BD=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Zx=new gn,Xl=new $,mp=new $;function zD(n,e,t){let i=new iE;const r=new Et,s=new Et,o=new nn,a=new eR,l=new tR,u={},c=t.maxTextureSize,d={[uo]:vi,[vi]:uo,[ns]:ns},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:FD,fragmentShader:OD}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Ss;_.setAttribute("position",new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let p=this.type;this.render=function(T,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===GC&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nf);const C=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(us),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&E.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(N=>N.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,N=T.length;j<N;j++){const z=T[j],U=z.shadow;if(U===void 0){je("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||G===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===iu){if(z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new zr(r.x,r.y,{format:ea,type:vs,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new Sl(r.x,r.y,Ir),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=xs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Pn,U.map.depthTexture.magFilter=Pn}else z.isPointLight?(U.map=new cE(r.x),U.map.depthTexture=new qb(r.x,Gr)):(U.map=new zr(r.x,r.y),U.map.depthTexture=new Sl(r.x,r.y,Gr)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=xs,this.type===Nf?(U.map.depthTexture.compareFunction=X?J_:Q_,U.map.depthTexture.minFilter=Xn,U.map.depthTexture.magFilter=Xn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Pn,U.map.depthTexture.magFilter=Pn);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<P;te++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,te),n.clear();else{te===0&&(n.setRenderTarget(U.map),n.clear());const pe=U.getViewport(te);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),L.viewport(o)}if(z.isPointLight){const pe=U.camera,He=U.matrix,Ue=z.distance||pe.far;Ue!==pe.far&&(pe.far=Ue,pe.updateProjectionMatrix()),Xl.setFromMatrixPosition(z.matrixWorld),pe.position.copy(Xl),mp.copy(pe.position),mp.add(kD[te]),pe.up.copy(BD[te]),pe.lookAt(mp),pe.updateMatrixWorld(),He.makeTranslation(-Xl.x,-Xl.y,-Xl.z),Zx.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Zx,pe.coordinateSystem,pe.reversedDepth)}else U.updateMatrices(z);i=U.getFrustum(),S(E,y,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===iu&&g(U,y),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,R,D)};function g(T,E){const y=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zr(r.x,r.y,{format:ea,type:vs})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,y,f,v,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,y,h,v,null)}function x(T,E,y,C){let R=null;const D=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=R.uuid,G=E.uuid;let j=u[L];j===void 0&&(j={},u[L]=j);let N=j[G];N===void 0&&(N=R.clone(),j[G]=N,E.addEventListener("dispose",w)),R=N}if(R.visible=E.visible,R.wireframe=E.wireframe,C===iu?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=n.properties.get(R);L.light=y}return R}function S(T,E,y,C,R){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===iu)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const G=e.update(T),j=T.material;if(Array.isArray(j)){const N=G.groups;for(let z=0,U=N.length;z<U;z++){const O=N[z],X=j[O.materialIndex];if(X&&X.visible){const P=x(T,X,C,R);T.onBeforeShadow(n,T,E,y,G,P,O),n.renderBufferDirect(y,null,G,P,T,O),T.onAfterShadow(n,T,E,y,G,P,O)}}}else if(j.visible){const N=x(T,j,C,R);T.onBeforeShadow(n,T,E,y,G,N,null),n.renderBufferDirect(y,null,G,N,T,null),T.onAfterShadow(n,T,E,y,G,N,null)}}const L=T.children;for(let G=0,j=L.length;G<j;G++)S(L[G],E,y,C,R)}function w(T){T.target.removeEventListener("dispose",w);for(const y in u){const C=u[y],R=T.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function VD(n,e){function t(){let I=!1;const ue=new nn;let J=null;const Se=new nn(0,0,0,0);return{setMask:function(de){J!==de&&!I&&(n.colorMask(de,de,de,de),J=de)},setLocked:function(de){I=de},setClear:function(de,ie,oe,he,ke){ke===!0&&(de*=he,ie*=he,oe*=he),ue.set(de,ie,oe,he),Se.equals(ue)===!1&&(n.clearColor(de,ie,oe,he),Se.copy(ue))},reset:function(){I=!1,J=null,Se.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,J=null,Se=null,de=null;return{setReversed:function(ie){if(ue!==ie){const oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const he=de;de=null,this.setClear(he)}},getReversed:function(){return ue},setTest:function(ie){ie?le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!I&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(ue&&(ie=Mb[ie]),Se!==ie){switch(ie){case Fm:n.depthFunc(n.NEVER);break;case Om:n.depthFunc(n.ALWAYS);break;case km:n.depthFunc(n.LESS);break;case xl:n.depthFunc(n.LEQUAL);break;case Bm:n.depthFunc(n.EQUAL);break;case zm:n.depthFunc(n.GEQUAL);break;case Vm:n.depthFunc(n.GREATER);break;case Hm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ie}},setLocked:function(ie){I=ie},setClear:function(ie){de!==ie&&(de=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){I=!1,J=null,Se=null,de=null,ue=!1}}}function r(){let I=!1,ue=null,J=null,Se=null,de=null,ie=null,oe=null,he=null,ke=null;return{setTest:function(se){I||(se?le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(se){ue!==se&&!I&&(n.stencilMask(se),ue=se)},setFunc:function(se,Be,Ne){(J!==se||Se!==Be||de!==Ne)&&(n.stencilFunc(se,Be,Ne),J=se,Se=Be,de=Ne)},setOp:function(se,Be,Ne){(ie!==se||oe!==Be||he!==Ne)&&(n.stencilOp(se,Be,Ne),ie=se,oe=Be,he=Ne)},setLocked:function(se){I=se},setClear:function(se){ke!==se&&(n.clearStencil(se),ke=se)},reset:function(){I=!1,ue=null,J=null,Se=null,de=null,ie=null,oe=null,he=null,ke=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,_=[],v=null,m=!1,p=null,g=null,x=null,S=null,w=null,T=null,E=null,y=new wt(0,0,0),C=0,R=!1,D=null,L=null,G=null,j=null,N=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=O>=2);let P=null,te={};const pe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Ue=new nn().fromArray(pe),Le=new nn().fromArray(He);function K(I,ue,J,Se){const de=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<J;oe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ue+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ie}const ae={};ae[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(xl),Y(!1),lt(ex),le(n.CULL_FACE),et(us);function le(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function be(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function ze(I,ue){return f[I]!==ue?(n.bindFramebuffer(I,ue),f[I]=ue,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(I,ue){let J=_,Se=!1;if(I){J=h.get(ue),J===void 0&&(J=[],h.set(ue,J));const de=I.textures;if(J.length!==de.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,oe=de.length;ie<oe;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=de.length,Se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Se=!0);Se&&n.drawBuffers(J)}function nt(I){return v!==I?(n.useProgram(I),v=I,!0):!1}const Ae={[Co]:n.FUNC_ADD,[XC]:n.FUNC_SUBTRACT,[jC]:n.FUNC_REVERSE_SUBTRACT};Ae[YC]=n.MIN,Ae[qC]=n.MAX;const Ge={[$C]:n.ZERO,[KC]:n.ONE,[ZC]:n.SRC_COLOR,[Im]:n.SRC_ALPHA,[ib]:n.SRC_ALPHA_SATURATE,[tb]:n.DST_COLOR,[JC]:n.DST_ALPHA,[QC]:n.ONE_MINUS_SRC_COLOR,[Um]:n.ONE_MINUS_SRC_ALPHA,[nb]:n.ONE_MINUS_DST_COLOR,[eb]:n.ONE_MINUS_DST_ALPHA,[rb]:n.CONSTANT_COLOR,[sb]:n.ONE_MINUS_CONSTANT_COLOR,[ob]:n.CONSTANT_ALPHA,[ab]:n.ONE_MINUS_CONSTANT_ALPHA};function et(I,ue,J,Se,de,ie,oe,he,ke,se){if(I===us){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(le(n.BLEND),m=!0),I!==WC){if(I!==p||se!==R){if((g!==Co||w!==Co)&&(n.blendEquation(n.FUNC_ADD),g=Co,w=Co),se)switch(I){case rl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tx:n.blendFunc(n.ONE,n.ONE);break;case nx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ix:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",I);break}else switch(I){case rl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nx:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",I);break}x=null,S=null,T=null,E=null,y.set(0,0,0),C=0,p=I,R=se}return}de=de||ue,ie=ie||J,oe=oe||Se,(ue!==g||de!==w)&&(n.blendEquationSeparate(Ae[ue],Ae[de]),g=ue,w=de),(J!==x||Se!==S||ie!==T||oe!==E)&&(n.blendFuncSeparate(Ge[J],Ge[Se],Ge[ie],Ge[oe]),x=J,S=Se,T=ie,E=oe),(he.equals(y)===!1||ke!==C)&&(n.blendColor(he.r,he.g,he.b,ke),y.copy(he),C=ke),p=I,R=!1}function Ve(I,ue){I.side===ns?be(n.CULL_FACE):le(n.CULL_FACE);let J=I.side===vi;ue&&(J=!J),Y(J),I.blending===rl&&I.transparent===!1?et(us):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Se=I.stencilWrite;a.setTest(Se),Se&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function lt(I){I!==VC?(le(n.CULL_FACE),I!==L&&(I===ex?n.cullFace(n.BACK):I===HC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),L=I}function Vt(I){I!==G&&(U&&n.lineWidth(I),G=I)}function F(I,ue,J){I?(le(n.POLYGON_OFFSET_FILL),(j!==ue||N!==J)&&(j=ue,N=J,o.getReversed()&&(ue=-ue),n.polygonOffset(ue,J))):be(n.POLYGON_OFFSET_FILL)}function Ke(I){I?le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ye(I){I===void 0&&(I=n.TEXTURE0+z-1),P!==I&&(n.activeTexture(I),P=I)}function ct(I,ue,J){J===void 0&&(P===null?J=n.TEXTURE0+z-1:J=P);let Se=te[J];Se===void 0&&(Se={type:void 0,texture:void 0},te[J]=Se),(Se.type!==I||Se.texture!==ue)&&(P!==J&&(n.activeTexture(J),P=J),n.bindTexture(I,ue||ae[I]),Se.type=I,Se.texture=ue)}function _e(){const I=te[P];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function M(){try{n.texSubImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function V(){try{n.texSubImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function me(){try{n.texStorage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function re(){try{n.texStorage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function Z(){try{n.texImage2D(...arguments)}catch(I){mt("WebGLState:",I)}}function ee(){try{n.texImage3D(...arguments)}catch(I){mt("WebGLState:",I)}}function xe(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function we(I,ue){d[I]!==ue&&(n.pixelStorei(I,ue),d[I]=ue)}function ge(I){Ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function ce(I){Le.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Le.copy(I))}function ve(I,ue){let J=u.get(ue);J===void 0&&(J=new WeakMap,u.set(ue,J));let Se=J.get(I);Se===void 0&&(Se=n.getUniformBlockIndex(ue,I.name),J.set(I,Se))}function We(I,ue){const Se=u.get(ue).get(I);l.get(ue)!==Se&&(n.uniformBlockBinding(ue,Se,I.__bindingPointIndex),l.set(ue,Se))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},P=null,te={},f={},h=new WeakMap,_=[],v=null,m=!1,p=null,g=null,x=null,S=null,w=null,T=null,E=null,y=new wt(0,0,0),C=0,R=!1,D=null,L=null,G=null,j=null,N=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:ze,drawBuffers:De,useProgram:nt,setBlending:et,setMaterial:Ve,setFlipSided:Y,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:F,setScissorTest:Ke,activeTexture:Ye,bindTexture:ct,unbindTexture:_e,compressedTexImage2D:Je,compressedTexImage3D:b,texImage2D:Z,texImage3D:ee,pixelStorei:we,getParameter:xe,updateUBOMapping:ve,uniformBlockBinding:We,texStorage2D:me,texStorage3D:re,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ge,viewport:ce,reset:qe}}function HD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Et,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return _?new OffscreenCanvas(b,M):wd("canvas")}function m(b,M,V){let Q=1;const ne=Je(b);if((ne.width>V||ne.height>V)&&(Q=V/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const me=Math.floor(Q*ne.width),re=Math.floor(Q*ne.height);f===void 0&&(f=v(me,re));const Z=M?v(me,re):f;return Z.width=me,Z.height=re,Z.getContext("2d").drawImage(b,0,0,me,re),je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+re+")."),Z}else return"data"in b&&je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function p(b){return b.generateMipmaps}function g(b){n.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,M,V,Q,ne,me=!1){if(b!==null){if(n[b]!==void 0)return n[b];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re;Q&&(re=e.get("EXT_texture_norm16"),re||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8),V===n.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),V===n.SHORT&&re&&(Z=re.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),M===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8),V===n.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),V===n.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),V===n.UNSIGNED_INT&&(Z=n.RGB32UI),V===n.BYTE&&(Z=n.RGB8I),V===n.SHORT&&(Z=n.RGB16I),V===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),V===n.UNSIGNED_INT&&(Z=n.RGBA32UI),V===n.BYTE&&(Z=n.RGBA8I),V===n.SHORT&&(Z=n.RGBA16I),V===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),V===n.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const ee=me?Ed:ft.getTransfer(ne);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=ee===St?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),V===n.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(b,M){let V;return b?M===null||M===Gr||M===ec?V=n.DEPTH24_STENCIL8:M===Ir?V=n.DEPTH32F_STENCIL8:M===Ju&&(V=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gr||M===ec?V=n.DEPTH_COMPONENT24:M===Ir?V=n.DEPTH_COMPONENT32F:M===Ju&&(V=n.DEPTH_COMPONENT16),V}function T(b,M){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pn&&b.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function E(b){const M=b.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function y(b){const M=b.target;M.removeEventListener("dispose",y),D(M)}function C(b){const M=i.get(b);if(M.__webglInit===void 0)return;const V=b.source,Q=h.get(V);if(Q){const ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(b),Object.keys(Q).length===0&&h.delete(V)}i.remove(b)}function R(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const V=b.source,Q=h.get(V);delete Q[M.__cacheKey],o.memory.textures--}function D(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=b.textures;for(let Q=0,ne=V.length;Q<ne;Q++){const me=i.get(V[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(b)}let L=0;function G(){L=0}function j(){return L}function N(b){L=b}function z(){const b=L;return b>=r.maxTextures&&je("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function U(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function O(b,M){const V=i.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&V.__version!==b.version){const Q=b.image;if(Q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{be(V,b,M);return}}else b.isExternalTexture&&(V.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function X(b,M){const V=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){be(V,b,M);return}else b.isExternalTexture&&(V.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function P(b,M){const V=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){be(V,b,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function te(b,M){const V=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&V.__version!==b.version){ze(V,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const pe={[Gm]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[Wm]:n.MIRRORED_REPEAT},He={[Pn]:n.NEAREST,[cb]:n.NEAREST_MIPMAP_NEAREST,[Vc]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Bh]:n.LINEAR_MIPMAP_NEAREST,[Io]:n.LINEAR_MIPMAP_LINEAR},Ue={[hb]:n.NEVER,[vb]:n.ALWAYS,[pb]:n.LESS,[Q_]:n.LEQUAL,[mb]:n.EQUAL,[J_]:n.GEQUAL,[gb]:n.GREATER,[_b]:n.NOTEQUAL};function Le(b,M){if(M.type===Ir&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===Bh||M.magFilter===Vc||M.magFilter===Io||M.minFilter===Xn||M.minFilter===Bh||M.minFilter===Vc||M.minFilter===Io)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pe[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pe[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pe[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,He[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,He[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==Vc&&M.minFilter!==Io||M.type===Ir&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(b,M){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",E));const Q=M.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const me=U(M);if(me!==b.__cacheKey){ne[me]===void 0&&(ne[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[me].usedTimes++;const re=ne[b.__cacheKey];re!==void 0&&(ne[b.__cacheKey].usedTimes--,re.usedTimes===0&&R(M)),b.__cacheKey=me,b.__webglTexture=ne[me].texture}return V}function ae(b,M,V){return Math.floor(Math.floor(b/V)/M)}function le(b,M,V,Q){const me=b.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,Q,M.data);else{me.sort((we,ge)=>we.start-ge.start);let re=0;for(let we=1;we<me.length;we++){const ge=me[re],ce=me[we],ve=ge.start+ge.count,We=ae(ce.start,M.width,4),qe=ae(ge.start,M.width,4);ce.start<=ve+1&&We===qe&&ae(ce.start+ce.count-1,M.width,4)===We?ge.count=Math.max(ge.count,ce.start+ce.count-ge.start):(++re,me[re]=ce)}me.length=re+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let we=0,ge=me.length;we<ge;we++){const ce=me[we],ve=Math.floor(ce.start/4),We=Math.ceil(ce.count/4),qe=ve%M.width,I=Math.floor(ve/M.width),ue=We,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,qe,I,ue,J,V,Q,M.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function be(b,M,V){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=K(b,M),me=M.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+V);const re=i.get(me);if(me.version!==re.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=ft.getPrimaries(ft.workingColorSpace),Se=M.colorSpace===Os?null:ft.getPrimaries(M.colorSpace),de=M.colorSpace===Os||J===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=m(M.image,!1,r.maxTextureSize);ee=_e(M,ee);const xe=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let ge=S(M.internalFormat,xe,we,M.normalized,M.colorSpace,M.isVideoTexture);Le(Q,M);let ce;const ve=M.mipmaps,We=M.isVideoTexture!==!0,qe=re.__version===void 0||ne===!0,I=me.dataReady,ue=T(M,ee);if(M.isDepthTexture)ge=w(M.format===Uo,M.type),qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,xe,we,null));else if(M.isDataTexture)if(ve.length>0){We&&qe&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)ce=ve[J],We?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,we,ce.data):t.texImage2D(n.TEXTURE_2D,J,ge,ce.width,ce.height,0,xe,we,ce.data);M.generateMipmaps=!1}else We?(qe&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ee.width,ee.height),I&&le(M,ee,xe,we)):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,xe,we,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ge,ve[0].width,ve[0].height,ee.depth);for(let J=0,Se=ve.length;J<Se;J++)if(ce=ve[J],M.format!==_r)if(xe!==null)if(We){if(I)if(M.layerUpdates.size>0){const de=bx(ce.width,ce.height,M.format,M.type);for(const ie of M.layerUpdates){const oe=ce.data.subarray(ie*de/ce.data.BYTES_PER_ELEMENT,(ie+1)*de/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,ce.width,ce.height,1,xe,oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,xe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ge,ce.width,ce.height,ee.depth,0,ce.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,xe,we,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ge,ce.width,ce.height,ee.depth,0,xe,we,ce.data)}else{We&&qe&&t.texStorage2D(n.TEXTURE_2D,ue,ge,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)ce=ve[J],M.format!==_r?xe!==null?We?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ge,ce.width,ce.height,0,ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,we,ce.data):t.texImage2D(n.TEXTURE_2D,J,ge,ce.width,ce.height,0,xe,we,ce.data)}else if(M.isDataArrayTexture)if(We){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ge,ee.width,ee.height,ee.depth),I)if(M.layerUpdates.size>0){const J=bx(ee.width,ee.height,M.format,M.type);for(const Se of M.layerUpdates){const de=ee.data.subarray(Se*J/ee.data.BYTES_PER_ELEMENT,(Se+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,ee.width,ee.height,1,xe,we,de)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,xe,we,ee.data);else if(M.isData3DTexture)We?(qe&&t.texStorage3D(n.TEXTURE_3D,ue,ge,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,xe,we,ee.data);else if(M.isFramebufferTexture){if(qe)if(We)t.texStorage2D(n.TEXTURE_2D,ue,ge,ee.width,ee.height);else{let J=ee.width,Se=ee.height;for(let de=0;de<ue;de++)t.texImage2D(n.TEXTURE_2D,de,ge,J,Se,0,xe,we,null),J>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(M),J.onpaint=he=>{const ke=he.changedElements;for(const se of d)ke.includes(se.image)&&(se.needsUpdate=!0)},J.requestPaint();return}const Se=0,de=n.RGBA,ie=n.RGBA,oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Se,de,ie,oe,ee),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(We&&qe){const J=Je(ve[0]);t.texStorage2D(n.TEXTURE_2D,ue,ge,J.width,J.height)}for(let J=0,Se=ve.length;J<Se;J++)ce=ve[J],We?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe,we,ce):t.texImage2D(n.TEXTURE_2D,J,ge,xe,we,ce);M.generateMipmaps=!1}else if(We){if(qe){const J=Je(ee);t.texStorage2D(n.TEXTURE_2D,ue,ge,J.width,J.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,ge,xe,we,ee);p(M)&&g(Q),re.__version=me.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ze(b,M,V){if(M.image.length!==6)return;const Q=K(b,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+V);const me=i.get(ne);if(ne.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+V);const re=ft.getPrimaries(ft.workingColorSpace),Z=M.colorSpace===Os?null:ft.getPrimaries(M.colorSpace),ee=M.colorSpace===Os||re===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!xe&&!we?ge[ie]=m(M.image[ie],!0,r.maxCubemapSize):ge[ie]=we?M.image[ie].image:M.image[ie],ge[ie]=_e(M,ge[ie]);const ce=ge[0],ve=s.convert(M.format,M.colorSpace),We=s.convert(M.type),qe=S(M.internalFormat,ve,We,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,ue=me.__version===void 0||Q===!0,J=ne.dataReady;let Se=T(M,ce);Le(n.TEXTURE_CUBE_MAP,M);let de;if(xe){I&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,qe,ce.width,ce.height);for(let ie=0;ie<6;ie++){de=ge[ie].mipmaps;for(let oe=0;oe<de.length;oe++){const he=de[oe];M.format!==_r?ve!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,he.width,he.height,ve,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,qe,he.width,he.height,0,he.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,he.width,he.height,ve,We,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,qe,he.width,he.height,0,ve,We,he.data)}}}else{if(de=M.mipmaps,I&&ue){de.length>0&&Se++;const ie=Je(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(we){I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,ve,We,ge[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,ge[ie].width,ge[ie].height,0,ve,We,ge[ie].data);for(let oe=0;oe<de.length;oe++){const ke=de[oe].image[ie].image;I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,ke.width,ke.height,ve,We,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,qe,ke.width,ke.height,0,ve,We,ke.data)}}else{I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve,We,ge[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,ve,We,ge[ie]);for(let oe=0;oe<de.length;oe++){const he=de[oe];I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,ve,We,he.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,qe,ve,We,he.image[ie])}}}p(M)&&g(n.TEXTURE_CUBE_MAP),me.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function De(b,M,V,Q,ne,me){const re=s.convert(V.format,V.colorSpace),Z=s.convert(V.type),ee=S(V.internalFormat,re,Z,V.normalized,V.colorSpace),xe=i.get(M),we=i.get(V);if(we.__renderTarget=M,!xe.__hasExternalTextures){const ge=Math.max(1,M.width>>me),ce=Math.max(1,M.height>>me);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,ee,ge,ce,M.depth,0,re,Z,null):t.texImage2D(ne,me,ee,ge,ce,0,re,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,we.__webglTexture,0,Ke(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,we.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(b,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,me=w(M.stencilBuffer,ne),re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(M),me,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(M),me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,b)}else{const Q=M.textures;for(let ne=0;ne<Q.length;ne++){const me=Q[ne],re=s.convert(me.format,me.colorSpace),Z=s.convert(me.type),ee=S(me.internalFormat,re,Z,me.normalized,me.colorSpace);Ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(M),ee,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(b,M,V){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Le(n.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),we=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===xs?ge=n.DEPTH_COMPONENT24:M.depthTexture.format===Uo&&(ge=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ge,M.width,M.height,0,xe,we,null)}}else O(M.depthTexture,0);const me=ne.__webglTexture,re=Ke(M),Z=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ee=M.depthTexture.format===Uo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===xs)Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else if(M.depthTexture.format===Uo)Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else throw new Error("Unknown depthTexture format")}function Ge(b){const M=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let Q=0;Q<6;Q++)Ae(M.__webglFramebuffer[Q],b,Q);else{const Q=b.texture.mipmaps;Q&&Q.length>0?Ae(M.__webglFramebuffer[0],b,0):Ae(M.__webglFramebuffer,b,0)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),nt(M.__webglDepthbuffer[Q],b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}else{const Q=b.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),nt(M.__webglDepthbuffer,b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(b,M,V){const Q=i.get(b);M!==void 0&&De(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ge(b)}function Ve(b){const M=b.texture,V=i.get(b),Q=i.get(M);b.addEventListener("dispose",y);const ne=b.textures,me=b.isWebGLCubeRenderTarget===!0,re=ne.length>1;if(re||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),me){V.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[Z]=[];for(let ee=0;ee<M.mipmaps.length;ee++)V.__webglFramebuffer[Z][ee]=n.createFramebuffer()}else V.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)V.__webglFramebuffer[Z]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(re)for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=i.get(ne[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Ye(b)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Z=0;Z<ne.length;Z++){const ee=ne[Z];V.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Z]);const xe=s.convert(ee.format,ee.colorSpace),we=s.convert(ee.type),ge=S(ee.internalFormat,xe,we,ee.normalized,ee.colorSpace,b.isXRRenderTarget===!0),ce=Ke(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,V.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)De(V.__webglFramebuffer[Z][ee],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else De(V.__webglFramebuffer[Z],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=ne[Z],we=i.get(xe);let ge=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,we.__webglTexture),Le(ge,xe),De(V.__webglFramebuffer,b,xe,n.COLOR_ATTACHMENT0+Z,ge,0),p(xe)&&g(ge)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Z=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,Q.__webglTexture),Le(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)De(V.__webglFramebuffer[ee],b,M,n.COLOR_ATTACHMENT0,Z,ee);else De(V.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,Z,0);p(M)&&g(Z),t.unbindTexture()}b.depthBuffer&&Ge(b)}function Y(b){const M=b.textures;for(let V=0,Q=M.length;V<Q;V++){const ne=M[V];if(p(ne)){const me=x(b),re=i.get(ne).__webglTexture;t.bindTexture(me,re),g(me),t.unbindTexture()}}}const lt=[],Vt=[];function F(b){if(b.samples>0){if(Ye(b)===!1){const M=b.textures,V=b.width,Q=b.height;let ne=n.COLOR_BUFFER_BIT;const me=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(b),Z=M.length>1;if(Z)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ee=b.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,ne,n.NEAREST),l===!0&&(lt.length=0,Vt.length=0,lt.push(n.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(me),Vt.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ke(b){return Math.min(r.maxSamples,b.samples)}function Ye(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(b){const M=o.render.frame;c.get(b)!==M&&(c.set(b,M),b.update())}function _e(b,M){const V=b.colorSpace,Q=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==Md&&V!==Os&&(ft.getTransfer(V)===St?(Q!==_r||ne!==Qi)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),M}function Je(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.getTextureUnits=j,this.setTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=P,this.setTextureCube=te,this.rebindTextures=et,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GD(n,e){function t(i,r=Os){let s;const o=ft.getTransfer(r);if(i===Qi)return n.UNSIGNED_BYTE;if(i===Y_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===q_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===XM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===GM)return n.BYTE;if(i===WM)return n.SHORT;if(i===Ju)return n.UNSIGNED_SHORT;if(i===j_)return n.INT;if(i===Gr)return n.UNSIGNED_INT;if(i===Ir)return n.FLOAT;if(i===vs)return n.HALF_FLOAT;if(i===YM)return n.ALPHA;if(i===qM)return n.RGB;if(i===_r)return n.RGBA;if(i===xs)return n.DEPTH_COMPONENT;if(i===Uo)return n.DEPTH_STENCIL;if(i===$M)return n.RED;if(i===$_)return n.RED_INTEGER;if(i===ea)return n.RG;if(i===K_)return n.RG_INTEGER;if(i===Z_)return n.RGBA_INTEGER;if(i===If||i===Uf||i===Ff||i===Of)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===If)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ff)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Of)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===If)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ff)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Of)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xm||i===jm||i===Ym||i===qm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ym)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$m||i===Km||i===Zm||i===Qm||i===Jm||i===yd||i===eg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$m||i===Km)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zm)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qm)return s.COMPRESSED_R11_EAC;if(i===Jm)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yd)return s.COMPRESSED_RG11_EAC;if(i===eg)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg||i===ug||i===cg||i===fg||i===dg||i===hg||i===pg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ng)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ig)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===og)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ag)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ug)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mg||i===gg||i===_g)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mg)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_g)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vg||i===xg||i===Sd||i===yg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vg)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ec?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XD=`
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

}`;class jD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sr({vertexShader:WD,fragmentShader:XD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YD extends sa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",m=new jD,p={},g=t.getContextAttributes();let x=null,S=null;const w=[],T=[],E=new Et;let y=null;const C=new mr;C.viewport=new nn;const R=new mr;R.viewport=new nn;const D=[C,R],L=new iR;let G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=w[K];return ae===void 0&&(ae=new Yh,w[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=w[K];return ae===void 0&&(ae=new Yh,w[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=w[K];return ae===void 0&&(ae=new Yh,w[K]=ae),ae.getHandSpace()};function N(K){const ae=T.indexOf(K.inputSource);if(ae===-1)return;const le=w[ae];le!==void 0&&(le.update(K.inputSource,K.frame,u||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let K=0;K<w.length;K++){const ae=T[K];ae!==null&&(T[K]=null,w[K].disconnect(ae))}G=null,j=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(x),h=null,f=null,d=null,r=null,S=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,be=null,ze=null;g.depth&&(ze=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Uo:xs,be=g.stencil?ec:Gr);const De={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zr(f.textureWidth,f.textureHeight,{format:_r,type:Qi,depthTexture:new Sl(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new zr(h.framebufferWidth,h.framebufferHeight,{format:_r,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(K){for(let ae=0;ae<K.removed.length;ae++){const le=K.removed[ae],be=T.indexOf(le);be>=0&&(T[be]=null,w[be].disconnect(le))}for(let ae=0;ae<K.added.length;ae++){const le=K.added[ae];let be=T.indexOf(le);if(be===-1){for(let De=0;De<w.length;De++)if(De>=T.length){T.push(le),be=De;break}else if(T[De]===null){T[De]=le,be=De;break}if(be===-1)break}const ze=w[be];ze&&ze.connect(le)}}const O=new $,X=new $;function P(K,ae,le){O.setFromMatrixPosition(ae.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const be=O.distanceTo(X),ze=ae.projectionMatrix.elements,De=le.projectionMatrix.elements,nt=ze[14]/(ze[10]-1),Ae=ze[14]/(ze[10]+1),Ge=(ze[9]+1)/ze[5],et=(ze[9]-1)/ze[5],Ve=(ze[8]-1)/ze[0],Y=(De[8]+1)/De[0],lt=nt*Ve,Vt=nt*Y,F=be/(-Ve+Y),Ke=F*-Ve;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(F),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ze[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ye=nt+F,ct=Ae+F,_e=lt-Ke,Je=Vt+(be-Ke),b=Ge*Ae/ct*Ye,M=et*Ae/ct*Ye;K.projectionMatrix.makePerspective(_e,Je,b,M,Ye,ct),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,le=K.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(le=m.depthFar)),L.near=R.near=C.near=ae,L.far=R.far=C.far=le,(G!==L.near||j!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,j=L.far),L.layers.mask=K.layers.mask|6,C.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const be=K.parent,ze=L.cameras;te(L,be);for(let De=0;De<ze.length;De++)te(ze[De],be);ze.length===2?P(L,C,R):L.projectionMatrix.copy(C.projectionMatrix),pe(K,L,be)};function pe(K,ae,le){le===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mg*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let He=null;function Ue(K,ae){if(c=ae.getViewerPose(u||o),_=ae,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let be=!1;le.length!==L.cameras.length&&(L.cameras.length=0,be=!0);for(let Ae=0;Ae<le.length;Ae++){const Ge=le[Ae];let et=null;if(h!==null)et=h.getViewport(Ge);else{const Y=d.getViewSubImage(f,Ge);et=Y.viewport,Ae===0&&(e.setRenderTargetTextures(S,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(S))}let Ve=D[Ae];Ve===void 0&&(Ve=new mr,Ve.layers.enable(Ae),Ve.viewport=new nn,D[Ae]=Ve),Ve.matrix.fromArray(Ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),be===!0&&L.cameras.push(Ve)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ae=d.getDepthInformation(le[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,r.renderState)}if(ze&&ze.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ae=0;Ae<le.length;Ae++){const Ge=le[Ae].camera;if(Ge){let et=p[Ge];et||(et=new sE,p[Ge]=et);const Ve=d.getCameraImage(Ge);et.sourceTexture=Ve}}}}for(let le=0;le<w.length;le++){const be=T[le],ze=w[le];be!==null&&ze!==void 0&&ze.update(be,ae,u||o)}He&&He(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Le=new lE;Le.setAnimationLoop(Ue),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const qD=new gn,mE=new $e;mE.set(-1,0,0,0,1,0,0,0,1);function $D(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,oE(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,g,x,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,g,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=e.get(p),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(qD.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mE),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function u(g,x){let S=r[g.id];S===void 0&&(_(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function c(g){const x=d();g.__bindingPointIndex=x;const S=n.createBuffer(),w=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],S=g.uniforms,w=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=S.length;T<E;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,R=y.length;C<R;C++){const D=y[C];if(h(D,T,C,w)===!0){const L=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let N=0;N<G.length;N++){const z=G[N],U=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,L+j,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):ArrayBuffer.isView(z)?D.__data.set(new z.constructor(z.buffer,z.byteOffset,D.__data.length)):(z.toArray(D.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,x,S,w){const T=g.value,E=x+"_"+S;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:ArrayBuffer.isView(T)?w[E]=T.slice():w[E]=T.clone(),!0;{const y=w[E];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return w[E]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(y.equals(T)===!1)return y.copy(T),!0}}return!1}function _(g){const x=g.uniforms;let S=0;const w=16;for(let E=0,y=x.length;E<y;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let R=0,D=C.length;R<D;R++){const L=C[R],G=Array.isArray(L.value)?L.value:[L.value];for(let j=0,N=G.length;j<N;j++){const z=G[j],U=v(z),O=S%w,X=O%U.boundary,P=O+X;S+=X,P!==0&&w-P<U.storage&&(S+=w-P),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=U.storage}}}const T=S%w;return T>0&&(S+=w-T),g.__size=S,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(x.boundary=16,x.storage=g.byteLength):je("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}const ZD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wr=null;function QD(){return wr===null&&(wr=new Wb(ZD,16,16,ea,vs),wr.name="DFG_LUT",wr.minFilter=Xn,wr.magFilter=Xn,wr.wrapS=os,wr.wrapT=os,wr.generateMipmaps=!1,wr.needsUpdate=!0),wr}class JD{constructor(e={}){const{canvas:t=yb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Qi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=h,m=new Set([Z_,K_,$_]),p=new Set([Qi,Gr,Ju,ec,Y_,q_]),g=new Uint32Array(4),x=new Int32Array(4),S=new $;let w=null,T=null;const E=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,L=null;this._outputColorSpace=Yi;let G=0,j=0,N=null,z=-1,U=null;const O=new nn,X=new nn;let P=null;const te=new wt(0);let pe=0,He=t.width,Ue=t.height,Le=1,K=null,ae=null;const le=new nn(0,0,He,Ue),be=new nn(0,0,He,Ue);let ze=!1;const De=new iE;let nt=!1,Ae=!1;const Ge=new gn,et=new $,Ve=new nn,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Vt(){return N===null?Le:1}let F=i;function Ke(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${X_}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",he,!1),F===null){const k="webgl2";if(F=Ke(k,A),F===null)throw Ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw mt("WebGLRenderer: "+A.message),A}let Ye,ct,_e,Je,b,M,V,Q,ne,me,re,Z,ee,xe,we,ge,ce,ve,We,qe,I,ue,J;function Se(){Ye=new QP(F),Ye.init(),I=new GD(F,Ye),ct=new WP(F,Ye,e,I),_e=new VD(F,Ye),ct.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Je=new t3(F),b=new CD,M=new HD(F,Ye,_e,b,ct,I,Je),V=new ZP(R),Q=new sR(F),ue=new HP(F,Q),ne=new JP(F,Q,Je,ue),me=new i3(F,ne,Q,ue,Je),ve=new n3(F,ct,M),we=new XP(b),re=new AD(R,V,Ye,ct,ue,we),Z=new $D(R,b),ee=new RD,xe=new UD(Ye),ce=new VP(R,V,_e,me,_,l),ge=new zD(R,me,ct),J=new KD(F,Je,ct,_e),We=new GP(F,Ye,Je),qe=new e3(F,Ye,Je),Je.programs=re.programs,R.capabilities=ct,R.extensions=Ye,R.properties=b,R.renderLists=ee,R.shadowMap=ge,R.state=_e,R.info=Je}Se(),v!==Qi&&(C=new s3(v,t.width,t.height,r,s));const de=new YD(R,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(A){A!==void 0&&(Le=A,this.setSize(He,Ue,!1))},this.getSize=function(A){return A.set(He,Ue)},this.setSize=function(A,k,q=!0){if(de.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,Ue=k,t.width=Math.floor(A*Le),t.height=Math.floor(k*Le),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(He*Le,Ue*Le).floor()},this.setDrawingBufferSize=function(A,k,q){He=A,Ue=k,Le=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(v===Qi){mt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){je("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,k,q,H){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,k,q,H),_e.viewport(O.copy(le).multiplyScalar(Le).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,k,q,H){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,k,q,H),_e.scissor(X.copy(be).multiplyScalar(Le).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){_e.setScissorTest(ze=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,q=!0){let H=0;if(A){let W=!1;if(N!==null){const ye=N.texture.format;W=m.has(ye)}if(W){const ye=N.texture.type,Me=p.has(ye),Te=ce.getClearColor(),Ie=ce.getClearAlpha(),Fe=Te.r,Ze=Te.g,it=Te.b;Me?(g[0]=Fe,g[1]=Ze,g[2]=it,g[3]=Ie,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Fe,x[1]=Ze,x[2]=it,x[3]=Ie,F.clearBufferiv(F.COLOR,0,x))}else H|=F.COLOR_BUFFER_BIT}k&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),ee.dispose(),xe.dispose(),b.dispose(),V.dispose(),me.dispose(),ue.dispose(),J.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",st),de.removeEventListener("sessionend",Ot),kt.stop()};function ie(A){A.preventDefault(),ux("WebGLRenderer: Context Lost."),D=!0}function oe(){ux("WebGLRenderer: Context Restored."),D=!1;const A=Je.autoReset,k=ge.enabled,q=ge.autoUpdate,H=ge.needsUpdate,W=ge.type;Se(),Je.autoReset=A,ge.enabled=k,ge.autoUpdate=q,ge.needsUpdate=H,ge.type=W}function he(A){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const k=A.target;k.removeEventListener("dispose",ke),se(k)}function se(A){Be(A),b.remove(A)}function Be(A){const k=b.get(A).programs;k!==void 0&&(k.forEach(function(q){re.releaseProgram(q)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,H,W,ye){k===null&&(k=Y);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Te=yn(A,k,q,H,W);_e.setMaterial(H,Me);let Ie=q.index,Fe=1;if(H.wireframe===!0){if(Ie=ne.getWireframeAttribute(q),Ie===void 0)return;Fe=2}const Ze=q.drawRange,it=q.attributes.position;let Oe=Ze.start*Fe,Tt=(Ze.start+Ze.count)*Fe;ye!==null&&(Oe=Math.max(Oe,ye.start*Fe),Tt=Math.min(Tt,(ye.start+ye.count)*Fe)),Ie!==null?(Oe=Math.max(Oe,0),Tt=Math.min(Tt,Ie.count)):it!=null&&(Oe=Math.max(Oe,0),Tt=Math.min(Tt,it.count));const Qt=Tt-Oe;if(Qt<0||Qt===1/0)return;ue.setup(W,H,Te,q,Ie);let qt,Ct=We;if(Ie!==null&&(qt=Q.get(Ie),Ct=qe,Ct.setIndex(qt)),W.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Vt()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(W.isLine){let Un=H.linewidth;Un===void 0&&(Un=1),_e.setLineWidth(Un*Vt()),W.isLineSegments?Ct.setMode(F.LINES):W.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else W.isPoints?Ct.setMode(F.POINTS):W.isSprite&&Ct.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Un=W._multiDrawStarts,Ce=W._multiDrawCounts,Si=W._multiDrawCount,pt=Ie?Q.get(Ie).bytesPerElement:1,Wi=b.get(H).currentProgram.getUniforms();for(let Mr=0;Mr<Si;Mr++)Wi.setValue(F,"_gl_DrawID",Mr),Ct.render(Un[Mr]/pt,Ce[Mr])}else if(W.isInstancedMesh)Ct.renderInstances(Oe,Qt,W.count);else if(q.isInstancedBufferGeometry){const Un=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,Un);Ct.renderInstances(Oe,Qt,Ce)}else Ct.render(Oe,Qt)};function Ne(A,k,q){A.transparent===!0&&A.side===ns&&A.forceSinglePass===!1?(A.side=vi,A.needsUpdate=!0,xn(A,k,q),A.side=uo,A.needsUpdate=!0,xn(A,k,q),A.side=ns):xn(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),T=xe.get(q),T.init(k),y.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const H=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){const Te=ye[Me];Ne(Te,q,W),H.add(Te)}else Ne(ye,q,W),H.add(ye)}),T=y.pop(),H},this.compileAsync=function(A,k,q=null){const H=this.compile(A,k,q);return new Promise(W=>{function ye(){if(H.forEach(function(Me){b.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){W(A);return}setTimeout(ye,10)}Ye.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Xe=null;function sn(A){Xe&&Xe(A)}function st(){kt.stop()}function Ot(){kt.start()}const kt=new lE;kt.setAnimationLoop(sn),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(A){Xe=A,de.setAnimationLoop(A),A===null?kt.stop():kt.start()},de.addEventListener("sessionstart",st),de.addEventListener("sessionend",Ot),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(A,k);const q=de.enabled===!0&&de.isPresenting===!0,H=C!==null&&(N===null||q)&&C.begin(R,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,k,N),T=xe.get(A,y.length),T.init(k),T.state.textureUnits=M.getTextureUnits(),y.push(T),Ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),De.setFromProjectionMatrix(Ge,Ur,k.reversedDepth),Ae=this.localClippingEnabled,nt=we.init(this.clippingPlanes,Ae),w=ee.get(A,E.length),w.init(),E.push(w),de.enabled===!0&&de.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Dt(Me,k,-1/0,R.sortObjects)}Dt(A,k,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(K,ae),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&ce.addToRenderList(w,A),this.info.render.frame++,nt===!0&&we.beginShadows();const W=T.state.shadowsArray;if(ge.render(W,A,k),nt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&C.hasRenderPass())===!1){const Me=w.opaque,Te=w.transmissive;if(T.setupLights(),k.isArrayCamera){const Ie=k.cameras;if(Te.length>0)for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){const it=Ie[Fe];_t(Me,Te,A,it)}lt&&ce.render(A);for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){const it=Ie[Fe];At(w,A,it,it.viewport)}}else Te.length>0&&_t(Me,Te,A,k),lt&&ce.render(A),At(w,A,k)}N!==null&&j===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),H&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,k),ue.resetDefaultState(),z=-1,U=null,y.pop(),y.length>0?(T=y[y.length-1],M.setTextureUnits(T.state.textureUnits),nt===!0&&we.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,L!==null&&L.renderEnd()};function Dt(A,k,q,H){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||De.intersectsSprite(A)){H&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);const Me=me.update(A),Te=A.material;Te.visible&&w.push(A,Me,Te,q,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||De.intersectsObject(A))){const Me=me.update(A),Te=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ve.copy(Me.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(Te)){const Ie=Me.groups;for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){const it=Ie[Fe],Oe=Te[it.materialIndex];Oe&&Oe.visible&&w.push(A,Me,Oe,q,Ve.z,it)}}else Te.visible&&w.push(A,Me,Te,q,Ve.z,null)}}const ye=A.children;for(let Me=0,Te=ye.length;Me<Te;Me++)Dt(ye[Me],k,q,H)}function At(A,k,q,H){const{opaque:W,transmissive:ye,transparent:Me}=A;T.setupLightsView(q),nt===!0&&we.setGlobalState(R.clippingPlanes,q),H&&_e.viewport(O.copy(H)),W.length>0&&In(W,k,q),ye.length>0&&In(ye,k,q),Me.length>0&&In(Me,k,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function _t(A,k,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Oe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new zr(1,1,{generateMipmaps:!0,type:Oe?vs:Qi,minFilter:Io,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ye=T.state.transmissionRenderTarget[H.id],Me=H.viewport||O;ye.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const Te=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(te),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),lt&&ce.render(q);const Ze=R.toneMapping;R.toneMapping=Br;const it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),nt===!0&&we.setGlobalState(R.clippingPlanes,H),In(A,q,H),M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Tt=0,Qt=k.length;Tt<Qt;Tt++){const qt=k[Tt],{object:Ct,geometry:Un,material:Ce,group:Si}=qt;if(Ce.side===ns&&Ct.layers.test(H.layers)){const pt=Ce.side;Ce.side=vi,Ce.needsUpdate=!0,Lt(Ct,q,H,Un,Ce,Si),Ce.side=pt,Ce.needsUpdate=!0,Oe=!0}}Oe===!0&&(M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye))}R.setRenderTarget(Te,Ie,Fe),R.setClearColor(te,pe),it!==void 0&&(H.viewport=it),R.toneMapping=Ze}function In(A,k,q){const H=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ye=A.length;W<ye;W++){const Me=A[W],{object:Te,geometry:Ie,group:Fe}=Me;let Ze=Me.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),Te.layers.test(q.layers)&&Lt(Te,k,q,Ie,Ze,Fe)}}function Lt(A,k,q,H,W,ye){A.onBeforeRender(R,k,q,H,W,ye),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,k,q,H,A,ye),W.transparent===!0&&W.side===ns&&W.forceSinglePass===!1?(W.side=vi,W.needsUpdate=!0,R.renderBufferDirect(q,k,H,W,A,ye),W.side=uo,W.needsUpdate=!0,R.renderBufferDirect(q,k,H,W,A,ye),W.side=ns):R.renderBufferDirect(q,k,H,W,A,ye),A.onAfterRender(R,k,q,H,W,ye)}function xn(A,k,q){k.isScene!==!0&&(k=Y);const H=b.get(A),W=T.state.lights,ye=T.state.shadowsArray,Me=W.state.version,Te=re.getParameters(A,W.state,ye,k,q,T.state.lightProbeGridArray),Ie=re.getProgramCacheKey(Te);let Fe=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=V.get(A.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",ke),Fe=new Map,H.programs=Fe);let it=Fe.get(Ie);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===Me)return on(A,Te),it}else Te.uniforms=re.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,q,Te),A.onBeforeCompile(Te,R),it=re.acquireProgram(Te,Ie),Fe.set(Ie,it),H.uniforms=Te.uniforms;const Oe=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=we.uniform),on(A,Te),H.needsLights=oa(A),H.lightsStateVersion=Me,H.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=it,H.uniformsList=null,it}function yi(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=kf.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function on(A,k){const q=b.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function fn(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let q=0,H=A.length;q<H;q++){const W=A[q];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function yn(A,k,q,H,W){k.isScene!==!0&&(k=Y),M.resetTextureUnits();const ye=k.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,Te=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ft.workingColorSpace,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=V.get(H.envMap||Me,Ie),Ze=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!q.morphAttributes.position,Tt=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color;let qt=Br;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qt=R.toneMapping);const Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Un=Ct!==void 0?Ct.length:0,Ce=b.get(H),Si=T.state.lights;if(nt===!0&&(Ae===!0||A!==U)){const Nt=A===U&&H.id===z;we.setState(H,A,Nt)}let pt=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Si.state.version||Ce.outputColorSpace!==Te||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Fe||H.fog===!0&&Ce.fog!==ye||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==we.numPlanes||Ce.numIntersection!==we.numIntersection)||Ce.vertexAlphas!==Ze||Ce.vertexTangents!==it||Ce.morphTargets!==Oe||Ce.morphNormals!==Tt||Ce.morphColors!==Qt||Ce.toneMapping!==qt||Ce.morphTargetsCount!==Un||!!Ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ce.__version=H.version);let Wi=Ce.currentProgram;pt===!0&&(Wi=xn(H,k,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Wi,Ce));let Mr=!1,Ms=!1,aa=!1;const bt=Wi.getUniforms(),Jt=Ce.uniforms;if(_e.useProgram(Wi.program)&&(Mr=!0,Ms=!0,aa=!0),H.id!==z&&(z=H.id,Ms=!0),Ce.needsLights){const Nt=fn(T.state.lightProbeGridArray,W);Ce.lightProbeGrid!==Nt&&(Ce.lightProbeGrid=Nt,Ms=!0)}if(Mr||U!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(F,"projectionMatrix",A.projectionMatrix),bt.setValue(F,"viewMatrix",A.matrixWorldInverse);const Ts=bt.map.cameraPosition;Ts!==void 0&&Ts.setValue(F,et.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Ms=!0,aa=!0)}if(Ce.needsLights&&(Si.state.directionalShadowMap.length>0&&bt.setValue(F,"directionalShadowMap",Si.state.directionalShadowMap,M),Si.state.spotShadowMap.length>0&&bt.setValue(F,"spotShadowMap",Si.state.spotShadowMap,M),Si.state.pointShadowMap.length>0&&bt.setValue(F,"pointShadowMap",Si.state.pointShadowMap,M)),W.isSkinnedMesh){bt.setOptional(F,W,"bindMatrix"),bt.setOptional(F,W,"bindMatrixInverse");const Nt=W.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(F,"boneTexture",Nt.boneTexture,M))}W.isBatchedMesh&&(bt.setOptional(F,W,"batchingTexture"),bt.setValue(F,"batchingTexture",W._matricesTexture,M),bt.setOptional(F,W,"batchingIdTexture"),bt.setValue(F,"batchingIdTexture",W._indirectTexture,M),bt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(F,"batchingColorTexture",W._colorsTexture,M));const Es=q.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&ve.update(W,q,Wi),(Ms||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,bt.setValue(F,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=QD()),Ms){if(bt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Xr(Jt,aa),ye&&H.fog===!0&&Z.refreshFogUniforms(Jt,ye),Z.refreshMaterialUniforms(Jt,H,Le,Ue,T.state.transmissionRenderTarget[A.id]),Ce.needsLights&&Ce.lightProbeGrid){const Nt=Ce.lightProbeGrid;Jt.probesSH.value=Nt.texture,Jt.probesMin.value.copy(Nt.boundingBox.min),Jt.probesMax.value.copy(Nt.boundingBox.max),Jt.probesResolution.value.copy(Nt.resolution)}kf.upload(F,yi(Ce),Jt,M)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(kf.upload(F,yi(Ce),Jt,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(F,"center",W.center),bt.setValue(F,"modelViewMatrix",W.modelViewMatrix),bt.setValue(F,"normalMatrix",W.normalMatrix),bt.setValue(F,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Nt=H.uniformsGroups;for(let Ts=0,la=Nt.length;Ts<la;Ts++){const l0=Nt[Ts];J.update(l0,Wi),J.bind(l0,Wi)}}return Wi}function Xr(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function oa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,k,q){const H=b.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=k,b.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const q=b.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Sn=F.createFramebuffer();this.setRenderTarget=function(A,k=0,q=0){N=A,G=k,j=q;let H=null,W=!1,ye=!1;if(A){const Te=b.get(A);if(Te.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(F.FRAMEBUFFER,Te.__webglFramebuffer),O.copy(A.viewport),X.copy(A.scissor),P=A.scissorTest,_e.viewport(O),_e.scissor(X),_e.setScissorTest(P),z=-1;return}else if(Te.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Te.__hasExternalTextures)M.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Te.__boundDepthTexture!==Ze){if(Ze!==null&&b.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Fe=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?H=Fe[k][q]:H=Fe[k],W=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?H=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[q]:H=Fe,O.copy(A.viewport),X.copy(A.scissor),P=A.scissorTest}else O.copy(le).multiplyScalar(Le).floor(),X.copy(be).multiplyScalar(Le).floor(),P=ze;if(q!==0&&(H=Sn),_e.bindFramebuffer(F.FRAMEBUFFER,H)&&_e.drawBuffers(A,H),_e.viewport(O),_e.scissor(X),_e.setScissorTest(P),W){const Te=b.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,q)}else if(ye){const Te=k;for(let Ie=0;Ie<A.textures.length;Ie++){const Fe=b.get(A.textures[Ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,q,Te)}}else if(A!==null&&q!==0){const Te=b.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Te.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(A,k,q,H,W,ye,Me,Te=0){if(!(A&&A.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){_e.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const Fe=A.textures[Te],Ze=Fe.format,it=Fe.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),!ct.textureFormatReadable(Ze)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(it)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-H&&q>=0&&q<=A.height-W&&F.readPixels(k,q,H,W,I.convert(Ze),I.convert(it),ye)}finally{const Fe=N!==null?b.get(N).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,H,W,ye,Me,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie)if(k>=0&&k<=A.width-H&&q>=0&&q<=A.height-W){_e.bindFramebuffer(F.FRAMEBUFFER,Ie);const Fe=A.textures[Te],Ze=Fe.format,it=Fe.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),!ct.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(k,q,H,W,I.convert(Ze),I.convert(it),0);const Tt=N!==null?b.get(N).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Tt);const Qt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Sb(F,Qt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(Oe),F.deleteSync(Qt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,q=0){const H=Math.pow(2,-q),W=Math.floor(A.image.width*H),ye=Math.floor(A.image.height*H),Me=k!==null?k.x:0,Te=k!==null?k.y:0;M.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Me,Te,W,ye),_e.unbindTexture()};const Zt=F.createFramebuffer(),Gi=F.createFramebuffer();this.copyTextureToTexture=function(A,k,q=null,H=null,W=0,ye=0){let Me,Te,Ie,Fe,Ze,it,Oe,Tt,Qt;const qt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(q!==null)Me=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Ze=q.min.y,it=q.isBox3?q.min.z:0;else{const Jt=Math.pow(2,-W);Me=Math.floor(qt.width*Jt),Te=Math.floor(qt.height*Jt),A.isDataArrayTexture?Ie=qt.depth:A.isData3DTexture?Ie=Math.floor(qt.depth*Jt):Ie=1,Fe=0,Ze=0,it=0}H!==null?(Oe=H.x,Tt=H.y,Qt=H.z):(Oe=0,Tt=0,Qt=0);const Ct=I.convert(k.format),Un=I.convert(k.type);let Ce;k.isData3DTexture?(M.setTexture3D(k,0),Ce=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(M.setTexture2DArray(k,0),Ce=F.TEXTURE_2D_ARRAY):(M.setTexture2D(k,0),Ce=F.TEXTURE_2D),_e.activeTexture(F.TEXTURE0),_e.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),_e.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_e.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Si=_e.getParameter(F.UNPACK_ROW_LENGTH),pt=_e.getParameter(F.UNPACK_IMAGE_HEIGHT),Wi=_e.getParameter(F.UNPACK_SKIP_PIXELS),Mr=_e.getParameter(F.UNPACK_SKIP_ROWS),Ms=_e.getParameter(F.UNPACK_SKIP_IMAGES);_e.pixelStorei(F.UNPACK_ROW_LENGTH,qt.width),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt.height),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),_e.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,it);const aa=A.isDataArrayTexture||A.isData3DTexture,bt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Jt=b.get(A),Es=b.get(k),Nt=b.get(Jt.__renderTarget),Ts=b.get(Es.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,Nt.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let la=0;la<Ie;la++)aa&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(A).__webglTexture,W,it+la),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(k).__webglTexture,ye,Qt+la)),F.blitFramebuffer(Fe,Ze,Me,Te,Oe,Tt,Me,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||b.has(A)){const Jt=b.get(A),Es=b.get(k);_e.bindFramebuffer(F.READ_FRAMEBUFFER,Zt),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gi);for(let Nt=0;Nt<Ie;Nt++)aa?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,W,it+Nt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,W),bt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Es.__webglTexture,ye,Qt+Nt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Es.__webglTexture,ye),W!==0?F.blitFramebuffer(Fe,Ze,Me,Te,Oe,Tt,Me,Te,F.COLOR_BUFFER_BIT,F.NEAREST):bt?F.copyTexSubImage3D(Ce,ye,Oe,Tt,Qt+Nt,Fe,Ze,Me,Te):F.copyTexSubImage2D(Ce,ye,Oe,Tt,Fe,Ze,Me,Te);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ce,ye,Oe,Tt,Qt,Me,Te,Ie,Ct,Un,qt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,ye,Oe,Tt,Qt,Me,Te,Ie,Ct,qt.data):F.texSubImage3D(Ce,ye,Oe,Tt,Qt,Me,Te,Ie,Ct,Un,qt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,Oe,Tt,Me,Te,Ct,Un,qt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,Oe,Tt,qt.width,qt.height,Ct,qt.data):F.texSubImage2D(F.TEXTURE_2D,ye,Oe,Tt,Me,Te,Ct,Un,qt);_e.pixelStorei(F.UNPACK_ROW_LENGTH,Si),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Wi),_e.pixelStorei(F.UNPACK_SKIP_ROWS,Mr),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,Ms),ye===0&&k.generateMipmaps&&F.generateMipmap(Ce),_e.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){G=0,j=0,N=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const eL=()=>{const n=xt.useRef(null);return xt.useEffect(()=>{const e=n.current;if(!e)return;const t=new Ob,i=new n0(-1,1,1,-1,0,1),r=new JD({antialias:!1,powerPreference:"high-performance",alpha:!0}),s=Math.min(window.devicePixelRatio,1.5);r.setPixelRatio(s),r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement),r.domElement.style.position="absolute",r.domElement.style.inset="0",r.domElement.style.width="100%",r.domElement.style.height="100%";const o=new Sr({uniforms:{iTime:{value:0},iResolution:{value:new Et(e.clientWidth*s,e.clientHeight*s)}},vertexShader:`
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u * u * (3.0 - 2.0 * u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
            u.y
          );
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          // Gentle camera shake
          vec2 shake = vec2(
            sin(iTime * 0.8) * 0.003,
            cos(iTime * 1.2) * 0.003
          );

          vec2 p = (
            (gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5
          ) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);

          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 3.0, 0.0)) * 0.4;

          // 25 strands (reduced from 35 for smoothness)
          for (float i = 0.0; i < 25.0; i++) {
            vec2 v = p
              + cos(i * i + (iTime + p.x * 0.06) * 0.02 + i * vec2(13.0, 11.0)) * 3.5
              + vec2(
                  sin(iTime * 2.0 + i) * 0.002,
                  cos(iTime * 2.5 - i) * 0.002
                );

            float tailNoise = fbm(v + vec2(iTime * 0.3, i)) * 0.25 * (1.0 - (i / 25.0));

            // ── RED / CRIMSON / DARK-ORANGE palette ──
            vec4 auroraColors = vec4(
              0.85 + 0.15 * sin(i * 0.2 + iTime * 0.3),     // R: strong red 0.70–1.0
              0.04 + 0.08 * cos(i * 0.35 + iTime * 0.4),     // G: very low  0.0–0.12
              0.02 + 0.06 * sin(i * 0.45 + iTime * 0.25),    // B: near-zero 0.0–0.08
              1.0
            );

            vec4 contribution = auroraColors
              * exp(sin(i * i + iTime * 0.6))
              / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));

            float thinness = smoothstep(0.0, 1.0, i / 25.0) * 0.6;
            o += contribution * (1.0 + tailNoise * 0.7) * thinness;
          }

          o = tanh(pow(o / 80.0, vec4(1.5)));
          gl_FragColor = o * 1.3;
        }
      `}),a=new cc(2,2),l=new Wr(a,o);t.add(l);let u=performance.now(),c;const d=h=>{c=requestAnimationFrame(d);const _=(h-u)*.001;u=h,o.uniforms.iTime.value+=_,r.render(t,i)};c=requestAnimationFrame(d);const f=()=>{const h=e.clientWidth,_=e.clientHeight;r.setSize(h,_),o.uniforms.iResolution.value.set(h*s,_*s)};return window.addEventListener("resize",f),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",f),e.contains(r.domElement)&&e.removeChild(r.domElement),a.dispose(),o.dispose(),r.dispose()}},[]),B.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full",style:{zIndex:0}})},tL=()=>{const n=xt.useRef(null),e=xt.useRef([]);xt.useEffect(()=>{zi.timeline().fromTo(e.current,{y:50,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:"power4.out",delay:.5})},[]);const t=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return B.jsxs("section",{className:"relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-black",children:[B.jsx(eL,{}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none z-[1]"}),B.jsxs("div",{ref:n,className:"relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center",children:[B.jsx("div",{ref:t,className:"inline-block px-4 py-1.5 rounded-full border border-glassBorder bg-glass mb-8 backdrop-blur-md",children:B.jsx("span",{className:"text-xs md:text-sm font-medium text-secondary uppercase tracking-wider",children:"Premium Apple Service Center in Bangalore"})}),B.jsxs("h1",{ref:t,className:"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]",children:["Revive your ",B.jsx("br",{}),B.jsx("span",{className:"text-gradient",children:"favorite devices."})]}),B.jsx("p",{ref:t,className:"text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]",children:"Experience the highest standard of repair for your iPhone, iPad, and MacBook. We bring your technology back to life with precision and care."}),B.jsxs("div",{ref:t,className:"flex flex-col sm:flex-row items-center gap-4",children:[B.jsxs("button",{className:"bg-[#ED1C24] hover:bg-red-700 text-white px-8 py-4 rounded-full text-base font-bold transition-transform duration-300 hover:scale-105 flex items-center gap-2 group shadow-[0_0_20px_rgba(237,28,36,0.4)]",children:["Fix My Device",B.jsx(NM,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),B.jsx("button",{className:"bg-glass border border-glassBorder text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors duration-300 backdrop-blur-md",children:"View Services"})]})]})]})};zi.registerPlugin(Qe);const nL=()=>{const n=xt.useRef(null),e=xt.useRef(null),[t,i]=xt.useState(!1),r=240,s=xt.useRef([]),o={frame:0};return xt.useEffect(()=>{let a=0;for(let l=1;l<=r;l++){const u=new Image,c=l.toString().padStart(3,"0");u.src=`/3d scroll/ezgif-frame-${c}.jpg`,u.onload=()=>{a++,a===r&&i(!0)},s.current.push(u)}},[]),xt.useEffect(()=>{if(!t)return;const a=n.current,l=a.getContext("2d");a.width=1920,a.height=1080;const u=()=>{if(s.current[o.frame]){l.clearRect(0,0,a.width,a.height);const d=s.current[o.frame],f=a.width/d.width,h=a.height/d.height,_=Math.max(f,h),v=(a.width-d.width*_)/2,m=(a.height-d.height*_)/2+60;l.drawImage(d,0,0,d.width,d.height,v,m,d.width*_,d.height*_)}};return u(),zi.timeline({scrollTrigger:{trigger:e.current,pin:!0,scrub:.5,start:"top top",end:"+=1500"}}).to(o,{frame:r-1,snap:"frame",ease:"none",onUpdate:u}),()=>{Qe.getAll().forEach(d=>d.kill())}},[t]),B.jsxs("section",{ref:e,className:"relative h-screen bg-black w-full overflow-hidden flex items-center justify-center",children:[!t&&B.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-secondary",children:"Loading Cinematic Sequence..."}),B.jsxs("div",{className:"absolute inset-0 z-0 opacity-40",children:[B.jsx("canvas",{ref:n,className:"w-full h-full object-cover"}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"})]}),B.jsxs("div",{className:"relative z-10 text-center px-6 pointer-events-none",children:[B.jsxs("h2",{className:"text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6",children:["Precision in ",B.jsx("br",{}),B.jsx("span",{className:"text-[#ED1C24]",children:"Every Detail."})]}),B.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Our advanced diagnostic tools and premium parts ensure your device is restored to factory standards."})]})]})};zi.registerPlugin(Qe);const iL=[{title:"iPhone Repair",icon:B.jsx(Nm,{className:"w-8 h-8"}),desc:"Screen replacement, battery issues, and logic board repairs."},{title:"MacBook Repair",icon:B.jsx(DC,{className:"w-8 h-8"}),desc:"Keyboard, display, battery, and water damage restoration."},{title:"iPad Repair",icon:B.jsx(OC,{className:"w-8 h-8"}),desc:"Broken glass, touch issues, and charging port fixes."},{title:"iMac Repair",icon:B.jsx(IC,{className:"w-8 h-8"}),desc:"Performance upgrades, SSD installation, and screen fixes."},{title:"Apple Watch",icon:B.jsx(BC,{className:"w-8 h-8"}),desc:"Screen repair and battery replacements for all series."},{title:"Android & Windows",icon:B.jsx(Nm,{className:"w-8 h-8"}),desc:"Premium repair services for top Android and Windows devices."}],rL=()=>{const n=xt.useRef(null),e=xt.useRef([]);xt.useEffect(()=>{zi.fromTo(e.current,{y:100,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 70%"}})},[]);const t=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return B.jsx("section",{id:"services",ref:n,className:"py-32 px-6 bg-black",children:B.jsxs("div",{className:"max-w-7xl mx-auto",children:[B.jsxs("div",{className:"text-center mb-20",children:[B.jsxs("h2",{className:"text-4xl md:text-5xl font-bold tracking-tight mb-6",children:["Mastery in ",B.jsx("span",{className:"text-gradient",children:"Every Device."})]}),B.jsx("p",{className:"text-secondary text-lg max-w-2xl mx-auto",children:"We specialize in precise, fast, and reliable repairs. Using high-quality parts to ensure your device feels brand new."})]}),B.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:iL.map((i,r)=>B.jsxs("div",{ref:t,className:"glass-panel p-8 group hover:border-[#ED1C24]/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer",children:[B.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#ED1C24] mb-6 group-hover:scale-110 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500",children:i.icon}),B.jsx("h3",{className:"text-2xl font-semibold mb-3",children:i.title}),B.jsx("p",{className:"text-secondary leading-relaxed",children:i.desc})]},r))})]})})},ff=[{name:"Apple",logo:B.jsx("svg",{viewBox:"0 0 384 512",className:"h-10 w-auto",fill:"currentColor",children:B.jsx("path",{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.7-119.3-65.2-30.7-61.7-90-62-91.3zM85.3 7H273l15-1.8zM245.9 85.6c14.5-17.6 24.3-42.3 21.6-67.1-21.7 1-47.5 15-62.8 33-13.6 15.8-24.9 41.3-21.6 65.5 24.2 2 48.3-13.8 62.8-31.4z"})}),color:"text-white"},{name:"OnePlus",logo:B.jsxs("div",{className:"flex items-center justify-center border-[3px] border-current rounded-xl w-10 h-10 font-bold text-lg relative",children:[B.jsx("span",{className:"absolute left-2 top-1.5",children:"1"}),B.jsx("span",{className:"absolute right-1 top-0.5 text-sm",children:"+"})]}),color:"text-[#F5010C]"},{name:"Vivo",logo:B.jsx("span",{className:"font-sans font-bold text-[28px] tracking-widest lowercase",children:"vivo"}),color:"text-[#415FFF]"},{name:"Samsung",logo:B.jsx("span",{className:"font-sans font-black text-xl tracking-tighter uppercase",children:"SAMSUNG"}),color:"text-[#1428A0]"},{name:"Oppo",logo:B.jsx("span",{className:"font-sans font-bold text-[26px] tracking-[0.2em] uppercase",children:"OPPO"}),color:"text-[#006937]"},{name:"Xiaomi",logo:B.jsx("div",{className:"bg-current rounded-2xl w-10 h-10 flex items-center justify-center",children:B.jsx("span",{className:"font-sans font-bold text-xl text-black",children:"mi"})}),color:"text-[#FF6700]"}],Qx=[...ff,...ff,...ff,...ff],Jx=({name:n,logo:e,colorClass:t,isForeground:i})=>B.jsxs("div",{className:`flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 mx-3 md:mx-4 border rounded-3xl backdrop-blur-sm transition-all duration-300 
    ${i?`border-white/20 bg-black/80 ${t} shadow-[0_0_15px_rgba(255,255,255,0.05)]`:"border-white/5 bg-black/40 text-gray-500"}
  `,children:[B.jsx("div",{className:"h-12 flex items-center justify-center mb-1",children:e}),B.jsx("span",{className:"text-xs md:text-sm font-semibold tracking-wider opacity-80",children:n})]}),sL=()=>B.jsxs("section",{className:"relative py-8 md:py-12 bg-[#000000] overflow-hidden flex flex-col items-center border-t border-b border-white/5",children:[B.jsxs("div",{className:"relative z-20 text-center mb-6 px-4",children:[B.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-2",children:["We Repair ",B.jsx("span",{className:"text-[#ED1C24]",children:"All Major Brands"})]}),B.jsx("p",{className:"text-gray-400 text-base max-w-xl mx-auto",children:"Expert care for your devices, regardless of the logo on the back."})]}),B.jsxs("div",{className:"relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden",children:[B.jsx("div",{className:"absolute inset-0 flex items-center w-full overflow-hidden opacity-20 grayscale pointer-events-none",children:B.jsx("div",{className:"flex animate-marquee w-max",children:Qx.map((n,e)=>B.jsx(Jx,{...n,isForeground:!1},"bg"+e))})}),B.jsxs("div",{className:"relative z-10 w-[190px] h-[380px] md:w-[210px] md:h-[420px] rounded-[2rem] md:rounded-[2.5rem] border-[8px] md:border-[10px] border-zinc-900 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden",children:[B.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-xl z-30 flex items-center justify-center",children:B.jsx("div",{className:"w-10 h-1 bg-black rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"})}),B.jsx("div",{className:"absolute top-20 -left-[10px] md:-left-[12px] w-1 h-8 bg-zinc-800 rounded-l-md z-0"}),B.jsx("div",{className:"absolute top-32 -left-[10px] md:-left-[12px] w-1 h-8 bg-zinc-800 rounded-l-md z-0"}),B.jsx("div",{className:"absolute top-28 -right-[10px] md:-right-[12px] w-1 h-12 bg-zinc-800 rounded-r-md z-0"}),B.jsx("div",{className:"absolute top-1/2 left-1/2 w-[100vw] -translate-x-1/2 -translate-y-1/2 h-full flex items-center overflow-visible pointer-events-none z-20",children:B.jsx("div",{className:"flex animate-marquee w-max",children:Qx.map((n,e)=>B.jsx(Jx,{...n,colorClass:n.color,isForeground:!0},"fg"+e))})}),B.jsx("div",{className:"absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none z-40"}),B.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-40 rounded-[1.5rem] md:rounded-[2rem]"}),B.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full z-40"})]})]})]});zi.registerPlugin(Qe);const oL=[{value:"1M+",label:"Gadgets Repaired",icon:B.jsx(Nm,{className:"w-10 h-10 text-white"})},{value:"500K+",label:"Happy Customers",icon:B.jsx(FC,{className:"w-10 h-10 text-white"})},{value:"10K+",label:"Google Reviews",icon:B.jsx(kC,{className:"w-10 h-10 text-white"})},{value:"60+",label:`Team of certified
technicians`,icon:B.jsx(PC,{className:"w-10 h-10 text-white"})}],aL=()=>{const n=xt.useRef(null),e=xt.useRef([]),t=xt.useRef(null);xt.useEffect(()=>{zi.fromTo(e.current,{y:30,opacity:0},{y:0,opacity:1,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 75%"}}),zi.fromTo(t.current,{x:30,opacity:0},{x:0,opacity:1,duration:1,delay:.3,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 75%"}})},[]);const i=r=>{r&&!e.current.includes(r)&&e.current.push(r)};return B.jsx("section",{ref:n,className:"py-24 px-6 bg-[#000000] relative",children:B.jsxs("div",{className:"max-w-7xl mx-auto",children:[B.jsxs("h2",{className:"text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-20 leading-tight",children:["Why Bengaluru ",B.jsx("span",{className:"text-[#ED1C24]",children:"Trusts iFix"}),B.jsx("br",{}),"for Gadget Repairs"]}),B.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",children:[B.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:oL.map((r,s)=>B.jsxs("div",{ref:i,className:"bg-gradient-to-br from-[#8b0000] to-[#1a0000] border border-red-900/30 rounded-2xl p-8 flex items-center justify-between hover:border-[#ED1C24]/50 transition-colors duration-300",children:[B.jsxs("div",{children:[B.jsx("h3",{className:"text-4xl font-extrabold text-white mb-2",children:r.value}),B.jsx("p",{className:"text-white/90 text-sm font-medium whitespace-pre-line leading-snug",children:r.label})]}),B.jsx("div",{className:"opacity-90",children:r.icon})]},s))}),B.jsxs("div",{ref:t,className:"space-y-8 relative",children:[B.jsx("p",{className:"text-[#cccccc] text-lg leading-relaxed",children:"Since 2009, iFix has been Bengaluru's go-to destination for hassle-free gadget repairs. Starting as a trusted Apple service centre, we've grown into a network of six branches across the city, with a vision to expand nationwide."}),B.jsx("p",{className:"text-[#cccccc] text-lg leading-relaxed",children:"From iPhones and Androids to MacBooks, iPads, and laptops, our expert technicians bring your devices back to life with speed, precision, and care—making them feel as good as new."}),B.jsx("button",{className:"bg-[#ED1C24] hover:bg-red-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 mt-4 shadow-lg shadow-red-500/20",children:"Meet the Experts behind iFix"})]})]})]})})};zi.registerPlugin(Qe);const lL=[{name:"Indiranagar 100FT Road",image:"/assets/Location Images/Indiranagar.jpg"},{name:"Koramangala",image:"/assets/Location Images/Kormangala.png"},{name:"Kammanahalli",image:"/assets/Location Images/Kamanhalli.png"},{name:"Marathahalli",image:"/assets/Location Images/Marthalli.png"},{name:"BEL Road",image:"/assets/Location Images/BEL Road.jpg"},{name:"CMH Road",image:"/assets/Location Images/CMH Road.avif"}],uL=()=>{const n=xt.useRef(null),e=xt.useRef([]);xt.useEffect(()=>{zi.fromTo(e.current,{y:50,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 80%"}})},[]);const t=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return B.jsxs("section",{id:"locations",ref:n,className:"py-32 px-6 bg-[#050505] relative overflow-hidden",children:[B.jsx("div",{className:"absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#ED1C24]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"}),B.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[B.jsx("div",{className:"flex flex-col lg:flex-row justify-between items-end mb-16 gap-8",children:B.jsxs("div",{className:"max-w-2xl",children:[B.jsx("h2",{className:"text-4xl md:text-5xl font-bold tracking-tight mb-6",children:"Always near you."}),B.jsx("p",{className:"text-secondary text-lg leading-relaxed",children:"Visit any of our premium service centers across Bangalore for expert assistance and immediate repairs."})]})}),B.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:lL.map((i,r)=>B.jsxs("div",{ref:t,className:"glass-panel group cursor-pointer overflow-hidden flex flex-col border border-glassBorder hover:border-[#ED1C24]/50 transition-colors duration-500 bg-black/40",children:[B.jsx("div",{className:"h-48 w-full overflow-hidden",children:B.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"})}),B.jsxs("div",{className:"p-6 flex justify-between items-center bg-black/80 backdrop-blur-sm",children:[B.jsxs("div",{className:"flex items-center gap-3",children:[B.jsx(LC,{className:"w-5 h-5 text-[#ED1C24]"}),B.jsx("h3",{className:"text-lg font-semibold text-white",children:i.name})]}),B.jsx(NM,{className:"w-5 h-5 text-secondary group-hover:text-[#ED1C24] group-hover:translate-x-1 transition-all duration-300"})]})]},r))})]})]})},cL=()=>B.jsx("footer",{className:"bg-[#050505] pt-24 pb-12 px-6 border-t border-glassBorder",children:B.jsxs("div",{className:"max-w-7xl mx-auto",children:[B.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20",children:[B.jsxs("div",{className:"col-span-2 lg:col-span-2",children:[B.jsx("div",{className:"flex items-center gap-2 mb-6",children:B.jsx("img",{src:"/assets/ifix-india-logo.png",alt:"iFix India",className:"h-10 object-contain"})}),B.jsx("p",{className:"text-secondary mb-6 max-w-sm",children:"Premium Apple service center in Bangalore. Expert repairs for iPhone, iPad, MacBook, iMac, and iWatch."}),B.jsxs("p",{className:"text-white font-medium",children:["Call us: ",B.jsx("a",{href:"tel:+917676400900",className:"hover:text-[#ED1C24] transition-colors",children:"+91 7676 400 900"})]})]}),B.jsxs("div",{children:[B.jsx("h4",{className:"text-white font-semibold mb-6",children:"Company"}),B.jsxs("ul",{className:"space-y-4 text-secondary",children:[B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About Us"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Career"})})]})]}),B.jsxs("div",{children:[B.jsx("h4",{className:"text-white font-semibold mb-6",children:"Services"}),B.jsxs("ul",{className:"space-y-4 text-secondary",children:[B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"iPhone Repair"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"MacBook Repair"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"iPad Repair"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"iWatch Repair"})})]})]}),B.jsxs("div",{children:[B.jsx("h4",{className:"text-white font-semibold mb-6",children:"Legal"}),B.jsxs("ul",{className:"space-y-4 text-secondary",children:[B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms of Service"})}),B.jsx("li",{children:B.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Sitemap"})})]})]})]}),B.jsxs("div",{className:"pt-8 border-t border-glassBorder flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-sm",children:[B.jsx("p",{children:"© 2026 iFix India. All Rights Reserved."}),B.jsx("p",{className:"text-center md:text-right max-w-2xl text-xs",children:"iFix India is a premium service provider for all Apple products. All product names, logos, and images are the property of Apple Inc. We are not, however, associated with or certified by Apple Inc. in any manner."})]})]})});zi.registerPlugin(Qe);function fL(){return xt.useEffect(()=>{},[]),B.jsxs("div",{className:"w-full min-h-screen overflow-hidden font-sans relative",children:[B.jsx(zC,{}),B.jsxs("main",{children:[B.jsx(tL,{}),B.jsx(nL,{}),B.jsx(rL,{}),B.jsx(sL,{}),B.jsx(aL,{}),B.jsx(uL,{})]}),B.jsx(cL,{}),B.jsx("a",{href:"tel:+917676400900",className:"fixed bottom-8 right-8 z-50 bg-[#ED1C24] hover:bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(237,28,36,0.5)] transition-transform hover:scale-110",children:B.jsx(UC,{className:"w-6 h-6 fill-white"})})]})}gp.createRoot(document.getElementById("root")).render(B.jsx(LE.StrictMode,{children:B.jsx(fL,{})}));
