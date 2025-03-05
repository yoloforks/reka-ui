import{_ as u,c as m,aM as a,e as s,p as o,b as n,a3 as t,au as l,o as h}from"./chunks/framework.6UEeBrHH.js";const I=JSON.parse('{"title":"Visually Hidden","description":"Hides content from the screen in an accessible way.","frontmatter":{"title":"Visually Hidden","description":"Hides content from the screen in an accessible way.","sidebar":true},"headers":[{"level":2,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]},{"level":2,"title":"Basic example","slug":"basic-example","link":"#basic-example","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Root","slug":"root","link":"#root","children":[]}]},{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[]}],"relativePath":"docs/utilities/visually-hidden.md","filePath":"docs/utilities/visually-hidden.md","lastUpdated":1741142901000}'),y={name:"docs/utilities/visually-hidden.md"},g={name:"vue",class:"language-vue"},E={class:"shiki github-dark vp-code",tabindex:"0"},f={class:"line"},_={style:{color:"#85E89D"}},b={class:"line"},v={style:{color:"#85E89D"}},k={name:"vue",class:"language-vue"},w={class:"shiki github-dark vp-code",tabindex:"0"},C={class:"line"},T={style:{color:"#85E89D"}},x={style:{color:"#85E89D"}};function A(V,e,P,S,q,D){const p=l("Description"),d=l("Highlights"),r=l("link-hover-card-content"),i=l("link-hover-card"),c=l("PropsTable");return h(),m("div",null,[e[22]||(e[22]=a('<h1 id="visually-hidden" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Visually Hidden <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#visually-hidden" aria-label="Permalink to &quot;Visually Hidden&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),s(p,null,{default:o(()=>e[0]||(e[0]=[t(" Hides content from the screen in an accessible way. ")])),_:1}),s(d,{features:["Visually hides content while preserving it for assistive technology."]}),e[23]||(e[23]=a('<h2 id="anatomy" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Anatomy <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Import the component.</p>',2)),n("div",g,[e[11]||(e[11]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[12]||(e[12]=n("span",{class:"lang"},"vue",-1)),n("pre",E,[n("code",null,[e[7]||(e[7]=a(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VisuallyHidden } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),n("span",f,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",_,[s(i,{name:"VisuallyHidden"},{content:o(({})=>[s(r,{title:"props",data:`[
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
    "name": "feature",
    "description": "",
    "type": "\\"focusable\\" | \\"fully-hidden\\"",
    "required": false,
    "default": "\\"focusable\\""
  }
]`})]),default:o(()=>[e[1]||(e[1]=t("VisuallyHidden"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[8]||(e[8]=a(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),n("span",b,[e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",v,[s(i,{name:"VisuallyHidden"},{content:o(({})=>[s(r,{title:"props",data:`[
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
    "name": "feature",
    "description": "",
    "type": "\\"focusable\\" | \\"fully-hidden\\"",
    "required": false,
    "default": "\\"focusable\\""
  }
]`})]),default:o(()=>[e[4]||(e[4]=t("VisuallyHidden"))]),_:1})]),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[9]||(e[9]=t(`
`)),e[10]||(e[10]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[24]||(e[24]=a('<h2 id="basic-example" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Basic example <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#basic-example" aria-label="Permalink to &quot;Basic example&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Use the visually hidden primitive.</p>',2)),n("div",k,[e[20]||(e[20]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[21]||(e[21]=n("span",{class:"lang"},"vue",-1)),n("pre",w,[n("code",null,[e[18]||(e[18]=a(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VisuallyHidden } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { GearIcon } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@radix-icons/vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">GearIcon</span><span style="color:#E1E4E8;"> /&gt;</span></span>
`,16)),n("span",C,[e[15]||(e[15]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",T,[s(i,{name:"VisuallyHidden"},{content:o(({})=>[s(r,{title:"props",data:`[
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
    "name": "feature",
    "description": "",
    "type": "\\"focusable\\" | \\"fully-hidden\\"",
    "required": false,
    "default": "\\"focusable\\""
  }
]`})]),default:o(()=>[e[13]||(e[13]=t("VisuallyHidden"))]),_:1})]),e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},">Settings</",-1)),n("span",x,[s(i,{name:"VisuallyHidden"},{content:o(({})=>[s(r,{title:"props",data:`[
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
    "name": "feature",
    "description": "",
    "type": "\\"focusable\\" | \\"fully-hidden\\"",
    "required": false,
    "default": "\\"focusable\\""
  }
]`})]),default:o(()=>[e[14]||(e[14]=t("VisuallyHidden"))]),_:1})]),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[19]||(e[19]=a(`
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>`,4))])])]),e[25]||(e[25]=a('<h2 id="api-reference" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">API Reference <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><h3 id="root" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Root <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#root" aria-label="Permalink to &quot;Root&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>Anything you put inside this component will be hidden from the screen but will be announced by screen readers.</p>',3)),s(c,{data:[{name:"as",type:"string | Component",default:"span",description:"<p>The element or component this component should render as. Can be overwrite by <Code>asChild</Code></p>"},{name:"asChild",required:!1,type:"boolean",default:"false",description:`<p>Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more details.</p>`}]}),e[26]||(e[26]=a('<h2 id="accessibility" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Accessibility <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>This is useful in certain scenarios as an alternative to traditional labelling with <code>aria-label</code> or <code>aria-labelledby</code>.</p>',2))])}const F=u(y,[["render",A]]);export{I as __pageData,F as default};
