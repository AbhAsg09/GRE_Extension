
chrome.runtime.sendMessage({name: "fetchWord"}, (response) => {
    
    document.querySelector('.gre-word').innerHTML=response.word;
    document.querySelector('.gre-pos').innerHTML=response.pos;
    document.querySelector('.gre-desc').innerHTML=response.desc;
  
});

document.querySelector('button.next').addEventListener('click', function() {
    chrome.runtime.sendMessage({name: "fetchWord"}, (response) => {
    
        document.querySelector('.gre-word').innerHTML=response.word;
        document.querySelector('.gre-pos').innerHTML=response.pos;
        document.querySelector('.gre-desc').innerHTML=response.desc;
        console.log("next button");
    });
    
});

document.querySelector('.saveButton').addEventListener('click', function (event) {
    event.preventDefault();
    var word = document.querySelector('.gre-word').innerHTML;
    var pos = document.querySelector('.gre-pos').innerHTML;
    var desc = document.querySelector('.gre-desc').innerHTML;
    
    localStorage.setItem('word-word', word);
    localStorage.setItem('word-pos', pos);
    localStorage.setItem('word-desc', desc);
    document.querySelector( ".gotWordData" ).click(); 
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