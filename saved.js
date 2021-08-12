
function nextItem() {
    swordListStr = localStorage.getItem('GRE-words');
    swordList = JSON.parse(swordListStr);
    if(swordList.length == 0) {
        document.querySelector('h1').innerHTML='OOPS!';
        document.querySelector('h4').innerHTML='(exclamation)';
        document.querySelector('p').innerHTML='Nothing in here boss!';
    }
    else {
        index = localStorage.getItem('GRE-index');
        if(index == null || index < 0) {
            index = -1;
        }
        else {
            index = JSON.parse(index);
        }
    
        index = index + 1;
        size = swordList.length;
    
        if(index >= size) {
            index = index % size;
        }
    
        document.querySelector('h1').innerHTML=swordList[index].word;
        document.querySelector('h4').innerHTML=swordList[index].pos;
        document.querySelector('p').innerHTML=swordList[index].desc;
        localStorage.setItem('GRE-index', index);
    }
    
}

function prevItem() {
    swordListStr = localStorage.getItem('GRE-words');
    swordList = JSON.parse(swordListStr);
    if (swordList.length == 0) {
        document.querySelector('h1').innerHTML='OOPS!';
        document.querySelector('h4').innerHTML='(exclamation)';
        document.querySelector('p').innerHTML='Nothing in here boss!';
    }
    else {
        index = localStorage.getItem('GRE-index');
        if(index == null || index < 0) {
            index = 0;
        }
        else {
            index = JSON.parse(index);
        }
        index = index - 1;
        size = swordList.length;

        if(index < 0) {
            index = size - 1;
        }

        document.querySelector('h1').innerHTML=swordList[index].word;
        document.querySelector('h4').innerHTML=swordList[index].pos;
        document.querySelector('p').innerHTML=swordList[index].desc;
        localStorage.setItem('GRE-index', index);
    }
    
}

nextItem();

document.querySelector('button.nextSaved').addEventListener('click', function () {
    nextItem();
});

document.querySelector('button.backSaved').addEventListener('click', function () {
    prevItem();
});

document.querySelector('button.deleteButton').addEventListener('click', function () {
    swordListStr = localStorage.getItem('GRE-words');
    swordList = JSON.parse(swordListStr);
    if(swordList.length == 0) {
        document.querySelector('h1').innerHTML='OOPS!';
        document.querySelector('h4').innerHTML='(exclamation)';
        document.querySelector('p').innerHTML='Nothing in here boss!';
    }
    else {
        index = localStorage.getItem('GRE-index');
        index = JSON.parse(index);
    
        swordList.splice(index, 1);
        swordListStr = JSON.stringify(swordList);
        localStorage.setItem('GRE-words', swordListStr);
        index = index - 1;
        size = swordList.length;

        if(index < 0) {
            index = size - 1;
        }

        localStorage.setItem('GRE-index', index);

        nextItem();
    }
    
})
