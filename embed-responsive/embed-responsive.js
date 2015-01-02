(function(){
	var sc = document._currentScript || document.currentScript;
	var me = sc.ownerDocument;
	var tpl = me.querySelector("template").content;

	var proto = Object.create(HTMLElement.prototype);

	var supported_type = ["iframe", "video", "embed"];

	proto.createdCallback = function(){

		var resource_url = this.getAttribute("data-resource-url");
		var type = this.getAttribute("data-embed-type") || "iframe";
		var clone, shadow;

		clone = document.importNode(tpl, true);
		shadow = this.createShadowRoot();

		var container = clone.querySelector("x-bootstrap::shadow .embed-responsive");
		
		var elem = document.createElement(type);
		if(supported_type.indexOf(type) !== -1){
			elem.src = resource_url;
		}

		elem.classList.add("embed-responsive-item");

		container.appendChild(elem);

		shadow.appendChild(clone);

	
	}

	document.registerElement("embed-responsive", {prototype:proto});



})();
