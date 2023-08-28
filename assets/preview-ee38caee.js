import{s as f,n as r,a as m,j as d,X as V,t as P}from"./theme-d805869d.js";import{p as y,c as C,a as z,b,r as v}from"./polished.esm-879e4317.js";import{g}from"./get-436ad99c.js";import{b as A,a as S,p as s,w as h,g as D,c as k,d as B,e as E,i as M,r as w,f as x,h as p}from"./selectors-e1398bbf.js";import{r as R}from"./animation-eb2cd579.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const i=f.svg`
    fill: ${o=>o.fillColor};
    height: ${o=>o.height};
`,H=f.div`
    border-radius: 3em;
    display: inline-block;
    overflow: hidden;
    position: relative;
    transition: all 200ms ease-out;
    vertical-align: middle;
    height: ${o=>`${o.size}px`};
    width: ${o=>`${o.size}px`};
    animation: ${R} 0.85s linear infinite;
    border-width: 2px;
    border-style: solid;
    border-color: ${o=>{const{red:e,green:t,blue:n}=y(g(o.theme.color,o.color));return`rgba(${e},${t},${n}, 0.1)`}};
    border-top-color: ${o=>{const{red:e,green:t,blue:n}=y(g(o.theme.color,o.color));return`rgba(${e},${t},${n}, 1)`}};
    margin: 0 auto;
`,$=()=>r`
    ${H} {
        border-color: ${v(255,255,255,.1)};
        border-top-color: ${v(255,255,255,1)};
    }
`,U=o=>r`
    align-items: center;
    align-content: center;
    display: inline-flex;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    text-transform: none;
    outline: none;
    box-sizing: border-box;
    user-select: none;
    text-decoration: none;
    overflow: visible;
    transition:
        color 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    border-width: 1px;
    border-style: solid;
    border-radius: ${A(o)};
`,G=o=>{const e=g(S(o.theme),o.size),{paddingX:t,fontSize:n,height:a}=e;return r`
        font-size: ${n};
        padding: 0 ${t};
        line-height: ${a};
        height: ${a};
    `},T=o=>{const e=o.iconAfter,t=o.text;let n=.285;o.size==="medium"&&(n=.285),o.size==="large"&&(n=.5),o.size==="xlarge"&&(n=.7);let a="right";e&&(a="left");let l="left";return e&&(l="right"),r`
        ${i} {
            display: inline-flex;
            ${t&&`margin-${a}: ${n}rem !important;
              margin-${l}: -2px;`}
        }
    `},c=(o,e)=>o??e,X=o=>{const e=o.disabled||o.isLoading?s(o.theme):C(.1,z(.2,s(o.theme))),t=b(.3,s(o.theme)),n=h(o.theme);return r`
        color: ${n};
        border-color: ${s(o.theme)};
        background-color: ${s(o.theme)};
        ${i} {
            fill: ${c(o.iconColor,n)};
        }
        ${$()}
        &:hover {
            color: ${n};
            border-color: ${e};
            background-color: ${e};
            ${i} {
                fill: ${c(o.iconColor,n)};
            }
        }
        &:focus {
            box-shadow: 0px 0px 0px 2px ${t};
        }
    `},O=o=>{const e=D(o.theme),t=o.disabled||o.isLoading?e:k(o.theme),n=B(o.theme),a=o.disabled||o.isLoading?n:k(o.theme),l=E(o.theme),u=o.disabled||o.isLoading?l:h(o.theme),j=M(o.theme),F=b(.3,e);return r`
        color: ${l};
        border-color: ${e};
        background-color: ${n};
        ${i} {
            fill: ${c(o.iconColor,j)};
        }
        &:hover {
            color: ${u};
            border-color: ${t};
            background-color: ${a};
            ${i} {
                fill: ${u};
            }
            ${$()}
        }
        &:focus {
            box-shadow: 0px 0px 0px 2px ${F};
        }
    `},q=o=>{const e=s(o.theme),t=s(o.theme),n=o.disabled||o.isLoading?t:h(o.theme),a=B(o.theme),l=o.disabled||o.isLoading?a:e,u=b(.3,e);return r`
        color: ${t};
        border-color: ${e};
        background-color: ${a};
        ${i} {
            fill: ${c(o.iconColor,t)};
        }
        &:hover {
            color: ${n};
            border-color: ${e};
            background-color: ${l};
            ${i} {
                fill: ${n};
            }
            ${$()}
        }
        &:focus {
            box-shadow: 0px 0px 0px 2px ${u};
        }
    `},N=o=>{const e=h(o.theme),t=w(o.theme),n=t,a=o.disabled||o.isLoading?t:C(.1,z(.2,w(o.theme))),l=b(.3,a);return r`
        color: ${e};
        border-color: ${n};
        background-color: ${t};
        ${$()}
        ${i} {
            fill: ${c(o.iconColor,e)};
        }
        &:hover {
            color: ${e};
            border-color: ${a};
            background-color: ${a};
        }
        &:focus {
            box-shadow: 0px 0px 0px 2px ${l};
        }
    `},W=o=>{const e=s(o.theme),t=o.disabled||o.isLoading?"none":"underline";return r`
        color: ${e};
        border-color: transparent;
        background-color: transparent;
        ${i} {
            fill: ${c(o.iconColor,e)};
        }
        &:hover {
            color: ${e};
            border-color: transparent;
            background-color: transparent;
            text-decoration: ${t};
        }
    `},Y=o=>{const e=x(o.theme),t=p(o.theme);return r`
        color: ${e};
        border-color: transparent;
        background-color: transparent;
        ${i} {
            fill: ${c(o.iconColor,e)};
        }
        &:hover {
            ${i} {
                fill: ${t};
            }
            color: ${t};
            border-color: transparent;
            background-color: transparent;
            text-decoration: underline;
        }
    `},Z=o=>{const e=x(o.theme),t=p(o.theme),n=b(.95,t);return r`
        color: ${e};
        border-color: transparent;
        background-color: transparent;
        ${i} {
            fill: ${c(o.iconColor,e)};
        }
        &:focus,
        &:hover {
            ${i} {
                fill: ${t};
            }
            color: ${t};
            border-color: transparent;
            background-color: ${n};
            text-decoration: underline;
        }
    `},J=o=>{const e=x(o.theme),t=p(o.theme);return r`
        color: ${e};
        border-color: transparent;
        background-color: transparent;
        ${i} {
            fill: ${c(o.iconColor,e)};
        }
        &:hover {
            ${i} {
                fill: ${t};
            }
            color: ${t};
            border-color: ${e};
            background-color: transparent;
            text-decoration: underline;
        }
    `},K=()=>r`
        display: block;
        width: 100%;
    `,Q=()=>r`
        cursor: not-allowed;
        opacity: 0.65;
    `,_=o=>r`
        cursor: wait;
        ${H} {
            ${o.text&&"margin-right: .25rem"};
        }
    `,oo=o=>{const e=g(S(o),o.size),{height:t}=e;return r`
        width: ${t};
        border-radius: 50%;
        padding: 0;
        ${i} {
            margin: 0 auto;
        }
    `},eo=f.button`
    ${o=>U(o.theme)};
    ${o=>o.size&&G}
    ${T};
    ${o=>o.variant==="primary"&&X};
    ${o=>o.variant==="secondary"&&O};
    ${o=>o.variant==="outline"&&q};
    ${o=>o.variant==="destructive"&&N};
    ${o=>o.variant==="link"&&W};
    ${o=>o.variant==="icon"&&Y};
    ${o=>o.variant==="icon-secondary"&&Z};
    ${o=>o.variant==="icon-outline"&&J};
    ${o=>o.isCircle&&oo};
    ${o=>o.disabled&&Q};
    ${o=>o.isLoading&&_};
    ${o=>o.isExpanded&&K};
`,L=r`
    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }
    *,
    *::before,
    *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    @-ms-viewport {
        width: device-width;
    }
    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
        display: block;
    }
    [tabindex='-1']:focus {
        outline: none !important;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: 500;
    }
    p {
        margin-top: 0;
        margin-bottom: 1em;
    }
    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;

        border-bottom: 0;
        cursor: help;
    }
    address {
        margin-bottom: 1em;
        font-style: normal;
        line-height: inherit;
    }
    input[type='text'],
    input[type='password'],
    input[type='number'],
    textarea {
        -webkit-appearance: none;
    }
    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1em;
    }
    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }
    dt {
        font-weight: 500;
    }
    dd {
        margin-bottom: 0.5em;
        margin-left: 0;
    }
    blockquote {
        margin: 0 0 1em;
    }
    dfn {
        font-style: italic;
    }
    b,
    strong {
        font-weight: bolder;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    a {
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
    }
    a:active,
    a:hover {
        text-decoration: none;
        outline: 0;
    }
    a[disabled] {
        cursor: not-allowed;
        pointer-events: none;
    }
    pre,
    code,
    kbd,
    samp {
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    }
    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
    }
    figure {
        margin: 0 0 1rem;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    a,
    area,
    button,
    [role='button'],
    input:not([type='range']),
    label,
    select,
    summary,
    textarea {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
    table {
        border-collapse: collapse;
    }
    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.3rem;
        text-align: left;
        caption-side: bottom;
    }
    th {
        text-align: inherit;
    }
    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        outline: none;
    }
    button,
    input {
        overflow: visible;
    }
    button,
    select {
        text-transform: none;
    }
    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }
    input[type='radio'],
    input[type='checkbox'] {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
    }
    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
        -webkit-appearance: listbox;
    }
    textarea {
        overflow: auto;
        resize: vertical;
    }
    fieldset {
        min-width: 0;
        margin: 0;
        padding: 0;
        border: 0;
    }
    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        margin-bottom: 0.5rem;
        padding: 0;
        color: inherit;
        font-size: 1.5em;
        line-height: inherit;
        white-space: normal;
    }
    progress {
        vertical-align: baseline;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }
    [type='search'] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }
    output {
        display: inline-block;
    }
    summary {
        display: list-item;
    }
    template {
        display: none;
    }
    [hidden] {
        display: none !important;
    }
    mark {
        padding: 0.2em;
    }
`,to=r`
    ${eo} {
        margin-right: 5px;
    }
    .css-1tb5rpz,
    .css-h1ypda {
        overflow: visible !important;
    }
`,I=r`
    html {
        font-size: 14px;
        font-family: sans-serif;
        line-height: 1.15;
    }
    button,
    html [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-variant: tabular-nums;
        line-height: 1.5;
        font-feature-settings: 'tnum';
    }
`;m`
  ${L};
`;m`
  ${I};
`;const no=m`
  ${I};
  ${L};
`,ro=m`
  ${to};
`,go={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[o=>d.jsxs(d.Fragment,{children:[d.jsx(no,{}),d.jsx(ro,{}),d.jsx(V,{theme:P,children:d.jsx(o,{})})]})]};export{go as default};
//# sourceMappingURL=preview-ee38caee.js.map
