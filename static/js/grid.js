"use strict";$(document).ready(function(){var e;(e=$(".dream-columns").masonry({itemSelector:".dream-column"})).imagesLoaded().progress(function(){return e.masonry("layout")}),window.hasTwitterEmbed&&window.twttr.ready(function(n){return n.events.bind("loaded",function(){return e.masonry("layout")})})});