!(function(o, s, e) {
  console.log("init");
  var n = {
    init: function(e) {
      n.select2(), n.carousel(), n.stellar(), n.dateTimePicker(), n.sideNav();
    },
    select2: function() {
      o(e).ready(function() {
        o("#selectPerson").select2({ placeholder: "Person", allowClear: !0 });
      });
    },
    carousel: function() {
      o(".hero-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        dots: !1,
        responsive: { 0: { items: 1 }, 600: { items: 1 } },
        nav: !0,
        navText: [
          '<span class="lnr lnr-chevron-left"></span>',
          '<span class="lnr lnr-chevron-right"></span>'
        ]
      }),
        o(".testi-carousel").owlCarousel({
          loop: !0,
          margin: 10,
          autoplay: !0,
          nav: !1,
          dots: !0,
          dotSpeed: 1e3,
          autoplay: !0,
          autoplaySpeed: 1e3,
          items: 1
        });
    },
    stellar: function() {
      var e = o(s).width();
      767 <= e &&
        (o(".bg-fixed").attr("data-stellar-background-ratio", "0.8"),
        o.stellar({
          horizontalScrolling: !1,
          responsive: !0,
          parallaxBackgrounds: !0,
          scrollProperty: "scroll"
        }));
    },
    dateTimePicker: function() {
      o("#datetimepicker4").datetimepicker({ format: "L" }),
        o("#datetimepicker3").datetimepicker({ format: "LT" });
    },
    sideNav: function() {
      o("#side-nav-open").click(function() {
        o("#side-nav").css("width", "300"),
          setTimeout(function() {
            o("body").addClass("sidenav-open");
          }, 200),
          setTimeout(function() {
            o("body").addClass("in");
          }, 400);
      }),
        o("#side-nav-close, #canvas-overlay").click(function() {
          setTimeout(function() {
            o("body").removeClass("in");
          }, 200),
            setTimeout(function() {
              o("body").removeClass("sidenav-open"),
                o("#side-nav").css("width", "0");
            }, 400);
        }),
        o("#side-search-open").click(function() {
          o("#side-search").css("width", "300"),
            setTimeout(function() {
              o("body").addClass("sidesearch-open");
            }, 200),
            setTimeout(function() {
              o("body").addClass("in");
            }, 300);
        }),
        o("#side-search-close, #canvas-overlay").click(function() {
          setTimeout(function() {
            o("body").removeClass("in");
          }, 200),
            setTimeout(function() {
              o("body").removeClass("sidesearch-open"),
                o("#side-search").css("width", "0");
            }, 300);
        });
    }
  };
  o(e).ready(function() {
    n.init(o);
  });
})(window.jQuery, window, document);
