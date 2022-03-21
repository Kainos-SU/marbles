var O=Object.defineProperty;var P=(I,t,e)=>t in I?O(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e;var r=(I,t,e)=>(P(I,typeof t!="symbol"?t+"":t,e),e);import{T as M,a as C,G as A,C as B,P as p,R as w,I as x,A as L}from"./vendor.72d6414c.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}};U();class F{constructor(t){r(this,"BUTTON_STYLE");r(this,"TEXT_INSTANCE");r(this,"BUTTON_FRAME");r(this,"MIN_BUTTON_SIZE",250);r(this,"BUTTON_CALLBACK",()=>console.log("Test"));this.BUTTON_STYLE=new M({align:"center",fontFamily:"sans-serif",fontSize:50,fill:["#ffffff"]}),this.TEXT_INSTANCE=new C(t||"DUMMY",this.BUTTON_STYLE),this.BUTTON_FRAME=new A,this.BUTTON_FRAME.lineStyle(3,16777215,1).beginFill(16777215,.5).drawRect(0,0,this.TEXT_INSTANCE.width>=this.MIN_BUTTON_SIZE?this.TEXT_INSTANCE.width+10:this.MIN_BUTTON_SIZE,60).endFill().addChild(this.TEXT_INSTANCE),this.BUTTON_FRAME.interactive=!0,this.BUTTON_FRAME.buttonMode=!0,this.BUTTON_FRAME.on("pointerdown",this.BUTTON_CALLBACK),this.BUTTON_FRAME.on("pointerover",()=>{this.BUTTON_FRAME.geometry.clear(),this.BUTTON_FRAME.lineStyle(3,16777215,1).beginFill(16711680,.4).drawRect(0,0,this.TEXT_INSTANCE.width>=this.MIN_BUTTON_SIZE?this.TEXT_INSTANCE.width+10:this.MIN_BUTTON_SIZE,60).endFill()}),this.BUTTON_FRAME.on("pointerout",()=>{this.BUTTON_FRAME.geometry.clear(),this.BUTTON_FRAME.lineStyle(3,16777215,1).beginFill(16777215,.4).drawRect(0,0,this.TEXT_INSTANCE.width>=this.MIN_BUTTON_SIZE?this.TEXT_INSTANCE.width+10:this.MIN_BUTTON_SIZE,60).endFill()});const e=this.TEXT_INSTANCE.width,i=this.TEXT_INSTANCE.height;this.TEXT_INSTANCE.x=this.BUTTON_FRAME.width/2-e/2,this.TEXT_INSTANCE.y=this.BUTTON_FRAME.height/2-i/2}getButton(){return this.BUTTON_FRAME}setCallbackOnPress(t){this.BUTTON_FRAME.removeAllListeners("pointerdown"),this.BUTTON_CALLBACK=t,this.BUTTON_FRAME.on("pointerdown",this.BUTTON_CALLBACK)}destroy(){this.TEXT_INSTANCE.destroy(),this.BUTTON_FRAME.destroy()}}const u={GRID_COLUMNS:6,GRID_ROWS:6,GRID_GAP:5,GRID_MARBLE_SIZE:50},o=class{constructor(t,e,i,s){r(this,"container");r(this,"mask");r(this,"marbles");r(this,"GRID_COLUMNS");r(this,"GRID_ROWS");r(this,"GRID_GAP");r(this,"GRID_MARBLE_SIZE");r(this,"GRID_WIDTH");r(this,"GRID_HEIGHT");r(this,"GRID_STEP_SIZE");r(this,"cursorPosition");r(this,"marbleArray",[]);r(this,"isSync",!1);r(this,"deletingMarbles",!1);r(this,"score",0);r(this,"isInitialyze",!1);r(this,"currentColor");r(this,"marbleStrick",[]);this.GRID_COLUMNS=t,this.GRID_ROWS=e,this.GRID_GAP=s,this.GRID_MARBLE_SIZE=i,this.GRID_WIDTH=(s*2+i)*t,this.GRID_HEIGHT=(s*2+i)*e,this.container=new B,this.container.y=150,this.marbles=new A,this.mask=new A,this.container.mask=this.mask,this.mask.beginFill(16777215,1),this.mask.drawRect(0,0,this.GRID_WIDTH,this.GRID_HEIGHT),this.GRID_STEP_SIZE=this.GRID_MARBLE_SIZE+2*this.GRID_GAP;for(let n=0;n<this.GRID_COLUMNS*this.GRID_ROWS;++n)this.marbleArray.push(this.getRandomMarble(n));this.marbles.interactive=!1,this.container.interactive=!0,this.marbles.on("pointerdown",n=>{this.isSync=!1;const l=this.getLocalCoordinates(n.data.global),h=this.getIndexFromCoordinates(l);this.marbleStrick.length||this.container.on("pointermove",this.setCursorPosition.bind(this));const a=this.marbleArray[h];this.setCurrentColor(a)}),this.container.on("pointerup",()=>{this.removeMarbles(),this.container.removeAllListeners("pointermove"),this.setCurrentColor(void 0)}),this.marbles.on("pointermove",n=>{if(console.log(n),!this.currentColor)return;const l=this.getLocalCoordinates(n.data.global),h=this.getIndexFromCoordinates(l),a=this.marbleArray[h];if(!a)return;const{x:d,y:_}=this.getTwoDimentionalIndex(h),{x:D,y:g}=this.getTwoDimentionalIndex(this.marbleArray.indexOf(this.currentColor)),G=d===D||_===g;a.color===this.currentColor.color&&G&&this.setCurrentColor(a)}),this.container.addChild(this.mask),this.container.addChild(this.marbles)}setCurrentColor(t){if(!t){this.currentColor=void 0;return}this.currentColor&&!this.marbleStrick.includes(t)&&this.marbleStrick.push(t),this.marbleStrick.length||this.marbleStrick.push(t),this.currentColor=t,t.marked=!0}getIndexFromCoordinates(t){const e=Math.ceil(t.x/this.GRID_STEP_SIZE)-1;return(Math.ceil(t.y/this.GRID_STEP_SIZE)-1)*this.GRID_COLUMNS+e}getLocalCoordinates(t){const e=new p(this.container.position.x,this.container.position.y);return t.subtract(e)}getOneDimentionalIndex(t,e){return e*this.GRID_COLUMNS+t}getTwoDimentionalIndex(t){return{x:t%this.GRID_COLUMNS,y:Math.floor(t/this.GRID_COLUMNS)}}getRandomMarble(t){const e=o.availableColors[Math.floor(Math.random()*o.availableColors.length)],i=t%this.GRID_COLUMNS*this.GRID_STEP_SIZE+(this.GRID_GAP+this.GRID_MARBLE_SIZE/2),s=-this.GRID_MARBLE_SIZE;return{color:e,x:i,y:s,marked:!1}}static setHookOnScoreChange(t){o.ON_SCORE_UPDATE=t}static initPlayGrid(t,e,i,s){return o.PlayGridInstance=new o(t,e,i,s),o.PlayGridInstance}static setDropSpeed(t){o.DROP_SPEED=t}static setMinStrick(t){o.MIN_STRICK_SIZE=t}static setColors(t){if(t.includes(0))throw new Error("Array includes EMPTY value!");o.availableColors=t}static getGridInstance(){return o.PlayGridInstance||(console.error("PlayGridInstance not initialize, set defaults"),o.PlayGridInstance=new o(u.GRID_COLUMNS,u.GRID_ROWS,u.GRID_MARBLE_SIZE,u.GRID_GAP)),o.PlayGridInstance}getGraphics(){var t;return(t=o.PlayGridInstance)==null?void 0:t.container}setCursorPosition(t){var i,s;const e=this.getLocalCoordinates(t.data.global);((i=this.cursorPosition)==null?void 0:i.x)===e.x&&((s=this.cursorPosition)==null?void 0:s.y)===e.y||(this.isSync=!1,this.cursorPosition=e)}drawMarble(t){t.marked&&this.marbles.lineStyle(3,16777215,1),this.marbles.beginFill(t.color,1),this.marbles.drawCircle(t.x,t.y,this.GRID_MARBLE_SIZE/2),this.marbles.endFill(),this.marbles.lineStyle(0)}animateMarbles(){let t=!0;for(let e=this.marbleArray.length-1;e>=0;--e){const i=this.marbleArray[e];if(!i)continue;const{x:s,y:n}=this.getTwoDimentionalIndex(e);if(n<this.GRID_COLUMNS-1){const d=this.marbleArray[this.getOneDimentionalIndex(s,n===this.GRID_COLUMNS-1?n:n+1)];if(!d&&!this.deletingMarbles)throw new Error("Doesnt find previous marble!");const _=i.y>this.GRID_MARBLE_SIZE/2||d&&d.y>this.GRID_MARBLE_SIZE/2;if(this.isInitialyze&&!_)continue}const l=Math.floor(e/this.GRID_COLUMNS)*this.GRID_STEP_SIZE+(this.GRID_GAP+this.GRID_MARBLE_SIZE/2),h=e%this.GRID_COLUMNS*this.GRID_STEP_SIZE+(this.GRID_GAP+this.GRID_MARBLE_SIZE/2);Math.abs(i.y-l)<o.DROP_SPEED?i.y=l:i.y+=i.y>l?-o.DROP_SPEED:o.DROP_SPEED,Math.abs(i.x-h)<o.DROP_SPEED?i.x=h:i.x+=i.x>h?-o.DROP_SPEED:o.DROP_SPEED;const a=i.y<this.GRID_MARBLE_SIZE/2+this.GRID_GAP;if(t=t&&i.y===l,this.drawMarble(i),!this.isInitialyze&&a)return!1}return t}removeMarbles(){if(this.isSync=!1,this.cursorPosition=void 0,this.marbleStrick.length<o.MIN_STRICK_SIZE){this.marbleStrick.forEach(i=>i.marked=!1),this.marbleStrick=[];return}this.marbles.interactive=!1,this.deletingMarbles=!0;const e=setInterval(()=>{if(this.isSync=!1,!this.marbleStrick.length){this.marbles.interactive=!0,this.deletingMarbles=!1,clearInterval(e);return}const i=this.marbleStrick.pop();i.marked=!1;const s=this.marbleArray.indexOf(i);this.marbleArray[s]=void 0,this.score++,o.ON_SCORE_UPDATE(this.score)},1e3)}updateMarbleArray(){let t=!0;for(let e=this.marbleArray.length-1;e>=0;--e){if(this.marbleArray[e])continue;t=!1;let s=1;const{x:n,y:l}=this.getTwoDimentionalIndex(e);let h=e;for(let a=l-1;a>=0;--a){const d=this.getOneDimentionalIndex(n,a),_=this.marbleArray[d];if(_){this.marbleArray[h]=_,this.marbleArray[d]=void 0;let{x:D,y:g}=this.getTwoDimentionalIndex(h);h=this.getOneDimentionalIndex(D,g-1)}else s++}for(let a=0;a<s;++a){const d=this.getOneDimentionalIndex(n,a);this.marbleArray[d]=this.getRandomMarble(d)}}this.isSync=t}drawConnections(){this.marbles.lineStyle(Math.floor(this.GRID_MARBLE_SIZE/5),16777215,1),this.marbles.moveTo(this.marbleStrick[0].x,this.marbleStrick[0].y);for(const t of this.marbleStrick){const e=t.x,i=t.y;this.marbles.beginFill(),this.marbles.lineTo(e,i),this.marbles.endFill(),this.marbles.moveTo(t.x,t.y)}this.cursorPosition&&!this.deletingMarbles&&this.marbles.lineTo(this.cursorPosition.x,this.cursorPosition.y),this.marbles.lineStyle(0,16777215,1)}update(){if(!this.isSync){if(!this.isInitialyze){this.marbles.clear();const t=this.animateMarbles();this.marbles.interactive=t,this.isInitialyze=t,this.isSync=t;return}this.deletingMarbles||this.updateMarbleArray(),this.marbles.geometry.clear(),this.marbleStrick.length&&this.drawConnections(),this.isSync=this.animateMarbles()}}};let c=o;r(c,"DROP_SPEED",10),r(c,"MIN_STRICK_SIZE",3),r(c,"ON_SCORE_UPDATE",t=>console.log("Current score: ",t)),r(c,"availableColors",[16776960,255,65280,16711680,10027161]),r(c,"PlayGridInstance");const v=new M({align:"center",fontFamily:"sans-serif",fontSize:45,fill:["#FFFFFF"]}),k=new M({align:"left",fontFamily:"sans-serif",fontSize:40,fill:["#FFFFFF"]});w.registerPlugin("interaction",x);const E=window.innerWidth,m=window.innerHeight,Z=6,y=6,f=5,N=Math.floor((E>m?m/y-2*f:E/y-2*f)/2),S=new F("Start Game"),b=new C("Score: 0",k);b.y=15;b.x=E-200;const R=new C("Marble Destroer!",v);R.x=E/2-R.width/2;R.y=m/4-R.height/2;const T=new L({width:E,height:m});T.stage.interactive=!0;S.getButton().x=E/2-S.getButton().width/2;S.getButton().y=m/2-S.getButton().height/2;T.stage.addChild(S.getButton());T.stage.addChild(R);c.initPlayGrid(y,Z,N,f);c.setHookOnScoreChange(I=>b.text=`Score: ${I}`);S.setCallbackOnPress(()=>{T.stage.addChild(b),T.stage.addChild(c.getGridInstance().getGraphics());const I=c.getGridInstance().getGraphics();I.x=E/2-y*(N+f*2)/2,c.getGridInstance().getGraphics().y=m/3,S.destroy(),R.destroy(),T.ticker.add(()=>{c.getGridInstance().update()})});const H=document.querySelector("#app");H.append(T.view);
