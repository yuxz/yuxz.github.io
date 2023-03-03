"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[2781],{49686:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(93433),a=t(29439),o=t(72791),i=t(67414),l=t(81918),s=t(20890),c=t(763),d=t(36965),u=t(80184);function x(e){var r=e.caption,t=e.options,x=(0,o.useState)([]),m=(0,a.Z)(x,2),p=m[0],h=m[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,{direction:"row",children:[null===p||void 0===p?void 0:p.map((function(e){return(0,u.jsx)(l.Z,{label:(0,u.jsx)(s.Z,{color:"warning.main",children:e}),onDelete:function(){return r=e,void h((0,c.filter)(p,(function(e){return-1===(null===e||void 0===e?void 0:e.indexOf(r))})));var r},sx:{borderRadius:2}},e)})),(0,u.jsx)(d.Z,{handleMenuItemChecked:function(e,r){h((function(e){var t=e;return t=(0,c.uniq)([].concat((0,n.Z)(t),[r]))}))},caption:r,items:t})]})})}},36965:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(29439),a=t(1413),o=t(72791),i=t(66934),l=t(12065),s=t(24518),c=t(31976),d=t(23786),u=t(85172),x=t(94454),m=t(80184),p=(0,i.ZP)((function(e){return(0,m.jsx)(c.Z,(0,a.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var r=e.theme;return{"& .MuiPaper-root":{borderRadius:18,marginTop:r.spacing(1),minWidth:180,color:"light"===r.palette.mode?"rgb(55, 65, 81)":r.palette.grey[300],backgroundColor:"background.default",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:r.palette.text.secondary,marginRight:r.spacing(1.5)},"&:active":{backgroundColor:(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}}}}));function h(e){var r=e.handleMenuItemChecked,t=e.caption,a=void 0===t?"":t,i=e.items,l=void 0===i?[]:i,c=o.useState(null),h=(0,n.Z)(c,2),Z=h[0],f=h[1],v=Boolean(Z),j=function(e){r(a,e.target.name),f(null)};return(0,m.jsxs)("div",{children:[(0,m.jsx)(s.Z,{id:"demo-customized-button","aria-controls":v?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":v?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){f(e.currentTarget)},endIcon:(0,m.jsx)(u.Z,{}),sx:{color:"text.default"},children:a}),(0,m.jsx)(p,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:Z,open:v,onClose:function(e){f(null)},children:l.map((function(e,r){return(0,m.jsxs)(d.Z,{disableRipple:!0,children:[(0,m.jsx)(x.Z,{name:e,"arial-category":a,onChange:j}),e]},r)}))})]})}},79456:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(1413),a=t(45987),o=t(72791),i=t(64554),l=t(52007),s=t.n(l),c=t(57689),d=function(e){var r=e.children,t=(0,c.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),r||null};d.propTypes={children:s().node};var u=d,x=t(80184),m=["sx","children"],p=function(e){var r=e.sx,t=e.children,o=(0,a.Z)(e,m);return(0,x.jsx)(u,{children:(0,x.jsx)(i.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({px:1},r)},o),{},{children:t}))})}},16983:function(e,r,t){t.d(r,{Z:function(){return d}});t(72791);var n=t(42161),a=t(67414),o=t(24518),i=t(93517),l=t(50533),s=t(20890),c=t(80184);function d(e){var r=e.title,t=e.breadcrumbs,d=e.back,u=e.stats,x=e.action;return(0,c.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[(0,c.jsxs)(a.Z,{justifyContent:"flex-start",alignItems:"flex-start",children:[d&&(0,c.jsx)(o.Z,{startIcon:(0,c.jsx)(n.Z,{}),onClick:function(){return window.history.back()},children:"Back"}),t&&(0,c.jsx)(i.Z,{"aria-label":"breadcrumb",children:t.map((function(e,r){return(0,c.jsx)(l.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},r)}))}),(0,c.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:r}),u]}),x]})}},53755:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n=t(29439),a=t(1413),o=t(45987),i=t(72791),l=t(2101),s=t(43896),c=t(20890),d=t(64554),u=t(61889),x=t(85523),m=t(94454),p=t(94721),h=t(24518),Z=t(79816),f=t(80184),v=function(e){return(0,f.jsx)("form",(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsxs)(Z.Z,{title:"Notifications",children:[(0,f.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,f.jsxs)(u.ZP,{item:!0,md:6,sm:6,sx:{display:"flex",flexDirection:"column"},xs:12,children:[(0,f.jsx)(c.Z,{color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Notifications"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{color:"primary",defaultChecked:!0}),label:"Email"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{color:"primary",defaultChecked:!0}),label:"Push Notifications"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{}),label:"Text Messages"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{color:"primary",defaultChecked:!0}),label:"Phone calls"})]}),(0,f.jsxs)(u.ZP,{item:!0,md:6,sm:6,sx:{display:"flex",flexDirection:"column"},xs:12,children:[(0,f.jsx)(c.Z,{color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Messages"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{color:"primary",defaultChecked:!0}),label:"Email"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{}),label:"Push Notifications"}),(0,f.jsx)(x.Z,{control:(0,f.jsx)(m.Z,{color:"primary",defaultChecked:!0}),label:"Phone calls"})]})]}),(0,f.jsx)(p.Z,{}),(0,f.jsx)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,f.jsx)(h.Z,{color:"primary",variant:"contained",children:"Save"})})]})}))},j=t(4942),b=t(48550),g=t(5789),y=function(e){var r=(0,i.useState)({password:"",confirm:""}),t=(0,n.Z)(r,2),o=t[0],l=t[1],s=function(e){l((0,a.Z)((0,a.Z)({},o),{},(0,j.Z)({},e.target.name,e.target.value)))};return(0,f.jsx)("form",(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsxs)(g.Z,{title:"Password",children:[(0,f.jsx)(b.Z,{fullWidth:!0,label:"Current Password",margin:"normal",name:"c\xe5urrentPassword",onChange:s,type:"password",value:o.password,variant:"outlined"}),(0,f.jsx)(b.Z,{fullWidth:!0,label:"Password",margin:"normal",name:"password",onChange:s,type:"password",value:o.password,variant:"outlined"}),(0,f.jsx)(b.Z,{fullWidth:!0,label:"Confirm password",margin:"normal",name:"confirm",onChange:s,type:"password",value:o.confirm,variant:"outlined"}),(0,f.jsx)(p.Z,{}),(0,f.jsx)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,f.jsx)(h.Z,{color:"primary",variant:"contained",children:"Update"})})]})}))},C=t(60220),w={avatar:t(8201),city:"Melbourne",country:"AU",jobTitle:"Senior Developer",name:"John Yu",timezone:"GTM-2"},P=function(e){return(0,f.jsxs)(g.Z,{children:[(0,f.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(C.Z,{src:w.avatar,sx:{height:96,mb:2,width:96}}),(0,f.jsx)(c.Z,{color:"textPrimary",gutterBottom:!0,variant:"h5",children:w.name}),(0,f.jsx)(c.Z,{color:"textSecondary",variant:"body2",children:"".concat(w.city," ").concat(w.country)}),(0,f.jsx)(c.Z,{color:"textSecondary",variant:"body2",children:w.timezone})]}),(0,f.jsx)(p.Z,{}),(0,f.jsx)(h.Z,{color:"primary",fullWidth:!0,variant:"text",children:"Upload Avatar"})]})},S=t(67414),M=t(49686),k=function(e){var r=(0,i.useState)({firstName:"John",lastName:"Yu",title:"Lead",email:"themarscloud@gmail.com",company:"Mars Cloud Inc.",phone:"+61 0481-982-299",country:"AU"}),t=(0,n.Z)(r,2),o=t[0],l=t[1],s=function(e){l((0,a.Z)((0,a.Z)({},o),{},(0,j.Z)({},e.target.name,e.target.value)))};return(0,f.jsx)("form",(0,a.Z)((0,a.Z)({autoComplete:"off",noValidate:!0},e),{},{children:(0,f.jsxs)(g.Z,{title:"Profile Details",children:[(0,f.jsxs)(u.ZP,{container:!0,rowSpacing:3,columnSpacing:2,children:[(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,helperText:"Please specify the first name",label:"First name",name:"firstName",onChange:s,required:!0,value:o.firstName,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Last name",name:"lastName",onChange:s,required:!0,value:o.lastName,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:12,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Email Address",name:"email",onChange:s,required:!0,value:o.email,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Company",name:"company",onChange:s,required:!0,value:o.company,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Title ",name:"title",onChange:s,type:"text",value:o.title,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Phone Number",name:"phone",onChange:s,type:"number",value:o.phone,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,f.jsx)(b.Z,{fullWidth:!0,label:"Country",name:"country",onChange:s,required:!0,value:o.country,variant:"outlined"})}),(0,f.jsx)(u.ZP,{item:!0,md:12,xs:12,children:(0,f.jsxs)(S.Z,{direction:"row",spacing:5,alignItems:"center",children:[(0,f.jsx)(c.Z,{variant:"subtitle1",color:"text.secondary",children:"Skills"}),(0,f.jsx)(M.Z,{caption:"",options:["HTML","CSS3","TypeScript","Javascript","Nodejs","React","MUI","Figma","SASS"]})]})}),(0,f.jsx)(u.ZP,{item:!0,md:12,xs:12})]}),(0,f.jsx)(p.Z,{}),(0,f.jsx)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,f.jsx)(h.Z,{color:"primary",variant:"contained",children:"Save details"})})]})}))},R=t(79456),T=t(16983),N=["children","value","index"];function I(e){var r=e.children,t=e.value,n=e.index,i=(0,o.Z)(e,N);return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},i),{},{children:t===n&&(0,f.jsx)(d.Z,{sx:{p:0},children:(0,f.jsx)(c.Z,{children:r})})}))}function B(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function F(){var e=i.useState(0),r=(0,n.Z)(e,2),t=r[0],o=r[1];return(0,f.jsxs)(R.Z,{children:[(0,f.jsx)(T.Z,{title:"Account"}),(0,f.jsxs)(u.ZP,{container:!0,columnSpacing:{xs:1,sm:2,md:3},children:[(0,f.jsx)(u.ZP,{item:!0,xs:12,sm:12,md:4,lg:4,children:(0,f.jsxs)(S.Z,{spacing:3,children:[(0,f.jsx)(P,{}),(0,f.jsxs)(l.Z,{orientation:"vertical",value:t,onChange:function(e,r){o(r)},"aria-label":"Vertical tabs example",sx:{border:1,borderColor:"grey.300",borderRadius:2},children:[(0,f.jsx)(s.Z,(0,a.Z)({label:"Profile"},B(0))),(0,f.jsx)(s.Z,(0,a.Z)({label:"Password"},B(1))),(0,f.jsx)(s.Z,(0,a.Z)({label:"Notifications"},B(2)))]})]})}),(0,f.jsxs)(u.ZP,{item:!0,xs:12,sm:12,md:8,lg:8,children:[(0,f.jsx)(I,{value:t,index:0,children:(0,f.jsx)(k,{})}),(0,f.jsx)(I,{value:t,index:1,children:(0,f.jsx)(y,{})}),(0,f.jsx)(I,{value:t,index:2,children:(0,f.jsx)(v,{})})]})]})]})}},85172:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),o=t(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");r.Z=i},42161:function(e,r,t){var n=t(76189),a=t(80184);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},93517:function(e,r,t){t.d(r,{Z:function(){return N}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),l=t(63366),s=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(66934),x=t(31402),m=t(20890),p=t(12065),h=t(76189),Z=t(80184),f=(0,h.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=t(95080),j=(0,u.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,p._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(f)({width:24,height:16});var g=function(e){var r=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(j,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,Z.jsx)(b,{ownerState:r})}))})},y=t(75878),C=t(21217);function w(e){return(0,C.Z)("MuiBreadcrumbs",e)}var P=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(P.li),r.li),r.root]}})({}),k=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,Z.jsx)(R,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var N=s.forwardRef((function(e,r){var t=(0,x.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,m=t.component,p=void 0===m?"nav":m,h=t.expandText,f=void 0===h?"Show path":h,v=t.itemsAfterCollapse,j=void 0===v?1:v,b=t.itemsBeforeCollapse,y=void 0===b?1:b,C=t.maxItems,P=void 0===C?8:C,R=t.separator,N=void 0===R?"/":R,I=(0,l.Z)(t,S),B=s.useState(!1),F=(0,a.Z)(B,2),W=F[0],z=F[1],A=(0,i.Z)({},t,{component:p,expanded:W,expandText:f,itemsAfterCollapse:j,itemsBeforeCollapse:y,maxItems:P,separator:N}),L=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,r)}(A),q=s.useRef(null),_=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,Z.jsx)("li",{className:L.li,children:e},"child-".concat(r))}));return(0,Z.jsx)(M,(0,i.Z)({ref:r,component:p,color:"text.secondary",className:(0,c.Z)(L.root,u),ownerState:A},I,{children:(0,Z.jsx)(k,{className:L.ol,ref:q,ownerState:A,children:T(W||P&&_.length<=P?_:function(e){return y+j>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,Z.jsx)(g,{"aria-label":f,onClick:function(){z(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-j,e.length)))}(_),L.separator,N,A)})}))}))},48550:function(e,r,t){t.d(r,{Z:function(){return P}});var n=t(87462),a=t(63366),o=t(72791),i=t(28182),l=t(94419),s=t(96248),c=t(66934),d=t(31402),u=t(37078),x=t(14527),m=t(28029),p=t(30829),h=t(68096),Z=t(47071),f=t(76384),v=t(75878),j=t(21217);function b(e){return(0,j.Z)("MuiTextField",e)}(0,v.Z)("MuiTextField",["root"]);var g=t(80184),y=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],C={standard:u.Z,filled:x.Z,outlined:m.Z},w=(0,c.ZP)(h.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),P=o.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiTextField"}),o=t.autoComplete,c=t.autoFocus,u=void 0!==c&&c,x=t.children,m=t.className,h=t.color,v=void 0===h?"primary":h,j=t.defaultValue,P=t.disabled,S=void 0!==P&&P,M=t.error,k=void 0!==M&&M,R=t.FormHelperTextProps,T=t.fullWidth,N=void 0!==T&&T,I=t.helperText,B=t.id,F=t.InputLabelProps,W=t.inputProps,z=t.InputProps,A=t.inputRef,L=t.label,q=t.maxRows,_=t.minRows,D=t.multiline,E=void 0!==D&&D,H=t.name,V=t.onBlur,O=t.onChange,U=t.onFocus,J=t.placeholder,K=t.required,Y=void 0!==K&&K,G=t.rows,Q=t.select,X=void 0!==Q&&Q,$=t.SelectProps,ee=t.type,re=t.value,te=t.variant,ne=void 0===te?"outlined":te,ae=(0,a.Z)(t,y),oe=(0,n.Z)({},t,{autoFocus:u,color:v,disabled:S,error:k,fullWidth:N,multiline:E,required:Y,select:X,variant:ne}),ie=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},b,r)}(oe);var le={};"outlined"===ne&&(F&&"undefined"!==typeof F.shrink&&(le.notched=F.shrink),le.label=L),X&&($&&$.native||(le.id=void 0),le["aria-describedby"]=void 0);var se=(0,s.Z)(B),ce=I&&se?"".concat(se,"-helper-text"):void 0,de=L&&se?"".concat(se,"-label"):void 0,ue=C[ne],xe=(0,g.jsx)(ue,(0,n.Z)({"aria-describedby":ce,autoComplete:o,autoFocus:u,defaultValue:j,fullWidth:N,multiline:E,name:H,rows:G,maxRows:q,minRows:_,type:ee,value:re,id:se,inputRef:A,onBlur:V,onChange:O,onFocus:U,placeholder:J,inputProps:W},le,z));return(0,g.jsxs)(w,(0,n.Z)({className:(0,i.Z)(ie.root,m),disabled:S,error:k,fullWidth:N,ref:r,required:Y,color:v,variant:ne,ownerState:oe},ae,{children:[null!=L&&""!==L&&(0,g.jsx)(p.Z,(0,n.Z)({htmlFor:se,id:de},F,{children:L})),X?(0,g.jsx)(f.Z,(0,n.Z)({"aria-describedby":ce,id:se,labelId:de,value:re,input:xe},$,{children:x})):xe,I&&(0,g.jsx)(Z.Z,(0,n.Z)({id:ce},R,{children:I}))]}))}))},7883:function(e,r,t){t(72791);var n=t(76189),a=t(80184);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},11883:function(e,r,t){t(72791);var n=t(76189),a=t(80184);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=2781.819fa76a.chunk.js.map