import{_ as u,c as m,aM as a,e as o,p as t,b as n,a3 as s,au as l,o as c}from"./chunks/framework.BvEsjwOO.js";const ie=JSON.parse('{"title":"Composition","description":"Use the `asChild` prop to compose Reka\'s functionality onto alternative element types or your own Vue components.","frontmatter":{"title":"Composition","description":"Use the `asChild` prop to compose Reka\'s functionality onto alternative element types or your own Vue components.","sidebar":true},"headers":[{"level":2,"title":"Changing the element type","slug":"changing-the-element-type","link":"#changing-the-element-type","children":[]},{"level":2,"title":"Composing with your own Vue components","slug":"composing-with-your-own-vue-components","link":"#composing-with-your-own-vue-components","children":[]},{"level":2,"title":"Composing multiple primitives","slug":"composing-multiple-primitives","link":"#composing-multiple-primitives","children":[]}],"relativePath":"docs/guides/composition.md","filePath":"docs/guides/composition.md","lastUpdated":1741141490000}'),h={name:"docs/guides/composition.md"},g={name:"vue",class:"language-vue"},f={class:"shiki github-dark vp-code",tabindex:"0"},y={class:"line"},b={style:{color:"#85E89D"}},E={class:"line highlighted"},v={style:{color:"#85E89D"}},w={class:"line"},T={style:{color:"#85E89D"}},C={class:"line"},q={style:{color:"#85E89D"}},k={style:{color:"#85E89D"}},D={class:"line"},_={style:{color:"#85E89D"}},P={name:"vue",class:"language-vue"},x={class:"shiki github-dark vp-code",tabindex:"0"},V={class:"line"},R={style:{color:"#85E89D"}},M={class:"line"},F={style:{color:"#85E89D"}},I={class:"line highlighted"},A={style:{color:"#85E89D"}},U={class:"line highlighted"},j={style:{color:"#85E89D"}},S={class:"line"},B={style:{color:"#85E89D"}},N={class:"line"},O={style:{color:"#85E89D"}},H={class:"line"},W={style:{color:"#85E89D"}},L={style:{color:"#85E89D"}},K={class:"line"},$={style:{color:"#85E89D"}},J={class:"line"},z={style:{color:"#85E89D"}},G={style:{color:"#85E89D"}},Q={class:"line"},X={style:{color:"#85E89D"}};function Y(Z,e,ee,ne,oe,te){const p=l("Description"),i=l("link-hover-card-content"),r=l("link-hover-card"),d=l("Callout");return c(),m("div",null,[e[81]||(e[81]=a("",1)),o(p,null,{default:t(()=>e[0]||(e[0]=[n("p",null,[s("Use the "),n("code",null,"asChild"),s(" prop to compose Reka's functionality onto alternative element types or your own Vue components.")],-1)])),_:1}),e[82]||(e[82]=a("",4)),n("div",g,[e[26]||(e[26]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[27]||(e[27]=n("span",{class:"lang"},"vue",-1)),n("pre",f,[n("code",null,[e[19]||(e[19]=a("",10)),n("span",y,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",b,[o(r,{name:"TooltipRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the tooltip when it is initially rendered.\\nUse when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "delayDuration",
    "description": "<p>Override the duration given to the <code>Provider</code> to customise\\nthe open delay for a specific tooltip.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "disableClosingTrigger",
    "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, disable tooltip</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableHoverableContent",
    "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\\nDisabling this has accessibility consequences. Inherits\\nfrom Tooltip.Provider.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the tooltip.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[1]||(e[1]=s("TooltipRoot"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[20]||(e[20]=s(`
`)),n("span",E,[e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",v,[o(r,{name:"TooltipTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:t(()=>[e[4]||(e[4]=s("TooltipTrigger"))]),_:1})]),e[6]||(e[6]=n("span",{style:{color:"#B392F0"}}," asChild",-1)),e[7]||(e[7]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[21]||(e[21]=a("",3)),n("span",w,[e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",T,[o(r,{name:"TooltipTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:t(()=>[e[8]||(e[8]=s("TooltipTrigger"))]),_:1})]),e[10]||(e[10]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[22]||(e[22]=s(`
`)),n("span",C,[e[13]||(e[13]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",q,[o(r,{name:"TooltipPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[11]||(e[11]=s("TooltipPortal"))]),_:1})]),e[14]||(e[14]=n("span",{style:{color:"#E1E4E8"}},">…</",-1)),n("span",k,[o(r,{name:"TooltipPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[12]||(e[12]=s("TooltipPortal"))]),_:1})]),e[15]||(e[15]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[23]||(e[23]=s(`
`)),n("span",D,[e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",_,[o(r,{name:"TooltipRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the tooltip when it is initially rendered.\\nUse when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "delayDuration",
    "description": "<p>Override the duration given to the <code>Provider</code> to customise\\nthe open delay for a specific tooltip.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "disableClosingTrigger",
    "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, disable tooltip</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableHoverableContent",
    "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\\nDisabling this has accessibility consequences. Inherits\\nfrom Tooltip.Provider.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the tooltip.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[16]||(e[16]=s("TooltipRoot"))]),_:1})]),e[18]||(e[18]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[24]||(e[24]=s(`
`)),e[25]||(e[25]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),o(d,{type:"warning"},{default:t(()=>e[28]||(e[28]=[n("p",null,[s("If you do decide to change the underlying element type, it is your responsibility to ensure it remains accessible and functional. In the case of "),n("code",null,"TooltipTrigger"),s(" for example, it must be a focusable element that can respond to pointer and keyboard events. If you were to switch it to a "),n("code",null,"div"),s(", it would no longer be accessible.")],-1)])),_:1}),e[83]||(e[83]=a("",5)),n("div",P,[e[79]||(e[79]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[80]||(e[80]=n("span",{class:"lang"},"vue",-1)),n("pre",x,[n("code",null,[e[65]||(e[65]=a("",12)),n("span",V,[e[30]||(e[30]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",R,[o(r,{name:"DialogRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[29]||(e[29]=s("DialogRoot"))]),_:1})]),e[31]||(e[31]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[66]||(e[66]=s(`
`)),n("span",M,[e[33]||(e[33]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",F,[o(r,{name:"TooltipRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the tooltip when it is initially rendered.\\nUse when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "delayDuration",
    "description": "<p>Override the duration given to the <code>Provider</code> to customise\\nthe open delay for a specific tooltip.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "disableClosingTrigger",
    "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, disable tooltip</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableHoverableContent",
    "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\\nDisabling this has accessibility consequences. Inherits\\nfrom Tooltip.Provider.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the tooltip.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[32]||(e[32]=s("TooltipRoot"))]),_:1})]),e[34]||(e[34]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[67]||(e[67]=s(`
`)),n("span",I,[e[36]||(e[36]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",A,[o(r,{name:"TooltipTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:t(()=>[e[35]||(e[35]=s("TooltipTrigger"))]),_:1})]),e[37]||(e[37]=n("span",{style:{color:"#B392F0"}}," asChild",-1)),e[38]||(e[38]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[68]||(e[68]=s(`
`)),n("span",U,[e[40]||(e[40]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",j,[o(r,{name:"DialogTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[39]||(e[39]=s("DialogTrigger"))]),_:1})]),e[41]||(e[41]=n("span",{style:{color:"#B392F0"}}," asChild",-1)),e[42]||(e[42]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[69]||(e[69]=a("",3)),n("span",S,[e[44]||(e[44]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",B,[o(r,{name:"DialogTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[43]||(e[43]=s("DialogTrigger"))]),_:1})]),e[45]||(e[45]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[70]||(e[70]=s(`
`)),n("span",N,[e[47]||(e[47]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",O,[o(r,{name:"TooltipTrigger"},{content:t(({})=>[o(i,{title:"props",data:`[
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
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:t(()=>[e[46]||(e[46]=s("TooltipTrigger"))]),_:1})]),e[48]||(e[48]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[71]||(e[71]=s(`
`)),n("span",H,[e[51]||(e[51]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",W,[o(r,{name:"TooltipPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[49]||(e[49]=s("TooltipPortal"))]),_:1})]),e[52]||(e[52]=n("span",{style:{color:"#E1E4E8"}},">…</",-1)),n("span",L,[o(r,{name:"TooltipPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[50]||(e[50]=s("TooltipPortal"))]),_:1})]),e[53]||(e[53]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[72]||(e[72]=s(`
`)),n("span",K,[e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",$,[o(r,{name:"TooltipRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the tooltip when it is initially rendered.\\nUse when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "delayDuration",
    "description": "<p>Override the duration given to the <code>Provider</code> to customise\\nthe open delay for a specific tooltip.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "disableClosingTrigger",
    "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, disable tooltip</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableHoverableContent",
    "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\\nDisabling this has accessibility consequences. Inherits\\nfrom Tooltip.Provider.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the tooltip.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[54]||(e[54]=s("TooltipRoot"))]),_:1})]),e[56]||(e[56]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[73]||(e[73]=s(`
`)),e[74]||(e[74]=n("span",{class:"line"},null,-1)),e[75]||(e[75]=s(`
`)),n("span",J,[e[59]||(e[59]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",z,[o(r,{name:"DialogPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[57]||(e[57]=s("DialogPortal"))]),_:1})]),e[60]||(e[60]=n("span",{style:{color:"#E1E4E8"}},">...</",-1)),n("span",G,[o(r,{name:"DialogPortal"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`})]),default:t(()=>[e[58]||(e[58]=s("DialogPortal"))]),_:1})]),e[61]||(e[61]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[76]||(e[76]=s(`
`)),n("span",Q,[e[63]||(e[63]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",X,[o(r,{name:"DialogRoot"},{content:t(({})=>[o(i,{title:"props",data:`[
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
]`}),o(i,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the dialog changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(i,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[62]||(e[62]=s("DialogRoot"))]),_:1})]),e[64]||(e[64]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[77]||(e[77]=s(`
`)),e[78]||(e[78]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const re=u(h,[["render",Y]]);export{ie as __pageData,re as default};
