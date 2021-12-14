(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[0], {
    109: function (e, t, r) {
    }, 118: function (e, t, r) {
    }, 140: function (e, t, r) {
    }, 141: function (e, t, r) {
    }, 240: function (e, t, r) {
    }, 241: function (e, t, r) {
    }, 242: function (e, t, r) {
    }, 243: function (e, t, r) {
    }, 244: function (e, t, r) {
    }, 245: function (e, t, r) {
    }, 246: function (e, t, r) {
    }, 247: function (e, t, r) {
    }, 248: function (e, t, r) {
    }, 249: function (e, t, r) {
    }, 250: function (e, t, r) {
    }, 251: function (e, t, r) {
        "use strict";
        r.r(t);
        var c = r(1), a = r.n(c), s = r(47), n = r.n(s), i = (r(109), r(11)), o = r(10), l = r(14), j = r(25), d = r(8),
            u = r(0), p = ["text"];

        function b(e) {
            var t = e.text, r = Object(j.a)(e, p), c = r.click, a = r.color, s = r.icon, n = r.params, i = r.name;
            return Object(u.jsxs)("button", {
                name: i,
                onClick: c && (n ? function () {
                    return c.apply(void 0, Object(l.a)(n))
                } : function () {
                    return c()
                }),
                className: "btn-tmp ".concat(a),
                style: {
                    color: ("redBtn" === a || "btnWhite" === a) && "black",
                    padding: !s && "6px 30px",
                    textAlign: !s && "center"
                },
                children: [s && Object(u.jsx)(d.a, {className: "btnIcon", icon: s}), Object(u.jsx)("p", {children: t})]
            })
        }

        var h = r(7), x = r(5), m = r(15), O = Object(m.b)({
                name: "app",
                initialState: {auth: !1, loading: !1, currentUser: null},
                reducers: {
                    authSuccess: function (e) {
                        e.auth = null !== localStorage.getItem("token")
                    }, stateLoading: function (e, t) {
                        var r = t.payload;
                        e.loading = r
                    }, logout: function (e) {
                        localStorage.removeItem("token"), e.auth = !1
                    }, setCurrentUser: function (e, t) {
                        var r = t.payload;
                        e.currentUser = r
                    }
                }
            }), v = O.reducer, f = O.actions, g = f.authSuccess, N = f.stateLoading, y = f.logout, A = f.setCurrentUser,
            k = function (e) {
                return e.app
            }, w = function (e) {
                return e.app.auth
            }, C = function (e) {
                return e.app.currentUser
            }, B = r(6), S = (r(118), function (e) {
                var t = e.color;
                return Object(u.jsxs)("div", {
                    className: "logo ".concat(t),
                    children: [Object(u.jsxs)("h1", {children: ["Pr", Object(u.jsx)("span", {}), "P", Object(u.jsx)("span", {children: "ET"}), "S"]}), Object(u.jsx)(d.a, {
                        className: "logo-search",
                        icon: B.k,
                        size: "3x"
                    }), Object(u.jsx)(d.a, {
                        className: "logo-paw",
                        icon: B.h
                    }), Object(u.jsx)("div", {
                        className: "logo-circle-inside",
                        style: {borderColor: "whiteText" === t && "#06B2BB"}
                    }), Object(u.jsx)("div", {
                        className: "logo-circle-outside",
                        style: {
                            borderTopColor: "whiteText" === t && "#06B2BB",
                            borderLeftColor: "whiteText" === t && "#06B2BB",
                            borderRightColor: "whiteText" === t && "#06B2BB"
                        }
                    }), Object(u.jsx)("div", {
                        className: "logo-line",
                        style: {backgroundColor: "whiteText" === t && "#06B2BB"}
                    })]
                })
            }), P = r(2), I = r.n(P), L = r(4), F = r(60), T = r.n(F),
            W = T.a.create({baseURL: "https://pro-pets-server.herokuapp.com"}),
            q = T.a.create({baseURL: "https://pro-pets-server.herokuapp.com"});
        q.interceptors.request.use((function (e) {
            return e.headers.authorization = "Bearer ".concat(localStorage.getItem("token")), e
        }));
        var E = r(61), H = ["id", "full_name", "avatarPhotoOld", "petPhotoOld"], J = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c, a, s, n;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.name, c = t.email, a = t.password, e.prev = 1, e.next = 4, W.post("/api/users/registration", {
                                full_name: r,
                                email: c,
                                password: a,
                                role: "USER"
                            });
                        case 4:
                            return s = e.sent, n = s.data, localStorage.setItem("token", n.token), e.abrupt("return", n.user);
                        case 10:
                            return e.prev = 10, e.t0 = e.catch(1), e.next = 14, Promise.reject(e.t0.response);
                        case 14:
                            return e.abrupt("return", e.sent);
                        case 15:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 10]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), Y = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c, a;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.email, c = t.password, e.prev = 1, e.next = 4, W.post("/api/users/login", {
                                email: r,
                                password: c
                            });
                        case 4:
                            return a = e.sent, localStorage.setItem("token", a.data.token), e.abrupt("return", a);
                        case 9:
                            return e.prev = 9, e.t0 = e.catch(1), e.next = 13, Promise.reject(e.t0.response);
                        case 13:
                            return e.abrupt("return", e.sent);
                        case 14:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 9]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), U = function () {
            var e = Object(L.a)(I.a.mark((function e() {
                var t, r;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, q.get("/api/users/auth");
                        case 3:
                            return t = e.sent, r = t.data, localStorage.setItem("token", r.token), e.abrupt("return", {
                                token: Object(E.a)(r.token),
                                user: r.user
                            });
                        case 9:
                            return e.prev = 9, e.t0 = e.catch(0), 401 === e.t0.response.status && localStorage.removeItem("token"), e.next = 14, Promise.reject(e.t0.response);
                        case 14:
                            return e.abrupt("return", e.sent);
                        case 15:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 9]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }(), R = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, q.get("/api/users/".concat(t));
                        case 3:
                            return r = e.sent, c = r.data, e.abrupt("return", c);
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), z = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c, a, s, n, i, o, l;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.id, c = t.full_name, a = t.avatarPhotoOld, s = t.petPhotoOld, n = Object(j.a)(t, H), e.prev = 1, (i = new FormData).append("full_name", c), i.append("avatar", n.avatar && n.avatar[0]), i.append("email", n.email), i.append("phone", n.phone), i.append("user_pet", n.user_pet), i.append("nick", n.nick), i.append("pet_photo", n.pet_photo && n.pet_photo[0]), i.append("pet_photo_old", s), i.append("avatar_old", a), e.next = 14, q.put("/api/users/".concat(r), i, {headers: {"Content-Type": "multipart/form-data"}});
                        case 14:
                            return o = e.sent, l = o.data, e.abrupt("return", l);
                        case 19:
                            return e.prev = 19, e.t0 = e.catch(1), e.next = 23, Promise.reject(e.t0.response);
                        case 23:
                            return e.abrupt("return", e.sent);
                        case 24:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 19]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), K = Object(m.b)({
            name: "auth", initialState: {error: null}, reducers: {
                setError: function (e, t) {
                    var r = t.payload;
                    e.error = r
                }, resetError: function (e) {
                    e.error = null
                }
            }
        }), M = K.reducer, Z = K.actions, D = Z.setError, V = Z.resetError, G = function (e) {
            return e.auth.error
        }, X = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, q.get("/api/pets/".concat(t));
                        case 3:
                            return r = e.sent, c = r.data, e.abrupt("return", c);
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), Q = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c, a;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, (r = new FormData).append("https://maksimkostenko1994.github.io/pro-pets/status", t.status), r.append("nick", t.nick), r.append("type", t.type), r.append("image", t.image[0]), r.append("sex", t.sex), r.append("breed", t.breed), r.append("color", t.color), r.append("height", t.height), r.append("features", t.features), r.append("description", t.description), r.append("location", t.location), r.append("contacts", t.contacts), r.append("userId", t.userId), e.next = 17, q.post("/api/pets", r, {headers: {"Content-Type": "multipart/form-data"}});
                        case 17:
                            return c = e.sent, a = c.data, e.abrupt("return", a);
                        case 22:
                            return e.prev = 22, e.t0 = e.catch(0), e.next = 26, Promise.reject(e.t0.response);
                        case 26:
                            return e.abrupt("return", e.sent);
                        case 27:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 22]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), _ = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, W.get("api/pets/id/".concat(t));
                        case 3:
                            return r = e.sent, c = r.data, e.abrupt("return", c);
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), $ = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c, a;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, (r = new FormData).append("type", t.type), r.append("sex", t.sex), r.append("breed", t.breed), r.append("color", t.color), r.append("height", t.height), r.append("features", t.features), r.append("description", t.description), r.append("image", t.image[0]), r.append("location", t.location), r.append("contacts", t.contacts), r.append("userId", t.userId), r.append("status", t.status), e.next = 16, q.post("/api/pets", r, {headers: {"Content-Type": "multipart/form-data"}});
                        case 16:
                            return c = e.sent, a = c.data, e.abrupt("return", a);
                        case 21:
                            return e.prev = 21, e.t0 = e.catch(0), e.next = 25, Promise.reject(e.t0.response);
                        case 25:
                            return e.abrupt("return", e.sent);
                        case 26:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 21]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), ee = function () {
            var e = Object(L.a)(I.a.mark((function e(t, r, c) {
                var a, s;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, q.put("/api/pets/".concat(t), {status: r, contacts: c});
                        case 3:
                            return a = e.sent, s = a.data, e.abrupt("return", s);
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })));
            return function (t, r, c) {
                return e.apply(this, arguments)
            }
        }(), te = function () {
            var e = Object(L.a)(I.a.mark((function e(t) {
                var r, c;
                return I.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, q.delete("/api/pets/".concat(t));
                        case 3:
                            return r = e.sent, c = r.data, e.abrupt("return", c);
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), re = Object(m.b)({
            name: "pets",
            initialState: {pets: null, currentPet: null},
            reducers: {
                setPets: function (e, t) {
                    var r = t.payload;
                    e.pets = r
                }, setCurrentPet: function (e, t) {
                    var r = t.payload;
                    e.currentPet = r
                }, updatePetStatus: function (e, t) {
                    var r = t.payload;
                    e.pets = e.filter((function (e) {
                        return e.id !== r
                    }))
                }
            }
        }), ce = re.actions, ae = ce.setPets, se = ce.setCurrentPet, ne = ce.updatePetStatus, ie = function (e) {
            return e.pets
        }, oe = re.reducer;

        function le() {
            var e = Object(x.c)(w), t = Object(i.h)().pathname.slice(1), r = Object(x.c)(ie).pets,
                a = Object(c.useState)(!1), s = Object(o.a)(a, 2), n = s[0], l = s[1];
            return Object(u.jsx)("div", {
                id: "top",
                className: "navMainPage",
                style: {background: e || "found" === t || "lost" === t || t.startsWith("pet/") ? "snow" : "#06B2BB"},
                children: Object(u.jsxs)("div", {
                    className: "navContainer",
                    children: [e ? Object(u.jsx)(h.b, {
                        to: "/posts",
                        children: Object(u.jsx)(S, {color: "textColor"})
                    }) : "found" === t || "lost" === t || t.startsWith("pet/") ? Object(u.jsx)(h.b, {
                        to: "/",
                        className: "logo",
                        children: Object(u.jsx)(S, {color: "textColor"})
                    }) : Object(u.jsx)(h.b, {
                        to: "/",
                        children: Object(u.jsx)(S, {color: "whiteText"})
                    }), e ? Object(u.jsx)(u.Fragment, {
                        children: window.innerWidth < 518 ? Object(u.jsx)("div", {
                            className: "nav-bar-drop-down",
                            children: "lost" !== t && "found" !== t || !r ? Object(u.jsxs)(u.Fragment, {
                                children: ["posts" === t && Object(u.jsx)(h.b, {
                                    to: "/posts/add",
                                    children: Object(u.jsx)(b, {text: "Add new", icon: B.i, color: "btn"})
                                }), t.startsWith("services") && Object(u.jsx)(h.b, {
                                    to: "/services/add",
                                    children: Object(u.jsx)(b, {text: "Add service", icon: B.i, color: "btn"})
                                })]
                            }) : Object(u.jsxs)(u.Fragment, {
                                children: [Object(u.jsxs)("div", {
                                    className: "drop-down-visible",
                                    onClick: function () {
                                        l(!n)
                                    },
                                    children: [Object(u.jsx)(d.a, {size: "1x", icon: B.a}), "Menu"]
                                }), n && Object(u.jsx)("div", {
                                    className: "drop-down-hidden",
                                    children: Object(u.jsxs)(u.Fragment, {
                                        children: [r.access && Object(u.jsx)(h.b, {
                                            to: "/lost/add",
                                            children: Object(u.jsx)(b, {
                                                text: "I lost my pet",
                                                icon: B.k,
                                                color: "redBtn"
                                            })
                                        }), Object(u.jsx)(h.b, {
                                            to: "/found/add",
                                            children: Object(u.jsx)(b, {text: "I found a pet", icon: B.h, color: "btn"})
                                        })]
                                    })
                                })]
                            })
                        }) : Object(u.jsx)("div", {
                            style: {
                                width: window.innerWidth < 551 ? "290px" : "320px",
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "row-reverse"
                            },
                            children: "lost" !== t && "found" !== t || !r ? Object(u.jsxs)(u.Fragment, {
                                children: ["posts" === t && Object(u.jsx)(h.b, {
                                    to: "/posts/add",
                                    children: Object(u.jsx)(b, {text: "Add new", icon: B.i, color: "btn"})
                                }), t.startsWith("services") && Object(u.jsx)(h.b, {
                                    to: "/services/add",
                                    children: Object(u.jsx)(b, {text: "Add service", icon: B.i, color: "btn"})
                                })]
                            }) : Object(u.jsxs)(u.Fragment, {
                                children: [r.access && Object(u.jsx)(h.b, {
                                    to: "/lost/add",
                                    children: Object(u.jsx)(b, {text: "I lost my pet", icon: B.k, color: "redBtn"})
                                }), Object(u.jsx)(h.b, {
                                    to: "/found/add",
                                    children: Object(u.jsx)(b, {text: "I found a pet", icon: B.h, color: "btn"})
                                })]
                            })
                        })
                    }) : "found" === t || "lost" === t || t.startsWith("pet/") ? Object(u.jsx)(u.Fragment, {}) : Object(u.jsx)(h.b, {
                        to: "/signin",
                        children: Object(u.jsx)(b, {color: "btn", text: "Sign in"})
                    })]
                })
            })
        }

        var je = r.p + "static/media/Image2.fc520a8f.png";

        function de() {
            var e = Object(i.g)().push;
            return Object(u.jsxs)("button", {
                className: "btnLost",
                onClick: function (t) {
                    return e("/lost")
                },
                children: [Object(u.jsx)("div", {
                    className: "btn-lost-hover",
                    children: Object(u.jsx)("h3", {children: "Click to find"})
                }), Object(u.jsx)("div", {
                    className: "btn-lost-state",
                    children: Object(u.jsx)("h3", {className: "textBtnLost", children: "I lost my pet!"})
                }), Object(u.jsx)("img", {
                    src: "data:image/png;base64,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",
                    alt: "logo-short"
                })]
            })
        }

        function ue() {
            var e = Object(i.g)();
            return Object(u.jsxs)("button", {
                className: "btnFound",
                onClick: function (t) {
                    return e.push("/found")
                },
                children: [Object(u.jsx)("div", {
                    className: "btn-found-hover",
                    children: Object(u.jsx)("h3", {children: "What to do?"})
                }), Object(u.jsx)("div", {
                    className: "btn-found-state",
                    children: Object(u.jsx)("h3", {className: "textBtnLost", children: "I found a pet!"})
                })]
            })
        }

        var pe = r.p + "https://maksimkostenko1994.github.io/pro-pets/static/media/dogCatBirdBig.b002b62a.png";

        function be() {
            return Object(u.jsxs)(u.Fragment, {
                children: [Object(u.jsxs)("div", {
                    className: "mainPageContainer",
                    children: [Object(u.jsxs)("div", {
                        className: "header-container",
                        children: [Object(u.jsxs)("div", {
                            className: "mainLeftContainer",
                            children: [Object(u.jsxs)("h1", {children: ["Welcome to your ", Object(u.jsx)("br", {}), Object(u.jsx)("span", {children: "pawfessional"}), Object(u.jsx)("br", {}), " community"]}), Object(u.jsxs)("div", {
                                className: "btnContainer",
                                children: [Object(u.jsx)(de, {}), Object(u.jsx)(ue, {})]
                            })]
                        }), Object(u.jsx)("div", {
                            className: "mainRightContainer",
                            children: Object(u.jsx)("img", {src: je, alt: "main-img"})
                        })]
                    }), Object(u.jsxs)("p", {
                        className: "mainPageJoinLink",
                        children: ["I'm okay, just want to ", Object(u.jsx)(h.b, {
                            to: "/signin",
                            children: "JOIN"
                        }), " the pawsome community!"]
                    })]
                }), Object(u.jsx)("div", {
                    className: "section-title",
                    children: Object(u.jsxs)("h1", {children: ["Our fluffy space for lovers, admirers, dads and moms ", Object(u.jsx)("br", {}), "of our four-legged, winged, tailed guys."]})
                }), Object(u.jsxs)("div", {
                    className: "section-info",
                    children: [Object(u.jsx)("div", {
                        className: "info-image",
                        children: Object(u.jsx)("img", {src: pe, alt: ""})
                    }), Object(u.jsxs)("div", {
                        className: "info-items",
                        children: [Object(u.jsx)("h2", {children: "Here is collected everything that your pet needs:"}), Object(u.jsxs)("ul", {children: [Object(u.jsxs)("li", {children: [Object(u.jsx)("span", {}), "profession veterinarian tips;"]}), Object(u.jsxs)("li", {children: [Object(u.jsx)("span", {}), "useful information about education and care;"]}), Object(u.jsxs)("li", {children: [Object(u.jsx)("span", {}), "information about pet-sitting and walking service"]}), Object(u.jsxs)("li", {children: [Object(u.jsx)("span", {}), "and of course, great communication with new ", Object(u.jsx)("br", {}), "friends in your social network!"]})]}), Object(u.jsxs)("p", {
                            children: [Object(u.jsx)("span", {}), "Make an account and ", Object(u.jsx)(h.b, {
                                to: "/signin",
                                children: "JOIN"
                            }), " to us!"]
                        })]
                    })]
                }), Object(u.jsx)("footer", {
                    className: "section-footer",
                    children: Object(u.jsxs)("div", {
                        className: "footer-container",
                        children: [Object(u.jsx)("div", {
                            children: Object(u.jsx)("a", {
                                href: "#top",
                                children: Object(u.jsx)(S, {color: "whiteText"})
                            })
                        }), Object(u.jsx)("div", {children: Object(u.jsxs)("p", {children: ["1600 Amphitheatre Pkwy ", Object(u.jsx)("br", {}), "Mountain View, CA 94043, USA"]})})]
                    })
                })]
            })
        }

        r(140), r(74), r(141);
        var he, xe = function (e) {
                var t = e.currentForm;
                return Object(u.jsxs)("div", {
                    className: "modal-window-footer",
                    children: [Object(u.jsx)("div", {
                        className: "text-box",
                        children: Object(u.jsxs)("p", {children: ['By clicking "Submit", you agree to us processing your information in accordance width ', Object(u.jsx)("span", {children: "these terms"}), "."]})
                    }), Object(u.jsxs)("div", {
                        className: "btns-box",
                        children: [Object(u.jsx)(h.b, {
                            to: "/",
                            children: Object(u.jsx)(b, {color: "btnWhite", text: "Cancel"})
                        }), t ? Object(u.jsx)(b, {
                            name: "login",
                            icon: B.h,
                            text: "Login",
                            color: "btn"
                        }) : Object(u.jsx)(b, {name: "reg", icon: B.h, text: "Registration", color: "btn"})]
                    }), Object(u.jsx)("div", {
                        className: "text-box-hide",
                        children: Object(u.jsxs)("p", {children: ['By clicking "Submit", you agree to us processing your information in accordance width ', Object(u.jsx)("span", {children: "these terms"}), "."]})
                    })]
                })
            }, me = r(3), Oe = r(12), ve = r(13), fe = function (e) {
                var t = e.text, r = e.errorClass;
                return Object(u.jsx)("div", {className: r, children: Object(u.jsx)("p", {children: t})})
            }, ge = ["error"], Ne = function (e) {
                var t = e.error, r = Object(j.a)(e, ge);
                return Object(u.jsxs)(u.Fragment, {children: [Object(u.jsx)("input", Object(ve.a)({}, r)), t && Object(u.jsx)(fe, {text: t})]})
            }, ye = function (e) {
                var t, r = e.currentForm, c = Object(x.b)(), a = Object(i.g)(), s = Object(x.c)(G),
                    n = me.a().shape({email: me.b().email().required(), password: me.b().min(6).required()}),
                    o = Object(Oe.b)({
                        defaultValues: {email: "", password: ""}, validate: (t = n, function () {
                            var e = Object(L.a)(I.a.mark((function e(r) {
                                var c;
                                return I.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return c = {}, e.prev = 1, e.next = 4, t.validate(r, {abortEarly: !1});
                                        case 4:
                                            e.next = 9;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(1), e.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return e.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, null, [[1, 6]])
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()), onSubmit: function (e, t, r) {
                            var s;
                            "login" === r.submitter.name && c((s = e, function () {
                                var e = Object(L.a)(I.a.mark((function e(t) {
                                    var r;
                                    return I.a.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(N(!0)), t(V()), e.prev = 2, e.next = 5, Y(s);
                                            case 5:
                                                return r = e.sent, t(A(r.data.user)), t(g()), e.abrupt("return", r);
                                            case 11:
                                                e.prev = 11, e.t0 = e.catch(2), t(D({
                                                    data: e.t0.data,
                                                    status: e.t0.status
                                                }));
                                            case 14:
                                                return e.prev = 14, t(N(!1)), e.finish(14);
                                            case 17:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[2, 11, 14, 17]])
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }())).then((function (e) {
                                200 === e.status && a.push("/posts")
                            })).catch((function (e) {
                                return e
                            }))
                        }
                    }), l = o.form, j = (0, o.use)("errors", {errorWithTouched: !0});
                return Object(u.jsx)("div", {
                    className: "signup-box",
                    children: Object(u.jsxs)("form", {
                        ref: l,
                        className: "signup-form",
                        noValidate: !0,
                        children: [Object(u.jsxs)("div", {
                            className: "signup-div",
                            children: [Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Email:"}), Object(u.jsx)(Ne, {
                                    name: "email",
                                    type: "email",
                                    error: j.email
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Password:"}), Object(u.jsx)(Ne, {
                                    name: "password",
                                    type: "password",
                                    error: j.password
                                })]
                            }), s && Object(u.jsx)(fe, {text: s.data.message, errorClass: "not-auth-error"})]
                        }), Object(u.jsx)(xe, {currentForm: r, user: "login"})]
                    })
                })
            }, Ae = function (e) {
                var t, r = e.currentForm, c = Object(x.c)(G), a = Object(x.b)(), s = Object(i.g)(), n = me.a().shape({
                    name: me.b().min(3).required(),
                    email: me.b().email().required(),
                    password: me.b().min(6).required(),
                    verify: me.b().min(6).test("match", "password do not match", (function () {
                        return this.parent.password === this.parent.verify
                    })).required()
                }), o = Object(Oe.b)({
                    defaultValues: {name: "", email: "", password: "", verify: ""}, validate: (t = n, function () {
                        var e = Object(L.a)(I.a.mark((function e(r) {
                            var c;
                            return I.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = {}, e.prev = 1, e.next = 4, t.validate(r, {abortEarly: !1});
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), e.t0.inner.forEach((function (e) {
                                            var t = e.path, r = e.message;
                                            return Object(Oe.a)(c, t, r)
                                        }));
                                    case 9:
                                        return e.abrupt("return", c);
                                    case 10:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[1, 6]])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()), onSubmit: function (e, t, r) {
                        var n;
                        "reg" === r.submitter.name && (a((n = e, function () {
                            var e = Object(L.a)(I.a.mark((function e(t) {
                                var r;
                                return I.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return t(N(!0)), t(V()), e.prev = 2, e.next = 5, J(n);
                                        case 5:
                                            r = e.sent, t(g()), t(A(r)), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), t(D({data: e.t0.data, status: e.t0.status}));
                                        case 13:
                                            return e.prev = 13, t(N(!1)), e.finish(13);
                                        case 16:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, null, [[2, 10, 13, 16]])
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }())), c || s.push("/posts"))
                    }
                }), l = o.form, j = (0, o.use)("errors", {errorWithTouched: !0});
                return Object(u.jsx)("div", {
                    className: "signup-box",
                    children: Object(u.jsxs)("form", {
                        ref: l,
                        className: "signup-form",
                        noValidate: !0,
                        children: [Object(u.jsxs)("div", {
                            className: "signup-div",
                            children: [Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Name:"}), Object(u.jsx)(Ne, {
                                    name: "name",
                                    type: "text",
                                    error: j.name
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Email:"}), Object(u.jsx)(Ne, {
                                    name: "email",
                                    type: "email",
                                    error: j.email
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Password:"}), Object(u.jsx)(Ne, {
                                    name: "password",
                                    type: "password",
                                    error: j.password
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "signup-form-field",
                                children: [Object(u.jsx)("label", {children: "Verify:"}), Object(u.jsx)(Ne, {
                                    name: "verify",
                                    type: "password",
                                    error: j.verify
                                })]
                            }), c && Object(u.jsx)(fe, {text: c.data.message, errorClass: "not-auth-error"})]
                        }), Object(u.jsx)(xe, {currentForm: r})]
                    })
                })
            }, ke = function () {
                var e = Object(c.useState)(!0), t = Object(o.a)(e, 2), r = t[0], a = t[1], s = function (e, t) {
                    e.preventDefault(), document.querySelectorAll(".btn").forEach((function (e) {
                        return e.classList.remove("active")
                    })), e.target.classList.add("active"), a(t)
                };
                return Object(u.jsx)("div", {
                    className: "modal-window",
                    children: Object(u.jsxs)("div", {
                        className: "modal-window-body",
                        children: [Object(u.jsx)(S, {color: "textColor"}), Object(u.jsxs)("h5", {children: [Object(u.jsx)("span", {children: "Welcome! "}), "Please sign in / sign up to continue or"]}), Object(u.jsxs)("div", {
                            className: "nav-btns",
                            children: [Object(u.jsx)("button", {
                                className: "btn active", onClick: function (e) {
                                    return function (e) {
                                        s(e, !0)
                                    }(e)
                                }, children: "Sign in"
                            }), Object(u.jsx)("button", {
                                className: "btn", onClick: function (e) {
                                    return function (e) {
                                        s(e, !1)
                                    }(e)
                                }, children: "Sign up"
                            })]
                        }), r ? Object(u.jsx)(ye, {currentForm: r}) : Object(u.jsx)(Ae, {currentForm: r})]
                    })
                })
            }, we = function () {
                return Object(u.jsx)("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        width: "100vw",
                        height: "100vh",
                        zIndex: "1000"
                    },
                    children: Object(u.jsx)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%"
                        },
                        children: Object(u.jsxs)("div", {
                            className: "lds-roller",
                            children: [Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {}), Object(u.jsx)("div", {})]
                        })
                    })
                })
            }, Ce = function () {
                var e = Object(x.c)(k).auth, t = Object(c.useState)(null), r = Object(o.a)(t, 2), a = r[0], s = r[1],
                    n = Object(c.useState)(45), i = Object(o.a)(n, 2), l = i[0], j = i[1],
                    d = Object(c.useState)(window.innerWidth), p = Object(o.a)(d, 2), m = p[0], O = p[1],
                    v = document.querySelector(".hamburger"), f = function (e) {
                        var t = e.currentTarget;
                        O(t.innerWidth)
                    };
                return Object(c.useEffect)((function () {
                    return window.addEventListener("resize", f), function () {
                        window.removeEventListener("resize", f)
                    }
                }), []), Object(c.useEffect)((function () {
                    if (v) {
                        var e = v.parentNode;
                        if (m > 780) e.parentNode.style.gridTemplateColumns = "1fr 3fr 1fr"; else {
                            if (!1 === a && 200 === l) {
                                var t = l, r = setInterval((function () {
                                    e.parentNode.style.gridTemplateColumns = "".concat(t, "px 1fr ").concat(t, "px"), 45 === t ? (clearInterval(r), j(45)) : j(t -= 5)
                                }), 1e3 / 155);
                                e.classList.remove("arrow"), v.classList.remove("hamburger--arrow")
                            }
                            if (!0 === a && 45 === l) {
                                var c = l, s = setInterval((function () {
                                    e.parentNode.style.gridTemplateColumns = "".concat(c, "px 1fr ").concat(c, "px"), 200 === c ? (clearInterval(s), j(200)) : j(c += 5)
                                }), 1e3 / 155);
                                e.classList.add("arrow"), v.classList.add("hamburger--arrow")
                            }
                        }
                    }
                }), [a, v, l, m]), Object(u.jsxs)("div", {
                    className: "left-nav-bar",
                    children: [Object(u.jsx)("div", {
                        className: "hamburger",
                        onClick: function () {
                            s(!a)
                        },
                        children: Object(u.jsxs)("div", {children: [Object(u.jsx)("span", {id: "hm-1"}), Object(u.jsx)("span", {id: "hm-2"}), Object(u.jsx)("span", {id: "hm-3"})]})
                    }), Object(u.jsxs)("div", {
                        className: "left-menu",
                        children: [e ? Object(u.jsx)(h.c, {
                            to: "/posts",
                            children: Object(u.jsx)(b, {text: "Home", icon: B.e, color: "btn"})
                        }) : Object(u.jsx)(h.b, {to: ""}), Object(u.jsx)(h.c, {
                            to: "/lost",
                            children: Object(u.jsx)(b, {text: "Lost", icon: B.k, color: "btn"})
                        }), Object(u.jsx)(h.c, {
                            to: "/found",
                            children: Object(u.jsx)(b, {text: "Found", icon: B.h, color: "btn"})
                        })]
                    }), e && Object(u.jsxs)("div", {
                        className: "left-menu-services",
                        children: [Object(u.jsx)("h3", {children: "Services"}), Object(u.jsxs)("div", {
                            children: [Object(u.jsx)(h.c, {
                                to: "/services/Hotels",
                                children: Object(u.jsx)(b, {text: "Hotels", icon: B.f, color: "btn"})
                            }), Object(u.jsx)(h.c, {
                                to: "/services/Walking",
                                children: Object(u.jsx)(b, {text: "Walking", icon: B.p, color: "btn"})
                            }), Object(u.jsx)(h.c, {
                                to: "/services/Fostering",
                                children: Object(u.jsx)(b, {text: "Fostering", icon: B.d, color: "btn"})
                            }), Object(u.jsx)(h.c, {
                                to: "/services/VetHelp",
                                children: Object(u.jsx)(b, {text: "VetHelp", icon: B.m, color: "btn"})
                            })]
                        })]
                    })]
                })
            }, Be = r(100), Se = function () {
                var e = Object(L.a)(I.a.mark((function e(t, r) {
                    var c, a, s;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, (c = new FormData).append("userId", r), c.append("postId", t), e.next = 6, q.post("/api/likes/", c, {headers: {"Content-Type": "multipart/form-data"}});
                            case 6:
                                return a = e.sent, s = a.data, e.abrupt("return", s);
                            case 11:
                                return e.prev = 11, e.t0 = e.catch(0), e.next = 15, Promise.reject(e.t0.response);
                            case 15:
                                return e.abrupt("return", e.sent);
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 11]])
                })));
                return function (t, r) {
                    return e.apply(this, arguments)
                }
            }(), Pe = function () {
                var e = Object(L.a)(I.a.mark((function e(t) {
                    var r, c;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, q.delete("/api/likes/", {data: Object(ve.a)({}, t)});
                            case 3:
                                return r = e.sent, c = r.data, e.abrupt("return", c);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 8]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), Ie = function () {
                var e = Object(L.a)(I.a.mark((function e(t, r) {
                    var c, a;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, q.get("/api/posts/?page=".concat(t, "&limit=").concat(r));
                            case 3:
                                return c = e.sent, a = c.data, e.abrupt("return", a);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 8]])
                })));
                return function (t, r) {
                    return e.apply(this, arguments)
                }
            }(), Le = function () {
                var e = Object(L.a)(I.a.mark((function e(t, r, c) {
                    var a, s;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, q.get("/api/posts/".concat(t, "?page=").concat(r, "&limit=").concat(c));
                            case 3:
                                return a = e.sent, s = a.data, e.abrupt("return", s);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 8]])
                })));
                return function (t, r, c) {
                    return e.apply(this, arguments)
                }
            }(), Fe = function () {
                var e = Object(L.a)(I.a.mark((function e(t) {
                    var r, c, a;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, (r = new FormData).append("title", t.title), r.append("text", t.text), r.append("photo", t.photo[0]), r.append("userId", t.userId), e.next = 8, q.post("/api/posts/", r, {headers: {"Content-Type": "multipart/form-data"}});
                            case 8:
                                return c = e.sent, a = c.data, e.abrupt("return", a);
                            case 13:
                                return e.prev = 13, e.t0 = e.catch(0), e.next = 17, Promise.reject(e.t0.response);
                            case 17:
                                return e.abrupt("return", e.sent);
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 13]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), Te = Object(m.b)({
                name: "pagination",
                initialState: {currentPage: 1, limit: 4, pages: null},
                reducers: {
                    setCurrentPage: function (e, t) {
                        var r = t.payload;
                        e.currentPage = r
                    }, setPagination: function (e, t) {
                        var r = t.payload;
                        e.limit = r.limit, e.pages = Math.ceil(r.total / r.limit)
                    }, resetPagination: function (e, t) {
                        var r = t.payload;
                        e.currentPage = r
                    }
                }
            }), We = Te.reducer, qe = Te.actions, Ee = qe.setCurrentPage, He = qe.setPagination,
            Je = (qe.resetPagination, function (e) {
                return e.pagination
            }), Ye = function (e) {
                return function () {
                    var t = Object(L.a)(I.a.mark((function t(r) {
                        return I.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    r(Ee(e));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, Ue = Object(m.b)({
                name: "posts",
                initialState: {posts: null, post: null, likes: []},
                reducers: {
                    setPosts: function (e, t) {
                        var r = t.payload;
                        e.posts = r
                    }, addPost: function (e, t) {
                        var r = t.payload;
                        e.posts.push(Object(ve.a)({}, r))
                    }, setCurrentPost: function (e, t) {
                        var r = t.payload;
                        e.post = r
                    }, addLike: function (e, t) {
                        var r = t.payload;
                        e.likes.push(r)
                    }, addDislike: function (e, t) {
                        var r = t.payload;
                        e.likes.splice(r)
                    }
                }
            }), Re = Ue.reducer, ze = function (e, t, r) {
                return function () {
                    var c = Object(L.a)(I.a.mark((function c(a) {
                        var s;
                        return I.a.wrap((function (c) {
                            for (; ;) switch (c.prev = c.next) {
                                case 0:
                                    return a(N(!0)), a(V()), c.prev = 2, c.next = 5, Le(e, t, r);
                                case 5:
                                    s = c.sent, a(De(s)), a(He({
                                        total: s.commentsCount,
                                        limit: 10
                                    })), Math.ceil(s.commentsCount / r) < t ? a(Ee(1)) : a(Ee(t)), c.next = 14;
                                    break;
                                case 11:
                                    c.prev = 11, c.t0 = c.catch(2), a(D({data: c.t0.data, status: c.t0.status}));
                                case 14:
                                    return c.prev = 14, a(N(!1)), c.finish(14);
                                case 17:
                                case"end":
                                    return c.stop()
                            }
                        }), c, null, [[2, 11, 14, 17]])
                    })));
                    return function (e) {
                        return c.apply(this, arguments)
                    }
                }()
            }, Ke = Ue.actions, Me = Ke.setPosts, Ze = Ke.addPost, De = Ke.setCurrentPost, Ve = Ke.addLike,
            Ge = (Ke.addDislike, function (e) {
                return e.posts.posts
            }), Xe = function (e) {
                return e.posts.post
            }, Qe = (r(240), r(30)), _e = r(21), $e = r.n(_e), et = function (e) {
                var t = e.post, r = t.createdAt, c = $e()(r).format("D MMMM, HH:mm");
                return Object(u.jsxs)("div", {
                    className: "post",
                    children: [Object(u.jsxs)("div", {
                        className: "post-header",
                        children: [t.avatar ? Object(u.jsx)("div", {
                            className: "post-header-img",
                            children: Object(u.jsx)("img", {
                                src: "https://pro-pets-server.herokuapp.com/".concat(t.avatar),
                                alt: "user-avatar"
                            })
                        }) : Object(u.jsx)("div", {
                            className: "user-avatar",
                            children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                        }), Object(u.jsxs)("div", {
                            className: "post-header-author",
                            children: [Object(u.jsx)("h3", {children: t.full_name}), Object(u.jsx)("p", {children: c})]
                        })]
                    }), Object(u.jsx)("div", {
                        className: "post-body",
                        children: Object(u.jsx)("img", {
                            className: "post-img",
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.photo),
                            alt: "dog"
                        })
                    }), Object(u.jsxs)("div", {
                        className: "post-footer",
                        children: [Object(u.jsx)("h4", {children: t.title}), Object(u.jsx)(h.c, {
                            to: "/postsFullInfo/".concat(t.id),
                            className: "post-footer-more",
                            children: "...more"
                        }), Object(u.jsxs)("div", {
                            className: "post-footer-like-box",
                            children: [Object(u.jsx)(d.a, {icon: Qe.b}), Object(u.jsx)("p", {children: t.count})]
                        })]
                    })]
                })
            }, tt = r(101), rt = (r(241), function () {
                var e = Object(x.c)(Je), t = e.currentPage, r = e.pages, a = Object(x.c)(Ge), s = Object(x.b)();
                return Object(c.useEffect)((function () {
                    var e, r;
                    s((e = t, r = 2, function () {
                        var t = Object(L.a)(I.a.mark((function t(c) {
                            var a;
                            return I.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return c(N(!0)), c(V()), t.prev = 2, t.next = 5, Ie(e, r);
                                    case 5:
                                        a = t.sent, c(Me(a)), c(He({
                                            total: a.count,
                                            limit: 2
                                        })), Math.ceil(a.count / r) < e ? c(Ee(1)) : c(Ee(e)), t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(2), c(D({data: t.t0.data, status: t.t0.status}));
                                    case 14:
                                        return t.prev = 14, c(N(!1)), t.finish(14);
                                    case 17:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[2, 11, 14, 17]])
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()))
                }), [s, t]), a ? Object(u.jsxs)(ct, {
                    children: [Object(u.jsx)("div", {
                        className: "post-pagination",
                        children: function (e) {
                            for (var t = [], r = 1; r <= e; r++) t.push(r);
                            return t
                        }(r).map((function (e) {
                            return Object(u.jsx)("p", {
                                id: e, onClick: function (t) {
                                    s(Ye(e)), t.target.classList.add("post-active-link"), Array.from(t.target.parentNode.children).map((function (e) {
                                        return t.target.id !== e.id ? e.classList.remove("post-active-link") : ""
                                    }))
                                }, children: e
                            }, e)
                        }))
                    }), a.rows.map((function (e) {
                        return Object(u.jsx)("li", {children: Object(u.jsx)(et, {post: e})}, e.id)
                    }))]
                }) : Object(u.jsx)("h1", {children: "No Posts yet"})
            }), ct = tt.a.ul(he || (he = Object(Be.a)(["\n    padding-top: 40px;\n    list-style: none;\n"]))),
            at = (r(242), r(243), function (e) {
                var t = e.comment, r = t.createdAt, c = $e()(r).format("D MMMM, HH:mm");
                return Object(u.jsxs)("div", {
                    className: "user-comment",
                    children: [Object(u.jsxs)("span", {children: [t.user.full_name, " | ", c]}), Object(u.jsx)("p", {children: t.text})]
                })
            }), st = (r(244), function () {
                var e = Object(L.a)(I.a.mark((function e(t) {
                    var r, c, a;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, (r = new FormData).append("userId", t.userId), r.append("postId", t.postId), r.append("text", t.text), e.next = 7, q.post("/api/comments", r, {headers: {"Content-Type": "multipart/form-data"}});
                            case 7:
                                return c = e.sent, a = c.data, e.abrupt("return", a);
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), e.next = 16, Promise.reject(e.t0.response);
                            case 16:
                                return e.abrupt("return", e.sent);
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 12]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()), nt = Object(m.b)({
                name: "comments",
                initialState: {comments: []},
                reducers: {
                    setPostComments: function (e, t) {
                        var r = t.payload;
                        e.comments = r
                    }, addComment: function (e, t) {
                        var r = t.payload;
                        e.comments.push(r)
                    }
                }
            }), it = nt.reducer, ot = nt.actions, lt = (ot.setPostComments, ot.addComment), jt = function () {
                var e = Object(x.c)(C), t = Object(i.i)().id, r = Object(x.b)(), c = Object(Oe.b)({
                    defaultValues: {text: "", postId: t, userId: e.id}, onSubmit: function (e, t) {
                        var c, a = t.reset;
                        e.text.trim() && (r((c = e, function () {
                            var e = Object(L.a)(I.a.mark((function e(t) {
                                var r;
                                return I.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return t(V()), t(N(!0)), e.prev = 2, e.next = 5, st(c);
                                        case 5:
                                            r = e.sent, t(lt(r)), t(ze(r.postId, 1, 10)), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), t(D({
                                                data: e.t0.data,
                                                status: e.t0.status
                                            }));
                                        case 13:
                                            return e.prev = 13, t(N(!1)), e.finish(13);
                                        case 16:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, null, [[2, 10, 13, 16]])
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }())), a())
                    }
                }).form;
                return Object(u.jsx)("div", {
                    className: "add-comment-container",
                    children: Object(u.jsxs)("form", {
                        ref: c,
                        className: "add-comment-form",
                        children: [Object(u.jsx)("textarea", {
                            placeholder: "type your comment",
                            className: "commentArea",
                            rows: 3,
                            name: "text",
                            required: !0
                        }), Object(u.jsxs)("div", {
                            className: "comment-footer",
                            children: [Object(u.jsx)(d.a, {icon: Qe.a}), Object(u.jsx)("button", {children: "add comments"})]
                        })]
                    })
                })
            }, dt = function () {
                var e = Object(x.c)(Xe), t = Object(x.c)(C), r = Object(x.c)(Je), a = r.currentPage, s = r.pages,
                    n = r.limit, o = Object(x.b)(), l = e && e.likes.find((function (e) {
                        return e.userId === t.id
                    })), j = Object(i.i)().id;
                Object(c.useEffect)((function () {
                    o(ze(j, a, n))
                }), [o, j, a, n]);
                var p = !!e && $e()(e.createdAt).format("D MMMM, HH:mm"), m = e && e.likes.find((function (e) {
                    return e.userId === t.id
                })) && !0;
                return e && Object(u.jsxs)(u.Fragment, {
                    children: [Object(u.jsx)("div", {
                        className: "service-pagination",
                        style: {top: "600px"},
                        children: function (e) {
                            for (var t = [], r = 1; r <= e; r++) t.push(r);
                            return t
                        }(s).map((function (e) {
                            return Object(u.jsx)("p", {
                                id: e, onClick: function (t) {
                                    o(Ye(e)), t.target.classList.add("service-active-link"), Array.from(t.target.parentNode.children).map((function (e) {
                                        return t.target.id !== e.id ? e.classList.remove("service-active-link") : ""
                                    }))
                                }, children: e
                            }, e)
                        }))
                    }), Object(u.jsxs)("div", {
                        className: "fullPost",
                        children: [Object(u.jsx)("div", {
                            className: "fullPost-header-button",
                            children: Object(u.jsx)(h.b, {
                                to: "/posts",
                                children: Object(u.jsx)(b, {text: "back", color: "btn"})
                            })
                        }), Object(u.jsx)("div", {
                            className: "fullPost-header",
                            children: Object(u.jsxs)("div", {
                                className: "full-Post-header-left",
                                children: [e.avatar ? Object(u.jsx)("div", {
                                    className: "fullPost-header-img",
                                    children: Object(u.jsx)("img", {
                                        src: "https://pro-pets-server.herokuapp.com/".concat(e.avatar),
                                        alt: "user-avatar"
                                    })
                                }) : Object(u.jsx)("div", {
                                    className: "fullPost-header-img",
                                    children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                                }), Object(u.jsxs)("div", {
                                    className: "fullPost-header-author",
                                    children: [Object(u.jsx)("h3", {children: e.full_name}), Object(u.jsx)("p", {children: p || ""})]
                                })]
                            })
                        }), Object(u.jsx)("div", {
                            className: "fullPost-body",
                            children: Object(u.jsx)("img", {
                                className: "fullPost-img",
                                src: "https://pro-pets-server.herokuapp.com/".concat(e.photo),
                                alt: "dog"
                            })
                        }), Object(u.jsxs)("div", {
                            className: "fullPost-footer",
                            children: [Object(u.jsx)("h4", {children: e.title}), Object(u.jsx)("p", {
                                className: "fullPost-post-text",
                                children: e.text
                            }), Object(u.jsxs)("div", {
                                className: "fullPost-footer-like-box",
                                children: [Object(u.jsx)("p", {children: e.count}), m ? Object(u.jsxs)(u.Fragment, {
                                    children: [Object(u.jsx)(d.a, {icon: B.n}), Object(u.jsx)("button", {
                                        onClick: function () {
                                            return o(function (e) {
                                                return function () {
                                                    var t = Object(L.a)(I.a.mark((function t(r) {
                                                        return I.a.wrap((function (t) {
                                                            for (; ;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return r(V()), t.prev = 1, t.next = 4, Pe(e);
                                                                case 4:
                                                                    r(ze(e.postId, 1, 10)), t.next = 10;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(1), r(D({
                                                                        data: t.t0.data,
                                                                        status: t.t0.status
                                                                    }));
                                                                case 10:
                                                                case"end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [[1, 7]])
                                                    })));
                                                    return function (e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()
                                            }(l))
                                        }, children: "add dislike"
                                    })]
                                }) : Object(u.jsxs)(u.Fragment, {
                                    children: [Object(u.jsx)(d.a, {icon: Qe.b}), Object(u.jsx)("button", {
                                        onClick: function () {
                                            return o((r = e.id, c = t.id, function () {
                                                var e = Object(L.a)(I.a.mark((function e(t) {
                                                    var a;
                                                    return I.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t(V()), e.prev = 1, e.next = 4, Se(r, c);
                                                            case 4:
                                                                a = e.sent, t(Ve(a)), t(ze(a.postId, 1, 10)), e.next = 12;
                                                                break;
                                                            case 9:
                                                                e.prev = 9, e.t0 = e.catch(1), t(D({
                                                                    data: e.t0.data,
                                                                    status: e.t0.status
                                                                }));
                                                            case 12:
                                                            case"end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [[1, 9]])
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()));
                                            var r, c
                                        }, children: "add like"
                                    })]
                                })]
                            })]
                        }), Object(u.jsxs)("div", {
                            className: "comments",
                            children: [Object(u.jsx)("p", {
                                className: "comments-p",
                                children: "Comments"
                            }), Object(u.jsx)("hr", {}), 0 === e.comments.length ? Object(u.jsx)("h3", {children: "No comments yet"}) : Object(u.jsx)("div", {
                                children: e.comments.map((function (e, t) {
                                    return Object(u.jsx)("li", {children: Object(u.jsx)(at, {comment: e})}, t)
                                }))
                            })]
                        }), Object(u.jsx)(jt, {})]
                    })]
                })
            }, ut = (r(245), function () {
                var e, t = Object(x.c)(C), r = Object(x.b)(), a = Object(c.useState)(t.full_name), s = Object(o.a)(a, 2),
                    n = s[0], i = s[1], l = Object(c.useState)(t.pet_photo), j = Object(o.a)(l, 1)[0],
                    p = Object(c.useState)(t.avatar), h = Object(o.a)(p, 1)[0], m = me.a().shape({
                        avatar: me.b().nullable(),
                        email: me.b().email(),
                        phone: me.b().nullable(),
                        user_pet: me.b().nullable(),
                        nick: me.b().nullable(),
                        pet_photo: me.b().nullable()
                    }), O = Object(Oe.b)({
                        defaultValues: {
                            avatar: t.avatar,
                            email: t.email,
                            phone: t.phone,
                            user_pet: t.user_pet,
                            nick: t.nick,
                            pet_photo: t.pet_photo
                        }, validate: (e = m, function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = {}, t.prev = 1, t.next = 4, e.validate(r, {abortEarly: !1});
                                        case 4:
                                            t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), t.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return t.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[1, 6]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()), onSubmit: function (e) {
                            var c = Object(ve.a)({id: t.id, full_name: n, petPhotoOld: j, avatarPhotoOld: h}, e);
                            t.full_name === c.full_name && t.email === c.email && t.avatar === c.avatar && t.phone === c.phone && t.user_pet === c.user_pet && t.nick === c.nick && t.pet_photo === c.pet_photo || r(function (e, t, r) {
                                return function () {
                                    var c = Object(L.a)(I.a.mark((function c(a) {
                                        var s;
                                        return I.a.wrap((function (c) {
                                            for (; ;) switch (c.prev = c.next) {
                                                case 0:
                                                    return a(N(!0)), a(V()), c.prev = 2, c.next = 5, z(e, t, r);
                                                case 5:
                                                    s = c.sent, a(A(s)), c.next = 12;
                                                    break;
                                                case 9:
                                                    c.prev = 9, c.t0 = c.catch(2), a(D({data: c.t0.data, status: c.t0.status}));
                                                case 12:
                                                    return c.prev = 12, a(N(!1)), c.finish(12);
                                                case 15:
                                                case"end":
                                                    return c.stop()
                                            }
                                        }), c, null, [[2, 9, 12, 15]])
                                    })));
                                    return function (e) {
                                        return c.apply(this, arguments)
                                    }
                                }()
                            }(c, j, h))
                        }
                    }), v = O.form, f = O.use;
                Object(c.useEffect)((function () {
                    var e;
                    r((e = (localStorage.getItem("token") ? Object(E.a)(localStorage.getItem("token")) : null).id, function () {
                        var t = Object(L.a)(I.a.mark((function t(r) {
                            var c;
                            return I.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return r(N(!0)), r(V()), t.prev = 2, t.next = 5, R(e);
                                    case 5:
                                        c = t.sent, A(c), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), r(D({data: t.t0.data, status: t.t0.status}));
                                    case 12:
                                        return t.prev = 12, r(N(!1)), t.finish(12);
                                    case 15:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[2, 9, 12, 15]])
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()))
                }), [r]);
                var g = f("errors", {errorWithTouched: !0});
                return t && Object(u.jsxs)("div", {
                    id: "user-form",
                    children: [Object(u.jsx)("h3", {children: "Your profile. Change, edit and manage your data."}), Object(u.jsx)("hr", {}), Object(u.jsx)("div", {
                        className: "user-form-title",
                        children: Object(u.jsx)("h2", {children: "My profile"})
                    }), Object(u.jsxs)("div", {
                        className: "user-form-header",
                        children: [t.avatar ? Object(u.jsx)("div", {
                            className: "user-form-avatar",
                            children: Object(u.jsx)("img", {
                                src: "https://pro-pets-server.herokuapp.com/".concat(t.avatar),
                                alt: "avatar"
                            })
                        }) : Object(u.jsx)("div", {
                            className: "user-avatar",
                            children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                        }), Object(u.jsx)("div", {
                            className: "user-form-full-name",
                            children: Object(u.jsx)(Ne, {
                                defaultValue: t.full_name,
                                className: "user-full-name",
                                onChange: function (e) {
                                    i(e.target.value)
                                }
                            })
                        })]
                    }), t && Object(u.jsxs)("form", {
                        className: "user-profile-form",
                        ref: v,
                        noValidate: !0,
                        children: [Object(u.jsxs)("div", {
                            className: "form-item",
                            children: [Object(u.jsx)("label", {children: "Email:"}), Object(u.jsx)(Ne, {
                                name: "email",
                                placeholder: "Email",
                                error: g.email
                            })]
                        }), Object(u.jsxs)("div", {
                            className: "form-item",
                            children: [Object(u.jsx)("label", {children: "Phone:"}), Object(u.jsx)(Ne, {
                                name: "phone",
                                placeholder: "Phone",
                                error: g.phone
                            })]
                        }), Object(u.jsxs)("div", {
                            className: "form-item",
                            children: [Object(u.jsx)("label", {children: "Avatar:"}), Object(u.jsxs)("div", {
                                className: "avatar-container",
                                children: [Object(u.jsx)(Ne, {
                                    error: g.avatar,
                                    type: "file",
                                    name: "avatar",
                                    className: "hide-input"
                                }), Object(u.jsx)("input", {
                                    placeholder: t.avatar,
                                    name: "avatar-hide",
                                    className: "avatar-hide-input"
                                })]
                            })]
                        }), Object(u.jsxs)("div", {
                            className: "form-body",
                            children: [Object(u.jsxs)("div", {
                                className: "form-body-items",
                                children: [Object(u.jsxs)("div", {
                                    className: "form-item",
                                    children: [Object(u.jsx)("label", {children: "My pet:"}), Object(u.jsx)(Ne, {
                                        name: "user_pet",
                                        placeholder: "My pet",
                                        className: "label-pet",
                                        error: g.user_pet
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "form-item",
                                    children: [Object(u.jsx)("label", {children: "Nick:"}), Object(u.jsx)(Ne, {
                                        name: "nick",
                                        placeholder: "Nick",
                                        className: "label-nick",
                                        error: g.nick
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "form-item",
                                    children: [Object(u.jsx)("label", {children: "Photo:"}), Object(u.jsxs)("div", {
                                        className: "avatar-container",
                                        children: [Object(u.jsx)(Ne, {
                                            placeholder: "Photo",
                                            error: g.pet_photo,
                                            type: "file",
                                            name: "pet_photo",
                                            className: "hide-input"
                                        }), Object(u.jsx)("input", {
                                            placeholder: t.pet_photo || "Photo",
                                            name: "pet-photo-hide",
                                            className: "avatar-hide-input"
                                        })]
                                    })]
                                })]
                            }), Object(u.jsx)("div", {
                                className: "form-body-pet-img",
                                children: t.pet_photo ? Object(u.jsx)("div", {
                                    className: "user-pet-avatar",
                                    children: Object(u.jsx)("img", {
                                        src: "https://pro-pets-server.herokuapp.com/".concat(t.pet_photo),
                                        alt: "pet-icon"
                                    })
                                }) : Object(u.jsx)("div", {
                                    className: "user-pet-photo",
                                    children: Object(u.jsx)(d.a, {icon: B.h})
                                })
                            })]
                        }), Object(u.jsx)("div", {
                            className: "form-footer",
                            children: Object(u.jsx)(b, {
                                text: "save changes",
                                icon: B.j,
                                color: "btn",
                                className: "form-save-btn",
                                name: "update"
                            })
                        })]
                    })]
                })
            }), pt = function () {
                return Object(u.jsx)("div", {children: Object(u.jsx)(ut, {})})
            }, bt = (r(246), ["error"]), ht = function (e) {
                var t = e.error, r = Object(j.a)(e, bt);
                return Object(u.jsxs)(u.Fragment, {children: [Object(u.jsx)("textarea", Object(ve.a)({}, r)), t && Object(u.jsx)(fe, {text: t})]})
            }, xt = function () {
                var e, t = Object(c.useState)(null), r = Object(o.a)(t, 2), a = r[0], s = r[1], n = Object(x.b)(),
                    i = Object(x.c)(C), l = me.a().shape({
                        title: me.b().min(2).required(),
                        text: me.b().min(2).required(),
                        photo: me.b().required()
                    }), j = Object(Oe.b)({
                        defaultValues: {title: "", text: "", photo: ""}, validate: (e = l, function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = {}, t.prev = 1, t.next = 4, e.validate(r, {abortEarly: !1});
                                        case 4:
                                            t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), t.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return t.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[1, 6]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()), onSubmit: function (e, t) {
                            var r, c = t.reset;
                            n((r = Object(ve.a)(Object(ve.a)({}, e), {}, {userId: i.id}), function () {
                                var e = Object(L.a)(I.a.mark((function e(t) {
                                    var c;
                                    return I.a.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(N(!0)), t(V()), e.prev = 2, e.next = 5, Fe(r);
                                            case 5:
                                                c = e.sent, t(Ze(c)), e.next = 12;
                                                break;
                                            case 9:
                                                e.prev = 9, e.t0 = e.catch(2), t(D({data: e.t0.data, status: e.t0.status}));
                                            case 12:
                                                return e.prev = 12, t(N(!1)), e.finish(12);
                                            case 15:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[2, 9, 12, 15]])
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }())), c()
                        }
                    }), p = j.form, h = (0, j.use)("errors", {errorWithTouched: !0}), m = function (e) {
                        var t = e.target;
                        s(t.value)
                    };
                return Object(u.jsxs)("div", {
                    className: "add-post",
                    children: [Object(u.jsx)("h3", {
                        className: "title",
                        children: "Your new post! Simplify text, add photo and publish."
                    }), Object(u.jsx)("hr", {}), Object(u.jsx)("div", {
                        className: "post-container", children: Object(u.jsxs)("form", {
                            className: "add-post-form",
                            ref: p,
                            children: [Object(u.jsx)("label", {
                                className: "label",
                                children: "Title:"
                            }), Object(u.jsx)(Ne, {
                                placeholder: "The quick, brown fox jumps",
                                name: "title",
                                error: h.title
                            }), Object(u.jsx)("label", {
                                className: "label",
                                children: "Text:"
                            }), Object(u.jsx)("span", {children: "up to 1500 char"}), Object(u.jsx)(ht, {
                                name: "text",
                                error: h.text,
                                placeholder: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel."
                            }), Object(u.jsx)("input", {
                                type: "file",
                                id: "upload-photo",
                                name: "photo",
                                onChange: m,
                                className: "add-photo-fake"
                            }), Object(u.jsxs)("div", {
                                className: "add-photo-section",
                                children: [Object(u.jsx)("label", {
                                    className: "add-photo-btn",
                                    htmlFor: "upload-photo",
                                    children: "Add photo"
                                }), Object(u.jsx)(Ne, {
                                    defaultValue: a && a.split("\\")[2],
                                    error: h.photo,
                                    name: "photo",
                                    onChange: m,
                                    disabled: !0
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "form-footer-section",
                                children: [Object(u.jsxs)("div", {
                                    className: "form-footer-avatar-section",
                                    children: [i && i.avatar ? Object(u.jsx)("div", {
                                        className: "add-post-user-avatar",
                                        children: Object(u.jsx)("img", {
                                            src: "https://pro-pets-server.herokuapp.com/".concat(i.avatar),
                                            alt: "avatar"
                                        })
                                    }) : Object(u.jsx)("div", {
                                        className: "user-avatar",
                                        children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                                    }), i && i.full_name]
                                }), Object(u.jsx)(b, {text: "Publish", color: "btn", icon: B.h})]
                            })]
                        })
                    })]
                })
            }, mt = function (e) {
                var t = e.errors;
                return Object(u.jsxs)(u.Fragment, {
                    children: [Object(u.jsx)("label", {
                        htmlFor: "street",
                        children: "Street"
                    }), Object(u.jsx)(Ne, {
                        type: "text",
                        name: "street",
                        placeholder: "Type street",
                        error: t.street
                    }), Object(u.jsx)("label", {
                        htmlFor: "indexAndCity",
                        children: "Index and City"
                    }), Object(u.jsx)(Ne, {
                        type: "text",
                        name: "indexAndCity",
                        placeholder: "Type index and city",
                        error: t.indexAndCity
                    }), Object(u.jsx)("label", {htmlFor: "phone", children: "Telephone"}), Object(u.jsx)(Ne, {
                        type: "tel",
                        name: "phone",
                        placeholder: "+11(111)-111-11-11",
                        pattern: "[\\+]\\d{2}[\\(]\\d{3}[\\)]\\d{3}[\\-]\\d{2}[\\-]\\d{2}",
                        error: t.phone
                    }), Object(u.jsx)("label", {htmlFor: "fax", children: "Telefax"}), Object(u.jsx)(Ne, {
                        type: "tel",
                        name: "fax",
                        placeholder: "+11(111)-111-11-11",
                        pattern: "[\\+]\\d{2}[\\(]\\d{3}[\\)]\\d{3}[\\-]\\d{2}[\\-]\\d{2}",
                        error: t.fax
                    }), Object(u.jsx)("label", {htmlFor: "email", children: "Email"}), Object(u.jsx)(Ne, {
                        type: "email",
                        name: "email",
                        placeholder: "Type email",
                        error: t.email
                    }), Object(u.jsx)("label", {
                        htmlFor: "workhours",
                        children: "Work hours"
                    }), Object(u.jsx)("textarea", {
                        name: "workhours",
                        placeholder: "Type work hours",
                        error: t.workhours,
                        style: {height: 100, paddingTop: 10}
                    })]
                })
            }, Ot = function () {
                var e = Object(L.a)(I.a.mark((function e(t, r, c) {
                    var a, s;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, q.get("/api/services/".concat(t, "?page=").concat(r, "&limit=").concat(c));
                            case 3:
                                return a = e.sent, s = a.data, e.abrupt("return", s);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 8]])
                })));
                return function (t, r, c) {
                    return e.apply(this, arguments)
                }
            }(), vt = function () {
                var e = Object(L.a)(I.a.mark((function e(t) {
                    var r, c, a;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, (r = new FormData).append("title", t.title), r.append("type", t.type), r.append("text", "object" === typeof t.text ? JSON.stringify(t.text) : t.text), r.append("photo", t.photo[0]), r.append("contacts", "object" === typeof t.contacts ? JSON.stringify(t.contacts) : t.contacts), r.append("date", t.date ? "".concat(new Date("".concat(t.date, " ").concat(t.dateTime, ":00"))) : "".concat(new Date)), r.append("location", t.location), r.append("userId", t.userId), e.next = 12, q.post("/api/services", r, {headers: {"Content-Type": "multipart/form-data"}});
                            case 12:
                                return c = e.sent, a = c.data, e.abrupt("return", a);
                            case 17:
                                return e.prev = 17, e.t0 = e.catch(0), e.next = 21, Promise.reject(e.t0.response);
                            case 21:
                                return e.abrupt("return", e.sent);
                            case 22:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 17]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), ft = function () {
                var e = Object(L.a)(I.a.mark((function e(t) {
                    var r, c;
                    return I.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, q.get("/api/services/id/".concat(t));
                            case 3:
                                return r = e.sent, c = r.data, e.abrupt("return", c);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), e.next = 12, Promise.reject(e.t0.response);
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[0, 8]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), gt = Object(m.b)({
                name: "services",
                initialState: {services: [], currentService: null},
                reducers: {
                    setServices: function (e, t) {
                        var r = t.payload;
                        e.services = r
                    }, setService: function (e, t) {
                        var r = t.payload;
                        e.currentService = r
                    }
                }
            }), Nt = gt.reducer, yt = gt.actions, At = yt.setServices, kt = yt.setService, wt = function (e) {
                return e.services
            }, Ct = function (e) {
                return function () {
                    var t = Object(L.a)(I.a.mark((function t(r) {
                        return I.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r(N(!0)), r(V()), t.prev = 2, t.next = 5, vt(e);
                                case 5:
                                    t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(2), r(D({data: t.t0.data, status: t.t0.status}));
                                case 10:
                                    return t.prev = 10, r(N(!1)), t.finish(10);
                                case 13:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[2, 7, 10, 13]])
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, Bt = function () {
                var e = Object(x.c)(C), t = Object(x.b)(), r = Object(c.useState)("Walking"), a = Object(o.a)(r, 2),
                    s = a[0], n = a[1], i = me.a().shape({
                        title: me.b().required(),
                        type: me.b(),
                        text: me.b().required(),
                        photo: me.b().required(),
                        place: me.b().required(),
                        location: me.b()
                    }), l = me.a().shape({
                        title: me.b().required(),
                        type: me.b(),
                        text: me.b().required(),
                        photo: me.b().required(),
                        place: me.b().required(),
                        date: me.b().required(),
                        dateTime: me.b().required(),
                        location: me.b()
                    }), j = me.a().shape({
                        title: me.b().required(),
                        type: me.b(),
                        phone: me.b().required(),
                        street: me.b().required(),
                        indexAndCity: me.b().required(),
                        fax: me.b(),
                        email: me.b().email().required(),
                        workhours: me.b().required(),
                        photo: me.b().required(),
                        contacts: me.b().required()
                    }), p = function (e) {
                        return function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = {}, t.prev = 1, t.next = 4, e.validate(r, {abortEarly: !1});
                                        case 4:
                                            t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), t.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return t.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[1, 6]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, h = Object(Oe.b)({
                        defaultValues: "Hotels" === s || "VetHelp" === s ? {
                            title: "",
                            type: "Walking",
                            photo: "",
                            phone: "",
                            street: "",
                            indexAndCity: "",
                            fax: "",
                            email: "",
                            workhours: ""
                        } : "Walking" === s ? {
                            title: "",
                            type: "Walking",
                            text: "",
                            photo: "",
                            place: "",
                            date: "",
                            location: ""
                        } : {title: "", type: "", text: "", photo: "", place: "", location: ""},
                        validate: p("Hotels" === s || "VetHelp" === s ? j : "Walking" === s ? l : i),
                        onSubmit: function (r, c) {
                            var a = c.reset;
                            "Hotels" === r.type || "VetHelp" === r.type ? t(Ct({
                                title: r.title,
                                type: r.type,
                                text: {
                                    phone: "".concat(r.phone),
                                    street: "".concat(r.street),
                                    indexAndCity: "".concat(r.indexAndCity),
                                    fax: "".concat(r.fax),
                                    email: "".concat(r.email),
                                    workhours: "".concat(r.workhours)
                                },
                                photo: r.photo,
                                contacts: r.contacts,
                                userId: e.id
                            })) : t(Ct({
                                title: r.title,
                                type: r.type,
                                text: r.text,
                                photo: r.photo,
                                contacts: {address: r.place, email: e.email, userPhone: e.phone},
                                location: r.location,
                                userId: e.id
                            })), a(), n("Walking")
                        }
                    }), m = h.form, O = (0, h.use)("errors", {errorWithTouched: !0});
                return Object(u.jsxs)("div", {
                    className: "add-service",
                    children: [Object(u.jsx)("h3", {children: "Your new service! Simplify text, add photo and publish."}), Object(u.jsx)("hr", {}), Object(u.jsxs)("form", {
                        ref: m,
                        noValidate: !0,
                        children: [Object(u.jsx)("label", {
                            htmlFor: "",
                            children: "Title"
                        }), Object(u.jsx)(Ne, {
                            type: "text",
                            name: "title",
                            error: O.title
                        }), Object(u.jsx)("label", {htmlFor: "", children: "Type"}), Object(u.jsxs)("select", {
                            name: "type",
                            onChange: function (e) {
                                var t = e.target;
                                return n(t.value)
                            },
                            error: O.type,
                            children: ["ADMIN" === e.role && Object(u.jsx)("option", {
                                value: "Hotels",
                                children: "Hotels"
                            }), "ADMIN" !== e.role && Object(u.jsx)("option", {
                                value: "Walking",
                                children: "Walking"
                            }), "ADMIN" !== e.role && Object(u.jsx)("option", {
                                value: "Fostering",
                                children: "Fostering"
                            }), "ADMIN" === e.role && Object(u.jsx)("option", {value: "VetHelp", children: "VetHelp"})]
                        }), "VetHelp" === s || "Hotels" === s ? Object(u.jsx)(mt, {errors: O}) : Object(u.jsxs)(u.Fragment, {
                            children: [Object(u.jsx)("label", {
                                htmlFor: "",
                                children: "Text"
                            }), Object(u.jsx)("span", {children: "up to 1500 char"}), Object(u.jsx)("textarea", {
                                name: "text",
                                error: O.text
                            })]
                        }), Object(u.jsx)("label", {htmlFor: "photo", children: "Photo"}), Object(u.jsx)(Ne, {
                            type: "file",
                            name: "photo",
                            error: O.photo
                        }), ("Hotels" === s || "VetHelp" === s) && Object(u.jsxs)(u.Fragment, {
                            children: [Object(u.jsx)("label", {
                                htmlFor: "contacts",
                                children: "Contacts"
                            }), Object(u.jsx)(Ne, {type: "text", name: "contacts", error: O.contacts})]
                        }), "VetHelp" !== s && "Hotels" !== s && Object(u.jsxs)(u.Fragment, {
                            children: [Object(u.jsx)("label", {
                                htmlFor: "place",
                                children: "Place"
                            }), Object(u.jsx)(Ne, {type: "text", name: "place", error: O.place})]
                        }), "Walking" === s && Object(u.jsxs)(u.Fragment, {
                            children: [Object(u.jsx)("label", {
                                htmlFor: "date",
                                children: "Date"
                            }), Object(u.jsx)(Ne, {
                                type: "date",
                                name: "date",
                                error: O.date
                            }), Object(u.jsx)("label", {
                                htmlFor: "dateTime",
                                children: "Time"
                            }), Object(u.jsx)(Ne, {type: "time", name: "dateTime", error: O.dateTime})]
                        }), Object(u.jsx)("label", {htmlFor: "", children: "Location"}), Object(u.jsx)(Ne, {
                            type: "text",
                            name: "location",
                            error: O.location
                        }), Object(u.jsxs)("div", {
                            children: [Object(u.jsxs)("div", {
                                className: "user-data-service",
                                children: [e && e.avatar ? Object(u.jsx)("img", {
                                    src: "https://pro-pets-server.herokuapp.com/".concat(e.avatar),
                                    alt: "avatar"
                                }) : Object(u.jsx)("div", {
                                    className: "user-avatar",
                                    children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                                }), e && e.full_name]
                            }), Object(u.jsx)(b, {text: "Publish", color: "btn", icon: B.h})]
                        })]
                    })]
                })
            }, St = function (e) {
                var t = e.service, r = "{" === t.text[0] ? JSON.parse(t.text).workhours.split("\n") : t.text,
                    c = Object(o.a)(r, 2), a = c[0], s = c[1];
                return Object(u.jsxs)("li", {
                    className: "service-card",
                    children: [Object(u.jsx)("div", {
                        className: "service-card-img",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.photo),
                            alt: "service fostering"
                        })
                    }), Object(u.jsx)("div", {
                        className: "service-card-info",
                        children: Object(u.jsxs)("div", {
                            className: "service-card-content",
                            children: [Object(u.jsx)("h2", {
                                style: {color: "#06B2BB"},
                                children: t.title
                            }), Object(u.jsxs)("p", {
                                style: {marginTop: "20px"},
                                children: [Object(u.jsx)("span", {
                                    style: {fontWeight: 700},
                                    children: "Address:"
                                }), Object(u.jsx)("br", {}), "{" === t.text[0] && JSON.parse(t.text).street, " ", t.location]
                            }), Object(u.jsxs)("p", {
                                style: {marginTop: "20px"},
                                children: [Object(u.jsx)("span", {
                                    style: {fontWeight: 700},
                                    children: "Working days:"
                                }), Object(u.jsx)("br", {}), a && a, Object(u.jsx)("br", {}), s && s]
                            }), Object(u.jsx)(h.b, {to: "/service/".concat(t.id), children: "...view detail"})]
                        })
                    })]
                })
            }, Pt = function (e) {
                var t = e.rows;
                return void 0 !== t && Object(u.jsxs)("ul", {
                    className: "service-list",
                    children: [Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Hotels. The best hotels in the world!"
                    }), t.map((function (e) {
                        return Object(u.jsx)(St, {service: e}, e.id)
                    }))]
                })
            }, It = function (e) {
                var t = e.service;
                return Object(u.jsxs)("li", {
                    className: "service-card",
                    children: [Object(u.jsx)("div", {
                        className: "service-card-img",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.photo),
                            alt: "service walking"
                        })
                    }), Object(u.jsxs)("div", {
                        className: "service-card-info",
                        children: [Object(u.jsxs)(h.b, {
                            to: "/profile",
                            className: "service-card-profile",
                            children: [t.avatar ? Object(u.jsx)("div", {
                                className: "user-avatar",
                                children: Object(u.jsx)("img", {
                                    src: "https://pro-pets-server.herokuapp.com/".concat(t.avatar),
                                    alt: "avatar"
                                })
                            }) : Object(u.jsx)("div", {
                                className: "user-avatar",
                                children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                            }), Object(u.jsx)("h4", {children: t.full_name})]
                        }), Object(u.jsxs)("div", {
                            className: "service-card-content",
                            children: [Object(u.jsx)("h2", {children: t.title}), Object(u.jsx)(h.b, {
                                to: "/service/".concat(t.id),
                                children: "...view detail"
                            })]
                        })]
                    })]
                })
            }, Lt = function (e) {
                var t = e.rows;
                return void 0 !== t && Object(u.jsxs)("ul", {
                    className: "service-list",
                    children: [Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Walking. No have time tonight? We have a solution!"
                    }), t.map((function (e) {
                        return Object(u.jsx)(It, {service: e}, e.id)
                    }))]
                })
            }, Ft = function (e) {
                var t = e.service;
                return Object(u.jsxs)("li", {
                    className: "service-card",
                    children: [Object(u.jsx)("div", {
                        className: "service-card-img",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.photo),
                            alt: "service fostering"
                        })
                    }), Object(u.jsxs)("div", {
                        className: "service-card-info",
                        children: [Object(u.jsxs)(h.b, {
                            to: "/profile",
                            className: "service-card-profile",
                            children: [t.avatar ? Object(u.jsx)("div", {
                                className: "user-avatar",
                                children: Object(u.jsx)("img", {
                                    src: "https://pro-pets-server.herokuapp.com/".concat(t.avatar),
                                    alt: "avatar"
                                })
                            }) : Object(u.jsx)("div", {
                                className: "user-avatar",
                                children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                            }), Object(u.jsx)("h4", {children: t.full_name})]
                        }), Object(u.jsxs)("div", {
                            className: "service-card-content",
                            children: [Object(u.jsx)("h2", {children: t.title}), Object(u.jsx)(h.b, {
                                to: "/service/".concat(t.id),
                                children: "...view detail"
                            })]
                        })]
                    })]
                })
            }, Tt = function (e) {
                var t = e.rows;
                return void 0 !== t && Object(u.jsxs)("ul", {
                    className: "service-list",
                    children: [Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Fostering. In adoption we trust."
                    }), t.map((function (e) {
                        return Object(u.jsx)(Ft, {service: e}, e.id)
                    }))]
                })
            }, Wt = function (e) {
                var t = e.service, r = "{" === t.text[0] ? JSON.parse(t.text).workhours.split("\n") : t.text,
                    c = Object(o.a)(r, 2), a = c[0], s = c[1];
                return Object(u.jsxs)("li", {
                    className: "service-card",
                    children: [Object(u.jsx)("div", {
                        className: "service-card-img",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.photo),
                            alt: "service fostering"
                        })
                    }), Object(u.jsx)("div", {
                        className: "service-card-info",
                        children: Object(u.jsxs)("div", {
                            className: "service-card-content",
                            children: [Object(u.jsx)("h2", {
                                style: {color: "#06B2BB"},
                                children: t.title
                            }), Object(u.jsxs)("p", {
                                style: {marginTop: "20px"},
                                children: [Object(u.jsx)("span", {
                                    style: {fontWeight: 700},
                                    children: "Address:"
                                }), Object(u.jsx)("br", {}), "{" === t.text[0] && JSON.parse(t.text).street, " ", t.location]
                            }), Object(u.jsxs)("p", {
                                style: {marginTop: "20px"},
                                children: [Object(u.jsx)("span", {
                                    style: {fontWeight: 700},
                                    children: "Working days:"
                                }), Object(u.jsx)("br", {}), a && a, Object(u.jsx)("br", {}), s && s]
                            }), Object(u.jsx)(h.b, {to: "/service/".concat(t.id), children: "...view detail"})]
                        })
                    })]
                })
            }, qt = function (e) {
                var t = e.rows;
                return void 0 !== t && Object(u.jsxs)("ul", {
                    className: "service-list",
                    children: [Object(u.jsx)("p", {
                        className: "service-title",
                        children: "VetHelp. They deserve it."
                    }), t.map((function (e) {
                        return Object(u.jsx)(Wt, {service: e}, e.id)
                    }))]
                })
            }, Et = function () {
                var e = Object(x.c)(Je), t = e.currentPage, r = e.limit, a = e.pages, s = Object(x.c)(wt).services.rows,
                    n = Object(i.i)().type, o = Object(x.b)();
                return Object(c.useEffect)((function () {
                    o(function (e, t, r) {
                        return function () {
                            var c = Object(L.a)(I.a.mark((function c(a) {
                                var s;
                                return I.a.wrap((function (c) {
                                    for (; ;) switch (c.prev = c.next) {
                                        case 0:
                                            return a(N(!0)), a(V()), c.prev = 2, c.next = 5, Ot(e, t, r);
                                        case 5:
                                            s = c.sent, a(At(s)), a(He({
                                                total: s.count,
                                                limit: 4
                                            })), Math.ceil(s.count / r) < t ? a(Ee(1)) : a(Ee(t)), c.next = 14;
                                            break;
                                        case 11:
                                            c.prev = 11, c.t0 = c.catch(2), a(D({data: c.t0.data, status: c.t0.status}));
                                        case 14:
                                            return c.prev = 14, a(N(!1)), c.finish(14);
                                        case 17:
                                        case"end":
                                            return c.stop()
                                    }
                                }), c, null, [[2, 11, 14, 17]])
                            })));
                            return function (e) {
                                return c.apply(this, arguments)
                            }
                        }()
                    }(n, t, r))
                }), [o, n, t, r]), Object(u.jsxs)("div", {
                    children: [Object(u.jsx)("div", {
                        className: "service-pagination",
                        children: function (e) {
                            for (var t = [], r = 1; r <= e; r++) t.push(r);
                            return t
                        }(a).map((function (e) {
                            return Object(u.jsx)("p", {
                                id: e, onClick: function (t) {
                                    o(Ye(e)), t.target.classList.add("service-active-link"), Array.from(t.target.parentNode.children).map((function (e) {
                                        return t.target.id !== e.id ? e.classList.remove("service-active-link") : ""
                                    }))
                                }, children: e
                            }, e)
                        }))
                    }), "Hotels" === n && Object(u.jsx)(Pt, {rows: s}), "Walking" === n && Object(u.jsx)(Lt, {rows: s}), "Fostering" === n && Object(u.jsx)(Tt, {rows: s}), "VetHelp" === n && Object(u.jsx)(qt, {rows: s})]
                })
            }, Ht = function () {
                var e = Object(x.c)(wt).currentService, t = Object(i.i)().id, r = Object(x.b)();
                Object(c.useEffect)((function () {
                    r(function (e) {
                        return function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return r(N(!0)), r(V()), t.prev = 2, t.next = 5, ft(e);
                                        case 5:
                                            c = t.sent, r(kt(c)), t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(2), r(D({data: t.t0.data, status: t.t0.status}));
                                        case 12:
                                            return t.prev = 12, r(N(!1)), t.finish(12);
                                        case 15:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[2, 9, 12, 15]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }(parseInt(t)))
                }), [r, t]);
                var a = e && $e()(e.date).format("D MMMM, HH:mm");
                return e && Object(u.jsxs)("div", {
                    className: "service-full-info",
                    children: ["Walking" === e.type && Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Walking. No have time tonight? We have a solution!"
                    }), "Hotels" === e.type && Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Hotels. The best hotels in the world!"
                    }), "Fostering" === e.type && Object(u.jsx)("p", {
                        className: "service-title",
                        children: "Fostering. In adoption we trust."
                    }), "VetHelp" === e.type && Object(u.jsx)("p", {
                        className: "service-title",
                        children: "VetHelp. They deserve it."
                    }), Object(u.jsx)("hr", {}), "VetHelp" !== e.type && "Hotels" !== e.type && Object(u.jsxs)("div", {
                        className: "service-user-info",
                        children: [e.user.avatar ? Object(u.jsx)("div", {
                            className: "user-avatar",
                            children: Object(u.jsx)("img", {
                                src: "https://pro-pets-server.herokuapp.com/".concat(e.user.avatar),
                                alt: "avatar"
                            })
                        }) : Object(u.jsx)("div", {
                            className: "user-avatar",
                            children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                        }), Object(u.jsxs)("div", {
                            className: "service-user-text",
                            children: [e.user.full_name, Object(u.jsx)("span", {children: a})]
                        })]
                    }), Object(u.jsx)("div", {
                        className: "service-full-img",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(e.photo),
                            alt: "service"
                        })
                    }), Object(u.jsx)("h2", {children: e.title}), Object(u.jsx)("div", {
                        className: "service-full-text",
                        children: "{" !== e.text[0] ? e.text : Object(u.jsxs)(u.Fragment, {
                            children: [Object(u.jsxs)("p", {children: [JSON.parse(e.text).street, Object(u.jsx)("br", {}), e.location]}, 1), Object(u.jsxs)("p", {children: ["Telephone: ", JSON.parse(e.text).phone, Object(u.jsx)("br", {}), "Telefax: ", JSON.parse(e.text).fax, Object(u.jsx)("br", {}), JSON.parse(e.text).email]}, 2), Object(u.jsxs)("p", {
                                children: [Object(u.jsx)("span", {children: "Working hours:"}), Object(u.jsx)("br", {}), JSON.parse(e.text).workhours.split("\n").map((function (e) {
                                    return Object(u.jsx)("span", {
                                        style: {display: "block", fontWeight: 200},
                                        children: e
                                    }, e)
                                }))]
                            }, 3)]
                        })
                    }), Object(u.jsx)("p", {
                        className: "service-full-contacts",
                        children: "Hotels" === e.type || "VetHelp" === e.type ? Object(u.jsx)("span", {children: "{" === e.contacts[0] ? Object(u.jsxs)(u.Fragment, {children: [JSON.parse(e.contacts).address, JSON.parse(e.contacts).email, JSON.parse(e.contacts).userPhone && JSON.parse(e.contacts).userPhone]}) : e.contacts}) : Object(u.jsxs)(u.Fragment, {children: [Object(u.jsx)("span", {children: "Contacts: "}), e.location && e.location, " | ".concat(JSON.parse(e.contacts).address, " | \n                        ").concat(JSON.parse(e.contacts).email, "\n                        ").concat("null" !== JSON.parse(e.contacts).userPhone ? " | ".concat(JSON.parse(e.contacts).userPhone) : "")]})
                    })]
                })
            },
            Jt = (r(247), "data:image/png;base64,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"),
            Yt = function () {
                var e, t = Object(c.useState)(null), r = Object(o.a)(t, 2), a = r[0], s = r[1], n = Object(i.g)(),
                    l = Object(x.c)(C), j = Object(x.b)(), d = me.a().shape({
                        nick: me.b().min(2).required(),
                        type: me.b().min(1).required(),
                        sex: me.b().min(1).required(),
                        breed: me.b().min(2).required(),
                        color: me.b().min(2).required(),
                        height: me.b().min(1).required(),
                        features: me.b().min(1).required(),
                        description: me.b().min(1).required(),
                        location: me.b().min(1).required(),
                        phone: me.b().min(2).required(),
                        email: me.b().email("Invalid email").required(),
                        image: me.b().required()
                    }), p = Object(Oe.b)({
                        defaultValues: {
                            status: "lost",
                            nick: "",
                            type: "Dog",
                            sex: "Male",
                            breed: "",
                            color: "",
                            height: "45-70cm",
                            features: "",
                            description: "",
                            location: "",
                            phone: l.phone,
                            email: l.email,
                            image: ""
                        }, validate: (e = d, function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = {}, t.prev = 1, t.next = 4, e.validate(r, {abortEarly: !1});
                                        case 4:
                                            t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), t.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return t.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[1, 6]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()), onSubmit: function (e, t) {
                            var r, c = t.reset;
                            j((r = Object(ve.a)(Object(ve.a)({}, e), {}, {
                                contacts: "".concat(e.phone, " ").concat(e.email, " ").concat(l.full_name),
                                userId: l.id,
                                status: "lost"
                            }), function () {
                                var e = Object(L.a)(I.a.mark((function e(t) {
                                    return I.a.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(N(!0)), t(V()), e.prev = 2, e.next = 5, Q(r);
                                            case 5:
                                                e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(2), t(D({data: e.t0.data, status: e.t0.status}));
                                            case 10:
                                                return e.prev = 10, t(N(!1)), e.finish(10);
                                            case 13:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[2, 7, 10, 13]])
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }())), c(), n.push("/lost")
                        }
                    }), h = p.form, m = (0, p.use)("errors", {errorWithTouched: !0});
                return Object(u.jsxs)("div", {
                    className: "add-lost-post-container",
                    children: [Object(u.jsx)("h2", {children: "Lost your buddy? Keep calm and complete the form"}), Object(u.jsx)("hr", {}), Object(u.jsx)("div", {
                        className: "form-container", children: Object(u.jsxs)("form", {
                            className: "add-post-form", ref: h, noValidate: !0, children: [Object(u.jsxs)("div", {
                                className: "lost-form-body", children: [Object(u.jsxs)("div", {
                                    className: "left",
                                    children: [Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Nickname:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)(Ne, {
                                                placeholder: "Uncle Sam",
                                                name: "nick",
                                                error: m.nick
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Type:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsxs)("select", {
                                                name: "type",
                                                error: m.type,
                                                children: [Object(u.jsx)("option", {children: "Dog"}), Object(u.jsx)("option", {children: "Cat"}), Object(u.jsx)("option", {children: "Bird"}), Object(u.jsx)("option", {children: "Reptile"}), Object(u.jsx)("option", {children: "Mammal"})]
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Sex:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsxs)("select", {
                                                name: "sex",
                                                error: m.sex,
                                                children: [Object(u.jsx)("option", {children: "Male"}), Object(u.jsx)("option", {children: "Female"}), Object(u.jsx)("option", {children: "Neutral"})]
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Breed:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)(Ne, {
                                                placeholder: "Golden Retriever",
                                                name: "breed",
                                                error: m.breed
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Color:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)(Ne, {
                                                placeholder: "Beige",
                                                name: "color",
                                                error: m.color
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Height:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsxs)("select", {
                                                name: "height",
                                                error: m.height,
                                                children: [Object(u.jsx)("option", {children: "45-70cm"}), Object(u.jsx)("option", {children: "30-45cm"}), Object(u.jsx)("option", {children: "10-30cm"})]
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsxs)("label", {children: ["Distinctive features:", Object(u.jsx)("br", {}), Object(u.jsx)("span", {children: "up to 60 char"})]})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)("textarea", {
                                                name: "features",
                                                error: m.features,
                                                cols: "30",
                                                rows: "3",
                                                placeholder: "blue collar with stars, no left ear, damaged tail.",
                                                maxLength: "60"
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsxs)("label", {children: ["Description:", Object(u.jsx)("br", {}), Object(u.jsx)("span", {children: "up to 150 char"})]})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)("textarea", {
                                                name: "description",
                                                error: m.description,
                                                cols: "30",
                                                rows: "6",
                                                maxLength: "150",
                                                placeholder: "brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox"
                                            })
                                        })]
                                    }), Object(u.jsxs)("div", {
                                        className: "left-box",
                                        children: [Object(u.jsx)("div", {
                                            className: "left-label",
                                            children: Object(u.jsx)("label", {children: "Location:"})
                                        }), Object(u.jsx)("div", {
                                            className: "left-field",
                                            children: Object(u.jsx)("textarea", {
                                                name: "location",
                                                error: m.location,
                                                cols: "30",
                                                rows: "4",
                                                placeholder: "Oliver Platz, Berlin",
                                                maxLength: "60"
                                            })
                                        })]
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "right",
                                    children: [Object(u.jsx)("div", {
                                        className: "right-up",
                                        children: Object(u.jsx)("div", {
                                            children: Object(u.jsx)("img", {
                                                src: Jt,
                                                alt: "man-pictures"
                                            })
                                        })
                                    }), Object(u.jsxs)("div", {
                                        className: "right-down",
                                        children: [Object(u.jsx)("div", {
                                            className: "img-section",
                                            children: Object(u.jsx)(Ne, {
                                                placeholder: "load image ",
                                                defaultValue: a,
                                                error: m.image,
                                                disabled: !0,
                                                type: "text",
                                                name: "loadImg"
                                            })
                                        }), Object(u.jsxs)("div", {
                                            className: "right-down-btn",
                                            children: [Object(u.jsx)(Ne, {
                                                className: "btn-1",
                                                type: "file",
                                                name: "image",
                                                onChange: function (e) {
                                                    var t = e.target;
                                                    s(t.value)
                                                }
                                            }), Object(u.jsx)(Ne, {
                                                className: "btn-2",
                                                value: "Load image",
                                                type: "text",
                                                name: "loadImg2",
                                                readOnly: !0
                                            })]
                                        })]
                                    })]
                                })]
                            }), Object(u.jsx)("hr", {}), Object(u.jsxs)("div", {
                                className: "form-contacts",
                                children: [Object(u.jsx)("div", {
                                    className: "contacts-label",
                                    children: Object(u.jsx)("label", {children: "Contacts:"})
                                }), Object(u.jsx)("div", {
                                    className: "contacts-field",
                                    children: Object(u.jsx)(Ne, {
                                        type: "text",
                                        placeholder: "Phone*",
                                        name: "phone",
                                        error: m.phone
                                    })
                                }), Object(u.jsx)("div", {
                                    className: "contacts-field-right",
                                    children: Object(u.jsx)(Ne, {
                                        type: "text",
                                        name: "email",
                                        placeholder: "Email",
                                        error: m.email
                                    })
                                })]
                            }), Object(u.jsx)("div", {
                                className: "publishBtnSection",
                                align: "right",
                                children: Object(u.jsx)(b, {text: "Publish", icon: B.h, color: "btn "})
                            })]
                        })
                    })]
                })
            }, Ut = (r(248), function (e) {
                var t = e.pet, r = e.index, c = t.nick && "null" !== t.nick ? t.nick : "Nickname";
                return Object(u.jsxs)("div", {
                    className: "lost-item",
                    children: [Object(u.jsxs)("div", {
                        className: "lost-header",
                        children: [Object(u.jsx)("div", {
                            children: Object(u.jsx)("p", {
                                className: "lost-nick",
                                children: "lost" === t.status ? c : t.type
                            })
                        }), Object(u.jsxs)("div", {
                            className: "lost-header-adress",
                            children: [Object(u.jsx)("span", {children: Object(u.jsx)(d.a, {icon: B.g})}), Object(u.jsx)("p", {children: t.location})]
                        })]
                    }), Object(u.jsx)("div", {
                        className: "lost-body",
                        children: Object(u.jsx)("img", {
                            src: "https://pro-pets-server.herokuapp.com/".concat(t.image),
                            alt: "pet-icon"
                        })
                    }), Object(u.jsxs)("div", {
                        className: "lost-footer",
                        children: [Object(u.jsx)(h.c, {
                            to: "/pet/".concat(r),
                            className: "lost-details-btn",
                            children: "view details"
                        }), Object(u.jsxs)("span", {children: [Object(u.jsx)(d.a, {icon: B.b}), Object(u.jsx)(d.a, {icon: B.b})]})]
                    })]
                })
            }), Rt = (r(249), function () {
                var e = Object(i.h)().pathname, t = Object(x.c)(w), r = e.slice(1), a = Object(x.c)(ie).pets,
                    s = Object(x.b)();
                return Object(c.useEffect)((function () {
                    var e;
                    s((e = r, function () {
                        var t = Object(L.a)(I.a.mark((function t(r) {
                            var c;
                            return I.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return r(N(!0)), r(V()), t.prev = 2, t.next = 5, X(e);
                                    case 5:
                                        c = t.sent, r(ae(c)), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), r(D({data: t.t0.data, status: t.t0.status}));
                                    case 12:
                                        return t.prev = 12, r(N(!1)), t.finish(12);
                                    case 15:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[2, 9, 12, 15]])
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()))
                }), [s, r]), a && Object(u.jsxs)("div", {
                    className: "lost-container",
                    children: [Object(u.jsxs)("p", {
                        className: "lost-title",
                        children: [e.slice(1), " pets"]
                    }), Object(u.jsx)("hr", {}), !t && Object(u.jsxs)("p", {
                        style: {fontSize: "0.9rem", marginTop: "10px"},
                        children: ["Would you like to publish a post? ", Object(u.jsx)(h.c, {
                            style: {
                                color: "rgb(6, 178, 187)",
                                textDecoration: "underline"
                            }, to: "/signin", children: "JOIN"
                        }), " to our community"]
                    }), Object(u.jsx)("div", {
                        className: "lost-list",
                        children: (e.slice(1), a.petsArr.map((function (e, t) {
                            return Object(u.jsx)(Ut, {pet: e, index: e.id}, t)
                        })))
                    })]
                })
            }), zt = (r(250), function () {
                var e = Object(x.c)(w), t = Object(i.i)().id, r = Object(x.c)(C), a = Object(i.g)().push,
                    s = Object(x.c)(ie).currentPet, n = Object(x.b)();
                Object(c.useEffect)((function () {
                    n(function (e) {
                        return function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return r(N(!0)), r(V()), t.prev = 2, t.next = 5, _(e);
                                        case 5:
                                            c = t.sent, r(se(c)), t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(2), D({data: t.t0.data, status: t.t0.status});
                                        case 12:
                                            return t.prev = 12, r(N(!1)), t.finish(12);
                                        case 15:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[2, 9, 12, 15]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }(parseInt(t)))
                }), [n, t]);
                var o = !!s && $e()(s.createdAt).format("D MMMM, YYYY");
                return s && Object(u.jsxs)("div", {
                    id: "lost-full-info-container",
                    children: [Object(u.jsx)("div", {
                        className: "lfi-header",
                        children: Object(u.jsxs)("span", {
                            className: "lfi-header-title",
                            children: [s.status, ":", Object(u.jsx)("span", {
                                className: "lfi-header-title-nick",
                                children: s.nick
                            }), Object(u.jsxs)("span", {children: ["| ", Object(u.jsx)(d.a, {icon: B.g})]}), Object(u.jsx)("span", {children: s.location})]
                        })
                    }), Object(u.jsx)("hr", {}), Object(u.jsxs)("div", {
                        className: "lfi-body",
                        children: [Object(u.jsx)("div", {
                            className: "lfi-body-left",
                            children: Object(u.jsx)("img", {
                                src: "https://pro-pets-server.herokuapp.com/".concat(s.image),
                                alt: "imgPhoto"
                            })
                        }), Object(u.jsxs)("div", {
                            className: "lfi-body-right",
                            children: [Object(u.jsxs)("div", {
                                className: "lfi-body-right-header",
                                children: [Object(u.jsxs)("h3", {children: [s.sex, ",", s.breed]}), (s.status, Object(u.jsx)("p", {
                                    className: "lfi-body-date",
                                    children: o
                                })), Object(u.jsx)("hr", {})]
                            }), Object(u.jsxs)("div", {children: [Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Color:"}), s.color]}), Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Sex:"}), s.sex]}), Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Height:"}), s.height]}), Object(u.jsx)("br", {}), Object(u.jsx)("br", {}), Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Distinctive features:"}), s.features]})]})]
                        })]
                    }), Object(u.jsxs)("div", {
                        className: "lfi-description",
                        children: [Object(u.jsx)("span", {children: "Description: "}), s.description]
                    }), Object(u.jsxs)("div", {
                        className: "lfi-footer",
                        children: [Object(u.jsxs)("div", {children: [Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Owner:"}), s.contacts.split(" ")[2], " ", s.contacts.split(" ")[3]]}), Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "Phone:"}), s.contacts.split(" ")[0]]}), Object(u.jsxs)("p", {children: [Object(u.jsx)("span", {children: "e-mail:"}), s.contacts.split(" ")[1]]})]}), e && "lost" === s.status && Object(u.jsx)("div", {
                            children: Object(u.jsx)(b, {
                                click: function () {
                                    n(function (e, t, r) {
                                        return function () {
                                            var c = Object(L.a)(I.a.mark((function c(a) {
                                                return I.a.wrap((function (c) {
                                                    for (; ;) switch (c.prev = c.next) {
                                                        case 0:
                                                            return a(N(!0)), a(V()), c.prev = 2, c.next = 5, ee(e, t, r);
                                                        case 5:
                                                            a(ne(e)), c.next = 11;
                                                            break;
                                                        case 8:
                                                            c.prev = 8, c.t0 = c.catch(2), D({
                                                                data: c.t0.data,
                                                                status: c.t0.status
                                                            });
                                                        case 11:
                                                            return c.prev = 11, a(N(!1)), c.finish(11);
                                                        case 14:
                                                        case"end":
                                                            return c.stop()
                                                    }
                                                }), c, null, [[2, 8, 11, 14]])
                                            })));
                                            return function (e) {
                                                return c.apply(this, arguments)
                                            }
                                        }()
                                    }(s.id, "found", "".concat(r.phone, " ").concat(r.email, " ").concat(s.contacts.split(" ")[2], " ").concat(s.contacts.split(" ")[3]))), a("/lost")
                                }, text: "I found a pet", color: "btn", icon: B.k
                            })
                        }), e && "found" === s.status && s.userId === r.id && Object(u.jsx)("div", {
                            children: Object(u.jsx)(b, {
                                click: function () {
                                    n(function (e) {
                                        return function () {
                                            var t = Object(L.a)(I.a.mark((function t(r) {
                                                var c;
                                                return I.a.wrap((function (t) {
                                                    for (; ;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return r(N(!0)), r(V()), t.prev = 2, t.next = 5, te(e);
                                                        case 5:
                                                            c = t.sent, console.log(c), t.next = 12;
                                                            break;
                                                        case 9:
                                                            t.prev = 9, t.t0 = t.catch(2), D({
                                                                data: t.t0.data,
                                                                status: t.t0.status
                                                            });
                                                        case 12:
                                                            return t.prev = 12, r(N(!1)), t.finish(12);
                                                        case 15:
                                                        case"end":
                                                            return t.stop()
                                                    }
                                                }), t, null, [[2, 9, 12, 15]])
                                            })));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()
                                    }(s.id)), a("/found")
                                }, text: "Delete", color: "btn", icon: B.h
                            })
                        })]
                    })]
                })
            }), Kt = function () {
                var e, t = Object(c.useState)(null), r = Object(o.a)(t, 2), a = r[0], s = r[1], n = Object(i.g)(),
                    l = Object(x.c)(C), j = Object(x.b)(), d = me.a().shape({
                        type: me.b().required(),
                        sex: me.b().required(),
                        breed: me.b().min(3).required(),
                        color: me.b().min(3).required(),
                        height: me.b().required(),
                        features: me.b().required(),
                        description: me.b().min(3).required(),
                        location: me.b().min(3).required(),
                        image: me.b().required(),
                        email: me.b().email().required(),
                        phone: me.b().required()
                    }), p = Object(Oe.b)({
                        defaultValues: {
                            type: "Dog",
                            sex: "Male",
                            breed: "",
                            color: "",
                            height: "20cm - 35cm",
                            features: "",
                            description: "",
                            location: "",
                            image: "",
                            email: l.email,
                            phone: l.phone
                        }, validate: (e = d, function () {
                            var t = Object(L.a)(I.a.mark((function t(r) {
                                var c;
                                return I.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = {}, t.prev = 1, t.next = 4, e.validate(r, {abortEarly: !1});
                                        case 4:
                                            t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), t.t0.inner.forEach((function (e) {
                                                var t = e.path, r = e.message;
                                                return Object(Oe.a)(c, t, r)
                                            }));
                                        case 9:
                                            return t.abrupt("return", c);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[1, 6]])
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()), onSubmit: function (e, t) {
                            var r, c = t.reset;
                            j((r = Object(ve.a)(Object(ve.a)({}, e), {}, {
                                contacts: "".concat(e.phone, " ").concat(e.email, " ").concat(l.full_name),
                                userId: l.id,
                                status: "found"
                            }), function () {
                                var e = Object(L.a)(I.a.mark((function e(t) {
                                    return I.a.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(N(!0)), t(V()), e.prev = 2, e.next = 5, $(r);
                                            case 5:
                                                e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(2), t(D({data: e.t0.data, status: e.t0.status}));
                                            case 10:
                                                return e.prev = 10, t(N(!1)), e.finish(10);
                                            case 13:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[2, 7, 10, 13]])
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }())), c(), n.push("/found")
                        }
                    }), h = p.form, m = (0, p.use)("errors", {errorWithTouched: !0});
                return Object(u.jsxs)("div", {
                    className: "found-box",
                    children: [Object(u.jsx)("h2", {children: "Found a pet? Please complete the form to help."}), Object(u.jsx)("hr", {}), Object(u.jsxs)("form", {
                        ref: h, noValidate: !0, children: [Object(u.jsxs)("div", {
                            className: "found-container", children: [Object(u.jsxs)("div", {
                                className: "found-add-left",
                                children: [Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "type",
                                        children: "Type:"
                                    }), Object(u.jsxs)("select", {
                                        name: "type",
                                        error: m.type,
                                        children: [Object(u.jsx)("option", {
                                            value: "Dog",
                                            children: "Dog"
                                        }), Object(u.jsx)("option", {
                                            value: "Cat",
                                            children: "Cat"
                                        }), Object(u.jsx)("option", {
                                            value: "Bird",
                                            children: "Bird"
                                        }), Object(u.jsx)("option", {
                                            value: "Reptile",
                                            children: "Reptile"
                                        }), Object(u.jsx)("option", {
                                            value: "Fish",
                                            children: "Fish"
                                        }), Object(u.jsx)("option", {value: "Mammal", children: "Mammal"})]
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "sex",
                                        children: "Sex:"
                                    }), Object(u.jsxs)("select", {
                                        name: "sex",
                                        error: m.sex,
                                        children: [Object(u.jsx)("option", {
                                            value: "Male",
                                            children: "Male"
                                        }), Object(u.jsx)("option", {
                                            value: "Female",
                                            children: "Female"
                                        }), Object(u.jsx)("option", {value: "Neutral", children: "Neutral"})]
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "breed",
                                        children: "Breed:"
                                    }), Object(u.jsx)(Ne, {
                                        type: "text",
                                        name: "breed",
                                        placeholder: "Type breed",
                                        error: m.breed
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "color",
                                        children: "Color:"
                                    }), Object(u.jsx)(Ne, {
                                        type: "text",
                                        name: "color",
                                        placeholder: "Type color",
                                        error: m.color
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "height",
                                        children: "Height:"
                                    }), Object(u.jsxs)("select", {
                                        name: "height",
                                        error: m.height,
                                        children: [Object(u.jsx)("option", {
                                            value: "20cm-35cm",
                                            children: "20cm - 35cm"
                                        }), Object(u.jsx)("option", {
                                            value: "35cm-75cm",
                                            children: "35cm - 75cm"
                                        }), Object(u.jsx)("option", {value: "75cm-115cm", children: "75cm - 115cm"})]
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsxs)("label", {
                                        htmlFor: "features",
                                        children: ["Distinctive ", Object(u.jsx)("br", {}), " features:", Object(u.jsx)("br", {}), Object(u.jsx)("span", {children: "up to 60 char"})]
                                    }), Object(u.jsx)(ht, {
                                        name: "features",
                                        placeholder: "Type features",
                                        error: m.features
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsxs)("label", {
                                        htmlFor: "description",
                                        children: ["Description:", Object(u.jsx)("br", {}), Object(u.jsx)("span", {children: "up to 150 char"})]
                                    }), Object(u.jsx)(ht, {
                                        name: "description",
                                        placeholder: "Type description",
                                        error: m.description
                                    })]
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-items",
                                    children: [Object(u.jsx)("label", {
                                        htmlFor: "location",
                                        children: "Location: "
                                    }), Object(u.jsx)(ht, {
                                        name: "location",
                                        placeholder: "Type location",
                                        error: m.location
                                    })]
                                })]
                            }), Object(u.jsxs)("div", {
                                className: "found-add-right",
                                children: [Object(u.jsx)("div", {
                                    className: "found-add-image",
                                    children: Object(u.jsx)("img", {src: Jt, alt: "pet"})
                                }), Object(u.jsxs)("div", {
                                    className: "found-add-btn",
                                    children: [Object(u.jsx)(Ne, {
                                        type: "text",
                                        placeholder: "load image",
                                        defaultValue: a,
                                        error: m.image,
                                        name: "fake",
                                        disabled: !0
                                    }), Object(u.jsxs)("div", {
                                        className: "found-load-btn",
                                        children: [Object(u.jsx)(Ne, {
                                            className: "btn-1",
                                            type: "file",
                                            name: "image",
                                            onChange: function (e) {
                                                var t = e.target;
                                                s(t.value)
                                            }
                                        }), Object(u.jsx)(Ne, {
                                            className: "btn-2",
                                            value: "Load image",
                                            type: "text",
                                            name: "fake",
                                            readOnly: !0
                                        })]
                                    })]
                                })]
                            })]
                        }), Object(u.jsx)("hr", {}), Object(u.jsxs)("div", {
                            className: "found-contacts",
                            children: [Object(u.jsx)("label", {
                                htmlFor: "contacts",
                                children: "Contacts: "
                            }), Object(u.jsx)(Ne, {
                                type: "text",
                                name: "phone",
                                placeholder: "Phone",
                                error: m.phone
                            }), Object(u.jsx)(Ne, {type: "text", name: "email", placeholder: "Email", error: m.email})]
                        }), Object(u.jsx)("div", {
                            className: "found-publish",
                            children: Object(u.jsx)(b, {text: "Publish", icon: B.h, color: "btn", name: "publish"})
                        })]
                    })]
                })
            }, Mt = function () {
                return Object(u.jsx)("div", {
                    className: "content",
                    children: Object(u.jsxs)(i.d, {
                        children: [Object(u.jsx)(i.b, {
                            path: "/postsFullInfo/:id",
                            component: dt
                        }), Object(u.jsx)(i.b, {path: "/lost/add", component: Yt}), Object(u.jsx)(i.b, {
                            path: "/found/add",
                            component: Kt
                        }), Object(u.jsx)(i.b, {path: "/lost", component: Rt}), Object(u.jsx)(i.b, {
                            path: "/pet/:id",
                            component: zt
                        }), Object(u.jsx)(i.b, {path: "/found", component: Rt}), Object(u.jsx)(i.b, {
                            path: "/services/add",
                            component: Bt
                        }), Object(u.jsx)(i.b, {
                            path: "/service/:id",
                            component: Ht
                        }), Object(u.jsx)(i.b, {
                            path: "/services/:type",
                            component: Et
                        }), Object(u.jsx)(i.b, {path: "/profile", component: pt}), Object(u.jsx)(i.b, {
                            path: "/posts/add",
                            component: xt
                        }), Object(u.jsx)(i.b, {path: "/posts", component: rt})]
                    })
                })
            }, Zt = function (e) {
                var t = e.className;
                return Object(u.jsx)(d.a, {icon: B.c, className: t})
            }, Dt = function () {
                var e = Object(x.c)(C), t = Object(x.c)(k).auth, r = Object(x.b)(),
                    a = e ? e.full_name.split(" ") : ["", ""], s = Object(o.a)(a, 2), n = s[0], i = s[1],
                    l = Object(c.useState)(!1), j = Object(o.a)(l, 2), p = j[0], b = j[1];
                Object(c.useEffect)((function () {
                    var e = document.querySelector(".upBtn");
                    e && (p && (e.style.opacity = 1), p || (e.style.opacity = 0))
                }), [p]), Object(c.useEffect)((function () {
                    return document.addEventListener("scroll", m), function () {
                        document.removeEventListener("scroll", m)
                    }
                }), []);
                var m = function (e) {
                    e.target.documentElement.scrollTop > 70 ? b(!0) : b(!1)
                };
                return Object(u.jsx)("div", {
                    className: "right-nav-bar", children: t && Object(u.jsxs)(u.Fragment, {
                        children: [Object(u.jsx)("div", {
                            className: "right-nav-user",
                            children: e && Object(u.jsxs)(h.b, {
                                to: "/profile",
                                className: "user-profile-btn",
                                children: [e.avatar ? Object(u.jsx)("div", {
                                    className: "user-avatar",
                                    children: Object(u.jsx)("img", {
                                        src: "https://pro-pets-server.herokuapp.com/".concat(e.avatar),
                                        alt: "avatar"
                                    })
                                }) : Object(u.jsx)("div", {
                                    className: "user-avatar",
                                    children: Object(u.jsx)(d.a, {size: "2x", icon: B.o})
                                }), Object(u.jsxs)("h4", {children: [n, " ", Object(u.jsx)("br", {}), i]})]
                            })
                        }), Object(u.jsxs)(h.b, {
                            to: "/",
                            onClick: function () {
                                return r(function () {
                                    var e = Object(L.a)(I.a.mark((function e(t) {
                                        return I.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    t(y()), t(A(null));
                                                case 2:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            },
                            className: "user-logout-btn",
                            children: [Object(u.jsx)(d.a, {icon: B.l}), Object(u.jsx)("span", {children: "Logout"})]
                        }), Object(u.jsx)("div", {
                            className: "upBtn",
                            id: "upBtn",
                            onClick: function (e) {
                                e.preventDefault();
                                var t = document.documentElement.scrollTop, r = setInterval((function () {
                                    document.documentElement.scrollTop = t, t <= 0 && clearInterval(r), t -= 10
                                }), 1e3 / document.documentElement.scrollTop)
                            },
                            children: Object(u.jsxs)("div", {
                                className: "arrows-box",
                                children: [Object(u.jsx)(Zt, {className: "arrowUp1"}), Object(u.jsx)(Zt, {className: "arrowUp2"}), Object(u.jsx)(Zt, {className: "arrowUp3"})]
                            })
                        })]
                    })
                })
            }, Vt = function () {
                return Object(u.jsxs)("div", {
                    className: "home-box",
                    style: {backgroundColor: "#06B2BB", minHeight: "92.7vh"},
                    children: [Object(u.jsx)(Ce, {}), Object(u.jsx)(Mt, {}), Object(u.jsx)(Dt, {})]
                })
            };
        var Gt = function () {
                var e = Object(x.c)(k), t = e.loading, r = e.auth, a = Object(x.c)(G), s = Object(x.b)(),
                    n = Object(i.h)().pathname;
                return Object(c.useEffect)((function () {
                    s(function () {
                        var e = Object(L.a)(I.a.mark((function e(t) {
                            var r, c;
                            return I.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return t(N(!0)), t(V()), e.prev = 2, e.next = 5, U();
                                    case 5:
                                        r = e.sent, c = r.user, t(A(c)), t(g()), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), t(D({data: e.t0.data, status: e.t0.status}));
                                    case 14:
                                        return e.prev = 14, t(N(!1)), e.finish(14);
                                    case 17:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[2, 11, 14, 17]])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }), [s]), Object(u.jsxs)(u.Fragment, {
                    children: [Object(u.jsx)(le, {}), Object(u.jsxs)(i.d, {
                        children: [Object(u.jsx)(i.b, {
                            exact: !0,
                            path: "/",
                            component: be
                        }), Object(u.jsx)(i.b, {path: "/signin", component: ke})]
                    }), (r || "/lost" === n || "/found" === n || n.startsWith("/pet/")) && Object(u.jsx)(Vt, {}), t && Object(u.jsx)(we, {}), r ? Object(u.jsx)(i.a, {to: "/posts"}) : Object(u.jsx)(i.a, {to: "/"}), "Not authorized" === a && Object(u.jsx)(i.a, {to: "/"})]
                })
            }, Xt = r(20),
            Qt = Object(Xt.b)({app: v, auth: M, posts: Re, services: Nt, comments: it, pets: oe, pagination: We}),
            _t = Object(m.a)({reducer: Qt});
        n.a.render(Object(u.jsx)(a.a.StrictMode, {
            children: Object(u.jsx)(x.a, {
                store: _t,
                children: Object(u.jsx)(h.a, {children: Object(u.jsx)(Gt, {})})
            })
        }), document.getElementById("root"))
    }, 74: function (e, t, r) {
    }
}, [[251, 1, 2]]]);
//# sourceMappingURL=main.273f1204.chunk.js.map