import{g as xe,R as Dn,j as v}from"./index-88e1dd69.js";import{l as ke}from"./Asset 1-fd422801.js";function mn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?mn(Object(e),!0).forEach(function(a){S(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):mn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function At(t){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},At(t)}function we(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function dn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ae(t,n,e){return n&&dn(t.prototype,n),e&&dn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Jt(t,n){return Se(t)||Ee(t,n)||Yn(t,n)||Ie()}function lt(t){return Oe(t)||Pe(t)||Yn(t)||Ne()}function Oe(t){if(Array.isArray(t))return zt(t)}function Se(t){if(Array.isArray(t))return t}function Pe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ee(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Yn(t,n){if(t){if(typeof t=="string")return zt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return zt(t,n)}}function zt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vn=function(){},Zt={},$n={},Un=null,Wn={mark:vn,measure:vn};try{typeof window<"u"&&(Zt=window),typeof document<"u"&&($n=document),typeof MutationObserver<"u"&&(Un=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}var Ce=Zt.navigator||{},pn=Ce.userAgent,bn=pn===void 0?"":pn,Y=Zt,y=$n,gn=Un,mt=Wn;Y.document;var M=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Hn=~bn.indexOf("MSIE")||~bn.indexOf("Trident/"),dt,vt,pt,bt,gt,j="___FONT_AWESOME___",Dt=16,Xn="fa",Gn="svg-inline--fa",B="data-fa-i2svg",Yt="data-fa-pseudo-element",Te="data-fa-pseudo-element-pending",tn="data-prefix",nn="data-icon",hn="fontawesome-i2svg",_e="async",je=["HTML","HEAD","STYLE","SCRIPT"],Bn=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",en=[h,x];function ct(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var rt=ct((dt={},S(dt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(dt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),dt)),it=ct((vt={},S(vt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(vt,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vt)),ot=ct((pt={},S(pt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(pt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pt)),Re=ct((bt={},S(bt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(bt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),bt)),Le=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qn="fa-layers-text",Me=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fe=ct((gt={},S(gt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(gt,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),gt)),Vn=[1,2,3,4,5,6,7,8,9,10],ze=Vn.concat([11,12,13,14,15,16,17,18,19,20]),De=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},st=new Set;Object.keys(it[h]).map(st.add.bind(st));Object.keys(it[x]).map(st.add.bind(st));var Ye=[].concat(en,lt(st),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(Vn.map(function(t){return"".concat(t,"x")})).concat(ze.map(function(t){return"w-".concat(t)})),et=Y.FontAwesomeConfig||{};function $e(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ue(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var We=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];We.forEach(function(t){var n=Jt(t,2),e=n[0],a=n[1],r=Ue($e(e));r!=null&&(et[a]=r)})}var Kn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xn,replacementClass:Gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};et.familyPrefix&&(et.cssPrefix=et.familyPrefix);var Z=u(u({},Kn),et);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(Kn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){Z[t]=e,at.forEach(function(a){return a(d)})},get:function(){return Z[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){Z.cssPrefix=n,at.forEach(function(e){return e(d)})},get:function(){return Z.cssPrefix}});Y.FontAwesomeConfig=d;var at=[];function He(t){return at.push(t),function(){at.splice(at.indexOf(t),1)}}var z=Dt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xe(t){if(!(!t||!M)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),t}}var Ge="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var t=12,n="";t-- >0;)n+=Ge[Math.random()*62|0];return n}function tt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function an(t){return t.classList?tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Qn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Be(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Qn(t[e]),'" ')},"").trim()}function Et(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function rn(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function qe(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Ve(t){var n=t.transform,e=t.width,a=e===void 0?Dt:e,r=t.height,i=r===void 0?Dt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Hn?f+="translate(".concat(n.x/z-a/2,"em, ").concat(n.y/z-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/z,"em), calc(-50% + ").concat(n.y/z,"em)) "):f+="translate(".concat(n.x/z,"em, ").concat(n.y/z,"em) "),f+="scale(".concat(n.size/z*(n.flipX?-1:1),", ").concat(n.size/z*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ke=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jn(){var t=Xn,n=Gn,e=d.cssPrefix,a=d.replacementClass,r=Ke;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var yn=!1;function jt(){d.autoAddCss&&!yn&&(Xe(Jn()),yn=!0)}var Qe={mixout:function(){return{dom:{css:Jn,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},R=Y||{};R[j]||(R[j]={});R[j].styles||(R[j].styles={});R[j].hooks||(R[j].hooks={});R[j].shims||(R[j].shims=[]);var T=R[j],Zn=[],Je=function t(){y.removeEventListener("DOMContentLoaded",t),Ot=1,Zn.map(function(n){return n()})},Ot=!1;M&&(Ot=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ot||y.addEventListener("DOMContentLoaded",Je));function Ze(t){M&&(Ot?setTimeout(t,0):Zn.push(t))}function ut(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Qn(t):"<".concat(n," ").concat(Be(a),">").concat(i.map(ut).join(""),"</").concat(n,">")}function xn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ta=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Rt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ta(e,r):e,f,l,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function na(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function $t(t){var n=na(t);return n.length===1?n[0].toString(16):null}function ea(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function kn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Ut(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=kn(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,kn(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Ut("fa",n)}var ht,yt,xt,V=T.styles,aa=T.shims,ra=(ht={},S(ht,h,Object.values(ot[h])),S(ht,x,Object.values(ot[x])),ht),on=null,te={},ne={},ee={},ae={},re={},ia=(yt={},S(yt,h,Object.keys(rt[h])),S(yt,x,Object.keys(rt[x])),yt);function oa(t){return~Ye.indexOf(t)}function sa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!oa(r)?r:null}var ie=function(){var n=function(i){return Rt(V,function(o,s,f){return o[f]=Rt(s,i,{}),o},{})};te=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ne=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),re=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in V||d.autoFetchSvg,a=Rt(aa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ee=a.names,ae=a.unicodes,on=Nt(d.styleDefault,{family:d.familyDefault})};He(function(t){on=Nt(t.styleDefault,{family:d.familyDefault})});ie();function sn(t,n){return(te[t]||{})[n]}function fa(t,n){return(ne[t]||{})[n]}function G(t,n){return(re[t]||{})[n]}function oe(t){return ee[t]||{prefix:null,iconName:null}}function la(t){var n=ae[t],e=sn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function $(){return on}var fn=function(){return{prefix:null,iconName:null,rest:[]}};function Nt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=rt[a][t],i=it[a][t]||it[a][r],o=t in T.styles?t:null;return i||o||null}var wn=(xt={},S(xt,h,Object.keys(ot[h])),S(xt,x,Object.keys(ot[x])),xt);function It(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},S(n,h,"".concat(d.cssPrefix,"-").concat(h)),S(n,x,"".concat(d.cssPrefix,"-").concat(x)),n),o=null,s=h;(t.includes(i[h])||t.some(function(l){return wn[h].includes(l)}))&&(s=h),(t.includes(i[x])||t.some(function(l){return wn[x].includes(l)}))&&(s=x);var f=t.reduce(function(l,c){var m=sa(d.cssPrefix,c);if(V[c]?(c=ra[s].includes(c)?Re[s][c]:c,o=c,l.prefix=c):ia[s].indexOf(c)>-1?(o=c,l.prefix=Nt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[h]&&c!==i[x]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var p=o==="fa"?oe(l.iconName):{},g=G(l.prefix,l.iconName);p.prefix&&(o=null),l.iconName=p.iconName||g||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!V.far&&V.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},fn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(V.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=$()||"fas"),f}var ca=function(){function t(){we(this,t),this.definitions={}}return Ae(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Ut(s,o[s]);var f=ot[h][s];f&&Ut(f,o[s]),ie()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=l)}),e[s][f]=l}),e}}]),t}(),An=[],K={},J={},ua=Object.keys(J);function ma(t,n){var e=n.mixoutsTo;return An=t,K={},Object.keys(J).forEach(function(a){ua.indexOf(a)===-1&&delete J[a]}),An.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),At(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(J)}),e}function Wt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=K[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=K[t]||[];r.forEach(function(i){i.apply(null,e)})}function L(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,n):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||$();if(n)return n=G(e,n)||n,xn(se.definitions,e,n)||xn(T.styles,e,n)}var se=new ca,da=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},va={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(q("beforeI2svg",n),L("pseudoElements2svg",n),L("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ze(function(){ba({autoReplaceSvgRoot:e}),q("watch",n)})}},pa={icon:function(n){if(n===null)return null;if(At(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:G(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Nt(n[0]);return{prefix:a,iconName:G(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Le))){var r=It(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=$();return{prefix:i,iconName:G(i,n)||n}}}},C={noAuto:da,config:d,dom:va,parse:pa,library:se,findIconDefinition:Ht,toHtml:ut},ba=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function Ct(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ut(a)})}}),Object.defineProperty(t,"node",{get:function(){if(M){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ga(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(rn(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=Et(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ha(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ln(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,p=t.watchable,g=p===void 0?!1:p,A=a.found?a:e,E=A.width,k=A.height,N=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},I=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};g&&(O.attributes[B]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ft())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},I),m.styles)}),W=a.found&&e.found?L("generateAbstractMask",P)||{children:[],attributes:{}}:L("generateAbstractIcon",P)||{children:[],attributes:{}},H=W.children,_t=W.attributes;return P.children=H,P.attributes=_t,s?ha(P):ga(P)}function On(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[B]="");var c=u({},o.styles);rn(r)&&(c.transform=Ve({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=Et(c);m.length>0&&(l.style=m);var p=[];return p.push({tag:"span",attributes:l,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ya(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Et(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Lt=T.styles;function Xt(t){var n=t[0],e=t[1],a=t.slice(4),r=Jt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var xa={found:!1,width:512,height:512};function ka(t,n){!Bn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Gt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=$()),new Promise(function(a,r){if(L("missingIconAbstract"),e==="fa"){var i=oe(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Lt[n]&&Lt[n][t]){var o=Lt[n][t];return a(Xt(o))}ka(t,n),a(u(u({},xa),{},{icon:d.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Sn=function(){},Bt=d.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:Sn,measure:Sn},nt='FA "6.5.1"',wa=function(n){return Bt.mark("".concat(nt," ").concat(n," begins")),function(){return fe(n)}},fe=function(n){Bt.mark("".concat(nt," ").concat(n," ends")),Bt.measure("".concat(nt," ").concat(n),"".concat(nt," ").concat(n," begins"),"".concat(nt," ").concat(n," ends"))},cn={begin:wa,end:fe},kt=function(){};function Pn(t){var n=t.getAttribute?t.getAttribute(B):null;return typeof n=="string"}function Aa(t){var n=t.getAttribute?t.getAttribute(tn):null,e=t.getAttribute?t.getAttribute(nn):null;return n&&e}function Oa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Sa(){if(d.autoReplaceSvg===!0)return wt.replace;var t=wt[d.autoReplaceSvg];return t||wt.replace}function Pa(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ea(t){return y.createElement(t)}function le(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Pa:Ea:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(le(o,{ceFn:a}))}),r}function Na(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(le(r),e)}),e.getAttribute(B)===null&&d.keepOriginalSource){var a=y.createComment(Na(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~an(e).indexOf(d.replacementClass))return wt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ut(s)}).join(`
`);e.setAttribute(B,""),e.innerHTML=o}};function En(t){t()}function ce(t,n){var e=typeof n=="function"?n:kt;if(t.length===0)e();else{var a=En;d.mutateApproach===_e&&(a=Y.requestAnimationFrame||En),a(function(){var r=Sa(),i=cn.begin("mutate");t.map(r),i(),e()})}}var un=!1;function ue(){un=!0}function qt(){un=!1}var St=null;function Nn(t){if(gn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?kt:n,a=t.nodeCallback,r=a===void 0?kt:a,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?y:s;St=new gn(function(l){if(!un){var c=$();tt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Pn(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Pn(m.target)&&~De.indexOf(m.attributeName))if(m.attributeName==="class"&&Aa(m.target)){var p=It(an(m.target)),g=p.prefix,A=p.iconName;m.target.setAttribute(tn,g||c),A&&m.target.setAttribute(nn,A)}else Oa(m.target)&&r(m.target)})}}),M&&St.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ia(){St&&St.disconnect()}function Ca(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ta(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=It(an(t));return r.prefix||(r.prefix=$()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=fa(r.prefix,t.innerText)||sn(r.prefix,$t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function _a(t){var n=tt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ft()):(n["aria-hidden"]="true",n.focusable="false")),n}function ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function In(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ta(t),a=e.iconName,r=e.prefix,i=e.rest,o=_a(t),s=Wt("parseNodeAttributes",{},t),f=n.styleParser?Ca(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ra=T.styles;function me(t){var n=d.autoReplaceSvg==="nest"?In(t,{styleParser:!1}):In(t);return~n.extra.classes.indexOf(qn)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}var U=new Set;en.map(function(t){U.add("fa-".concat(t))});Object.keys(rt[h]).map(U.add.bind(U));Object.keys(rt[x]).map(U.add.bind(U));U=lt(U);function Cn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(hn,"-").concat(m))},r=function(m){return e.remove("".concat(hn,"-").concat(m))},i=d.autoFetchSvg?U:en.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ra));i.includes("fa")||i.push("fa");var o=[".".concat(qn,":not([").concat(B,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=cn.begin("onTree"),l=s.reduce(function(c,m){try{var p=me(m);p&&c.push(p)}catch(g){Bn||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(p){ce(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(p){f(),m(p)})})}function La(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;me(t).then(function(e){e&&ce([e],n)})}function Ma(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ht(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ht(r||{})),t(a,u(u({},e),{},{mask:r}))}}var Fa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?_:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,m=e.title,p=m===void 0?null:m,g=e.titleId,A=g===void 0?null:g,E=e.classes,k=E===void 0?[]:E,N=e.attributes,w=N===void 0?{}:N,O=e.styles,I=O===void 0?{}:O;if(n){var P=n.prefix,W=n.iconName,H=n.icon;return Ct(u({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ft()):(w["aria-hidden"]="true",w.focusable="false")),ln({icons:{main:Xt(H),mask:f?Xt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:W,transform:u(u({},_),r),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:w,styles:I,classes:k}})})}},za={mixout:function(){return{icon:Ma(Fa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Cn,e.nodeCallback=La,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return Cn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,p=a.extra;return new Promise(function(g,A){Promise.all([Gt(r,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=Jt(E,2),N=k[0],w=k[1];g([e,ln({icons:{main:N,mask:w},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Et(s);f.length>0&&(r.style=f);var l;return rn(o)&&(l=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Da={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ct({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(lt(i)).join(" ")},children:o}]})}}}},Ya={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Ct({type:"counter",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),ya({content:e.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(lt(s))}})})}}}},$a={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?_:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,p=a.styles,g=p===void 0?{}:p;return Ct({type:"text",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),On({content:e,transform:u(u({},_),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(lt(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Hn){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,On({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ua=new RegExp('"',"ug"),Tn=[1105920,1112319];function Wa(t){var n=t.replace(Ua,""),e=ea(n,0),a=e>=Tn[0]&&e<=Tn[1],r=n.length===2?n[0]===n[1]:!1;return{value:$t(r?n[0]:n),isSecondary:a||r}}function _n(t,n){var e="".concat(Te).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=tt(t.children),o=i.filter(function(H){return H.getAttribute(Yt)===n})[0],s=Y.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Me),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?x:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[p][f[2].toLowerCase()]:Fe[p][l],A=Wa(m),E=A.value,k=A.isSecondary,N=f[0].startsWith("FontAwesome"),w=sn(g,E),O=w;if(N){var I=la(E);I.iconName&&I.prefix&&(w=I.iconName,g=I.prefix)}if(w&&!k&&(!o||o.getAttribute(tn)!==g||o.getAttribute(nn)!==O)){t.setAttribute(e,O),o&&t.removeChild(o);var P=ja(),W=P.extra;W.attributes[Yt]=n,Gt(w,g).then(function(H){var _t=ln(u(u({},P),{},{icons:{main:H,mask:fn()},prefix:g,iconName:O,extra:W,watchable:!0})),F=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=_t.map(function(ye){return ut(ye)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ha(t){return Promise.all([_n(t,"::before"),_n(t,"::after")])}function Xa(t){return t.parentNode!==document.head&&!~je.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function jn(t){if(M)return new Promise(function(n,e){var a=tt(t.querySelectorAll("*")).filter(Xa).map(Ha),r=cn.begin("searchPseudoElements");ue(),Promise.all(a).then(function(){r(),qt(),n()}).catch(function(){r(),qt(),e()})})}var Ga={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=jn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&jn(r)}}},Rn=!1,Ba={mixout:function(){return{dom:{unwatch:function(){ue(),Rn=!0}}}},hooks:function(){return{bootstrap:function(){Nn(Wt("mutationObserverCallbacks",{}))},noAuto:function(){Ia()},watch:function(e){var a=e.observeMutationsRoot;Rn?qt():Nn(Wt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ln=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},qa={mixout:function(){return{parse:{transform:function(e){return Ln(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Ln(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},Mt={x:0,y:0,width:"100%",height:"100%"};function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Va(t){return t.tag==="g"?t.children:[t]}var Ka={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?It(r.split(" ").map(function(o){return o.trim()})):fn();return i.prefix||(i.prefix=$()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,c=i.icon,m=o.width,p=o.icon,g=qe({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Mt),{},{fill:"white"})},E=c.children?{children:c.children.map(Mn)}:{},k={tag:"g",attributes:u({},g.inner),children:[Mn(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},E))]},N={tag:"g",attributes:u({},g.outer),children:[k]},w="mask-".concat(s||ft()),O="clip-".concat(s||ft()),I={tag:"mask",attributes:u(u({},Mt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,N]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Va(p)},I]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Mt)}),{children:a,attributes:r}}}},Qa={provides:function(n){var e=!1;Y.matchMedia&&(e=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ja={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Za=[Qe,za,Da,Ya,$a,Ga,Ba,qa,Ka,Qa,Ja];ma(Za,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var Vt=C.parse;C.findIconDefinition;C.toHtml;var tr=C.icon;C.layer;C.text;C.counter;var de={exports:{}},nr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",er=nr,ar=er;function ve(){}function pe(){}pe.resetWarningCache=ve;var rr=function(){function t(a,r,i,o,s,f){if(f!==ar){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:pe,resetWarningCache:ve};return e.PropTypes=e,e};de.exports=rr();var ir=de.exports;const b=xe(ir);function Fn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function D(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Fn(Object(e),!0).forEach(function(a){Q(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Fn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Pt(t){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function Q(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function or(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function sr(t,n){if(t==null)return{};var e=or(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Kt(t){return fr(t)||lr(t)||cr(t)||ur()}function fr(t){if(Array.isArray(t))return Qt(t)}function lr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cr(t,n){if(t){if(typeof t=="string")return Qt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Qt(t,n)}}function Qt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,p=t.fixedWidth,g=t.inverse,A=t.border,E=t.listItem,k=t.flip,N=t.size,w=t.rotation,O=t.pull,I=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Q(n,"fa-".concat(N),typeof N<"u"&&N!==null),Q(n,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),Q(n,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Q(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(I).map(function(P){return I[P]?P:null}).filter(function(P){return P})}function dr(t){return t=t-0,t===t}function be(t){return dr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var vr=["style"];function pr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function br(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=be(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[pr(r)]=i:n[r]=i,n},{})}function ge(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return ge(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=br(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[be(l)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=sr(e,vr);return r.attrs.style=D(D({},r.attrs.style),o),t.apply(void 0,[n.tag,D(D({},r.attrs),s)].concat(Kt(a)))}var he=!1;try{he=!0}catch{}function gr(){if(!he&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function zn(t){if(t&&Pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vt.icon)return Vt.icon(t);if(t===null)return null;if(t&&Pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ft(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Q({},t,n):{}}var Tt=Dn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=zn(e),c=Ft("classes",[].concat(Kt(mr(t)),Kt(i.split(" ")))),m=Ft("transform",typeof t.transform=="string"?Vt.transform(t.transform):t.transform),p=Ft("mask",zn(a)),g=tr(l,D(D(D(D({},c),m),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return gr("Could not find icon",l),null;var A=g.abstract,E={ref:n};return Object.keys(t).forEach(function(k){Tt.defaultProps.hasOwnProperty(k)||(E[k]=t[k])}),hr(A[0],E)});Tt.displayName="FontAwesomeIcon";Tt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};Tt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var hr=ge.bind(null,Dn.createElement);function kr(){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return v.jsxs("div",{className:"footer",children:[v.jsx("button",{onClick:t,className:"up",children:v.jsx("img",{src:"./src/assets/arrow-up.png",alt:"arrowUp",width:"30px",className:"arrow"})}),v.jsx("div",{className:"upper-footer",children:v.jsx("img",{width:"80",src:ke,alt:"",className:"logo-footer"})}),v.jsxs("div",{className:"down-footer",children:[v.jsxs("div",{className:"contact-div",children:[v.jsx("h2",{className:"contact-head",children:"CONTACT US:"}),v.jsx("br",{}),v.jsx("br",{}),v.jsxs("p",{className:"contact-p",children:["Phone: ",v.jsxs("a",{href:"tel:+381 612222397",children:["+381 612222",v.jsx("span",{className:"num",children:"3"}),"97"]})," ",v.jsx("br",{}),"Phone: ",v.jsxs("a",{href:"tel:+381 612222497",children:["+381 612222",v.jsx("span",{className:"num",children:"4"}),"97"]})," ",v.jsx("br",{}),"Email: ",v.jsxs("a",{href:"mailto:office@2tales.rs",children:["office@",v.jsx("span",{className:"num",children:"2tales"}),".rs"]})," ",v.jsx("br",{}),"Follow us on: ",v.jsx("br",{}),v.jsx("br",{}),v.jsx("a",{className:"aig",href:"https://www.instagram.com/2tales_spirits/",target:"_blank",rel:"noreferrer",children:v.jsx("img",{src:"./src/assets/instagram.png",alt:"Instagram",width:"20px"})}),v.jsx("a",{className:"afa",target:"_blank",href:"https://www.facebook.com/profile.php?id=100069385623493",rel:"noreferrer",children:v.jsx("img",{src:"./src/assets/facebook.png",alt:"Facebook",width:"20px"})})]})]}),v.jsxs("div",{className:"about-div",children:[v.jsx("h2",{className:"about-head",children:"About US:"}),v.jsx("br",{}),v.jsx("br",{}),v.jsx("br",{}),v.jsx("br",{}),v.jsxs("p",{className:"about-p",children:["2Tales is a small craft distillery with big ideas located in ",v.jsx("span",{className:"city",children:"Belgrade"}),"."]})]}),v.jsxs("div",{className:"sndmsg-div",children:[v.jsx("h2",{className:"sndmsg-head",children:"Send us a message:"}),v.jsxs("form",{action:"",children:[v.jsxs("label",{htmlFor:"name",children:["Name",v.jsx("span",{className:"req",children:"*"}),v.jsx("br",{}),v.jsx("input",{placeholder:"Name",id:"name",type:"text",required:!0})]}),v.jsxs("label",{htmlFor:"email",children:["E-mail",v.jsx("span",{className:"req",children:"*"}),v.jsx("br",{}),v.jsx("input",{placeholder:"Email",id:"email",type:"email",required:!0})]}),v.jsxs("label",{htmlFor:"phone",children:["Phone",v.jsx("span",{className:"req",children:"*"}),v.jsx("br",{}),v.jsx("input",{placeholder:"Phone",id:"phone",type:"phone",required:!0})]}),v.jsx("button",{className:"btn",type:"submit",children:"Send"})]})]})]})]})}export{kr as default};
