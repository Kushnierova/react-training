(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[553],{7553:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(9439),o=n(2791),s=function(t,e){var n=(0,o.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),s=(0,r.Z)(n,2),a=s[0],u=s[1];return(0,o.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(a))}),[t,a]),[a,u]},a="SingUpForm_container__JCU39",u="SingUpForm_form__bZb7H",i="SingUpForm_textInput__XMQBo",c="SingUpForm_submitBtn__WCddt",f=n(6429),l=n.n(f),h=n(184);var p=function(){var t=s("email",""),e=(0,r.Z)(t,2),n=e[0],o=e[1],f=s("password",""),p=(0,r.Z)(f,2),d=p[0],g=p[1],m=l().generate(),x=l().generate(),v=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"email":o(r);break;case"password":g(r);break;default:return}};return(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:a,children:[(0,h.jsxs)("form",{className:u,autoComplete:"off",children:[(0,h.jsxs)("label",{htmlFor:m,className:i,children:["Email:",(0,h.jsx)("input",{type:"text",name:"email",value:n,onChange:v,id:m})]}),(0,h.jsxs)("label",{htmlFor:x,className:i,children:["Password:",(0,h.jsx)("input",{type:"text",name:"password",value:d,onChange:v,id:x})]}),(0,h.jsx)("button",{type:"submit",className:c,children:"Sent"})]})," "]})})}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,o,s,a=n(5408),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){s=!1}function c(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function f(){return s||(s=function(){r||c(u);for(var t,e=r.split(""),n=[],o=a.nextValue();e.length>0;)o=a.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return c(t),r},seed:function(t){a.seed(t),o!==t&&(i(),o=t)},lookup:function(t){return f()[t]},shuffled:f}},7098:function(t,e,n){"use strict";var r,o,s=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=s(7),e+=s(t),r>0&&(e+=s(r)),e+=s(n)}},2226:function(t,e,n){"use strict";var r=n(8857),o=n(9139),s=n(2483);t.exports=function(t){for(var e,n=0,a="";!e;)a+=s(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}},5274:function(t,e,n){"use strict";var r=n(8857),o=n(7098),s=n(6046),a=n(5347)||0;function u(){return o(a)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=s},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),s="";;)for(var a=t(o),u=o;u--;)if((s+=e[a[u]&r]||"").length===+n)return s}}}]);
//# sourceMappingURL=553.d82860f9.chunk.js.map