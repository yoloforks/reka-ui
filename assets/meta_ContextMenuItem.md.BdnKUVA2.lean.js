import{_ as a,c as r,e,au as t,o as s}from"./chunks/framework.6UEeBrHH.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ContextMenuItem.md","filePath":"meta/ContextMenuItem.md","lastUpdated":1741142901000}'),i={name:"meta/ContextMenuItem.md"};function d(p,l,c,m,h,u){const n=t("PropsTable"),o=t("EmitsTable");return s(),r("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the item.</p>
`,type:"boolean",required:!1},{name:"textValue",description:`<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. <br>
Use this when the content is complex, or you have non-textual content inside.</p>
`,type:"string",required:!1}]}),e(o,{data:[{name:"select",description:`<p>Event handler called when the user selects an item (via mouse or keyboard). <br>
Calling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>
`,type:"[event: Event]"}]})])}const b=a(i,[["render",d]]);export{v as __pageData,b as default};
