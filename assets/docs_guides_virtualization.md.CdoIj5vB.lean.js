import{_ as u,c as m,aM as s,e as t,p as i,b as n,a3 as o,au as l,o as h}from"./chunks/framework.BvEsjwOO.js";const pe=JSON.parse('{"title":"Virtualization","description":"Learn how to efficiently render large datasets with Reka UI, powered by `@tanstack/virtual`.","frontmatter":{"title":"Virtualization","description":"Learn how to efficiently render large datasets with Reka UI, powered by `@tanstack/virtual`.","sidebar":true},"headers":[{"level":2,"title":"Benefits of Using Virtualization","slug":"benefits-of-using-virtualization","link":"#benefits-of-using-virtualization","children":[]},{"level":2,"title":"Customization Options","slug":"customization-options","link":"#customization-options","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Common issue","slug":"common-issue","link":"#common-issue","children":[{"level":3,"title":"Virtualization is not working","slug":"virtualization-is-not-working","link":"#virtualization-is-not-working","children":[]}]}],"relativePath":"docs/guides/virtualization.md","filePath":"docs/guides/virtualization.md","lastUpdated":1741141490000}'),b={name:"docs/guides/virtualization.md"},f={name:"vue",class:"language-vue"},y={class:"shiki github-dark vp-code",tabindex:"0"},g={class:"line"},v={style:{color:"#85E89D"}},w={class:"line"},E={style:{color:"#85E89D"}},C={class:"line"},q={style:{color:"#85E89D"}},x={class:"line"},T={style:{color:"#85E89D"}},k={class:"line"},V={style:{color:"#85E89D"}},A={class:"line"},S={style:{color:"#85E89D"}},D={class:"line"},z={style:{color:"#85E89D"}},P={class:"line"},O={style:{color:"#85E89D"}},F={class:"line"},W={style:{color:"#85E89D"}},M={class:"line"},L={style:{color:"#85E89D"}},I={name:"vue",class:"language-vue"},R={class:"shiki github-dark vp-code",tabindex:"0"},B={class:"line"},U={style:{color:"#85E89D"}},_={class:"line"},j={style:{color:"#85E89D"}},H={class:"line highlighted"},N={style:{color:"#85E89D"}},K={class:"line"},$={style:{color:"#85E89D"}},J={class:"line"},G={style:{color:"#85E89D"}},Q={class:"line"},X={style:{color:"#85E89D"}},Y={class:"line"},Z={style:{color:"#85E89D"}},ee={class:"line"},ne={style:{color:"#85E89D"}};function te(oe,e,ie,ae,re,se){const p=l("Description"),d=l("Callout"),c=l("Highlights"),a=l("link-hover-card-content"),r=l("link-hover-card");return h(),m("div",null,[e[100]||(e[100]=s("",1)),t(p,null,{default:i(()=>e[0]||(e[0]=[n("p",null,[o("Learn how to efficiently render large datasets with Reka UI, powered by "),n("code",null,"@tanstack/virtual"),o(".")],-1)])),_:1}),t(d,{type:"info",title:"What is Virtualization?"},{default:i(()=>e[1]||(e[1]=[n("p",null,"Virtualization is a technique used to efficiently render large lists or tree structures by only rendering the items currently visible in the viewport. This approach significantly improves performance and reduces memory usage, especially when dealing with thousands of items.",-1)])),_:1}),e[101]||(e[101]=s("",1)),t(c,{features:["Improved Performance: Render thousands of items without lag","Reduced Memory Usage: Only mount DOM nodes for visible items","Better User Experience: Fast initial load times and responsive interactions"]}),e[102]||(e[102]=s("",7)),n("div",f,[e[52]||(e[52]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[53]||(e[53]=n("span",{class:"lang"},"vue",-1)),n("pre",y,[n("code",null,[e[34]||(e[34]=s("",18)),n("span",g,[e[3]||(e[3]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",v,[t(r,{name:"ComboboxRoot"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:i(()=>[e[2]||(e[2]=o("ComboboxRoot"))]),_:1})]),e[4]||(e[4]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[35]||(e[35]=o(`
`)),e[36]||(e[36]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    …")],-1)),e[37]||(e[37]=o(`
`)),n("span",w,[e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",E,[t(r,{name:"ComboboxContent"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use, &lt;br&gt;\\n<code>inline</code> is the default and you can control the position using CSS. &lt;br&gt;\\n<code>popper</code> positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"inline\\" | \\"popper\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:i(()=>[e[5]||(e[5]=o("ComboboxContent"))]),_:1})]),e[7]||(e[7]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[38]||(e[38]=o(`
`)),e[39]||(e[39]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"      <!-- Make sure to set a height for Virtualizer's parent element -->")],-1)),e[40]||(e[40]=o(`
`)),n("span",C,[e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",q,[t(r,{name:"ComboboxViewport"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:i(()=>[e[8]||(e[8]=o("ComboboxViewport"))]),_:1})]),e[10]||(e[10]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[11]||(e[11]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[12]||(e[12]=n("span",{style:{color:"#9ECBFF"}},'"max-h-80 overflow-y-auto"',-1)),e[13]||(e[13]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[41]||(e[41]=o(`
`)),n("span",x,[e[15]||(e[15]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",T,[t(r,{name:"ComboboxVirtualizer"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "estimateSize",
    "description": "<p>Estimated size (in px) of each item</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "options",
    "description": "<p>List of items</p>\\n",
    "type": "AcceptableValue[]",
    "required": true
  },
  {
    "name": "overscan",
    "description": "<p>Number of items rendered outside the visible area</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "textContent",
    "description": "<p>Text content for each item to achieve type-ahead feature</p>\\n",
    "type": "((option: AcceptableValue) => string)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "option",
    "description": "",
    "type": "null | string | number | Record<string, any>"
  },
  {
    "name": "virtualizer",
    "description": "",
    "type": "Virtualizer<HTMLElement, Element>"
  },
  {
    "name": "virtualItem",
    "description": "",
    "type": "VirtualItem"
  }
]`})]),default:i(()=>[e[14]||(e[14]=o("ComboboxVirtualizer"))]),_:1})])]),e[42]||(e[42]=s("",11)),n("span",k,[e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},"          <",-1)),n("span",V,[t(r,{name:"ComboboxItem"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>A string representation of the item contents.</p>\\n<p>If the children are not plain text, then the <code>textValue</code> prop must also be set to a plain text representation, which will be used for autocomplete in the ComboBox.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:i(()=>[e[16]||(e[16]=o("ComboboxItem"))]),_:1})]),e[18]||(e[18]=s("",7))]),e[43]||(e[43]=o(`
`)),e[44]||(e[44]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            {{ option.label }}")],-1)),e[45]||(e[45]=o(`
`)),n("span",A,[e[20]||(e[20]=n("span",{style:{color:"#E1E4E8"}},"          </",-1)),n("span",S,[t(r,{name:"ComboboxItem"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>A string representation of the item contents.</p>\\n<p>If the children are not plain text, then the <code>textValue</code> prop must also be set to a plain text representation, which will be used for autocomplete in the ComboBox.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:i(()=>[e[19]||(e[19]=o("ComboboxItem"))]),_:1})]),e[21]||(e[21]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[46]||(e[46]=o(`
`)),n("span",D,[e[23]||(e[23]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",z,[t(r,{name:"ComboboxVirtualizer"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "estimateSize",
    "description": "<p>Estimated size (in px) of each item</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "options",
    "description": "<p>List of items</p>\\n",
    "type": "AcceptableValue[]",
    "required": true
  },
  {
    "name": "overscan",
    "description": "<p>Number of items rendered outside the visible area</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "textContent",
    "description": "<p>Text content for each item to achieve type-ahead feature</p>\\n",
    "type": "((option: AcceptableValue) => string)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "option",
    "description": "",
    "type": "null | string | number | Record<string, any>"
  },
  {
    "name": "virtualizer",
    "description": "",
    "type": "Virtualizer<HTMLElement, Element>"
  },
  {
    "name": "virtualItem",
    "description": "",
    "type": "VirtualItem"
  }
]`})]),default:i(()=>[e[22]||(e[22]=o("ComboboxVirtualizer"))]),_:1})]),e[24]||(e[24]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[47]||(e[47]=o(`
`)),n("span",P,[e[26]||(e[26]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",O,[t(r,{name:"ComboboxViewport"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:i(()=>[e[25]||(e[25]=o("ComboboxViewport"))]),_:1})]),e[27]||(e[27]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[48]||(e[48]=o(`
`)),n("span",F,[e[29]||(e[29]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",W,[t(r,{name:"ComboboxContent"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use, &lt;br&gt;\\n<code>inline</code> is the default and you can control the position using CSS. &lt;br&gt;\\n<code>popper</code> positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"inline\\" | \\"popper\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:i(()=>[e[28]||(e[28]=o("ComboboxContent"))]),_:1})]),e[30]||(e[30]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[49]||(e[49]=o(`
`)),n("span",M,[e[32]||(e[32]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",L,[t(r,{name:"ComboboxRoot"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:i(()=>[e[31]||(e[31]=o("ComboboxRoot"))]),_:1})]),e[33]||(e[33]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[50]||(e[50]=o(`
`)),e[51]||(e[51]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),e[103]||(e[103]=s("",3)),n("div",I,[e[98]||(e[98]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[99]||(e[99]=n("span",{class:"lang"},"vue",-1)),n("pre",R,[n("code",null,[e[81]||(e[81]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[82]||(e[82]=o(`
`)),n("span",B,[e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},"  <",-1)),n("span",U,[t(r,{name:"ComboboxRoot"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:i(()=>[e[54]||(e[54]=o("ComboboxRoot"))]),_:1})]),e[56]||(e[56]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[83]||(e[83]=o(`
`)),e[84]||(e[84]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    …")],-1)),e[85]||(e[85]=o(`
`)),n("span",_,[e[58]||(e[58]=n("span",{style:{color:"#E1E4E8"}},"    <",-1)),n("span",j,[t(r,{name:"ComboboxContent"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use, &lt;br&gt;\\n<code>inline</code> is the default and you can control the position using CSS. &lt;br&gt;\\n<code>popper</code> positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"inline\\" | \\"popper\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:i(()=>[e[57]||(e[57]=o("ComboboxContent"))]),_:1})]),e[59]||(e[59]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[86]||(e[86]=o(`
`)),e[87]||(e[87]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"      <!-- Height must be defined -->")],-1)),e[88]||(e[88]=o(`
`)),n("span",H,[e[61]||(e[61]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",N,[t(r,{name:"ComboboxViewport"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:i(()=>[e[60]||(e[60]=o("ComboboxViewport"))]),_:1})]),e[62]||(e[62]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[63]||(e[63]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[64]||(e[64]=n("span",{style:{color:"#9ECBFF"}},'"max-h-80 overflow-y-auto"',-1)),e[65]||(e[65]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[89]||(e[89]=o(`
`)),n("span",K,[e[67]||(e[67]=n("span",{style:{color:"#E1E4E8"}},"        <",-1)),n("span",$,[t(r,{name:"ComboboxVirtualizer"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "estimateSize",
    "description": "<p>Estimated size (in px) of each item</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "options",
    "description": "<p>List of items</p>\\n",
    "type": "AcceptableValue[]",
    "required": true
  },
  {
    "name": "overscan",
    "description": "<p>Number of items rendered outside the visible area</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "textContent",
    "description": "<p>Text content for each item to achieve type-ahead feature</p>\\n",
    "type": "((option: AcceptableValue) => string)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "option",
    "description": "",
    "type": "null | string | number | Record<string, any>"
  },
  {
    "name": "virtualizer",
    "description": "",
    "type": "Virtualizer<HTMLElement, Element>"
  },
  {
    "name": "virtualItem",
    "description": "",
    "type": "VirtualItem"
  }
]`})]),default:i(()=>[e[66]||(e[66]=o("ComboboxVirtualizer"))]),_:1})]),e[68]||(e[68]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[90]||(e[90]=o(`
`)),e[91]||(e[91]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          …")],-1)),e[92]||(e[92]=o(`
`)),n("span",J,[e[70]||(e[70]=n("span",{style:{color:"#E1E4E8"}},"        </",-1)),n("span",G,[t(r,{name:"ComboboxVirtualizer"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "estimateSize",
    "description": "<p>Estimated size (in px) of each item</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "options",
    "description": "<p>List of items</p>\\n",
    "type": "AcceptableValue[]",
    "required": true
  },
  {
    "name": "overscan",
    "description": "<p>Number of items rendered outside the visible area</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "textContent",
    "description": "<p>Text content for each item to achieve type-ahead feature</p>\\n",
    "type": "((option: AcceptableValue) => string)",
    "required": false
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "option",
    "description": "",
    "type": "null | string | number | Record<string, any>"
  },
  {
    "name": "virtualizer",
    "description": "",
    "type": "Virtualizer<HTMLElement, Element>"
  },
  {
    "name": "virtualItem",
    "description": "",
    "type": "VirtualItem"
  }
]`})]),default:i(()=>[e[69]||(e[69]=o("ComboboxVirtualizer"))]),_:1})]),e[71]||(e[71]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[93]||(e[93]=o(`
`)),n("span",Q,[e[73]||(e[73]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",X,[t(r,{name:"ComboboxViewport"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:i(()=>[e[72]||(e[72]=o("ComboboxViewport"))]),_:1})]),e[74]||(e[74]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[94]||(e[94]=o(`
`)),n("span",Y,[e[76]||(e[76]=n("span",{style:{color:"#E1E4E8"}},"    </",-1)),n("span",Z,[t(r,{name:"ComboboxContent"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableOutsidePointerEvents",
    "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use, &lt;br&gt;\\n<code>inline</code> is the default and you can control the position using CSS. &lt;br&gt;\\n<code>popper</code> positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"inline\\" | \\"popper\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "focusOutside",
    "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: FocusOutsideEvent]"
  },
  {
    "name": "interactOutside",
    "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:i(()=>[e[75]||(e[75]=o("ComboboxContent"))]),_:1})]),e[77]||(e[77]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[95]||(e[95]=o(`
`)),n("span",ee,[e[79]||(e[79]=n("span",{style:{color:"#E1E4E8"}},"  </",-1)),n("span",ne,[t(r,{name:"ComboboxRoot"},{content:i(({})=>[t(a,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the combobox when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the listbox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with listbox</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "highlightOnHover",
    "description": "<p>When <code>true</code>, hover over item will trigger highlight</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "ignoreFilter",
    "description": "<p>When <code>true</code>, disable the default filters</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "resetSearchTermOnBlur",
    "description": "<p>Whether to reset the searchTerm when the Combobox input blurred</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  },
  {
    "name": "resetSearchTermOnSelect",
    "description": "<p>Whether to reset the searchTerm when the Combobox value is selected</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "true"
  }
]`}),t(a,{title:"emits",data:`[
  {
    "name": "highlight",
    "description": "<p>Event handler when highlighted element changes.</p>\\n",
    "type": "[payload: { ref: HTMLElement; value: AcceptableValue; }]"
  },
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the combobox changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),t(a,{title:"slots",data:`[
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>Current active value</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]"
  }
]`})]),default:i(()=>[e[78]||(e[78]=o("ComboboxRoot"))]),_:1})]),e[80]||(e[80]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[96]||(e[96]=o(`
`)),e[97]||(e[97]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])])}const de=u(b,[["render",te]]);export{pe as __pageData,de as default};
