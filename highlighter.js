swordListStr = localStorage.getItem('GRE-words');
swordList = JSON.parse(swordListStr);
console.log(swordList);
swordList = ["Tanmay"]

replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    const words = new Set();a
    var string = element.textContent;
    string.trim();
    string.replace( /\n/g, " " ).split( " " )
    string = string.split(" ");
    for(var i =0; i < string.length; i++){
        if (string[i] == " " || string[i]== "" || string[i]=="\n")
            continue;
        words.add(string[i]);
    }
    console.log(words)
    for(var i=0;i<words.size;i++) {
        if (swordList.includes(words[i])) {
            const newElement = document.createElement('span')
            var regex = new RegExp("/" + words[i] + "/gi");
            console.log(regex);
            var tttt = '<span class="' + words[i] + '">$1</span>';
            newElement.innerHTML = element.textContent.replace(regex, tttt);
            element.replaceWith(newElement)
            console.log(element)
        }
    }
    console.log(element)
    
  }
}