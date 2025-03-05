import{_ as i,c as d,e,au as t,o as s}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/DateRangePickerRoot.md","filePath":"meta/DateRangePickerRoot.md","lastUpdated":1741142384000}'),l={name:"meta/DateRangePickerRoot.md"};function p(h,c,u,m,f,y){const a=t("PropsTable"),n=t("EmitsTable"),o=t("SlotsTable"),r=t("MethodsTable");return s(),d("div",null,[e(a,{data:[{name:"allowNonContiguousRanges",description:`<p>When combined with <code>isDateUnavailable</code>, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.</p>
`,type:"boolean",required:!1,default:"false"},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultOpen",description:`<p>The open state of the popover when it is initially rendered. Use when you do not need to control its open state.</p>
`,type:"boolean",required:!1,default:"false"},{name:"defaultPlaceholder",description:`<p>The default placeholder date</p>
`,type:"DateValue",required:!1},{name:"defaultValue",description:`<p>The default value for the calendar</p>
`,type:"DateRange",required:!1,default:"{ start: undefined, end: undefined }"},{name:"dir",description:`<p>The reading direction of the date field when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>Whether or not the date field is disabled</p>
`,type:"boolean",required:!1,default:"false"},{name:"fixedWeeks",description:`<p>Whether or not to always display 6 weeks in the calendar</p>
`,type:"boolean",required:!1,default:"false"},{name:"granularity",description:`<p>The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity</p>
`,type:"'day' | 'hour' | 'minute' | 'second'",required:!1},{name:"hideTimeZone",description:`<p>Whether or not to hide the time zone segment of the field</p>
`,type:"boolean",required:!1},{name:"hourCycle",description:`<p>The hour cycle used for formatting times. Defaults to the local preference</p>
`,type:"12 | 24",required:!1},{name:"id",description:`<p>Id of the element</p>
`,type:"string",required:!1},{name:"isDateDisabled",description:`<p>A function that returns whether or not a date is disabled</p>
`,type:"Matcher",required:!1},{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher",required:!1},{name:"locale",description:`<p>The locale to use for formatting dates</p>
`,type:"string",required:!1,default:"'en'"},{name:"maxValue",description:`<p>The maximum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"minValue",description:`<p>The minimum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"modal",description:`<p>The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.</p>
`,type:"boolean",required:!1,default:"false"},{name:"modelValue",description:`<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>
`,type:"DateRange | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"numberOfMonths",description:`<p>The number of months to display at once</p>
`,type:"number",required:!1,default:"1"},{name:"open",description:`<p>The controlled open state of the popover.</p>
`,type:"boolean",required:!1},{name:"pagedNavigation",description:`<p>This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month</p>
`,type:"boolean",required:!1,default:"false"},{name:"placeholder",description:`<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>
`,type:"DateValue",required:!1},{name:"preventDeselect",description:`<p>Whether or not to prevent the user from deselecting a date without selecting another date first</p>
`,type:"boolean",required:!1,default:"false"},{name:"readonly",description:`<p>Whether or not the date field is readonly</p>
`,type:"boolean",required:!1,default:"false"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"weekdayFormat",description:`<p>The format to use for the weekday strings provided via the weekdays slot prop</p>
`,type:"'long' | 'short' | 'narrow'",required:!1,default:"'narrow'"},{name:"weekStartsOn",description:`<p>The day of the week to start the calendar on</p>
`,type:"0 | 1 | 2 | 3 | 4 | 5 | 6",required:!1,default:"0"}]}),e(n,{data:[{name:"update:modelValue",description:`<p>Event handler called whenever the model value changes</p>
`,type:"[date: DateRange]"},{name:"update:open",description:`<p>Event handler called when the open state of the submenu changes.</p>
`,type:"[value: boolean]"},{name:"update:placeholder",description:`<p>Event handler called whenever the placeholder value changes</p>
`,type:"[date: DateValue]"},{name:"update:startValue",description:`<p>Event handler called whenever the start value changes</p>
`,type:"[date: DateValue]"}]}),e(o,{data:[{name:"modelValue",description:"",type:"DateRange"},{name:"open",description:"",type:"boolean"}]}),e(r,{data:[{name:"isDateDisabled",description:`<p>A function that returns whether or not a date is disabled</p>
`,type:"Matcher"},{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher"}]})])}const v=i(l,[["render",p]]);export{g as __pageData,v as default};
