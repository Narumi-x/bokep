"use strict";$(document).ready(function(){var o,s,a=$("body").overlayScrollbars({className:(window.backgroundDark||window.backgroundImageDark?"y"===localStore.getItem("hugo-theme-dream-is-dark"):window.darkNav)?"os-theme-light":"os-theme-dark",scrollbars:{autoHide:"scroll",clickScrolling:!0}}).overlayScrollbars();window.fixedNav&&(o=$("body"),s=$(".dream-nav"),a.options("callbacks.onScroll",function(){var a=this.scroll().position.y;0<a?(o.addClass("has-navbar-fixed-top"),s.addClass("is-fixed-top").css("background","y"===window.isDark?window.backgroundDark:window.background)):(o.removeClass("has-navbar-fixed-top"),s.removeClass("is-fixed-top").css("background","unset")),$(".dream-single-aside").css("top",0<a?100:0)})),window.overlayScrollbarsInstance=a,$(".dream-flip-toggle").click(function(){$(".flip-container").toggleClass("flip-it")})});