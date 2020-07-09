// This file is here to allow code blocks to work!
var codeBlocks = document.getElementsByClassName('rich-codeblock');
var codeBlockParents = []
var log = console.log;


for(let i = 0; i < codeBlocks.length; i++) {
    var element = codeBlocks[i];
    element.innerHTML = element.innerHTML.replace( /(<([^>]+)>)/ig, '');
    element.innerHTML = element.innerHTML.split('\n').slice(1).join('\n')
    log(element.innerHTML)
}