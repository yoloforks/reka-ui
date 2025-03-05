import{_ as u,c,aM as l,e as t,p as a,b as n,a3 as o,au as i,o as m}from"./chunks/framework.6UEeBrHH.js";const se=JSON.parse('{"title":"Controlled State","description":"How to work with controlled vs. uncontrolled state in Reka UI.","frontmatter":{"title":"Controlled State","description":"How to work with controlled vs. uncontrolled state in Reka UI.","sidebar":true},"headers":[{"level":2,"title":"Controlled vs. Uncontrolled State","slug":"controlled-vs-uncontrolled-state","link":"#controlled-vs-uncontrolled-state","children":[{"level":3,"title":"Controlled State","slug":"controlled-state-1","link":"#controlled-state-1","children":[]},{"level":3,"title":"Uncontrolled State","slug":"uncontrolled-state","link":"#uncontrolled-state","children":[]}]},{"level":2,"title":"Common Mistakes & Fixes","slug":"common-mistakes-fixes","link":"#common-mistakes-fixes","children":[{"level":3,"title":"1. Forgetting @update:modelValue","slug":"_1-forgetting-update-modelvalue","link":"#_1-forgetting-update-modelvalue","children":[]},{"level":3,"title":"2. Using modelValue Instead of defaultValue","slug":"_2-using-modelvalue-instead-of-defaultvalue","link":"#_2-using-modelvalue-instead-of-defaultvalue","children":[]},{"level":3,"title":"3. Not Providing a Setter for Computed Props","slug":"_3-not-providing-a-setter-for-computed-props","link":"#_3-not-providing-a-setter-for-computed-props","children":[]}]}],"relativePath":"docs/guides/controlled-state.md","filePath":"docs/guides/controlled-state.md","lastUpdated":1741142384000}'),h={name:"docs/guides/controlled-state.md"},y={name:"vue",class:"language-vue"},f={class:"shiki github-dark vp-code",tabindex:"0"},g={class:"line"},E={style:{color:"#85E89D"}},v={class:"line"},w={style:{color:"#85E89D"}},b={class:"line"},C={style:{color:"#85E89D"}},T={name:"vue",class:"language-vue"},k={class:"shiki github-dark vp-code",tabindex:"0"},q={class:"line"},_={style:{color:"#85E89D"}},x={class:"line"},F={style:{color:"#85E89D"}},S={class:"line"},V={style:{color:"#85E89D"}},A={name:"vue",class:"language-vue"},R={class:"shiki github-dark vp-code",tabindex:"0"},B={class:"line"},M={style:{color:"#85E89D"}},P={class:"line"},D={style:{color:"#85E89D"}},I={class:"line"},U={style:{color:"#85E89D"}},N={name:"vue",class:"language-vue"},W={class:"shiki github-dark vp-code",tabindex:"0"},j={class:"line"},H={style:{color:"#85E89D"}},$={class:"line"},z={style:{color:"#85E89D"}},Y={name:"vue",class:"language-vue"},J={class:"shiki github-dark vp-code",tabindex:"0"},O={class:"line"},G={style:{color:"#85E89D"}},K={class:"line"},L={style:{color:"#85E89D"}};function Q(X,e,Z,ee,ne,te){const d=i("Description"),s=i("link-hover-card-content"),r=i("link-hover-card"),p=i("Callout");return m(),c("div",null,[e[88]||(e[88]=l("",1)),t(d,null,{default:a(()=>e[0]||(e[0]=[o(" How to work with controlled vs. uncontrolled state in Reka UI. ")])),_:1}),e[89]||(e[89]=l("",6)),n("div",y,[e[15]||(e[15]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[16]||(e[16]=n("span",{class:"lang"},"vue",-1)),n("pre",f,[n("code",null,[e[10]||(e[10]=l("",24)),n("span",g,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",E,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[1]||(e[1]=o("SwitchRoot"))]),_:1})]),e[3]||(e[3]=l("",15))]),e[11]||(e[11]=o(`
`)),n("span",v,[e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",w,[t(r,{name:"SwitchThumb"},{content:a(({})=>[t(s,{title:"props",data:`[
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
]`})]),default:a(()=>[e[4]||(e[4]=o("SwitchThumb"))]),_:1})]),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[12]||(e[12]=o(`
`)),n("span",b,[e[8]||(e[8]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",C,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[7]||(e[7]=o("SwitchRoot"))]),_:1})]),e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[13]||(e[13]=o(`
`)),e[14]||(e[14]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[90]||(e[90]=n("p",null,[n("strong",null,"How it works:")],-1)),e[91]||(e[91]=n("ul",null,[n("li",null,[o("The "),n("code",null,"SwitchRoot"),o(" component’s state is managed by the "),n("code",null,"isActive"),o(" ref.")]),n("li",null,[o("The "),n("code",null,"@update:modelValue"),o(" event ensures updates propagate correctly.")])],-1)),t(p,{type:"tip",title:"Use controlled state when:"},{default:a(()=>e[17]||(e[17]=[n("ul",null,[n("li",null,"You need to sync state with Vuex, Pinia, or an API."),n("li",null,"Multiple components rely on the same state."),n("li",null,"You want fine-grained control over updates.")],-1)])),_:1}),e[92]||(e[92]=l("",3)),n("div",T,[e[32]||(e[32]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[33]||(e[33]=n("span",{class:"lang"},"vue",-1)),n("pre",k,[n("code",null,[e[27]||(e[27]=l("",16)),n("span",q,[e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",_,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[18]||(e[18]=o("SwitchRoot"))]),_:1})]),e[20]||(e[20]=l("",6))]),e[28]||(e[28]=o(`
`)),n("span",x,[e[22]||(e[22]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",F,[t(r,{name:"SwitchThumb"},{content:a(({})=>[t(s,{title:"props",data:`[
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
]`})]),default:a(()=>[e[21]||(e[21]=o("SwitchThumb"))]),_:1})]),e[23]||(e[23]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[29]||(e[29]=o(`
`)),n("span",S,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",V,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[24]||(e[24]=o("SwitchRoot"))]),_:1})]),e[26]||(e[26]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[30]||(e[30]=o(`
`)),e[31]||(e[31]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[93]||(e[93]=l("",3)),n("div",A,[e[52]||(e[52]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[53]||(e[53]=n("span",{class:"lang"},"vue",-1)),n("pre",R,[n("code",null,[e[46]||(e[46]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[47]||(e[47]=o(`
`)),n("span",B,[e[35]||(e[35]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",M,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[34]||(e[34]=o("SwitchRoot"))]),_:1})]),e[36]||(e[36]=n("span",{style:{color:"#B392F0"}}," default-value",-1)),e[37]||(e[37]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[38]||(e[38]=n("span",{style:{color:"#9ECBFF"}},'"true"',-1)),e[39]||(e[39]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[48]||(e[48]=o(`
`)),n("span",P,[e[41]||(e[41]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",D,[t(r,{name:"SwitchThumb"},{content:a(({})=>[t(s,{title:"props",data:`[
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
]`})]),default:a(()=>[e[40]||(e[40]=o("SwitchThumb"))]),_:1})]),e[42]||(e[42]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[49]||(e[49]=o(`
`)),n("span",I,[e[44]||(e[44]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",U,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[43]||(e[43]=o("SwitchRoot"))]),_:1})]),e[45]||(e[45]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[50]||(e[50]=o(`
`)),e[51]||(e[51]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[94]||(e[94]=n("p",null,[n("strong",null,"How it works:")],-1)),e[95]||(e[95]=n("ul",null,[n("li",null,[o("The "),n("code",null,"SwitchRoot"),o(" initializes its state with "),n("code",null,"defaultValue"),o(".")]),n("li",null,"State changes occur internally without external control.")],-1)),t(p,{type:"tip",title:"Use uncontrolled state when:"},{default:a(()=>e[54]||(e[54]=[n("ul",null,[n("li",null,"The component does not need to sync with external logic."),n("li",null,"You want a simpler setup without explicit state management."),n("li",null,"The state is local and does not impact other components.")],-1)])),_:1}),e[96]||(e[96]=l("",2)),n("div",N,[e[68]||(e[68]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[69]||(e[69]=n("span",{class:"lang"},"vue",-1)),n("pre",W,[n("code",null,[e[61]||(e[61]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"<!-- ❌ Incorrect: -->")],-1)),e[62]||(e[62]=o(`
`)),n("span",j,[e[56]||(e[56]=n("span",{style:{color:"#E1E4E8"}},"<",-1)),n("span",H,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[55]||(e[55]=o("SwitchRoot"))]),_:1})]),e[57]||(e[57]=l("",7))]),e[63]||(e[63]=o(`
`)),e[64]||(e[64]=n("span",{class:"line"},null,-1)),e[65]||(e[65]=o(`
`)),e[66]||(e[66]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"<!-- ✅ Correct: -->")],-1)),e[67]||(e[67]=o(`
`)),n("span",$,[e[59]||(e[59]=n("span",{style:{color:"#E1E4E8"}},"<",-1)),n("span",z,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[58]||(e[58]=o("SwitchRoot"))]),_:1})]),e[60]||(e[60]=l("",21))])])])]),e[97]||(e[97]=l("",1)),n("div",Y,[e[86]||(e[86]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[87]||(e[87]=n("span",{class:"lang"},"vue",-1)),n("pre",J,[n("code",null,[e[79]||(e[79]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"<!-- ❌ Incorrect: -->")],-1)),e[80]||(e[80]=o(`
`)),n("span",O,[e[71]||(e[71]=n("span",{style:{color:"#E1E4E8"}},"<",-1)),n("span",G,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[70]||(e[70]=o("SwitchRoot"))]),_:1})]),e[72]||(e[72]=l("",7))]),e[81]||(e[81]=o(`
`)),e[82]||(e[82]=n("span",{class:"line"},null,-1)),e[83]||(e[83]=o(`
`)),e[84]||(e[84]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"<!-- ✅ Correct: -->")],-1)),e[85]||(e[85]=o(`
`)),n("span",K,[e[74]||(e[74]=n("span",{style:{color:"#E1E4E8"}},"<",-1)),n("span",L,[t(r,{name:"SwitchRoot"},{content:a(({})=>[t(s,{title:"props",data:`[
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
    "description": "<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the switch.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "id",
    "description": "",
    "type": "string",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "boolean | null",
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
    "type": "string",
    "required": false,
    "default": "\\"on\\""
  }
]`}),t(s,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),t(s,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:a(()=>[e[73]||(e[73]=o("SwitchRoot"))]),_:1})]),e[75]||(e[75]=n("span",{style:{color:"#B392F0"}}," defaultValue",-1)),e[76]||(e[76]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[77]||(e[77]=n("span",{style:{color:"#9ECBFF"}},'"true"',-1)),e[78]||(e[78]=n("span",{style:{color:"#E1E4E8"}}," />",-1))])])])]),e[98]||(e[98]=l("",2))])}const ae=u(h,[["render",Q]]);export{se as __pageData,ae as default};
