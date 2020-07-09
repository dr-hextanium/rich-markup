var template = {
    start: 
    '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8">' +
    '        <meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '        <title>${titledata}</title>' +
    '        <meta name="description" content="">' +
    '        <meta name="viewport" content="width=device-width, initial-scale=1">' +
    '        <!-- Import rich.css -->' +
    '        <link rel="stylesheet" href="../src/lib/css/rich.css">' +
    '        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.1/build/styles/atom-one-dark.min.css">' +
    '    </head>' +
    '    <body>',
    end:
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>' + 
        '<script src="../src/lib/js/rich.js"></script>' + 
        '<script>hljs.initHighlightingOnLoad();</script>' + 
        '</body>' + 
    '</html>'
}

module.exports = template;