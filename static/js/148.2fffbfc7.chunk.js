(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[148],{1837:function(e,t,o){"use strict";o.d(t,"e",(function(){return p})),o.d(t,"f",(function(){return d})),o.d(t,"c",(function(){return m})),o.d(t,"b",(function(){return O})),o.d(t,"a",(function(){return f})),o.d(t,"d",(function(){return w}));var n=o(4),a=o(25),r=o(1822),c=o(12),i=o(0),s=["children","onClose"],b=Object(c.a)(r.h)((function(e){var t=e.theme,o="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function p(e){var t=e.children,o=e.onClose,r=Object(a.a)(e,s);return Object(i.jsx)(b,Object(n.a)(Object(n.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},r),{},{children:t}))}var l=["sx"],u=Object(c.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function d(e){var t=e.sx,o=Object(a.a)(e,l);return Object(i.jsx)(u,{sx:t,children:Object(i.jsx)(r.i,Object(n.a)({maxWidth:100,unit:"imperial"},o))})}var h=["onClick"],j=Object(c.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function m(e){var t=e.onClick,o=Object(a.a)(e,h);return Object(i.jsx)(r.f,Object(n.a)(Object(n.a)({},o),{},{children:Object(i.jsx)(j,{viewBox:"0 0 24 24",onClick:t,children:Object(i.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var g=Object(c.a)(r.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function O(e){var t=Object.assign({},e);return Object(i.jsx)(g,Object(n.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var x=Object(c.a)(r.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function f(e){var t=Object.assign({},e);return Object(i.jsx)(x,Object(n.a)({},t))}var v=Object(c.a)(r.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function w(e){var t=Object.assign({},e);return Object(i.jsx)(v,Object(n.a)({},t))}},2894:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return v}));var n=o(4),a=o(3),r=o(25),c=o(1822),i=o(1),s=o(1837),b=o(12),p=o(407),l=o(1763),u=o(1803),d=o(1772),h=o(148),j=o(0),m=["themes","selectTheme","onChangeTheme"],g=Object(b.a)("div")((function(e){var t=e.theme;return Object(n.a)(Object(n.a)({},Object(h.a)().bgBlur({color:t.palette.grey[900]})),{},{zIndex:9,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),borderRadius:t.shape.borderRadius})}));function O(e){var t=e.themes,o=e.selectTheme,a=e.onChangeTheme,c=Object(r.a)(e,m);return Object(j.jsxs)(g,{children:[Object(j.jsx)(p.a,{gutterBottom:!0,variant:"subtitle2",sx:{color:"common.white"},children:"Select Theme:"}),Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({value:o,onChange:a},c),{},{children:Object.keys(t).map((function(e){return Object(j.jsx)(u.a,{value:e,control:Object(j.jsx)(d.a,{size:"small"}),label:e,sx:{color:"common.white",textTransform:"capitalize"}},e)}))}))]})}var x=Object(i.memo)(O),f=["themes"];function v(e){var t=e.themes,o=Object(r.a)(e,f),b=Object(i.useState)("outdoors"),p=Object(a.a)(b,2),l=p[0],u=p[1],d=Object(i.useState)({latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0}),h=Object(a.a)(d,2),m=h[0],g=h[1],O=Object(i.useCallback)((function(e){return u(e.target.value)}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(c.l,Object(n.a)(Object(n.a)(Object(n.a)({},m),{},{onViewportChange:g,mapStyle:t[l]},o),{},{children:[Object(j.jsx)(s.f,{}),Object(j.jsx)(s.d,{}),Object(j.jsx)(s.a,{}),Object(j.jsx)(s.b,{})]})),Object(j.jsx)(x,{themes:t,selectTheme:l,onChangeTheme:O})]})}}}]);
//# sourceMappingURL=148.2fffbfc7.chunk.js.map