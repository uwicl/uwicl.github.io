const COMPONENT_HEADER = [
    "<p>LIS351 Study Resource</p>",
    "<nav>",
    "    <span>",
    "        <a href=\"/\">Home</a>",
    "    </span>",
    "    <span>",
    "        <a href=\"/html\">HTML</a>",
    "    </span>",
    "    <span>",
    "        <a href=\"/css\">CSS</a>",
    "    </span>",
    "    <span>",
    "        <a href=\"/javascript\">Javascript</a>",
    "    </span>",
    "</nav>",
    "<a class=\"login\" href=\"/login\">Login</a>",
];

const COMPONENT_FOOTER = [
    "<div class=\"footer_category footer_logo\">",
    "    <a href=\"https://www.wisc.edu/\">",
    "        <img src=\"/images/uw-logo.svg\" alt=\"UW-Madison's full institutional logo in horizontal orientation\">",
    "        <p>© 2025 The Board of Regents of the University of Wisconsin System</p>",
    "    </a>",
    "</div>",
    "<div class=\"footer_category\">",
    "    <h2>Notes</h2>",
    "    <ul>",
    "        <li><a href=\"/html\">HTML</a></li>",
    "        <li><a href=\"/css\">CSS</a></li>",
    "        <li><a href=\"/js\">JS</a></li>",
    "    </ul>",
    "</div>",
    "<div class=\"footer_category\">",
    "    <h2>Other</h2>",
    "    <ul>",
    "        <li><a href=\"/\">Home</a></li>",
    "        <li><a href=\"/login\">Login</a></li>",
    "    </ul>",
    "</div>",
]

const load_exist = (selector, template) => {
    const load_target = document.querySelector(selector);
    if (load_target === null) return;
    load_target.innerHTML = template.join("");
};

// load components if exist
window.addEventListener("load", () => {
    load_exist("header", COMPONENT_HEADER);
    load_exist("footer", COMPONENT_FOOTER);
});