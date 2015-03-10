var nodeutil = require('util'),
	nodefs = require('fs');

/**
 * Wrapper to Jed library to translate gui.
 * This wrapper extend with dinamically load content
 * @param {[type]} objectdata [description]
 */
function Translator(){
	var translationspath = './i18n/' + process.env.LANG + '.js',
		objectdata = {},
		contentfile;
	if(nodefs.existsSync(translationspath)){
		try{
			contentfile = JSON.parse(nodefs.readFileSync(translationspath,{encoding:'utf-8'}));
		}
		catch(err){
			contentfile = {};
		}
		$.extend(objectdata,contentfile);
	}
	//	Translator.super_.call(this,objectdata);
}
nodeutil.inherits(Translator,Jed);

var util = application.util.core.getInstance();
util.createNameSpace('application.util.i18n');
application.util.i18n = util.singleton(Translator());