"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8276],{68276:(U,P,_)=>{_.r(P),_.d(P,{LoginEE:()=>I});var E=_(74081),O=_(84366),a=_(93415),n=_(10701),o=_(32370),l=_(87006),i=_(61020),r=_(40464),d=_(72450),D=_(93446),L=_(47796),M=_(15816),h=_(97442),s=_(13576),C=_(87830),B=_(47184),t=_(364),g=_(27279),x=_(59461),j=_(71563),f=_(49204),c=_(47853),y=_(74919),S=_(29206),$=_(98934),Z=_(43433),N=_(75719),F=_(8175),Q=_(6078),Y=_(51943),z=_(55783),G=_(92249),H=_(41942),J=_(22919),V=_(53915),X=_(75041),u=_(30200),e=_(91379),p=_(33299),k=_(33409),w=_(63645),b=_(7988),q=_(7055),__=_(26757),E_=_(58311),s_=_(29510),t_=_(16946),a_=_(10124),n_=_(69530),P_=_(86961),O_=_(51527),d_=_(19764),D_=_(42982),M_=_(26126);const R=(0,d.ZP)(O.i)`
  flex: 1;
`,I=v=>{const{formatMessage:T}=(0,i.Z)(),{get:W}=(0,l.kY)(),{isLoading:K,data:A=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:m}=await W("/admin/providers");return m},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!K&&A.length===0?(0,E.jsx)(D.L,{...v}):(0,E.jsx)(D.L,{...v,children:(0,E.jsx)(a.x,{paddingTop:7,children:(0,E.jsxs)(n.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.k,{children:[(0,E.jsx)(R,{}),(0,E.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.Z,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(R,{})]}),(0,E.jsx)(L.S,{providers:A,displayAllProviders:!1})]})})})}},47796:(U,P,_)=>{_.d(P,{S:()=>D});var E=_(74081),O=_(23298),a=_(74577),n=_(2981),o=_(10701),l=_(32370),i=_(61020),r=_(47533),d=_(72450);const D=({providers:s,displayAllProviders:C})=>{const{formatMessage:B}=(0,i.Z)();return C?(0,E.jsx)(O.r,{gap:4,children:s.map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid))}):s.length>2&&!C?(0,E.jsxs)(O.r,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid)),(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(n.u,{label:B({id:"global.see-more"}),children:(0,E.jsx)(h,{as:r.rU,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(L,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(M,{provider:t},t.uid))})},L=(0,d.ZP)(o.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(n.u,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.Z,{children:s.displayName})})}),h=d.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
