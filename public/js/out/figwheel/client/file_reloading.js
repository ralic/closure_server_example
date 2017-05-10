// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21674__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21674__auto__){
return or__21674__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28464_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28464_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28469 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28470 = null;
var count__28471 = (0);
var i__28472 = (0);
while(true){
if((i__28472 < count__28471)){
var n = cljs.core._nth.call(null,chunk__28470,i__28472);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28473 = seq__28469;
var G__28474 = chunk__28470;
var G__28475 = count__28471;
var G__28476 = (i__28472 + (1));
seq__28469 = G__28473;
chunk__28470 = G__28474;
count__28471 = G__28475;
i__28472 = G__28476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28469);
if(temp__4657__auto__){
var seq__28469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28469__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__28469__$1);
var G__28477 = cljs.core.chunk_rest.call(null,seq__28469__$1);
var G__28478 = c__22485__auto__;
var G__28479 = cljs.core.count.call(null,c__22485__auto__);
var G__28480 = (0);
seq__28469 = G__28477;
chunk__28470 = G__28478;
count__28471 = G__28479;
i__28472 = G__28480;
continue;
} else {
var n = cljs.core.first.call(null,seq__28469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28481 = cljs.core.next.call(null,seq__28469__$1);
var G__28482 = null;
var G__28483 = (0);
var G__28484 = (0);
seq__28469 = G__28481;
chunk__28470 = G__28482;
count__28471 = G__28483;
i__28472 = G__28484;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28535_28546 = cljs.core.seq.call(null,deps);
var chunk__28536_28547 = null;
var count__28537_28548 = (0);
var i__28538_28549 = (0);
while(true){
if((i__28538_28549 < count__28537_28548)){
var dep_28550 = cljs.core._nth.call(null,chunk__28536_28547,i__28538_28549);
topo_sort_helper_STAR_.call(null,dep_28550,(depth + (1)),state);

var G__28551 = seq__28535_28546;
var G__28552 = chunk__28536_28547;
var G__28553 = count__28537_28548;
var G__28554 = (i__28538_28549 + (1));
seq__28535_28546 = G__28551;
chunk__28536_28547 = G__28552;
count__28537_28548 = G__28553;
i__28538_28549 = G__28554;
continue;
} else {
var temp__4657__auto___28555 = cljs.core.seq.call(null,seq__28535_28546);
if(temp__4657__auto___28555){
var seq__28535_28556__$1 = temp__4657__auto___28555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28535_28556__$1)){
var c__22485__auto___28557 = cljs.core.chunk_first.call(null,seq__28535_28556__$1);
var G__28558 = cljs.core.chunk_rest.call(null,seq__28535_28556__$1);
var G__28559 = c__22485__auto___28557;
var G__28560 = cljs.core.count.call(null,c__22485__auto___28557);
var G__28561 = (0);
seq__28535_28546 = G__28558;
chunk__28536_28547 = G__28559;
count__28537_28548 = G__28560;
i__28538_28549 = G__28561;
continue;
} else {
var dep_28562 = cljs.core.first.call(null,seq__28535_28556__$1);
topo_sort_helper_STAR_.call(null,dep_28562,(depth + (1)),state);

var G__28563 = cljs.core.next.call(null,seq__28535_28556__$1);
var G__28564 = null;
var G__28565 = (0);
var G__28566 = (0);
seq__28535_28546 = G__28563;
chunk__28536_28547 = G__28564;
count__28537_28548 = G__28565;
i__28538_28549 = G__28566;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28539){
var vec__28543 = p__28539;
var seq__28544 = cljs.core.seq.call(null,vec__28543);
var first__28545 = cljs.core.first.call(null,seq__28544);
var seq__28544__$1 = cljs.core.next.call(null,seq__28544);
var x = first__28545;
var xs = seq__28544__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28543,seq__28544,first__28545,seq__28544__$1,x,xs,get_deps__$1){
return (function (p1__28485_SHARP_){
return clojure.set.difference.call(null,p1__28485_SHARP_,x);
});})(vec__28543,seq__28544,first__28545,seq__28544__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28579 = cljs.core.seq.call(null,provides);
var chunk__28580 = null;
var count__28581 = (0);
var i__28582 = (0);
while(true){
if((i__28582 < count__28581)){
var prov = cljs.core._nth.call(null,chunk__28580,i__28582);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28583_28591 = cljs.core.seq.call(null,requires);
var chunk__28584_28592 = null;
var count__28585_28593 = (0);
var i__28586_28594 = (0);
while(true){
if((i__28586_28594 < count__28585_28593)){
var req_28595 = cljs.core._nth.call(null,chunk__28584_28592,i__28586_28594);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28595,prov);

var G__28596 = seq__28583_28591;
var G__28597 = chunk__28584_28592;
var G__28598 = count__28585_28593;
var G__28599 = (i__28586_28594 + (1));
seq__28583_28591 = G__28596;
chunk__28584_28592 = G__28597;
count__28585_28593 = G__28598;
i__28586_28594 = G__28599;
continue;
} else {
var temp__4657__auto___28600 = cljs.core.seq.call(null,seq__28583_28591);
if(temp__4657__auto___28600){
var seq__28583_28601__$1 = temp__4657__auto___28600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28583_28601__$1)){
var c__22485__auto___28602 = cljs.core.chunk_first.call(null,seq__28583_28601__$1);
var G__28603 = cljs.core.chunk_rest.call(null,seq__28583_28601__$1);
var G__28604 = c__22485__auto___28602;
var G__28605 = cljs.core.count.call(null,c__22485__auto___28602);
var G__28606 = (0);
seq__28583_28591 = G__28603;
chunk__28584_28592 = G__28604;
count__28585_28593 = G__28605;
i__28586_28594 = G__28606;
continue;
} else {
var req_28607 = cljs.core.first.call(null,seq__28583_28601__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28607,prov);

var G__28608 = cljs.core.next.call(null,seq__28583_28601__$1);
var G__28609 = null;
var G__28610 = (0);
var G__28611 = (0);
seq__28583_28591 = G__28608;
chunk__28584_28592 = G__28609;
count__28585_28593 = G__28610;
i__28586_28594 = G__28611;
continue;
}
} else {
}
}
break;
}

var G__28612 = seq__28579;
var G__28613 = chunk__28580;
var G__28614 = count__28581;
var G__28615 = (i__28582 + (1));
seq__28579 = G__28612;
chunk__28580 = G__28613;
count__28581 = G__28614;
i__28582 = G__28615;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28579);
if(temp__4657__auto__){
var seq__28579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28579__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__28579__$1);
var G__28616 = cljs.core.chunk_rest.call(null,seq__28579__$1);
var G__28617 = c__22485__auto__;
var G__28618 = cljs.core.count.call(null,c__22485__auto__);
var G__28619 = (0);
seq__28579 = G__28616;
chunk__28580 = G__28617;
count__28581 = G__28618;
i__28582 = G__28619;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28579__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28587_28620 = cljs.core.seq.call(null,requires);
var chunk__28588_28621 = null;
var count__28589_28622 = (0);
var i__28590_28623 = (0);
while(true){
if((i__28590_28623 < count__28589_28622)){
var req_28624 = cljs.core._nth.call(null,chunk__28588_28621,i__28590_28623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28624,prov);

var G__28625 = seq__28587_28620;
var G__28626 = chunk__28588_28621;
var G__28627 = count__28589_28622;
var G__28628 = (i__28590_28623 + (1));
seq__28587_28620 = G__28625;
chunk__28588_28621 = G__28626;
count__28589_28622 = G__28627;
i__28590_28623 = G__28628;
continue;
} else {
var temp__4657__auto___28629__$1 = cljs.core.seq.call(null,seq__28587_28620);
if(temp__4657__auto___28629__$1){
var seq__28587_28630__$1 = temp__4657__auto___28629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28587_28630__$1)){
var c__22485__auto___28631 = cljs.core.chunk_first.call(null,seq__28587_28630__$1);
var G__28632 = cljs.core.chunk_rest.call(null,seq__28587_28630__$1);
var G__28633 = c__22485__auto___28631;
var G__28634 = cljs.core.count.call(null,c__22485__auto___28631);
var G__28635 = (0);
seq__28587_28620 = G__28632;
chunk__28588_28621 = G__28633;
count__28589_28622 = G__28634;
i__28590_28623 = G__28635;
continue;
} else {
var req_28636 = cljs.core.first.call(null,seq__28587_28630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28636,prov);

var G__28637 = cljs.core.next.call(null,seq__28587_28630__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28587_28620 = G__28637;
chunk__28588_28621 = G__28638;
count__28589_28622 = G__28639;
i__28590_28623 = G__28640;
continue;
}
} else {
}
}
break;
}

var G__28641 = cljs.core.next.call(null,seq__28579__$1);
var G__28642 = null;
var G__28643 = (0);
var G__28644 = (0);
seq__28579 = G__28641;
chunk__28580 = G__28642;
count__28581 = G__28643;
i__28582 = G__28644;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28649_28653 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28650_28654 = null;
var count__28651_28655 = (0);
var i__28652_28656 = (0);
while(true){
if((i__28652_28656 < count__28651_28655)){
var ns_28657 = cljs.core._nth.call(null,chunk__28650_28654,i__28652_28656);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28657);

var G__28658 = seq__28649_28653;
var G__28659 = chunk__28650_28654;
var G__28660 = count__28651_28655;
var G__28661 = (i__28652_28656 + (1));
seq__28649_28653 = G__28658;
chunk__28650_28654 = G__28659;
count__28651_28655 = G__28660;
i__28652_28656 = G__28661;
continue;
} else {
var temp__4657__auto___28662 = cljs.core.seq.call(null,seq__28649_28653);
if(temp__4657__auto___28662){
var seq__28649_28663__$1 = temp__4657__auto___28662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28649_28663__$1)){
var c__22485__auto___28664 = cljs.core.chunk_first.call(null,seq__28649_28663__$1);
var G__28665 = cljs.core.chunk_rest.call(null,seq__28649_28663__$1);
var G__28666 = c__22485__auto___28664;
var G__28667 = cljs.core.count.call(null,c__22485__auto___28664);
var G__28668 = (0);
seq__28649_28653 = G__28665;
chunk__28650_28654 = G__28666;
count__28651_28655 = G__28667;
i__28652_28656 = G__28668;
continue;
} else {
var ns_28669 = cljs.core.first.call(null,seq__28649_28663__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28669);

var G__28670 = cljs.core.next.call(null,seq__28649_28663__$1);
var G__28671 = null;
var G__28672 = (0);
var G__28673 = (0);
seq__28649_28653 = G__28670;
chunk__28650_28654 = G__28671;
count__28651_28655 = G__28672;
i__28652_28656 = G__28673;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21674__auto__ = goog.require__;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28674__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28675__i = 0, G__28675__a = new Array(arguments.length -  0);
while (G__28675__i < G__28675__a.length) {G__28675__a[G__28675__i] = arguments[G__28675__i + 0]; ++G__28675__i;}
  args = new cljs.core.IndexedSeq(G__28675__a,0);
} 
return G__28674__delegate.call(this,args);};
G__28674.cljs$lang$maxFixedArity = 0;
G__28674.cljs$lang$applyTo = (function (arglist__28676){
var args = cljs.core.seq(arglist__28676);
return G__28674__delegate(args);
});
G__28674.cljs$core$IFn$_invoke$arity$variadic = G__28674__delegate;
return G__28674;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28678 = cljs.core._EQ_;
var expr__28679 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28678.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28679))){
var path_parts = ((function (pred__28678,expr__28679){
return (function (p1__28677_SHARP_){
return clojure.string.split.call(null,p1__28677_SHARP_,/[\/\\]/);
});})(pred__28678,expr__28679))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28678,expr__28679){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28681){if((e28681 instanceof Error)){
var e = e28681;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28681;

}
}})());
});
;})(path_parts,sep,root,pred__28678,expr__28679))
} else {
if(cljs.core.truth_(pred__28678.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28679))){
return ((function (pred__28678,expr__28679){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28678,expr__28679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28678,expr__28679))
);

return deferred.addErrback(((function (deferred,pred__28678,expr__28679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28678,expr__28679))
);
});
;})(pred__28678,expr__28679))
} else {
return ((function (pred__28678,expr__28679){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28678,expr__28679))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28682,callback){
var map__28685 = p__28682;
var map__28685__$1 = ((((!((map__28685 == null)))?((((map__28685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28685):map__28685);
var file_msg = map__28685__$1;
var request_url = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28685,map__28685__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28685,map__28685__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__){
return (function (state_28709){
var state_val_28710 = (state_28709[(1)]);
if((state_val_28710 === (7))){
var inst_28705 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
var statearr_28711_28731 = state_28709__$1;
(statearr_28711_28731[(2)] = inst_28705);

(statearr_28711_28731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (1))){
var state_28709__$1 = state_28709;
var statearr_28712_28732 = state_28709__$1;
(statearr_28712_28732[(2)] = null);

(statearr_28712_28732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (4))){
var inst_28689 = (state_28709[(7)]);
var inst_28689__$1 = (state_28709[(2)]);
var state_28709__$1 = (function (){var statearr_28713 = state_28709;
(statearr_28713[(7)] = inst_28689__$1);

return statearr_28713;
})();
if(cljs.core.truth_(inst_28689__$1)){
var statearr_28714_28733 = state_28709__$1;
(statearr_28714_28733[(1)] = (5));

} else {
var statearr_28715_28734 = state_28709__$1;
(statearr_28715_28734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (6))){
var state_28709__$1 = state_28709;
var statearr_28716_28735 = state_28709__$1;
(statearr_28716_28735[(2)] = null);

(statearr_28716_28735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (3))){
var inst_28707 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28709__$1,inst_28707);
} else {
if((state_val_28710 === (2))){
var state_28709__$1 = state_28709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28709__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28710 === (11))){
var inst_28701 = (state_28709[(2)]);
var state_28709__$1 = (function (){var statearr_28717 = state_28709;
(statearr_28717[(8)] = inst_28701);

return statearr_28717;
})();
var statearr_28718_28736 = state_28709__$1;
(statearr_28718_28736[(2)] = null);

(statearr_28718_28736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (9))){
var inst_28695 = (state_28709[(9)]);
var inst_28693 = (state_28709[(10)]);
var inst_28697 = inst_28695.call(null,inst_28693);
var state_28709__$1 = state_28709;
var statearr_28719_28737 = state_28709__$1;
(statearr_28719_28737[(2)] = inst_28697);

(statearr_28719_28737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (5))){
var inst_28689 = (state_28709[(7)]);
var inst_28691 = figwheel.client.file_reloading.blocking_load.call(null,inst_28689);
var state_28709__$1 = state_28709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28709__$1,(8),inst_28691);
} else {
if((state_val_28710 === (10))){
var inst_28693 = (state_28709[(10)]);
var inst_28699 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28693);
var state_28709__$1 = state_28709;
var statearr_28720_28738 = state_28709__$1;
(statearr_28720_28738[(2)] = inst_28699);

(statearr_28720_28738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (8))){
var inst_28695 = (state_28709[(9)]);
var inst_28689 = (state_28709[(7)]);
var inst_28693 = (state_28709[(2)]);
var inst_28694 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28695__$1 = cljs.core.get.call(null,inst_28694,inst_28689);
var state_28709__$1 = (function (){var statearr_28721 = state_28709;
(statearr_28721[(9)] = inst_28695__$1);

(statearr_28721[(10)] = inst_28693);

return statearr_28721;
})();
if(cljs.core.truth_(inst_28695__$1)){
var statearr_28722_28739 = state_28709__$1;
(statearr_28722_28739[(1)] = (9));

} else {
var statearr_28723_28740 = state_28709__$1;
(statearr_28723_28740[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25609__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25498__auto__ = null;
var figwheel$client$file_reloading$state_machine__25498__auto____0 = (function (){
var statearr_28727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28727[(0)] = figwheel$client$file_reloading$state_machine__25498__auto__);

(statearr_28727[(1)] = (1));

return statearr_28727;
});
var figwheel$client$file_reloading$state_machine__25498__auto____1 = (function (state_28709){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28728){if((e28728 instanceof Object)){
var ex__25501__auto__ = e28728;
var statearr_28729_28741 = state_28709;
(statearr_28729_28741[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28742 = state_28709;
state_28709 = G__28742;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25498__auto__ = function(state_28709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25498__auto____1.call(this,state_28709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25498__auto____0;
figwheel$client$file_reloading$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25498__auto____1;
return figwheel$client$file_reloading$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__))
})();
var state__25611__auto__ = (function (){var statearr_28730 = f__25610__auto__.call(null);
(statearr_28730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_28730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__))
);

return c__25609__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28743,callback){
var map__28746 = p__28743;
var map__28746__$1 = ((((!((map__28746 == null)))?((((map__28746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);
var file_msg = map__28746__$1;
var namespace = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28746,map__28746__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28746,map__28746__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28748){
var map__28751 = p__28748;
var map__28751__$1 = ((((!((map__28751 == null)))?((((map__28751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);
var file_msg = map__28751__$1;
var namespace = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21662__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21662__auto__){
var or__21674__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21662__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28753,callback){
var map__28756 = p__28753;
var map__28756__$1 = ((((!((map__28756 == null)))?((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var file_msg = map__28756__$1;
var request_url = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25609__auto___28860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___28860,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___28860,out){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (1))){
var inst_28816 = cljs.core.seq.call(null,files);
var inst_28817 = cljs.core.first.call(null,inst_28816);
var inst_28818 = cljs.core.next.call(null,inst_28816);
var inst_28819 = files;
var state_28842__$1 = (function (){var statearr_28844 = state_28842;
(statearr_28844[(7)] = inst_28818);

(statearr_28844[(8)] = inst_28817);

(statearr_28844[(9)] = inst_28819);

return statearr_28844;
})();
var statearr_28845_28861 = state_28842__$1;
(statearr_28845_28861[(2)] = null);

(statearr_28845_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (2))){
var inst_28825 = (state_28842[(10)]);
var inst_28819 = (state_28842[(9)]);
var inst_28824 = cljs.core.seq.call(null,inst_28819);
var inst_28825__$1 = cljs.core.first.call(null,inst_28824);
var inst_28826 = cljs.core.next.call(null,inst_28824);
var inst_28827 = (inst_28825__$1 == null);
var inst_28828 = cljs.core.not.call(null,inst_28827);
var state_28842__$1 = (function (){var statearr_28846 = state_28842;
(statearr_28846[(11)] = inst_28826);

(statearr_28846[(10)] = inst_28825__$1);

return statearr_28846;
})();
if(inst_28828){
var statearr_28847_28862 = state_28842__$1;
(statearr_28847_28862[(1)] = (4));

} else {
var statearr_28848_28863 = state_28842__$1;
(statearr_28848_28863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (4))){
var inst_28825 = (state_28842[(10)]);
var inst_28830 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28825);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(7),inst_28830);
} else {
if((state_val_28843 === (5))){
var inst_28836 = cljs.core.async.close_BANG_.call(null,out);
var state_28842__$1 = state_28842;
var statearr_28849_28864 = state_28842__$1;
(statearr_28849_28864[(2)] = inst_28836);

(statearr_28849_28864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28850_28865 = state_28842__$1;
(statearr_28850_28865[(2)] = inst_28838);

(statearr_28850_28865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (7))){
var inst_28826 = (state_28842[(11)]);
var inst_28832 = (state_28842[(2)]);
var inst_28833 = cljs.core.async.put_BANG_.call(null,out,inst_28832);
var inst_28819 = inst_28826;
var state_28842__$1 = (function (){var statearr_28851 = state_28842;
(statearr_28851[(12)] = inst_28833);

(statearr_28851[(9)] = inst_28819);

return statearr_28851;
})();
var statearr_28852_28866 = state_28842__$1;
(statearr_28852_28866[(2)] = null);

(statearr_28852_28866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25609__auto___28860,out))
;
return ((function (switch__25497__auto__,c__25609__auto___28860,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____0 = (function (){
var statearr_28856 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28856[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__);

(statearr_28856[(1)] = (1));

return statearr_28856;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____1 = (function (state_28842){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28857){if((e28857 instanceof Object)){
var ex__25501__auto__ = e28857;
var statearr_28858_28867 = state_28842;
(statearr_28858_28867[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28868 = state_28842;
state_28842 = G__28868;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___28860,out))
})();
var state__25611__auto__ = (function (){var statearr_28859 = f__25610__auto__.call(null);
(statearr_28859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___28860);

return statearr_28859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___28860,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28869,opts){
var map__28873 = p__28869;
var map__28873__$1 = ((((!((map__28873 == null)))?((((map__28873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28873):map__28873);
var eval_body__$1 = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21662__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21662__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21662__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28875){var e = e28875;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28876_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28876_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28885){
var vec__28886 = p__28885;
var k = cljs.core.nth.call(null,vec__28886,(0),null);
var v = cljs.core.nth.call(null,vec__28886,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28889){
var vec__28890 = p__28889;
var k = cljs.core.nth.call(null,vec__28890,(0),null);
var v = cljs.core.nth.call(null,vec__28890,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28896,p__28897){
var map__29144 = p__28896;
var map__29144__$1 = ((((!((map__29144 == null)))?((((map__29144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29144):map__29144);
var opts = map__29144__$1;
var before_jsload = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29145 = p__28897;
var map__29145__$1 = ((((!((map__29145 == null)))?((((map__29145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29145):map__29145);
var msg = map__29145__$1;
var files = cljs.core.get.call(null,map__29145__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29145__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29145__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (7))){
var inst_29161 = (state_29298[(7)]);
var inst_29162 = (state_29298[(8)]);
var inst_29159 = (state_29298[(9)]);
var inst_29160 = (state_29298[(10)]);
var inst_29167 = cljs.core._nth.call(null,inst_29160,inst_29162);
var inst_29168 = figwheel.client.file_reloading.eval_body.call(null,inst_29167,opts);
var inst_29169 = (inst_29162 + (1));
var tmp29300 = inst_29161;
var tmp29301 = inst_29159;
var tmp29302 = inst_29160;
var inst_29159__$1 = tmp29301;
var inst_29160__$1 = tmp29302;
var inst_29161__$1 = tmp29300;
var inst_29162__$1 = inst_29169;
var state_29298__$1 = (function (){var statearr_29303 = state_29298;
(statearr_29303[(7)] = inst_29161__$1);

(statearr_29303[(8)] = inst_29162__$1);

(statearr_29303[(9)] = inst_29159__$1);

(statearr_29303[(11)] = inst_29168);

(statearr_29303[(10)] = inst_29160__$1);

return statearr_29303;
})();
var statearr_29304_29390 = state_29298__$1;
(statearr_29304_29390[(2)] = null);

(statearr_29304_29390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (20))){
var inst_29202 = (state_29298[(12)]);
var inst_29210 = figwheel.client.file_reloading.sort_files.call(null,inst_29202);
var state_29298__$1 = state_29298;
var statearr_29305_29391 = state_29298__$1;
(statearr_29305_29391[(2)] = inst_29210);

(statearr_29305_29391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (27))){
var state_29298__$1 = state_29298;
var statearr_29306_29392 = state_29298__$1;
(statearr_29306_29392[(2)] = null);

(statearr_29306_29392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (1))){
var inst_29151 = (state_29298[(13)]);
var inst_29148 = before_jsload.call(null,files);
var inst_29149 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29150 = (function (){return ((function (inst_29151,inst_29148,inst_29149,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28893_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28893_SHARP_);
});
;})(inst_29151,inst_29148,inst_29149,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29151__$1 = cljs.core.filter.call(null,inst_29150,files);
var inst_29152 = cljs.core.not_empty.call(null,inst_29151__$1);
var state_29298__$1 = (function (){var statearr_29307 = state_29298;
(statearr_29307[(14)] = inst_29148);

(statearr_29307[(13)] = inst_29151__$1);

(statearr_29307[(15)] = inst_29149);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29152)){
var statearr_29308_29393 = state_29298__$1;
(statearr_29308_29393[(1)] = (2));

} else {
var statearr_29309_29394 = state_29298__$1;
(statearr_29309_29394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (24))){
var state_29298__$1 = state_29298;
var statearr_29310_29395 = state_29298__$1;
(statearr_29310_29395[(2)] = null);

(statearr_29310_29395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (39))){
var inst_29252 = (state_29298[(16)]);
var state_29298__$1 = state_29298;
var statearr_29311_29396 = state_29298__$1;
(statearr_29311_29396[(2)] = inst_29252);

(statearr_29311_29396[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (46))){
var inst_29293 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29312_29397 = state_29298__$1;
(statearr_29312_29397[(2)] = inst_29293);

(statearr_29312_29397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (4))){
var inst_29196 = (state_29298[(2)]);
var inst_29197 = cljs.core.List.EMPTY;
var inst_29198 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29197);
var inst_29199 = (function (){return ((function (inst_29196,inst_29197,inst_29198,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28894_SHARP_){
var and__21662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28894_SHARP_);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28894_SHARP_));
} else {
return and__21662__auto__;
}
});
;})(inst_29196,inst_29197,inst_29198,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29200 = cljs.core.filter.call(null,inst_29199,files);
var inst_29201 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29202 = cljs.core.concat.call(null,inst_29200,inst_29201);
var state_29298__$1 = (function (){var statearr_29313 = state_29298;
(statearr_29313[(12)] = inst_29202);

(statearr_29313[(17)] = inst_29196);

(statearr_29313[(18)] = inst_29198);

return statearr_29313;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29314_29398 = state_29298__$1;
(statearr_29314_29398[(1)] = (16));

} else {
var statearr_29315_29399 = state_29298__$1;
(statearr_29315_29399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (15))){
var inst_29186 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29316_29400 = state_29298__$1;
(statearr_29316_29400[(2)] = inst_29186);

(statearr_29316_29400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (21))){
var inst_29212 = (state_29298[(19)]);
var inst_29212__$1 = (state_29298[(2)]);
var inst_29213 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29212__$1);
var state_29298__$1 = (function (){var statearr_29317 = state_29298;
(statearr_29317[(19)] = inst_29212__$1);

return statearr_29317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29298__$1,(22),inst_29213);
} else {
if((state_val_29299 === (31))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (32))){
var inst_29252 = (state_29298[(16)]);
var inst_29257 = inst_29252.cljs$lang$protocol_mask$partition0$;
var inst_29258 = (inst_29257 & (64));
var inst_29259 = inst_29252.cljs$core$ISeq$;
var inst_29260 = (inst_29258) || (inst_29259);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29260)){
var statearr_29318_29401 = state_29298__$1;
(statearr_29318_29401[(1)] = (35));

} else {
var statearr_29319_29402 = state_29298__$1;
(statearr_29319_29402[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (40))){
var inst_29273 = (state_29298[(20)]);
var inst_29272 = (state_29298[(2)]);
var inst_29273__$1 = cljs.core.get.call(null,inst_29272,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29274 = cljs.core.get.call(null,inst_29272,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29275 = cljs.core.not_empty.call(null,inst_29273__$1);
var state_29298__$1 = (function (){var statearr_29320 = state_29298;
(statearr_29320[(21)] = inst_29274);

(statearr_29320[(20)] = inst_29273__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29275)){
var statearr_29321_29403 = state_29298__$1;
(statearr_29321_29403[(1)] = (41));

} else {
var statearr_29322_29404 = state_29298__$1;
(statearr_29322_29404[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (33))){
var state_29298__$1 = state_29298;
var statearr_29323_29405 = state_29298__$1;
(statearr_29323_29405[(2)] = false);

(statearr_29323_29405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (13))){
var inst_29172 = (state_29298[(22)]);
var inst_29176 = cljs.core.chunk_first.call(null,inst_29172);
var inst_29177 = cljs.core.chunk_rest.call(null,inst_29172);
var inst_29178 = cljs.core.count.call(null,inst_29176);
var inst_29159 = inst_29177;
var inst_29160 = inst_29176;
var inst_29161 = inst_29178;
var inst_29162 = (0);
var state_29298__$1 = (function (){var statearr_29324 = state_29298;
(statearr_29324[(7)] = inst_29161);

(statearr_29324[(8)] = inst_29162);

(statearr_29324[(9)] = inst_29159);

(statearr_29324[(10)] = inst_29160);

return statearr_29324;
})();
var statearr_29325_29406 = state_29298__$1;
(statearr_29325_29406[(2)] = null);

(statearr_29325_29406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (22))){
var inst_29220 = (state_29298[(23)]);
var inst_29216 = (state_29298[(24)]);
var inst_29212 = (state_29298[(19)]);
var inst_29215 = (state_29298[(25)]);
var inst_29215__$1 = (state_29298[(2)]);
var inst_29216__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29215__$1);
var inst_29217 = (function (){var all_files = inst_29212;
var res_SINGLEQUOTE_ = inst_29215__$1;
var res = inst_29216__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29220,inst_29216,inst_29212,inst_29215,inst_29215__$1,inst_29216__$1,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28895_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28895_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29220,inst_29216,inst_29212,inst_29215,inst_29215__$1,inst_29216__$1,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29218 = cljs.core.filter.call(null,inst_29217,inst_29215__$1);
var inst_29219 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29220__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29219);
var inst_29221 = cljs.core.not_empty.call(null,inst_29220__$1);
var state_29298__$1 = (function (){var statearr_29326 = state_29298;
(statearr_29326[(26)] = inst_29218);

(statearr_29326[(23)] = inst_29220__$1);

(statearr_29326[(24)] = inst_29216__$1);

(statearr_29326[(25)] = inst_29215__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29221)){
var statearr_29327_29407 = state_29298__$1;
(statearr_29327_29407[(1)] = (23));

} else {
var statearr_29328_29408 = state_29298__$1;
(statearr_29328_29408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (36))){
var state_29298__$1 = state_29298;
var statearr_29329_29409 = state_29298__$1;
(statearr_29329_29409[(2)] = false);

(statearr_29329_29409[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (41))){
var inst_29273 = (state_29298[(20)]);
var inst_29277 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29278 = cljs.core.map.call(null,inst_29277,inst_29273);
var inst_29279 = cljs.core.pr_str.call(null,inst_29278);
var inst_29280 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29279)].join('');
var inst_29281 = figwheel.client.utils.log.call(null,inst_29280);
var state_29298__$1 = state_29298;
var statearr_29330_29410 = state_29298__$1;
(statearr_29330_29410[(2)] = inst_29281);

(statearr_29330_29410[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (43))){
var inst_29274 = (state_29298[(21)]);
var inst_29284 = (state_29298[(2)]);
var inst_29285 = cljs.core.not_empty.call(null,inst_29274);
var state_29298__$1 = (function (){var statearr_29331 = state_29298;
(statearr_29331[(27)] = inst_29284);

return statearr_29331;
})();
if(cljs.core.truth_(inst_29285)){
var statearr_29332_29411 = state_29298__$1;
(statearr_29332_29411[(1)] = (44));

} else {
var statearr_29333_29412 = state_29298__$1;
(statearr_29333_29412[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (29))){
var inst_29218 = (state_29298[(26)]);
var inst_29220 = (state_29298[(23)]);
var inst_29216 = (state_29298[(24)]);
var inst_29212 = (state_29298[(19)]);
var inst_29252 = (state_29298[(16)]);
var inst_29215 = (state_29298[(25)]);
var inst_29248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29251 = (function (){var all_files = inst_29212;
var res_SINGLEQUOTE_ = inst_29215;
var res = inst_29216;
var files_not_loaded = inst_29218;
var dependencies_that_loaded = inst_29220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29252,inst_29215,inst_29248,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29250){
var map__29334 = p__29250;
var map__29334__$1 = ((((!((map__29334 == null)))?((((map__29334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29334):map__29334);
var namespace = cljs.core.get.call(null,map__29334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29252,inst_29215,inst_29248,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29252__$1 = cljs.core.group_by.call(null,inst_29251,inst_29218);
var inst_29254 = (inst_29252__$1 == null);
var inst_29255 = cljs.core.not.call(null,inst_29254);
var state_29298__$1 = (function (){var statearr_29336 = state_29298;
(statearr_29336[(28)] = inst_29248);

(statearr_29336[(16)] = inst_29252__$1);

return statearr_29336;
})();
if(inst_29255){
var statearr_29337_29413 = state_29298__$1;
(statearr_29337_29413[(1)] = (32));

} else {
var statearr_29338_29414 = state_29298__$1;
(statearr_29338_29414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (44))){
var inst_29274 = (state_29298[(21)]);
var inst_29287 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29274);
var inst_29288 = cljs.core.pr_str.call(null,inst_29287);
var inst_29289 = [cljs.core.str("not required: "),cljs.core.str(inst_29288)].join('');
var inst_29290 = figwheel.client.utils.log.call(null,inst_29289);
var state_29298__$1 = state_29298;
var statearr_29339_29415 = state_29298__$1;
(statearr_29339_29415[(2)] = inst_29290);

(statearr_29339_29415[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (6))){
var inst_29193 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29340_29416 = state_29298__$1;
(statearr_29340_29416[(2)] = inst_29193);

(statearr_29340_29416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (28))){
var inst_29218 = (state_29298[(26)]);
var inst_29245 = (state_29298[(2)]);
var inst_29246 = cljs.core.not_empty.call(null,inst_29218);
var state_29298__$1 = (function (){var statearr_29341 = state_29298;
(statearr_29341[(29)] = inst_29245);

return statearr_29341;
})();
if(cljs.core.truth_(inst_29246)){
var statearr_29342_29417 = state_29298__$1;
(statearr_29342_29417[(1)] = (29));

} else {
var statearr_29343_29418 = state_29298__$1;
(statearr_29343_29418[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (25))){
var inst_29216 = (state_29298[(24)]);
var inst_29232 = (state_29298[(2)]);
var inst_29233 = cljs.core.not_empty.call(null,inst_29216);
var state_29298__$1 = (function (){var statearr_29344 = state_29298;
(statearr_29344[(30)] = inst_29232);

return statearr_29344;
})();
if(cljs.core.truth_(inst_29233)){
var statearr_29345_29419 = state_29298__$1;
(statearr_29345_29419[(1)] = (26));

} else {
var statearr_29346_29420 = state_29298__$1;
(statearr_29346_29420[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (34))){
var inst_29267 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29267)){
var statearr_29347_29421 = state_29298__$1;
(statearr_29347_29421[(1)] = (38));

} else {
var statearr_29348_29422 = state_29298__$1;
(statearr_29348_29422[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (17))){
var state_29298__$1 = state_29298;
var statearr_29349_29423 = state_29298__$1;
(statearr_29349_29423[(2)] = recompile_dependents);

(statearr_29349_29423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (3))){
var state_29298__$1 = state_29298;
var statearr_29350_29424 = state_29298__$1;
(statearr_29350_29424[(2)] = null);

(statearr_29350_29424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (12))){
var inst_29189 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29351_29425 = state_29298__$1;
(statearr_29351_29425[(2)] = inst_29189);

(statearr_29351_29425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (2))){
var inst_29151 = (state_29298[(13)]);
var inst_29158 = cljs.core.seq.call(null,inst_29151);
var inst_29159 = inst_29158;
var inst_29160 = null;
var inst_29161 = (0);
var inst_29162 = (0);
var state_29298__$1 = (function (){var statearr_29352 = state_29298;
(statearr_29352[(7)] = inst_29161);

(statearr_29352[(8)] = inst_29162);

(statearr_29352[(9)] = inst_29159);

(statearr_29352[(10)] = inst_29160);

return statearr_29352;
})();
var statearr_29353_29426 = state_29298__$1;
(statearr_29353_29426[(2)] = null);

(statearr_29353_29426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (23))){
var inst_29218 = (state_29298[(26)]);
var inst_29220 = (state_29298[(23)]);
var inst_29216 = (state_29298[(24)]);
var inst_29212 = (state_29298[(19)]);
var inst_29215 = (state_29298[(25)]);
var inst_29223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29225 = (function (){var all_files = inst_29212;
var res_SINGLEQUOTE_ = inst_29215;
var res = inst_29216;
var files_not_loaded = inst_29218;
var dependencies_that_loaded = inst_29220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29223,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29224){
var map__29354 = p__29224;
var map__29354__$1 = ((((!((map__29354 == null)))?((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var request_url = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29223,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29226 = cljs.core.reverse.call(null,inst_29220);
var inst_29227 = cljs.core.map.call(null,inst_29225,inst_29226);
var inst_29228 = cljs.core.pr_str.call(null,inst_29227);
var inst_29229 = figwheel.client.utils.log.call(null,inst_29228);
var state_29298__$1 = (function (){var statearr_29356 = state_29298;
(statearr_29356[(31)] = inst_29223);

return statearr_29356;
})();
var statearr_29357_29427 = state_29298__$1;
(statearr_29357_29427[(2)] = inst_29229);

(statearr_29357_29427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (35))){
var state_29298__$1 = state_29298;
var statearr_29358_29428 = state_29298__$1;
(statearr_29358_29428[(2)] = true);

(statearr_29358_29428[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (19))){
var inst_29202 = (state_29298[(12)]);
var inst_29208 = figwheel.client.file_reloading.expand_files.call(null,inst_29202);
var state_29298__$1 = state_29298;
var statearr_29359_29429 = state_29298__$1;
(statearr_29359_29429[(2)] = inst_29208);

(statearr_29359_29429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (11))){
var state_29298__$1 = state_29298;
var statearr_29360_29430 = state_29298__$1;
(statearr_29360_29430[(2)] = null);

(statearr_29360_29430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (9))){
var inst_29191 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29361_29431 = state_29298__$1;
(statearr_29361_29431[(2)] = inst_29191);

(statearr_29361_29431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (5))){
var inst_29161 = (state_29298[(7)]);
var inst_29162 = (state_29298[(8)]);
var inst_29164 = (inst_29162 < inst_29161);
var inst_29165 = inst_29164;
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29165)){
var statearr_29362_29432 = state_29298__$1;
(statearr_29362_29432[(1)] = (7));

} else {
var statearr_29363_29433 = state_29298__$1;
(statearr_29363_29433[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (14))){
var inst_29172 = (state_29298[(22)]);
var inst_29181 = cljs.core.first.call(null,inst_29172);
var inst_29182 = figwheel.client.file_reloading.eval_body.call(null,inst_29181,opts);
var inst_29183 = cljs.core.next.call(null,inst_29172);
var inst_29159 = inst_29183;
var inst_29160 = null;
var inst_29161 = (0);
var inst_29162 = (0);
var state_29298__$1 = (function (){var statearr_29364 = state_29298;
(statearr_29364[(7)] = inst_29161);

(statearr_29364[(8)] = inst_29162);

(statearr_29364[(32)] = inst_29182);

(statearr_29364[(9)] = inst_29159);

(statearr_29364[(10)] = inst_29160);

return statearr_29364;
})();
var statearr_29365_29434 = state_29298__$1;
(statearr_29365_29434[(2)] = null);

(statearr_29365_29434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (45))){
var state_29298__$1 = state_29298;
var statearr_29366_29435 = state_29298__$1;
(statearr_29366_29435[(2)] = null);

(statearr_29366_29435[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (26))){
var inst_29218 = (state_29298[(26)]);
var inst_29220 = (state_29298[(23)]);
var inst_29216 = (state_29298[(24)]);
var inst_29212 = (state_29298[(19)]);
var inst_29215 = (state_29298[(25)]);
var inst_29235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29237 = (function (){var all_files = inst_29212;
var res_SINGLEQUOTE_ = inst_29215;
var res = inst_29216;
var files_not_loaded = inst_29218;
var dependencies_that_loaded = inst_29220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29235,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29236){
var map__29367 = p__29236;
var map__29367__$1 = ((((!((map__29367 == null)))?((((map__29367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);
var namespace = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29235,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29238 = cljs.core.map.call(null,inst_29237,inst_29216);
var inst_29239 = cljs.core.pr_str.call(null,inst_29238);
var inst_29240 = figwheel.client.utils.log.call(null,inst_29239);
var inst_29241 = (function (){var all_files = inst_29212;
var res_SINGLEQUOTE_ = inst_29215;
var res = inst_29216;
var files_not_loaded = inst_29218;
var dependencies_that_loaded = inst_29220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29235,inst_29237,inst_29238,inst_29239,inst_29240,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29218,inst_29220,inst_29216,inst_29212,inst_29215,inst_29235,inst_29237,inst_29238,inst_29239,inst_29240,state_val_29299,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29242 = setTimeout(inst_29241,(10));
var state_29298__$1 = (function (){var statearr_29369 = state_29298;
(statearr_29369[(33)] = inst_29240);

(statearr_29369[(34)] = inst_29235);

return statearr_29369;
})();
var statearr_29370_29436 = state_29298__$1;
(statearr_29370_29436[(2)] = inst_29242);

(statearr_29370_29436[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (16))){
var state_29298__$1 = state_29298;
var statearr_29371_29437 = state_29298__$1;
(statearr_29371_29437[(2)] = reload_dependents);

(statearr_29371_29437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (38))){
var inst_29252 = (state_29298[(16)]);
var inst_29269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29252);
var state_29298__$1 = state_29298;
var statearr_29372_29438 = state_29298__$1;
(statearr_29372_29438[(2)] = inst_29269);

(statearr_29372_29438[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (30))){
var state_29298__$1 = state_29298;
var statearr_29373_29439 = state_29298__$1;
(statearr_29373_29439[(2)] = null);

(statearr_29373_29439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (10))){
var inst_29172 = (state_29298[(22)]);
var inst_29174 = cljs.core.chunked_seq_QMARK_.call(null,inst_29172);
var state_29298__$1 = state_29298;
if(inst_29174){
var statearr_29374_29440 = state_29298__$1;
(statearr_29374_29440[(1)] = (13));

} else {
var statearr_29375_29441 = state_29298__$1;
(statearr_29375_29441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (18))){
var inst_29206 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29206)){
var statearr_29376_29442 = state_29298__$1;
(statearr_29376_29442[(1)] = (19));

} else {
var statearr_29377_29443 = state_29298__$1;
(statearr_29377_29443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (42))){
var state_29298__$1 = state_29298;
var statearr_29378_29444 = state_29298__$1;
(statearr_29378_29444[(2)] = null);

(statearr_29378_29444[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (37))){
var inst_29264 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29379_29445 = state_29298__$1;
(statearr_29379_29445[(2)] = inst_29264);

(statearr_29379_29445[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (8))){
var inst_29172 = (state_29298[(22)]);
var inst_29159 = (state_29298[(9)]);
var inst_29172__$1 = cljs.core.seq.call(null,inst_29159);
var state_29298__$1 = (function (){var statearr_29380 = state_29298;
(statearr_29380[(22)] = inst_29172__$1);

return statearr_29380;
})();
if(inst_29172__$1){
var statearr_29381_29446 = state_29298__$1;
(statearr_29381_29446[(1)] = (10));

} else {
var statearr_29382_29447 = state_29298__$1;
(statearr_29382_29447[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25497__auto__,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____0 = (function (){
var statearr_29386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29386[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__);

(statearr_29386[(1)] = (1));

return statearr_29386;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____1 = (function (state_29298){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_29298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e29387){if((e29387 instanceof Object)){
var ex__25501__auto__ = e29387;
var statearr_29388_29448 = state_29298;
(statearr_29388_29448[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29298;
state_29298 = G__29449;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25611__auto__ = (function (){var statearr_29389 = f__25610__auto__.call(null);
(statearr_29389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__,map__29144,map__29144__$1,opts,before_jsload,on_jsload,reload_dependents,map__29145,map__29145__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25609__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29452,link){
var map__29455 = p__29452;
var map__29455__$1 = ((((!((map__29455 == null)))?((((map__29455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29455):map__29455);
var file = cljs.core.get.call(null,map__29455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29455,map__29455__$1,file){
return (function (p1__29450_SHARP_,p2__29451_SHARP_){
if(cljs.core._EQ_.call(null,p1__29450_SHARP_,p2__29451_SHARP_)){
return p1__29450_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29455,map__29455__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29461){
var map__29462 = p__29461;
var map__29462__$1 = ((((!((map__29462 == null)))?((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var match_length = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29457_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29457_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29464 = [];
var len__22749__auto___29467 = arguments.length;
var i__22750__auto___29468 = (0);
while(true){
if((i__22750__auto___29468 < len__22749__auto___29467)){
args29464.push((arguments[i__22750__auto___29468]));

var G__29469 = (i__22750__auto___29468 + (1));
i__22750__auto___29468 = G__29469;
continue;
} else {
}
break;
}

var G__29466 = args29464.length;
switch (G__29466) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29464.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29471_SHARP_,p2__29472_SHARP_){
return cljs.core.assoc.call(null,p1__29471_SHARP_,cljs.core.get.call(null,p2__29472_SHARP_,key),p2__29472_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29473){
var map__29476 = p__29473;
var map__29476__$1 = ((((!((map__29476 == null)))?((((map__29476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29476):map__29476);
var f_data = map__29476__$1;
var file = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29478,files_msg){
var map__29485 = p__29478;
var map__29485__$1 = ((((!((map__29485 == null)))?((((map__29485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29485):map__29485);
var opts = map__29485__$1;
var on_cssload = cljs.core.get.call(null,map__29485__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29487_29491 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29488_29492 = null;
var count__29489_29493 = (0);
var i__29490_29494 = (0);
while(true){
if((i__29490_29494 < count__29489_29493)){
var f_29495 = cljs.core._nth.call(null,chunk__29488_29492,i__29490_29494);
figwheel.client.file_reloading.reload_css_file.call(null,f_29495);

var G__29496 = seq__29487_29491;
var G__29497 = chunk__29488_29492;
var G__29498 = count__29489_29493;
var G__29499 = (i__29490_29494 + (1));
seq__29487_29491 = G__29496;
chunk__29488_29492 = G__29497;
count__29489_29493 = G__29498;
i__29490_29494 = G__29499;
continue;
} else {
var temp__4657__auto___29500 = cljs.core.seq.call(null,seq__29487_29491);
if(temp__4657__auto___29500){
var seq__29487_29501__$1 = temp__4657__auto___29500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29487_29501__$1)){
var c__22485__auto___29502 = cljs.core.chunk_first.call(null,seq__29487_29501__$1);
var G__29503 = cljs.core.chunk_rest.call(null,seq__29487_29501__$1);
var G__29504 = c__22485__auto___29502;
var G__29505 = cljs.core.count.call(null,c__22485__auto___29502);
var G__29506 = (0);
seq__29487_29491 = G__29503;
chunk__29488_29492 = G__29504;
count__29489_29493 = G__29505;
i__29490_29494 = G__29506;
continue;
} else {
var f_29507 = cljs.core.first.call(null,seq__29487_29501__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29507);

var G__29508 = cljs.core.next.call(null,seq__29487_29501__$1);
var G__29509 = null;
var G__29510 = (0);
var G__29511 = (0);
seq__29487_29491 = G__29508;
chunk__29488_29492 = G__29509;
count__29489_29493 = G__29510;
i__29490_29494 = G__29511;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29485,map__29485__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29485,map__29485__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map