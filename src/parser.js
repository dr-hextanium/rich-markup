require('pretty-error').start();

const fs = require('fs');
const chalk = require('chalk');
const accent = '#aa00ff';
var PrettyError = require('pretty-error');
var pe = new PrettyError();
var info = chalk.bold(`${chalk.hex(accent)('[')}${chalk.white('Info')}${chalk.hex(accent)(']')}: `)
var log = console.log;

class Parser {
    parse(fileName, customSyntax) {
        if(!customSyntax) customSyntax = 'syntax';
        const syntax = require(`./lib/syntaxes/${customSyntax}`)

        var data = fs.readFileSync(fileName, 'utf-8')

        // Get the lines of the file with a simple split statement
        var lines = data.split('\n');

        // Ready some arrays for parsing.
        var rawTokens = [];
        var parsed = [];

        // Split each line by spaces, push each word as a 'rawToken'.
        lines.forEach(element => {
            rawTokens.push(element.split(' '))
        })

        // Start parsing by iterating through each unfiltered token
        for (var i = 0; i < rawTokens.length; i++) {
            // Get the line
            var line = rawTokens[i];
            // Check if the first element of the line is apart of our inline syntax
            if (syntax.inline.hasOwnProperty(line[0])) {
                // If it is, get the content of the line (excluding the syntax).
                var content = line.slice(1).join(' ');
                // Get the HTML equiv of the line...
                var tag = syntax.inline[line[0]];
                // Insert content into the HTML tags...
                tag = tag.split('|')
                tag.splice(1, 0, content)
                tag = tag.join('')
                // Finally, push it into the parsed elements array!
                parsed.push(tag)
            } else if (syntax.block.hasOwnProperty(line[0])) {
                // Check if the first element of the line is apart of our block syntax
                // If it is, get the content of the line (excluding the syntax).
                var content = line.slice(1).join(' ');
                // Get the HTML equiv of the line...
                var tag = syntax.block[line[0]];
                // Insert content into the HTML tags...
                if (tag.includes('|')) {
                    tag = tag.split('|')
                    tag.splice(1, 0, content)
                    tag = tag.join('')
                }
                // Finally, push it into the parsed elements array!
                parsed.push(tag)
            } else if (syntax.metadata.hasOwnProperty(line[0])) {
                // Check if the first element of the line is apart of our metadata syntax
                // If it is, get the content of the line (excluding the syntax).
                var content = line.slice(1).join(' ');
                // Get the HTML equiv of the line...
                var metadata = syntax.metadata[line[0]];
                // Insert content into the metadata object...
                if (metadata.includes('|')) {
                    metadata = metadata.split('|')
                    metadata.splice(1, 0, content)
                    metadata = metadata.join('')
                }
                // Finally, push it into the parsed elements array!
                parsed.unshift(metadata)
            } else {
                // If it isn't in our syntax, make it a paragraph!
                var content = line.join(' ');
                if (syntax.block.hasOwnProperty(parsed[i])) {
                    log('your momma is a potato')
                } else {
                    var tag = syntax.inline['$p'];
                }
                // Insert content into the HTML tags...
                if (content) {
                    tag = tag.split('|')
                    tag.splice(1, 0, content)
                    tag = tag.join('')

                    // Finally, push it into the parsed elements array!
                    parsed.push(tag)
                }
            }
        }

        // Some logging to tell the user everything's okay!
        log(info + 'Successfully read and parsed data from ' + chalk.bold(fileName))
        // Wrap it up with returning the parsed elements
        return parsed;
    }
}

module.exports = Parser;

// So let me show you that it works!