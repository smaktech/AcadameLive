(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[104],{1819:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var i=t(4),l=t(25),c=t(136),n=t(27),s=t(407),r=t(1824),o=t(269),j=t(1681),b=t(0),h=["links","activeLast"];function d(e){var a,t=e.links,n=e.activeLast,j=void 0!==n&&n,d=Object(l.a)(e,h),O=null===(a=Object(c.last)(t))||void 0===a?void 0:a.name,v=t.map((function(e){return Object(b.jsx)(x,{link:e},e.name)})),m=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==O?Object(b.jsx)(x,{link:e}):Object(b.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(b.jsx)(r.a,Object(i.a)(Object(i.a)({separator:Object(b.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},d),{},{children:j?v:m}))}function x(e){var a=e.link,t=a.href,i=a.name,l=a.icon;return Object(b.jsxs)(j.a,{variant:"body2",component:n.b,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&Object(b.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),i]},i)}},1820:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var i=t(4),l=t(25),c=t(136),n=t(269),s=t(407),r=t(1681),o=t(1819),j=t(0),b=["links","action","heading","moreLink","sx"];function h(e){var a=e.links,t=e.action,h=e.heading,d=e.moreLink,x=void 0===d?[]:d,O=e.sx,v=Object(l.a)(e,b);return Object(j.jsxs)(n.a,{sx:Object(i.a)({mb:5},O),children:[Object(j.jsxs)(n.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:h}),Object(j.jsx)(o.a,Object(i.a)({links:a},v))]}),t&&Object(j.jsx)(n.a,{sx:{flexShrink:0},children:t})]}),Object(j.jsx)(n.a,{sx:{mt:2},children:Object(c.isString)(x)?Object(j.jsx)(r.a,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return b}));var i=t(4),l=t(98),c=t(1009),n=t(1825),s=t(269),r=t(407),o=t(0);function j(e){var a=e.title,t=e.sx,r=e.children;return Object(o.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(l.a)(e.palette.grey[500],.04)}},children:[a&&Object(o.jsx)(n.a,{title:a}),Object(o.jsx)(s.a,{sx:Object(i.a)({p:5,minHeight:180},t),children:r})]})}function b(e){var a=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:a})}},2872:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return D}));var i=t(12),l=t(269),c=t(1785),n=t(1805),s=t(1825),r=t(1808),o=t(47),j=t(671),b=t(1820),h=t(1002),d=t(1009),x=t(2263),O=t(1010),v=t(41),m=t(1823),f=t(0),g={p:2,display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function p(){var e=function(){console.info("You clicked the delete icon.")},a=function(){console.info("You clicked the Chip.")};return Object(f.jsxs)(h.a,{spacing:3,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Base"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:g,children:[Object(f.jsx)(x.a,{label:"Basic"}),Object(f.jsx)(x.a,{label:"Disabled",disabled:!0}),Object(f.jsx)(x.a,{avatar:Object(f.jsx)(O.a,{children:"B"}),label:"Clickable",onClick:a}),Object(f.jsx)(x.a,{avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),label:"Deletable",onDelete:e}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Clickable deletable",onClick:a,onDelete:e}),Object(f.jsx)(x.a,{label:"Custom delete icon",onClick:a,onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{label:"Clickable Link",component:"a",href:"#chip",clickable:!0}),Object(f.jsx)(x.a,{avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{label:"Deletable primary",onDelete:e,color:"primary"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Colors"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:g,children:[Object(f.jsx)(x.a,{label:"Default deletable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{clickable:!0,label:"Default clickable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{label:"Primary deletable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{clickable:!0,label:"Primary clickable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:e,color:"secondary",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",onDelete:e,color:"secondary",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:e,color:"info",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",onDelete:e,color:"info",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:e,color:"success"}),Object(f.jsx)(x.a,{clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",onDelete:e,color:"success"}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:e,color:"warning"}),Object(f.jsx)(x.a,{clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",onDelete:e,color:"warning"}),Object(f.jsx)(x.a,{icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:e,color:"error"}),Object(f.jsx)(x.a,{clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",onDelete:e,color:"error"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Size"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:g,children:[Object(f.jsx)(x.a,{avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Normal",onDelete:e,color:"info"}),Object(f.jsx)(x.a,{size:"small",avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Small",onDelete:e,color:"info"})]})]})]})}var k={p:2,display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function u(){var e=function(){console.info("You clicked the delete icon.")},a=function(){console.info("You clicked the Chip.")};return Object(f.jsxs)(h.a,{spacing:3,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Base"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:k,children:[Object(f.jsx)(x.a,{variant:"outlined",label:"Basic"}),Object(f.jsx)(x.a,{variant:"outlined",label:"Disabled",disabled:!0}),Object(f.jsx)(x.a,{variant:"outlined",avatar:Object(f.jsx)(O.a,{children:"B"}),label:"Clickable",onClick:a}),Object(f.jsx)(x.a,{variant:"outlined",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),label:"Deletable",onDelete:e}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Clickable deletable",onClick:a,onDelete:e}),Object(f.jsx)(x.a,{variant:"outlined",label:"Custom delete icon",onClick:a,onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",label:"Clickable Link",component:"a",href:"#chip",clickable:!0}),Object(f.jsx)(x.a,{variant:"outlined",avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",label:"Deletable primary",onDelete:e,color:"primary"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Colors"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:k,children:[Object(f.jsx)(x.a,{variant:"outlined",label:"Default deletable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,label:"Default clickable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",label:"Primary deletable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,label:"Primary clickable",avatar:Object(f.jsx)(O.a,{alt:"Natacha",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"}),color:"primary",onDelete:e,deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:e,color:"secondary",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",onDelete:e,color:"secondary",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:e,color:"info",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",onDelete:e,color:"info",deleteIcon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:checkmark-fill"})}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:e,color:"success"}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",onDelete:e,color:"success"}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:e,color:"warning"}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",onDelete:e,color:"warning"}),Object(f.jsx)(x.a,{variant:"outlined",icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:e,color:"error"}),Object(f.jsx)(x.a,{variant:"outlined",clickable:!0,icon:Object(f.jsx)(v.a,{width:24,height:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",onDelete:e,color:"error"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(m.b,{title:"Size"}),Object(f.jsxs)(d.a,{variant:"outlined",sx:k,children:[Object(f.jsx)(x.a,{variant:"outlined",avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Normal",onDelete:e,color:"info"}),Object(f.jsx)(x.a,{variant:"outlined",size:"small",avatar:Object(f.jsx)(O.a,{children:"M"}),label:"Small",onDelete:e,color:"info"})]})]})]})}var w=Object(i.a)("div")((function(e){var a=e.theme;return{paddingTop:a.spacing(11),paddingBottom:a.spacing(15)}}));function D(){return Object(f.jsx)(j.a,{title:"Components: Chip",children:Object(f.jsxs)(w,{children:[Object(f.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(c.a,{children:Object(f.jsx)(b.a,{heading:"Chip",links:[{name:"Components",href:o.d.components},{name:"Chip"}],moreLink:"https://mui.com/components/chips"})})}),Object(f.jsx)(c.a,{children:Object(f.jsxs)(l.a,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[Object(f.jsxs)(n.a,{children:[Object(f.jsx)(s.a,{title:"Filled"}),Object(f.jsx)(r.a,{children:Object(f.jsx)(p,{})})]}),Object(f.jsxs)(n.a,{children:[Object(f.jsx)(s.a,{title:"Outlined"}),Object(f.jsx)(r.a,{children:Object(f.jsx)(u,{})})]})]})})]})})}}}]);
//# sourceMappingURL=104.33269a06.chunk.js.map