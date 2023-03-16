"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[9892],{59019:function(e,n,r){var t=r(1413),i=r(45987),a=(r(72791),r(98530)),s=r(13967),c=r(80184),l=["sx"];n.Z=function(e){var n=(0,s.Z)(),r=e.sx,o=(0,i.Z)(e,l);return(0,c.jsx)(a.Z,(0,t.Z)({sx:(0,t.Z)({bgcolor:"background.default",color:"text.default",border:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"grey.600":"grey.200"},p:3,borderRadius:"".concat(n.shape.borderRadius,"px"),align:"center",overflow:"inherit"},r)},o))}},79456:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(1413),i=r(45987),a=r(72791),s=r(98530),c=r(52007),l=r.n(c),o=r(57689),d=function(e){var n=e.children,r=(0,o.TH)().pathname;return(0,a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),n||null};d.propTypes={children:l().node};var h=d,x=r(80184),u=["sx","children"],Z=function(e){var n=e.sx,r=e.children,a=(0,i.Z)(e,u);return(0,x.jsx)(h,{children:(0,x.jsx)(s.Z,(0,t.Z)((0,t.Z)({sx:(0,t.Z)({minHeight:"calc(100vh - 80px)",mt:{xs:.5,sm:2},px:{xs:0,sm:1,md:2}},n)},a),{},{children:r}))})}},88097:function(e,n,r){var t=r(1413),i=r(45987),a=(r(72791),r(42161)),s=r(9087),c=r(35527),l=r(61889),o=r(93517),d=r(50533),h=r(53767),x=r(20068),u=r(13400),Z=r(20890),j=r(24518),f=r(29886),p=r(57689),m=r(80184),g=["title","subtitle","breadcrumbs","back","control","action"];n.Z=function(e){var n=(0,f.u)(),r=(0,p.s0)(),b=e.title,v=e.subtitle,y=e.breadcrumbs,k=e.back,w=e.control,C=e.action,P=(0,i.Z)(e,g);return(0,m.jsx)(c.Z,{variant:"outlined",sx:{padding:n.spacing(3),marginBottom:n.spacing(3)},children:(0,m.jsxs)(l.ZP,(0,t.Z)((0,t.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},P),{},{children:[(0,m.jsxs)(l.ZP,{item:!0,children:[y&&(0,m.jsx)(o.Z,{"aria-label":"breadcrumb",children:y.map((function(e,n){return(0,m.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},n)}))}),(0,m.jsxs)(h.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[k&&(0,m.jsx)(x.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,m.jsx)(u.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,m.jsx)(a.Z,{})})}),(0,m.jsxs)(h.Z,{spacing:1,children:[(0,m.jsx)(Z.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:b}),v&&(0,m.jsx)(Z.Z,{variant:"subtitle2",children:v})]})]})]}),(0,m.jsxs)(l.ZP,{item:!0,children:[C,w&&(0,m.jsx)(j.Z,{variant:"contained",startIcon:(0,m.jsx)(s.Z,{fontSize:"small"}),onClick:function(){return r(w.route)},children:w.label})]})]}))})}},89892:function(e,n,r){r.r(n),r.d(n,{default:function(){return ke}});var t=r(29439),i=r(72791),a=r(98530),s=r(763),c=r(57689),l=r(79834),o=r(90493),d=r(45484),h=r(57064),x=r(49900),u=r(86474),Z=r(21686),j=r(68087),f=r(13835),p=r(14913),m=r(94923),g=r(15265),b=r(24518),v=r(76278),y=r(94721),k=r(59019),w=r(80184),C=function(e,n){var r=0;switch(n){case"Inbox":case"Drafts":case"Trash":case"Sent":r=e.filter((function(e){return(0,s.includes)(e.status,n)}));break;case"Imponant":case"Company":case"Personal":case"Family":r=e.filter((function(e){return(0,s.includes)(e.label,n)}));break;default:r=e.filter((function(e){return!0===e.starred}))}return(0,s.size)(r)};function P(e){var n=e.mails,r=e.handleMailStatus,t=(0,c.s0)();return(0,w.jsx)(k.Z,{sx:{p:0,pt:3},children:(0,w.jsxs)(o.Z,{sx:{width:"100%"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,w.jsx)(l.Z,{component:"div",id:"nested-list-subheader",children:" "}),children:[(0,w.jsx)(d.ZP,{children:(0,w.jsx)(b.Z,{variant:"contained",fullWidth:!0,startIcon:(0,w.jsx)(j.Z,{}),onClick:function(){return t("/pages/mail/compose",{replace:!0})},children:"Compose"})}),(0,w.jsxs)("nav",{"aria-label":"main mailbox folders",children:[(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Inbox")}),onClick:function(){return r("Inbox")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(f.Z,{})}),(0,w.jsx)(x.Z,{primary:"Inbox"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Starred")}),onClick:function(){return r("Starred")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(p.Z,{})}),(0,w.jsx)(x.Z,{primary:"Starred"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,onClick:function(){return r("Sent")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(Z.Z,{})}),(0,w.jsx)(x.Z,{primary:"Sent"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Drafts")}),onClick:function(){return r("Drafts")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(u.Z,{})}),(0,w.jsx)(x.Z,{primary:"Drafts"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Trash")}),onClick:function(){return r("Trash")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(g.IconBasket,{})}),(0,w.jsx)(x.Z,{primary:"Trash"})]})})]}),(0,w.jsx)(y.Z,{variant:"middle",component:"li",textAlign:"left",children:"Labels"}),(0,w.jsxs)("nav",{"aria-label":"secondary mailbox folders",children:[(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Important")}),onClick:function(){return r("Important")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{color:"error",children:(0,w.jsx)(m.Z,{color:"error"})}),(0,w.jsx)(x.Z,{primary:"Important"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Company")}),onClick:function(){return r("Company")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(m.Z,{color:"warning",size:"small"})}),(0,w.jsx)(x.Z,{primary:"Company"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Family")}),onClick:function(){return r("Family")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(m.Z,{color:"info"})}),(0,w.jsx)(x.Z,{primary:"Family"})]})}),(0,w.jsx)(d.ZP,{disablePadding:!0,secondaryAction:(0,w.jsx)(a.Z,{variant:"typography",sx:{width:28,height:28,bgcolor:"backgroud.default",borderRadius:"50%",textAlign:"center"},children:C(n,"Personal")}),onClick:function(){return r("Personal")},children:(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(m.Z,{color:"primary"})}),(0,w.jsx)(x.Z,{primary:"Personal"})]})})]})]})})}var S=r(39281),z=r(79836),I=r(67492),M=r(53382),A=r(35855),L=r(53994),R=r(94454),F=r(20890),W=r(53767),D=r(60220),V=r(35527),H=r(15473),T=r(23786),O=r(76189),_=(0,O.Z)((0,w.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline"),B=(0,O.Z)((0,w.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile"),E=r(56890),N=r(13400),G=(0,O.Z)((0,w.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");function q(e){var n=e.rowCount,r=e.numSelected,t=e.onSelectAllClick,i=e.children;return(0,w.jsx)(E.Z,{children:(0,w.jsxs)(A.Z,{children:[(0,w.jsx)(L.Z,{padding:"checkbox",children:(0,w.jsx)(R.Z,{indeterminate:r>0&&r<n,checked:n>0&&r===n,onChange:t})}),(0,w.jsx)(L.Z,{padding:"checkbox",children:(0,w.jsx)(N.Z,{"aria-label":"refresh",component:"label",children:(0,w.jsx)(G,{})})}),(0,w.jsx)(L.Z,{colSpan:4,children:i})]})})}var U=r(1413),J=r(20033),K=r(48),Q=r(13967),X=r(34663),Y=r(28029),$=r(20068),ee=r(63466),ne=r(5397),re=r(2174),te=(0,O.Z)((0,w.jsx)("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"Alarm"),ie=r(59248),ae=r(51350),se=function(e){var n=e.items,r=e.open,t=e.anchorEl,i=e.handlePopoverClose;return(0,w.jsx)(H.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:r,anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0,children:(0,w.jsx)(o.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:300,"& ul":{padding:0}},subheader:(0,w.jsx)("li",{}),children:null===n||void 0===n?void 0:n.map((function(e){return(0,w.jsx)(d.ZP,{children:(0,w.jsx)(x.Z,{primary:e})},"item-".concat(e))}))})})},ce=(0,J.ZP)(X.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),le=(0,J.ZP)(Y.Z)((function(e){var n=e.theme;return{width:240,transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:n.shadows[6]},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,K.Fq)(n.palette.grey[500],.32)," !important")}}}));function oe(e){var n=e.numSelected,r=e.filterName,a=e.onFilterName,s=(0,Q.Z)(),c=i.useState(null),l=(0,t.Z)(c,2),o=l[0],d=l[1],h=Boolean(o);return(0,w.jsx)(ce,{sx:(0,U.Z)({},n>0&&{color:"text.default",bgcolor:"background.default"}),children:n>0?(0,w.jsxs)(W.Z,{direction:"row",flexDirection:"flex-start",alignItems:"center",spacing:2,children:[(0,w.jsxs)(F.Z,{component:"div",variant:"subtitle1",sx:{flexGrow:1},children:[n," selected"]}),(0,w.jsx)($.Z,{title:"delete",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(ne.Z,{})})}),(0,w.jsx)($.Z,{title:"star",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(p.Z,{})})}),(0,w.jsx)($.Z,{title:"archived file",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(re.Z,{})})}),(0,w.jsx)(y.Z,{orientation:"vertical",light:!0,variant:"inset",flexItem:!0}),(0,w.jsx)($.Z,{title:"delay",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(te,{})})}),(0,w.jsx)($.Z,{title:"move to",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(ie.Z,{})})}),(0,w.jsx)($.Z,{title:"Important",children:(0,w.jsx)(N.Z,{onClick:function(e){d(e.currentTarget)},children:(0,w.jsx)(ae.Z,{})})}),(0,w.jsx)(se,{items:["Imponant","Company","Family","Personal"],open:h,anchorEl:o,handlePopoverClose:function(){d(null)}})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(le,{value:r,onChange:a,placeholder:"Search user...",startAdornment:(0,w.jsx)(ee.Z,{position:"start",children:(0,w.jsx)(g.IconSearch,{size:20,color:s.palette.grey[400],stroke:2,strokeLinejoin:"miter"})})}),(0,w.jsx)($.Z,{title:"Filter list",children:(0,w.jsx)(N.Z,{children:(0,w.jsx)(g.IconFilter,{size:20,color:s.palette.grey[400],stroke:2,strokeLinejoin:"miter"})})})]})})}var de=r(22654),he=r(29886),xe=[{id:""},{id:""},{id:""},{id:""},{id:""}];function ue(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}function Ze(e){var n=(0,he.u)(),r=e.mails,l=(0,c.s0)(),o=(0,i.useState)(null),d=(0,t.Z)(o,2),x=d[0],u=d[1],Z=(0,i.useState)(0),j=(0,t.Z)(Z,2),f=j[0],m=j[1],b=(0,i.useState)("asc"),v=(0,t.Z)(b,2),y=v[0],C=v[1],P=(0,i.useState)([]),O=(0,t.Z)(P,2),E=O[0],N=O[1],G=(0,i.useState)("name"),U=(0,t.Z)(G,2),J=U[0],K=U[1],Q=(0,i.useState)(""),X=(0,t.Z)(Q,2),Y=X[0],$=X[1],ee=(0,i.useState)(10),ne=(0,t.Z)(ee,2),re=ne[0],te=ne[1],ie=r,ae=f>0?Math.max(0,(1+f)*re-ie.length):0,se=function(e,n,r){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r?(0,s.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})):t.map((function(e){return e[0]}))}(ie,function(e,n){return"desc"===e?function(e,r){return ue(e,r,n)}:function(e,r){return-ue(e,r,n)}}(y,J),Y),ce=!se.length&&!!Y,le=function(e,n){var r=(0,s.findIndex)(se,(function(n){return n.id===e}));se[r].starred=!n};return(0,w.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,w.jsxs)(k.Z,{sx:{pt:0},children:[(0,w.jsx)(oe,{numSelected:E.length,filterName:Y,onFilterName:function(e){m(0),$(e.target.value)}}),(0,w.jsx)(S.Z,{children:(0,w.jsxs)(z.Z,{children:[(0,w.jsx)(q,{order:y,orderBy:J,headLabel:xe,rowCount:ie.length,numSelected:E.length,onRequestSort:function(e,n){C(J===n&&"asc"===y?"desc":"asc"),K(n)},onSelectAllClick:function(e){if(e.target.checked){var n=ie.map((function(e){return e.name}));N(n)}else N([])},children:(0,w.jsx)(I.Z,{rowsPerPageOptions:[],component:"div",count:ie.length,rowsPerPage:re,page:f,onPageChange:function(e,n){m(n)},onRowsPerPageChange:function(e){m(0),te(parseInt(e.target.value,10))}})}),(0,w.jsxs)(M.Z,{children:[se.slice(f*re,f*re+re).map((function(e){var n=e.id,r=e.name,t=e.subject,i=e.avatarUrl,a=e.starred,s=e.createdAt,c=-1!==E.indexOf(r);return(0,w.jsxs)(A.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:c,children:[(0,w.jsx)(L.Z,{padding:"checkbox",children:(0,w.jsx)(R.Z,{checked:c,onChange:function(e){return function(e,n){var r=E.indexOf(n),t=[];-1===r?t=t.concat(E,n):0===r?t=t.concat(E.slice(1)):r===E.length-1?t=t.concat(E.slice(0,-1)):r>0&&(t=t.concat(E.slice(0,r),E.slice(r+1))),N(t)}(0,r)}})}),(0,w.jsx)(L.Z,{padding:"checkbox",children:(0,w.jsx)(F.Z,{color:"warning.main",children:a?(0,w.jsx)(p.Z,{onClick:function(){return le(n,a)}}):(0,w.jsx)(_,{onClick:function(){return le(n,a)}})})}),(0,w.jsx)(L.Z,{component:"th",scope:"row",padding:"none",children:(0,w.jsxs)(W.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,w.jsx)(D.Z,{alt:r,src:i}),(0,w.jsx)(F.Z,{variant:"subtitle2",noWrap:!0,children:r})]})}),(0,w.jsx)(L.Z,{align:"left",onClick:function(){return l("/pages/mail/read")},children:(0,w.jsx)(F.Z,{variant:"subtitle2",sx:{width:"100%",maxWidth:320,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:t})}),(0,w.jsx)(L.Z,{align:"left",children:(0,w.jsx)(B,{})}),(0,w.jsx)(L.Z,{align:"left",children:(0,de.gC)(s)})]},n)})),ae>0&&(0,w.jsx)(A.Z,{style:{height:53*ae},children:(0,w.jsx)(L.Z,{colSpan:6})})]}),ce&&(0,w.jsx)(M.Z,{children:(0,w.jsx)(A.Z,{children:(0,w.jsx)(L.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,w.jsxs)(V.Z,{sx:{textAlign:"center"},children:[(0,w.jsx)(F.Z,{variant:"h6",paragraph:!0,children:"Not found"}),(0,w.jsxs)(F.Z,{variant:"body2",children:["No results found for \xa0",(0,w.jsxs)("strong",{children:['"',Y,'"']}),".",(0,w.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})})]})})]}),(0,w.jsxs)(H.ZP,{open:Boolean(x),anchorEl:x,onClose:function(){u(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{p:1,width:140,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:"".concat(n.shape.borderRadius,"px")}}},children:[(0,w.jsxs)(T.Z,{children:[(0,w.jsx)(h.Z,{fontSize:"small",children:(0,w.jsx)(g.IconPencil,{})}),"Edit"]}),(0,w.jsxs)(T.Z,{sx:{color:"error.main"},children:[(0,w.jsx)(h.Z,{fontSize:"small",children:(0,w.jsx)(g.IconTrash,{})}),"Delete"]})]})]})}var je=r(79456),fe=r(88097),pe=r(93433),me=r(65166),ge=["Imponant","Company","Personal","Family"],be=["Inbox","Sent","Drafts","Trash"],ve=(0,pe.Z)(Array(20)).map((function(e,n){return{id:me.We.datatype.uuid(),name:me.We.name.fullName(),avatarUrl:r(91602)("./user".concat(n+1,".png")),from:me.We.internet.email(),subject:me.We.lorem.sentences(),to:me.We.internet.email(),content:me.We.lorem.sentences(),starred:me.We.datatype.boolean(),label:(0,s.sample)(ge),status:(0,s.sample)(be),createdAt:me.We.date.past()}})),ye=ve.filter((function(e){return"Inbox"===e.status}));function ke(){var e=(0,i.useState)(ye),n=(0,t.Z)(e,2),r=n[0],c=n[1];return(0,w.jsxs)(je.Z,{children:[(0,w.jsx)(fe.Z,{title:"Mail",subtile:""}),(0,w.jsx)(a.Z,{sx:{flexGrow:1},children:(0,w.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,w.jsx)(a.Z,{sx:{width:260},children:(0,w.jsx)(P,{mails:ve,handleMailStatus:function(e){switch(e){case"Inbox":case"Sent":case"Drafts":case"Trash":ye=ve.filter((function(n){return(0,s.includes)(n.status,e)}));break;case"Imponant":case"Company":case"Personal":case"Family":ye=ve.filter((function(n){return(0,s.includes)(n.label,e)}));break;default:ye=ve.filter((function(e){return!0===e.starred}))}c(ye)}})}),(0,w.jsx)(a.Z,{sx:{ml:2,flex:1},children:(0,w.jsx)(Ze,{mails:r})})]})})]})}},22654:function(e,n,r){r.d(n,{Mu:function(){return a},gC:function(){return i}});var t=r(80946);function i(e,n){var r=n||"dd MMM";return e?(0,t.Z)(new Date(e),r):""}function a(e,n){var r=n||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),r):""}},86474:function(e,n,r){var t=r(64836);n.Z=void 0;var i=t(r(45649)),a=r(80184),s=(0,i.default)((0,a.jsx)("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");n.Z=s},21686:function(e,n,r){var t=r(64836);n.Z=void 0;var i=t(r(45649)),a=r(80184),s=(0,i.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=s},68087:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},2174:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive")},5397:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},51350:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"m3.5 18.99 11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"}),"LabelImportant")},59248:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41 1.58-1.58v-.06C3.7 17.54 1 14.58 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5zm19 0V4h-9v7h9zm-2-2h-5V6h5v3zm-7 4h9v7h-9z"}),"MoveDown")},14913:function(e,n,r){var t=r(76189),i=r(80184);n.Z=(0,t.Z)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")}}]);
//# sourceMappingURL=9892.0e9fc22e.chunk.js.map