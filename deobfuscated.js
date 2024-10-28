/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(r, f) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = r.document ? f(r, !0) : function(r) {
        if (!r.document) throw new Error("jQuery requires a window with a document");
        return f(r);
    } : f(r);
}("undefined" != typeof window ? window : this, (function(r, f) {
    "use strict";
    var g = [], b = Object.getPrototypeOf, w = g.slice, C = g.flat ? function(r) {
        return g.flat.call(r);
    } : function(r) {
        return g.concat.apply([], r);
    }, S = g.push, k = g.indexOf, E = {}, j = E.toString, D = E.hasOwnProperty, H = D.toString, O = H.call(Object), M = {}, v = function(r) {
        return "function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item;
    }, y = function(r) {
        return null != r && r === r.window;
    }, ie = r.document, oe = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(r, f, g) {
        var b, w, C = (g = g || ie).createElement("script");
        if (C.text = r, f) for (b in oe) (w = f[b] || f.getAttribute && f.getAttribute(b)) && C.setAttribute(b, w);
        g.head.appendChild(C).parentNode.removeChild(C);
    }
    function x(r) {
        return null == r ? r + "" : "object" == typeof r || "function" == typeof r ? E[j.call(r)] || "object" : typeof r;
    }
    var ae = "3.7.0", se = /HTML$/i, ce = function(r, f) {
        return new ce.fn.init(r, f);
    };
    function c(r) {
        var f = !!r && "length" in r && r.length, g = x(r);
        return !v(r) && !y(r) && ("array" === g || 0 === f || "number" == typeof f && 0 < f && f - 1 in r);
    }
    function fe(r, f) {
        return r.nodeName && r.nodeName.toLowerCase() === f.toLowerCase();
    }
    ce.fn = ce.prototype = {
        jquery: ae,
        constructor: ce,
        length: 0,
        toArray: function() {
            return w.call(this);
        },
        get: function(r) {
            return null == r ? w.call(this) : r < 0 ? this[r + this.length] : this[r];
        },
        pushStack: function(r) {
            var f = ce.merge(this.constructor(), r);
            return f.prevObject = this, f;
        },
        each: function(r) {
            return ce.each(this, r);
        },
        map: function(r) {
            return this.pushStack(ce.map(this, (function(f, g) {
                return r.call(f, g, f);
            })));
        },
        slice: function() {
            return this.pushStack(w.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(ce.grep(this, (function(r, f) {
                return (f + 1) % 2;
            })));
        },
        odd: function() {
            return this.pushStack(ce.grep(this, (function(r, f) {
                return f % 2;
            })));
        },
        eq: function(r) {
            var f = this.length, g = +r + (r < 0 ? f : 0);
            return this.pushStack(0 <= g && g < f ? [ this[g] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: S,
        sort: g.sort,
        splice: g.splice
    }, ce.extend = ce.fn.extend = function() {
        var r, f, g, b, w, C, S = arguments[0] || {}, k = 1, E = arguments.length, j = !1;
        for ("boolean" == typeof S && (j = S, S = arguments[k] || {}, k++), "object" == typeof S || v(S) || (S = {}), 
        k === E && (S = this, k--); k < E; k++) if (null != (r = arguments[k])) for (f in r) b = r[f], 
        "__proto__" !== f && S !== b && (j && b && (ce.isPlainObject(b) || (w = Array.isArray(b))) ? (g = S[f], 
        C = w && !Array.isArray(g) ? [] : w || ce.isPlainObject(g) ? g : {}, w = !1, S[f] = ce.extend(j, C, b)) : void 0 !== b && (S[f] = b));
        return S;
    }, ce.extend({
        expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(r) {
            throw new Error(r);
        },
        noop: function() {},
        isPlainObject: function(r) {
            var f, g;
            return !(!r || "[object Object]" !== j.call(r)) && (!(f = b(r)) || "function" == typeof (g = D.call(f, "constructor") && f.constructor) && H.call(g) === O);
        },
        isEmptyObject: function(r) {
            var f;
            for (f in r) return !1;
            return !0;
        },
        globalEval: function(r, f, g) {
            m(r, {
                nonce: f && f.nonce
            }, g);
        },
        each: function(r, f) {
            var g, b = 0;
            if (c(r)) {
                for (g = r.length; b < g; b++) if (!1 === f.call(r[b], b, r[b])) break;
            } else for (b in r) if (!1 === f.call(r[b], b, r[b])) break;
            return r;
        },
        text: function(r) {
            var f, g = "", b = 0, w = r.nodeType;
            if (w) {
                if (1 === w || 9 === w || 11 === w) return r.textContent;
                if (3 === w || 4 === w) return r.nodeValue;
            } else while (f = r[b++]) g += ce.text(f);
            return g;
        },
        makeArray: function(r, f) {
            var g = f || [];
            return null != r && (c(Object(r)) ? ce.merge(g, "string" == typeof r ? [ r ] : r) : S.call(g, r)), 
            g;
        },
        inArray: function(r, f, g) {
            return null == f ? -1 : k.call(f, r, g);
        },
        isXMLDoc: function(r) {
            var f = r && r.namespaceURI, g = r && (r.ownerDocument || r).documentElement;
            return !se.test(f || g && g.nodeName || "HTML");
        },
        merge: function(r, f) {
            for (var g = +f.length, b = 0, w = r.length; b < g; b++) r[w++] = f[b];
            return r.length = w, r;
        },
        grep: function(r, f, g) {
            for (var b = [], w = 0, C = r.length, S = !g; w < C; w++) !f(r[w], w) !== S && b.push(r[w]);
            return b;
        },
        map: function(r, f, g) {
            var b, w, S = 0, k = [];
            if (c(r)) for (b = r.length; S < b; S++) null != (w = f(r[S], S, g)) && k.push(w); else for (S in r) null != (w = f(r[S], S, g)) && k.push(w);
            return C(k);
        },
        guid: 1,
        support: M
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = g[Symbol.iterator]), 
    ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(r, f) {
        E["[object " + f + "]"] = f.toLowerCase();
    }));
    var ue = g.pop, le = g.sort, pe = g.splice, de = "[\\x20\\t\\r\\n\\f]", he = new RegExp("^" + de + "+|((?:^|[^\\\\])(?:\\\\.)*)" + de + "+$", "g");
    ce.contains = function(r, f) {
        var g = f && f.parentNode;
        return r === g || !(!g || 1 !== g.nodeType || !(r.contains ? r.contains(g) : r.compareDocumentPosition && 16 & r.compareDocumentPosition(g)));
    };
    var ge = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function p(r, f) {
        return f ? "\0" === r ? "�" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r;
    }
    ce.escapeSelector = function(r) {
        return (r + "").replace(ge, p);
    };
    var ye = ie, ve = S;
    !function() {
        var f, b, C, S, E, j, H, O, ie, oe, ae = ve, se = ce.expando, ge = 0, me = 0, xe = W(), be = W(), we = W(), Te = W(), l = function(r, f) {
            return r === f && (E = !0), 0;
        }, Ce = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ke = "(?:\\\\[\\da-fA-F]{1,6}" + de + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", je = "\\[" + de + "*(" + ke + ")(?:" + de + "*([*^$|!~]?=)" + de + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ke + "))|)" + de + "*\\]", De = ":(" + ke + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + je + ")*)|.*)\\)|)", Oe = new RegExp(de + "+", "g"), Pe = new RegExp("^" + de + "*," + de + "*"), Re = new RegExp("^" + de + "*([>+~]|" + de + ")" + de + "*"), _e = new RegExp(de + "|>"), Ve = new RegExp(De), Xe = new RegExp("^" + ke + "$"), Qe = {
            ID: new RegExp("^#(" + ke + ")"),
            CLASS: new RegExp("^\\.(" + ke + ")"),
            TAG: new RegExp("^(" + ke + "|[*])"),
            ATTR: new RegExp("^" + je),
            PSEUDO: new RegExp("^" + De),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + de + "*(even|odd|(([+-]|)(\\d*)n|)" + de + "*(?:([+-]|)" + de + "*(\\d+)|))" + de + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Ce + ")$", "i"),
            needsContext: new RegExp("^" + de + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + de + "*((?:-\\d)?\\d*)" + de + "*\\)|)(?=[^-]|$)", "i")
        }, Je = /^(?:input|select|textarea|button)$/i, Ke = /^h\d$/i, et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, nt = new RegExp("\\\\[\\da-fA-F]{1,6}" + de + "?|\\\\([^\\r\\n\\f])", "g"), P = function(r, f) {
            var g = "0x" + r.slice(1) - 65536;
            return f || (g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, 1023 & g | 56320));
        }, R = function() {
            V();
        }, st = J((function(r) {
            return !0 === r.disabled && fe(r, "fieldset");
        }), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            ae.apply(g = w.call(ye.childNodes), ye.childNodes), g[ye.childNodes.length].nodeType;
        } catch (f) {
            ae = {
                apply: function(r, f) {
                    ve.apply(r, w.call(f));
                },
                call: function(r) {
                    ve.apply(r, w.call(arguments, 1));
                }
            };
        }
        function I(r, f, g, b) {
            var w, C, S, k, E, D, H, oe = f && f.ownerDocument, ue = f ? f.nodeType : 9;
            if (g = g || [], "string" != typeof r || !r || 1 !== ue && 9 !== ue && 11 !== ue) return g;
            if (!b && (V(f), f = f || j, O)) {
                if (11 !== ue && (E = et.exec(r))) if (w = E[1]) {
                    if (9 === ue) {
                        if (!(S = f.getElementById(w))) return g;
                        if (S.id === w) return ae.call(g, S), g;
                    } else if (oe && (S = oe.getElementById(w)) && I.contains(f, S) && S.id === w) return ae.call(g, S), 
                    g;
                } else {
                    if (E[2]) return ae.apply(g, f.getElementsByTagName(r)), g;
                    if ((w = E[3]) && f.getElementsByClassName) return ae.apply(g, f.getElementsByClassName(w)), 
                    g;
                }
                if (!(Te[r + " "] || ie && ie.test(r))) {
                    if (H = r, oe = f, 1 === ue && (_e.test(r) || Re.test(r))) {
                        (oe = tt.test(r) && z(f.parentNode) || f) == f && M.scope || ((k = f.getAttribute("id")) ? k = ce.escapeSelector(k) : f.setAttribute("id", k = se)), 
                        C = (D = Y(r)).length;
                        while (C--) D[C] = (k ? "#" + k : ":scope") + " " + Q(D[C]);
                        H = D.join(",");
                    }
                    try {
                        return ae.apply(g, oe.querySelectorAll(H)), g;
                    } catch (f) {
                        Te(r, !0);
                    } finally {
                        k === se && f.removeAttribute("id");
                    }
                }
            }
            return re(r.replace(he, "$1"), f, g, b);
        }
        function W() {
            var r = [];
            return function e(f, g) {
                return r.push(f + " ") > b.cacheLength && delete e[r.shift()], e[f + " "] = g;
            };
        }
        function F(r) {
            return r[se] = !0, r;
        }
        function $(r) {
            var f = j.createElement("fieldset");
            try {
                return !!r(f);
            } catch (r) {
                return !1;
            } finally {
                f.parentNode && f.parentNode.removeChild(f), f = null;
            }
        }
        function B(r) {
            return function(f) {
                return fe(f, "input") && f.type === r;
            };
        }
        function _(r) {
            return function(f) {
                return (fe(f, "input") || fe(f, "button")) && f.type === r;
            };
        }
        function X(r) {
            return function(f) {
                return "form" in f ? f.parentNode && !1 === f.disabled ? "label" in f ? "label" in f.parentNode ? f.parentNode.disabled === r : f.disabled === r : f.isDisabled === r || f.isDisabled !== !r && st(f) === r : f.disabled === r : "label" in f && f.disabled === r;
            };
        }
        function U(r) {
            return F((function(f) {
                return f = +f, F((function(g, b) {
                    var w, C = r([], g.length, f), S = C.length;
                    while (S--) g[w = C[S]] && (g[w] = !(b[w] = g[w]));
                }));
            }));
        }
        function z(r) {
            return r && "undefined" != typeof r.getElementsByTagName && r;
        }
        function V(r) {
            var f, g = r ? r.ownerDocument || r : ye;
            return g != j && 9 === g.nodeType && g.documentElement && (H = (j = g).documentElement, 
            O = !ce.isXMLDoc(j), oe = H.matches || H.webkitMatchesSelector || H.msMatchesSelector, 
            ye != j && (f = j.defaultView) && f.top !== f && f.addEventListener("unload", R), 
            M.getById = $((function(r) {
                return H.appendChild(r).id = ce.expando, !j.getElementsByName || !j.getElementsByName(ce.expando).length;
            })), M.disconnectedMatch = $((function(r) {
                return oe.call(r, "*");
            })), M.scope = $((function() {
                return j.querySelectorAll(":scope");
            })), M.cssHas = $((function() {
                try {
                    return j.querySelector(":has(*,:jqfake)"), !1;
                } catch (r) {
                    return !0;
                }
            })), M.getById ? (b.filter.ID = function(r) {
                var f = r.replace(nt, P);
                return function(r) {
                    return r.getAttribute("id") === f;
                };
            }, b.find.ID = function(r, f) {
                if ("undefined" != typeof f.getElementById && O) {
                    var g = f.getElementById(r);
                    return g ? [ g ] : [];
                }
            }) : (b.filter.ID = function(r) {
                var f = r.replace(nt, P);
                return function(r) {
                    var g = "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id");
                    return g && g.value === f;
                };
            }, b.find.ID = function(r, f) {
                if ("undefined" != typeof f.getElementById && O) {
                    var g, b, w, C = f.getElementById(r);
                    if (C) {
                        if ((g = C.getAttributeNode("id")) && g.value === r) return [ C ];
                        w = f.getElementsByName(r), b = 0;
                        while (C = w[b++]) if ((g = C.getAttributeNode("id")) && g.value === r) return [ C ];
                    }
                    return [];
                }
            }), b.find.TAG = function(r, f) {
                return "undefined" != typeof f.getElementsByTagName ? f.getElementsByTagName(r) : f.querySelectorAll(r);
            }, b.find.CLASS = function(r, f) {
                if ("undefined" != typeof f.getElementsByClassName && O) return f.getElementsByClassName(r);
            }, ie = [], $((function(r) {
                var f;
                H.appendChild(r).innerHTML = "<a id='" + se + "' href='' disabled='disabled'></a><select id='" + se + "-\r\\' disabled='disabled'><option selected=''></option></select>", 
                r.querySelectorAll("[selected]").length || ie.push("\\[" + de + "*(?:value|" + Ce + ")"), 
                r.querySelectorAll("[id~=" + se + "-]").length || ie.push("~="), r.querySelectorAll("a#" + se + "+*").length || ie.push(".#.+[+~]"), 
                r.querySelectorAll(":checked").length || ie.push(":checked"), (f = j.createElement("input")).setAttribute("type", "hidden"), 
                r.appendChild(f).setAttribute("name", "D"), H.appendChild(r).disabled = !0, 2 !== r.querySelectorAll(":disabled").length && ie.push(":enabled", ":disabled"), 
                (f = j.createElement("input")).setAttribute("name", ""), r.appendChild(f), r.querySelectorAll("[name='']").length || ie.push("\\[" + de + "*name" + de + "*=" + de + "*(?:''|\"\")");
            })), M.cssHas || ie.push(":has"), ie = ie.length && new RegExp(ie.join("|")), l = function(r, f) {
                if (r === f) return E = !0, 0;
                var g = !r.compareDocumentPosition - !f.compareDocumentPosition;
                return g || (1 & (g = (r.ownerDocument || r) == (f.ownerDocument || f) ? r.compareDocumentPosition(f) : 1) || !M.sortDetached && f.compareDocumentPosition(r) === g ? r === j || r.ownerDocument == ye && I.contains(ye, r) ? -1 : f === j || f.ownerDocument == ye && I.contains(ye, f) ? 1 : S ? k.call(S, r) - k.call(S, f) : 0 : 4 & g ? -1 : 1);
            }), j;
        }
        for (f in I.matches = function(r, f) {
            return I(r, null, null, f);
        }, I.matchesSelector = function(r, f) {
            if (V(r), O && !Te[f + " "] && (!ie || !ie.test(f))) try {
                var g = oe.call(r, f);
                if (g || M.disconnectedMatch || r.document && 11 !== r.document.nodeType) return g;
            } catch (r) {
                Te(f, !0);
            }
            return 0 < I(f, j, null, [ r ]).length;
        }, I.contains = function(r, f) {
            return (r.ownerDocument || r) != j && V(r), ce.contains(r, f);
        }, I.attr = function(r, f) {
            (r.ownerDocument || r) != j && V(r);
            var g = b.attrHandle[f.toLowerCase()], w = g && D.call(b.attrHandle, f.toLowerCase()) ? g(r, f, !O) : void 0;
            return void 0 !== w ? w : r.getAttribute(f);
        }, I.error = function(r) {
            throw new Error("Syntax error, unrecognized expression: " + r);
        }, ce.uniqueSort = function(r) {
            var f, g = [], b = 0, C = 0;
            if (E = !M.sortStable, S = !M.sortStable && w.call(r, 0), le.call(r, l), E) {
                while (f = r[C++]) f === r[C] && (b = g.push(C));
                while (b--) pe.call(r, g[b], 1);
            }
            return S = null, r;
        }, ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(w.apply(this)));
        }, (b = ce.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: Qe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(r) {
                    return r[1] = r[1].replace(nt, P), r[3] = (r[3] || r[4] || r[5] || "").replace(nt, P), 
                    "~=" === r[2] && (r[3] = " " + r[3] + " "), r.slice(0, 4);
                },
                CHILD: function(r) {
                    return r[1] = r[1].toLowerCase(), "nth" === r[1].slice(0, 3) ? (r[3] || I.error(r[0]), 
                    r[4] = +(r[4] ? r[5] + (r[6] || 1) : 2 * ("even" === r[3] || "odd" === r[3])), r[5] = +(r[7] + r[8] || "odd" === r[3])) : r[3] && I.error(r[0]), 
                    r;
                },
                PSEUDO: function(r) {
                    var f, g = !r[6] && r[2];
                    return Qe.CHILD.test(r[0]) ? null : (r[3] ? r[2] = r[4] || r[5] || "" : g && Ve.test(g) && (f = Y(g, !0)) && (f = g.indexOf(")", g.length - f) - g.length) && (r[0] = r[0].slice(0, f), 
                    r[2] = g.slice(0, f)), r.slice(0, 3));
                }
            },
            filter: {
                TAG: function(r) {
                    var f = r.replace(nt, P).toLowerCase();
                    return "*" === r ? function() {
                        return !0;
                    } : function(r) {
                        return fe(r, f);
                    };
                },
                CLASS: function(r) {
                    var f = xe[r + " "];
                    return f || (f = new RegExp("(^|" + de + ")" + r + "(" + de + "|$)")) && xe(r, (function(r) {
                        return f.test("string" == typeof r.className && r.className || "undefined" != typeof r.getAttribute && r.getAttribute("class") || "");
                    }));
                },
                ATTR: function(r, f, g) {
                    return function(b) {
                        var w = I.attr(b, r);
                        return null == w ? "!=" === f : !f || (w += "", "=" === f ? w === g : "!=" === f ? w !== g : "^=" === f ? g && 0 === w.indexOf(g) : "*=" === f ? g && -1 < w.indexOf(g) : "$=" === f ? g && w.slice(-g.length) === g : "~=" === f ? -1 < (" " + w.replace(Oe, " ") + " ").indexOf(g) : "|=" === f && (w === g || w.slice(0, g.length + 1) === g + "-"));
                    };
                },
                CHILD: function(r, f, g, b, w) {
                    var C = "nth" !== r.slice(0, 3), S = "last" !== r.slice(-4), k = "of-type" === f;
                    return 1 === b && 0 === w ? function(r) {
                        return !!r.parentNode;
                    } : function(f, g, E) {
                        var j, D, H, O, M, ie = C !== S ? "nextSibling" : "previousSibling", oe = f.parentNode, ae = k && f.nodeName.toLowerCase(), ue = !E && !k, le = !1;
                        if (oe) {
                            if (C) {
                                while (ie) {
                                    H = f;
                                    while (H = H[ie]) if (k ? fe(H, ae) : 1 === H.nodeType) return !1;
                                    M = ie = "only" === r && !M && "nextSibling";
                                }
                                return !0;
                            }
                            if (M = [ S ? oe.firstChild : oe.lastChild ], S && ue) {
                                le = (O = (j = (D = oe[se] || (oe[se] = {}))[r] || [])[0] === ge && j[1]) && j[2], 
                                H = O && oe.childNodes[O];
                                while (H = ++O && H && H[ie] || (le = O = 0) || M.pop()) if (1 === H.nodeType && ++le && H === f) {
                                    D[r] = [ ge, O, le ];
                                    break;
                                }
                            } else if (ue && (le = O = (j = (D = f[se] || (f[se] = {}))[r] || [])[0] === ge && j[1]), 
                            !1 === le) while (H = ++O && H && H[ie] || (le = O = 0) || M.pop()) if ((k ? fe(H, ae) : 1 === H.nodeType) && ++le && (ue && ((D = H[se] || (H[se] = {}))[r] = [ ge, le ]), 
                            H === f)) break;
                            return (le -= w) === b || le % b == 0 && 0 <= le / b;
                        }
                    };
                },
                PSEUDO: function(r, f) {
                    var g, w = b.pseudos[r] || b.setFilters[r.toLowerCase()] || I.error("unsupported pseudo: " + r);
                    return w[se] ? w(f) : 1 < w.length ? (g = [ r, r, "", f ], b.setFilters.hasOwnProperty(r.toLowerCase()) ? F((function(r, g) {
                        var b, C = w(r, f), S = C.length;
                        while (S--) r[b = k.call(r, C[S])] = !(g[b] = C[S]);
                    })) : function(r) {
                        return w(r, 0, g);
                    }) : w;
                }
            },
            pseudos: {
                not: F((function(r) {
                    var f = [], g = [], b = ne(r.replace(he, "$1"));
                    return b[se] ? F((function(r, f, g, w) {
                        var C, S = b(r, null, w, []), k = r.length;
                        while (k--) (C = S[k]) && (r[k] = !(f[k] = C));
                    })) : function(r, w, C) {
                        return f[0] = r, b(f, null, C, g), f[0] = null, !g.pop();
                    };
                })),
                has: F((function(r) {
                    return function(f) {
                        return 0 < I(r, f).length;
                    };
                })),
                contains: F((function(r) {
                    return r = r.replace(nt, P), function(f) {
                        return -1 < (f.textContent || ce.text(f)).indexOf(r);
                    };
                })),
                lang: F((function(r) {
                    return Xe.test(r || "") || I.error("unsupported lang: " + r), r = r.replace(nt, P).toLowerCase(), 
                    function(f) {
                        var g;
                        do {
                            if (g = O ? f.lang : f.getAttribute("xml:lang") || f.getAttribute("lang")) return (g = g.toLowerCase()) === r || 0 === g.indexOf(r + "-");
                        } while ((f = f.parentNode) && 1 === f.nodeType);
                        return !1;
                    };
                })),
                target: function(f) {
                    var g = r.location && r.location.hash;
                    return g && g.slice(1) === f.id;
                },
                root: function(r) {
                    return r === H;
                },
                focus: function(r) {
                    return r === function() {
                        try {
                            return j.activeElement;
                        } catch (r) {}
                    }() && j.hasFocus() && !!(r.type || r.href || ~r.tabIndex);
                },
                enabled: X(!1),
                disabled: X(!0),
                checked: function(r) {
                    return fe(r, "input") && !!r.checked || fe(r, "option") && !!r.selected;
                },
                selected: function(r) {
                    return r.parentNode && r.parentNode.selectedIndex, !0 === r.selected;
                },
                empty: function(r) {
                    for (r = r.firstChild; r; r = r.nextSibling) if (r.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(r) {
                    return !b.pseudos.empty(r);
                },
                header: function(r) {
                    return Ke.test(r.nodeName);
                },
                input: function(r) {
                    return Je.test(r.nodeName);
                },
                button: function(r) {
                    return fe(r, "input") && "button" === r.type || fe(r, "button");
                },
                text: function(r) {
                    var f;
                    return fe(r, "input") && "text" === r.type && (null == (f = r.getAttribute("type")) || "text" === f.toLowerCase());
                },
                first: U((function() {
                    return [ 0 ];
                })),
                last: U((function(r, f) {
                    return [ f - 1 ];
                })),
                eq: U((function(r, f, g) {
                    return [ g < 0 ? g + f : g ];
                })),
                even: U((function(r, f) {
                    for (var g = 0; g < f; g += 2) r.push(g);
                    return r;
                })),
                odd: U((function(r, f) {
                    for (var g = 1; g < f; g += 2) r.push(g);
                    return r;
                })),
                lt: U((function(r, f, g) {
                    var b;
                    for (b = g < 0 ? g + f : f < g ? f : g; 0 <= --b; ) r.push(b);
                    return r;
                })),
                gt: U((function(r, f, g) {
                    for (var b = g < 0 ? g + f : g; ++b < f; ) r.push(b);
                    return r;
                }))
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[f] = B(f);
        for (f in {
            submit: !0,
            reset: !0
        }) b.pseudos[f] = _(f);
        function G() {}
        function Y(r, f) {
            var g, w, C, S, k, E, j, D = be[r + " "];
            if (D) return f ? 0 : D.slice(0);
            k = r, E = [], j = b.preFilter;
            while (k) {
                for (S in g && !(w = Pe.exec(k)) || (w && (k = k.slice(w[0].length) || k), E.push(C = [])), 
                g = !1, (w = Re.exec(k)) && (g = w.shift(), C.push({
                    value: g,
                    type: w[0].replace(he, " ")
                }), k = k.slice(g.length)), b.filter) !(w = Qe[S].exec(k)) || j[S] && !(w = j[S](w)) || (g = w.shift(), 
                C.push({
                    value: g,
                    type: S,
                    matches: w
                }), k = k.slice(g.length));
                if (!g) break;
            }
            return f ? k.length : k ? I.error(r) : be(r, E).slice(0);
        }
        function Q(r) {
            for (var f = 0, g = r.length, b = ""; f < g; f++) b += r[f].value;
            return b;
        }
        function J(r, f, g) {
            var b = f.dir, w = f.next, C = w || b, S = g && "parentNode" === C, k = me++;
            return f.first ? function(f, g, w) {
                while (f = f[b]) if (1 === f.nodeType || S) return r(f, g, w);
                return !1;
            } : function(f, g, E) {
                var j, D, H = [ ge, k ];
                if (E) {
                    while (f = f[b]) if ((1 === f.nodeType || S) && r(f, g, E)) return !0;
                } else while (f = f[b]) if (1 === f.nodeType || S) if (D = f[se] || (f[se] = {}), 
                w && fe(f, w)) f = f[b] || f; else {
                    if ((j = D[C]) && j[0] === ge && j[1] === k) return H[2] = j[2];
                    if ((D[C] = H)[2] = r(f, g, E)) return !0;
                }
                return !1;
            };
        }
        function K(r) {
            return 1 < r.length ? function(f, g, b) {
                var w = r.length;
                while (w--) if (!r[w](f, g, b)) return !1;
                return !0;
            } : r[0];
        }
        function Z(r, f, g, b, w) {
            for (var C, S = [], k = 0, E = r.length, j = null != f; k < E; k++) (C = r[k]) && (g && !g(C, b, w) || (S.push(C), 
            j && f.push(k)));
            return S;
        }
        function ee(r, f, g, b, w, C) {
            return b && !b[se] && (b = ee(b)), w && !w[se] && (w = ee(w, C)), F((function(C, S, E, j) {
                var D, H, O, M, ie = [], oe = [], se = S.length, ue = C || function(r, f, g) {
                    for (var b = 0, w = f.length; b < w; b++) I(r, f[b], g);
                    return g;
                }(f || "*", E.nodeType ? [ E ] : E, []), le = !r || !C && f ? ue : Z(ue, ie, r, E, j);
                if (g ? g(le, M = w || (C ? r : se || b) ? [] : S, E, j) : M = le, b) {
                    D = Z(M, oe), b(D, [], E, j), H = D.length;
                    while (H--) (O = D[H]) && (M[oe[H]] = !(le[oe[H]] = O));
                }
                if (C) {
                    if (w || r) {
                        if (w) {
                            D = [], H = M.length;
                            while (H--) (O = M[H]) && D.push(le[H] = O);
                            w(null, M = [], D, j);
                        }
                        H = M.length;
                        while (H--) (O = M[H]) && -1 < (D = w ? k.call(C, O) : ie[H]) && (C[D] = !(S[D] = O));
                    }
                } else M = Z(M === S ? M.splice(se, M.length) : M), w ? w(null, S, M, j) : ae.apply(S, M);
            }));
        }
        function te(r) {
            for (var f, g, w, S = r.length, E = b.relative[r[0].type], j = E || b.relative[" "], D = E ? 1 : 0, H = J((function(r) {
                return r === f;
            }), j, !0), O = J((function(r) {
                return -1 < k.call(f, r);
            }), j, !0), M = [ function(r, g, b) {
                var w = !E && (b || g != C) || ((f = g).nodeType ? H(r, g, b) : O(r, g, b));
                return f = null, w;
            } ]; D < S; D++) if (g = b.relative[r[D].type]) M = [ J(K(M), g) ]; else {
                if ((g = b.filter[r[D].type].apply(null, r[D].matches))[se]) {
                    for (w = ++D; w < S; w++) if (b.relative[r[w].type]) break;
                    return ee(1 < D && K(M), 1 < D && Q(r.slice(0, D - 1).concat({
                        value: " " === r[D - 2].type ? "*" : ""
                    })).replace(he, "$1"), g, D < w && te(r.slice(D, w)), w < S && te(r = r.slice(w)), w < S && Q(r));
                }
                M.push(g);
            }
            return K(M);
        }
        function ne(r, f) {
            var g, w, S, k, E, D, H = [], M = [], ie = we[r + " "];
            if (!ie) {
                f || (f = Y(r)), g = f.length;
                while (g--) (ie = te(f[g]))[se] ? H.push(ie) : M.push(ie);
                (ie = we(r, (w = M, k = 0 < (S = H).length, E = 0 < w.length, D = function(r, f, g, D, H) {
                    var M, ie, oe, se = 0, le = "0", pe = r && [], de = [], he = C, ye = r || E && b.find.TAG("*", H), ve = ge += null == he ? 1 : Math.random() || .1, me = ye.length;
                    for (H && (C = f == j || f || H); le !== me && null != (M = ye[le]); le++) {
                        if (E && M) {
                            ie = 0, f || M.ownerDocument == j || (V(M), g = !O);
                            while (oe = w[ie++]) if (oe(M, f || j, g)) {
                                ae.call(D, M);
                                break;
                            }
                            H && (ge = ve);
                        }
                        k && ((M = !oe && M) && se--, r && pe.push(M));
                    }
                    if (se += le, k && le !== se) {
                        ie = 0;
                        while (oe = S[ie++]) oe(pe, de, f, g);
                        if (r) {
                            if (0 < se) while (le--) pe[le] || de[le] || (de[le] = ue.call(D));
                            de = Z(de);
                        }
                        ae.apply(D, de), H && !r && 0 < de.length && 1 < se + S.length && ce.uniqueSort(D);
                    }
                    return H && (ge = ve, C = he), pe;
                }, k ? F(D) : D))).selector = r;
            }
            return ie;
        }
        function re(r, f, g, w) {
            var C, S, k, E, j, D = "function" == typeof r && r, H = !w && Y(r = D.selector || r);
            if (g = g || [], 1 === H.length) {
                if (2 < (S = H[0] = H[0].slice(0)).length && "ID" === (k = S[0]).type && 9 === f.nodeType && O && b.relative[S[1].type]) {
                    if (!(f = (b.find.ID(k.matches[0].replace(nt, P), f) || [])[0])) return g;
                    D && (f = f.parentNode), r = r.slice(S.shift().value.length);
                }
                C = Qe.needsContext.test(r) ? 0 : S.length;
                while (C--) {
                    if (k = S[C], b.relative[E = k.type]) break;
                    if ((j = b.find[E]) && (w = j(k.matches[0].replace(nt, P), tt.test(S[0].type) && z(f.parentNode) || f))) {
                        if (S.splice(C, 1), !(r = w.length && Q(S))) return ae.apply(g, w), g;
                        break;
                    }
                }
            }
            return (D || ne(r, H))(w, f, !O, g, !f || tt.test(r) && z(f.parentNode) || f), g;
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, M.sortStable = se.split("").sort(l).join("") === se, 
        V(), M.sortDetached = $((function(r) {
            return 1 & r.compareDocumentPosition(j.createElement("fieldset"));
        })), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, 
        I.select = re, I.setDocument = V, I.escape = ce.escapeSelector, I.getText = ce.text, 
        I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
    }();
    var d = function(r, f, g) {
        var b = [], w = void 0 !== g;
        while ((r = r[f]) && 9 !== r.nodeType) if (1 === r.nodeType) {
            if (w && ce(r).is(g)) break;
            b.push(r);
        }
        return b;
    }, h = function(r, f) {
        for (var g = []; r; r = r.nextSibling) 1 === r.nodeType && r !== f && g.push(r);
        return g;
    }, me = ce.expr.match.needsContext, xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(r, f, g) {
        return v(f) ? ce.grep(r, (function(r, b) {
            return !!f.call(r, b, r) !== g;
        })) : f.nodeType ? ce.grep(r, (function(r) {
            return r === f !== g;
        })) : "string" != typeof f ? ce.grep(r, (function(r) {
            return -1 < k.call(f, r) !== g;
        })) : ce.filter(f, r, g);
    }
    ce.filter = function(r, f, g) {
        var b = f[0];
        return g && (r = ":not(" + r + ")"), 1 === f.length && 1 === b.nodeType ? ce.find.matchesSelector(b, r) ? [ b ] : [] : ce.find.matches(r, ce.grep(f, (function(r) {
            return 1 === r.nodeType;
        })));
    }, ce.fn.extend({
        find: function(r) {
            var f, g, b = this.length, w = this;
            if ("string" != typeof r) return this.pushStack(ce(r).filter((function() {
                for (f = 0; f < b; f++) if (ce.contains(w[f], this)) return !0;
            })));
            for (g = this.pushStack([]), f = 0; f < b; f++) ce.find(r, w[f], g);
            return 1 < b ? ce.uniqueSort(g) : g;
        },
        filter: function(r) {
            return this.pushStack(T(this, r || [], !1));
        },
        not: function(r) {
            return this.pushStack(T(this, r || [], !0));
        },
        is: function(r) {
            return !!T(this, "string" == typeof r && me.test(r) ? ce(r) : r || [], !1).length;
        }
    });
    var be, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(r, f, g) {
        var b, w;
        if (!r) return this;
        if (g = g || be, "string" == typeof r) {
            if (!(b = "<" === r[0] && ">" === r[r.length - 1] && 3 <= r.length ? [ null, r, null ] : we.exec(r)) || !b[1] && f) return !f || f.jquery ? (f || g).find(r) : this.constructor(f).find(r);
            if (b[1]) {
                if (f = f instanceof ce ? f[0] : f, ce.merge(this, ce.parseHTML(b[1], f && f.nodeType ? f.ownerDocument || f : ie, !0)), 
                xe.test(b[1]) && ce.isPlainObject(f)) for (b in f) v(this[b]) ? this[b](f[b]) : this.attr(b, f[b]);
                return this;
            }
            return (w = ie.getElementById(b[2])) && (this[0] = w, this.length = 1), this;
        }
        return r.nodeType ? (this[0] = r, this.length = 1, this) : v(r) ? void 0 !== g.ready ? g.ready(r) : r(ce) : ce.makeArray(r, this);
    }).prototype = ce.fn, be = ce(ie);
    var Te = /^(?:parents|prev(?:Until|All))/, Ce = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(r, f) {
        while ((r = r[f]) && 1 !== r.nodeType) ;
        return r;
    }
    ce.fn.extend({
        has: function(r) {
            var f = ce(r, this), g = f.length;
            return this.filter((function() {
                for (var r = 0; r < g; r++) if (ce.contains(this, f[r])) return !0;
            }));
        },
        closest: function(r, f) {
            var g, b = 0, w = this.length, C = [], S = "string" != typeof r && ce(r);
            if (!me.test(r)) for (;b < w; b++) for (g = this[b]; g && g !== f; g = g.parentNode) if (g.nodeType < 11 && (S ? -1 < S.index(g) : 1 === g.nodeType && ce.find.matchesSelector(g, r))) {
                C.push(g);
                break;
            }
            return this.pushStack(1 < C.length ? ce.uniqueSort(C) : C);
        },
        index: function(r) {
            return r ? "string" == typeof r ? k.call(ce(r), this[0]) : k.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(r, f) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(r, f))));
        },
        addBack: function(r) {
            return this.add(null == r ? this.prevObject : this.prevObject.filter(r));
        }
    }), ce.each({
        parent: function(r) {
            var f = r.parentNode;
            return f && 11 !== f.nodeType ? f : null;
        },
        parents: function(r) {
            return d(r, "parentNode");
        },
        parentsUntil: function(r, f, g) {
            return d(r, "parentNode", g);
        },
        next: function(r) {
            return A(r, "nextSibling");
        },
        prev: function(r) {
            return A(r, "previousSibling");
        },
        nextAll: function(r) {
            return d(r, "nextSibling");
        },
        prevAll: function(r) {
            return d(r, "previousSibling");
        },
        nextUntil: function(r, f, g) {
            return d(r, "nextSibling", g);
        },
        prevUntil: function(r, f, g) {
            return d(r, "previousSibling", g);
        },
        siblings: function(r) {
            return h((r.parentNode || {}).firstChild, r);
        },
        children: function(r) {
            return h(r.firstChild);
        },
        contents: function(r) {
            return null != r.contentDocument && b(r.contentDocument) ? r.contentDocument : (fe(r, "template") && (r = r.content || r), 
            ce.merge([], r.childNodes));
        }
    }, (function(r, f) {
        ce.fn[r] = function(g, b) {
            var w = ce.map(this, f, g);
            return "Until" !== r.slice(-5) && (b = g), b && "string" == typeof b && (w = ce.filter(b, w)), 
            1 < this.length && (Ce[r] || ce.uniqueSort(w), Te.test(r) && w.reverse()), this.pushStack(w);
        };
    }));
    var ke = /[^\x20\t\r\n\f]+/g;
    function N(r) {
        return r;
    }
    function q(r) {
        throw r;
    }
    function L(r, f, g, b) {
        var w;
        try {
            r && v(w = r.promise) ? w.call(r).done(f).fail(g) : r && v(w = r.then) ? w.call(r, f, g) : f.apply(void 0, [ r ].slice(b));
        } catch (r) {
            g.apply(void 0, [ r ]);
        }
    }
    ce.Callbacks = function(r) {
        var f, g;
        r = "string" == typeof r ? (f = r, g = {}, ce.each(f.match(ke) || [], (function(r, f) {
            g[f] = !0;
        })), g) : ce.extend({}, r);
        var b, w, C, S, k = [], E = [], j = -1, c = function() {
            for (S = S || r.once, C = b = !0; E.length; j = -1) {
                w = E.shift();
                while (++j < k.length) !1 === k[j].apply(w[0], w[1]) && r.stopOnFalse && (j = k.length, 
                w = !1);
            }
            r.memory || (w = !1), b = !1, S && (k = w ? [] : "");
        }, D = {
            add: function() {
                return k && (w && !b && (j = k.length - 1, E.push(w)), function n(f) {
                    ce.each(f, (function(f, g) {
                        v(g) ? r.unique && D.has(g) || k.push(g) : g && g.length && "string" !== x(g) && n(g);
                    }));
                }(arguments), w && !b && c()), this;
            },
            remove: function() {
                return ce.each(arguments, (function(r, f) {
                    var g;
                    while (-1 < (g = ce.inArray(f, k, g))) k.splice(g, 1), g <= j && j--;
                })), this;
            },
            has: function(r) {
                return r ? -1 < ce.inArray(r, k) : 0 < k.length;
            },
            empty: function() {
                return k && (k = []), this;
            },
            disable: function() {
                return S = E = [], k = w = "", this;
            },
            disabled: function() {
                return !k;
            },
            lock: function() {
                return S = E = [], w || b || (k = w = ""), this;
            },
            locked: function() {
                return !!S;
            },
            fireWith: function(r, f) {
                return S || (f = [ r, (f = f || []).slice ? f.slice() : f ], E.push(f), b || c()), 
                this;
            },
            fire: function() {
                return D.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!C;
            }
        };
        return D;
    }, ce.extend({
        Deferred: function(f) {
            var g = [ [ "notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2 ], [ "resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected" ] ], b = "pending", w = {
                state: function() {
                    return b;
                },
                always: function() {
                    return C.done(arguments).fail(arguments), this;
                },
                catch: function(r) {
                    return w.then(null, r);
                },
                pipe: function() {
                    var r = arguments;
                    return ce.Deferred((function(f) {
                        ce.each(g, (function(g, b) {
                            var w = v(r[b[4]]) && r[b[4]];
                            C[b[1]]((function() {
                                var r = w && w.apply(this, arguments);
                                r && v(r.promise) ? r.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[b[0] + "With"](this, w ? [ r ] : arguments);
                            }));
                        })), r = null;
                    })).promise();
                },
                then: function(f, b, w) {
                    var C = 0;
                    function l(f, g, b, w) {
                        return function() {
                            var S = this, k = arguments, e = function() {
                                var r, E;
                                if (!(f < C)) {
                                    if ((r = b.apply(S, k)) === g.promise()) throw new TypeError("Thenable self-resolution");
                                    E = r && ("object" == typeof r || "function" == typeof r) && r.then, v(E) ? w ? E.call(r, l(C, g, N, w), l(C, g, q, w)) : (C++, 
                                    E.call(r, l(C, g, N, w), l(C, g, q, w), l(C, g, N, g.notifyWith))) : (b !== N && (S = void 0, 
                                    k = [ r ]), (w || g.resolveWith)(S, k));
                                }
                            }, E = w ? e : function() {
                                try {
                                    e();
                                } catch (r) {
                                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(r, E.error), C <= f + 1 && (b !== q && (S = void 0, 
                                    k = [ r ]), g.rejectWith(S, k));
                                }
                            };
                            f ? E() : (ce.Deferred.getErrorHook ? E.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (E.error = ce.Deferred.getStackHook()), 
                            r.setTimeout(E));
                        };
                    }
                    return ce.Deferred((function(r) {
                        g[0][3].add(l(0, r, v(w) ? w : N, r.notifyWith)), g[1][3].add(l(0, r, v(f) ? f : N)), 
                        g[2][3].add(l(0, r, v(b) ? b : q));
                    })).promise();
                },
                promise: function(r) {
                    return null != r ? ce.extend(r, w) : w;
                }
            }, C = {};
            return ce.each(g, (function(r, f) {
                var S = f[2], k = f[5];
                w[f[1]] = S.add, k && S.add((function() {
                    b = k;
                }), g[3 - r][2].disable, g[3 - r][3].disable, g[0][2].lock, g[0][3].lock), S.add(f[3].fire), 
                C[f[0]] = function() {
                    return C[f[0] + "With"](this === C ? void 0 : this, arguments), this;
                }, C[f[0] + "With"] = S.fireWith;
            })), w.promise(C), f && f.call(C, C), C;
        },
        when: function(r) {
            var f = arguments.length, g = f, b = Array(g), C = w.call(arguments), S = ce.Deferred(), a = function(r) {
                return function(g) {
                    b[r] = this, C[r] = 1 < arguments.length ? w.call(arguments) : g, --f || S.resolveWith(b, C);
                };
            };
            if (f <= 1 && (L(r, S.done(a(g)).resolve, S.reject, !f), "pending" === S.state() || v(C[g] && C[g].then))) return S.then();
            while (g--) L(C[g], a(g), S.reject);
            return S.promise();
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(f, g) {
        r.console && r.console.warn && f && je.test(f.name) && r.console.warn("jQuery.Deferred exception: " + f.message, f.stack, g);
    }, ce.readyException = function(f) {
        r.setTimeout((function() {
            throw f;
        }));
    };
    var De = ce.Deferred();
    function P() {
        ie.removeEventListener("DOMContentLoaded", P), r.removeEventListener("load", P), 
        ce.ready();
    }
    ce.fn.ready = function(r) {
        return De.then(r)["catch"]((function(r) {
            ce.readyException(r);
        })), this;
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(r) {
            (!0 === r ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== r && 0 < --ce.readyWait || De.resolveWith(ie, [ ce ]);
        }
    }), ce.ready.then = De.then, "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll ? r.setTimeout(ce.ready) : (ie.addEventListener("DOMContentLoaded", P), 
    r.addEventListener("load", P));
    var R = function(r, f, g, b, w, C, S) {
        var k = 0, E = r.length, j = null == g;
        if ("object" === x(g)) for (k in w = !0, g) R(r, f, k, g[k], !0, C, S); else if (void 0 !== b && (w = !0, 
        v(b) || (S = !0), j && (S ? (f.call(r, b), f = null) : (j = f, f = function(r, f, g) {
            return j.call(ce(r), g);
        })), f)) for (;k < E; k++) f(r[k], g, S ? b : b.call(r[k], k, f(r[k], g)));
        return w ? r : j ? f.call(r) : E ? f(r[0], g) : C;
    }, Oe = /^-ms-/, Pe = /-([a-z])/g;
    function W(r, f) {
        return f.toUpperCase();
    }
    function F(r) {
        return r.replace(Oe, "ms-").replace(Pe, W);
    }
    var $ = function(r) {
        return 1 === r.nodeType || 9 === r.nodeType || !+r.nodeType;
    };
    function B() {
        this.expando = ce.expando + B.uid++;
    }
    B.uid = 1, B.prototype = {
        cache: function(r) {
            var f = r[this.expando];
            return f || (f = {}, $(r) && (r.nodeType ? r[this.expando] = f : Object.defineProperty(r, this.expando, {
                value: f,
                configurable: !0
            }))), f;
        },
        set: function(r, f, g) {
            var b, w = this.cache(r);
            if ("string" == typeof f) w[F(f)] = g; else for (b in f) w[F(b)] = f[b];
            return w;
        },
        get: function(r, f) {
            return void 0 === f ? this.cache(r) : r[this.expando] && r[this.expando][F(f)];
        },
        access: function(r, f, g) {
            return void 0 === f || f && "string" == typeof f && void 0 === g ? this.get(r, f) : (this.set(r, f, g), 
            void 0 !== g ? g : f);
        },
        remove: function(r, f) {
            var g, b = r[this.expando];
            if (void 0 !== b) {
                if (void 0 !== f) {
                    g = (f = Array.isArray(f) ? f.map(F) : (f = F(f)) in b ? [ f ] : f.match(ke) || []).length;
                    while (g--) delete b[f[g]];
                }
                (void 0 === f || ce.isEmptyObject(b)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando]);
            }
        },
        hasData: function(r) {
            var f = r[this.expando];
            return void 0 !== f && !ce.isEmptyObject(f);
        }
    };
    var Re = new B, _e = new B, Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Xe = /[A-Z]/g;
    function V(r, f, g) {
        var b, w;
        if (void 0 === g && 1 === r.nodeType) if (b = "data-" + f.replace(Xe, "-$&").toLowerCase(), 
        "string" == typeof (g = r.getAttribute(b))) {
            try {
                g = "true" === (w = g) || "false" !== w && ("null" === w ? null : w === +w + "" ? +w : Ve.test(w) ? JSON.parse(w) : w);
            } catch (r) {}
            _e.set(r, f, g);
        } else g = void 0;
        return g;
    }
    ce.extend({
        hasData: function(r) {
            return _e.hasData(r) || Re.hasData(r);
        },
        data: function(r, f, g) {
            return _e.access(r, f, g);
        },
        removeData: function(r, f) {
            _e.remove(r, f);
        },
        _data: function(r, f, g) {
            return Re.access(r, f, g);
        },
        _removeData: function(r, f) {
            Re.remove(r, f);
        }
    }), ce.fn.extend({
        data: function(r, f) {
            var g, b, w, C = this[0], S = C && C.attributes;
            if (void 0 === r) {
                if (this.length && (w = _e.get(C), 1 === C.nodeType && !Re.get(C, "hasDataAttrs"))) {
                    g = S.length;
                    while (g--) S[g] && 0 === (b = S[g].name).indexOf("data-") && (b = F(b.slice(5)), 
                    V(C, b, w[b]));
                    Re.set(C, "hasDataAttrs", !0);
                }
                return w;
            }
            return "object" == typeof r ? this.each((function() {
                _e.set(this, r);
            })) : R(this, (function(f) {
                var g;
                if (C && void 0 === f) return void 0 !== (g = _e.get(C, r)) ? g : void 0 !== (g = V(C, r)) ? g : void 0;
                this.each((function() {
                    _e.set(this, r, f);
                }));
            }), null, f, 1 < arguments.length, null, !0);
        },
        removeData: function(r) {
            return this.each((function() {
                _e.remove(this, r);
            }));
        }
    }), ce.extend({
        queue: function(r, f, g) {
            var b;
            if (r) return f = (f || "fx") + "queue", b = Re.get(r, f), g && (!b || Array.isArray(g) ? b = Re.access(r, f, ce.makeArray(g)) : b.push(g)), 
            b || [];
        },
        dequeue: function(r, f) {
            f = f || "fx";
            var g = ce.queue(r, f), b = g.length, w = g.shift(), C = ce._queueHooks(r, f);
            "inprogress" === w && (w = g.shift(), b--), w && ("fx" === f && g.unshift("inprogress"), 
            delete C.stop, w.call(r, (function() {
                ce.dequeue(r, f);
            }), C)), !b && C && C.empty.fire();
        },
        _queueHooks: function(r, f) {
            var g = f + "queueHooks";
            return Re.get(r, g) || Re.access(r, g, {
                empty: ce.Callbacks("once memory").add((function() {
                    Re.remove(r, [ f + "queue", g ]);
                }))
            });
        }
    }), ce.fn.extend({
        queue: function(r, f) {
            var g = 2;
            return "string" != typeof r && (f = r, r = "fx", g--), arguments.length < g ? ce.queue(this[0], r) : void 0 === f ? this : this.each((function() {
                var g = ce.queue(this, r, f);
                ce._queueHooks(this, r), "fx" === r && "inprogress" !== g[0] && ce.dequeue(this, r);
            }));
        },
        dequeue: function(r) {
            return this.each((function() {
                ce.dequeue(this, r);
            }));
        },
        clearQueue: function(r) {
            return this.queue(r || "fx", []);
        },
        promise: function(r, f) {
            var g, b = 1, w = ce.Deferred(), C = this, S = this.length, s = function() {
                --b || w.resolveWith(C, [ C ]);
            };
            "string" != typeof r && (f = r, r = void 0), r = r || "fx";
            while (S--) (g = Re.get(C[S], r + "queueHooks")) && g.empty && (b++, g.empty.add(s));
            return s(), w.promise(f);
        }
    });
    var Qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Je = new RegExp("^(?:([+-])=|)(" + Qe + ")([a-z%]*)$", "i"), Ke = [ "Top", "Right", "Bottom", "Left" ], et = ie.documentElement, K = function(r) {
        return ce.contains(r.ownerDocument, r);
    }, tt = {
        composed: !0
    };
    et.getRootNode && (K = function(r) {
        return ce.contains(r.ownerDocument, r) || r.getRootNode(tt) === r.ownerDocument;
    });
    var ee = function(r, f) {
        return "none" === (r = f || r).style.display || "" === r.style.display && K(r) && "none" === ce.css(r, "display");
    };
    function te(r, f, g, b) {
        var w, C, S = 20, k = b ? function() {
            return b.cur();
        } : function() {
            return ce.css(r, f, "");
        }, E = k(), j = g && g[3] || (ce.cssNumber[f] ? "" : "px"), D = r.nodeType && (ce.cssNumber[f] || "px" !== j && +E) && Je.exec(ce.css(r, f));
        if (D && D[3] !== j) {
            E /= 2, j = j || D[3], D = +E || 1;
            while (S--) ce.style(r, f, D + j), (1 - C) * (1 - (C = k() / E || .5)) <= 0 && (S = 0), 
            D /= C;
            D *= 2, ce.style(r, f, D + j), g = g || [];
        }
        return g && (D = +D || +E || 0, w = g[1] ? D + (g[1] + 1) * g[2] : +g[2], b && (b.unit = j, 
        b.start = D, b.end = w)), w;
    }
    var nt = {};
    function re(r, f) {
        for (var g, b, w, C, S, k, E, j = [], D = 0, H = r.length; D < H; D++) (b = r[D]).style && (g = b.style.display, 
        f ? ("none" === g && (j[D] = Re.get(b, "display") || null, j[D] || (b.style.display = "")), 
        "" === b.style.display && ee(b) && (j[D] = (E = S = C = void 0, S = (w = b).ownerDocument, 
        k = w.nodeName, (E = nt[k]) || (C = S.body.appendChild(S.createElement(k)), E = ce.css(C, "display"), 
        C.parentNode.removeChild(C), "none" === E && (E = "block"), nt[k] = E)))) : "none" !== g && (j[D] = "none", 
        Re.set(b, "display", g)));
        for (D = 0; D < H; D++) null != j[D] && (r[D].style.display = j[D]);
        return r;
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0);
        },
        hide: function() {
            return re(this);
        },
        toggle: function(r) {
            return "boolean" == typeof r ? r ? this.show() : this.hide() : this.each((function() {
                ee(this) ? ce(this).show() : ce(this).hide();
            }));
        }
    });
    var st, ut, lt = /^(?:checkbox|radio)$/i, ct = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ft = /^$|^module$|\/(?:java|ecma)script/i;
    st = ie.createDocumentFragment().appendChild(ie.createElement("div")), (ut = ie.createElement("input")).setAttribute("type", "radio"), 
    ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), st.appendChild(ut), 
    M.checkClone = st.cloneNode(!0).cloneNode(!0).lastChild.checked, st.innerHTML = "<textarea>x</textarea>", 
    M.noCloneChecked = !!st.cloneNode(!0).lastChild.defaultValue, st.innerHTML = "<option></option>", 
    M.option = !!st.lastChild;
    var pt = {
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function Se(r, f) {
        var g;
        return g = "undefined" != typeof r.getElementsByTagName ? r.getElementsByTagName(f || "*") : "undefined" != typeof r.querySelectorAll ? r.querySelectorAll(f || "*") : [], 
        void 0 === f || f && fe(r, f) ? ce.merge([ r ], g) : g;
    }
    function Ee(r, f) {
        for (var g = 0, b = r.length; g < b; g++) Re.set(r[g], "globalEval", !f || Re.get(f[g], "globalEval"));
    }
    pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, M.option || (pt.optgroup = pt.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
    var mt = /<|&#?\w+;/;
    function Ae(r, f, g, b, w) {
        for (var C, S, k, E, j, D, H = f.createDocumentFragment(), O = [], M = 0, ie = r.length; M < ie; M++) if ((C = r[M]) || 0 === C) if ("object" === x(C)) ce.merge(O, C.nodeType ? [ C ] : C); else if (mt.test(C)) {
            S = S || H.appendChild(f.createElement("div")), k = (ct.exec(C) || [ "", "" ])[1].toLowerCase(), 
            E = pt[k] || pt._default, S.innerHTML = E[1] + ce.htmlPrefilter(C) + E[2], D = E[0];
            while (D--) S = S.lastChild;
            ce.merge(O, S.childNodes), (S = H.firstChild).textContent = "";
        } else O.push(f.createTextNode(C));
        H.textContent = "", M = 0;
        while (C = O[M++]) if (b && -1 < ce.inArray(C, b)) w && w.push(C); else if (j = K(C), 
        S = Se(H.appendChild(C), "script"), j && Ee(S), g) {
            D = 0;
            while (C = S[D++]) ft.test(C.type || "") && g.push(C);
        }
        return H;
    }
    var xt = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return !0;
    }
    function qe() {
        return !1;
    }
    function Le(r, f, g, b, w, C) {
        var S, k;
        if ("object" == typeof f) {
            for (k in "string" != typeof g && (b = b || g, g = void 0), f) Le(r, k, g, b, f[k], C);
            return r;
        }
        if (null == b && null == w ? (w = g, b = g = void 0) : null == w && ("string" == typeof g ? (w = b, 
        b = void 0) : (w = b, b = g, g = void 0)), !1 === w) w = qe; else if (!w) return r;
        return 1 === C && (S = w, (w = function(r) {
            return ce().off(r), S.apply(this, arguments);
        }).guid = S.guid || (S.guid = ce.guid++)), r.each((function() {
            ce.event.add(this, f, w, b, g);
        }));
    }
    function He(r, f, g) {
        g ? (Re.set(r, f, !1), ce.event.add(r, f, {
            namespace: !1,
            handler: function(r) {
                var g, b = Re.get(this, f);
                if (1 & r.isTrigger && this[f]) {
                    if (b) (ce.event.special[f] || {}).delegateType && r.stopPropagation(); else if (b = w.call(arguments), 
                    Re.set(this, f, b), this[f](), g = Re.get(this, f), Re.set(this, f, !1), b !== g) return r.stopImmediatePropagation(), 
                    r.preventDefault(), g;
                } else b && (Re.set(this, f, ce.event.trigger(b[0], b.slice(1), this)), r.stopPropagation(), 
                r.isImmediatePropagationStopped = Ne);
            }
        })) : void 0 === Re.get(r, f) && ce.event.add(r, f, Ne);
    }
    ce.event = {
        global: {},
        add: function(r, f, g, b, w) {
            var C, S, k, E, j, D, H, O, M, ie, oe, ae = Re.get(r);
            if ($(r)) {
                g.handler && (g = (C = g).handler, w = C.selector), w && ce.find.matchesSelector(et, w), 
                g.guid || (g.guid = ce.guid++), (E = ae.events) || (E = ae.events = Object.create(null)), 
                (S = ae.handle) || (S = ae.handle = function(f) {
                    return "undefined" != typeof ce && ce.event.triggered !== f.type ? ce.event.dispatch.apply(r, arguments) : void 0;
                }), j = (f = (f || "").match(ke) || [ "" ]).length;
                while (j--) M = oe = (k = xt.exec(f[j]) || [])[1], ie = (k[2] || "").split(".").sort(), 
                M && (H = ce.event.special[M] || {}, M = (w ? H.delegateType : H.bindType) || M, 
                H = ce.event.special[M] || {}, D = ce.extend({
                    type: M,
                    origType: oe,
                    data: b,
                    handler: g,
                    guid: g.guid,
                    selector: w,
                    needsContext: w && ce.expr.match.needsContext.test(w),
                    namespace: ie.join(".")
                }, C), (O = E[M]) || ((O = E[M] = []).delegateCount = 0, H.setup && !1 !== H.setup.call(r, b, ie, S) || r.addEventListener && r.addEventListener(M, S)), 
                H.add && (H.add.call(r, D), D.handler.guid || (D.handler.guid = g.guid)), w ? O.splice(O.delegateCount++, 0, D) : O.push(D), 
                ce.event.global[M] = !0);
            }
        },
        remove: function(r, f, g, b, w) {
            var C, S, k, E, j, D, H, O, M, ie, oe, ae = Re.hasData(r) && Re.get(r);
            if (ae && (E = ae.events)) {
                j = (f = (f || "").match(ke) || [ "" ]).length;
                while (j--) if (M = oe = (k = xt.exec(f[j]) || [])[1], ie = (k[2] || "").split(".").sort(), 
                M) {
                    H = ce.event.special[M] || {}, O = E[M = (b ? H.delegateType : H.bindType) || M] || [], 
                    k = k[2] && new RegExp("(^|\\.)" + ie.join("\\.(?:.*\\.|)") + "(\\.|$)"), S = C = O.length;
                    while (C--) D = O[C], !w && oe !== D.origType || g && g.guid !== D.guid || k && !k.test(D.namespace) || b && b !== D.selector && ("**" !== b || !D.selector) || (O.splice(C, 1), 
                    D.selector && O.delegateCount--, H.remove && H.remove.call(r, D));
                    S && !O.length && (H.teardown && !1 !== H.teardown.call(r, ie, ae.handle) || ce.removeEvent(r, M, ae.handle), 
                    delete E[M]);
                } else for (M in E) ce.event.remove(r, M + f[j], g, b, !0);
                ce.isEmptyObject(E) && Re.remove(r, "handle events");
            }
        },
        dispatch: function(r) {
            var f, g, b, w, C, S, k = new Array(arguments.length), E = ce.event.fix(r), j = (Re.get(this, "events") || Object.create(null))[E.type] || [], D = ce.event.special[E.type] || {};
            for (k[0] = E, f = 1; f < arguments.length; f++) k[f] = arguments[f];
            if (E.delegateTarget = this, !D.preDispatch || !1 !== D.preDispatch.call(this, E)) {
                S = ce.event.handlers.call(this, E, j), f = 0;
                while ((w = S[f++]) && !E.isPropagationStopped()) {
                    E.currentTarget = w.elem, g = 0;
                    while ((C = w.handlers[g++]) && !E.isImmediatePropagationStopped()) E.rnamespace && !1 !== C.namespace && !E.rnamespace.test(C.namespace) || (E.handleObj = C, 
                    E.data = C.data, void 0 !== (b = ((ce.event.special[C.origType] || {}).handle || C.handler).apply(w.elem, k)) && !1 === (E.result = b) && (E.preventDefault(), 
                    E.stopPropagation()));
                }
                return D.postDispatch && D.postDispatch.call(this, E), E.result;
            }
        },
        handlers: function(r, f) {
            var g, b, w, C, S, k = [], E = f.delegateCount, j = r.target;
            if (E && j.nodeType && !("click" === r.type && 1 <= r.button)) for (;j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== r.type || !0 !== j.disabled)) {
                for (C = [], S = {}, g = 0; g < E; g++) void 0 === S[w = (b = f[g]).selector + " "] && (S[w] = b.needsContext ? -1 < ce(w, this).index(j) : ce.find(w, this, null, [ j ]).length), 
                S[w] && C.push(b);
                C.length && k.push({
                    elem: j,
                    handlers: C
                });
            }
            return j = this, E < f.length && k.push({
                elem: j,
                handlers: f.slice(E)
            }), k;
        },
        addProp: function(r, f) {
            Object.defineProperty(ce.Event.prototype, r, {
                enumerable: !0,
                configurable: !0,
                get: v(f) ? function() {
                    if (this.originalEvent) return f(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[r];
                },
                set: function(f) {
                    Object.defineProperty(this, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: f
                    });
                }
            });
        },
        fix: function(r) {
            return r[ce.expando] ? r : new ce.Event(r);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(r) {
                    var f = this || r;
                    return lt.test(f.type) && f.click && fe(f, "input") && He(f, "click", !0), !1;
                },
                trigger: function(r) {
                    var f = this || r;
                    return lt.test(f.type) && f.click && fe(f, "input") && He(f, "click"), !0;
                },
                _default: function(r) {
                    var f = r.target;
                    return lt.test(f.type) && f.click && fe(f, "input") && Re.get(f, "click") || fe(f, "a");
                }
            },
            beforeunload: {
                postDispatch: function(r) {
                    void 0 !== r.result && r.originalEvent && (r.originalEvent.returnValue = r.result);
                }
            }
        }
    }, ce.removeEvent = function(r, f, g) {
        r.removeEventListener && r.removeEventListener(f, g);
    }, ce.Event = function(r, f) {
        if (!(this instanceof ce.Event)) return new ce.Event(r, f);
        r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || void 0 === r.defaultPrevented && !1 === r.returnValue ? Ne : qe, 
        this.target = r.target && 3 === r.target.nodeType ? r.target.parentNode : r.target, 
        this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, 
        f && ce.extend(this, f), this.timeStamp = r && r.timeStamp || Date.now(), this[ce.expando] = !0;
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var r = this.originalEvent;
            this.isDefaultPrevented = Ne, r && !this.isSimulated && r.preventDefault();
        },
        stopPropagation: function() {
            var r = this.originalEvent;
            this.isPropagationStopped = Ne, r && !this.isSimulated && r.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var r = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, r && !this.isSimulated && r.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(r, f) {
        function o(r) {
            if (ie.documentMode) {
                var g = Re.get(this, "handle"), b = ce.event.fix(r);
                b.type = "focusin" === r.type ? "focus" : "blur", b.isSimulated = !0, g(r), b.target === b.currentTarget && g(b);
            } else ce.event.simulate(f, r.target, ce.event.fix(r));
        }
        ce.event.special[r] = {
            setup: function() {
                var g;
                if (He(this, r, !0), !ie.documentMode) return !1;
                (g = Re.get(this, f)) || this.addEventListener(f, o), Re.set(this, f, (g || 0) + 1);
            },
            trigger: function() {
                return He(this, r), !0;
            },
            teardown: function() {
                var r;
                if (!ie.documentMode) return !1;
                (r = Re.get(this, f) - 1) ? Re.set(this, f, r) : (this.removeEventListener(f, o), 
                Re.remove(this, f));
            },
            _default: function(f) {
                return Re.get(f.target, r);
            },
            delegateType: f
        }, ce.event.special[f] = {
            setup: function() {
                var g = this.ownerDocument || this.document || this, b = ie.documentMode ? this : g, w = Re.get(b, f);
                w || (ie.documentMode ? this.addEventListener(f, o) : g.addEventListener(r, o, !0)), 
                Re.set(b, f, (w || 0) + 1);
            },
            teardown: function() {
                var g = this.ownerDocument || this.document || this, b = ie.documentMode ? this : g, w = Re.get(b, f) - 1;
                w ? Re.set(b, f, w) : (ie.documentMode ? this.removeEventListener(f, o) : g.removeEventListener(r, o, !0), 
                Re.remove(b, f));
            }
        };
    })), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(r, f) {
        ce.event.special[r] = {
            delegateType: f,
            bindType: f,
            handle: function(r) {
                var g, b = r.relatedTarget, w = r.handleObj;
                return b && (b === this || ce.contains(this, b)) || (r.type = w.origType, g = w.handler.apply(this, arguments), 
                r.type = f), g;
            }
        };
    })), ce.fn.extend({
        on: function(r, f, g, b) {
            return Le(this, r, f, g, b);
        },
        one: function(r, f, g, b) {
            return Le(this, r, f, g, b, 1);
        },
        off: function(r, f, g) {
            var b, w;
            if (r && r.preventDefault && r.handleObj) return b = r.handleObj, ce(r.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), 
            this;
            if ("object" == typeof r) {
                for (w in r) this.off(w, f, r[w]);
                return this;
            }
            return !1 !== f && "function" != typeof f || (g = f, f = void 0), !1 === g && (g = qe), 
            this.each((function() {
                ce.event.remove(this, r, g, f);
            }));
        }
    });
    var bt = /<script|<style|<link/i, wt = /checked\s*(?:[^=]|=\s*.checked.)/i, St = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Me(r, f) {
        return fe(r, "table") && fe(11 !== f.nodeType ? f : f.firstChild, "tr") && ce(r).children("tbody")[0] || r;
    }
    function Ie(r) {
        return r.type = (null !== r.getAttribute("type")) + "/" + r.type, r;
    }
    function We(r) {
        return "true/" === (r.type || "").slice(0, 5) ? r.type = r.type.slice(5) : r.removeAttribute("type"), 
        r;
    }
    function Fe(r, f) {
        var g, b, w, C, S, k;
        if (1 === f.nodeType) {
            if (Re.hasData(r) && (k = Re.get(r).events)) for (w in Re.remove(f, "handle events"), 
            k) for (g = 0, b = k[w].length; g < b; g++) ce.event.add(f, w, k[w][g]);
            _e.hasData(r) && (C = _e.access(r), S = ce.extend({}, C), _e.set(f, S));
        }
    }
    function $e(r, f, g, b) {
        f = C(f);
        var w, S, k, E, j, D, H = 0, O = r.length, ie = O - 1, oe = f[0], ae = v(oe);
        if (ae || 1 < O && "string" == typeof oe && !M.checkClone && wt.test(oe)) return r.each((function(w) {
            var C = r.eq(w);
            ae && (f[0] = oe.call(this, w, C.html())), $e(C, f, g, b);
        }));
        if (O && (S = (w = Ae(f, r[0].ownerDocument, !1, r, b)).firstChild, 1 === w.childNodes.length && (w = S), 
        S || b)) {
            for (E = (k = ce.map(Se(w, "script"), Ie)).length; H < O; H++) j = w, H !== ie && (j = ce.clone(j, !0, !0), 
            E && ce.merge(k, Se(j, "script"))), g.call(r[H], j, H);
            if (E) for (D = k[k.length - 1].ownerDocument, ce.map(k, We), H = 0; H < E; H++) j = k[H], 
            ft.test(j.type || "") && !Re.access(j, "globalEval") && ce.contains(D, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? ce._evalUrl && !j.noModule && ce._evalUrl(j.src, {
                nonce: j.nonce || j.getAttribute("nonce")
            }, D) : m(j.textContent.replace(St, ""), j, D));
        }
        return r;
    }
    function Be(r, f, g) {
        for (var b, w = f ? ce.filter(f, r) : r, C = 0; null != (b = w[C]); C++) g || 1 !== b.nodeType || ce.cleanData(Se(b)), 
        b.parentNode && (g && K(b) && Ee(Se(b, "script")), b.parentNode.removeChild(b));
        return r;
    }
    ce.extend({
        htmlPrefilter: function(r) {
            return r;
        },
        clone: function(r, f, g) {
            var b, w, C, S, k, E, j, D = r.cloneNode(!0), H = K(r);
            if (!(M.noCloneChecked || 1 !== r.nodeType && 11 !== r.nodeType || ce.isXMLDoc(r))) for (S = Se(D), 
            b = 0, w = (C = Se(r)).length; b < w; b++) k = C[b], E = S[b], void 0, "input" === (j = E.nodeName.toLowerCase()) && lt.test(k.type) ? E.checked = k.checked : "input" !== j && "textarea" !== j || (E.defaultValue = k.defaultValue);
            if (f) if (g) for (C = C || Se(r), S = S || Se(D), b = 0, w = C.length; b < w; b++) Fe(C[b], S[b]); else Fe(r, D);
            return 0 < (S = Se(D, "script")).length && Ee(S, !H && Se(r, "script")), D;
        },
        cleanData: function(r) {
            for (var f, g, b, w = ce.event.special, C = 0; void 0 !== (g = r[C]); C++) if ($(g)) {
                if (f = g[Re.expando]) {
                    if (f.events) for (b in f.events) w[b] ? ce.event.remove(g, b) : ce.removeEvent(g, b, f.handle);
                    g[Re.expando] = void 0;
                }
                g[_e.expando] && (g[_e.expando] = void 0);
            }
        }
    }), ce.fn.extend({
        detach: function(r) {
            return Be(this, r, !0);
        },
        remove: function(r) {
            return Be(this, r);
        },
        text: function(r) {
            return R(this, (function(r) {
                return void 0 === r ? ce.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = r);
                }));
            }), null, r, arguments.length);
        },
        append: function() {
            return $e(this, arguments, (function(r) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, r).appendChild(r);
            }));
        },
        prepend: function() {
            return $e(this, arguments, (function(r) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var f = Me(this, r);
                    f.insertBefore(r, f.firstChild);
                }
            }));
        },
        before: function() {
            return $e(this, arguments, (function(r) {
                this.parentNode && this.parentNode.insertBefore(r, this);
            }));
        },
        after: function() {
            return $e(this, arguments, (function(r) {
                this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
            }));
        },
        empty: function() {
            for (var r, f = 0; null != (r = this[f]); f++) 1 === r.nodeType && (ce.cleanData(Se(r, !1)), 
            r.textContent = "");
            return this;
        },
        clone: function(r, f) {
            return r = null != r && r, f = null == f ? r : f, this.map((function() {
                return ce.clone(this, r, f);
            }));
        },
        html: function(r) {
            return R(this, (function(r) {
                var f = this[0] || {}, g = 0, b = this.length;
                if (void 0 === r && 1 === f.nodeType) return f.innerHTML;
                if ("string" == typeof r && !bt.test(r) && !pt[(ct.exec(r) || [ "", "" ])[1].toLowerCase()]) {
                    r = ce.htmlPrefilter(r);
                    try {
                        for (;g < b; g++) 1 === (f = this[g] || {}).nodeType && (ce.cleanData(Se(f, !1)), 
                        f.innerHTML = r);
                        f = 0;
                    } catch (r) {}
                }
                f && this.empty().append(r);
            }), null, r, arguments.length);
        },
        replaceWith: function() {
            var r = [];
            return $e(this, arguments, (function(f) {
                var g = this.parentNode;
                ce.inArray(this, r) < 0 && (ce.cleanData(Se(this)), g && g.replaceChild(f, this));
            }), r);
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(r, f) {
        ce.fn[r] = function(r) {
            for (var g, b = [], w = ce(r), C = w.length - 1, k = 0; k <= C; k++) g = k === C ? this : this.clone(!0), 
            ce(w[k])[f](g), S.apply(b, g.get());
            return this.pushStack(b);
        };
    }));
    var Et = new RegExp("^(" + Qe + ")(?!px)[a-z%]+$", "i"), At = /^--/, Ue = function(f) {
        var g = f.ownerDocument.defaultView;
        return g && g.opener || (g = r), g.getComputedStyle(f);
    }, ze = function(r, f, g) {
        var b, w, C = {};
        for (w in f) C[w] = r.style[w], r.style[w] = f[w];
        for (w in b = g.call(r), f) r.style[w] = C[w];
        return b;
    }, jt = new RegExp(Ke.join("|"), "i");
    function Ge(r, f, g) {
        var b, w, C, S, k = At.test(f), E = r.style;
        return (g = g || Ue(r)) && (S = g.getPropertyValue(f) || g[f], k && S && (S = S.replace(he, "$1") || void 0), 
        "" !== S || K(r) || (S = ce.style(r, f)), !M.pixelBoxStyles() && Et.test(S) && jt.test(f) && (b = E.width, 
        w = E.minWidth, C = E.maxWidth, E.minWidth = E.maxWidth = E.width = S, S = g.width, 
        E.width = b, E.minWidth = w, E.maxWidth = C)), void 0 !== S ? S + "" : S;
    }
    function Ye(r, f) {
        return {
            get: function() {
                if (!r()) return (this.get = f).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e() {
            if (E) {
                k.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                E.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                et.appendChild(k).appendChild(E);
                var C = r.getComputedStyle(E);
                f = "1%" !== C.top, S = 12 === t(C.marginLeft), E.style.right = "60%", w = 36 === t(C.right), 
                g = 36 === t(C.width), E.style.position = "absolute", b = 12 === t(E.offsetWidth / 3), 
                et.removeChild(k), E = null;
            }
        }
        function t(r) {
            return Math.round(parseFloat(r));
        }
        var f, g, b, w, C, S, k = ie.createElement("div"), E = ie.createElement("div");
        E.style && (E.style.backgroundClip = "content-box", E.cloneNode(!0).style.backgroundClip = "", 
        M.clearCloneStyle = "content-box" === E.style.backgroundClip, ce.extend(M, {
            boxSizingReliable: function() {
                return e(), g;
            },
            pixelBoxStyles: function() {
                return e(), w;
            },
            pixelPosition: function() {
                return e(), f;
            },
            reliableMarginLeft: function() {
                return e(), S;
            },
            scrollboxSize: function() {
                return e(), b;
            },
            reliableTrDimensions: function() {
                var f, g, b, w;
                return null == C && (f = ie.createElement("table"), g = ie.createElement("tr"), 
                b = ie.createElement("div"), f.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", 
                g.style.cssText = "border:1px solid", g.style.height = "1px", b.style.height = "9px", 
                b.style.display = "block", et.appendChild(f).appendChild(g).appendChild(b), w = r.getComputedStyle(g), 
                C = parseInt(w.height, 10) + parseInt(w.borderTopWidth, 10) + parseInt(w.borderBottomWidth, 10) === g.offsetHeight, 
                et.removeChild(f)), C;
            }
        }));
    }();
    var Dt = [ "Webkit", "Moz", "ms" ], qt = ie.createElement("div").style, Lt = {};
    function Ze(r) {
        var f = ce.cssProps[r] || Lt[r];
        return f || (r in qt ? r : Lt[r] = function(r) {
            var f = r[0].toUpperCase() + r.slice(1), g = Dt.length;
            while (g--) if ((r = Dt[g] + f) in qt) return r;
        }(r) || r);
    }
    var Ht = /^(none|table(?!-c[ea]).+)/, Ot = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, It = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(r, f, g) {
        var b = Je.exec(f);
        return b ? Math.max(0, b[2] - (g || 0)) + (b[3] || "px") : f;
    }
    function it(r, f, g, b, w, C) {
        var S = "width" === f ? 1 : 0, k = 0, E = 0, j = 0;
        if (g === (b ? "border" : "content")) return 0;
        for (;S < 4; S += 2) "margin" === g && (j += ce.css(r, g + Ke[S], !0, w)), b ? ("content" === g && (E -= ce.css(r, "padding" + Ke[S], !0, w)), 
        "margin" !== g && (E -= ce.css(r, "border" + Ke[S] + "Width", !0, w))) : (E += ce.css(r, "padding" + Ke[S], !0, w), 
        "padding" !== g ? E += ce.css(r, "border" + Ke[S] + "Width", !0, w) : k += ce.css(r, "border" + Ke[S] + "Width", !0, w));
        return !b && 0 <= C && (E += Math.max(0, Math.ceil(r["offset" + f[0].toUpperCase() + f.slice(1)] - C - E - k - .5)) || 0), 
        E + j;
    }
    function ot(r, f, g) {
        var b = Ue(r), w = (!M.boxSizingReliable() || g) && "border-box" === ce.css(r, "boxSizing", !1, b), C = w, S = Ge(r, f, b), k = "offset" + f[0].toUpperCase() + f.slice(1);
        if (Et.test(S)) {
            if (!g) return S;
            S = "auto";
        }
        return (!M.boxSizingReliable() && w || !M.reliableTrDimensions() && fe(r, "tr") || "auto" === S || !parseFloat(S) && "inline" === ce.css(r, "display", !1, b)) && r.getClientRects().length && (w = "border-box" === ce.css(r, "boxSizing", !1, b), 
        (C = k in r) && (S = r[k])), (S = parseFloat(S) || 0) + it(r, f, g || (w ? "border" : "content"), C, b, S) + "px";
    }
    function at(r, f, g, b, w) {
        return new at.prototype.init(r, f, g, b, w);
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(r, f) {
                    if (f) {
                        var g = Ge(r, "opacity");
                        return "" === g ? "1" : g;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(r, f, g, b) {
            if (r && 3 !== r.nodeType && 8 !== r.nodeType && r.style) {
                var w, C, S, k = F(f), E = At.test(f), j = r.style;
                if (E || (f = Ze(k)), S = ce.cssHooks[f] || ce.cssHooks[k], void 0 === g) return S && "get" in S && void 0 !== (w = S.get(r, !1, b)) ? w : j[f];
                "string" === (C = typeof g) && (w = Je.exec(g)) && w[1] && (g = te(r, f, w), C = "number"), 
                null != g && g == g && ("number" !== C || E || (g += w && w[3] || (ce.cssNumber[k] ? "" : "px")), 
                M.clearCloneStyle || "" !== g || 0 !== f.indexOf("background") || (j[f] = "inherit"), 
                S && "set" in S && void 0 === (g = S.set(r, g, b)) || (E ? j.setProperty(f, g) : j[f] = g));
            }
        },
        css: function(r, f, g, b) {
            var w, C, S, k = F(f);
            return At.test(f) || (f = Ze(k)), (S = ce.cssHooks[f] || ce.cssHooks[k]) && "get" in S && (w = S.get(r, !0, g)), 
            void 0 === w && (w = Ge(r, f, b)), "normal" === w && f in It && (w = It[f]), "" === g || g ? (C = parseFloat(w), 
            !0 === g || isFinite(C) ? C || 0 : w) : w;
        }
    }), ce.each([ "height", "width" ], (function(r, f) {
        ce.cssHooks[f] = {
            get: function(r, g, b) {
                if (g) return !Ht.test(ce.css(r, "display")) || r.getClientRects().length && r.getBoundingClientRect().width ? ot(r, f, b) : ze(r, Ot, (function() {
                    return ot(r, f, b);
                }));
            },
            set: function(r, g, b) {
                var w, C = Ue(r), S = !M.scrollboxSize() && "absolute" === C.position, k = (S || b) && "border-box" === ce.css(r, "boxSizing", !1, C), E = b ? it(r, f, b, k, C) : 0;
                return k && S && (E -= Math.ceil(r["offset" + f[0].toUpperCase() + f.slice(1)] - parseFloat(C[f]) - it(r, f, "border", !1, C) - .5)), 
                E && (w = Je.exec(g)) && "px" !== (w[3] || "px") && (r.style[f] = g, g = ce.css(r, f)), 
                rt(0, g, E);
            }
        };
    })), ce.cssHooks.marginLeft = Ye(M.reliableMarginLeft, (function(r, f) {
        if (f) return (parseFloat(Ge(r, "marginLeft")) || r.getBoundingClientRect().left - ze(r, {
            marginLeft: 0
        }, (function() {
            return r.getBoundingClientRect().left;
        }))) + "px";
    })), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(r, f) {
        ce.cssHooks[r + f] = {
            expand: function(g) {
                for (var b = 0, w = {}, C = "string" == typeof g ? g.split(" ") : [ g ]; b < 4; b++) w[r + Ke[b] + f] = C[b] || C[b - 2] || C[0];
                return w;
            }
        }, "margin" !== r && (ce.cssHooks[r + f].set = rt);
    })), ce.fn.extend({
        css: function(r, f) {
            return R(this, (function(r, f, g) {
                var b, w, C = {}, S = 0;
                if (Array.isArray(f)) {
                    for (b = Ue(r), w = f.length; S < w; S++) C[f[S]] = ce.css(r, f[S], !1, b);
                    return C;
                }
                return void 0 !== g ? ce.style(r, f, g) : ce.css(r, f);
            }), r, f, 1 < arguments.length);
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(r, f, g, b, w, C) {
            this.elem = r, this.prop = g, this.easing = w || ce.easing._default, this.options = f, 
            this.start = this.now = this.cur(), this.end = b, this.unit = C || (ce.cssNumber[g] ? "" : "px");
        },
        cur: function() {
            var r = at.propHooks[this.prop];
            return r && r.get ? r.get(this) : at.propHooks._default.get(this);
        },
        run: function(r) {
            var f, g = at.propHooks[this.prop];
            return this.options.duration ? this.pos = f = ce.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = f = r, 
            this.now = (this.end - this.start) * f + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            g && g.set ? g.set(this) : at.propHooks._default.set(this), this;
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function(r) {
                var f;
                return 1 !== r.elem.nodeType || null != r.elem[r.prop] && null == r.elem.style[r.prop] ? r.elem[r.prop] : (f = ce.css(r.elem, r.prop, "")) && "auto" !== f ? f : 0;
            },
            set: function(r) {
                ce.fx.step[r.prop] ? ce.fx.step[r.prop](r) : 1 !== r.elem.nodeType || !ce.cssHooks[r.prop] && null == r.elem.style[Ze(r.prop)] ? r.elem[r.prop] = r.now : ce.style(r.elem, r.prop, r.now + r.unit);
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(r) {
            r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
        }
    }, ce.easing = {
        linear: function(r) {
            return r;
        },
        swing: function(r) {
            return .5 - Math.cos(r * Math.PI) / 2;
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var Ft, Mt, Rt, Wt, $t = /^(?:toggle|show|hide)$/, Bt = /queueHooks$/;
    function dt() {
        Mt && (!1 === ie.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(dt) : r.setTimeout(dt, ce.fx.interval), 
        ce.fx.tick());
    }
    function ht() {
        return r.setTimeout((function() {
            Ft = void 0;
        })), Ft = Date.now();
    }
    function gt(r, f) {
        var g, b = 0, w = {
            height: r
        };
        for (f = f ? 1 : 0; b < 4; b += 2 - f) w["margin" + (g = Ke[b])] = w["padding" + g] = r;
        return f && (w.opacity = w.width = r), w;
    }
    function vt(r, f, g) {
        for (var b, w = (yt.tweeners[f] || []).concat(yt.tweeners["*"]), C = 0, S = w.length; C < S; C++) if (b = w[C].call(g, f, r)) return b;
    }
    function yt(r, f, g) {
        var b, w, C = 0, S = yt.prefilters.length, k = ce.Deferred().always((function() {
            delete u.elem;
        })), u = function() {
            if (w) return !1;
            for (var f = Ft || ht(), g = Math.max(0, E.startTime + E.duration - f), b = 1 - (g / E.duration || 0), C = 0, S = E.tweens.length; C < S; C++) E.tweens[C].run(b);
            return k.notifyWith(r, [ E, b, g ]), b < 1 && S ? g : (S || k.notifyWith(r, [ E, 1, 0 ]), 
            k.resolveWith(r, [ E ]), !1);
        }, E = k.promise({
            elem: r,
            props: ce.extend({}, f),
            opts: ce.extend(!0, {
                specialEasing: {},
                easing: ce.easing._default
            }, g),
            originalProperties: f,
            originalOptions: g,
            startTime: Ft || ht(),
            duration: g.duration,
            tweens: [],
            createTween: function(f, g) {
                var b = ce.Tween(r, E.opts, f, g, E.opts.specialEasing[f] || E.opts.easing);
                return E.tweens.push(b), b;
            },
            stop: function(f) {
                var g = 0, b = f ? E.tweens.length : 0;
                if (w) return this;
                for (w = !0; g < b; g++) E.tweens[g].run(1);
                return f ? (k.notifyWith(r, [ E, 1, 0 ]), k.resolveWith(r, [ E, f ])) : k.rejectWith(r, [ E, f ]), 
                this;
            }
        }), j = E.props;
        for (!function(r, f) {
            var g, b, w, C, S;
            for (g in r) if (w = f[b = F(g)], C = r[g], Array.isArray(C) && (w = C[1], C = r[g] = C[0]), 
            g !== b && (r[b] = C, delete r[g]), (S = ce.cssHooks[b]) && "expand" in S) for (g in C = S.expand(C), 
            delete r[b], C) g in r || (r[g] = C[g], f[g] = w); else f[b] = w;
        }(j, E.opts.specialEasing); C < S; C++) if (b = yt.prefilters[C].call(E, r, j, E.opts)) return v(b.stop) && (ce._queueHooks(E.elem, E.opts.queue).stop = b.stop.bind(b)), 
        b;
        return ce.map(j, vt, E), v(E.opts.start) && E.opts.start.call(r, E), E.progress(E.opts.progress).done(E.opts.done, E.opts.complete).fail(E.opts.fail).always(E.opts.always), 
        ce.fx.timer(ce.extend(u, {
            elem: r,
            anim: E,
            queue: E.opts.queue
        })), E;
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [ function(r, f) {
                var g = this.createTween(r, f);
                return te(g.elem, r, Je.exec(f), g), g;
            } ]
        },
        tweener: function(r, f) {
            v(r) ? (f = r, r = [ "*" ]) : r = r.match(ke);
            for (var g, b = 0, w = r.length; b < w; b++) g = r[b], yt.tweeners[g] = yt.tweeners[g] || [], 
            yt.tweeners[g].unshift(f);
        },
        prefilters: [ function(r, f, g) {
            var b, w, C, S, k, E, j, D, H = "width" in f || "height" in f, O = this, M = {}, ie = r.style, oe = r.nodeType && ee(r), ae = Re.get(r, "fxshow");
            for (b in g.queue || (null == (S = ce._queueHooks(r, "fx")).unqueued && (S.unqueued = 0, 
            k = S.empty.fire, S.empty.fire = function() {
                S.unqueued || k();
            }), S.unqueued++, O.always((function() {
                O.always((function() {
                    S.unqueued--, ce.queue(r, "fx").length || S.empty.fire();
                }));
            }))), f) if (w = f[b], $t.test(w)) {
                if (delete f[b], C = C || "toggle" === w, w === (oe ? "hide" : "show")) {
                    if ("show" !== w || !ae || void 0 === ae[b]) continue;
                    oe = !0;
                }
                M[b] = ae && ae[b] || ce.style(r, b);
            }
            if ((E = !ce.isEmptyObject(f)) || !ce.isEmptyObject(M)) for (b in H && 1 === r.nodeType && (g.overflow = [ ie.overflow, ie.overflowX, ie.overflowY ], 
            null == (j = ae && ae.display) && (j = Re.get(r, "display")), "none" === (D = ce.css(r, "display")) && (j ? D = j : (re([ r ], !0), 
            j = r.style.display || j, D = ce.css(r, "display"), re([ r ]))), ("inline" === D || "inline-block" === D && null != j) && "none" === ce.css(r, "float") && (E || (O.done((function() {
                ie.display = j;
            })), null == j && (D = ie.display, j = "none" === D ? "" : D)), ie.display = "inline-block")), 
            g.overflow && (ie.overflow = "hidden", O.always((function() {
                ie.overflow = g.overflow[0], ie.overflowX = g.overflow[1], ie.overflowY = g.overflow[2];
            }))), E = !1, M) E || (ae ? "hidden" in ae && (oe = ae.hidden) : ae = Re.access(r, "fxshow", {
                display: j
            }), C && (ae.hidden = !oe), oe && re([ r ], !0), O.done((function() {
                for (b in oe || re([ r ]), Re.remove(r, "fxshow"), M) ce.style(r, b, M[b]);
            }))), E = vt(oe ? ae[b] : 0, b, O), b in ae || (ae[b] = E.start, oe && (E.end = E.start, 
            E.start = 0));
        } ],
        prefilter: function(r, f) {
            f ? yt.prefilters.unshift(r) : yt.prefilters.push(r);
        }
    }), ce.speed = function(r, f, g) {
        var b = r && "object" == typeof r ? ce.extend({}, r) : {
            complete: g || !g && f || v(r) && r,
            duration: r,
            easing: g && f || f && !v(f) && f
        };
        return ce.fx.off ? b.duration = 0 : "number" != typeof b.duration && (b.duration in ce.fx.speeds ? b.duration = ce.fx.speeds[b.duration] : b.duration = ce.fx.speeds._default), 
        null != b.queue && !0 !== b.queue || (b.queue = "fx"), b.old = b.complete, b.complete = function() {
            v(b.old) && b.old.call(this), b.queue && ce.dequeue(this, b.queue);
        }, b;
    }, ce.fn.extend({
        fadeTo: function(r, f, g, b) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: f
            }, r, g, b);
        },
        animate: function(r, f, g, b) {
            var w = ce.isEmptyObject(r), C = ce.speed(f, g, b), a = function() {
                var f = yt(this, ce.extend({}, r), C);
                (w || Re.get(this, "finish")) && f.stop(!0);
            };
            return a.finish = a, w || !1 === C.queue ? this.each(a) : this.queue(C.queue, a);
        },
        stop: function(r, f, g) {
            var a = function(r) {
                var f = r.stop;
                delete r.stop, f(g);
            };
            return "string" != typeof r && (g = f, f = r, r = void 0), f && this.queue(r || "fx", []), 
            this.each((function() {
                var f = !0, b = null != r && r + "queueHooks", w = ce.timers, C = Re.get(this);
                if (b) C[b] && C[b].stop && a(C[b]); else for (b in C) C[b] && C[b].stop && Bt.test(b) && a(C[b]);
                for (b = w.length; b--; ) w[b].elem !== this || null != r && w[b].queue !== r || (w[b].anim.stop(g), 
                f = !1, w.splice(b, 1));
                !f && g || ce.dequeue(this, r);
            }));
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each((function() {
                var f, g = Re.get(this), b = g[r + "queue"], w = g[r + "queueHooks"], C = ce.timers, S = b ? b.length : 0;
                for (g.finish = !0, ce.queue(this, r, []), w && w.stop && w.stop.call(this, !0), 
                f = C.length; f--; ) C[f].elem === this && C[f].queue === r && (C[f].anim.stop(!0), 
                C.splice(f, 1));
                for (f = 0; f < S; f++) b[f] && b[f].finish && b[f].finish.call(this);
                delete g.finish;
            }));
        }
    }), ce.each([ "toggle", "show", "hide" ], (function(r, f) {
        var g = ce.fn[f];
        ce.fn[f] = function(r, b, w) {
            return null == r || "boolean" == typeof r ? g.apply(this, arguments) : this.animate(gt(f, !0), r, b, w);
        };
    })), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(r, f) {
        ce.fn[r] = function(r, g, b) {
            return this.animate(f, r, g, b);
        };
    })), ce.timers = [], ce.fx.tick = function() {
        var r, f = 0, g = ce.timers;
        for (Ft = Date.now(); f < g.length; f++) (r = g[f])() || g[f] !== r || g.splice(f--, 1);
        g.length || ce.fx.stop(), Ft = void 0;
    }, ce.fx.timer = function(r) {
        ce.timers.push(r), ce.fx.start();
    }, ce.fx.interval = 13, ce.fx.start = function() {
        Mt || (Mt = !0, dt());
    }, ce.fx.stop = function() {
        Mt = null;
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(f, g) {
        return f = ce.fx && ce.fx.speeds[f] || f, g = g || "fx", this.queue(g, (function(g, b) {
            var w = r.setTimeout(g, f);
            b.stop = function() {
                r.clearTimeout(w);
            };
        }));
    }, Rt = ie.createElement("input"), Wt = ie.createElement("select").appendChild(ie.createElement("option")), 
    Rt.type = "checkbox", M.checkOn = "" !== Rt.value, M.optSelected = Wt.selected, 
    (Rt = ie.createElement("input")).value = "t", Rt.type = "radio", M.radioValue = "t" === Rt.value;
    var _t, Ut = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(r, f) {
            return R(this, ce.attr, r, f, 1 < arguments.length);
        },
        removeAttr: function(r) {
            return this.each((function() {
                ce.removeAttr(this, r);
            }));
        }
    }), ce.extend({
        attr: function(r, f, g) {
            var b, w, C = r.nodeType;
            if (3 !== C && 8 !== C && 2 !== C) return "undefined" == typeof r.getAttribute ? ce.prop(r, f, g) : (1 === C && ce.isXMLDoc(r) || (w = ce.attrHooks[f.toLowerCase()] || (ce.expr.match.bool.test(f) ? _t : void 0)), 
            void 0 !== g ? null === g ? void ce.removeAttr(r, f) : w && "set" in w && void 0 !== (b = w.set(r, g, f)) ? b : (r.setAttribute(f, g + ""), 
            g) : w && "get" in w && null !== (b = w.get(r, f)) ? b : null == (b = ce.find.attr(r, f)) ? void 0 : b);
        },
        attrHooks: {
            type: {
                set: function(r, f) {
                    if (!M.radioValue && "radio" === f && fe(r, "input")) {
                        var g = r.value;
                        return r.setAttribute("type", f), g && (r.value = g), f;
                    }
                }
            }
        },
        removeAttr: function(r, f) {
            var g, b = 0, w = f && f.match(ke);
            if (w && 1 === r.nodeType) while (g = w[b++]) r.removeAttribute(g);
        }
    }), _t = {
        set: function(r, f, g) {
            return !1 === f ? ce.removeAttr(r, g) : r.setAttribute(g, g), g;
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), (function(r, f) {
        var g = Ut[f] || ce.find.attr;
        Ut[f] = function(r, f, b) {
            var w, C, S = f.toLowerCase();
            return b || (C = Ut[S], Ut[S] = w, w = null != g(r, f, b) ? S : null, Ut[S] = C), 
            w;
        };
    }));
    var Xt = /^(?:input|select|textarea|button)$/i, Yt = /^(?:a|area)$/i;
    function Tt(r) {
        return (r.match(ke) || []).join(" ");
    }
    function Ct(r) {
        return r.getAttribute && r.getAttribute("class") || "";
    }
    function kt(r) {
        return Array.isArray(r) ? r : "string" == typeof r && r.match(ke) || [];
    }
    ce.fn.extend({
        prop: function(r, f) {
            return R(this, ce.prop, r, f, 1 < arguments.length);
        },
        removeProp: function(r) {
            return this.each((function() {
                delete this[ce.propFix[r] || r];
            }));
        }
    }), ce.extend({
        prop: function(r, f, g) {
            var b, w, C = r.nodeType;
            if (3 !== C && 8 !== C && 2 !== C) return 1 === C && ce.isXMLDoc(r) || (f = ce.propFix[f] || f, 
            w = ce.propHooks[f]), void 0 !== g ? w && "set" in w && void 0 !== (b = w.set(r, g, f)) ? b : r[f] = g : w && "get" in w && null !== (b = w.get(r, f)) ? b : r[f];
        },
        propHooks: {
            tabIndex: {
                get: function(r) {
                    var f = ce.find.attr(r, "tabindex");
                    return f ? parseInt(f, 10) : Xt.test(r.nodeName) || Yt.test(r.nodeName) && r.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), M.optSelected || (ce.propHooks.selected = {
        get: function(r) {
            var f = r.parentNode;
            return f && f.parentNode && f.parentNode.selectedIndex, null;
        },
        set: function(r) {
            var f = r.parentNode;
            f && (f.selectedIndex, f.parentNode && f.parentNode.selectedIndex);
        }
    }), ce.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
        ce.propFix[this.toLowerCase()] = this;
    })), ce.fn.extend({
        addClass: function(r) {
            var f, g, b, w, C, S;
            return v(r) ? this.each((function(f) {
                ce(this).addClass(r.call(this, f, Ct(this)));
            })) : (f = kt(r)).length ? this.each((function() {
                if (b = Ct(this), g = 1 === this.nodeType && " " + Tt(b) + " ") {
                    for (C = 0; C < f.length; C++) w = f[C], g.indexOf(" " + w + " ") < 0 && (g += w + " ");
                    S = Tt(g), b !== S && this.setAttribute("class", S);
                }
            })) : this;
        },
        removeClass: function(r) {
            var f, g, b, w, C, S;
            return v(r) ? this.each((function(f) {
                ce(this).removeClass(r.call(this, f, Ct(this)));
            })) : arguments.length ? (f = kt(r)).length ? this.each((function() {
                if (b = Ct(this), g = 1 === this.nodeType && " " + Tt(b) + " ") {
                    for (C = 0; C < f.length; C++) {
                        w = f[C];
                        while (-1 < g.indexOf(" " + w + " ")) g = g.replace(" " + w + " ", " ");
                    }
                    S = Tt(g), b !== S && this.setAttribute("class", S);
                }
            })) : this : this.attr("class", "");
        },
        toggleClass: function(r, f) {
            var g, b, w, C, S = typeof r, k = "string" === S || Array.isArray(r);
            return v(r) ? this.each((function(g) {
                ce(this).toggleClass(r.call(this, g, Ct(this), f), f);
            })) : "boolean" == typeof f && k ? f ? this.addClass(r) : this.removeClass(r) : (g = kt(r), 
            this.each((function() {
                if (k) for (C = ce(this), w = 0; w < g.length; w++) b = g[w], C.hasClass(b) ? C.removeClass(b) : C.addClass(b); else void 0 !== r && "boolean" !== S || ((b = Ct(this)) && Re.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || !1 === r ? "" : Re.get(this, "__className__") || ""));
            })));
        },
        hasClass: function(r) {
            var f, g, b = 0;
            f = " " + r + " ";
            while (g = this[b++]) if (1 === g.nodeType && -1 < (" " + Tt(Ct(g)) + " ").indexOf(f)) return !0;
            return !1;
        }
    });
    var Qt = /\r/g;
    ce.fn.extend({
        val: function(r) {
            var f, g, b, w = this[0];
            return arguments.length ? (b = v(r), this.each((function(g) {
                var w;
                1 === this.nodeType && (null == (w = b ? r.call(this, g, ce(this).val()) : r) ? w = "" : "number" == typeof w ? w += "" : Array.isArray(w) && (w = ce.map(w, (function(r) {
                    return null == r ? "" : r + "";
                }))), (f = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in f && void 0 !== f.set(this, w, "value") || (this.value = w));
            }))) : w ? (f = ce.valHooks[w.type] || ce.valHooks[w.nodeName.toLowerCase()]) && "get" in f && void 0 !== (g = f.get(w, "value")) ? g : "string" == typeof (g = w.value) ? g.replace(Qt, "") : null == g ? "" : g : void 0;
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(r) {
                    var f = ce.find.attr(r, "value");
                    return null != f ? f : Tt(ce.text(r));
                }
            },
            select: {
                get: function(r) {
                    var f, g, b, w = r.options, C = r.selectedIndex, S = "select-one" === r.type, k = S ? null : [], E = S ? C + 1 : w.length;
                    for (b = C < 0 ? E : S ? C : 0; b < E; b++) if (((g = w[b]).selected || b === C) && !g.disabled && (!g.parentNode.disabled || !fe(g.parentNode, "optgroup"))) {
                        if (f = ce(g).val(), S) return f;
                        k.push(f);
                    }
                    return k;
                },
                set: function(r, f) {
                    var g, b, w = r.options, C = ce.makeArray(f), S = w.length;
                    while (S--) ((b = w[S]).selected = -1 < ce.inArray(ce.valHooks.option.get(b), C)) && (g = !0);
                    return g || (r.selectedIndex = -1), C;
                }
            }
        }
    }), ce.each([ "radio", "checkbox" ], (function() {
        ce.valHooks[this] = {
            set: function(r, f) {
                if (Array.isArray(f)) return r.checked = -1 < ce.inArray(ce(r).val(), f);
            }
        }, M.checkOn || (ce.valHooks[this].get = function(r) {
            return null === r.getAttribute("value") ? "on" : r.value;
        });
    }));
    var Jt = r.location, Zt = {
        guid: Date.now()
    }, Kt = /\?/;
    ce.parseXML = function(f) {
        var g, b;
        if (!f || "string" != typeof f) return null;
        try {
            g = (new r.DOMParser).parseFromString(f, "text/xml");
        } catch (f) {}
        return b = g && g.getElementsByTagName("parsererror")[0], g && !b || ce.error("Invalid XML: " + (b ? ce.map(b.childNodes, (function(r) {
            return r.textContent;
        })).join("\n") : f)), g;
    };
    var en = /^(?:focusinfocus|focusoutblur)$/, Nt = function(r) {
        r.stopPropagation();
    };
    ce.extend(ce.event, {
        trigger: function(f, g, b, w) {
            var C, S, k, E, j, H, O, M, oe = [ b || ie ], ae = D.call(f, "type") ? f.type : f, se = D.call(f, "namespace") ? f.namespace.split(".") : [];
            if (S = M = k = b = b || ie, 3 !== b.nodeType && 8 !== b.nodeType && !en.test(ae + ce.event.triggered) && (-1 < ae.indexOf(".") && (ae = (se = ae.split(".")).shift(), 
            se.sort()), j = ae.indexOf(":") < 0 && "on" + ae, (f = f[ce.expando] ? f : new ce.Event(ae, "object" == typeof f && f)).isTrigger = w ? 2 : 3, 
            f.namespace = se.join("."), f.rnamespace = f.namespace ? new RegExp("(^|\\.)" + se.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            f.result = void 0, f.target || (f.target = b), g = null == g ? [ f ] : ce.makeArray(g, [ f ]), 
            O = ce.event.special[ae] || {}, w || !O.trigger || !1 !== O.trigger.apply(b, g))) {
                if (!w && !O.noBubble && !y(b)) {
                    for (E = O.delegateType || ae, en.test(E + ae) || (S = S.parentNode); S; S = S.parentNode) oe.push(S), 
                    k = S;
                    k === (b.ownerDocument || ie) && oe.push(k.defaultView || k.parentWindow || r);
                }
                C = 0;
                while ((S = oe[C++]) && !f.isPropagationStopped()) M = S, f.type = 1 < C ? E : O.bindType || ae, 
                (H = (Re.get(S, "events") || Object.create(null))[f.type] && Re.get(S, "handle")) && H.apply(S, g), 
                (H = j && S[j]) && H.apply && $(S) && (f.result = H.apply(S, g), !1 === f.result && f.preventDefault());
                return f.type = ae, w || f.isDefaultPrevented() || O._default && !1 !== O._default.apply(oe.pop(), g) || !$(b) || j && v(b[ae]) && !y(b) && ((k = b[j]) && (b[j] = null), 
                ce.event.triggered = ae, f.isPropagationStopped() && M.addEventListener(ae, Nt), 
                b[ae](), f.isPropagationStopped() && M.removeEventListener(ae, Nt), ce.event.triggered = void 0, 
                k && (b[j] = k)), f.result;
            }
        },
        simulate: function(r, f, g) {
            var b = ce.extend(new ce.Event, g, {
                type: r,
                isSimulated: !0
            });
            ce.event.trigger(b, null, f);
        }
    }), ce.fn.extend({
        trigger: function(r, f) {
            return this.each((function() {
                ce.event.trigger(r, f, this);
            }));
        },
        triggerHandler: function(r, f) {
            var g = this[0];
            if (g) return ce.event.trigger(r, f, g, !0);
        }
    });
    var tn = /\[\]$/, nn = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i, on = /^(?:input|select|textarea|keygen)/i;
    function Pt(r, f, g, b) {
        var w;
        if (Array.isArray(f)) ce.each(f, (function(f, w) {
            g || tn.test(r) ? b(r, w) : Pt(r + "[" + ("object" == typeof w && null != w ? f : "") + "]", w, g, b);
        })); else if (g || "object" !== x(f)) b(r, f); else for (w in f) Pt(r + "[" + w + "]", f[w], g, b);
    }
    ce.param = function(r, f) {
        var g, b = [], i = function(r, f) {
            var g = v(f) ? f() : f;
            b[b.length] = encodeURIComponent(r) + "=" + encodeURIComponent(null == g ? "" : g);
        };
        if (null == r) return "";
        if (Array.isArray(r) || r.jquery && !ce.isPlainObject(r)) ce.each(r, (function() {
            i(this.name, this.value);
        })); else for (g in r) Pt(g, r[g], f, i);
        return b.join("&");
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map((function() {
                var r = ce.prop(this, "elements");
                return r ? ce.makeArray(r) : this;
            })).filter((function() {
                var r = this.type;
                return this.name && !ce(this).is(":disabled") && on.test(this.nodeName) && !rn.test(r) && (this.checked || !lt.test(r));
            })).map((function(r, f) {
                var g = ce(this).val();
                return null == g ? null : Array.isArray(g) ? ce.map(g, (function(r) {
                    return {
                        name: f.name,
                        value: r.replace(nn, "\r\n")
                    };
                })) : {
                    name: f.name,
                    value: g.replace(nn, "\r\n")
                };
            })).get();
        }
    });
    var an = /%20/g, sn = /#.*$/, un = /([?&])_=[^&]*/, ln = /^(.*?):[ \t]*([^\r\n]*)$/gm, cn = /^(?:GET|HEAD)$/, fn = /^\/\//, pn = {}, dn = {}, hn = "*/".concat("*"), gn = ie.createElement("a");
    function zt(r) {
        return function(f, g) {
            "string" != typeof f && (g = f, f = "*");
            var b, w = 0, C = f.toLowerCase().match(ke) || [];
            if (v(g)) while (b = C[w++]) "+" === b[0] ? (b = b.slice(1) || "*", (r[b] = r[b] || []).unshift(g)) : (r[b] = r[b] || []).push(g);
        };
    }
    function Vt(r, f, g, b) {
        var w = {}, C = r === dn;
        function l(S) {
            var k;
            return w[S] = !0, ce.each(r[S] || [], (function(r, S) {
                var E = S(f, g, b);
                return "string" != typeof E || C || w[E] ? C ? !(k = E) : void 0 : (f.dataTypes.unshift(E), 
                l(E), !1);
            })), k;
        }
        return l(f.dataTypes[0]) || !w["*"] && l("*");
    }
    function Gt(r, f) {
        var g, b, w = ce.ajaxSettings.flatOptions || {};
        for (g in f) void 0 !== f[g] && ((w[g] ? r : b || (b = {}))[g] = f[g]);
        return b && ce.extend(!0, r, b), r;
    }
    gn.href = Jt.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Jt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": hn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(r, f) {
            return f ? Gt(Gt(r, ce.ajaxSettings), f) : Gt(ce.ajaxSettings, r);
        },
        ajaxPrefilter: zt(pn),
        ajaxTransport: zt(dn),
        ajax: function(f, g) {
            "object" == typeof f && (g = f, f = void 0), g = g || {};
            var b, w, C, S, k, E, j, D, H, O, M = ce.ajaxSetup({}, g), oe = M.context || M, ae = M.context && (oe.nodeType || oe.jquery) ? ce(oe) : ce.event, se = ce.Deferred(), ue = ce.Callbacks("once memory"), le = M.statusCode || {}, pe = {}, de = {}, he = "canceled", ge = {
                readyState: 0,
                getResponseHeader: function(r) {
                    var f;
                    if (j) {
                        if (!S) {
                            S = {};
                            while (f = ln.exec(C)) S[f[1].toLowerCase() + " "] = (S[f[1].toLowerCase() + " "] || []).concat(f[2]);
                        }
                        f = S[r.toLowerCase() + " "];
                    }
                    return null == f ? null : f.join(", ");
                },
                getAllResponseHeaders: function() {
                    return j ? C : null;
                },
                setRequestHeader: function(r, f) {
                    return null == j && (r = de[r.toLowerCase()] = de[r.toLowerCase()] || r, pe[r] = f), 
                    this;
                },
                overrideMimeType: function(r) {
                    return null == j && (M.mimeType = r), this;
                },
                statusCode: function(r) {
                    var f;
                    if (r) if (j) ge.always(r[ge.status]); else for (f in r) le[f] = [ le[f], r[f] ];
                    return this;
                },
                abort: function(r) {
                    var f = r || he;
                    return b && b.abort(f), l(0, f), this;
                }
            };
            if (se.promise(ge), M.url = ((f || M.url || Jt.href) + "").replace(fn, Jt.protocol + "//"), 
            M.type = g.method || g.type || M.method || M.type, M.dataTypes = (M.dataType || "*").toLowerCase().match(ke) || [ "" ], 
            null == M.crossDomain) {
                E = ie.createElement("a");
                try {
                    E.href = M.url, E.href = E.href, M.crossDomain = gn.protocol + "//" + gn.host != E.protocol + "//" + E.host;
                } catch (f) {
                    M.crossDomain = !0;
                }
            }
            if (M.data && M.processData && "string" != typeof M.data && (M.data = ce.param(M.data, M.traditional)), 
            Vt(pn, M, g, ge), j) return ge;
            for (H in (D = ce.event && M.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), 
            M.type = M.type.toUpperCase(), M.hasContent = !cn.test(M.type), w = M.url.replace(sn, ""), 
            M.hasContent ? M.data && M.processData && 0 === (M.contentType || "").indexOf("application/x-www-form-urlencoded") && (M.data = M.data.replace(an, "+")) : (O = M.url.slice(w.length), 
            M.data && (M.processData || "string" == typeof M.data) && (w += (Kt.test(w) ? "&" : "?") + M.data, 
            delete M.data), !1 === M.cache && (w = w.replace(un, "$1"), O = (Kt.test(w) ? "&" : "?") + "_=" + Zt.guid++ + O), 
            M.url = w + O), M.ifModified && (ce.lastModified[w] && ge.setRequestHeader("If-Modified-Since", ce.lastModified[w]), 
            ce.etag[w] && ge.setRequestHeader("If-None-Match", ce.etag[w])), (M.data && M.hasContent && !1 !== M.contentType || g.contentType) && ge.setRequestHeader("Content-Type", M.contentType), 
            ge.setRequestHeader("Accept", M.dataTypes[0] && M.accepts[M.dataTypes[0]] ? M.accepts[M.dataTypes[0]] + ("*" !== M.dataTypes[0] ? ", " + hn + "; q=0.01" : "") : M.accepts["*"]), 
            M.headers) ge.setRequestHeader(H, M.headers[H]);
            if (M.beforeSend && (!1 === M.beforeSend.call(oe, ge, M) || j)) return ge.abort();
            if (he = "abort", ue.add(M.complete), ge.done(M.success), ge.fail(M.error), b = Vt(dn, M, g, ge)) {
                if (ge.readyState = 1, D && ae.trigger("ajaxSend", [ ge, M ]), j) return ge;
                M.async && 0 < M.timeout && (k = r.setTimeout((function() {
                    ge.abort("timeout");
                }), M.timeout));
                try {
                    j = !1, b.send(pe, l);
                } catch (f) {
                    if (j) throw f;
                    l(-1, f);
                }
            } else l(-1, "No Transport");
            function l(f, g, S, E) {
                var H, O, ie, pe, de, he = g;
                j || (j = !0, k && r.clearTimeout(k), b = void 0, C = E || "", ge.readyState = 0 < f ? 4 : 0, 
                H = 200 <= f && f < 300 || 304 === f, S && (pe = function(r, f, g) {
                    var b, w, C, S, k = r.contents, E = r.dataTypes;
                    while ("*" === E[0]) E.shift(), void 0 === b && (b = r.mimeType || f.getResponseHeader("Content-Type"));
                    if (b) for (w in k) if (k[w] && k[w].test(b)) {
                        E.unshift(w);
                        break;
                    }
                    if (E[0] in g) C = E[0]; else {
                        for (w in g) {
                            if (!E[0] || r.converters[w + " " + E[0]]) {
                                C = w;
                                break;
                            }
                            S || (S = w);
                        }
                        C = C || S;
                    }
                    if (C) return C !== E[0] && E.unshift(C), g[C];
                }(M, ge, S)), !H && -1 < ce.inArray("script", M.dataTypes) && ce.inArray("json", M.dataTypes) < 0 && (M.converters["text script"] = function() {}), 
                pe = function(r, f, g, b) {
                    var w, C, S, k, E, j = {}, D = r.dataTypes.slice();
                    if (D[1]) for (S in r.converters) j[S.toLowerCase()] = r.converters[S];
                    C = D.shift();
                    while (C) if (r.responseFields[C] && (g[r.responseFields[C]] = f), !E && b && r.dataFilter && (f = r.dataFilter(f, r.dataType)), 
                    E = C, C = D.shift()) if ("*" === C) C = E; else if ("*" !== E && E !== C) {
                        if (!(S = j[E + " " + C] || j["* " + C])) for (w in j) if ((k = w.split(" "))[1] === C && (S = j[E + " " + k[0]] || j["* " + k[0]])) {
                            !0 === S ? S = j[w] : !0 !== j[w] && (C = k[0], D.unshift(k[1]));
                            break;
                        }
                        if (!0 !== S) if (S && r["throws"]) f = S(f); else try {
                            f = S(f);
                        } catch (r) {
                            return {
                                state: "parsererror",
                                error: S ? r : "No conversion from " + E + " to " + C
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: f
                    };
                }(M, pe, ge, H), H ? (M.ifModified && ((de = ge.getResponseHeader("Last-Modified")) && (ce.lastModified[w] = de), 
                (de = ge.getResponseHeader("etag")) && (ce.etag[w] = de)), 204 === f || "HEAD" === M.type ? he = "nocontent" : 304 === f ? he = "notmodified" : (he = pe.state, 
                O = pe.data, H = !(ie = pe.error))) : (ie = he, !f && he || (he = "error", f < 0 && (f = 0))), 
                ge.status = f, ge.statusText = (g || he) + "", H ? se.resolveWith(oe, [ O, he, ge ]) : se.rejectWith(oe, [ ge, he, ie ]), 
                ge.statusCode(le), le = void 0, D && ae.trigger(H ? "ajaxSuccess" : "ajaxError", [ ge, M, H ? O : ie ]), 
                ue.fireWith(oe, [ ge, he ]), D && (ae.trigger("ajaxComplete", [ ge, M ]), --ce.active || ce.event.trigger("ajaxStop")));
            }
            return ge;
        },
        getJSON: function(r, f, g) {
            return ce.get(r, f, g, "json");
        },
        getScript: function(r, f) {
            return ce.get(r, void 0, f, "script");
        }
    }), ce.each([ "get", "post" ], (function(r, f) {
        ce[f] = function(r, g, b, w) {
            return v(g) && (w = w || b, b = g, g = void 0), ce.ajax(ce.extend({
                url: r,
                type: f,
                dataType: w,
                data: g,
                success: b
            }, ce.isPlainObject(r) && r));
        };
    })), ce.ajaxPrefilter((function(r) {
        var f;
        for (f in r.headers) "content-type" === f.toLowerCase() && (r.contentType = r.headers[f] || "");
    })), ce._evalUrl = function(r, f, g) {
        return ce.ajax({
            url: r,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(r) {
                ce.globalEval(r, f, g);
            }
        });
    }, ce.fn.extend({
        wrapAll: function(r) {
            var f;
            return this[0] && (v(r) && (r = r.call(this[0])), f = ce(r, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && f.insertBefore(this[0]), f.map((function() {
                var r = this;
                while (r.firstElementChild) r = r.firstElementChild;
                return r;
            })).append(this)), this;
        },
        wrapInner: function(r) {
            return v(r) ? this.each((function(f) {
                ce(this).wrapInner(r.call(this, f));
            })) : this.each((function() {
                var f = ce(this), g = f.contents();
                g.length ? g.wrapAll(r) : f.append(r);
            }));
        },
        wrap: function(r) {
            var f = v(r);
            return this.each((function(g) {
                ce(this).wrapAll(f ? r.call(this, g) : r);
            }));
        },
        unwrap: function(r) {
            return this.parent(r).not("body").each((function() {
                ce(this).replaceWith(this.childNodes);
            })), this;
        }
    }), ce.expr.pseudos.hidden = function(r) {
        return !ce.expr.pseudos.visible(r);
    }, ce.expr.pseudos.visible = function(r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new r.XMLHttpRequest;
        } catch (r) {}
    };
    var yn = {
        0: 200,
        1223: 204
    }, vn = ce.ajaxSettings.xhr();
    M.cors = !!vn && "withCredentials" in vn, M.ajax = vn = !!vn, ce.ajaxTransport((function(f) {
        var g, b;
        if (M.cors || vn && !f.crossDomain) return {
            send: function(w, C) {
                var S, k = f.xhr();
                if (k.open(f.type, f.url, f.async, f.username, f.password), f.xhrFields) for (S in f.xhrFields) k[S] = f.xhrFields[S];
                for (S in f.mimeType && k.overrideMimeType && k.overrideMimeType(f.mimeType), f.crossDomain || w["X-Requested-With"] || (w["X-Requested-With"] = "XMLHttpRequest"), 
                w) k.setRequestHeader(S, w[S]);
                g = function(r) {
                    return function() {
                        g && (g = b = k.onload = k.onerror = k.onabort = k.ontimeout = k.onreadystatechange = null, 
                        "abort" === r ? k.abort() : "error" === r ? "number" != typeof k.status ? C(0, "error") : C(k.status, k.statusText) : C(yn[k.status] || k.status, k.statusText, "text" !== (k.responseType || "text") || "string" != typeof k.responseText ? {
                            binary: k.response
                        } : {
                            text: k.responseText
                        }, k.getAllResponseHeaders()));
                    };
                }, k.onload = g(), b = k.onerror = k.ontimeout = g("error"), void 0 !== k.onabort ? k.onabort = b : k.onreadystatechange = function() {
                    4 === k.readyState && r.setTimeout((function() {
                        g && b();
                    }));
                }, g = g("abort");
                try {
                    k.send(f.hasContent && f.data || null);
                } catch (w) {
                    if (g) throw w;
                }
            },
            abort: function() {
                g && g();
            }
        };
    })), ce.ajaxPrefilter((function(r) {
        r.crossDomain && (r.contents.script = !1);
    })), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(r) {
                return ce.globalEval(r), r;
            }
        }
    }), ce.ajaxPrefilter("script", (function(r) {
        void 0 === r.cache && (r.cache = !1), r.crossDomain && (r.type = "GET");
    })), ce.ajaxTransport("script", (function(r) {
        var f, g;
        if (r.crossDomain || r.scriptAttrs) return {
            send: function(b, w) {
                f = ce("<script>").attr(r.scriptAttrs || {}).prop({
                    charset: r.scriptCharset,
                    src: r.url
                }).on("load error", g = function(r) {
                    f.remove(), g = null, r && w("error" === r.type ? 404 : 200, r.type);
                }), ie.head.appendChild(f[0]);
            },
            abort: function() {
                g && g();
            }
        };
    }));
    var mn, xn = [], bn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var r = xn.pop() || ce.expando + "_" + Zt.guid++;
            return this[r] = !0, r;
        }
    }), ce.ajaxPrefilter("json jsonp", (function(f, g, b) {
        var w, C, S, k = !1 !== f.jsonp && (bn.test(f.url) ? "url" : "string" == typeof f.data && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(f.data) && "data");
        if (k || "jsonp" === f.dataTypes[0]) return w = f.jsonpCallback = v(f.jsonpCallback) ? f.jsonpCallback() : f.jsonpCallback, 
        k ? f[k] = f[k].replace(bn, "$1" + w) : !1 !== f.jsonp && (f.url += (Kt.test(f.url) ? "&" : "?") + f.jsonp + "=" + w), 
        f.converters["script json"] = function() {
            return S || ce.error(w + " was not called"), S[0];
        }, f.dataTypes[0] = "json", C = r[w], r[w] = function() {
            S = arguments;
        }, b.always((function() {
            void 0 === C ? ce(r).removeProp(w) : r[w] = C, f[w] && (f.jsonpCallback = g.jsonpCallback, 
            xn.push(w)), S && v(C) && C(S[0]), S = C = void 0;
        })), "script";
    })), M.createHTMLDocument = ((mn = ie.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === mn.childNodes.length), ce.parseHTML = function(r, f, g) {
        return "string" != typeof r ? [] : ("boolean" == typeof f && (g = f, f = !1), f || (M.createHTMLDocument ? ((b = (f = ie.implementation.createHTMLDocument("")).createElement("base")).href = ie.location.href, 
        f.head.appendChild(b)) : f = ie), C = !g && [], (w = xe.exec(r)) ? [ f.createElement(w[1]) ] : (w = Ae([ r ], f, C), 
        C && C.length && ce(C).remove(), ce.merge([], w.childNodes)));
        var b, w, C;
    }, ce.fn.load = function(r, f, g) {
        var b, w, C, S = this, k = r.indexOf(" ");
        return -1 < k && (b = Tt(r.slice(k)), r = r.slice(0, k)), v(f) ? (g = f, f = void 0) : f && "object" == typeof f && (w = "POST"), 
        0 < S.length && ce.ajax({
            url: r,
            type: w || "GET",
            dataType: "html",
            data: f
        }).done((function(r) {
            C = arguments, S.html(b ? ce("<div>").append(ce.parseHTML(r)).find(b) : r);
        })).always(g && function(r, f) {
            S.each((function() {
                g.apply(this, C || [ r.responseText, f, r ]);
            }));
        }), this;
    }, ce.expr.pseudos.animated = function(r) {
        return ce.grep(ce.timers, (function(f) {
            return r === f.elem;
        })).length;
    }, ce.offset = {
        setOffset: function(r, f, g) {
            var b, w, C, S, k, E, j = ce.css(r, "position"), D = ce(r), H = {};
            "static" === j && (r.style.position = "relative"), k = D.offset(), C = ce.css(r, "top"), 
            E = ce.css(r, "left"), ("absolute" === j || "fixed" === j) && -1 < (C + E).indexOf("auto") ? (S = (b = D.position()).top, 
            w = b.left) : (S = parseFloat(C) || 0, w = parseFloat(E) || 0), v(f) && (f = f.call(r, g, ce.extend({}, k))), 
            null != f.top && (H.top = f.top - k.top + S), null != f.left && (H.left = f.left - k.left + w), 
            "using" in f ? f.using.call(r, H) : D.css(H);
        }
    }, ce.fn.extend({
        offset: function(r) {
            if (arguments.length) return void 0 === r ? this : this.each((function(f) {
                ce.offset.setOffset(this, r, f);
            }));
            var f, g, b = this[0];
            return b ? b.getClientRects().length ? (f = b.getBoundingClientRect(), g = b.ownerDocument.defaultView, 
            {
                top: f.top + g.pageYOffset,
                left: f.left + g.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var r, f, g, b = this[0], w = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === ce.css(b, "position")) f = b.getBoundingClientRect(); else {
                    f = this.offset(), g = b.ownerDocument, r = b.offsetParent || g.documentElement;
                    while (r && (r === g.body || r === g.documentElement) && "static" === ce.css(r, "position")) r = r.parentNode;
                    r && r !== b && 1 === r.nodeType && ((w = ce(r).offset()).top += ce.css(r, "borderTopWidth", !0), 
                    w.left += ce.css(r, "borderLeftWidth", !0));
                }
                return {
                    top: f.top - w.top - ce.css(b, "marginTop", !0),
                    left: f.left - w.left - ce.css(b, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map((function() {
                var r = this.offsetParent;
                while (r && "static" === ce.css(r, "position")) r = r.offsetParent;
                return r || et;
            }));
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(r, f) {
        var g = "pageYOffset" === f;
        ce.fn[r] = function(b) {
            return R(this, (function(r, b, w) {
                var C;
                if (y(r) ? C = r : 9 === r.nodeType && (C = r.defaultView), void 0 === w) return C ? C[f] : r[b];
                C ? C.scrollTo(g ? C.pageXOffset : w, g ? w : C.pageYOffset) : r[b] = w;
            }), r, b, arguments.length);
        };
    })), ce.each([ "top", "left" ], (function(r, f) {
        ce.cssHooks[f] = Ye(M.pixelPosition, (function(r, g) {
            if (g) return g = Ge(r, f), Et.test(g) ? ce(r).position()[f] + "px" : g;
        }));
    })), ce.each({
        Height: "height",
        Width: "width"
    }, (function(r, f) {
        ce.each({
            padding: "inner" + r,
            content: f,
            "": "outer" + r
        }, (function(g, b) {
            ce.fn[b] = function(w, C) {
                var S = arguments.length && (g || "boolean" != typeof w), k = g || (!0 === w || !0 === C ? "margin" : "border");
                return R(this, (function(f, g, w) {
                    var C;
                    return y(f) ? 0 === b.indexOf("outer") ? f["inner" + r] : f.document.documentElement["client" + r] : 9 === f.nodeType ? (C = f.documentElement, 
                    Math.max(f.body["scroll" + r], C["scroll" + r], f.body["offset" + r], C["offset" + r], C["client" + r])) : void 0 === w ? ce.css(f, g, k) : ce.style(f, g, w, k);
                }), f, S ? w : void 0, S);
            };
        }));
    })), ce.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(r, f) {
        ce.fn[f] = function(r) {
            return this.on(f, r);
        };
    })), ce.fn.extend({
        bind: function(r, f, g) {
            return this.on(r, null, f, g);
        },
        unbind: function(r, f) {
            return this.off(r, null, f);
        },
        delegate: function(r, f, g, b) {
            return this.on(f, r, g, b);
        },
        undelegate: function(r, f, g) {
            return 1 === arguments.length ? this.off(r, "**") : this.off(f, r || "**", g);
        },
        hover: function(r, f) {
            return this.mouseenter(r).mouseleave(f || r);
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(r, f) {
        ce.fn[f] = function(r, g) {
            return 0 < arguments.length ? this.on(f, null, r, g) : this.trigger(f);
        };
    }));
    var wn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(r, f) {
        var g, b, C;
        if ("string" == typeof f && (g = r[f], f = r, r = g), v(r)) return b = w.call(arguments, 2), 
        (C = function() {
            return r.apply(f || this, b.concat(w.call(arguments)));
        }).guid = r.guid = r.guid || ce.guid++, C;
    }, ce.holdReady = function(r) {
        r ? ce.readyWait++ : ce.ready(!0);
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, 
    ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(r) {
        var f = ce.type(r);
        return ("number" === f || "string" === f) && !isNaN(r - parseFloat(r));
    }, ce.trim = function(r) {
        return null == r ? "" : (r + "").replace(wn, "$1");
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return ce;
    }));
    var Tn = r.jQuery, Cn = r.$;
    return ce.noConflict = function(f) {
        return r.$ === ce && (r.$ = Cn), f && r.jQuery === ce && (r.jQuery = Tn), ce;
    }, "undefined" == typeof f && (r.jQuery = r.$ = ce), ce;
}));