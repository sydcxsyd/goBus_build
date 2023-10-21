System.register("chunks:///_virtual/Bus.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameConst.ts","./People.ts"],(function(e){var t,r,o,n,i,l,a,s,u,p,c,f,d,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,a=e.Node,s=e.Prefab,u=e.MeshRenderer,p=e.instantiate,c=e.Component},function(e){f=e.MaxNumInBus},function(e){d=e.People,h=e.PeopleState}],execute:function(){var b,v,g,m,y,P,B,C,N;i._RF.push({},"26008qop6tOhI4KMlsj9jvf","Bus",void 0);var z=l.ccclass,w=l.property;e("Bus",(b=z("Bus"),v=w(a),g=w([a]),m=w(s),b((B=t((P=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))||this).color=void 0,o(t,"bus",B,n(t)),o(t,"peopleNodes",C,n(t)),o(t,"peoplePre",N,n(t)),t}r(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){},i.setColor=function(e){this.color=e;var t=this.bus.getComponent(u);t.material=t.materials[e]},i.addPeople=function(){var e=p(this.peoplePre),t=e.getComponent(d);t.setColor(this.color),t.state=h.inBus;for(var r=0;r<this.peopleNodes.length;r++){var o=this.peopleNodes[r];if(0==o.children.length)return o.addChild(e),f==r+1}return!0},t}(c)).prototype,"bus",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(P.prototype,"peopleNodes",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),N=t(P.prototype,"peoplePre",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=P))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EventManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"c07f7t2ZtlJ2Jx+M+y+GNgF","EventManager",void 0),e("default",function(){function e(){this.listener={target:null,handle:null,paraList:null},this.events=new Map,this.registerListener=function(e,t,n){this.events.get(e)||this.events.set(e,[]);var s=Object.create(this.listener);s.target=n,s.handle=t;for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];s.paraList=i,this.events.get(e).push(s)},this.unRegisterListener=function(e,n){if(this.events.get(e))for(;;){for(var s,r=!1,i=0,a=t(this.events.get(e));!(s=a()).done;){if(s.value.target==n){this.events[e].splice(i,1),r=!0;break}i++}if(!r)return}},this.unRegisterAllListenerByTarget=function(e){for(var n,s=t(this.events.values());!(n=s()).done;)for(var r=n.value,i=0;i<r.length;i++)r[i].target==e&&(r.splice(i,1),i--)},this.isRegisterListener=function(e){return!!this.events.get(e)},this.logListentener=function(){},this.pushEvent=function(e){if(this.events.get(e)){for(var n,s=[],r=t(this.events.get(e));!(n=r()).done;){var i=n.value;s.push(i)}for(var a=arguments.length,l=new Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];for(var h=0,o=s;h<o.length;h++){var v=o[h],c=v.handle,g=v.target;v.paraList&&v.paraList.length>0?c.apply(g,v.paraList):c.apply(g,l)}}}}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e}())._instance=void 0,n._RF.pop()}}}));

System.register("chunks:///_virtual/GameBus.ts",["cc"],(function(u){var s;return{setters:[function(u){s=u.cclegacy}],execute:function(){s._RF.push({},"0dfdd3l1eBNY752Qm0eE9mX","GameBus",void 0);u("GameBus",function(){function u(u){void 0===u&&(u=null),this.busColor=void 0,this.inBusNum=0,this.busMaxNum=3,this.busColor=u}var s=u.prototype;return s.busAdd=function(){return!(this.inBusNum<this.busMaxNum)||(this.inBusNum++,this.inBusNum>=this.busMaxNum)},s.isFull=function(){return this.inBusNum>=this.busMaxNum},u}());s._RF.pop()}}}));

System.register("chunks:///_virtual/GameCell.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"599f0XFe2lDLLXhk2+ZHN/P","GameCell",void 0);e("CellType",function(e){return e[e.empty=99]="empty",e[e.human=1]="human",e[e.obstacle=2]="obstacle",e}({})),e("CellColor",function(e){return e[e.red=0]="red",e[e.green=1]="green",e[e.blue=2]="blue",e[e.length=3]="length",e}({})),e("GameCell",(function(){this.cellType=void 0,this.cellColor=void 0,this.cellPos=void 0,this.stepOutNum=-1}));t._RF.pop()}}}));

System.register("chunks:///_virtual/GameConst.ts",["cc"],(function(t){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"f9b0ckpTbFCfo6TRmJ6YfTb","GameConst",void 0);t("MaxNumInBus",3);e._RF.pop()}}}));

System.register("chunks:///_virtual/GameCore.ts",["cc","./GameBus.ts","./GameMap.ts","./GameCell.ts","./GlobalFuc.ts","./EventManager.ts","./GameEvent.ts"],(function(t){var e,i,s,n,u,a,o,r;return{setters:[function(t){e=t.cclegacy},function(t){i=t.GameBus},function(t){s=t.GameMap},function(t){n=t.CellColor,u=t.CellType},function(t){a=t.getRandom},function(t){o=t.default},function(t){r=t.GameEvent}],execute:function(){e._RF.push({},"814e3wTwBhA47vI4M3vi9n3","GameCore",void 0),t("GameCore",function(){function t(){this.map=void 0,this.curBus=void 0,this.nextBus=void 0,this.waitList=void 0,this.maxwaitNum=5}t.getInstance=function(){return this.m_instance||(this.m_instance=new t),this.m_instance};var e=t.prototype;return e.init=function(t,e){this.randomInitMap(t,e),this.waitList=[]},e.randomInitMap=function(t,e){this.map=new s,this.map.init(t,e),this.map.randomInit(),this.curBus=new i,this.nextBus=new i,this.curBus.busColor=a(n.length),this.nextBus.busColor=a(n.length)},e.moveCell=function(t){var e=this.map.getCell(t);if(e.cellType!=u.human)return!1;if(this.map.cellEnableMove(t)){if(this.curBus.busColor!=e.cellColor||this.curBus.isFull()){var i=this.getWaitEmptyIndex();return-1!=i&&(this.waitList[i]=e,this.map.cellMove(t),o.getInstance().pushEvent(r.people_move_to_wait,t,i),!0)}return this.curBus.busAdd(),this.map.cellMove(t),o.getInstance().pushEvent(r.people_move_to_bus,t),!0}return!1},e.getWaitEmptyIndex=function(){for(var t=0;t<this.maxwaitNum;t++)if(!this.waitList[t])return t;return-1},e.createNewBus=function(){var t=new i;return t.busColor=a(n.length),t},e.checkBusFull=function(){this.curBus.isFull()&&(this.curBus=this.nextBus,this.nextBus=this.createNewBus(),o.getInstance().pushEvent(r.bus_full))},e.checkWait=function(){for(var t=0;t<this.maxwaitNum;t++){var e=this.waitList[t];e&&e.cellColor==this.curBus.busColor&&(this.curBus.isFull()||(this.curBus.busAdd(),this.waitList[t]=null,o.getInstance().pushEvent(r.people_wait_move_to_bus,t)))}},t}()).m_instance=void 0,e._RF.pop()}}}));

System.register("chunks:///_virtual/GameEvent.ts",["cc"],(function(e){var _;return{setters:[function(e){_=e.cclegacy}],execute:function(){_._RF.push({},"c08544NP61NX4umKRhiDmZB","GameEvent",void 0);e("GameEvent",{click_people:"click_people",people_move_to_bus:"people_move_to_bus",people_wait_move_to_bus:"people_wait_move_to_bus",people_move_to_wait:"people_move_to_wait",bus_full:"bus_full"});_._RF.pop()}}}));

System.register("chunks:///_virtual/GameMap.ts",["cc","./GameCell.ts","./GlobalFuc.ts"],(function(t){var e,l,i,n,s,a,p,h;return{setters:[function(t){e=t.cclegacy,l=t.v2,i=t.error,n=t.log},function(t){s=t.CellType,a=t.CellColor,p=t.GameCell},function(t){h=t.getRandom}],execute:function(){e._RF.push({},"c4990cGQGZEi5hreZbir27l","GameMap",void 0);t("GameMap",function(){function t(){this.map=void 0,this.xLen=void 0,this.yLen=void 0}var e=t.prototype;return e.init=function(t,e){this.map=[],this.xLen=t,this.yLen=e},e.randomInit=function(){for(var t=0;t<this.xLen;t++){this.map[t]=[];for(var e=0;e<this.yLen;e++){var i=new p;h(100)<80?i.cellType=s.human:i.cellType=s.empty,i.cellType==s.empty&&h(100)<50&&(i.cellType=s.obstacle),i.cellColor=h(a.length),i.cellPos=l(t,e),this.map[t].push(i)}}this.reloadMapOutStep()},e.cellMove=function(t){this.map[t.x][t.y].cellType=s.empty,this.reloadMapOutStep()},e.cellEnableMove=function(t){return this.map[t.x]&&this.map[t.x][t.y]?0==this.getCellOutStep(t):(i("no this cell in map !  "+t),!1)},e.getCellOutStep=function(t){return this.map[t.x][t.y].stepOutNum},e.reloadMapOutStep=function(){for(var t=[],e=0;e<this.map.length;e++)for(var l=0;l<this.map[e].length;l++){this.map[e][l].stepOutNum=-1}for(var i=0;i<this.xLen;i++){var s=this.map[i][0];s.stepOutNum=0,t.push(s)}this._checkWillCheck(t),n(this.map)},e._checkWillCheck=function(t){for(var e=0;e<t.length;e++){var l=t[e];if(l.cellType==s.empty)for(var i=this.getNearbyCellList(l.cellPos),n=0;n<i.length;n++){var a=i[n];-1==a.stepOutNum&&(a.stepOutNum=l.stepOutNum,t.push(a))}}for(var p=[],h=0;h<t.length;h++){var r=t[h];if(r.cellType==s.human)for(var u=this.getNearbyCellList(r.cellPos),c=0;c<u.length;c++){var o=u[c];-1==o.stepOutNum&&(o.stepOutNum=r.stepOutNum+1,p.push(o))}}p.length>0&&this._checkWillCheck(p)},e.getNearbyCellList=function(t){var e=[],l=this.map[t.x-1]?this.map[t.x-1][t.y]:null,i=this.map[t.x+1]?this.map[t.x+1][t.y]:null,n=this.map[t.x][t.y-1],s=this.map[t.x][t.y+1];return l&&e.push(l),i&&e.push(i),n&&e.push(n),s&&e.push(s),e},e.getCell=function(t){if(this.map[t.x]&&this.map[t.x][t.y])return this.map[t.x][t.y];i("no this cell in map !  "+t)},e.checkListPassEnable=function(t){for(var e in t){var l=t[e];if(l&&l.cellType!=s.empty)return!1}return!0},e.getMap=function(){return this.map},t}());e._RF.pop()}}}));

System.register("chunks:///_virtual/GameScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameCore.ts","./People.ts","./GameCell.ts","./Bus.ts","./EventManager.ts","./GameEvent.ts"],(function(t){var e,i,s,n,o,a,r,u,l,c,p,h,m,v,f,d,g,B,b,P,T,y,L,_,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,r=t.Camera,u=t.Prefab,l=t.input,c=t.Input,p=t.instantiate,h=t.v2,m=t.v3,v=t.tween,f=t.log,d=t.geometry,g=t.PhysicsSystem,B=t.Component},function(t){b=t.GameCore},function(t){P=t.People,T=t.PeopleState},function(t){y=t.CellType},function(t){L=t.Bus},function(t){_=t.default},function(t){C=t.GameEvent}],execute:function(){var I,w,S,M,E,x,G,z,D,k,W,R,F;o._RF.push({},"1409biI479I0JuqanBt3NSz","GameScene",void 0);var X=a.ccclass,Y=a.property;t("GameScene",(I=X("GameScene"),w=Y(r),S=Y(u),M=Y(u),E=Y(u),x=Y(r),I((D=e((z=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,s(e,"mainCamera",D,n(e)),s(e,"peoplePre",k,n(e)),s(e,"obstaclePre",W,n(e)),s(e,"busPre",R,n(e)),s(e,"camera",F,n(e)),e.game=void 0,e.mapX=9,e.mapY=9,e.mapLen=1.2,e.curBus=void 0,e.nextBus=void 0,e.waitList=void 0,e.moveToBusList=void 0,e.peopleDic=void 0,e}i(e,t);var o=e.prototype;return o.start=function(){this.gameInit(),this.registEvent(),l.on(c.EventType.TOUCH_START,this.onTouchStart,this),this.waitList=[],this.moveToBusList=[]},o.registEvent=function(){_.getInstance().registerListener(C.click_people,this.onClickPeople,this),_.getInstance().registerListener(C.people_move_to_bus,this.mapMoveToBus,this),_.getInstance().registerListener(C.people_wait_move_to_bus,this.waitMoveToBus,this),_.getInstance().registerListener(C.people_move_to_wait,this.moveToWait,this),_.getInstance().registerListener(C.bus_full,this.busFull,this)},o.gameInit=function(){this.game=b.getInstance(),this.game.init(this.mapX,this.mapY),this.sceneInit()},o.sceneInit=function(){this.peopleInit(),this.busInit()},o.peopleInit=function(){var t=(this.mapX-1)*this.mapLen/2,e=(this.mapY-1)*this.mapLen/2,i=this.game.map.getMap();this.peopleDic={};for(var s=0;s<i.length;s++)for(var n=0;n<i[s].length;n++){var o=i[s][n],a=null;if(o.cellType==y.human){var r=(a=p(this.peoplePre)).getComponent(P);r.init(o.cellColor,h(s,n)),this.peopleDic[s+"_"+n]=r}else o.cellType==y.obstacle&&(a=p(this.obstaclePre));a&&(a.setPosition(m(-t+s*this.mapLen,0,n*this.mapLen-e)),this.node.addChild(a))}},o.busInit=function(){this.curBus=this.addBusToScene(this.game.curBus.busColor,this._getBusStartPos()),this.nextBus=this.addBusToScene(this.game.nextBus.busColor,this._getBusStartPos().subtract(m(8))),this.busMoveIn()},o.addBus=function(t){},o._getBusStartPos=function(){return m(-20,0,-12)},o.addBusToScene=function(t,e){var i=p(this.busPre),s=i.getComponent(L);return s.setColor(t),this.node.addChild(i),i.setPosition(e),s},o.busMoveIn=function(){var t=this;v(this.curBus.node).to(1,{position:m(0,0,-12)}).call((function(){t.busMoveInEnd()})).start(),v(this.nextBus.node).to(1,{position:m(-8,0,-12)}).start()},o.busMoveInEnd=function(){this.game.checkWait()},o.drawMesh=function(t,e,i){},o.update=function(t){},o.onClickPeople=function(t){f(t.pos),this.game.moveCell(t.pos)},o.mapMoveToBus=function(t){var e=this.getPeople(t);this.moveToBus(e),this.deletePeople(t)},o.waitMoveToBus=function(t){var e=this.waitList[t];this.moveToBus(e),this.waitList[t]=null},o.moveToBus=function(t){var e=this;this.moveToBusList.push(t),t.state=T.moveToBus;v(t.node).to(1,{position:m(0,0,-12)}).call((function(){return e.moveToBusEnd(t)})).start()},o.moveToBusEnd=function(t){this.curBus.addPeople(),t.node.destroy();var e=this.moveToBusList.indexOf(t);this.moveToBusList.splice(e,1),0==this.moveToBusList.length&&this.game.checkBusFull()},o.moveToWait=function(t,e){var i=this,s=this.getPeople(t);s.state=T.wait,this.waitList[e]=s;var n=this.getWaitPos(e);v(s.node).to(1,{position:n}).call((function(){return i.moveToWaitEnd(s)})).start(),this.deletePeople(t)},o.moveToWaitEnd=function(t){},o.getWaitPos=function(t){return m(1.4*t-3,0,-7)},o.getPeople=function(t){return this.peopleDic[t.x+"_"+t.y]},o.deletePeople=function(t){this.peopleDic[t.x+"_"+t.y]=null},o.onTouchStart=function(t){var e=new d.Ray;if(this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),e),g.instance.raycast(e)){for(var i=g.instance.raycastResults,s=99,n=null,o=0;o<i.length;o++){var a=i[o].collider.node.parent.getComponent(P);a&&a.state==T.stand&&a.pos.y<s&&(s=(n=a).pos.y)}n&&n&&this.onClickPeople(n)}},o.busFull=function(){var t=this.curBus;v(this.curBus.node).to(1,{position:m(20,0,-12)}).call((function(){t.node.destroy()})).start(),this.curBus=this.nextBus,this.nextBus=this.addBusToScene(this.game.nextBus.busColor,this._getBusStartPos()),this.busMoveIn()},e}(B)).prototype,"mainCamera",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(z.prototype,"peoplePre",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=e(z.prototype,"obstaclePre",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(z.prototype,"busPre",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=e(z.prototype,"camera",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=z))||G));o._RF.pop()}}}));

System.register("chunks:///_virtual/GlobalFuc.ts",["cc"],(function(t){var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){t({getRandom:function(t,n){void 0===n&&(n=null);if(n){var r=n-t;return Math.floor(Math.random()*r)+t}return Math.floor(Math.random()*t)},getRandomList:function(t,n){if(t.length<=n)return t;var r=t.slice(0),e=[];for(;n>0;){var o=this.getRandom(r.length);e.push(r[o]),r.splice(o,1),n--}return e}}),n._RF.push({},"371dcqoE1FBTYM+iUM9F3dU","GlobalFuc",void 0),n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameBus.ts","./GameCell.ts","./GameCore.ts","./GameMap.ts","./Bus.ts","./Obstacle.ts","./People.ts","./GameScene.ts","./EventManager.ts","./GameConst.ts","./GameEvent.ts","./GlobalFuc.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Obstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,c,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var o;c._RF.push({},"1eacbSVtY1NcKrasaNOJb4X","Obstacle",void 0);var s=n.ccclass;n.property,t("Obstacle",s("Obstacle")(o=function(t){function c(){return t.apply(this,arguments)||this}e(c,t);var n=c.prototype;return n.start=function(){},n.update=function(t){},c}(r))||o);c._RF.pop()}}}));

System.register("chunks:///_virtual/People.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventManager.ts","./GameEvent.ts"],(function(t){var e,o,n,i,r,s,a,c,l,u,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Node,c=t.MeshRenderer,l=t.Component},function(t){u=t.default},function(t){p=t.GameEvent}],execute:function(){var f,h,v,d,m;r._RF.push({},"ca9c55sDQVJjrX4V173U6It","People",void 0);var g=s.ccclass,y=s.property,P=t("PeopleState",function(t){return t[t.stand=1]="stand",t[t.wait=2]="wait",t[t.moveToBus=3]="moveToBus",t[t.inBus=4]="inBus",t}({}));t("People",(f=g("People"),h=y(a),f((m=e((d=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).color=void 0,n(e,"people",m,i(e)),e.pos=void 0,e.state=void 0,e}o(e,t);var r=e.prototype;return r.start=function(){},r.update=function(t){},r.init=function(t,e){this.setColor(t),this.setPos(e),this.state=P.stand},r.setColor=function(t){this.color=t;var e=this.people.getComponent(c);e.material=e.materials[t]},r.setPos=function(t){this.pos=t},r.onClick=function(){u.getInstance().pushEvent(p.click_people,this.pos)},r.onTouchStart=function(t){t.getLocation()},e}(l)).prototype,"people",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=d))||v));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});