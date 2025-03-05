import{aq as b}from"./chunks/theme.DNN3AJD1.js";import{c as g,aM as p,e as o,p as t,b as e,a3 as s,au as a,o as F}from"./chunks/framework.6UEeBrHH.js";const w={name:"index.vue",class:"language-vue"},v={class:"shiki github-dark vp-code",tabindex:"0"},C={class:"line"},k={style:{color:"#85E89D"}},B={class:"line"},T={style:{color:"#85E89D"}},x={class:"line"},q={style:{color:"#85E89D"}},S={name:"index.vue",class:"language-vue"},A={class:"shiki github-dark vp-code",tabindex:"0"},D={class:"line"},V={style:{color:"#85E89D"}},R={class:"line"},M={style:{color:"#85E89D"}},P={class:"line"},I={style:{color:"#85E89D"}},W={name:"vue",class:"language-vue"},j={class:"shiki github-dark vp-code",tabindex:"0"},N={class:"line"},U={style:{color:"#85E89D"}},K={class:"line"},$={style:{color:"#85E89D"}},H={class:"line"},L={style:{color:"#85E89D"}},Q=JSON.parse('{"title":"Switch","description":"A control that allows the user to toggle between checked and not checked.","frontmatter":{"title":"Switch","description":"A control that allows the user to toggle between checked and not checked.","name":"switch","aria":"https://www.w3.org/WAI/ARIA/apg/patterns/switch","sidebar":true},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Root","slug":"root","link":"#root","children":[]},{"level":3,"title":"Thumb","slug":"thumb","link":"#thumb","children":[]}]},{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[{"level":3,"title":"Keyboard Interactions","slug":"keyboard-interactions","link":"#keyboard-interactions","children":[]}]}],"relativePath":"docs/components/switch.md","filePath":"docs/components/switch.md","lastUpdated":1741142384000}'),O={name:"docs/components/switch.md"},Y=Object.assign(O,{setup(X){return(z,n)=>{const c=a("Description"),l=a("link-hover-card-content"),r=a("link-hover-card"),u=a("ComponentPreview"),y=a("Highlights"),E=a("InstallationTabs"),i=a("PropsTable"),m=a("EmitsTable"),h=a("SlotsTable"),d=a("DataAttributesTable"),f=a("KeyboardTable");return F(),g("div",null,[n[141]||(n[141]=p('<h1 id="switch" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Switch <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#switch" aria-label="Permalink to &quot;Switch&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(c,null,{default:t(()=>n[0]||(n[0]=[s(" A control that allows the user to toggle between checked and not checked. ")])),_:1}),o(u,{name:"Switch",type:"demo",files:"%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"},{css:t(()=>[e("div",w,[n[58]||(n[58]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[59]||(n[59]=e("span",{class:"lang"},"vue",-1)),e("pre",v,[e("code",null,[n[8]||(n[8]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[9]||(n[9]=s(`
`)),n[10]||(n[10]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { SwitchRoot, SwitchThumb } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[11]||(n[11]=s(`
`)),n[12]||(n[12]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[13]||(n[13]=s(`
`)),n[14]||(n[14]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#9ECBFF"}}," './styles.css'")],-1)),n[15]||(n[15]=s(`
`)),n[16]||(n[16]=e("span",{class:"line"},null,-1)),n[17]||(n[17]=s(`
`)),n[18]||(n[18]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," switchState"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"false"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[19]||(n[19]=s(`
`)),n[20]||(n[20]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[21]||(n[21]=s(`
`)),n[22]||(n[22]=e("span",{class:"line"},null,-1)),n[23]||(n[23]=s(`
`)),n[24]||(n[24]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[25]||(n[25]=s(`
`)),n[26]||(n[26]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}}," :"),e("span",{style:{color:"#B392F0"}},"style"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ display: "),e("span",{style:{color:"#9ECBFF"}},"'flex'"),e("span",{style:{color:"#E1E4E8"}},", alignItems: "),e("span",{style:{color:"#9ECBFF"}},"'center'"),e("span",{style:{color:"#E1E4E8"}}," }"),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[27]||(n[27]=s(`
`)),n[28]||(n[28]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"label")],-1)),n[29]||(n[29]=s(`
`)),n[30]||(n[30]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Label"')],-1)),n[31]||(n[31]=s(`
`)),n[32]||(n[32]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"airplane-mode"')],-1)),n[33]||(n[33]=s(`
`)),n[34]||(n[34]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[35]||(n[35]=s(`
`)),n[36]||(n[36]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Airplane mode")],-1)),n[37]||(n[37]=s(`
`)),n[38]||(n[38]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"label"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[39]||(n[39]=s(`
`)),e("span",C,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",k,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[1]||(n[1]=s("SwitchRoot"))]),_:1})])]),n[40]||(n[40]=s(`
`)),n[41]||(n[41]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      id"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"airplane-mode"')],-1)),n[42]||(n[42]=s(`
`)),n[43]||(n[43]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"switchState"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[44]||(n[44]=s(`
`)),n[45]||(n[45]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SwitchRoot"')],-1)),n[46]||(n[46]=s(`
`)),n[47]||(n[47]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[48]||(n[48]=s(`
`)),e("span",B,[n[4]||(n[4]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",T,[o(r,{name:"SwitchThumb"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[n[3]||(n[3]=s("SwitchThumb"))]),_:1})])]),n[49]||(n[49]=s(`
`)),n[50]||(n[50]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SwitchThumb"')],-1)),n[51]||(n[51]=s(`
`)),n[52]||(n[52]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      />")],-1)),n[53]||(n[53]=s(`
`)),e("span",x,[n[6]||(n[6]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",q,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[5]||(n[5]=s("SwitchRoot"))]),_:1})]),n[7]||(n[7]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[54]||(n[54]=s(`
`)),n[55]||(n[55]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[56]||(n[56]=s(`
`)),n[57]||(n[57]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[60]||(n[60]=e("div",{name:"styles.css",class:"language-css"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"css"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/black-alpha.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/* reset */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"button"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  all"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"unset"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SwitchRoot"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"42"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a9"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"9999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a7"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  -webkit-tap-highlight-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SwitchRoot:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," black"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SwitchRoot"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-state"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#9ECBFF"}},"'checked'"),e("span",{style:{color:"#E1E4E8"}},"] {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"black"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SwitchThumb"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"block"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"21"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"21"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"9999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a7"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  transition"),e("span",{style:{color:"#E1E4E8"}},": transform "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"ms"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  transform"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"translateX"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  will-change"),e("span",{style:{color:"#E1E4E8"}},": transform;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SwitchThumb"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-state"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#9ECBFF"}},"'checked'"),e("span",{style:{color:"#E1E4E8"}},"] {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  transform"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"translateX"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"19"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Label"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),tailwind:t(()=>[e("div",S,[n[118]||(n[118]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[119]||(n[119]=e("span",{class:"lang"},"vue",-1)),e("pre",A,[e("code",null,[n[68]||(n[68]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[69]||(n[69]=s(`
`)),n[70]||(n[70]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { SwitchRoot, SwitchThumb } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[71]||(n[71]=s(`
`)),n[72]||(n[72]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[73]||(n[73]=s(`
`)),n[74]||(n[74]=e("span",{class:"line"},null,-1)),n[75]||(n[75]=s(`
`)),n[76]||(n[76]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," switchState"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"false"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[77]||(n[77]=s(`
`)),n[78]||(n[78]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[79]||(n[79]=s(`
`)),n[80]||(n[80]=e("span",{class:"line"},null,-1)),n[81]||(n[81]=s(`
`)),n[82]||(n[82]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[83]||(n[83]=s(`
`)),n[84]||(n[84]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex gap-2 items-center"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[85]||(n[85]=s(`
`)),n[86]||(n[86]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"label")],-1)),n[87]||(n[87]=s(`
`)),n[88]||(n[88]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-stone-700 dark:text-white text-sm leading-none pr-2 select-none"')],-1)),n[89]||(n[89]=s(`
`)),n[90]||(n[90]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"airplane-mode"')],-1)),n[91]||(n[91]=s(`
`)),n[92]||(n[92]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[93]||(n[93]=s(`
`)),n[94]||(n[94]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Airplane mode")],-1)),n[95]||(n[95]=s(`
`)),n[96]||(n[96]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"label"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[97]||(n[97]=s(`
`)),n[98]||(n[98]=e("span",{class:"line"},null,-1)),n[99]||(n[99]=s(`
`)),e("span",D,[n[62]||(n[62]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",V,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[61]||(n[61]=s("SwitchRoot"))]),_:1})])]),n[100]||(n[100]=s(`
`)),n[101]||(n[101]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      id"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"airplane-mode"')],-1)),n[102]||(n[102]=s(`
`)),n[103]||(n[103]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"switchState"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[104]||(n[104]=s(`
`)),n[105]||(n[105]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-[32px] h-[20px] shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800"')],-1)),n[106]||(n[106]=s(`
`)),n[107]||(n[107]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[108]||(n[108]=s(`
`)),e("span",R,[n[64]||(n[64]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",M,[o(r,{name:"SwitchThumb"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[n[63]||(n[63]=s("SwitchThumb"))]),_:1})])]),n[109]||(n[109]=s(`
`)),n[110]||(n[110]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full"')],-1)),n[111]||(n[111]=s(`
`)),n[112]||(n[112]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      />")],-1)),n[113]||(n[113]=s(`
`)),e("span",P,[n[66]||(n[66]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",I,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[65]||(n[65]=s("SwitchRoot"))]),_:1})]),n[67]||(n[67]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[114]||(n[114]=s(`
`)),n[115]||(n[115]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[116]||(n[116]=s(`
`)),n[117]||(n[117]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[120]||(n[120]=e("div",{name:"tailwind.config.js",class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/** "),e("span",{style:{color:"#F97583"}},"@type"),e("span",{style:{color:"#B392F0"}}," {import('tailwindcss').Config}"),e("span",{style:{color:"#6A737D"}}," */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"module"),e("span",{style:{color:"#E1E4E8"}},"."),e("span",{style:{color:"#79B8FF"}},"exports"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  content: ["),e("span",{style:{color:"#9ECBFF"}},"'./**/*.vue'"),e("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  theme: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    extend: {},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  plugins: [],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),default:t(()=>[o(b)]),_:1}),n[142]||(n[142]=p('<h2 id="features" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Features <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#features" aria-label="Permalink to &quot;Features&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2>',1)),o(y,{features:["Full keyboard navigation.","Can be controlled or uncontrolled."]}),n[143]||(n[143]=p('<h2 id="installation" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Installation <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#installation" aria-label="Permalink to &quot;Installation&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Install the component from your command line.</p>',2)),o(E,{value:"reka-ui"},{npm:t(()=>n[121]||(n[121]=[e("div",{name:"npm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," npm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),pnpm:t(()=>n[122]||(n[122]=[e("div",{name:"pnpm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," pnpm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),yarn:t(()=>n[123]||(n[123]=[e("div",{name:"yarn",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," yarn"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),bun:t(()=>n[124]||(n[124]=[e("div",{name:"bun",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," bun"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),_:1}),n[144]||(n[144]=p('<h2 id="anatomy" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Anatomy <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Import all parts and piece them together.</p>',2)),e("div",W,[n[139]||(n[139]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[140]||(n[140]=e("span",{class:"lang"},"vue",-1)),e("pre",j,[e("code",null,[n[134]||(n[134]=p(`<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { SwitchRoot, SwitchThumb } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;reka-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
`,10)),e("span",N,[n[126]||(n[126]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",U,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[125]||(n[125]=s("SwitchRoot"))]),_:1})]),n[127]||(n[127]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[135]||(n[135]=s(`
`)),e("span",K,[n[129]||(n[129]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",$,[o(r,{name:"SwitchThumb"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[n[128]||(n[128]=s("SwitchThumb"))]),_:1})]),n[130]||(n[130]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[136]||(n[136]=s(`
`)),e("span",H,[n[132]||(n[132]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",L,[o(r,{name:"SwitchRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value of the switch changes.</p>\\n",
    "type": "[payload: boolean]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current value</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[n[131]||(n[131]=s("SwitchRoot"))]),_:1})]),n[133]||(n[133]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[137]||(n[137]=s(`
`)),n[138]||(n[138]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[145]||(n[145]=p('<h2 id="api-reference" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">API Reference <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><h3 id="root" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Root <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#root" aria-label="Permalink to &quot;Root&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>Contains all the parts of a switch. An <code>input</code> will also render when used within a <code>form</code> to ensure events propagate correctly.</p>',3)),o(i,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'button'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The state of the switch when it is initially rendered. Use when you do not need to control its state.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the switch.</p>
`,type:"boolean",required:!1},{name:"id",description:"",type:"string",required:!1},{name:"modelValue",description:`<p>The controlled state of the switch. Can be bind as <code>v-model</code>.</p>
`,type:"boolean | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"value",description:`<p>The value given as data when submitted with a <code>name</code>.</p>
`,type:"string",required:!1,default:"'on'"}]}),o(m,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value of the switch changes.</p>
`,type:"[payload: boolean]"}]}),o(h,{data:[{name:"modelValue",description:`<p>Current value</p>
`,type:"boolean"}]}),o(d,{data:[{attribute:"[data-state]",values:["checked","unchecked"]},{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[146]||(n[146]=p('<h3 id="thumb" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Thumb <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#thumb" aria-label="Permalink to &quot;Thumb&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3><p>The thumb that is used to visually indicate whether the switch is on or off.</p>',2)),o(i,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'span'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),o(d,{data:[{attribute:"[data-state]",values:["checked","unchecked"]},{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[147]||(n[147]=p('<h2 id="accessibility" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Accessibility <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h2><p>Adheres to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch" target="_blank" rel="noreferrer"><code>switch</code> role requirements</a>.</p><h3 id="keyboard-interactions" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Keyboard Interactions <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#keyboard-interactions" aria-label="Permalink to &quot;Keyboard Interactions&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h3>',3)),o(f,{data:[{keys:["Space"],description:"Toggles the component's state."},{keys:["Enter"],description:"Toggles the component's state."}]})])}}});export{Q as __pageData,Y as default};
