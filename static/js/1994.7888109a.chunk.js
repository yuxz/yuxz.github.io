"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[1994],{36758:function(e,t,n){var r=n(93433),o=n(65166),i=n(763),a=(0,r.Z)(Array(24)).map((function(e,t){return{id:o.We.datatype.uuid(),name:o.We.name.fullName(),avatarUrl:n(91602)("./user".concat(t+1,".png")),email:o.We.internet.email(),phone:o.We.phone.imei(),address:{country:o.We.address.county(),state:o.We.address.state(),city:o.We.address.city(),street:o.We.address.street()},company:o.We.company.name(),isVerified:o.We.datatype.boolean(),status:(0,i.sample)(["active","banned"]),createdAt:o.We.date.past(),role:(0,i.sample)(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}}));t.Z=a},1695:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),o=n(45987),i=n(72791),a=n(13967),c=n(98530),s=n(20033),l=n(48),d=(0,s.ZP)(c.Z)((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode,i="filled"===n.variant,a="outlined"===n.variant,c="soft"===n.variant,s=(0,r.Z)({},"default"===n.color&&(0,r.Z)((0,r.Z)({},a&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat((0,l.Fq)(t.palette.grey[500],.32))}),c&&{color:o?t.palette.text.primary:t.palette.common.white,backgroundColor:(0,l.Fq)(t.palette.grey[500],.16)})),d=(0,r.Z)({},"default"!==n.color&&(0,r.Z)((0,r.Z)((0,r.Z)({},i&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main}),a&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"1px solid ".concat(t.palette[n.color].main)}),c&&{color:t.palette[n.color][o?"dark":"light"],backgroundColor:(0,l.Fq)(t.palette[n.color].main,.16)}));return(0,r.Z)((0,r.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:"".concat(t.shape.borderRadius,"px"),cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},d),s)})),u=n(80184),h=["children","color","variant","startIcon","endIcon","sx"],p=(0,i.forwardRef)((function(e,t){var n=e.children,i=e.color,s=void 0===i?"default":i,l=e.variant,p=void 0===l?"soft":l,x=e.startIcon,f=e.endIcon,Z=e.sx,m=(0,o.Z)(e,h),g=(0,a.Z)(),v={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,u.jsxs)(d,(0,r.Z)((0,r.Z)({ref:t,component:"span",ownerState:{color:s,variant:p},sx:(0,r.Z)((0,r.Z)((0,r.Z)({},x&&{pl:.75}),f&&{pr:.75}),Z),theme:g},m),{},{children:[x&&(0,u.jsxs)(c.Z,{sx:(0,r.Z)({mr:.75},v),children:[" ",x," "]}),n,f&&(0,u.jsxs)(c.Z,{sx:(0,r.Z)({ml:.75},v),children:[" ",f," "]})]}))}))},79456:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),o=n(45987),i=n(72791),a=n(98530),c=n(52007),s=n.n(c),l=n(57689),d=function(e){var t=e.children,n=(0,l.TH)().pathname;return(0,i.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),t||null};d.propTypes={children:s().node};var u=d,h=n(39472),p=n(80184),x=["sx","children"],f=function(e){var t=(0,h.H9)().isMenuOpen,n=e.sx,i=e.children,c=(0,o.Z)(e,x);return(0,p.jsx)(u,{children:(0,p.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({mt:3,px:t?5:10},n)},c),{},{children:i}))})}},88097:function(e,t,n){var r=n(1413),o=n(45987),i=(n(72791),n(42161)),a=n(9087),c=n(35527),s=n(61889),l=n(93517),d=n(50533),u=n(53767),h=n(20068),p=n(13400),x=n(20890),f=n(24518),Z=n(29886),m=n(57689),g=n(80184),v=["title","subtitle","breadcrumbs","back","control","action"];t.Z=function(e){var t=(0,Z.u)(),n=(0,m.s0)(),j=e.title,b=e.subtitle,y=e.breadcrumbs,w=e.back,S=e.control,k=e.action,C=(0,o.Z)(e,v);return(0,g.jsx)(c.Z,{variant:"outlined",elevation:18,sx:{padding:t.spacing(3),marginBottom:t.spacing(3)},children:(0,g.jsxs)(s.ZP,(0,r.Z)((0,r.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},C),{},{children:[(0,g.jsxs)(s.ZP,{item:!0,children:[y&&(0,g.jsx)(l.Z,{"aria-label":"breadcrumb",children:y.map((function(e,t){return(0,g.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},t)}))}),(0,g.jsxs)(u.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[w&&(0,g.jsx)(h.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,g.jsx)(p.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,g.jsx)(i.Z,{})})}),(0,g.jsxs)(u.Z,{spacing:1,children:[(0,g.jsx)(x.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:j}),b&&(0,g.jsx)(x.Z,{variant:"subtitle2",children:b})]})]})]}),(0,g.jsxs)(s.ZP,{item:!0,children:[k,S&&(0,g.jsx)(f.Z,{variant:"contained",startIcon:(0,g.jsx)(a.Z,{fontSize:"small"}),onClick:function(){return n(S.route)},children:S.label})]})]}))})}},71994:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(29439),o=n(763),i=n(29388);function a(e){return e.toLowerCase()}var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function l(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function d(e,t){var n=e.toLowerCase();return 0===t?function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(n):n}function u(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?c:n,o=t.stripRegexp,i=void 0===o?s:o,d=t.transform,u=void 0===d?a:d,h=t.delimiter,p=void 0===h?" ":h,x=l(l(e,r,"$1\0$2"),i,"\0"),f=0,Z=x.length;"\0"===x.charAt(f);)f++;for(;"\0"===x.charAt(Z-1);)Z--;return x.slice(f,Z).split("\0").map(u).join(p)}(e,(0,i.pi)({delimiter:" ",transform:d},t))}var h=n(72791),p=n(13967),x=n(24518),f=n(98530),Z=n(39281),m=n(79836),g=n(53382),v=n(35855),j=n(53994),b=n(94454),y=n(53767),w=n(60220),S=n(20890),k=n(13400),C=n(35527),I=n(67492),R=n(15473),P=n(23786),L=n(1695),D=n(5789),W=n(1413),A=n(56890),T=n(80720),z=n(80184),F={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function N(e){var t=e.order,n=e.orderBy,r=e.rowCount,o=e.headLabel,i=e.numSelected,a=e.onRequestSort,c=e.onSelectAllClick;return(0,z.jsx)(A.Z,{children:(0,z.jsxs)(v.Z,{children:[(0,z.jsx)(j.Z,{padding:"checkbox",children:(0,z.jsx)(b.Z,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:c})}),o.map((function(e){return(0,z.jsx)(j.Z,{align:e.alignRight?"right":"left",sortDirection:n===e.id&&t,children:(0,z.jsxs)(T.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){a(e,r)}),children:[e.label,n===e.id?(0,z.jsx)(f.Z,{sx:(0,W.Z)({},F),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var M=n(20033),U=n(48),B=n(34663),O=n(28029),_=n(63466),q=n(20068),V=n(15265),E=(0,M.ZP)(B.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),H=(0,M.ZP)(O.Z)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.shadows[6]},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,U.Fq)(t.palette.grey[500],.32)," !important")}}}));function G(e){var t=e.numSelected,n=e.filterName,r=e.onFilterName,o=(0,p.Z)();return(0,z.jsxs)(E,{sx:(0,W.Z)({},t>0&&{color:"text.default",bgcolor:"background.default"}),children:[t>0?(0,z.jsxs)(S.Z,{component:"div",variant:"subtitle1",children:[t," selected"]}):(0,z.jsx)(H,{value:n,onChange:r,placeholder:"Search user...",startAdornment:(0,z.jsx)(_.Z,{position:"start",children:(0,z.jsx)(V.IconSearch,{size:20,color:o.palette.grey[400],stroke:2,strokeLinejoin:"miter"})})}),t>0?(0,z.jsx)(q.Z,{title:"Delete",children:(0,z.jsx)(k.Z,{children:(0,z.jsx)(V.IconTrash,{})})}):(0,z.jsx)(q.Z,{title:"Filter list",children:(0,z.jsx)(k.Z,{children:(0,z.jsx)(V.IconFilter,{size:20,color:o.palette.grey[400],stroke:2,strokeLinejoin:"miter"})})})]})}var X=n(36758),$=n(79456),Y=n(88097),J=[{id:"name",label:"Name",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"isVerified",label:"Verified",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function K(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Q(){var e=(0,p.Z)(),t=(0,h.useState)(null),n=(0,r.Z)(t,2),i=n[0],a=n[1],c=(0,h.useState)(0),s=(0,r.Z)(c,2),l=s[0],d=s[1],W=(0,h.useState)("asc"),A=(0,r.Z)(W,2),T=A[0],F=A[1],M=(0,h.useState)([]),U=(0,r.Z)(M,2),B=U[0],O=U[1],_=(0,h.useState)("name"),q=(0,r.Z)(_,2),V=q[0],E=q[1],H=(0,h.useState)(""),Q=(0,r.Z)(H,2),ee=Q[0],te=Q[1],ne=(0,h.useState)(5),re=(0,r.Z)(ne,2),oe=re[0],ie=re[1],ae=X.Z,ce=function(e){a(e.currentTarget)},se=l>0?Math.max(0,(1+l)*oe-ae.length):0,le=function(e,t,n){var r=e.map((function(e,t){return[e,t]}));return r.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n?(0,o.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())})):r.map((function(e){return e[0]}))}(ae,function(e,t){return"desc"===e?function(e,n){return K(e,n,t)}:function(e,n){return-K(e,n,t)}}(T,V),ee),de=!le.length&&!!ee;return(0,z.jsxs)($.Z,{children:[(0,z.jsx)(Y.Z,{title:"Users",action:(0,z.jsx)(x.Z,{variant:"contained",startIcon:(0,z.jsx)(IconPlus,{}),children:"New User"})}),(0,z.jsxs)(f.Z,{sx:{flexGrow:1},children:[(0,z.jsxs)(D.Z,{sx:{flexGrow:1,pt:0},children:[(0,z.jsx)(G,{numSelected:B.length,filterName:ee,onFilterName:function(e){d(0),te(e.target.value)}}),(0,z.jsx)(Z.Z,{children:(0,z.jsxs)(m.Z,{children:[(0,z.jsx)(N,{order:T,orderBy:V,headLabel:J,rowCount:ae.length,numSelected:B.length,onRequestSort:function(e,t){F(V===t&&"asc"===T?"desc":"asc"),E(t)},onSelectAllClick:function(e){if(e.target.checked){var t=ae.map((function(e){return e.name}));O(t)}else O([])}}),(0,z.jsxs)(g.Z,{children:[le.slice(l*oe,l*oe+oe).map((function(e){var t=e.id,n=e.name,r=e.role,o=e.status,i=e.company,a=e.avatarUrl,c=e.isVerified,s=-1!==B.indexOf(n);return(0,z.jsxs)(v.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:s,children:[(0,z.jsx)(j.Z,{padding:"checkbox",children:(0,z.jsx)(b.Z,{checked:s,onChange:function(e){return function(e,t){var n=B.indexOf(t),r=[];-1===n?r=r.concat(B,t):0===n?r=r.concat(B.slice(1)):n===B.length-1?r=r.concat(B.slice(0,-1)):n>0&&(r=r.concat(B.slice(0,n),B.slice(n+1))),O(r)}(0,n)}})}),(0,z.jsx)(j.Z,{component:"th",scope:"row",padding:"none",children:(0,z.jsxs)(y.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,z.jsx)(w.Z,{alt:n,src:a}),(0,z.jsx)(S.Z,{variant:"subtitle2",noWrap:!0,children:n})]})}),(0,z.jsx)(j.Z,{align:"left",children:i}),(0,z.jsx)(j.Z,{align:"left",children:r}),(0,z.jsx)(j.Z,{align:"left",children:c?"Yes":"No"}),(0,z.jsx)(j.Z,{align:"left",children:(0,z.jsx)(L.Z,{color:"banned"===o?"error":"success",children:u(o)})}),(0,z.jsx)(j.Z,{align:"right",children:(0,z.jsx)(k.Z,{size:"large",color:"inherit",onClick:ce,children:(0,z.jsx)(IconDotsVertical,{})})})]},t)})),se>0&&(0,z.jsx)(v.Z,{style:{height:53*se},children:(0,z.jsx)(j.Z,{colSpan:6})})]}),de&&(0,z.jsx)(g.Z,{children:(0,z.jsx)(v.Z,{children:(0,z.jsx)(j.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,z.jsxs)(C.Z,{sx:{textAlign:"center"},children:[(0,z.jsx)(S.Z,{variant:"h6",paragraph:!0,children:"Not found"}),(0,z.jsxs)(S.Z,{variant:"body2",children:["No results found for \xa0",(0,z.jsxs)("strong",{children:['"',ee,'"']}),".",(0,z.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})})]})}),(0,z.jsx)(I.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ae.length,rowsPerPage:oe,page:l,onPageChange:function(e,t){d(t)},onRowsPerPageChange:function(e){d(0),ie(parseInt(e.target.value,10))}})]}),(0,z.jsxs)(R.ZP,{open:Boolean(i),anchorEl:i,onClose:function(){a(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{p:1,width:140,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:"".concat(e.shape.borderRadius,"px")}}},children:[(0,z.jsxs)(P.Z,{children:[(0,z.jsx)(ListItemIcon,{fontSize:"small",children:(0,z.jsx)(IconPencil,{})}),"Edit"]}),(0,z.jsxs)(P.Z,{sx:{color:"error.main"},children:[(0,z.jsx)(ListItemIcon,{fontSize:"small",children:(0,z.jsx)(IconTrash,{})}),"Delete"]})]})]})]})}},80720:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),o=n(63366),i=n(87462),a=n(79961),c=n(28182),s=n(72791),l=n(95080),d=n(76189),u=n(80184),h=(0,d.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),p=n(20033),x=n(81894),f=n(14036),Z=n(68137),m=n(26246);function g(e){return(0,m.Z)("MuiTableSortLabel",e)}var v=(0,Z.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),j=["active","children","className","direction","hideSortIcon","IconComponent"],b=(0,p.ZP)(l.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.active&&t.active]}})((function(e){var t=e.theme;return(0,r.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":(0,r.Z)({color:(t.vars||t).palette.text.secondary},"& .".concat(v.icon),{opacity:.5})},"&.".concat(v.active),(0,r.Z)({color:(t.vars||t).palette.text.primary},"& .".concat(v.icon),{opacity:1,color:(t.vars||t).palette.text.secondary}))})),y=(0,p.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,t["iconDirection".concat((0,f.Z)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),w=s.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiTableSortLabel"}),r=n.active,s=void 0!==r&&r,l=n.children,d=n.className,p=n.direction,Z=void 0===p?"asc":p,m=n.hideSortIcon,v=void 0!==m&&m,w=n.IconComponent,S=void 0===w?h:w,k=(0,o.Z)(n,j),C=(0,i.Z)({},n,{active:s,direction:Z,hideSortIcon:v,IconComponent:S}),I=function(e){var t=e.classes,n=e.direction,r={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,f.Z)(n))]};return(0,a.Z)(r,g,t)}(C);return(0,u.jsxs)(b,(0,i.Z)({className:(0,c.Z)(I.root,d),component:"span",disableRipple:!0,ownerState:C,ref:t},k,{children:[l,v&&!s?null:(0,u.jsx)(y,{as:S,className:(0,c.Z)(I.icon),ownerState:C})]}))}))}}]);
//# sourceMappingURL=1994.7888109a.chunk.js.map