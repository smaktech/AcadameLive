(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[129],{1839:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var r=a(179),n=a(192);function c(e){return Object(r.a)("MuiSwitch",e)}var i=Object(n.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.a=i},1884:function(e,t,a){"use strict";var r=a(10),n=a(13),c=a(2),i=a(1),o=(a(7),a(5)),s=a(300),l=a(98),d=a(19),b=a(410),j=a(18),h=a(12),u=a(1839),m=a(0),p=["className","color","edge","size","sx"],O=Object(h.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.ownerState;return Object(c.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(r.a)(t,"& .".concat(u.a.thumb),{width:16,height:16}),Object(r.a)(t,"& .".concat(u.a.switchBase),Object(r.a)({padding:4},"&.".concat(u.a.checked),{transform:"translateX(16px)"})),t))})),x=Object(h.a)(b.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,Object(r.a)({},"& .".concat(u.a.input),t.input),"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300],transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(r.a)(t,"&.".concat(u.a.checked),{transform:"translateX(20px)"}),Object(r.a)(t,"&.".concat(u.a.disabled),{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}),Object(r.a)(t,"&.".concat(u.a.checked," + .").concat(u.a.track),{opacity:.5}),Object(r.a)(t,"&.".concat(u.a.disabled," + .").concat(u.a.track),{opacity:"light"===a.palette.mode?.12:.2}),Object(r.a)(t,"& .".concat(u.a.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,n=e.ownerState;return Object(c.a)({"&:hover":{backgroundColor:Object(l.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},Object(r.a)(t,"&.".concat(u.a.checked),Object(r.a)({color:a.palette[n.color].main,"&:hover":{backgroundColor:Object(l.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(u.a.disabled),{color:"light"===a.palette.mode?Object(l.f)(a.palette[n.color].main,.62):Object(l.b)(a.palette[n.color].main,.55)})),Object(r.a)(t,"&.".concat(u.a.checked," + .").concat(u.a.track),{backgroundColor:a.palette[n.color].main}),t))})),v=Object(h.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),g=Object(h.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),f=i.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiSwitch"}),r=a.className,i=a.color,l=void 0===i?"primary":i,b=a.edge,h=void 0!==b&&b,f=a.size,w=void 0===f?"medium":f,y=a.sx,C=Object(n.a)(a,p),k=Object(c.a)({},a,{color:l,edge:h,size:w}),S=function(e){var t=e.classes,a=e.edge,r=e.size,n=e.color,i=e.checked,o=e.disabled,l={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(r))],switchBase:["switchBase","color".concat(Object(d.a)(n)),i&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=Object(s.a)(l,u.b,t);return Object(c.a)({},t,b)}(k),z=Object(m.jsx)(g,{className:S.thumb,ownerState:k});return Object(m.jsxs)(O,{className:Object(o.a)(S.root,r),sx:y,ownerState:k,children:[Object(m.jsx)(x,Object(c.a)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:k},C,{classes:Object(c.a)({},S,{root:S.switchBase})})),Object(m.jsx)(v,{className:S.track,ownerState:k})]})}));t.a=f},2857:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return X}));var r=a(8),n=a.n(r),c=a(4),i=a(15),o=a(194),s=a(193),l=a(243),d=a(12),b=a(1785),j=a(269),h=a(407),u=a(1781),m=a(169),p=a(671),O=a(1002),x=a(1798),v=a(0);function g(e){var t=e.formik,a=t.touched,r=t.errors,n=t.getFieldProps;return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"subtitle1",children:"Billing Address"}),Object(v.jsxs)(O.a,{spacing:3,mt:5,children:[Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({fullWidth:!0,label:"Person name"},n("name")),{},{error:Boolean(a.name&&r.name),helperText:a.name&&r.name})),Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({fullWidth:!0,label:"Phone number"},n("phone")),{},{error:Boolean(a.phone&&r.phone),helperText:a.phone&&r.phone})),Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({fullWidth:!0,label:"Email"},n("email")),{},{error:Boolean(a.email&&r.email),helperText:a.email&&r.email})),Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({fullWidth:!0,label:"Address"},n("address")),{},{error:Boolean(a.address&&r.address),helperText:a.address&&r.address}))]})]})}var f=a(3),w=a(1),y=a(1009),C=a(1763),k=a(1803),S=a(1772),z=a(1684),N=a(544),P=a(349),M=a(41),B=a(1795),I=a(1682),R=a(1683);function T(e){var t=e.formik,a=e.onCancel,r=Object(w.useState)(null),n=Object(f.a)(r,2),i=n[0],o=n[1],s=t.values,l=t.resetForm,d=t.getFieldProps;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y.a,{sx:{p:2.5,mb:2.5,bgcolor:"background.neutral"},children:Object(v.jsxs)(O.a,{spacing:2,children:[Object(v.jsx)(h.a,{variant:"subtitle1",children:"Add new card"}),Object(v.jsx)(x.a,Object(c.a)({fullWidth:!0,size:"small",label:"Name on card"},d("newCardName"))),Object(v.jsx)(x.a,Object(c.a)({fullWidth:!0,size:"small",label:"Card number"},d("newCardNumber"))),Object(v.jsxs)(O.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(v.jsx)(x.a,Object(c.a)({size:"small",label:"MM/YY"},d("newCardExpired"))),Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({},d("newCardCvv")),{},{size:"small",label:"CVV",InputProps:{endAdornment:Object(v.jsx)(B.a,{position:"end",children:Object(v.jsx)(I.a,{size:"small",edge:"end",onClick:function(e){return o(e.currentTarget)},children:Object(v.jsx)(M.a,{icon:"eva:info-fill"})})})}}))]}),Object(v.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(v.jsx)(N.a,{id:"cancel",type:"button",fullWidth:!0,onClick:function(){a(),l({values:Object(c.a)(Object(c.a)({},s),{},{newCardName:"",newCardNumber:"",newCardExpired:"",newCardCvv:""})})},children:"Cancel"}),Object(v.jsx)(N.a,{id:"create",type:"button",fullWidth:!0,variant:"contained",children:"Create"})]})]})}),Object(v.jsx)(R.a,{open:Boolean(i),anchorEl:i,onClose:function(){return o(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:Object(v.jsx)(h.a,{variant:"body2",align:"center",children:"Three-digit number on the back of your VISA card"})})]})}var W=[{value:"paypal",title:"Pay with Paypal",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg"]}],A=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}],E=Object(d.a)(y.a)((function(e){var t=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:t.spacing(2.5),paddingRight:t.spacing(2),transition:t.transitions.create("all"),border:"solid 1px ".concat(t.palette.divider)}}));function q(e){var t=e.formik,a=Object(w.useState)(!1),r=Object(f.a)(a,2),n=r[0],i=r[1],o=t.values,s=t.getFieldProps,l=function(){i(!n)},d=function(){i(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"subtitle1",sx:{mb:5},children:"Payment Method"}),Object(v.jsx)(C.a,Object(c.a)(Object(c.a)({},s("method")),{},{children:Object(v.jsx)(O.a,{spacing:3,children:W.map((function(e){var a=e.value,r=e.title,i=e.icons,b="credit_card"===a;return Object(v.jsxs)(E,{sx:Object(c.a)(Object(c.a)({},o.method===a&&{boxShadow:function(e){return e.customShadows.z20}}),b&&{flexWrap:"wrap"}),children:[Object(v.jsx)(k.a,{value:a,control:Object(v.jsx)(S.a,{checkedIcon:Object(v.jsx)(M.a,{icon:"eva:checkmark-circle-2-fill"})}),label:Object(v.jsx)(h.a,{variant:"subtitle2",sx:{ml:1},children:r}),sx:{py:3,mx:0}}),Object(v.jsx)(O.a,{spacing:1,direction:"row",alignItems:"center",sx:{position:"absolute",right:20,top:32},children:i.map((function(e){return Object(v.jsx)(P.a,{alt:"logo card",src:e},e)}))}),b&&Object(v.jsxs)(z.a,{in:"credit_card"===o.method,sx:{width:1},children:[Object(v.jsx)(x.a,Object(c.a)(Object(c.a)({select:!0,fullWidth:!0,label:"Card"},s("card")),{},{SelectProps:{native:!0},children:A.map((function(e){return Object(v.jsx)("option",{value:e.value,children:e.label},e.value)}))})),Object(v.jsx)(N.a,{id:"addNewCard",type:"button",size:"small",startIcon:Object(v.jsx)(M.a,{icon:"eva:plus-fill",width:20,height:20}),onClick:l,sx:{my:3},children:"Add new card"}),Object(v.jsx)(z.a,{in:n,children:Object(v.jsx)(T,{formik:t,onCancel:d})})]})]},r)}))})}))]})}var F=a(1884),J=a(1653),_=a(1817),V=a(545),L=Object(d.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(5),backgroundColor:t.palette.background.neutral,borderRadius:2*Number(t.shape.borderRadius)}}));function H(e){var t=e.formik,a=t.getFieldProps,r=t.isSubmitting;return Object(v.jsxs)(L,{children:[Object(v.jsx)(h.a,{variant:"subtitle1",sx:{mb:5},children:"Summary"}),Object(v.jsxs)(O.a,{spacing:2.5,children:[Object(v.jsxs)(O.a,{direction:"row",justifyContent:"space-between",children:[Object(v.jsx)(h.a,{variant:"subtitle2",component:"p",sx:{color:"text.secondary"},children:"Subscription"}),Object(v.jsx)(V.a,{color:"error",variant:"filled",children:"PREMIUM"})]}),Object(v.jsxs)(O.a,{direction:"row",justifyContent:"space-between",children:[Object(v.jsx)(h.a,{component:"p",variant:"subtitle2",sx:{color:"text.secondary"},children:"Billed Monthly"}),Object(v.jsx)(F.a,Object(c.a)({},a("isMonthly")))]}),Object(v.jsxs)(O.a,{direction:"row",justifyContent:"flex-end",children:[Object(v.jsx)(h.a,{sx:{color:"text.secondary"},children:"$"}),Object(v.jsx)(h.a,{variant:"h2",sx:{mx:1},children:"9.99"}),Object(v.jsx)(h.a,{component:"span",variant:"body2",sx:{mb:1,alignSelf:"flex-end",color:"text.secondary"},children:"/mo"})]}),Object(v.jsx)(J.a,{sx:{borderStyle:"dashed"}}),Object(v.jsxs)(O.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(h.a,{variant:"h6",component:"p",children:"Total Billed"}),Object(v.jsx)(h.a,{variant:"h6",component:"p",children:"$9.99*"})]}),Object(v.jsx)(J.a,{sx:{borderStyle:"dashed",mb:1}})]}),Object(v.jsx)(h.a,{variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),Object(v.jsx)(_.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:r,sx:{mt:5,mb:3},children:"Upgrade My Plan"}),Object(v.jsxs)(O.a,{alignItems:"center",spacing:1,children:[Object(v.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:1.5,children:[Object(v.jsx)(M.a,{icon:"eva:shield-fill",sx:{width:20,height:20,color:"primary.main"}}),Object(v.jsx)(h.a,{variant:"subtitle2",children:"Secure credit card payment"})]}),Object(v.jsx)(h.a,{variant:"caption",sx:{color:"text.secondary",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}var U=Object(d.a)("div")((function(e){var t=e.theme;return{minHeight:"100%",paddingTop:t.spacing(15),paddingBottom:t.spacing(10)}}));function X(){var e=Object(s.b)().enqueueSnackbar,t=Object(m.a)("up","md"),a=o.f().shape({name:o.h().required("Name is required"),phone:o.h().required("Phone is required"),email:o.h().email("Email must be a valid email address").required("Email is required"),address:o.h().required("Address is required")}),r=Object(l.d)({initialValues:{name:"",phone:"",email:"",address:"",subscription:"premium",isMonthly:!1,method:"paypal",card:"mastercard",newCardName:"",newCardNumber:"",newCardExpired:"",newCardCvv:""},validationSchema:a,onSubmit:function(){var t=Object(i.a)(n.a.mark((function t(a,r){var i,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.resetForm,o={name:a.name,phone:a.phone,email:a.email,address:a.address,subscription:"premium"},t.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:"paypal"===a.method?alert(JSON.stringify(Object(c.a)(Object(c.a)({},o),{},{method:a.method}),null,2)):"paypal"===a.method||a.newCardName||alert(JSON.stringify(Object(c.a)(Object(c.a)({},o),{},{method:a.method,card:a.card}),null,2)),a.newCardName&&alert(JSON.stringify(Object(c.a)(Object(c.a)({},o),{},{method:a.method,newCardName:a.newCardName,newCardNumber:a.newCardNumber,newCardExpired:a.newCardExpired,newCardCvv:a.newCardCvv}),null,2)),i(),e("Payment success",{variant:"success"});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()});return Object(v.jsx)(p.a,{title:"Payment",children:Object(v.jsx)(U,{children:Object(v.jsxs)(b.a,{children:[Object(v.jsxs)(j.a,{sx:{mb:5},children:[Object(v.jsx)(h.a,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),Object(v.jsx)(h.a,{align:"center",sx:{color:"text.secondary"},children:"Professional plan is right for you."})]}),Object(v.jsx)(l.b,{value:r,children:Object(v.jsx)(l.a,{noValidate:!0,autoComplete:"off",onSubmit:r.handleSubmit,children:Object(v.jsxs)(u.a,{container:!0,spacing:t?3:5,children:[Object(v.jsx)(u.a,{item:!0,xs:12,md:8,children:Object(v.jsxs)(j.a,{sx:{display:"grid",gap:5,p:{md:5},borderRadius:2,border:function(e){return{md:"dashed 1px ".concat(e.palette.divider)}},gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[Object(v.jsx)(g,{formik:r}),Object(v.jsx)(q,{formik:r})]})}),Object(v.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(H,{formik:r})})]})})})]})})})}}}]);
//# sourceMappingURL=129.8d23f7fb.chunk.js.map