import{_ as i,c as d,e,au as t,o as l}from"./chunks/framework.6UEeBrHH.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/DateRangeFieldRoot.md","filePath":"meta/DateRangeFieldRoot.md","lastUpdated":1741142868000}'),s={name:"meta/DateRangeFieldRoot.md"};function p(c,m,h,u,f,g){const a=t("PropsTable"),n=t("EmitsTable"),o=t("SlotsTable"),r=t("MethodsTable");return l(),d("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultPlaceholder",description:`<p>The default placeholder date</p>
`,type:"DateValue",required:!1},{name:"defaultValue",description:`<p>The default value for the calendar</p>
`,type:"DateRange",required:!1},{name:"dir",description:`<p>The reading direction of the date field when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>Whether or not the date field is disabled</p>
`,type:"boolean",required:!1,default:"false"},{name:"granularity",description:`<p>The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity</p>
`,type:"'day' | 'hour' | 'minute' | 'second'",required:!1},{name:"hideTimeZone",description:`<p>Whether or not to hide the time zone segment of the field</p>
`,type:"boolean",required:!1},{name:"hourCycle",description:`<p>The hour cycle used for formatting times. Defaults to the local preference</p>
`,type:"12 | 24",required:!1},{name:"id",description:`<p>Id of the element</p>
`,type:"string",required:!1},{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher",required:!1},{name:"locale",description:`<p>The locale to use for formatting dates</p>
`,type:"string",required:!1},{name:"maxValue",description:`<p>The maximum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"minValue",description:`<p>The minimum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"modelValue",description:`<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>
`,type:"DateRange | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"placeholder",description:`<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>
`,type:"DateValue",required:!1},{name:"readonly",description:`<p>Whether or not the date field is readonly</p>
`,type:"boolean",required:!1,default:"false"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1}]}),e(n,{data:[{name:"update:modelValue",description:`<p>Event handler called whenever the model value changes</p>
`,type:"[DateRange]"},{name:"update:placeholder",description:`<p>Event handler called whenever the placeholder value changes</p>
`,type:"[date: DateValue]"}]}),e(o,{data:[{name:"modelValue",description:"",type:"DateRange | null"},{name:"segments",description:"",type:"{ start: { part: SegmentPart; value: string; }[]; end: { part: SegmentPart; value: string; }[]; }"}]}),e(r,{data:[{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher"},{name:"setFocusedElement",description:"",type:"(el: HTMLElement) => void"}]})])}const v=i(s,[["render",p]]);export{b as __pageData,v as default};
