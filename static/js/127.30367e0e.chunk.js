(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[127],{1837:function(e,t,o){"use strict";o.d(t,"e",(function(){return p})),o.d(t,"f",(function(){return b})),o.d(t,"c",(function(){return y})),o.d(t,"b",(function(){return h})),o.d(t,"a",(function(){return j})),o.d(t,"d",(function(){return w}));var a=o(4),r=o(25),i=o(1822),n=o(12),l=o(0),c=["children","onClose"],s=Object(n.a)(i.h)((function(e){var t=e.theme,o="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function p(e){var t=e.children,o=e.onClose,i=Object(r.a)(e,c);return Object(l.jsx)(s,Object(a.a)(Object(a.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},i),{},{children:t}))}var u=["sx"],d=Object(n.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function b(e){var t=e.sx,o=Object(r.a)(e,u);return Object(l.jsx)(d,{sx:t,children:Object(l.jsx)(i.i,Object(a.a)({maxWidth:100,unit:"imperial"},o))})}var m=["onClick"],f=Object(n.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function y(e){var t=e.onClick,o=Object(r.a)(e,m);return Object(l.jsx)(i.f,Object(a.a)(Object(a.a)({},o),{},{children:Object(l.jsx)(f,{viewBox:"0 0 24 24",onClick:t,children:Object(l.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var x=Object(n.a)(i.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function h(e){var t=Object.assign({},e);return Object(l.jsx)(x,Object(a.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var g=Object(n.a)(i.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function j(e){var t=Object.assign({},e);return Object(l.jsx)(g,Object(a.a)({},t))}var v=Object(n.a)(i.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function w(e){var t=Object.assign({},e);return Object(l.jsx)(v,Object(a.a)({},t))}},2095:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},2817:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return d}));var a=o(3),r=o(4),i=o(2718),n=o(1),l=o(1822),c=o(2095),s=o(1837),p=o(0),u=Object(r.a)(Object(r.a)({},c),{},{sources:Object(r.a)({},c.sources),layers:c.layers.slice()});function d(e){var t=Object.assign({},e),o=Object(n.useState)({latitude:37.78,longitude:-122.4,zoom:11,bearing:0,pitch:0}),c=Object(a.a)(o,2),d=c[0],b=c[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.l,Object(r.a)(Object(r.a)(Object(r.a)({},d),{},{mapStyle:u,onViewportChange:b,onClick:function(e){var t=e.features[0];if(t){var o=Object(i.a)(t),r=Object(a.a)(o,4),n=r[0],c=r[1],s=r[2],p=r[3],u=new l.k(d).fitBounds([[n,c],[s,p]],{padding:40}),m=u.longitude,f=u.latitude,y=u.zoom;b({longitude:m,latitude:f,zoom:y,transitionInterpolator:new l.e({around:[e.offsetCenter.x,e.offsetCenter.y]}),transitionDuration:1e3})}},interactiveLayerIds:["sf-neighborhoods-fill"]},t),{},{children:[Object(p.jsx)(s.f,{}),Object(p.jsx)(s.d,{}),Object(p.jsx)(s.a,{}),Object(p.jsx)(s.b,{})]}))})}u.sources["sf-neighborhoods"]={type:"geojson",data:"https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json"},u.layers.push({id:"sf-neighborhoods-fill",source:"sf-neighborhoods",type:"fill",paint:{"fill-outline-color":"#0040c8","fill-color":"#fff","fill-opacity":0}},{id:"sf-neighborhoods-outline",source:"sf-neighborhoods",type:"line",paint:{"line-width":2,"line-color":"#0080ef"}})}}]);
//# sourceMappingURL=127.30367e0e.chunk.js.map