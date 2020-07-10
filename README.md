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
        '$$$': '<div class="rich-seperator">|</div>',
        '$n': '<br>'
    },
    block: {
        '$$blockquote': '<div class="rich-quote">',
        'blockquote$$': '</div>',
        '$$code': '<pre class="rich-codeblock"><code class="lang-|">',
        'code$$': '</code></pre>',
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
Like I said before, think of it as a shortcut language.
