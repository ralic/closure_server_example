// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22854 = arguments.length;
var i__22750__auto___22855 = (0);
while(true){
if((i__22750__auto___22855 < len__22749__auto___22854)){
args__22756__auto__.push((arguments[i__22750__auto___22855]));

var G__22856 = (i__22750__auto___22855 + (1));
i__22750__auto___22855 = G__22856;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq22853){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22853));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22858 = arguments.length;
var i__22750__auto___22859 = (0);
while(true){
if((i__22750__auto___22859 < len__22749__auto___22858)){
args__22756__auto__.push((arguments[i__22750__auto___22859]));

var G__22860 = (i__22750__auto___22859 + (1));
i__22750__auto___22859 = G__22860;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq22857){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22857));
});

var g_QMARK__22861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_22862 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22861){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22861))
,null));
var mkg_22863 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22861,g_22862){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22861,g_22862))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__22861,g_22862,mkg_22863){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__22861).call(null,x);
});})(g_QMARK__22861,g_22862,mkg_22863))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__22861,g_22862,mkg_22863){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_22863).call(null,gfn);
});})(g_QMARK__22861,g_22862,mkg_22863))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__22861,g_22862,mkg_22863){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_22862).call(null,generator);
});})(g_QMARK__22861,g_22862,mkg_22863))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22825__auto___22879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__22825__auto___22879){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22880 = arguments.length;
var i__22750__auto___22881 = (0);
while(true){
if((i__22750__auto___22881 < len__22749__auto___22880)){
args__22756__auto__.push((arguments[i__22750__auto___22881]));

var G__22882 = (i__22750__auto___22881 + (1));
i__22750__auto___22881 = G__22882;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22879))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22879),args);
});})(g__22825__auto___22879))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__22825__auto___22879){
return (function (seq22864){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22864));
});})(g__22825__auto___22879))
;


var g__22825__auto___22883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__22825__auto___22883){
return (function cljs$spec$impl$gen$list(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22884 = arguments.length;
var i__22750__auto___22885 = (0);
while(true){
if((i__22750__auto___22885 < len__22749__auto___22884)){
args__22756__auto__.push((arguments[i__22750__auto___22885]));

var G__22886 = (i__22750__auto___22885 + (1));
i__22750__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22883))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22883),args);
});})(g__22825__auto___22883))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__22825__auto___22883){
return (function (seq22865){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22865));
});})(g__22825__auto___22883))
;


var g__22825__auto___22887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__22825__auto___22887){
return (function cljs$spec$impl$gen$map(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22888 = arguments.length;
var i__22750__auto___22889 = (0);
while(true){
if((i__22750__auto___22889 < len__22749__auto___22888)){
args__22756__auto__.push((arguments[i__22750__auto___22889]));

var G__22890 = (i__22750__auto___22889 + (1));
i__22750__auto___22889 = G__22890;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22887))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22887),args);
});})(g__22825__auto___22887))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__22825__auto___22887){
return (function (seq22866){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22866));
});})(g__22825__auto___22887))
;


var g__22825__auto___22891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__22825__auto___22891){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22892 = arguments.length;
var i__22750__auto___22893 = (0);
while(true){
if((i__22750__auto___22893 < len__22749__auto___22892)){
args__22756__auto__.push((arguments[i__22750__auto___22893]));

var G__22894 = (i__22750__auto___22893 + (1));
i__22750__auto___22893 = G__22894;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22891))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22891),args);
});})(g__22825__auto___22891))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__22825__auto___22891){
return (function (seq22867){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22867));
});})(g__22825__auto___22891))
;


var g__22825__auto___22895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__22825__auto___22895){
return (function cljs$spec$impl$gen$set(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22896 = arguments.length;
var i__22750__auto___22897 = (0);
while(true){
if((i__22750__auto___22897 < len__22749__auto___22896)){
args__22756__auto__.push((arguments[i__22750__auto___22897]));

var G__22898 = (i__22750__auto___22897 + (1));
i__22750__auto___22897 = G__22898;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22895))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22895),args);
});})(g__22825__auto___22895))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__22825__auto___22895){
return (function (seq22868){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22868));
});})(g__22825__auto___22895))
;


var g__22825__auto___22899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__22825__auto___22899){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22900 = arguments.length;
var i__22750__auto___22901 = (0);
while(true){
if((i__22750__auto___22901 < len__22749__auto___22900)){
args__22756__auto__.push((arguments[i__22750__auto___22901]));

var G__22902 = (i__22750__auto___22901 + (1));
i__22750__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22899))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22899),args);
});})(g__22825__auto___22899))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__22825__auto___22899){
return (function (seq22869){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22869));
});})(g__22825__auto___22899))
;


var g__22825__auto___22903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__22825__auto___22903){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22904 = arguments.length;
var i__22750__auto___22905 = (0);
while(true){
if((i__22750__auto___22905 < len__22749__auto___22904)){
args__22756__auto__.push((arguments[i__22750__auto___22905]));

var G__22906 = (i__22750__auto___22905 + (1));
i__22750__auto___22905 = G__22906;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22903))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22903),args);
});})(g__22825__auto___22903))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__22825__auto___22903){
return (function (seq22870){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22870));
});})(g__22825__auto___22903))
;


var g__22825__auto___22907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__22825__auto___22907){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22908 = arguments.length;
var i__22750__auto___22909 = (0);
while(true){
if((i__22750__auto___22909 < len__22749__auto___22908)){
args__22756__auto__.push((arguments[i__22750__auto___22909]));

var G__22910 = (i__22750__auto___22909 + (1));
i__22750__auto___22909 = G__22910;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22907))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22907),args);
});})(g__22825__auto___22907))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__22825__auto___22907){
return (function (seq22871){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22871));
});})(g__22825__auto___22907))
;


var g__22825__auto___22911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__22825__auto___22911){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22912 = arguments.length;
var i__22750__auto___22913 = (0);
while(true){
if((i__22750__auto___22913 < len__22749__auto___22912)){
args__22756__auto__.push((arguments[i__22750__auto___22913]));

var G__22914 = (i__22750__auto___22913 + (1));
i__22750__auto___22913 = G__22914;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22911))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22911),args);
});})(g__22825__auto___22911))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__22825__auto___22911){
return (function (seq22872){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22872));
});})(g__22825__auto___22911))
;


var g__22825__auto___22915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__22825__auto___22915){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22916 = arguments.length;
var i__22750__auto___22917 = (0);
while(true){
if((i__22750__auto___22917 < len__22749__auto___22916)){
args__22756__auto__.push((arguments[i__22750__auto___22917]));

var G__22918 = (i__22750__auto___22917 + (1));
i__22750__auto___22917 = G__22918;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22915))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22915),args);
});})(g__22825__auto___22915))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__22825__auto___22915){
return (function (seq22873){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22873));
});})(g__22825__auto___22915))
;


var g__22825__auto___22919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__22825__auto___22919){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22920 = arguments.length;
var i__22750__auto___22921 = (0);
while(true){
if((i__22750__auto___22921 < len__22749__auto___22920)){
args__22756__auto__.push((arguments[i__22750__auto___22921]));

var G__22922 = (i__22750__auto___22921 + (1));
i__22750__auto___22921 = G__22922;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22919))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22919),args);
});})(g__22825__auto___22919))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__22825__auto___22919){
return (function (seq22874){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22874));
});})(g__22825__auto___22919))
;


var g__22825__auto___22923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__22825__auto___22923){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22924 = arguments.length;
var i__22750__auto___22925 = (0);
while(true){
if((i__22750__auto___22925 < len__22749__auto___22924)){
args__22756__auto__.push((arguments[i__22750__auto___22925]));

var G__22926 = (i__22750__auto___22925 + (1));
i__22750__auto___22925 = G__22926;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22923))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22923),args);
});})(g__22825__auto___22923))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__22825__auto___22923){
return (function (seq22875){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22875));
});})(g__22825__auto___22923))
;


var g__22825__auto___22927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__22825__auto___22927){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22928 = arguments.length;
var i__22750__auto___22929 = (0);
while(true){
if((i__22750__auto___22929 < len__22749__auto___22928)){
args__22756__auto__.push((arguments[i__22750__auto___22929]));

var G__22930 = (i__22750__auto___22929 + (1));
i__22750__auto___22929 = G__22930;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22927))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22927),args);
});})(g__22825__auto___22927))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__22825__auto___22927){
return (function (seq22876){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22876));
});})(g__22825__auto___22927))
;


var g__22825__auto___22931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__22825__auto___22931){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22932 = arguments.length;
var i__22750__auto___22933 = (0);
while(true){
if((i__22750__auto___22933 < len__22749__auto___22932)){
args__22756__auto__.push((arguments[i__22750__auto___22933]));

var G__22934 = (i__22750__auto___22933 + (1));
i__22750__auto___22933 = G__22934;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22931))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22931),args);
});})(g__22825__auto___22931))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__22825__auto___22931){
return (function (seq22877){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22877));
});})(g__22825__auto___22931))
;


var g__22825__auto___22935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__22825__auto___22935){
return (function cljs$spec$impl$gen$return(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22936 = arguments.length;
var i__22750__auto___22937 = (0);
while(true){
if((i__22750__auto___22937 < len__22749__auto___22936)){
args__22756__auto__.push((arguments[i__22750__auto___22937]));

var G__22938 = (i__22750__auto___22937 + (1));
i__22750__auto___22937 = G__22938;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22825__auto___22935))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22825__auto___22935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22825__auto___22935),args);
});})(g__22825__auto___22935))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__22825__auto___22935){
return (function (seq22878){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22878));
});})(g__22825__auto___22935))
;

var g__22838__auto___22960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__22838__auto___22960){
return (function cljs$spec$impl$gen$any(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22961 = arguments.length;
var i__22750__auto___22962 = (0);
while(true){
if((i__22750__auto___22962 < len__22749__auto___22961)){
args__22756__auto__.push((arguments[i__22750__auto___22962]));

var G__22963 = (i__22750__auto___22962 + (1));
i__22750__auto___22962 = G__22963;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22960))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22960){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22960);
});})(g__22838__auto___22960))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__22838__auto___22960){
return (function (seq22939){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22939));
});})(g__22838__auto___22960))
;


var g__22838__auto___22964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__22838__auto___22964){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22965 = arguments.length;
var i__22750__auto___22966 = (0);
while(true){
if((i__22750__auto___22966 < len__22749__auto___22965)){
args__22756__auto__.push((arguments[i__22750__auto___22966]));

var G__22967 = (i__22750__auto___22966 + (1));
i__22750__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22964))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22964){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22964);
});})(g__22838__auto___22964))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__22838__auto___22964){
return (function (seq22940){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22940));
});})(g__22838__auto___22964))
;


var g__22838__auto___22968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__22838__auto___22968){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22969 = arguments.length;
var i__22750__auto___22970 = (0);
while(true){
if((i__22750__auto___22970 < len__22749__auto___22969)){
args__22756__auto__.push((arguments[i__22750__auto___22970]));

var G__22971 = (i__22750__auto___22970 + (1));
i__22750__auto___22970 = G__22971;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22968))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22968){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22968);
});})(g__22838__auto___22968))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__22838__auto___22968){
return (function (seq22941){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22941));
});})(g__22838__auto___22968))
;


var g__22838__auto___22972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__22838__auto___22972){
return (function cljs$spec$impl$gen$char(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22973 = arguments.length;
var i__22750__auto___22974 = (0);
while(true){
if((i__22750__auto___22974 < len__22749__auto___22973)){
args__22756__auto__.push((arguments[i__22750__auto___22974]));

var G__22975 = (i__22750__auto___22974 + (1));
i__22750__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22972))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22972){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22972);
});})(g__22838__auto___22972))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__22838__auto___22972){
return (function (seq22942){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22942));
});})(g__22838__auto___22972))
;


var g__22838__auto___22976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__22838__auto___22976){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22977 = arguments.length;
var i__22750__auto___22978 = (0);
while(true){
if((i__22750__auto___22978 < len__22749__auto___22977)){
args__22756__auto__.push((arguments[i__22750__auto___22978]));

var G__22979 = (i__22750__auto___22978 + (1));
i__22750__auto___22978 = G__22979;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22976))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22976){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22976);
});})(g__22838__auto___22976))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__22838__auto___22976){
return (function (seq22943){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22943));
});})(g__22838__auto___22976))
;


var g__22838__auto___22980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__22838__auto___22980){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22981 = arguments.length;
var i__22750__auto___22982 = (0);
while(true){
if((i__22750__auto___22982 < len__22749__auto___22981)){
args__22756__auto__.push((arguments[i__22750__auto___22982]));

var G__22983 = (i__22750__auto___22982 + (1));
i__22750__auto___22982 = G__22983;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22980))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22980){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22980);
});})(g__22838__auto___22980))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__22838__auto___22980){
return (function (seq22944){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22944));
});})(g__22838__auto___22980))
;


var g__22838__auto___22984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__22838__auto___22984){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22985 = arguments.length;
var i__22750__auto___22986 = (0);
while(true){
if((i__22750__auto___22986 < len__22749__auto___22985)){
args__22756__auto__.push((arguments[i__22750__auto___22986]));

var G__22987 = (i__22750__auto___22986 + (1));
i__22750__auto___22986 = G__22987;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22984))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22984){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22984);
});})(g__22838__auto___22984))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__22838__auto___22984){
return (function (seq22945){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22945));
});})(g__22838__auto___22984))
;


var g__22838__auto___22988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__22838__auto___22988){
return (function cljs$spec$impl$gen$double(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22989 = arguments.length;
var i__22750__auto___22990 = (0);
while(true){
if((i__22750__auto___22990 < len__22749__auto___22989)){
args__22756__auto__.push((arguments[i__22750__auto___22990]));

var G__22991 = (i__22750__auto___22990 + (1));
i__22750__auto___22990 = G__22991;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22988))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22988){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22988);
});})(g__22838__auto___22988))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__22838__auto___22988){
return (function (seq22946){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22946));
});})(g__22838__auto___22988))
;


var g__22838__auto___22992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__22838__auto___22992){
return (function cljs$spec$impl$gen$int(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22993 = arguments.length;
var i__22750__auto___22994 = (0);
while(true){
if((i__22750__auto___22994 < len__22749__auto___22993)){
args__22756__auto__.push((arguments[i__22750__auto___22994]));

var G__22995 = (i__22750__auto___22994 + (1));
i__22750__auto___22994 = G__22995;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22992))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22992){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22992);
});})(g__22838__auto___22992))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__22838__auto___22992){
return (function (seq22947){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22947));
});})(g__22838__auto___22992))
;


var g__22838__auto___22996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__22838__auto___22996){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22756__auto__ = [];
var len__22749__auto___22997 = arguments.length;
var i__22750__auto___22998 = (0);
while(true){
if((i__22750__auto___22998 < len__22749__auto___22997)){
args__22756__auto__.push((arguments[i__22750__auto___22998]));

var G__22999 = (i__22750__auto___22998 + (1));
i__22750__auto___22998 = G__22999;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___22996))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___22996){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___22996);
});})(g__22838__auto___22996))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__22838__auto___22996){
return (function (seq22948){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22948));
});})(g__22838__auto___22996))
;


var g__22838__auto___23000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__22838__auto___23000){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23001 = arguments.length;
var i__22750__auto___23002 = (0);
while(true){
if((i__22750__auto___23002 < len__22749__auto___23001)){
args__22756__auto__.push((arguments[i__22750__auto___23002]));

var G__23003 = (i__22750__auto___23002 + (1));
i__22750__auto___23002 = G__23003;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23000))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23000){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23000);
});})(g__22838__auto___23000))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__22838__auto___23000){
return (function (seq22949){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22949));
});})(g__22838__auto___23000))
;


var g__22838__auto___23004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__22838__auto___23004){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23005 = arguments.length;
var i__22750__auto___23006 = (0);
while(true){
if((i__22750__auto___23006 < len__22749__auto___23005)){
args__22756__auto__.push((arguments[i__22750__auto___23006]));

var G__23007 = (i__22750__auto___23006 + (1));
i__22750__auto___23006 = G__23007;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23004))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23004){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23004);
});})(g__22838__auto___23004))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__22838__auto___23004){
return (function (seq22950){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22950));
});})(g__22838__auto___23004))
;


var g__22838__auto___23008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__22838__auto___23008){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23009 = arguments.length;
var i__22750__auto___23010 = (0);
while(true){
if((i__22750__auto___23010 < len__22749__auto___23009)){
args__22756__auto__.push((arguments[i__22750__auto___23010]));

var G__23011 = (i__22750__auto___23010 + (1));
i__22750__auto___23010 = G__23011;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23008))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23008){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23008);
});})(g__22838__auto___23008))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__22838__auto___23008){
return (function (seq22951){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22951));
});})(g__22838__auto___23008))
;


var g__22838__auto___23012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__22838__auto___23012){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23013 = arguments.length;
var i__22750__auto___23014 = (0);
while(true){
if((i__22750__auto___23014 < len__22749__auto___23013)){
args__22756__auto__.push((arguments[i__22750__auto___23014]));

var G__23015 = (i__22750__auto___23014 + (1));
i__22750__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23012))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23012){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23012);
});})(g__22838__auto___23012))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__22838__auto___23012){
return (function (seq22952){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22952));
});})(g__22838__auto___23012))
;


var g__22838__auto___23016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__22838__auto___23016){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23017 = arguments.length;
var i__22750__auto___23018 = (0);
while(true){
if((i__22750__auto___23018 < len__22749__auto___23017)){
args__22756__auto__.push((arguments[i__22750__auto___23018]));

var G__23019 = (i__22750__auto___23018 + (1));
i__22750__auto___23018 = G__23019;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23016))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23016){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23016);
});})(g__22838__auto___23016))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__22838__auto___23016){
return (function (seq22953){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22953));
});})(g__22838__auto___23016))
;


var g__22838__auto___23020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__22838__auto___23020){
return (function cljs$spec$impl$gen$string(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23021 = arguments.length;
var i__22750__auto___23022 = (0);
while(true){
if((i__22750__auto___23022 < len__22749__auto___23021)){
args__22756__auto__.push((arguments[i__22750__auto___23022]));

var G__23023 = (i__22750__auto___23022 + (1));
i__22750__auto___23022 = G__23023;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23020))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23020){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23020);
});})(g__22838__auto___23020))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__22838__auto___23020){
return (function (seq22954){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22954));
});})(g__22838__auto___23020))
;


var g__22838__auto___23024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__22838__auto___23024){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23025 = arguments.length;
var i__22750__auto___23026 = (0);
while(true){
if((i__22750__auto___23026 < len__22749__auto___23025)){
args__22756__auto__.push((arguments[i__22750__auto___23026]));

var G__23027 = (i__22750__auto___23026 + (1));
i__22750__auto___23026 = G__23027;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23024))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23024){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23024);
});})(g__22838__auto___23024))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__22838__auto___23024){
return (function (seq22955){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22955));
});})(g__22838__auto___23024))
;


var g__22838__auto___23028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__22838__auto___23028){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23029 = arguments.length;
var i__22750__auto___23030 = (0);
while(true){
if((i__22750__auto___23030 < len__22749__auto___23029)){
args__22756__auto__.push((arguments[i__22750__auto___23030]));

var G__23031 = (i__22750__auto___23030 + (1));
i__22750__auto___23030 = G__23031;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23028))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23028){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23028);
});})(g__22838__auto___23028))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__22838__auto___23028){
return (function (seq22956){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22956));
});})(g__22838__auto___23028))
;


var g__22838__auto___23032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__22838__auto___23032){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23033 = arguments.length;
var i__22750__auto___23034 = (0);
while(true){
if((i__22750__auto___23034 < len__22749__auto___23033)){
args__22756__auto__.push((arguments[i__22750__auto___23034]));

var G__23035 = (i__22750__auto___23034 + (1));
i__22750__auto___23034 = G__23035;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23032))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23032){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23032);
});})(g__22838__auto___23032))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__22838__auto___23032){
return (function (seq22957){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22957));
});})(g__22838__auto___23032))
;


var g__22838__auto___23036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__22838__auto___23036){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23037 = arguments.length;
var i__22750__auto___23038 = (0);
while(true){
if((i__22750__auto___23038 < len__22749__auto___23037)){
args__22756__auto__.push((arguments[i__22750__auto___23038]));

var G__23039 = (i__22750__auto___23038 + (1));
i__22750__auto___23038 = G__23039;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23036))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23036){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23036);
});})(g__22838__auto___23036))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__22838__auto___23036){
return (function (seq22958){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22958));
});})(g__22838__auto___23036))
;


var g__22838__auto___23040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__22838__auto___23040){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23041 = arguments.length;
var i__22750__auto___23042 = (0);
while(true){
if((i__22750__auto___23042 < len__22749__auto___23041)){
args__22756__auto__.push((arguments[i__22750__auto___23042]));

var G__23043 = (i__22750__auto___23042 + (1));
i__22750__auto___23042 = G__23043;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});})(g__22838__auto___23040))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22838__auto___23040){
return (function (args){
return cljs.core.deref.call(null,g__22838__auto___23040);
});})(g__22838__auto___23040))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__22838__auto___23040){
return (function (seq22959){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22959));
});})(g__22838__auto___23040))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22756__auto__ = [];
var len__22749__auto___23046 = arguments.length;
var i__22750__auto___23047 = (0);
while(true){
if((i__22750__auto___23047 < len__22749__auto___23046)){
args__22756__auto__.push((arguments[i__22750__auto___23047]));

var G__23048 = (i__22750__auto___23047 + (1));
i__22750__auto___23047 = G__23048;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__23044_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23044_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq23045){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23045));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map