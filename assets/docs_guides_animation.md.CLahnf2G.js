import{_ as c,c as E,aM as p,e as o,p as s,b as e,a3 as t,au as i,o as u}from"./chunks/framework.BvEsjwOO.js";const Ln=JSON.parse('{"title":"Animation/Transition","description":"Animate Reka UI with CSS keyframes, native Vue Transition or JavaScript animation library of your choice.","frontmatter":{"title":"Animation/Transition","description":"Animate Reka UI with CSS keyframes, native Vue Transition or JavaScript animation library of your choice.","sidebar":true},"headers":[{"level":2,"title":"Animating with CSS animation","slug":"animating-with-css-animation","link":"#animating-with-css-animation","children":[]},{"level":2,"title":"Animating with Vue Transition","slug":"animating-with-vue-transition","link":"#animating-with-vue-transition","children":[]},{"level":2,"title":"⭐️ Animating with Motion Vue","slug":"⭐️-animating-with-motion-vue","link":"#⭐️-animating-with-motion-vue","children":[]},{"level":2,"title":"Delegating unmounting for JavaScript Animation","slug":"delegating-unmounting-for-javascript-animation","link":"#delegating-unmounting-for-javascript-animation","children":[]}],"relativePath":"docs/guides/animation.md","filePath":"docs/guides/animation.md","lastUpdated":1741141490000}'),y={name:"docs/guides/animation.md"},m={name:"vue",class:"language-vue"},h={class:"shiki github-dark vp-code",tabindex:"0"},g={class:"line"},f={style:{color:"#85E89D"}},b={class:"line"},v={style:{color:"#85E89D"}},w={class:"line"},C={style:{color:"#85E89D"}},F={class:"line"},D={style:{color:"#85E89D"}},T={class:"line"},q={style:{color:"#85E89D"}},k={class:"line"},_={style:{color:"#85E89D"}},B={class:"line"},A={style:{color:"#85E89D"}},S={style:{color:"#85E89D"}},P={class:"line"},V={style:{color:"#85E89D"}},O={class:"line"},R={style:{color:"#85E89D"}},x={class:"line"},M={style:{color:"#85E89D"}},U={name:"vue",class:"language-vue"},I={class:"shiki github-dark vp-code",tabindex:"0"},L={class:"line"},j={style:{color:"#85E89D"}},N={class:"line"},W={style:{color:"#85E89D"}},K={class:"line"},H={style:{color:"#85E89D"}},J={class:"line"},$={style:{color:"#85E89D"}},z={class:"line"},G={style:{color:"#85E89D"}},Y={class:"line"},Q={style:{color:"#85E89D"}},X={class:"line"},Z={style:{color:"#85E89D"}},nn={class:"line"},en={style:{color:"#85E89D"}},on={style:{color:"#85E89D"}},sn={class:"line"},tn={style:{color:"#85E89D"}},an={class:"line"},ln={style:{color:"#85E89D"}},pn={class:"line"},rn={style:{color:"#85E89D"}},dn={name:"vue",class:"language-vue"},cn={class:"shiki github-dark vp-code",tabindex:"0"},En={class:"line"},un={style:{color:"#85E89D"}},yn={class:"line"},mn={style:{color:"#85E89D"}},hn={class:"line"},gn={style:{color:"#85E89D"}},fn={class:"line highlighted"},bn={style:{color:"#85E89D"}},vn={class:"line"},wn={style:{color:"#85E89D"}},Cn={class:"line"},Fn={style:{color:"#85E89D"}},Dn={class:"line"},Tn={style:{color:"#85E89D"}},qn={style:{color:"#85E89D"}},kn={class:"line"},_n={style:{color:"#85E89D"}},Bn={class:"line"},An={style:{color:"#85E89D"}},Sn={class:"line"},Pn={style:{color:"#85E89D"}};function Vn(On,n,Rn,xn,Mn,Un){const d=i("Description"),a=i("link-hover-card-content"),l=i("link-hover-card"),r=i("Callout");return u(),E("div",null,[n[158]||(n[158]=p('<h1 id="animation" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Animation <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#animation" aria-label="Permalink to &quot;Animation&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(d,null,{default:s(()=>n[0]||(n[0]=[t(" Animate Reka UI with CSS keyframes, native Vue Transition or JavaScript animation library of your choice. ")])),_:1}),n[159]||(n[159]=p(`<p>Adding animation to Reka UI should feel similar to any other component, but there are some caveats noted here in regards to exiting animations with JS animation libraries.</p><h2 id="animating-with-css-animation" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Animating with CSS animation <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#animating-with-css-animation" aria-label="Permalink to &quot;Animating with CSS animation&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>The simplest way to animate Primitives is with CSS.</p><p>You can use CSS animation to animate both mount and unmount phases. The latter is possible because the Reka UI will suspend unmount while your animation plays out.</p><div name="css" class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#FFAB70;"> fadeIn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  from</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  to</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#FFAB70;"> fadeOut</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  from</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  to</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.DialogOverlay</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-state</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">.DialogContent</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-state</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#79B8FF;">  animation</span><span style="color:#E1E4E8;">: fadeIn </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">ms</span><span style="color:#79B8FF;"> ease-out</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.DialogOverlay</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-state</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;closed&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">.DialogContent</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-state</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;closed&quot;</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#79B8FF;">  animation</span><span style="color:#E1E4E8;">: fadeOut </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">ms</span><span style="color:#79B8FF;"> ease-in</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="animating-with-vue-transition" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Animating with Vue Transition <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#animating-with-vue-transition" aria-label="Permalink to &quot;Animating with Vue Transition&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Other than using CSS animation, you might prefer to use the native Vue <code>&lt;Transition&gt;</code>. Great news! It should be as easy as wrapping component (that has <code>forceMount</code> prop), and you are done!</p>`,7)),e("div",m,[n[48]||(n[48]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[49]||(n[49]=e("span",{class:"lang"},"vue",-1)),e("pre",h,[e("code",null,[n[33]||(n[33]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),e("span",g,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",f,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[1]||(n[1]=t("DialogRoot"))]),_:1})]),n[3]||(n[3]=p('<span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">open</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',8))]),n[34]||(n[34]=t(`
`)),e("span",b,[n[5]||(n[5]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",v,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[4]||(n[4]=t("DialogTrigger"))]),_:1})]),n[6]||(n[6]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[35]||(n[35]=t(`
`)),n[36]||(n[36]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Edit profile")],-1)),n[37]||(n[37]=t(`
`)),e("span",w,[n[8]||(n[8]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",C,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[7]||(n[7]=t("DialogTrigger"))]),_:1})]),n[9]||(n[9]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[38]||(n[38]=t(`
`)),e("span",F,[n[11]||(n[11]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",D,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[10]||(n[10]=t("DialogPortal"))]),_:1})]),n[12]||(n[12]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[39]||(n[39]=p(`
<span class="line highlighted"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">Transition</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fade&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),e("span",T,[n[14]||(n[14]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",q,[o(l,{name:"DialogOverlay"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[n[13]||(n[13]=t("DialogOverlay"))]),_:1})]),n[15]||(n[15]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[40]||(n[40]=p(`
<span class="line highlighted"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">Transition</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">Transition</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fade&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
`,5)),e("span",k,[n[17]||(n[17]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",_,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[16]||(n[16]=t("DialogContent"))]),_:1})]),n[18]||(n[18]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[41]||(n[41]=p(`
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello from inside the Dialog!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),e("span",B,[n[21]||(n[21]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",A,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[19]||(n[19]=t("DialogClose"))]),_:1})]),n[22]||(n[22]=e("span",{style:{color:"#E1E4E8"}},">Close</",-1)),e("span",S,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[20]||(n[20]=t("DialogClose"))]),_:1})]),n[23]||(n[23]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[42]||(n[42]=t(`
`)),e("span",P,[n[25]||(n[25]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",V,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[24]||(n[24]=t("DialogContent"))]),_:1})]),n[26]||(n[26]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[43]||(n[43]=t(`
`)),n[44]||(n[44]=e("span",{class:"line highlighted"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"Transition"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[45]||(n[45]=t(`
`)),e("span",O,[n[28]||(n[28]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",R,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[27]||(n[27]=t("DialogPortal"))]),_:1})]),n[29]||(n[29]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[46]||(n[46]=t(`
`)),e("span",x,[n[31]||(n[31]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",M,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[30]||(n[30]=t("DialogRoot"))]),_:1})]),n[32]||(n[32]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[47]||(n[47]=p(`
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#B392F0;">.fade-enter-active</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#B392F0;">.fade-leave-active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: opacity </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#B392F0;">.fade-enter-from</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#B392F0;">.fade-leave-to</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#79B8FF;">  opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>`,26))])])]),n[160]||(n[160]=p('<h2 id="⭐️-animating-with-motion-vue" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">⭐️ Animating with Motion Vue <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#⭐️-animating-with-motion-vue" aria-label="Permalink to &quot;⭐️ Animating with Motion Vue&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p><a href="https://motion.unovue.com/" target="_blank" rel="noreferrer">Motion Vue</a> is the recommended animation library for Reka UI. This lightweight, powerful library integrates seamlessly with components and offers extensive flexibility for creating smooth, performant animations.</p>',2)),e("div",U,[n[108]||(n[108]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[109]||(n[109]=e("span",{class:"lang"},"vue",-1)),e("pre",I,[e("code",null,[n[87]||(n[87]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AnimatePresence, Motion } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;motion-v&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,12)),e("span",L,[n[51]||(n[51]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",j,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[50]||(n[50]=t("DialogRoot"))]),_:1})]),n[52]||(n[52]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[88]||(n[88]=t(`
`)),e("span",N,[n[54]||(n[54]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",W,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[53]||(n[53]=t("DialogTrigger"))]),_:1})]),n[55]||(n[55]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[89]||(n[89]=t(`
`)),n[90]||(n[90]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Edit profile")],-1)),n[91]||(n[91]=t(`
`)),e("span",K,[n[57]||(n[57]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",H,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[56]||(n[56]=t("DialogTrigger"))]),_:1})]),n[58]||(n[58]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[92]||(n[92]=t(`
`)),e("span",J,[n[60]||(n[60]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",$,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[59]||(n[59]=t("DialogPortal"))]),_:1})]),n[61]||(n[61]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[93]||(n[93]=p(`
<span class="line highlighted"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">AnimatePresence</span><span style="color:#B392F0;"> multiple</span><span style="color:#E1E4E8;">&gt;</span></span>
`,3)),e("span",z,[n[63]||(n[63]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",G,[o(l,{name:"DialogOverlay"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[n[62]||(n[62]=t("DialogOverlay"))]),_:1})]),n[64]||(n[64]=e("span",{style:{color:"#B392F0"}}," as-child",-1)),n[65]||(n[65]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[94]||(n[94]=p(`
<span class="line highlighted"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">Motion</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">initial</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">0.6</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          /&gt;</span></span>
`,11)),e("span",Y,[n[67]||(n[67]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Q,[o(l,{name:"DialogOverlay"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[n[66]||(n[66]=t("DialogOverlay"))]),_:1})]),n[68]||(n[68]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[95]||(n[95]=t(`
`)),n[96]||(n[96]=e("span",{class:"line"},null,-1)),n[97]||(n[97]=t(`
`)),e("span",X,[n[70]||(n[70]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Z,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[69]||(n[69]=t("DialogContent"))]),_:1})]),n[71]||(n[71]=e("span",{style:{color:"#B392F0"}}," as-child",-1)),n[72]||(n[72]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[98]||(n[98]=p(`
<span class="line highlighted"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">Motion</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">initial</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, top: </span><span style="color:#9ECBFF;">&#39;0%&#39;</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, top: </span><span style="color:#9ECBFF;">&#39;50%&#39;</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            :</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, top: </span><span style="color:#9ECBFF;">&#39;30%&#39;</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello from inside the Dialog!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
`,13)),e("span",nn,[n[75]||(n[75]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",en,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[73]||(n[73]=t("DialogClose"))]),_:1})]),n[76]||(n[76]=e("span",{style:{color:"#E1E4E8"}},">Close</",-1)),e("span",on,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[74]||(n[74]=t("DialogClose"))]),_:1})]),n[77]||(n[77]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[99]||(n[99]=t(`
`)),n[100]||(n[100]=e("span",{class:"line highlighted"},[e("span",{style:{color:"#E1E4E8"}},"          </"),e("span",{style:{color:"#85E89D"}},"Motion"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[101]||(n[101]=t(`
`)),e("span",sn,[n[79]||(n[79]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",tn,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[78]||(n[78]=t("DialogContent"))]),_:1})]),n[80]||(n[80]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[102]||(n[102]=t(`
`)),n[103]||(n[103]=e("span",{class:"line highlighted"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"AnimatePresence"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[104]||(n[104]=t(`
`)),e("span",an,[n[82]||(n[82]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",ln,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[81]||(n[81]=t("DialogPortal"))]),_:1})]),n[83]||(n[83]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[105]||(n[105]=t(`
`)),e("span",pn,[n[85]||(n[85]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",rn,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[84]||(n[84]=t("DialogRoot"))]),_:1})]),n[86]||(n[86]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[106]||(n[106]=t(`
`)),n[107]||(n[107]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),o(r,{type:"tip"},{default:s(()=>n[110]||(n[110]=[e("p",null,[t("Check out this "),e("a",{href:"https://stackblitz.com/edit/x7y44ngl?file=src%2FApp.vue",target:"_blank",rel:"noreferrer"},"Stackblitz Demo"),t(" 🤩")],-1)])),_:1}),n[161]||(n[161]=p('<h2 id="delegating-unmounting-for-javascript-animation" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Delegating unmounting for JavaScript Animation <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#delegating-unmounting-for-javascript-animation" aria-label="Permalink to &quot;Delegating unmounting for JavaScript Animation&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>When many stateful Primitives are hidden from view, they are actually removed from the DOM. JavaScript animation libraries need control of the unmounting phase, so we provide the <code>forceMount</code> prop on many components to allow consumers to delegate the mounting and unmounting of children based on the animation state determined by those libraries.</p><p>For example, if you want to use <a href="https://motion.vueuse.org/" target="_blank" rel="noreferrer">@vueuse/motion</a> to animate a <code>Dialog</code>, you would do so by conditionally rendering the dialog <code>Overlay</code> and <code>Content</code> parts based on the animation state from one of its composable like <code>useSpring</code>:</p>',3)),e("div",dn,[n[155]||(n[155]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[156]||(n[156]=e("span",{class:"lang"},"vue",-1)),e("pre",cn,[e("code",null,[n[141]||(n[141]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref, watch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useSpring } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vueuse/motion&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> stages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  initial: { opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, top: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, },</span></span>
<span class="line"><span style="color:#E1E4E8;">  enter: { opacity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, top: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, },</span></span>
<span class="line"><span style="color:#E1E4E8;">  leave: { opacity: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, scale: </span><span style="color:#79B8FF;">0.6</span><span style="color:#E1E4E8;">, top: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> styles</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">(stages.initial)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useSpring</span><span style="color:#E1E4E8;">(styles, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  damping: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  stiffness: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> open</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(open, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (open.value)</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">(stages.enter)</span></span>
<span class="line"><span style="color:#F97583;">  else</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">(stages.leave)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,54)),e("span",En,[n[112]||(n[112]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",un,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[111]||(n[111]=t("DialogRoot"))]),_:1})]),n[113]||(n[113]=p('<span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">open</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',8))]),n[142]||(n[142]=t(`
`)),e("span",yn,[n[115]||(n[115]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",mn,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[114]||(n[114]=t("DialogTrigger"))]),_:1})]),n[116]||(n[116]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[143]||(n[143]=t(`
`)),n[144]||(n[144]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Edit profile")],-1)),n[145]||(n[145]=t(`
`)),e("span",hn,[n[118]||(n[118]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",gn,[o(l,{name:"DialogTrigger"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[117]||(n[117]=t("DialogTrigger"))]),_:1})]),n[119]||(n[119]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[146]||(n[146]=t(`
`)),e("span",fn,[n[121]||(n[121]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",bn,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[120]||(n[120]=t("DialogPortal"))]),_:1})]),n[122]||(n[122]=p('<span style="color:#F97583;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">styles.opacity </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span>',8))]),n[147]||(n[147]=t(`
`)),e("span",vn,[n[124]||(n[124]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",wn,[o(l,{name:"DialogOverlay"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[n[123]||(n[123]=t("DialogOverlay"))]),_:1})])]),n[148]||(n[148]=p(`
<span class="line highlighted"><span style="color:#B392F0;">        force-mount</span></span>
<span class="line"><span style="color:#E1E4E8;">        :</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">          opacity: styles.opacity,</span></span>
<span class="line"><span style="color:#E1E4E8;">          transform: </span><span style="color:#9ECBFF;">\`scale(\${</span><span style="color:#E1E4E8;">styles</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">scale</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
`,13)),e("span",Cn,[n[126]||(n[126]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Fn,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[125]||(n[125]=t("DialogContent"))]),_:1})])]),n[149]||(n[149]=p(`
<span class="line highlighted"><span style="color:#B392F0;">        force-mount</span></span>
<span class="line"><span style="color:#E1E4E8;">        :</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">          opacity: styles.opacity,</span></span>
<span class="line"><span style="color:#E1E4E8;">          top: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">styles</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">top</span><span style="color:#9ECBFF;">}%\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello from inside the Dialog!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
`,15)),e("span",Dn,[n[129]||(n[129]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Tn,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[127]||(n[127]=t("DialogClose"))]),_:1})]),n[130]||(n[130]=e("span",{style:{color:"#E1E4E8"}},">Close</",-1)),e("span",qn,[o(l,{name:"DialogClose"},{content:s(({})=>[o(a,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[n[128]||(n[128]=t("DialogClose"))]),_:1})]),n[131]||(n[131]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[150]||(n[150]=t(`
`)),e("span",kn,[n[133]||(n[133]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",_n,[o(l,{name:"DialogContent"},{content:s(({})=>[o(a,{title:"props",data:`[
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
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
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
    "name": "trapFocus",
    "description": "<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\\npointer, or a programmatic focus.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
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
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "openAutoFocus",
    "description": "<p>Event handler called when auto-focusing on open.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:s(()=>[n[132]||(n[132]=t("DialogContent"))]),_:1})]),n[134]||(n[134]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[151]||(n[151]=t(`
`)),e("span",Bn,[n[136]||(n[136]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",An,[o(l,{name:"DialogPortal"},{content:s(({})=>[o(a,{title:"props",data:`[
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
]`})]),default:s(()=>[n[135]||(n[135]=t("DialogPortal"))]),_:1})]),n[137]||(n[137]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[152]||(n[152]=t(`
`)),e("span",Sn,[n[139]||(n[139]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",Pn,[o(l,{name:"DialogRoot"},{content:s(({})=>[o(a,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "modal",
    "description": "<p>The modality of the dialog When set to <code>true</code>, &lt;br&gt;\\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(a,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[138]||(n[138]=t("DialogRoot"))]),_:1})]),n[140]||(n[140]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[153]||(n[153]=t(`
`)),n[154]||(n[154]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),o(r,{type:"tip"},{default:s(()=>n[157]||(n[157]=[e("p",null,[t("Check out this "),e("a",{href:"https://stackblitz.com/edit/macsaz-xuwbw3im?file=src%2FApp.vue",target:"_blank",rel:"noreferrer"},"Stackblitz Demo")],-1)])),_:1})])}const jn=c(y,[["render",Vn]]);export{Ln as __pageData,jn as default};
