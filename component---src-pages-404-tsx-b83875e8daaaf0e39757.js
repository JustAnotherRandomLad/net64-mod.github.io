(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(n,e,t){"use strict";t.r(e);var i=t(7),r=(t(0),t(181)),a=t(185),o=t(182),c=t(187);e.default=function(){return Object(i.d)(c.a,null,Object(i.d)(a.a,null,Object(i.d)(o.a,null,Object(i.d)("h1",null,"404: Page not found."),Object(i.d)("p",null,"You've hit the void. ",Object(i.d)(r.Link,{to:"/"},"Go back.")))))}},179:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"d",function(){return r}),t.d(e,"a",function(){return a}),t.d(e,"f",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return l}),t.d(e,"g",function(){return d});var i={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},r={sansSerif:'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:18,large:22},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},l={navigation:28,header:60},d={navigation:100}},180:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var i=t(179),r=function(n){return n/i.c.fontSize.regular}},181:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return h}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return g});var i=t(7),r=t(0),a=t.n(r),o=t(4),c=t.n(o),l=t(178),d=t.n(l);t.d(e,"Link",function(){return d.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var s=t(184),u=t.n(s);t.d(e,"PageRenderer",function(){return u.a});var b=t(31);t.d(e,"parsePath",function(){return b.a});var f=a.a.createContext({}),g=function(n){return Object(i.d)(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):Object(i.d)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},182:function(n,e,t){"use strict";var i=t(177),r=t(7),a=(t(0),t(179)),o=t(180),c=Object(i.a)("div",{target:"ehjs3lr0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(a.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(r.d)(c,{className:t},e)}},184:function(n,e,t){var i;n.exports=(i=t(189))&&i.default||i},185:function(n,e,t){"use strict";var i=t(177),r=t(7),a=(t(0),t(179)),o=Object(i.a)("div",{target:"e1ncsog0"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(r.d)(o,{className:t},e)}},187:function(n,e,t){"use strict";var i=t(7),r=t(188),a=t(0),o=t(190),c=t.n(o),l=t(181),d=(t(192),t(179)),s=t(180),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(177),f=t(193),g=t(182),h=(t(194),Object(b.a)("div",{target:"enwjj5n0"})("margin:0 ",Object(s.a)(12),"rem;a{color:white;}")),m=function(n){var e=n.link;return Object(i.d)(h,null,Object(i.d)(l.Link,{to:e.url},e.label))},p=Object(b.a)("div",{target:"e1q85xrv0"})("position:fixed;top:0;right:0;left:0;height:",Object(s.a)(d.e.navigation),"rem;line-height:",Object(s.a)(d.e.navigation),"rem;display:flex;z-index:",d.g.navigation,";background-color:",d.b.brand,";display:flex;align-items:center;"),j=function(n){var e=n.links;return Object(i.d)(p,null,e.map(function(n){return Object(i.d)(m,{link:n})}))},v=Object(b.a)("header",{target:"e1ny8wse0"})("height:",Object(s.a)(d.e.header),"rem;margin-top:",Object(s.a)(d.e.navigation),"rem;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(f.a)(.5,d.b.white),";"),y=Object(b.a)(g.a,{target:"e1ny8wse1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),O=Object(b.a)(l.Link,{target:"e1ny8wse2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),w=function(n){var e=n.title;return Object(i.d)(v,null,Object(i.d)(j,{links:[{label:"Home",url:"/"},{label:"Download",url:"/net64plus"},{label:"FAQ",url:"/faq"},{label:"Hosting",url:"/hosting"}]}),Object(i.d)(y,null,Object(i.d)(O,{to:"/"},e)))},x=Object(b.a)("div",{target:"e1y2glut0"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),k=function(n){var e=n.children,t=n.className;return Object(i.d)(a.Fragment,null,Object(i.d)(i.a,{styles:function(){return Object(i.c)(u,"")}}),Object(i.d)(x,{className:t},e))},z=Object(b.a)("main",{target:"e107hvyh0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),S=function(n){var e=n.children,t=n.className;return Object(i.d)(z,{className:t},e)};e.a=function(n){var e=n.children;return Object(i.d)(l.StaticQuery,{query:"991718019",render:function(n){return Object(i.d)(k,null,Object(i.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:"net64, super, mario, 64, online"}]}),Object(i.d)(w,{title:n.site.siteMetadata.title}),Object(i.d)(S,null,e))},data:r})}},188:function(n){n.exports={data:{site:{siteMetadata:{title:"Net64 - Super Mario 64 Online",description:"Official website for Net64, a Super Mario 64 mod for playing online."}}}}},189:function(n,e,t){"use strict";t.r(e);t(54);var i=t(0),r=t.n(i),a=t(4),o=t.n(a),c=t(57),l=t(2),d=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d}}]);
//# sourceMappingURL=component---src-pages-404-tsx-b83875e8daaaf0e39757.js.map