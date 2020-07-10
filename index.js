// index.js

// Important Modules
const program = require('commander');
const figlet = require('figlet');
const clear = require('clear');
const Parser = require('./src/parser.js');
const prettify = require('html-prettify');
const fs = require('fs');
const _ = require('lodash');
const genTemplate = require('./src/lib/generate-template')
var template = require('./src/lib/templates/template');

// Fancy logging
const chalk = require('chalk');
const log = console.log;
const accent = '#aa00ff';
const info = chalk.bold(`${chalk.hex(accent)('[')}${chalk.white('Info')}${chalk.hex(accent)(']')}: `);

// Better errors
var PrettyError = require('pretty-error');
var pe = new PrettyError();

var parser = new Parser();

// Get arguments
const args = require('minimist')(process.argv.slice(2));

// To render exceptions thrown in non-promies code:
process.on('uncaughtException', function (error) {
    console.log(pe.render(error));
});

// To render unhandled rejections created in BlueBird:
process.on('unhandledRejection', function (reason) {
    console.log("Unhandled rejection");
    console.log(pe.render(reason));
});

program.version('v(0.5.6)');

clear();

log(
    chalk.hex(accent)(
        figlet.textSync('$ Rich $')
    )
);

log();

// Make sure we get both args
if (!args._[0] || !args._[1]) {
    throw 'Please provide 2 arguments, an input file and an output file!';
}

// Log the version
log(chalk.bold.hex(accent)(`Version: ` + chalk.white(program.version())));

// Get the output

var output = parser.parse(args._[0], args.syntax);

// Create a file
fs.open('./output/' + args._[1], 'w', function (err, file) {
    // Simple error checking
    if (err) log(chalk.bold('Error with Rich!\n') + pe.render(err));

    // Generate our title metadata.
    var title = output[0];
    title = title.split('"')[1]

    // Create the metadata template.
    template.dynamicStart = genTemplate(template.start)
    output = output.slice(1)

    const metadata = {title: title}

    // Create the content of the HTML file
    var htmlContent = `${template.dynamicStart(metadata)}\n${output.join('\n')}${template.end}`;

    fs.appendFile('./output/' + args._[1], htmlContent, function (err) {
        if (err) throw err;
        log(info + 'Compiled successfully to ' + chalk.bold(args._[1]));
    });
});