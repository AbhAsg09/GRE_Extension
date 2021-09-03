
chrome.runtime.sendMessage({name: "fetchWord"}, (response) => {
    document.querySelector('.gre-word').innerHTML=localStorage.getItem('word-word');;
    document.querySelector('.gre-pos').innerHTML=localStorage.getItem('word-pos');
    document.querySelector('.gre-desc').innerHTML=localStorage.getItem('word-desc');
  
});

document.querySelector('#save').addEventListener('click', function () {
    var word = document.querySelector('.gre-word').innerHTML;
    var pos = document.querySelector('.gre-pos').innerHTML;
    var desc = document.querySelector('.gre-desc').innerHTML;
    var comment = document.getElementById('textt').value;
    var wordObj = {word,pos,desc,comment};
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
    document.querySelector( ".lessgoMain" ).click(); 
});

/*
document.querySelector('button.savedItems').addEventListener('click', function () {
    chrome.runtime.sendMessage({
        name: "fetchSaved",
    }, (response) => {
        document.querySelector('.gre-word').innerHTML=response.word;
        document.querySelector('.gre-pos').innerHTML=response.pos;
        document.querySelector('p').innerHTML=response.desc;
    })
});
*/