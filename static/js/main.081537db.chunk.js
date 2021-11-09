(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),l=t(9),i=t.n(l),o=(t(14),t(6)),r=(t(15),t(0));var n=function(){var e=Object(s.useState)("animated-icon"),c=Object(o.a)(e,2),t=c[0],a=c[1],l=Object(s.useState)("collapse navbar-collapse"),i=Object(o.a)(l,2),n=i[0],A=i[1],j=function(){"animated-icon"===document.getElementsByClassName("animated-icon")[0].classList.value?(a("animated-icon open"),A("collapse navbar-collapse show")):(a("animated-icon"),A("collapse navbar-collapse"))},d=Object(s.useState)("0"),g=Object(o.a)(d,2),m=g[0],b=g[1],h=window.pageYOffset;return window.addEventListener("scroll",(function(){var e=document.getElementsByClassName("animated-icon")[0],c=window.pageYOffset;h>c||e.classList.contains("open")?b("0"):b(c<30?"0":"-50px"),h=c})),Object(r.jsxs)("nav",{className:"navbar navbar-dark red lighten-1 mb-4 custom-nav",style:{top:m},children:[Object(r.jsx)("a",{className:"navbar-brand nav-name",href:"/#",children:"Ian Everitt"}),Object(r.jsx)("button",{className:"navbar-toggler second-button custom-btn",onClick:j,type:"button","data-target":"#navbarSupportedContent23","aria-controls":"navbarSupportedContent23","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})}),Object(r.jsx)("div",{className:n,id:"navbarSupportedContent23",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",onClick:j,children:[Object(r.jsx)("li",{className:"nav-item about-link",children:Object(r.jsx)("a",{className:"nav-link",href:"#about",children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link projects-link",href:"#projects",children:"Projects"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link resume-link",href:"#resume",children:"Resume"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link contact-link",href:"#contact",children:"Contact"})})]})})]})},A=t(4);t(18);var j=function(){return Object(r.jsx)("header",{className:"jumbotron vh-100 custom-jumbo",children:Object(r.jsxs)("div",{className:"header-div",children:[Object(r.jsx)(A.a,{from:{x:"-2000px",opacity:"0",delay:"1"},duration:1,ease:"back",children:Object(r.jsx)("h1",{className:"my-name",children:"IAN EVERITT"})}),Object(r.jsx)(A.a,{from:{y:"150px",opacity:"0",delay:"2"},duration:1,ease:"elastic.out(.5)",children:Object(r.jsx)("h2",{className:"web-dev",children:"Full-Stack Web Developer"})})]})})},d=(t(19),t.p+"static/media/portfolio-profile.225605af.jpeg"),g=t(3),m=t(2),b=t(5);m.a.registerPlugin(b.a),m.a.registerPlugin(g.ScrollTrigger),m.a.core.globals("ScrollTrigger",g.ScrollTrigger);var h=function(){var e=window.matchMedia("(min-width: 700px)");return Object(s.useEffect)((function(){e.matches?(console.log("largerScreenAnimations forthcoming"),m.a.from(".hi",{x:"-250px",opacity:0,scrollTrigger:{trigger:".hi"}}),m.a.from(".profile-pic",{opacity:"0",scale:"0.6",scrollTrigger:{trigger:".profile-pic"}}),m.a.from(".so-happy",{x:"250px",opacity:"0",scrollTrigger:{trigger:".so-happy"}}),m.a.from(".about-desc",{scale:"0.6",opacity:"0",scrollTrigger:{trigger:".so-happy"}})):(console.log("smallerScreenAnimations forthcoming"),m.a.from(".hi",{x:"-100px",opacity:0,scrollTrigger:{trigger:".hi"}}),m.a.from(".profile-pic",{opacity:"0",scale:"0.3",scrollTrigger:{trigger:".profile-pic"}}),m.a.from(".so-happy",{x:"100px",opactiy:"0",scrollTrigger:{trigger:".so-happy"}}),m.a.from(".about-desc",{scale:"0.3",opacity:"0",scrollTrigger:{trigger:".so-happy"}}))})),Object(r.jsxs)("section",{className:"about panel",id:"about",children:[Object(r.jsx)("h1",{className:"hi",children:"Hi, my name's Ian"}),Object(r.jsx)("img",{src:d,alt:"Ian's portrait",className:"profile-pic"}),Object(r.jsx)("h2",{className:"so-happy",children:"and I'm so happy to meet you."}),Object(r.jsx)("h4",{className:"about-desc",children:"I'm a full stack web developer with a passion for skill and character development. See my resume and my projects below to get a better idea of what we could accomplish together."})]})};t(20);m.a.registerPlugin(b.a),m.a.registerPlugin(g.ScrollTrigger);var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(r.jsx)("path",{fill:"#222",fillOpacity:"1",d:"M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})}),Object(r.jsx)("section",{className:"projects panel",id:"projects",children:Object(r.jsxs)("div",{className:"container project-container",children:[Object(r.jsx)("h1",{children:"My projects"}),Object(r.jsxs)("div",{className:"row justify-content-center row1",children:[Object(r.jsxs)(A.a,{from:{x:"250px",opacity:0,scrollTrigger:{trigger:".project1"}},ease:"back",children:[Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project1",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Inspecto-Gadget"}),Object(r.jsx)("p",{children:"MVP of app inspectors and administrators in Orchard Lake, MI use for tracking inspections."}),Object(r.jsx)("p",{className:"username",children:"User: Electrical"}),Object(r.jsx)("p",{className:"password",children:"Password: pass12345"}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/Laurenzel93/inspecto-gadget",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://arcane-taiga-84005.herokuapp.com/",target:"_blank",className:"project-link",children:"Heroku"})]})]})}),Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project2",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Group Mentality"}),Object(r.jsx)("p",{children:"A full stack app where you can post to a public forum and have direct interactions with mental health specialists."}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/rflctvEQ/group-mentality",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://protected-waters-68869.herokuapp.com/",target:"_blank",className:"project-link",children:"Heroku"})]})]})}),Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project3",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Tech Blog"}),Object(r.jsx)("p",{children:"A full stack app for techies to blog about their latest projects."}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/rflctvEQ/tech-blog",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://afternoon-retreat-69044.herokuapp.com/",target:"_blank",className:"project-link",children:"Heroku"})]})]})})]}),Object(r.jsxs)(A.a,{from:{x:"-250px",opacity:0,scrollTrigger:{trigger:".project4"}},ease:"back",children:[Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project4",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Note Taker"}),Object(r.jsx)("p",{children:"Take, edit, and delete notes with a clean UI."}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/rflctvEQ/note-taker",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://young-savannah-42064.herokuapp.com/",target:"_blank",className:"project-link",children:"Heroku"})]})]})}),Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project5",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Employee Directory"}),Object(r.jsx)("p",{children:"React front end app that renders a searchable and sortable employee directory from the Random User API."}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/rflctvEQ/employee-directory",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://rflctveq.github.io/employee-directory",target:"_blank",className:"project-link",children:"Visit site"})]})]})}),Object(r.jsx)("figure",{className:"col-10 col-md-4 col-lg-3 project project6",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{className:"project-title",children:"Fitness Tracker"}),Object(r.jsx)("p",{children:"Record your workouts and see a visual, graphical representation of your progress!"}),Object(r.jsxs)("div",{className:"link-buttons",children:[Object(r.jsx)("a",{href:"https://github.com/rflctvEQ/workout-tracker",target:"_blank",className:"github-link",children:"GitHub Repo"}),Object(r.jsx)("a",{href:"https://stark-river-86497.herokuapp.com/",target:"_blank",className:"project-link",children:"Heroku"})]})]})})]})]})]})}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(r.jsx)("path",{fill:"#222",fillOpacity:"1",d:"M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"})})]})},O=(t(21),t.p+"static/media/react.e27571ea.svg"),x=t.p+"static/media/typescript-icon.17d5e87e.svg",u=t.p+"static/media/javascript.fd46ca41.svg",v=t.p+"static/media/html.e7638e36.svg",N=t.p+"static/media/css.e7a9de36.svg",k=t.p+"static/media/bootstrap.527d0fc0.svg",w=t.p+"static/media/nodejs-icon.3dc364b8.svg",f=t.p+"static/media/express.7e85c513.svg",C=t.p+"static/media/insomnia.c463712e.svg",y=t.p+"static/media/mysql.e5a509a5.svg",E=t.p+"static/media/mongodb.153b7b44.svg",I=t.p+"static/media/git.fd381642.svg";m.a.registerPlugin(b.a),m.a.registerPlugin(g.ScrollTrigger);var G=function(){var e=Object(s.useState)("150"),c=Object(o.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){window.innerWidth<600&&a("100"),window.addEventListener("resize",(function(){window.innerWidth<=600?a("100"):a("150")}))}),[]),Object(r.jsxs)("section",{className:"resume panel",id:"resume",children:[Object(r.jsxs)("h1",{children:["Check out ",Object(r.jsx)("a",{href:"./resume-ian-everitt.pdf",target:"_blank",children:Object(r.jsx)(A.a,{from:{opacity:0,scrollTrigger:{trigger:".resume",toggleActions:"restart"}},ease:"back",delay:.25,duration:2,children:Object(r.jsx)("span",{children:"my\xa0resume"})})})," for a peek into my professional career so far."]}),Object(r.jsx)("h1",{className:"technologies-title",children:"Technologies:"}),Object(r.jsx)("div",{className:"container technologies",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)(A.a,{from:{opacity:0,x:"100px",scrollTrigger:{trigger:".tech-logo"}},ease:"elastic",delay:.5,duration:1.5,children:[Object(r.jsx)("div",{className:"react-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:O,alt:"React logo",width:t})})}),Object(r.jsx)("div",{className:"typescript-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:x,alt:"TypeScript logo",width:t})})}),Object(r.jsx)("div",{className:"javascript-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:u,alt:"JavaScript logo",width:t})})}),Object(r.jsx)("div",{className:"html-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:v,alt:"HTML 5 logo",width:t})})}),Object(r.jsx)("div",{className:"css-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:N,alt:"CSS logo",width:t})})}),Object(r.jsx)("div",{className:"bootstrap-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:k,alt:"Bootstrap logo",width:t})})}),Object(r.jsx)("div",{className:"nodejs-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:w,alt:"Node.js logo",width:t})})}),Object(r.jsx)("div",{className:"express-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:f,alt:"Express.js logo",width:t})})}),Object(r.jsx)("div",{className:"insomnia-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:C,alt:"Insomnia logo",width:t})})}),Object(r.jsx)("div",{className:"mysql-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:y,alt:"MySQL logo",width:t})})}),Object(r.jsx)("div",{className:"mongodb-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:E,alt:"MongoDB logo",width:t})})}),Object(r.jsx)("div",{className:"git-div col-6 col-sm-6 col-md-6 col-lg-3",children:Object(r.jsx)("div",{className:"tech-logo",children:Object(r.jsx)("img",{src:I,alt:"Git logo",width:t})})})]})})})]})};t(22);var S=function(){return Object(r.jsx)("section",{className:"vh-100 contact panel",id:"contact",children:Object(r.jsxs)("div",{className:"contact-row",children:[Object(r.jsxs)("div",{className:"contact-column",children:[Object(r.jsx)("h1",{className:"contact-me",children:"Contact me"}),Object(r.jsxs)("div",{className:"center-name-email",children:[Object(r.jsx)("h2",{children:"Ian Everitt"}),Object(r.jsx)("h3",{children:Object(r.jsx)("a",{href:"mailto:ian.andrew.everitt@gmail.com",target:"_blank",children:"ian.andrew.everitt@gmail.com"})})]})]}),Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)("a",{href:"mailto:ian.andrew.everitt@gmail.com",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"Gmail logo",className:"gmail-logo"})}),Object(r.jsx)("a",{href:"https://github.com/rflctvEQ",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=",alt:"GitHub logo",className:"github-logo"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/ian-everitt-451973201/",target:"_blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"LinkedIn logo",className:"linkedin-logo"})})]})]})})};t(23);m.a.registerPlugin(b.a);var Z=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(n,{}),Object(r.jsx)(j,{}),Object(r.jsx)(h,{}),Object(r.jsx)(p,{}),Object(r.jsx)(G,{}),Object(r.jsx)(S,{})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,l=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),l(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root")),T()}],[[24,1,2]]]);
//# sourceMappingURL=main.081537db.chunk.js.map