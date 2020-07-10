var template = {
    start: 
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '    <head>\n' +
    '        <meta charset="utf-8">\n' +
    '        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '        <title>${title}</title>\n' +
    '        <meta name="description" content="">\n' +
    '        <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '        <!-- Import rich.css -->\n' +
    '        <link rel="stylesheet" href="../src/lib/css/rich.css">\n' +
    '        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.1/build/styles/atom-one-dark.min.css">\n' +
    '    </head>\n' +
    '    <body>\n',
    end:
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>\n' + 
        '<script src="../src/lib/js/rich.js"></script>\n' + 
        '<script>hljs.initHighlightingOnLoad();</script>\n' + 
        '</body>\n' + 
    '</html>'
}

module.exports = template;