(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(25).concat([function(e,t,a){e.exports=a.p+"static/media/DanHiggins.1b0122e5.pdf"},,,function(e,t,a){e.exports=a(59)},,,,,function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/portfolio-image.d067fe5c.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/santander-logo.602a604c.png"},function(e,t,a){e.exports=a.p+"static/media/bt-logo.5c8f04b3.png"},function(e,t,a){e.exports=a.p+"static/media/nb-logo.b2f8a129.png"},function(e,t,a){e.exports=a.p+"static/media/QA-logo.fbf3ad9e.png"},function(e,t,a){e.exports=a.p+"static/media/ford-logo.919a39e1.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),c=a.n(o),l=(a(33),a(6)),s=a(7),r=a(9),m=a(8),d=a(10),u=a(20);function v(){var e=Object(u.a)(["\n  position:  fixed;\n  background:  linear-gradient(\n    to right,\n    #90a4ae ",",\n    transparent  0);\n  width:  100%;\n  height:  6px;\n  margin-top: 100px;\n"]);return v=function(){return e},e}var f=a(21).a.div(v(),function(e){return e.scroll}),h=(a(37),a(2)),p=a(3),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({display:!a.state.display})},a.listenToScrollEvent=function(){document.addEventListener("scroll",function(){requestAnimationFrame(function(){a.calculateScrollDistance()})})},a.calculateScrollDistance=function(){var e=window.pageYOffset,t=window.innerHeight,n=a.getDocHeight()-t,i=Math.ceil(e/n*100);a.setState({scrollPosition:i})},a.getDocHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a.state={display:!1,scrollPosition:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"nav"},i.a.createElement("h1",{className:"nav__logo"},"Dan Higgins"),i.a.createElement("h1",{className:"nav__logo--mobile"},"DH"),i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"#"},"ABOUT")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"#"},"CLIENTS")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"#"},"SKILLS")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"#"},"CONTACT"))),i.a.createElement(h.a,{onClick:this.props.buttonClick,className:"nav__hamburger",icon:p.c})),i.a.createElement(f,{scroll:this.state.scrollPosition+"%"}))}}]),t}(n.Component);a(40),a(41);function _(e){return i.a.createElement("div",{className:"intro"},i.a.createElement("h1",{className:"intro__title"},e.title),e.description?i.a.createElement("h4",{className:"intro__description"},e.description):null)}var E=a(4);function w(e){return i.a.createElement("div",{className:"section contact-me"},i.a.createElement(_,{title:"Want to get in touch? \ud83d\udcde",description:"Want to say Hello? Check out what I've been up to on Linked In or GitHub. Otherwise just drop me an email!"}),i.a.createElement("div",{className:"contact-me__container"},i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://www.linkedin.com/in/danhiggins23"},i.a.createElement(h.a,{icon:E.d}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://github.com/DanHiggins23"},i.a.createElement(h.a,{icon:E.b}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"mailto:danhiggins23@outlook.com"},i.a.createElement(h.a,{icon:p.f})))))}a(42),a(43),a(44);function b(e){return i.a.createElement("div",{className:e.className},i.a.createElement(h.a,{className:"overlay__close",icon:p.g,onClick:e.buttonClick}),i.a.createElement("div",{className:"overlay__content"},i.a.createElement("h1",{className:"overlay__logo"},"DH"),i.a.createElement("ul",{className:"overlay__nav"},i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"#"},"ABOUT")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"#"},"PROJECTS")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"#"},"SKILLS")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"#"},"EXPERIENCES")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"#"},"CONTACT"))),i.a.createElement("div",{className:"overlay__socials"},i.a.createElement(h.a,{className:"overlay__socials-icon",icon:E.b}),i.a.createElement(h.a,{className:"overlay__socials-icon",icon:p.f}),i.a.createElement(h.a,{className:"overlay__socials-icon",icon:E.d}))))}var N=a(24),y=a.n(N),k=(a(45),a(25)),S=a.n(k);function I(e){return i.a.createElement("div",{className:"download-cv"},i.a.createElement("h2",{className:"download-cv__title"},"Want to find out more?"),i.a.createElement("h3",{className:"download-cv__description"},"Click below to view my CV (.pdf)"),i.a.createElement("span",null,i.a.createElement("a",{className:"download-cv__button",href:S.a,target:"_blank",rel:"noopener"},"Download CV")))}a(46);var x=a(5),C=a.n(x);function j(e){return i.a.createElement("div",{className:"section about-me"},i.a.createElement(_,{title:"Hi, I'm Dan Higgins \ud83d\udc4b",description:"I'm a full-stack software developer, focusing primarily in React. I've been working on projects with companies such as Ford and BT for the last few years expanding my skillset."}),i.a.createElement("img",{className:"about-me__image",src:a(49)}))}a(50);function T(e){return i.a.createElement("div",{className:"section clients"},i.a.createElement(C.a,{top:!0},i.a.createElement(_,{title:"Who've I been working with? \ud83e\udd1d",description:"Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer. I'm currently employed by QA as a Consultant, deployed at Santander as a Back-end Developer."})),i.a.createElement("div",{className:"clients__container"},i.a.createElement("img",{className:"clients__image clients__image--santander",src:a(51),alt:"Santander Logo"}),i.a.createElement("img",{className:"clients__image clients__image--bt",src:a(52),alt:"BT Logo"}),i.a.createElement("img",{className:"clients__image clients__image--nb",src:a(53),alt:"NETbuilder Logo"}),i.a.createElement("img",{className:"clients__image clients__image--qa",src:a(54),alt:"QA Logo"}),i.a.createElement("img",{className:"clients__image clients__image--ford",src:a(55),alt:"Ford Logo"})))}a(56);var O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({showText:!a.state.showText})},a.state={showText:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getStringLength",value:function(e){return this.state.showText?e:e.slice(0,115)+"..."}},{key:"render",value:function(){return i.a.createElement("div",{className:"skills__container-item"},i.a.createElement(h.a,{icon:this.props.icon}),i.a.createElement("span",{className:"skills__link"},i.a.createElement("a",{href:"#"},this.props.title)),i.a.createElement("p",{className:"skills__description"},this.getStringLength(this.props.text),i.a.createElement(h.a,{icon:this.state.showText?p.b:p.a,className:"skills__more",onClick:this.handleClick})))}}]),t}(n.Component);function H(e){return i.a.createElement("div",{className:"section skills"},i.a.createElement(C.a,{bottom:!0},i.a.createElement(_,{title:"What can I do? \ud83d\udcbb",description:"I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on."})),i.a.createElement("div",{className:"skills__container"},i.a.createElement(O,{icon:E.e,title:"React JS",text:"I've spent the last 6 months working with an AEM React implementation creating functional and stateful components that are unit tested, documented and example files created. I also created this portfolio in React!"}),i.a.createElement(O,{icon:E.c,title:"Java",text:"I've been using Java recently to create sling models for the AEM React components. I've also produced many projects, such as a bank GUI application and a text-based adventure game."}),i.a.createElement(O,{icon:p.d,title:"Testing",text:"I have experience using Selenium and Chrome web driver with JUnit to automate processes, as well as using JEST with sinon, React Test and DOM rendered in order to unit test components."})),i.a.createElement("div",{className:"skills__container"},i.a.createElement(O,{icon:E.a,title:"AEM",text:"I've recently been using AEM 6.2-6.5 and creating Angular and React components end-to-end. The majority of my time was spent using an AEM React SPA implementation of AEM."}),i.a.createElement(O,{icon:p.e,title:"HTML & CSS",text:"I've been doing HTML and CSS for a long time now, with knowledge in HTML5 and CSS3, where I've created multiple websites and Javascript projects. I now continue to use it with JSX in React components."}),i.a.createElement(O,{icon:E.f,title:"SASS",text:"I've been using SASS as my primary css pre-processor using the BEM notation. I've got very comfortable with this procedure and utlised it in the project I was involved with at BT as well as this portfoilio."})))}a(57);function A(e){return i.a.createElement("div",{className:"section projects"},i.a.createElement(_,{title:"What have I been doing? \ud83d\udc68\u200d\ud83d\udcbb",description:"Here's just a quick overview of what I've been working on in the past few years, over multiple different projects expanding my skills where possible!"}))}a(58);function L(e){return i.a.createElement("div",{className:"section qualifications"},i.a.createElement(_,{title:"My qualifcations \ud83c\udfc6",description:"Here's just a quick overview of what I've been working on in the past few years, over multiple different projects expanding my skills where possible!"}))}var M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleOverlay=function(){a.setState({visible:!a.state.visible},function(){!0===a.state.visible?document.getElementsByTagName("html")[0].style.overflowY="hidden":document.getElementsByTagName("html")[0].style.overflowY="auto"})},a.state={visible:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,{className:y()(this.state.visible?"overlay slideIn":"overlay slideOut"),buttonClick:this.handleOverlay}),i.a.createElement(g,{buttonClick:this.handleOverlay}),i.a.createElement(j,null),i.a.createElement(T,null),i.a.createElement(H,null),i.a.createElement(A,null),i.a.createElement(L,null),i.a.createElement(I,null),i.a.createElement(w,null),i.a.createElement("div",{className:"footer"},i.a.createElement("h4",null,"\xa9 Dan Higgins 2020")))}}]),t}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/my-portfolio","/service-worker.js");D?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}]),[[28,1,2]]]);
//# sourceMappingURL=main.0abaf120.chunk.js.map