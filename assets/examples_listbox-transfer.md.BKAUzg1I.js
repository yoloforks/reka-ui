import{a5 as g,a8 as v,aa as F,I as w}from"./chunks/theme.D6vbkreq.js";import{d as T,f as E,o as y,c as b,e as o,p as s,b as e,u as p,F as C,a6 as x,l as B,a3 as t,t as h,aM as A,au as u}from"./chunks/framework.DhAtJbM3.js";const k={class:"text-foreground flex items-center"},D={class:"flex mx-2 gap-2"},R=["disabled"],I=["disabled"],W=T({__name:"index",setup(q){const n=E([...["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "]]),m=E([]),d=E([]),l=E([]);E([]),E([]);function a(f){const[r,i,c]=f==="1to2"?[n,m,d]:[m,n,l];r.value=r.value.filter(L=>!c.value.includes(L)),i.value.push(...c.value),c.value=[]}return(f,r)=>(y(),b("div",k,[o(p(F),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=i=>d.value=i),class:"bg-card rounded-lg border border-muted w-48",multiple:""},{default:s(()=>[r[4]||(r[4]=e("div",{class:"px-3 py-2"},[e("h2",{class:"text-muted-foreground text-xs font-semibold"}," List 1 ")],-1)),o(p(g),{class:"h-44 overflow-auto p-1 border-t border-muted"},{default:s(()=>[(y(!0),b(C,null,x(n.value,i=>(y(),B(p(v),{key:i,value:i,class:"text-sm px-2 py-1 cursor-default data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded select-none"},{default:s(()=>[t(h(i),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"]),e("div",D,[e("button",{class:"w-8 h-8 text-lg border border-muted flex items-center justify-center rounded bg-card hover:bg-muted disabled:opacity-50",disabled:!l.value.length,onClick:r[1]||(r[1]=i=>a("2to1"))},[o(p(w),{icon:"lucide:chevron-left"})],8,R),e("button",{class:"w-8 h-8 text-lg border border-muted flex items-center justify-center rounded bg-card hover:bg-muted disabled:opacity-50",disabled:!d.value.length,onClick:r[2]||(r[2]=i=>a("1to2"))},[o(p(w),{icon:"lucide:chevron-right"})],8,I)]),o(p(F),{modelValue:l.value,"onUpdate:modelValue":r[3]||(r[3]=i=>l.value=i),class:"bg-card rounded-lg border border-muted w-48",multiple:""},{default:s(()=>[r[5]||(r[5]=e("div",{class:"px-3 py-2"},[e("h2",{class:"text-muted-foreground text-xs font-semibold"}," List 2 ")],-1)),o(p(g),{class:"h-44 overflow-auto p-1 border-t border-muted"},{default:s(()=>[(y(!0),b(C,null,x(m.value,i=>(y(),B(p(v),{key:i,value:i,class:"text-sm px-2 py-1 cursor-default data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded select-none"},{default:s(()=>[t(h(i),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]))}}),M={name:"index.vue",class:"language-vue"},S={class:"shiki github-dark vp-code",tabindex:"0"},j={class:"line"},H={style:{color:"#85E89D"}},P={class:"line"},U={style:{color:"#85E89D"}},$={class:"line"},N={style:{color:"#85E89D"}},O={class:"line"},z={style:{color:"#85E89D"}},J={class:"line"},G={style:{color:"#85E89D"}},K={class:"line"},Q={style:{color:"#85E89D"}},X={class:"line"},Y={style:{color:"#85E89D"}},Z={class:"line"},_={style:{color:"#85E89D"}},ee={class:"line"},ne={style:{color:"#85E89D"}},te={class:"line"},oe={style:{color:"#85E89D"}},se={class:"line"},le={style:{color:"#85E89D"}},re={class:"line"},ae={style:{color:"#85E89D"}},Ee=JSON.parse('{"title":"Listbox Transfer","description":"","frontmatter":{"title":"Listbox Transfer","tags":["Listbox"],"sidebar":true},"headers":[{"level":3,"title":"Listbox Transfer","slug":"listbox-transfer-1","link":"#listbox-transfer-1","children":[]}],"relativePath":"examples/listbox-transfer.md","filePath":"examples/listbox-transfer.md","lastUpdated":1741141824000}'),ie={name:"examples/listbox-transfer.md"},ue=Object.assign(ie,{setup(q){return(V,n)=>{const m=u("Description"),d=u("Tags"),l=u("link-hover-card-content"),a=u("link-hover-card"),f=u("ComponentPreview"),r=u("ExampleSection");return y(),b("div",null,[n[231]||(n[231]=A('<h1 id="listbox-transfer" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Listbox Transfer <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#listbox-transfer" aria-label="Permalink to &quot;Listbox Transfer&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(m,null,{default:s(()=>n[0]||(n[0]=[e("p",null,"Render a Transfer component with Listbox.",-1)])),_:1}),o(d),o(f,{name:"ListboxTransfer",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:s(()=>[e("div",M,[n[228]||(n[228]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[229]||(n[229]=e("span",{class:"lang"},"vue",-1)),e("pre",S,[e("code",null,[n[39]||(n[39]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[40]||(n[40]=t(`
`)),n[41]||(n[41]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[42]||(n[42]=t(`
`)),n[43]||(n[43]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[44]||(n[44]=t(`
`)),n[45]||(n[45]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { ListboxContent, ListboxItem, ListboxRoot } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[46]||(n[46]=t(`
`)),n[47]||(n[47]=e("span",{class:"line"},null,-1)),n[48]||(n[48]=t(`
`)),n[49]||(n[49]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," states"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," [")],-1)),n[50]||(n[50]=t(`
`)),n[51]||(n[51]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'California'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[52]||(n[52]=t(`
`)),n[53]||(n[53]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Illinois'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[54]||(n[54]=t(`
`)),n[55]||(n[55]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Maryland'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[56]||(n[56]=t(`
`)),n[57]||(n[57]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Texas'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[58]||(n[58]=t(`
`)),n[59]||(n[59]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Florida'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[60]||(n[60]=t(`
`)),n[61]||(n[61]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Colorado'"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[62]||(n[62]=t(`
`)),n[63]||(n[63]=e("span",{class:"line"},[e("span",{style:{color:"#9ECBFF"}},"  'Connecticut '"),e("span",{style:{color:"#E1E4E8"}},",")],-1)),n[64]||(n[64]=t(`
`)),n[65]||(n[65]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[66]||(n[66]=t(`
`)),n[67]||(n[67]=e("span",{class:"line"},null,-1)),n[68]||(n[68]=t(`
`)),n[69]||(n[69]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," list1"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#79B8FF"}},"string"),e("span",{style:{color:"#E1E4E8"}},"[]>(["),e("span",{style:{color:"#F97583"}},"..."),e("span",{style:{color:"#E1E4E8"}},"states])")],-1)),n[70]||(n[70]=t(`
`)),n[71]||(n[71]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," list2"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#79B8FF"}},"string"),e("span",{style:{color:"#E1E4E8"}},"[]>([])")],-1)),n[72]||(n[72]=t(`
`)),n[73]||(n[73]=e("span",{class:"line"},null,-1)),n[74]||(n[74]=t(`
`)),n[75]||(n[75]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," selectedList1"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"([])")],-1)),n[76]||(n[76]=t(`
`)),n[77]||(n[77]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," selectedList2"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"([])")],-1)),n[78]||(n[78]=t(`
`)),n[79]||(n[79]=e("span",{class:"line"},null,-1)),n[80]||(n[80]=t(`
`)),n[81]||(n[81]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," searchValue1"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"([])")],-1)),n[82]||(n[82]=t(`
`)),n[83]||(n[83]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," searchValue2"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"([])")],-1)),n[84]||(n[84]=t(`
`)),n[85]||(n[85]=e("span",{class:"line"},null,-1)),n[86]||(n[86]=t(`
`)),n[87]||(n[87]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"function"),e("span",{style:{color:"#B392F0"}}," transferAction"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"action"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#9ECBFF"}}," '1to2'"),e("span",{style:{color:"#F97583"}}," |"),e("span",{style:{color:"#9ECBFF"}}," '2to1'"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[88]||(n[88]=t(`
`)),n[89]||(n[89]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  const"),e("span",{style:{color:"#E1E4E8"}}," ["),e("span",{style:{color:"#79B8FF"}},"fromList"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"toList"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"selectedList"),e("span",{style:{color:"#E1E4E8"}},"] "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," action "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#9ECBFF"}}," '1to2'")],-1)),n[90]||(n[90]=t(`
`)),n[91]||(n[91]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    ?"),e("span",{style:{color:"#E1E4E8"}}," [list1, list2, selectedList1]")],-1)),n[92]||(n[92]=t(`
`)),n[93]||(n[93]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    :"),e("span",{style:{color:"#E1E4E8"}}," [list2, list1, selectedList2]")],-1)),n[94]||(n[94]=t(`
`)),n[95]||(n[95]=e("span",{class:"line"},null,-1)),n[96]||(n[96]=t(`
`)),n[97]||(n[97]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  fromList.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," fromList.value."),e("span",{style:{color:"#B392F0"}},"filter"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"item"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#F97583"}}," !"),e("span",{style:{color:"#E1E4E8"}},"selectedList.value."),e("span",{style:{color:"#B392F0"}},"includes"),e("span",{style:{color:"#E1E4E8"}},"(item))")],-1)),n[98]||(n[98]=t(`
`)),n[99]||(n[99]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  toList.value."),e("span",{style:{color:"#B392F0"}},"push"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#F97583"}},"..."),e("span",{style:{color:"#E1E4E8"}},"selectedList.value)")],-1)),n[100]||(n[100]=t(`
`)),n[101]||(n[101]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  selectedList.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," []")],-1)),n[102]||(n[102]=t(`
`)),n[103]||(n[103]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[104]||(n[104]=t(`
`)),n[105]||(n[105]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[106]||(n[106]=t(`
`)),n[107]||(n[107]=e("span",{class:"line"},null,-1)),n[108]||(n[108]=t(`
`)),n[109]||(n[109]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[110]||(n[110]=t(`
`)),n[111]||(n[111]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-foreground flex items-center "'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[112]||(n[112]=t(`
`)),e("span",j,[n[2]||(n[2]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",H,[o(a,{name:"ListboxRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "orientation",
    "description": "<p>The orientation of the listbox. &lt;br&gt;Mainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"vertical\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "selectionBehavior",
    "description": "<p>How multiple selection should behave in the collection.</p>\\n",
    "type": "\\"toggle\\" | \\"replace\\"",
    "required": false,
    "default": "\\"toggle\\""
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "entryFocus",
    "description": "<p>Event handler called when container is being focused. Can be prevented.</p>\\n",
    "type": "[event: CustomEvent<any>]"
  },
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "leave",
    "description": "<p>Event handler called when the mouse leave the container</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:s(()=>[n[1]||(n[1]=t("ListboxRoot"))]),_:1})])]),n[113]||(n[113]=t(`
`)),n[114]||(n[114]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"selectedList1"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[115]||(n[115]=t(`
`)),n[116]||(n[116]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"bg-card rounded-lg border border-muted w-48"')],-1)),n[117]||(n[117]=t(`
`)),n[118]||(n[118]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      multiple")],-1)),n[119]||(n[119]=t(`
`)),n[120]||(n[120]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[121]||(n[121]=t(`
`)),n[122]||(n[122]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"px-3 py-2"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[123]||(n[123]=t(`
`)),n[124]||(n[124]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"h2"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-muted-foreground text-xs font-semibold"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[125]||(n[125]=t(`
`)),n[126]||(n[126]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          List 1")],-1)),n[127]||(n[127]=t(`
`)),n[128]||(n[128]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        </"),e("span",{style:{color:"#85E89D"}},"h2"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[129]||(n[129]=t(`
`)),n[130]||(n[130]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[131]||(n[131]=t(`
`)),n[132]||(n[132]=e("span",{class:"line"},null,-1)),n[133]||(n[133]=t(`
`)),e("span",P,[n[4]||(n[4]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",U,[o(a,{name:"ListboxContent"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[n[3]||(n[3]=t("ListboxContent"))]),_:1})]),n[5]||(n[5]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[6]||(n[6]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[7]||(n[7]=e("span",{style:{color:"#9ECBFF"}},'"h-44 overflow-auto p-1 border-t border-muted"',-1)),n[8]||(n[8]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[134]||(n[134]=t(`
`)),e("span",$,[n[10]||(n[10]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",N,[o(a,{name:"ListboxItem"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:s(()=>[n[9]||(n[9]=t("ListboxItem"))]),_:1})])]),n[135]||(n[135]=t(`
`)),n[136]||(n[136]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"          v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," list1"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[137]||(n[137]=t(`
`)),n[138]||(n[138]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[139]||(n[139]=t(`
`)),n[140]||(n[140]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[141]||(n[141]=t(`
`)),n[142]||(n[142]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-sm px-2 py-1 cursor-default data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded select-none"')],-1)),n[143]||(n[143]=t(`
`)),n[144]||(n[144]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[145]||(n[145]=t(`
`)),n[146]||(n[146]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ item }}")],-1)),n[147]||(n[147]=t(`
`)),e("span",O,[n[12]||(n[12]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",z,[o(a,{name:"ListboxItem"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:s(()=>[n[11]||(n[11]=t("ListboxItem"))]),_:1})]),n[13]||(n[13]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[148]||(n[148]=t(`
`)),e("span",J,[n[15]||(n[15]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",G,[o(a,{name:"ListboxContent"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[n[14]||(n[14]=t("ListboxContent"))]),_:1})]),n[16]||(n[16]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[149]||(n[149]=t(`
`)),e("span",K,[n[18]||(n[18]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",Q,[o(a,{name:"ListboxRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "orientation",
    "description": "<p>The orientation of the listbox. &lt;br&gt;Mainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"vertical\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "selectionBehavior",
    "description": "<p>How multiple selection should behave in the collection.</p>\\n",
    "type": "\\"toggle\\" | \\"replace\\"",
    "required": false,
    "default": "\\"toggle\\""
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "entryFocus",
    "description": "<p>Event handler called when container is being focused. Can be prevented.</p>\\n",
    "type": "[event: CustomEvent<any>]"
  },
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "leave",
    "description": "<p>Event handler called when the mouse leave the container</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:s(()=>[n[17]||(n[17]=t("ListboxRoot"))]),_:1})]),n[19]||(n[19]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[150]||(n[150]=t(`
`)),n[151]||(n[151]=e("span",{class:"line"},null,-1)),n[152]||(n[152]=t(`
`)),n[153]||(n[153]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex mx-2 gap-2"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[154]||(n[154]=t(`
`)),n[155]||(n[155]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"button")],-1)),n[156]||(n[156]=t(`
`)),n[157]||(n[157]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-8 h-8 text-lg border border-muted flex items-center justify-center rounded bg-card hover:bg-muted disabled:opacity-50"')],-1)),n[158]||(n[158]=t(`
`)),n[159]||(n[159]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"disabled"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},"selectedList2."),e("span",{style:{color:"#79B8FF"}},"length"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[160]||(n[160]=t(`
`)),n[161]||(n[161]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        @"),e("span",{style:{color:"#B392F0"}},"click"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#B392F0"}},"transferAction"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'2to1'"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[162]||(n[162]=t(`
`)),n[163]||(n[163]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[164]||(n[164]=t(`
`)),n[165]||(n[165]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"lucide:chevron-left"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[166]||(n[166]=t(`
`)),n[167]||(n[167]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"button"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[168]||(n[168]=t(`
`)),n[169]||(n[169]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"button")],-1)),n[170]||(n[170]=t(`
`)),n[171]||(n[171]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-8 h-8 text-lg border border-muted flex items-center justify-center rounded bg-card hover:bg-muted disabled:opacity-50"')],-1)),n[172]||(n[172]=t(`
`)),n[173]||(n[173]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"disabled"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},"selectedList1."),e("span",{style:{color:"#79B8FF"}},"length"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[174]||(n[174]=t(`
`)),n[175]||(n[175]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        @"),e("span",{style:{color:"#B392F0"}},"click"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#B392F0"}},"transferAction"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'1to2'"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[176]||(n[176]=t(`
`)),n[177]||(n[177]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[178]||(n[178]=t(`
`)),n[179]||(n[179]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"lucide:chevron-right"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[180]||(n[180]=t(`
`)),n[181]||(n[181]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"button"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[182]||(n[182]=t(`
`)),n[183]||(n[183]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[184]||(n[184]=t(`
`)),n[185]||(n[185]=e("span",{class:"line"},null,-1)),n[186]||(n[186]=t(`
`)),e("span",X,[n[21]||(n[21]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Y,[o(a,{name:"ListboxRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "orientation",
    "description": "<p>The orientation of the listbox. &lt;br&gt;Mainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"vertical\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "selectionBehavior",
    "description": "<p>How multiple selection should behave in the collection.</p>\\n",
    "type": "\\"toggle\\" | \\"replace\\"",
    "required": false,
    "default": "\\"toggle\\""
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "entryFocus",
    "description": "<p>Event handler called when container is being focused. Can be prevented.</p>\\n",
    "type": "[event: CustomEvent<any>]"
  },
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "leave",
    "description": "<p>Event handler called when the mouse leave the container</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:s(()=>[n[20]||(n[20]=t("ListboxRoot"))]),_:1})])]),n[187]||(n[187]=t(`
`)),n[188]||(n[188]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"selectedList2"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[189]||(n[189]=t(`
`)),n[190]||(n[190]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"bg-card rounded-lg border border-muted w-48"')],-1)),n[191]||(n[191]=t(`
`)),n[192]||(n[192]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      multiple")],-1)),n[193]||(n[193]=t(`
`)),n[194]||(n[194]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[195]||(n[195]=t(`
`)),n[196]||(n[196]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"px-3 py-2"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[197]||(n[197]=t(`
`)),n[198]||(n[198]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"h2"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-muted-foreground text-xs font-semibold"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[199]||(n[199]=t(`
`)),n[200]||(n[200]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          List 2")],-1)),n[201]||(n[201]=t(`
`)),n[202]||(n[202]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        </"),e("span",{style:{color:"#85E89D"}},"h2"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[203]||(n[203]=t(`
`)),n[204]||(n[204]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[205]||(n[205]=t(`
`)),n[206]||(n[206]=e("span",{class:"line"},null,-1)),n[207]||(n[207]=t(`
`)),e("span",Z,[n[23]||(n[23]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",_,[o(a,{name:"ListboxContent"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[n[22]||(n[22]=t("ListboxContent"))]),_:1})]),n[24]||(n[24]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[25]||(n[25]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[26]||(n[26]=e("span",{style:{color:"#9ECBFF"}},'"h-44 overflow-auto p-1 border-t border-muted"',-1)),n[27]||(n[27]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[208]||(n[208]=t(`
`)),e("span",ee,[n[29]||(n[29]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",ne,[o(a,{name:"ListboxItem"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:s(()=>[n[28]||(n[28]=t("ListboxItem"))]),_:1})])]),n[209]||(n[209]=t(`
`)),n[210]||(n[210]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"          v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," list2"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[211]||(n[211]=t(`
`)),n[212]||(n[212]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[213]||(n[213]=t(`
`)),n[214]||(n[214]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"item"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[215]||(n[215]=t(`
`)),n[216]||(n[216]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-sm px-2 py-1 cursor-default data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded select-none"')],-1)),n[217]||(n[217]=t(`
`)),n[218]||(n[218]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[219]||(n[219]=t(`
`)),n[220]||(n[220]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ item }}")],-1)),n[221]||(n[221]=t(`
`)),e("span",te,[n[31]||(n[31]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",oe,[o(a,{name:"ListboxItem"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:s(()=>[n[30]||(n[30]=t("ListboxItem"))]),_:1})]),n[32]||(n[32]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[222]||(n[222]=t(`
`)),e("span",se,[n[34]||(n[34]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",le,[o(a,{name:"ListboxContent"},{content:s(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:s(()=>[n[33]||(n[33]=t("ListboxContent"))]),_:1})]),n[35]||(n[35]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[223]||(n[223]=t(`
`)),e("span",re,[n[37]||(n[37]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",ae,[o(a,{name:"ListboxRoot"},{content:s(({})=>[o(l,{title:"props",data:`[
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
    "name": "orientation",
    "description": "<p>The orientation of the listbox. &lt;br&gt;Mainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\\n",
    "type": "\\"vertical\\" | \\"horizontal\\"",
    "required": false,
    "default": "\\"vertical\\""
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "selectionBehavior",
    "description": "<p>How multiple selection should behave in the collection.</p>\\n",
    "type": "\\"toggle\\" | \\"replace\\"",
    "required": false,
    "default": "\\"toggle\\""
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "entryFocus",
    "description": "<p>Event handler called when container is being focused. Can be prevented.</p>\\n",
    "type": "[event: CustomEvent<any>]"
  },
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "leave",
    "description": "<p>Event handler called when the mouse leave the container</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:s(()=>[n[36]||(n[36]=t("ListboxRoot"))]),_:1})]),n[38]||(n[38]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[224]||(n[224]=t(`
`)),n[225]||(n[225]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[226]||(n[226]=t(`
`)),n[227]||(n[227]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:s(()=>[o(W)]),_:1}),o(r,null,{default:s(()=>n[230]||(n[230]=[e("h3",{id:"listbox-transfer-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[t("Listbox Transfer "),e("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#listbox-transfer-1","aria-label":'Permalink to "Listbox Transfer"'},[e("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[t("​"),e("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[e("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[e("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1)])),_:1})])}}});export{Ee as __pageData,ue as default};
