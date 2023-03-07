"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[9422],{36758:function(e,r,t){var n=t(93433),a=t(65166),o=t(763),c=(0,n.Z)(Array(24)).map((function(e,r){return{id:a.We.datatype.uuid(),name:a.We.name.fullName(),avatarUrl:t(91602)("./user".concat(r+1,".png")),email:a.We.internet.email(),phone:a.We.phone.imei(),address:{country:a.We.address.county(),state:a.We.address.state(),city:a.We.address.city(),street:a.We.address.street()},company:a.We.company.name(),isVerified:a.We.datatype.boolean(),status:(0,o.sample)(["active","banned"]),createdAt:a.We.date.past(),role:(0,o.sample)(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}}));r.Z=c},79456:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(1413),a=t(45987),o=t(72791),c=t(64554),i=t(52007),s=t.n(i),l=t(57689),d=function(e){var r=e.children,t=(0,l.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),r||null};d.propTypes={children:s().node};var p=d,u=t(80184),h=["sx","children"],x=function(e){var r=e.sx,t=e.children,o=(0,a.Z)(e,h);return(0,u.jsx)(p,{children:(0,u.jsx)(c.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({minHeight:"calc(100vh - 80px)",mt:2,px:2},r)},o),{},{children:t}))})}},16983:function(e,r,t){t.d(r,{Z:function(){return j}});var n=t(1413),a=t(45987),o=(t(72791),t(42161)),c=t(9087),i=t(64554),s=t(61889),l=t(93517),d=t(50533),p=t(67414),u=t(20068),h=t(13400),x=t(20890),m=t(24518),Z=t(29886),f=t(57689),g=t(80184),v=["title","subtitle","breadcrumbs","back","control","action"];function j(e){var r=(0,Z.u)(),t=(0,f.s0)(),j=e.title,b=e.subtitle,y=e.breadcrumbs,w=e.back,k=e.control,C=e.action,S=(0,a.Z)(e,v);return(0,g.jsx)(i.Z,{sx:{padding:"".concat(r.spacing(4)),marginBottom:"".concat(r.spacing(4)),boxShadow:"dark"===r.palette.mode?"0 1px 0   ".concat(r.palette.grey[200],", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat(r.palette.grey[300],", 0px 4px 8px -5px  ").concat(r.palette.grey[200])},children:(0,g.jsxs)(s.ZP,(0,n.Z)((0,n.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},S),{},{children:[(0,g.jsxs)(s.ZP,{item:!0,children:[y&&(0,g.jsx)(l.Z,{"aria-label":"breadcrumb",children:y.map((function(e,r){return(0,g.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},r)}))}),(0,g.jsxs)(p.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[w&&(0,g.jsx)(u.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,g.jsx)(h.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,g.jsx)(o.Z,{})})}),(0,g.jsxs)(p.Z,{spacing:1,children:[(0,g.jsx)(x.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:j}),b&&(0,g.jsx)(x.Z,{variant:"subtitle2",children:b})]})]})]}),(0,g.jsxs)(s.ZP,{item:!0,children:[C,k&&(0,g.jsx)(m.Z,{variant:"contained",startIcon:(0,g.jsx)(c.Z,{fontSize:"small"}),onClick:function(){return t(k.route)},children:k.label})]})]}))})}},99422:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(61889),a=t(67414),o=t(60220),c=(t(72791),t(13400)),i=t(20068),s=t(20890),l=t(59332),d=t(23104),p=t(36758),u=t(79456),h=t(16983),x=t(79816),m=t(80184),Z=function(e){var r=e.user||{},t=r.name,p=r.role,u=r.address,h=r.phone,Z=r.avatarUrl;return(0,m.jsx)(x.Z,{children:(0,m.jsxs)(n.ZP,{container:!0,children:[(0,m.jsx)(n.ZP,{item:!0,constainer:!0,lg:12,md:12,sm:12,xs:12,children:(0,m.jsxs)(a.Z,{direction:"row",spacing:1,children:[(0,m.jsx)(o.Z,{src:Z,sx:{width:100,height:100}}),(0,m.jsxs)(a.Z,{sx:{display:"flex",alignItems:"flex-left",pl:1,pb:1},spacing:1,children:[(0,m.jsx)(s.Z,{variant:"h6",noWrap:!0,children:p}),(0,m.jsx)(s.Z,{variant:"h3",noWrap:!0,children:t}),(0,m.jsx)(s.Z,{variant:"subtitle1",color:"text.secondary",paragraph:!0,gutterBottom:!0,children:"About: Web Designer / UX / Graphic Artist"}),(0,m.jsx)(s.Z,{variant:"subtitle1",color:"text.secondary",paragraph:!0,gutterBottom:!0,children:""}),(0,m.jsxs)(s.Z,{variant:"subtitle2",color:"text.secondary",paragraph:!0,children:["Address: ","".concat(u.street," ").concat(u.city," ").concat(u.state," ").concat(u.country)]}),(0,m.jsxs)(s.Z,{variant:"subtitle2",color:"text.secondary",paragraph:!0,children:["Phone #: ",h]})]})]})}),(0,m.jsxs)(n.ZP,{item:!0,lg:12,md:12,sm:12,xs:12,children:[(0,m.jsx)(i.Z,{title:"Chat",children:(0,m.jsx)(c.Z,{color:"secondary",children:(0,m.jsx)(d.Z,{})})}),(0,m.jsx)(i.Z,{title:"view profile",children:(0,m.jsx)(c.Z,{color:"primary",children:(0,m.jsx)(l.Z,{})})})]})]})})};function f(){return(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(h.Z,{title:"Contract"}),(0,m.jsx)(n.ZP,{container:!0,spacing:3,children:p.Z.map((function(e,r){return(0,m.jsx)(n.ZP,{item:!0,container:!0,lg:4,md:4,sm:12,xs:12,children:(0,m.jsx)(Z,{user:e})},r)}))})]})}},59332:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),o=t(80184),c=(0,a.default)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");r.Z=c},23104:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),o=t(80184),c=(0,a.default)((0,o.jsx)("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"}),"QuestionAnswer");r.Z=c},9087:function(e,r,t){var n=t(76189),a=t(80184);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone")},42161:function(e,r,t){var n=t(76189),a=t(80184);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},93517:function(e,r,t){t.d(r,{Z:function(){return A}});var n=t(93433),a=t(29439),o=t(4942),c=t(87462),i=t(63366),s=t(72791),l=(t(57441),t(28182)),d=t(94419),p=t(66934),u=t(31402),h=t(20890),x=t(12065),m=t(76189),Z=t(80184),f=(0,m.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(95080),v=(0,p.ZP)(g.Z)((function(e){var r=e.theme;return(0,c.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,c.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,c.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,x._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(r.palette.grey[600],.12)})})})),j=(0,p.ZP)(f)({width:24,height:16});var b=function(e){var r=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(v,(0,c.Z)({focusRipple:!0},e,{ownerState:r,children:(0,Z.jsx)(j,{ownerState:r})}))})},y=t(75878),w=t(21217);function k(e){return(0,w.Z)("MuiBreadcrumbs",e)}var C=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(C.li),r.li),r.root]}})({}),W=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,t,n){return e.reduce((function(a,o,c){return c<e.length-1?a=a.concat(o,(0,Z.jsx)(P,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(c))):a.push(o),a}),[])}var A=s.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,p=t.className,h=t.component,x=void 0===h?"nav":h,m=t.expandText,f=void 0===m?"Show path":m,g=t.itemsAfterCollapse,v=void 0===g?1:g,j=t.itemsBeforeCollapse,y=void 0===j?1:j,w=t.maxItems,C=void 0===w?8:w,P=t.separator,A=void 0===P?"/":P,z=(0,i.Z)(t,S),H=s.useState(!1),I=(0,a.Z)(H,2),R=I[0],_=I[1],D=(0,c.Z)({},t,{component:x,expanded:R,expandText:f,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:C,separator:A}),T=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(D),N=s.useRef(null),U=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,Z.jsx)("li",{className:T.li,children:e},"child-".concat(r))}));return(0,Z.jsx)(B,(0,c.Z)({ref:r,component:x,color:"text.secondary",className:(0,l.Z)(T.root,p),ownerState:D},z,{children:(0,Z.jsx)(W,{className:T.ol,ref:N,ownerState:D,children:M(R||C&&U.length<=C?U:function(e){return y+v>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,Z.jsx)(b,{"aria-label":f,onClick:function(){_(!0);var e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-v,e.length)))}(U),T.separator,A,D)})}))}))}}]);
//# sourceMappingURL=9422.ca2a24db.chunk.js.map