"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[2301],{36758:function(e,n,t){var r=t(93433),i=t(65166),o=t(763),a=(0,r.Z)(Array(24)).map((function(e,n){return{id:i.We.datatype.uuid(),name:i.We.name.fullName(),avatarUrl:t(91602)("./user".concat(n+1,".png")),email:i.We.internet.email(),phone:i.We.phone.imei(),address:{country:i.We.address.county(),state:i.We.address.state(),city:i.We.address.city(),street:i.We.address.street()},company:i.We.company.name(),isVerified:i.We.datatype.boolean(),status:(0,o.sample)(["active","banned"]),createdAt:i.We.date.past(),role:(0,o.sample)(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}}));n.Z=a},40268:function(e,n,t){var r=t(1413),i=t(45987),o=t(52007),a=t.n(o),l=t(72791),c=t(62711),s=t(64554),d=t(80184),h=["icon","width","sx"],u=(0,l.forwardRef)((function(e,n){var t=e.icon,o=e.width,a=void 0===o?20:o,l=e.sx,u=(0,i.Z)(e,h);return(0,d.jsx)(s.Z,(0,r.Z)({ref:n,component:c.JO,icon:t,sx:(0,r.Z)({width:a,height:a},l)},u))}));u.propTypes={sx:a().object,width:a().oneOfType([a().number,a().string]),icon:a().oneOfType([a().element,a().string])},n.Z=u},1695:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),i=t(45987),o=t(72791),a=t(13967),l=t(64554),c=t(66934),s=t(12065),d=(0,c.ZP)(l.Z)((function(e){var n=e.theme,t=e.ownerState,i="light"===n.palette.mode,o="filled"===t.variant,a="outlined"===t.variant,l="soft"===t.variant,c=(0,r.Z)({},"default"===t.color&&(0,r.Z)((0,r.Z)({},a&&{backgroundColor:"transparent",color:n.palette.text.primary,border:"1px solid ".concat((0,s.Fq)(n.palette.grey[500],.32))}),l&&{color:i?n.palette.text.primary:n.palette.common.white,backgroundColor:(0,s.Fq)(n.palette.grey[500],.16)})),d=(0,r.Z)({},"default"!==t.color&&(0,r.Z)((0,r.Z)((0,r.Z)({},o&&{color:n.palette[t.color].contrastText,backgroundColor:n.palette[t.color].main}),a&&{backgroundColor:"transparent",color:n.palette[t.color].main,border:"1px solid ".concat(n.palette[t.color].main)}),l&&{color:n.palette[t.color][i?"dark":"light"],backgroundColor:(0,s.Fq)(n.palette[t.color].main,.16)}));return(0,r.Z)((0,r.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:n.spacing(0,1),color:n.palette.grey[800],fontSize:n.typography.pxToRem(12),fontFamily:n.typography.fontFamily,backgroundColor:n.palette.grey[300],fontWeight:n.typography.fontWeightBold},d),c)})),h=t(80184),u=["children","color","variant","startIcon","endIcon","sx"],x=(0,o.forwardRef)((function(e,n){var t=e.children,o=e.color,c=void 0===o?"default":o,s=e.variant,x=void 0===s?"soft":s,p=e.startIcon,f=e.endIcon,Z=e.sx,g=(0,i.Z)(e,u),m=(0,a.Z)(),j={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,h.jsxs)(d,(0,r.Z)((0,r.Z)({ref:n,component:"span",ownerState:{color:c,variant:x},sx:(0,r.Z)((0,r.Z)((0,r.Z)({},p&&{pl:.75}),f&&{pr:.75}),Z),theme:m},g),{},{children:[p&&(0,h.jsxs)(l.Z,{sx:(0,r.Z)({mr:.75},j),children:[" ",p," "]}),t,f&&(0,h.jsxs)(l.Z,{sx:(0,r.Z)({ml:.75},j),children:[" ",f," "]})]}))}))},88618:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),i=t(45987),o=t(72791),a=t(64554),l=t(52007),c=t.n(l),s=t(57689),d=function(e){var n=e.children,t=(0,s.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null};d.propTypes={children:c().node};var h=d,u=(t(49177),t(63785),t(80184)),x=(t(16461),["sx","children"]),p=function(e){var n=e.sx,t=e.children,o=(0,i.Z)(e,x);return(0,u.jsx)(h,{children:(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({px:1},n)},o),{},{children:t}))})}},16983:function(e,n,t){t.d(n,{Z:function(){return d}});t(72791);var r=t(42161),i=t(67414),o=t(24518),a=t(93517),l=t(50533),c=t(20890),s=t(80184);function d(e){var n=e.title,t=e.breadcrumbs,d=e.back,h=e.stats,u=e.action;return(0,s.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[(0,s.jsxs)(i.Z,{justifyContent:"flex-start",alignItems:"flex-start",children:[d&&(0,s.jsx)(o.Z,{startIcon:(0,s.jsx)(r.Z,{}),onClick:function(){return window.history.back()},children:"Back"}),t&&(0,s.jsx)(a.Z,{"aria-label":"breadcrumb",children:t.map((function(e,n){return(0,s.jsx)(l.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},n)}))}),(0,s.jsx)(c.Z,{variant:"h3",gutterBottom:!0,children:n}),h]}),u]})}},72301:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(29439),i=t(763),o=t(86631),a=t(72791),l=t(24518),c=t(64554),s=t(39281),d=t(79836),h=t(53382),u=t(35855),x=t(53994),p=t(94454),f=t(67414),Z=t(60220),g=t(20890),m=t(13400),j=t(35527),v=t(67492),b=t(15473),y=t(23786),w=t(1695),k=t(40268),C=t(5789),S=t(1413),I=t(56890),W=t(80720),R=t(80184),P={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function F(e){var n=e.order,t=e.orderBy,r=e.rowCount,i=e.headLabel,o=e.numSelected,a=e.onRequestSort,l=e.onSelectAllClick;return(0,R.jsx)(I.Z,{children:(0,R.jsxs)(u.Z,{children:[(0,R.jsx)(x.Z,{padding:"checkbox",children:(0,R.jsx)(p.Z,{indeterminate:o>0&&o<r,checked:r>0&&o===r,onChange:l})}),i.map((function(e){return(0,R.jsx)(x.Z,{align:e.alignRight?"right":"left",sortDirection:t===e.id&&n,children:(0,R.jsxs)(W.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:(r=e.id,function(e){a(e,r)}),children:[e.label,t===e.id?(0,R.jsx)(c.Z,{sx:(0,S.Z)({},P),children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var T=t(66934),D=t(12065),N=t(34663),O=t(28029),U=t(63466),_=t(20068),B=t(75654),q=(0,T.ZP)(N.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),A=(0,T.ZP)(O.Z)((function(e){var n=e.theme;return{width:240,transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:n.shadows[6]},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,D.Fq)(n.palette.grey[500],.32)," !important")}}}));function M(e){var n=e.numSelected,t=e.filterName,r=e.onFilterName;return(0,R.jsxs)(q,{sx:(0,S.Z)({},n>0&&{color:"text.default",bgcolor:"background.default"}),children:[n>0?(0,R.jsxs)(g.Z,{component:"div",variant:"subtitle1",children:[n," selected"]}):(0,R.jsx)(A,{value:t,onChange:r,placeholder:"Search user...",startAdornment:(0,R.jsx)(U.Z,{position:"start",children:(0,R.jsx)(B.Z,{sx:{color:"text.disabled",width:28,height:28}})})}),n>0?(0,R.jsx)(_.Z,{title:"Delete",children:(0,R.jsx)(m.Z,{children:(0,R.jsx)(k.Z,{icon:"eva:trash-2-fill"})})}):(0,R.jsx)(_.Z,{title:"Filter list",children:(0,R.jsx)(m.Z,{children:(0,R.jsx)(k.Z,{icon:"ic:round-filter-list"})})})]})}var z=t(36758),L=t(88618),E=t(16983),V=[{id:"name",label:"Name",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"isVerified",label:"Verified",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function G(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function H(){var e=(0,a.useState)(null),n=(0,r.Z)(e,2),t=n[0],S=n[1],I=(0,a.useState)(0),W=(0,r.Z)(I,2),P=W[0],T=W[1],D=(0,a.useState)("asc"),N=(0,r.Z)(D,2),O=N[0],U=N[1],_=(0,a.useState)([]),B=(0,r.Z)(_,2),q=B[0],A=B[1],H=(0,a.useState)("name"),X=(0,r.Z)(H,2),J=X[0],Y=X[1],K=(0,a.useState)(""),Q=(0,r.Z)(K,2),$=Q[0],ee=Q[1],ne=(0,a.useState)(5),te=(0,r.Z)(ne,2),re=te[0],ie=te[1],oe=z.Z,ae=function(e){S(e.currentTarget)},le=P>0?Math.max(0,(1+P)*re-oe.length):0,ce=function(e,n,t){var r=e.map((function(e,n){return[e,n]}));return r.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t?(0,i.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})):r.map((function(e){return e[0]}))}(oe,function(e,n){return"desc"===e?function(e,t){return G(e,t,n)}:function(e,t){return-G(e,t,n)}}(O,J),$),se=!ce.length&&!!$;return(0,R.jsxs)(L.Z,{children:[(0,R.jsx)(E.Z,{title:"Users",action:(0,R.jsx)(l.Z,{variant:"contained",startIcon:(0,R.jsx)(k.Z,{icon:"eva:plus-fill"}),children:"New User"})}),(0,R.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,R.jsxs)(C.Z,{sx:{flexGrow:1,pt:0},children:[(0,R.jsx)(M,{numSelected:q.length,filterName:$,onFilterName:function(e){T(0),ee(e.target.value)}}),(0,R.jsx)(s.Z,{children:(0,R.jsxs)(d.Z,{children:[(0,R.jsx)(F,{order:O,orderBy:J,headLabel:V,rowCount:oe.length,numSelected:q.length,onRequestSort:function(e,n){U(J===n&&"asc"===O?"desc":"asc"),Y(n)},onSelectAllClick:function(e){if(e.target.checked){var n=oe.map((function(e){return e.name}));A(n)}else A([])}}),(0,R.jsxs)(h.Z,{children:[ce.slice(P*re,P*re+re).map((function(e){var n=e.id,t=e.name,r=e.role,i=e.status,a=e.company,l=e.avatarUrl,c=e.isVerified,s=-1!==q.indexOf(t);return(0,R.jsxs)(u.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:s,children:[(0,R.jsx)(x.Z,{padding:"checkbox",children:(0,R.jsx)(p.Z,{checked:s,onChange:function(e){return function(e,n){var t=q.indexOf(n),r=[];-1===t?r=r.concat(q,n):0===t?r=r.concat(q.slice(1)):t===q.length-1?r=r.concat(q.slice(0,-1)):t>0&&(r=r.concat(q.slice(0,t),q.slice(t+1))),A(r)}(0,t)}})}),(0,R.jsx)(x.Z,{component:"th",scope:"row",padding:"none",children:(0,R.jsxs)(f.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,R.jsx)(Z.Z,{alt:t,src:l}),(0,R.jsx)(g.Z,{variant:"subtitle2",noWrap:!0,children:t})]})}),(0,R.jsx)(x.Z,{align:"left",children:a}),(0,R.jsx)(x.Z,{align:"left",children:r}),(0,R.jsx)(x.Z,{align:"left",children:c?"Yes":"No"}),(0,R.jsx)(x.Z,{align:"left",children:(0,R.jsx)(w.Z,{color:"banned"===i?"error":"success",children:(0,o.G)(i)})}),(0,R.jsx)(x.Z,{align:"right",children:(0,R.jsx)(m.Z,{size:"large",color:"inherit",onClick:ae,children:(0,R.jsx)(k.Z,{icon:"eva:more-vertical-fill"})})})]},n)})),le>0&&(0,R.jsx)(u.Z,{style:{height:53*le},children:(0,R.jsx)(x.Z,{colSpan:6})})]}),se&&(0,R.jsx)(h.Z,{children:(0,R.jsx)(u.Z,{children:(0,R.jsx)(x.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,R.jsxs)(j.Z,{sx:{textAlign:"center"},children:[(0,R.jsx)(g.Z,{variant:"h6",paragraph:!0,children:"Not found"}),(0,R.jsxs)(g.Z,{variant:"body2",children:["No results found for \xa0",(0,R.jsxs)("strong",{children:['"',$,'"']}),".",(0,R.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})})]})}),(0,R.jsx)(v.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:oe.length,rowsPerPage:re,page:P,onPageChange:function(e,n){T(n)},onRowsPerPageChange:function(e){T(0),ie(parseInt(e.target.value,10))}})]}),(0,R.jsxs)(b.ZP,{open:Boolean(t),anchorEl:t,onClose:function(){S(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{p:1,width:140,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}}},children:[(0,R.jsxs)(y.Z,{children:[(0,R.jsx)(k.Z,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),(0,R.jsxs)(y.Z,{sx:{color:"error.main"},children:[(0,R.jsx)(k.Z,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})]})}}}]);
//# sourceMappingURL=2301.da036018.chunk.js.map