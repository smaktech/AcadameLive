(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[43],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(4),r=n(25),a=n(136),c=n(27),o=n(407),s=n(1824),l=n(269),j=n(1681),d=n(0),b=["links","activeLast"];function u(e){var t,n=e.links,c=e.activeLast,j=void 0!==c&&c,u=Object(r.a)(e,b),x=null===(t=Object(a.last)(n))||void 0===t?void 0:t.name,O=n.map((function(e){return Object(d.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==x?Object(d.jsx)(h,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(d.jsx)(s.a,Object(i.a)(Object(i.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},u),{},{children:j?O:m}))}function h(e){var t=e.link,n=t.href,i=t.name,r=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:c.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),r=n(25),a=n(136),c=n(269),o=n(407),s=n(1681),l=n(1819),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,x=e.sx,O=Object(r.a)(e,d);return Object(j.jsxs)(c.a,{sx:Object(i.a)({mb:5},x),children:[Object(j.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(l.a,Object(i.a)({links:t},O))]}),n&&Object(j.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(c.a,{sx:{mt:2},children:Object(a.isString)(h)?Object(j.jsx)(s.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1821:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j}));var i=n(136),r=n(1829),a=n.n(r);function c(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return a()(e/100).format("0.0%")}function s(e){return a()(e).format()}function l(e){return Object(i.replace)(a()(e).format("0.00a"),".00","")}function j(e){return a()(e).format("0.0 b")}},1854:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(4),r=n(25),a=n(1009),c=n(407),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(r.a)(e,s);return Object(o.jsxs)(a.a,Object(i.a)(Object(i.a)({},l),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},1887:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(25),r=n(4),a=n(1),c=n(1967),o=n(68),s=n(98),l=n(1649),j=n(407),d=n(0),b=["images","photoIndex","setPhotoIndex","isOpen"];function u(){var e=Object(o.a)(),t="rtl"===e.direction,n=e.palette.grey[600].replace("#",""),i=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(n,"&width=").concat(32,"&height=").concat(32,")")},a=function(t){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:i(t)},"&:hover":{opacity:.72}}};return Object(d.jsx)(l.a,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:Object(s.a)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":a("zoom-in"),"&.ril__zoomOutButton":a("zoom-out"),"&.ril__closeButton":a("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":Object(r.a)({right:"auto",left:e.spacing(2)},a(t?"arrow-right":"arrow-left")),"&.ril__navButtonNext":Object(r.a)({left:"auto",right:e.spacing(2)},a(t?"arrow-left":"arrow-right"))}}}})}function h(e){var t=e.images,n=e.photoIndex,o=e.setPhotoIndex,s=e.isOpen,l=Object(i.a)(e,b);Object(a.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var h=[Object(d.jsx)(j.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),s&&Object(d.jsx)(c.a,Object(r.a)({animationDuration:160,nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onMovePrevRequest:function(){return o((n+t.length-1)%t.length)},onMoveNextRequest:function(){return o((n+1)%t.length)},toolbarButtons:h,reactModalStyle:{overlay:{zIndex:9999}}},l))]})}},2077:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n(3),r=n(25),a=n(4),c=(n(2218),n(2260)),o=n(1),s=n(12),l=n(68),j=n(269),d=n(1660),b=n(1682),u=n(148),h=n(41),x=n(0),O=["disabled","value","setValue","alignRight"],m=Object(s.a)(j.a)({position:"relative"}),p=Object(s.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:2*Number(t.shape.borderRadius),"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(a.a)(Object(a.a)(Object(a.a)({},t.typography.subtitle2),Object(u.a)().bgBlur({color:t.palette.background.paper})),{},{color:t.palette.text.primary}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function f(e){var t,n=e.disabled,s=e.value,j=e.setValue,u=e.alignRight,f=void 0!==u&&u,g=Object(r.a)(e,O),v=Object(l.a)(),y=Object(o.useState)(!1),w=Object(i.a)(y,2),k=w[0],C=w[1];k&&(t=Object(x.jsx)(c.a,{color:v.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return j(s+(null===e||void 0===e?void 0:e.native))}}));return Object(x.jsx)(d.a,{onClickAway:function(){C(!1)},children:Object(x.jsxs)(m,Object(a.a)(Object(a.a)({},g),{},{children:[Object(x.jsx)(p,{sx:Object(a.a)({},f&&{right:-2,left:"auto !important"}),children:t}),Object(x.jsx)(b.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),C(!k)},children:Object(x.jsx)(h.a,{icon:"eva:smiling-face-fill",width:20,height:20})})]}))})}},2836:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var i=n(3),r=n(10),a=n(1996),c=n(1),o=n(12),s=n(1785),l=n(1805),j=n(1771),d=n(1814),b=n(269),u=n(47),h=n(105),x=n(137),O=n(350),m=n(671),p=n(41),f=n(1820),g=n(1781),v=n(1002),y=n(1825),w=n(407),k=n(1681),C=n(0),I=Object(o.a)(p.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function S(e){var t=e.profile,n=t.quote,i=t.country,r=t.email,a=t.role,c=t.company,o=t.school;return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(y.a,{title:"About"}),Object(C.jsxs)(v.a,{spacing:2,sx:{p:3},children:[Object(C.jsx)(w.a,{variant:"body2",children:n}),Object(C.jsxs)(v.a,{direction:"row",children:[Object(C.jsx)(I,{icon:"eva:pin-fill"}),Object(C.jsxs)(w.a,{variant:"body2",children:["Live at \xa0",Object(C.jsx)(k.a,{component:"span",variant:"subtitle2",color:"text.primary",children:i})]})]}),Object(C.jsxs)(v.a,{direction:"row",children:[Object(C.jsx)(I,{icon:"eva:email-fill"}),Object(C.jsx)(w.a,{variant:"body2",children:r})]}),Object(C.jsxs)(v.a,{direction:"row",children:[Object(C.jsx)(I,{icon:"ic:round-business-center"}),Object(C.jsxs)(w.a,{variant:"body2",children:[a," at \xa0",Object(C.jsx)(k.a,{component:"span",variant:"subtitle2",color:"text.primary",children:c})]})]}),Object(C.jsxs)(v.a,{direction:"row",children:[Object(C.jsx)(I,{icon:"ic:round-business-center"}),Object(C.jsxs)(w.a,{variant:"body2",children:["Studied at \xa0",Object(C.jsx)(k.a,{component:"span",variant:"subtitle2",color:"text.primary",children:o})]})]})]})]})}var _=n(27),R=n(1682),L=n(1803),z=n(1774),F=n(2021),B=n(1010),P=n(1009),W=n(1798),A=n(1795),N=n(408),M=n(1821),U=n(349),G=n(417),T=n(2077);function D(e){var t=e.post,n=Object(h.a)().user,r=Object(c.useRef)(null),a=Object(c.useRef)(null),o=Object(c.useState)(t.isLiked),s=Object(i.a)(o,2),j=s[0],d=s[1],u=Object(c.useState)(t.personLikes.length),x=Object(i.a)(u,2),O=x[0],m=x[1],f=Object(c.useState)(""),g=Object(i.a)(f,2),I=g[0],S=g[1],D=t.comments.length>0;return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(y.a,{disableTypography:!0,avatar:Object(C.jsx)(G.a,{}),title:Object(C.jsx)(k.a,{to:"#",variant:"subtitle2",color:"text.primary",component:_.b,children:null===n||void 0===n?void 0:n.displayName}),subheader:Object(C.jsx)(w.a,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:Object(N.a)(t.createdAt)}),action:Object(C.jsx)(R.a,{children:Object(C.jsx)(p.a,{icon:"eva:more-vertical-fill",width:20,height:20})})}),Object(C.jsxs)(v.a,{spacing:3,sx:{p:3},children:[Object(C.jsx)(w.a,{variant:"body1",children:t.message}),Object(C.jsx)(U.a,{alt:"post media",src:t.media,ratio:"16/9",sx:{borderRadius:1}}),Object(C.jsxs)(v.a,{direction:"row",alignItems:"center",children:[Object(C.jsx)(L.a,{control:Object(C.jsx)(z.a,{size:"small",color:"error",checked:j,icon:Object(C.jsx)(p.a,{icon:"eva:heart-fill"}),checkedIcon:Object(C.jsx)(p.a,{icon:"eva:heart-fill"}),onChange:j?function(){d(!1),m((function(e){return e-1}))}:function(){d(!0),m((function(e){return e+1}))}}),label:Object(M.e)(O),sx:{minWidth:72,mr:0}}),Object(C.jsx)(F.a,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:t.personLikes.map((function(e){return Object(C.jsx)(B.a,{alt:e.name,src:e.avatarUrl},e.name)}))}),Object(C.jsx)(b.a,{sx:{flexGrow:1}}),Object(C.jsx)(R.a,{onClick:function(){var e;null===(e=r.current)||void 0===e||e.focus()},children:Object(C.jsx)(p.a,{icon:"eva:message-square-fill",width:20,height:20})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(p.a,{icon:"eva:share-fill",width:20,height:20})})]}),D&&Object(C.jsx)(v.a,{spacing:1.5,children:t.comments.map((function(e){return Object(C.jsxs)(v.a,{direction:"row",spacing:2,children:[Object(C.jsx)(B.a,{alt:e.author.name,src:e.author.avatarUrl}),Object(C.jsxs)(P.a,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[Object(C.jsxs)(v.a,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:.5},children:[Object(C.jsx)(w.a,{variant:"subtitle2",children:e.author.name}),Object(C.jsx)(w.a,{variant:"caption",sx:{color:"text.disabled"},children:Object(N.a)(e.createdAt)})]}),Object(C.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:e.message})]})]},e.id)}))}),Object(C.jsxs)(v.a,{direction:"row",alignItems:"center",children:[Object(C.jsx)(G.a,{}),Object(C.jsx)(W.a,{fullWidth:!0,size:"small",value:I,inputRef:r,placeholder:"Write a comment\u2026",onChange:function(e){return t=e.target.value,void S(t);var t},InputProps:{endAdornment:Object(C.jsxs)(A.a,{position:"end",children:[Object(C.jsx)(R.a,{size:"small",onClick:function(){var e;null===(e=a.current)||void 0===e||e.click()},children:Object(C.jsx)(p.a,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),Object(C.jsx)(T.a,{alignRight:!0,value:I,setValue:S})]})},sx:{ml:2,mr:1,"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(C.jsx)(R.a,{children:Object(C.jsx)(p.a,{icon:"ic:round-send",width:24,height:24})}),Object(C.jsx)("input",{type:"file",ref:a,style:{display:"none"}})]})]})]})}var q=n(544);function Q(){var e=Object(c.useRef)(null),t=function(){var t;null===(t=e.current)||void 0===t||t.click()};return Object(C.jsxs)(l.a,{sx:{p:3},children:[Object(C.jsx)(W.a,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}}),Object(C.jsxs)(b.a,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(C.jsxs)(b.a,{sx:{display:"flex"},children:[Object(C.jsx)(R.a,{size:"small",onClick:t,sx:{mr:1},children:Object(C.jsx)(p.a,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),Object(C.jsx)(R.a,{size:"small",onClick:t,children:Object(C.jsx)(p.a,{icon:"eva:attach-2-fill",width:24,height:24})})]}),Object(C.jsx)(q.a,{variant:"contained",children:"Post"})]}),Object(C.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var V=n(1653);function E(e){var t=e.profile,n=t.follower,i=t.following;return Object(C.jsx)(l.a,{sx:{py:3},children:Object(C.jsxs)(v.a,{direction:"row",divider:Object(C.jsx)(V.a,{orientation:"vertical",flexItem:!0}),children:[Object(C.jsxs)(v.a,{width:1,textAlign:"center",children:[Object(C.jsx)(w.a,{variant:"h4",children:Object(M.c)(n)}),Object(C.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"Follower"})]}),Object(C.jsxs)(v.a,{width:1,textAlign:"center",children:[Object(C.jsx)(w.a,{variant:"h4",children:Object(M.c)(i)}),Object(C.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"Following"})]})]})})}var J=Object(o.a)(p.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function $(e){var t=e.profile,n=t.facebookLink,i=t.instagramLink,r=t.linkedinLink,a=t.twitterLink,c=[{name:"Linkedin",icon:Object(C.jsx)(J,{icon:"eva:linkedin-fill",color:"#006097"}),href:r},{name:"Twitter",icon:Object(C.jsx)(J,{icon:"eva:twitter-fill",color:"#1C9CEA"}),href:a},{name:"Instagram",icon:Object(C.jsx)(J,{icon:"ant-design:instagram-filled",color:"#D7336D"}),href:i},{name:"Facebook",icon:Object(C.jsx)(J,{icon:"eva:facebook-fill",color:"#1877F2"}),href:n}];return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(y.a,{title:"Social"}),Object(C.jsx)(v.a,{spacing:2,sx:{p:3},children:c.map((function(e){return Object(C.jsxs)(v.a,{direction:"row",alignItems:"center",children:[e.icon,Object(C.jsx)(k.a,{component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:e.href})]},e.name)}))})]})}function H(e){var t=e.myProfile,n=e.posts;return Object(C.jsxs)(g.a,{container:!0,spacing:3,children:[Object(C.jsx)(g.a,{item:!0,xs:12,md:4,children:Object(C.jsxs)(v.a,{spacing:3,children:[Object(C.jsx)(E,{profile:t}),Object(C.jsx)(S,{profile:t}),Object(C.jsx)($,{profile:t})]})}),Object(C.jsx)(g.a,{item:!0,xs:12,md:8,children:Object(C.jsxs)(v.a,{spacing:3,children:[Object(C.jsx)(Q,{}),n.map((function(e){return Object(C.jsx)(D,{post:e},e.id)}))]})})]})}var K=n(4),X=n(148),Y=Object(o.a)("div")((function(e){var t=e.theme;return{"&:before":Object(K.a)(Object(K.a)({},Object(X.a)().bgBlur({blur:2,color:t.palette.primary.darker})),{},{top:0,zIndex:9,content:"''",width:"100%",height:"100%",position:"absolute"})}})),Z=Object(o.a)("div")((function(e){var t=e.theme;return Object(r.a)({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})}));function ee(e){var t=e.myProfile,n=Object(h.a)().user,i=t.position,r=t.cover;return Object(C.jsxs)(Y,{children:[Object(C.jsxs)(Z,{children:[Object(C.jsx)(G.a,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),Object(C.jsxs)(b.a,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[Object(C.jsx)(w.a,{variant:"h4",children:null===n||void 0===n?void 0:n.displayName}),Object(C.jsx)(w.a,{sx:{opacity:.72},children:i})]})]}),Object(C.jsx)(U.a,{alt:"profile cover",src:r,sx:{position:"absolute",top:0,left:0,right:0,bottom:0}})]})}var te=n(136),ne=n(1799),ie=n(682),re=n(1854),ae=Object(o.a)(ne.a)((function(e){var t=e.theme;return{width:240,marginBottom:t.spacing(5),transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function ce(e){var t=e.friends,n=e.findFriends,i=e.onFindFriends,r=function(e,t){var n=e;t&&(n=Object(te.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})));return n}(t,n),a=0===r.length;return Object(C.jsxs)(b.a,{sx:{mt:5},children:[Object(C.jsx)(w.a,{variant:"h4",sx:{mb:3},children:"Friends"}),Object(C.jsx)(ae,{value:n,onChange:function(e){return i(e.target.value)},placeholder:"Find friends...",startAdornment:Object(C.jsx)(A.a,{position:"start",children:Object(C.jsx)(p.a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}),Object(C.jsx)(g.a,{container:!0,spacing:3,children:r.map((function(e){return Object(C.jsx)(g.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(oe,{friend:e})},e.id)}))}),a&&Object(C.jsx)(b.a,{sx:{mt:5},children:Object(C.jsx)(re.a,{searchQuery:n})})]})}function oe(e){var t=e.friend,n=t.name,i=t.role,r=t.avatarUrl;return Object(C.jsxs)(l.a,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[Object(C.jsx)(B.a,{alt:n,src:r,sx:{width:64,height:64,mb:3}}),Object(C.jsx)(k.a,{to:"#",variant:"subtitle1",color:"text.primary",component:_.b,children:n}),Object(C.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary",mb:1},children:i}),Object(C.jsx)(ie.a,{initialColor:!0}),Object(C.jsx)(R.a,{sx:{top:8,right:8,position:"absolute"},children:Object(C.jsx)(p.a,{icon:"eva:more-vertical-fill",width:20,height:20})})]})}var se=n(1808),le=n(1887),je=Object(o.a)(se.a)((function(e){var t=e.theme;return Object(K.a)(Object(K.a)({},Object(X.a)().bgBlur({blur:2,color:t.palette.grey[900]})),{},{bottom:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",justifyContent:"space-between",color:t.palette.common.white})}));function de(e){var t=e.gallery,n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(0),j=Object(i.a)(s,2),d=j[0],u=j[1],h=t.map((function(e){return e.imageUrl})),x=function(e){var t=Object(te.findIndex)(h,(function(t){return t===e}));o(!0),u(t)};return Object(C.jsxs)(b.a,{sx:{mt:5},children:[Object(C.jsx)(w.a,{variant:"h4",sx:{mb:3},children:"Gallery"}),Object(C.jsxs)(l.a,{sx:{p:3},children:[Object(C.jsx)(b.a,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:t.map((function(e){return Object(C.jsx)(be,{image:e,onOpenLightbox:x},e.id)}))}),Object(C.jsx)(le.a,{images:h,mainSrc:h[d],photoIndex:d,setPhotoIndex:u,isOpen:a,onCloseRequest:function(){return o(!1)}})]})]})}function be(e){var t=e.image,n=e.onOpenLightbox,i=t.imageUrl,r=t.title,a=t.postAt;return Object(C.jsxs)(l.a,{sx:{cursor:"pointer",position:"relative"},children:[Object(C.jsx)(U.a,{alt:"gallery image",ratio:"1/1",src:i,onClick:function(){return n(i)}}),Object(C.jsxs)(je,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(w.a,{variant:"subtitle1",children:r}),Object(C.jsx)(w.a,{variant:"body2",sx:{opacity:.72},children:Object(N.a)(a)})]}),Object(C.jsx)(R.a,{color:"inherit",children:Object(C.jsx)(p.a,{icon:"eva:more-vertical-fill",width:20,height:20})})]})]})}function ue(e){var t=e.followers;return Object(C.jsxs)(b.a,{sx:{mt:5},children:[Object(C.jsx)(w.a,{variant:"h4",sx:{mb:3},children:"Followers"}),Object(C.jsx)(g.a,{container:!0,spacing:3,children:t.map((function(e){return Object(C.jsx)(g.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(he,{follower:e})},e.id)}))})]})}function he(e){var t=e.follower,n=t.name,r=t.country,a=t.avatarUrl,o=t.isFollowed,s=Object(c.useState)(o),j=Object(i.a)(s,2),d=j[0],u=j[1];return Object(C.jsxs)(l.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(C.jsx)(B.a,{alt:n,src:a,sx:{width:48,height:48}}),Object(C.jsxs)(b.a,{sx:{flexGrow:1,minWidth:0,pl:2,pr:1},children:[Object(C.jsx)(w.a,{variant:"subtitle2",noWrap:!0,children:n}),Object(C.jsxs)(b.a,{sx:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(p.a,{icon:"eva:pin-fill",sx:{width:16,height:16,mr:.5,flexShrink:0}}),Object(C.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:r})]})]}),Object(C.jsx)(q.a,{size:"small",onClick:function(){return u(!d)},variant:d?"text":"outlined",color:d?"primary":"inherit",startIcon:d&&Object(C.jsx)(p.a,{icon:"eva:checkmark-fill"}),children:d?"Followed":"Follow"})]})}var xe=Object(o.a)("div")((function(e){var t,n=e.theme;return t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:n.palette.background.paper},Object(r.a)(t,n.breakpoints.up("sm"),{justifyContent:"center"}),Object(r.a)(t,n.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:n.spacing(3)}),t}));function Oe(){var e=Object(x.a)().themeStretch,t=Object(h.a)().user,n=Object(c.useState)("profile"),r=Object(i.a)(n,2),o=r[0],g=r[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),w=y[0],k=y[1],I=[{value:"profile",icon:Object(C.jsx)(p.a,{icon:"ic:round-account-box",width:20,height:20}),component:Object(C.jsx)(H,{myProfile:O.I,posts:O.L})},{value:"followers",icon:Object(C.jsx)(p.a,{icon:"eva:heart-fill",width:20,height:20}),component:Object(C.jsx)(ue,{followers:O.M})},{value:"friends",icon:Object(C.jsx)(p.a,{icon:"eva:people-fill",width:20,height:20}),component:Object(C.jsx)(ce,{friends:O.N,findFriends:w,onFindFriends:function(e){k(e)}})},{value:"gallery",icon:Object(C.jsx)(p.a,{icon:"ic:round-perm-media",width:20,height:20}),component:Object(C.jsx)(de,{gallery:O.O})}];return Object(C.jsx)(m.a,{title:"User: Profile",children:Object(C.jsxs)(s.a,{maxWidth:!e&&"lg",children:[Object(C.jsx)(f.a,{heading:"Profile",links:[{name:"Dashboard",href:u.b.root},{name:"User",href:u.b.user.root},{name:(null===t||void 0===t?void 0:t.displayName)||""}]}),Object(C.jsxs)(l.a,{sx:{mb:3,height:280,position:"relative"},children:[Object(C.jsx)(ee,{myProfile:O.I}),Object(C.jsx)(xe,{children:Object(C.jsx)(j.a,{value:o,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){g(t)},children:I.map((function(e){return Object(C.jsx)(d.a,{disableRipple:!0,value:e.value,icon:e.icon,label:Object(a.a)(e.value)},e.value)}))})})]}),I.map((function(e){return e.value===o&&Object(C.jsx)(b.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=43.aa9e9abd.chunk.js.map