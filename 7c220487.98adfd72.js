(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(126));const r={id:"how-to-add",title:"How to Add New Adaptor"},i={id:"adaptors/how-to-add",title:"How to Add New Adaptor",description:"## Scaffold",source:"@site/docs/adaptors/add-adaptor.md",permalink:"/docs-octopus/docs/adaptors/how-to-add",editUrl:"https://github.com/rancheredge/docs-octopus/edit/master/website/docs/adaptors/add-adaptor.md",sidebar:"docs",previous:{title:"AgentDevice Adaptor",permalink:"/docs-octopus/docs/adaptors/agent-device"},next:{title:"Monitoring Octopus",permalink:"/docs-octopus/docs/monitoring"}},c=[{value:"Scaffold",id:"scaffold",children:[]},{value:"Build management",id:"build-management",children:[]},{value:"Contributor workflow",id:"contributor-workflow",children:[]}],p={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"scaffold"},"Scaffold"),Object(o.b)("p",null,"Octopus provides a simple way to develop a new adaptor, with running ",Object(o.b)("inlineCode",{parentName:"p"},"make template-adaptor"),", get a scaffold under ",Object(o.b)("inlineCode",{parentName:"p"},"adaptors")," directory. The overlay of the scaffold is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"tree -d adaptors/<adaptor-name>\n\u251c\u2500\u2500 api                             ---  device model CRD\n\u2502   \u2514\u2500\u2500 v1alpha1                    ------  implement the logic*\n\u251c\u2500\u2500 bin                             ---  output of `go build`\n\u251c\u2500\u2500 cmd                             ---  command entry code\n\u2502   \u2514\u2500\u2500 <adaptor-name>              ------  implement the logic*\n\u251c\u2500\u2500 deploy                          ---  deployment manifest\n\u2502   \u251c\u2500\u2500 e2e                         ------  output of `kubectl kustomize` and demo cases\n\u2502   \u2514\u2500\u2500 manifests                   ------  overlay for kustomize\n\u251c\u2500\u2500 dist                            ---  output of `go test` and versioned deployment manifest\n\u251c\u2500\u2500 hack                            ---  bash scripts for make rules\n\u251c\u2500\u2500 pkg                             ---  core code\n\u2502   \u251c\u2500\u2500 adaptor\n\u2502   \u2514\u2500\u2500 <adaptor-name>              ------  implement the logic*\n\u2514\u2500\u2500 test                            ---  test code\n    \u251c\u2500\u2500 e2e\n    \u2514\u2500\u2500 integration\n")),Object(o.b)("h2",{id:"build-management"},"Build management"),Object(o.b)("p",null,"Adaptor follows the build management of Octopus, please view ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../octopus/develop.md"}),"Develop Octopus")," for more details. Same as Octopus, Adaptor's management process consists of several stages, a stage consists of several actions. For convenience, the name of the action also represents the current stage. The overall flow relationship of action looks as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"        generate -> mod -> lint -> build -> package -> deploy\n                                       \\ -> test -> verify -> e2e\n")),Object(o.b)("p",null,"Executing a stage for an Adaptor can run ",Object(o.b)("inlineCode",{parentName:"p"},"make adaptor <adatpor-name> <stage name>"),", for example, when executing the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," stage for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../adaptors/dummy"}),"dummy")," adaptor, please run ",Object(o.b)("inlineCode",{parentName:"p"},"make adaptor dummy test"),". To execute a stage will execute all actions in the previous sequence, if running ",Object(o.b)("inlineCode",{parentName:"p"},"make adaptor dummy test"),", it actually includes executing ",Object(o.b)("inlineCode",{parentName:"p"},"generate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mod"),", ",Object(o.b)("inlineCode",{parentName:"p"},"lint"),", ",Object(o.b)("inlineCode",{parentName:"p"},"build")," and ",Object(o.b)("inlineCode",{parentName:"p"},"test")," actions."),Object(o.b)("p",null,"To run an action by adding ",Object(o.b)("inlineCode",{parentName:"p"},"only")," command, for example, if only run ",Object(o.b)("inlineCode",{parentName:"p"},"build")," action, please use ",Object(o.b)("inlineCode",{parentName:"p"},"make adaptor <adatpor-name> build only"),"."),Object(o.b)("p",null,"Integrate with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rancher/dapper"}),Object(o.b)("inlineCode",{parentName:"a"},"dapper"))," via ",Object(o.b)("inlineCode",{parentName:"p"},"BY")," environment variable, for example, if only run ",Object(o.b)("inlineCode",{parentName:"p"},"build")," action via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rancher/dapper"}),Object(o.b)("inlineCode",{parentName:"a"},"dapper")),", please use ",Object(o.b)("inlineCode",{parentName:"p"},"BY=dapper make adaptor <adatpor-name> build only"),". "),Object(o.b)("h2",{id:"contributor-workflow"},"Contributor workflow"),Object(o.b)("p",null,"Contributing is welcome, please view ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../CONTRIBUTING.md"}),"CONTRIBUTING")," for more details."))}l.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),b=a,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||r;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);