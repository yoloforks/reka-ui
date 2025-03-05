import{_ as u,c,aM as r,e as t,p as s,b as n,a3 as o,au as i,o as m}from"./chunks/framework.6UEeBrHH.js";const Se=JSON.parse('{"title":"Migration - Radix Vue to Reka UI","description":"This guide provides step-by-step instructions for developers transitioning their projects from Radix Vue to Reka UI.","frontmatter":{"title":"Migration - Radix Vue to Reka UI","description":"This guide provides step-by-step instructions for developers transitioning their projects from Radix Vue to Reka UI.","sidebar":true},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Import Statement Changes","slug":"import-statement-changes","link":"#import-statement-changes","children":[]},{"level":2,"title":"Naming Convention Changes","slug":"naming-convention-changes","link":"#naming-convention-changes","children":[]},{"level":2,"title":"Component Breaking Changes","slug":"component-breaking-changes","link":"#component-breaking-changes","children":[{"level":3,"title":"Combobox","slug":"combobox","link":"#combobox","children":[]},{"level":3,"title":"Arrow","slug":"arrow","link":"#arrow","children":[]},{"level":3,"title":"Form component","slug":"form-component","link":"#form-component","children":[]},{"level":3,"title":"Menu CheckboxItem","slug":"menu-checkboxitem","link":"#menu-checkboxitem","children":[]},{"level":3,"title":"Pagination","slug":"pagination","link":"#pagination","children":[]},{"level":3,"title":"Calendar","slug":"calendar","link":"#calendar","children":[]},{"level":3,"title":"Select","slug":"select","link":"#select","children":[]},{"level":3,"title":"Presence","slug":"presence","link":"#presence","children":[]}]}],"relativePath":"docs/guides/migration.md","filePath":"docs/guides/migration.md","lastUpdated":1741142868000}'),h={name:"docs/guides/migration.md"},y={name:"vue",class:"language-vue"},f={class:"shiki github-dark has-diff vp-code",tabindex:"0"},b={class:"line diff remove"},g={style:{color:"#85E89D"}},E={name:"vue",class:"language-vue"},v={class:"shiki github-dark has-diff vp-code",tabindex:"0"},C={class:"line diff remove"},w={style:{color:"#85E89D"}},T={class:"line"},k={style:{color:"#85E89D"}},x={class:"line diff add"},q={style:{color:"#85E89D"}},F={class:"line"},_={style:{color:"#85E89D"}},V={name:"vue",class:"language-vue"},A={class:"shiki github-dark has-diff vp-code",tabindex:"0"},B={class:"line diff remove"},S={style:{color:"#85E89D"}},P={class:"line diff add"},R={style:{color:"#85E89D"}},D={name:"vue",class:"language-vue"},I={class:"shiki github-dark has-diff vp-code",tabindex:"0"},M={class:"line diff remove"},N={style:{color:"#85E89D"}},W={class:"line diff add"},U={style:{color:"#85E89D"}},O={class:"line diff remove"},j={style:{color:"#85E89D"}},L={class:"line diff add"},H={style:{color:"#85E89D"}},$={name:"vue",class:"language-vue"},z={class:"shiki github-dark has-diff vp-code",tabindex:"0"},J={class:"line diff add"},Y={style:{color:"#85E89D"}},G={name:"vue",class:"language-vue"},K={class:"shiki github-dark has-diff vp-code",tabindex:"0"},Q={class:"line diff remove"},X={style:{color:"#85E89D"}},Z={class:"line diff add"},ee={style:{color:"#85E89D"}},ne={class:"line diff remove"},te={style:{color:"#85E89D"}},oe={class:"line diff add"},ae={style:{color:"#85E89D"}},se={name:"vue",class:"language-vue"},le={class:"shiki github-dark has-diff vp-code",tabindex:"0"},re={class:"line"},ie={style:{color:"#85E89D"}},pe={class:"line"},de={style:{color:"#85E89D"}},ue={name:"vue",class:"language-vue"},ce={class:"shiki github-dark vp-code",tabindex:"0"},me={class:"line"},he={style:{color:"#85E89D"}},ye={class:"line"},fe={style:{color:"#85E89D"}},be={class:"line"},ge={style:{color:"#85E89D"}},Ee={class:"line"},ve={style:{color:"#85E89D"}},Ce={class:"line"},we={style:{color:"#85E89D"}},Te={class:"line"},ke={style:{color:"#85E89D"}};function xe(qe,e,Fe,_e,Ve,Ae){const p=i("Description"),d=i("InstallationTabs"),a=i("link-hover-card-content"),l=i("link-hover-card");return m(),c("div",null,[e[156]||(e[156]=r("",1)),t(p,null,{default:s(()=>e[0]||(e[0]=[o(" This guide provides step-by-step instructions for developers transitioning their projects from Radix Vue to Reka UI. ")])),_:1}),e[157]||(e[157]=r("",2)),t(d,{value:"reka-ui"},{npm:s(()=>e[1]||(e[1]=[n("div",{name:"npm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," npm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),pnpm:s(()=>e[2]||(e[2]=[n("div",{name:"pnpm",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," pnpm"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),yarn:s(()=>e[3]||(e[3]=[n("div",{name:"yarn",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," yarn"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),bun:s(()=>e[4]||(e[4]=[n("div",{name:"bun",class:"language-sh"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"sh"),n("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"$"),n("span",{style:{color:"#9ECBFF"}}," bun"),n("span",{style:{color:"#9ECBFF"}}," add"),n("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),_:1}),e[158]||(e[158]=r("",9)),n("ul",null,[n("li",null,[e[14]||(e[14]=n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/ee8a3f2366a5c27c2bf1cc0a1ecbb0fea559a9f7",target:"_blank",rel:"noreferrer"},[o("Remove "),n("code",null,"filter-function"),o(" props")]),o(" - "),n("code",null,"Combobox"),o(" has been refactored and improved to support better custom filtering. Read more.")],-1)),n("div",y,[e[12]||(e[12]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[13]||(e[13]=n("span",{class:"lang"},"vue",-1)),n("pre",f,[n("code",null,[e[8]||(e[8]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[9]||(e[9]=o(`
`)),n("span",b,[e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",g,[t(l,{name:"ComboboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
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
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:s(()=>[e[5]||(e[5]=o("ComboboxRoot"))]),_:1})]),e[7]||(e[7]=r("",7))]),e[10]||(e[10]=o(`
`)),e[11]||(e[11]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),e[37]||(e[37]=n("li",null,[n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/e1bab6598c3533dfbf6a86ad26b471ab826df069#diff-833593a5ce28a8c3fabc7d77462b116405e25df2b93bcab449798b5799e73474",target:"_blank",rel:"noreferrer"},[o("Replace "),n("code",null,"searchTerm"),o(" props of Root to Input's "),n("code",null,"v-model")])])],-1)),n("li",null,[e[36]||(e[36]=n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/e1bab6598c3533dfbf6a86ad26b471ab826df069#diff-833593a5ce28a8c3fabc7d77462b116405e25df2b93bcab449798b5799e73474",target:"_blank",rel:"noreferrer"},[o("Move "),n("code",null,"displayValue"),o(" props from Root to Input")])],-1)),n("div",E,[e[34]||(e[34]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[35]||(e[35]=n("span",{class:"lang"},"vue",-1)),n("pre",v,[n("code",null,[e[27]||(e[27]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[28]||(e[28]=o(`
`)),n("span",C,[e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",w,[t(l,{name:"ComboboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
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
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:s(()=>[e[15]||(e[15]=o("ComboboxRoot"))]),_:1})]),e[17]||(e[17]=r("",18))]),e[29]||(e[29]=o(`
`)),n("span",T,[e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",k,[t(l,{name:"ComboboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
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
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:s(()=>[e[18]||(e[18]=o("ComboboxRoot"))]),_:1})]),e[20]||(e[20]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[30]||(e[30]=o(`
`)),n("span",x,[e[22]||(e[22]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",q,[t(l,{name:"ComboboxInput"},{content:s(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"input\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "autoFocus",
    "description": "<p>Focus on element when mounted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with item</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "displayValue",
    "description": "<p>The display value of input for selected item. Does not work with <code>multiple</code>.</p>\\n",
    "type": "((val: any) => string)",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the filter. Can be binded with with v-model.</p>\\n",
    "type": "string",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[string]"
  }
]`})]),default:s(()=>[e[21]||(e[21]=o("ComboboxInput"))]),_:1})]),e[23]||(e[23]=r("",16))]),e[31]||(e[31]=o(`
`)),n("span",F,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",_,[t(l,{name:"ComboboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
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
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:s(()=>[e[24]||(e[24]=o("ComboboxRoot"))]),_:1})]),e[26]||(e[26]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[32]||(e[32]=o(`
`)),e[33]||(e[33]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])]),e[159]||(e[159]=r("",4)),n("div",V,[e[49]||(e[49]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[50]||(e[50]=n("span",{class:"lang"},"vue",-1)),n("pre",A,[n("code",null,[e[44]||(e[44]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[45]||(e[45]=o(`
`)),n("span",B,[e[39]||(e[39]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",S,[t(l,{name:"CheckboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "defaultValue",
    "description": "<p>The value of the checkbox when it is initially rendered. Use when you do not need to control its value.</p>\\n",
    "type": "boolean | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the checkbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the checkbox. Can be binded with v-model.</p>\\n",
    "type": "boolean | \\"indeterminate\\" | null",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: boolean | \\"indeterminate\\"]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "false | true | \\"indeterminate\\""
  },
  {
    "name": "state",
    "description": "<p>Current state</p>\\n",
    "type": "CheckedState"
  }
]`})]),default:s(()=>[e[38]||(e[38]=o("CheckboxRoot"))]),_:1})]),e[40]||(e[40]=r("",8))]),e[46]||(e[46]=o(`
`)),n("span",P,[e[42]||(e[42]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",R,[t(l,{name:"CheckboxRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "defaultValue",
    "description": "<p>The value of the checkbox when it is initially rendered. Use when you do not need to control its value.</p>\\n",
    "type": "boolean | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the checkbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the checkbox. Can be binded with v-model.</p>\\n",
    "type": "boolean | \\"indeterminate\\" | null",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: boolean | \\"indeterminate\\"]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "false | true | \\"indeterminate\\""
  },
  {
    "name": "state",
    "description": "<p>Current state</p>\\n",
    "type": "CheckedState"
  }
]`})]),default:s(()=>[e[41]||(e[41]=o("CheckboxRoot"))]),_:1})]),e[43]||(e[43]=r("",6))]),e[47]||(e[47]=o(`
`)),e[48]||(e[48]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[160]||(e[160]=r("",3)),n("div",D,[e[73]||(e[73]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[74]||(e[74]=n("span",{class:"lang"},"vue",-1)),n("pre",I,[n("code",null,[e[64]||(e[64]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[65]||(e[65]=o(`
`)),n("span",M,[e[52]||(e[52]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",N,[t(l,{name:"DropdownMenuCheckboxItem"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "modelValue",
    "description": "<p>The controlled checked state of the item. Can be used as <code>v-model</code>.</p>\\n",
    "type": "false | true | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. &lt;br&gt;\\nUse this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the user selects an item (via mouse or keyboard). &lt;br&gt;\\nCalling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`})]),default:s(()=>[e[51]||(e[51]=o("DropdownMenuCheckboxItem"))]),_:1})]),e[53]||(e[53]=r("",8))]),e[66]||(e[66]=o(`
`)),n("span",W,[e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",U,[t(l,{name:"DropdownMenuCheckboxItem"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "modelValue",
    "description": "<p>The controlled checked state of the item. Can be used as <code>v-model</code>.</p>\\n",
    "type": "false | true | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. &lt;br&gt;\\nUse this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the user selects an item (via mouse or keyboard). &lt;br&gt;\\nCalling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`})]),default:s(()=>[e[54]||(e[54]=o("DropdownMenuCheckboxItem"))]),_:1})]),e[56]||(e[56]=r("",6))]),e[67]||(e[67]=o(`
`)),e[68]||(e[68]=n("span",{class:"line"},null,-1)),e[69]||(e[69]=o(`
`)),n("span",O,[e[58]||(e[58]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",j,[t(l,{name:"DropdownMenuCheckboxItem"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "modelValue",
    "description": "<p>The controlled checked state of the item. Can be used as <code>v-model</code>.</p>\\n",
    "type": "false | true | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. &lt;br&gt;\\nUse this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the user selects an item (via mouse or keyboard). &lt;br&gt;\\nCalling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`})]),default:s(()=>[e[57]||(e[57]=o("DropdownMenuCheckboxItem"))]),_:1})]),e[59]||(e[59]=n("span",{style:{color:"#B392F0"}}," checked",-1)),e[60]||(e[60]=n("span",{style:{color:"#E1E4E8"}}," /> ",-1))]),e[70]||(e[70]=o(`
`)),n("span",L,[e[62]||(e[62]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",H,[t(l,{name:"DropdownMenuCheckboxItem"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "modelValue",
    "description": "<p>The controlled checked state of the item. Can be used as <code>v-model</code>.</p>\\n",
    "type": "false | true | \\"indeterminate\\"",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. &lt;br&gt;\\nUse this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the user selects an item (via mouse or keyboard). &lt;br&gt;\\nCalling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`})]),default:s(()=>[e[61]||(e[61]=o("DropdownMenuCheckboxItem"))]),_:1})]),e[63]||(e[63]=r("",7))]),e[71]||(e[71]=o(`
`)),e[72]||(e[72]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[161]||(e[161]=r("",1)),n("ul",null,[n("li",null,[e[84]||(e[84]=n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/37bba0c26a3cbe7e7e3e4ac36770be3ef5224f0c",target:"_blank",rel:"noreferrer"},[o("Required "),n("code",null,"itemsPerPage"),o(" prop")]),o(" - Instead of default "),n("code",null,"itemsPerPage"),o(" value, now it is required as to provide a more explicit hint about the page size.")],-1)),n("div",$,[e[82]||(e[82]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[83]||(e[83]=n("span",{class:"lang"},"vue",-1)),n("pre",z,[n("code",null,[e[78]||(e[78]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[79]||(e[79]=o(`
`)),n("span",J,[e[76]||(e[76]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",Y,[t(l,{name:"PaginationRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"nav\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultPage",
    "description": "<p>The value of the page that should be active when initially rendered.</p>\\n<p>Use when you do not need to control the value state.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with item</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "itemsPerPage",
    "description": "<p>Number of items per page</p>\\n",
    "type": "number",
    "required": true
  },
  {
    "name": "page",
    "description": "<p>The controlled value of the current page. Can be binded as <code>v-model:page</code>.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "showEdges",
    "description": "<p>When <code>true</code>, always show first page, last page, and ellipsis</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "siblingCount",
    "description": "<p>Number of sibling should be shown around the current page</p>\\n",
    "type": "number",
    "required": false,
    "default": "2"
  },
  {
    "name": "total",
    "description": "<p>Number of items in your list</p>\\n",
    "type": "number",
    "required": false,
    "default": "0"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:page",
    "description": "<p>Event handler called when the page value changes</p>\\n",
    "type": "[value: number]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "page",
    "description": "<p>Current page state</p>\\n",
    "type": "number"
  },
  {
    "name": "pageCount",
    "description": "<p>Number of pages</p>\\n",
    "type": "number"
  }
]`})]),default:s(()=>[e[75]||(e[75]=o("PaginationRoot"))]),_:1})]),e[77]||(e[77]=r("",7))]),e[80]||(e[80]=o(`
`)),e[81]||(e[81]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])]),e[162]||(e[162]=r("",1)),n("ul",null,[n("li",null,[e[113]||(e[113]=n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/ec146dd8fa0f95f64baf0b29c3424ee31cfb9666",target:"_blank",rel:"noreferrer"},"Remove deprecated step prop"),o(" - Use "),n("code",null,"prevPage/nextPage"),o(" props for greater control.")],-1)),n("div",G,[e[111]||(e[111]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[112]||(e[112]=n("span",{class:"lang"},"vue",-1)),n("pre",K,[n("code",null,[e[103]||(e[103]=r("",18)),n("span",Q,[e[86]||(e[86]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",X,[t(l,{name:"CalendarPrev"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[e[85]||(e[85]=o("CalendarPrev"))]),_:1})]),e[87]||(e[87]=n("span",{style:{color:"#B392F0"}}," step",-1)),e[88]||(e[88]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[89]||(e[89]=n("span",{style:{color:"#9ECBFF"}},'"year"',-1)),e[90]||(e[90]=n("span",{style:{color:"#E1E4E8"}}," /> ",-1))]),e[104]||(e[104]=o(`
`)),n("span",Z,[e[92]||(e[92]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",ee,[t(l,{name:"CalendarPrev"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[e[91]||(e[91]=o("CalendarPrev"))]),_:1})]),e[93]||(e[93]=r("",17))]),e[105]||(e[105]=o(`
`)),e[106]||(e[106]=n("span",{class:"line"},null,-1)),e[107]||(e[107]=o(`
`)),n("span",ne,[e[95]||(e[95]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",te,[t(l,{name:"CalendarNext"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[e[94]||(e[94]=o("CalendarNext"))]),_:1})]),e[96]||(e[96]=n("span",{style:{color:"#B392F0"}}," step",-1)),e[97]||(e[97]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[98]||(e[98]=n("span",{style:{color:"#9ECBFF"}},'"year"',-1)),e[99]||(e[99]=n("span",{style:{color:"#E1E4E8"}}," /> ",-1))]),e[108]||(e[108]=o(`
`)),n("span",oe,[e[101]||(e[101]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",ae,[t(l,{name:"CalendarNext"},{content:s(({})=>[t(a,{title:"props",data:`[
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
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[e[100]||(e[100]=o("CalendarNext"))]),_:1})]),e[102]||(e[102]=r("",16))]),e[109]||(e[109]=o(`
`)),e[110]||(e[110]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])]),e[163]||(e[163]=r("",1)),n("ul",null,[n("li",null,[e[129]||(e[129]=n("p",null,[n("a",{href:"https://github.com/unovue/reka-ui/commit/6a623484d610cc3b7c1a23a77c253c8e95cef518",target:"_blank",rel:"noreferrer"},[n("code",null,"SelectValue"),o(" no longer render teleported element")]),o(" - Previous implementation of "),n("code",null,"SelectValue"),o(" will render the selected "),n("code",null,"SelectItem"),o(" via teleporting fragment. This causes SSR flickering, and it is unnecessarily computation.")],-1)),n("div",se,[e[127]||(e[127]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[128]||(e[128]=n("span",{class:"lang"},"vue",-1)),n("pre",le,[n("code",null,[e[120]||(e[120]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[121]||(e[121]=o(`
`)),n("span",re,[e[115]||(e[115]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",ie,[t(l,{name:"SelectValue"},{content:s(({})=>[t(a,{title:"props",data:`[
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
]`}),t(a,{title:"slots",data:`[
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
]`})]),default:s(()=>[e[114]||(e[114]=o("SelectValue"))]),_:1})]),e[116]||(e[116]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[122]||(e[122]=o(`
`)),e[123]||(e[123]=n("span",{class:"line diff add"},[n("span",{style:{color:"#6A737D"}},"    <!-- render the content similar to `SelectItem` -->")],-1)),e[124]||(e[124]=o(`
`)),n("span",pe,[e[118]||(e[118]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",de,[t(l,{name:"SelectValue"},{content:s(({})=>[t(a,{title:"props",data:`[
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
]`}),t(a,{title:"slots",data:`[
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
]`})]),default:s(()=>[e[117]||(e[117]=o("SelectValue"))]),_:1})]),e[119]||(e[119]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[125]||(e[125]=o(`
`)),e[126]||(e[126]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])]),e[164]||(e[164]=r("",4)),n("div",ue,[e[154]||(e[154]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[155]||(e[155]=n("span",{class:"lang"},"vue",-1)),n("pre",ce,[n("code",null,[e[145]||(e[145]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[146]||(e[146]=o(`
`)),n("span",me,[e[131]||(e[131]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",he,[t(l,{name:"TabsRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
  {
    "name": "activationMode",
    "description": "<p>Whether a tab is activated automatically (on focus) or manually (on click).</p>\\n",
    "type": "\\"automatic\\" | \\"manual\\"",
    "required": false,
    "default": "\\"automatic\\""
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
    "name": "defaultValue",
    "description": "<p>The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs</p>\\n",
    "type": "string | number",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the tab to activate. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "string | number",
    "required": false
  },
  {
    "name": "orientation",
    "description": "<p>The orientation the tabs are laid out.\\nMainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"horizontal\\""
  },
  {
    "name": "unmountOnHide",
    "description": "<p>When <code>true</code>, the element will be unmounted on closed state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes</p>\\n",
    "type": "[payload: StringOrNumber]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "string | number"
  }
]`})]),default:s(()=>[e[130]||(e[130]=o("TabsRoot"))]),_:1})])]),e[147]||(e[147]=r("",7)),n("span",ye,[e[133]||(e[133]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",fe,[t(l,{name:"TabsContent"},{content:s(({})=>[t(a,{title:"props",data:`[
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
  },
  {
    "name": "value",
    "description": "<p>A unique value that associates the content with a trigger.</p>\\n",
    "type": "string | number",
    "required": true
  }
]`})]),default:s(()=>[e[132]||(e[132]=o("TabsContent"))]),_:1})])]),e[148]||(e[148]=r("",11)),n("span",be,[e[135]||(e[135]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",ge,[t(l,{name:"TabsContent"},{content:s(({})=>[t(a,{title:"props",data:`[
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
  },
  {
    "name": "value",
    "description": "<p>A unique value that associates the content with a trigger.</p>\\n",
    "type": "string | number",
    "required": true
  }
]`})]),default:s(()=>[e[134]||(e[134]=o("TabsContent"))]),_:1})]),e[136]||(e[136]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[149]||(e[149]=o(`
`)),n("span",Ee,[e[138]||(e[138]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",ve,[t(l,{name:"TabsContent"},{content:s(({})=>[t(a,{title:"props",data:`[
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
  },
  {
    "name": "value",
    "description": "<p>A unique value that associates the content with a trigger.</p>\\n",
    "type": "string | number",
    "required": true
  }
]`})]),default:s(()=>[e[137]||(e[137]=o("TabsContent"))]),_:1})])]),e[150]||(e[150]=r("",11)),n("span",Ce,[e[140]||(e[140]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",we,[t(l,{name:"TabsContent"},{content:s(({})=>[t(a,{title:"props",data:`[
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
  },
  {
    "name": "value",
    "description": "<p>A unique value that associates the content with a trigger.</p>\\n",
    "type": "string | number",
    "required": true
  }
]`})]),default:s(()=>[e[139]||(e[139]=o("TabsContent"))]),_:1})]),e[141]||(e[141]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[151]||(e[151]=o(`
`)),n("span",Te,[e[143]||(e[143]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",ke,[t(l,{name:"TabsRoot"},{content:s(({})=>[t(a,{title:"props",data:`[
  {
    "name": "activationMode",
    "description": "<p>Whether a tab is activated automatically (on focus) or manually (on click).</p>\\n",
    "type": "\\"automatic\\" | \\"manual\\"",
    "required": false,
    "default": "\\"automatic\\""
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
    "name": "defaultValue",
    "description": "<p>The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs</p>\\n",
    "type": "string | number",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the tab to activate. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "string | number",
    "required": false
  },
  {
    "name": "orientation",
    "description": "<p>The orientation the tabs are laid out.\\nMainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"horizontal\\""
  },
  {
    "name": "unmountOnHide",
    "description": "<p>When <code>true</code>, the element will be unmounted on closed state.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes</p>\\n",
    "type": "[payload: StringOrNumber]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "string | number"
  }
]`})]),default:s(()=>[e[142]||(e[142]=o("TabsRoot"))]),_:1})]),e[144]||(e[144]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[152]||(e[152]=o(`
`)),e[153]||(e[153]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const Pe=u(h,[["render",xe]]);export{Se as __pageData,Pe as default};
