import{_ as i,c as l,e,au as n,o as s}from"./chunks/framework.6UEeBrHH.js";const z=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SplitterPanel.md","filePath":"meta/SplitterPanel.md","lastUpdated":1741142901000}'),r={name:"meta/SplitterPanel.md"};function d(c,m,u,h,f,b){const a=n("PropsTable"),t=n("EmitsTable"),p=n("SlotsTable"),o=n("MethodsTable");return s(),l("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"collapsedSize",description:`<p>The size of panel when it is collapsed.</p>
`,type:"number",required:!1},{name:"collapsible",description:`<p>Should panel collapse when resized beyond its <code>minSize</code>. When <code>true</code>, it will be collapsed to <code>collapsedSize</code>.</p>
`,type:"boolean",required:!1},{name:"defaultSize",description:`<p>Initial size of panel (numeric value between 1-100)</p>
`,type:"number",required:!1},{name:"id",description:`<p>Panel id (unique within group); falls back to <code>useId</code> when not provided</p>
`,type:"string",required:!1},{name:"maxSize",description:`<p>The maximum allowable size of panel (numeric value between 1-100); defaults to <code>100</code></p>
`,type:"number",required:!1},{name:"minSize",description:`<p>The minimum allowable size of panel (numeric value between 1-100); defaults to <code>10</code></p>
`,type:"number",required:!1},{name:"order",description:`<p>The order of panel within group; required for groups with conditionally rendered panels</p>
`,type:"number",required:!1}]}),e(t,{data:[{name:"collapse",description:`<p>Event handler called when panel is collapsed.</p>
`,type:"[]"},{name:"expand",description:`<p>Event handler called when panel is expanded.</p>
`,type:"[]"},{name:"resize",description:`<p>Event handler called when panel is resized; size parameter is a numeric value between 1-100.</p>
`,type:"[size: number, prevSize: number]"}]}),e(p,{data:[{name:"isCollapsed",description:`<p>Is the panel collapsed</p>
`,type:"boolean"},{name:"isExpanded",description:`<p>Is the panel expanded</p>
`,type:"boolean"}]}),e(o,{data:[{name:"collapse",description:`<p>If panel is <code>collapsible</code>, collapse it fully.</p>
`,type:"() => void"},{name:"expand",description:`<p>If panel is currently collapsed, expand it to its most recent size.</p>
`,type:"() => void"},{name:"getSize",description:`<p>Gets the current size of the panel as a percentage (1 - 100).</p>
`,type:"() => number"},{name:"resize",description:`<p>Resize panel to the specified percentage (1 - 100).</p>
`,type:"(size: number) => void"}]})])}const w=i(r,[["render",d]]);export{z as __pageData,w as default};
