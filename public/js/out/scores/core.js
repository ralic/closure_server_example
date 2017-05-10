// Compiled by ClojureScript 1.9.521 {}
goog.provide('scores.core');
goog.require('cljs.core');
goog.require('reagent.core');
scores.core.home_page = (function scores$core$home_page(){
var react_player = (window["deps"]["react-player"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Never Stops"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://player.vimeo.com/video/216399755?title=0&amp;byline=0"], null)], null)], null);
});
scores.core.mount_root = (function scores$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.core.home_page], null),document.getElementById("app"));
});
scores.core.init_BANG_ = (function scores$core$init_BANG_(){
return scores.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map