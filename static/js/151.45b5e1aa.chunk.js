(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[151],{1837:function(t,e,o){"use strict";o.d(e,"e",(function(){return s})),o.d(e,"f",(function(){return d})),o.d(e,"c",(function(){return g})),o.d(e,"b",(function(){return O})),o.d(e,"a",(function(){return f})),o.d(e,"d",(function(){return w}));var a=o(4),n=o(25),r=o(1822),c=o(12),i=o(0),u=["children","onClose"],b=Object(c.a)(r.h)((function(t){var e=t.theme,o="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function s(t){var e=t.children,o=t.onClose,r=Object(n.a)(t,u);return Object(i.jsx)(b,Object(a.a)(Object(a.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},r),{},{children:e}))}var p=["sx"],l=Object(c.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function d(t){var e=t.sx,o=Object(n.a)(t,p);return Object(i.jsx)(l,{sx:e,children:Object(i.jsx)(r.i,Object(a.a)({maxWidth:100,unit:"imperial"},o))})}var j=["onClick"],h=Object(c.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function g(t){var e=t.onClick,o=Object(n.a)(t,j);return Object(i.jsx)(r.f,Object(a.a)(Object(a.a)({},o),{},{children:Object(i.jsx)(h,{viewBox:"0 0 24 24",onClick:e,children:Object(i.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var m=Object(c.a)(r.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function O(t){var e=Object.assign({},t);return Object(i.jsx)(m,Object(a.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var x=Object(c.a)(r.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function f(t){var e=Object.assign({},t);return Object(i.jsx)(x,Object(a.a)({},e))}var v=Object(c.a)(r.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function w(t){var e=Object.assign({},t);return Object(i.jsx)(v,Object(a.a)({},e))}},2897:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return x}));var a=o(4),n=o(3),r=o(25),c=o(1),i=o(1822),u=o(1837),b=o(12),s=o(1763),p=o(1803),l=o(1772),d=o(148),j=o(0),h=Object(b.a)("div")((function(t){var e=t.theme;return Object(a.a)(Object(a.a)({},Object(d.a)().bgBlur({color:e.palette.grey[900]})),{},{zIndex:9,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),borderRadius:e.shape.borderRadius})}));function g(t){var e=t.data,o=t.selectedCity,a=t.handleChange;return Object(j.jsx)(h,{children:e.map((function(t){return Object(j.jsx)(s.a,{value:o,onChange:function(e){return a(e,t)},children:Object(j.jsx)(p.a,{value:t.city,label:t.city,control:Object(j.jsx)(l.a,{size:"small"}),sx:{color:"common.white"}})},t.city)}))})}var m=Object(c.memo)(g),O=["data"];function x(t){var e=t.data,o=Object(r.a)(t,O),b=Object(c.useState)(e[2].city),s=Object(n.a)(b,2),p=s[0],l=s[1],d=Object(c.useState)({latitude:37.7751,longitude:-122.4193,zoom:10,bearing:0,pitch:0}),h=Object(n.a)(d,2),g=h[0],x=h[1],f=Object(c.useCallback)((function(t,e){var o=e.longitude,a=e.latitude;l(t.target.value),x({longitude:o,latitude:a,zoom:10,transitionInterpolator:new i.a({speed:1.2}),transitionDuration:"auto"})}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.l,Object(a.a)(Object(a.a)(Object(a.a)({},g),{},{onViewportChange:x,dragRotate:!1},o),{},{children:[Object(j.jsx)(u.f,{}),Object(j.jsx)(u.d,{}),Object(j.jsx)(u.a,{}),Object(j.jsx)(u.b,{}),Object(j.jsx)(m,{data:e,selectedCity:p,handleChange:f})]}))})}}}]);
//# sourceMappingURL=151.45b5e1aa.chunk.js.map