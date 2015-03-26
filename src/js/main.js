function Main(){

}

Main.prototype._run = function _run() {
	var util = application.util.core.getInstance();
	util.createNameSpace('application.util.template');
	application.util.template = util.req('js/lib_external/handlebars/handlebars.js');
	application.util.template.registerHelper('gettext',function gettext(str){
		var i18n = application.util.i18n.getInstance();
		return i18n.gettext(str);
	});
};


Main.prototype.run = function run() {
	this._run();
	


};
$(document).ready(function(){
	var util = application.util.core.getInstance();
	util.createNameSpace('application.main');
	application.main = util.singleton(Main);

	var main = application.main.getInstance();
	main.run();	
});
