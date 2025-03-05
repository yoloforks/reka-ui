import{_ as y,c as h,aM as r,e as o,p as s,b as n,a3 as a,au as i,o as g}from"./chunks/framework.6UEeBrHH.js";const W=JSON.parse('{"title":"Config Provider","description":"Wraps your app to provide global configurations.","frontmatter":{"title":"Config Provider","description":"Wraps your app to provide global configurations.","sidebar":true},"headers":[{"level":2,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Config Provider","slug":"config-provider-1","link":"#config-provider-1","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Hydration issue (Vue < 3.5)","slug":"hydration-issue-vue-3-5","link":"#hydration-issue-vue-3-5","children":[]}],"relativePath":"docs/utilities/config-provider.md","filePath":"docs/utilities/config-provider.md","lastUpdated":1741142901000}'),m={name:"docs/utilities/config-provider.md"},f={name:"vue",class:"language-vue"},E={class:"shiki github-dark vp-code",tabindex:"0"},b={class:"line"},v={style:{color:"#85E89D"}},_={class:"line"},T={style:{color:"#85E89D"}},k={name:"vue",class:"language-vue"},w={class:"shiki github-dark vp-code",tabindex:"0"},C={class:"line"},x={style:{color:"#85E89D"}},q={class:"line"},I={style:{color:"#85E89D"}},P={name:"vue",class:"language-vue"},F={class:"shiki github-dark vp-code",tabindex:"0"},A={class:"line"},S={style:{color:"#85E89D"}},B={class:"line"},D={style:{color:"#85E89D"}};function M(V,e,j,N,R,O){const p=i("Description"),d=i("Highlights"),t=i("link-hover-card-content"),l=i("link-hover-card"),c=i("PropsTable"),u=i("MethodsTable");return g(),h("div",null,[e[38]||(e[38]=r("",1)),o(p,null,{default:s(()=>e[0]||(e[0]=[a(" Wraps your app to provide global configurations. ")])),_:1}),o(d,{features:["Enables all primitives to inherit global reading direction.","Enables changing the behavior of scroll body when setting body lock.","Much more controls to prevent layout shifts."]}),e[39]||(e[39]=r("",2)),n("div",f,[e[11]||(e[11]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[12]||(e[12]=n("span",{class:"lang"},"vue",-1)),n("pre",E,[n("code",null,[e[7]||(e[7]=r("",10)),n("span",b,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",v,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[1]||(e[1]=a("ConfigProvider"))]),_:1})]),e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[8]||(e[8]=r("",3)),n("span",_,[e[5]||(e[5]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",T,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[4]||(e[4]=a("ConfigProvider"))]),_:1})]),e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[9]||(e[9]=a(`
`)),e[10]||(e[10]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[40]||(e[40]=r("",4)),o(c,{data:[{name:"dir",description:`<p>The global reading direction of your application. This will be inherited by all primitives.</p>
`,type:"'ltr' | 'rtl'",required:!1,default:"'ltr'"},{name:"locale",description:`<p>The global locale of your application. This will be inherited by all primitives.</p>
`,type:"string",required:!1,default:"'en'"},{name:"nonce",description:`<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>
`,type:"string",required:!1},{name:"scrollBody",description:`<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>
`,type:"boolean | ScrollBodyOption",required:!1,default:"true"},{name:"useId",description:`<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>
`,type:"(() => string)",required:!1}]}),o(u,{data:[{name:"useId",description:`<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>
`,type:"() => string"}]}),e[41]||(e[41]=r("",3)),n("div",k,[e[22]||(e[22]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[23]||(e[23]=n("span",{class:"lang"},"vue",-1)),n("pre",w,[n("code",null,[e[18]||(e[18]=r("",10)),n("span",C,[e[14]||(e[14]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",x,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[13]||(e[13]=a("ConfigProvider"))]),_:1})])]),e[19]||(e[19]=r("",9)),n("span",q,[e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",I,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[15]||(e[15]=a("ConfigProvider"))]),_:1})]),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[20]||(e[20]=a(`
`)),e[21]||(e[21]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[42]||(e[42]=r("",3)),n("div",P,[e[36]||(e[36]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[37]||(e[37]=n("span",{class:"lang"},"vue",-1)),n("pre",F,[n("code",null,[e[30]||(e[30]=r("",16)),n("span",A,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",S,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[24]||(e[24]=a("ConfigProvider"))]),_:1})]),e[26]||(e[26]=r("",7))]),e[31]||(e[31]=a(`
`)),e[32]||(e[32]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    …")],-1)),e[33]||(e[33]=a(`
`)),n("span",B,[e[28]||(e[28]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",D,[o(l,{name:"ConfigProvider"},{content:s(({})=>[o(t,{title:"props",data:`[
  {
    "name": "dir",
    "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false,
    "default": "\\"ltr\\""
  },
  {
    "name": "locale",
    "description": "<p>The global locale of your application. This will be inherited by all primitives.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"en\\""
  },
  {
    "name": "nonce",
    "description": "<p>The global <code>nonce</code> value of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "scrollBody",
    "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\\n",
    "type": "boolean | ScrollBodyOption",
    "required": false,
    "default": "true"
  },
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "(() => string)",
    "required": false
  }
]`}),o(t,{title:"methods",data:`[
  {
    "name": "useId",
    "description": "<p>The global <code>useId</code> injection as a workaround for preventing hydration issue.</p>\\n",
    "type": "() => string"
  }
]`})]),default:s(()=>[e[27]||(e[27]=a("ConfigProvider"))]),_:1})]),e[29]||(e[29]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[34]||(e[34]=a(`
`)),e[35]||(e[35]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const $=y(m,[["render",M]]);export{W as __pageData,$ as default};
