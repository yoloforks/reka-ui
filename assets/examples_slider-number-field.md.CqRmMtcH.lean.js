import{bg as g,bh as v,bi as w,bj as F,bk as y,bl as E}from"./chunks/theme.B9Hk_fON.js";import{d as C,f as q,o as m,c as f,e as o,p as s,u as d,F as T,a6 as x,b as n,l as B,aM as k,au as u,a3 as t}from"./chunks/framework.BvEsjwOO.js";const V={class:"w-[200px] flex flex-col"},S={class:"mt-2 flex items-center justify-between"},N=C({__name:"index",setup(b){const a=q([20,50]);return(e,p)=>(m(),f("div",V,[o(d(F),{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=i=>a.value=i),class:"relative flex items-center select-none touch-none h-5",max:100,step:1},{default:s(()=>[o(d(g),{class:"bg-blackA10 relative grow rounded-full h-[3px]"},{default:s(()=>[o(d(v),{class:"absolute bg-white rounded-full h-full"})]),_:1}),(m(!0),f(T,null,x(a.value.length,i=>(m(),B(d(w),{key:i,class:"block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8","aria-label":"Volume"}))),128))]),_:1},8,["modelValue"]),n("div",S,[o(d(E),{modelValue:a.value[0],"onUpdate:modelValue":p[1]||(p[1]=i=>a.value[0]=i),max:a.value[1]},{default:s(()=>[o(d(y),{class:"bg-card border border-muted rounded text-foreground text-xs py-1.5 font-semibold w-12 text-center"})]),_:1},8,["modelValue","max"]),o(d(E),{modelValue:a.value[1],"onUpdate:modelValue":p[2]||(p[2]=i=>a.value[1]=i),min:a.value[0]},{default:s(()=>[o(d(y),{class:"bg-card border border-muted rounded text-foreground text-xs py-1.5 font-semibold w-12 text-center"})]),_:1},8,["modelValue","min"])])]))}}),R={name:"index.vue",class:"language-vue"},D={class:"shiki github-dark vp-code",tabindex:"0"},A={class:"line"},W={style:{color:"#85E89D"}},I={class:"line"},O={style:{color:"#85E89D"}},P={class:"line"},M={style:{color:"#85E89D"}},$={class:"line"},U={style:{color:"#85E89D"}},j={class:"line"},z={style:{color:"#85E89D"}},L={class:"line"},J={style:{color:"#85E89D"}},G={class:"line"},H={style:{color:"#85E89D"}},K={class:"line"},Q={style:{color:"#85E89D"}},X={class:"line"},Y={style:{color:"#85E89D"}},Z={class:"line"},_={style:{color:"#85E89D"}},ee={class:"line"},ne={style:{color:"#85E89D"}},te={class:"line"},oe={style:{color:"#85E89D"}},ae=JSON.parse('{"title":"Slider with Number Field","description":"","frontmatter":{"title":"Slider with Number Field","tags":["Slider","NumberField"],"sidebar":true},"headers":[{"level":3,"title":"Slider with Number Field","slug":"slider-with-number-field-1","link":"#slider-with-number-field-1","children":[]}],"relativePath":"examples/slider-number-field.md","filePath":"examples/slider-number-field.md","lastUpdated":1741141490000}'),se={name:"examples/slider-number-field.md"},ie=Object.assign(se,{setup(b){return(a,e)=>{const p=u("Description"),i=u("Tags"),l=u("link-hover-card-content"),r=u("link-hover-card"),h=u("ComponentPreview"),c=u("ExampleSection");return m(),f("div",null,[e[119]||(e[119]=k("",1)),o(p,null,{default:s(()=>e[0]||(e[0]=[n("p",null,"Render a Slider with a Number Field that shows and interact with the values of the Slider.",-1)])),_:1}),o(i),o(h,{name:"SliderNumberField",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:s(()=>[n("div",R,[e[116]||(e[116]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[117]||(e[117]=n("span",{class:"lang"},"vue",-1)),n("pre",D,[n("code",null,[e[45]||(e[45]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#B392F0"}}," setup"),n("span",{style:{color:"#B392F0"}}," lang"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"ts"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[46]||(e[46]=t(`
`)),e[47]||(e[47]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { ref } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),e[48]||(e[48]=t(`
`)),e[49]||(e[49]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { NumberFieldInput, NumberFieldRoot, SliderRange, SliderRoot, SliderThumb, SliderTrack } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),e[50]||(e[50]=t(`
`)),e[51]||(e[51]=n("span",{class:"line"},null,-1)),e[52]||(e[52]=t(`
`)),e[53]||(e[53]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," sliderValue"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," ref"),n("span",{style:{color:"#E1E4E8"}},"(["),n("span",{style:{color:"#79B8FF"}},"20"),n("span",{style:{color:"#E1E4E8"}},", "),n("span",{style:{color:"#79B8FF"}},"50"),n("span",{style:{color:"#E1E4E8"}},"])")],-1)),e[54]||(e[54]=t(`
`)),e[55]||(e[55]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[56]||(e[56]=t(`
`)),e[57]||(e[57]=n("span",{class:"line"},null,-1)),e[58]||(e[58]=t(`
`)),e[59]||(e[59]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[60]||(e[60]=t(`
`)),e[61]||(e[61]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-[200px] flex flex-col"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[62]||(e[62]=t(`
`)),n("span",A,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",W,[o(r,{name:"SliderRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The value of the slider when initially rendered. Use when you do not need to control the state of the slider.</p>\\n",
    "type": "number[]",
    "required": false,
    "default": "[0]"
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the slider.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "inverted",
    "description": "<p>Whether the slider is visually inverted.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "max",
    "description": "<p>The maximum value for the range.</p>\\n",
    "type": "number",
    "required": false,
    "default": "100"
  },
  {
    "name": "min",
    "description": "<p>The minimum value for the range.</p>\\n",
    "type": "number",
    "required": false,
    "default": "0"
  },
  {
    "name": "minStepsBetweenThumbs",
    "description": "<p>The minimum permitted steps between multiple thumbs.</p>\\n",
    "type": "number",
    "required": false,
    "default": "0"
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the slider. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number[] | null",
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
    "description": "<p>The orientation of the slider.</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"horizontal\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "step",
    "description": "<p>The stepping interval.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the slider value changes</p>\\n",
    "type": "[payload: number[]]"
  },
  {
    "name": "valueCommit",
    "description": "<p>Event handler called when the value changes at the end of an interaction.</p>\\n<p>Useful when you only need to capture a final value e.g. to update a backend service.</p>\\n",
    "type": "[payload: number[]]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current slider values</p>\\n",
    "type": "number[] | null"
  }
]`})]),default:s(()=>[e[1]||(e[1]=t("SliderRoot"))]),_:1})])]),e[63]||(e[63]=t(`
`)),e[64]||(e[64]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"      v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[65]||(e[65]=t(`
`)),e[66]||(e[66]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"      class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"relative flex items-center select-none touch-none h-5"')],-1)),e[67]||(e[67]=t(`
`)),e[68]||(e[68]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      :"),n("span",{style:{color:"#B392F0"}},"max"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"100"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[69]||(e[69]=t(`
`)),e[70]||(e[70]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      :"),n("span",{style:{color:"#B392F0"}},"step"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[71]||(e[71]=t(`
`)),e[72]||(e[72]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    >")],-1)),e[73]||(e[73]=t(`
`)),n("span",I,[e[4]||(e[4]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",O,[o(r,{name:"SliderTrack"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[e[3]||(e[3]=t("SliderTrack"))]),_:1})]),e[5]||(e[5]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[7]||(e[7]=n("span",{style:{color:"#9ECBFF"}},'"bg-blackA10 relative grow rounded-full h-[3px]"',-1)),e[8]||(e[8]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[74]||(e[74]=t(`
`)),n("span",P,[e[10]||(e[10]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",M,[o(r,{name:"SliderRange"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[e[9]||(e[9]=t("SliderRange"))]),_:1})]),e[11]||(e[11]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[12]||(e[12]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[13]||(e[13]=n("span",{style:{color:"#9ECBFF"}},'"absolute bg-white rounded-full h-full"',-1)),e[14]||(e[14]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[75]||(e[75]=t(`
`)),n("span",$,[e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",U,[o(r,{name:"SliderTrack"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[e[15]||(e[15]=t("SliderTrack"))]),_:1})]),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[76]||(e[76]=t(`
`)),n("span",j,[e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",z,[o(r,{name:"SliderThumb"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[e[18]||(e[18]=t("SliderThumb"))]),_:1})])]),e[77]||(e[77]=t(`
`)),e[78]||(e[78]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"        v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"thumb "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," sliderValue."),n("span",{style:{color:"#79B8FF"}},"length"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[79]||(e[79]=t(`
`)),e[80]||(e[80]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"thumb"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[81]||(e[81]=t(`
`)),e[82]||(e[82]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"')],-1)),e[83]||(e[83]=t(`
`)),e[84]||(e[84]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        aria-label"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"Volume"')],-1)),e[85]||(e[85]=t(`
`)),e[86]||(e[86]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      />")],-1)),e[87]||(e[87]=t(`
`)),n("span",L,[e[21]||(e[21]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",J,[o(r,{name:"SliderRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The value of the slider when initially rendered. Use when you do not need to control the state of the slider.</p>\\n",
    "type": "number[]",
    "required": false,
    "default": "[0]"
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the slider.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "inverted",
    "description": "<p>Whether the slider is visually inverted.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "max",
    "description": "<p>The maximum value for the range.</p>\\n",
    "type": "number",
    "required": false,
    "default": "100"
  },
  {
    "name": "min",
    "description": "<p>The minimum value for the range.</p>\\n",
    "type": "number",
    "required": false,
    "default": "0"
  },
  {
    "name": "minStepsBetweenThumbs",
    "description": "<p>The minimum permitted steps between multiple thumbs.</p>\\n",
    "type": "number",
    "required": false,
    "default": "0"
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the slider. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "number[] | null",
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
    "description": "<p>The orientation of the slider.</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"horizontal\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "step",
    "description": "<p>The stepping interval.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the slider value changes</p>\\n",
    "type": "[payload: number[]]"
  },
  {
    "name": "valueCommit",
    "description": "<p>Event handler called when the value changes at the end of an interaction.</p>\\n<p>Useful when you only need to capture a final value e.g. to update a backend service.</p>\\n",
    "type": "[payload: number[]]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current slider values</p>\\n",
    "type": "number[] | null"
  }
]`})]),default:s(()=>[e[20]||(e[20]=t("SliderRoot"))]),_:1})]),e[22]||(e[22]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[88]||(e[88]=t(`
`)),e[89]||(e[89]=n("span",{class:"line"},null,-1)),e[90]||(e[90]=t(`
`)),e[91]||(e[91]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"mt-2 flex items-center justify-between"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[92]||(e[92]=t(`
`)),n("span",G,[e[24]||(e[24]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",H,[o(r,{name:"NumberFieldRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "number",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the Number Field.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "formatOptions",
    "description": "<p>Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.</p>\\n",
    "type": "NumberFormatOptions",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "max",
    "description": "<p>The largest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "min",
    "description": "<p>The smallest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "number | null",
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
    "name": "step",
    "description": "<p>The amount that the input value changes with each increment or decrement &quot;tick&quot;.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[val: number]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "number"
  },
  {
    "name": "textValue",
    "description": "",
    "type": "string"
  }
]`})]),default:s(()=>[e[23]||(e[23]=t("NumberFieldRoot"))]),_:1})])]),e[93]||(e[93]=t(`
`)),e[94]||(e[94]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue["),n("span",{style:{color:"#79B8FF"}},"0"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[95]||(e[95]=t(`
`)),e[96]||(e[96]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"max"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue["),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[97]||(e[97]=t(`
`)),e[98]||(e[98]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[99]||(e[99]=t(`
`)),n("span",K,[e[26]||(e[26]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",Q,[o(r,{name:"NumberFieldInput"},{content:s(({})=>[o(l,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[e[25]||(e[25]=t("NumberFieldInput"))]),_:1})]),e[27]||(e[27]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[28]||(e[28]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[29]||(e[29]=n("span",{style:{color:"#9ECBFF"}},'"bg-card border border-muted rounded text-foreground text-xs py-1.5 font-semibold w-12 text-center"',-1)),e[30]||(e[30]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[100]||(e[100]=t(`
`)),n("span",X,[e[32]||(e[32]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",Y,[o(r,{name:"NumberFieldRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "number",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the Number Field.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "formatOptions",
    "description": "<p>Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.</p>\\n",
    "type": "NumberFormatOptions",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "max",
    "description": "<p>The largest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "min",
    "description": "<p>The smallest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "number | null",
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
    "name": "step",
    "description": "<p>The amount that the input value changes with each increment or decrement &quot;tick&quot;.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[val: number]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "number"
  },
  {
    "name": "textValue",
    "description": "",
    "type": "string"
  }
]`})]),default:s(()=>[e[31]||(e[31]=t("NumberFieldRoot"))]),_:1})]),e[33]||(e[33]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[101]||(e[101]=t(`
`)),n("span",Z,[e[35]||(e[35]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",_,[o(r,{name:"NumberFieldRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "number",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the Number Field.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "formatOptions",
    "description": "<p>Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.</p>\\n",
    "type": "NumberFormatOptions",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "max",
    "description": "<p>The largest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "min",
    "description": "<p>The smallest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "number | null",
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
    "name": "step",
    "description": "<p>The amount that the input value changes with each increment or decrement &quot;tick&quot;.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[val: number]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "number"
  },
  {
    "name": "textValue",
    "description": "",
    "type": "string"
  }
]`})]),default:s(()=>[e[34]||(e[34]=t("NumberFieldRoot"))]),_:1})])]),e[102]||(e[102]=t(`
`)),e[103]||(e[103]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue["),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[104]||(e[104]=t(`
`)),e[105]||(e[105]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"min"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue["),n("span",{style:{color:"#79B8FF"}},"0"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[106]||(e[106]=t(`
`)),e[107]||(e[107]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[108]||(e[108]=t(`
`)),n("span",ee,[e[37]||(e[37]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",ne,[o(r,{name:"NumberFieldInput"},{content:s(({})=>[o(l,{title:"props",data:`[
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
  }
]`})]),default:s(()=>[e[36]||(e[36]=t("NumberFieldInput"))]),_:1})]),e[38]||(e[38]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[39]||(e[39]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[40]||(e[40]=n("span",{style:{color:"#9ECBFF"}},'"bg-card border border-muted rounded text-foreground text-xs py-1.5 font-semibold w-12 text-center"',-1)),e[41]||(e[41]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[109]||(e[109]=t(`
`)),n("span",te,[e[43]||(e[43]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",oe,[o(r,{name:"NumberFieldRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "number",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the Number Field.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "formatOptions",
    "description": "<p>Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.</p>\\n",
    "type": "NumberFormatOptions",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "max",
    "description": "<p>The largest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "min",
    "description": "<p>The smallest value allowed for the input.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "number | null",
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
    "name": "step",
    "description": "<p>The amount that the input value changes with each increment or decrement &quot;tick&quot;.</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[val: number]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "number"
  },
  {
    "name": "textValue",
    "description": "",
    "type": "string"
  }
]`})]),default:s(()=>[e[42]||(e[42]=t("NumberFieldRoot"))]),_:1})]),e[44]||(e[44]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[110]||(e[110]=t(`
`)),e[111]||(e[111]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[112]||(e[112]=t(`
`)),e[113]||(e[113]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[114]||(e[114]=t(`
`)),e[115]||(e[115]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:s(()=>[o(N)]),_:1}),o(c,null,{default:s(()=>e[118]||(e[118]=[n("h3",{id:"slider-with-number-field-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[t("Slider with Number Field "),n("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#slider-with-number-field-1","aria-label":'Permalink to "Slider with Number Field"'},[n("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[t("​"),n("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[n("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[n("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1)])),_:1})])}}});export{ae as __pageData,ie as default};
