(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(o=!1)}o&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},s={app:0},n=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"133a":function(e,t,r){e.exports="./img/kubernetes.36fdbc6b.png"},"2b6d":function(e,t,r){},"32cb":function(e,t,r){e.exports="./img/arrow-down-circle.27fdf30c.svg"},"34a4":function(e,t,r){"use strict";r("460b")},"3de8":function(e,t,r){"use strict";r("8fe7")},"3e35":function(e,t,r){},"460b":function(e,t,r){},"4a20":function(e,t,r){"use strict";r("3e35")},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("main-nav",{on:{saveGraph:e.saveGraph}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col col-4-lg"},[e._m(0),r("resource-detail",{attrs:{resourceID:e.resourceID}})],1),r("div",{staticClass:"col col-8-lg"},[r("graph",{ref:"filegraph",attrs:{displayGraph:e.displayGraph},on:{getNode:e.selectResource}}),r("explorer",{on:{selectResource:e.selectResource}})],1)])],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",[r("legend",[e._v("Legend")]),r("b",[e._v("Instructions")]),r("hr"),r("p",[e._v(" Click or hover on node to isolate that node's connections. Click on the light purple background to unselect. ")]),r("p",[e._v(" All resources that the node depends on are represented by a solid line. All resources that depend on the node are represented by a dashed line. ")]),r("hr"),r("b",[e._v("Resource")]),r("hr"),r("div",{staticClass:"node create"},[e._v("Resource - Create")]),r("div",{staticClass:"node destroy"},[e._v("Resource - Destroy")]),r("div",{staticClass:"node replace"},[e._v("Resource - Replace")]),r("div",{staticClass:"node update"},[e._v("Resource - Update")]),r("div",{staticClass:"node no-op"},[e._v("Resource - No Operation")]),r("hr"),r("b",[e._v("Other items")]),r("hr"),r("div",{staticClass:"node variable"},[e._v("Variable")]),r("div",{staticClass:"node output"},[e._v("Output")]),r("div",{staticClass:"node data"},[e._v("Data")]),r("div",{staticClass:"node module"},[e._v("Module")]),r("div",{staticClass:"node locals"},[e._v("Local")]),r("hr")])}],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"nav"},[e._m(0),r("div",{staticClass:"nav-right"},[r("a",{staticClass:"button outline",on:{click:function(t){return e.saveGraph()}}},[e._v("Save Graph")])])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav-left"},[r("a",{staticClass:"title",attrs:{href:"https://github.com/im2nguyen/rover"}},[r("h2",[e._v("Rover - Terraform Visualizer")])])])}],c={name:"MainNav",data(){return{colorMode:"☀️",graph:!0}},methods:{switchMode(){const e=document.body.classList;e.contains("dark")?(this.colorMode="☀️",e.remove("dark")):(this.colorMode="🌙",e.add("dark")),localStorage.colorMode=this.colorMode},saveGraph(){this.$emit("saveGraph",!0)}},mounted(){}},l=c,u=(r("4a20"),r("2877")),d=Object(u["a"])(l,a,i,!1,null,"b2b0816c",null),h=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{attrs:{id:"resource-details"}},[r("legend",[e._v("Details")]),r("div",{staticClass:"resource-detail"},[e.resourceID?r("div",[r("dd",{staticClass:"key"},[e._v(e._s(e.primitiveType))]),e.resourceChange.action?r("span",{staticClass:"tag is-small resource-action"},[e._v(e._s(e.resourceChange.action))]):e._e(),r("dt",{staticClass:"value resource-id"},[e._v(" "+e._s(e.resource.id)+" "),r("button",{ref:"rid",staticClass:"copy-button",on:{click:function(t){return e.copyText(e.resource.id,"rid")}}},[e._v(" Copy ")])]),r("nav",{staticClass:"tabs is-full"},[r("a",{class:{active:"config"===e.curTab},on:{click:function(t){return e.selectTab("config")}}},[e._v("Config")]),r("a",{class:{active:"current"===e.curTab,disabled:e.hasNoState},on:{click:function(t){return e.selectTab("current")}}},[e._v("Current State")]),r("a",{class:{active:"proposed"===e.curTab,disabled:e.hasNoState},on:{click:function(t){return e.selectTab("proposed")}}},[e._v("Proposed State")])]),"config"===e.curTab?r("div",{staticClass:"tab-container"},["rover-for-each-child-resource-true"==e.resourceConfig.isChild?r("span",{staticClass:"is-child-resource"},[e._v("Please check parent resource")]):e._l(e.resourceConfig,(function(t,o){return r("div",{key:o},[r("dd",{staticClass:"key"},[e._v(e._s(o))]),r("dt",{staticClass:"value"},[r("span",[e._v(e._s(e.getConfigValue(t)))]),r("button",{ref:e.resource.id+"-"+o,refInFor:!0,staticClass:"copy-button",on:{click:function(r){e.copyText(e.getConfigValue(t),e.resource.id+"-"+o)}}},[e._v(" Copy ")])])])}))],2):e._e(),"current"===e.curTab?r("div",{staticClass:"tab-container"},[e.resourceChange.before?r("span",e._l(e.resourceChange.before,(function(t,o){return r("div",{key:o},[r("dd",{staticClass:"key"},[e._v(e._s(o))]),r("dt",{staticClass:"value"},[e._v(" "+e._s(e.getBeforeValue(t))+" "),r("button",{ref:e.resource.id+"-"+o,refInFor:!0,staticClass:"copy-button",on:{click:function(r){e.copyText(e.getBeforeValue(t),e.resource.id+"-"+o)}}},[e._v(" Copy ")])])])})),0):r("span",[e._v("Resource doesn't currently exist.")])]):e._e(),"proposed"===e.curTab?r("div",{staticClass:"tab-container"},e._l(e.resourceChange.after,(function(t,o){return r("div",{key:o},[r("dd",{staticClass:"key"},[e._v(e._s(o))]),t?r("dt",{staticClass:"value",class:{"unknown-value":t.unknown}},[e._v(" "+e._s(t.unknown?"Value Unknown":t)+" "),r("button",{ref:e.resource.id+"-"+o,refInFor:!0,staticClass:"copy-button",on:{click:function(r){e.copyText(e.getBeforeValue(t),e.resource.id+"-"+o)}}},[e._v(" Copy ")])]):r("dt",{staticClass:"value"},[e._v("null")])])})),0):e._e()]):r("div",[r("span",[e._v("Please select a resource on your right.")])])])])},f=[],g=r("bc3a"),b=r.n(g),v=r("f904"),m=r.n(v),_={name:"ResourceDetail",props:{resourceID:String},data(){return{curTab:"config",overview:{}}},methods:{selectTab(e){this.hasNoState||(this.curTab=e)},copyText(e,t){m()(e,{onCopy:this.updateCopyText(t)})},updateCopyText(e){Array.isArray(this.$refs[e])?(this.$refs[e][0].innerText="Copied",setTimeout(()=>{this.$refs[e][0].innerText="Copy"},1e3)):(this.$refs[e].innerText="Copied",setTimeout(()=>{this.$refs[e].innerText="Copy"},1e3))},getConfigValue(e){return e.references?e.references.join(", "):e.constant_value?e.constant_value:e||"null"},getBeforeValue(e){return e||"null"},getAfterValue(e){return e||"null"},getResourceConfig(e,t,r){if(e.startsWith("var."))return t.variables[e.replace("var.","")];if(e.startsWith("output.")){let r=e.replace("output.","");if(t.output[r])return t.output[r].config}if(e.startsWith("module.")){if(r){let r=e.split(".").slice(2).join(".");for(let e of t.module.resources)if(e.address==r){let t={};return e.for_each_expression&&(t.for_each=e.for_each_expression),e.count_expression&&(t.count=e.count_expression),Object.assign(t,e.expressions)}}return{source:t.source,...t.expressions}}if(r)return{isChild:"rover-for-each-child-resource-true"};if(t.resources[e]&&t.resources[e].config){let r={};return t.resources[e].config.for_each_expression&&(r.for_each=t.resources[e].config.for_each_expression),t.resources[e].config.count_expression&&(r.count=t.resources[e].config.count_expression),Object.assign(r,t.resources[e].config.expressions)}return{}},getResourceChange(e,t,r){let o={};if(e.startsWith("var."))return o={};if(e.startsWith("output.")){let r=e.replace("output.","");if(t.output[r]&&t.output[r].change){const e=t.output[r].change;return e.actions&&(o.action=e.actions.length>1?"replace":e.actions[0]),o.before=e.before?e.before:null,o.after=e.after?e.after:{},"string"===typeof o.before&&(o.before={value:o.before}),"string"===typeof o.after&&(o.after={value:o.after}),e["after_unknown"]&&(o.after["value"]={unknown:!0}),o}return o={}}if(r){if(t.children[e]&&t.children[e].change){const r=t.children[e].change;if(r.actions&&(o.action=r.actions.length>1?"replace":r.actions[0]),o.before=r.before?r.before:null,o.after=r.after?r.after:null,r["after_unknown"])for(let e of Object.keys(r["after_unknown"]))o.after[e]={unknown:!0};return o}return o={}}if(t.resources[e]&&t.resources[e].change){const r=t.resources[e].change;r.actions&&(o.action=r.actions.length>1?"replace":r.actions[0]),o.before=r.before?r.before:{},o.after=r.after?r.after:{},r["after_unknown"]&&Object.keys(r["after_unknown"]).forEach((function(e){o.after[e]={unknown:!0}}))}return o}},computed:{resource(){let e="";e=this.resourceID.startsWith("Resources/")?this.resourceID.split("/").join("."):this.resourceID.split("/").slice(-2).join(".");const t=e.split("."),r=t.length-1;let o=t.slice(2).join("."),s=t.slice(2,4).join(".").split("[")[0];return this.resourceID.startsWith("Resources/")&&(o=t.slice(1).join("."),s=t.slice(1,4).join(".").split("[")[0]),"output"!=t[r-1]||o.startsWith("output.")||(o="output."+o),"local"==t[r-1]&&(o="local."+t[r]),"var"==t[r-1]&&(o="var."+t[r]),null!=o.match(/^[\w-]+[[]/g)&&(o=t.slice(1).join("."),s=t.slice(1,4).join(".").split("[")[0]),{fileName:`${t[0]}.${t[1]}`,id:o,parentID:s,resource_type:t[r-1],resource_name:t[r]}},primitiveType(){switch(this.resource.resource_type){case"output":case"var":case"local":return this.resource.resource_type;default:return this.resource.id.startsWith("data.")?"data":"resource"}},isChild(){return null!=this.resource.id.match(/^\w+\.[\w-]+[[.]/g)},hasNoState(){return this.resource.id.startsWith("var.")},resourceConfig(){return""===this.resource.id?{action:"",before:{}}:this.isChild?this.resource.id.startsWith("module.")?this.getResourceConfig(this.resource.id,this.overview.resources[this.resource.parentID].module_config,!0):this.getResourceConfig(this.resource.id,this.overview,!1):this.resource.id.startsWith("module.")?this.getResourceConfig(this.resource.id,this.overview.resources[this.resource.parentID].module_config,!1):this.getResourceConfig(this.resource.id,this.overview,!1)},resourceChange(){return""===this.resource.id?{action:"",before:{}}:this.isChild?(this.resource.id.startsWith("module."),this.getResourceChange(this.resource.id,this.overview.resources[this.resource.parentID],!0)):this.getResourceChange(this.resource.id,this.overview,!1)}},watch:{resourceID:function(e){e.includes("var.")&&(this.curTab="config")}},mounted(){"undefined"!==typeof rso?this.overview=rso:b.a.get("/api/rso").then(e=>{this.overview=e.data})}},y=_,C=(r("deef"),Object(u["a"])(y,p,f,!1,null,"13533b84",null)),w=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"graph"}},[r("fieldset",[r("legend",[e._v("Graph")]),r("cytoscape",{ref:"cy",attrs:{config:e.config,preConfig:e.preConfig}})],1)])},k=[],R=r("21a6"),j=r("8df5"),I=r.n(j),T=r("cc5f"),O=r.n(T);const $={autounselectify:!0,style:[{selector:"node",style:{label:"data(label)",width:"500px","font-family":"Avenir, Helvetica, Arial, sans-serif","font-size":"2em"}},{selector:"edge",css:{"curve-style":"taxi","line-fill":"linear-gradient","line-gradient-stop-colors":"data(gradient)","line-dash-offset":24,width:10}},{selector:".basename",style:{padding:"200px","text-margin-y":75,"font-weight":"bold",shape:"roundrectangle","min-height":"400px","border-width":2,"border-color":"white","background-color":"#f4ecff"}},{selector:".fname",style:{padding:"100px","text-margin-y":75,"font-weight":"bold",shape:"roundrectangle","border-width":1,"border-color":"lightgrey","background-color":"white"}},{selector:".provider",style:{"text-valign":"center","text-halign":"center",padding:"1em",shape:"roundrectangle","border-width":0,color:"white","background-color":"black"}},{selector:".module",style:{padding:"100px","font-weight":"bold","text-margin-y":60,shape:"roundrectangle",color:"#8450ba","border-width":10,"border-color":"#8450ba","background-color":"white"}},{selector:".data-type",style:{padding:"10%",width:"label","font-weight":"bold","text-background-color":"white","text-background-opacity":1,"text-background-padding":"2em","text-margin-y":15,shape:"roundrectangle","border-width":"5px","border-color":"black","background-color":"white"}},{selector:".data-name",css:{"background-color":"#ffecec",color:"black","font-weight":"bold","text-valign":"center","text-halign":"center",padding:"1.5em",shape:"roundrectangle","border-opacity":1,"border-width":5,"border-color":"#dc477d",label:"data(label)"}},{selector:".output",css:{"background-color":"#fff7e0",color:"black","font-weight":"bold","text-valign":"center","text-halign":"center",padding:"1.5em",shape:"roundrectangle","border-opacity":1,"border-width":5,"border-color":"#ffc107",label:"data(label)"}},{selector:".variable",css:{"background-color":"#e1f0ff",color:"black","font-weight":"bold","text-valign":"center","text-halign":"center",padding:"1.5em",shape:"roundrectangle","border-opacity":1,"border-width":5,"border-color":"#1d7ada",label:"data(label)"}},{selector:".locals",css:{"background-color":"black",color:"white","font-weight":"bold","text-valign":"center","text-halign":"center",padding:"1.5em",shape:"roundrectangle","border-opacity":1,"border-width":5,"border-color":"black",label:"data(label)"}},{selector:".resource-type",style:{padding:"10%",width:"label","font-weight":"bold","text-background-color":"white","text-background-opacity":1,"text-background-padding":"2em","text-margin-y":15,shape:"roundrectangle","border-width":"5px","border-color":"black","background-color":"white"}},{selector:".resource-parent",style:{padding:"10%",width:"label","font-weight":"bold","text-background-color":"white","text-background-opacity":1,"text-background-padding":"2em","text-margin-y":15,shape:"roundrectangle","border-width":"5px","border-color":"black","background-color":"white"}},{selector:".resource-name",css:{"text-valign":"center","text-halign":"center",padding:"1.5em",shape:"roundrectangle","border-opacity":0,color:"white","background-color":"#8450ba","text-wrap":"ellipsis","text-max-width":500}},{selector:".create",css:{"background-color":"#28a745",color:"white","font-weight":"bold"}},{selector:".destroy",css:{"background-color":"#e40707",color:"white","font-weight":"bold"}},{selector:".update",css:{"background-color":"#1d7ada",color:"white","font-weight":"bold"}},{selector:".replace",css:{"background-color":"#ffc107",color:"black","font-weight":"bold"}},{selector:".no-op",css:{color:"black","border-opacity":1,"font-weight":"bold","border-width":"5px","border-color":"lightgray","background-color":"white"}},{selector:".invisible",css:{opacity:"0"}},{selector:".semitransp",css:{opacity:"0.4"}},{selector:"edge.semitransp",css:{opacity:"0"}},{selector:".visible",css:{opacity:"1"}},{selector:".dashed",css:{"line-style":"dashed","line-dash-pattern":[20,20]}}]};var N={name:"Graph",data(){return{selectedNode:"",config:$,graph:{}}},methods:{preConfig(e){e.use(I.a),"function"!==typeof e("core","nodeHtmlLabel")&&e.use(O.a)},renderGraph:function(){let e=this,t=this.$refs.cy.instance,r=t.elements();const o=this.graph.nodes.map(e=>e.data.id);t.remove(r),this.graph.nodes.forEach(e=>{t.add(e)}),this.graph.edges.forEach(e=>{if(e.data.id.includes("-variable")||e.data.id.includes("-output"))return;let r=e.data.target;while(!o.includes(r)){if(r=r.split("."),r.length<2)return void console.warn("edge target",e.data.target,"not found in nodes");r.pop(),r=r.join(".")}e.data.target=r,t.add(e)}),this.runLayouts(),t.on("click","node",(function(t){var r=t.target;let o={id:r.data().id,in:[],out:[]};const s=r.connectedEdges();for(let e=0;e<s.length;e+=1){let t=s[e].data();r.data().id===t.source?o.out.push(t.target):o.in.push(t.source)}let n=o.id.split("/")[1];if(n&&n.endsWith(".tf"))return;if(["basename","fname"].includes(r.data().type))return e.selectedNode="",void e.unhighlightNodePaths(r);e.selectedNode=o.id,e.highlightNodePaths(r);const a=r.ancestors();let i=[];for(let e=a.length-1;e>0;e--)i.push(a[e].id());i.push(r.id()),e.$emit("getNode",i.join("/"))})),t.on("mouseover","node",(function(t){let r=t.target;e.selectedNode||e.highlightNodePaths(r)})),t.on("mouseout","node",(function(t){var r=t.target;e.selectedNode||e.unhighlightNodePaths(r)}))},highlightNodePaths:function(e){let t=this.$refs.cy.instance;["basename","fname"].includes(e.data().type)||e.isParent()&&"module"!==e.data().type||(t.elements().difference(e.outgoers().union(e.incomers())).filter((function(e){if(!["basename","fname"].includes(e.data().type))return e})).not(e).not(e.parent()).not(e.parent().parent()).addClass("semitransp"),e.neighborhood().union(e.neighborhood().parent()).addClass("visible"),e.incomers().addClass("dashed"))},unhighlightNodePaths:function(e){let t=this.$refs.cy.instance;e.data().type.includes["fname"]||t.elements().removeClass("semitransp").removeClass("visible").removeClass("dashed")},saveGraph:function(){let e=this.$refs.cy.instance;Object(R["saveAs"])(e.png({full:!0}),"rover.png")},runLayouts:function(){let e=this.$refs.cy.instance;e.layout({name:"klay",nodeDimensionsIncludeLabels:!0,klay:{direction:"RIGHT",borderSpacing:100,spacing:30}}).run()}},mounted(){"undefined"!==typeof graph?(this.graph=graph,this.renderGraph()):b.a.get("/api/graph").then(e=>{this.graph=e.data,this.renderGraph()})}},P=N,D=(r("b44b"),r("3de8"),Object(u["a"])(P,x,k,!1,null,"36e07a3e",null)),G=D.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",[r("legend",[e._v("Resources")]),r("File"),e._l(e.map.files,(function(t,o){return r("div",{key:o},[r("File",{attrs:{fileName:o,resources:t},on:{selectResource:e.selectResource}})],1)}))],2)},E=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.fileName?r("div",{staticClass:"file"},[r("div",{staticClass:"row",on:{click:function(t){e.showChildren=!e.showChildren}}},[r("img",{staticClass:"file-expand-icon",attrs:{src:e.expandIcons[e.expandIcon]}}),r("div",{staticClass:"col-11 file-name"},[r("strong",{staticClass:"text-lowercase"},[e._v(e._s(e.fileName))])])]),e._l(e.sortedResources,(function(t){return[r("transition-group",{key:t[0],attrs:{name:"resources"}},[e.showChildren?r("resource-card",{key:t[0],attrs:{id:t[0],content:t[1],isChild:!1,"handle-click":e.selectResource}}):e._e()],1)]}))],2):e._e()},M=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card resource-main",class:[e.isChild?"child":"","resource-card "+e.content.type,null!=e.content.change_action?e.content.change_action:"",null!=e.content.change_action?"":"resource-type-card"]},[r("div",{staticClass:"row",on:{click:function(t){return e.handleClick(e.id)}}},[r("div",{staticClass:"col col-6 resource-col"},[r("p",{staticClass:"is-small resource-action",on:{click:function(t){e.showChildren=!e.showChildren}}},[r("img",{staticClass:"multi-tag resource-action-icon",attrs:{src:e.expandIcons[e.expandIcon]}})]),r("p",{staticClass:"resource-name"},[e._v(" "+e._s(e.content.name)+" ")])]),r("div",{staticClass:"col col-4"},[e.resourceProvider?[e.providerIcon[e.resourceProvider]?r("img",{staticClass:"provider-icon",attrs:{src:e.providerIcon[e.resourceProvider]}}):r("span",{staticClass:"tag is-small provider-icon-tag"},[e._v(" "+e._s(e.resourceProvider[0])+" ")])]:e._e(),r("p",{staticClass:"provider-resource-name"},[e._v(" "+e._s(e.resourceProvider?e.resourceProvider+".":"")+e._s(e.content.resource_type?e.content.resource_type:"")+" ")])],2),e.isChild?e._e():r("div",{staticClass:"col col-2 text-right"},[e._v(" Line: # "),r("span",{staticClass:"line-number"},[e._v(e._s(e.content.line))])])]),e._l(e.content.children,(function(t,o){return[r("transition-group",{key:o,attrs:{name:"resources"}},[e.showChildren?r("resource-card",{key:o,attrs:{id:o,content:t,isChild:!0,"handle-click":e.handleClick}}):e._e()],1)]}))],2)},A=[],F={name:"ResourceCard",props:{id:String,content:Object,isChild:Boolean,handleClick:Function},data(){return{showChildren:!1,providerIcon:{aws:r("a06f"),azure:r("e73c"),gcp:r("6c11"),helm:r("d833"),kubernetes:r("133a")},resourceChangeIcons:{create:r("6b56"),read:null,"no-op":null,update:r("5ba8"),delete:r("5daf"),replace:r("b40f")},expandIcons:{null:null,expand:r("32cb"),collapse:r("c88e")}}},methods:{},computed:{expandIcon(){return this.content.children?this.showChildren?"collapse":"expand":null},resourceProvider(){return this.content.provider?this.content.provider:this.content.resource_type?this.content.resource_type.split("_")[0]:null}}},L=F,z=(r("34a4"),Object(u["a"])(L,V,A,!1,null,"11b846ff",null)),B=z.exports,H={name:"File",components:{ResourceCard:B},props:{fileName:String,resources:Object},data(){return{showChildren:!0,expandIcons:{expand:r("32cb"),collapse:r("c88e")}}},methods:{selectResource(e){this.$emit("selectResource",`${this.fileName}/${e}`)}},computed:{expandIcon(){return this.showChildren?"collapse":"expand"},sortedResources(){const e=Object.entries(this.resources).sort((e,t)=>e[1].line-t[1].line);return e}}},J=H,U=(r("bf1c"),Object(u["a"])(J,W,M,!1,null,"5ef7e534",null)),q=U.exports,K={name:"Explorer",components:{File:q},data(){return{map:{}}},methods:{selectResource(e){this.$emit("selectResource",e)}},mounted(){"undefined"!==typeof map?this.map=map:b.a.get("/api/map").then(e=>{this.map=e.data})}},Q=K,X=(r("90ff"),Object(u["a"])(Q,S,E,!1,null,"206d6b44",null)),Y=X.exports,Z={name:"App",metaInfo:{title:"Rover | Terraform Visualization"},components:{MainNav:h,Graph:G,Explorer:Y,ResourceDetail:w},data(){return{displayGraph:!0,resourceID:""}},methods:{saveGraph(){this.$refs.filegraph.saveGraph()},selectResource(e){this.resourceID=e}}},ee=Z,te=(r("e873"),Object(u["a"])(ee,s,n,!1,null,"08c2df7e",null)),re=te.exports,oe=r("3a6f"),se=r.n(oe),ne=r("58ca");o["default"].use(se.a),o["default"].use(ne["a"]),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(re)}).$mount("#app")},"579a":function(e,t,r){},"5ba8":function(e,t,r){e.exports="./img/alert-triangle.d88bf755.svg"},"5daf":function(e,t,r){e.exports="./img/minus.f2deefda.svg"},"6b56":function(e,t,r){e.exports="./img/plus.b121a385.svg"},"6c11":function(e,t,r){e.exports="./img/gcp.2bdb5143.png"},"76dd":function(e,t,r){},"8fe7":function(e,t,r){},"90ff":function(e,t,r){"use strict";r("b359")},"96c3":function(e,t,r){},a06f:function(e,t,r){e.exports="./img/aws.082444af.png"},b359:function(e,t,r){},b40f:function(e,t,r){e.exports="./img/refresh-cw.286819b2.svg"},b44b:function(e,t,r){"use strict";r("579a")},bf1c:function(e,t,r){"use strict";r("96c3")},c88e:function(e,t,r){e.exports="./img/arrow-up-circle.c7e27cfe.svg"},d833:function(e,t,r){e.exports="./img/helm.0d1950ff.png"},deef:function(e,t,r){"use strict";r("76dd")},e73c:function(e,t,r){e.exports="./img/azure.0386fb3d.png"},e873:function(e,t,r){"use strict";r("2b6d")}});
//# sourceMappingURL=app.0ec571f7.js.map