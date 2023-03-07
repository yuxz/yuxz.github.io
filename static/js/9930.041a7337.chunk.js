"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[9930],{82313:function(e,t,n){var r=n(57621),i=n(39504),a=n(61889),o=n(47047),s=n(80184);t.Z=function(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)(i.Z,{children:(0,s.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,s.jsx)(a.ZP,{item:!0,children:(0,s.jsxs)(a.ZP,{container:!0,justifyContent:"space-between",children:[(0,s.jsx)(a.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"rectangular",width:44,height:44})}),(0,s.jsx)(a.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,s.jsx)(a.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,s.jsx)(a.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"rectangular",height:30})})]})})})}},81557:function(e,t,n){var r=n(13967),i=n(61889),a=n(67414),o=n(64554),s=n(20890),c=n(79816),l=n(82313),d=n(80184);t.Z=function(e){var t=e.isLoading,n=e.title,h=void 0===n?"Title":n,m=e.value,u=void 0===m?"":m,p=e.percentage,x=void 0===p?"":p,Z=e.icon,g=void 0===Z?function(){}:Z,f=e.color,v=void 0===f?"primary":f,j=(0,r.Z)();return(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(l.Z,{}):(0,d.jsx)(c.Z,{sx:{bgcolor:v},children:(0,d.jsxs)(i.ZP,{container:!0,direction:"column",children:[(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(i.ZP,{justifyContent:"flex-start",alignItems:"center",children:(0,d.jsxs)(a.Z,{direction:"row",spacing:1,children:[(0,d.jsx)(o.Z,{sx:{fontSize:"1rem",fontWeight:500,color:j.palette.text.default},children:g}),(0,d.jsx)(s.Z,{sx:{fontSize:"1rem",fontWeight:500,color:j.palette.text.default},children:h})]})})}),(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(s.Z,{variant:"h1",sx:{fontSize:"2rem",color:j.palette.text.default,fontWeight:500,mr:1,mt:1.75,mb:.75},children:u})}),(0,d.jsx)(i.ZP,{item:!0,sx:{mb:.75},children:(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,d.jsxs)(s.Z,{variant:"subtitle1",sx:{fontSize:"1rem",fontWeight:500,color:x>0?j.palette.success.main:j.palette.error.main},children:[x,"%"]}),(0,d.jsx)(s.Z,{sx:{fontSize:"1rem",fontWeight:500,color:j.palette.text.default},children:" From Last Month"})]})})]})})})}},79456:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),i=n(45987),a=n(72791),o=n(64554),s=n(52007),c=n.n(s),l=n(57689),d=function(e){var t=e.children,n=(0,l.TH)().pathname;return(0,a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),t||null};d.propTypes={children:c().node};var h=d,m=n(80184),u=["sx","children"],p=function(e){var t=e.sx,n=e.children,a=(0,i.Z)(e,u);return(0,m.jsx)(h,{children:(0,m.jsx)(o.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({minHeight:"calc(100vh - 80px)",mt:2,px:2},t)},a),{},{children:n}))})}},16983:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(1413),i=n(45987),a=(n(72791),n(42161)),o=n(9087),s=n(64554),c=n(61889),l=n(93517),d=n(50533),h=n(67414),m=n(20068),u=n(13400),p=n(20890),x=n(24518),Z=n(29886),g=n(57689),f=n(80184),v=["title","subtitle","breadcrumbs","back","control","action"];function j(e){var t=(0,Z.u)(),n=(0,g.s0)(),j=e.title,b=e.subtitle,w=e.breadcrumbs,y=e.back,P=e.control,C=e.action,k=(0,i.Z)(e,v);return(0,f.jsx)(s.Z,{sx:{padding:"".concat(t.spacing(4)),marginBottom:"".concat(t.spacing(4)),boxShadow:"dark"===t.palette.mode?"0 1px 0   ".concat(t.palette.grey[200],", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat(t.palette.grey[300],", 0px 4px 8px -5px  ").concat(t.palette.grey[200])},children:(0,f.jsxs)(c.ZP,(0,r.Z)((0,r.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},k),{},{children:[(0,f.jsxs)(c.ZP,{item:!0,children:[w&&(0,f.jsx)(l.Z,{"aria-label":"breadcrumb",children:w.map((function(e,t){return(0,f.jsx)(d.Z,{underline:"hover",color:"inherit",pathname:e.pathname,children:e.name},t)}))}),(0,f.jsxs)(h.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",children:[y&&(0,f.jsx)(m.Z,{arrow:!0,placement:"top",title:"Go back",children:(0,f.jsx)(u.Z,{color:"primary","aria-label":"Back",component:"label",onClick:function(){return window.history.back()},sx:{p:2,mr:2},children:(0,f.jsx)(a.Z,{})})}),(0,f.jsxs)(h.Z,{spacing:1,children:[(0,f.jsx)(p.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:j}),b&&(0,f.jsx)(p.Z,{variant:"subtitle2",children:b})]})]})]}),(0,f.jsxs)(c.ZP,{item:!0,children:[C,P&&(0,f.jsx)(x.Z,{variant:"contained",startIcon:(0,f.jsx)(o.Z,{fontSize:"small"}),onClick:function(){return n(P.route)},children:P.label})]})]}))})}},39930:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(61889),i=n(81557),a=n(1413),o=n(66934),s=n(13967),c=n(64554),l=n(90493),d=n(45484),h=n(20653),m=n(60220),u=n(49900),p=n(20890),x=n(5789),Z=n(57621),g=n(47047),f=n(80184),v=function(){return(0,f.jsx)(Z.Z,{sx:{p:2},children:(0,f.jsx)(l.Z,{sx:{py:0},children:(0,f.jsxs)(d.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,f.jsx)(h.Z,{children:(0,f.jsx)(g.Z,{variant:"rectangular",width:44,height:44})}),(0,f.jsx)(u.Z,{sx:{py:0},primary:(0,f.jsx)(g.Z,{variant:"rectangular",height:20}),secondary:(0,f.jsx)(g.Z,{variant:"text"})})]})})})},j=(0,n(76189).Z)((0,f.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded"),b=(0,o.ZP)(x.Z)((function(e){var t,n,r=e.theme,i=e.color;return{backgroundColor:null===(t=r.palette[i])||void 0===t?void 0:t[800],color:r.palette.common.white,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(210.04deg, ".concat(null===(n=r.palette[i])||void 0===n?void 0:n.light," -50.94%, rgba(144, 202, 249, 0) 83.49%)"),borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(140.9deg, ".concat(r.palette[i].light," -14.02%, rgba(144, 202, 249, 0) 70.50%)"),borderRadius:"50%",top:-160,right:-130}}})),w=function(e){var t,n=e.isLoading,r=e.caption,i=void 0===r?"Caption":r,o=e.value,x=void 0===o?"0.00":o,Z=e.icon,g=void 0===Z?(0,f.jsx)(j,{}):Z,w=e.color,y=void 0===w?"primary":w,P=(0,s.Z)();return n?(0,f.jsx)(v,{}):(0,f.jsx)(b,{border:!1,content:!1,color:y,children:(0,f.jsx)(c.Z,{sx:{p:2},children:(0,f.jsx)(l.Z,{sx:{py:0},children:(0,f.jsxs)(d.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,f.jsx)(h.Z,{children:(0,f.jsx)(m.Z,{variant:"rounded",sx:(0,a.Z)((0,a.Z)((0,a.Z)({},P.typography.commonAvatar),P.typography.largeAvatar),{},{backgroundColor:null===(t=P.palette[y])||void 0===t?void 0:t.dark,color:P.palette.common.white}),children:g})}),(0,f.jsx)(u.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,f.jsx)(p.Z,{variant:"h4",sx:{color:P.palette.common.white},children:x}),secondary:(0,f.jsx)(p.Z,{variant:"subtitle2",sx:{color:P.palette.common.white,mt:.5},children:i})})]})})})})},y=n(63785),P=(n(72791),n(79456)),C=n(16983);function k(){var e=(0,y.ZR)().appConfig;return(0,f.jsxs)(P.Z,{children:[(0,f.jsx)(C.Z,{title:"Wigets"}),(0,f.jsxs)(r.ZP,{container:!0,spacing:e.theme.initialGridSpacing,children:[(0,f.jsxs)(r.ZP,{item:!0,container:!0,md:12,spacing:e.theme.initialGridSpacing,children:[(0,f.jsx)(r.ZP,{item:!0,md:3,children:(0,f.jsx)(w,{isLoading:!1})}),(0,f.jsx)(r.ZP,{item:!0,md:3,children:(0,f.jsx)(w,{isLoading:!1})}),(0,f.jsx)(r.ZP,{item:!0,md:3,children:(0,f.jsx)(w,{isLoading:!1})}),(0,f.jsxs)(r.ZP,{item:!0,md:3,children:[(0,f.jsx)(w,{isLoading:!1})," "]})]}),(0,f.jsxs)(r.ZP,{item:!0,container:!0,md:12,spacing:e.theme.initialGridSpacing,children:[(0,f.jsx)(r.ZP,{item:!0,md:3}),(0,f.jsx)(r.ZP,{item:!0,md:3,children:" "}),(0,f.jsx)(r.ZP,{item:!0,md:3}),(0,f.jsx)(r.ZP,{item:!0,md:3})]}),(0,f.jsxs)(r.ZP,{item:!0,container:!0,md:12,spacing:e.theme.initialGridSpacing,children:[(0,f.jsx)(r.ZP,{item:!0,md:3,children:(0,f.jsx)(i.Z,{isLoading:!1})}),(0,f.jsxs)(r.ZP,{item:!0,md:3,children:[" ",(0,f.jsx)(i.Z,{isLoading:!1})]}),(0,f.jsxs)(r.ZP,{item:!0,md:3,children:[" ",(0,f.jsx)(i.Z,{isLoading:!1})]}),(0,f.jsxs)(r.ZP,{item:!0,md:3,children:[" ",(0,f.jsx)(i.Z,{isLoading:!1})]})]}),(0,f.jsxs)(r.ZP,{item:!0,container:!0,md:12,spacing:e.theme.initialGridSpacing,children:[(0,f.jsx)(r.ZP,{item:!0,md:3}),(0,f.jsx)(r.ZP,{item:!0,md:3}),(0,f.jsx)(r.ZP,{item:!0,md:3}),(0,f.jsx)(r.ZP,{item:!0,md:3})]})]})]})}},9087:function(e,t,n){var r=n(76189),i=n(80184);t.Z=(0,r.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone")},42161:function(e,t,n){var r=n(76189),i=n(80184);t.Z=(0,r.Z)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},93517:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(93433),i=n(29439),a=n(4942),o=n(87462),s=n(63366),c=n(72791),l=(n(57441),n(28182)),d=n(94419),h=n(66934),m=n(31402),u=n(20890),p=n(12065),x=n(76189),Z=n(80184),g=(0,x.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=n(95080),v=(0,h.ZP)(f.Z)((function(e){var t=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,p._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(t.palette.grey[600],.12)})})})),j=(0,h.ZP)(g)({width:24,height:16});var b=function(e){var t=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(v,(0,o.Z)({focusRipple:!0},e,{ownerState:t,children:(0,Z.jsx)(j,{ownerState:t})}))})},w=n(75878),y=n(21217);function P(e){return(0,y.Z)("MuiBreadcrumbs",e)}var C=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,h.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(C.li),t.li),t.root]}})({}),R=(0,h.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,h.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function z(e,t,n,r){return e.reduce((function(i,a,o){return o<e.length-1?i=i.concat(a,(0,Z.jsx)(M,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(o))):i.push(a),i}),[])}var B=c.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,h=n.className,u=n.component,p=void 0===u?"nav":u,x=n.expandText,g=void 0===x?"Show path":x,f=n.itemsAfterCollapse,v=void 0===f?1:f,j=n.itemsBeforeCollapse,w=void 0===j?1:j,y=n.maxItems,C=void 0===y?8:y,M=n.separator,B=void 0===M?"/":M,L=(0,s.Z)(n,k),A=c.useState(!1),I=(0,i.Z)(A,2),_=I[0],T=I[1],N=(0,o.Z)({},n,{component:p,expanded:_,expandText:g,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:C,separator:B}),W=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},P,t)}(N),G=c.useRef(null),F=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(S,(0,o.Z)({ref:t,component:p,color:"text.secondary",className:(0,l.Z)(W.root,h),ownerState:N},L,{children:(0,Z.jsx)(R,{className:W.ol,ref:G,ownerState:N,children:z(_||C&&F.length<=C?F:function(e){return w+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,w)),[(0,Z.jsx)(b,{"aria-label":g,onClick:function(){T(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(F),W.separator,B,N)})}))}))},47047:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(30168),i=n(63366),a=n(87462),o=n(72791),s=n(28182),c=n(52554),l=n(94419);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(e){return parseFloat(e)}var m=n(12065),u=n(66934),p=n(31402),x=n(75878),Z=n(21217);function g(e){return(0,Z.Z)("MuiSkeleton",e)}(0,x.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f,v,j,b,w,y,P,C,k=n(80184),S=["animation","className","component","height","style","variant","width"],R=(0,c.F4)(w||(w=f||(f=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,c.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),z=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=d(t.shape.borderRadius)||"px",i=h(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,m.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(P||(P=j||(j=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,c.iv)(C||(C=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(n.vars||n).palette.action.hover)})),B=o.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,c=n.className,d=n.component,h=void 0===d?"span":d,m=n.height,u=n.style,x=n.variant,Z=void 0===x?"text":x,f=n.width,v=(0,i.Z)(n,S),j=(0,a.Z)({},n,{animation:o,component:h,variant:Z,hasChildren:Boolean(v.children)}),b=function(e){var t=e.classes,n=e.variant,r=e.animation,i=e.hasChildren,a=e.width,o=e.height,s={root:["root",n,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.Z)(s,g,t)}(j);return(0,k.jsx)(z,(0,a.Z)({as:h,ref:t,className:(0,s.Z)(b.root,c),ownerState:j},v,{style:(0,a.Z)({width:f,height:m},u)}))}))}}]);
//# sourceMappingURL=9930.041a7337.chunk.js.map