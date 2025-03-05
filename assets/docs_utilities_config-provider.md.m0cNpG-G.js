import{_ as y,c as h,aM as r,e as o,p as s,b as n,a3 as a,au as i,o as g}from"./chunks/framework.BvEsjwOO.js";const W=JSON.parse('{"title":"Config Provider","description":"Wraps your app to provide global configurations.","frontmatter":{"title":"Config Provider","description":"Wraps your app to provide global configurations.","sidebar":true},"headers":[{"level":2,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Config Provider","slug":"config-provider-1","link":"#config-provider-1","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Hydration issue (Vue < 3.5)","slug":"hydration-issue-vue-3-5","link":"#hydration-issue-vue-3-5","children":[]}],"relativePath":"docs/utilities/config-provider.md","filePath":"docs/utilities/config-provider.md","lastUpdated":1741141490000}'),m={name:"docs/utilities/config-provider.md"},f={name:"vue",class:"language-vue"},E={class:"shiki github-dark vp-code",tabindex:"0"},b={class:"line"},v={style:{color:"#85E89D"}},_={class:"line"},T={style:{color:"#85E89D"}},k={name:"vue",class:"language-vue"},w={class:"shiki github-dark vp-code",tabindex:"0"},C={class:"line"},x={style:{color:"#85E89D"}},q={class:"line"},I={style:{color:"#85E89D"}},P={name:"vue",class:"language-vue"},F={class:"shiki github-dark vp-code",tabindex:"0"},A={class:"line"},S={style:{color:"#85E89D"}},B={class:"line"},D={style:{color:"#85E89D"}};function M(V,e,j,N,R,O){const p=i("Description"),d=i("Highlights"),t=i("link-hover-card-content"),l=i("link-hover-card"),c=i("PropsTable"),u=i("MethodsTable");return g(),h("div",null,[e[38]||(e[38]=r('<h1 id="config-provider" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Config Provider <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#config-provider" aria-label="Permalink to &quot;Config Provider&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(p,null,{default:s(()=>e[0]||(e[0]=[a(" Wraps your app to provide global configurations. ")])),_:1}),o(d,{features:["Enables all primitives to inherit global reading direction.","Enables changing the behavior of scroll body when setting body lock.","Much more controls to prevent layout shifts."]}),e[39]||(e[39]=r('<h2 id="anatomy" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Anatomy <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Import the component.</p>',2)),n("div",f,[e[11]||(e[11]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[12]||(e[12]=n("span",{class:"lang"},"vue",-1)),n("pre",E,[n("code",null,[e[7]||(e[7]=r(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),n("span",b,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",v,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[1]||(e[1]=a("ConfigProvider"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[8]||(e[8]=r(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),n("span",_,[e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",T,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[4]||(e[4]=a("ConfigProvider"))]),_:1})]),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[9]||(e[9]=a(`
`)),e[10]||(e[10]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[40]||(e[40]=r('<h2 id="api-reference" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">API Reference <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><h3 id="config-provider-1" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Config Provider <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#config-provider-1" aria-label="Permalink to &quot;Config Provider&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>When creating localized apps that require right-to-left (RTL) reading direction, you need to wrap your application with the <code>ConfigProvider</code> component to ensure all of the primitives adjust their behavior based on the <code>dir</code> prop.</p><p>You can also change the global behavior of <code>bodylock</code> for components such as <code>Alert</code>, <code>DropdownMenu</code> and etc to fit your layout to prevent any <a href="https://github.com/unovue/reka-ui/issues/385" target="_blank" rel="noreferrer">content shifts</a>.</p>',4)),o(c,{data:[{name:"dir",description:`<p>The global reading direction of your application. This will be inherited by all primitives.</p>
`,type:"'ltr' | 'rtl'",required:!1,default:"'ltr'"},{name:"locale",description:`<p>The global locale of your application. This will be inherited by all primitives.</p>
`,type:"string",required:!1,default:"'en'"},{name:"nonce",description:`<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>
`,type:"string",required:!1},{name:"scrollBody",description:`<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>
`,type:"boolean | ScrollBodyOption",required:!1,default:"true"},{name:"useId",description:`<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>
`,type:"(() => string)",required:!1}]}),o(u,{data:[{name:"useId",description:`<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>
`,type:"() => string"}]}),e[41]||(e[41]=r('<h2 id="example" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Example <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#example" aria-label="Permalink to &quot;Example&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Use the config provider.</p><p>Set global direction to <code>rtl</code>, and scroll body behavior to <code>false</code> (will not set any padding/margin).</p>',3)),n("div",k,[e[22]||(e[22]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[23]||(e[23]=n("span",{class:"lang"},"vue",-1)),n("pre",w,[n("code",null,[e[18]||(e[18]=r(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),n("span",C,[e[14]||(e[14]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",x,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[13]||(e[13]=a("ConfigProvider"))]),_:1})])]),e[19]||(e[19]=r(`
<span class="line"><span style="color:#B392F0;">    dir</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;rtl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :</span><span style="color:#B392F0;">scroll-body</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">false</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,9)),n("span",q,[e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",I,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[15]||(e[15]=a("ConfigProvider"))]),_:1})]),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[20]||(e[20]=a(`
`)),e[21]||(e[21]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[42]||(e[42]=r('<h2 id="hydration-issue-vue-3-5" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Hydration issue (Vue &lt; 3.5) <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#hydration-issue-vue-3-5" aria-label="Permalink to &quot;Hydration issue (Vue &lt; 3.5)&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>We expose a temporary workaround to allow current Nuxt (with version &gt;3.10) project fix the current hydration issue by using <a href="https://nuxt.com/docs/api/composables/use-id" target="_blank" rel="noreferrer"><code>useId</code></a> provided by Nuxt.</p><blockquote><p>Inspired by <a href="https://github.com/tailwindlabs/headlessui/pull/2959" target="_blank" rel="noreferrer">Headless UI</a></p></blockquote>',3)),n("div",P,[e[36]||(e[36]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[37]||(e[37]=n("span",{class:"lang"},"vue",-1)),n("pre",F,[n("code",null,[e[30]||(e[30]=r(`<span class="line"><span style="color:#6A737D;">&lt;!-- in Nuxt&#39;s app.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ConfigProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> useIdFunction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> useId</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,16)),n("span",A,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",S,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[24]||(e[24]=a("ConfigProvider"))]),_:1})]),e[26]||(e[26]=r('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">use-id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">useIdFunction</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',7))]),e[31]||(e[31]=a(`
`)),e[32]||(e[32]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    …")],-1)),e[33]||(e[33]=a(`
`)),n("span",B,[e[28]||(e[28]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",D,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
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
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[27]||(e[27]=a("ConfigProvider"))]),_:1})]),e[29]||(e[29]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[34]||(e[34]=a(`
`)),e[35]||(e[35]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const $=y(m,[["render",M]]);export{W as __pageData,$ as default};
