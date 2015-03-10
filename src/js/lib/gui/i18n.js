var nodeutil = require('util');
/**
 * Wrapper to Jed library to translate gui.
 * This wrapper extend with dinamically load content
 * @param {[type]} objectdata [description]
 */
function Translator(){
	var objectdata = require('./i18n/' + process.env.LANG + '.js');
	Translator.super_.call(this,objectdata);
}
nodeutil.inherits(Translator,Jed);

var util = application.util.core.getInstance();
util.createNameSpace('application.util.i18n');
application.util.i18n = CBUtil.singleton(Translator());