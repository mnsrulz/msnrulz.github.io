(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{434:function(e,t,n){},435:function(e,t,n){},700:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),i=n.n(r),c=n(14),s=n.n(c),o=(n(434),n(22)),l=n(35),d=n(193),u=(n(435),n(152)),j=n(29),p=n(728),h=n(729),b=n(751),m=n(256),f=n(404),x=n.n(f),O=n(328),v=n(257),g=n(83),y=n(727);function w(){return Object(a.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(y.a,{color:"inherit",href:"https://material-ui.com/",children:"Media Catalog UI"})," ",(new Date).getFullYear(),"."]})}var k=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var t=e.setToken,n=k(),r=function(e){t(e)};return Object(a.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(h.a,{}),Object(a.jsxs)("div",{className:n.paper,children:[Object(a.jsx)(b.a,{className:n.avatar,children:Object(a.jsx)(x.a,{})}),Object(a.jsx)(v.GoogleLogin,{clientId:"345350504609-1moo0gfi27h0jj2qaim5ed1iohgprs99.apps.googleusercontent.com",onSuccess:r,onFailure:r,cookiePolicy:"single_host_origin"})]}),Object(a.jsx)(m.a,{mt:8,children:Object(a.jsx)(w,{})})]})}var N=n(2),C=n(740),I=n(92),B=n(709),M=n(713),U=n(744),F=n(377);var R=n(13),L=n.n(R),T=n(20),D=n(338),z=n(45),_=n(741),P=n(735),A=n(736),H=n(737),E=n(738),q=n(739),J=n(258),W=n(259),G=n.n(W),V=n(406),X=n.n(V),Y=n(407),Z=n.n(Y),$=n(329),K=n(731),Q=n(734),ee=n(733),te=n(730),ne=n(15);function ae(e){var t=e.confirmText,n=e.okButtonText,r=e.cancelButtonText,i=e.clickHandler,c=e.open,s=Object(ne.a)(),o=Object(te.a)(s.breakpoints.down("sm")),l=function(e){i(e)};return Object(a.jsx)("div",{children:Object(a.jsxs)(K.a,{fullScreen:o,open:c,onClose:function(){return l("Cancel")},"aria-labelledby":"responsive-dialog-title",children:[Object(a.jsx)(ee.a,{id:"responsive-dialog-title",children:t}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)($.a,{autoFocus:!0,onClick:function(){return l("Cancel")},color:"primary",children:r}),Object(a.jsx)($.a,{onClick:function(){return l("Ok")},color:"primary",autoFocus:!0,children:n})]})]})})}var re=n(405),ie=n.n(re);var ce=function(){var e=JSON.parse(localStorage.token).tokenId;return ie.a.create({baseURL:"https://mediacatalog.netlify.app/.netlify/functions/server/",headers:{Authorization:"Bearer "+e}})}(),se={cardTitle:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},cardMedia:{maxHeight:394,height:169,overflow:"hidden"},card:{cursor:"pointer",overflow:"hidden"},bgImage:{width:"100%"},cardSubtitle:{}};function oe(e){var t=e.movie,n=e.handleItemRemove,i=Object(r.useState)(!1),c=Object(o.a)(i,2),s=c[0],l=c[1],d=Object(r.useState)(t.favorite),u=Object(o.a)(d,2),j=u[0],p=u[1],h=function(){var e=Object(T.a)(L.a.mark((function e(a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Ok"!==a){e.next=4;break}return e.next=3,ce.delete("items/".concat(t.id));case 3:n(t.id);case 4:l(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=5;break}return e.next=3,ce.delete("items/".concat(t.id,"/favorite"));case 3:e.next=7;break;case 5:return e.next=7,ce.put("items/".concat(t.id,"/favorite"));case 7:p(!j);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t.backdropPath?"https://image.tmdb.org/t/p/w300".concat(t.backdropPath):"",f=j?Object(a.jsx)(X.a,{style:{color:"red"}}):Object(a.jsx)(Z.a,{style:{color:"red"}});return Object(a.jsxs)("div",{children:[Object(a.jsx)(ae,{okButtonText:"Yes",cancelButtonText:"No",confirmText:"Confirm Delete?",clickHandler:h,open:s}),Object(a.jsxs)(P.a,{style:se.card,children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)(H.a,{style:se.cardMedia,children:Object(a.jsx)("img",{style:se.bgImage,src:m})}),Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(g.a,{gutterBottom:!0,variant:"h6",component:"h2",noWrap:!0,children:[t.title," - ",t.year]}),Object(a.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"h2",noWrap:!0,style:se.cardSubtitle,children:t.tagline||"N/A"})]})]}),Object(a.jsxs)(q.a,{disableSpacing:!0,children:[Object(a.jsx)(J.a,{onClick:b,children:f}),Object(a.jsx)(J.a,{onClick:function(){return l(!0)},children:Object(a.jsx)(G.a,{"aria-label":"delete"})})]})]})]})}var le=function(e){var t=e.items,n=e.isLoading,r=function(e){t.filter((function(t){return t.id!=e}))},i=t?t.slice(0,24).map((function(e){return Object(a.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(a.jsx)(oe,{movie:e,handleItemRemove:r})},e.id)})):null;return n?Object(a.jsx)(_.a,{disableShrink:!0}):(null===i||void 0===i?void 0:i.length)?Object(a.jsx)(C.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:3,children:i||"hello"}):Object(a.jsx)("div",{children:"No items found"})},de=Object(O.a)((function(e){return{searchbar:{marginBottom:e.spacing(3)}}}));var ue=n(76),je=n(77),pe=n(80),he=n(79),be=n(101),me=n.n(be),fe=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(ue.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,data:[]},a}return Object(je.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(L.a.mark((function e(){var t,n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,n=JSON.parse(localStorage.token).tokenId,t.append("Authorization","Bearer "+n),"https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",e.next=6,fetch("https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",{headers:t});case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,console.log(r),this.setState({isLoaded:!0,data:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.data;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsx)(me.a,{title:"Remote Url Upload Requests",data:r,columns:["ts","requestId","fileName","sequence","status"],options:{filterType:"checkbox",download:!1,print:!1}}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component);function xe(e){var t=e.playlistId,n=Object(r.useState)([]),i=Object(o.a)(n,2),c=i[0],s=i[1],l=Object(r.useState)(!0),d=Object(o.a)(l,2),u=d[0],j=d[1];return Object(r.useEffect)((function(){Object(T.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,ce.get("playlists/".concat(t,"/items"));case 3:n=e.sent,s(n.data),j(!1);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(a.jsx)("div",{children:Object(a.jsx)(le,{items:c,isLoading:u})})}var Oe=n(263),ve=n.n(Oe),ge=function(e){var t=e.data,n=ve.a,r=[{name:"title",options:{customBodyRender:function(e,n){return Object(a.jsx)(y.a,{href:"/playlistdetails/".concat(t[n.rowIndex].id),children:e})}}},{name:"ts",label:"Created",options:{customBodyRender:function(e){return Object(a.jsx)("div",{title:e,children:n(e).fromNow()})}}}],i={download:!1,print:!1,viewColumns:!1,searchable:!1,filterType:"multiselect",confirmFilters:!0,selectableRows:!1,customFilterDialogFooter:function(e,t){return Object(a.jsx)("div",{style:{marginTop:"40px"},children:Object(a.jsx)($.a,{variant:"contained",onClick:t,children:"Apply Filters"})})}};return Object(a.jsx)(me.a,{title:Object(a.jsx)(g.a,{variant:"h6",children:"Playlist"}),data:t,columns:r,options:i})},ye=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(ue.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,data:[]},a}return Object(je.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(L.a.mark((function e(){var t,n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,n=JSON.parse(localStorage.token).tokenId,t.append("Authorization","Bearer "+n),"https://mediacatalog.netlify.app/.netlify/functions/server/playlists",e.next=6,fetch("https://mediacatalog.netlify.app/.netlify/functions/server/playlists",{headers:t});case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,console.log(r),this.setState({isLoaded:!0,data:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.data;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsx)(ge,{data:r}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component);function we(){var e=Object(j.g)().id;return e?Object(a.jsx)(xe,{playlistId:e}):Object(a.jsx)(ye,{})}var ke=n(416),Se=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(ue.a)(this,n),(a=t.call(this,e)).handleSelectionChange=function(e,t,n,r){var i=t.map((function(e){return a.state.data[e.index]}));a.state.onSelectionChange&&a.state.onSelectionChange(i)},a.state={error:null,isLoaded:!1,data:[],zipFileUrl:e.defaultZipFileUrl,onSelectionChange:e.onSelectionChange},a}return Object(je.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(L.a.mark((function e(){var t,n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mediacatalogdirectorylisting.herokuapp.com/api/zip/listFiles?zipFileUrl=".concat(encodeURIComponent(this.state.zipFileUrl)),e.next=3,fetch(t);case 3:return n=e.sent,e.prev=4,e.next=7,n.json();case 7:a=e.sent,this.setState({isLoaded:!0,data:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),this.setState({error:e.t0});case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={filterType:"checkbox",download:!1,print:!1,search:!1,viewColumns:!1,filter:!1,pagination:!1,onRowSelectionChange:this.handleSelectionChange},t=this.state,n=t.error,r=t.isLoaded,i=t.data;return n?Object(a.jsx)("div",{children:"Error: We have some errrors"}):r?Object(a.jsx)(me.a,{title:"Upload Requests",data:i,columns:["path","uncompressedSize"],options:e}):Object(a.jsx)("div",{children:"Fetching files inside zip file..."})}}]),n}(i.a.Component),Ne=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(ue.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,data:[],selectedFiles:e.selectedFiles,zipFileUrl:e.zipFileUrl},a}return Object(je.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(L.a.mark((function e(){var t,n,a,r,i,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.selectedFiles.map((function(e){return e.path})),n={fileUrl:this.state.zipFileUrl,files:t},a=new Headers,r=JSON.parse(localStorage.token).tokenId,a.append("Authorization","Bearer "+r),a.append("content-type","application/json"),"https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",e.prev=7,e.next=10,fetch("https://mediacatalog.netlify.app/.netlify/functions/server/remoteUrlUploadRequest",{headers:a,method:"POST",body:JSON.stringify(n)});case 10:if(!(i=e.sent).ok){e.next=18;break}return e.next=14,i.json();case 14:c=e.sent,this.setState({isLoaded:!0,data:c}),e.next=19;break;case 18:throw Error("Unexpected response code receieved ".concat(i.status));case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),this.setState({error:e.t0});case 24:case"end":return e.stop()}}),e,this,[[7,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsx)("span",{children:"Success!"}):Object(a.jsx)("div",{children:"Submitting Request..."})}}]),n}(i.a.Component),Ce=n(748),Ie=n(745),Be=n(746),Me=n(747),Ue=Object(O.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));var Fe,Re=n(699),Le=Object(O.a)((function(e){return{card:{marginTop:"20px",display:"flex",background:"rgba(0,0,0,.85)"},details:{display:"flex",flexDirection:"column",backgroundSize:"cover",backgroundRepeat:"no-repeat"},content:{flex:"1 0 auto",color:"white",backgroundImage:"linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%)",minHeight:"500px"},posterContainer:{textAlign:"center"},poster:Object(l.a)({width:"120px"},e.breakpoints.up("md"),{width:"200px"}),tagline:{display:"block",paddingBottom:"0.25em",color:"limeGreen",fontSize:"1.3em"},metadata:{display:"block",color:"limeGreen"},additionalDetails:{margin:"35px 0 20px"}}}));function Te(e){var t=e.data,n=(e.test,Le()),r="https://image.tmdb.org/t/p/w500"+t.poster,i=t.production,c=t.production_countries,s=t.genre,o=t.revenue;u(i),u(c),u(s);Fe="https://image.tmdb.org/t/p/original"+t.backdrop;var l="";l="undefined"===t.vote||0===t.vote?"-":t.vote,o="undefined"===o||0===o?"-":Re(t.revenue).format("($0,0)"),null==t.poster&&(r="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g");var d="url(".concat(Fe,")");return Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{className:n.card,children:Object(a.jsx)("div",{className:n.details,style:{backgroundImage:d},children:Object(a.jsxs)(E.a,{className:n.content,children:[Object(a.jsx)(g.a,{component:"h3",variant:"h3",children:t.original_title}),Object(a.jsx)(g.a,{component:"h6",variant:"h6",className:n.tagline,children:t.tagline}),Object(a.jsx)(g.a,{variant:"subtitle1",children:Object(a.jsxs)(C.a,{container:!0,children:[Object(a.jsxs)(C.a,{item:!0,xs:9,children:[t.overview,Object(a.jsxs)(C.a,{container:!0,className:n.additionalDetails,children:[Object(a.jsxs)(C.a,{item:!0,md:3,children:["Original Release: ",Object(a.jsx)("span",{className:n.metadata,children:t.release}),"Box Office: ",Object(a.jsx)("span",{className:n.metadata,children:o})]}),Object(a.jsxs)(C.a,{item:!0,md:3,children:["Running Time: ",Object(a.jsxs)("span",{className:n.metadata,children:[t.runtime," mins"]}),"Rating: ",Object(a.jsx)("span",{className:n.metadata,children:l})]})]})]}),Object(a.jsx)(C.a,{item:!0,xs:3,className:n.posterContainer,children:Object(a.jsx)("img",{src:r,className:n.poster})})]})})]})})})});function u(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}}var De=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(ue.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(l.a)({},e.target.name,e.target.value))},a.findMovieIdByImdbId=function(){var e=Object(T.a)(L.a.mark((function e(t){var n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/find/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716&external_source=imdb_id"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r.movie_results&&r.movie_results[0]&&r.movie_results[0].id);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.fetchMovieID=function(){var e=Object(T.a)(L.a.mark((function e(t){var n,r,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,a.setState({imdbId:n}),e.next=4,a.findMovieIdByImdbId(n);case 4:(r=e.sent)&&(i="https://api.themoviedb.org/3/movie/".concat(r,"?&api_key=cfe422613b250f702980a3bbf9e90716"),a.fetchApi(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={error:null,isLoaded:!1,data:null,imdbId:"tt0468569"},a}return Object(je.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"createMovieContainer000001",children:[Object(a.jsx)(D.a,{name:"imdbId",label:"IMDB Id",placeholder:"Enter IMDB Id",fullWidth:!0,onChange:this.fetchMovieID,defaultValue:this.state.imdbId}),Object(a.jsx)(Te,{data:this.state})]})}},{key:"fetchApi",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({movieID:e.id,original_title:e.original_title,tagline:e.tagline,overview:e.overview,homepage:e.homepage,poster:e.poster_path,production:e.production_companies,production_countries:e.production_countries,genre:e.genres,release:e.release_date,vote:e.vote_average,runtime:e.runtime,revenue:e.revenue,backdrop:e.backdrop_path})}))}},{key:"componentDidMount",value:function(){var e=Object(T.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findMovieIdByImdbId(this.state.imdbId);case 2:t=e.sent,n="https://api.themoviedb.org/3/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716"),this.fetchApi(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.Component),ze=n(412),_e=n.n(ze),Pe=n(413),Ae=n.n(Pe),He=n(414),Ee=n.n(He),qe=n(415),Je=n.n(qe),We=n(272),Ge=n.n(We),Ve=n(271),Xe=n.n(Ve),Ye=[{path:"/dashboard",sidebarName:"Dashboard",component:function(){var e=pt(),t=i.a.useState(!0),n=Object(o.a)(t,2),r=(n[0],n[1],Object(N.default)(e.paper,e.fixedHeight));return Object(a.jsxs)(C.a,{container:!0,spacing:3,children:[Object(a.jsx)(C.a,{item:!0,xs:12,md:8,lg:9,children:Object(a.jsx)(I.a,{className:r,children:Object(a.jsx)(Qe,{})})}),Object(a.jsx)(C.a,{item:!0,xs:12,md:4,lg:3,children:Object(a.jsx)(I.a,{className:r,children:Object(a.jsx)(nt,{})})}),Object(a.jsx)(C.a,{item:!0,xs:12,children:Object(a.jsx)(I.a,{className:e.paper,children:Object(a.jsx)(jt,{})})})]})},icon:_e.a},{path:"/preferences",sidebarName:"Preferences",component:function(){return Object(a.jsx)("h2",{children:"Preferences"})},icon:Xe.a,hide:!0},{path:"/movies",sidebarName:"Media Items",component:function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),s=Object(o.a)(c,2),l=s[0],d=s[1],u=Object(r.useState)(""),j=Object(o.a)(u,2),p=j[0],h=j[1],b=de();return Object(r.useEffect)((function(){Object(T.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p,d(!0),e.next=4,ce.get("items?q=".concat(t));case 4:n=e.sent,p===t&&(i(n.data),d(!1));case 6:case"end":return e.stop()}}),e)})))()}),[p]),Object(a.jsxs)("div",{children:[Object(a.jsx)(D.a,{label:"Search",placeholder:"Search",fullWidth:!0,onChange:Object(z.a)((function(e){var t=e.target.value;h(t)}),250),defaultValue:p,className:b.searchbar}),Object(a.jsx)(le,{items:n,isLoading:l})]})},icon:Ae.a},{path:"/remoteuploads",sidebarName:"Remote Url Upload",component:fe,icon:Ee.a},{path:"/createremoteuploads",sidebarName:"New Remote Url Upload",component:function(){var e=Object(ke.a)(),t=(e.control,e.register,e.handleSubmit,e.errors,Ue()),n=Object(r.useState)(0),i=Object(o.a)(n,2),c=i[0],s=i[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),u=d[0],j=d[1],p=Object(r.useState)([]),h=Object(o.a)(p,2),b=h[0],m=h[1],f=function(e){j(e.target.value)},x=function(e){m(e)},O=["Enter a zip file URL","Choose Files to Upload","Finish"];function v(e){switch(e){case 0:return Object(a.jsx)(D.a,{name:"fileUrl",type:"URL",defaultValue:u,fullWidth:!0,onChange:f});case 1:return Object(a.jsx)(Se,{defaultZipFileUrl:u,onSelectionChange:x});case 2:return Object(a.jsx)(Ne,{selectedFiles:b,zipFileUrl:u});default:return"unknown step"}}var y=function(){s((function(e){return e+1}))},w=function(){s((function(e){return e-1}))};return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(Ce.a,{activeStep:c,orientation:"vertical",children:O.map((function(e,n){return Object(a.jsxs)(Ie.a,{children:[Object(a.jsx)(Be.a,{children:e}),Object(a.jsxs)(Me.a,{children:[Object(a.jsx)(g.a,{children:v(n)}),Object(a.jsx)("div",{className:t.actionsContainer,children:Object(a.jsxs)("div",{children:[Object(a.jsx)($.a,{disabled:0===c,onClick:w,className:t.button,children:"Back"}),Object(a.jsx)($.a,{variant:"contained",color:"primary",onClick:y,className:t.button,children:c===O.length-1?"Finish":"Next"})]})})]})]},e)}))}),c===O.length&&Object(a.jsxs)(I.a,{square:!0,elevation:0,className:t.resetContainer,children:[Object(a.jsx)(g.a,{children:"All steps completed - you're finished"}),Object(a.jsx)($.a,{onClick:function(){s(0)},className:t.button,children:"Reset"})]})]})})},icon:Je.a},{path:"/playlist",sidebarName:"Playlist",component:we,icon:Ge.a},{path:"/playlistdetails/:id",sidebarName:"Playlist",component:we,icon:Ge.a,hide:!0},{path:"/movie/new",sidebarName:"New Movie by IMDB Id",component:De,icon:Xe.a,hide:!0}],Ze=Object(j.h)((function(e){var t=function(t){var n;return(null===(n=e.location)||void 0===n?void 0:n.pathname)===t};return Object(a.jsx)("div",{children:Object(a.jsx)(B.a,{children:Ye.filter((function(e){return!e.hide})).map((function(e,n){return Object(a.jsxs)(M.a,{component:u.b,button:!0,to:e.navurl||e.path,style:{textDecoration:"none"},selected:t(e.path),children:[Object(a.jsx)(U.a,{children:Object(a.jsx)(e.icon,{})}),Object(a.jsx)(F.a,{primary:e.sidebarName})]},n)}))})})}));function $e(e){return Object(a.jsx)(g.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function Ke(e,t){return{time:e,amount:t}}Ke("00:00",0),Ke("03:00",300),Ke("06:00",600),Ke("09:00",800),Ke("12:00",1500),Ke("15:00",2e3),Ke("18:00",2400),Ke("21:00",2400),Ke("24:00",void 0);function Qe(){Object(ne.a)();return Object(a.jsx)("div",{children:"Charts..."})}function et(e){e.preventDefault()}var tt=Object(O.a)({depositContext:{flex:1}});function nt(){var e=tt();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)($e,{children:"Recent Deposits"}),Object(a.jsx)(g.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(a.jsx)(g.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(a.jsx)("div",{children:Object(a.jsx)(y.a,{color:"primary",href:"#",onClick:et,children:"View balance"})})]})}var at=n(379),rt=n(380),it=n(381),ct=n(749),st=n(384);function ot(e,t,n,a,r,i){return{id:e,date:t,name:n,shipTo:a,paymentMethod:r,amount:i}}var lt=[ot(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),ot(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),ot(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),ot(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),ot(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function dt(e){e.preventDefault()}var ut=Object(O.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function jt(){var e=ut();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)($e,{children:"Recent Orders"}),Object(a.jsxs)(at.a,{size:"small",children:[Object(a.jsx)(ct.a,{children:Object(a.jsxs)(st.a,{children:[Object(a.jsx)(it.a,{children:"Date"}),Object(a.jsx)(it.a,{children:"Name"}),Object(a.jsx)(it.a,{children:"Ship To"}),Object(a.jsx)(it.a,{children:"Payment Method"}),Object(a.jsx)(it.a,{align:"right",children:"Sale Amount"})]})}),Object(a.jsx)(rt.a,{children:lt.map((function(e){return Object(a.jsxs)(st.a,{children:[Object(a.jsx)(it.a,{children:e.date}),Object(a.jsx)(it.a,{children:e.name}),Object(a.jsx)(it.a,{children:e.shipTo}),Object(a.jsx)(it.a,{children:e.paymentMethod}),Object(a.jsx)(it.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(a.jsx)("div",{className:e.seeMore,children:Object(a.jsx)(y.a,{color:"primary",href:"#",onClick:dt,children:"See more orders"})})]})}var pt=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var ht=n(61),bt=n(742),mt=n(383),ft=n(743),xt=n(264),Ot=n.n(xt),vt=n(265),gt=n.n(vt);function yt(){return Object(a.jsx)("h2",{children:"Not Found!!!"})}var wt=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var kt=function(){var e=function(){Object(r.useEffect)((function(){window.setInterval((function(){null==e()&&i(null)}),1e3)}),[]);var e=function(){var e,t=localStorage.getItem("token"),n=JSON.parse(t);return(null===n||void 0===n||null===(e=n.tokenObj)||void 0===e?void 0:e.expires_at)&&new Date(n.tokenObj.expires_at)>new Date?n:null},t=Object(r.useState)(e()),n=Object(o.a)(t,2),a=n[0],i=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),i(e)},token:a}}(),t=e.token,n=e.setToken,c=wt(),s=i.a.useState(!0),l=Object(o.a)(s,2),d=l[0],b=l[1];return Object(N.default)(c.paper,c.fixedHeight),t?Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:c.root,children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(bt.a,{position:"absolute",className:Object(N.default)(c.appBar,d&&c.appBarShift),children:Object(a.jsxs)(mt.a,{className:c.toolbar,children:[Object(a.jsx)(J.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},className:Object(N.default)(c.menuButton,d&&c.menuButtonHidden),children:Object(a.jsx)(Ot.a,{})}),Object(a.jsx)(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:c.title,children:"Media Catalog Admin"})]})}),Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(ht.a,{variant:"permanent",classes:{paper:Object(N.default)(c.drawerPaper,!d&&c.drawerPaperClose)},open:d,children:[Object(a.jsx)("div",{className:c.toolbarIcon,children:Object(a.jsx)(J.a,{onClick:function(){b(!1)},children:Object(a.jsx)(gt.a,{})})}),Object(a.jsx)(ft.a,{}),Object(a.jsx)(Ze,{})]}),Object(a.jsxs)("main",{className:c.content,children:[Object(a.jsx)("div",{className:c.appBarSpacer}),Object(a.jsxs)(p.a,{maxWidth:"lg",className:c.container,children:[Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(j.a,{to:"/dashboard"})}}),Ye.map((function(e,t){return Object(a.jsx)(j.b,{path:e.path,children:Object(a.jsx)(e.component,{})},t)})),Object(a.jsx)(j.b,{children:Object(a.jsx)(yt,{})})]}),Object(a.jsx)(m.a,{pt:4,children:Object(a.jsx)(w,{})})]})]})]})]})}):Object(a.jsx)(S,{setToken:n})},St=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,752)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(kt,{})}),document.getElementById("root")),St()}},[[700,1,2]]]);
//# sourceMappingURL=main.7e3ce2d9.chunk.js.map