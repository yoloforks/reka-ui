import{_ as i,c as r,e,au as o,o as s}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipRoot.md","filePath":"meta/TooltipRoot.md","lastUpdated":1741142868000}'),p={name:"meta/TooltipRoot.md"};function l(d,c,m,h,u,f){const t=o("PropsTable"),n=o("EmitsTable"),a=o("SlotsTable");return s(),r("div",null,[e(t,{data:[{name:"defaultOpen",description:`<p>The open state of the tooltip when it is initially rendered.
Use when you do not need to control its open state.</p>
`,type:"boolean",required:!1,default:"false"},{name:"delayDuration",description:`<p>Override the duration given to the <code>Provider</code> to customise
the open delay for a specific tooltip.</p>
`,type:"number",required:!1},{name:"disableClosingTrigger",description:`<p>When <code>true</code>, clicking on trigger will not close the content.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, disable tooltip</p>
`,type:"boolean",required:!1},{name:"disableHoverableContent",description:`<p>Prevents Tooltip.Content from remaining open when hovering.
Disabling this has accessibility consequences. Inherits
from Tooltip.Provider.</p>
`,type:"boolean",required:!1},{name:"ignoreNonKeyboardFocus",description:`<p>Prevent the tooltip from opening if the focus did not come from
the keyboard by matching against the <code>:focus-visible</code> selector.
This is useful if you want to avoid opening it when switching
browser tabs or closing a dialog.</p>
`,type:"boolean",required:!1},{name:"open",description:`<p>The controlled open state of the tooltip.</p>
`,type:"boolean",required:!1}]}),e(n,{data:[{name:"update:open",description:`<p>Event handler called when the open state of the tooltip changes.</p>
`,type:"[value: boolean]"}]}),e(a,{data:[{name:"open",description:`<p>Current open state</p>
`,type:"boolean"}]})])}const y=i(p,[["render",l]]);export{g as __pageData,y as default};
