(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},199:function(e,t){},218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(116),n(51)),s=n(9),l=(n(117),n(104)),d=n(250),u=n(252),j=n(253),b=n(254),p=n(266),h=n(267),f=n(220),m=n(249),g=n(15),x=n(2),O=Object(a.createContext)(),v=function(e){var t=e.children,n=Object(a.useState)("USD"),r=Object(g.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)("$"),s=Object(g.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){"USD"===c?d("$"):"EUR"===c?d("\u20ac"):"RUB"===c&&d("\u20bd")}),[c]),Object(x.jsx)(O.Provider,{value:{currency:c,symbol:l,setCurrency:i},children:t})},y=function(){return Object(a.useContext)(O)},k=Object(f.a)((function(){return{title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),C=function(){var e=k(),t=Object(s.e)(),n=y(),a=n.currency,r=n.setCurrency,c=Object(l.a)({pallete:{primary:{main:"#fff"},type:"dark"}});return Object(x.jsx)(m.a,{theme:c,children:Object(x.jsx)(d.a,{color:"transparent",position:"static",children:Object(x.jsx)(u.a,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{onClick:function(){return t.push("/")},className:e.title,children:"CRYPTACH"}),Object(x.jsxs)(p.a,{variant:"outlined",style:{width:100,height:40,marginRight:15,color:"white"},value:a,onChange:function(e){return r(e.target.value)},children:[Object(x.jsx)(h.a,{value:"USD",children:"USD"}),Object(x.jsx)(h.a,{value:"EUR",children:"EUR"}),Object(x.jsx)(h.a,{value:"RUB",children:"RUB"})]})]})})})})},w=n(257),_=n(22),S=n.n(_),D=n(30),F=n(31),M=n.n(F),N=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},B=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},R=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},E=n(59),I=n.n(E),U=Object(f.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",color:"white",textTransform:"uppercase"}}})),P=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=U(),i=y(),s=i.currency,l=i.symbol,d=function(){var e=Object(D.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get(R(s));case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n),console.log(s),Object(a.useEffect)((function(){d()}),[s]);var u=n.map((function(e){var t,n=e.price_change_percentage_24h>=0;return Object(x.jsxs)(o.b,{className:c.carouselItem,to:"/coins/".concat(e.id),children:[Object(x.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",fontSize:12},children:[Object(x.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0"]}),Object(x.jsxs)("span",{style:{color:n?"green":"red"},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(x.jsxs)("span",{style:{fontSize:20,fontWeight:550},children:[l,"\xa0",null===e||void 0===e?void 0:e.current_price.toFixed(2)]})]})}));return Object(x.jsx)("div",{className:c.carousel,children:Object(x.jsx)(I.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},autoPlay:!0,items:u})})},W=Object(w.a)((function(){return{banner:{backgroundImage:"url(./background_crypto.jpg)",backgroundSize:"auto"},bannerContent:{height:"450px",display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"}}})),z=function(){var e=W();return Object(x.jsx)("div",{className:e.banner,children:Object(x.jsxs)(u.a,{className:e.bannerContent,children:[Object(x.jsxs)("div",{className:e.tagline,children:[Object(x.jsx)(b.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"CRYPTACH"}),Object(x.jsx)(b.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the info reading the best crypto service ever!"})]}),Object(x.jsx)(P,{})]})})},L=n(268),A=n(258),H=n(259),Y=n(260),J=n(261),$=n(262),G=n(263),q=n(264),K=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(g.a)(c,2),o=i[0],d=i[1],j=Object(a.useState)(""),p=Object(g.a)(j,2),h=p[0],O=p[1],v=Object(s.e)(),k=y(),C=k.currency,w=k.symbol,_=function(){var e=Object(D.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,M.a.get(N(C));case 3:t=e.sent,n=t.data,r(n),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n),Object(a.useEffect)((function(){_()}),[C]);var F=Object(l.a)({pallete:{primary:{main:"#fff"},type:"dark"}}),B=Object(f.a)((function(){return{row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"}}}))();return Object(x.jsx)(m.a,{theme:F,children:Object(x.jsxs)(u.a,{style:{textAlign:"center"},children:[Object(x.jsx)(b.a,{variant:"h4",style:{margin:"18px",fontfamily:"Montserrat"},children:" Cryptocurrency by Market Cap"}),Object(x.jsx)(L.a,{label:"Search your cryptocoin...",variant:"outlined",style:{marginBottom:"20px",width:"100%"},onChange:function(e){return O(e.target.value)}}),Object(x.jsx)(A.a,{children:o?Object(x.jsx)(H.a,{style:{backgroundColor:"gold"}}):Object(x.jsxs)(Y.a,{children:[Object(x.jsx)(J.a,{style:{backgroundColor:"#EEBC1D"},children:Object(x.jsx)($.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(x.jsx)(G.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(x.jsx)(q.a,{children:n.filter((function(e){return e.name.toLowerCase().includes(h)||e.symbol.toLowerCase().includes(h)})).map((function(e){var t=e.price_change_percentage_24h>0;return Object(x.jsxs)($.a,{onClick:function(){return v.push("/coins/".concat(e.id))},className:B.row,children:[Object(x.jsxs)(G.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(x.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{margin:10}}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsx)("span",{style:{textTransform:"uppercase",fontSize:22,color:"#FFFFFF"},children:e.symbol}),Object(x.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(x.jsxs)(G.a,{align:"right",style:{color:"white"},children:[w," ",e.current_price.toFixed(2)]}),Object(x.jsxs)(G.a,{align:"right",style:{color:t?"green":"red",fontWeigth:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(x.jsxs)(G.a,{align:"right",style:{color:"white"},children:[w," ",e.market_cap.toString().slice(0,-6),"M"]})]},e.name)}))})]})})]})})},Q=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(z,{}),Object(x.jsx)(K,{})]})},V=n(12),X=n(265),Z=n(103),ee=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],te=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(f.a)({chartButton:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%",margin:5}})();return Object(x.jsx)("span",{className:r.chartButton,onClick:a,children:t})},ne=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(g.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(1),s=Object(g.a)(o,2),d=s[0],u=s[1],j=y().currency,b=function(){var e=Object(D.a)(S.a.mark((function e(){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get(T(t.id,d,j));case 2:n=e.sent,a=n.data,i(a.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){b()}),[j,d]);var p=Object(l.a)({pallete:{primary:{main:"#fff"},type:"dark"}}),h=Object(w.a)((function(e){return{container:Object(V.a)({width:"70%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))();return Object(x.jsx)(m.a,{theme:p,children:Object(x.jsx)("div",{className:h.container,children:c?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Z.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n="".concat(t.getHours(),":").concat(t.getMinutes()," hr");return 1===d?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price (Past ".concat(d," Days) in ").concat(j),borderColor:"gold"}]},options:{elements:{point:{radius:1}}}}),Object(x.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:ee.map((function(e){return Object(x.jsx)(te,{onClick:function(){return u(e.value)},selected:e.value===d,children:e.label},e.value)}))})]}):Object(x.jsx)(X.a,{style:{color:"gold"},size:250,thikness:1})})})},ae=n(102),re=n.n(ae),ce=function(){var e=Object(s.f)().id,t=Object(a.useState)(),n=Object(g.a)(t,2),r=n[0],c=n[1],i=y(),o=i.currency,l=i.symbol,d=Object(w.a)((function(e){var t;return{container:Object(V.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:Object(V.a)({display:"flex",flexDirection:"column",alignItems:"center",marginTop:25,borderRight:"2px solid grey",width:"30%"},e.breakpoints.down("md"),{width:"100%"}),description:{width:"100%",fontFamily:"Montserrat",padding:25,pddingBottom:15,paddingTop:0,textAlign:"justify"},header:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},marketData:(t={width:"100%",alignSelf:"start",padding:25,paddingTop:10},Object(V.a)(t,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(V.a)(t,e.breakpoints.down("sm"),{flexDirection:"column",justifyContent:"space-around"}),Object(V.a)(t,e.breakpoints.down("xs"),{alignItems:"start"}),t)}}))(),u=function(){var t=Object(D.a)(S.a.mark((function t(){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get(B(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(r),Object(a.useEffect)((function(){u()}),[]),r?Object(x.jsxs)("div",{className:d.container,children:[Object(x.jsxs)("div",{className:d.sidebar,children:[Object(x.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(x.jsx)(b.a,{variant:"h3",className:d.header,children:null===r||void 0===r?void 0:r.name}),Object(x.jsx)(b.a,{variant:"subtitle1",className:d.description,children:re()(null===r||void 0===r?void 0:r.description.en.split(". ")[0])}),Object(x.jsxs)("div",{className:d.marketData,children:[Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(b.a,{variant:"h5",className:d.header,children:"Rank:"}),"\xa0\xa0",Object(x.jsx)(b.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:null===r||void 0===r?void 0:r.market_cap_rank})]}),Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(b.a,{variant:"h5",className:d.header,children:"Current price:"}),"\xa0\xa0",Object(x.jsxs)(b.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[l," ",null===r||void 0===r?void 0:r.market_data.current_price[o.toLowerCase()]]})]}),Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(b.a,{variant:"h5",className:d.header,children:"Market Cap:"}),"\xa0\xa0",Object(x.jsxs)(b.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[l," ",null===r||void 0===r?void 0:r.market_data.market_cap[o.toLowerCase()].toString().slice(0,-6),"M"]})]})]})]}),Object(x.jsx)(ne,{coin:r})]}):Object(x.jsx)(H.a,{style:{backgroundColor:"gold"}})};var ie=function(){var e=Object(w.a)((function(){return{app:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}))();return Object(x.jsx)(o.a,{children:Object(x.jsxs)("div",{className:e.app,children:[Object(x.jsx)(C,{}),Object(x.jsx)(s.a,{path:"/",component:Q,exact:!0}),Object(x.jsx)(s.a,{path:"/coins/:id",component:ce})]})})};n(217);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(v,{children:Object(x.jsx)(ie,{})})}),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.926a50cf.chunk.js.map