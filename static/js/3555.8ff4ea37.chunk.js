"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[3555],{47010:function(e,n,t){t.d(n,{DM:function(){return a},En:function(){return c},Q_:function(){return s},bQ:function(){return d}});var r=t(93433),i=t(65166),o=t(763),a=["#FFC0CB","#1890FF","#00AB55","#000000","#FFFFFF","#94D82D","#FF4842","#FFC107"],c=["Men Runing","Men Sportswear","Men Training"],s=["Published","Archived","Draft"],l=["sale","new"],d=(0,r.Z)(Array(20)).map((function(e,n){return{id:i.We.datatype.uuid(),name:i.We.commerce.product(),displayName:i.We.commerce.productName(),category:(0,o.sample)(c),description:i.We.commerce.productDescription(),media:i.We.image.sports(),price:i.We.datatype.number({min:4,max:99,precision:.01}),priceSale:n%3?null:i.We.datatype.number({min:19,max:29,precision:.01}),colors:(0,o.sampleSize)(a,3),productStatus:(0,o.sample)(l),status:(0,o.sample)(s),limits:(0,o.sample)(["Members Only","",""]),createdAt:i.We.date.past(),stocks:(0,r.Z)(Array(Math.round(10*Math.random())+1)).map((function(e,n){return{id:i.We.datatype.uuid(),name:i.We.commerce.productName(),avatarUrl:i.We.image.sports(),sku:i.We.finance.bic(),stock:i.We.finance.amount(2,10,0),price:i.We.datatype.number({min:4,max:99,precision:.01}),createdAt:i.We.date.past()}}))}}))},70788:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(29439),i=t(1413),o=t(72791),a=t(20033),c=t(48),s=t(24518),l=t(31976),d=t(23786),u=t(85172),h=t(94454),x=t(763),p=t(80184),m=(0,a.ZP)((function(e){return(0,p.jsx)(l.Z,(0,i.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var n=e.theme;return{"& .MuiPaper-root":{borderRadius:"".concat(n.shape.borderRadius,"px"),marginTop:n.spacing(1),minWidth:180,color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],backgroundColor:"background.default",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}})),g=function(e){var n=e.handleMenuItemChecked,t=e.caption,i=void 0===t?"":t,a=e.options,c=void 0===a?[]:a,l=e.items,g=void 0===l?[]:l,f=o.useState(null),Z=(0,r.Z)(f,2),j=Z[0],b=Z[1],v=Boolean(j),y=function(e){n(i,e.target.name),b(null)};return(0,p.jsxs)("div",{children:[(0,p.jsx)(s.Z,{id:"demo-customized-button","aria-controls":v?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":v?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){b(e.currentTarget)},endIcon:(0,p.jsx)(u.Z,{}),sx:{color:"text.default"},children:i}),(0,p.jsx)(m,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:j,open:v,onClose:function(e){b(null)},children:g.map((function(e,n){return(0,p.jsxs)(d.Z,{disableRipple:!0,children:[(0,p.jsx)(h.Z,{name:e,checked:(0,x.includes)(c,e),"arial-category":i,onChange:y}),e]},n)}))})]})}},79456:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),i=t(45987),o=t(72791),a=t(98530),c=t(52007),s=t.n(c),l=t(57689),d=function(e){var n=e.children,t=(0,l.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null};d.propTypes={children:s().node};var u=d,h=t(80184),x=["sx","children"],p=function(e){var n=e.sx,t=e.children,o=(0,i.Z)(e,x);return(0,h.jsx)(u,{children:(0,h.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({minHeight:"calc(100vh - 80px)",mt:{xs:.5,sm:2},px:{xs:0,sm:1,md:2}},n)},o),{},{children:t}))})}},88097:function(e,n,t){var r=t(1413),i=t(45987),o=(t(72791),t(42161)),a=t(9087),c=t(35527),s=t(61889),l=t(93517),d=t(50533),u=t(53767),h=t(20068),x=t(13400),p=t(20890),m=t(24518),g=t(29886),f=t(57689),Z=t(80184),j=["title","subtitle","breadcrumbs","back","control","action"];n.Z=function(e){var n=(0,g.u)(),t=(0,f.s0)(),b=e.title,v=e.subtitle,y=e.breadcrumbs,w=e.back,C=e.control,k=e.action,S=(0,i.Z)(e,j);return(0,Z.jsx)(c.Z,{variant:"outlined",sx:{padding:n.spacing(3),marginBottom:n.spacing(3)},children:(0,Z.jsxs)(s.ZP,(0,r.Z)((0,r.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},S),{},{children:[(0,Z.jsxs)(s.ZP,{item:!0,children:[y&&(0,Z.jsx)(l.Z,{"aria-label":"breadcrumb",children:y.map((function(e,n){return(0,Z.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},n)}))}),(0,Z.jsxs)(u.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[w&&(0,Z.jsx)(h.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,Z.jsx)(x.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,Z.jsx)(o.Z,{})})}),(0,Z.jsxs)(u.Z,{spacing:1,children:[(0,Z.jsx)(p.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:b}),v&&(0,Z.jsx)(p.Z,{variant:"subtitle2",children:v})]})]})]}),(0,Z.jsxs)(s.ZP,{item:!0,children:[k,C&&(0,Z.jsx)(m.Z,{variant:"contained",startIcon:(0,Z.jsx)(a.Z,{fontSize:"small"}),onClick:function(){return t(C.route)},children:C.label})]})]}))})}},73555:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(93433),i=t(29439),o=t(72791),a=t(13967),c=t(98530),s=t(53767),l=t(81918),d=t(20890),u=t(94721),h=t(39281),x=t(79836),p=t(53382),m=t(35855),g=t(53994),f=t(94454),Z=t(57482),j=t(13400),b=t(35527),v=t(67492),y=t(15473),w=t(23786),C=t(57064),k=t(763),S=t(5789),M=t(22654),P=t(79456),F=t(88097),I=t(1413),W=t(56890),R=t(80720),z=t(80184),O={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function D(e){var n=e.order,t=e.orderBy,r=e.rowCount,i=e.headLabel,o=e.numSelected,a=e.onRequestSort,s=e.onSelectAllClick;return(0,z.jsx)(W.Z,{children:(0,z.jsxs)(m.Z,{children:[(0,z.jsx)(g.Z,{padding:"checkbox",children:(0,z.jsx)(f.Z,{indeterminate:o>0&&o<r,checked:r>0&&o===r,onChange:s})}),i.map((function(e){return(0,z.jsx)(g.Z,{align:e.alignRight?"right":"left",sortDirection:t===e.id&&n,children:(0,z.jsxs)(R.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:(r=e.id,function(e){a(e,r)}),children:[e.label,t===e.id?(0,z.jsx)(c.Z,{sx:(0,I.Z)({},O),children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var A=t(20033),N=t(48),_=t(34663),L=t(28029),T=t(95193),B=t(63466),E=t(20068),q=t(70788),G=t(47010),Q=t(15265),H=(0,A.ZP)(_.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),U=(0,A.ZP)(L.Z)((function(e){var n=e.theme;return{width:240,flexGrow:1,transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{width:320},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,N.Fq)(n.palette.grey[500],.32)," !important")}}}));function V(e){var n=e.numSelected,t=e.filterName,r=e.onFilterName,i=e.onFilterCondition,o=(0,a.Z)(),l=(0,T.Z)(o.breakpoints.down("md"));return(0,z.jsxs)(H,{sx:(0,I.Z)({},n>0&&{color:"text.default",bgcolor:"background.default"}),children:[n>0?(0,z.jsxs)(d.Z,{component:"div",variant:"subtitle1",children:[n," selected"]}):(0,z.jsxs)(c.Z,{sx:{width:1,display:"flex",flexDirection:l?"column":"row"},children:[(0,z.jsx)(c.Z,{sx:{flexGrow:1},children:(0,z.jsx)(U,{value:t,onChange:r,placeholder:"Search user...",startAdornment:(0,z.jsx)(B.Z,{position:"start",children:(0,z.jsx)(Q.IconSearch,{size:20,color:o.palette.grey[400],stroke:2,strokeLinejoin:"miter"})})})}),(0,z.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,z.jsx)(q.Z,{handleMenuItemChecked:i,caption:"Category",items:G.En}),(0,z.jsx)(q.Z,{handleMenuItemChecked:i,caption:"Status",items:G.Q_})]})]}),n>0?(0,z.jsx)(E.Z,{title:"Delete",children:(0,z.jsx)(j.Z,{children:(0,z.jsx)(Q.IconTrash,{})})}):void 0]})}var Y=t(38297),$=[{id:"name",label:"Name",alignRight:!1},{id:"Stock",label:"Stock",alignRight:!1},{id:"price",label:"Price",alignRight:!1},{id:"createdAt",label:"Created",alignRight:!1},{id:"Status",label:"Status",alignRight:!1},{id:""}];function J(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function K(){var e=(0,a.Z)(),n=(0,o.useState)(null),t=(0,i.Z)(n,2),I=t[0],W=t[1],R=(0,o.useState)(0),O=(0,i.Z)(R,2),A=O[0],N=O[1],_=(0,o.useState)("asc"),L=(0,i.Z)(_,2),T=L[0],B=L[1],E=(0,o.useState)([]),q=(0,i.Z)(E,2),H=q[0],U=q[1],K=(0,o.useState)("name"),X=(0,i.Z)(K,2),ee=X[0],ne=X[1],te=(0,o.useState)(""),re=(0,i.Z)(te,2),ie=re[0],oe=re[1],ae=(0,o.useState)({category:[],status:[]}),ce=(0,i.Z)(ae,2),se=ce[0],le=ce[1],de=(0,o.useState)(5),ue=(0,i.Z)(de,2),he=ue[0],xe=ue[1],pe=G.bQ,me=function(e){W(e.currentTarget)},ge=A>0?Math.max(0,(1+A)*he-pe.length):0,fe=function(e,n,t,r){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t||r?(0,k.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())&&(0,k.includes)(0===(0,k.size)(r.category)?G.En:r.category,e.category)&&(0,k.includes)(0===(0,k.size)(r.status)?G.Q_:r.status,e.status)})):i.map((function(e){return e[0]}))}(pe,function(e,n){return"desc"===e?function(e,t){return J(e,t,n)}:function(e,t){return-J(e,t,n)}}(T,ee),ie,se),Ze=!fe.length&&!!ie,je=function(e,n){console.info("You clicked the delete icon.",e,n),N(0),le((function(t){var r,i,o=t.category,a=t.status;return-1!==(null===e||void 0===e||null===(r=e.toLowerCase())||void 0===r?void 0:r.indexOf("category"))&&(o=(0,k.filter)(o,(function(e){return-1===(null===e||void 0===e?void 0:e.indexOf(n))}))),-1!==(null===e||void 0===e||null===(i=e.toLowerCase())||void 0===i?void 0:i.indexOf("status"))&&(a=(0,k.filter)(a,(function(e){return-1===(null===e||void 0===e?void 0:e.indexOf(n))}))),{category:o,status:a}}))};return(0,z.jsxs)(P.Z,{children:[(0,z.jsx)(F.Z,{title:"Products",control:{label:" New Product",route:"/pages/products/add"}}),(0,z.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,z.jsxs)(S.Z,{sx:{flexGrow:1,pt:0},children:[(0,z.jsxs)(s.Z,{direction:"row",spacing:1,sx:{ml:3},children:[se.category.map((function(n){return(0,z.jsx)(l.Z,{label:(0,z.jsxs)(s.Z,{direction:"row",children:[(0,z.jsx)(d.Z,{children:"Category: "}),(0,z.jsx)(d.Z,{color:"warning.main",children:n})]}),onDelete:function(){return je("category",n)},sx:{borderRadius:"".concat(e.shape.borderRadius,"px")}},n)})),se.status.map((function(e){return(0,z.jsx)(l.Z,{label:(0,z.jsxs)(s.Z,{direction:"row",children:[(0,z.jsx)(d.Z,{children:"Status: "}),(0,z.jsx)(d.Z,{color:"warning.main",children:e})]}),onDelete:function(){return je("status",e)}},e)})),(0,z.jsx)(u.Z,{})]}),(0,z.jsx)(V,{numSelected:H.length,filterName:ie,onFilterName:function(e){N(0),oe(e.target.value)},onFilterCondition:function(e,n){N(0),le((function(t){var i=t.category,o=t.status;return-1!==e.toLowerCase().indexOf("category")&&(i=(0,k.uniq)([].concat((0,r.Z)(t.category),[n]))),-1!==e.toLowerCase().indexOf("status")&&(o=(0,k.uniq)([].concat((0,r.Z)(t.status),[n]))),{category:i,status:o}}))}}),(0,z.jsx)(h.Z,{children:(0,z.jsxs)(x.Z,{children:[(0,z.jsx)(D,{order:T,orderBy:ee,headLabel:$,rowCount:pe.length,numSelected:H.length,onRequestSort:function(e,n){B(ee===n&&"asc"===T?"desc":"asc"),ne(n)},onSelectAllClick:function(e){if(e.target.checked){var n=pe.map((function(e){return e.name}));U(n)}else U([])}}),(0,z.jsxs)(p.Z,{children:[fe.slice(A*he,A*he+he).map((function(e){var n=e.id,t=e.name,r=e.media,i=e.stocks,o=e.price,a=e.status,c=e.createdAt,u=-1!==H.indexOf(t);return(0,z.jsxs)(m.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:u,children:[(0,z.jsx)(g.Z,{padding:"checkbox",children:(0,z.jsx)(f.Z,{checked:u,onChange:function(e){return function(e,n){var t=H.indexOf(n),r=[];-1===t?r=r.concat(H,n):0===t?r=r.concat(H.slice(1)):t===H.length-1?r=r.concat(H.slice(0,-1)):t>0&&(r=r.concat(H.slice(0,t),H.slice(t+1))),U(r)}(0,t)}})}),(0,z.jsx)(g.Z,{component:"th",scope:"row",padding:"none",children:(0,z.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,z.jsx)(Y.Z,{src:r,shift:"left",width:48,height:48,sx:{display:{sm:"none",lg:"inline"}}}),(0,z.jsx)(d.Z,{variant:"subtitle2",noWrap:!0,children:t})]})}),(0,z.jsxs)(g.Z,{align:"left",children:[(0,z.jsx)(Z.Z,{variant:"determinate",color:i.length<10?"error":"info",value:i.length}),i.length]}),(0,z.jsxs)(g.Z,{align:"left",children:["$",o]}),(0,z.jsx)(g.Z,{align:"left",children:(0,M.Mu)(c)}),(0,z.jsx)(g.Z,{align:"left",children:(0,z.jsx)(l.Z,{label:a,color:"Draft"===a?"warning":"Archived"===a?"secondary":"info"})}),(0,z.jsx)(g.Z,{align:"right",children:(0,z.jsx)(j.Z,{size:"large",color:"inherit",onClick:me,children:(0,z.jsx)(Q.IconDotsVertical,{})})})]},n)})),ge>0&&(0,z.jsx)(m.Z,{style:{height:53*ge},children:(0,z.jsx)(g.Z,{colSpan:6})})]}),Ze&&(0,z.jsx)(p.Z,{children:(0,z.jsx)(m.Z,{children:(0,z.jsx)(g.Z,{align:"center",colSpan:6,sx:{py:3},children:(0,z.jsxs)(b.Z,{sx:{textAlign:"center"},children:[(0,z.jsx)(d.Z,{variant:"h6",paragraph:!0,children:"Not found"}),(0,z.jsxs)(d.Z,{variant:"body2",children:["No results found for \xa0",(0,z.jsxs)("strong",{children:['"',ie,'"']}),".",(0,z.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})})]})}),(0,z.jsx)(v.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:fe.length,rowsPerPage:he,page:A,onPageChange:function(e,n){N(n)},onRowsPerPageChange:function(e){N(0),xe(parseInt(e.target.value,10))}})]}),(0,z.jsxs)(y.ZP,{open:Boolean(I),anchorEl:I,onClose:function(){W(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{p:1,width:140,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:"".concat(e.shape.borderRadius,"px")}}},children:[(0,z.jsxs)(w.Z,{children:[(0,z.jsx)(C.Z,{fontSize:"small",children:(0,z.jsx)(Q.IconPencil,{})}),"Edit"]}),(0,z.jsxs)(w.Z,{sx:{color:"error.main"},children:[(0,z.jsx)(C.Z,{fontSize:"small",children:(0,z.jsx)(Q.IconTrash,{})}),"Delete"]})]})]})]})}},22654:function(e,n,t){t.d(n,{Mu:function(){return o},gC:function(){return i}});var r=t(80946);function i(e,n){var t=n||"dd MMM";return e?(0,r.Z)(new Date(e),t):""}function o(e,n){var t=n||"dd MMM yyyy";return e?(0,r.Z)(new Date(e),t):""}}}]);
//# sourceMappingURL=3555.8ff4ea37.chunk.js.map