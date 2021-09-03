document.querySelector('.form-check-input').addEventListener('click', function (event) {
    console.log(document.body)
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