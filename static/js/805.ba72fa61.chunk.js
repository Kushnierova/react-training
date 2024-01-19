"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[805],{241:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var o=n(9439),r=n(2791),a=n(4942),s=n(1413),i=n(4925),c=n(3433);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},p=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},h=function(e){return p(e)||v(e)?e:null},g=function(e){return(0,r.isValidElement)(e)||p(e)||v(e)||m(e)};function y(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,s=e.collapse,i=void 0===s||s,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,s=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,m=e.isIn,p=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,c.Z)(n)))};(e=t.classList).add.apply(e,(0,c.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};m||(u?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[m]),r.createElement(r.Fragment,null,o)}}function E(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var T={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,c.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},b=function(e){var t=e.theme,n=e.type,o=(0,i.Z)(e,d);return r.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(e){return r.createElement(b,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(b,(0,s.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(b,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(b,(0,s.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function _(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),u=(0,o.Z)(a,2),l=u[0],d=u[1],y=(0,r.useRef)(null),b=(0,r.useRef)(new Map).current,_=function(e){return-1!==l.indexOf(e)},x=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:_,getToast:function(e){return b.get(e)}}).current;function O(e){var t=e.containerId;!x.props.limit||t&&x.containerId!==t||(x.count-=x.queue.length,x.queue=[])}function Z(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=x.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var a=t.delay,c=t.staleId,u=(0,i.Z)(t,f);if(g(e)&&!function(e){return!y.current||x.props.enableMultiContainer&&e.containerId!==x.props.containerId||b.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,_=u.data,O=x.props,w=function(){return Z(l)},k=null==d;k&&x.count++;var j,L,R=(0,s.Z)((0,s.Z)((0,s.Z)({},O),{},{style:O.toastStyle,key:x.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:_,closeToast:w,isIn:!1,className:h(u.className||O.toastClassName),bodyClassName:h(u.bodyClassName||O.bodyClassName),progressClassName:h(u.progressClassName||O.progressClassName),autoClose:!u.isLoading&&(j=u.autoClose,L=O.autoClose,!1===j||m(j)&&j>0?j:L),deleteToast:function(){var e=E(b.get(l),"removed");b.delete(l),T.emit(4,e);var t=x.queue.length;if(x.count=null==l?x.count-x.displayedToast:x.count-1,x.count<0&&(x.count=0),t>0){var o=null==l?x.props.limit:1;if(1===t||1===o)x.displayedToast++,I();else{var r=o>t?t:o;x.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(v(a)?s=a(i):(0,r.isValidElement)(a)?s=(0,r.cloneElement)(a,i):p(a)||m(a)?s=a:o?s=C.spinner():function(e){return e in C}(n)&&(s=C[n](i))),s}(R),v(u.onOpen)&&(R.onOpen=u.onOpen),v(u.onClose)&&(R.onClose=u.onClose),R.closeButton=O.closeButton,!1===u.closeButton||g(u.closeButton)?R.closeButton=u.closeButton:!0===u.closeButton&&(R.closeButton=!g(O.closeButton)||O.closeButton);var M=e;(0,r.isValidElement)(e)&&!p(e.type)?M=(0,r.cloneElement)(e,{closeToast:w,toastProps:R,data:_}):v(e)&&(M=e({closeToast:w,toastProps:R,data:_})),O.limit&&O.limit>0&&x.count>O.limit&&k?x.queue.push({toastContent:M,toastProps:R,staleId:c}):m(a)?setTimeout((function(){N(M,R,c)}),a):N(M,R,c)}}function N(e,t,n){var o=t.toastId;n&&b.delete(n);var r={content:e,props:t};b.set(o,r),d((function(e){return[].concat((0,c.Z)(e),[o]).filter((function(e){return e!==n}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return x.containerId=e.containerId,T.cancelEmit(3).on(0,w).on(1,(function(e){return y.current&&Z(e)})).on(5,O).emit(2,x),function(){b.clear(),T.emit(3,x)}}),[]),(0,r.useEffect)((function(){x.props=e,x.isToastActive=_,x.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:y,isToastActive:_}}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Z(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],s=n[1],i=(0,r.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,r.useRef)(e),p=e.autoClose,h=e.pauseOnHover,g=e.closeToast,y=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",I),document.addEventListener("touchmove",Z),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=x(t.nativeEvent),f.y=O(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=s&&f.y>=o&&f.y<=r?_():C()}}function C(){s(!0)}function _(){s(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&_(),f.x=x(t),f.y=O(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){m.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;v(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",C),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return p&&h&&(w.onMouseEnter=_,w.onMouseLeave=C),E&&(w.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:C,pauseToast:_,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:w}}function I(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){var t=e.delay,n=e.isRunning,o=e.closeToast,i=e.type,c=void 0===i?"default":i,u=e.hide,d=e.className,f=e.style,m=e.controlledProgress,p=e.progress,h=e.rtl,g=e.isIn,y=e.theme,E=u||m&&0===p,T=(0,s.Z)((0,s.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});m&&(T.transform="scaleX(".concat(p,")"));var b=l("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":h}),C=v(d)?d({rtl:h,type:c,defaultClassName:b}):l(b,d);return r.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:C,style:T},m&&p>=1?"onTransitionEnd":"onAnimationEnd",m&&p<1?null:function(){g&&o()}))}var N=function(e){var t=Z(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,m=e.type,p=e.hideProgressBar,h=e.closeToast,g=e.transition,y=e.position,E=e.className,T=e.style,b=e.bodyClassName,C=e.bodyStyle,_=e.progressClassName,x=e.progressStyle,O=e.updateId,N=e.role,k=e.progress,j=e.rtl,L=e.toastId,R=e.deleteToast,M=e.isIn,P=e.isLoading,z=e.iconOut,S=e.closeOnClick,B=e.theme,D=l("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":S}),A=v(E)?E({rtl:j,position:y,type:m,defaultClassName:D}):l(D,E),F=!!k||!d,H={closeToast:h,type:m,theme:B},q=null;return!1===c||(q=v(c)?c(H):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,H):I(H)),r.createElement(g,{isIn:M,done:R,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,s.Z)((0,s.Z)({id:L,onClick:f,className:A},i),{},{style:T,ref:a}),r.createElement("div",(0,s.Z)((0,s.Z)({},M&&{role:N}),{},{className:v(b)?b({type:m}):l("Toastify__toast-body",b),style:C}),null!=z&&r.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},z),r.createElement("div",null,u)),q,r.createElement(w,(0,s.Z)((0,s.Z)({},O&&!F?{key:"pb-".concat(O)}:{}),{},{rtl:j,theme:B,delay:d,isRunning:n,isIn:M,closeToast:h,hide:p,type:m,style:x,className:_,controlledProgress:F,progress:k||0}))))},k=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=y(k("bounce",!0)),L=(y(k("slide",!0)),y(k("zoom")),y(k("flip")),(0,r.forwardRef)((function(e,t){var n=_(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,c=e.className,u=e.style,d=e.rtl,f=e.containerId;function m(e){var t=l("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(c)?c({position:e,rtl:d,defaultClassName:t}):l(t,h(c))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:m(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(N,(0,s.Z)((0,s.Z)({},a),{},{isIn:i(a.toastId),style:(0,s.Z)((0,s.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));L.displayName="ToastContainer",L.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,M=new Map,P=[],z=1;function S(){return""+z++}function B(e){return e&&(p(e.toastId)||m(e.toastId))?e.toastId:S()}function D(e,t){return M.size>0?T.emit(0,e,t):P.push({content:e,options:t}),t.toastId}function A(e,t){return(0,s.Z)((0,s.Z)({},t),{},{type:t&&t.type||e,toastId:B(t)})}function F(e){return function(t,n){return D(t,A(e,n))}}function H(e,t){return D(e,A("default",t))}H.loading=function(e,t){return D(e,A("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=p(r)?H.loading(r,n):H.loading(r.render,(0,s.Z)((0,s.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),n),{},{data:r}),i=p(t)?{render:t}:t;return o?H.update(o,(0,s.Z)((0,s.Z)({},a),i)):H(i.render,(0,s.Z)((0,s.Z)({},a),i)),r}H.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},H.success=F("success"),H.info=F("info"),H.error=F("error"),H.warning=F("warning"),H.warn=H.warning,H.dark=function(e,t){return D(e,A("default",(0,s.Z)({theme:"dark"},t)))},H.dismiss=function(e){M.size>0?T.emit(1,e):P=P.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},H.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=M.get(n||R);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:S()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,D(i,a)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return T.on(4,e),function(){T.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(e){R=e.containerId||e,M.set(R,e),P.forEach((function(e){T.emit(0,e.content,e.options)})),P=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&T.off(0).off(1).off(5)}));var q="PokemonForm_btn__Lw+wp",Q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=r.createContext&&r.createContext(Q),W=function(){return W=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},W.apply(this,arguments)},X=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function G(e){return e&&e.map((function(e,t){return r.createElement(e.tag,W({key:t},e.attr),G(e.child))}))}function U(e){return function(t){return r.createElement(Y,W({attr:W({},e.attr)},t),G(e.child))}}function Y(e){var t=function(t){var n,o=e.attr,a=e.size,s=e.title,i=X(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",W({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:n,style:W(W({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==V?r.createElement(V.Consumer,null,(function(e){return t(e)})):t(Q)}function K(e){return U({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.243 3.757c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM13 8c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.243 12.243c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM7 14c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.757 12.243c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.257 3.757c0 0 0 0 0 0 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0.875 8c0-0.621 0.504-1.125 1.125-1.125s1.125 0.504 1.125 1.125c0 0.621-0.504 1.125-1.125 1.125s-1.125-0.504-1.125-1.125z"}}]})(e)}function J(e){return U({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}}]})(e)}var $=n(184),ee={form:{marginBottom:20}};var te=function(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),s=a[0],i=a[1];return(0,$.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),i("")):H.error("string is empty")},style:ee.form,children:[(0,$.jsx)("input",{type:"text",name:"pokemonName",value:s,onChange:function(e){i(e.currentTarget.value.toLowerCase())}}),(0,$.jsxs)("button",{type:"submit",className:q,children:[(0,$.jsx)(J,{style:{marginRight:8}}),"Search"]})]})},ne=n.p+"static/media/error.e9be2760b39e1e7d549b.jpg";var oe=function(e){var t=e.message;return(0,$.jsxs)("div",{role:"alert",children:[(0,$.jsx)("h2",{children:t}),(0,$.jsx)("img",{src:ne,width:"240",alt:"sadcat"})]})};var re=function(e){var t=e.pokemon,n=t.sprites,o=t.name,r=t.stats;return(0,$.jsxs)("div",{children:[(0,$.jsx)("p",{children:o})," ",(0,$.jsx)("img",{src:n.other["official-artwork"].front_default,alt:o,width:"250"}),(0,$.jsx)("ul",{children:r.map((function(e){return(0,$.jsxs)("li",{children:[e.stat.name,":",e.base_stat]},e.stat.name)}))})]})},ae="PokemonPendingView_iconSpin__9gxRl",se=n.p+"static/media/pending.1722827a94ce76d06c4d.jpg",ie={};var ce=function(e){var t={name:e.pokemonName,sprites:{other:{"official-artwork":{front_default:se}}},stats:[]};return(0,$.jsxs)("div",{children:[(0,$.jsxs)("div",{style:ie.spinner,children:[(0,$.jsx)(K,{size:"32",className:ae}),"Please, wait..."]}),(0,$.jsx)(re,{pokemon:t})]})},ue="idle",le="pending",de="resolved",fe="rejected";var me=function(e){var t=e.pokemonName,n=(0,r.useState)(null),a=(0,o.Z)(n,2),s=a[0],i=a[1],c=(0,r.useState)(null),u=(0,o.Z)(c,2),l=u[0],d=u[1],f=(0,r.useState)(ue),m=(0,o.Z)(f,2),p=m[0],v=m[1];return(0,r.useEffect)((function(){t&&(v("pending"),fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have a pokemon named ".concat(t)))})).then((function(e){i(e),v(de)})).catch((function(e){d(e),v(fe)})))}),[t]),p===ue?(0,$.jsx)("p",{children:"Please, write the name of the Pok\xe9mon"}):p===le?(0,$.jsx)(ce,{pokemonName:t}):p===fe?(0,$.jsx)(oe,{message:l.message}):p===de?(0,$.jsx)(re,{pokemon:s}):void 0},pe="Pokemon_container__9XyuF";var ve=function(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1];return(0,$.jsx)("div",{className:"container",children:(0,$.jsxs)("div",{className:pe,children:[(0,$.jsx)("div",{children:(0,$.jsx)(te,{onSubmit:a})}),(0,$.jsx)("div",{children:(0,$.jsx)(me,{pokemonName:n})}),(0,$.jsx)(L,{autoClose:3e3})]})})}},4925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=805.ba72fa61.chunk.js.map