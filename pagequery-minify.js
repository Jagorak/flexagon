!function(){let e={x:0,y:0},t={x:0,y:0},n=null,s=[],r=[];function o(){document.addEventListener("mouseup",(function(){n&&n.makeInactive()}),!1),document.addEventListener("mousemove",(function(i){t={x:e.x,y:e.y},e={x:i.clientX,y:i.clientY},n&&(n.pos.x+=e.x-t.x,n.pos.y+=e.y-t.y,n.translate(n.pos.x,n.pos.y))}),!1);let i=document.getElementsByTagName("BINDER");for(let e of i)a(e,e.id)}function l(e){this.srcElement=e,this.pos={x:0,y:0},this.shape={width:0,height:0},this.pages=[],this.pageNames=[],this.currentPage=void 0,this.init=function(){this.srcElement.style.position="fixed";let e=this.srcElement.getElementsByTagName("PAGE");for(let t of e){i=this.pages.push(t)-1;let e=t.getAttribute("id");e?this.pageNames[e]=i:this.pageNames[i.toString()]=i,void 0===this.currentPage&&(this.currentPage=i),this.hidePage(i)}return void 0===this.currentPage?(console.log(this.srcElement.id),!1):(this.showPage(this.currentPage),this.updateCurrentStyle(),this.resize(this.srcElement.getAttribute("width"),this.srcElement.getAttribute("height")),this.updateCurrentStyle(),this.translate(this.srcElement.getAttribute("x"),this.srcElement.getAttribute("y")),"false"==this.srcElement.getAttribute("visible")&&this.hide(),!0)},this.openPage=function(e){"number"!=typeof e&&(e=this.pageNames[e]),this.pages[e]?(this.hidePage(this.currentPage),this.showPage(e),this.currentPage=e):console.log("That page doesn't exist.")},this.makeActive=function(){this.updateCurrentStyle(),this.srcElement.style.userSelect="none",n=this},this.makeInactive=function(){this.srcElement.style.userSelect="auto",n=null},this.updateCurrentStyle=function(){let e=window.getComputedStyle(this.srcElement);this.pos={x:parseInt(e.getPropertyValue("left")),y:parseInt(e.getPropertyValue("top"))},this.shape={width:parseInt(e.getPropertyValue("width"))+parseInt(e.getPropertyValue("padding-left"))+parseInt(e.getPropertyValue("padding-right")),height:parseInt(e.getPropertyValue("height"))+parseInt(e.getPropertyValue("padding-top"))+parseInt(e.getPropertyValue("padding-bottom"))}},this.translate=function(e,t){(e||0==e)&&("number"!=typeof e&&(e=e.includes("%")?window.innerWidth*parseInt(e)/100-this.shape.width*parseInt(e)/100:parseInt(e)),this.srcElement.style.left=e),(t||0==t)&&("number"!=typeof t&&(t=t.includes("%")?window.innerHeight*parseInt(t)/100-this.shape.height*parseInt(t)/100:parseInt(t)),this.srcElement.style.top=t)},this.resize=function(e,t){e&&("number"!=typeof e&&(e=e.includes("%")?window.innerWidth*parseInt(e)/100:parseInt(e)),this.srcElement.style.width=e),t&&("number"!=typeof t&&(t=t.includes("%")?window.innerWidth*parseInt(t)/100:parseInt(t)),this.srcElement.style.height=t)},this.hide=function(){this.srcElement.style.display="none"},this.show=function(){this.srcElement.style.display="block"},this.hidePage=function(e){this.pages[e].style.display="none"},this.showPage=function(e){this.pages[e].style.display="block"}}function a(e,t){t?s[t]=new l(e):t=s.push(new l(e))-1,success=s[t].init(t),success||(console.log("You must include at least one <page> tag in your binder."),s.splice(t,1)),r.push(t),s[t].srcElement.style.zIndex=r.length-1}window.onload=function(){o()},window.pageQuery=function(){o()},window.bringToFront=function(e){let t=r.indexOf(e);for(-1==t&&(t=r.indexOf(parseInt(e))),r.splice(t,1);t<r.length;t++)s[r[t]].srcElement.style.zIndex--;r[t]=e,s[e].srcElement.style.zIndex=t},window.defineBinder=function(e,t=null){"BINDER"==e.tagName?a(e,t):console.log("To load a new binder you must send a <binder> element.")},window.findParentBinder=function(e){let t=e.parentNode;for(;t;){if("BINDER"==t.tagName){if(t.id)return t.id;for(let e in s)if(s[e].srcElement==t)return e}t=t.parentNode}console.log("This element is not part of a binder object.")},window.getBinder=function(e){return s[e]?s[e]:void console.log("That binder doesn't exist.")},window.closeBinder=function(e=null){e||(e=findParentBinder(event.srcElement)),s[e].hide()},window.openBinder=function(e){e?(s[e].show(),bringToFront(e)):console.log("Please specify a binder that you'd like to open.")},window.dragBinder=function(e=null){e||(e=findParentBinder(event.srcElement)),s[e].makeActive(),bringToFront(e)},window.translateBinder=function(e,t,n=null){n||(n=findParentBinder(event.srcElement)),s[n].updateCurrentStyle(),s[n].translate(e,t)},window.resizeBinder=function(e,t,n=null){n||(n=findParentBinder(event.srcElement)),s[n].updateCurrentStyle(),s[n].resize(e,t)},window.prevPage=function(e=null){e||(e=findParentBinder(event.srcElement));let t=s[e].currentPage;0==s[e].currentPage?console.log("There are no earlier pages."):s[e].openPage(t-1)},window.nextPage=function(e=null){e||(e=findParentBinder(event.srcElement));let t=s[e].currentPage;t==s[e].pages.length-1?console.log("There are no later pages."):s[e].openPage(t+1)},window.openPage=function(e,t=null){t||(t=findParentBinder(event.srcElement)),s[t].openPage(e)},window.getCurrentPage=function(e=null){return e||(e=findParentBinder(event.srcElement)),s[e].currentPage}}();