
function nextItem() {
    swordListStr = localStorage.getItem('GRE-words');
    swordList = JSON.parse(swordListStr);
    if(!swordList || swordList.length==0) {
        document.querySelector('.gre-word').innerHTML='OOPS!';
        document.querySelector('.gre-pos').innerHTML='(exclamation)';
        document.querySelector('.gre-desc').innerHTML='Nothing in here boss!';
        chrome.storage.local.set({'GRE-words': {}}, function() {
            console.log("Saved word list created!!");
        });
    } else {
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
    
        document.querySelector('.gre-word').innerHTML=swordList[index].word;
        document.querySelector('.gre-pos').innerHTML=swordList[index].pos;
        document.querySelector('.gre-desc').innerHTML=swordList[index].desc;
        if (swordList[index].comment) {
            document.querySelector('.comment').innerHTML=swordList[index].comment;
        } else {
            document.querySelector('.comment').innerHTML="No comments added";
        }
        localStorage.setItem('GRE-index', index);
    }
    
}

function prevItem() {
    swordListStr = localStorage.getItem('GRE-words');
    swordList = JSON.parse(swordListStr);
    if (swordList.length == 0) {
        document.querySelector('.gre-word').innerHTML='OOPS!';
        document.querySelector('.gre-pos').innerHTML='(exclamation)';
        document.querySelector('.gre-desc').innerHTML='Nothing in here boss!';
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

        document.querySelector('.gre-word').innerHTML=swordList[index].word;
        document.querySelector('.gre-pos').innerHTML=swordList[index].pos;
        document.querySelector('.gre-desc').innerHTML=swordList[index].desc;
        document.querySelector('.comment').innerHTML=swordList[index].comment;
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
        document.querySelector('.gre-word').innerHTML='OOPS!';
        document.querySelector('.gre-pos').innerHTML='(exclamation)';
        document.querySelector('.gre-desc').innerHTML='Nothing in here boss!';
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
