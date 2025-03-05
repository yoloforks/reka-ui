import{_ as i,c as r,e,au as t,o as d}from"./chunks/framework.BvEsjwOO.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/AccordionRoot.md","filePath":"meta/AccordionRoot.md","lastUpdated":1741141490000}'),s={name:"meta/AccordionRoot.md"};function l(p,c,m,u,h,f){const o=t("PropsTable"),n=t("EmitsTable"),a=t("SlotsTable");return d(),r("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"collapsible",description:`<p>When type is "single", allows closing content when clicking trigger for an open item.
When type is "multiple", this prop has no effect.</p>
`,type:"boolean",required:!1,default:"false"},{name:"defaultValue",description:`<p>The default active value of the item(s).</p>
<p>Use when you do not need to control the state of the item(s).</p>
`,type:"string | string[]",required:!1},{name:"dir",description:`<p>The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the accordion and all its items</p>
`,type:"boolean",required:!1,default:"false"},{name:"modelValue",description:`<p>The controlled value of the active item(s).</p>
<p>Use this when you need to control the state of the items. Can be binded with <code>v-model</code></p>
`,type:"string | string[]",required:!1},{name:"orientation",description:`<p>The orientation of the accordion.</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'vertical'"},{name:"type",description:`<p>Determines whether a "single" or "multiple" items can be selected at a time.</p>
<p>This prop will overwrite the inferred type from <code>modelValue</code> and <code>defaultValue</code>.</p>
`,type:"'single' | 'multiple'",required:!1},{name:"unmountOnHide",description:`<p>When <code>true</code>, the element will be unmounted on closed state.</p>
`,type:"boolean",required:!1,default:"true"}]}),e(n,{data:[{name:"update:modelValue",description:`<p>Event handler called when the expanded state of an item changes</p>
`,type:"[value: string | string[]]"}]}),e(a,{data:[{name:"modelValue",description:`<p>Current active value</p>
`,type:"AcceptableValue | AcceptableValue[] | undefined"}]})])}const v=i(s,[["render",l]]);export{b as __pageData,v as default};
