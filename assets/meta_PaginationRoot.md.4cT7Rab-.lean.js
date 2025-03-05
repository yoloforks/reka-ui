import{_ as r,c as p,e,au as t,o as s}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/PaginationRoot.md","filePath":"meta/PaginationRoot.md","lastUpdated":1741142901000}'),i={name:"meta/PaginationRoot.md"};function d(l,u,m,c,h,f){const a=t("PropsTable"),n=t("EmitsTable"),o=t("SlotsTable");return s(),p("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'nav'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultPage",description:`<p>The value of the page that should be active when initially rendered.</p>
<p>Use when you do not need to control the value state.</p>
`,type:"number",required:!1,default:"1"},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with item</p>
`,type:"boolean",required:!1},{name:"itemsPerPage",description:`<p>Number of items per page</p>
`,type:"number",required:!0},{name:"page",description:`<p>The controlled value of the current page. Can be binded as <code>v-model:page</code>.</p>
`,type:"number",required:!1},{name:"showEdges",description:`<p>When <code>true</code>, always show first page, last page, and ellipsis</p>
`,type:"boolean",required:!1,default:"false"},{name:"siblingCount",description:`<p>Number of sibling should be shown around the current page</p>
`,type:"number",required:!1,default:"2"},{name:"total",description:`<p>Number of items in your list</p>
`,type:"number",required:!1,default:"0"}]}),e(n,{data:[{name:"update:page",description:`<p>Event handler called when the page value changes</p>
`,type:"[value: number]"}]}),e(o,{data:[{name:"page",description:`<p>Current page state</p>
`,type:"number"},{name:"pageCount",description:`<p>Number of pages</p>
`,type:"number"}]})])}const y=r(i,[["render",d]]);export{g as __pageData,y as default};
