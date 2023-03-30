(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[86],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var i=n(4),a=n(25),r=n(136),c=n(27),s=n(407),o=n(1824),l=n(269),d=n(1681),j=n(0),b=["links","activeLast"];function x(e){var t,n=e.links,c=e.activeLast,d=void 0!==c&&c,x=Object(a.a)(e,b),u=null===(t=Object(r.last)(n))||void 0===t?void 0:t.name,O=n.map((function(e){return Object(j.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return Object(j.jsx)("div",{children:e.name!==u?Object(j.jsx)(h,{link:e}):Object(j.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:u})},e.name)}));return Object(j.jsx)(o.a,Object(i.a)(Object(i.a)({separator:Object(j.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},x),{},{children:d?O:m}))}function h(e){var t=e.link,n=t.href,i=t.name,a=t.icon;return Object(j.jsxs)(d.a,{variant:"body2",component:c.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(j.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),a=n(25),r=n(136),c=n(269),s=n(407),o=n(1681),l=n(1819),d=n(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,x=e.moreLink,h=void 0===x?[]:x,u=e.sx,O=Object(a.a)(e,j);return Object(d.jsxs)(c.a,{sx:Object(i.a)({mb:5},u),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.a,Object(i.a)({links:t},O))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(h)?Object(d.jsx)(o.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var i=n(4),a=n(98),r=n(1009),c=n(1825),s=n(269),o=n(407),l=n(0);function d(e){var t=e.title,n=e.sx,o=e.children;return Object(l.jsxs)(r.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(a.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(c.a,{title:t}),Object(l.jsx)(s.a,{sx:Object(i.a)({p:5,minHeight:180},n),children:o})]})}function j(e){var t=e.title;return Object(l.jsx)(o.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2771:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var i=n(3),a=n(1),r=n(12),c=n(269),s=n(1785),o=n(2722),l=n(2723),d=n(407),j=n(2724),b=n(350),x=n(671),h=n(41),u=n(47),O=n(1820),m=n(1823),p=n(0),v=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)(x.a,{title:"Components: Accordion",children:Object(p.jsxs)(v,{children:[Object(p.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(s.a,{children:Object(p.jsx)(O.a,{heading:"Accordion",links:[{name:"Components",href:u.d.components},{name:"Accordion"}],moreLink:"https://mui.com/components/accordion"})})}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(m.a,{title:"Simple",sx:{mb:5},children:b.a.map((function(e,t){return Object(p.jsxs)(o.a,{disabled:3===t,children:[Object(p.jsx)(l.a,{expandIcon:Object(p.jsx)(h.a,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:Object(p.jsx)(d.a,{variant:"subtitle1",children:e.heading})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{children:e.detail})})]},e.value)}))}),Object(p.jsx)(m.a,{title:"Controlled",children:b.a.map((function(e,t){return Object(p.jsxs)(o.a,{disabled:3===t,expanded:n===e.value,onChange:(i=e.value,function(e,t){r(!!t&&i)}),children:[Object(p.jsxs)(l.a,{expandIcon:Object(p.jsx)(h.a,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:[Object(p.jsx)(d.a,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),Object(p.jsx)(d.a,{sx:{color:"text.secondary"},children:e.subHeading})]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{children:e.detail})})]},e.value);var i}))})]})]})})}}}]);
//# sourceMappingURL=86.0f7c1d99.chunk.js.map