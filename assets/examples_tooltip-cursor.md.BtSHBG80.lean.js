import{aG as b,aB as c,bm as v,aF as h,bo as w,bn as F}from"./chunks/theme.xbZkG0Yt.js";import{d as T,f as y,a as C,o as m,l as q,p as s,b as e,e as t,u as i,a3 as o,c as B,aM as x,au as a}from"./chunks/framework.6UEeBrHH.js";const k=T({__name:"index",setup(f){const p=y(!1),n=y({x:0,y:0}),d=C(()=>({getBoundingClientRect:()=>({width:0,height:0,left:n.value.x,right:n.value.x,top:n.value.y,bottom:n.value.y,...n.value})}));return(u,r)=>(m(),q(i(F),{"delay-duration":0},{default:s(()=>[e("div",{class:"w-48 h-32 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center dark:text-foreground text-sm font-medium",onPointerenter:r[0]||(r[0]=l=>p.value=!0),onPointerleave:r[1]||(r[1]=l=>p.value=!1),onPointermove:r[2]||(r[2]=l=>{n.value.x=l.clientX,n.value.y=l.clientY})}," Container ",32),t(i(b),{open:p.value},{default:s(()=>[t(i(c),{reference:d.value},null,8,["reference"]),t(i(v),null,{default:s(()=>[t(i(h),{side:"top","side-offset":12,class:"bg-card px-4 py-2 rounded-md text-sm border border-muted-foreground/30","update-position-strategy":"always"},{default:s(()=>[r[3]||(r[3]=o(" Following ")),t(i(w),{class:"fill-card stroke-muted-foreground/30 -translate-y-[1px]"})]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}))}}),D={name:"index.vue",class:"language-vue"},P={class:"shiki github-dark vp-code",tabindex:"0"},M={class:"line"},W={style:{color:"#85E89D"}},R={class:"line"},S={style:{color:"#85E89D"}},A={class:"line"},V={style:{color:"#85E89D"}},j={class:"line"},I={style:{color:"#85E89D"}},O={class:"line"},U={style:{color:"#85E89D"}},N={class:"line"},$={style:{color:"#85E89D"}},H={class:"line"},K={style:{color:"#85E89D"}},L={class:"line"},z={style:{color:"#85E89D"}},X={class:"line"},Y={style:{color:"#85E89D"}},G={class:"line"},J={style:{color:"#85E89D"}},nn=JSON.parse('{"title":"Tooltip Cursor","description":"","frontmatter":{"title":"Tooltip Cursor","tags":["Tooltip"],"sidebar":true},"headers":[{"level":3,"title":"Tooltip Cursor","slug":"tooltip-cursor-1","link":"#tooltip-cursor-1","children":[]}],"relativePath":"examples/tooltip-cursor.md","filePath":"examples/tooltip-cursor.md","lastUpdated":1741142868000}'),Q={name:"examples/tooltip-cursor.md"},en=Object.assign(Q,{setup(f){return(p,n)=>{const d=a("Description"),u=a("Tags"),r=a("link-hover-card-content"),l=a("link-hover-card"),E=a("ComponentPreview"),g=a("ExampleSection");return m(),B("div",null,[n[151]||(n[151]=x("",1)),t(d,null,{default:s(()=>n[0]||(n[0]=[e("p",null,"Render a Tooltip that follows the cursor when hovering over the target element.",-1)])),_:1}),t(u),t(E,{name:"TooltipCursor",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:s(()=>[e("div",D,[n[148]||(n[148]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[149]||(n[149]=e("span",{class:"lang"},"vue",-1)),e("pre",P,[e("code",null,[n[51]||(n[51]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[52]||(n[52]=o(`
`)),n[53]||(n[53]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { computed, ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[54]||(n[54]=o(`
`)),n[55]||(n[55]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[56]||(n[56]=o(`
`)),n[57]||(n[57]=e("span",{class:"line"},null,-1)),n[58]||(n[58]=o(`
`)),n[59]||(n[59]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," open"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"false"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[60]||(n[60]=o(`
`)),n[61]||(n[61]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," anchor"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"({")],-1)),n[62]||(n[62]=o(`
`)),n[63]||(n[63]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  x: "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[64]||(n[64]=o(`
`)),n[65]||(n[65]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  y: "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[66]||(n[66]=o(`
`)),n[67]||(n[67]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[68]||(n[68]=o(`
`)),n[69]||(n[69]=e("span",{class:"line"},null,-1)),n[70]||(n[70]=o(`
`)),n[71]||(n[71]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," position"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," ({")],-1)),n[72]||(n[72]=o(`
`)),n[73]||(n[73]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  getBoundingClientRect"),e("span",{style:{color:"#E1E4E8"}},": () "),e("span",{style:{color:"#F97583"}},"=>")],-1)),n[74]||(n[74]=o(`
`)),n[75]||(n[75]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    ({")],-1)),n[76]||(n[76]=o(`
`)),n[77]||(n[77]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      width: "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[78]||(n[78]=o(`
`)),n[79]||(n[79]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      height: "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[80]||(n[80]=o(`
`)),n[81]||(n[81]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      left: anchor.value.x,")],-1)),n[82]||(n[82]=o(`
`)),n[83]||(n[83]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      right: anchor.value.x,")],-1)),n[84]||(n[84]=o(`
`)),n[85]||(n[85]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      top: anchor.value.y,")],-1)),n[86]||(n[86]=o(`
`)),n[87]||(n[87]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      bottom: anchor.value.y,")],-1)),n[88]||(n[88]=o(`
`)),n[89]||(n[89]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"      ..."),e("span",{style:{color:"#E1E4E8"}},"anchor.value,")],-1)),n[90]||(n[90]=o(`
`)),n[91]||(n[91]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    } "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," DOMRect"),e("span",{style:{color:"#E1E4E8"}},"),")],-1)),n[92]||(n[92]=o(`
`)),n[93]||(n[93]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}))")],-1)),n[94]||(n[94]=o(`
`)),n[95]||(n[95]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[96]||(n[96]=o(`
`)),n[97]||(n[97]=e("span",{class:"line"},null,-1)),n[98]||(n[98]=o(`
`)),n[99]||(n[99]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[100]||(n[100]=o(`
`)),e("span",M,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",W,[t(l,{name:"TooltipProvider"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`})]),default:s(()=>[n[1]||(n[1]=o("TooltipProvider"))]),_:1})]),n[3]||(n[3]=e("span",{style:{color:"#E1E4E8"}}," :",-1)),n[4]||(n[4]=e("span",{style:{color:"#B392F0"}},"delay-duration",-1)),n[5]||(n[5]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[6]||(n[6]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[7]||(n[7]=e("span",{style:{color:"#79B8FF"}},"0",-1)),n[8]||(n[8]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[9]||(n[9]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[101]||(n[101]=o(`
`)),n[102]||(n[102]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[103]||(n[103]=o(`
`)),n[104]||(n[104]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-48 h-32 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center dark:text-foreground text-sm font-medium"')],-1)),n[105]||(n[105]=o(`
`)),n[106]||(n[106]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      @"),e("span",{style:{color:"#B392F0"}},"pointerenter"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"open "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}}," true"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[107]||(n[107]=o(`
`)),n[108]||(n[108]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      @"),e("span",{style:{color:"#B392F0"}},"pointerleave"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"open "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}}," false"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[109]||(n[109]=o(`
`)),n[110]||(n[110]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      @"),e("span",{style:{color:"#B392F0"}},"pointermove"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"ev"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[111]||(n[111]=o(`
`)),n[112]||(n[112]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        anchor.x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ev.clientX")],-1)),n[113]||(n[113]=o(`
`)),n[114]||(n[114]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        anchor.y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ev.clientY")],-1)),n[115]||(n[115]=o(`
`)),n[116]||(n[116]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[117]||(n[117]=o(`
`)),n[118]||(n[118]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[119]||(n[119]=o(`
`)),n[120]||(n[120]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      Container")],-1)),n[121]||(n[121]=o(`
`)),n[122]||(n[122]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[123]||(n[123]=o(`
`)),e("span",R,[n[11]||(n[11]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",S,[t(l,{name:"TooltipRoot"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`}),t(r,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(r,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[10]||(n[10]=o("TooltipRoot"))]),_:1})]),n[12]||(n[12]=e("span",{style:{color:"#E1E4E8"}}," :",-1)),n[13]||(n[13]=e("span",{style:{color:"#B392F0"}},"open",-1)),n[14]||(n[14]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[15]||(n[15]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[16]||(n[16]=e("span",{style:{color:"#E1E4E8"}},"open",-1)),n[17]||(n[17]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[18]||(n[18]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[124]||(n[124]=o(`
`)),e("span",A,[n[20]||(n[20]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",V,[t(l,{name:"TooltipTrigger"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`})]),default:s(()=>[n[19]||(n[19]=o("TooltipTrigger"))]),_:1})]),n[21]||(n[21]=e("span",{style:{color:"#E1E4E8"}}," :",-1)),n[22]||(n[22]=e("span",{style:{color:"#B392F0"}},"reference",-1)),n[23]||(n[23]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[24]||(n[24]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[25]||(n[25]=e("span",{style:{color:"#E1E4E8"}},"position",-1)),n[26]||(n[26]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[27]||(n[27]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[125]||(n[125]=o(`
`)),e("span",j,[n[29]||(n[29]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",I,[t(l,{name:"TooltipPortal"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`})]),default:s(()=>[n[28]||(n[28]=o("TooltipPortal"))]),_:1})]),n[30]||(n[30]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[126]||(n[126]=o(`
`)),e("span",O,[n[32]||(n[32]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",U,[t(l,{name:"TooltipContent"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`}),t(r,{title:"emits",data:`[
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
]`})]),default:s(()=>[n[31]||(n[31]=o("TooltipContent"))]),_:1})])]),n[127]||(n[127]=o(`
`)),n[128]||(n[128]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          side"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"top"')],-1)),n[129]||(n[129]=o(`
`)),n[130]||(n[130]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"side-offset"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"12"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[131]||(n[131]=o(`
`)),n[132]||(n[132]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"bg-card px-4 py-2 rounded-md text-sm border border-muted-foreground/30"')],-1)),n[133]||(n[133]=o(`
`)),n[134]||(n[134]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          update-position-strategy"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"always"')],-1)),n[135]||(n[135]=o(`
`)),n[136]||(n[136]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[137]||(n[137]=o(`
`)),n[138]||(n[138]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          Following")],-1)),n[139]||(n[139]=o(`
`)),n[140]||(n[140]=e("span",{class:"line"},null,-1)),n[141]||(n[141]=o(`
`)),e("span",N,[n[34]||(n[34]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",$,[t(l,{name:"TooltipArrow"},{content:s(({})=>[t(r,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"svg\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "height",
    "description": "<p>The height of the arrow in pixels.</p>\\n",
    "type": "number",
    "required": false,
    "default": "5"
  },
  {
    "name": "width",
    "description": "<p>The width of the arrow in pixels.</p>\\n",
    "type": "number",
    "required": false,
    "default": "10"
  }
]`})]),default:s(()=>[n[33]||(n[33]=o("TooltipArrow"))]),_:1})]),n[35]||(n[35]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[36]||(n[36]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[37]||(n[37]=e("span",{style:{color:"#9ECBFF"}},'"fill-card stroke-muted-foreground/30 -translate-y-[1px]"',-1)),n[38]||(n[38]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[142]||(n[142]=o(`
`)),e("span",H,[n[40]||(n[40]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",K,[t(l,{name:"TooltipContent"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`}),t(r,{title:"emits",data:`[
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
]`})]),default:s(()=>[n[39]||(n[39]=o("TooltipContent"))]),_:1})]),n[41]||(n[41]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[143]||(n[143]=o(`
`)),e("span",L,[n[43]||(n[43]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",z,[t(l,{name:"TooltipPortal"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`})]),default:s(()=>[n[42]||(n[42]=o("TooltipPortal"))]),_:1})]),n[44]||(n[44]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[144]||(n[144]=o(`
`)),e("span",X,[n[46]||(n[46]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",Y,[t(l,{name:"TooltipRoot"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`}),t(r,{title:"emits",data:`[
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the tooltip changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(r,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:s(()=>[n[45]||(n[45]=o("TooltipRoot"))]),_:1})]),n[47]||(n[47]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[145]||(n[145]=o(`
`)),e("span",G,[n[49]||(n[49]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",J,[t(l,{name:"TooltipProvider"},{content:s(({})=>[t(r,{title:"props",data:`[
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
]`})]),default:s(()=>[n[48]||(n[48]=o("TooltipProvider"))]),_:1})]),n[50]||(n[50]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[146]||(n[146]=o(`
`)),n[147]||(n[147]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:s(()=>[t(k)]),_:1}),t(g,null,{default:s(()=>n[150]||(n[150]=[e("h3",{id:"tooltip-cursor-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[o("Tooltip Cursor "),e("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#tooltip-cursor-1","aria-label":'Permalink to "Tooltip Cursor"'},[e("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[o("​"),e("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[e("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[e("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1)])),_:1})])}}});export{nn as __pageData,en as default};
