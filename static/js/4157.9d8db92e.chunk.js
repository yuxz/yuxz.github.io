"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[4157],{47010:function(e,r,t){t.d(r,{DM:function(){return a},En:function(){return l},Q_:function(){return c},bQ:function(){return d}});var n=t(93433),o=t(65166),i=t(763),a=["#FFC0CB","#1890FF","#00AB55","#000000","#FFFFFF","#94D82D","#FF4842","#FFC107"],l=["Men Runing","Men Sportswear","Men Runing","Men Training"],c=["Published","Archived","Draft"],s=["sale","new"],d=(0,n.Z)(Array(20)).map((function(e,r){return{id:o.We.datatype.uuid(),name:o.We.commerce.product(),displayName:o.We.commerce.productName(),category:(0,i.sample)(l),description:o.We.commerce.productDescription(),media:o.We.image.sports(),price:o.We.datatype.number({min:4,max:99,precision:.01}),priceSale:r%3?null:o.We.datatype.number({min:19,max:29,precision:.01}),colors:(0,i.sampleSize)(a,3),productStatus:(0,i.sample)(s),status:(0,i.sample)(c),limits:(0,i.sample)(["Members Only","",""]),createdAt:o.We.date.past(),stocks:(0,n.Z)(Array(Math.round(10*Math.random())+1)).map((function(e,r){return{id:o.We.datatype.uuid(),name:o.We.commerce.productName(),avatarUrl:o.We.image.sports(),sku:o.We.finance.bic(),stock:o.We.finance.amount(2,10,0),price:o.We.datatype.number({min:4,max:99,precision:.01}),createdAt:o.We.date.past()}}))}}))},44074:function(e,r,t){t.d(r,{L:function(){return d}});var n=t(1413),o=t(45987),i=t(72791),a=t(13889),l=t(60704),c=t(80184),s=["forwardedRef"],d=function(e){var r=e.forwardedRef,t=void 0===r?function(){}:r,d=(0,o.Z)(e,s),u=(0,l.VC)().direction,p=(0,i.useCallback)((function(e){t(e?e.view:null)}),[t]);return(0,c.jsx)(a.$B,(0,n.Z)({hideTracksWhenNotNeeded:!0,ref:p,renderView:function(e){return"rtl"===u?(0,c.jsx)("div",(0,n.Z)((0,n.Z)({},e),{},{style:(0,n.Z)((0,n.Z)({},e.style),{},{marginLeft:e.style.marginRight,marginRight:0})})):(0,c.jsx)("div",(0,n.Z)((0,n.Z)({},e),{},{style:(0,n.Z)({},e.style)}))}},d))}},58586:function(e,r,t){t.d(r,{b8:function(){return y},ZQ:function(){return c}});var n=t(48),o=t(53767),i=t(98530),a=t(20890),l=t(80184);function c(e){var r=e.colors,t=e.limit,c=void 0===t?3:t,s=e.sx,d=r.slice(0,c),u=r.length-c;return(0,l.jsxs)(o.Z,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-star",sx:s,children:[d.map((function(e,r){return(0,l.jsx)(i.Z,{sx:{ml:-.75,width:16,height:16,borderRadius:"50%",border:function(e){return"solid 2px ".concat(e.palette.background.paper)},boxShadow:function(e){return"inset -1px 1px 2px ".concat((0,n.Fq)(e.palette.common.black,.24))},bgcolor:e}},e+r)})),r.length>c&&(0,l.jsx)(a.Z,{variant:"subtitle2",children:"+".concat(u)})]})}var s=t(1413),d=t(45987),u=t(94454),p=t(52007),h=t.n(p),x=t(72791),m=t(62711),f=["icon","width","sx"],Z=(0,x.forwardRef)((function(e,r){var t=e.icon,n=e.width,o=void 0===n?20:n,a=e.sx,c=(0,d.Z)(e,f);return(0,l.jsx)(i.Z,(0,s.Z)({ref:r,component:m.JO,icon:t,sx:(0,s.Z)({width:o,height:o},a)},c))}));Z.propTypes={sx:h().object,width:h().oneOfType([h().number,h().string]),icon:h().oneOfType([h().element,h().string])};var v=Z,j=["checked","whiteColor","sx"];function g(e){var r=e.checked,t=e.whiteColor,o=e.sx,a=(0,d.Z)(e,j),c=(0,l.jsx)(i.Z,{sx:{width:1,height:1,opacity:.48,borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"}}),u=(0,l.jsx)(v,{icon:"eva:checkmark-fill",sx:(0,s.Z)({opacity:0},r&&(0,s.Z)({opacity:1,color:"common.white"},t&&{color:"common.black"}))});return(0,l.jsxs)(i.Z,(0,s.Z)((0,s.Z)({sx:(0,s.Z)((0,s.Z)((0,s.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat((0,n.Fq)(e.palette.grey[500],.24))}}),r&&{transform:"scale(1.4)"}),o)},a),{},{children:[r&&c,u]}))}var b=["colors","selected","onChangeColor","sx"];function y(e){var r=e.colors,t=e.selected,n=e.onChangeColor,o=e.sx,a=(0,d.Z)(e,b);return(0,l.jsx)(i.Z,{sx:o,children:r.map((function(e){var r="#FFFFFF"===e||"white"===e;return(0,l.jsx)(u.Z,(0,s.Z)({size:"small",value:e,color:"default",checked:t.includes(e),onChange:function(){return n(e)},icon:(0,l.jsx)(g,{whiteColor:r}),checkedIcon:(0,l.jsx)(g,{checked:!0,whiteColor:r}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},a),e)}))})}},1695:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),o=t(45987),i=t(72791),a=t(13967),l=t(98530),c=t(20033),s=t(48),d=(0,c.ZP)(l.Z)((function(e){var r=e.theme,t=e.ownerState,o="light"===r.palette.mode,i="filled"===t.variant,a="outlined"===t.variant,l="soft"===t.variant,c=(0,n.Z)({},"default"===t.color&&(0,n.Z)((0,n.Z)({},a&&{backgroundColor:"transparent",color:r.palette.text.primary,border:"1px solid ".concat((0,s.Fq)(r.palette.grey[500],.32))}),l&&{color:o?r.palette.text.primary:r.palette.common.white,backgroundColor:(0,s.Fq)(r.palette.grey[500],.16)})),d=(0,n.Z)({},"default"!==t.color&&(0,n.Z)((0,n.Z)((0,n.Z)({},i&&{color:r.palette[t.color].contrastText,backgroundColor:r.palette[t.color].main}),a&&{backgroundColor:"transparent",color:r.palette[t.color].main,border:"1px solid ".concat(r.palette[t.color].main)}),l&&{color:r.palette[t.color][o?"dark":"light"],backgroundColor:(0,s.Fq)(r.palette[t.color].main,.16)}));return(0,n.Z)((0,n.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:"".concat(r.shape.borderRadius,"px"),cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:r.spacing(0,1),color:r.palette.grey[800],fontSize:r.typography.pxToRem(12),fontFamily:r.typography.fontFamily,backgroundColor:r.palette.grey[300],fontWeight:r.typography.fontWeightBold},d),c)})),u=t(80184),p=["children","color","variant","startIcon","endIcon","sx"],h=(0,i.forwardRef)((function(e,r){var t=e.children,i=e.color,c=void 0===i?"default":i,s=e.variant,h=void 0===s?"soft":s,x=e.startIcon,m=e.endIcon,f=e.sx,Z=(0,o.Z)(e,p),v=(0,a.Z)(),j={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,u.jsxs)(d,(0,n.Z)((0,n.Z)({ref:r,component:"span",ownerState:{color:c,variant:h},sx:(0,n.Z)((0,n.Z)((0,n.Z)({},x&&{pl:.75}),m&&{pr:.75}),f),theme:v},Z),{},{children:[x&&(0,u.jsxs)(l.Z,{sx:(0,n.Z)({mr:.75},j),children:[" ",x," "]}),t,m&&(0,u.jsxs)(l.Z,{sx:(0,n.Z)({ml:.75},j),children:[" ",m," "]})]}))}))},64157:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(29439),o=t(72791),i=t(53767),a=t(24518),l=t(20890),c=t(31976),s=t(23786),d=t(15265),u=t(80184),p=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function h(){var e=(0,o.useState)(null),r=(0,n.Z)(e,2),t=r[0],i=r[1],h=function(){i(null)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.Z,{color:"inherit",disableRipple:!0,onClick:function(e){i(e.currentTarget)},endIcon:t?(0,u.jsx)(d.IconChevronUp,{}):(0,u.jsx)(d.IconChevronDown,{}),children:["Sort By:\xa0",(0,u.jsx)(l.Z,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Newest"})]}),(0,u.jsx)(c.Z,{keepMounted:!0,anchorEl:t,open:Boolean(t),onClose:h,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:p.map((function(e){return(0,u.jsx)(s.Z,{selected:"newest"===e.value,onClick:h,sx:{typography:"body2"},children:e.label},e.value)}))})]})}var x=t(1413),m=t(45987),f=t(61889),Z=t(57621),v=t(98530),j=t(13400),g=t(50533),b=t(20033),y=t(7870),w=t(1695),F=t(58586),C=t(29886),k=t(90690),W=(0,b.ZP)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function R(e){var r=e.product,t=(0,C.u)(),n=r.name,o=r.category,a=r.media,c=r.price,s=r.priceSale,d=r.colors,p=r.limits,h=r.status;return(0,u.jsxs)(Z.Z,{children:[(0,u.jsxs)(v.Z,{sx:{pt:"100%",position:"relative"},children:[(0,u.jsxs)(i.Z,{direction:"row",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:[h&&(0,u.jsx)(w.Z,{variant:"filled",color:"sale"===h?"error":"info",children:h}),(0,u.jsx)(j.Z,{"aria-label":"delete",size:"large",children:(0,u.jsx)(k.Z,{fontSize:"inherit"})})]}),(0,u.jsx)(W,{alt:n,src:a})]}),(0,u.jsxs)(v.Z,{sx:{position:"relative"},children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",j:!0,ustifyContent:"space-between",sx:{position:"absolute",top:-40,left:25},children:[(0,u.jsxs)(l.Z,{variant:"h5",sx:{display:"inline",bgcolor:t.palette.grey[100],borderRadius:"".concat(t.shape.borderRadius,"px")},children:[(0,u.jsx)(l.Z,{component:"span",variant:"h5",sx:{color:"text.disabled",textDecoration:"line-through"},children:s&&(0,y.e_)(s)}),"\xa0",(0,y.e_)(c)]}),s&&(0,u.jsxs)(l.Z,{component:"span",variant:"h5",sx:{ml:2,borderRadius:"".concat(t.shape.borderRadius,"px"),color:t.palette.error.main,bgcolor:t.palette.grey[100]},children:[(0,y.v1)(s/c*100),"%"]})]}),(0,u.jsxs)(i.Z,{spacing:2,sx:{p:3},children:[(0,u.jsx)(F.ZQ,{colors:d}),(0,u.jsx)(g.Z,{color:"inherit",underline:"hover",children:(0,u.jsx)(l.Z,{variant:"subtitle1",noWrap:!0,children:n})}),(0,u.jsx)(l.Z,{variant:"subtitle2",noWrap:!0,color:"grey",children:o}),(0,u.jsx)(l.Z,{variant:"subtitle2",noWrap:!0,color:"info",children:p})]})]})]})}var S=["products"];function I(e){var r=e.products,t=(0,m.Z)(e,S);return(0,u.jsx)(f.ZP,(0,x.Z)((0,x.Z)({container:!0,spacing:3},t),{},{children:r.map((function(e){return(0,u.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,u.jsx)(R,{product:e})},e.id)}))}))}var B=t(13967),A=t(73974),P=t(94721),_=t(79012),z=t(85523),D=t(94454),M=t(88970),O=t(61419),T=t(62384),N=t(44074),L=["Men","Women","Kids"],$=["All","Shose","Apparel","Accessories"],q=["up4Star","up3Star","up2Star","up1Star"],Q=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],H=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function U(e){var r=e.openFilter,t=e.onOpenFilter,n=e.onCloseFilter,o=(0,B.Z)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{disableRipple:!0,color:"inherit",endIcon:(0,u.jsx)(d.IconFilter,{size:20,color:o.palette.grey[400],stroke:2,strokeLinejoin:"miter"}),onClick:t,children:"Filters\xa0"}),(0,u.jsxs)(A.ZP,{anchor:"right",open:r,onClose:n,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[(0,u.jsx)(l.Z,{variant:"subtitle1",sx:{ml:1},children:"Filters"}),(0,u.jsx)(j.Z,{onClick:n,children:(0,u.jsx)(d.IconX,{})})]}),(0,u.jsx)(P.Z,{}),(0,u.jsx)(N.L,{children:(0,u.jsxs)(i.Z,{spacing:3,sx:{p:3},children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:"Gender"}),(0,u.jsx)(_.Z,{children:L.map((function(e){return(0,u.jsx)(z.Z,{control:(0,u.jsx)(D.Z,{}),label:e},e)}))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:"Category"}),(0,u.jsx)(M.Z,{children:$.map((function(e){return(0,u.jsx)(z.Z,{value:e,control:(0,u.jsx)(O.Z,{}),label:e},e)}))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:"Colors"}),(0,u.jsx)(F.b8,{name:"colors",selected:[],colors:H,onChangeColor:function(e){return[].includes(e)},sx:{maxWidth:152}})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:"Price"}),(0,u.jsx)(M.Z,{children:Q.map((function(e){return(0,u.jsx)(z.Z,{value:e.value,control:(0,u.jsx)(O.Z,{}),label:e.label},e.value)}))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"subtitle1",gutterBottom:!0,children:"Rating"}),(0,u.jsx)(M.Z,{children:q.map((function(e,r){return(0,u.jsx)(z.Z,{value:e,control:(0,u.jsx)(O.Z,{disableRipple:!0,color:"default",icon:(0,u.jsx)(T.Z,{readOnly:!0,value:4-r}),checkedIcon:(0,u.jsx)(T.Z,{readOnly:!0,value:4-r}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:{my:.5,borderRadius:"".concat(o.shape.borderRadius,"px"),"&:hover":{opacity:.48}}},e)}))})]})]})}),(0,u.jsx)(v.Z,{sx:{p:3},children:(0,u.jsx)(a.Z,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:(0,u.jsx)(d.IconClearAll,{}),children:"Clear All"})})]})]})}var E=t(47010),V=t(5789);function G(){var e=(0,o.useState)(!1),r=(0,n.Z)(e,2),t=r[0],a=r[1];return(0,u.jsxs)(V.Z,{title:"Products",children:[(0,u.jsx)(i.Z,{direction:"row",flexWrap:"wrap-reverse",alignItems:"center",justifyContent:"flex-end",sx:{mb:5},children:(0,u.jsxs)(i.Z,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[(0,u.jsx)(U,{openFilter:t,onOpenFilter:function(){a(!0)},onCloseFilter:function(){a(!1)}}),(0,u.jsx)(h,{})]})}),(0,u.jsx)(I,{products:E.bQ})]})}},7870:function(e,r,t){t.d(r,{e_:function(){return i},v1:function(){return a}});var n=t(26098),o=t.n(n);function i(e){return l(e?o()(e).format("$0,0.00"):"",".00")}function a(e){return l(e?o()(e).format("0.00a"):"",".00")}function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",t=e.includes(r);return t?e.replace(r,""):e}}}]);
//# sourceMappingURL=4157.9d8db92e.chunk.js.map