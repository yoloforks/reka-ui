import{_ as a,c as r,e,au as t,o as d}from"./chunks/framework.DhAtJbM3.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/DropdownMenuCheckboxItem.md","filePath":"meta/DropdownMenuCheckboxItem.md","lastUpdated":1741141824000}'),s={name:"meta/DropdownMenuCheckboxItem.md"};function i(p,l,c,m,h,u){const n=t("PropsTable"),o=t("EmitsTable");return d(),r("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the item.</p>
`,type:"boolean",required:!1},{name:"modelValue",description:`<p>The controlled checked state of the item. Can be used as <code>v-model</code>.</p>
`,type:"false | true | 'indeterminate'",required:!1},{name:"textValue",description:`<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. <br>
Use this when the content is complex, or you have non-textual content inside.</p>
`,type:"string",required:!1}]}),e(o,{data:[{name:"select",description:`<p>Event handler called when the user selects an item (via mouse or keyboard). <br>
Calling <code>event.preventDefault</code> in this handler will prevent the menu from closing when selecting that item.</p>
`,type:"[event: Event]"},{name:"update:modelValue",description:`<p>Event handler called when the value changes.</p>
`,type:"[payload: boolean]"}]})])}const v=a(s,[["render",i]]);export{b as __pageData,v as default};
