import{be as b,bf as B}from"./chunks/theme.D6vbkreq.js";import{d as C,f as x,a as m,J as k,o as y,c as u,e as o,p as t,b as s,u as F,W as w,t as D,aM as P,au as a,a3 as l}from"./chunks/framework.DhAtJbM3.js";const $={class:"relative w-40 h-40"},A={class:"w-full h-full",viewBox:"0 0 100 100"},T=["d"],M=["d"],I={class:"absolute inset-0 flex items-center justify-center"},V={class:"text-lg font-bold text-foreground"},g=45,q=C({__name:"index",setup(f){const i=2*Math.PI*g,n=x(0),E=m(()=>n.value/100*i),p=m(()=>{const e=g;return`
          M 50 50
          m 0 -${e}
          a ${e} ${e} 0 1 1 0 ${e*2}
          a ${e} ${e} 0 1 1 0 -${e*2}
          `});return k(()=>{setInterval(()=>{n.value<100?n.value+=10:n.value=0},1e3)}),(e,r)=>(y(),u("div",$,[o(F(B),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=d=>n.value=d),"as-child":""},{default:t(()=>[(y(),u("svg",A,[s("path",{d:p.value,class:"fill-none stroke-muted stroke-[6px]"},null,8,T),o(F(b),{"as-child":""},{default:t(()=>[s("path",{d:p.value,class:"fill-none stroke-primary stroke-[6px] transition-[stroke-dasharray,opacity] duration-700 data-[value='0']:opacity-0",style:w({"stroke-linecap":"round","stroke-dasharray":`${E.value}px, ${i}px`,"stroke-dashoffset":"0px"})},null,12,M)]),_:1})])),s("div",I,[s("span",V,D(n.value)+"%",1)])]),_:1},8,["modelValue"])]))}}),R={name:"index.vue",class:"language-vue"},S={class:"shiki github-dark vp-code",tabindex:"0"},U={class:"line"},L={style:{color:"#85E89D"}},N={class:"line"},j={style:{color:"#FDAEB7","font-style":"italic"}},O={class:"line"},X={style:{color:"#FDAEB7","font-style":"italic"}},J={class:"line"},z={style:{color:"#85E89D"}},K=JSON.parse('{"title":"Circular Progress","description":"","frontmatter":{"title":"Circular Progress","tags":["Progress"],"sidebar":true},"headers":[{"level":3,"title":"Circular Progress","slug":"circular-progress-1","link":"#circular-progress-1","children":[]}],"relativePath":"examples/progress-circular.md","filePath":"examples/progress-circular.md","lastUpdated":1741141824000}'),W={name:"examples/progress-circular.md"},Q=Object.assign(W,{setup(f){return(i,n)=>{const E=a("Description"),p=a("Tags"),e=a("link-hover-card-content"),r=a("link-hover-card"),d=a("ComponentPreview"),v=a("ExampleSection");return y(),u("div",null,[n[149]||(n[149]=P('<h1 id="circular-progress" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Circular Progress <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#circular-progress" aria-label="Permalink to &quot;Circular Progress&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(E,null,{default:t(()=>n[0]||(n[0]=[s("p",null,"Rendering progress bar as a Circular Progress.",-1)])),_:1}),o(p),o(d,{name:"ProgressCircular",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:t(()=>[s("div",R,[n[146]||(n[146]=s("button",{title:"Copy Code",class:"copy"},null,-1)),n[147]||(n[147]=s("span",{class:"lang"},"vue",-1)),s("pre",S,[s("code",null,[n[13]||(n[13]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#B392F0"}}," setup"),s("span",{style:{color:"#B392F0"}}," lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[14]||(n[14]=l(`
`)),n[15]||(n[15]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { computed, onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[16]||(n[16]=l(`
`)),n[17]||(n[17]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ProgressIndicator, ProgressRoot } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[18]||(n[18]=l(`
`)),n[19]||(n[19]=s("span",{class:"line"},null,-1)),n[20]||(n[20]=l(`
`)),n[21]||(n[21]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#79B8FF"}}," RADIUS"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#79B8FF"}}," 45")],-1)),n[22]||(n[22]=l(`
`)),n[23]||(n[23]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#79B8FF"}}," circumference"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#79B8FF"}}," 2"),s("span",{style:{color:"#F97583"}}," *"),s("span",{style:{color:"#E1E4E8"}}," Math."),s("span",{style:{color:"#79B8FF"}},"PI"),s("span",{style:{color:"#F97583"}}," *"),s("span",{style:{color:"#79B8FF"}}," RADIUS")],-1)),n[24]||(n[24]=l(`
`)),n[25]||(n[25]=s("span",{class:"line"},null,-1)),n[26]||(n[26]=l(`
`)),n[27]||(n[27]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#79B8FF"}}," progress"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#B392F0"}}," ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},")")],-1)),n[28]||(n[28]=l(`
`)),n[29]||(n[29]=s("span",{class:"line"},null,-1)),n[30]||(n[30]=l(`
`)),n[31]||(n[31]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#79B8FF"}}," dashOffset"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#B392F0"}}," computed"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>")],-1)),n[32]||(n[32]=l(`
`)),n[33]||(n[33]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  (progress.value "),s("span",{style:{color:"#F97583"}},"/"),s("span",{style:{color:"#79B8FF"}}," 100"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"*"),s("span",{style:{color:"#E1E4E8"}}," circumference,")],-1)),n[34]||(n[34]=l(`
`)),n[35]||(n[35]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")],-1)),n[36]||(n[36]=l(`
`)),n[37]||(n[37]=s("span",{class:"line"},null,-1)),n[38]||(n[38]=l(`
`)),n[39]||(n[39]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#79B8FF"}}," trackPath"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#B392F0"}}," computed"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[40]||(n[40]=l(`
`)),n[41]||(n[41]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"  const"),s("span",{style:{color:"#79B8FF"}}," r"),s("span",{style:{color:"#F97583"}}," ="),s("span",{style:{color:"#79B8FF"}}," RADIUS")],-1)),n[42]||(n[42]=l(`
`)),n[43]||(n[43]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"  return"),s("span",{style:{color:"#9ECBFF"}}," `")],-1)),n[44]||(n[44]=l(`
`)),n[45]||(n[45]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          M 50 50")],-1)),n[46]||(n[46]=l(`
`)),n[47]||(n[47]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          m 0 -${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#9ECBFF"}},"}")],-1)),n[48]||(n[48]=l(`
`)),n[49]||(n[49]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          a ${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#9ECBFF"}},"} ${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#9ECBFF"}},"} 0 1 1 0 ${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#F97583"}}," *"),s("span",{style:{color:"#79B8FF"}}," 2"),s("span",{style:{color:"#9ECBFF"}},"}")],-1)),n[50]||(n[50]=l(`
`)),n[51]||(n[51]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          a ${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#9ECBFF"}},"} ${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#9ECBFF"}},"} 0 1 1 0 -${"),s("span",{style:{color:"#E1E4E8"}},"r"),s("span",{style:{color:"#F97583"}}," *"),s("span",{style:{color:"#79B8FF"}}," 2"),s("span",{style:{color:"#9ECBFF"}},"}")],-1)),n[52]||(n[52]=l(`
`)),n[53]||(n[53]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"          `")],-1)),n[54]||(n[54]=l(`
`)),n[55]||(n[55]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[56]||(n[56]=l(`
`)),n[57]||(n[57]=s("span",{class:"line"},null,-1)),n[58]||(n[58]=l(`
`)),n[59]||(n[59]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[60]||(n[60]=l(`
`)),n[61]||(n[61]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"  setInterval"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[62]||(n[62]=l(`
`)),n[63]||(n[63]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"    if"),s("span",{style:{color:"#E1E4E8"}}," (progress.value "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}}," 100"),s("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[64]||(n[64]=l(`
`)),n[65]||(n[65]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      progress.value "),s("span",{style:{color:"#F97583"}},"+="),s("span",{style:{color:"#79B8FF"}}," 10")],-1)),n[66]||(n[66]=l(`
`)),n[67]||(n[67]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")],-1)),n[68]||(n[68]=l(`
`)),n[69]||(n[69]=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"    else"),s("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[70]||(n[70]=l(`
`)),n[71]||(n[71]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      progress.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#79B8FF"}}," 0")],-1)),n[72]||(n[72]=l(`
`)),n[73]||(n[73]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")],-1)),n[74]||(n[74]=l(`
`)),n[75]||(n[75]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }, "),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},")")],-1)),n[76]||(n[76]=l(`
`)),n[77]||(n[77]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")],-1)),n[78]||(n[78]=l(`
`)),n[79]||(n[79]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[80]||(n[80]=l(`
`)),n[81]||(n[81]=s("span",{class:"line"},null,-1)),n[82]||(n[82]=l(`
`)),n[83]||(n[83]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[84]||(n[84]=l(`
`)),n[85]||(n[85]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"relative w-40 h-40"'),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[86]||(n[86]=l(`
`)),s("span",U,[n[2]||(n[2]=s("span",{style:{color:"#E1E4E8"}},"    <",-1)),s("span",L,[o(r,{name:"ProgressRoot"},{content:t(({})=>[o(e,{title:"props",data:`[
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
]`}),o(e,{title:"emits",data:`[
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
]`}),o(e,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),o(e,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:t(()=>[n[1]||(n[1]=l("ProgressRoot"))]),_:1})])]),n[87]||(n[87]=l(`
`)),n[88]||(n[88]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"      v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"progress"),s("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[89]||(n[89]=l(`
`)),n[90]||(n[90]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"      as-child")],-1)),n[91]||(n[91]=l(`
`)),n[92]||(n[92]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[93]||(n[93]=l(`
`)),n[94]||(n[94]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"svg")],-1)),n[95]||(n[95]=l(`
`)),n[96]||(n[96]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"w-full h-full"')],-1)),n[97]||(n[97]=l(`
`)),n[98]||(n[98]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"        viewBox"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"0 0 100 100"')],-1)),n[99]||(n[99]=l(`
`)),n[100]||(n[100]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[101]||(n[101]=l(`
`)),n[102]||(n[102]=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        <!-- Background circle -->")],-1)),n[103]||(n[103]=l(`
`)),n[104]||(n[104]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"path")],-1)),n[105]||(n[105]=l(`
`)),n[106]||(n[106]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          :"),s("span",{style:{color:"#B392F0"}},"d"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"trackPath"),s("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[107]||(n[107]=l(`
`)),n[108]||(n[108]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"          class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fill-none stroke-muted stroke-[6px]"')],-1)),n[109]||(n[109]=l(`
`)),n[110]||(n[110]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[111]||(n[111]=l(`
`)),n[112]||(n[112]=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        <!-- Progress circle -->")],-1)),n[113]||(n[113]=l(`
`)),s("span",N,[n[4]||(n[4]=s("span",{style:{color:"#E1E4E8"}},"        <",-1)),s("span",j,[o(r,{name:"ProgressIndicator"},{content:t(({})=>[o(e,{title:"props",data:`[
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
]`})]),default:t(()=>[n[3]||(n[3]=l("ProgressIndicator"))]),_:1})]),n[5]||(n[5]=s("span",{style:{color:"#B392F0"}}," as-child",-1)),n[6]||(n[6]=s("span",{style:{color:"#E1E4E8"}},">",-1))]),n[114]||(n[114]=l(`
`)),n[115]||(n[115]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"path")],-1)),n[116]||(n[116]=l(`
`)),n[117]||(n[117]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            :"),s("span",{style:{color:"#B392F0"}},"d"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"trackPath"),s("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[118]||(n[118]=l(`
`)),n[119]||(n[119]=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"            class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"fill-none stroke-primary stroke-[6px] transition-[stroke-dasharray,opacity] duration-700 data-[value='0']:opacity-0"`)],-1)),n[120]||(n[120]=l(`
`)),n[121]||(n[121]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            :"),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{")],-1)),n[122]||(n[122]=l(`
`)),n[123]||(n[123]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"              'stroke-linecap'"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"'round'"),s("span",{style:{color:"#E1E4E8"}},",")],-1)),n[124]||(n[124]=l(`
`)),n[125]||(n[125]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"              'stroke-dasharray'"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"dashOffset"),s("span",{style:{color:"#9ECBFF"}},"}px, ${"),s("span",{style:{color:"#E1E4E8"}},"circumference"),s("span",{style:{color:"#9ECBFF"}},"}px`"),s("span",{style:{color:"#E1E4E8"}},",")],-1)),n[126]||(n[126]=l(`
`)),n[127]||(n[127]=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"              'stroke-dashoffset'"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"'0px'"),s("span",{style:{color:"#E1E4E8"}},",")],-1)),n[128]||(n[128]=l(`
`)),n[129]||(n[129]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            }"),s("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[130]||(n[130]=l(`
`)),n[131]||(n[131]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          />")],-1)),n[132]||(n[132]=l(`
`)),s("span",O,[n[8]||(n[8]=s("span",{style:{color:"#E1E4E8"}},"        </",-1)),s("span",X,[o(r,{name:"ProgressIndicator"},{content:t(({})=>[o(e,{title:"props",data:`[
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
]`})]),default:t(()=>[n[7]||(n[7]=l("ProgressIndicator"))]),_:1})]),n[9]||(n[9]=s("span",{style:{color:"#E1E4E8"}},">",-1))]),n[133]||(n[133]=l(`
`)),n[134]||(n[134]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"svg"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[135]||(n[135]=l(`
`)),n[136]||(n[136]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"absolute inset-0 flex items-center justify-center"'),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[137]||(n[137]=l(`
`)),n[138]||(n[138]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#B392F0"}}," class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text-lg font-bold text-foreground"'),s("span",{style:{color:"#E1E4E8"}},">{{ progress }}%</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[139]||(n[139]=l(`
`)),n[140]||(n[140]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[141]||(n[141]=l(`
`)),s("span",J,[n[11]||(n[11]=s("span",{style:{color:"#E1E4E8"}},"    </",-1)),s("span",z,[o(r,{name:"ProgressRoot"},{content:t(({})=>[o(e,{title:"props",data:`[
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
]`}),o(e,{title:"emits",data:`[
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
]`}),o(e,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "number | null | undefined"
  }
]`}),o(e,{title:"methods",data:`[
  {
    "name": "getValueLabel",
    "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\\n",
    "type": "(value: number, max: number) => string"
  }
]`})]),default:t(()=>[n[10]||(n[10]=l("ProgressRoot"))]),_:1})]),n[12]||(n[12]=s("span",{style:{color:"#E1E4E8"}},">",-1))]),n[142]||(n[142]=l(`
`)),n[143]||(n[143]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")],-1)),n[144]||(n[144]=l(`
`)),n[145]||(n[145]=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:t(()=>[o(q)]),_:1}),o(v,null,{default:t(()=>n[148]||(n[148]=[s("h3",{id:"circular-progress-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[l("Circular Progress "),s("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#circular-progress-1","aria-label":'Permalink to "Circular Progress"'},[s("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[l("​"),s("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[s("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[s("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1)])),_:1})])}}});export{K as __pageData,Q as default};
