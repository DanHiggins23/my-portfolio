(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/DanHiggins.0ed75c83.pdf"},39:function(e,t,a){e.exports=a(79)},44:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/amsterdam.50b1e498.jpg"},68:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/santander-logo.602a604c.png"},70:function(e,t,a){e.exports=a.p+"static/media/bt-logo.5c8f04b3.png"},71:function(e,t,a){e.exports=a.p+"static/media/nb-logo.b2f8a129.png"},72:function(e,t,a){e.exports=a.p+"static/media/QA-logo.fbf3ad9e.png"},73:function(e,t,a){e.exports=a.p+"static/media/ford-logo.919a39e1.png"},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/teesside-uni.faeb3ef8.png"},78:function(e,t,a){e.exports=a.p+"static/media/open-university.e1a632c3.png"},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(28),l=a.n(o),c=(a(44),a(6)),s=a(7),r=a(9),m=a(8),d=a(10),u=a(29);function p(){var e=Object(u.a)(["\n  position:  fixed;\n  background:  linear-gradient(\n    to right,\n    #90a4ae ",",\n    transparent  0);\n  width:  100%;\n  height:  6px;\n  margin-top: 100px;\n"]);return p=function(){return e},e}var g=a(30).a.div(p(),function(e){return e.scroll}),v=(a(48),a(2)),h=a(4),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({display:!a.state.display})},a.listenToScrollEvent=function(){document.addEventListener("scroll",function(){requestAnimationFrame(function(){a.calculateScrollDistance()})})},a.calculateScrollDistance=function(){var e=window.pageYOffset,t=window.innerHeight,n=a.getDocHeight()-t,i=Math.ceil(e/n*100);a.setState({scrollPosition:i})},a.getDocHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a.state={display:!1,scrollPosition:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"nav"},i.a.createElement("h1",{className:"nav__logo"},"Dan Higgins"),i.a.createElement("h1",{className:"nav__logo--mobile"},"DH"),i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"https://www.linkedin.com/in/danhiggins23"},"Linked In")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"https://github.com/DanHiggins23"},"GitHub")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"mailto:danhiggins23@outlook.com"},i.a.createElement(v.a,{icon:h.f})))),i.a.createElement(v.a,{onClick:this.props.buttonClick,className:"nav__hamburger",icon:h.c})),i.a.createElement(g,{scroll:this.state.scrollPosition+"%"}))}}]),t}(n.Component);a(51),a(52);function _(e){return i.a.createElement("div",{className:"intro"},i.a.createElement("h1",{className:"intro__title"},e.title),e.description?i.a.createElement("h4",{className:"intro__description"},e.description):null)}var E=a(5),b=a(3),w=a.n(b);function N(e){return i.a.createElement("div",{className:"section contact-me"},i.a.createElement(w.a,{bottom:!0},i.a.createElement(_,{title:"Want to get in touch? \ud83d\udcde",description:"Want to say Hello? Check out what I've been up to on Linked In or GitHub. Otherwise just drop me an email!"}),i.a.createElement("div",{className:"contact-me__container"},i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://www.linkedin.com/in/danhiggins23"},i.a.createElement(v.a,{icon:E.d}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://github.com/DanHiggins23"},i.a.createElement(v.a,{icon:E.b}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"mailto:danhiggins23@outlook.com"},i.a.createElement(v.a,{icon:h.f}))))))}a(55),a(56),a(57);function k(e){return i.a.createElement("div",{className:e.className},i.a.createElement(v.a,{className:"overlay__close",icon:h.g,onClick:e.buttonClick}),i.a.createElement("div",{className:"overlay__content"},i.a.createElement("h1",{className:"overlay__logo"},"DH"),i.a.createElement("ul",{className:"overlay__nav"},i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"https://www.linkedin.com/in/danhiggins23"},"LINKED IN")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"https://github.com/DanHiggins23"},"GITHUB")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement("a",{className:"overlay__nav-link",href:"mailto:danhiggins23@outlook.com"},"MAIL"))),i.a.createElement("div",{className:"overlay__socials"},i.a.createElement(v.a,{className:"overlay__socials-icon",icon:E.b}),i.a.createElement(v.a,{className:"overlay__socials-icon",icon:h.f}),i.a.createElement(v.a,{className:"overlay__socials-icon",icon:E.d}))))}var y=a(33),S=a.n(y),x=(a(58),a(34)),I=a.n(x);function j(e){return i.a.createElement("div",{className:"download-cv"},i.a.createElement(w.a,{bottom:!0},i.a.createElement("h2",{className:"download-cv__title"},"Want to find out more?"),i.a.createElement("h3",{className:"download-cv__description"},"Click below to view my CV (.pdf)"),i.a.createElement("span",null,i.a.createElement("a",{className:"download-cv__button",href:I.a,target:"_blank",rel:"noopener noreferrer"},"Download CV"))))}a(59);var C=a(36);function H(e){return i.a.createElement("div",{className:"section about-me"},i.a.createElement("div",{className:"about-me"},i.a.createElement("div",{className:"about-me__title"},i.a.createElement(w.a,{bottom:!0},i.a.createElement("div",null,i.a.createElement("span",null,"Hi, I'm"),i.a.createElement(C.a,{delay:"1000",interval:"2000"},i.a.createElement("span",null,"\xa0Dan Higgins"),i.a.createElement("span",null,"\xa0a Developer"),i.a.createElement("span",null,"\xa0a Consultant")),i.a.createElement("span",{role:"img","aria-label":"jsx-a11y/aria-proptypes"},"\xa0\ud83d\udc4b")))),i.a.createElement(w.a,{bottom:!0,delay:500},i.a.createElement("h3",{className:"about-me__description"},"I've been working on a range of projects with companies such as ",i.a.createElement("span",{className:"ford-underline"},"Ford"),", ",i.a.createElement("span",{className:"bt-underline"},"BT")," and ",i.a.createElement("span",{className:"santander-underline"},"Santander")," for the last few years. Have a look what I've been up to!"))),i.a.createElement(w.a,{bottom:!0,delay:500},i.a.createElement("img",{className:"about-me__image",src:a(67),alt:"Me in Amsterdam"})))}a(68);function O(e){return i.a.createElement("div",{className:"section clients"},i.a.createElement(w.a,{bottom:!0},i.a.createElement(_,{title:"Who've I been working with? \ud83e\udd1d",description:"Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer. I'm currently employed by QA as a Consultant, deployed at Santander as a Back-end Developer."}),i.a.createElement("div",{className:"clients__container"},i.a.createElement("img",{className:"clients__image clients__image--santander",src:a(69),alt:"Santander Logo"}),i.a.createElement("img",{className:"clients__image clients__image--bt",src:a(70),alt:"BT Logo"}),i.a.createElement("img",{className:"clients__image clients__image--nb",src:a(71),alt:"NETbuilder Logo"}),i.a.createElement("img",{className:"clients__image clients__image--qa",src:a(72),alt:"QA Logo"}),i.a.createElement("img",{className:"clients__image clients__image--ford",src:a(73),alt:"Ford Logo"}))))}a(74),a(75);var T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({showText:!a.state.showText,animate:!a.state.animate})},a.state={showText:!1,aniamte:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getStringLength",value:function(e){return this.state.showText?e:e.slice(0,115)+"..."}},{key:"render",value:function(){return i.a.createElement("div",{className:"skills__container-item"},i.a.createElement(v.a,{icon:this.props.icon}),i.a.createElement("span",{className:"skills__link"},this.props.title),i.a.createElement("p",{onClick:this.handleClick,className:this.state.showText?"skills__description skills__test hvr-icon-up":"skills__description hvr-icon-down"},this.getStringLength(this.props.text),i.a.createElement(v.a,{icon:this.state.showText?h.b:h.a,className:"skills__more hvr-icon",onClick:this.handleClick})))}}]),t}(n.Component);function A(e){return i.a.createElement("div",{className:"section skills"},i.a.createElement(w.a,{bottom:!0},i.a.createElement(_,{title:"What can I do? \ud83d\udc68\u200d\ud83d\udcbb",description:"I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on."}),i.a.createElement("div",null,i.a.createElement("div",{className:"skills__container"},i.a.createElement(T,{icon:E.e,title:"React JS",text:"I've spent the last 6 months working with an AEM React implementation creating functional and stateful components that are unit tested, documented and example files created. I also created this portfolio in React!"}),i.a.createElement(T,{icon:E.c,title:"Java",text:"I've been using Java recently to create sling models for the AEM React components. I've also produced many projects, such as a bank GUI application and a text-based adventure game."}),i.a.createElement(T,{icon:h.d,title:"Testing",text:"I have experience using Selenium and Chrome web driver with JUnit to automate processes, as well as using JEST with sinon, React Test and DOM rendered in order to unit test components."})),i.a.createElement("div",{className:"skills__container"},i.a.createElement(T,{icon:E.a,title:"AEM",text:"I've recently been using AEM 6.2-6.5 and creating Angular and React components end-to-end. The majority of my time was spent using an AEM React SPA implementation of AEM."}),i.a.createElement(T,{icon:h.e,title:"HTML & CSS",text:"I've been doing HTML and CSS for a long time now, with knowledge in HTML5 and CSS3, where I've created multiple websites and Javascript projects. I now continue to use it with JSX in React components."}),i.a.createElement(T,{icon:E.f,title:"SASS",text:"I've been using SASS as my primary css pre-processor using the BEM notation. I've got very comfortable with this procedure and utlised it in the project I was involved with at BT as well as this portfoilio."})))))}a(76);function L(e){return i.a.createElement("div",{className:"section qualifications"},i.a.createElement(w.a,{bottom:!0},i.a.createElement(_,{title:"My qualifcations \ud83c\udfc6",description:"Here's just a quick overview of what I've been working on in the past few years, over multiple different projects expanding my skills where possible!"}),i.a.createElement("div",{className:"qualifications__container"},i.a.createElement("div",{className:"qualifications__container-item"},i.a.createElement("img",{className:"qualifications__image qualifications__image--teesside",src:a(77),alt:"Santander Logo"}),i.a.createElement("span",{className:"skills__link"},"BSc Computer & Digital Forensics"),i.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement("div",{className:"qualifications__container-item"},i.a.createElement("img",{className:"qualifications__image qualifications__image--ou",src:a(78),alt:"Santander Logo"}),i.a.createElement("span",{className:"skills__link"},"Introduction to Cyber Security"),i.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))}var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleOverlay=function(){a.setState({visible:!a.state.visible},function(){!0===a.state.visible?document.getElementsByTagName("html")[0].style.overflowY="hidden":document.getElementsByTagName("html")[0].style.overflowY="auto"})},a.state={visible:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,{className:S()(this.state.visible?"overlay slideIn":"overlay slideOut"),buttonClick:this.handleOverlay}),i.a.createElement(f,{buttonClick:this.handleOverlay}),i.a.createElement(H,null),i.a.createElement(O,null),i.a.createElement(A,null),i.a.createElement(L,null),i.a.createElement(j,null),i.a.createElement(N,null),i.a.createElement("div",{className:"footer"},i.a.createElement("h4",null,"\xa9 Dan Higgins 2020")))}}]),t}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");M?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.d5b43063.chunk.js.map