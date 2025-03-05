import{_ as d,c as l,e,au as t,o as r}from"./chunks/framework.6UEeBrHH.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/EditableRoot.md","filePath":"meta/EditableRoot.md","lastUpdated":1741142901000}'),s={name:"meta/EditableRoot.md"};function p(c,h,u,m,f,b){const i=t("PropsTable"),a=t("EmitsTable"),n=t("SlotsTable"),o=t("MethodsTable");return r(),l("div",null,[e(i,{data:[{name:"activationMode",description:`<p>The activation event of the editable field</p>
`,type:"'dblclick' | 'focus' | 'none'",required:!1,default:"'focus'"},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"autoResize",description:`<p>Whether the editable field should auto resize</p>
`,type:"boolean",required:!1,default:"false"},{name:"defaultValue",description:`<p>The default value of the editable field</p>
`,type:"string",required:!1},{name:"dir",description:`<p>The reading direction of the calendar when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>Whether the editable field is disabled</p>
`,type:"boolean",required:!1,default:"false"},{name:"id",description:`<p>The id of the field</p>
`,type:"string",required:!1},{name:"maxLength",description:`<p>The maximum number of characters allowed</p>
`,type:"number",required:!1},{name:"modelValue",description:`<p>The value of the editable field</p>
`,type:"string | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"placeholder",description:`<p>The placeholder for the editable field</p>
`,type:"string | { edit: string; preview: string; }",required:!1,default:"'Enter text...'"},{name:"readonly",description:`<p>Whether the editable field is read-only</p>
`,type:"boolean",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1,default:"false"},{name:"selectOnFocus",description:`<p>Whether to select the text in the input when it is focused.</p>
`,type:"boolean",required:!1,default:"false"},{name:"startWithEditMode",description:`<p>Whether to start with the edit mode active</p>
`,type:"boolean",required:!1},{name:"submitMode",description:`<p>The submit event of the editable field</p>
`,type:"'blur' | 'none' | 'enter' | 'both'",required:!1,default:"'blur'"}]}),e(a,{data:[{name:"submit",description:`<p>Event handler called when a value is submitted</p>
`,type:"[value: string | null]"},{name:"update:modelValue",description:`<p>Event handler called whenever the model value changes</p>
`,type:"[value: string]"},{name:"update:state",description:`<p>Event handler called when the editable field changes state</p>
`,type:"[state: 'cancel' | 'submit' | 'edit']"}]}),e(n,{data:[{name:"isEditing",description:`<p>Whether the editable field is in edit mode</p>
`,type:"boolean"},{name:"modelValue",description:`<p>The value of the editable field</p>
`,type:"string | null | undefined"},{name:"isEmpty",description:`<p>Whether the editable field is empty</p>
`,type:"boolean"},{name:"submit",description:`<p>Function to submit the value of the editable</p>
`,type:""},{name:"cancel",description:`<p>Function to cancel the value of the editable</p>
`,type:""},{name:"edit",description:`<p>Function to set the editable in edit mode</p>
`,type:""}]}),e(o,{data:[{name:"submit",description:`<p>Function to submit the value of the editable</p>
`,type:"() => void"},{name:"cancel",description:`<p>Function to cancel the value of the editable</p>
`,type:"() => void"},{name:"edit",description:`<p>Function to set the editable in edit mode</p>
`,type:"() => void"}]})])}const g=d(s,[["render",p]]);export{v as __pageData,g as default};
