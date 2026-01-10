export const htmlBasicsQuestions = [
    // Elements & Tags
    {
        queNo: 1,
        queText: "Which HTML tag is the root element of every HTML document?",
        queOptions: ["<body>", "<head>", "<html>", "<doctype>"],
        correctOption: 2
    },
    {
        queNo: 2,
        queText: "Which tag is used to group block-level elements?",
        queOptions: ["<span>", "<group>", "<div>", "<section>"],
        correctOption: 2
    },
    {
        queNo: 3,
        queText: "Which tag is used to create a hyperlink?",
        queOptions: ["<link>", "<a>", "<href>", "<url>"],
        correctOption: 1
    },

    // Attributes
    {
        queNo: 4,
        queText: "Which attribute specifies the URL in an anchor tag?",
        queOptions: ["src", "link", "href", "path"],
        correctOption: 2
    },
    {
        queNo: 5,
        queText: "Which attribute is mandatory for the <img> tag?",
        queOptions: ["alt", "title", "src", "width"],
        correctOption: 2
    },
    {
        queNo: 6,
        queText: "Why is the alt attribute important?",
        queOptions: [
            "For styling images",
            "For accessibility and screen readers",
            "For image loading speed",
            "For SEO only"
        ],
        correctOption: 1
    },

    // Headings & Lists
    {
        queNo: 7,
        queText: "Which heading tag has the highest priority?",
        queOptions: ["<h6>", "<h4>", "<h2>", "<h1>"],
        correctOption: 3
    },
    {
        queNo: 8,
        queText: "Which tag is used to create an unordered list?",
        queOptions: ["<ol>", "<ul>", "<li>", "<list>"],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "Which tag represents a list item?",
        queOptions: ["<item>", "<list>", "<li>", "<ul>"],
        correctOption: 2
    },

    // Forms Basics
    {
        queNo: 10,
        queText: "Which tag is used to create a form in HTML?",
        queOptions: ["<input>", "<form>", "<fieldset>", "<label>"],
        correctOption: 1
    },
    {
        queNo: 11,
        queText: "Which input type is used for passwords?",
        queOptions: ["text", "hidden", "password", "secure"],
        correctOption: 2
    },
    {
        queNo: 12,
        queText: "Which attribute is used to send form data to the server?",
        queOptions: ["method", "action", "target", "name"],
        correctOption: 1
    },

    // Mixed / Concept check
    {
        queNo: 13,
        queText: "Which tag is used to label an input field?",
        queOptions: ["<input>", "<legend>", "<label>", "<name>"],
        correctOption: 2
    },
    {
        queNo: 14,
        queText: "Which list type displays numbers by default?",
        queOptions: ["<ul>", "<dl>", "<li>", "<ol>"],
        correctOption: 3
    },
    {
        queNo: 15,
        queText: "Where should metadata like title and charset be placed?",
        queOptions: ["<body>", "<footer>", "<meta>", "<head>"],
        correctOption: 3
    }
];

export const htmlStructureQuestions = [
    {
        queNo: 1,
        queText: "Which HTML tag should wrap the main content of a webpage excluding header and footer?",
        queOptions: ["<section>", "<article>", "<main>", "<div>"],
        correctOption: 2
    },
    {
        queNo: 2,
        queText: "When should you use <article> instead of <section>?",
        queOptions: [
            "When content is grouped visually",
            "When content is reusable and independent",
            "When content is purely decorative",
            "When content is hidden"
        ],
        correctOption: 1
    },
    {
        queNo: 3,
        queText: "Which tag improves accessibility by defining navigation links?",
        queOptions: ["<div>", "<nav>", "<menu>", "<aside>"],
        correctOption: 1
    },
    {
        queNo: 4,
        queText: "What is the main purpose of semantic HTML?",
        queOptions: [
            "Improve page speed",
            "Improve SEO & accessibility",
            "Reduce CSS usage",
            "Replace JavaScript"
        ],
        correctOption: 1
    },
    {
        queNo: 5,
        queText: "Which tag is best suited for side content like ads or related links?",
        queOptions: ["<section>", "<aside>", "<article>", "<footer>"],
        correctOption: 1
    },
    {
        queNo: 6,
        queText: "Which attribute is REQUIRED for <img> for accessibility?",
        queOptions: ["title", "src", "alt", "aria-label"],
        correctOption: 2
    },
    {
        queNo: 7,
        queText: "What does the <figure> tag represent?",
        queOptions: [
            "A form container",
            "Self-contained media content",
            "A layout wrapper",
            "An inline image"
        ],
        correctOption: 1
    },
    {
        queNo: 8,
        queText: "Which tag provides a caption for <figure>?",
        queOptions: ["<caption>", "<figcaption>", "<label>", "<summary>"],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "Which attribute improves iframe security?",
        queOptions: ["allow", "sandbox", "referrerpolicy", "loading"],
        correctOption: 1
    },
    {
        queNo: 10,
        queText: "Which iframe attribute delays loading until needed?",
        queOptions: ["defer", "async", "lazy", "loading"],
        correctOption: 3
    },
    {
        queNo: 11,
        queText: "What is the role of <label> in forms?",
        queOptions: [
            "Style inputs",
            "Group inputs",
            "Associate text with form controls",
            "Validate inputs"
        ],
        correctOption: 2
    },
    {
        queNo: 12,
        queText: "Which attribute connects <label> to an input?",
        queOptions: ["id", "name", "for", "value"],
        correctOption: 2
    },
    {
        queNo: 13,
        queText: "Which input type provides built-in email validation?",
        queOptions: ["text", "mail", "email", "validate"],
        correctOption: 2
    },
    {
        queNo: 14,
        queText: "Which attribute prevents form submission if input is empty?",
        queOptions: ["readonly", "disabled", "required", "pattern"],
        correctOption: 2
    },
    {
        queNo: 15,
        queText: "What does the 'pattern' attribute do?",
        queOptions: [
            "Styles input",
            "Restricts input using regex",
            "Autofills data",
            "Disables input"
        ],
        correctOption: 1
    },
    {
        queNo: 16,
        queText: "Which ARIA attribute describes what an element does?",
        queOptions: ["aria-hidden", "aria-label", "aria-role", "aria-live"],
        correctOption: 1
    },
    {
        queNo: 17,
        queText: "Why should <div> be avoided when semantic tags exist?",
        queOptions: [
            "It slows rendering",
            "It breaks CSS",
            "It lacks meaning for screen readers",
            "It increases bundle size"
        ],
        correctOption: 2
    },
    {
        queNo: 18,
        queText: "Which heading order is correct for accessibility?",
        queOptions: [
            "h1 → h3 → h2",
            "h2 → h1",
            "h1 → h2 → h3",
            "Any order is fine"
        ],
        correctOption: 2
    },
    {
        queNo: 19,
        queText: "What does 'aria-hidden=true' do?",
        queOptions: [
            "Hides element visually",
            "Removes element from DOM",
            "Hides element from screen readers",
            "Disables interaction"
        ],
        correctOption: 2
    },
    {
        queNo: 20,
        queText: "Which tag should be used once per page?",
        queOptions: ["<section>", "<main>", "<article>", "<aside>"],
        correctOption: 1
    }
];

export const htmlAdvanceQuestions = [
    {
        queNo: 1,
        queText: "What is the main purpose of structured data in HTML?",
        queOptions: [
            "To improve website styling",
            "To help search engines understand content",
            "To reduce page load time",
            "To replace meta tags"
        ],
        correctOption: 1
    },
    {
        queNo: 2,
        queText: "Which structured data format is preferred by Google?",
        queOptions: [
            "Microdata",
            "RDFa",
            "JSON-LD",
            "XML"
        ],
        correctOption: 2
    },
    {
        queNo: 3,
        queText: "Where is JSON-LD usually placed in an HTML document?",
        queOptions: [
            "Inside body only",
            "Inside head or body",
            "Only inside footer",
            "Only inside meta tags"
        ],
        correctOption: 1
    },
    {
        queNo: 4,
        queText: "What does the DOM represent?",
        queOptions: [
            "The CSS structure",
            "The JavaScript engine",
            "The document as a tree structure",
            "The browser UI"
        ],
        correctOption: 2
    },
    {
        queNo: 5,
        queText: "What triggers a DOM reflow?",
        queOptions: [
            "Changing text color",
            "Changing element layout or size",
            "Running JavaScript",
            "Loading images"
        ],
        correctOption: 1
    },
    {
        queNo: 6,
        queText: "Which method returns a static NodeList?",
        queOptions: [
            "getElementsByClassName",
            "getElementsByTagName",
            "querySelectorAll",
            "children"
        ],
        correctOption: 2
    },
    {
        queNo: 7,
        queText: "Difference between innerText and textContent?",
        queOptions: [
            "No difference",
            "innerText respects CSS, textContent doesn’t",
            "textContent triggers reflow",
            "innerText is faster"
        ],
        correctOption: 1
    },
    {
        queNo: 8,
        queText: "What is the critical rendering path?",
        queOptions: [
            "Steps to execute JavaScript",
            "Steps browser takes to render a page",
            "DOM event flow",
            "CSS animation process"
        ],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "Why is frequent DOM manipulation expensive?",
        queOptions: [
            "Consumes more memory",
            "Causes reflow and repaint",
            "Blocks API calls",
            "Reduces SEO score"
        ],
        correctOption: 1
    },
    {
        queNo: 10,
        queText: "Which attribute helps improve video loading performance?",
        queOptions: [
            "autoplay",
            "muted",
            "preload",
            "controls"
        ],
        correctOption: 2
    },
    {
        queNo: 11,
        queText: "Why does autoplay usually require muted?",
        queOptions: [
            "Browser bug",
            "SEO requirement",
            "User experience policy",
            "HTML limitation"
        ],
        correctOption: 2
    },
    {
        queNo: 12,
        queText: "Difference between <video src> and <source>?",
        queOptions: [
            "No difference",
            "source allows multiple formats",
            "src is deprecated",
            "source improves SEO"
        ],
        correctOption: 1
    },
    {
        queNo: 13,
        queText: "When should <picture> be used?",
        queOptions: [
            "For videos",
            "For responsive images",
            "For SVGs only",
            "For icons"
        ],
        correctOption: 1
    },
    {
        queNo: 14,
        queText: "What are data-* attributes used for?",
        queOptions: [
            "Styling elements",
            "Storing custom data",
            "SEO optimization",
            "Form validation"
        ],
        correctOption: 1
    },
    {
        queNo: 15,
        queText: "How are data-* attributes accessed in JavaScript?",
        queOptions: [
            "element.data",
            "element.customData",
            "element.dataset",
            "element.attributes"
        ],
        correctOption: 2
    },
    {
        queNo: 16,
        queText: "Why are data-* attributes preferred over custom attributes?",
        queOptions: [
            "Faster performance",
            "HTML standard compliance",
            "Better styling",
            "Smaller DOM"
        ],
        correctOption: 1
    },
    {
        queNo: 17,
        queText: "Can data-* attributes affect SEO?",
        queOptions: [
            "Yes, directly",
            "Only in Google",
            "No",
            "Only for metadata"
        ],
        correctOption: 2
    },
    {
        queNo: 18,
        queText: "What is semantic HTML?",
        queOptions: [
            "HTML with CSS",
            "Meaningful HTML structure",
            "HTML without divs",
            "SEO optimized HTML"
        ],
        correctOption: 1
    },
    {
        queNo: 19,
        queText: "Why is semantic HTML important for accessibility?",
        queOptions: [
            "Improves styling",
            "Helps screen readers",
            "Improves JS execution",
            "Reduces code"
        ],
        correctOption: 1
    },
    {
        queNo: 20,
        queText: "What does progressive enhancement focus on?",
        queOptions: [
            "Advanced browsers first",
            "Basic content first",
            "JavaScript first",
            "Design first"
        ],
        correctOption: 1
    },
    {
        queNo: 21,
        queText: "Graceful degradation means?",
        queOptions: [
            "Building basic features later",
            "Supporting older browsers minimally",
            "Removing features",
            "Ignoring accessibility"
        ],
        correctOption: 1
    },
    {
        queNo: 22,
        queText: "Why is HTML still relevant with JS frameworks?",
        queOptions: [
            "SEO and accessibility",
            "Better animations",
            "Faster APIs",
            "No reason"
        ],
        correctOption: 0
    },
    {
        queNo: 23,
        queText: "What does the <main> tag represent?",
        queOptions: [
            "Navigation content",
            "Main unique content",
            "Sidebar content",
            "Footer content"
        ],
        correctOption: 1
    },
    {
        queNo: 24,
        queText: "Which tag improves SEO for articles?",
        queOptions: [
            "div",
            "section",
            "article",
            "span"
        ],
        correctOption: 2
    },
    {
        queNo: 25,
        queText: "What does aria-label do?",
        queOptions: [
            "Styles elements",
            "Adds animation",
            "Improves accessibility",
            "Improves SEO ranking"
        ],
        correctOption: 2
    },
    {
        queNo: 26,
        queText: "What is DOMContentLoaded?",
        queOptions: [
            "Page fully loaded",
            "HTML parsed",
            "CSS loaded",
            "Images loaded"
        ],
        correctOption: 1
    },
    {
        queNo: 27,
        queText: "What is the purpose of <noscript>?",
        queOptions: [
            "Disable JS",
            "Fallback for JS disabled users",
            "Load JS faster",
            "SEO optimization"
        ],
        correctOption: 1
    },
    {
        queNo: 28,
        queText: "Which tag is best for navigation links?",
        queOptions: [
            "div",
            "section",
            "nav",
            "header"
        ],
        correctOption: 2
    },
    {
        queNo: 29,
        queText: "What happens if structured data is misleading?",
        queOptions: [
            "Nothing",
            "Better ranking",
            "Search penalties",
            "Faster indexing"
        ],
        correctOption: 2
    },
    {
        queNo: 30,
        queText: "What is the biggest benefit of clean HTML structure?",
        queOptions: [
            "Looks good",
            "Better accessibility & SEO",
            "Less CSS",
            "Less JS"
        ],
        correctOption: 1
    }
];

export const cssBasicsQuestions = [
    {
        queNo: 1,
        queText: "What does CSS stand for?",
        queOptions: [
            "Creative Style System",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correctOption: 1
    },
    {
        queNo: 2,
        queText: "Which CSS property is used to change text color?",
        queOptions: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        correctOption: 2
    },
    {
        queNo: 3,
        queText: "Which unit is relative to the parent element’s font size?",
        queOptions: [
            "px",
            "rem",
            "em",
            "%",
        ],
        correctOption: 2
    },
    {
        queNo: 4,
        queText: "What does the box model consist of?",
        queOptions: [
            "Margin, border, padding, content",
            "Padding, content only",
            "Border and content",
            "Margin and padding only"
        ],
        correctOption: 0
    },
    {
        queNo: 5,
        queText: "Which property controls space inside an element?",
        queOptions: [
            "margin",
            "border",
            "padding",
            "gap"
        ],
        correctOption: 2
    },
    {
        queNo: 6,
        queText: "Which property controls space outside an element?",
        queOptions: [
            "padding",
            "margin",
            "border-spacing",
            "gap"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which selector selects all elements?",
        queOptions: [
            "#",
            ".",
            "*",
            "all"
        ],
        correctOption: 2
    },
    {
        queNo: 8,
        queText: "Which selector has the highest specificity?",
        queOptions: [
            "Element selector",
            "Class selector",
            "ID selector",
            "Universal selector"
        ],
        correctOption: 2
    },
    {
        queNo: 9,
        queText: "What is specificity used for?",
        queOptions: [
            "To load CSS faster",
            "To resolve style conflicts",
            "To improve animations",
            "To reduce file size"
        ],
        correctOption: 1
    },
    {
        queNo: 10,
        queText: "Which CSS property changes font type?",
        queOptions: [
            "font-style",
            "font-weight",
            "font-family",
            "text-style"
        ],
        correctOption: 2
    },
    {
        queNo: 11,
        queText: "Which property controls font thickness?",
        queOptions: [
            "font-style",
            "font-size",
            "font-weight",
            "text-weight"
        ],
        correctOption: 2
    },
    {
        queNo: 12,
        queText: "Which unit is relative to the root element?",
        queOptions: [
            "em",
            "px",
            "rem",
            "%"
        ],
        correctOption: 2
    },
    {
        queNo: 13,
        queText: "What does box-sizing: border-box do?",
        queOptions: [
            "Adds padding outside the box",
            "Includes padding and border in width/height",
            "Removes margin",
            "Resets box model"
        ],
        correctOption: 1
    },
    {
        queNo: 14,
        queText: "Which font format is best for modern browsers?",
        queOptions: [
            "TTF",
            "OTF",
            "WOFF",
            "SVG"
        ],
        correctOption: 2
    },
    {
        queNo: 15,
        queText: "Why should web-safe fonts or fallbacks be used?",
        queOptions: [
            "Better animations",
            "Faster JavaScript",
            "Consistent rendering across devices",
            "Improved SEO ranking"
        ],
        correctOption: 2
    }
];

export const cssLayoutQuestions = [
    {
        queNo: 1,
        queText: "Which unit is best for responsive layouts?",
        queOptions: ["px", "em", "vh / vw", "pt"],
        correctOption: 2
    },
    {
        queNo: 2,
        queText: "What does 1vw represent?",
        queOptions: [
            "1% of viewport height",
            "1% of viewport width",
            "1% of parent width",
            "1px of viewport"
        ],
        correctOption: 1
    },
    {
        queNo: 3,
        queText: "Which media query targets screens smaller than 768px?",
        queOptions: [
            "@media (min-width: 768px)",
            "@media (max-width: 768px)",
            "@media screen > 768px",
            "@media device-width: 768px"
        ],
        correctOption: 1
    },
    {
        queNo: 4,
        queText: "What is the default flex-direction?",
        queOptions: ["column", "row", "row-reverse", "column-reverse"],
        correctOption: 1
    },
    {
        queNo: 5,
        queText: "Which property aligns items on the main axis?",
        queOptions: [
            "align-items",
            "justify-content",
            "place-items",
            "align-content"
        ],
        correctOption: 1
    },
    {
        queNo: 6,
        queText: "Which property aligns items on the cross axis?",
        queOptions: [
            "justify-content",
            "align-items",
            "flex-wrap",
            "gap"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which property allows items to move to the next line?",
        queOptions: [
            "flex-flow",
            "flex-wrap",
            "flex-grow",
            "overflow"
        ],
        correctOption: 1
    },
    {
        queNo: 8,
        queText: "What does flex: 1 mean?",
        queOptions: [
            "Fixed width",
            "Item grows equally",
            "Item shrinks only",
            "Item overflows"
        ],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "Which layout system is two-dimensional?",
        queOptions: ["Flexbox", "Float", "Grid", "Positioning"],
        correctOption: 2
    },
    {
        queNo: 10,
        queText: "Which property defines grid columns?",
        queOptions: [
            "grid-template-rows",
            "grid-template-columns",
            "grid-columns",
            "grid-auto-flow"
        ],
        correctOption: 1
    },
    {
        queNo: 11,
        queText: "What does repeat(3, 1fr) mean?",
        queOptions: [
            "3 fixed columns",
            "3 equal-width columns",
            "3 auto rows",
            "3px columns"
        ],
        correctOption: 1
    },
    {
        queNo: 12,
        queText: "Which property controls spacing between grid items?",
        queOptions: ["margin", "padding", "gap", "spacing"],
        correctOption: 2
    },
    {
        queNo: 13,
        queText: "Which position removes element from normal flow?",
        queOptions: [
            "relative",
            "static",
            "absolute",
            "sticky"
        ],
        correctOption: 2
    },
    {
        queNo: 14,
        queText: "Position relative is mainly used to?",
        queOptions: [
            "Fix element on screen",
            "Remove element from DOM",
            "Position children absolutely",
            "Create new stacking context"
        ],
        correctOption: 2
    },
    {
        queNo: 15,
        queText: "Which position sticks based on scroll?",
        queOptions: [
            "fixed",
            "absolute",
            "relative",
            "sticky"
        ],
        correctOption: 3
    },
    {
        queNo: 16,
        queText: "Which property controls stacking order?",
        queOptions: [
            "position",
            "z-index",
            "overflow",
            "display"
        ],
        correctOption: 1
    },
    {
        queNo: 17,
        queText: "Which unit is best for font-based responsiveness?",
        queOptions: ["px", "rem", "vh", "%"],
        correctOption: 1
    },
    {
        queNo: 18,
        queText: "Why use media queries?",
        queOptions: [
            "To load JavaScript",
            "To change layout based on device",
            "To improve SEO",
            "To animate elements"
        ],
        correctOption: 1
    },
    {
        queNo: 19,
        queText: "Which display value enables flexbox?",
        queOptions: [
            "block",
            "inline",
            "grid",
            "flex"
        ],
        correctOption: 3
    },
    {
        queNo: 20,
        queText: "Best approach for modern layouts?",
        queOptions: [
            "Floats only",
            "Flexbox + Grid",
            "Tables",
            "Absolute positioning everywhere"
        ],
        correctOption: 1
    }
];

export const cssAdvanceQuestions = [
    {
        queNo: 1,
        queText: "Which property defines an animation in CSS?",
        queOptions: [
            "transition",
            "animation-name",
            "keyframes",
            "animate"
        ],
        correctOption: 1
    },
    {
        queNo: 2,
        queText: "Which rule defines animation steps?",
        queOptions: [
            "@animation",
            "@frames",
            "@keyframes",
            "@steps"
        ],
        correctOption: 2
    },
    {
        queNo: 3,
        queText: "Which property controls animation duration?",
        queOptions: [
            "animation-speed",
            "animation-delay",
            "animation-time",
            "animation-duration"
        ],
        correctOption: 3
    },
    {
        queNo: 4,
        queText: "Difference between transition and animation?",
        queOptions: [
            "No difference",
            "Animation needs keyframes",
            "Transition uses JS",
            "Animation is faster"
        ],
        correctOption: 1
    },
    {
        queNo: 5,
        queText: "Which property triggers transition?",
        queOptions: [
            "Any CSS property change",
            "Only transform",
            "Only opacity",
            "Only hover"
        ],
        correctOption: 0
    },
    {
        queNo: 6,
        queText: "Which transition property controls easing?",
        queOptions: [
            "transition-delay",
            "transition-timing-function",
            "transition-speed",
            "transition-effect"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which timing function is default?",
        queOptions: [
            "linear",
            "ease-in",
            "ease-out",
            "ease"
        ],
        correctOption: 3
    },
    {
        queNo: 8,
        queText: "Which transform moves an element?",
        queOptions: [
            "scale()",
            "rotate()",
            "translate()",
            "skew()"
        ],
        correctOption: 2
    },
    {
        queNo: 9,
        queText: "Which transform affects size?",
        queOptions: [
            "translate",
            "rotate",
            "scale",
            "skew"
        ],
        correctOption: 2
    },
    {
        queNo: 10,
        queText: "Which property enables hardware acceleration?",
        queOptions: [
            "top / left",
            "margin",
            "transform",
            "float"
        ],
        correctOption: 2
    },
    {
        queNo: 11,
        queText: "How do you declare a CSS variable?",
        queOptions: [
            "$main-color",
            "--main-color",
            "@main-color",
            "var(main-color)"
        ],
        correctOption: 1
    },
    {
        queNo: 12,
        queText: "Where are CSS variables usually declared?",
        queOptions: [
            "body",
            "html",
            ":root",
            "*"
        ],
        correctOption: 2
    },
    {
        queNo: 13,
        queText: "How do you use a CSS variable?",
        queOptions: [
            "use(--color)",
            "var(--color)",
            "$(--color)",
            "get(--color)"
        ],
        correctOption: 1
    },
    {
        queNo: 14,
        queText: "Why use CSS variables?",
        queOptions: [
            "For SEO",
            "For reusability and theming",
            "For animations only",
            "For faster JS"
        ],
        correctOption: 1
    },
    {
        queNo: 15,
        queText: "Which pseudo-class targets hover state?",
        queOptions: [
            "::hover",
            ":hover",
            ":active",
            ":focus"
        ],
        correctOption: 1
    },
    {
        queNo: 16,
        queText: "Which pseudo-class targets focused input?",
        queOptions: [
            ":active",
            ":hover",
            ":focus",
            "::focus"
        ],
        correctOption: 2
    },
    {
        queNo: 17,
        queText: "Which pseudo-class targets first child?",
        queOptions: [
            ":first",
            ":first-child",
            "::first-child",
            ":child-first"
        ],
        correctOption: 1
    },
    {
        queNo: 18,
        queText: "Which pseudo-class targets checked checkbox?",
        queOptions: [
            ":selected",
            ":checked",
            ":active",
            ":focus"
        ],
        correctOption: 1
    },
    {
        queNo: 19,
        queText: "Pseudo-elements are used to?",
        queOptions: [
            "Style states",
            "Style parts of elements",
            "Add JS logic",
            "Handle events"
        ],
        correctOption: 1
    },
    {
        queNo: 20,
        queText: "Which pseudo-element inserts content before?",
        queOptions: [
            ":before",
            "::before",
            ":first",
            "::content"
        ],
        correctOption: 1
    },
    {
        queNo: 21,
        queText: "Which pseudo-element styles first line?",
        queOptions: [
            "::first-line",
            ":first-line",
            "::line",
            ":line"
        ],
        correctOption: 0
    },
    {
        queNo: 22,
        queText: "Which pseudo-element styles first letter?",
        queOptions: [
            "::first-letter",
            ":first-letter",
            "::letter",
            ":letter"
        ],
        correctOption: 0
    },
    {
        queNo: 23,
        queText: "Difference between pseudo-class and pseudo-element?",
        queOptions: [
            "No difference",
            "Class styles state, element styles part",
            "Element styles state",
            "Class is deprecated"
        ],
        correctOption: 1
    },
    {
        queNo: 24,
        queText: "Which selector targets disabled inputs?",
        queOptions: [
            ":disabled",
            "::disabled",
            ":inactive",
            ":readonly"
        ],
        correctOption: 0
    },
    {
        queNo: 25,
        queText: "Which animation property controls repeat?",
        queOptions: [
            "animation-loop",
            "animation-repeat",
            "animation-iteration-count",
            "animation-cycle"
        ],
        correctOption: 2
    },
    {
        queNo: 26,
        queText: "What does animation-fill-mode do?",
        queOptions: [
            "Controls speed",
            "Controls start/end styles",
            "Controls delay",
            "Controls direction"
        ],
        correctOption: 1
    },
    {
        queNo: 27,
        queText: "Which value makes animation run infinitely?",
        queOptions: [
            "loop",
            "forever",
            "infinite",
            "repeat"
        ],
        correctOption: 2
    },
    {
        queNo: 28,
        queText: "Which property reverses animation direction?",
        queOptions: [
            "animation-direction",
            "animation-reverse",
            "animation-flow",
            "animation-mode"
        ],
        correctOption: 0
    },
    {
        queNo: 29,
        queText: "Best practice for performant animations?",
        queOptions: [
            "Animate top/left",
            "Animate margin",
            "Animate transform & opacity",
            "Animate width/height"
        ],
        correctOption: 2
    },
    {
        queNo: 30,
        queText: "CSS Advanced is mainly used for?",
        queOptions: [
            "Backend logic",
            "Visual polish & UX",
            "Database styling",
            "SEO optimization"
        ],
        correctOption: 1
    }
];

export const jsBasicsQuestions = [
    {
        queNo: 1,
        queText: "Which data type is NOT primitive in JavaScript?",
        queOptions: [
            "string",
            "number",
            "object",
            "boolean"
        ],
        correctOption: 2
    },
    {
        queNo: 2,
        queText: "What is the type of null in JavaScript?",
        queOptions: [
            "null",
            "undefined",
            "object",
            "number"
        ],
        correctOption: 2
    },
    {
        queNo: 3,
        queText: "Which keyword is used to declare a variable?",
        queOptions: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correctOption: 3
    },
    {
        queNo: 4,
        queText: "Difference between let and const?",
        queOptions: [
            "let is block scoped, const is global",
            "const cannot be reassigned",
            "let cannot be reassigned",
            "No difference"
        ],
        correctOption: 1
    },
    {
        queNo: 5,
        queText: "Which operator checks value AND type?",
        queOptions: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctOption: 2
    },
    {
        queNo: 6,
        queText: "What will Boolean(0) return?",
        queOptions: [
            "true",
            "false",
            "null",
            "undefined"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which function keyword is correct?",
        queOptions: [
            "function myFunc() {}",
            "func myFunc() {}",
            "def myFunc() {}",
            "method myFunc() {}"
        ],
        correctOption: 0
    },
    {
        queNo: 8,
        queText: "Arrow functions were introduced in?",
        queOptions: [
            "ES5",
            "ES6",
            "ES7",
            "ES8"
        ],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "How do you return a value from a function?",
        queOptions: [
            "break",
            "console.log",
            "return",
            "yield"
        ],
        correctOption: 2
    },
    {
        queNo: 10,
        queText: "Which loop is guaranteed to run at least once?",
        queOptions: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        correctOption: 2
    },
    {
        queNo: 11,
        queText: "Which loop is best when iterations are known?",
        queOptions: [
            "while",
            "do...while",
            "for",
            "switch"
        ],
        correctOption: 2
    },
    {
        queNo: 12,
        queText: "What does break do inside a loop?",
        queOptions: [
            "Skips one iteration",
            "Stops the loop",
            "Restarts loop",
            "Pauses loop"
        ],
        correctOption: 1
    },
    {
        queNo: 13,
        queText: "Which statement is used for conditions?",
        queOptions: [
            "if",
            "else",
            "switch",
            "All of the above"
        ],
        correctOption: 3
    },
    {
        queNo: 14,
        queText: "What is the output of 5 + '5'?",
        queOptions: [
            "10",
            "55",
            "NaN",
            "Error"
        ],
        correctOption: 1
    },
    {
        queNo: 15,
        queText: "Why is JavaScript called loosely typed?",
        queOptions: [
            "Needs semicolons",
            "No data types",
            "Type can change at runtime",
            "Runs only in browser"
        ],
        correctOption: 2
    }
];

export const jsLogicQuestions = [
    // Scope & Hoisting
    {
        queNo: 1,
        queText: "What will be the output of accessing a var variable before its declaration?",
        queOptions: ["ReferenceError", "undefined", "null", "SyntaxError"],
        correctOption: 1
    },
    {
        queNo: 2,
        queText: "Which keyword is block-scoped?",
        queOptions: ["var", "let", "function", "this"],
        correctOption: 1
    },
    {
        queNo: 3,
        queText: "What happens when you access a let variable before declaration?",
        queOptions: ["undefined", "null", "ReferenceError", "0"],
        correctOption: 2
    },
    {
        queNo: 4,
        queText: "Which concept explains why functions can access variables outside their block?",
        queOptions: ["Hoisting", "Scoping", "Closure", "Callback"],
        correctOption: 2
    },

    // Arrays
    {
        queNo: 5,
        queText: "Which method modifies the original array?",
        queOptions: ["map()", "filter()", "slice()", "splice()"],
        correctOption: 3
    },
    {
        queNo: 6,
        queText: "What does arr.length return?",
        queOptions: [
            "Last index of array",
            "Total number of elements",
            "Index count starting from 1",
            "Memory size"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which method is best to transform each element of an array?",
        queOptions: ["forEach()", "map()", "reduce()", "some()"],
        correctOption: 1
    },
    {
        queNo: 8,
        queText: "What will [].push(10) return?",
        queOptions: ["10", "[10]", "1", "undefined"],
        correctOption: 2
    },

    // DOM Manipulation
    {
        queNo: 9,
        queText: "Which method selects the first matching element?",
        queOptions: [
            "getElementsByClassName",
            "querySelector",
            "querySelectorAll",
            "getElementById"
        ],
        correctOption: 1
    },
    {
        queNo: 10,
        queText: "How do you change text inside an element?",
        queOptions: ["innerHTML", "innerText", "textContent", "All of the above"],
        correctOption: 3
    },
    {
        queNo: 11,
        queText: "Which property is safer against XSS attacks?",
        queOptions: ["innerHTML", "innerText", "outerHTML", "insertHTML"],
        correctOption: 1
    },
    {
        queNo: 12,
        queText: "What does document.createElement() do?",
        queOptions: [
            "Creates and appends an element",
            "Creates an element in memory",
            "Creates and renders instantly",
            "Clones an element"
        ],
        correctOption: 1
    },

    // Events
    {
        queNo: 13,
        queText: "Which method is used to attach an event listener?",
        queOptions: ["onClick()", "addEvent()", "addEventListener()", "listen()"],
        correctOption: 2
    },
    {
        queNo: 14,
        queText: "What is event bubbling?",
        queOptions: [
            "Event moves from parent to child",
            "Event moves from child to parent",
            "Event repeats automatically",
            "Event stops immediately"
        ],
        correctOption: 1
    },
    {
        queNo: 15,
        queText: "How do you stop event propagation?",
        queOptions: [
            "event.preventDefault()",
            "event.stop()",
            "event.stopPropagation()",
            "return false"
        ],
        correctOption: 2
    },
    {
        queNo: 16,
        queText: "Which event triggers when a user types in an input field?",
        queOptions: ["click", "change", "input", "submit"],
        correctOption: 2
    },

    // Mixed Logic
    {
        queNo: 17,
        queText: "What will typeof NaN return?",
        queOptions: ["NaN", "number", "undefined", "object"],
        correctOption: 1
    },
    {
        queNo: 18,
        queText: "Which value is falsy?",
        queOptions: ["'0'", "[]", "{}", "0"],
        correctOption: 3
    },
    {
        queNo: 19,
        queText: "What does === check?",
        queOptions: [
            "Value only",
            "Type only",
            "Value and type",
            "Reference only"
        ],
        correctOption: 2
    },
    {
        queNo: 20,
        queText: "Which statement best describes JavaScript?",
        queOptions: [
            "Compiled language",
            "Statically typed",
            "Single-threaded with event loop",
            "Multi-threaded"
        ],
        correctOption: 2
    }
];

export const jsAdvanceQuestions = [
    // Closures & Objects
    {
        queNo: 1,
        queText: "What is a closure in JavaScript?",
        queOptions: [
            "A function inside another function",
            "A function that remembers its outer scope",
            "A block-scoped variable",
            "An object method"
        ],
        correctOption: 1
    },
    {
        queNo: 2,
        queText: "Which scenario best represents a closure?",
        queOptions: [
            "Accessing global variables",
            "Returning a function that uses outer variables",
            "Calling a function immediately",
            "Using this keyword"
        ],
        correctOption: 1
    },
    {
        queNo: 3,
        queText: "How are objects passed in JavaScript?",
        queOptions: ["By value", "By reference", "By copy", "By pointer"],
        correctOption: 1
    },
    {
        queNo: 4,
        queText: "What does Object.freeze() do?",
        queOptions: [
            "Prevents adding new properties only",
            "Prevents deletion only",
            "Makes object completely immutable",
            "Freezes prototype chain"
        ],
        correctOption: 2
    },
    {
        queNo: 5,
        queText: "What will typeof {} return?",
        queOptions: ["object", "array", "function", "null"],
        correctOption: 0
    },

    // Event Loop
    {
        queNo: 6,
        queText: "What is the role of the event loop?",
        queOptions: [
            "Execute JS faster",
            "Manage async callbacks",
            "Handle memory allocation",
            "Compile JavaScript"
        ],
        correctOption: 1
    },
    {
        queNo: 7,
        queText: "Which goes to the microtask queue?",
        queOptions: [
            "setTimeout",
            "setInterval",
            "Promise.then",
            "DOM events"
        ],
        correctOption: 2
    },
    {
        queNo: 8,
        queText: "Which executes first?",
        queOptions: [
            "setTimeout callback",
            "Promise callback",
            "DOM event",
            "All at same time"
        ],
        correctOption: 1
    },
    {
        queNo: 9,
        queText: "What happens when the call stack is blocked?",
        queOptions: [
            "Async tasks stop",
            "Event loop crashes",
            "UI freezes",
            "Browser reloads"
        ],
        correctOption: 2
    },
    {
        queNo: 10,
        queText: "JavaScript is non-blocking because of?",
        queOptions: [
            "Multithreading",
            "Event loop",
            "Async/await",
            "Promises"
        ],
        correctOption: 1
    },

    // Async & Promises
    {
        queNo: 11,
        queText: "What does a Promise represent?",
        queOptions: [
            "A value",
            "A future value",
            "A callback",
            "A function"
        ],
        correctOption: 1
    },
    {
        queNo: 12,
        queText: "Which Promise state means success?",
        queOptions: ["pending", "resolved", "fulfilled", "completed"],
        correctOption: 2
    },
    {
        queNo: 13,
        queText: "What does async keyword return?",
        queOptions: [
            "Value",
            "Callback",
            "Promise",
            "Function"
        ],
        correctOption: 2
    },
    {
        queNo: 14,
        queText: "What does await do?",
        queOptions: [
            "Stops entire program",
            "Blocks event loop",
            "Pauses async function execution",
            "Converts sync to async"
        ],
        correctOption: 2
    },
    {
        queNo: 15,
        queText: "Which handles multiple promises in parallel?",
        queOptions: [
            "Promise.all",
            "Promise.race",
            "Promise.any",
            "All of the above"
        ],
        correctOption: 3
    },

    // Error Handling
    {
        queNo: 16,
        queText: "Which block is used to handle errors?",
        queOptions: ["catch", "error", "throw", "handle"],
        correctOption: 0
    },
    {
        queNo: 17,
        queText: "What does finally block do?",
        queOptions: [
            "Runs only on error",
            "Runs only on success",
            "Always runs",
            "Stops execution"
        ],
        correctOption: 2
    },
    {
        queNo: 18,
        queText: "How do you create a custom error?",
        queOptions: [
            "throw new Error()",
            "console.error()",
            "return Error",
            "new Exception()"
        ],
        correctOption: 0
    },
    {
        queNo: 19,
        queText: "Unhandled promise rejection causes?",
        queOptions: [
            "Silent failure",
            "Crash",
            "Unexpected bugs",
            "All of the above"
        ],
        correctOption: 3
    },
    {
        queNo: 20,
        queText: "try/catch works with async code when?",
        queOptions: [
            "Using setTimeout",
            "Using callbacks",
            "Using await",
            "Using then()"
        ],
        correctOption: 2
    },

    // Mixed Advanced Logic
    {
        queNo: 21,
        queText: "What is this inside an arrow function?",
        queOptions: [
            "Dynamic",
            "Global always",
            "Lexically scoped",
            "Undefined"
        ],
        correctOption: 2
    },
    {
        queNo: 22,
        queText: "Which creates a deep copy?",
        queOptions: [
            "Object.assign",
            "Spread operator",
            "JSON.parse(JSON.stringify())",
            "Reference assignment"
        ],
        correctOption: 2
    },
    {
        queNo: 23,
        queText: "Which keyword prevents reassignment?",
        queOptions: ["var", "let", "const", "static"],
        correctOption: 2
    },
    {
        queNo: 24,
        queText: "What is a memory leak?",
        queOptions: [
            "Unused variables",
            "Unreleased references",
            "Garbage collector bug",
            "Syntax error"
        ],
        correctOption: 1
    },
    {
        queNo: 25,
        queText: "Which pattern avoids callback hell?",
        queOptions: [
            "Closures",
            "Promises",
            "Hoisting",
            "IIFE"
        ],
        correctOption: 1
    },
    {
        queNo: 26,
        queText: "What does debounce do?",
        queOptions: [
            "Runs function repeatedly",
            "Limits execution rate",
            "Delays execution until inactivity",
            "Stops execution"
        ],
        correctOption: 2
    },
    {
        queNo: 27,
        queText: "Throttle is best used for?",
        queOptions: [
            "Search input",
            "Scroll events",
            "API calls",
            "Form submit"
        ],
        correctOption: 1
    },
    {
        queNo: 28,
        queText: "Which is NOT a primitive?",
        queOptions: ["string", "number", "object", "boolean"],
        correctOption: 2
    },
    {
        queNo: 29,
        queText: "What does === avoid?",
        queOptions: [
            "Type coercion",
            "Comparison",
            "Execution",
            "Reference check"
        ],
        correctOption: 0
    },
    {
        queNo: 30,
        queText: "Mastering this level means?",
        queOptions: [
            "You know JS syntax",
            "You can build real apps",
            "You memorized answers",
            "You watched tutorials"
        ],
        correctOption: 1
    }
];