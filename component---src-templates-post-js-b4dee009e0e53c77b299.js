(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(0),r=a.n(n),i=a(180),o=a.n(i),l=a(159),c=a(152),s=a(154),m=a(155);a(205),a(206);t.default=function(e){var t=e.data,a=t.site.siteMetadata.title,n=t.markdownRemark,i=n.frontmatter,d={url:"https://dingtalk-dev.github.io"+i.path,identifier:i.path,title:i.title};return r.a.createElement(l.a,{title:i.title,subtitle:a},r.a.createElement(s.a,null),r.a.createElement(c.a,{title:i.title,keywords:["developer","blog","alibaba","dingtalk","ios","mac"]}),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:n.html}}),r.a.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem",fontSize:"0.8rem",color:"#aaa"}},"由 ",i.author," 发布于 ",r.a.createElement(m.a,{dateString:i.date})),r.a.createElement(o.a.DiscussionEmbed,{shortname:"dingtalk-dev",config:d}))};var d="1475118400"},145:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(147);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e){e.exports={data:{site:{siteMetadata:{title:"钉钉 Mac 团队技术博客",description:"钉钉技术，追求卓越。"}}}}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(161),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:(l?l+" | ":"")+c.siteMetadata.title,link:[],meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},153:function(e){e.exports={data:{site:{siteMetadata:{title:"钉钉 Mac 团队技术博客",description:"钉钉技术，追求卓越。",author:"@unixzii"}}}}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return Object(n.useEffect)(function(){!function e(){window.gtag||setTimeout(function(){e()},5e3),console.log("will send ga track..."),window.gtag("config","UA-137161770-1",{page_title:window.document.title,page_path:window.location.pathname})}()},[]),r.a.createElement(r.a.Fragment,null)}},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156);a(163);t.a=r.a.memo(function(e){var t=e.dateString;return r.a.createElement("span",null,i(t,"YYYY-MM-DD").locale("zh-cn").format("LL"))})},159:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(145),s=function(e){var t=e.siteTitle,a=e.siteDescription;return i.a.createElement("header",{style:{background:"linear-gradient(to right, rgb(50, 150, 250), rgb(21, 119, 218))",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"1.45rem 1.0875rem 0.5rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,marginTop:"3rem",color:"#fff"}},t),i.a.createElement("h2",{style:{color:"#fff",fontSize:"1rem",fontWeight:400,opacity:.6,margin:"0.8rem 0 0 0"}},a)),i.a.createElement("div",{style:{borderTop:"calc(3vw + 30px) solid transparent",borderRight:"100vw solid #fff"}}))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var m=s,d=(a(160),function(e){var t=e.title,a=e.subtitle,r=e.children;return i.a.createElement(c.b,{query:"2363664672",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:t||e.site.siteMetadata.title,siteDescription:a||e.site.siteMetadata.description}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:720,minHeight:"calc(100vh - 20.3rem)",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",{style:{padding:"3rem 0"}},r)),i.a.createElement("footer",null,i.a.createElement("div",{style:{maxWidth:"720px",margin:"0 auto",padding:"2.8rem 1.45rem"}},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"footer-col"},i.a.createElement("h1",{style:{fontSize:"1rem",margin:"0 0 0.7rem 0"}},"公司"),i.a.createElement("a",{href:"https://dingtalk.com"},"官网首页"),i.a.createElement("a",{href:"https://tms.dingtalk.com/markets/dingtalk/download"},"产品下载"),i.a.createElement("a",{href:"https://im.dingtalk.com"},"钉钉网页版"),i.a.createElement("a",{href:"https://job.alibaba.com/zhaopin/positionList.htm?spm=a3140.8736650.2231772.14.7f153a1aMgRYNR&keyWord=JXU5NDg5JXU5NDg5&_input_charset=UTF-8"},"工作机会")),i.a.createElement("div",{className:"footer-col"},i.a.createElement("h1",{style:{fontSize:"1rem",margin:"0 0 0.7rem 0"}},"团队"),i.a.createElement("a",{href:"/"},"博客"),i.a.createElement("a",{href:"https://github.com/dingtalk-dev"},"GitHub"))),i.a.createElement("p",{style:{color:"#7f8186",margin:0}},"© ",(new Date).getFullYear(),", Built with ❤️ by"," ",i.a.createElement("a",{href:"https://dingtalk.com"},"DingTalk")," Team"))))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-templates-post-js-b4dee009e0e53c77b299.js.map