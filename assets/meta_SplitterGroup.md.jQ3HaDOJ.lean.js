import{_ as n,c as p,e,au as t,o as s}from"./chunks/framework.6UEeBrHH.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SplitterGroup.md","filePath":"meta/SplitterGroup.md","lastUpdated":1741142384000}'),i={name:"meta/SplitterGroup.md"};function d(l,u,c,m,f,h){const a=t("PropsTable"),o=t("EmitsTable"),r=t("SlotsTable");return s(),p("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"autoSaveId",description:`<p>Unique id used to auto-save group arrangement via <code>localStorage</code>.</p>
`,type:"string | null",required:!1,default:"null"},{name:"direction",description:`<p>The group orientation of splitter.</p>
`,type:"'vertical' | 'horizontal'",required:!0},{name:"id",description:`<p>Group id; falls back to <code>useId</code> when not provided.</p>
`,type:"string | null",required:!1},{name:"keyboardResizeBy",description:`<p>Step size when arrow key was pressed.</p>
`,type:"number | null",required:!1,default:"10"},{name:"storage",description:`<p>Custom storage API; defaults to localStorage</p>
`,type:"PanelGroupStorage",required:!1,default:"defaultStorage"}]}),e(o,{data:[{name:"layout",description:`<p>Event handler called when group layout changes</p>
`,type:"[val: number[]]"}]}),e(r,{data:[{name:"layout",description:`<p>Current size of layout</p>
`,type:"number[]"}]})])}const _=n(i,[["render",d]]);export{y as __pageData,_ as default};
