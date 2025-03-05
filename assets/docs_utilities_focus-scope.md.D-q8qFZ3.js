import{_ as m,c as E,aM as l,e as o,p as s,b as e,a3 as a,au as r,o as f}from"./chunks/framework.6UEeBrHH.js";const H=JSON.parse('{"title":"Focus Scope","description":"Manages focus within a component boundary with support for trapping and looping focus navigation.","frontmatter":{"title":"Focus Scope","description":"Manages focus within a component boundary with support for trapping and looping focus navigation.","sidebar":true},"headers":[{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"With Focus Looping","slug":"with-focus-looping","link":"#with-focus-looping","children":[]},{"level":3,"title":"Handling Focus Event","slug":"handling-focus-event","link":"#handling-focus-event","children":[]}]}],"relativePath":"docs/utilities/focus-scope.md","filePath":"docs/utilities/focus-scope.md","lastUpdated":1741142901000}'),h={name:"docs/utilities/focus-scope.md"},y={name:"vue",class:"language-vue"},g={class:"shiki github-dark vp-code",tabindex:"0"},b={class:"line highlighted"},v={style:{color:"#85E89D"}},_={class:"line"},w={style:{color:"#85E89D"}},C={name:"vue",class:"language-vue"},F={class:"shiki github-dark vp-code",tabindex:"0"},T={class:"line highlighted"},k={style:{color:"#85E89D"}},A={class:"line"},x={style:{color:"#85E89D"}},S={name:"vue",class:"language-vue"},q={class:"shiki github-dark vp-code",tabindex:"0"},D={class:"line"},P={style:{color:"#85E89D"}},B={class:"line"},I={style:{color:"#85E89D"}};function M(V,n,R,W,N,j){const i=r("Description"),d=r("PropsTable"),c=r("EmitsTable"),t=r("link-hover-card-content"),p=r("link-hover-card"),u=r("Callout");return f(),E("div",null,[n[39]||(n[39]=l('<h1 id="focus-scope" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Focus Scope <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#focus-scope" aria-label="Permalink to &quot;Focus Scope&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(i,null,{default:s(()=>n[0]||(n[0]=[a(" Manages focus within a component boundary with support for trapping and looping focus navigation. ")])),_:1}),n[40]||(n[40]=l('<p>Focus Scope provides enhanced control over keyboard focus management within component boundaries. It can trap focus within its container and optionally loop focus navigation, making it ideal for modal interfaces and other interactive components that need to manage focus states.</p><h2 id="api-reference" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">API Reference <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2>',2)),o(d,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"loop",description:`<p>When <code>true</code>, tabbing from last item will focus first tabbable
and shift+tab from first item will focus last tababble.</p>
`,type:"boolean",required:!1,default:"false"},{name:"trapped",description:`<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,
pointer, or a programmatic focus.</p>
`,type:"boolean",required:!1,default:"false"}]}),o(c,{data:[{name:"mountAutoFocus",description:`<p>Event handler called when auto-focusing on mount.
Can be prevented.</p>
`,type:"[event: Event]"},{name:"unmountAutoFocus",description:`<p>Event handler called when auto-focusing on unmount.
Can be prevented.</p>
`,type:"[event: Event]"}]}),n[41]||(n[41]=l('<h2 id="example" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Example <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#example" aria-label="Permalink to &quot;Example&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Basic usage with focus trapping</p>',2)),e("div",y,[n[12]||(n[12]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[13]||(n[13]=e("span",{class:"lang"},"vue",-1)),e("pre",g,[e("code",null,[n[7]||(n[7]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[8]||(n[8]=a(`
`)),e("span",b,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",v,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[1]||(n[1]=a("FocusScope"))]),_:1})]),n[3]||(n[3]=l('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">trapped</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',7))]),n[9]||(n[9]=l(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;Action 1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;Action 2&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;Close&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
`,11)),e("span",_,[n[5]||(n[5]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",w,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[4]||(n[4]=a("FocusScope"))]),_:1})]),n[6]||(n[6]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[10]||(n[10]=a(`
`)),n[11]||(n[11]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[42]||(n[42]=l('<h3 id="with-focus-looping" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">With Focus Looping <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#with-focus-looping" aria-label="Permalink to &quot;With Focus Looping&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>Enable both trapping and looping for complete focus management:</p>',2)),e("div",C,[n[25]||(n[25]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[26]||(n[26]=e("span",{class:"lang"},"vue",-1)),e("pre",F,[e("code",null,[n[20]||(n[20]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[21]||(n[21]=a(`
`)),e("span",T,[n[15]||(n[15]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",k,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[14]||(n[14]=a("FocusScope"))]),_:1})]),n[16]||(n[16]=l('<span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">trapped</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">loop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',13))]),n[22]||(n[22]=l(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#F97583;"> v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> items</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.id</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ item.label }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
`,11)),e("span",A,[n[18]||(n[18]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",x,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[17]||(n[17]=a("FocusScope"))]),_:1})]),n[19]||(n[19]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[23]||(n[23]=a(`
`)),n[24]||(n[24]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[43]||(n[43]=l('<h3 id="handling-focus-event" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Handling Focus Event <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#handling-focus-event" aria-label="Permalink to &quot;Handling Focus Event&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3>',1)),e("div",S,[n[36]||(n[36]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[37]||(n[37]=e("span",{class:"lang"},"vue",-1)),e("pre",q,[e("code",null,[n[32]||(n[32]=l(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> handleMountFocus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="color:#6A737D;">  // Prevent default auto-focus behavior if needed</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,16)),e("span",D,[n[28]||(n[28]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",P,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[27]||(n[27]=a("FocusScope"))]),_:1})])]),n[33]||(n[33]=l(`
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">mount-auto-focus</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">handleMountFocus</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">unmount-auto-focus</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">handleUnmountFocus</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      …</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
`,13)),e("span",B,[n[30]||(n[30]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",I,[o(p,{name:"FocusScope"},{content:s(({})=>[o(t,{title:"props",data:`[
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
    "name": "loop",
    "description": "<p>When <code>true</code>, tabbing from last item will focus first tabbable\\nand shift+tab from first item will focus last tababble.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "trapped",
    "description": "<p>When <code>true</code>, focus cannot escape the focus scope via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  }
]`}),o(t,{title:"emits",data:`[
  {
    "name": "mountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on mount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "unmountAutoFocus",
    "description": "<p>Event handler called when auto-focusing on unmount.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:s(()=>[n[29]||(n[29]=a("FocusScope"))]),_:1})]),n[31]||(n[31]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[34]||(n[34]=a(`
`)),n[35]||(n[35]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[44]||(n[44]=e("br",null,null,-1)),o(u,{type:"warning"},{default:s(()=>n[38]||(n[38]=[e("p",null,"When using trapped mode, ensure there is always at least one focusable element within the scope to prevent focus from being trapped in an inaccessible state.",-1)])),_:1})])}const L=m(h,[["render",M]]);export{H as __pageData,L as default};
