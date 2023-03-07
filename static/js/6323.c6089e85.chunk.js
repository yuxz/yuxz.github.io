"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[6323],{59019:function(e,n,r){var t=r(1413),i=r(45987),a=(r(72791),r(64554)),s=r(80184),o=["sx"];n.Z=function(e){var n=e.sx,r=(0,i.Z)(e,o);return(0,s.jsx)(a.Z,(0,t.Z)({sx:(0,t.Z)({bgcolor:"background.default",color:"text.default",border:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"grey.600":"grey.200"},p:3,borderRadius:1,align:"center",overflow:"inherit"},n)},r))}},40268:function(e,n,r){var t=r(1413),i=r(45987),a=r(52007),s=r.n(a),o=r(72791),c=r(62711),l=r(64554),d=r(80184),x=["icon","width","sx"],h=(0,o.forwardRef)((function(e,n){var r=e.icon,a=e.width,s=void 0===a?20:a,o=e.sx,h=(0,i.Z)(e,x);return(0,d.jsx)(l.Z,(0,t.Z)({ref:n,component:c.JO,icon:r,sx:(0,t.Z)({width:s,height:s},o)},h))}));h.propTypes={sx:s().object,width:s().oneOfType([s().number,s().string]),icon:s().oneOfType([s().element,s().string])},n.Z=h},79456:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(1413),i=r(45987),a=r(72791),s=r(64554),o=r(52007),c=r.n(o),l=r(57689),d=function(e){var n=e.children,r=(0,l.TH)().pathname;return(0,a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),n||null};d.propTypes={children:c().node};var x=d,h=r(80184),u=["sx","children"],Z=function(e){var n=e.sx,r=e.children,a=(0,i.Z)(e,u);return(0,h.jsx)(x,{children:(0,h.jsx)(s.Z,(0,t.Z)((0,t.Z)({sx:(0,t.Z)({minHeight:"calc(100vh - 80px)",mt:2,px:2},n)},a),{},{children:r}))})}},16983:function(e,n,r){r.d(n,{Z:function(){return b}});var t=r(1413),i=r(45987),a=(r(72791),r(42161)),s=r(9087),o=r(64554),c=r(61889),l=r(93517),d=r(50533),x=r(67414),h=r(20068),u=r(13400),Z=r(20890),p=r(24518),j=r(29886),f=r(57689),m=r(80184),g=["title","subtitle","breadcrumbs","back","control","action"];function b(e){var n=(0,j.u)(),r=(0,f.s0)(),b=e.title,v=e.subtitle,y=e.breadcrumbs,w=e.back,k=e.control,C=e.action,P=(0,i.Z)(e,g);return(0,m.jsx)(o.Z,{sx:{padding:"".concat(n.spacing(4)),marginBottom:"".concat(n.spacing(4)),boxShadow:"dark"===n.palette.mode?"0 1px 0   ".concat(n.palette.grey[200],", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat(n.palette.grey[300],", 0px 4px 8px -5px  ").concat(n.palette.grey[200])},children:(0,m.jsxs)(c.ZP,(0,t.Z)((0,t.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},P),{},{children:[(0,m.jsxs)(c.ZP,{item:!0,children:[y&&(0,m.jsx)(l.Z,{"aria-label":"breadcrumb",children:y.map((function(e,n){return(0,m.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},n)}))}),(0,m.jsxs)(x.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[w&&(0,m.jsx)(h.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,m.jsx)(u.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,m.jsx)(a.Z,{})})}),(0,m.jsxs)(x.Z,{spacing:1,children:[(0,m.jsx)(Z.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:b}),v&&(0,m.jsx)(Z.Z,{variant:"subtitle2",children:v})]})]})]}),(0,m.jsxs)(c.ZP,{item:!0,children:[C,k&&(0,m.jsx)(p.Z,{variant:"contained",startIcon:(0,m.jsx)(s.Z,{fontSize:"small"}),onClick:function(){return r(k.route)},children:k.label})]})]}))})}},56323:function(e,n,r){r.r(n),r.d(n,{default:function(){return ye}});var t=r(29439),i=r(72791),a=r(64554),s=r(763),o=r(57689),c=r(79834),l=r(90493),d=r(45484),x=r(57064),h=r(49900),u=r(86474),Z=r(21686),p=r(68087),j=r(13835),f=r(14913),m=r(94923),g=r(15265),b=r(24518),v=r(76278),y=r(94721),w=r(59019),k=r(80184),C=function(e,n){var r=0;switch(n){case"Inbox":case"Drafts":case"Trash":case"Sent":r=e.filter((function(e){return(0,s.includes)(e.status,n)}));break;case"Imponant":case"Company":case"Personal":case"Family":r=e.filter((function(e){return(0,s.includes)(e.label,n)}));break;default:r=e.filter((function(e){return!0===e.starred}))}return(0,s.size)(r)};function P(e){var n=e.mails,r=e.handleMailStatus,t=(0,o.s0)();return(0,k.jsx)(w.Z,{sx:{p:0,pt:3},children:(0,k.jsxs)(l.Z,{sx:{width:"100%"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,k.jsx)(c.Z,{component:"div",id:"nested-list-subheader",children:" "}),children:[(0,k.jsx)(d.ZP,{children:(0,k.jsx)(b.Z,{variant:"contained",fullWidth:!0,startIcon:(0,k.jsx)(p.Z,{}),onClick:function(){return t("/pages/mail/compose",{replace:!0})},children:"Compose"})}),(0,k.jsxs)("nav",{"aria-label":"main mailbox folders",children:[(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Inbox")}),onClick:function(){return r("Inbox")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)(h.Z,{primary:"Inbox"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Starred")}),onClick:function(){return r("Starred")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(f.Z,{})}),(0,k.jsx)(h.Z,{primary:"Starred"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,onClick:function(){return r("Sent")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(Z.Z,{})}),(0,k.jsx)(h.Z,{primary:"Sent"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Drafts")}),onClick:function(){return r("Drafts")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(u.Z,{})}),(0,k.jsx)(h.Z,{primary:"Drafts"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Trash")}),onClick:function(){return r("Trash")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(g.IconBasket,{})}),(0,k.jsx)(h.Z,{primary:"Trash"})]})})]}),(0,k.jsx)(y.Z,{variant:"middle",component:"li",textAlign:"left",children:"Labels"}),(0,k.jsxs)("nav",{"aria-label":"secondary mailbox folders",children:[(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Important")}),onClick:function(){return r("Important")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{color:"error",children:(0,k.jsx)(m.Z,{color:"error"})}),(0,k.jsx)(h.Z,{primary:"Important"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Company")}),onClick:function(){return r("Company")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(m.Z,{color:"warning",size:"small"})}),(0,k.jsx)(h.Z,{primary:"Company"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Family")}),onClick:function(){return r("Family")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(m.Z,{color:"info"})}),(0,k.jsx)(h.Z,{primary:"Family"})]})}),(0,k.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,k.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Personal")}),onClick:function(){return r("Personal")},children:(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(m.Z,{color:"primary"})}),(0,k.jsx)(h.Z,{primary:"Personal"})]})})]})]})})}var S=r(39281),I=r(79836),A=r(67492),M=r(53382),R=r(35855),T=r(53994),W=r(94454),F=r(20890),O=r(67414),D=r(60220),_=r(35527),z=r(15473),B=r(23786),E=r(93026),N=r(12269),G=r(40268),L=r(56890),H=r(13400),q=r(33439);function U(e){var n=e.rowCount,r=e.numSelected,t=e.onSelectAllClick,i=e.children;return(0,k.jsx)(L.Z,{children:(0,k.jsxs)(R.Z,{children:[(0,k.jsx)(T.Z,{padding:"checkbox",children:(0,k.jsx)(W.Z,{indeterminate:r>0&&r<n,checked:n>0&&r===n,onChange:t})}),(0,k.jsx)(T.Z,{padding:"checkbox",children:(0,k.jsx)(H.Z,{"aria-label":"refresh",component:"label",children:(0,k.jsx)(q.Z,{})})}),(0,k.jsx)(T.Z,{colSpan:4,children:i})]})})}var J=r(1413),K=r(66934),Q=r(12065),V=r(34663),X=r(28029),Y=r(20068),$=r(63466),ee=r(5397),ne=r(2174),re=r(64053),te=r(59248),ie=r(51350),ae=r(75654),se=function(e){var n=e.items,r=e.open,t=e.anchorEl,i=e.handlePopoverClose;return(0,k.jsx)(z.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:r,anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0,children:(0,k.jsx)(l.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:300,"& ul":{padding:0}},subheader:(0,k.jsx)("li",{}),children:null===n||void 0===n?void 0:n.map((function(e){return(0,k.jsx)(d.ZP,{children:(0,k.jsx)(h.Z,{primary:e})},"item-".concat(e))}))})})},oe=(0,K.ZP)(V.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),ce=(0,K.ZP)(X.Z)((function(e){var n=e.theme;return{width:240,transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:n.shadows[6]},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,Q.Fq)(n.palette.grey[500],.32)," !important")}}}));function le(e){var n=e.numSelected,r=e.filterName,a=e.onFilterName,s=i.useState(null),o=(0,t.Z)(s,2),c=o[0],l=o[1],d=Boolean(c);return(0,k.jsx)(oe,{sx:(0,J.Z)({},n>0&&{color:"text.default",bgcolor:"background.default"}),children:n>0?(0,k.jsxs)(O.Z,{direction:"row",flexDirection:"flex-start",alignItems:"center",spacing:2,children:[(0,k.jsxs)(F.Z,{component:"div",variant:"subtitle1",sx:{flexGrow:1},children:[n," selected"]}),(0,k.jsx)(Y.Z,{title:"delete",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(ee.Z,{})})}),(0,k.jsx)(Y.Z,{title:"star",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(f.Z,{})})}),(0,k.jsx)(Y.Z,{title:"archived file",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(ne.Z,{})})}),(0,k.jsx)(y.Z,{orientation:"vertical",light:!0,variant:"inset",flexItem:!0}),(0,k.jsx)(Y.Z,{title:"delay",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(re.Z,{})})}),(0,k.jsx)(Y.Z,{title:"move to",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(te.Z,{})})}),(0,k.jsx)(Y.Z,{title:"Important",children:(0,k.jsx)(H.Z,{onClick:function(e){l(e.currentTarget)},children:(0,k.jsx)(ie.Z,{})})}),(0,k.jsx)(se,{items:["Imponant","Company","Family","Personal"],open:d,anchorEl:c,handlePopoverClose:function(){l(null)}})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ce,{value:r,onChange:a,placeholder:"Search user...",startAdornment:(0,k.jsx)($.Z,{position:"start",children:(0,k.jsx)(ae.Z,{sx:{color:"text.disabled",width:28,height:28}})})}),(0,k.jsx)(Y.Z,{title:"Filter list",children:(0,k.jsx)(H.Z,{children:(0,k.jsx)(G.Z,{icon:"ic:round-filter-list"})})})]})})}var de=r(22654),xe=[{id:""},{id:""},{id:""},{id:""},{id:""}];function he(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}function ue(e){var n=e.mails,r=(0,o.s0)(),c=(0,i.useState)(null),l=(0,t.Z)(c,2),d=l[0],x=l[1],h=(0,i.useState)(0),u=(0,t.Z)(h,2),Z=u[0],p=u[1],j=(0,i.useState)("asc"),m=(0,t.Z)(j,2),g=m[0],b=m[1],v=(0,i.useState)([]),y=(0,t.Z)(v,2),C=y[0],P=y[1],L=(0,i.useState)("name"),H=(0,t.Z)(L,2),q=H[0],J=H[1],K=(0,i.useState)(""),Q=(0,t.Z)(K,2),V=Q[0],X=Q[1],Y=(0,i.useState)(10),$=(0,t.Z)(Y,2),ee=$[0],ne=$[1],re=n,te=Z>0?Math.max(0,(1+Z)*ee-re.length):0,ie=function(e,n,r){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r?(0,s.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})):t.map((function(e){return e[0]}))}(re,function(e,n){return"desc"===e?function(e,r){return he(e,r,n)}:function(e,r){return-he(e,r,n)}}(g,q),V),ae=!ie.length&&!!V,se=function(e,n){var r=(0,s.findIndex)(ie,(function(n){return n.id===e}));ie[r].starred=!n};return(0,k.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,k.jsxs)(w.Z,{sx:{pt:0},children:[(0,k.jsx)(le,{numSelected:C.length,filterName:V,onFilterName:function(e){p(0),X(e.target.value)}}),(0,k.jsx)(S.Z,{children:(0,k.jsxs)(I.Z,{children:[(0,k.jsx)(U,{order:g,orderBy:q,headLabel:xe,rowCount:re.length,numSelected:C.length,onRequestSort:function(e,n){b(q===n&&"asc"===g?"desc":"asc"),J(n)},onSelectAllClick:function(e){if(e.target.checked){var n=re.map((function(e){return e.name}));P(n)}else P([])},children:(0,k.jsx)(A.Z,{rowsPerPageOptions:[],component:"div",count:re.length,rowsPerPage:ee,page:Z,onPageChange:function(e,n){p(n)},onRowsPerPageChange:function(e){p(0),ne(parseInt(e.target.value,10))}})}),(0,k.jsxs)(M.Z,{children:[ie.slice(Z*ee,Z*ee+ee).map((function(e){var n=e.id,t=e.name,i=e.subject,a=e.avatarUrl,s=e.starred,o=e.createdAt,c=-1!==C.indexOf(t);return(0,k.jsxs)(R.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:c,children:[(0,k.jsx)(T.Z,{padding:"checkbox",children:(0,k.jsx)(W.Z,{checked:c,onChange:function(e){return function(e,n){var r=C.indexOf(n),t=[];-1===r?t=t.concat(C,n):0===r?t=t.concat(C.slice(1)):r===C.length-1?t=t.concat(C.slice(0,-1)):r>0&&(t=t.concat(C.slice(0,r),C.slice(r+1))),P(t)}(0,t)}})}),(0,k.jsx)(T.Z,{padding:"checkbox",children:(0,k.jsx)(F.Z,{color:"warning.main",children:s?(0,k.jsx)(f.Z,{onClick:function(){return se(n,s)}}):(0,k.jsx)(E.Z,{onClick:function(){return se(n,s)}})})}),(0,k.jsx)(T.Z,{component:"th",scope:"row",padding:"none",children:(0,k.jsxs)(O.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,k.jsx)(D.Z,{alt:t,src:a}),(0,k.jsx)(F.Z,{variant:"subtitle2",noWrap:!0,children:t})]})}),(0,k.jsx)(T.Z,{align:"left",onClick:function(){return r("/pages/mail/read")},children:(0,k.jsx)(F.Z,{variant:"subtitle2",sx:{width:"100%",maxWidth:320,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:i})}),(0,k.jsx)(T.Z,{align:"left",children:(0,k.jsx)(N.Z,{})}),(0,k.jsx)(T.Z,{align:"left",children:(0,de.gC)(o)})]},n)})),te>0&&(0,k.jsx)(R.Z,{style:{height:53*te},children:(0,k.jsx)(T.Z,{colSpan:6})})]}),ae&&(0,k.jsx)(M.Z,{children:(0,k.jsx)(R.Z,{children:(0,k.jsx)(T.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,k.jsxs)(_.Z,{sx:{textAlign:"center"},children:[(0,k.jsx)(F.Z,{variant:"h6",paragraph:!0,children:"Not found"}),(0,k.jsxs)(F.Z,{variant:"body2",children:["No results found for \xa0",(0,k.jsxs)("strong",{children:['"',V,'"']}),".",(0,k.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})})]})})]}),(0,k.jsxs)(z.ZP,{open:Boolean(d),anchorEl:d,onClose:function(){x(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{p:1,width:140,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}}},children:[(0,k.jsxs)(B.Z,{children:[(0,k.jsx)(G.Z,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),(0,k.jsxs)(B.Z,{sx:{color:"error.main"},children:[(0,k.jsx)(G.Z,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}var Ze=r(79456),pe=r(16983),je=r(93433),fe=r(65166),me=["Imponant","Company","Personal","Family"],ge=["Inbox","Sent","Drafts","Trash"],be=(0,je.Z)(Array(20)).map((function(e,n){return{id:fe.We.datatype.uuid(),name:fe.We.name.fullName(),avatarUrl:r(91602)("./user".concat(n+1,".png")),from:fe.We.internet.email(),subject:fe.We.lorem.sentences(),to:fe.We.internet.email(),content:fe.We.lorem.sentences(),starred:fe.We.datatype.boolean(),label:(0,s.sample)(me),status:(0,s.sample)(ge),createdAt:fe.We.date.past()}})),ve=be.filter((function(e){return"Inbox"===e.status}));function ye(){var e=(0,i.useState)(ve),n=(0,t.Z)(e,2),r=n[0],o=n[1];return(0,k.jsxs)(Ze.Z,{children:[(0,k.jsx)(pe.Z,{title:"Mail",subtile:""}),(0,k.jsx)(a.Z,{sx:{flexGrow:1},children:(0,k.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,k.jsx)(a.Z,{sx:{width:260},children:(0,k.jsx)(P,{mails:be,handleMailStatus:function(e){switch(e){case"Inbox":case"Sent":case"Drafts":case"Trash":ve=be.filter((function(n){return(0,s.includes)(n.status,e)}));break;case"Imponant":case"Company":case"Personal":case"Family":ve=be.filter((function(n){return(0,s.includes)(n.label,e)}));break;default:ve=be.filter((function(e){return!0===e.starred}))}o(ve)}})}),(0,k.jsx)(a.Z,{sx:{ml:2,flex:1},children:(0,k.jsx)(ue,{mails:r})})]})})]})}},22654:function(e,n,r){r.d(n,{Mu:function(){return a},gC:function(){return i}});var t=r(80946);function i(e,n){var r=n||"dd MMM";return e?(0,t.Z)(new Date(e),r):""}function a(e,n){var r=n||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),r):""}}}]);
//# sourceMappingURL=6323.c6089e85.chunk.js.map