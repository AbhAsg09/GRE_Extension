
chrome.runtime.sendMessage({name: "fetchWord"}, (response) => {
    
    document.querySelector('h1').innerHTML=response.word;
    document.querySelector('h4').innerHTML=response.pos;
    document.querySelector('p').innerHTML=response.desc;
  
});

document.querySelector('button.next').addEventListener('click', function() {
    chrome.runtime.sendMessage({name: "fetchWord"}, (response) => {
    
        document.querySelector('h1').innerHTML=response.word;
        document.querySelector('h4').innerHTML=response.pos;
        document.querySelector('p').innerHTML=response.desc;
        console.log("next button");
    });
    
});

document.querySelector('button.savee').addEventListener('click', function () {
    var word = document.querySelector('h1').innerHTML;
    var pos = document.querySelector('h4').innerHTML;
    var desc = document.querySelector('p').innerHTML;
    var wordObj = {word,pos,desc};
    var savedWordsStr = localStorage.getItem('GRE-words');
    if(savedWordsStr == null) {
        var wordList = [wordObj];
        var wordListStr = JSON.stringify(wordList);
        localStorage.setItem('GRE-words', wordListStr);
    }
    else {
        var savedWords = JSON.parse(savedWordsStr);
        var i;
        for(i=0; i<savedWords.length; i++) {
            if(savedWords[i].word == wordObj.word) {
                break;
            }
        }
        if (i == savedWords.length) {
            savedWords.push(wordObj);
            savedWordsStr = JSON.stringify(savedWords);
            localStorage.setItem('GRE-words', savedWordsStr);
        }
        
    }
});

/*
document.querySelector('button.savedItems').addEventListener('click', function () {
    chrome.runtime.sendMessage({
        name: "fetchSaved",
    }, (response) => {
        document.querySelector('h1').innerHTML=response.word;
        document.querySelector('h4').innerHTML=response.pos;
        document.querySelector('p').innerHTML=response.desc;
    })
});
*/