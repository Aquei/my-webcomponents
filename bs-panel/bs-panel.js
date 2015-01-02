(function(){
	"use strict";
	var d = document,
	s = d._currentScript || d.currentScript,
	me = s.ownerDocument,
	tpl = me.querySelector("template").content;

	var changeContext = function(that){
		var contexts = ["primary","success","info","warning","danger","default"];
		var contxt = that.getAttribute("data-context") || "default";
		var header = that.querySelector(".panel-heading > .panel-title");

		//remove context
		for(var i=0, l=contexts.length; i<l ;++i){
			var ctxt = "panel-"+contexts[i];
			if(header.classList.contains(ctxt)){
				header.classList.remove(ctxt);

				break;
			}
		}



		if(contexts.indexOf(contxt) !== -1){
			header.classList.add("panel-"+contxt);
		}else{
			var e = {
				message : "Unknown context :"+contxt,
				name : "ContextException"
			}

			throw e;
		}

		return that;
	}

	var panelProto = Object.create(HTMLElement.prototype);

	panelProto.createdCallback = function(){
		var clone = document.importNode(tpl, true);
		var title = this.getAttribute("title") || null;
		var that = this;

		//もしtitlte attributeが設定されていたら
		//.panel-heading > .panel-title に設定する
		if(title){
			clone.querySelector(".panel-heading > .panel-title").textContent = title;
		}

		this = changeContext(that);

		this.appendChild(clone);
	}

	//documentにbs-panelを登録する
	document.registerElement("bs-panel", {prototype: panelProto});
})();



