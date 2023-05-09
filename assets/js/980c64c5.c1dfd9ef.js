"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(h,p(p({ref:t},i),{},{components:r})):a.createElement(h,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>i});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={sidebar_label:"ProductLauncher"},o="ProductLauncher class",u={unversionedId:"api/puppeteer.productlauncher",id:"version-20.1.2/api/puppeteer.productlauncher",title:"ProductLauncher class",description:"Describes a launcher - a class that is able to create and launch a browser instance.",source:"@site/versioned_docs/version-20.1.2/api/puppeteer.productlauncher.md",sourceDirName:"api",slug:"/api/puppeteer.productlauncher",permalink:"/api/puppeteer.productlauncher",draft:!1,tags:[],version:"20.1.2",frontMatter:{sidebar_label:"ProductLauncher"},sidebar:"api",previous:{title:"Product",permalink:"/api/puppeteer.product"},next:{title:"ProductLauncher.defaultArgs",permalink:"/api/puppeteer.productlauncher.defaultargs"}},c={},i=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],s={toc:i};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"productlauncher-class"}),"ProductLauncher class"),(0,a.kt)("p",null,"Describes a launcher - a class that is able to create and launch a browser instance."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class ProductLauncher\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductLauncher")," class."),(0,a.kt)("h2",n({},{id:"properties"}),"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"product"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.product"}),"Product")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.productlauncher.defaultargs"}),"defaultArgs(object)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.productlauncher.executablepath"}),"executablePath(channel)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.productlauncher.launch"}),"launch(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))))}d.isMDXComponent=!0}}]);