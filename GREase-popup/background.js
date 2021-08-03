
function getRandomNumber(num) {
    var max = num + 1;
    return Math.floor(Math.random() * Math.floor(max));
}

const words = ["Tmp1 Word","Tmp2 Word","Tmp3 Word"];
const pos = ["(noun)", "(verb)", "(adj)"];
const desc = ["desc1 blah alldnnank analdk adlnga adpgaodnjga adjnjggadknlm a d adogadk  adkdjgb aaiht", 
    "desc2 eogfowe eonfoei entpjkqent qeptjpqeot qeptojqp t et qet eqtqet qetpqen qi awoih [ [ijtewt weit sdgbsigbg", 
    "desc3 erhg wrotn  wtiet wptwejtn,w welkt twkeh wektj"];


chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetchWord"){
  
        var index = getRandomNumber(size);
        /*response({
            word: words[index],
            pos: pos[index],
            desc: desc[index]
        });*/
        response(data[index]);
  
    }
    
    if(msg.name == "fetchSaved"){
  
        var index = getRandomNumber(2);
        response({
            word: words[index],
            pos: pos[index],
            desc: desc[index]
        });
  
    }

    if(msg.name == "fetchSavedBack"){
  
        var index = getRandomNumber(2);
        response({
            word: words[index],
            pos: pos[index],
            desc: desc[index]
        });
  
    }

    if(msg.name == "saveWord"){
        
        chrome.storage.local.set({'GREWords': JSON.stringify(msg.word)}, function() {
            console.log('Value is set to ');
        });
        response({status: true});
    }

});
  