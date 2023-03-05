"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[5904],{89673:function(e,r,t){t.d(r,{Z:function(){return A}});var o=t(84506),n=t(29439),a=t(4942),i=t(63366),s=t(87462),d=t(72791),c=(t(57441),t(28182)),u=t(94419),l=t(66934),p=t(31402),f=t(56125),m=t(35527),b=t(27318),v=t(98278),Z=t(75878),x=t(21217);function g(e){return(0,x.Z)("MuiAccordion",e)}var h=(0,Z.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),R=t(80184),y=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],C=(0,l.ZP)(m.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[(0,a.Z)({},"& .".concat(h.region),r.region),r.root,!t.square&&r.rounded,!t.disableGutters&&r.gutters]}})((function(e){var r,t=e.theme,o={duration:t.transitions.duration.shortest};return r={position:"relative",transition:t.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}}},(0,a.Z)(r,"&.".concat(h.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,a.Z)(r,"&.".concat(h.disabled),{backgroundColor:(t.vars||t).palette.action.disabledBackground}),r}),(function(e){var r=e.theme,t=e.ownerState;return(0,s.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(r.vars||r).shape.borderRadius,borderTopRightRadius:(r.vars||r).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(r.vars||r).shape.borderRadius,borderBottomRightRadius:(r.vars||r).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&(0,a.Z)({},"&.".concat(h.expanded),{margin:"16px 0"}))})),A=d.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiAccordion"}),a=t.children,l=t.className,m=t.defaultExpanded,Z=void 0!==m&&m,x=t.disabled,h=void 0!==x&&x,A=t.disableGutters,w=void 0!==A&&A,G=t.expanded,M=t.onChange,N=t.square,S=void 0!==N&&N,k=t.TransitionComponent,j=void 0===k?f.Z:k,I=t.TransitionProps,P=(0,i.Z)(t,y),V=(0,v.Z)({controlled:G,default:Z,name:"Accordion",state:"expanded"}),_=(0,n.Z)(V,2),q=_[0],T=_[1],B=d.useCallback((function(e){T(!q),M&&M(e,!q)}),[q,M,T]),W=d.Children.toArray(a),D=(0,o.Z)(W),E=D[0],L=D.slice(1),H=d.useMemo((function(){return{expanded:q,disabled:h,disableGutters:w,toggle:B}}),[q,h,w,B]),O=(0,s.Z)({},t,{square:S,disabled:h,disableGutters:w,expanded:q}),z=function(e){var r=e.classes,t={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,u.Z)(t,g,r)}(O);return(0,R.jsxs)(C,(0,s.Z)({className:(0,c.Z)(z.root,l),ref:r,ownerState:O,square:S},P,{children:[(0,R.jsx)(b.Z.Provider,{value:H,children:E}),(0,R.jsx)(j,(0,s.Z)({in:q,timeout:"auto"},I,{children:(0,R.jsx)("div",{"aria-labelledby":E.props.id,id:E.props["aria-controls"],role:"region",className:z.region,children:L})}))]}))}))},27318:function(e,r,t){var o=t(72791).createContext({});r.Z=o},3721:function(e,r,t){t.d(r,{Z:function(){return v}});var o=t(87462),n=t(63366),a=t(72791),i=t(28182),s=t(94419),d=t(66934),c=t(31402),u=t(75878),l=t(21217);function p(e){return(0,l.Z)("MuiAccordionDetails",e)}(0,u.Z)("MuiAccordionDetails",["root"]);var f=t(80184),m=["className"],b=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),v=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),a=t.className,d=(0,n.Z)(t,m),u=t,l=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},p,r)}(u);return(0,f.jsx)(b,(0,o.Z)({className:(0,i.Z)(l.root,a),ref:r,ownerState:u},d))}))},55818:function(e,r,t){t.d(r,{Z:function(){return y}});var o=t(4942),n=t(63366),a=t(87462),i=t(72791),s=t(28182),d=t(94419),c=t(66934),u=t(31402),l=t(95080),p=t(27318),f=t(75878),m=t(21217);function b(e){return(0,m.Z)("MuiAccordionSummary",e)}var v=(0,f.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Z=t(80184),x=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,c.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(e){var r,t=e.theme,n=e.ownerState,i={duration:t.transitions.duration.shortest};return(0,a.Z)((r={display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],i)},(0,o.Z)(r,"&.".concat(v.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,o.Z)(r,"&.".concat(v.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,o.Z)(r,"&:hover:not(.".concat(v.disabled,")"),{cursor:"pointer"}),r),!n.disableGutters&&(0,o.Z)({},"&.".concat(v.expanded),{minHeight:64}))})),h=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,r){return r.content}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&(0,o.Z)({transition:r.transitions.create(["margin"],{duration:r.transitions.duration.shortest})},"&.".concat(v.expanded),{margin:"20px 0"}))})),R=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,r){return r.expandIconWrapper}})((function(e){var r=e.theme;return(0,o.Z)({display:"flex",color:(r.vars||r).palette.action.active,transform:"rotate(0deg)",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})},"&.".concat(v.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAccordionSummary"}),o=t.children,c=t.className,l=t.expandIcon,f=t.focusVisibleClassName,m=t.onClick,v=(0,n.Z)(t,x),y=i.useContext(p.Z),C=y.disabled,A=void 0!==C&&C,w=y.disableGutters,G=y.expanded,M=y.toggle,N=(0,a.Z)({},t,{expanded:G,disabled:A,disableGutters:w}),S=function(e){var r=e.classes,t=e.expanded,o=e.disabled,n=e.disableGutters,a={root:["root",t&&"expanded",o&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,d.Z)(a,b,r)}(N);return(0,Z.jsxs)(g,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:A,component:"div","aria-expanded":G,className:(0,s.Z)(S.root,c),focusVisibleClassName:(0,s.Z)(S.focusVisible,f),onClick:function(e){M&&M(e),m&&m(e)},ref:r,ownerState:N},v,{children:[(0,Z.jsx)(h,{className:S.content,ownerState:N,children:o}),l&&(0,Z.jsx)(R,{className:S.expandIconWrapper,ownerState:N,children:l})]}))}))}}]);
//# sourceMappingURL=5904.f92cd894.chunk.js.map