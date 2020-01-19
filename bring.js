var word = require('./wordbook.json')
var utils = require('colorutils')
var write = require('colorutils/writefile')

var v = generateVerse();
console.log(v)

function generateVerse(){
    var verse= '';
    for(let i=0;i<16;i++){
        var random = utils.getRandom(0,words.length);
        var random2 = utils.getRandom(0,words.length);
        var random3 = utils.getRandom(0,words.length);
        var random4 = utils.getRandom(0,words.length);
        verse+=words[random]['word_en']+" "+words[random2]['word_en']+' '+words[random3]['word_en']+' '+words[random4]['word_en']+'\n';
    }
    return verse;
}
