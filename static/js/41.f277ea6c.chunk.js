(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[41],{1819:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(4),o=r(25),a=r(136),c=r(27),i=r(407),l=r(1824),s=r(269),u=r(1681),p=r(0),d=["links","activeLast"];function b(e){var t,r=e.links,c=e.activeLast,u=void 0!==c&&c,b=Object(o.a)(e,d),j=null===(t=Object(a.last)(r))||void 0===t?void 0:t.name,m=r.map((function(e){return Object(p.jsx)(f,{link:e},e.name)})),x=r.map((function(e){return Object(p.jsx)("div",{children:e.name!==j?Object(p.jsx)(f,{link:e}):Object(p.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:j})},e.name)}));return Object(p.jsx)(l.a,Object(n.a)(Object(n.a)({separator:Object(p.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:u?m:x}))}function f(e){var t=e.link,r=t.href,n=t.name,o=t.icon;return Object(p.jsxs)(u.a,{variant:"body2",component:c.b,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&Object(p.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),n]},n)}},1820:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(4),o=r(25),a=r(136),c=r(269),i=r(407),l=r(1681),s=r(1819),u=r(0),p=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,r=e.action,d=e.heading,b=e.moreLink,f=void 0===b?[]:b,j=e.sx,m=Object(o.a)(e,p);return Object(u.jsxs)(c.a,{sx:Object(n.a)({mb:5},j),children:[Object(u.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:d}),Object(u.jsx)(s.a,Object(n.a)({links:t},m))]}),r&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:r})]}),Object(u.jsx)(c.a,{sx:{mt:2},children:Object(a.isString)(f)?Object(u.jsx)(l.a,{href:f,target:"_blank",rel:"noopener",variant:"body2",children:f}):f.map((function(e){return Object(u.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,r){"use strict";var n=r(16),o=r(3),a=r(10),c=r(2),i=r(13),l=r(1),s=(r(99),r(7),r(5)),u=r(300),p=r(12),d=r(18),b=r(407),f=r(98),j=r(59),m=r(0),x=Object(j.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=r(1675),y=Object(p.a)(h.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(f.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(f.c)(t.palette.grey[600],.12)})})})),O=Object(p.a)(x)({width:24,height:16});var g=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(y,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(O,{ownerState:t})}))})},v=r(179),C=r(192);function w(e){return Object(v.a)("MuiBreadcrumbs",e)}var k=Object(C.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(p.a)(b.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(a.a)({},"& .".concat(k.li),t.li),t.root]}})({}),T=Object(p.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),D=Object(p.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,t,r,n){return e.reduce((function(o,a,c){return c<e.length-1?o=o.concat(a,Object(m.jsx)(D,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(c))):o.push(a),o}),[])}var E=l.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiBreadcrumbs"}),a=r.children,p=r.className,b=r.component,f=void 0===b?"nav":b,j=r.expandText,x=void 0===j?"Show path":j,h=r.itemsAfterCollapse,y=void 0===h?1:h,O=r.itemsBeforeCollapse,v=void 0===O?1:O,C=r.maxItems,k=void 0===C?8:C,D=r.separator,E=void 0===D?"/":D,_=Object(i.a)(r,S),A=l.useState(!1),I=Object(o.a)(A,2),B=I[0],M=I[1],z=Object(c.a)({},r,{component:f,expanded:B,expandText:x,itemsAfterCollapse:y,itemsBeforeCollapse:v,maxItems:k,separator:E}),N=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(z),L=l.useRef(null),U=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:N.li,children:e},"child-".concat(t))}));return Object(m.jsx)(R,Object(c.a)({ref:t,component:f,color:"text.secondary",className:Object(s.a)(N.root,p),ownerState:z},_,{children:Object(m.jsx)(T,{className:N.ol,ref:L,ownerState:z,children:P(B||k&&U.length<=k?U:function(e){return v+y>=e.length?e:[].concat(Object(n.a)(e.slice(0,v)),[Object(m.jsx)(g,{"aria-label":x,onClick:function(){M(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(n.a)(e.slice(e.length-y,e.length)))}(U),N.separator,E,z)})}))}));t.a=E},2082:function(e,t,r){"use strict";var n=r(2083).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},2083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(r(1)),o=a(r(2084));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?b(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){function t(){var e,r;s(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return j(b(r=p(this,(e=d(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=r.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,s=n.default.Children.only(i),u=(0,o.default)(a,l);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),r}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=l(e,["text","onCopy","options","children"]),o=n.default.Children.only(t);return n.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}])&&u(r.prototype,a),c&&u(r,c),t}(n.default.PureComponent);t.CopyToClipboard=m,j(m,"defaultProps",{onCopy:void 0,options:void 0})},2084:function(e,t,r){"use strict";var n=r(2085),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,c,i,l,s,u=!1;t||(t={}),r=t.debug||!1;try{if(c=n(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},2085:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2766:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r(3),o=r(1),a=r(193),c=r(2082),i=r(12),l=r(68),s=r(98),u=r(269),p=r(1785),d=r(407),b=r(1805),f=r(1678),j=r(1682),m=r(1002),x=r(47),h=r(671),y=r(41),O=r(1820),g=r(0),v=["primary","secondary","info","success","warning","error"],C=["lighter","light","main","dark","darker"],w=["100","200","300","400","500","600","700","800","900"],k=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function S(){var e=Object(l.a)(),t=Object(a.b)().enqueueSnackbar,r=Object(o.useState)(null),c=Object(n.a)(r,2)[1],i=function(e){c(e),e&&t("Copied ".concat(e),{variant:"success"})};return Object(g.jsx)(h.a,{title:"Foundations: Color",children:Object(g.jsxs)(k,{children:[Object(g.jsx)(u.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(g.jsx)(p.a,{children:Object(g.jsx)(O.a,{heading:"Color",links:[{name:"Components",href:x.d.components},{name:"Color"}],moreLink:["https://mui.com/customization/color","https://colors.eva.design"]})})}),Object(g.jsxs)(p.a,{children:[v.map((function(t){return Object(g.jsxs)(u.a,{sx:{mb:5},children:[Object(g.jsx)(d.a,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:t}),Object(g.jsx)(u.a,{sx:{display:"grid",gap:2.5,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:C.map((function(r){return Object(g.jsx)(R,{variation:r,hexColor:e.palette[t][r],onCopy:function(){return i(e.palette[t][r])}},r)}))})]},t)})),Object(g.jsx)(d.a,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:"Grey"}),Object(g.jsx)(u.a,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:w.map((function(t){return Object(g.jsx)(R,{variation:t,hexColor:e.palette.grey[t],onCopy:function(){return i(e.palette.grey[t])}},t)}))})]})]})})}function R(e){var t=e.hexColor,r=e.variation,n=e.onCopy;return Object(g.jsxs)(b.a,{sx:{p:1},children:[Object(g.jsx)(c.CopyToClipboard,{text:t,onCopy:n,children:Object(g.jsx)(f.a,{title:"Copy",children:Object(g.jsx)(j.a,{sx:{top:8,right:8,position:"absolute",color:function(e){return e.palette.getContrastText(t)}},children:Object(g.jsx)(y.a,{icon:"eva:copy-fill",width:20,height:20})})})}),Object(g.jsx)(u.a,{sx:{bgcolor:t,paddingTop:"75%",borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.grey[50012])}}}),Object(g.jsxs)(u.a,{sx:{py:2.5,px:1.5},children:[Object(g.jsx)(d.a,{variant:"subtitle1",sx:{textTransform:"capitalize"},children:r}),Object(g.jsxs)(m.a,{direction:"row",alignItems:"center",sx:{mt:1.5,mb:1},children:[Object(g.jsx)(d.a,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Hex"}),Object(g.jsx)(d.a,{variant:"body2",children:t})]}),Object(g.jsxs)(m.a,{direction:"row",alignItems:"center",children:[Object(g.jsx)(d.a,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Rgb"}),Object(g.jsx)(d.a,{variant:"body2",children:Object(s.e)(t).replace("rgb(","").replace(")","")})]})]})]})}}}]);
//# sourceMappingURL=41.f277ea6c.chunk.js.map