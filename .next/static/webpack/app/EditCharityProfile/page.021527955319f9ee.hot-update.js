"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/EditCharityProfile/page",{

/***/ "(app-pages-browser)/./app/components/EditCharityProfileForm.jsx":
/*!***************************************************!*\
  !*** ./app/components/EditCharityProfileForm.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-SQHIVJIX.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EditCharityProfileForm = ()=>{\n    _s();\n    const [charityData, setCharityData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        charityName: \"\",\n        charityDescription: \"\",\n        charityLocation: \"\",\n        charityWebsite: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCharityData = async ()=>{\n            try {\n                const params = new URLSearchParams(window.location.search);\n                const charityId = params.get(\"id\");\n                const response = await fetch(\"../api/getCharity?id=\".concat(charityId));\n                if (response.ok) {\n                    const charity = await response.json();\n                    setCharityData(charity);\n                } else {\n                    console.error(\"Failed to fetch charity\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching charity:\", error);\n            }\n        };\n        fetchCharityData();\n    }, []);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setCharityData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleUpdateCharity = async ()=>{\n        try {\n            const response = await fetch(\"../api/updateCharityRoute\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(charityData)\n            });\n            if (response.ok) {\n                console.log(\"Charity updated successfully\");\n                window.location.href = \"/CharityHomePage\";\n            } else {\n                console.error(\"Error updating charity\");\n            }\n        } catch (error) {\n            console.error(\"Error updating charity:\", error);\n        }\n    };\n    // Render the component only if charityData has been populated\n    if (!charityData.id) {\n        return null; // Or render a loading indicator\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-center mb-4\",\n                    children: \"Edit Information\"\n                }, void 0, false, {\n                    fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.textarea_default, {\n                            label: \"Name\",\n                            placeholder: \"Enter your Charity here\",\n                            name: \"charityName\",\n                            value: charityData.charityName,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.textarea_default, {\n                            label: \"Description\",\n                            placeholder: \"Enter your description here\",\n                            name: \"charityDescription\",\n                            value: charityData.charityDescription,\n                            onChange: handleChange,\n                            rows: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.textarea_default, {\n                            label: \"Location\",\n                            placeholder: \"Enter charity location here\",\n                            name: \"charityLocation\",\n                            value: charityData.charityLocation,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.textarea_default, {\n                            label: \"Website\",\n                            placeholder: \"Enter charity website here\",\n                            name: \"charityWebsite\",\n                            value: charityData.charityWebsite,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.button_default, {\n                    color: \"primary\",\n                    size: \"lg\",\n                    onClick: handleUpdateCharity,\n                    className: \"w-full mt-6\",\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/matildadeakin/Documents/Year 3/Team project /volunteer-app/app/components/EditCharityProfileForm.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditCharityProfileForm, \"768Gy+ucMwtzIcAOOM3+ucQsV3Y=\");\n_c = EditCharityProfileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditCharityProfileForm);\nvar _c;\n$RefreshReg$(_c, \"EditCharityProfileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0VkaXRDaGFyaXR5UHJvZmlsZUZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ0U7QUFFckQsTUFBTUsseUJBQXlCOztJQUM3QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7UUFDN0NPLElBQUk7UUFDSkMsYUFBYTtRQUNiQyxvQkFBb0I7UUFDcEJDLGlCQUFpQjtRQUNqQkMsZ0JBQWdCO0lBQ2xCO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTUMsU0FBUyxJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtnQkFDekQsTUFBTUMsWUFBWUwsT0FBT00sR0FBRyxDQUFDO2dCQUU3QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0JBQWtDLE9BQVZIO2dCQUNyRCxJQUFJRSxTQUFTRSxFQUFFLEVBQUU7b0JBQ2YsTUFBTUMsVUFBVSxNQUFNSCxTQUFTSSxJQUFJO29CQUNuQ2xCLGVBQWVpQjtnQkFDakIsT0FBTztvQkFDTEUsUUFBUUMsS0FBSyxDQUFDO2dCQUNoQjtZQUNGLEVBQUUsT0FBT0EsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBZDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1lLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDekIsZUFBZTBCLENBQUFBLFdBQWE7Z0JBQzFCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxNQUFNRyxzQkFBc0I7UUFDMUIsSUFBSTtZQUNGLE1BQU1iLFdBQVcsTUFBTUMsTUFBTSw2QkFBNkI7Z0JBQ3hEYSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2pDO1lBQ3ZCO1lBRUEsSUFBSWUsU0FBU0UsRUFBRSxFQUFFO2dCQUNmRyxRQUFRYyxHQUFHLENBQUM7Z0JBQ1p4QixPQUFPQyxRQUFRLENBQUN3QixJQUFJLEdBQUc7WUFDekIsT0FBTztnQkFDTGYsUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSw4REFBOEQ7SUFDOUQsSUFBSSxDQUFDckIsWUFBWUUsRUFBRSxFQUFFO1FBQ25CLE9BQU8sTUFBTSxnQ0FBZ0M7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ2tDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBc0M7Ozs7Ozs4QkFDcEQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3hDLCtEQUFRQTs0QkFDUDBDLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1poQixNQUFLOzRCQUNMQyxPQUFPekIsWUFBWUcsV0FBVzs0QkFDOUJzQyxVQUFVbkI7Ozs7OztzQ0FFWiw4REFBQ3pCLCtEQUFRQTs0QkFDUDBDLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1poQixNQUFLOzRCQUNMQyxPQUFPekIsWUFBWUksa0JBQWtCOzRCQUNyQ3FDLFVBQVVuQjs0QkFDVm9CLE1BQU07Ozs7OztzQ0FFUiw4REFBQzdDLCtEQUFRQTs0QkFDUDBDLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1poQixNQUFLOzRCQUNMQyxPQUFPekIsWUFBWUssZUFBZTs0QkFDbENvQyxVQUFVbkI7Ozs7OztzQ0FFWiw4REFBQ3pCLCtEQUFRQTs0QkFDUDBDLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1poQixNQUFLOzRCQUNMQyxPQUFPekIsWUFBWU0sY0FBYzs0QkFDakNtQyxVQUFVbkI7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ3hCLDZEQUFNQTtvQkFDTDZDLE9BQU07b0JBQ05DLE1BQUs7b0JBQ0xDLFNBQVNqQjtvQkFDVFMsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTlHTXRDO0tBQUFBO0FBZ0hOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdENoYXJpdHlQcm9maWxlRm9ybS5qc3g/OTMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0YXJlYSwgQnV0dG9uIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xuXG5jb25zdCBFZGl0Q2hhcml0eVByb2ZpbGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbY2hhcml0eURhdGEsIHNldENoYXJpdHlEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogJycsXG4gICAgY2hhcml0eU5hbWU6ICcnLFxuICAgIGNoYXJpdHlEZXNjcmlwdGlvbjogJycsXG4gICAgY2hhcml0eUxvY2F0aW9uOiAnJyxcbiAgICBjaGFyaXR5V2Vic2l0ZTogJycsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDaGFyaXR5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IGNoYXJpdHlJZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL2dldENoYXJpdHk/aWQ9JHtjaGFyaXR5SWR9YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGNoYXJpdHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0Q2hhcml0eURhdGEoY2hhcml0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIGNoYXJpdHknKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2hhcml0eTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQ2hhcml0eURhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Q2hhcml0eURhdGEocHJldkRhdGEgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlQ2hhcml0eSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi4vYXBpL3VwZGF0ZUNoYXJpdHlSb3V0ZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoYXJpdHlEYXRhKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYXJpdHkgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL0NoYXJpdHlIb21lUGFnZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjaGFyaXR5Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNoYXJpdHk6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCBvbmx5IGlmIGNoYXJpdHlEYXRhIGhhcyBiZWVuIHBvcHVsYXRlZFxuICBpZiAoIWNoYXJpdHlEYXRhLmlkKSB7XG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJlbmRlciBhIGxvYWRpbmcgaW5kaWNhdG9yXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTRcIj5FZGl0IEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgQ2hhcml0eSBoZXJlXCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Y2hhcml0eURhdGEuY2hhcml0eU5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBkZXNjcmlwdGlvbiBoZXJlXCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e2NoYXJpdHlEYXRhLmNoYXJpdHlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICBsYWJlbD1cIkxvY2F0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2hhcml0eSBsb2NhdGlvbiBoZXJlXCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5TG9jYXRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e2NoYXJpdHlEYXRhLmNoYXJpdHlMb2NhdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIGxhYmVsPVwiV2Vic2l0ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNoYXJpdHkgd2Vic2l0ZSBoZXJlXCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5V2Vic2l0ZVwiXG4gICAgICAgICAgICB2YWx1ZT17Y2hhcml0eURhdGEuY2hhcml0eVdlYnNpdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZUNoYXJpdHl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTZcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBkYXRlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0Q2hhcml0eVByb2ZpbGVGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsIkVkaXRDaGFyaXR5UHJvZmlsZUZvcm0iLCJjaGFyaXR5RGF0YSIsInNldENoYXJpdHlEYXRhIiwiaWQiLCJjaGFyaXR5TmFtZSIsImNoYXJpdHlEZXNjcmlwdGlvbiIsImNoYXJpdHlMb2NhdGlvbiIsImNoYXJpdHlXZWJzaXRlIiwiZmV0Y2hDaGFyaXR5RGF0YSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiY2hhcml0eUlkIiwiZ2V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiY2hhcml0eSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJoYW5kbGVVcGRhdGVDaGFyaXR5IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicm93cyIsImNvbG9yIiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/EditCharityProfileForm.jsx\n"));

/***/ })

});