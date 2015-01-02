if(
		"registerElment" in document &&
		"createShadowRoot" in HTMLElment.prototype &&
		"import" in document.createElement("link") && 
		"content" in document.createElemnt("template")
  ){
	  // all ok!
  }else{
	  //load polyfill
	  document.write('<script src="https://cdn.jsdelivr.net/webcomponentsjs/latest/webcomponents.min.js"></script>');
  }
