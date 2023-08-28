import{s as c,H as h,t as p,j as s,X as y}from"./theme-d805869d.js";import{r as g}from"./index-76fb7be0.js";import{g as x}from"./animation-eb2cd579.js";import"./_commonjsHelpers-de833af9.js";const z=c.div`
    background: ${e=>e.theme.iconColor};
    display: inline-block;
    vertical-align: top;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
    border-radius: 3em;
    margin: 0 ${e=>e.size/2}px;
    animation: ${x} 1.5s ease-in-out infinite;
    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.3s;
    }
    &:nth-child(3) {
        animation-delay: 0.6s;
    }
    &:nth-child(4) {
        animation-delay: 0.9s;
    }
`,o=c.div`
    display: inline-block;
    height: ${e=>e.size}px;
`;o.displayName="StyledDots";const _=e=>{const{steps:m,size:i}=e,u=g.useContext(h)||p,r=[];for(let a=0;a<m;a+=1)r.push(s.jsx(z,{"data-testid":"dot",theme:u,size:i},a));return s.jsx(o,{"data-testid":"dots",size:i,children:r})};try{o.displayName="StyledDots",o.__docgenInfo={description:"",displayName:"StyledDots",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}}}catch{}const S={title:"Dots",component:_,tags:["autodocs"],argTypes:{size:{control:"number"},steps:{control:"number"}},decorators:[e=>s.jsx(y,{theme:{...p,iconColor:"#AAFFFF"},children:s.jsx(e,{})})]},t={args:{size:8,steps:3}};var n,d,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 8,
    steps: 3
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const $=["Primary"];export{t as Primary,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=Dots.stories-8d959fe7.js.map
