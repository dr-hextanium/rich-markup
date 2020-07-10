# $ Rich $

### What is **Rich?**
Rich is a configurable Markup language. Think shortcuts, macros.

While Rich compiles to HTML out of the box, it was made to compile into ***anything***.

Here's the where the syntax is defined for Rich:

```javascript
var grammar = {
    inline: {
        '$1': '<h1>|</h1>',
        '$2': '<h2>|</h2>',
        '$3': '<h3>|</h3>',
        '$4': '<h4>|</h4>',
        '$5': '<h5>|</h5>',
        '$6': '<h6>|</h6>',
        '$quote': '<p class="rich-quote">|</p>',
        '$p': '<p>|</p>',
        '$$$': '<div class="rich-separator">|</div>',
        '$n': '<br>',
        '$item': '<li>|</li>',
        '$image': '<img src="|">'
    },
    block: {
        '$$blockquote': '<div class="rich-quote">',
        'blockquote$$': '</div>',
        '$$code': '<pre class="rich-codeblock"><code class="lang-|">',
        'code$$': '</code></pre>',
        '$$ordered': '<ol class="rich-ordered-list">',
        'ordered$$': '</ol>',
        '$$link': '<a href="|">',
        'link$$': '</a>',
    },
    metadata: {
        '$$title': '{title: "|"}'
    },
    style: {
        '/\*\*\w+\*\*/g': '<strong>|</strong>',
        '/\*\w+\*/g': '<em>|</em>',
        '/\*\*\*\w+\*\*\*/g': '<strong><em>|</em></strong>',
    }
}
```

Pretty comprehensible, right?

Rich's code is <u><em><s>not really</s></em></u> documented very well.

### **Note:** This was not made to replace Markdown or any markup language.
Markup is a very, *very* powerful markup language. Rich couldn't compare to Markdown.

That's why you can use Markdown/HTML seamlessly with your Rich!
More accurately, you can use whatever language you're compiling to inside of Rich.

### Any bugs?
As of 7/10/2020, there are no known bugs with Rich.

### Okay, I'm hooked, how do I use Rich?
Assuming you have [the git command line tools](https://git-scm.com/download/win), and [Node.js](https://nodejs.org/en/download/) installed (downloads have been linked), follow these steps:
- Clone this repo with the command `git clone https://github.com/TechnoDrive/rich-markup.git rich && cd rich`, which gives you a local copy of Rich.
  - Note: You will have to clone Rich every single time it is updated if you want the latest features.
- Now in the rich directory, run `npm install`, which will install all of the dependencies needed for Rich to work.
- Assuming you didn't get any errors so far, run Rich with the command `node index.js <input file> <output file>`, replacing "\<input file>" and "\<output file>" with your input and output files respectively.
  - Just for testing if Rich works, run `node index.js example.rich output.html`. Then open 'output/output.html' in your web browser of choice.
  
### Making/Using Syntaxes
If you would like to make your own syntax for Rich (or your own personal use), here's a quick guide:
#### Making Syntaxes:
Assuming you're in Rich's directory, any syntaxes should be made in `src/lib/syntaxes`.

Here's a template syntax:
```javascript
var template = {
    inline: {
        '$inline': '<p style="display: inline;">|</p>',
    },
    block: {
        '$$blockquote': '<div class="rich-quote">',
        'blockquote$$': '</div>',
    },
    metadata: {
        '$$title': '{title: "|"}'
    }
}

module.exports = template;
```

All inline, block, and metadata elements should be in their respective object.
To insert content between two points, separate them with a pipe, (`|`).
Note that pipes are optional and do **not** need to be added.

If you're making a custom metadata tag, you must also create a copy of `src/lib/templates/template.js`, setting your metadata in a template literal (`${metadataName}`).

(You'll also have to define your metadata in `index.js`, line 77.)

#### Using Syntaxes:

If you're importing a custom syntax, specify its file name with the `--syntax` flag like so: `node index.js input.rich output.html --syntax=custom`.

**Note: Make sure that the syntax file is in your `src/lib/syntaxes` directory.**

**Note #2: This is an feature is untested with *custom* syntaxes, but it appears to work. Bugs may occur.**

### Contributing

If you'd like to contribute, hit me up on Discord (Hextanium#5890), and we can discuss from there.

### Credits:
[Highlight.js](https://highlightjs.org) (an amazing library by the way) is used to style the code blocks.

Of course, no programmer would exist without **Stack Overflow**.
  - [Convert a string to a template string](https://stackoverflow.com/questions/29182244/convert-a-string-to-a-template-string), [Bryan Rayner's](https://github.com/bryanerayner) answer.

And finally, all of the NPM modules I used. (Just look in `node_modules`, oh wait, you need to install Rich first ;D )

### Copyright
Copyright © 2020 Hextanium#5890, (Z.A).

