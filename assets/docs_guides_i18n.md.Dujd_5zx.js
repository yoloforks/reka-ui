import{_ as u,c as y,aM as p,e as s,p as o,b as n,a3 as t,au as r,o as E}from"./chunks/framework.DhAtJbM3.js";const ze=JSON.parse('{"title":"Internationalization (RTL)","description":"Reka UI support both LTR/RTL directions. Learn more about how to integrate internationalization.","frontmatter":{"title":"Internationalization (RTL)","description":"Reka UI support both LTR/RTL directions. Learn more about how to integrate internationalization.","sidebar":true},"headers":[{"level":2,"title":"Multi-Direction Support","slug":"multi-direction-support","link":"#multi-direction-support","children":[{"level":3,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"RTL","slug":"rtl","link":"#rtl","children":[]},{"level":3,"title":"Dynamic Direction","slug":"dynamic-direction","link":"#dynamic-direction","children":[]}]},{"level":2,"title":"Internationalization","slug":"internationalization","link":"#internationalization","children":[{"level":3,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"Language Selector","slug":"language-selector","link":"#language-selector","children":[]}]}],"relativePath":"docs/guides/i18n.md","filePath":"docs/guides/i18n.md","lastUpdated":1741141824000}'),m={name:"docs/guides/i18n.md"},h={name:"vue",class:"language-vue"},g={class:"shiki github-dark vp-code",tabindex:"0"},f={class:"line"},b={style:{color:"#85E89D"}},v={class:"line"},F={style:{color:"#85E89D"}},w={name:"vue",class:"language-vue"},C={class:"shiki github-dark vp-code",tabindex:"0"},T={class:"line"},q={style:{color:"#85E89D"}},B={class:"line"},S={style:{color:"#85E89D"}},k={name:"vue",class:"language-vue"},x={class:"shiki github-dark vp-code",tabindex:"0"},_={class:"line"},I={style:{color:"#85E89D"}},A={class:"line"},D={style:{color:"#85E89D"}},V={name:"vue",class:"language-vue"},P={class:"shiki github-dark vp-code",tabindex:"0"},R={class:"line"},L={style:{color:"#85E89D"}},M={class:"line"},j={style:{color:"#85E89D"}},U={class:"line"},N={style:{color:"#85E89D"}},O={class:"line"},z={style:{color:"#85E89D"}},W={class:"line"},$={style:{color:"#85E89D"}},G={class:"line"},H={style:{color:"#85E89D"}},K={class:"line"},J={style:{color:"#85E89D"}},Q={class:"line"},X={style:{color:"#85E89D"}},Y={class:"line"},Z={style:{color:"#85E89D"}},ee={class:"line"},ne={style:{color:"#85E89D"}},se={class:"line"},oe={style:{color:"#85E89D"}},te={class:"line"},ae={style:{color:"#85E89D"}},le={class:"line"},pe={style:{color:"#85E89D"}},re={class:"line"},ie={style:{color:"#85E89D"}},de={class:"line"},ce={style:{color:"#85E89D"}},ue={class:"line"},ye={style:{color:"#85E89D"}},Ee={class:"line"},me={style:{color:"#85E89D"}},he={class:"line"},ge={style:{color:"#85E89D"}},fe={class:"line"},be={style:{color:"#85E89D"}},ve={class:"line"},Fe={style:{color:"#85E89D"}},we={class:"line"},Ce={style:{color:"#85E89D"}},Te={class:"line"},qe={style:{color:"#85E89D"}},Be={class:"line"},Se={style:{color:"#85E89D"}},ke={class:"line"},xe={style:{color:"#85E89D"}},_e={class:"line"},Ie={style:{color:"#85E89D"}},Ae={class:"line"},De={style:{color:"#85E89D"}},Ve={class:"line"},Pe={style:{color:"#85E89D"}};function Re(Le,e,Me,je,Ue,Ne){const d=r("Description"),a=r("link-hover-card-content"),l=r("link-hover-card"),i=r("InstallationTabs"),c=r("Callout");return E(),y("div",null,[e[179]||(e[179]=p('<h1 id="internationalization-rtl" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Internationalization &amp; RTL <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#internationalization-rtl" aria-label="Permalink to &quot;Internationalization &amp; RTL&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),s(d,null,{default:o(()=>e[0]||(e[0]=[t(" Reka UI support both LTR/RTL directions. Learn more about how to integrate internationalization. ")])),_:1}),e[180]||(e[180]=p('<h2 id="multi-direction-support" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Multi-Direction Support <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#multi-direction-support" aria-label="Permalink to &quot;Multi-Direction Support&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><h3 id="introduction" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Introduction <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>This documentation provides guidance on how to utilize multi-directional support in Reka UI with SSR support. Reka UI rely on <a href="https://floating-ui.com/" target="_blank" rel="noreferrer"><code>Floating UI</code></a> to position floating elements, which requires to be fed the current direction of the web app.</p><p>Reka components are LTR by default, but you are in control of what direction (only LTR, RTL, or both) you want to support. This section provides best practices to easily support RTL direction.</p><h3 id="rtl" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">RTL <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#rtl" aria-label="Permalink to &quot;RTL&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p><a href="./docs/utilities/config-provider"><code>ConfigProvider</code></a> is a wrapper component to provide global configurations, including the directionality of the web app.</p><p>When creating localized apps that require right-to-left (RTL) reading direction, you need to wrap your application with the <code>ConfigProvider</code> component to ensure all of the primitives adjust their behavior based on the <code>dir</code> prop.</p><p>To make all Reka UI RTL, wrap your entire App in <code>ConfigProvider</code> and pass the <code>dir</code> prop with the value <code>rtl</code>.</p><p>Add the following code to your <code>app.vue</code> or main layout component:</p>',9)),n("div",h,[e[14]||(e[14]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[15]||(e[15]=n("span",{class:"lang"},"vue",-1)),n("pre",g,[n("code",null,[e[10]||(e[10]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),n("span",f,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",b,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[1]||(e[1]=t("ConfigProvider"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#B392F0"}}," dir",-1)),e[4]||(e[4]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[5]||(e[5]=n("span",{style:{color:"#9ECBFF"}},'"rtl"',-1)),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[11]||(e[11]=p(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),n("span",v,[e[8]||(e[8]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",F,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[7]||(e[7]=t("ConfigProvider"))]),_:1})]),e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[12]||(e[12]=t(`
`)),e[13]||(e[13]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[181]||(e[181]=p('<p>All Reka components that are wrapped in the provider inherit the <code>dir</code> attribute.</p><h3 id="dynamic-direction" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Dynamic Direction <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#dynamic-direction" aria-label="Permalink to &quot;Dynamic Direction&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>To dynamically change the direction of Reka UI, we could leverage the <a href="https://vueuse.org/core/useTextDirection/" target="_blank" rel="noreferrer"><code>useTextDirection</code></a> composable and combine it with our <code>ConfigProvider</code>.</p><p>But first, we need to install the <a href="https://vueuse.org/" target="_blank" rel="noreferrer"><code>@vueuse/core</code></a> package.</p>',4)),s(i,{value:"@vueuse/core"},{npm:o(()=>e[16]||(e[16]=[n("div",{name:"npm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," npm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," @vueuse/core")])])])],-1)])),pnpm:o(()=>e[17]||(e[17]=[n("div",{name:"pnpm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," pnpm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," @vueuse/core")])])])],-1)])),yarn:o(()=>e[18]||(e[18]=[n("div",{name:"yarn",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," yarn"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," @vueuse/core")])])])],-1)])),bun:o(()=>e[19]||(e[19]=[n("div",{name:"bun",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," bun"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," @vueuse/core")])])])],-1)])),_:1}),e[182]||(e[182]=n("p",null,"Then in your root Vue file:",-1)),n("div",w,[e[30]||(e[30]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[31]||(e[31]=n("span",{class:"lang"},"vue",-1)),n("pre",C,[n("code",null,[e[26]||(e[26]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { computed } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useTextDirection } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> textDirection</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useTextDirection</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dir</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> textDirection.value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rtl&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;rtl&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;ltr&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,20)),n("span",T,[e[21]||(e[21]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",q,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[20]||(e[20]=t("ConfigProvider"))]),_:1})]),e[22]||(e[22]=p('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">dir</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">dir</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',7))]),e[27]||(e[27]=p(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),n("span",B,[e[24]||(e[24]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",S,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[23]||(e[23]=t("ConfigProvider"))]),_:1})]),e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[28]||(e[28]=t(`
`)),e[29]||(e[29]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[183]||(e[183]=n("p",null,[t("To support SSR - when the server has no access to the "),n("code",null,"html"),t(" and its direction, set "),n("code",null,"initialValue"),t(" in "),n("code",null,"useTextDirection"),t(".")],-1)),n("div",k,[e[42]||(e[42]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[43]||(e[43]=n("span",{class:"lang"},"vue",-1)),n("pre",x,[n("code",null,[e[38]||(e[38]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useTextDirection } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> textDirection</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useTextDirection</span><span style="color:#E1E4E8;">({ initialValue: </span><span style="color:#9ECBFF;">&#39;rtl&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dir</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> textDirection.value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rtl&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;rtl&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;ltr&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,18)),n("span",_,[e[33]||(e[33]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",I,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[32]||(e[32]=t("ConfigProvider"))]),_:1})]),e[34]||(e[34]=p('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">dir</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">dir</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',7))]),e[39]||(e[39]=p(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),n("span",A,[e[36]||(e[36]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",D,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[35]||(e[35]=t("ConfigProvider"))]),_:1})]),e[37]||(e[37]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[40]||(e[40]=t(`
`)),e[41]||(e[41]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),s(c,{type:"info"},{default:o(()=>e[44]||(e[44]=[n("p",null,[t("The "),n("code",null,"dir"),t(" prop doesn't support "),n("code",null,"auto"),t(" as a value, so we need an intermediate Ref to explicitly define the direction.")],-1)])),_:1}),e[184]||(e[184]=p('<p><code>textDirection</code> is a <a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank" rel="noreferrer"><code>Ref</code></a>, and by changing the value of it to either &quot;ltr&quot; or &quot;rtl&quot;, the <code>dir</code> attribute on the <code>html</code> tag changes as well.</p><h2 id="internationalization" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Internationalization <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#internationalization" aria-label="Permalink to &quot;Internationalization&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Some languages are written from LTR and others are written in RTL. In a multi-language web app, you need to configure directionality alongside the translations. This is a simplified guide on how to achieve that using <code>reka-ui</code> primitives.</p><p>But first, let&#39;s install some required packages.</p><h3 id="dependencies" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Dependencies <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>We rely on <a href="https://vue-i18n.intlify.dev/" target="_blank" rel="noreferrer"><code>VueI18n</code></a> to manage different translations we want to support.</p>',6)),s(i,{value:"vue-i18n@latest"},{npm:o(()=>e[45]||(e[45]=[n("div",{name:"npm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," npm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," vue-i18n@latest")])])])],-1)])),pnpm:o(()=>e[46]||(e[46]=[n("div",{name:"pnpm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," pnpm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," vue-i18n@latest")])])])],-1)])),yarn:o(()=>e[47]||(e[47]=[n("div",{name:"yarn",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," yarn"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," vue-i18n@latest")])])])],-1)])),bun:o(()=>e[48]||(e[48]=[n("div",{name:"bun",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," bun"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," vue-i18n@latest")])])])],-1)])),_:1}),e[185]||(e[185]=p(`<p>Go ahead and add some translations for the word &quot;hello&quot; in different languages at <code>main.ts</code>.</p><div name="ts" class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createI18n } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue-i18n&#39;</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> messages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  en: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    hello: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  fa: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    hello: </span><span style="color:#9ECBFF;">&#39;درود&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ar: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    hello: </span><span style="color:#9ECBFF;">&#39;مرحبا&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ja: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    hello: </span><span style="color:#9ECBFF;">&#39;こんにちは&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> i18n</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createI18n</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  legacy: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// you must set \`false\` to use the Composition API</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  locale: </span><span style="color:#9ECBFF;">&#39;en&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// set default locale</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  availableLocales: [</span><span style="color:#9ECBFF;">&#39;en&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;fa&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;ar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;ja&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  messages,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(i18n)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="language-selector" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Language Selector <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#language-selector" aria-label="Permalink to &quot;Language Selector&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>After setting the translations and adding the <code>vue-i18n</code> plugin, we need a language selector in your <code>app.vue</code>. By changing the language using this <code>reka-ui</code> select primitive:</p><ol><li>The translations are reactive to the new language</li><li>The direction of the web app is reactive to the new language</li></ol>`,5)),n("div",V,[e[177]||(e[177]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[178]||(e[178]=n("span",{class:"lang"},"vue",-1)),n("pre",P,[n("code",null,[e[136]||(e[136]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider, SelectContent, SelectGroup, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport, } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useTextDirection } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useI18n } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue-i18n&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#B392F0;"> LanguageInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  label</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  dir</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;ltr&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;rtl&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dir</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useTextDirection</span><span style="color:#E1E4E8;">({ initialValue: </span><span style="color:#9ECBFF;">&#39;ltr&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">locale</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useI18n</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> selectedLanguage</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> languages</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> LanguageInfo</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&#39;English&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;en&#39;</span><span style="color:#E1E4E8;">, dir: </span><span style="color:#9ECBFF;">&#39;ltr&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&#39;Persian&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;fa&#39;</span><span style="color:#E1E4E8;">, dir: </span><span style="color:#9ECBFF;">&#39;rtl&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&#39;Arabic&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;ar&#39;</span><span style="color:#E1E4E8;">, dir: </span><span style="color:#9ECBFF;">&#39;rtl&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&#39;Japanese&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;ja&#39;</span><span style="color:#E1E4E8;">, dir: </span><span style="color:#9ECBFF;">&#39;ltr&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> selectLanguage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newLanguage</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> langInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> languages.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> item.value </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> newLanguage)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">langInfo)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  dir.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> langInfo.dir</span></span>
<span class="line"><span style="color:#E1E4E8;">  locale.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> langInfo.value</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,74)),n("span",R,[e[50]||(e[50]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",L,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[49]||(e[49]=t("ConfigProvider"))]),_:1})]),e[51]||(e[51]=p('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">dir</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">dir</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',7))]),e[137]||(e[137]=p(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;flex flex-col max-w-[1400px] mx-auto gap-y-[8rem] justify-center items-center p-10&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-2xl&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        👋 {{ </span><span style="color:#B392F0;">$t</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-2xl&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        HTML is in &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-bold text-purple-500&quot;</span><span style="color:#E1E4E8;">&gt;{{ dir }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt; mode</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
`,17)),n("span",M,[e[53]||(e[53]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",j,[s(l,{name:"SelectRoot"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:o(()=>[e[52]||(e[52]=t("SelectRoot"))]),_:1})])]),e[138]||(e[138]=p(`
<span class="line"><span style="color:#B392F0;">        v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">selectedLanguage</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        @</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">model-value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">selectLanguage</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
`,7)),n("span",U,[e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",N,[s(l,{name:"SelectTrigger"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:o(()=>[e[54]||(e[54]=t("SelectTrigger"))]),_:1})])]),e[139]||(e[139]=p(`
<span class="line"><span style="color:#B392F0;">          class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inline-flex min-w-[160px] items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Customize options&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
`,7)),n("span",O,[e[57]||(e[57]=n("span",{style:{color:"#E1E4E8"}},"          <",-1)),n("span",z,[s(l,{name:"SelectValue"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(a,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:o(()=>[e[56]||(e[56]=t("SelectValue"))]),_:1})]),e[58]||(e[58]=n("span",{style:{color:"#B392F0"}}," placeholder",-1)),e[59]||(e[59]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[60]||(e[60]=n("span",{style:{color:"#9ECBFF"}},'"Select a language..."',-1)),e[61]||(e[61]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[140]||(e[140]=p(`
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">Icon</span></span>
<span class="line"><span style="color:#B392F0;">            icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radix-icons:chevron-down&quot;</span></span>
<span class="line"><span style="color:#B392F0;">            class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;h-3.5 w-3.5&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          /&gt;</span></span>
`,9)),n("span",W,[e[63]||(e[63]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",$,[s(l,{name:"SelectTrigger"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:o(()=>[e[62]||(e[62]=t("SelectTrigger"))]),_:1})]),e[64]||(e[64]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[141]||(e[141]=t(`
`)),e[142]||(e[142]=n("span",{class:"line"},null,-1)),e[143]||(e[143]=t(`
`)),n("span",G,[e[66]||(e[66]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",H,[s(l,{name:"SelectPortal"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:o(()=>[e[65]||(e[65]=t("SelectPortal"))]),_:1})]),e[67]||(e[67]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[144]||(e[144]=t(`
`)),n("span",K,[e[69]||(e[69]=n("span",{style:{color:"#E1E4E8"}},"          <",-1)),n("span",J,[s(l,{name:"SelectContent"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:o(()=>[e[68]||(e[68]=t("SelectContent"))]),_:1})])]),e[145]||(e[145]=p(`
<span class="line"><span style="color:#B392F0;">            class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">side-offset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &gt;</span></span>
`,7)),n("span",Q,[e[71]||(e[71]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",X,[s(l,{name:"SelectScrollUpButton"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[70]||(e[70]=t("SelectScrollUpButton"))]),_:1})])]),e[146]||(e[146]=p(`
<span class="line"><span style="color:#B392F0;">              class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              &lt;</span><span style="color:#85E89D;">Icon</span><span style="color:#B392F0;"> icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radix-icons:chevron-up&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
`,7)),n("span",Y,[e[73]||(e[73]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",Z,[s(l,{name:"SelectScrollUpButton"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[72]||(e[72]=t("SelectScrollUpButton"))]),_:1})]),e[74]||(e[74]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[147]||(e[147]=t(`
`)),e[148]||(e[148]=n("span",{class:"line"},null,-1)),e[149]||(e[149]=t(`
`)),n("span",ee,[e[76]||(e[76]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",ne,[s(l,{name:"SelectViewport"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:o(()=>[e[75]||(e[75]=t("SelectViewport"))]),_:1})]),e[77]||(e[77]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[78]||(e[78]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[79]||(e[79]=n("span",{style:{color:"#9ECBFF"}},'"p-[5px]"',-1)),e[80]||(e[80]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[150]||(e[150]=t(`
`)),n("span",se,[e[82]||(e[82]=n("span",{style:{color:"#E1E4E8"}},"              <",-1)),n("span",oe,[s(l,{name:"SelectLabel"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:o(()=>[e[81]||(e[81]=t("SelectLabel"))]),_:1})]),e[83]||(e[83]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[84]||(e[84]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[85]||(e[85]=n("span",{style:{color:"#9ECBFF"}},'"px-[25px] text-xs leading-[25px] text-mauve11"',-1)),e[86]||(e[86]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[151]||(e[151]=t(`
`)),e[152]||(e[152]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                Languages")],-1)),e[153]||(e[153]=t(`
`)),n("span",te,[e[88]||(e[88]=n("span",{style:{color:"#E1E4E8"}},"              </",-1)),n("span",ae,[s(l,{name:"SelectLabel"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:o(()=>[e[87]||(e[87]=t("SelectLabel"))]),_:1})]),e[89]||(e[89]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[154]||(e[154]=t(`
`)),n("span",le,[e[91]||(e[91]=n("span",{style:{color:"#E1E4E8"}},"              <",-1)),n("span",pe,[s(l,{name:"SelectGroup"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[90]||(e[90]=t("SelectGroup"))]),_:1})]),e[92]||(e[92]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[155]||(e[155]=t(`
`)),n("span",re,[e[94]||(e[94]=n("span",{style:{color:"#E1E4E8"}},"                <",-1)),n("span",ie,[s(l,{name:"SelectItem"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:o(()=>[e[93]||(e[93]=t("SelectItem"))]),_:1})])]),e[156]||(e[156]=p(`
<span class="line"><span style="color:#F97583;">                  v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(option, index) </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> languages</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  :</span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#B392F0;">                  class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">option.value</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &gt;</span></span>
`,11)),n("span",de,[e[96]||(e[96]=n("span",{style:{color:"#E1E4E8"}},"                  <",-1)),n("span",ce,[s(l,{name:"SelectItemIndicator"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[95]||(e[95]=t("SelectItemIndicator"))]),_:1})]),e[97]||(e[97]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[98]||(e[98]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[99]||(e[99]=n("span",{style:{color:"#9ECBFF"}},'"absolute left-0 w-[25px] inline-flex items-center justify-center"',-1)),e[100]||(e[100]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[157]||(e[157]=p(`
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">Icon</span><span style="color:#B392F0;"> icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radix-icons:check&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
`,3)),n("span",ue,[e[102]||(e[102]=n("span",{style:{color:"#E1E4E8"}},"                  </",-1)),n("span",ye,[s(l,{name:"SelectItemIndicator"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[101]||(e[101]=t("SelectItemIndicator"))]),_:1})]),e[103]||(e[103]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[158]||(e[158]=t(`
`)),n("span",Ee,[e[105]||(e[105]=n("span",{style:{color:"#E1E4E8"}},"                  <",-1)),n("span",me,[s(l,{name:"SelectItemText"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[104]||(e[104]=t("SelectItemText"))]),_:1})]),e[106]||(e[106]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[159]||(e[159]=t(`
`)),e[160]||(e[160]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    {{ option.label }}")],-1)),e[161]||(e[161]=t(`
`)),n("span",he,[e[108]||(e[108]=n("span",{style:{color:"#E1E4E8"}},"                  </",-1)),n("span",ge,[s(l,{name:"SelectItemText"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[107]||(e[107]=t("SelectItemText"))]),_:1})]),e[109]||(e[109]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[162]||(e[162]=t(`
`)),n("span",fe,[e[111]||(e[111]=n("span",{style:{color:"#E1E4E8"}},"                </",-1)),n("span",be,[s(l,{name:"SelectItem"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:o(()=>[e[110]||(e[110]=t("SelectItem"))]),_:1})]),e[112]||(e[112]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[163]||(e[163]=t(`
`)),n("span",ve,[e[114]||(e[114]=n("span",{style:{color:"#E1E4E8"}},"              </",-1)),n("span",Fe,[s(l,{name:"SelectGroup"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[113]||(e[113]=t("SelectGroup"))]),_:1})]),e[115]||(e[115]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[164]||(e[164]=t(`
`)),n("span",we,[e[117]||(e[117]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",Ce,[s(l,{name:"SelectViewport"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:o(()=>[e[116]||(e[116]=t("SelectViewport"))]),_:1})]),e[118]||(e[118]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[165]||(e[165]=t(`
`)),e[166]||(e[166]=n("span",{class:"line"},null,-1)),e[167]||(e[167]=t(`
`)),n("span",Te,[e[120]||(e[120]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",qe,[s(l,{name:"SelectScrollDownButton"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[119]||(e[119]=t("SelectScrollDownButton"))]),_:1})])]),e[168]||(e[168]=p(`
<span class="line"><span style="color:#B392F0;">              class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">              &lt;</span><span style="color:#85E89D;">Icon</span><span style="color:#B392F0;"> icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radix-icons:chevron-down&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
`,7)),n("span",Be,[e[122]||(e[122]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",Se,[s(l,{name:"SelectScrollDownButton"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:o(()=>[e[121]||(e[121]=t("SelectScrollDownButton"))]),_:1})]),e[123]||(e[123]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[169]||(e[169]=t(`
`)),n("span",ke,[e[125]||(e[125]=n("span",{style:{color:"#E1E4E8"}},"          </",-1)),n("span",xe,[s(l,{name:"SelectContent"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:o(()=>[e[124]||(e[124]=t("SelectContent"))]),_:1})]),e[126]||(e[126]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[170]||(e[170]=t(`
`)),n("span",_e,[e[128]||(e[128]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",Ie,[s(l,{name:"SelectPortal"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:o(()=>[e[127]||(e[127]=t("SelectPortal"))]),_:1})]),e[129]||(e[129]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[171]||(e[171]=t(`
`)),n("span",Ae,[e[131]||(e[131]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",De,[s(l,{name:"SelectRoot"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:o(()=>[e[130]||(e[130]=t("SelectRoot"))]),_:1})]),e[132]||(e[132]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[172]||(e[172]=t(`
`)),e[173]||(e[173]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[174]||(e[174]=t(`
`)),n("span",Ve,[e[134]||(e[134]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",Pe,[s(l,{name:"ConfigProvider"},{content:o(({})=>[s(a,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),s(a,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:o(()=>[e[133]||(e[133]=t("ConfigProvider"))]),_:1})]),e[135]||(e[135]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[175]||(e[175]=t(`
`)),e[176]||(e[176]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const We=u(m,[["render",Re]]);export{ze as __pageData,We as default};
