Element.prototype.isNodeList = function () {
  return !1;
};
NodeList.prototype.isNodeList = HTMLCollection.prototype.isNodeList =
  function () {
    return !0;
  };
if (void 0 === Trustindex)
  var Trustindex = (function () {
    return {
      loaded_css: [],
      resizerTimeoutPointer: null,
      CDNUrl: "https://cdn.trustindex.io/",
      getDefaultAvatarUrl: function () {
        let a = Math.floor(10 * Math.random()) + 1;
        return (
          Trustindex.CDNUrl +
          "assets/default-avatar/noprofile-" +
          (10 > a ? "0" : "") +
          a +
          ".svg"
        );
      },
      getWidgetUrl: function (a) {
        return "undefined" == typeof a
          ? !1
          : Trustindex.CDNUrl + "widgets/" + a.substring(0, 2) + "/" + a + "/";
      },
      init: function () {
        let a = document.querySelectorAll(
          "div[src*='.trustindex.io'],div[data-src*='.trustindex.io'],script[src*='.trustindex.io']"
        );
        for (let b = 0; b < a.length; b++) {
          let c = "src";
          a[b].getAttribute("data-src") && (c = "data-src");
          if (-1 == a[b].getAttribute(c).search("loader")) continue;
          let d = a[b],
            e = a[b].getAttribute(c).split("?");
          if (2 > e.length) continue;
          e = e[e.length - 1];
          e = e.split("&")[0];
          if (!e || -1 != e.search("=")) continue;
          if (d.getAttribute("data-ti-loaded")) continue;
          let f = document.createElement("div");
          f.innerHTML = "loading...";
          d.after(f);
          d.setAttribute("data-ti-loaded", !0);
          let k = new XMLHttpRequest();
          k.open("GET", Trustindex.getWidgetUrl(e) + "content.html");
          k.send();
          k.onload = function () {
            if (4 == k.readyState && 200 == k.status)
              if (k.responseText) {
                var g = Trustindex.createElementFromHTML(k.responseText),
                  h = g[0];
                f.replaceWith(h);
                for (let l = 0; l < g.length; l++) h.after(g[l]);
                Trustindex.init_widget(h);
                (h.getAttribute("style") &&
                  -1 !=
                    h
                      .getAttribute("style")
                      .indexOf("border: 4px dashed red")) ||
                  ((h.style.display = "none"),
                  h.layout_id
                    ? h.container
                      ? ((g = null),
                        h.set_id
                          ? (g =
                              Trustindex.CDNUrl +
                              "assets/widget-presetted-css/" +
                              h.layout_id +
                              "-" +
                              h.set_id +
                              ".css")
                          : h.pid ||
                            (g =
                              Trustindex.CDNUrl +
                              "widget-assets/css/" +
                              h.layout_id +
                              "-" +
                              (h.classList.contains("ti-dark")
                                ? "blue-dark"
                                : "blue") +
                              ".css"),
                        g && -1 == Trustindex.loaded_css.indexOf(g)
                          ? (Trustindex.addCSS(g, function () {
                              h.style.display = "";
                              Trustindex.resize_widget(h);
                              Trustindex.init_pager(h);
                            }),
                            Trustindex.loaded_css.push(g))
                          : ((h.style.display = ""),
                            Trustindex.resize_widget(h),
                            Trustindex.init_pager(h)),
                        Trustindex.formatReviews(),
                        Trustindex.replaceErrorImages(),
                        (g =
                          h.getAttribute("data-rich-snippet") ||
                          h.getAttribute("data-rich-snippet-url")) &&
                          0 ==
                            document.querySelectorAll(
                              'script[src*=".trustindex.io/assets/js/richsnippet.js"], script[type="application/ld+json"][data-trustindex="1"]'
                            ).length &&
                          Trustindex.addJS(
                            Trustindex.CDNUrl +
                              "assets/js/richsnippet.js?" +
                              g.replace(
                                /(?:companies\/[^\/]{2}\/)?([^\/]+).*/,
                                "$1"
                              )
                          ))
                      : (h.innerHTML = "Container id not found!")
                    : (h.innerHTML = "Layout id not found!"));
              } else
                (g = document.createComment(
                  "Trustindex widget (" + e + ") is empty here."
                )),
                  f.replaceWith(g);
            else d.nextSibling.innerHTML = "Widget not found!";
          };
        }
        Trustindex.formatReviews();
        Trustindex.replaceErrorImages();
        Trustindex.resize_widgets();
        window.addEventListener("resize", function () {
          clearTimeout(Trustindex.resizerTimeoutPointer);
          Trustindex.resizerTimeoutPointer = setTimeout(function () {
            Trustindex.resize_widgets();
          }, 1e3);
        });
        window.addEventListener("load", function () {
          Trustindex.removePopupEvents();
          setTimeout(function () {
            Trustindex.resize_widgets();
          }, 40);
        });
        window.addEventListener("scroll", Trustindex.removePopupEvents);
        setTimeout(Trustindex.removePopupEvents, 2500);
      },
      init_widget: function (a) {
        a.layout_id = a.getAttribute("data-layout-id");
        a.set_id = a.getAttribute("data-set-id");
        a.pid = a.getAttribute("data-pid");
        a.layout_id && (a.layout_id = parseInt(a.layout_id));
        a.container = a.querySelector(".ti-widget-container");
        a.reviews_container = a.querySelector(".ti-reviews-container");
        a.reviews_container_wrapper = a.querySelector(
          ".ti-reviews-container-wrapper"
        );
        a.pager_autoplay_timeout = a.getAttribute(
          "data-pager-autoplay-timeout"
        );
        a.rotate_to = a.getAttribute("data-rotate-to");
        a.rotate_to || (a.rotate_to = "right");
        a.slider_loop = a.getAttribute("data-slider-loop");
        a.mouse_over = !1;
      },
      init_dots: function (a) {
        let b = a.querySelector(".ti-controls-dots");
        if (b) {
          var c = Trustindex.getReviewNum(a);
          let d = Trustindex.getVisibleReviewNum(a),
            e = "",
            f = 1 + c - d;
          a.slider_loop && c != d && (f = Trustindex.getReviewNum(a));
          for (c = 0; c < f; c++)
            e += '<div class="dot" data-pager-state="' + c + '"></div> ';
          b.innerHTML = e;
          (a = b.querySelector(
            '.dot[data-pager-state="' + (a.pager_state || 0) + '"]'
          )) && a.classList.add("active");
        }
      },
      init_pager: function (a) {
        if (window.jQuery && a instanceof jQuery)
          a.each(function () {
            Trustindex.init_pager(this);
          });
        else if (void 0 !== a.isNodeList && a.isNodeList())
          a.forEach(function (b) {
            Trustindex.init_pager(b);
          });
        else {
          void 0 === a.layout_id && Trustindex.init_widget(a);
          "ti-widget" != a.getAttribute("class") && Trustindex.resize_widget(a);
          a.pager_inited = !0;
          Trustindex.init_dots(a);
          Trustindex.setClickableParts(a);
          Trustindex.setReadMore(a);
          Trustindex.handleSubContents(a);
          if (null !== a.pager_autoplay_timeout) {
            a.pager_state = 0;
            a.pager_state_dots = 0;
            a.pager_moving = !1;
            a.pager_autoplay_direction = "next";
            a.pager_position = "0px";
            a.pager_autoplay_timeout = parseInt(a.pager_autoplay_timeout);
            "left" == a.rotate_to &&
              ((a.pager_state = Trustindex.getMaximumPagerState(a) - 1),
              a.slider_loop &&
                a.querySelector(".ti-controls-dots") &&
                "none" !=
                  window.getComputedStyle(a.querySelector(".ti-controls-dots"))
                    .display &&
                (a.pager_state = Trustindex.getReviewNum(a) - 2),
              (a.pager_state_dots = a.pager_state),
              Trustindex.moverBtnClicked(
                a,
                "next" == a.pager_autoplay_direction,
                "auto",
                1
              ),
              a.slider_loop && (a.pager_autoplay_direction = "prev"));
            Trustindex.controlsShowHide(a);
            a.querySelectorAll(".ti-review-item").forEach(function (d) {
              d.style.position = "relative";
            });
            a.querySelector(".ti-widget-container").addEventListener(
              "mouseenter",
              function (d) {
                a.mouse_over = !0;
              }
            );
            a.querySelector(".ti-widget-container").addEventListener(
              "mouseleave",
              function (d) {
                a.mouse_over = !1;
              }
            );
            a.addEventListener(
              "click",
              function (d) {
                if (
                  d.target.matches(".ti-controls .ti-next") ||
                  d.target.matches(".ti-controls .ti-prev")
                )
                  d.preventDefault(),
                    Trustindex.moverBtnClicked(
                      a,
                      d.target.classList.contains("ti-next"),
                      "manual",
                      500
                    );
              },
              !1
            );
            Trustindex.setAutoplay(a);
            let b, c;
            a.querySelector(".ti-reviews-container").addEventListener(
              "touchstart",
              function (d) {
                b = d.touches[0].pageX;
                c = null;
                a.mouse_over = !0;
              },
              { passive: !0 }
            );
            a.querySelector(".ti-reviews-container").addEventListener(
              "touchmove",
              function (d) {
                c = d.touches[0].pageX;
              },
              { passive: !0 }
            );
            a.querySelector(".ti-reviews-container").addEventListener(
              "touchend",
              function (d) {
                b &&
                  c &&
                  60 < Math.abs(b - c) &&
                  ((d = b > c),
                  a
                    .querySelectorAll(".ti-review-content")
                    .forEach(function (e) {
                      e.scrollTop = 0;
                    }),
                  Trustindex.moverBtnClicked(a, d, "manual", 500));
                c = b = null;
                a.mouse_over = !1;
              },
              { passive: !0 }
            );
          }
          if ("admin.trustindex.io" != location.hostname || 53 == a.layout_id)
            a.addEventListener("click", function (b) {
              b.target.matches(".disable-widget")
                ? (b.preventDefault(),
                  a.classList.add("ti-disabled"),
                  document
                    .querySelectorAll('.ti-widget:not([data-layout-id="53"])')
                    .forEach(function (c) {
                      c.classList.add("ti-disabled");
                    }),
                  53 != a.layout_id &&
                    Trustindex.setCookie(
                      "ti-widget-disabled",
                      1,
                      10,
                      "/",
                      location.hostname
                    ),
                  a.querySelector(".ti-enable-widget") || a.remove())
                : b.target.matches(".ti-enable-widget") &&
                  (b.preventDefault(),
                  a.classList.remove("ti-disabled"),
                  Trustindex.setReadMore(a, 10),
                  document
                    .querySelectorAll('.ti-widget:not([data-layout-id="53"])')
                    .forEach(function (c) {
                      c.classList.remove("ti-disabled");
                      Trustindex.setReadMore(c, 10);
                    }),
                  53 != a.layout_id &&
                    Trustindex.removeCookie(
                      "ti-widget-disabled",
                      "/",
                      location.hostname
                    ));
            }),
              Trustindex.getCookie("ti-widget-disabled") &&
                document.querySelectorAll(".ti-widget").forEach(function (b) {
                  b.classList.add("ti-disabled");
                });
          a.removeEventListener("click", Trustindex.popupHandler);
          a.addEventListener("click", Trustindex.popupHandler);
          a.removeEventListener("click", Trustindex.popupCloseHandler);
          a.addEventListener("click", Trustindex.popupCloseHandler);
          a.removeEventListener("click", Trustindex.readMoreHandler);
          a.addEventListener("click", Trustindex.readMoreHandler);
        }
      },
      removePopupEvents: function () {
        document
          .querySelectorAll(
            '.ti-widget a[href="#popup"], .ti-widget a[href="#dropdown"]'
          )
          .forEach(function (a) {
            let b = a.cloneNode(!0);
            a.parentNode.replaceChild(b, a);
            a = b.closest(".ti-widget");
            Trustindex.handleSubContents(a);
          });
        window.removeEventListener("scroll", Trustindex.removePopupEvents);
      },
      setAutoplay: function (a, b) {
        void 0 !== b && (a.pager_autoplay_timeout = b);
        void 0 !== a.intervalPointer && clearInterval(a.intervalPointer);
        0 < a.pager_autoplay_timeout &&
          (a.intervalPointer = setInterval(function () {
            Trustindex.moverBtnClicked(
              a,
              "next" == a.pager_autoplay_direction,
              "auto",
              1e3
            );
          }, 1e3 * a.pager_autoplay_timeout));
      },
      moverBtnClicked: function (a, b, c, d) {
        if ("manual" == c && ((b && !a.isNext) || (!b && !a.isPrev)))
          return Trustindex.noReviewsAnimation(a, b), !1;
        if (a.pager_moving || (a.mouse_over && "auto" == c)) return !1;
        let e = a.querySelectorAll(".ti-review-item").length,
          f = Trustindex.getVisibleReviewNum(a);
        if (e <= f) return !1;
        Trustindex.moveReviews(a, a.pager_state + (b ? 1 : -1), c, d, b);
      },
      moveReviews: function (a, b, c, d, e) {
        if (a.slider_loop) {
          let g = Trustindex.getMaximumPagerState(a),
            h = Trustindex.getReviewNum(a);
          if (b > g && (a.pager_state < b || "resize" == e)) {
            var f = a.reviews_container_wrapper.querySelectorAll(
                ".ti-review-item.ti-cloned.ti-cloned--end"
              ).length,
              k = b - g - f;
            f >= h && (f -= parseInt(f / h) * h);
            for (let l = 0; l < k; l++) {
              let m = a.reviews_container_wrapper
                .querySelectorAll(".ti-review-item:not(.ti-cloned)")
                [f + l].cloneNode(!0);
              m.classList.add("ti-cloned", "ti-cloned--end");
              a.reviews_container_wrapper.appendChild(m);
            }
          } else
            b < a.pager_state &&
              setTimeout(function () {
                let l = ".ti-review-item.ti-cloned.ti-cloned--end";
                b > g && (l += ":last-child");
                a.reviews_container_wrapper
                  .querySelectorAll(l)
                  .forEach(function (m) {
                    m.remove();
                  });
              }, d);
          if (0 > b && !1 === e) {
            k = a.reviews_container_wrapper.querySelectorAll(
              ".ti-review-item.ti-cloned.ti-cloned--start"
            ).length;
            let l = a.reviews_container_wrapper
              .querySelector(
                ".ti-review-item:nth-last-child(" + (-1 * b + k) + ")"
              )
              .cloneNode(!0);
            l.classList.add("ti-cloned", "ti-cloned--start");
            l.style.marginLeft =
              (-1 * a.reviews_container_wrapper.offsetWidth) /
                Trustindex.getVisibleReviewNum(a) +
              "px";
            a.reviews_container_wrapper.insertBefore(
              l,
              a.reviews_container_wrapper.firstChild
            );
            setTimeout(function () {
              l.style.marginLeft = "";
              Trustindex.resetPager(a);
            }, d);
          } else
            !0 === e &&
              setTimeout(function () {
                let l = a.reviews_container_wrapper.querySelector(
                  ".ti-review-item.ti-cloned.ti-cloned--start:first-child"
                );
                l && (l.remove(), Trustindex.resetPager(a));
              }, d);
          !0 === e
            ? (a.pager_state_dots++,
              a.pager_state_dots > h - 1 && (a.pager_state_dots = 0))
            : !1 === e
            ? (a.pager_state_dots--,
              0 > a.pager_state_dots && (a.pager_state_dots = h - 1))
            : "resize" !== e && (a.pager_state_dots = b);
        } else a.pager_state_dots = b;
        a.pager_state = b;
        a.pager_moving = !0;
        Trustindex.controlsShowHide(a);
        Trustindex.slideReviews(a, d);
        "auto" != c &&
          void 0 !== a.intervalPointer &&
          (clearInterval(a.intervalPointer), delete a.intervalPointer);
      },
      slideReviews: function (a, b) {
        if (void 0 !== a.pager_position) {
          void 0 === b && (b = 1e3);
          var c = Trustindex.getVisibleReviewNum(a);
          c =
            (-1 * a.pager_state * a.reviews_container_wrapper.offsetWidth) / c +
            "px";
          Trustindex.animateReviews(a, a.pager_position, c, b);
          a.pager_position = c;
          setTimeout(function () {
            a.pager_moving = !1;
          }, b);
        }
      },
      noReviewsAnimation: function (a, b) {
        a.pager_moving = !0;
        let c = parseInt(a.pager_position),
          d = b ? -1 : 1,
          e = function (g, h, l, m) {
            setTimeout(function () {
              Trustindex.animateReviews(a, g + "px", h + "px", l);
            }, m);
          },
          f = 0,
          k = 0;
        [
          { pos: 50, speed: 160 },
          { pos: -70, speed: 100 },
          { pos: 40, speed: 80 },
          { pos: -20, speed: 120 },
        ].forEach(function (g, h) {
          0 == h ? (f = c + g.pos * d) : ((c = f), (f += g.pos * d));
          e(c, f, g.speed, k);
          k += g.speed;
        });
        setTimeout(function () {
          a.pager_moving = !1;
        }, k);
      },
      animateReviews: function (a, b, c, d) {
        a.querySelectorAll(".ti-review-item").forEach(function (e) {
          e.animate(
            { left: [b, c] },
            { duration: d, fill: "both", easing: "ease-in-out" }
          );
          setTimeout(() => {
            if (!Trustindex.isReviewVisible(e)) {
              let f = e.querySelector(".ti-read-more.ti-read-more-collapse");
              f && f.click();
            }
          }, d);
        });
      },
      setClickableParts: function (a) {
        if ("undefined" == typeof a.clickable_parts_setted) {
          a.clickable_parts_setted = !0;
          var b = a.querySelector("a[href]");
          b &&
            "#" != b.getAttribute("href") &&
            (a = b.closest(".ti-header:not(a), .ti-footer:not(a)")) &&
            a.querySelector(
              ".ti-large-logo, .ti-profile-img, .ti-profile-details, .ti-logo-stars-flex"
            ) &&
            (a.classList.add("ti-clickable-link"),
            a.addEventListener("click", function (c) {
              if ("A" == c.target.nodeName) return !1;
              Trustindex.openWindow(b.getAttribute("href"));
              c.preventDefault();
            }));
        }
      },
      setReadMore: function (a, b) {
        if (!a) return !1;
        "undefined" == typeof b && (b = 500);
        setTimeout(function () {
          let c = a.querySelectorAll(".ti-read-more");
          c &&
            c.forEach(function (d) {
              let e = d
                .closest(".ti-review-item")
                .querySelector(d.getAttribute("data-container"));
              e ||= d.closest(".ti-review-content").querySelector(".ti-inner");
              let f = 10;
              e.getAttribute("style") &&
                -1 != e.getAttribute("style").indexOf("height") &&
                (f = 500);
              e.setAttribute("style", "");
              d.setAttribute("style", "");
              setTimeout(() => {
                var k = e.scrollHeight > e.offsetHeight;
                if (e.closest(".ti-popup-widget")) {
                  k = parseFloat(
                    window
                      .getComputedStyle(e, null)
                      .getPropertyValue("font-size")
                  );
                  let g = parseInt(
                    window
                      .getComputedStyle(e, null)
                      .getPropertyValue("-webkit-line-clamp")
                  );
                  parseFloat(
                    window
                      .getComputedStyle(e, null)
                      .getPropertyValue("max-height")
                  );
                  k = parseInt(1.44 * k * g);
                  k = e.scrollHeight > k;
                }
                k &&
                  "block" !=
                    window
                      .getComputedStyle(d, null)
                      .getPropertyValue("display") &&
                  (k = !1);
                k
                  ? (e.style.setProperty(
                      "height",
                      e.offsetHeight + "px",
                      "important"
                    ),
                    e.setAttribute("data-initial-height", e.offsetHeight),
                    0 <
                      parseInt(
                        window
                          .getComputedStyle(e, null)
                          .getPropertyValue("max-height")
                      ) &&
                      e.style.setProperty("max-height", "unset", "important"),
                    d.getAttribute("data-open-text") &&
                      (d.innerHTML = d.getAttribute("data-open-text")),
                    d.classList.add("ti-read-more-active"),
                    d.setAttribute("style", ""))
                  : d.getAttribute("data-container")
                  ? ((d.innerHTML = "&nbsp;"),
                    (d.style.opacity = 0),
                    (d.style.pointerEvents = "none"))
                  : (d.style.display = "none");
              }, f);
            });
        }, b);
      },
      readMoreHandler: function (a) {
        if (a.target.matches(".ti-read-more.ti-read-more-active")) {
          a.preventDefault();
          a = a.target;
          let b = a
            .closest(".ti-review-item")
            .querySelector(a.getAttribute("data-container"));
          b ||= a.closest(".ti-review-content").querySelector(".ti-inner");
          a.classList.contains("ti-read-more-collapse")
            ? (b.style.setProperty("-webkit-line-clamp", ""),
              b.style.setProperty(
                "height",
                b.getAttribute("data-initial-height") + "px",
                "important"
              ),
              (a.innerHTML = a.getAttribute("data-open-text")),
              a.classList.remove("ti-read-more-collapse"))
            : (b.style.setProperty("-webkit-line-clamp", "unset", "important"),
              b.style.setProperty("height", b.scrollHeight + "px", "important"),
              (a.innerHTML = a.getAttribute("data-collapse-text")),
              a.classList.add("ti-read-more-collapse"),
              a.innerHTML || (a.style.display = "none"));
        }
      },
      handleSubContents: function (a) {
        a.querySelectorAll("a[data-subcontent]").forEach(function (b) {
          let c = b.getAttribute("data-subcontent"),
            d = a.querySelector(b.getAttribute("data-subcontent-target"));
          d &&
            "undefined" != typeof a.pid &&
            a.pid &&
            ("" != d.innerHTML.trim()
              ? b.setAttribute("data-subcontent-loaded", !0)
              : b.addEventListener("click", function () {
                  if (!b.getAttribute("data-subcontent-loaded")) {
                    b.classList.add("ti-loading");
                    setTimeout(function () {
                      b.setAttribute("data-subcontent-loaded", !0);
                    }, 50);
                    let e = new XMLHttpRequest();
                    e.open(
                      "GET",
                      Trustindex.getWidgetUrl(a.pid) +
                        "_subcontent-" +
                        c +
                        ".html"
                    );
                    e.send();
                    e.onload = function () {
                      4 == e.readyState &&
                        200 == e.status &&
                        ((d.innerHTML = e.responseText),
                        b.dispatchEvent(new Event("subcontent-loaded")),
                        b.classList.remove("ti-loading"),
                        Trustindex.formatReviews());
                    };
                  }
                }));
        });
      },
      formatReviews: function (a) {
        (a = document.querySelectorAll(
          ".ti-widget .ti-review-content, .ti-widget .ti-inner .ti-review-text"
        )) &&
          a.length &&
          a.forEach(function (b) {
            var c = b.querySelector(".ti-inner");
            c && (b = c);
            c = b.querySelectorAll("svg");
            0 == c.length &&
              ((c = b.innerHTML),
              (c = c.replace(
                /<img.+class="emoji" alt="\u263a" src="[^'"]+">/gm,
                '<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;'
              )),
              (c = c.replace(
                /<img.+class="emoji" alt="\u2639" src="[^'"]+">/gm,
                '<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'
              )),
              (c = c
                .replace(
                  "\u263a",
                  '<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;'
                )
                .replace(
                  "\u2639",
                  '<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'
                )),
              (c = c.replace(/\n/g, "<br />")),
              (b.innerHTML = c),
              (c = b.querySelectorAll("svg")));
            if (c.length) {
              let e = 0.95 * parseInt(b.style.fontSize || 14);
              c.forEach(function (f) {
                f.style.width = e + "px";
                f.style.height = e + "px";
              });
            }
            b.innerHTML = Trustindex.decodeHtml(b.innerHTML);
            let d = b.closest(".ti-review-item");
            if (d) {
              let e = d.querySelector(".ti-profile-img-sprite");
              e &&
                setTimeout(() => {
                  let f = d.closest(".ti-widget").getAttribute("data-pid"),
                    k = d.getAttribute("data-index")
                      ? parseInt(d.getAttribute("data-index"))
                      : [].indexOf.call(d.parentNode.children, d);
                  var g = getComputedStyle(e);
                  g = parseInt(g.height || "0");
                  if (!g || isNaN(g)) g = 40;
                  e.style.background =
                    'url("' +
                    Trustindex.getWidgetUrl(f) +
                    'sprite.jpg") 0 ' +
                    k * g * -1 +
                    "px";
                }, 50);
            }
          });
        a = document.querySelectorAll(
          ".ti-widget .ti-review-item[data-platform-page-url]"
        );
        a.forEach(function (b) {
          let c = b.querySelector(".ti-name"),
            d = b.getAttribute("data-platform-page-url");
          c.style.cursor = "pointer";
          c.addEventListener("click", function (e) {
            Trustindex.openWindow(d);
          });
        });
        a = document.querySelectorAll(".ti-widget .ti-review-item[data-time]");
        a.forEach(function (b) {
          let c = b.querySelector(".ti-date:not(.ti-date-comment)"),
            d = parseInt(b.getAttribute("data-time"));
          c &&
            (c.innerHTML = Trustindex.getRelativeTime(
              d,
              b.closest(".ti-widget").getAttribute("data-time-locale")
            ));
        });
      },
      replaceErrorImages: function () {
        let a = document.querySelectorAll(
          ".ti-widget .ti-review-item .ti-profile-img img"
        );
        a &&
          a.forEach(function (b) {
            if (
              !b.complete ||
              (void 0 !== b.naturalWidth && 0 != b.naturalWidth)
            ) {
              let c = function () {
                this.setAttribute("src", Trustindex.getDefaultAvatarUrl());
                this.removeEventListener("error", c);
              };
              b.removeEventListener("error", c);
              b.addEventListener("error", c);
            } else b.setAttribute("src", Trustindex.getDefaultAvatarUrl());
          });
      },
      controlsShowHide: function (a) {
        let b = Trustindex.getReviewNum(a),
          c = Trustindex.getVisibleReviewNum(a);
        a.isPrev = !0;
        a.isNext = !0;
        a.slider_loop
          ? b == c &&
            (Trustindex.toggleElement(a.querySelector(".ti-prev"), "hide"),
            Trustindex.toggleElement(a.querySelector(".ti-next"), "hide"),
            (a.isPrev = !1),
            (a.isNext = !1))
          : (0 == a.pager_state
              ? (Trustindex.toggleElement(a.querySelector(".ti-prev"), "hide"),
                (a.pager_autoplay_direction = "next"),
                (a.isPrev = !1))
              : Trustindex.toggleElement(a.querySelector(".ti-prev")),
            a.pager_state >= b - c
              ? (Trustindex.toggleElement(a.querySelector(".ti-next"), "hide"),
                (a.pager_autoplay_direction = "prev"),
                (a.isNext = !1))
              : Trustindex.toggleElement(a.querySelector(".ti-next")));
        a.querySelectorAll(".dot").forEach(function (d) {
          d.classList.remove("active");
        });
        (a = a.querySelector(
          '.dot[data-pager-state="' + a.pager_state_dots + '"]'
        )) && a.classList.add("active");
      },
      resize_widget: function (a) {
        void 0 === a.container && Trustindex.init_widget(a);
        if ("undefined" == typeof a.original_cols) {
          var b = a.container.classList.toString();
          -1 == b.indexOf("ti-col-")
            ? (a.original_cols = 1)
            : (a.original_cols = parseInt(
                b.replace(/^.*ti-col-(\d+).*$/, "$1")
              ));
        }
        if (1 >= a.original_cols) return !1;
        let c = 5;
        a.container.offsetWidth > a.reviews_container.offsetWidth
          ? 520 > a.offsetWidth
            ? (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-1"
              ),
              (c = 1))
            : 750 > a.offsetWidth
            ? (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-2"
              ),
              (c = 1))
            : 1100 > a.offsetWidth
            ? (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-3"
              ),
              (c = 2))
            : 1450 > a.offsetWidth
            ? (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-4"
              ),
              (c = 3))
            : 1800 > a.offsetWidth
            ? (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-5"
              ),
              (c = 4))
            : (a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-6"
              ),
              (c = 5))
          : (540 > a.offsetWidth
              ? (a.container.setAttribute(
                  "class",
                  "ti-widget-container ti-col-1"
                ),
                (c = 1))
              : 760 > a.offsetWidth
              ? (a.container.setAttribute(
                  "class",
                  "ti-widget-container ti-col-2"
                ),
                (c = 2))
              : 1200 > a.offsetWidth
              ? (a.container.setAttribute(
                  "class",
                  "ti-widget-container ti-col-3"
                ),
                (c = 3))
              : 1550 > a.offsetWidth
              ? (a.container.setAttribute(
                  "class",
                  "ti-widget-container ti-col-4"
                ),
                (c = 4))
              : (a.container.setAttribute(
                  "class",
                  "ti-widget-container ti-col-5"
                ),
                (c = 5)),
            1 < c &&
              44 == a.layout_id &&
              (c--,
              a.container.setAttribute(
                "class",
                "ti-widget-container ti-col-" + c
              )));
        if (
          a.getAttribute("data-column-vertical-separate") ||
          31 == a.layout_id
        ) {
          let e = a.container.querySelectorAll(".ti-review-item");
          a.reviews_container_wrapper.innerHTML = "";
          b = 0;
          for (var d = []; b < c; b++)
            (d[b] = document.createElement("div")),
              d[b].setAttribute("class", "ti-column"),
              a.reviews_container_wrapper.appendChild(d[b]);
          Array.from(e)
            .sort(function (f, k) {
              f = f.getAttribute("data-index")
                ? parseInt(f.getAttribute("data-index"))
                : 0;
              k = k.getAttribute("data-index")
                ? parseInt(k.getAttribute("data-index"))
                : 1;
              return f - k;
            })
            .forEach(function (f, k) {
              d[k % c].appendChild(f);
            });
        }
        Trustindex.init_dots(a);
        Trustindex.moveReviews(a, a.pager_state, "auto", 500, "resize");
        setTimeout(function () {
          "undefined" == typeof a.pager_inited && Trustindex.init_pager(a);
        }, 2e3);
      },
      resize_widgets: function () {
        document.querySelectorAll(".ti-widget").forEach(function (a) {
          Trustindex.isVisible(a)
            ? Trustindex.resize_widget(a)
            : (a.visibleInterval = setInterval(function () {
                Trustindex.isVisible(a) &&
                  (clearInterval(a.visibleInterval),
                  Trustindex.resize_widget(a));
              }, 250));
        });
      },
      createElementFromHTML: function (a) {
        let b = document.createElement("div");
        b.innerHTML = a.trim();
        return b.childNodes;
      },
      decodeHtml: function (a) {
        var b = document.createElement("textarea");
        b.innerHTML = a;
        return b.value;
      },
      toggleElement: function (a, b) {
        void 0 === b && (b = "show");
        a && (a.style.display = "show" == b ? "block" : "none");
      },
      getVisibleReviewNum: function (a) {
        let b = parseInt(
          a.container.classList.toString().replace(/^.*ti-col-(\d+).*$/, "$1")
        );
        a.container.offsetWidth > a.reviews_container.offsetWidth && --b;
        ("46" != a.dataset.layoutId && "47" != a.dataset.layoutId) || --b;
        return Math.max(b, 1);
      },
      getReviewNum: function (a) {
        return a.querySelectorAll(".ti-review-item:not(.ti-cloned)").length;
      },
      getMaximumPagerState: function (a) {
        let b = Trustindex.getReviewNum(a);
        a = Trustindex.getVisibleReviewNum(a);
        return b - a;
      },
      resetPager: function (a) {
        a.pager_position = 0;
        a.pager_state = 0;
        a.reviews_container_wrapper
          .querySelectorAll(".ti-review-item")
          .forEach(function (b) {
            b.animate({ left: 0 }, { fill: "both" });
          });
      },
      addCSS: function (a, b) {
        let c = document.createElement("link");
        c.type = "text/css";
        c.rel = "stylesheet";
        c.href = a;
        document.head.appendChild(c);
        b && c.addEventListener("load", b);
      },
      addJS: function (a, b) {
        let c = document.createElement("script");
        c.type = "text/javascript";
        c.src = a;
        document.head.appendChild(c);
        b && c.addEventListener("load", b);
      },
      popupHandler: function (a) {
        let b = a.target,
          c = function () {
            b.classList.toggle("active");
            let d = b.closest(".ti-widget");
            d &&
              (d
                .querySelectorAll(".ti-dropdown-widget, .ti-popup-widget")
                .forEach(function (e) {
                  e.classList.toggle("active");
                }),
              Trustindex.setReadMore(d, 10));
            b.removeEventListener("subcontent-loaded", c);
          };
        if (b.matches('a[href="#dropdown"]') || b.matches('a[href="#popup"]'))
          b.getAttribute("data-subcontent-loaded")
            ? c()
            : b.addEventListener("subcontent-loaded", c),
            a.preventDefault();
      },
      popupCloseHandler: function (a) {
        a.target.matches(".ti-header .ti-close-lg") &&
          (a.preventDefault(),
          (a = a.target.closest(".ti-widget")) &&
            (a = a.querySelector("a.ti-header[href]")) &&
            a.click());
      },
      openWindow: function (a) {
        let b = document.createElement("a");
        b.href = a;
        b.target = "_blank";
        b.rel = "noopener noreferrer nofollow";
        b.click();
      },
      isVisible: function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      },
      isReviewVisible: function (a) {
        let b = a.closest(".ti-reviews-container-wrapper"),
          c = a.offsetLeft - b.offsetLeft;
        a = c + a.offsetWidth;
        return c >= b.scrollLeft && a <= b.scrollLeft + b.offsetWidth;
      },
      getRelativeTime: function (a, b) {
        b = b.split("|");
        let c = b.shift();
        var d = b.shift(),
          e = [86400, 604800, 2419200, 31536e3];
        let f = new Date().getTime() / 1e3 - a;
        for (a = e.length - 1; 0 <= a; a--)
          if (f >= e[a])
            return (
              (d = Math.floor(f / e[a])),
              (e = 2 * a),
              1 < d && e++,
              c.replace("%d", d).replace("%s", b[e])
            );
        return d;
      },
      getCookie: function (a) {
        return (
          decodeURIComponent(
            document.cookie.replace(
              new RegExp(
                "(?:(?:^|.*;)\\s*" +
                  encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") +
                  "\\s*\\=\\s*([^;]*).*$)|^.*$"
              ),
              "$1"
            )
          ) || null
        );
      },
      setCookie: function (a, b, c, d, e) {
        let f = new Date();
        f.setDate(f.getDate() + c);
        c = null == c ? "" : "; expires=" + f.toUTCString();
        document.cookie =
          encodeURIComponent(a) +
          "=" +
          encodeURIComponent(b) +
          c +
          (e ? "; domain=" + e : "") +
          (d ? "; path=" + d : "");
        return !0;
      },
      removeCookie: function (a, b, c) {
        if (!a || null === Trustindex.getCookie(a)) return !1;
        document.cookie =
          encodeURIComponent(a) +
          "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
          (c ? "; domain=" + c : "") +
          (b ? "; path=" + b : "");
        return !0;
      },
    };
  })();
Trustindex.init();
