import{ah as v}from"./chunks/theme.xbZkG0Yt.js";import{c as f,aM as p,e as l,p as a,b as e,a3 as s,au as t,o as h}from"./chunks/framework.6UEeBrHH.js";const F={name:"index.vue",class:"language-vue"},x={class:"shiki github-dark vp-code",tabindex:"0"},C={class:"line"},w={style:{color:"#85E89D"}},k={class:"line"},B={style:{color:"#85E89D"}},T={class:"line"},A={style:{color:"#85E89D"}},P={name:"index.vue",class:"language-vue"},V={class:"shiki github-dark vp-code",tabindex:"0"},q={class:"line"},M={style:{color:"#85E89D"}},I={class:"line"},D={style:{color:"#85E89D"}},R={class:"line"},L={style:{color:"#85E89D"}},S={name:"vue",class:"language-vue"},U={class:"shiki github-dark vp-code",tabindex:"0"},X={class:"line"},$={style:{color:"#85E89D"}},j={class:"line"},N={style:{color:"#85E89D"}},z={class:"line"},H={style:{color:"#85E89D"}},K=JSON.parse('{"title":"Progress","description":"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.","frontmatter":{"title":"Progress","description":"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.","name":"progress","aria":"https://www.w3.org/WAI/ARIA/apg/patterns/meter","sidebar":true},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]}]},{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Root","slug":"root","link":"#root","children":[]},{"level":3,"title":"Indicator","slug":"indicator","link":"#indicator","children":[]}]}],"relativePath":"docs/components/progress.md","filePath":"docs/components/progress.md","lastUpdated":1741142868000}'),O={name:"docs/components/progress.md"},Q=Object.assign(O,{setup(W){return(Z,n)=>{const u=t("Description"),o=t("link-hover-card-content"),r=t("link-hover-card"),m=t("ComponentPreview"),E=t("Highlights"),y=t("InstallationTabs"),i=t("PropsTable"),c=t("EmitsTable"),g=t("SlotsTable"),b=t("MethodsTable"),d=t("DataAttributesTable");return h(),f("div",null,[n[151]||(n[151]=p("",1)),l(u,null,{default:a(()=>n[0]||(n[0]=[s(" Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. ")])),_:1}),l(m,{name:"Progress",type:"demo",files:"%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"},{css:a(()=>[e("div",F,[n[54]||(n[54]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[55]||(n[55]=e("span",{class:"lang"},"vue",-1)),e("pre",x,[e("code",null,[n[8]||(n[8]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[9]||(n[9]=s(`
`)),n[10]||(n[10]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[11]||(n[11]=s(`
`)),n[12]||(n[12]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ProgressIndicator, ProgressRoot } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[13]||(n[13]=s(`
`)),n[14]||(n[14]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#9ECBFF"}}," './styles.css'")],-1)),n[15]||(n[15]=s(`
`)),n[16]||(n[16]=e("span",{class:"line"},null,-1)),n[17]||(n[17]=s(`
`)),n[18]||(n[18]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," progressValue"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"10"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[19]||(n[19]=s(`
`)),n[20]||(n[20]=e("span",{class:"line"},null,-1)),n[21]||(n[21]=s(`
`)),n[22]||(n[22]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"onMounted"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[23]||(n[23]=s(`
`)),n[24]||(n[24]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  const"),e("span",{style:{color:"#79B8FF"}}," timer"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," setTimeout"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," (progressValue.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}}," 66"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[25]||(n[25]=s(`
`)),n[26]||(n[26]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," () "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," clearTimeout"),e("span",{style:{color:"#E1E4E8"}},"(timer)")],-1)),n[27]||(n[27]=s(`
`)),n[28]||(n[28]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[29]||(n[29]=s(`
`)),n[30]||(n[30]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[31]||(n[31]=s(`
`)),n[32]||(n[32]=e("span",{class:"line"},null,-1)),n[33]||(n[33]=s(`
`)),n[34]||(n[34]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[35]||(n[35]=s(`
`)),e("span",C,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",w,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[1]||(n[1]=s("ProgressRoot"))]),_:1})])]),n[36]||(n[36]=s(`
`)),n[37]||(n[37]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"progressValue"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[38]||(n[38]=s(`
`)),n[39]||(n[39]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ProgressRoot"')],-1)),n[40]||(n[40]=s(`
`)),n[41]||(n[41]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    style"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"transform"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"translateZ"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[42]||(n[42]=s(`
`)),n[43]||(n[43]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[44]||(n[44]=s(`
`)),e("span",k,[n[4]||(n[4]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",B,[l(r,{name:"ProgressIndicator"},{content:a(({})=>[l(o,{title:"props",data:`[
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
]`})]),default:a(()=>[n[3]||(n[3]=s("ProgressIndicator"))]),_:1})])]),n[45]||(n[45]=s(`
`)),n[46]||(n[46]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ProgressIndicator"')],-1)),n[47]||(n[47]=s(`
`)),n[48]||(n[48]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"style"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`transform: translateX(-${'),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}}," -"),e("span",{style:{color:"#E1E4E8"}}," progressValue"),e("span",{style:{color:"#9ECBFF"}},'}%)`"')],-1)),n[49]||(n[49]=s(`
`)),n[50]||(n[50]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    />")],-1)),n[51]||(n[51]=s(`
`)),e("span",T,[n[6]||(n[6]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",A,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[5]||(n[5]=s("ProgressRoot"))]),_:1})]),n[7]||(n[7]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[52]||(n[52]=s(`
`)),n[53]||(n[53]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[56]||(n[56]=e("div",{name:"styles.css",class:"language-css"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"css"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/black-alpha.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".ProgressRoot"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  overflow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"hidden"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a9"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"99999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"300"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"  /* Fix overflow clipping in Safari */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  transform"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"translateZ"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".ProgressIndicator"),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  transition"),e("span",{style:{color:"#E1E4E8"}},": transform "),e("span",{style:{color:"#79B8FF"}},"660"),e("span",{style:{color:"#F97583"}},"ms"),e("span",{style:{color:"#79B8FF"}}," cubic-bezier"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0.65"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.35"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),tailwind:a(()=>[e("div",P,[n[128]||(n[128]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[129]||(n[129]=e("span",{class:"lang"},"vue",-1)),e("pre",V,[e("code",null,[n[64]||(n[64]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[65]||(n[65]=s(`
`)),n[66]||(n[66]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { onBeforeUnmount, onMounted, ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[67]||(n[67]=s(`
`)),n[68]||(n[68]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ProgressIndicator, ProgressRoot } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[69]||(n[69]=s(`
`)),n[70]||(n[70]=e("span",{class:"line"},null,-1)),n[71]||(n[71]=s(`
`)),n[72]||(n[72]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," progressValue"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"10"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[73]||(n[73]=s(`
`)),n[74]||(n[74]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," timer"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"()")],-1)),n[75]||(n[75]=s(`
`)),n[76]||(n[76]=e("span",{class:"line"},null,-1)),n[77]||(n[77]=s(`
`)),n[78]||(n[78]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"onMounted"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[79]||(n[79]=s(`
`)),n[80]||(n[80]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  timer.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," setInterval"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[81]||(n[81]=s(`
`)),n[82]||(n[82]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    if"),e("span",{style:{color:"#E1E4E8"}}," (progressValue.value "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 100"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[83]||(n[83]=s(`
`)),n[84]||(n[84]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      progressValue.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}}," 10")],-1)),n[85]||(n[85]=s(`
`)),n[86]||(n[86]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    }")],-1)),n[87]||(n[87]=s(`
`)),n[88]||(n[88]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    else"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[89]||(n[89]=s(`
`)),n[90]||(n[90]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      progressValue.value "),e("span",{style:{color:"#F97583"}},"+="),e("span",{style:{color:"#79B8FF"}}," 30")],-1)),n[91]||(n[91]=s(`
`)),n[92]||(n[92]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    }")],-1)),n[93]||(n[93]=s(`
`)),n[94]||(n[94]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  }, "),e("span",{style:{color:"#79B8FF"}},"2000"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[95]||(n[95]=s(`
`)),n[96]||(n[96]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[97]||(n[97]=s(`
`)),n[98]||(n[98]=e("span",{class:"line"},null,-1)),n[99]||(n[99]=s(`
`)),n[100]||(n[100]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"onBeforeUnmount"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[101]||(n[101]=s(`
`)),n[102]||(n[102]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  clearTimeout"),e("span",{style:{color:"#E1E4E8"}},"(timer.value)")],-1)),n[103]||(n[103]=s(`
`)),n[104]||(n[104]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[105]||(n[105]=s(`
`)),n[106]||(n[106]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[107]||(n[107]=s(`
`)),n[108]||(n[108]=e("span",{class:"line"},null,-1)),n[109]||(n[109]=s(`
`)),n[110]||(n[110]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[111]||(n[111]=s(`
`)),e("span",q,[n[58]||(n[58]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",M,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[57]||(n[57]=s("ProgressRoot"))]),_:1})])]),n[112]||(n[112]=s(`
`)),n[113]||(n[113]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"progressValue"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[114]||(n[114]=s(`
`)),n[115]||(n[115]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"rounded-full relative h-4 w-[300px] overflow-hidden bg-white dark:bg-stone-950 border border-muted"')],-1)),n[116]||(n[116]=s(`
`)),n[117]||(n[117]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[118]||(n[118]=s(`
`)),e("span",I,[n[60]||(n[60]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",D,[l(r,{name:"ProgressIndicator"},{content:a(({})=>[l(o,{title:"props",data:`[
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
]`})]),default:a(()=>[n[59]||(n[59]=s("ProgressIndicator"))]),_:1})])]),n[119]||(n[119]=s(`
`)),n[120]||(n[120]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},`"indicator rounded-full block relative w-full h-full bg-grass9 transition-transform overflow-hidden duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] after:animate-progress after:content-[''] after:absolute after:inset-0  after:bg-[linear-gradient(-45deg,_rgba(255,255,255,0.2)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.2)_50%,_rgba(255,255,255,0.2)_75%,_transparent_75%,_transparent)] after:bg-[length:30px_30px]"`)],-1)),n[121]||(n[121]=s(`
`)),n[122]||(n[122]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"style"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`transform: translateX(-${'),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}}," -"),e("span",{style:{color:"#E1E4E8"}}," progressValue"),e("span",{style:{color:"#9ECBFF"}},'}%)`"')],-1)),n[123]||(n[123]=s(`
`)),n[124]||(n[124]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    />")],-1)),n[125]||(n[125]=s(`
`)),e("span",R,[n[62]||(n[62]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",L,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[61]||(n[61]=s("ProgressRoot"))]),_:1})]),n[63]||(n[63]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[126]||(n[126]=s(`
`)),n[127]||(n[127]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[130]||(n[130]=e("div",{name:"tailwind.config.js",class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," { "),e("span",{style:{color:"#79B8FF"}},"blackA"),e("span",{style:{color:"#E1E4E8"}}," } "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," require"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'@radix-ui/colors'"),e("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/** "),e("span",{style:{color:"#F97583"}},"@type"),e("span",{style:{color:"#B392F0"}}," {import('tailwindcss').Config}"),e("span",{style:{color:"#6A737D"}}," */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"module"),e("span",{style:{color:"#E1E4E8"}},"."),e("span",{style:{color:"#79B8FF"}},"exports"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  content: ["),e("span",{style:{color:"#9ECBFF"}},"'./**/*.vue'"),e("span",{style:{color:"#E1E4E8"}},"],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  theme: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    extend: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      colors: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"blackA,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    keyframes: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      progress: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"        '0%'"),e("span",{style:{color:"#E1E4E8"}},": { backgroundPosition: "),e("span",{style:{color:"#9ECBFF"}},"'0 0'"),e("span",{style:{color:"#E1E4E8"}}," },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"        '100%'"),e("span",{style:{color:"#E1E4E8"}},": { backgroundPosition: "),e("span",{style:{color:"#9ECBFF"}},"'30px 30px'"),e("span",{style:{color:"#E1E4E8"}}," },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    animation: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      progress: "),e("span",{style:{color:"#9ECBFF"}},"'progress 1s infinite linear'"),e("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  plugins: [],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),default:a(()=>[l(v)]),_:1}),n[152]||(n[152]=p("",1)),l(E,{features:["Provides context for assistive technology to read the progress of a task."]}),n[153]||(n[153]=p("",2)),l(y,{value:"reka-ui"},{npm:a(()=>n[131]||(n[131]=[e("div",{name:"npm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," npm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),pnpm:a(()=>n[132]||(n[132]=[e("div",{name:"pnpm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," pnpm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),yarn:a(()=>n[133]||(n[133]=[e("div",{name:"yarn",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," yarn"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),bun:a(()=>n[134]||(n[134]=[e("div",{name:"bun",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," bun"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),_:1}),n[154]||(n[154]=p("",2)),e("div",S,[n[149]||(n[149]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[150]||(n[150]=e("span",{class:"lang"},"vue",-1)),e("pre",U,[e("code",null,[n[144]||(n[144]=p("",10)),e("span",X,[n[136]||(n[136]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",$,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[135]||(n[135]=s("ProgressRoot"))]),_:1})]),n[137]||(n[137]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[145]||(n[145]=s(`
`)),e("span",j,[n[139]||(n[139]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",N,[l(r,{name:"ProgressIndicator"},{content:a(({})=>[l(o,{title:"props",data:`[
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
]`})]),default:a(()=>[n[138]||(n[138]=s("ProgressIndicator"))]),_:1})]),n[140]||(n[140]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[146]||(n[146]=s(`
`)),e("span",z,[n[142]||(n[142]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",H,[l(r,{name:"ProgressRoot"},{content:a(({})=>[l(o,{title:"props",data:`[
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
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "((value: number, max: number) => string)",
    "required": false,
    "default": "\`\${Math.round((value / max) * DEFAULT_MAX)}%\`"
  },
  {
    "name": "max",
    "description": "<p>The maximum progress value.</p>\\n",
    "type": "number",
    "required": false,
    "default": "DEFAULT_MAX"
  },
  {
    "name": "modelValue",
    "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number | null",
    "required": false
  }
]`}),l(o,{title:"emits",data:`[
  {
    "name": "update:max",
    "description": "<p>Event handler called when the max value changes</p>\\n",
    "type": "[value: number]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the progress value changes</p>\\n",
    "type": "[value: string[]]"
  }
]`}),l(o,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),l(o,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:a(()=>[n[141]||(n[141]=s("ProgressRoot"))]),_:1})]),n[143]||(n[143]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[147]||(n[147]=s(`
`)),n[148]||(n[148]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[155]||(n[155]=p("",5)),l(i,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"getValueLabel",description:`<p>A function to get the accessible label text representing the current value in a human-readable format.</p>
<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>
`,type:"((value: number, max: number) => string)",required:!1,default:"`${Math.round((value / max) * DEFAULT_MAX)}%`"},{name:"max",description:`<p>The maximum progress value.</p>
`,type:"number",required:!1,default:"DEFAULT_MAX"},{name:"modelValue",description:`<p>The progress value. Can be bind as <code>v-model</code>.</p>
`,type:"number | null",required:!1}]}),l(c,{data:[{name:"update:max",description:`<p>Event handler called when the max value changes</p>
`,type:"[value: number]"},{name:"update:modelValue",description:`<p>Event handler called when the progress value changes</p>
`,type:"[value: string[]]"}]}),l(g,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"number | null | undefined"}]}),l(b,{data:[{name:"getValueLabel",description:`<p>A function to get the accessible label text representing the current value in a human-readable format.</p>
<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>
`,type:"(value: number, max: number) => string"}]}),l(d,{data:[{attribute:"[data-state]",values:["complete","indeterminate","loading"]},{attribute:"[data-value]",values:"The current value"},{attribute:"[data-max]",values:"The max value"}]}),n[156]||(n[156]=p("",2)),l(i,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),l(d,{data:[{attribute:"[data-state]",values:["complete","indeterminate","loading"]},{attribute:"[data-value]",values:"The current value"},{attribute:"[data-max]",values:"The max value"}]})])}}});export{K as __pageData,Q as default};
