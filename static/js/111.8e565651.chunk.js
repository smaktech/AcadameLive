(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[111],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),a=n(25),r=n(136),c=n(27),l=n(407),s=n(1824),o=n(269),d=n(1681),u=n(0),h=["links","activeLast"];function b(e){var t,n=e.links,c=e.activeLast,d=void 0!==c&&c,b=Object(a.a)(e,h),m=null===(t=Object(r.last)(n))||void 0===t?void 0:t.name,f=n.map((function(e){return Object(u.jsx)(j,{link:e},e.name)})),x=n.map((function(e){return Object(u.jsx)("div",{children:e.name!==m?Object(u.jsx)(j,{link:e}):Object(u.jsx)(l.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:m})},e.name)}));return Object(u.jsx)(s.a,Object(i.a)(Object(i.a)({separator:Object(u.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:d?f:x}))}function j(e){var t=e.link,n=t.href,i=t.name,a=t.icon;return Object(u.jsxs)(d.a,{variant:"body2",component:c.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(u.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(4),a=n(25),r=n(136),c=n(269),l=n(407),s=n(1681),o=n(1819),d=n(0),u=["links","action","heading","moreLink","sx"];function h(e){var t=e.links,n=e.action,h=e.heading,b=e.moreLink,j=void 0===b?[]:b,m=e.sx,f=Object(a.a)(e,u);return Object(d.jsxs)(c.a,{sx:Object(i.a)({mb:5},m),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:h}),Object(d.jsx)(o.a,Object(i.a)({links:t},f))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(j)?Object(d.jsx)(s.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1821:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return d}));var i=n(136),a=n(1829),r=n.n(a);function c(e){return r()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function l(e){return r()(e/100).format("0.0%")}function s(e){return r()(e).format()}function o(e){return Object(i.replace)(r()(e).format("0.00a"),".00","")}function d(e){return r()(e).format("0.0 b")}},2875:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var i=n(12),a=n(269),r=n(1785),c=n(1002),l=n(1805),s=n(1825),o=n(47),d=n(671),u=n(1820),h=n(2234),b=n(1682),j=n(350),m=n(41),f=n(0),x=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.getValue(e.id,"firstName")||""," ").concat(e.getValue(e.id,"lastName")||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return Object(f.jsx)(b.a,{children:Object(f.jsx)(m.a,{icon:"eva:more-vertical-fill",sx:{width:20,height:20}})})}}];function g(){return Object(f.jsx)(h.a,{columns:x,rows:j.v,checkboxSelection:!0,disableSelectionOnClick:!0})}var O=n(3),p=n(4),v=n(1),w=n(68),y=n(407),k=n(1962),N=n(1991),C=n(561),S=n(1821),I=n(545),V=n(687);var L=[{field:"id",hide:!0},{field:"avatar",headerName:"Avatar",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,align:"center",renderCell:function(e){var t=e.getValue(e.id,"name");return Object(f.jsx)(V.a,{color:Object(C.a)(t).color,sx:{width:36,height:36},children:Object(C.a)(t).name})}},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:function(e){var t=e.getValue(e.id,"email");return Object(f.jsx)(y.a,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:t})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",width:200,align:"right",headerAlign:"right"},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){var t=e.getValue(e.id,"rating");return Object(f.jsx)(k.a,{size:"small",value:t,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",width:120,valueOptions:["online","away","busy"],renderCell:function(e){return function(e){var t="light"===Object(w.a)().palette.mode;return Object(f.jsx)(I.a,{variant:t?"ghost":"filled",color:("busy"===e?"error":"away"===e&&"warning")||"success",sx:{textTransform:"capitalize",mx:"auto"},children:e})}(e.getValue(e.id,"status"))}},{field:"isAdmin",type:"boolean",width:120,renderCell:function(e){var t=e.getValue(e.id,"isAdmin");return Object(f.jsx)(c.a,{alignItems:"center",sx:{width:1,textAlign:"center"},children:t?Object(f.jsx)(m.a,{icon:"eva:checkmark-circle-2-fill",sx:{width:20,height:20,color:"primary.main"}}):"-"})}},{field:"performance",type:"number",headerName:"Performance",width:160,renderCell:function(e){var t=e.getValue(e.id,"performance");return Object(f.jsxs)(c.a,{direction:"row",alignItems:"center",sx:{px:2,width:1,height:1},children:[Object(f.jsx)(N.a,{value:t,variant:"determinate",color:(t<30?"error":t>30&&t<70&&"warning")||"primary",sx:{width:1,height:6}}),Object(f.jsx)(y.a,{variant:"caption",sx:{width:90},children:Object(S.d)(t)})]})}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var t=e.row.id;return Object(f.jsx)(b.a,{onClick:function(){console.log("selectedID",t)},children:Object(f.jsx)(m.a,{icon:"eva:more-vertical-fill",sx:{width:20,height:20}})})}}];function A(e){var t=e.item,n=e.applyValue;return Object(f.jsx)(a.a,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:Object(f.jsx)(k.a,{size:"small",precision:.5,placeholder:"Filter value",value:Number(t.value),onChange:function(e,i){n(Object(p.a)(Object(p.a)({},t),{},{value:i}))}})})}function D(){var e=Object(v.useState)([]),t=Object(O.a)(e,2),n=t[0],i=t[1];if(L.length>0){var a=L.find((function(e){return"rating"===e.field})),r=L.findIndex((function(e){return"rating"===e.field})),c=Object(h.c)().map((function(e){return Object(p.a)(Object(p.a)({},e),{},{InputComponent:A})}));L[r]=Object(p.a)(Object(p.a)({},a),{},{filterOperators:c})}var l=j.v.filter((function(e){return n.includes(e.id)}));return console.log("selected",l),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a,{checkboxSelection:!0,disableSelectionOnClick:!0,rows:j.v,columns:L,pagination:!0,onSelectionModelChange:function(e){i(e)},components:{Toolbar:h.b}})})}var G=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function M(){return Object(f.jsx)(d.a,{title:"Components: DataGrid",children:Object(f.jsxs)(G,{children:[Object(f.jsx)(a.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(r.a,{children:Object(f.jsx)(u.a,{heading:"DataGrid",links:[{name:"Components",href:o.d.components},{name:"DataGrid"}],moreLink:"https://material-ui.com/components/data-grid"})})}),Object(f.jsx)(r.a,{children:Object(f.jsxs)(c.a,{spacing:5,children:[Object(f.jsxs)(l.a,{children:[Object(f.jsx)(s.a,{title:"Basic",sx:{mb:2}}),Object(f.jsx)(a.a,{sx:{height:390},children:Object(f.jsx)(g,{})})]}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(s.a,{title:"Custom",sx:{mb:2}}),Object(f.jsx)(a.a,{sx:{height:720},children:Object(f.jsx)(D,{})})]})]})})]})})}}}]);
//# sourceMappingURL=111.8e565651.chunk.js.map