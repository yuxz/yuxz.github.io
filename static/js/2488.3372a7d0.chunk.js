"use strict";(self.webpackChunktmc_free_react_admin_template=self.webpackChunktmc_free_react_admin_template||[]).push([[2488],{33779:function(e,t,r){r.d(t,{Q:function(){return a},z:function(){return n}});var s=r(93433),i=r(65166),o=r(763),a=["Placed","Processed","Delivered","Complete"],n=(0,s.Z)(Array(12)).map((function(e,t){return{id:i.We.datatype.uuid(),customerId:i.We.datatype.uuid(),customerName:i.We.name.fullName(),invoiceId:i.We.datatype.uuid(),promotionCode:i.We.datatype.number(),totalAmount:i.We.datatype.number({min:4,max:1999,precision:.01}),description:i.We.commerce.productDescription(),name:i.We.commerce.productName(),status:(0,o.sample)(a),items:[{productId:i.We.datatype.uuid(),name:i.We.commerce.productName(),price:i.We.datatype.number({min:4,max:99,precision:.01}),amount:i.We.datatype.number()},{productId:i.We.datatype.uuid(),name:i.We.commerce.productName(),price:i.We.datatype.number({min:4,max:99,precision:.01}),amount:i.We.datatype.number()}],createdAt:i.We.date.past()}}))},79456:function(e,t,r){r.d(t,{Z:function(){return m}});var s=r(1413),i=r(45987),o=r(72791),a=r(64554),n=r(52007),l=r.n(n),d=r(57689),c=function(e){var t=e.children,r=(0,d.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),t||null};c.propTypes={children:l().node};var p=c,h=r(80184),u=["sx","children"],m=function(e){var t=e.sx,r=e.children,o=(0,i.Z)(e,u);return(0,h.jsx)(p,{children:(0,h.jsx)(a.Z,(0,s.Z)((0,s.Z)({sx:(0,s.Z)({minHeight:"calc(100vh - 80px)",mt:2,px:1},t)},o),{},{children:r}))})}},82488:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});r(72791);var s=r(61889),i=r(93213),o=r(35982),a=r(63833),n=r(76189),l=r(80184),d=(0,n.Z)((0,l.jsx)("path",{d:"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"}),"Tour"),c=r(13496),p=r(79816),h=r(63785),u=r(45987),m=r(80946),x=r(79836),f=r(56890),Z=r(35855),g=r(53994),j=r(53382),v=r(64554),b=r(20890),y=r(81918),w=["orders"],k=function(e){var t=e.orders;(0,u.Z)(e,w);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(x.Z,{size:"small",children:[(0,l.jsx)(f.Z,{children:(0,l.jsxs)(Z.Z,{children:[(0,l.jsx)(g.Z,{children:"ID"}),(0,l.jsx)(g.Z,{children:"Date"}),(0,l.jsx)(g.Z,{children:"Total"}),(0,l.jsx)(g.Z,{children:"Status"})]})}),(0,l.jsx)(j.Z,{children:t.map((function(e){var t,r;return(0,l.jsxs)(Z.Z,{hover:!0,children:[(0,l.jsx)(g.Z,{children:(0,l.jsx)(v.Z,{sx:{alignItems:"center",display:"flex"},children:(0,l.jsx)(b.Z,{color:"textPrimary",variant:"body1",children:null===(t=e.id)||void 0===t||null===(r=t.substr(0,8))||void 0===r?void 0:r.toUpperCase()})})}),(0,l.jsx)(g.Z,{children:(0,m.Z)(Number(e.createdAt),"dd/MM/yyyy")}),(0,l.jsxs)(g.Z,{children:["$",e.totalAmount]}),(0,l.jsxs)(g.Z,{children:["Placed"===e.status&&(0,l.jsx)(y.Z,{label:e.status,sx:{bgcolor:"success.light"}}),"Processed"===e.status&&(0,l.jsx)(y.Z,{label:e.status,sx:{bgcolor:"secondary.light"}}),"Delivered"===e.status&&(0,l.jsx)(y.Z,{label:e.status,sx:{bgcolor:"grey.300"}}),"Complete"===e.status&&(0,l.jsx)(y.Z,{label:e.status,sx:{bgcolor:"error.light"}})]})]},e.id)}))})]})})},z=r(33779),C={chart:{id:"spark1",group:"sparks",type:"line",sparkline:{enabled:!0},dropShadow:{enabled:!0,top:1,left:1,blur:2,opacity:.2}},series:[{data:[125,725,427,625,124,322,129,524,424,621]}],stroke:{curve:"smooth"},markers:{size:0},grid:{padding:{top:10,bottom:10,left:0}},colors:["#fff"],xaxis:{crosshairs:{width:1}},tooltip:{x:{show:!1},y:{title:{formatter:function(e){return""}}}}},W={chart:{id:"spark2",group:"sparks",type:"line",height:80,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:1,left:1,blur:2,opacity:.2}},series:[{data:[417,445,741,322,526,331,444,353,425,189]}],stroke:{curve:"smooth"},markers:{size:0},grid:{padding:{top:10,bottom:10,left:0}},colors:["#fff"],xaxis:{crosshairs:{width:1}},tooltip:{x:{show:!1},y:{title:{formatter:function(e){return""}}}}},P={chart:{id:"spark3",group:"sparks",type:"line",height:80,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:1,left:1,blur:2,opacity:.2}},series:[{data:[142,144,43,473,332,434,134,535,421,629]}],stroke:{curve:"smooth"},grid:{padding:{top:10,bottom:10,left:0}},markers:{size:0},colors:["#fff"],tooltip:{x:{show:!1},y:{title:{formatter:function(e){return""}}}}},Q={chart:{id:"spark4",group:"sparks",type:"line",height:80,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:1,left:1,blur:2,opacity:.2}},series:[{data:[235,626,431,539,245,454,122,326,92,221]}],stroke:{curve:"smooth"},markers:{size:0},grid:{padding:{top:10,bottom:10,left:0}},colors:["#fff"],tooltip:{x:{show:!1},y:{title:{formatter:function(e){return""}}}}},M={chart:{height:380,type:"bar",stacked:!0},plotOptions:{bar:{columnWidth:"30%",horizontal:!0}},series:[{name:"Electronics",data:[1424,2635,2211,1827,1212,1213,1121,1729]},{name:"Computers",data:[1333,2423,2120,800,1213,2427,3123,1212]},{name:"Automotive",data:[1221,1637,1535,1125,2421,1314,1585,1023]}],xaxis:{categories:["2021 Q1","2021 Q2","2021 Q3","2021 Q4","2022 Q1","2022 Q2","2022 Q3","2022 Q4"]},title:{text:"Quarterly Sales",align:"left",offsetY:5,offsetX:10},fill:{opacity:1}},S={chart:{height:380,type:"area",stacked:!1},stroke:{curve:"smooth",width:2},series:[{name:"Electronics",data:[1282,1567,2643,2044,3213,2657]},{name:"Computerss",data:[3388,3353,2144,4424,1920,3322]},{name:"Automotive",data:[2178,3923,5322,1153,2936,4232]}],title:{text:"Quarterly Sales",align:"left",offsetY:5,offsetX:10},xaxis:{categories:["2021 Q3","2021 Q4","2022 Q1","2022 Q2","2022 Q3","2022 Q4"]},tooltip:{theme:"light",followCursor:!0},fill:{opacity:1}},A={chart:{type:"radialBar"},plotOptions:{radialBar:{size:void 0,inverseOrder:!0,hollow:{margin:5,size:"48%",background:"transparent"},track:{show:!1},startAngle:-180,endAngle:180}},stroke:{lineCap:"round"},series:[81,53,78],labels:["China","Japan","Americ"],title:{text:"Monthly Country Sales",align:"left",offsetY:5,offsetX:10},legend:{show:!0,floating:!0,position:"right",offsetX:30,offsetY:245}},H=r(79456),L=r(13967),I=r(67414);function N(e){var t=e.title,r=e.value,s=e.options,i=e.icon,o=e.color,a=(0,L.Z)();return(0,l.jsxs)(v.Z,{sx:{width:"100%",maxWidth:420,height:120,display:"flex",justifyContent:"flex-start",alignItems:"center",pl:1,boxShadow:"0px 1px 15px 1px rgba(69, 65, 78, 0.08)",borderRadius:"".concat(a.shape.borderRadius,"px")||0,backgroundColor:o?a.palette[o].main:a.palette.primary.main,position:"relative"},children:[(0,l.jsxs)(v.Z,{sx:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-around",alignItems:"space-around",color:a.palette.common.white,transform:"scale(0.7) translate(-22px, 20px)"},children:[(0,l.jsx)(b.Z,{variant:"h1",children:r}),(0,l.jsxs)(I.Z,{direction:"row",spacing:1,alignItems:"center",children:[i,(0,l.jsx)(b.Z,{variant:"h2",gutterBottom:!0,children:t})]})]}),(0,l.jsx)(v.Z,{sx:{position:"relative",left:-10},children:(0,l.jsx)(c.Z,{options:s,series:s.series,width:"100%",height:100})})]})}function T(){var e=(0,h.ZR)().appConfig.theme.initialGridSpacing;return(0,l.jsx)(H.Z,{children:(0,l.jsxs)(s.ZP,{container:!0,spacing:e,children:[(0,l.jsxs)(s.ZP,{item:!0,container:!0,lg:12,md:12,sm:12,xs:12,spacing:e,children:[(0,l.jsx)(s.ZP,{item:!0,lg:3,md:3,sm:6,xs:12,children:(0,l.jsx)(N,{title:"Orders",value:"2,882",options:P,icon:(0,l.jsx)(i.Z,{})})}),(0,l.jsx)(s.ZP,{item:!0,lg:3,md:3,sm:6,xs:12,children:(0,l.jsx)(N,{title:"Sales",value:"$93,282",options:C,color:"warning",icon:(0,l.jsx)(o.Z,{})})}),(0,l.jsx)(s.ZP,{item:!0,lg:3,md:3,sm:6,xs:12,children:(0,l.jsx)(N,{title:"Users",value:"10,292",options:W,color:"error",icon:(0,l.jsx)(a.Z,{})})}),(0,l.jsx)(s.ZP,{item:!0,lg:3,md:3,sm:6,xs:12,children:(0,l.jsx)(N,{title:"Visitors",value:"39,221",options:Q,color:"info",icon:(0,l.jsx)(d,{})})})]}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:8,lg:8,children:(0,l.jsx)(p.Z,{children:(0,l.jsx)(c.Z,{options:S,series:S.series,type:"area",width:"100%",height:340})})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:4,lg:4,children:(0,l.jsx)(p.Z,{children:(0,l.jsx)(c.Z,{options:A,series:A.series,type:"radialBar",width:"100%",height:345})})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:8,lg:8,children:(0,l.jsx)(p.Z,{title:"Latest Orders",children:(0,l.jsx)(k,{orders:z.z})})}),(0,l.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:4,lg:4,children:(0,l.jsx)(p.Z,{children:(0,l.jsx)(c.Z,{options:M,series:M.series,type:"bar",width:"100%",height:395})})})]})})}window.Apex={chart:{foreColor:"#ccc",toolbar:{show:!1}},stroke:{width:3},dataLabels:{enabled:!1},tooltip:{theme:"light"},grid:{borderColor:"#535A6C",xaxis:{lines:{show:!0}}}}},35982:function(e,t,r){var s=r(76189),i=r(80184);t.Z=(0,s.Z)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn")},63833:function(e,t,r){var s=r(76189),i=r(80184);t.Z=(0,s.Z)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person")},93213:function(e,t,r){var s=r(76189),i=r(80184);t.Z=(0,s.Z)((0,i.jsx)("path",{d:"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}),"Receipt")},56890:function(e,t,r){r.d(t,{Z:function(){return j}});var s=r(87462),i=r(63366),o=r(72791),a=r(28182),n=r(94419),l=r(829),d=r(31402),c=r(66934),p=r(75878),h=r(21217);function u(e){return(0,h.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);var m=r(80184),x=["className","component"],f=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),Z={variant:"head"},g="thead",j=o.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiTableHead"}),o=r.className,c=r.component,p=void 0===c?g:c,h=(0,i.Z)(r,x),j=(0,s.Z)({},r,{component:p}),v=function(e){var t=e.classes;return(0,n.Z)({root:["root"]},u,t)}(j);return(0,m.jsx)(l.Z.Provider,{value:Z,children:(0,m.jsx)(f,(0,s.Z)({as:p,className:(0,a.Z)(v.root,o),ref:t,role:p===g?null:"rowgroup",ownerState:j},h))})}))}}]);
//# sourceMappingURL=2488.3372a7d0.chunk.js.map