(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(61),a(121)),i=a(3),s=a(4),m=a(7),u=a(5),p=a(6),h=(a(62),a(122)),d=a(123),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-body"},r.a.createElement("div",{className:"footer-contents"},r.a.createElement("p",{className:"about"},"About DigiDigest:",r.a.createElement("br",null),"Yum."),r.a.createElement("p",{className:"imprint"},r.a.createElement("span",{className:"imprint-title"},"Imprint:"),r.a.createElement("br",null),"DigiDigest GmbH",r.a.createElement("br",null),"In This Room 101",r.a.createElement("br",null),"4444 Paradise City",r.a.createElement("br",null),"Don't contact me"),r.a.createElement("p",{className:"imprint-credits"},r.a.createElement("span",{className:"credits"},"Credits:"),r.a.createElement("br",null),"Liska Crofts",r.a.createElement("br",null),"Rebecca Ingram")))}}]),t}(n.Component),E=a(29),b=a(20),v=a.n(b),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password,r=a.state.name;v.a.post("https://digital-digest.herokuapp.com/api/signup",{email:t,password:n,name:r}).then(function(e){a.setState({name:"",email:"",password:""}),a.props.history.push("/Home")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(E.a)({},n,r))},a.state={name:"",email:"",password:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signupDiv"},r.a.createElement("h1",null,"Signup"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"name",placeholder:"your name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",name:"submit"},"Submit!")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;v.a.post("https://digital-digest.herokuapp.com/api/login",{email:t,password:n}).then(function(e){console.log("logged in",e),a.props.history.push("/Home")}).catch(function(e){return console.log(e.response)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(E.a)({},n,r))},a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginDiv"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",placeholder:"password",type:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",name:"submit"},"Login!")))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"signupLogin"},r.a.createElement("div",{className:"auth-body"},r.a.createElement(g,{history:this.props.history}),r.a.createElement(j,{history:this.props.history}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleForm=function(e){e.preventDefault(),console.log("form handled"),a.props.onSearch(a.state.searchTerm)},a.handleInputChange=function(e){a.setState({searchTerm:e.target.value})},a.state={searchTerm:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("this.props",this.props),r.a.createElement("form",{onSubmit:this.handleForm,action:"",autoComplete:"off",className:"form-horizontal",method:"post",acceptCharset:"utf-8",width:"300px",height:"350px"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search for...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-search"},"Search"))))}}]),t}(n.Component),y=a(119),N=a(32),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).saveArticle=function(e){e.preventDefault(),v.a.post("https://digital-digest.herokuapp.com/api")},a.state={title:"",date:[],url:"",text:[],results:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-group-local"},this.props.mirResult.map(function(t,a){return null!==t?r.a.createElement("div",{className:"card-local",key:a},r.a.createElement("div",{className:"card-title-local"},r.a.createElement("h4",null,t.title)),r.a.createElement("span",{className:"card-footer-local"},r.a.createElement(y.a,{id:"dropdown-basic-button",title:"Like"},r.a.createElement(N.a.Item,{onClick:e.saveArticle},"Favorites"),r.a.createElement(N.a.Item,{onClick:e.saveArticle},"Save For Later")),r.a.createElement("button",{onClick:function(){window.open(t.url,"_blank")}},"Go To"))):null}))}}]),t}(n.Component),k=a(41),S=a.n(k),I=a(120),F=function(){return r.a.createElement(S.a,{bg:"white",variant:"white"},r.a.createElement(S.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"img/NewsIcon.png",width:"80px",height:"100%",className:"d-inline-block align-top"})),r.a.createElement("div",{className:"typewriter"},r.a.createElement("div",{className:"typewriter-text"},"Digital Digest.")),r.a.createElement("div",{className:"NavBar"},r.a.createElement("ul",null,r.a.createElement(I.a,{to:"/Home"},"Home"),r.a.createElement(I.a,{to:"/Collections"},"Collections"),r.a.createElement(I.a,{to:"/"},"Logout"))))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getInfo=function(e){var t="https://digital-digest.herokuapp.com/api/stories";e&&(t="https://digital-digest.herokuapp.com"+"/api/stories/".concat(e)),v.a.get(t).then(function(e){a.setState({results:e.data})})},a.state={results:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(F,null),r.a.createElement("div",null,r.a.createElement(w,{onSearch:this.getInfo})),r.a.createElement("br",null),r.a.createElement(C,{mirResult:this.state.results}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"folder-group"},this.props.userCollections.map(function(e,t){return console.log("coleeeeeectionsdata",e),r.a.createElement("div",null,r.a.createElement("div",{className:"favouritesFolder"},r.a.createElement(I.a,{to:"InUserFolder"},r.a.createElement("img",{className:"newspaper-icon",src:"img/folderfolderfolder.png",alt:"I am a newspaper icon"})),r.a.createElement("div",null,"Favourites")),r.a.createElement("div",{className:"favouritesFolder",key:t},r.a.createElement(I.a,{to:"InUserFolder"},r.a.createElement("img",{className:"newspaper-icon",src:"img/folderfolderfolder.png",alt:"I am a newspaper icon"})),r.a.createElement("div",null,e.name)),r.a.createElement("div",{className:"favouritesFolder"},r.a.createElement("img",{className:"newspaper-icon",src:"img/folderfolder.png",alt:"I am a newspaper icon"}),r.a.createElement("div",null,"Add Collection \ud83d\ude03")))}))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={collections:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://digital-digest.herokuapp.com/user/collections").then(function(t){e.setState({collections:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"collections"},r.a.createElement(F,null),r.a.createElement("div",null,r.a.createElement("h1",null,"Collections"),r.a.createElement("div",{className:"favouritesFolder"},r.a.createElement(I.a,{to:"InUserFolder"},r.a.createElement("img",{className:"newspaper-icon",src:"img/folderfolderfolder.png",alt:"I am a newspaper icon"})," "),r.a.createElement("div",null,"Favourites")),r.a.createElement("div",{className:"favouritesFolder"},r.a.createElement("img",{className:"newspaper-icon",src:"img/folderfolderfolder.png",alt:"I am a newspaper icon"}),r.a.createElement("div",null,"Save for later :D"))),r.a.createElement(x,{userCollections:this.state.collections}))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inUserFolder"},r.a.createElement(F,null),r.a.createElement("h1",null,'Saved Articles "(Woot woot)"'),r.a.createElement("p",null,"Results inside the folder \ud83d\ude03"))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-content"},r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:O}),r.a.createElement(d.a,{path:"/Home",exact:!0,component:D}),r.a.createElement(d.a,{path:"/Collections",exact:!0,component:A}),r.a.createElement(d.a,{path:"/InUserFolder",exact:!0,component:L}))),r.a.createElement(f,null))}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement(H,null)),document.getElementById("root"))},56:function(e,t,a){e.exports=a(117)},61:function(e,t,a){},62:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.307bef02.chunk.js.map