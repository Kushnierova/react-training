/*! For license information please see 835.8d5c13a3.chunk.js.LICENSE.txt */
(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[835],{5835:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tt}});var r,o,i=n(1413),l=n(3433),s=n(5671),a=n(3144),c=n(136),u=n(4104),f=n(2791),d=n(6429),h=n.n(d),p="ToDoListBox_container__VbJFQ",g="ToDoListBox_btnOpenModal__bttGo",v=n(9448),m=n.n(v),b="Todo_checkbox__wdu0X",x="Todo_text__ZljMw",y="Todo_btn__ajqmu",w=["title","titleId"];function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j.apply(this,arguments)}function O(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function _(t,e){var n=t.title,i=t.titleId,l=O(t,w);return f.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":i},l),n?f.createElement("title",{id:i},n):null,r||(r=f.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),o||(o=f.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var C=f.forwardRef(_),S=(n.p,n(184)),T=function(t){var e=t.text,n=t.completed,r=t.onToggleCompleted,o=t.onDelete;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("input",{type:"checkbox",className:b,checked:n,onChange:r}),(0,S.jsx)("p",{className:x,children:e}),(0,S.jsx)("button",{type:"button",className:y,onClick:o,children:(0,S.jsx)(C,{width:"20",height:"20",fill:"black"})})]})},k=m().bind({listItem:"ToDoList_listItem__MhB00",listItemCompleted:"ToDoList_listItemCompleted__ydXTH"}),M=function(t){var e=t.todos,n=t.onDeleteTodo,r=t.onToggleCompleted;return(0,S.jsx)("ul",{children:e.map((function(t){var e=t.id,o=t.text,i=t.completed;return(0,S.jsx)("li",{className:k("listItem",{listItemCompleted:i}),children:(0,S.jsx)(T,{text:o,completed:i,onToggleCompleted:function(){return r(e)},onDelete:function(){return n(e)}})},e)}))})},E="ToDoEditor_form__RRDKi",D="ToDoEditor_textarea__fOKJm",P="ToDoEditor_btn__I6kTB",Z=function(t){(0,c.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={message:""},t.handleChange=function(e){t.setState({message:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return(0,a.Z)(n,[{key:"render",value:function(){var t=this.state.message;return(0,S.jsxs)("form",{className:E,onSubmit:this.handleSubmit,children:[(0,S.jsx)("textarea",{className:D,value:t,onChange:this.handleChange}),(0,S.jsx)("button",{type:"submit",className:P,children:"Add"})]})}}]),n}(f.Component),I=Z,N=function(t){var e=t.value,n=t.onChange;return(0,S.jsx)("label",{children:(0,S.jsx)("input",{type:"text",value:e,placeholder:"Filter by name: ",onChange:n})})},V=n(4164),L="Modal_blackdrop__7THGj",A="Modal_content__8mMkh",B=document.querySelector("#modal-root");var H,R,q=function(t){var e=t.onClose,n=t.children;(0,f.useEffect)((function(){window.addEventListener("keydown",r),window.removeEventListener("keydown",r)}));var r=function(t){"Escape"===t.code&&e()};return(0,V.createPortal)((0,S.jsx)("div",{className:L,onClick:function(t){t.currentTarget===t.target&&e()},children:(0,S.jsx)("div",{className:A,children:n})}),B)},z=["title","titleId"];function F(){return F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F.apply(this,arguments)}function J(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function X(t,e){var n=t.title,r=t.titleId,o=J(t,z);return f.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},o),n?f.createElement("title",{id:r},n):null,H||(H=f.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),R||(R=f.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var G=f.forwardRef(X),K=(n.p,n(4925)),U="IconButton_btn__PoeXD",Q=["children","onClick"],Y=function(t){var e=t.children,n=t.onClick,r=(0,K.Z)(t,Q);return(0,S.jsx)("button",(0,i.Z)((0,i.Z)({type:"button",className:U,onClick:n},r),{},{children:e}))};Y.defaultProps={onClick:function(){return null},children:null};var $=Y,W=function(t){(0,c.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={todos:[],filter:"",showModal:!1},t.addTodo=function(e){console.log(e);var n={id:h().generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[n].concat((0,l.Z)(e))}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){console.log(e),t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?(0,i.Z)((0,i.Z)({},t),{},{completed:!t.completed}):t}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,n=e.todos,r=e.filter.toLowerCase();return n.filter((function(t){return t.text.toLowerCase().includes(r)}))},t.getCompletedTodoCount=function(){return t.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0)},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.todos,r=e.todos;n!==r&&localStorage.setItem("todos",JSON.stringify(n)),n.length>r.length&&0!==r.length&&this.toggleModal()}},{key:"render",value:function(){var t=this.state,e=t.todos,n=t.filter,r=t.showModal,o=e.length,i=this.getCompletedTodoCount(),l=this.getVisibleTodos();return(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)($,{onClick:this.toggleModal,className:g,"aria-label":"Add todo",children:(0,S.jsx)(G,{width:"40",height:"40",fill:"white"})}),r&&(0,S.jsx)(q,{onClose:this.toggleModal,children:(0,S.jsx)(I,{onSubmit:this.addTodo})}),(0,S.jsx)(N,{value:n,onChange:this.changeFilter}),(0,S.jsx)("h2",{children:"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u043d\u043e\u0442\u0430\u0442\u043a\u0456\u0432"}),(0,S.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c: ",o]}),(0,S.jsxs)("p",{children:["\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e: ",i]}),(0,S.jsx)(M,{todos:l,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})})}}]),n}(f.Component),tt=W},9448:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(this&&this[n]||n);else if(Array.isArray(n))t.push(o.apply(this,n));else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&t.push(this&&this[l]||l)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,o,i,l=n(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){i=!1}function c(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,a()}}else r!==s&&(r=s,a())}function u(){return i||(i=function(){r||c(s);for(var t,e=r.split(""),n=[],o=l.nextValue();e.length>0;)o=l.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return c(t),r},seed:function(t){l.seed(t),o!==t&&(a(),o=t)},lookup:function(t){return u()[t]},shuffled:u}},7098:function(t,e,n){"use strict";var r,o,i=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=i(7),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},2226:function(t,e,n){"use strict";var r=n(8857),o=n(9139),i=n(2483);t.exports=function(t){for(var e,n=0,l="";!e;)l+=i(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return l}},5274:function(t,e,n){"use strict";var r=n(8857),o=n(7098),i=n(6046),l=n(5347)||0;function s(){return o(l)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return l=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),i="";;)for(var l=t(o),s=o;s--;)if((i+=e[l[s]&r]||"").length===+n)return i}},4942:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},1413:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(4942);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},4925:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=835.8d5c13a3.chunk.js.map