import{_ as a,c as s,e,au as o,o as n}from"./chunks/framework.BvEsjwOO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ScrollAreaRoot.md","filePath":"meta/ScrollAreaRoot.md","lastUpdated":1741141490000}'),i={name:"meta/ScrollAreaRoot.md"};function l(c,d,p,h,m,f){const r=o("PropsTable"),t=o("MethodsTable");return n(),s("div",null,[e(r,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"scrollHideDelay",description:`<p>If type is set to either <code>scroll</code> or <code>hover</code>, this prop determines the length of time, in milliseconds, <br> before the scrollbars are hidden after the user stops interacting with scrollbars.</p>
`,type:"number",required:!1,default:"600"},{name:"type",description:`<p>Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.</p>
<p><code>auto</code> - means that scrollbars are visible when content is overflowing on the corresponding orientation. <br>
<code>always</code> - means that scrollbars are always visible regardless of whether the content is overflowing.<br>
<code>scroll</code> - means that scrollbars are visible when the user is scrolling along its corresponding orientation.<br>
<code>hover</code> - when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.</p>
`,type:"'scroll' | 'always' | 'auto' | 'hover'",required:!1,default:"'hover'"}]}),e(t,{data:[{name:"scrollTop",description:`<p>Scroll viewport to top</p>
`,type:"() => void"},{name:"scrollTopLeft",description:`<p>Scroll viewport to top-left</p>
`,type:"() => void"}]})])}const g=a(i,[["render",l]]);export{u as __pageData,g as default};
