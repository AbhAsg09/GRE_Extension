document.querySelector('.form-check-input').addEventListener('click', async function (event) {
    // let x = await chrome.tabs.query({active: true}, function(tabs) {
    //     var tab = tabs[0];
    //     tab_title = tab.title;
    //     console.log(tab_title);
    //     chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
    //         console.log(response);
    //       });
    //   });
    
});

function replaceText(elmt) {
    if (elmt.hasChildNodes()) {
        elmt.childNodes.forEach(replaceText)
    } else if (elmt.nodeType === Text.TEXT_NODE) {
        highlightText(elmt.textContent)
    }
}

function highlightText(text) {
    console.log(text)
}