"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[4469],{79011:function(e,t,r){var n=r(29439),o=r(72791),a=r(72010),i=r(51802),s=r(199),l=r.n(s),c=r(1701),u=r.n(c),d=(r(25646),r(80184));t.Z=function(e){var t,r=e.getEditorContent,s=e.initialContent,c=u()(s||"<p>Please enter <strong>something</strong></p>");if(c){var p=a.ContentState.createFromBlockArray(c.contentBlocks);t=a.EditorState.createWithContent(p)}var h=(0,o.useState)(t),m=(0,n.Z)(h,2),f=m[0],x=m[1];return(0,d.jsx)(i.Editor,{editorState:f,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",onEditorStateChange:function(e){x(e),r(l()((0,a.convertToRaw)(e.getCurrentContent())))}})}},35878:function(e,t,r){var n=r(72791);t.Z=function(){var e=(0,n.useRef)(!0);return(0,n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},79456:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(1413),o=r(45987),a=r(72791),i=r(64554),s=r(52007),l=r.n(s),c=r(57689),u=function(e){var t=e.children,r=(0,c.TH)().pathname;return(0,a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),t||null};u.propTypes={children:l().node};var d=u,p=r(80184),h=["sx","children"],m=function(e){var t=e.sx,r=e.children,a=(0,o.Z)(e,h);return(0,p.jsx)(d,{children:(0,p.jsx)(i.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({px:1},t)},a),{},{children:r}))})}},16983:function(e,t,r){r.d(t,{Z:function(){return u}});r(72791);var n=r(42161),o=r(67414),a=r(24518),i=r(93517),s=r(50533),l=r(20890),c=r(80184);function u(e){var t=e.title,r=e.breadcrumbs,u=e.back,d=e.stats,p=e.action;return(0,c.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[(0,c.jsxs)(o.Z,{justifyContent:"flex-start",alignItems:"flex-start",children:[u&&(0,c.jsx)(a.Z,{startIcon:(0,c.jsx)(n.Z,{}),onClick:function(){return window.history.back()},children:"Back"}),r&&(0,c.jsx)(i.Z,{"aria-label":"breadcrumb",children:r.map((function(e,t){return(0,c.jsx)(s.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},t)}))}),(0,c.jsx)(l.Z,{variant:"h3",gutterBottom:!0,children:t}),d]}),p]})}},94469:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(1413),o=r(74165),a=r(15861),i=(r(72791),r(57689)),s=r(13967),l=r(64554),c=r(67414),u=r(68096),d=r(30829),p=r(28029),h=r(47071),m=r(63466),f=r(13400),x=r(20890),g=r(24518),Z=r(27988),b=r(2192),j=r(69596),v=r(81724),y=r(55705),w=r(18267),C=r(35878),k=r(5789),S=r(79816),B=r(79011),R=(r(63648),r(79456)),I=r(16983),M=r(80184);function P(){var e=(0,i.s0)(),t=(0,s.Z)(),r=(0,C.Z)();return(0,M.jsxs)(R.Z,{children:[(0,M.jsx)(I.Z,{title:"Mail",back:!0}),(0,M.jsx)(k.Z,{children:(0,M.jsx)(l.Z,{sx:{display:"flex"},children:(0,M.jsx)(y.J9,{initialValues:{to:" ",subject:" ",submit:null},validationSchema:v.Ry().shape({to:v.Z_().email("Must be a valid email").max(255).required("Email is required"),subject:v.Z_().max(255).required("Subject is required")}),onSubmit:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t,n){var a,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,s=n.setSubmitting;try{r.current&&(i({success:!0}),s(!1))}catch(t){console.error(t),r.current&&(i({success:!1}),a({submit:t.message}),s(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),children:function(r){var o=r.errors,a=r.handleBlur,i=r.handleChange,s=r.handleSubmit,v=(r.isSubmitting,r.touched),y=r.values;return(0,M.jsx)("form",{noValidate:!0,onSubmit:s,children:(0,M.jsxs)(c.Z,{spacing:3,children:[(0,M.jsxs)(u.Z,{fullWidth:!0,error:Boolean(v.email&&o.email),sx:(0,n.Z)({},t.typography.customInput),children:[(0,M.jsx)(d.Z,{htmlFor:"outlined-adornment-to-login",children:"To"}),(0,M.jsx)(p.Z,{id:"outlined-adornment-to-login",type:"to",value:y.to,name:"to",onBlur:a,onChange:i,label:"To",inputProps:{}}),v.to&&o.to&&(0,M.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-to-login",children:o.etomail})]}),(0,M.jsxs)(u.Z,{fullWidth:!0,error:Boolean(v.subject&&o.subject),sx:(0,n.Z)({},t.typography.customInput),children:[(0,M.jsx)(d.Z,{htmlFor:"outlined-adornment-subject-login",children:"Subject"}),(0,M.jsx)(p.Z,{id:"outlined-adornment-subject-login",type:"text",value:y.subject,name:"subject",onBlur:a,onChange:i,endAdornment:(0,M.jsx)(m.Z,{position:"end",children:(0,M.jsx)(f.Z,{"aria-label":"toggle subject visibility",edge:"end",size:"large"})}),label:"Subject",inputProps:{}}),v.subject&&o.subject&&(0,M.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-subject-login",children:o.subject})]}),(0,M.jsx)(B.Z,{children:" "})," initialContent=","\n<p>Dear Customer,</p>\n<p>We are excited to announce the release of our new software product that is designed to revolutionize the way you manage your business operations. Our software offers a comprehensive suite of features that will simplify your day-to-day tasks and help you achieve greater productivity and efficiency.</p>\n<p>At its core, our software is built on the latest technologies and industry best practices to deliver the most robust and reliable platform possible. Our development team has worked tirelessly to create a product that not only meets your needs but exceeds your expectations.</p>\n<p>Some of the key features of our software include:</p>\n<ul>\n  <li>Streamlined project management tools that help you plan and execute projects with ease</li>\n  <li>Comprehensive customer management capabilities that enable you to track customer interactions and build stronger relationships</li>\n  <li>Powerful reporting and analytics capabilities that give you insights into your business operations and help you make data-driven decisions</li>\n  <li>Advanced security features that keep your data safe and secure at all times</li>\n</ul>\n<p>But that's not all. Our software also comes with a user-friendly interface that is easy to navigate, making it simple for your team to get up and running quickly. Plus, our customer support team is always on hand to answer any questions you may have and provide ongoing assistance as needed.</p>\n<p>We are confident that our software will be a game-changer for your business, and we would love the opportunity to show you how it works. To learn more about our product and to schedule a demo, please visit our website or contact us directly.</p>\n<p>Thank you for considering our software, and we look forward to the opportunity to work with you.</p>\n</br>\n<p>Sincerely,</p>\n<p>John Yu</p>\n</br>\n"," />",(0,M.jsxs)(S.Z,{sx:{my:2},children:[(0,M.jsx)(x.Z,{variant:"h4",children:"Attachment"}),(0,M.jsx)(l.Z,{sx:{height:30,borderRadius:2,p:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",rowGap:5},children:(0,M.jsx)(w.ZP,{onDrop:function(e){return console.log(e)},children:function(e){var r=e.getRootProps,o=e.getInputProps;return(0,M.jsx)("section",{children:(0,M.jsxs)("div",(0,n.Z)((0,n.Z)({},r()),{},{children:[(0,M.jsx)("input",(0,n.Z)({},o())),(0,M.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,M.jsx)(f.Z,{color:"secondary","aria-label":"add an alarm",sx:{bgcolor:t.palette.secondary.light},children:(0,M.jsx)(j.Z,{})}),(0,M.jsx)(x.Z,{variant:"h4",children:" Drag and drop or Click to upload"})]})]}))})}})})]}),o.submit&&(0,M.jsx)(l.Z,{sx:{mt:3},children:(0,M.jsx)(h.Z,{error:!0,children:o.submit})}),(0,M.jsx)(l.Z,{sx:{mt:2},children:(0,M.jsxs)(c.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,M.jsx)(g.Z,{variant:"contained",endIcon:(0,M.jsx)(Z.Z,{}),children:"Draft"}),(0,M.jsx)(g.Z,{variant:"contained",endIcon:(0,M.jsx)(b.Z,{}),onClick:function(){return e("/pages/mail",{replace:!0})},children:"Send"})]})})]})})}})})})]})}},42161:function(e,t,r){var n=r(76189),o=r(80184);t.Z=(0,n.Z)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},27988:function(e,t,r){var n=r(76189),o=r(80184);t.Z=(0,n.Z)((0,o.jsx)("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts")},2192:function(e,t,r){var n=r(76189),o=r(80184);t.Z=(0,n.Z)((0,o.jsx)("path",{d:"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"}),"SendOutlined")},93517:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(93433),o=r(29439),a=r(4942),i=r(87462),s=r(63366),l=r(72791),c=(r(57441),r(28182)),u=r(94419),d=r(66934),p=r(31402),h=r(20890),m=r(12065),f=r(76189),x=r(80184),g=(0,f.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=r(95080),b=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),j=(0,d.ZP)(g)({width:24,height:16});var v=function(e){var t=e;return(0,x.jsx)("li",{children:(0,x.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,x.jsx)(j,{ownerState:t})}))})},y=r(75878),w=r(21217);function C(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,d.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(k.li),t.li),t.root]}})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,t,r,n){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,x.jsx)(I,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(i))):o.push(a),o}),[])}var P=l.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=r.children,d=r.className,h=r.component,m=void 0===h?"nav":h,f=r.expandText,g=void 0===f?"Show path":f,Z=r.itemsAfterCollapse,b=void 0===Z?1:Z,j=r.itemsBeforeCollapse,y=void 0===j?1:j,w=r.maxItems,k=void 0===w?8:w,I=r.separator,P=void 0===I?"/":I,_=(0,s.Z)(r,S),T=l.useState(!1),z=(0,o.Z)(T,2),A=z[0],E=z[1],N=(0,i.Z)({},r,{component:m,expanded:A,expandText:g,itemsAfterCollapse:b,itemsBeforeCollapse:y,maxItems:k,separator:P}),L=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)}(N),q=l.useRef(null),D=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,x.jsx)("li",{className:L.li,children:e},"child-".concat(t))}));return(0,x.jsx)(B,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,c.Z)(L.root,d),ownerState:N},_,{children:(0,x.jsx)(R,{className:L.ol,ref:q,ownerState:N,children:M(A||k&&D.length<=k?D:function(e){return y+b>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,x.jsx)(v,{"aria-label":g,onClick:function(){E(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-b,e.length)))}(D),L.separator,P,N)})}))}))},63648:function(){}}]);
//# sourceMappingURL=4469.f5b2a9fe.chunk.js.map