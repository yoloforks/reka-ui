import{bj as y,bg as g,bh as b,aG as E,aB as v,bi as w,bm as T,aF as C,bn as q}from"./chunks/theme.DNN3AJD1.js";import{d as k,f as F,o as m,l as x,p as i,e as o,u as l,a3 as t,t as B,c as D,aM as S,au as a,b as n}from"./chunks/framework.6UEeBrHH.js";const P=k({__name:"index",setup(f){const p=F([50]);return(e,d)=>(m(),x(l(q),{"delay-duration":0},{default:i(()=>[o(l(y),{modelValue:p.value,"onUpdate:modelValue":d[0]||(d[0]=u=>p.value=u),class:"relative flex items-center select-none touch-none w-[200px] h-5",max:100,step:1},{default:i(()=>[o(l(g),{class:"bg-blackA10 relative grow rounded-full h-[3px]"},{default:i(()=>[o(l(b),{class:"absolute bg-white rounded-full h-full"})]),_:1}),o(l(E),{"disable-closing-trigger":""},{default:i(()=>[o(l(v),{"as-child":""},{default:i(()=>[o(l(w),{class:"block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8","aria-label":"Volume"})]),_:1}),o(l(T),null,{default:i(()=>[o(l(C),{class:"bg-card px-2 py-1 rounded text-foreground text-xs font-semibold border border-muted","side-offset":6},{default:i(()=>[t(B(p.value[0]),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}}),R={name:"index.vue",class:"language-vue"},V={class:"shiki github-dark vp-code",tabindex:"0"},A={class:"line"},W={style:{color:"#85E89D"}},M={class:"line"},I={style:{color:"#85E89D"}},U={class:"line"},j={style:{color:"#85E89D"}},O={class:"line"},N={style:{color:"#85E89D"}},$={class:"line"},H={style:{color:"#85E89D"}},K={class:"line"},z={style:{color:"#85E89D"}},L={class:"line"},G={style:{color:"#85E89D"}},J={class:"line"},Q={style:{color:"#85E89D"}},X={class:"line"},Y={style:{color:"#85E89D"}},Z={class:"line"},_={style:{color:"#85E89D"}},ee={class:"line"},ne={style:{color:"#85E89D"}},te={class:"line"},oe={style:{color:"#85E89D"}},ie={class:"line"},re={style:{color:"#85E89D"}},se={class:"line"},le={style:{color:"#85E89D"}},ae={class:"line"},pe={style:{color:"#85E89D"}},de={class:"line"},ue={style:{color:"#85E89D"}},he=JSON.parse('{"title":"Slider Tooltip","description":"","frontmatter":{"title":"Slider Tooltip","tags":["Slider","Tooltip"],"sidebar":true},"headers":[{"level":3,"title":"Slider Tooltip","slug":"slider-tooltip-1","link":"#slider-tooltip-1","children":[]}],"relativePath":"examples/slider-tooltip.md","filePath":"examples/slider-tooltip.md","lastUpdated":1741142384000}'),me={name:"examples/slider-tooltip.md"},ye=Object.assign(me,{setup(f){return(p,e)=>{const d=a("Description"),u=a("Tags"),r=a("link-hover-card-content"),s=a("link-hover-card"),c=a("ComponentPreview"),h=a("ExampleSection");return m(),D("div",null,[e[124]||(e[124]=S("",1)),o(d,null,{default:i(()=>e[0]||(e[0]=[n("p",null,"Render a Slider with a Tooltip that shows the current value of the Slider.",-1)])),_:1}),o(u),o(c,{name:"SliderTooltip",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:i(()=>[n("div",R,[e[121]||(e[121]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[122]||(e[122]=n("span",{class:"lang"},"vue",-1)),n("pre",V,[n("code",null,[e[60]||(e[60]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#B392F0"}}," setup"),n("span",{style:{color:"#B392F0"}}," lang"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"ts"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[61]||(e[61]=t(`
`)),e[62]||(e[62]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { ref } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),e[63]||(e[63]=t(`
`)),e[64]||(e[64]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { SliderRange, SliderRoot, SliderThumb, SliderTrack, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),e[65]||(e[65]=t(`
`)),e[66]||(e[66]=n("span",{class:"line"},null,-1)),e[67]||(e[67]=t(`
`)),e[68]||(e[68]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," sliderValue"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," ref"),n("span",{style:{color:"#E1E4E8"}},"(["),n("span",{style:{color:"#79B8FF"}},"50"),n("span",{style:{color:"#E1E4E8"}},"])")],-1)),e[69]||(e[69]=t(`
`)),e[70]||(e[70]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[71]||(e[71]=t(`
`)),e[72]||(e[72]=n("span",{class:"line"},null,-1)),e[73]||(e[73]=t(`
`)),e[74]||(e[74]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[75]||(e[75]=t(`
`)),n("span",A,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",W,[o(s,{name:"TooltipProvider"},{content:i(({})=>[o(r,{title:"props",data:`[
  {
    "name": "delayDuration",
    "description": "<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\\n",
    "type": "number",
    "required": false,
    "default": "700"
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
    "description": "<p>When <code>true</code>, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "skipDelayDuration",
    "description": "<p>How much time a user has to enter another trigger without incurring a delay again.</p>\\n",
    "type": "number",
    "required": false,
    "default": "300"
  }
]`})]),default:i(()=>[e[1]||(e[1]=t("TooltipProvider"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}}," :",-1)),e[4]||(e[4]=n("span",{style:{color:"#B392F0"}},"delay-duration",-1)),e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[6]||(e[6]=n("span",{style:{color:"#9ECBFF"}},'"',-1)),e[7]||(e[7]=n("span",{style:{color:"#79B8FF"}},"0",-1)),e[8]||(e[8]=n("span",{style:{color:"#9ECBFF"}},'"',-1)),e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[76]||(e[76]=t(`
`)),n("span",M,[e[11]||(e[11]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",I,[o(s,{name:"SliderRoot"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`}),o(r,{title:"emits",data:`[
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
]`}),o(r,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current slider values</p>\\n",
    "type": "number[] | null"
  }
]`})]),default:i(()=>[e[10]||(e[10]=t("SliderRoot"))]),_:1})])]),e[77]||(e[77]=t(`
`)),e[78]||(e[78]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"      v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"sliderValue"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[79]||(e[79]=t(`
`)),e[80]||(e[80]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"      class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"relative flex items-center select-none touch-none w-[200px] h-5"')],-1)),e[81]||(e[81]=t(`
`)),e[82]||(e[82]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      :"),n("span",{style:{color:"#B392F0"}},"max"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"100"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[83]||(e[83]=t(`
`)),e[84]||(e[84]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      :"),n("span",{style:{color:"#B392F0"}},"step"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[85]||(e[85]=t(`
`)),e[86]||(e[86]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    >")],-1)),e[87]||(e[87]=t(`
`)),n("span",U,[e[13]||(e[13]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",j,[o(s,{name:"SliderTrack"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[12]||(e[12]=t("SliderTrack"))]),_:1})]),e[14]||(e[14]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[15]||(e[15]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[16]||(e[16]=n("span",{style:{color:"#9ECBFF"}},'"bg-blackA10 relative grow rounded-full h-[3px]"',-1)),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[88]||(e[88]=t(`
`)),n("span",O,[e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",N,[o(s,{name:"SliderRange"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[18]||(e[18]=t("SliderRange"))]),_:1})]),e[20]||(e[20]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[21]||(e[21]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[22]||(e[22]=n("span",{style:{color:"#9ECBFF"}},'"absolute bg-white rounded-full h-full"',-1)),e[23]||(e[23]=n("span",{style:{color:"#E1E4E8"}}," />",-1))]),e[89]||(e[89]=t(`
`)),n("span",$,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",H,[o(s,{name:"SliderTrack"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[24]||(e[24]=t("SliderTrack"))]),_:1})]),e[26]||(e[26]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[90]||(e[90]=t(`
`)),e[91]||(e[91]=n("span",{class:"line"},null,-1)),e[92]||(e[92]=t(`
`)),n("span",K,[e[28]||(e[28]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",z,[o(s,{name:"TooltipRoot"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`}),o(r,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(r,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:i(()=>[e[27]||(e[27]=t("TooltipRoot"))]),_:1})]),e[29]||(e[29]=n("span",{style:{color:"#B392F0"}}," disable-closing-trigger",-1)),e[30]||(e[30]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[93]||(e[93]=t(`
`)),n("span",L,[e[32]||(e[32]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",G,[o(s,{name:"TooltipTrigger"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[31]||(e[31]=t("TooltipTrigger"))]),_:1})]),e[33]||(e[33]=n("span",{style:{color:"#B392F0"}}," as-child",-1)),e[34]||(e[34]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[94]||(e[94]=t(`
`)),n("span",J,[e[36]||(e[36]=n("span",{style:{color:"#E1E4E8"}},"          <",-1)),n("span",Q,[o(s,{name:"SliderThumb"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[35]||(e[35]=t("SliderThumb"))]),_:1})])]),e[95]||(e[95]=t(`
`)),e[96]||(e[96]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"')],-1)),e[97]||(e[97]=t(`
`)),e[98]||(e[98]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            aria-label"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"Volume"')],-1)),e[99]||(e[99]=t(`
`)),e[100]||(e[100]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          />")],-1)),e[101]||(e[101]=t(`
`)),n("span",X,[e[38]||(e[38]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",Y,[o(s,{name:"TooltipTrigger"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[37]||(e[37]=t("TooltipTrigger"))]),_:1})]),e[39]||(e[39]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[102]||(e[102]=t(`
`)),e[103]||(e[103]=n("span",{class:"line"},null,-1)),e[104]||(e[104]=t(`
`)),n("span",Z,[e[41]||(e[41]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",_,[o(s,{name:"TooltipPortal"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[40]||(e[40]=t("TooltipPortal"))]),_:1})]),e[42]||(e[42]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[105]||(e[105]=t(`
`)),n("span",ee,[e[44]||(e[44]=n("span",{style:{color:"#E1E4E8"}},"          <",-1)),n("span",ne,[o(s,{name:"TooltipContent"},{content:i(({})=>[o(r,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "ariaLabel",
    "description": "<p>By default, screenreaders will announce the content inside\\nthe component. If this is not descriptive enough, or you have\\ncontent that cannot be announced, use aria-label as a more\\ndescriptive label.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
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
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false,
    "default": "\\"top\\""
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),o(r,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when focus moves to the destructive action after opening. It can be prevented by calling <code>event.preventDefault</code></p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:i(()=>[e[43]||(e[43]=t("TooltipContent"))]),_:1})])]),e[106]||(e[106]=t(`
`)),e[107]||(e[107]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"bg-card px-2 py-1 rounded text-foreground text-xs font-semibold border border-muted"')],-1)),e[108]||(e[108]=t(`
`)),e[109]||(e[109]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            :"),n("span",{style:{color:"#B392F0"}},"side-offset"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"6"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[110]||(e[110]=t(`
`)),e[111]||(e[111]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          >")],-1)),e[112]||(e[112]=t(`
`)),e[113]||(e[113]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            {{ sliderValue["),n("span",{style:{color:"#79B8FF"}},"0"),n("span",{style:{color:"#E1E4E8"}},"] }}")],-1)),e[114]||(e[114]=t(`
`)),n("span",te,[e[46]||(e[46]=n("span",{style:{color:"#E1E4E8"}},"          </",-1)),n("span",oe,[o(s,{name:"TooltipContent"},{content:i(({})=>[o(r,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "ariaLabel",
    "description": "<p>By default, screenreaders will announce the content inside\\nthe component. If this is not descriptive enough, or you have\\ncontent that cannot be announced, use aria-label as a more\\ndescriptive label.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
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
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false,
    "default": "\\"top\\""
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),o(r,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when focus moves to the destructive action after opening. It can be prevented by calling <code>event.preventDefault</code></p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: Event]"
  }
]`})]),default:i(()=>[e[45]||(e[45]=t("TooltipContent"))]),_:1})]),e[47]||(e[47]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[115]||(e[115]=t(`
`)),n("span",ie,[e[49]||(e[49]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",re,[o(s,{name:"TooltipPortal"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`})]),default:i(()=>[e[48]||(e[48]=t("TooltipPortal"))]),_:1})]),e[50]||(e[50]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[116]||(e[116]=t(`
`)),n("span",se,[e[52]||(e[52]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",le,[o(s,{name:"TooltipRoot"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`}),o(r,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),o(r,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:i(()=>[e[51]||(e[51]=t("TooltipRoot"))]),_:1})]),e[53]||(e[53]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[117]||(e[117]=t(`
`)),n("span",ae,[e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",pe,[o(s,{name:"SliderRoot"},{content:i(({})=>[o(r,{title:"props",data:`[
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
]`}),o(r,{title:"emits",data:`[
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
]`}),o(r,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current slider values</p>\\n",
    "type": "number[] | null"
  }
]`})]),default:i(()=>[e[54]||(e[54]=t("SliderRoot"))]),_:1})]),e[56]||(e[56]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[118]||(e[118]=t(`
`)),n("span",de,[e[58]||(e[58]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",ue,[o(s,{name:"TooltipProvider"},{content:i(({})=>[o(r,{title:"props",data:`[
  {
    "name": "delayDuration",
    "description": "<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\\n",
    "type": "number",
    "required": false,
    "default": "700"
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
    "description": "<p>When <code>true</code>, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "ignoreNonKeyboardFocus",
    "description": "<p>Prevent the tooltip from opening if the focus did not come from\\nthe keyboard by matching against the <code>:focus-visible</code> selector.\\nThis is useful if you want to avoid opening it when switching\\nbrowser tabs or closing a dialog.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "skipDelayDuration",
    "description": "<p>How much time a user has to enter another trigger without incurring a delay again.</p>\\n",
    "type": "number",
    "required": false,
    "default": "300"
  }
]`})]),default:i(()=>[e[57]||(e[57]=t("TooltipProvider"))]),_:1})]),e[59]||(e[59]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[119]||(e[119]=t(`
`)),e[120]||(e[120]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:i(()=>[o(P)]),_:1}),o(h,null,{default:i(()=>e[123]||(e[123]=[n("h3",{id:"slider-tooltip-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[t("Slider Tooltip "),n("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#slider-tooltip-1","aria-label":'Permalink to "Slider Tooltip"'},[n("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[t("​"),n("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[n("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[n("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1)])),_:1})])}}});export{he as __pageData,ye as default};
