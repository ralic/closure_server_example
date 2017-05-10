// Compiled by ClojureScript 1.9.521 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30794 = arguments.length;
var i__23459__auto___30795 = (0);
while(true){
if((i__23459__auto___30795 < len__23458__auto___30794)){
args__23465__auto__.push((arguments[i__23459__auto___30795]));

var G__30796 = (i__23459__auto___30795 + (1));
i__23459__auto___30795 = G__30796;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30793){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30793));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30798 = arguments.length;
var i__23459__auto___30799 = (0);
while(true){
if((i__23459__auto___30799 < len__23458__auto___30798)){
args__23465__auto__.push((arguments[i__23459__auto___30799]));

var G__30800 = (i__23459__auto___30799 + (1));
i__23459__auto___30799 = G__30800;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30797){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30797));
});

var g_QMARK__30801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_30802 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30801){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__30801))
,null));
var mkg_30803 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30801,g_30802){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__30801,g_30802))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30801,g_30802,mkg_30803){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30801).call(null,x);
});})(g_QMARK__30801,g_30802,mkg_30803))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30801,g_30802,mkg_30803){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30803).call(null,gfn);
});})(g_QMARK__30801,g_30802,mkg_30803))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30801,g_30802,mkg_30803){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30802).call(null,generator);
});})(g_QMARK__30801,g_30802,mkg_30803))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30765__auto___30823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__30765__auto___30823){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30824 = arguments.length;
var i__23459__auto___30825 = (0);
while(true){
if((i__23459__auto___30825 < len__23458__auto___30824)){
args__23465__auto__.push((arguments[i__23459__auto___30825]));

var G__30826 = (i__23459__auto___30825 + (1));
i__23459__auto___30825 = G__30826;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30823))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30823),args);
});})(g__30765__auto___30823))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__30765__auto___30823){
return (function (seq30804){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30804));
});})(g__30765__auto___30823))
;


var g__30765__auto___30827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__30765__auto___30827){
return (function cljs$spec$impl$gen$list(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30828 = arguments.length;
var i__23459__auto___30829 = (0);
while(true){
if((i__23459__auto___30829 < len__23458__auto___30828)){
args__23465__auto__.push((arguments[i__23459__auto___30829]));

var G__30830 = (i__23459__auto___30829 + (1));
i__23459__auto___30829 = G__30830;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30827))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30827),args);
});})(g__30765__auto___30827))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__30765__auto___30827){
return (function (seq30805){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30805));
});})(g__30765__auto___30827))
;


var g__30765__auto___30831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__30765__auto___30831){
return (function cljs$spec$impl$gen$map(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30832 = arguments.length;
var i__23459__auto___30833 = (0);
while(true){
if((i__23459__auto___30833 < len__23458__auto___30832)){
args__23465__auto__.push((arguments[i__23459__auto___30833]));

var G__30834 = (i__23459__auto___30833 + (1));
i__23459__auto___30833 = G__30834;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30831))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30831),args);
});})(g__30765__auto___30831))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__30765__auto___30831){
return (function (seq30806){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30806));
});})(g__30765__auto___30831))
;


var g__30765__auto___30835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__30765__auto___30835){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30836 = arguments.length;
var i__23459__auto___30837 = (0);
while(true){
if((i__23459__auto___30837 < len__23458__auto___30836)){
args__23465__auto__.push((arguments[i__23459__auto___30837]));

var G__30838 = (i__23459__auto___30837 + (1));
i__23459__auto___30837 = G__30838;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30835))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30835),args);
});})(g__30765__auto___30835))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__30765__auto___30835){
return (function (seq30807){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30807));
});})(g__30765__auto___30835))
;


var g__30765__auto___30839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__30765__auto___30839){
return (function cljs$spec$impl$gen$set(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30840 = arguments.length;
var i__23459__auto___30841 = (0);
while(true){
if((i__23459__auto___30841 < len__23458__auto___30840)){
args__23465__auto__.push((arguments[i__23459__auto___30841]));

var G__30842 = (i__23459__auto___30841 + (1));
i__23459__auto___30841 = G__30842;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30839))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30839),args);
});})(g__30765__auto___30839))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__30765__auto___30839){
return (function (seq30808){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30808));
});})(g__30765__auto___30839))
;


var g__30765__auto___30843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__30765__auto___30843){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30844 = arguments.length;
var i__23459__auto___30845 = (0);
while(true){
if((i__23459__auto___30845 < len__23458__auto___30844)){
args__23465__auto__.push((arguments[i__23459__auto___30845]));

var G__30846 = (i__23459__auto___30845 + (1));
i__23459__auto___30845 = G__30846;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30843))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30843),args);
});})(g__30765__auto___30843))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__30765__auto___30843){
return (function (seq30809){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30809));
});})(g__30765__auto___30843))
;


var g__30765__auto___30847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__30765__auto___30847){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30848 = arguments.length;
var i__23459__auto___30849 = (0);
while(true){
if((i__23459__auto___30849 < len__23458__auto___30848)){
args__23465__auto__.push((arguments[i__23459__auto___30849]));

var G__30850 = (i__23459__auto___30849 + (1));
i__23459__auto___30849 = G__30850;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30847))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30847),args);
});})(g__30765__auto___30847))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__30765__auto___30847){
return (function (seq30810){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30810));
});})(g__30765__auto___30847))
;


var g__30765__auto___30851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__30765__auto___30851){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30852 = arguments.length;
var i__23459__auto___30853 = (0);
while(true){
if((i__23459__auto___30853 < len__23458__auto___30852)){
args__23465__auto__.push((arguments[i__23459__auto___30853]));

var G__30854 = (i__23459__auto___30853 + (1));
i__23459__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30851))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30851),args);
});})(g__30765__auto___30851))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__30765__auto___30851){
return (function (seq30811){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30811));
});})(g__30765__auto___30851))
;


var g__30765__auto___30855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__30765__auto___30855){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30856 = arguments.length;
var i__23459__auto___30857 = (0);
while(true){
if((i__23459__auto___30857 < len__23458__auto___30856)){
args__23465__auto__.push((arguments[i__23459__auto___30857]));

var G__30858 = (i__23459__auto___30857 + (1));
i__23459__auto___30857 = G__30858;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30855))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30855),args);
});})(g__30765__auto___30855))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__30765__auto___30855){
return (function (seq30812){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30812));
});})(g__30765__auto___30855))
;


var g__30765__auto___30859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__30765__auto___30859){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30860 = arguments.length;
var i__23459__auto___30861 = (0);
while(true){
if((i__23459__auto___30861 < len__23458__auto___30860)){
args__23465__auto__.push((arguments[i__23459__auto___30861]));

var G__30862 = (i__23459__auto___30861 + (1));
i__23459__auto___30861 = G__30862;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30859))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30859),args);
});})(g__30765__auto___30859))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__30765__auto___30859){
return (function (seq30813){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30813));
});})(g__30765__auto___30859))
;


var g__30765__auto___30863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__30765__auto___30863){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30864 = arguments.length;
var i__23459__auto___30865 = (0);
while(true){
if((i__23459__auto___30865 < len__23458__auto___30864)){
args__23465__auto__.push((arguments[i__23459__auto___30865]));

var G__30866 = (i__23459__auto___30865 + (1));
i__23459__auto___30865 = G__30866;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30863))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30863),args);
});})(g__30765__auto___30863))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__30765__auto___30863){
return (function (seq30814){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30814));
});})(g__30765__auto___30863))
;


var g__30765__auto___30867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__30765__auto___30867){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30868 = arguments.length;
var i__23459__auto___30869 = (0);
while(true){
if((i__23459__auto___30869 < len__23458__auto___30868)){
args__23465__auto__.push((arguments[i__23459__auto___30869]));

var G__30870 = (i__23459__auto___30869 + (1));
i__23459__auto___30869 = G__30870;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30867))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30867),args);
});})(g__30765__auto___30867))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__30765__auto___30867){
return (function (seq30815){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30815));
});})(g__30765__auto___30867))
;


var g__30765__auto___30871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__30765__auto___30871){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30872 = arguments.length;
var i__23459__auto___30873 = (0);
while(true){
if((i__23459__auto___30873 < len__23458__auto___30872)){
args__23465__auto__.push((arguments[i__23459__auto___30873]));

var G__30874 = (i__23459__auto___30873 + (1));
i__23459__auto___30873 = G__30874;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30871))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30871),args);
});})(g__30765__auto___30871))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__30765__auto___30871){
return (function (seq30816){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30816));
});})(g__30765__auto___30871))
;


var g__30765__auto___30875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__30765__auto___30875){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30876 = arguments.length;
var i__23459__auto___30877 = (0);
while(true){
if((i__23459__auto___30877 < len__23458__auto___30876)){
args__23465__auto__.push((arguments[i__23459__auto___30877]));

var G__30878 = (i__23459__auto___30877 + (1));
i__23459__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30875))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30875),args);
});})(g__30765__auto___30875))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__30765__auto___30875){
return (function (seq30817){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30817));
});})(g__30765__auto___30875))
;


var g__30765__auto___30879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__30765__auto___30879){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30880 = arguments.length;
var i__23459__auto___30881 = (0);
while(true){
if((i__23459__auto___30881 < len__23458__auto___30880)){
args__23465__auto__.push((arguments[i__23459__auto___30881]));

var G__30882 = (i__23459__auto___30881 + (1));
i__23459__auto___30881 = G__30882;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30879))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30879),args);
});})(g__30765__auto___30879))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__30765__auto___30879){
return (function (seq30818){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30818));
});})(g__30765__auto___30879))
;


var g__30765__auto___30883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__30765__auto___30883){
return (function cljs$spec$impl$gen$return(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30884 = arguments.length;
var i__23459__auto___30885 = (0);
while(true){
if((i__23459__auto___30885 < len__23458__auto___30884)){
args__23465__auto__.push((arguments[i__23459__auto___30885]));

var G__30886 = (i__23459__auto___30885 + (1));
i__23459__auto___30885 = G__30886;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30883))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30883),args);
});})(g__30765__auto___30883))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__30765__auto___30883){
return (function (seq30819){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30819));
});})(g__30765__auto___30883))
;


var g__30765__auto___30887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__30765__auto___30887){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30888 = arguments.length;
var i__23459__auto___30889 = (0);
while(true){
if((i__23459__auto___30889 < len__23458__auto___30888)){
args__23465__auto__.push((arguments[i__23459__auto___30889]));

var G__30890 = (i__23459__auto___30889 + (1));
i__23459__auto___30889 = G__30890;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30887))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30887),args);
});})(g__30765__auto___30887))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30765__auto___30887){
return (function (seq30820){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30820));
});})(g__30765__auto___30887))
;


var g__30765__auto___30891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__30765__auto___30891){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30892 = arguments.length;
var i__23459__auto___30893 = (0);
while(true){
if((i__23459__auto___30893 < len__23458__auto___30892)){
args__23465__auto__.push((arguments[i__23459__auto___30893]));

var G__30894 = (i__23459__auto___30893 + (1));
i__23459__auto___30893 = G__30894;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30891))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30891),args);
});})(g__30765__auto___30891))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__30765__auto___30891){
return (function (seq30821){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30821));
});})(g__30765__auto___30891))
;


var g__30765__auto___30895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__30765__auto___30895){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30896 = arguments.length;
var i__23459__auto___30897 = (0);
while(true){
if((i__23459__auto___30897 < len__23458__auto___30896)){
args__23465__auto__.push((arguments[i__23459__auto___30897]));

var G__30898 = (i__23459__auto___30897 + (1));
i__23459__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30765__auto___30895))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30765__auto___30895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30765__auto___30895),args);
});})(g__30765__auto___30895))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__30765__auto___30895){
return (function (seq30822){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30822));
});})(g__30765__auto___30895))
;

var g__30778__auto___30920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__30778__auto___30920){
return (function cljs$spec$impl$gen$any(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30921 = arguments.length;
var i__23459__auto___30922 = (0);
while(true){
if((i__23459__auto___30922 < len__23458__auto___30921)){
args__23465__auto__.push((arguments[i__23459__auto___30922]));

var G__30923 = (i__23459__auto___30922 + (1));
i__23459__auto___30922 = G__30923;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30920))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30920){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30920);
});})(g__30778__auto___30920))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__30778__auto___30920){
return (function (seq30899){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30899));
});})(g__30778__auto___30920))
;


var g__30778__auto___30924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__30778__auto___30924){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30925 = arguments.length;
var i__23459__auto___30926 = (0);
while(true){
if((i__23459__auto___30926 < len__23458__auto___30925)){
args__23465__auto__.push((arguments[i__23459__auto___30926]));

var G__30927 = (i__23459__auto___30926 + (1));
i__23459__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30924))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30924){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30924);
});})(g__30778__auto___30924))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__30778__auto___30924){
return (function (seq30900){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30900));
});})(g__30778__auto___30924))
;


var g__30778__auto___30928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__30778__auto___30928){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30929 = arguments.length;
var i__23459__auto___30930 = (0);
while(true){
if((i__23459__auto___30930 < len__23458__auto___30929)){
args__23465__auto__.push((arguments[i__23459__auto___30930]));

var G__30931 = (i__23459__auto___30930 + (1));
i__23459__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30928))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30928){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30928);
});})(g__30778__auto___30928))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__30778__auto___30928){
return (function (seq30901){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30901));
});})(g__30778__auto___30928))
;


var g__30778__auto___30932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__30778__auto___30932){
return (function cljs$spec$impl$gen$char(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30933 = arguments.length;
var i__23459__auto___30934 = (0);
while(true){
if((i__23459__auto___30934 < len__23458__auto___30933)){
args__23465__auto__.push((arguments[i__23459__auto___30934]));

var G__30935 = (i__23459__auto___30934 + (1));
i__23459__auto___30934 = G__30935;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30932))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30932){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30932);
});})(g__30778__auto___30932))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__30778__auto___30932){
return (function (seq30902){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30902));
});})(g__30778__auto___30932))
;


var g__30778__auto___30936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__30778__auto___30936){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30937 = arguments.length;
var i__23459__auto___30938 = (0);
while(true){
if((i__23459__auto___30938 < len__23458__auto___30937)){
args__23465__auto__.push((arguments[i__23459__auto___30938]));

var G__30939 = (i__23459__auto___30938 + (1));
i__23459__auto___30938 = G__30939;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30936))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30936){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30936);
});})(g__30778__auto___30936))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__30778__auto___30936){
return (function (seq30903){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30903));
});})(g__30778__auto___30936))
;


var g__30778__auto___30940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__30778__auto___30940){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30941 = arguments.length;
var i__23459__auto___30942 = (0);
while(true){
if((i__23459__auto___30942 < len__23458__auto___30941)){
args__23465__auto__.push((arguments[i__23459__auto___30942]));

var G__30943 = (i__23459__auto___30942 + (1));
i__23459__auto___30942 = G__30943;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30940))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30940){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30940);
});})(g__30778__auto___30940))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__30778__auto___30940){
return (function (seq30904){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30904));
});})(g__30778__auto___30940))
;


var g__30778__auto___30944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__30778__auto___30944){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30945 = arguments.length;
var i__23459__auto___30946 = (0);
while(true){
if((i__23459__auto___30946 < len__23458__auto___30945)){
args__23465__auto__.push((arguments[i__23459__auto___30946]));

var G__30947 = (i__23459__auto___30946 + (1));
i__23459__auto___30946 = G__30947;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30944))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30944){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30944);
});})(g__30778__auto___30944))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__30778__auto___30944){
return (function (seq30905){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30905));
});})(g__30778__auto___30944))
;


var g__30778__auto___30948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__30778__auto___30948){
return (function cljs$spec$impl$gen$double(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30949 = arguments.length;
var i__23459__auto___30950 = (0);
while(true){
if((i__23459__auto___30950 < len__23458__auto___30949)){
args__23465__auto__.push((arguments[i__23459__auto___30950]));

var G__30951 = (i__23459__auto___30950 + (1));
i__23459__auto___30950 = G__30951;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30948))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30948){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30948);
});})(g__30778__auto___30948))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__30778__auto___30948){
return (function (seq30906){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30906));
});})(g__30778__auto___30948))
;


var g__30778__auto___30952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__30778__auto___30952){
return (function cljs$spec$impl$gen$int(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30953 = arguments.length;
var i__23459__auto___30954 = (0);
while(true){
if((i__23459__auto___30954 < len__23458__auto___30953)){
args__23465__auto__.push((arguments[i__23459__auto___30954]));

var G__30955 = (i__23459__auto___30954 + (1));
i__23459__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30952))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30952){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30952);
});})(g__30778__auto___30952))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__30778__auto___30952){
return (function (seq30907){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30907));
});})(g__30778__auto___30952))
;


var g__30778__auto___30956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__30778__auto___30956){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30957 = arguments.length;
var i__23459__auto___30958 = (0);
while(true){
if((i__23459__auto___30958 < len__23458__auto___30957)){
args__23465__auto__.push((arguments[i__23459__auto___30958]));

var G__30959 = (i__23459__auto___30958 + (1));
i__23459__auto___30958 = G__30959;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30956))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30956){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30956);
});})(g__30778__auto___30956))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__30778__auto___30956){
return (function (seq30908){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30908));
});})(g__30778__auto___30956))
;


var g__30778__auto___30960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__30778__auto___30960){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30961 = arguments.length;
var i__23459__auto___30962 = (0);
while(true){
if((i__23459__auto___30962 < len__23458__auto___30961)){
args__23465__auto__.push((arguments[i__23459__auto___30962]));

var G__30963 = (i__23459__auto___30962 + (1));
i__23459__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30960))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30960){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30960);
});})(g__30778__auto___30960))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__30778__auto___30960){
return (function (seq30909){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30909));
});})(g__30778__auto___30960))
;


var g__30778__auto___30964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__30778__auto___30964){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30965 = arguments.length;
var i__23459__auto___30966 = (0);
while(true){
if((i__23459__auto___30966 < len__23458__auto___30965)){
args__23465__auto__.push((arguments[i__23459__auto___30966]));

var G__30967 = (i__23459__auto___30966 + (1));
i__23459__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30964))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30964){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30964);
});})(g__30778__auto___30964))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__30778__auto___30964){
return (function (seq30910){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30910));
});})(g__30778__auto___30964))
;


var g__30778__auto___30968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__30778__auto___30968){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30969 = arguments.length;
var i__23459__auto___30970 = (0);
while(true){
if((i__23459__auto___30970 < len__23458__auto___30969)){
args__23465__auto__.push((arguments[i__23459__auto___30970]));

var G__30971 = (i__23459__auto___30970 + (1));
i__23459__auto___30970 = G__30971;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30968))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30968){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30968);
});})(g__30778__auto___30968))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__30778__auto___30968){
return (function (seq30911){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30911));
});})(g__30778__auto___30968))
;


var g__30778__auto___30972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__30778__auto___30972){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30973 = arguments.length;
var i__23459__auto___30974 = (0);
while(true){
if((i__23459__auto___30974 < len__23458__auto___30973)){
args__23465__auto__.push((arguments[i__23459__auto___30974]));

var G__30975 = (i__23459__auto___30974 + (1));
i__23459__auto___30974 = G__30975;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30972))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30972){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30972);
});})(g__30778__auto___30972))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__30778__auto___30972){
return (function (seq30912){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30912));
});})(g__30778__auto___30972))
;


var g__30778__auto___30976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__30778__auto___30976){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30977 = arguments.length;
var i__23459__auto___30978 = (0);
while(true){
if((i__23459__auto___30978 < len__23458__auto___30977)){
args__23465__auto__.push((arguments[i__23459__auto___30978]));

var G__30979 = (i__23459__auto___30978 + (1));
i__23459__auto___30978 = G__30979;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30976))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30976){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30976);
});})(g__30778__auto___30976))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__30778__auto___30976){
return (function (seq30913){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30913));
});})(g__30778__auto___30976))
;


var g__30778__auto___30980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__30778__auto___30980){
return (function cljs$spec$impl$gen$string(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30981 = arguments.length;
var i__23459__auto___30982 = (0);
while(true){
if((i__23459__auto___30982 < len__23458__auto___30981)){
args__23465__auto__.push((arguments[i__23459__auto___30982]));

var G__30983 = (i__23459__auto___30982 + (1));
i__23459__auto___30982 = G__30983;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30980))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30980){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30980);
});})(g__30778__auto___30980))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__30778__auto___30980){
return (function (seq30914){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30914));
});})(g__30778__auto___30980))
;


var g__30778__auto___30984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__30778__auto___30984){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30985 = arguments.length;
var i__23459__auto___30986 = (0);
while(true){
if((i__23459__auto___30986 < len__23458__auto___30985)){
args__23465__auto__.push((arguments[i__23459__auto___30986]));

var G__30987 = (i__23459__auto___30986 + (1));
i__23459__auto___30986 = G__30987;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30984))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30984){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30984);
});})(g__30778__auto___30984))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__30778__auto___30984){
return (function (seq30915){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30915));
});})(g__30778__auto___30984))
;


var g__30778__auto___30988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__30778__auto___30988){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30989 = arguments.length;
var i__23459__auto___30990 = (0);
while(true){
if((i__23459__auto___30990 < len__23458__auto___30989)){
args__23465__auto__.push((arguments[i__23459__auto___30990]));

var G__30991 = (i__23459__auto___30990 + (1));
i__23459__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30988))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30988){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30988);
});})(g__30778__auto___30988))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__30778__auto___30988){
return (function (seq30916){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30916));
});})(g__30778__auto___30988))
;


var g__30778__auto___30992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__30778__auto___30992){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30993 = arguments.length;
var i__23459__auto___30994 = (0);
while(true){
if((i__23459__auto___30994 < len__23458__auto___30993)){
args__23465__auto__.push((arguments[i__23459__auto___30994]));

var G__30995 = (i__23459__auto___30994 + (1));
i__23459__auto___30994 = G__30995;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30992))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30992){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30992);
});})(g__30778__auto___30992))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__30778__auto___30992){
return (function (seq30917){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30917));
});})(g__30778__auto___30992))
;


var g__30778__auto___30996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__30778__auto___30996){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23465__auto__ = [];
var len__23458__auto___30997 = arguments.length;
var i__23459__auto___30998 = (0);
while(true){
if((i__23459__auto___30998 < len__23458__auto___30997)){
args__23465__auto__.push((arguments[i__23459__auto___30998]));

var G__30999 = (i__23459__auto___30998 + (1));
i__23459__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___30996))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___30996){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___30996);
});})(g__30778__auto___30996))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__30778__auto___30996){
return (function (seq30918){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30918));
});})(g__30778__auto___30996))
;


var g__30778__auto___31000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__30778__auto___31000){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23465__auto__ = [];
var len__23458__auto___31001 = arguments.length;
var i__23459__auto___31002 = (0);
while(true){
if((i__23459__auto___31002 < len__23458__auto___31001)){
args__23465__auto__.push((arguments[i__23459__auto___31002]));

var G__31003 = (i__23459__auto___31002 + (1));
i__23459__auto___31002 = G__31003;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});})(g__30778__auto___31000))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30778__auto___31000){
return (function (args){
return cljs.core.deref.call(null,g__30778__auto___31000);
});})(g__30778__auto___31000))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__30778__auto___31000){
return (function (seq30919){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30919));
});})(g__30778__auto___31000))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23465__auto__ = [];
var len__23458__auto___31006 = arguments.length;
var i__23459__auto___31007 = (0);
while(true){
if((i__23459__auto___31007 < len__23458__auto___31006)){
args__23465__auto__.push((arguments[i__23459__auto___31007]));

var G__31008 = (i__23459__auto___31007 + (1));
i__23459__auto___31007 = G__31008;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31004_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31004_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31005){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31005));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31009_SHARP_){
return (new Date(p1__31009_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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