(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[101],{1819:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var n=i(4),c=i(25),r=i(136),a=i(27),l=i(407),s=i(1824),o=i(269),d=i(1681),j=i(0),h=["links","activeLast"];function x(e){var t,i=e.links,a=e.activeLast,d=void 0!==a&&a,x=Object(c.a)(e,h),O=null===(t=Object(r.last)(i))||void 0===t?void 0:t.name,m=i.map((function(e){return Object(j.jsx)(b,{link:e},e.name)})),p=i.map((function(e){return Object(j.jsx)("div",{children:e.name!==O?Object(j.jsx)(b,{link:e}):Object(j.jsx)(l.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(j.jsx)(s.a,Object(n.a)(Object(n.a)({separator:Object(j.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},x),{},{children:d?m:p}))}function b(e){var t=e.link,i=t.href,n=t.name,c=t.icon;return Object(j.jsxs)(d.a,{variant:"body2",component:a.b,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(j.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),n]},n)}},1820:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i(4),c=i(25),r=i(136),a=i(269),l=i(407),s=i(1681),o=i(1819),d=i(0),j=["links","action","heading","moreLink","sx"];function h(e){var t=e.links,i=e.action,h=e.heading,x=e.moreLink,b=void 0===x?[]:x,O=e.sx,m=Object(c.a)(e,j);return Object(d.jsxs)(a.a,{sx:Object(n.a)({mb:5},O),children:[Object(d.jsxs)(a.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(a.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:h}),Object(d.jsx)(o.a,Object(n.a)({links:t},m))]}),i&&Object(d.jsx)(a.a,{sx:{flexShrink:0},children:i})]}),Object(d.jsx)(a.a,{sx:{mt:2},children:Object(r.isString)(b)?Object(d.jsx)(s.a,{href:b,target:"_blank",rel:"noopener",variant:"body2",children:b}):b.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return j}));var n=i(4),c=i(98),r=i(1009),a=i(1825),l=i(269),s=i(407),o=i(0);function d(e){var t=e.title,i=e.sx,s=e.children;return Object(o.jsxs)(r.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(o.jsx)(a.a,{title:t}),Object(o.jsx)(l.a,{sx:Object(n.a)({p:5,minHeight:180},i),children:s})]})}function j(e){var t=e.title;return Object(o.jsx)(s.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2803:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return k}));var n=i(1843),c=i(12),r=i(269),a=i(1785),l=i(1678),s=i(1682),o=i(1791),d=i(544),j=i(1654),h=i(2076),x=i(47),b=i(671),O=i(41),m=i(78),p=i(1820),u=i(1823),f=i(0),g="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n",v=Object(c.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),A={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function k(){return Object(f.jsx)(b.a,{title:"Components: Tooltip",children:Object(f.jsxs)(v,{children:[Object(f.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(a.a,{children:Object(f.jsx)(p.a,{heading:"Tooltip",links:[{name:"Components",href:x.d.components},{name:"Tooltip"}],moreLink:"https://mui.com/components/tooltips"})})}),Object(f.jsx)(a.a,{children:Object(f.jsxs)(n.a,{columns:{xs:1,md:2},spacing:3,children:[Object(f.jsxs)(u.a,{title:"Simple",sx:A,children:[Object(f.jsx)(l.a,{title:"Delete",children:Object(f.jsx)(s.a,{children:Object(f.jsx)(O.a,{icon:"eva:trash-2-outline",width:24,height:24})})}),Object(f.jsx)(l.a,{title:"Add",children:Object(f.jsx)(o.a,{children:Object(f.jsx)(O.a,{icon:"eva:plus-fill",width:24,height:24})})}),Object(f.jsx)(l.a,{title:"Delete",children:Object(f.jsx)(s.a,{color:"info",children:Object(f.jsx)(O.a,{icon:"eva:trash-2-outline",width:24,height:24})})}),Object(f.jsx)(l.a,{title:"Add",children:Object(f.jsx)(m.b,{color:"info",children:Object(f.jsx)(O.a,{icon:"eva:plus-fill",width:24,height:24})})}),Object(f.jsx)(l.a,{title:"Add",children:Object(f.jsx)(d.a,{variant:"outlined",color:"info",children:"Button"})})]}),Object(f.jsx)(u.a,{title:"Arrow",sx:A,children:Object(f.jsx)(l.a,{title:"Add",arrow:!0,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(O.a,{icon:"eva:plus-fill",width:24,height:24})})})}),Object(f.jsxs)(u.a,{title:"Variable Width",sx:A,children:[Object(f.jsx)(l.a,{title:g,children:Object(f.jsx)(d.a,{color:"inherit",children:"Default Width [300px]"})}),Object(f.jsx)(l.a,{title:g,sx:{maxWidth:500},children:Object(f.jsx)(d.a,{color:"inherit",children:"Custom Width [500px]"})}),Object(f.jsx)(l.a,{title:g,sx:{maxWidth:"none"},children:Object(f.jsx)(d.a,{color:"inherit",children:"No wrapping"})})]}),Object(f.jsxs)(u.a,{title:"Transitions",sx:A,children:[Object(f.jsx)(l.a,{title:"Add",children:Object(f.jsx)(d.a,{color:"inherit",children:"Grow"})}),Object(f.jsx)(l.a,{TransitionComponent:j.a,TransitionProps:{timeout:600},title:"Add",children:Object(f.jsx)(d.a,{color:"inherit",children:"Fade"})}),Object(f.jsx)(l.a,{TransitionComponent:h.a,title:"Add",children:Object(f.jsx)(d.a,{color:"inherit",children:"Zoom"})})]}),Object(f.jsxs)(u.a,{title:"Positioned",sx:A,children:[Object(f.jsx)(l.a,{title:"Add",placement:"top-start",children:Object(f.jsx)(d.a,{color:"inherit",children:"top-start"})}),Object(f.jsx)(l.a,{title:"Add",placement:"top",children:Object(f.jsx)(d.a,{color:"inherit",children:"top"})}),Object(f.jsx)(l.a,{title:"Add",placement:"top-end",children:Object(f.jsx)(d.a,{color:"inherit",children:"top-end"})}),Object(f.jsx)(l.a,{title:"Add",placement:"left-start",children:Object(f.jsx)(d.a,{color:"inherit",children:"left-start"})}),Object(f.jsx)(l.a,{title:"Add",placement:"left",children:Object(f.jsx)(d.a,{color:"inherit",children:"left"})}),Object(f.jsx)(l.a,{title:"Add",placement:"left-end",children:Object(f.jsx)(d.a,{color:"inherit",children:"left-end"})}),Object(f.jsx)(l.a,{title:"Add",placement:"right-start",children:Object(f.jsx)(d.a,{color:"inherit",children:"right-start"})}),Object(f.jsx)(l.a,{title:"Add",placement:"right",children:Object(f.jsx)(d.a,{color:"inherit",children:"right"})}),Object(f.jsx)(l.a,{title:"Add",placement:"right-end",children:Object(f.jsx)(d.a,{color:"inherit",children:"right-end"})}),Object(f.jsx)(l.a,{title:"Add",placement:"bottom-start",children:Object(f.jsx)(d.a,{color:"inherit",children:"bottom-start"})}),Object(f.jsx)(l.a,{title:"Add",placement:"bottom",children:Object(f.jsx)(d.a,{color:"inherit",children:"bottom"})}),Object(f.jsx)(l.a,{title:"Add",placement:"bottom-end",children:Object(f.jsx)(d.a,{color:"inherit",children:"bottom-end"})})]})]})})]})})}}}]);
//# sourceMappingURL=101.b3f4ebaf.chunk.js.map