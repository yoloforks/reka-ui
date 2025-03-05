import{_ as o,c as r,e,au as t,o as s}from"./chunks/framework.BvEsjwOO.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SelectItem.md","filePath":"meta/SelectItem.md","lastUpdated":1741141490000}'),d={name:"meta/SelectItem.md"};function p(i,c,l,m,h,u){const a=t("PropsTable"),n=t("EmitsTable");return s(),r("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the item.</p>
`,type:"boolean",required:!1},{name:"textValue",description:`<p>Optional text used for typeahead purposes.</p>
<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>
<p>Use this when the content is complex, or you have non-textual content inside.</p>
`,type:"string",required:!1},{name:"value",description:`<p>The value given as data when submitted with a <code>name</code>.</p>
`,type:"AcceptableValue",required:!0}]}),e(n,{data:[{name:"select",description:`<p>Event handler called when the selecting item. <br> It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: SelectEvent<AcceptableValue>]"}]})])}const v=o(d,[["render",p]]);export{b as __pageData,v as default};
