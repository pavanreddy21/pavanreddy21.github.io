"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ experience),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/mdx.js + 1 modules
var mdx = __webpack_require__(9698);
// EXTERNAL MODULE: ./data/siteMetadata.json
var siteMetadata = __webpack_require__(3403);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(8590);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layouts/ListLayoutJob.js
/* eslint-disable prettier/prettier */ 


function ListLayoutJob({ posts , title  }) {
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)("");
    const filteredBlogPosts = posts.filter((frontMatter)=>{
        const searchContent = frontMatter.title + frontMatter.startdate + frontMatter.enddate + frontMatter.location + frontMatter.summary + frontMatter.tags.join(" ");
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pt-6 pb-8 space-y-2 md:space-y-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        !filteredBlogPosts.length && "Sorry. No results found.",
                        filteredBlogPosts.map((frontMatter)=>{
                            const { slug , date , title , startdate , location , enddate , summary , designation , tags  } = frontMatter;
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                    className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: [
                                                        startdate,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " - "
                                                        }),
                                                        enddate,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        location
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-3 xl:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-2xl font-bold leading-8 tracking-tight",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                className: "text-gray-900 dark:text-gray-100",
                                                                children: title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "prose font-bold text-green-500 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-blue-400 max-w-none ",
                                                            children: designation
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "prose text-gray-500 max-w-none dark:text-gray-400",
                                                    children: summary.split("\n").map((line, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: line
                                                        }, index))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, slug);
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/experience.js





async function getStaticProps() {
    const posts = await (0,mdx/* getAllFilesFrontMatter */.sj)("jobs");
    return {
        props: {
            posts
        }
    };
}
function experience({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* PageSeo */.Is, {
                title: `Experience${siteMetadata/* author */.v}`,
                description: siteMetadata/* description */.WL,
                url: `${siteMetadata/* siteUrl */.or}/experience`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ListLayoutJob, {
                posts: posts,
                title: "Experience"
            })
        ]
    });
}


/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ 3354:
/***/ ((module) => {

module.exports = require("next-mdx-remote/render-to-string");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 9015:
/***/ ((module) => {

module.exports = require("rehype-katex");

/***/ }),

/***/ 7546:
/***/ ((module) => {

module.exports = require("remark-autolink-headings");

/***/ }),

/***/ 7275:
/***/ ((module) => {

module.exports = require("remark-code-titles");

/***/ }),

/***/ 8042:
/***/ ((module) => {

module.exports = require("remark-math");

/***/ }),

/***/ 7456:
/***/ ((module) => {

module.exports = require("remark-slug");

/***/ }),

/***/ 4704:
/***/ ((module) => {

module.exports = require("unist-util-visit");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,590,373,698], () => (__webpack_exec__(222)));
module.exports = __webpack_exports__;

})();