(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[97],{1819:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var i=e(4),r=e(25),c=e(136),a=e(27),o=e(407),s=e(1824),l=e(269),j=e(1681),d=e(0),u=["links","activeLast"];function h(n){var t,e=n.links,a=n.activeLast,j=void 0!==a&&a,h=Object(r.a)(n,u),x=null===(t=Object(c.last)(e))||void 0===t?void 0:t.name,f=e.map((function(n){return Object(d.jsx)(b,{link:n},n.name)})),O=e.map((function(n){return Object(d.jsx)("div",{children:n.name!==x?Object(d.jsx)(b,{link:n}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},n.name)}));return Object(d.jsx)(s.a,Object(i.a)(Object(i.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},h),{},{children:j?f:O}))}function b(n){var t=n.link,e=t.href,i=t.name,r=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:a.b,to:e||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}},1820:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var i=e(4),r=e(25),c=e(136),a=e(269),o=e(407),s=e(1681),l=e(1819),j=e(0),d=["links","action","heading","moreLink","sx"];function u(n){var t=n.links,e=n.action,u=n.heading,h=n.moreLink,b=void 0===h?[]:h,x=n.sx,f=Object(r.a)(n,d);return Object(j.jsxs)(a.a,{sx:Object(i.a)({mb:5},x),children:[Object(j.jsxs)(a.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(a.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(l.a,Object(i.a)({links:t},f))]}),e&&Object(j.jsx)(a.a,{sx:{flexShrink:0},children:e})]}),Object(j.jsx)(a.a,{sx:{mt:2},children:Object(c.isString)(b)?Object(j.jsx)(s.a,{href:b,target:"_blank",rel:"noopener",variant:"body2",children:b}):b.map((function(n){return Object(j.jsx)(s.a,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}},1823:function(n,t,e){"use strict";e.d(t,"a",(function(){return j})),e.d(t,"b",(function(){return d}));var i=e(4),r=e(98),c=e(1009),a=e(1825),o=e(269),s=e(407),l=e(0);function j(n){var t=n.title,e=n.sx,s=n.children;return Object(l.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return Object(r.a)(n.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(a.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(i.a)({p:5,minHeight:180},e),children:s})]})}function d(n){var t=n.title;return Object(l.jsx)(s.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2798:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return m}));var i=e(193),r=e(12),c=e(407),a=e(1682),o=e(544),s=e(269),l=e(1785),j=e(1843),d=e(47),u=e(671),h=e(41),b=e(1820),x=e(1823),f=e(0),O={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},v=Object(r.a)("div")((function(n){var t=n.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function m(){var n=Object(i.b)(),t=n.enqueueSnackbar,e=n.closeSnackbar,r=function(n){t(Object(f.jsxs)("div",{children:[Object(f.jsx)(c.a,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:n}),Object(f.jsxs)(c.a,{variant:"body2",sx:{color:"text.secondary"},children:["This is an ",n]})]}),{variant:n,action:function(n){return Object(f.jsx)(a.a,{size:"small",color:"inherit",onClick:function(){return e(n)},children:Object(f.jsx)(h.a,{icon:"eva:close-fill",width:24,height:24})})}})},m=function(n,i){t("This is an ".concat(n),{variant:n,anchorOrigin:i,action:function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{size:"small",color:"default"!==n?n:"primary",onClick:function(){alert("I belong to snackbar with key ".concat(t))},children:"Alert"}),Object(f.jsx)(o.a,{size:"small",color:"inherit",onClick:function(){return e(t)},children:"Dismiss"})]})}})};return Object(f.jsx)(u.a,{title:"Components: Snackbar",children:Object(f.jsxs)(v,{children:[Object(f.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(l.a,{children:Object(f.jsx)(b.a,{heading:"Snackbar",links:[{name:"Components",href:d.d.components},{name:"Snackbar"}],moreLink:["https://mui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),Object(f.jsx)(l.a,{children:Object(f.jsxs)(j.a,{columns:{xs:1,md:2},spacing:3,children:[Object(f.jsxs)(x.a,{title:"Simple",sx:O,children:[Object(f.jsx)(o.a,{variant:"contained",color:"inherit",onClick:function(){return t("This is an default")},children:"Default"}),Object(f.jsx)(o.a,{variant:"contained",color:"info",onClick:function(){return t("This is an info",{variant:"info"})},children:"Info"}),Object(f.jsx)(o.a,{variant:"contained",color:"success",onClick:function(){return t("This is an success",{variant:"success"})},children:"Success"}),Object(f.jsx)(o.a,{variant:"contained",color:"warning",onClick:function(){return t("This is an warning",{variant:"warning"})},children:"Warning"}),Object(f.jsx)(o.a,{variant:"contained",color:"error",onClick:function(){return t("This is an error",{variant:"error"})},children:"Error"})]}),Object(f.jsxs)(x.a,{title:"With Close",sx:O,children:[Object(f.jsx)(o.a,{variant:"contained",color:"inherit",onClick:function(){return r("default")},children:"Default"}),Object(f.jsx)(o.a,{variant:"contained",color:"info",onClick:function(){return r("info")},children:"Info"}),Object(f.jsx)(o.a,{variant:"contained",color:"success",onClick:function(){return r("success")},children:"Success"}),Object(f.jsx)(o.a,{variant:"contained",color:"warning",onClick:function(){return r("warning")},children:"Warning"}),Object(f.jsx)(o.a,{variant:"contained",color:"error",onClick:function(){return r("error")},children:"Error"})]}),Object(f.jsxs)(x.a,{title:"With Action",sx:O,children:[Object(f.jsx)(o.a,{variant:"contained",color:"inherit",onClick:function(){return m("default")},children:"Default"}),Object(f.jsx)(o.a,{variant:"contained",color:"info",onClick:function(){return m("info")},children:"Info"}),Object(f.jsx)(o.a,{variant:"contained",color:"success",onClick:function(){return m("success")},children:"Success"}),Object(f.jsx)(o.a,{variant:"contained",color:"warning",onClick:function(){return m("warning")},children:"Warning"}),Object(f.jsx)(o.a,{variant:"contained",color:"error",onClick:function(){return m("error")},children:"Error"})]}),Object(f.jsxs)(x.a,{title:"anchorOrigin",sx:O,children:[Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default")},children:"Top Right"}),Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),Object(f.jsx)(o.a,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})]})})]})})}}}]);
//# sourceMappingURL=97.d43bbe38.chunk.js.map