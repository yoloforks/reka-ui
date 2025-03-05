import{aH as b,aI as h,I as g,aJ as v}from"./chunks/theme.DNN3AJD1.js";import{d as w,f as x,o as u,l as k,p as s,c as E,a6 as C,F,u as p,b as n,e as t,t as q,aM as B,au as r,a3 as o}from"./chunks/framework.6UEeBrHH.js";const T={class:"flex flex-row gap-4 items-center"},V={class:"select-none dark:text-white"},D=w({__name:"index",setup(y){const d=x([]),e=[{label:"Soccer",value:"soccer"},{label:"Badminton",value:"badminton"},{label:"Basketball",value:"basketball"}];return(m,i)=>(u(),k(p(v),{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=l=>d.value=l),class:"flex flex-col gap-2.5"},{default:s(()=>[(u(),E(F,null,C(e,l=>n("div",{key:l.value,class:"flex items-center gap-3"},[t(p(b),{value:l.value,class:"shadow-blackA7 hover:bg-green3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-md bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"},{default:s(()=>[t(p(h),{class:"bg-white h-full w-full rounded flex items-center justify-center"},{default:s(()=>[t(p(g),{icon:"radix-icons:check",class:"h-3.5 w-3.5 text-grass11"})]),_:1})]),_:2},1032,["value"]),n("label",T,[n("span",V,q(l.label),1)])])),64))]),_:1},8,["modelValue"]))}}),A={name:"index.vue",class:"language-vue"},R={class:"shiki github-dark vp-code",tabindex:"0"},S={class:"line"},I={style:{color:"#85E89D"}},G={class:"line"},M={style:{color:"#85E89D"}},W={class:"line"},U={style:{color:"#85E89D"}},P={class:"line"},j={style:{color:"#85E89D"}},N={class:"line"},$={style:{color:"#85E89D"}},z={class:"line"},J={style:{color:"#85E89D"}},Y=JSON.parse('{"title":"Checkbox Group","description":"","frontmatter":{"title":"Checkbox Group","tags":["Checkbox","Form controls"],"sidebar":true},"headers":[{"level":3,"title":"Checkbox Group","slug":"checkbox-group-1","link":"#checkbox-group-1","children":[]}],"relativePath":"examples/checkbox-group.md","filePath":"examples/checkbox-group.md","lastUpdated":1741142384000}'),O={name:"examples/checkbox-group.md"},K=Object.assign(O,{setup(y){return(d,e)=>{const m=r("Description"),i=r("Tags"),l=r("link-hover-card-content"),a=r("link-hover-card"),c=r("ComponentPreview"),f=r("ExampleSection");return u(),E("div",null,[e[98]||(e[98]=B("",1)),t(m,null,{default:s(()=>e[0]||(e[0]=[n("p",null,[o("Rendering multiple Checkbox elements to form a group of checkboxes. The behavior is similar to having "),n("code",null,"v-model"),o(" for multiple native "),n("code",null,'input[type="checkbox"]'),o(".")],-1)])),_:1}),t(i),t(c,{name:"CheckboxGroup",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:s(()=>[n("div",A,[e[95]||(e[95]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[96]||(e[96]=n("span",{class:"lang"},"vue",-1)),n("pre",R,[n("code",null,[e[20]||(e[20]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#B392F0"}}," setup"),n("span",{style:{color:"#B392F0"}}," lang"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"ts"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[21]||(e[21]=o(`
`)),e[22]||(e[22]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { ref } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),e[23]||(e[23]=o(`
`)),e[24]||(e[24]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { CheckboxGroupRoot, CheckboxIndicator, CheckboxRoot } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),e[25]||(e[25]=o(`
`)),e[26]||(e[26]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { Icon } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),e[27]||(e[27]=o(`
`)),e[28]||(e[28]=n("span",{class:"line"},null,-1)),e[29]||(e[29]=o(`
`)),e[30]||(e[30]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," values"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," ref"),n("span",{style:{color:"#E1E4E8"}},"([])")],-1)),e[31]||(e[31]=o(`
`)),e[32]||(e[32]=n("span",{class:"line"},null,-1)),e[33]||(e[33]=o(`
`)),e[34]||(e[34]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," items"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," [")],-1)),e[35]||(e[35]=o(`
`)),e[36]||(e[36]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  { label: "),n("span",{style:{color:"#9ECBFF"}},"'Soccer'"),n("span",{style:{color:"#E1E4E8"}},", value: "),n("span",{style:{color:"#9ECBFF"}},"'soccer'"),n("span",{style:{color:"#E1E4E8"}}," },")],-1)),e[37]||(e[37]=o(`
`)),e[38]||(e[38]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  { label: "),n("span",{style:{color:"#9ECBFF"}},"'Badminton'"),n("span",{style:{color:"#E1E4E8"}},", value: "),n("span",{style:{color:"#9ECBFF"}},"'badminton'"),n("span",{style:{color:"#E1E4E8"}}," },")],-1)),e[39]||(e[39]=o(`
`)),e[40]||(e[40]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  { label: "),n("span",{style:{color:"#9ECBFF"}},"'Basketball'"),n("span",{style:{color:"#E1E4E8"}},", value: "),n("span",{style:{color:"#9ECBFF"}},"'basketball'"),n("span",{style:{color:"#E1E4E8"}}," },")],-1)),e[41]||(e[41]=o(`
`)),e[42]||(e[42]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"]")],-1)),e[43]||(e[43]=o(`
`)),e[44]||(e[44]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[45]||(e[45]=o(`
`)),e[46]||(e[46]=n("span",{class:"line"},null,-1)),e[47]||(e[47]=o(`
`)),e[48]||(e[48]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[49]||(e[49]=o(`
`)),n("span",S,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",I,[t(a,{name:"CheckboxGroupRoot"},{content:s(({})=>[t(l,{title:"props",data:`[
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
    "description": "<p>The value of the checkbox when it is initially rendered. Use when you do not need to control its value.</p>\\n",
    "type": "AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The direction of navigation between items.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the checkboxes</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "loop",
    "description": "<p>Whether keyboard navigation should loop around</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the checkbox. Can be binded with v-model.</p>\\n",
    "type": "AcceptableValue[]",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "orientation",
    "description": "<p>The orientation of the group.\\nMainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "rovingFocus",
    "description": "<p>When <code>false</code>, navigating through the items using arrow keys will be disabled.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: AcceptableValue[]]"
  }
]`})]),default:s(()=>[e[1]||(e[1]=o("CheckboxGroupRoot"))]),_:1})])]),e[50]||(e[50]=o(`
`)),e[51]||(e[51]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"values"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[52]||(e[52]=o(`
`)),e[53]||(e[53]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex flex-col gap-2.5"')],-1)),e[54]||(e[54]=o(`
`)),e[55]||(e[55]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  >")],-1)),e[56]||(e[56]=o(`
`)),e[57]||(e[57]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    <"),n("span",{style:{color:"#85E89D"}},"div")],-1)),e[58]||(e[58]=o(`
`)),e[59]||(e[59]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," items"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[60]||(e[60]=o(`
`)),e[61]||(e[61]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.value"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[62]||(e[62]=o(`
`)),e[63]||(e[63]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"      class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex items-center gap-3"')],-1)),e[64]||(e[64]=o(`
`)),e[65]||(e[65]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    >")],-1)),e[66]||(e[66]=o(`
`)),n("span",G,[e[4]||(e[4]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",M,[t(a,{name:"CheckboxRoot"},{content:s(({})=>[t(l,{title:"props",data:`[
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
]`}),t(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: boolean | \\"indeterminate\\"]"
  }
]`}),t(l,{title:"slots",data:`[
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
]`})]),default:s(()=>[e[3]||(e[3]=o("CheckboxRoot"))]),_:1})])]),e[67]||(e[67]=o(`
`)),e[68]||(e[68]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"value"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.value"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[69]||(e[69]=o(`
`)),e[70]||(e[70]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"shadow-blackA7 hover:bg-green3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-md bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"')],-1)),e[71]||(e[71]=o(`
`)),e[72]||(e[72]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[73]||(e[73]=o(`
`)),n("span",W,[e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",U,[t(a,{name:"CheckboxIndicator"},{content:s(({})=>[t(l,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[e[5]||(e[5]=o("CheckboxIndicator"))]),_:1})]),e[7]||(e[7]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[8]||(e[8]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[9]||(e[9]=n("span",{style:{color:"#9ECBFF"}},'"bg-white h-full w-full rounded flex items-center justify-center"',-1)),e[10]||(e[10]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[74]||(e[74]=o(`
`)),e[75]||(e[75]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"Icon")],-1)),e[76]||(e[76]=o(`
`)),e[77]||(e[77]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            icon"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"')],-1)),e[78]||(e[78]=o(`
`)),e[79]||(e[79]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"h-3.5 w-3.5 text-grass11"')],-1)),e[80]||(e[80]=o(`
`)),e[81]||(e[81]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          />")],-1)),e[82]||(e[82]=o(`
`)),n("span",P,[e[12]||(e[12]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",j,[t(a,{name:"CheckboxIndicator"},{content:s(({})=>[t(l,{title:"props",data:`[
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
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:s(()=>[e[11]||(e[11]=o("CheckboxIndicator"))]),_:1})]),e[13]||(e[13]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[83]||(e[83]=o(`
`)),n("span",N,[e[15]||(e[15]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",$,[t(a,{name:"CheckboxRoot"},{content:s(({})=>[t(l,{title:"props",data:`[
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
]`}),t(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: boolean | \\"indeterminate\\"]"
  }
]`}),t(l,{title:"slots",data:`[
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
]`})]),default:s(()=>[e[14]||(e[14]=o("CheckboxRoot"))]),_:1})]),e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[84]||(e[84]=o(`
`)),e[85]||(e[85]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      <"),n("span",{style:{color:"#85E89D"}},"label"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex flex-row gap-4 items-center"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[86]||(e[86]=o(`
`)),e[87]||(e[87]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"select-none dark:text-white"'),n("span",{style:{color:"#E1E4E8"}},">{{ item.label }}</"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[88]||(e[88]=o(`
`)),e[89]||(e[89]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      </"),n("span",{style:{color:"#85E89D"}},"label"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[90]||(e[90]=o(`
`)),e[91]||(e[91]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[92]||(e[92]=o(`
`)),n("span",z,[e[18]||(e[18]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",J,[t(a,{name:"CheckboxGroupRoot"},{content:s(({})=>[t(l,{title:"props",data:`[
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
    "description": "<p>The value of the checkbox when it is initially rendered. Use when you do not need to control its value.</p>\\n",
    "type": "AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The direction of navigation between items.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the checkboxes</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "loop",
    "description": "<p>Whether keyboard navigation should loop around</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the checkbox. Can be binded with v-model.</p>\\n",
    "type": "AcceptableValue[]",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "orientation",
    "description": "<p>The orientation of the group.\\nMainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "rovingFocus",
    "description": "<p>When <code>false</code>, navigating through the items using arrow keys will be disabled.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the checkbox changes.</p>\\n",
    "type": "[value: AcceptableValue[]]"
  }
]`})]),default:s(()=>[e[17]||(e[17]=o("CheckboxGroupRoot"))]),_:1})]),e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[93]||(e[93]=o(`
`)),e[94]||(e[94]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:s(()=>[t(D)]),_:1}),t(f,null,{default:s(()=>e[97]||(e[97]=[n("h3",{id:"checkbox-group-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[o("Checkbox Group "),n("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#checkbox-group-1","aria-label":'Permalink to "Checkbox Group"'},[n("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[o("​"),n("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[n("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[n("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1),n("p",null,"Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.",-1)])),_:1})])}}});export{Y as __pageData,K as default};
