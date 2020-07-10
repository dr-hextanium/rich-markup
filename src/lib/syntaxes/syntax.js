/**
 * Just taking a moment to explain the skeleton of the grammar.
 * Inline "tags" are denoted by one $ ($, a dollar sign).
 * Block tags are denoted by two $, ($$, 2 dollar signs).
 * The purpose of | is to determine where to insert content.
 * For now, Rich can only parse into HTML, but in the future you'll be able to use Rich seamlessly with Markdown!
 */

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
        '$$unordered': '<ul class="rich-unordered-list">',
        'unordered$$': '</ul>',
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

module.exports = grammar;