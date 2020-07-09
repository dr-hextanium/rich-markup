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
    '    </head>' +
    '    <body>',
    end:
        '<script src="../src/lib/js/rich.js"></script>' + 
        '</body>' + 
    '</html>'
}

module.exports = template;