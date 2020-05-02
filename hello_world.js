console.log('hello world!');

// node.jsでは、デフォルトで多様なモジュールが提供されており、JavaScriptからは「require」で読み込むことができます。
const path = require('path');
console.log(path.basename(__filename));

// 上の様な感じでモジュールを利用してジョークを読み込む
var giveMeJoke = require('give-me-a-joke');
giveMeJoke.getRandomDadJoke(function(joke) {
	console.log(joke)
});