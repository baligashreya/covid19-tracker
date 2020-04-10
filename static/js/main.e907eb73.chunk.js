(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{222:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(84),t(42)),m=(t(44),t(15)),o=t.n(m);var i=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.a,{className:"navbar-brand",href:"/"},r.a.createElement("i",{className:"fas fa-virus mr-1"}),"Covid-19"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("hr",null),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.a,{className:"nav-link",href:"#single"},"Country Data")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.a,{className:"nav-link",href:"#news"},"News")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.a,{className:"nav-link",href:"#credit"},"Credits"))))))};var d=function(e){var a=e.heading,t=e.number,n=e.color,l="".concat(n," card-subtitle");return r.a.createElement("div",{className:"col-md-5 text-center mt-3"},r.a.createElement("p",{className:l},a),r.a.createElement("p",{className:"".concat(n," card-text")},t))},u=t(3),h=t(4),v=t(5),E=t(6),b=t(74),g=t.n(b),f=t(26),N=function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data,a=e.cases,t=e.deaths,n={labels:["- cases","- active","- deaths","- recovered"],datasets:[{data:[a,e.active,t,e.recovered],backgroundColor:["#e30000","#ffea05","#5e5e57","#2ede07"],hoverBackgroundColor:["#e30000","#ffea05","#5e5e57","#2ede07"]}]};return r.a.createElement("div",null,r.a.createElement(f.a,{data:n,width:150,height:250}))}}]),t}(n.Component),p=function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data,a=e.cases,t=e.deaths,n={labels:["- cases","- active","- deaths","- recovered"],datasets:[{data:[a,e.active,t,e.recovered],backgroundColor:["#e30000","#ffea05","#5e5e57","#2ede07"],hoverBackgroundColor:["#e30000","#ffea05","#5e5e57","#2ede07"]}]};return r.a.createElement("div",null,r.a.createElement(f.b,{data:n,width:150,height:250}))}}]),t}(n.Component),y=function(e){var a=e.text;e.selected;return r.a.createElement("div",{className:"menu-item"},a)},x=function(e){var a=e.text,t=e.className;return r.a.createElement("div",{className:t},a)},w=x({text:"<",className:"arrow-prev"}),k=x({text:">",className:"arrow-next"}),j=function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={selected:0},e.onSelect=function(a){e.setState({selected:a})},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state.selected,a=this.props.data,t=function(e){return e.map((function(e){var a=e.name,t=e.key;return r.a.createElement(y,{text:a,key:t})}))}([{name:r.a.createElement(N,{data:a}),key:1},{name:r.a.createElement(p,{data:a}),key:2}]);return r.a.createElement(g.a,{data:t,arrowLeft:w,arrowRight:k,selected:e,onSelect:this.onSelect})}}]),t}(n.Component);var O=function(e){var a=e.global,t={cases:a.cases,deaths:a.deaths,active:a.active,recovered:a.recovered};return r.a.createElement("div",{className:"card brnone bg-light"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center mb-3"},r.a.createElement("i",{className:"fas fa-globe mr-1"}),"Global Data"),r.a.createElement("div",{className:"row card-deck"},r.a.createElement(d,{heading:"Cases",color:"text-danger",number:a.cases}),r.a.createElement("hr",{className:"mx-4 lg-display-none"}),r.a.createElement(d,{heading:"Active",color:"text-warning",number:a.active}),r.a.createElement("hr",{className:"mx-4 "}),r.a.createElement(d,{heading:"Deaths",color:"text-green",number:a.deaths}),r.a.createElement("hr",{className:"mx-4 lg-display-none"}),r.a.createElement(d,{heading:"Recovered",color:"text-success",number:a.recovered}))),r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement(j,{name:"global",data:t})))},S=t(76);function C(e){var a=e.heading,t=e.number,n=e.color,l="".concat(n," card-subtitle");return r.a.createElement("div",{className:"col-md-5 text-center mt-3"},r.a.createElement("p",{className:l},a),r.a.createElement("p",{className:n},t))}var D=t(10),I=t.n(D),A=t(77),F=t.n(A),_=t(27),z=t.n(_),B=(t(69),function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).changeHandler=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),n.setState({loading:!0}),""!==n.state.countryName?(n.setState({error:""}),I.a.get("https://corona.lmao.ninja/countries/".concat(n.state.countryName)).then((function(e){n.setState({country:e.data,countryName:"",loading:!1,countryFlag:e.data.countryInfo.flag,error_:""})})).catch((function(e){n.setState({error_:"Invalid Country name!!",loading:!1})})),window.location.href="#button"):n.setState({error:"This field is required"})},n.state={countryName:"",country:{},error:"",loading:!1,error_:"",countryFlag:""},n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.a.get("https://corona.lmao.ninja/countries/india").then((function(a){e.setState({country:a.data,countryFlag:a.data.countryInfo.flag})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.countryName,a=this.state.country,t={cases:a.cases,deaths:a.deaths,active:a.active,recovered:a.recovered};return r.a.createElement("div",{className:"card brnone bg-light",id:"single"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center mb-3"},r.a.createElement("i",{className:"fas fa-map-marked-alt fa-1x mr-1"}),"Country Wise Data"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Try for different countries"),r.a.createElement("input",{value:e,name:"countryName",onChange:this.changeHandler,type:"text",className:F()("form-control",{"is-invalid":this.state.error}),id:"formGroupExampleInput",placeholder:"Country name here..."}),this.state.error&&r.a.createElement("div",{className:"invalid-feedback"},this.state.error)),r.a.createElement("div",{className:"form-group mx-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-block   btn-primary"},"Get Data"),r.a.createElement("span",{id:"button"}))))),this.state.loading?r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(z.a,{type:"ThreeDots",color:"black",height:40,width:40})):this.state.error_?r.a.createElement("div",{class:"alert alert-danger",role:"alert"},this.state.error_):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-subtitle text-center mb-3",id:"country"},r.a.createElement("div",{className:"md-row mb-2"},r.a.createElement("img",{src:this.state.countryFlag,className:"img-fluid img-thumbnail mr-2 bg-light",alt:"Country flag",style:{maxWidth:"30%"}})),a.country),r.a.createElement("div",{className:"row card-deck"},r.a.createElement(C,{heading:"Cases",color:"text-danger",number:a.cases}),r.a.createElement("hr",{className:"mx-4 lg-display-none"}),r.a.createElement(C,{heading:"Active",color:"text-warning",number:a.active}),r.a.createElement("hr",{className:"mx-4 lg-display-none"}),r.a.createElement(C,{heading:"Deaths",color:"text-dark",number:a.deaths}),r.a.createElement("hr",{className:"mx-4 "}),r.a.createElement(C,{heading:"Recovered",color:"text-success",number:a.recovered}))),r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement(j,{name:"".concat(a.country,"'s"),data:t}))),this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null))}}]),t}(n.Component));var T=function(e){var a=e.value;return r.a.createElement("div",{className:"card m-2",id:a.title,key:a.url},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},a.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-muted font-italic mt-1"},"Published on-",a.publishedAt.slice(0,10)),r.a.createElement("hr",null),r.a.createElement("a",{className:"btn btn-primary mt-2",href:a.url},"Read more")))},W=t(78),R=function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={news:[],NEWS_API:"8fd073bab2fb4e79810d6e51258ef6f1"},n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.a.get("https://newsapi.org/v2/everything?q=COVID&sources=google-news&language=en&from=2020-03-16&sortBy=publishedAt&apiKey=".concat(this.state.NEWS_API,"&pageSize=100&page=1")).then((function(a){e.setState({news:a.data.articles})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.news;return r.a.createElement("div",{className:"container mt-3 mb-4 round_"},r.a.createElement("div",{className:"card round_"},r.a.createElement("div",{className:"card-header",id:"news"},"Covid-19 News"),r.a.createElement(W.Element,{className:"element",id:"containerElement",style:{position:"relative",height:"360px",overflow:"scroll"}},e.map((function(e){return r.a.createElement(T,{value:e,key:e.url})})))))}}]),t}(n.Component);var G=function(){return r.a.createElement("div",{className:"bg-light mb-2 mt-3 py-4",style:{height:"11rem"}},r.a.createElement("div",{id:"carouselExampleIndicators ",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner text-center "},r.a.createElement("div",{className:"carousel-item active "},r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"fas fa-hands-wash fa-4x mx-auto"})),"Quick scrub and rinse will not eliminate all virus so wash hands properly for atleast 20 seconds"),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"fas fa-people-arrows fa-4x mx-auto"})),"Distance means so little when life means so much ,so avoid social gatherings"),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"fas fa-handshake-slash fa-4x mx-auto"})),"Joined palms, hands on hearts, vulcan salutes:",r.a.createElement("br",null),"Saying hello in a no-handshake era"),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"fas fa-head-side-cough-slash fa-4x mx-auto"})),"Don't cough in public"))))},H=t(41),J=t.n(H);var M=function(){return r.a.createElement("div",{className:"bg-light",id:"credit"},r.a.createElement("div",{className:"container text-center card brnone bg-light"},r.a.createElement("p",{className:" mt-3 card-title",style:{fontSize:"1.5rem"}},"Credits"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"md-col-4 card-text"},r.a.createElement("a",{href:"https://getbootstrap.com/",className:"badge badge-light",style:{fontSize:"1rem"}},"Bootstrap")),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-col-4"},r.a.createElement("a",{href:"https://newsapi.org/",className:"badge badge-light",style:{fontSize:"1rem"}},"News Api")),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-col-4"},r.a.createElement("a",{href:"https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest",className:"badge badge-light",style:{fontSize:"1rem"}},"Covid-19 Api")),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-col-4 "},r.a.createElement("a",{href:"https://fontawesome.com",className:"badge badge-light",style:{fontSize:"1rem"}},"Font Awesome")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-text text-warning text-center mb-2"},"This is not an official website."))};t(219).config();var P=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),m=Object(s.a)(c,2),o=m[0],d=m[1];return Object(n.useEffect)((function(){I.a.get("https://corona.lmao.ninja/all").then((function(e){l(e.data),d(!1)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(i,null),o?r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(z.a,{type:"ThreeDots",color:"black",height:40,width:40})):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container mt-3 bg-light round"},r.a.createElement(O,{global:t})),r.a.createElement("div",{className:"container mt-3 bg-light round"},r.a.createElement(J.a,{animateIn:"fadeIn"},r.a.createElement(B,null)))),r.a.createElement(J.a,{animateIn:"fadeIn"},r.a.createElement(R,null)),r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,a,t){},79:function(e,a,t){e.exports=t(222)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.e907eb73.chunk.js.map