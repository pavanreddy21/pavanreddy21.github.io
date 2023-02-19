"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 2001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4373);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3403);



const MDXComponents = {
    Image: (next_image__WEBPACK_IMPORTED_MODULE_0___default()),
    a: _Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXComponents);


/***/ }),

/***/ 874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const visit = __webpack_require__(4704);
const sizeOf = __webpack_require__(7219);
const fs = __webpack_require__(7147);
module.exports = (options)=>(tree)=>{
        visit(tree, // only visit p tags that contain an img element
        (node)=>node.type === "paragraph" && node.children.some((n)=>n.type === "image"), (node)=>{
            const imageNode = node.children.find((n)=>n.type === "image");
            // only local files
            if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
                const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`);
                // Convert original node to next/image
                imageNode.type = "jsx";
                imageNode.value = `<Image
          alt={\`${imageNode.alt}\`} 
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
      />`;
                // Change node type from p to div to avoid nesting error
                node.type = "div";
                node.children = [
                    imageNode
                ];
            }
        });
    };


/***/ }),

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sj": () => (/* binding */ getAllFilesFrontMatter)
});

// UNUSED EXPORTS: dateSortDesc, formatSlug, getFileBySlug, getFiles

// EXTERNAL MODULE: ./components/MDXComponents.js
var components_MDXComponents = __webpack_require__(2001);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "next-mdx-remote/render-to-string"
var render_to_string_ = __webpack_require__(3354);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "reading-time"
var external_reading_time_ = __webpack_require__(4956);
// EXTERNAL MODULE: external "unist-util-visit"
var external_unist_util_visit_ = __webpack_require__(4704);
// EXTERNAL MODULE: ./lib/img-to-jsx.js
var img_to_jsx = __webpack_require__(874);
;// CONCATENATED MODULE: ./lib/utils/files.js


const pipe = (...fns)=>(x)=>fns.reduce((v, f)=>f(v), x);
const flatternArray = (input)=>input.reduce((acc, item)=>[
            ...acc,
            ...Array.isArray(item) ? item : [
                item
            ]
        ], []);
const map = (fn)=>(input)=>input.map(fn);
const walkDir = (fullPath)=>{
    return external_fs_default().statSync(fullPath).isFile() ? fullPath : files_getAllFilesRecursively(fullPath);
};
const pathJoinPrefix = (prefix)=>(extraPath)=>external_path_default().join(prefix, extraPath);
const files_getAllFilesRecursively = (folder)=>pipe((external_fs_default()).readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flatternArray)(folder);
/* harmony default export */ const utils_files = (files_getAllFilesRecursively);

;// CONCATENATED MODULE: ./lib/mdx.js
/* eslint-disable prettier/prettier */ 








const root = process.cwd();
const tokenClassNames = {
    tag: "text-code-red",
    "attr-name": "text-code-yellow",
    "attr-value": "text-code-green",
    deleted: "text-code-red",
    inserted: "text-code-green",
    punctuation: "text-code-white",
    keyword: "text-code-purple",
    string: "text-code-green",
    function: "text-code-blue",
    boolean: "text-code-red",
    comment: "text-gray-400 italic"
};
function getFiles(type) {
    const prefixPaths = path.join(root, "data", type);
    const files = getAllFilesRecursively(prefixPaths);
    // Only want to return blog/path and ignore root
    return files.map((file)=>file.slice(prefixPaths.length + 1));
}
function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, "");
}
function dateSortDesc(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
async function getFileBySlug(type, slug) {
    const mdxPath = path.join(root, "data", type, `${slug.join("/")}.mdx`);
    const mdPath = path.join(root, "data", type, `${slug.join("/")}.md`);
    const source = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, "utf8") : fs.readFileSync(mdPath, "utf8");
    const { data , content  } = matter(source);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                __webpack_require__(7456),
                __webpack_require__(7546),
                __webpack_require__(7275),
                __webpack_require__(8042),
                imgToJsx, 
            ],
            inlineNotes: true,
            rehypePlugins: [
                __webpack_require__(9015),
                __webpack_require__(5780),
                ()=>{
                    return (tree)=>{
                        visit(tree, "element", (node, index, parent)=>{
                            let [token, type] = node.properties.className || [];
                            if (token === "token") {
                                node.properties.className = [
                                    tokenClassNames[type]
                                ];
                            }
                        });
                    };
                }, 
            ]
        }
    });
    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
            ...data
        }
    };
}
async function getAllFilesFrontMatter(folder) {
    const prefixPaths = external_path_default().join(root, "data", folder);
    const files = utils_files(prefixPaths);
    const allFrontMatter = [];
    files.forEach((file)=>{
        const fileName = file.slice(prefixPaths.length + 1);
        const source = external_fs_default().readFileSync(file, "utf8");
        const { data  } = external_gray_matter_default()(source);
        if (data.draft !== true) {
            allFrontMatter.push({
                ...data,
                slug: formatSlug(fileName)
            });
        }
    });
    return allFrontMatter.sort((a, b)=>dateSortDesc(a.date, b.date));
}


/***/ })

};
;