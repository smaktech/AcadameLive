(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[110],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var i=a(4),r=a(25),n=a(136),c=a(27),o=a(407),s=a(1824),l=a(269),u=a(1681),d=a(0),b=["links","activeLast"];function j(e){var t,a=e.links,c=e.activeLast,u=void 0!==c&&c,j=Object(r.a)(e,b),p=null===(t=Object(n.last)(a))||void 0===t?void 0:t.name,h=a.map((function(e){return Object(d.jsx)(m,{link:e},e.name)})),x=a.map((function(e){return Object(d.jsx)("div",{children:e.name!==p?Object(d.jsx)(m,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return Object(d.jsx)(s.a,Object(i.a)(Object(i.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},j),{},{children:u?h:x}))}function m(e){var t=e.link,a=t.href,i=t.name,r=t.icon;return Object(d.jsxs)(u.a,{variant:"body2",component:c.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(4),r=a(25),n=a(136),c=a(269),o=a(407),s=a(1681),l=a(1819),u=a(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,j=e.moreLink,m=void 0===j?[]:j,p=e.sx,h=Object(r.a)(e,d);return Object(u.jsxs)(c.a,{sx:Object(i.a)({mb:5},p),children:[Object(u.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(u.jsx)(l.a,Object(i.a)({links:t},h))]}),a&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(u.jsx)(c.a,{sx:{mt:2},children:Object(n.isString)(m)?Object(u.jsx)(s.a,{href:m,target:"_blank",rel:"noopener",variant:"body2",children:m}):m.map((function(e){return Object(u.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,a){"use strict";var i=a(16),r=a(3),n=a(10),c=a(2),o=a(13),s=a(1),l=(a(99),a(7),a(5)),u=a(300),d=a(12),b=a(18),j=a(407),m=a(98),p=a(59),h=a(0),x=Object(p.a)(Object(h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=a(1675),O=Object(d.a)(g.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(m.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(m.c)(t.palette.grey[600],.12)})})})),v=Object(d.a)(x)({width:24,height:16});var f=function(e){var t=e;return Object(h.jsx)("li",{children:Object(h.jsx)(O,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(h.jsx)(v,{ownerState:t})}))})},y=a(179),k=a(192);function w(e){return Object(y.a)("MuiBreadcrumbs",e)}var S=Object(k.a)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],q=Object(d.a)(j.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(n.a)({},"& .".concat(S.li),t.li),t.root]}})({}),B=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function L(e,t,a,i){return e.reduce((function(r,n,c){return c<e.length-1?r=r.concat(n,Object(h.jsx)(R,{"aria-hidden":!0,className:t,ownerState:i,children:a},"separator-".concat(c))):r.push(n),r}),[])}var H=s.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),n=a.children,d=a.className,j=a.component,m=void 0===j?"nav":j,p=a.expandText,x=void 0===p?"Show path":p,g=a.itemsAfterCollapse,O=void 0===g?1:g,v=a.itemsBeforeCollapse,y=void 0===v?1:v,k=a.maxItems,S=void 0===k?8:k,R=a.separator,H=void 0===R?"/":R,T=Object(o.a)(a,C),M=s.useState(!1),z=Object(r.a)(M,2),I=z[0],N=z[1],A=Object(c.a)({},a,{component:m,expanded:I,expandText:x,itemsAfterCollapse:O,itemsBeforeCollapse:y,maxItems:S,separator:H}),Q=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(A),W=s.useRef(null),E=s.Children.toArray(n).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(h.jsx)("li",{className:Q.li,children:e},"child-".concat(t))}));return Object(h.jsx)(q,Object(c.a)({ref:t,component:m,color:"text.secondary",className:Object(l.a)(Q.root,d),ownerState:A},T,{children:Object(h.jsx)(B,{className:Q.ol,ref:W,ownerState:A,children:L(I||S&&E.length<=S?E:function(e){return y+O>=e.length?e:[].concat(Object(i.a)(e.slice(0,y)),[Object(h.jsx)(f,{"aria-label":x,onClick:function(){N(!0);var e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(i.a)(e.slice(e.length-O,e.length)))}(E),Q.separator,H,A)})}))}));t.a=H},2767:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var i=a(12),r=a(269),n=a(1785),c=a(1781),o=a(407),s=a(1002),l=a(1009),u=a(47),d=a(109),b=a(671),j=a(1820),m=a(0),p=[{label:"h1. Heading",variant:"h1"},{label:"h2. Heading",variant:"h2"},{label:"h3. Heading",variant:"h3"},{label:"h4. Heading",variant:"h4"},{label:"h5. Heading",variant:"h5"},{label:"h6. Heading",variant:"h6"},{label:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle1"},{label:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle2"},{label:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body1"},{label:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body2"},{label:"caption text",variant:"caption"},{label:"overline text",variant:"overline"},{label:"Button",variant:"button"}],h=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function x(){return Object(m.jsx)(b.a,{title:"Foundations: Typography",children:Object(m.jsxs)(h,{children:[Object(m.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(n.a,{children:Object(m.jsx)(j.a,{heading:"Typography",links:[{name:"Components",href:u.d.components},{name:"Typography"}],moreLink:"https://mui.com/components/typography"})})}),Object(m.jsxs)(n.a,{children:[Object(m.jsxs)(c.a,{container:!0,spacing:3,children:[Object(m.jsx)(c.a,{item:!0,xs:12,md:3,children:Object(m.jsx)(o.a,{variant:"h6",paragraph:!0,children:"Default Text"})}),Object(m.jsx)(c.a,{item:!0,xs:12,md:9,children:Object(m.jsx)(s.a,{spacing:3,children:p.map((function(e){return Object(m.jsx)(g,{font:e},e.variant)}))})})]}),Object(m.jsx)(r.a,{sx:{height:40}}),Object(m.jsxs)(c.a,{container:!0,spacing:3,children:[Object(m.jsx)(c.a,{item:!0,xs:12,md:3,children:Object(m.jsx)(o.a,{variant:"h6",paragraph:!0,children:"Colors Text"})}),Object(m.jsx)(c.a,{item:!0,xs:12,md:9,children:Object(m.jsxs)(s.a,{spacing:3,children:[["primary","secondary","disabled"].map((function(e){return Object(m.jsxs)(l.a,{variant:"outlined",sx:{p:3,borderRadius:1},children:[Object(m.jsxs)(o.a,{gutterBottom:!0,variant:"subtitle1",sx:{color:"text.".concat(e)},children:["text ",e]}),Object(m.jsx)(o.a,{gutterBottom:!0,variant:"body2",sx:{color:"text.".concat(e)},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)})),["primary","secondary","info","warning","error"].map((function(e){return Object(m.jsxs)(l.a,{variant:"outlined",sx:{p:3,borderRadius:1},children:[Object(m.jsx)(o.a,{gutterBottom:!0,variant:"subtitle1",sx:{color:"".concat(e,".main")},children:e}),Object(m.jsx)(o.a,{gutterBottom:!0,variant:"body2",sx:{color:"".concat(e,".main")},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)}))]})})]})]})]})})}function g(e){var t=e.font,a=function(e){return Object(d.a)(e)},i=t.variant,r=t.label,n=a(i),c=n.fontSize,s=n.lineHeight,u=n.fontWeight,b=a(i).letterSpacing?"/ spacing: ".concat(a(i).letterSpacing):null;return Object(m.jsxs)(l.a,{variant:"outlined",sx:{p:3,borderRadius:1},children:[Object(m.jsx)(o.a,{variant:i,gutterBottom:!0,children:r}),Object(m.jsxs)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:["size: ",c," / l-height: ",s," / weight:",u,b]})]})}}}]);
//# sourceMappingURL=110.0b95b04f.chunk.js.map