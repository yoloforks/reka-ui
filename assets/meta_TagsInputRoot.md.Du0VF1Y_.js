import{_ as d,c as i,e,au as t,o as r}from"./chunks/framework.6UEeBrHH.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TagsInputRoot.md","filePath":"meta/TagsInputRoot.md","lastUpdated":1741142901000}'),p={name:"meta/TagsInputRoot.md"};function l(s,u,c,m,h,f){const a=t("PropsTable"),n=t("EmitsTable"),o=t("SlotsTable");return r(),i("div",null,[e(a,{data:[{name:"addOnBlur",description:`<p>When <code>true</code> allow adding tags blur input</p>
`,type:"boolean",required:!1},{name:"addOnPaste",description:`<p>When <code>true</code>, allow adding tags on paste. Work in conjunction with delimiter prop.</p>
`,type:"boolean",required:!1},{name:"addOnTab",description:`<p>When <code>true</code> allow adding tags on tab keydown</p>
`,type:"boolean",required:!1},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"convertValue",description:`<p>Convert the input value to the desired type. Mandatory when using objects as values and using <code>TagsInputInput</code></p>
`,type:"((value: string) => AcceptableInputValue)",required:!1},{name:"defaultValue",description:`<p>The value of the tags that should be added. Use when you do not need to control the state of the tags input</p>
`,type:"AcceptableInputValue[]",required:!1,default:"[]"},{name:"delimiter",description:`<p>The character or regular expression to trigger the addition of a new tag. Also used to split tags for <code>@paste</code> event</p>
`,type:"string | RegExp",required:!1,default:"','"},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the tags input.</p>
`,type:"boolean",required:!1},{name:"displayValue",description:`<p>Display the value of the tag. Useful when you want to apply modifications to the value like adding a suffix or when using object as values</p>
`,type:"((value: AcceptableInputValue) => string)",required:!1,default:"value.toString()"},{name:"duplicate",description:`<p>When <code>true</code>, allow duplicated tags.</p>
`,type:"boolean",required:!1},{name:"id",description:"",type:"string",required:!1},{name:"max",description:`<p>Maximum number of tags.</p>
`,type:"number",required:!1,default:"0"},{name:"modelValue",description:`<p>The controlled value of the tags input. Can be bind as <code>v-model</code>.</p>
`,type:"AcceptableInputValue[] | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1}]}),e(n,{data:[{name:"addTag",description:`<p>Event handler called when tag is added</p>
`,type:"[payload: AcceptableInputValue]"},{name:"invalid",description:`<p>Event handler called when the value is invalid</p>
`,type:"[payload: AcceptableInputValue]"},{name:"removeTag",description:`<p>Event handler called when tag is removed</p>
`,type:"[payload: AcceptableInputValue]"},{name:"update:modelValue",description:`<p>Event handler called when the value changes</p>
`,type:"[payload: AcceptableInputValue[]]"}]}),e(o,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"string | Record<string, any>"}]})])}const y=d(p,[["render",l]]);export{b as __pageData,y as default};
