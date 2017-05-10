// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
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
var or__22345__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22345__auto__){
return or__22345__auto__;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22345__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28101_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28101_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
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
var seq__28106 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28107 = null;
var count__28108 = (0);
var i__28109 = (0);
while(true){
if((i__28109 < count__28108)){
var n = cljs.core._nth.call(null,chunk__28107,i__28109);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28110 = seq__28106;
var G__28111 = chunk__28107;
var G__28112 = count__28108;
var G__28113 = (i__28109 + (1));
seq__28106 = G__28110;
chunk__28107 = G__28111;
count__28108 = G__28112;
i__28109 = G__28113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28106);
if(temp__4657__auto__){
var seq__28106__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28106__$1)){
var c__23164__auto__ = cljs.core.chunk_first.call(null,seq__28106__$1);
var G__28114 = cljs.core.chunk_rest.call(null,seq__28106__$1);
var G__28115 = c__23164__auto__;
var G__28116 = cljs.core.count.call(null,c__23164__auto__);
var G__28117 = (0);
seq__28106 = G__28114;
chunk__28107 = G__28115;
count__28108 = G__28116;
i__28109 = G__28117;
continue;
} else {
var n = cljs.core.first.call(null,seq__28106__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28118 = cljs.core.next.call(null,seq__28106__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__28106 = G__28118;
chunk__28107 = G__28119;
count__28108 = G__28120;
i__28109 = G__28121;
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

var seq__28172_28183 = cljs.core.seq.call(null,deps);
var chunk__28173_28184 = null;
var count__28174_28185 = (0);
var i__28175_28186 = (0);
while(true){
if((i__28175_28186 < count__28174_28185)){
var dep_28187 = cljs.core._nth.call(null,chunk__28173_28184,i__28175_28186);
topo_sort_helper_STAR_.call(null,dep_28187,(depth + (1)),state);

var G__28188 = seq__28172_28183;
var G__28189 = chunk__28173_28184;
var G__28190 = count__28174_28185;
var G__28191 = (i__28175_28186 + (1));
seq__28172_28183 = G__28188;
chunk__28173_28184 = G__28189;
count__28174_28185 = G__28190;
i__28175_28186 = G__28191;
continue;
} else {
var temp__4657__auto___28192 = cljs.core.seq.call(null,seq__28172_28183);
if(temp__4657__auto___28192){
var seq__28172_28193__$1 = temp__4657__auto___28192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28172_28193__$1)){
var c__23164__auto___28194 = cljs.core.chunk_first.call(null,seq__28172_28193__$1);
var G__28195 = cljs.core.chunk_rest.call(null,seq__28172_28193__$1);
var G__28196 = c__23164__auto___28194;
var G__28197 = cljs.core.count.call(null,c__23164__auto___28194);
var G__28198 = (0);
seq__28172_28183 = G__28195;
chunk__28173_28184 = G__28196;
count__28174_28185 = G__28197;
i__28175_28186 = G__28198;
continue;
} else {
var dep_28199 = cljs.core.first.call(null,seq__28172_28193__$1);
topo_sort_helper_STAR_.call(null,dep_28199,(depth + (1)),state);

var G__28200 = cljs.core.next.call(null,seq__28172_28193__$1);
var G__28201 = null;
var G__28202 = (0);
var G__28203 = (0);
seq__28172_28183 = G__28200;
chunk__28173_28184 = G__28201;
count__28174_28185 = G__28202;
i__28175_28186 = G__28203;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28176){
var vec__28180 = p__28176;
var seq__28181 = cljs.core.seq.call(null,vec__28180);
var first__28182 = cljs.core.first.call(null,seq__28181);
var seq__28181__$1 = cljs.core.next.call(null,seq__28181);
var x = first__28182;
var xs = seq__28181__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28180,seq__28181,first__28182,seq__28181__$1,x,xs,get_deps__$1){
return (function (p1__28122_SHARP_){
return clojure.set.difference.call(null,p1__28122_SHARP_,x);
});})(vec__28180,seq__28181,first__28182,seq__28181__$1,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28216 = cljs.core.seq.call(null,provides);
var chunk__28217 = null;
var count__28218 = (0);
var i__28219 = (0);
while(true){
if((i__28219 < count__28218)){
var prov = cljs.core._nth.call(null,chunk__28217,i__28219);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28220_28228 = cljs.core.seq.call(null,requires);
var chunk__28221_28229 = null;
var count__28222_28230 = (0);
var i__28223_28231 = (0);
while(true){
if((i__28223_28231 < count__28222_28230)){
var req_28232 = cljs.core._nth.call(null,chunk__28221_28229,i__28223_28231);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28232,prov);

var G__28233 = seq__28220_28228;
var G__28234 = chunk__28221_28229;
var G__28235 = count__28222_28230;
var G__28236 = (i__28223_28231 + (1));
seq__28220_28228 = G__28233;
chunk__28221_28229 = G__28234;
count__28222_28230 = G__28235;
i__28223_28231 = G__28236;
continue;
} else {
var temp__4657__auto___28237 = cljs.core.seq.call(null,seq__28220_28228);
if(temp__4657__auto___28237){
var seq__28220_28238__$1 = temp__4657__auto___28237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28220_28238__$1)){
var c__23164__auto___28239 = cljs.core.chunk_first.call(null,seq__28220_28238__$1);
var G__28240 = cljs.core.chunk_rest.call(null,seq__28220_28238__$1);
var G__28241 = c__23164__auto___28239;
var G__28242 = cljs.core.count.call(null,c__23164__auto___28239);
var G__28243 = (0);
seq__28220_28228 = G__28240;
chunk__28221_28229 = G__28241;
count__28222_28230 = G__28242;
i__28223_28231 = G__28243;
continue;
} else {
var req_28244 = cljs.core.first.call(null,seq__28220_28238__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28244,prov);

var G__28245 = cljs.core.next.call(null,seq__28220_28238__$1);
var G__28246 = null;
var G__28247 = (0);
var G__28248 = (0);
seq__28220_28228 = G__28245;
chunk__28221_28229 = G__28246;
count__28222_28230 = G__28247;
i__28223_28231 = G__28248;
continue;
}
} else {
}
}
break;
}

var G__28249 = seq__28216;
var G__28250 = chunk__28217;
var G__28251 = count__28218;
var G__28252 = (i__28219 + (1));
seq__28216 = G__28249;
chunk__28217 = G__28250;
count__28218 = G__28251;
i__28219 = G__28252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28216);
if(temp__4657__auto__){
var seq__28216__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28216__$1)){
var c__23164__auto__ = cljs.core.chunk_first.call(null,seq__28216__$1);
var G__28253 = cljs.core.chunk_rest.call(null,seq__28216__$1);
var G__28254 = c__23164__auto__;
var G__28255 = cljs.core.count.call(null,c__23164__auto__);
var G__28256 = (0);
seq__28216 = G__28253;
chunk__28217 = G__28254;
count__28218 = G__28255;
i__28219 = G__28256;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28216__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28224_28257 = cljs.core.seq.call(null,requires);
var chunk__28225_28258 = null;
var count__28226_28259 = (0);
var i__28227_28260 = (0);
while(true){
if((i__28227_28260 < count__28226_28259)){
var req_28261 = cljs.core._nth.call(null,chunk__28225_28258,i__28227_28260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28261,prov);

var G__28262 = seq__28224_28257;
var G__28263 = chunk__28225_28258;
var G__28264 = count__28226_28259;
var G__28265 = (i__28227_28260 + (1));
seq__28224_28257 = G__28262;
chunk__28225_28258 = G__28263;
count__28226_28259 = G__28264;
i__28227_28260 = G__28265;
continue;
} else {
var temp__4657__auto___28266__$1 = cljs.core.seq.call(null,seq__28224_28257);
if(temp__4657__auto___28266__$1){
var seq__28224_28267__$1 = temp__4657__auto___28266__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28224_28267__$1)){
var c__23164__auto___28268 = cljs.core.chunk_first.call(null,seq__28224_28267__$1);
var G__28269 = cljs.core.chunk_rest.call(null,seq__28224_28267__$1);
var G__28270 = c__23164__auto___28268;
var G__28271 = cljs.core.count.call(null,c__23164__auto___28268);
var G__28272 = (0);
seq__28224_28257 = G__28269;
chunk__28225_28258 = G__28270;
count__28226_28259 = G__28271;
i__28227_28260 = G__28272;
continue;
} else {
var req_28273 = cljs.core.first.call(null,seq__28224_28267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28273,prov);

var G__28274 = cljs.core.next.call(null,seq__28224_28267__$1);
var G__28275 = null;
var G__28276 = (0);
var G__28277 = (0);
seq__28224_28257 = G__28274;
chunk__28225_28258 = G__28275;
count__28226_28259 = G__28276;
i__28227_28260 = G__28277;
continue;
}
} else {
}
}
break;
}

var G__28278 = cljs.core.next.call(null,seq__28216__$1);
var G__28279 = null;
var G__28280 = (0);
var G__28281 = (0);
seq__28216 = G__28278;
chunk__28217 = G__28279;
count__28218 = G__28280;
i__28219 = G__28281;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28286_28290 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28287_28291 = null;
var count__28288_28292 = (0);
var i__28289_28293 = (0);
while(true){
if((i__28289_28293 < count__28288_28292)){
var ns_28294 = cljs.core._nth.call(null,chunk__28287_28291,i__28289_28293);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28294);

var G__28295 = seq__28286_28290;
var G__28296 = chunk__28287_28291;
var G__28297 = count__28288_28292;
var G__28298 = (i__28289_28293 + (1));
seq__28286_28290 = G__28295;
chunk__28287_28291 = G__28296;
count__28288_28292 = G__28297;
i__28289_28293 = G__28298;
continue;
} else {
var temp__4657__auto___28299 = cljs.core.seq.call(null,seq__28286_28290);
if(temp__4657__auto___28299){
var seq__28286_28300__$1 = temp__4657__auto___28299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28286_28300__$1)){
var c__23164__auto___28301 = cljs.core.chunk_first.call(null,seq__28286_28300__$1);
var G__28302 = cljs.core.chunk_rest.call(null,seq__28286_28300__$1);
var G__28303 = c__23164__auto___28301;
var G__28304 = cljs.core.count.call(null,c__23164__auto___28301);
var G__28305 = (0);
seq__28286_28290 = G__28302;
chunk__28287_28291 = G__28303;
count__28288_28292 = G__28304;
i__28289_28293 = G__28305;
continue;
} else {
var ns_28306 = cljs.core.first.call(null,seq__28286_28300__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28306);

var G__28307 = cljs.core.next.call(null,seq__28286_28300__$1);
var G__28308 = null;
var G__28309 = (0);
var G__28310 = (0);
seq__28286_28290 = G__28307;
chunk__28287_28291 = G__28308;
count__28288_28292 = G__28309;
i__28289_28293 = G__28310;
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
goog.require_figwheel_backup_ = (function (){var or__22345__auto__ = goog.require__;
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
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
var G__28311__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28312__i = 0, G__28312__a = new Array(arguments.length -  0);
while (G__28312__i < G__28312__a.length) {G__28312__a[G__28312__i] = arguments[G__28312__i + 0]; ++G__28312__i;}
  args = new cljs.core.IndexedSeq(G__28312__a,0);
} 
return G__28311__delegate.call(this,args);};
G__28311.cljs$lang$maxFixedArity = 0;
G__28311.cljs$lang$applyTo = (function (arglist__28313){
var args = cljs.core.seq(arglist__28313);
return G__28311__delegate(args);
});
G__28311.cljs$core$IFn$_invoke$arity$variadic = G__28311__delegate;
return G__28311;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28315 = cljs.core._EQ_;
var expr__28316 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28315.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28316))){
var path_parts = ((function (pred__28315,expr__28316){
return (function (p1__28314_SHARP_){
return clojure.string.split.call(null,p1__28314_SHARP_,/[\/\\]/);
});})(pred__28315,expr__28316))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28315,expr__28316){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28318){if((e28318 instanceof Error)){
var e = e28318;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28318;

}
}})());
});
;})(path_parts,sep,root,pred__28315,expr__28316))
} else {
if(cljs.core.truth_(pred__28315.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28316))){
return ((function (pred__28315,expr__28316){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28315,expr__28316){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28315,expr__28316))
);

return deferred.addErrback(((function (deferred,pred__28315,expr__28316){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28315,expr__28316))
);
});
;})(pred__28315,expr__28316))
} else {
return ((function (pred__28315,expr__28316){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28315,expr__28316))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28319,callback){
var map__28322 = p__28319;
var map__28322__$1 = ((((!((map__28322 == null)))?((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28322):map__28322);
var file_msg = map__28322__$1;
var request_url = cljs.core.get.call(null,map__28322__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28322,map__28322__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28322,map__28322__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__){
return (function (state_28346){
var state_val_28347 = (state_28346[(1)]);
if((state_val_28347 === (7))){
var inst_28342 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28348_28368 = state_28346__$1;
(statearr_28348_28368[(2)] = inst_28342);

(statearr_28348_28368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (1))){
var state_28346__$1 = state_28346;
var statearr_28349_28369 = state_28346__$1;
(statearr_28349_28369[(2)] = null);

(statearr_28349_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (4))){
var inst_28326 = (state_28346[(7)]);
var inst_28326__$1 = (state_28346[(2)]);
var state_28346__$1 = (function (){var statearr_28350 = state_28346;
(statearr_28350[(7)] = inst_28326__$1);

return statearr_28350;
})();
if(cljs.core.truth_(inst_28326__$1)){
var statearr_28351_28370 = state_28346__$1;
(statearr_28351_28370[(1)] = (5));

} else {
var statearr_28352_28371 = state_28346__$1;
(statearr_28352_28371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (6))){
var state_28346__$1 = state_28346;
var statearr_28353_28372 = state_28346__$1;
(statearr_28353_28372[(2)] = null);

(statearr_28353_28372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (3))){
var inst_28344 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28346__$1,inst_28344);
} else {
if((state_val_28347 === (2))){
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28347 === (11))){
var inst_28338 = (state_28346[(2)]);
var state_28346__$1 = (function (){var statearr_28354 = state_28346;
(statearr_28354[(8)] = inst_28338);

return statearr_28354;
})();
var statearr_28355_28373 = state_28346__$1;
(statearr_28355_28373[(2)] = null);

(statearr_28355_28373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (9))){
var inst_28330 = (state_28346[(9)]);
var inst_28332 = (state_28346[(10)]);
var inst_28334 = inst_28332.call(null,inst_28330);
var state_28346__$1 = state_28346;
var statearr_28356_28374 = state_28346__$1;
(statearr_28356_28374[(2)] = inst_28334);

(statearr_28356_28374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (5))){
var inst_28326 = (state_28346[(7)]);
var inst_28328 = figwheel.client.file_reloading.blocking_load.call(null,inst_28326);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(8),inst_28328);
} else {
if((state_val_28347 === (10))){
var inst_28330 = (state_28346[(9)]);
var inst_28336 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28330);
var state_28346__$1 = state_28346;
var statearr_28357_28375 = state_28346__$1;
(statearr_28357_28375[(2)] = inst_28336);

(statearr_28357_28375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (8))){
var inst_28326 = (state_28346[(7)]);
var inst_28332 = (state_28346[(10)]);
var inst_28330 = (state_28346[(2)]);
var inst_28331 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28332__$1 = cljs.core.get.call(null,inst_28331,inst_28326);
var state_28346__$1 = (function (){var statearr_28358 = state_28346;
(statearr_28358[(9)] = inst_28330);

(statearr_28358[(10)] = inst_28332__$1);

return statearr_28358;
})();
if(cljs.core.truth_(inst_28332__$1)){
var statearr_28359_28376 = state_28346__$1;
(statearr_28359_28376[(1)] = (9));

} else {
var statearr_28360_28377 = state_28346__$1;
(statearr_28360_28377[(1)] = (10));

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
});})(c__25267__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25156__auto__ = null;
var figwheel$client$file_reloading$state_machine__25156__auto____0 = (function (){
var statearr_28364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28364[(0)] = figwheel$client$file_reloading$state_machine__25156__auto__);

(statearr_28364[(1)] = (1));

return statearr_28364;
});
var figwheel$client$file_reloading$state_machine__25156__auto____1 = (function (state_28346){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_28346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e28365){if((e28365 instanceof Object)){
var ex__25159__auto__ = e28365;
var statearr_28366_28378 = state_28346;
(statearr_28366_28378[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28379 = state_28346;
state_28346 = G__28379;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25156__auto__ = function(state_28346){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25156__auto____1.call(this,state_28346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25156__auto____0;
figwheel$client$file_reloading$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25156__auto____1;
return figwheel$client$file_reloading$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__))
})();
var state__25269__auto__ = (function (){var statearr_28367 = f__25268__auto__.call(null);
(statearr_28367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_28367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__))
);

return c__25267__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28380,callback){
var map__28383 = p__28380;
var map__28383__$1 = ((((!((map__28383 == null)))?((((map__28383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);
var file_msg = map__28383__$1;
var namespace = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28383,map__28383__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28383,map__28383__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28385){
var map__28388 = p__28385;
var map__28388__$1 = ((((!((map__28388 == null)))?((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var file_msg = map__28388__$1;
var namespace = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22333__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22333__auto__){
var or__22345__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
var or__22345__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22345__auto____$1)){
return or__22345__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22333__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28390,callback){
var map__28393 = p__28390;
var map__28393__$1 = ((((!((map__28393 == null)))?((((map__28393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var file_msg = map__28393__$1;
var request_url = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__25267__auto___28497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___28497,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___28497,out){
return (function (state_28479){
var state_val_28480 = (state_28479[(1)]);
if((state_val_28480 === (1))){
var inst_28453 = cljs.core.seq.call(null,files);
var inst_28454 = cljs.core.first.call(null,inst_28453);
var inst_28455 = cljs.core.next.call(null,inst_28453);
var inst_28456 = files;
var state_28479__$1 = (function (){var statearr_28481 = state_28479;
(statearr_28481[(7)] = inst_28455);

(statearr_28481[(8)] = inst_28454);

(statearr_28481[(9)] = inst_28456);

return statearr_28481;
})();
var statearr_28482_28498 = state_28479__$1;
(statearr_28482_28498[(2)] = null);

(statearr_28482_28498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (2))){
var inst_28462 = (state_28479[(10)]);
var inst_28456 = (state_28479[(9)]);
var inst_28461 = cljs.core.seq.call(null,inst_28456);
var inst_28462__$1 = cljs.core.first.call(null,inst_28461);
var inst_28463 = cljs.core.next.call(null,inst_28461);
var inst_28464 = (inst_28462__$1 == null);
var inst_28465 = cljs.core.not.call(null,inst_28464);
var state_28479__$1 = (function (){var statearr_28483 = state_28479;
(statearr_28483[(11)] = inst_28463);

(statearr_28483[(10)] = inst_28462__$1);

return statearr_28483;
})();
if(inst_28465){
var statearr_28484_28499 = state_28479__$1;
(statearr_28484_28499[(1)] = (4));

} else {
var statearr_28485_28500 = state_28479__$1;
(statearr_28485_28500[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (3))){
var inst_28477 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28479__$1,inst_28477);
} else {
if((state_val_28480 === (4))){
var inst_28462 = (state_28479[(10)]);
var inst_28467 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28462);
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28479__$1,(7),inst_28467);
} else {
if((state_val_28480 === (5))){
var inst_28473 = cljs.core.async.close_BANG_.call(null,out);
var state_28479__$1 = state_28479;
var statearr_28486_28501 = state_28479__$1;
(statearr_28486_28501[(2)] = inst_28473);

(statearr_28486_28501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (6))){
var inst_28475 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28487_28502 = state_28479__$1;
(statearr_28487_28502[(2)] = inst_28475);

(statearr_28487_28502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (7))){
var inst_28463 = (state_28479[(11)]);
var inst_28469 = (state_28479[(2)]);
var inst_28470 = cljs.core.async.put_BANG_.call(null,out,inst_28469);
var inst_28456 = inst_28463;
var state_28479__$1 = (function (){var statearr_28488 = state_28479;
(statearr_28488[(12)] = inst_28470);

(statearr_28488[(9)] = inst_28456);

return statearr_28488;
})();
var statearr_28489_28503 = state_28479__$1;
(statearr_28489_28503[(2)] = null);

(statearr_28489_28503[(1)] = (2));


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
});})(c__25267__auto___28497,out))
;
return ((function (switch__25155__auto__,c__25267__auto___28497,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____0 = (function (){
var statearr_28493 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28493[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__);

(statearr_28493[(1)] = (1));

return statearr_28493;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____1 = (function (state_28479){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_28479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e28494){if((e28494 instanceof Object)){
var ex__25159__auto__ = e28494;
var statearr_28495_28504 = state_28479;
(statearr_28495_28504[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28505 = state_28479;
state_28479 = G__28505;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__ = function(state_28479){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____1.call(this,state_28479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___28497,out))
})();
var state__25269__auto__ = (function (){var statearr_28496 = f__25268__auto__.call(null);
(statearr_28496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___28497);

return statearr_28496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___28497,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28506,opts){
var map__28510 = p__28506;
var map__28510__$1 = ((((!((map__28510 == null)))?((((map__28510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28510):map__28510);
var eval_body = cljs.core.get.call(null,map__28510__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22333__auto__ = eval_body;
if(cljs.core.truth_(and__22333__auto__)){
return typeof eval_body === 'string';
} else {
return and__22333__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28512){var e = e28512;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28513_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28513_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28522){
var vec__28523 = p__28522;
var k = cljs.core.nth.call(null,vec__28523,(0),null);
var v = cljs.core.nth.call(null,vec__28523,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28526){
var vec__28527 = p__28526;
var k = cljs.core.nth.call(null,vec__28527,(0),null);
var v = cljs.core.nth.call(null,vec__28527,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28533,p__28534){
var map__28782 = p__28533;
var map__28782__$1 = ((((!((map__28782 == null)))?((((map__28782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28782):map__28782);
var opts = map__28782__$1;
var before_jsload = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28783 = p__28534;
var map__28783__$1 = ((((!((map__28783 == null)))?((((map__28783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28783):map__28783);
var msg = map__28783__$1;
var files = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28937){
var state_val_28938 = (state_28937[(1)]);
if((state_val_28938 === (7))){
var inst_28799 = (state_28937[(7)]);
var inst_28797 = (state_28937[(8)]);
var inst_28800 = (state_28937[(9)]);
var inst_28798 = (state_28937[(10)]);
var inst_28805 = cljs.core._nth.call(null,inst_28798,inst_28800);
var inst_28806 = figwheel.client.file_reloading.eval_body.call(null,inst_28805,opts);
var inst_28807 = (inst_28800 + (1));
var tmp28939 = inst_28799;
var tmp28940 = inst_28797;
var tmp28941 = inst_28798;
var inst_28797__$1 = tmp28940;
var inst_28798__$1 = tmp28941;
var inst_28799__$1 = tmp28939;
var inst_28800__$1 = inst_28807;
var state_28937__$1 = (function (){var statearr_28942 = state_28937;
(statearr_28942[(7)] = inst_28799__$1);

(statearr_28942[(8)] = inst_28797__$1);

(statearr_28942[(9)] = inst_28800__$1);

(statearr_28942[(11)] = inst_28806);

(statearr_28942[(10)] = inst_28798__$1);

return statearr_28942;
})();
var statearr_28943_29029 = state_28937__$1;
(statearr_28943_29029[(2)] = null);

(statearr_28943_29029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (20))){
var inst_28840 = (state_28937[(12)]);
var inst_28848 = figwheel.client.file_reloading.sort_files.call(null,inst_28840);
var state_28937__$1 = state_28937;
var statearr_28944_29030 = state_28937__$1;
(statearr_28944_29030[(2)] = inst_28848);

(statearr_28944_29030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (27))){
var state_28937__$1 = state_28937;
var statearr_28945_29031 = state_28937__$1;
(statearr_28945_29031[(2)] = null);

(statearr_28945_29031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (1))){
var inst_28789 = (state_28937[(13)]);
var inst_28786 = before_jsload.call(null,files);
var inst_28787 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28788 = (function (){return ((function (inst_28789,inst_28786,inst_28787,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28530_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28530_SHARP_);
});
;})(inst_28789,inst_28786,inst_28787,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28789__$1 = cljs.core.filter.call(null,inst_28788,files);
var inst_28790 = cljs.core.not_empty.call(null,inst_28789__$1);
var state_28937__$1 = (function (){var statearr_28946 = state_28937;
(statearr_28946[(14)] = inst_28787);

(statearr_28946[(15)] = inst_28786);

(statearr_28946[(13)] = inst_28789__$1);

return statearr_28946;
})();
if(cljs.core.truth_(inst_28790)){
var statearr_28947_29032 = state_28937__$1;
(statearr_28947_29032[(1)] = (2));

} else {
var statearr_28948_29033 = state_28937__$1;
(statearr_28948_29033[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (24))){
var state_28937__$1 = state_28937;
var statearr_28949_29034 = state_28937__$1;
(statearr_28949_29034[(2)] = null);

(statearr_28949_29034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (39))){
var inst_28890 = (state_28937[(16)]);
var state_28937__$1 = state_28937;
var statearr_28950_29035 = state_28937__$1;
(statearr_28950_29035[(2)] = inst_28890);

(statearr_28950_29035[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (46))){
var inst_28932 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28951_29036 = state_28937__$1;
(statearr_28951_29036[(2)] = inst_28932);

(statearr_28951_29036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (4))){
var inst_28834 = (state_28937[(2)]);
var inst_28835 = cljs.core.List.EMPTY;
var inst_28836 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28835);
var inst_28837 = (function (){return ((function (inst_28834,inst_28835,inst_28836,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28531_SHARP_){
var and__22333__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28531_SHARP_);
if(cljs.core.truth_(and__22333__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28531_SHARP_));
} else {
return and__22333__auto__;
}
});
;})(inst_28834,inst_28835,inst_28836,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28838 = cljs.core.filter.call(null,inst_28837,files);
var inst_28839 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28840 = cljs.core.concat.call(null,inst_28838,inst_28839);
var state_28937__$1 = (function (){var statearr_28952 = state_28937;
(statearr_28952[(12)] = inst_28840);

(statearr_28952[(17)] = inst_28836);

(statearr_28952[(18)] = inst_28834);

return statearr_28952;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28953_29037 = state_28937__$1;
(statearr_28953_29037[(1)] = (16));

} else {
var statearr_28954_29038 = state_28937__$1;
(statearr_28954_29038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (15))){
var inst_28824 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28955_29039 = state_28937__$1;
(statearr_28955_29039[(2)] = inst_28824);

(statearr_28955_29039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (21))){
var inst_28850 = (state_28937[(19)]);
var inst_28850__$1 = (state_28937[(2)]);
var inst_28851 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28850__$1);
var state_28937__$1 = (function (){var statearr_28956 = state_28937;
(statearr_28956[(19)] = inst_28850__$1);

return statearr_28956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28937__$1,(22),inst_28851);
} else {
if((state_val_28938 === (31))){
var inst_28935 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28937__$1,inst_28935);
} else {
if((state_val_28938 === (32))){
var inst_28890 = (state_28937[(16)]);
var inst_28895 = inst_28890.cljs$lang$protocol_mask$partition0$;
var inst_28896 = (inst_28895 & (64));
var inst_28897 = inst_28890.cljs$core$ISeq$;
var inst_28898 = (cljs.core.PROTOCOL_SENTINEL === inst_28897);
var inst_28899 = (inst_28896) || (inst_28898);
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28899)){
var statearr_28957_29040 = state_28937__$1;
(statearr_28957_29040[(1)] = (35));

} else {
var statearr_28958_29041 = state_28937__$1;
(statearr_28958_29041[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (40))){
var inst_28912 = (state_28937[(20)]);
var inst_28911 = (state_28937[(2)]);
var inst_28912__$1 = cljs.core.get.call(null,inst_28911,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28913 = cljs.core.get.call(null,inst_28911,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28914 = cljs.core.not_empty.call(null,inst_28912__$1);
var state_28937__$1 = (function (){var statearr_28959 = state_28937;
(statearr_28959[(21)] = inst_28913);

(statearr_28959[(20)] = inst_28912__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28914)){
var statearr_28960_29042 = state_28937__$1;
(statearr_28960_29042[(1)] = (41));

} else {
var statearr_28961_29043 = state_28937__$1;
(statearr_28961_29043[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (33))){
var state_28937__$1 = state_28937;
var statearr_28962_29044 = state_28937__$1;
(statearr_28962_29044[(2)] = false);

(statearr_28962_29044[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (13))){
var inst_28810 = (state_28937[(22)]);
var inst_28814 = cljs.core.chunk_first.call(null,inst_28810);
var inst_28815 = cljs.core.chunk_rest.call(null,inst_28810);
var inst_28816 = cljs.core.count.call(null,inst_28814);
var inst_28797 = inst_28815;
var inst_28798 = inst_28814;
var inst_28799 = inst_28816;
var inst_28800 = (0);
var state_28937__$1 = (function (){var statearr_28963 = state_28937;
(statearr_28963[(7)] = inst_28799);

(statearr_28963[(8)] = inst_28797);

(statearr_28963[(9)] = inst_28800);

(statearr_28963[(10)] = inst_28798);

return statearr_28963;
})();
var statearr_28964_29045 = state_28937__$1;
(statearr_28964_29045[(2)] = null);

(statearr_28964_29045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (22))){
var inst_28854 = (state_28937[(23)]);
var inst_28853 = (state_28937[(24)]);
var inst_28850 = (state_28937[(19)]);
var inst_28858 = (state_28937[(25)]);
var inst_28853__$1 = (state_28937[(2)]);
var inst_28854__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28853__$1);
var inst_28855 = (function (){var all_files = inst_28850;
var res_SINGLEQUOTE_ = inst_28853__$1;
var res = inst_28854__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28853,inst_28850,inst_28858,inst_28853__$1,inst_28854__$1,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28532_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28532_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28853,inst_28850,inst_28858,inst_28853__$1,inst_28854__$1,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28856 = cljs.core.filter.call(null,inst_28855,inst_28853__$1);
var inst_28857 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28858__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28857);
var inst_28859 = cljs.core.not_empty.call(null,inst_28858__$1);
var state_28937__$1 = (function (){var statearr_28965 = state_28937;
(statearr_28965[(23)] = inst_28854__$1);

(statearr_28965[(24)] = inst_28853__$1);

(statearr_28965[(25)] = inst_28858__$1);

(statearr_28965[(26)] = inst_28856);

return statearr_28965;
})();
if(cljs.core.truth_(inst_28859)){
var statearr_28966_29046 = state_28937__$1;
(statearr_28966_29046[(1)] = (23));

} else {
var statearr_28967_29047 = state_28937__$1;
(statearr_28967_29047[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (36))){
var state_28937__$1 = state_28937;
var statearr_28968_29048 = state_28937__$1;
(statearr_28968_29048[(2)] = false);

(statearr_28968_29048[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (41))){
var inst_28912 = (state_28937[(20)]);
var inst_28916 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28917 = cljs.core.map.call(null,inst_28916,inst_28912);
var inst_28918 = cljs.core.pr_str.call(null,inst_28917);
var inst_28919 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28918)].join('');
var inst_28920 = figwheel.client.utils.log.call(null,inst_28919);
var state_28937__$1 = state_28937;
var statearr_28969_29049 = state_28937__$1;
(statearr_28969_29049[(2)] = inst_28920);

(statearr_28969_29049[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (43))){
var inst_28913 = (state_28937[(21)]);
var inst_28923 = (state_28937[(2)]);
var inst_28924 = cljs.core.not_empty.call(null,inst_28913);
var state_28937__$1 = (function (){var statearr_28970 = state_28937;
(statearr_28970[(27)] = inst_28923);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28924)){
var statearr_28971_29050 = state_28937__$1;
(statearr_28971_29050[(1)] = (44));

} else {
var statearr_28972_29051 = state_28937__$1;
(statearr_28972_29051[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (29))){
var inst_28854 = (state_28937[(23)]);
var inst_28890 = (state_28937[(16)]);
var inst_28853 = (state_28937[(24)]);
var inst_28850 = (state_28937[(19)]);
var inst_28858 = (state_28937[(25)]);
var inst_28856 = (state_28937[(26)]);
var inst_28886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28889 = (function (){var all_files = inst_28850;
var res_SINGLEQUOTE_ = inst_28853;
var res = inst_28854;
var files_not_loaded = inst_28856;
var dependencies_that_loaded = inst_28858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28890,inst_28853,inst_28850,inst_28858,inst_28856,inst_28886,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28888){
var map__28973 = p__28888;
var map__28973__$1 = ((((!((map__28973 == null)))?((((map__28973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973):map__28973);
var namespace = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28890,inst_28853,inst_28850,inst_28858,inst_28856,inst_28886,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28890__$1 = cljs.core.group_by.call(null,inst_28889,inst_28856);
var inst_28892 = (inst_28890__$1 == null);
var inst_28893 = cljs.core.not.call(null,inst_28892);
var state_28937__$1 = (function (){var statearr_28975 = state_28937;
(statearr_28975[(16)] = inst_28890__$1);

(statearr_28975[(28)] = inst_28886);

return statearr_28975;
})();
if(inst_28893){
var statearr_28976_29052 = state_28937__$1;
(statearr_28976_29052[(1)] = (32));

} else {
var statearr_28977_29053 = state_28937__$1;
(statearr_28977_29053[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (44))){
var inst_28913 = (state_28937[(21)]);
var inst_28926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28913);
var inst_28927 = cljs.core.pr_str.call(null,inst_28926);
var inst_28928 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28927)].join('');
var inst_28929 = figwheel.client.utils.log.call(null,inst_28928);
var state_28937__$1 = state_28937;
var statearr_28978_29054 = state_28937__$1;
(statearr_28978_29054[(2)] = inst_28929);

(statearr_28978_29054[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (6))){
var inst_28831 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28979_29055 = state_28937__$1;
(statearr_28979_29055[(2)] = inst_28831);

(statearr_28979_29055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (28))){
var inst_28856 = (state_28937[(26)]);
var inst_28883 = (state_28937[(2)]);
var inst_28884 = cljs.core.not_empty.call(null,inst_28856);
var state_28937__$1 = (function (){var statearr_28980 = state_28937;
(statearr_28980[(29)] = inst_28883);

return statearr_28980;
})();
if(cljs.core.truth_(inst_28884)){
var statearr_28981_29056 = state_28937__$1;
(statearr_28981_29056[(1)] = (29));

} else {
var statearr_28982_29057 = state_28937__$1;
(statearr_28982_29057[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (25))){
var inst_28854 = (state_28937[(23)]);
var inst_28870 = (state_28937[(2)]);
var inst_28871 = cljs.core.not_empty.call(null,inst_28854);
var state_28937__$1 = (function (){var statearr_28983 = state_28937;
(statearr_28983[(30)] = inst_28870);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28871)){
var statearr_28984_29058 = state_28937__$1;
(statearr_28984_29058[(1)] = (26));

} else {
var statearr_28985_29059 = state_28937__$1;
(statearr_28985_29059[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (34))){
var inst_28906 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28906)){
var statearr_28986_29060 = state_28937__$1;
(statearr_28986_29060[(1)] = (38));

} else {
var statearr_28987_29061 = state_28937__$1;
(statearr_28987_29061[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (17))){
var state_28937__$1 = state_28937;
var statearr_28988_29062 = state_28937__$1;
(statearr_28988_29062[(2)] = recompile_dependents);

(statearr_28988_29062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (3))){
var state_28937__$1 = state_28937;
var statearr_28989_29063 = state_28937__$1;
(statearr_28989_29063[(2)] = null);

(statearr_28989_29063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (12))){
var inst_28827 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28990_29064 = state_28937__$1;
(statearr_28990_29064[(2)] = inst_28827);

(statearr_28990_29064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (2))){
var inst_28789 = (state_28937[(13)]);
var inst_28796 = cljs.core.seq.call(null,inst_28789);
var inst_28797 = inst_28796;
var inst_28798 = null;
var inst_28799 = (0);
var inst_28800 = (0);
var state_28937__$1 = (function (){var statearr_28991 = state_28937;
(statearr_28991[(7)] = inst_28799);

(statearr_28991[(8)] = inst_28797);

(statearr_28991[(9)] = inst_28800);

(statearr_28991[(10)] = inst_28798);

return statearr_28991;
})();
var statearr_28992_29065 = state_28937__$1;
(statearr_28992_29065[(2)] = null);

(statearr_28992_29065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (23))){
var inst_28854 = (state_28937[(23)]);
var inst_28853 = (state_28937[(24)]);
var inst_28850 = (state_28937[(19)]);
var inst_28858 = (state_28937[(25)]);
var inst_28856 = (state_28937[(26)]);
var inst_28861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28863 = (function (){var all_files = inst_28850;
var res_SINGLEQUOTE_ = inst_28853;
var res = inst_28854;
var files_not_loaded = inst_28856;
var dependencies_that_loaded = inst_28858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28861,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28862){
var map__28993 = p__28862;
var map__28993__$1 = ((((!((map__28993 == null)))?((((map__28993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);
var request_url = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28861,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28864 = cljs.core.reverse.call(null,inst_28858);
var inst_28865 = cljs.core.map.call(null,inst_28863,inst_28864);
var inst_28866 = cljs.core.pr_str.call(null,inst_28865);
var inst_28867 = figwheel.client.utils.log.call(null,inst_28866);
var state_28937__$1 = (function (){var statearr_28995 = state_28937;
(statearr_28995[(31)] = inst_28861);

return statearr_28995;
})();
var statearr_28996_29066 = state_28937__$1;
(statearr_28996_29066[(2)] = inst_28867);

(statearr_28996_29066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (35))){
var state_28937__$1 = state_28937;
var statearr_28997_29067 = state_28937__$1;
(statearr_28997_29067[(2)] = true);

(statearr_28997_29067[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (19))){
var inst_28840 = (state_28937[(12)]);
var inst_28846 = figwheel.client.file_reloading.expand_files.call(null,inst_28840);
var state_28937__$1 = state_28937;
var statearr_28998_29068 = state_28937__$1;
(statearr_28998_29068[(2)] = inst_28846);

(statearr_28998_29068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (11))){
var state_28937__$1 = state_28937;
var statearr_28999_29069 = state_28937__$1;
(statearr_28999_29069[(2)] = null);

(statearr_28999_29069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (9))){
var inst_28829 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_29000_29070 = state_28937__$1;
(statearr_29000_29070[(2)] = inst_28829);

(statearr_29000_29070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (5))){
var inst_28799 = (state_28937[(7)]);
var inst_28800 = (state_28937[(9)]);
var inst_28802 = (inst_28800 < inst_28799);
var inst_28803 = inst_28802;
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28803)){
var statearr_29001_29071 = state_28937__$1;
(statearr_29001_29071[(1)] = (7));

} else {
var statearr_29002_29072 = state_28937__$1;
(statearr_29002_29072[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (14))){
var inst_28810 = (state_28937[(22)]);
var inst_28819 = cljs.core.first.call(null,inst_28810);
var inst_28820 = figwheel.client.file_reloading.eval_body.call(null,inst_28819,opts);
var inst_28821 = cljs.core.next.call(null,inst_28810);
var inst_28797 = inst_28821;
var inst_28798 = null;
var inst_28799 = (0);
var inst_28800 = (0);
var state_28937__$1 = (function (){var statearr_29003 = state_28937;
(statearr_29003[(7)] = inst_28799);

(statearr_29003[(8)] = inst_28797);

(statearr_29003[(9)] = inst_28800);

(statearr_29003[(10)] = inst_28798);

(statearr_29003[(32)] = inst_28820);

return statearr_29003;
})();
var statearr_29004_29073 = state_28937__$1;
(statearr_29004_29073[(2)] = null);

(statearr_29004_29073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (45))){
var state_28937__$1 = state_28937;
var statearr_29005_29074 = state_28937__$1;
(statearr_29005_29074[(2)] = null);

(statearr_29005_29074[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (26))){
var inst_28854 = (state_28937[(23)]);
var inst_28853 = (state_28937[(24)]);
var inst_28850 = (state_28937[(19)]);
var inst_28858 = (state_28937[(25)]);
var inst_28856 = (state_28937[(26)]);
var inst_28873 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28875 = (function (){var all_files = inst_28850;
var res_SINGLEQUOTE_ = inst_28853;
var res = inst_28854;
var files_not_loaded = inst_28856;
var dependencies_that_loaded = inst_28858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28873,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28874){
var map__29006 = p__28874;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var namespace = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28873,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28876 = cljs.core.map.call(null,inst_28875,inst_28854);
var inst_28877 = cljs.core.pr_str.call(null,inst_28876);
var inst_28878 = figwheel.client.utils.log.call(null,inst_28877);
var inst_28879 = (function (){var all_files = inst_28850;
var res_SINGLEQUOTE_ = inst_28853;
var res = inst_28854;
var files_not_loaded = inst_28856;
var dependencies_that_loaded = inst_28858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28873,inst_28875,inst_28876,inst_28877,inst_28878,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28853,inst_28850,inst_28858,inst_28856,inst_28873,inst_28875,inst_28876,inst_28877,inst_28878,state_val_28938,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28880 = setTimeout(inst_28879,(10));
var state_28937__$1 = (function (){var statearr_29008 = state_28937;
(statearr_29008[(33)] = inst_28873);

(statearr_29008[(34)] = inst_28878);

return statearr_29008;
})();
var statearr_29009_29075 = state_28937__$1;
(statearr_29009_29075[(2)] = inst_28880);

(statearr_29009_29075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (16))){
var state_28937__$1 = state_28937;
var statearr_29010_29076 = state_28937__$1;
(statearr_29010_29076[(2)] = reload_dependents);

(statearr_29010_29076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (38))){
var inst_28890 = (state_28937[(16)]);
var inst_28908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28890);
var state_28937__$1 = state_28937;
var statearr_29011_29077 = state_28937__$1;
(statearr_29011_29077[(2)] = inst_28908);

(statearr_29011_29077[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (30))){
var state_28937__$1 = state_28937;
var statearr_29012_29078 = state_28937__$1;
(statearr_29012_29078[(2)] = null);

(statearr_29012_29078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (10))){
var inst_28810 = (state_28937[(22)]);
var inst_28812 = cljs.core.chunked_seq_QMARK_.call(null,inst_28810);
var state_28937__$1 = state_28937;
if(inst_28812){
var statearr_29013_29079 = state_28937__$1;
(statearr_29013_29079[(1)] = (13));

} else {
var statearr_29014_29080 = state_28937__$1;
(statearr_29014_29080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (18))){
var inst_28844 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28844)){
var statearr_29015_29081 = state_28937__$1;
(statearr_29015_29081[(1)] = (19));

} else {
var statearr_29016_29082 = state_28937__$1;
(statearr_29016_29082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (42))){
var state_28937__$1 = state_28937;
var statearr_29017_29083 = state_28937__$1;
(statearr_29017_29083[(2)] = null);

(statearr_29017_29083[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (37))){
var inst_28903 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_29018_29084 = state_28937__$1;
(statearr_29018_29084[(2)] = inst_28903);

(statearr_29018_29084[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (8))){
var inst_28797 = (state_28937[(8)]);
var inst_28810 = (state_28937[(22)]);
var inst_28810__$1 = cljs.core.seq.call(null,inst_28797);
var state_28937__$1 = (function (){var statearr_29019 = state_28937;
(statearr_29019[(22)] = inst_28810__$1);

return statearr_29019;
})();
if(inst_28810__$1){
var statearr_29020_29085 = state_28937__$1;
(statearr_29020_29085[(1)] = (10));

} else {
var statearr_29021_29086 = state_28937__$1;
(statearr_29021_29086[(1)] = (11));

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
});})(c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25155__auto__,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____1 = (function (state_28937){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_28937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__25159__auto__ = e29026;
var statearr_29027_29087 = state_28937;
(statearr_29027_29087[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29088 = state_28937;
state_28937 = G__29088;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__ = function(state_28937){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____1.call(this,state_28937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25269__auto__ = (function (){var statearr_29028 = f__25268__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__,map__28782,map__28782__$1,opts,before_jsload,on_jsload,reload_dependents,map__28783,map__28783__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25267__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29091,link){
var map__29094 = p__29091;
var map__29094__$1 = ((((!((map__29094 == null)))?((((map__29094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29094):map__29094);
var file = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29094,map__29094__$1,file){
return (function (p1__29089_SHARP_,p2__29090_SHARP_){
if(cljs.core._EQ_.call(null,p1__29089_SHARP_,p2__29090_SHARP_)){
return p1__29089_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29094,map__29094__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29100){
var map__29101 = p__29100;
var map__29101__$1 = ((((!((map__29101 == null)))?((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var match_length = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29096_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29096_SHARP_);
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
var args29103 = [];
var len__23458__auto___29106 = arguments.length;
var i__23459__auto___29107 = (0);
while(true){
if((i__23459__auto___29107 < len__23458__auto___29106)){
args29103.push((arguments[i__23459__auto___29107]));

var G__29108 = (i__23459__auto___29107 + (1));
i__23459__auto___29107 = G__29108;
continue;
} else {
}
break;
}

var G__29105 = args29103.length;
switch (G__29105) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29103.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29110_SHARP_,p2__29111_SHARP_){
return cljs.core.assoc.call(null,p1__29110_SHARP_,cljs.core.get.call(null,p2__29111_SHARP_,key),p2__29111_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29112){
var map__29115 = p__29112;
var map__29115__$1 = ((((!((map__29115 == null)))?((((map__29115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);
var f_data = map__29115__$1;
var file = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29117,files_msg){
var map__29124 = p__29117;
var map__29124__$1 = ((((!((map__29124 == null)))?((((map__29124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124):map__29124);
var opts = map__29124__$1;
var on_cssload = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29126_29130 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29127_29131 = null;
var count__29128_29132 = (0);
var i__29129_29133 = (0);
while(true){
if((i__29129_29133 < count__29128_29132)){
var f_29134 = cljs.core._nth.call(null,chunk__29127_29131,i__29129_29133);
figwheel.client.file_reloading.reload_css_file.call(null,f_29134);

var G__29135 = seq__29126_29130;
var G__29136 = chunk__29127_29131;
var G__29137 = count__29128_29132;
var G__29138 = (i__29129_29133 + (1));
seq__29126_29130 = G__29135;
chunk__29127_29131 = G__29136;
count__29128_29132 = G__29137;
i__29129_29133 = G__29138;
continue;
} else {
var temp__4657__auto___29139 = cljs.core.seq.call(null,seq__29126_29130);
if(temp__4657__auto___29139){
var seq__29126_29140__$1 = temp__4657__auto___29139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29126_29140__$1)){
var c__23164__auto___29141 = cljs.core.chunk_first.call(null,seq__29126_29140__$1);
var G__29142 = cljs.core.chunk_rest.call(null,seq__29126_29140__$1);
var G__29143 = c__23164__auto___29141;
var G__29144 = cljs.core.count.call(null,c__23164__auto___29141);
var G__29145 = (0);
seq__29126_29130 = G__29142;
chunk__29127_29131 = G__29143;
count__29128_29132 = G__29144;
i__29129_29133 = G__29145;
continue;
} else {
var f_29146 = cljs.core.first.call(null,seq__29126_29140__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29146);

var G__29147 = cljs.core.next.call(null,seq__29126_29140__$1);
var G__29148 = null;
var G__29149 = (0);
var G__29150 = (0);
seq__29126_29130 = G__29147;
chunk__29127_29131 = G__29148;
count__29128_29132 = G__29149;
i__29129_29133 = G__29150;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29124,map__29124__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29124,map__29124__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map