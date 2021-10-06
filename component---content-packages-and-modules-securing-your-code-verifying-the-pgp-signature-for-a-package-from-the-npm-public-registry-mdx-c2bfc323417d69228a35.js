(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{LpH1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a,r=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("O6H6"),l={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:l},p=o.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To ensure the integrity of a package version you download from the npm public registry, you can manually verify the ",Object(i.b)("a",{parentName:"p",href:"about-pgp-signatures-for-packages-in-the-public-registry"},"PGP signature")," of the package."),Object(i.b)(c,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Since fully verifying signatures on Keybase requires rechecking proofs (which requires network activity) and is therefore expensive, we recommend only verifying signatures if it is absolutely necessary -- for example, when verifying a deploy artifact, or when initially storing a package in your cache.")),Object(i.b)("h2",null,"Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install Keybase from ",Object(i.b)("a",{parentName:"li",href:"https://keybase.io/download"},"https://keybase.io/download")),Object(i.b)("li",{parentName:"ol"},"Create a Keybase account on ",Object(i.b)("a",{parentName:"li",href:"https://keybase.io"},"https://keybase.io")),Object(i.b)("li",{parentName:"ol"},'Follow "',Object(i.b)("a",{parentName:"li",href:"https://keybase.io/npmregistry"},"npmregistry"),'" on Keybase.'),Object(i.b)("li",{parentName:"ol"},"Download a local copy of the npm public registry's ",Object(i.b)("a",{parentName:"li",href:"https://keybase.io/npmregistry/pgp_keys.asc"},"public PGP key"),".")),Object(i.b)("h2",null,"Verifying npm signatures for the public registry"),Object(i.b)(c,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The following steps use version 1.4.3 of the ",Object(i.b)("inlineCode",{parentName:"p"},"light-cycle")," package as an example.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, fetch the signature for the package version you want and save it in a file:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"$ http GET https://registry.npmjs.org/light-cycle | json \"versions['1.4.3'].dist.npm-signature\" > sig-to-check\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the integrity field for that version (example below includes response):"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"$ http GET https://registry.npmjs.org/light-cycle | json \"versions['1.4.3'].dist.integrity\"\n")),Object(i.b)("p",{parentName:"li"},"Example response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"sha512-sFcuivsDZ99fY0TbvuRC6CDXB8r/ylafjJAMnbSF0y4EMM1/1DtQo40G2WKz1rBbyiz4SLAc3Wa6yZyC4XSGOQ==\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Construct the string that ties the unique package name and version to the integrity string (example below includes response):"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"$ keybase pgp verify --signed-by npmregistry -d sig-to-check -m 'light-cycle@1.4.3:sha512-sFcuivsDZ99fY0TbvuRC6CDXB8r/ylafjJAMnbSF0y4EMM1/1DtQo40G2WKz1rBbyiz4SLAc3Wa6yZyC4XSGOQ=='\n")),Object(i.b)("p",{parentName:"li"},"Example response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'▶ INFO Identifying npmregistry\n✔ <tracked> public key fingerprint: 0963 1802 8A2B 58C8 4929 D8E1 3D4D 5B12 0276 566A\nYou last followed npmregistry on 2018-04-10 21:21:57 PDT\n✔ <tracked> admin of DNS zone npmjs.com: found TXT entry keybase-site-verification=iK3pjpRBkv-CIJ4PHtWL4TTcFXMpPiwPynatKl3oWO4\n✔ <tracked> "npmjs" on twitter: https://twitter.com/npmjs/status/981288548845240320 [cached 2018-04-12 13:18:31 PDT; but got a retryable error (API network error: Get https://twitter.com/npmjs/status/981288548845240320: net/http: request canceled (Client.Timeout exceeded while awaiting headers) (code=170)) this time around]\n✔ <tracked> admin of DNS zone npmjs.org: found TXT entry keybase-site-verification=Ls8jN55i6KesjiX91Ck79bUZ17eA-iohmw2jJFM16xc\nSignature verified. Signed by npmregistry 7 minutes ago (2018-04-13 15:00:37 -0700 PDT).\nPGP Fingerprint: 096318028a2b58c84929d8e13d4d5b120276566a.\n')))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),r=n("u9kb"),i=n("aOgs"),o=n("q1tI"),l=n.n(o),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return l.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var y=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return l.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var v=k,E=n("MfeC");function w(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(l.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(r.i,{overlay:e.overlay},l.a.createElement(r.i.Button,null,o.variant.title),l.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=w,x=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,j=o.title,k=o.description,w=o.status,P=o.source,I=o.additionalContributors,G=void 0===I?[]:I,M=E.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:y,Screenshot:g.a}},l.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:j,description:k}),l.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(r.e,{display:["none",null,null,"block"]},l.a.createElement(h.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(r.e,null,l.a.createElement(r.e,null,l.a.createElement(r.m,{as:"h1"},j),k))),null!=M?l.a.createElement(S,null,l.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?l.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(v,{items:n.tableOfContents.items})):null,l.a.createElement(D,null,w||P?l.a.createElement(r.k,{mb:3,alignItems:"center"},w?l.a.createElement(O.a,{status:w}):null,l.a.createElement(r.e,{mx:"auto"}),P?l.a.createElement(f.a,{href:P}):null):null,n.tableOfContents.items?l.a.createElement(r.e,{display:["block",null,"none"],mb:3},l.a.createElement(r.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(r.r,{icon:i.b,mr:2}):l.a.createElement(r.r,{icon:i.c,mr:2}),"Table of contents"),l.a.createElement(r.e,{pt:1},l.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(G.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-securing-your-code-verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry-mdx-c2bfc323417d69228a35.js.map