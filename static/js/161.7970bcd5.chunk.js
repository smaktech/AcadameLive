(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[161],{2869:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return I}));var r=i(27),n=i(12),a=i(1785),c=i(269),o=i(544),s=i(407),d=i(1681),u=i(717),l=i(47),h=i(671),b=i(41),j=i(4),m=i(8),x=i.n(m),g=i(15),p=i(194),f=i(193),O=i(42),v=i(243),y=i(1002),q=i(1799),k=i(1802),w=i(1817),C=i(0);function S(e){if(e.target.value.length>e.target.maxLength)return e.target.value=e.target.value.slice(0,e.target.maxLength)}function V(){var e=Object(O.g)(),t=Object(f.b)().enqueueSnackbar,i=p.f().shape({code1:p.e().required("Code is required"),code2:p.e().required("Code is required"),code3:p.e().required("Code is required"),code4:p.e().required("Code is required"),code5:p.e().required("Code is required"),code6:p.e().required("Code is required")}),r=Object(v.d)({initialValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""},validationSchema:i,onSubmit:function(){var i=Object(g.a)(x.a.mark((function i(){return x.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:t("Verify success",{variant:"success"}),e(l.b.root);case 4:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}()}),n=r.values,a=r.errors,c=r.isValid,o=r.touched,s=r.isSubmitting,d=r.handleSubmit,u=r.getFieldProps;return Object(C.jsx)(v.b,{value:r,children:Object(C.jsxs)(v.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(C.jsx)(y.a,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(n).map((function(e){return Object(C.jsx)(q.a,Object(j.a)(Object(j.a)({},u(e)),{},{type:"number",placeholder:"-",onInput:S,error:Boolean(o[e]&&a[e]),inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}),e)}))}),Object(C.jsx)(k.a,{error:!c,style:{textAlign:"right"},children:!c&&"Code is required"}),Object(C.jsx)(w.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:s,sx:{mt:3},children:"Verify"})]})})}var P=Object(n.a)("div")((function(e){return{display:"flex",height:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}}));function I(){return Object(C.jsx)(h.a,{title:"Verify",sx:{height:1},children:Object(C.jsxs)(P,{children:[Object(C.jsx)(u.a,{}),Object(C.jsx)(a.a,{children:Object(C.jsxs)(c.a,{sx:{maxWidth:480,mx:"auto"},children:[Object(C.jsx)(o.a,{size:"small",component:r.b,to:l.a.login,startIcon:Object(C.jsx)(b.a,{icon:"eva:arrow-ios-back-fill",width:20,height:20}),sx:{mb:3},children:"Back"}),Object(C.jsx)(s.a,{variant:"h3",paragraph:!0,children:"Please check your email!"}),Object(C.jsx)(s.a,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),Object(C.jsx)(c.a,{sx:{mt:5,mb:3},children:Object(C.jsx)(V,{})}),Object(C.jsxs)(s.a,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0",Object(C.jsx)(d.a,{variant:"subtitle2",underline:"none",onClick:function(){},children:"Resend code"})]})]})})]})})}}}]);
//# sourceMappingURL=161.7970bcd5.chunk.js.map