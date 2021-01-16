(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{414:function(e,t,n){},415:function(e,t,n){},663:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),i=n.n(r),c=n(13),s=n.n(c),o=(n(414),n(48)),d=n(25),l=n(185),u=(n(415),n(206)),j=n(24),p=n(707),h=n(694),b=n(692),m=n(252),x=n(390),g=n.n(x),f=n(81),O=n(321),v=n(693),w=n(389);function y(){return Object(a.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var k=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function N(e){var t=e.setToken,n=k(),r=function(e){console.log(e),t(e)};return Object(a.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(h.a,{}),Object(a.jsxs)("div",{className:n.paper,children:[Object(a.jsx)(p.a,{className:n.avatar,children:Object(a.jsx)(g.a,{})}),Object(a.jsx)(w.GoogleLogin,{clientId:"345350504609-1moo0gfi27h0jj2qaim5ed1iohgprs99.apps.googleusercontent.com",onSuccess:r,onFailure:r})]}),Object(a.jsx)(m.a,{mt:8,children:Object(a.jsx)(y,{})})]})}var S=n(2),I=n(700),C=n(98),M=n(675),B=n(676),D=n(701),_=n(361);var T=n(20),R=n.n(T),U=n(49),L=n(193),A=n(194),F=n(208),P=n(207),H=n(391),z=n.n(H),G=function(e){Object(F.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(L.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,data:[]},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(U.a)(R.a.mark((function e(){var t,n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,n=JSON.parse(localStorage.token).tokenId,t.append("Authorization","Bearer "+n),"https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",e.next=6,fetch("https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",{headers:t});case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,console.log(r),this.setState({isLoaded:!0,data:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.data;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsx)(z.a,{title:"Remote Url Upload Requests",data:r,columns:["ts","requestId","fileName","sequence","status"],options:{filterType:"checkbox",download:!1,print:!1}}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),q=n(397),J=n(358),E=n(369),W=n(705),V=n(702),Y=n(703),X=n(704),Z=Object(O.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));var $,K=n(696),Q=n(697),ee=n(661),te=Object(O.a)((function(e){return{card:{marginTop:"20px",display:"flex",background:"rgba(0,0,0,.85)"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto",color:"white",backgroundImage:"linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%)",minHeight:"500px"},posterContainer:{textAlign:"center"},poster:Object(d.a)({width:"120px"},e.breakpoints.up("md"),{width:"200px"}),tagline:{display:"block",paddingBottom:"0.25em",color:"limeGreen",fontSize:"1.3em"},metadata:{display:"block",color:"limeGreen"},additionalDetails:{margin:"35px 0 20px"}}}));function ne(e){var t=e.data,n=(e.test,te()),r="https://image.tmdb.org/t/p/w500"+t.poster,i=t.production,c=t.production_countries,s=t.genre,o=t.revenue;u(i),u(c),u(s);$="https://image.tmdb.org/t/p/original"+t.backdrop;var d="";d="undefined"===t.vote||0===t.vote?"-":t.vote,o="undefined"===o||0===o?"-":ee(t.revenue).format("($0,0)"),null==t.poster&&(r="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g");var l="url(".concat($,")");return Object(a.jsx)("div",{children:Object(a.jsx)(K.a,{className:n.card,children:Object(a.jsx)("div",{className:n.details,style:{backgroundImage:l},children:Object(a.jsxs)(Q.a,{className:n.content,children:[Object(a.jsx)(f.a,{component:"h3",variant:"h3",children:t.original_title}),Object(a.jsx)(f.a,{component:"h6",variant:"h6",className:n.tagline,children:t.tagline}),Object(a.jsx)(f.a,{variant:"subtitle1",children:Object(a.jsxs)(I.a,{container:!0,children:[Object(a.jsxs)(I.a,{item:!0,xs:9,children:[t.overview,Object(a.jsxs)(I.a,{container:!0,className:n.additionalDetails,children:[Object(a.jsxs)(I.a,{item:!0,md:3,children:["Original Release: ",Object(a.jsx)("span",{className:n.metadata,children:t.release}),"Box Office: ",Object(a.jsx)("span",{className:n.metadata,children:o})]}),Object(a.jsxs)(I.a,{item:!0,md:3,children:["Running Time: ",Object(a.jsxs)("span",{className:n.metadata,children:[t.runtime," mins"]}),"Rating: ",Object(a.jsx)("span",{className:n.metadata,children:d})]})]})]}),Object(a.jsx)(I.a,{item:!0,xs:3,className:n.posterContainer,children:Object(a.jsx)("img",{src:r,className:n.poster})})]})})]})})})});function u(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}}var ae=function(e){Object(F.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(L.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(d.a)({},e.target.name,e.target.value))},a.findMovieIdByImdbId=function(){var e=Object(U.a)(R.a.mark((function e(t){var n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/find/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716&external_source=imdb_id"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r.movie_results&&r.movie_results[0]&&r.movie_results[0].id);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.fetchMovieID=function(){var e=Object(U.a)(R.a.mark((function e(t){var n,r,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,a.setState({imdbId:n}),e.next=4,a.findMovieIdByImdbId(n);case 4:(r=e.sent)&&(i="https://api.themoviedb.org/3/movie/".concat(r,"?&api_key=cfe422613b250f702980a3bbf9e90716"),a.fetchApi(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={error:null,isLoaded:!1,data:null,imdbId:"tt0468569"},a}return Object(A.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"createMovieContainer000001",children:[Object(a.jsx)(E.a,{name:"imdbId",label:"IMDB Id",placeholder:"Enter IMDB Id",fullWidth:!0,onChange:this.fetchMovieID,defaultValue:this.state.imdbId}),Object(a.jsx)(ne,{data:this.state})]})}},{key:"fetchApi",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({movieID:e.id,original_title:e.original_title,tagline:e.tagline,overview:e.overview,homepage:e.homepage,poster:e.poster_path,production:e.production_companies,production_countries:e.production_countries,genre:e.genres,release:e.release_date,vote:e.vote_average,runtime:e.runtime,revenue:e.revenue,backdrop:e.backdrop_path})}))}},{key:"componentDidMount",value:function(){var e=Object(U.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findMovieIdByImdbId(this.state.imdbId);case 2:t=e.sent,n="https://api.themoviedb.org/3/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716"),this.fetchApi(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.Component),re=n(396),ie=n.n(re),ce=n(119),se=n.n(ce),oe=[{path:"/dashboard",sidebarName:"Dashboard",component:function(){var e=Ie(),t=i.a.useState(!0),n=Object(o.a)(t,2),r=(n[0],n[1],Object(S.default)(e.paper,e.fixedHeight));return Object(a.jsxs)(I.a,{container:!0,spacing:3,children:[Object(a.jsx)(I.a,{item:!0,xs:12,md:8,lg:9,children:Object(a.jsx)(C.a,{className:r,children:Object(a.jsx)(pe,{})})}),Object(a.jsx)(I.a,{item:!0,xs:12,md:4,lg:3,children:Object(a.jsx)(C.a,{className:r,children:Object(a.jsx)(me,{})})}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(C.a,{className:e.paper,children:Object(a.jsx)(Se,{})})})]})},icon:ie.a},{path:"/preferences",sidebarName:"Preferences",component:function(){return Object(a.jsx)("h2",{children:"Preferences"})},icon:se.a},{path:"/movies",sidebarName:"Movies",component:function(){return Object(a.jsx)("h2",{children:"Test List Media Directory"})},icon:se.a},{path:"/remoteuploads",sidebarName:"Remote Url Upload",component:G,icon:se.a},{path:"/createremoteuploads",sidebarName:"New Remote Url Upload",component:function(){var e=this,t=Object(q.a)(),n=(t.control,t.register,t.handleSubmit,t.errors,Z()),i=Object(r.useState)(0),c=Object(o.a)(i,2),s=c[0],l=c[1],u=Object(r.useState)(""),j=Object(o.a)(u,2),p=j[0],h=j[1],b=function(t){var n=t.target;e.setState(Object(d.a)({},n.name,n.value))},m=["Enter the URL","Choose Files to Upload","Finish"];function x(e){switch(e){case 0:return Object(a.jsx)(E.a,{name:"fileUrl",type:"URL",value:p,fullWidth:!0,onChange:b});case 1:return p;case 2:return"Try out different ad text to see what brings in the most customers,\n                    and learn how to enhance your ads using features like ad extensions.\n                    If you run into any problems with your ads, find out how to tell if\n                    they're running and how to resolve approval issues.";default:return"Unknown step"}}var g=function(){switch(s){case 0:h(),alert("checking url");break;default:alert("unknown step")}l((function(e){return e+1}))},O=function(){l((function(e){return e-1}))};return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(W.a,{activeStep:s,orientation:"vertical",children:m.map((function(e,t){return Object(a.jsxs)(V.a,{children:[Object(a.jsx)(Y.a,{children:e}),Object(a.jsxs)(X.a,{children:[Object(a.jsx)(f.a,{children:x(t)}),Object(a.jsx)("div",{className:n.actionsContainer,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(J.a,{disabled:0===s,onClick:O,className:n.button,children:"Back"}),Object(a.jsx)(J.a,{variant:"contained",color:"primary",onClick:g,className:n.button,children:s===m.length-1?"Finish":"Next"})]})})]})]},e)}))}),s===m.length&&Object(a.jsxs)(C.a,{square:!0,elevation:0,className:n.resetContainer,children:[Object(a.jsx)(f.a,{children:"All steps completed - you're finished"}),Object(a.jsx)(J.a,{onClick:function(){l(0)},className:n.button,children:"Reset"})]})]})})},icon:se.a},{path:"/movie/new",sidebarName:"New Movie by IMDB Id",component:ae,icon:se.a}],de=Object(j.g)((function(e){var t=function(t){var n;return(null===(n=e.location)||void 0===n?void 0:n.pathname)===t};return Object(a.jsx)("div",{children:Object(a.jsx)(M.a,{children:oe.map((function(e,n){return Object(a.jsxs)(B.a,{component:u.b,button:!0,to:e.path,style:{textDecoration:"none"},selected:t(e.path),children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(e.icon,{})}),Object(a.jsx)(_.a,{primary:e.sidebarName})]},n)}))})})})),le=n(14);function ue(e){return Object(a.jsx)(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function je(e,t){return{time:e,amount:t}}je("00:00",0),je("03:00",300),je("06:00",600),je("09:00",800),je("12:00",1500),je("15:00",2e3),je("18:00",2400),je("21:00",2400),je("24:00",void 0);function pe(){Object(le.a)();return Object(a.jsx)("div",{children:"Charts..."})}function he(e){e.preventDefault()}var be=Object(O.a)({depositContext:{flex:1}});function me(){var e=be();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(ue,{children:"Recent Deposits"}),Object(a.jsx)(f.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(a.jsx)(f.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{color:"primary",href:"#",onClick:he,children:"View balance"})})]})}var xe=n(363),ge=n(364),fe=n(365),Oe=n(706),ve=n(368);function we(e,t,n,a,r,i){return{id:e,date:t,name:n,shipTo:a,paymentMethod:r,amount:i}}var ye=[we(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),we(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),we(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),we(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),we(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function ke(e){e.preventDefault()}var Ne=Object(O.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function Se(){var e=Ne();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(ue,{children:"Recent Orders"}),Object(a.jsxs)(xe.a,{size:"small",children:[Object(a.jsx)(Oe.a,{children:Object(a.jsxs)(ve.a,{children:[Object(a.jsx)(fe.a,{children:"Date"}),Object(a.jsx)(fe.a,{children:"Name"}),Object(a.jsx)(fe.a,{children:"Ship To"}),Object(a.jsx)(fe.a,{children:"Payment Method"}),Object(a.jsx)(fe.a,{align:"right",children:"Sale Amount"})]})}),Object(a.jsx)(ge.a,{children:ye.map((function(e){return Object(a.jsxs)(ve.a,{children:[Object(a.jsx)(fe.a,{children:e.date}),Object(a.jsx)(fe.a,{children:e.name}),Object(a.jsx)(fe.a,{children:e.shipTo}),Object(a.jsx)(fe.a,{children:e.paymentMethod}),Object(a.jsx)(fe.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(a.jsx)("div",{className:e.seeMore,children:Object(a.jsx)(b.a,{color:"primary",href:"#",onClick:ke,children:"See more orders"})})]})}var Ie=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var Ce=n(59),Me=n(695),Be=n(367),De=n(699),_e=n(253),Te=n(257),Re=n.n(Te),Ue=n(258),Le=n.n(Ue);function Ae(){return Object(a.jsx)("h2",{children:"Not Found!!!"})}function Fe(){return Object(a.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Media Catalog UI"})," ",(new Date).getFullYear(),"."]})}var Pe=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var He=function(){var e=function(){var e=Object(r.useState)(function(){var e,t=localStorage.getItem("token"),n=JSON.parse(t);return(null===n||void 0===n||null===(e=n.tokenObj)||void 0===e?void 0:e.expires_at)&&new Date(n.tokenObj.expires_at)>new Date?n:null}()),t=Object(o.a)(e,2),n=t[0],a=t[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),a(e)},token:n}}(),t=e.token,n=e.setToken,c=Pe(),s=i.a.useState(!0),d=Object(o.a)(s,2),l=d[0],p=d[1];return Object(S.default)(c.paper,c.fixedHeight),t?Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:c.root,children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(Me.a,{position:"absolute",className:Object(S.default)(c.appBar,l&&c.appBarShift),children:Object(a.jsxs)(Be.a,{className:c.toolbar,children:[Object(a.jsx)(_e.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},className:Object(S.default)(c.menuButton,l&&c.menuButtonHidden),children:Object(a.jsx)(Re.a,{})}),Object(a.jsx)(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:c.title,children:"Media Catalog Admin"})]})}),Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(Ce.a,{variant:"permanent",classes:{paper:Object(S.default)(c.drawerPaper,!l&&c.drawerPaperClose)},open:l,children:[Object(a.jsx)("div",{className:c.toolbarIcon,children:Object(a.jsx)(_e.a,{onClick:function(){p(!1)},children:Object(a.jsx)(Le.a,{})})}),Object(a.jsx)(De.a,{}),Object(a.jsx)(de,{})]}),Object(a.jsxs)("main",{className:c.content,children:[Object(a.jsx)("div",{className:c.appBarSpacer}),Object(a.jsxs)(v.a,{maxWidth:"lg",className:c.container,children:[Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(j.a,{to:"/dashboard"})}}),oe.map((function(e,t){return Object(a.jsx)(j.b,{path:e.path,children:Object(a.jsx)(e.component,{})},t)})),Object(a.jsx)(j.b,{children:Object(a.jsx)(Ae,{})})]}),Object(a.jsx)(m.a,{pt:4,children:Object(a.jsx)(Fe,{})})]})]})]})]})}):Object(a.jsx)(N,{setToken:n})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,709)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(He,{})}),document.getElementById("root")),ze()}},[[663,1,2]]]);
//# sourceMappingURL=main.7c3c7cdf.chunk.js.map