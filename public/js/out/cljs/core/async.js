// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25312 = [];
var len__23458__auto___25318 = arguments.length;
var i__23459__auto___25319 = (0);
while(true){
if((i__23459__auto___25319 < len__23458__auto___25318)){
args25312.push((arguments[i__23459__auto___25319]));

var G__25320 = (i__23459__auto___25319 + (1));
i__23459__auto___25319 = G__25320;
continue;
} else {
}
break;
}

var G__25314 = args25312.length;
switch (G__25314) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25312.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25315 = (function (f,blockable,meta25316){
this.f = f;
this.blockable = blockable;
this.meta25316 = meta25316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25317,meta25316__$1){
var self__ = this;
var _25317__$1 = this;
return (new cljs.core.async.t_cljs$core$async25315(self__.f,self__.blockable,meta25316__$1));
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25317){
var self__ = this;
var _25317__$1 = this;
return self__.meta25316;
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25316","meta25316",-2027142564,null)], null);
});

cljs.core.async.t_cljs$core$async25315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25315";

cljs.core.async.t_cljs$core$async25315.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async25315");
});

cljs.core.async.__GT_t_cljs$core$async25315 = (function cljs$core$async$__GT_t_cljs$core$async25315(f__$1,blockable__$1,meta25316){
return (new cljs.core.async.t_cljs$core$async25315(f__$1,blockable__$1,meta25316));
});

}

return (new cljs.core.async.t_cljs$core$async25315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25324 = [];
var len__23458__auto___25327 = arguments.length;
var i__23459__auto___25328 = (0);
while(true){
if((i__23459__auto___25328 < len__23458__auto___25327)){
args25324.push((arguments[i__23459__auto___25328]));

var G__25329 = (i__23459__auto___25328 + (1));
i__23459__auto___25328 = G__25329;
continue;
} else {
}
break;
}

var G__25326 = args25324.length;
switch (G__25326) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25324.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25331 = [];
var len__23458__auto___25334 = arguments.length;
var i__23459__auto___25335 = (0);
while(true){
if((i__23459__auto___25335 < len__23458__auto___25334)){
args25331.push((arguments[i__23459__auto___25335]));

var G__25336 = (i__23459__auto___25335 + (1));
i__23459__auto___25335 = G__25336;
continue;
} else {
}
break;
}

var G__25333 = args25331.length;
switch (G__25333) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25331.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25338 = [];
var len__23458__auto___25341 = arguments.length;
var i__23459__auto___25342 = (0);
while(true){
if((i__23459__auto___25342 < len__23458__auto___25341)){
args25338.push((arguments[i__23459__auto___25342]));

var G__25343 = (i__23459__auto___25342 + (1));
i__23459__auto___25342 = G__25343;
continue;
} else {
}
break;
}

var G__25340 = args25338.length;
switch (G__25340) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25338.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25345 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25345);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25345,ret){
return (function (){
return fn1.call(null,val_25345);
});})(val_25345,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25346 = [];
var len__23458__auto___25349 = arguments.length;
var i__23459__auto___25350 = (0);
while(true){
if((i__23459__auto___25350 < len__23458__auto___25349)){
args25346.push((arguments[i__23459__auto___25350]));

var G__25351 = (i__23459__auto___25350 + (1));
i__23459__auto___25350 = G__25351;
continue;
} else {
}
break;
}

var G__25348 = args25346.length;
switch (G__25348) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25346.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__23268__auto___25353 = n;
var x_25354 = (0);
while(true){
if((x_25354 < n__23268__auto___25353)){
(a[x_25354] = (0));

var G__25355 = (x_25354 + (1));
x_25354 = G__25355;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25356 = (i + (1));
i = G__25356;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25360 = (function (flag,meta25361){
this.flag = flag;
this.meta25361 = meta25361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25362,meta25361__$1){
var self__ = this;
var _25362__$1 = this;
return (new cljs.core.async.t_cljs$core$async25360(self__.flag,meta25361__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25362){
var self__ = this;
var _25362__$1 = this;
return self__.meta25361;
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25361","meta25361",528331612,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25360";

cljs.core.async.t_cljs$core$async25360.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async25360");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25360 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25360(flag__$1,meta25361){
return (new cljs.core.async.t_cljs$core$async25360(flag__$1,meta25361));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25360(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25366 = (function (flag,cb,meta25367){
this.flag = flag;
this.cb = cb;
this.meta25367 = meta25367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25368,meta25367__$1){
var self__ = this;
var _25368__$1 = this;
return (new cljs.core.async.t_cljs$core$async25366(self__.flag,self__.cb,meta25367__$1));
});

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25368){
var self__ = this;
var _25368__$1 = this;
return self__.meta25367;
});

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25367","meta25367",1093706797,null)], null);
});

cljs.core.async.t_cljs$core$async25366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25366";

cljs.core.async.t_cljs$core$async25366.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async25366");
});

cljs.core.async.__GT_t_cljs$core$async25366 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25366(flag__$1,cb__$1,meta25367){
return (new cljs.core.async.t_cljs$core$async25366(flag__$1,cb__$1,meta25367));
});

}

return (new cljs.core.async.t_cljs$core$async25366(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25369_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25369_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25370_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22345__auto__ = wport;
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25371 = (i + (1));
i = G__25371;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22345__auto__ = ret;
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22333__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22333__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22333__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23465__auto__ = [];
var len__23458__auto___25377 = arguments.length;
var i__23459__auto___25378 = (0);
while(true){
if((i__23459__auto___25378 < len__23458__auto___25377)){
args__23465__auto__.push((arguments[i__23459__auto___25378]));

var G__25379 = (i__23459__auto___25378 + (1));
i__23459__auto___25378 = G__25379;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((1) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23466__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25374){
var map__25375 = p__25374;
var map__25375__$1 = ((((!((map__25375 == null)))?((((map__25375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25375):map__25375);
var opts = map__25375__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25372){
var G__25373 = cljs.core.first.call(null,seq25372);
var seq25372__$1 = cljs.core.next.call(null,seq25372);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25373,seq25372__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25380 = [];
var len__23458__auto___25430 = arguments.length;
var i__23459__auto___25431 = (0);
while(true){
if((i__23459__auto___25431 < len__23458__auto___25430)){
args25380.push((arguments[i__23459__auto___25431]));

var G__25432 = (i__23459__auto___25431 + (1));
i__23459__auto___25431 = G__25432;
continue;
} else {
}
break;
}

var G__25382 = args25380.length;
switch (G__25382) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25380.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25267__auto___25434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___25434){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___25434){
return (function (state_25406){
var state_val_25407 = (state_25406[(1)]);
if((state_val_25407 === (7))){
var inst_25402 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25408_25435 = state_25406__$1;
(statearr_25408_25435[(2)] = inst_25402);

(statearr_25408_25435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (1))){
var state_25406__$1 = state_25406;
var statearr_25409_25436 = state_25406__$1;
(statearr_25409_25436[(2)] = null);

(statearr_25409_25436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (4))){
var inst_25385 = (state_25406[(7)]);
var inst_25385__$1 = (state_25406[(2)]);
var inst_25386 = (inst_25385__$1 == null);
var state_25406__$1 = (function (){var statearr_25410 = state_25406;
(statearr_25410[(7)] = inst_25385__$1);

return statearr_25410;
})();
if(cljs.core.truth_(inst_25386)){
var statearr_25411_25437 = state_25406__$1;
(statearr_25411_25437[(1)] = (5));

} else {
var statearr_25412_25438 = state_25406__$1;
(statearr_25412_25438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (13))){
var state_25406__$1 = state_25406;
var statearr_25413_25439 = state_25406__$1;
(statearr_25413_25439[(2)] = null);

(statearr_25413_25439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (6))){
var inst_25385 = (state_25406[(7)]);
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25406__$1,(11),to,inst_25385);
} else {
if((state_val_25407 === (3))){
var inst_25404 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25406__$1,inst_25404);
} else {
if((state_val_25407 === (12))){
var state_25406__$1 = state_25406;
var statearr_25414_25440 = state_25406__$1;
(statearr_25414_25440[(2)] = null);

(statearr_25414_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (2))){
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25406__$1,(4),from);
} else {
if((state_val_25407 === (11))){
var inst_25395 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
if(cljs.core.truth_(inst_25395)){
var statearr_25415_25441 = state_25406__$1;
(statearr_25415_25441[(1)] = (12));

} else {
var statearr_25416_25442 = state_25406__$1;
(statearr_25416_25442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (9))){
var state_25406__$1 = state_25406;
var statearr_25417_25443 = state_25406__$1;
(statearr_25417_25443[(2)] = null);

(statearr_25417_25443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (5))){
var state_25406__$1 = state_25406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25418_25444 = state_25406__$1;
(statearr_25418_25444[(1)] = (8));

} else {
var statearr_25419_25445 = state_25406__$1;
(statearr_25419_25445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (14))){
var inst_25400 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25420_25446 = state_25406__$1;
(statearr_25420_25446[(2)] = inst_25400);

(statearr_25420_25446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (10))){
var inst_25392 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25421_25447 = state_25406__$1;
(statearr_25421_25447[(2)] = inst_25392);

(statearr_25421_25447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (8))){
var inst_25389 = cljs.core.async.close_BANG_.call(null,to);
var state_25406__$1 = state_25406;
var statearr_25422_25448 = state_25406__$1;
(statearr_25422_25448[(2)] = inst_25389);

(statearr_25422_25448[(1)] = (10));


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
});})(c__25267__auto___25434))
;
return ((function (switch__25155__auto__,c__25267__auto___25434){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_25426 = [null,null,null,null,null,null,null,null];
(statearr_25426[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_25426[(1)] = (1));

return statearr_25426;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_25406){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25427){if((e25427 instanceof Object)){
var ex__25159__auto__ = e25427;
var statearr_25428_25449 = state_25406;
(statearr_25428_25449[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25450 = state_25406;
state_25406 = G__25450;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_25406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_25406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___25434))
})();
var state__25269__auto__ = (function (){var statearr_25429 = f__25268__auto__.call(null);
(statearr_25429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25434);

return statearr_25429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___25434))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25638){
var vec__25639 = p__25638;
var v = cljs.core.nth.call(null,vec__25639,(0),null);
var p = cljs.core.nth.call(null,vec__25639,(1),null);
var job = vec__25639;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25267__auto___25825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results){
return (function (state_25646){
var state_val_25647 = (state_25646[(1)]);
if((state_val_25647 === (1))){
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25646__$1,(2),res,v);
} else {
if((state_val_25647 === (2))){
var inst_25643 = (state_25646[(2)]);
var inst_25644 = cljs.core.async.close_BANG_.call(null,res);
var state_25646__$1 = (function (){var statearr_25648 = state_25646;
(statearr_25648[(7)] = inst_25643);

return statearr_25648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25646__$1,inst_25644);
} else {
return null;
}
}
});})(c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results))
;
return ((function (switch__25155__auto__,c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_25652 = [null,null,null,null,null,null,null,null];
(statearr_25652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__);

(statearr_25652[(1)] = (1));

return statearr_25652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1 = (function (state_25646){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25653){if((e25653 instanceof Object)){
var ex__25159__auto__ = e25653;
var statearr_25654_25826 = state_25646;
(statearr_25654_25826[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25827 = state_25646;
state_25646 = G__25827;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = function(state_25646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1.call(this,state_25646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results))
})();
var state__25269__auto__ = (function (){var statearr_25655 = f__25268__auto__.call(null);
(statearr_25655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25825);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___25825,res,vec__25639,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25656){
var vec__25657 = p__25656;
var v = cljs.core.nth.call(null,vec__25657,(0),null);
var p = cljs.core.nth.call(null,vec__25657,(1),null);
var job = vec__25657;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__23268__auto___25828 = n;
var __25829 = (0);
while(true){
if((__25829 < n__23268__auto___25828)){
var G__25660_25830 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25660_25830) {
case "compute":
var c__25267__auto___25832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25829,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (__25829,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function (state_25673){
var state_val_25674 = (state_25673[(1)]);
if((state_val_25674 === (1))){
var state_25673__$1 = state_25673;
var statearr_25675_25833 = state_25673__$1;
(statearr_25675_25833[(2)] = null);

(statearr_25675_25833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25674 === (2))){
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25673__$1,(4),jobs);
} else {
if((state_val_25674 === (3))){
var inst_25671 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25673__$1,inst_25671);
} else {
if((state_val_25674 === (4))){
var inst_25663 = (state_25673[(2)]);
var inst_25664 = process.call(null,inst_25663);
var state_25673__$1 = state_25673;
if(cljs.core.truth_(inst_25664)){
var statearr_25676_25834 = state_25673__$1;
(statearr_25676_25834[(1)] = (5));

} else {
var statearr_25677_25835 = state_25673__$1;
(statearr_25677_25835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25674 === (5))){
var state_25673__$1 = state_25673;
var statearr_25678_25836 = state_25673__$1;
(statearr_25678_25836[(2)] = null);

(statearr_25678_25836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25674 === (6))){
var state_25673__$1 = state_25673;
var statearr_25679_25837 = state_25673__$1;
(statearr_25679_25837[(2)] = null);

(statearr_25679_25837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25674 === (7))){
var inst_25669 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25680_25838 = state_25673__$1;
(statearr_25680_25838[(2)] = inst_25669);

(statearr_25680_25838[(1)] = (3));


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
});})(__25829,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
;
return ((function (__25829,switch__25155__auto__,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_25684 = [null,null,null,null,null,null,null];
(statearr_25684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__);

(statearr_25684[(1)] = (1));

return statearr_25684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1 = (function (state_25673){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25685){if((e25685 instanceof Object)){
var ex__25159__auto__ = e25685;
var statearr_25686_25839 = state_25673;
(statearr_25686_25839[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25673;
state_25673 = G__25840;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = function(state_25673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1.call(this,state_25673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__;
})()
;})(__25829,switch__25155__auto__,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
})();
var state__25269__auto__ = (function (){var statearr_25687 = f__25268__auto__.call(null);
(statearr_25687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25832);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(__25829,c__25267__auto___25832,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
);


break;
case "async":
var c__25267__auto___25841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25829,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (__25829,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function (state_25700){
var state_val_25701 = (state_25700[(1)]);
if((state_val_25701 === (1))){
var state_25700__$1 = state_25700;
var statearr_25702_25842 = state_25700__$1;
(statearr_25702_25842[(2)] = null);

(statearr_25702_25842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (2))){
var state_25700__$1 = state_25700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25700__$1,(4),jobs);
} else {
if((state_val_25701 === (3))){
var inst_25698 = (state_25700[(2)]);
var state_25700__$1 = state_25700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25700__$1,inst_25698);
} else {
if((state_val_25701 === (4))){
var inst_25690 = (state_25700[(2)]);
var inst_25691 = async.call(null,inst_25690);
var state_25700__$1 = state_25700;
if(cljs.core.truth_(inst_25691)){
var statearr_25703_25843 = state_25700__$1;
(statearr_25703_25843[(1)] = (5));

} else {
var statearr_25704_25844 = state_25700__$1;
(statearr_25704_25844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (5))){
var state_25700__$1 = state_25700;
var statearr_25705_25845 = state_25700__$1;
(statearr_25705_25845[(2)] = null);

(statearr_25705_25845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (6))){
var state_25700__$1 = state_25700;
var statearr_25706_25846 = state_25700__$1;
(statearr_25706_25846[(2)] = null);

(statearr_25706_25846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (7))){
var inst_25696 = (state_25700[(2)]);
var state_25700__$1 = state_25700;
var statearr_25707_25847 = state_25700__$1;
(statearr_25707_25847[(2)] = inst_25696);

(statearr_25707_25847[(1)] = (3));


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
});})(__25829,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
;
return ((function (__25829,switch__25155__auto__,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_25711 = [null,null,null,null,null,null,null];
(statearr_25711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__);

(statearr_25711[(1)] = (1));

return statearr_25711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1 = (function (state_25700){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25712){if((e25712 instanceof Object)){
var ex__25159__auto__ = e25712;
var statearr_25713_25848 = state_25700;
(statearr_25713_25848[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25849 = state_25700;
state_25700 = G__25849;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = function(state_25700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1.call(this,state_25700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__;
})()
;})(__25829,switch__25155__auto__,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
})();
var state__25269__auto__ = (function (){var statearr_25714 = f__25268__auto__.call(null);
(statearr_25714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25841);

return statearr_25714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(__25829,c__25267__auto___25841,G__25660_25830,n__23268__auto___25828,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__25850 = (__25829 + (1));
__25829 = G__25850;
continue;
} else {
}
break;
}

var c__25267__auto___25851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___25851,jobs,results,process,async){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___25851,jobs,results,process,async){
return (function (state_25736){
var state_val_25737 = (state_25736[(1)]);
if((state_val_25737 === (1))){
var state_25736__$1 = state_25736;
var statearr_25738_25852 = state_25736__$1;
(statearr_25738_25852[(2)] = null);

(statearr_25738_25852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (2))){
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25736__$1,(4),from);
} else {
if((state_val_25737 === (3))){
var inst_25734 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25736__$1,inst_25734);
} else {
if((state_val_25737 === (4))){
var inst_25717 = (state_25736[(7)]);
var inst_25717__$1 = (state_25736[(2)]);
var inst_25718 = (inst_25717__$1 == null);
var state_25736__$1 = (function (){var statearr_25739 = state_25736;
(statearr_25739[(7)] = inst_25717__$1);

return statearr_25739;
})();
if(cljs.core.truth_(inst_25718)){
var statearr_25740_25853 = state_25736__$1;
(statearr_25740_25853[(1)] = (5));

} else {
var statearr_25741_25854 = state_25736__$1;
(statearr_25741_25854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (5))){
var inst_25720 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25736__$1 = state_25736;
var statearr_25742_25855 = state_25736__$1;
(statearr_25742_25855[(2)] = inst_25720);

(statearr_25742_25855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (6))){
var inst_25717 = (state_25736[(7)]);
var inst_25722 = (state_25736[(8)]);
var inst_25722__$1 = cljs.core.async.chan.call(null,(1));
var inst_25723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25724 = [inst_25717,inst_25722__$1];
var inst_25725 = (new cljs.core.PersistentVector(null,2,(5),inst_25723,inst_25724,null));
var state_25736__$1 = (function (){var statearr_25743 = state_25736;
(statearr_25743[(8)] = inst_25722__$1);

return statearr_25743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25736__$1,(8),jobs,inst_25725);
} else {
if((state_val_25737 === (7))){
var inst_25732 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25744_25856 = state_25736__$1;
(statearr_25744_25856[(2)] = inst_25732);

(statearr_25744_25856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (8))){
var inst_25722 = (state_25736[(8)]);
var inst_25727 = (state_25736[(2)]);
var state_25736__$1 = (function (){var statearr_25745 = state_25736;
(statearr_25745[(9)] = inst_25727);

return statearr_25745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25736__$1,(9),results,inst_25722);
} else {
if((state_val_25737 === (9))){
var inst_25729 = (state_25736[(2)]);
var state_25736__$1 = (function (){var statearr_25746 = state_25736;
(statearr_25746[(10)] = inst_25729);

return statearr_25746;
})();
var statearr_25747_25857 = state_25736__$1;
(statearr_25747_25857[(2)] = null);

(statearr_25747_25857[(1)] = (2));


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
});})(c__25267__auto___25851,jobs,results,process,async))
;
return ((function (switch__25155__auto__,c__25267__auto___25851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_25751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__);

(statearr_25751[(1)] = (1));

return statearr_25751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1 = (function (state_25736){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25752){if((e25752 instanceof Object)){
var ex__25159__auto__ = e25752;
var statearr_25753_25858 = state_25736;
(statearr_25753_25858[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25859 = state_25736;
state_25736 = G__25859;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___25851,jobs,results,process,async))
})();
var state__25269__auto__ = (function (){var statearr_25754 = f__25268__auto__.call(null);
(statearr_25754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25851);

return statearr_25754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___25851,jobs,results,process,async))
);


var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__,jobs,results,process,async){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__,jobs,results,process,async){
return (function (state_25792){
var state_val_25793 = (state_25792[(1)]);
if((state_val_25793 === (7))){
var inst_25788 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
var statearr_25794_25860 = state_25792__$1;
(statearr_25794_25860[(2)] = inst_25788);

(statearr_25794_25860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (20))){
var state_25792__$1 = state_25792;
var statearr_25795_25861 = state_25792__$1;
(statearr_25795_25861[(2)] = null);

(statearr_25795_25861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (1))){
var state_25792__$1 = state_25792;
var statearr_25796_25862 = state_25792__$1;
(statearr_25796_25862[(2)] = null);

(statearr_25796_25862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (4))){
var inst_25757 = (state_25792[(7)]);
var inst_25757__$1 = (state_25792[(2)]);
var inst_25758 = (inst_25757__$1 == null);
var state_25792__$1 = (function (){var statearr_25797 = state_25792;
(statearr_25797[(7)] = inst_25757__$1);

return statearr_25797;
})();
if(cljs.core.truth_(inst_25758)){
var statearr_25798_25863 = state_25792__$1;
(statearr_25798_25863[(1)] = (5));

} else {
var statearr_25799_25864 = state_25792__$1;
(statearr_25799_25864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (15))){
var inst_25770 = (state_25792[(8)]);
var state_25792__$1 = state_25792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25792__$1,(18),to,inst_25770);
} else {
if((state_val_25793 === (21))){
var inst_25783 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
var statearr_25800_25865 = state_25792__$1;
(statearr_25800_25865[(2)] = inst_25783);

(statearr_25800_25865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (13))){
var inst_25785 = (state_25792[(2)]);
var state_25792__$1 = (function (){var statearr_25801 = state_25792;
(statearr_25801[(9)] = inst_25785);

return statearr_25801;
})();
var statearr_25802_25866 = state_25792__$1;
(statearr_25802_25866[(2)] = null);

(statearr_25802_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (6))){
var inst_25757 = (state_25792[(7)]);
var state_25792__$1 = state_25792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25792__$1,(11),inst_25757);
} else {
if((state_val_25793 === (17))){
var inst_25778 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
if(cljs.core.truth_(inst_25778)){
var statearr_25803_25867 = state_25792__$1;
(statearr_25803_25867[(1)] = (19));

} else {
var statearr_25804_25868 = state_25792__$1;
(statearr_25804_25868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (3))){
var inst_25790 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25792__$1,inst_25790);
} else {
if((state_val_25793 === (12))){
var inst_25767 = (state_25792[(10)]);
var state_25792__$1 = state_25792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25792__$1,(14),inst_25767);
} else {
if((state_val_25793 === (2))){
var state_25792__$1 = state_25792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25792__$1,(4),results);
} else {
if((state_val_25793 === (19))){
var state_25792__$1 = state_25792;
var statearr_25805_25869 = state_25792__$1;
(statearr_25805_25869[(2)] = null);

(statearr_25805_25869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (11))){
var inst_25767 = (state_25792[(2)]);
var state_25792__$1 = (function (){var statearr_25806 = state_25792;
(statearr_25806[(10)] = inst_25767);

return statearr_25806;
})();
var statearr_25807_25870 = state_25792__$1;
(statearr_25807_25870[(2)] = null);

(statearr_25807_25870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (9))){
var state_25792__$1 = state_25792;
var statearr_25808_25871 = state_25792__$1;
(statearr_25808_25871[(2)] = null);

(statearr_25808_25871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (5))){
var state_25792__$1 = state_25792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25809_25872 = state_25792__$1;
(statearr_25809_25872[(1)] = (8));

} else {
var statearr_25810_25873 = state_25792__$1;
(statearr_25810_25873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (14))){
var inst_25770 = (state_25792[(8)]);
var inst_25772 = (state_25792[(11)]);
var inst_25770__$1 = (state_25792[(2)]);
var inst_25771 = (inst_25770__$1 == null);
var inst_25772__$1 = cljs.core.not.call(null,inst_25771);
var state_25792__$1 = (function (){var statearr_25811 = state_25792;
(statearr_25811[(8)] = inst_25770__$1);

(statearr_25811[(11)] = inst_25772__$1);

return statearr_25811;
})();
if(inst_25772__$1){
var statearr_25812_25874 = state_25792__$1;
(statearr_25812_25874[(1)] = (15));

} else {
var statearr_25813_25875 = state_25792__$1;
(statearr_25813_25875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (16))){
var inst_25772 = (state_25792[(11)]);
var state_25792__$1 = state_25792;
var statearr_25814_25876 = state_25792__$1;
(statearr_25814_25876[(2)] = inst_25772);

(statearr_25814_25876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (10))){
var inst_25764 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
var statearr_25815_25877 = state_25792__$1;
(statearr_25815_25877[(2)] = inst_25764);

(statearr_25815_25877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (18))){
var inst_25775 = (state_25792[(2)]);
var state_25792__$1 = state_25792;
var statearr_25816_25878 = state_25792__$1;
(statearr_25816_25878[(2)] = inst_25775);

(statearr_25816_25878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25793 === (8))){
var inst_25761 = cljs.core.async.close_BANG_.call(null,to);
var state_25792__$1 = state_25792;
var statearr_25817_25879 = state_25792__$1;
(statearr_25817_25879[(2)] = inst_25761);

(statearr_25817_25879[(1)] = (10));


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
});})(c__25267__auto__,jobs,results,process,async))
;
return ((function (switch__25155__auto__,c__25267__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_25821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__);

(statearr_25821[(1)] = (1));

return statearr_25821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1 = (function (state_25792){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25822){if((e25822 instanceof Object)){
var ex__25159__auto__ = e25822;
var statearr_25823_25880 = state_25792;
(statearr_25823_25880[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25881 = state_25792;
state_25792 = G__25881;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__ = function(state_25792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1.call(this,state_25792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__,jobs,results,process,async))
})();
var state__25269__auto__ = (function (){var statearr_25824 = f__25268__auto__.call(null);
(statearr_25824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_25824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__,jobs,results,process,async))
);

return c__25267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25882 = [];
var len__23458__auto___25885 = arguments.length;
var i__23459__auto___25886 = (0);
while(true){
if((i__23459__auto___25886 < len__23458__auto___25885)){
args25882.push((arguments[i__23459__auto___25886]));

var G__25887 = (i__23459__auto___25886 + (1));
i__23459__auto___25886 = G__25887;
continue;
} else {
}
break;
}

var G__25884 = args25882.length;
switch (G__25884) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25882.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25889 = [];
var len__23458__auto___25892 = arguments.length;
var i__23459__auto___25893 = (0);
while(true){
if((i__23459__auto___25893 < len__23458__auto___25892)){
args25889.push((arguments[i__23459__auto___25893]));

var G__25894 = (i__23459__auto___25893 + (1));
i__23459__auto___25893 = G__25894;
continue;
} else {
}
break;
}

var G__25891 = args25889.length;
switch (G__25891) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25889.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25896 = [];
var len__23458__auto___25949 = arguments.length;
var i__23459__auto___25950 = (0);
while(true){
if((i__23459__auto___25950 < len__23458__auto___25949)){
args25896.push((arguments[i__23459__auto___25950]));

var G__25951 = (i__23459__auto___25950 + (1));
i__23459__auto___25950 = G__25951;
continue;
} else {
}
break;
}

var G__25898 = args25896.length;
switch (G__25898) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25896.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25267__auto___25953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___25953,tc,fc){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___25953,tc,fc){
return (function (state_25924){
var state_val_25925 = (state_25924[(1)]);
if((state_val_25925 === (7))){
var inst_25920 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
var statearr_25926_25954 = state_25924__$1;
(statearr_25926_25954[(2)] = inst_25920);

(statearr_25926_25954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (1))){
var state_25924__$1 = state_25924;
var statearr_25927_25955 = state_25924__$1;
(statearr_25927_25955[(2)] = null);

(statearr_25927_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (4))){
var inst_25901 = (state_25924[(7)]);
var inst_25901__$1 = (state_25924[(2)]);
var inst_25902 = (inst_25901__$1 == null);
var state_25924__$1 = (function (){var statearr_25928 = state_25924;
(statearr_25928[(7)] = inst_25901__$1);

return statearr_25928;
})();
if(cljs.core.truth_(inst_25902)){
var statearr_25929_25956 = state_25924__$1;
(statearr_25929_25956[(1)] = (5));

} else {
var statearr_25930_25957 = state_25924__$1;
(statearr_25930_25957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (13))){
var state_25924__$1 = state_25924;
var statearr_25931_25958 = state_25924__$1;
(statearr_25931_25958[(2)] = null);

(statearr_25931_25958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (6))){
var inst_25901 = (state_25924[(7)]);
var inst_25907 = p.call(null,inst_25901);
var state_25924__$1 = state_25924;
if(cljs.core.truth_(inst_25907)){
var statearr_25932_25959 = state_25924__$1;
(statearr_25932_25959[(1)] = (9));

} else {
var statearr_25933_25960 = state_25924__$1;
(statearr_25933_25960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (3))){
var inst_25922 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25924__$1,inst_25922);
} else {
if((state_val_25925 === (12))){
var state_25924__$1 = state_25924;
var statearr_25934_25961 = state_25924__$1;
(statearr_25934_25961[(2)] = null);

(statearr_25934_25961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (2))){
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25924__$1,(4),ch);
} else {
if((state_val_25925 === (11))){
var inst_25901 = (state_25924[(7)]);
var inst_25911 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25924__$1,(8),inst_25911,inst_25901);
} else {
if((state_val_25925 === (9))){
var state_25924__$1 = state_25924;
var statearr_25935_25962 = state_25924__$1;
(statearr_25935_25962[(2)] = tc);

(statearr_25935_25962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (5))){
var inst_25904 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25905 = cljs.core.async.close_BANG_.call(null,fc);
var state_25924__$1 = (function (){var statearr_25936 = state_25924;
(statearr_25936[(8)] = inst_25904);

return statearr_25936;
})();
var statearr_25937_25963 = state_25924__$1;
(statearr_25937_25963[(2)] = inst_25905);

(statearr_25937_25963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (14))){
var inst_25918 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
var statearr_25938_25964 = state_25924__$1;
(statearr_25938_25964[(2)] = inst_25918);

(statearr_25938_25964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (10))){
var state_25924__$1 = state_25924;
var statearr_25939_25965 = state_25924__$1;
(statearr_25939_25965[(2)] = fc);

(statearr_25939_25965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (8))){
var inst_25913 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
if(cljs.core.truth_(inst_25913)){
var statearr_25940_25966 = state_25924__$1;
(statearr_25940_25966[(1)] = (12));

} else {
var statearr_25941_25967 = state_25924__$1;
(statearr_25941_25967[(1)] = (13));

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
});})(c__25267__auto___25953,tc,fc))
;
return ((function (switch__25155__auto__,c__25267__auto___25953,tc,fc){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_25945 = [null,null,null,null,null,null,null,null,null];
(statearr_25945[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_25945[(1)] = (1));

return statearr_25945;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_25924){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_25924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e25946){if((e25946 instanceof Object)){
var ex__25159__auto__ = e25946;
var statearr_25947_25968 = state_25924;
(statearr_25947_25968[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25969 = state_25924;
state_25924 = G__25969;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___25953,tc,fc))
})();
var state__25269__auto__ = (function (){var statearr_25948 = f__25268__auto__.call(null);
(statearr_25948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___25953);

return statearr_25948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___25953,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__){
return (function (state_26033){
var state_val_26034 = (state_26033[(1)]);
if((state_val_26034 === (7))){
var inst_26029 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26035_26056 = state_26033__$1;
(statearr_26035_26056[(2)] = inst_26029);

(statearr_26035_26056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (1))){
var inst_26013 = init;
var state_26033__$1 = (function (){var statearr_26036 = state_26033;
(statearr_26036[(7)] = inst_26013);

return statearr_26036;
})();
var statearr_26037_26057 = state_26033__$1;
(statearr_26037_26057[(2)] = null);

(statearr_26037_26057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (4))){
var inst_26016 = (state_26033[(8)]);
var inst_26016__$1 = (state_26033[(2)]);
var inst_26017 = (inst_26016__$1 == null);
var state_26033__$1 = (function (){var statearr_26038 = state_26033;
(statearr_26038[(8)] = inst_26016__$1);

return statearr_26038;
})();
if(cljs.core.truth_(inst_26017)){
var statearr_26039_26058 = state_26033__$1;
(statearr_26039_26058[(1)] = (5));

} else {
var statearr_26040_26059 = state_26033__$1;
(statearr_26040_26059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (6))){
var inst_26013 = (state_26033[(7)]);
var inst_26020 = (state_26033[(9)]);
var inst_26016 = (state_26033[(8)]);
var inst_26020__$1 = f.call(null,inst_26013,inst_26016);
var inst_26021 = cljs.core.reduced_QMARK_.call(null,inst_26020__$1);
var state_26033__$1 = (function (){var statearr_26041 = state_26033;
(statearr_26041[(9)] = inst_26020__$1);

return statearr_26041;
})();
if(inst_26021){
var statearr_26042_26060 = state_26033__$1;
(statearr_26042_26060[(1)] = (8));

} else {
var statearr_26043_26061 = state_26033__$1;
(statearr_26043_26061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (3))){
var inst_26031 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26033__$1,inst_26031);
} else {
if((state_val_26034 === (2))){
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26033__$1,(4),ch);
} else {
if((state_val_26034 === (9))){
var inst_26020 = (state_26033[(9)]);
var inst_26013 = inst_26020;
var state_26033__$1 = (function (){var statearr_26044 = state_26033;
(statearr_26044[(7)] = inst_26013);

return statearr_26044;
})();
var statearr_26045_26062 = state_26033__$1;
(statearr_26045_26062[(2)] = null);

(statearr_26045_26062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (5))){
var inst_26013 = (state_26033[(7)]);
var state_26033__$1 = state_26033;
var statearr_26046_26063 = state_26033__$1;
(statearr_26046_26063[(2)] = inst_26013);

(statearr_26046_26063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (10))){
var inst_26027 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26047_26064 = state_26033__$1;
(statearr_26047_26064[(2)] = inst_26027);

(statearr_26047_26064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (8))){
var inst_26020 = (state_26033[(9)]);
var inst_26023 = cljs.core.deref.call(null,inst_26020);
var state_26033__$1 = state_26033;
var statearr_26048_26065 = state_26033__$1;
(statearr_26048_26065[(2)] = inst_26023);

(statearr_26048_26065[(1)] = (10));


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
});})(c__25267__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25156__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25156__auto____0 = (function (){
var statearr_26052 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26052[(0)] = cljs$core$async$reduce_$_state_machine__25156__auto__);

(statearr_26052[(1)] = (1));

return statearr_26052;
});
var cljs$core$async$reduce_$_state_machine__25156__auto____1 = (function (state_26033){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_26033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e26053){if((e26053 instanceof Object)){
var ex__25159__auto__ = e26053;
var statearr_26054_26066 = state_26033;
(statearr_26054_26066[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26067 = state_26033;
state_26033 = G__26067;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25156__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25156__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25156__auto____0;
cljs$core$async$reduce_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25156__auto____1;
return cljs$core$async$reduce_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__))
})();
var state__25269__auto__ = (function (){var statearr_26055 = f__25268__auto__.call(null);
(statearr_26055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_26055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__))
);

return c__25267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26068 = [];
var len__23458__auto___26120 = arguments.length;
var i__23459__auto___26121 = (0);
while(true){
if((i__23459__auto___26121 < len__23458__auto___26120)){
args26068.push((arguments[i__23459__auto___26121]));

var G__26122 = (i__23459__auto___26121 + (1));
i__23459__auto___26121 = G__26122;
continue;
} else {
}
break;
}

var G__26070 = args26068.length;
switch (G__26070) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26068.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__){
return (function (state_26095){
var state_val_26096 = (state_26095[(1)]);
if((state_val_26096 === (7))){
var inst_26077 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26097_26124 = state_26095__$1;
(statearr_26097_26124[(2)] = inst_26077);

(statearr_26097_26124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (1))){
var inst_26071 = cljs.core.seq.call(null,coll);
var inst_26072 = inst_26071;
var state_26095__$1 = (function (){var statearr_26098 = state_26095;
(statearr_26098[(7)] = inst_26072);

return statearr_26098;
})();
var statearr_26099_26125 = state_26095__$1;
(statearr_26099_26125[(2)] = null);

(statearr_26099_26125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (4))){
var inst_26072 = (state_26095[(7)]);
var inst_26075 = cljs.core.first.call(null,inst_26072);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(7),ch,inst_26075);
} else {
if((state_val_26096 === (13))){
var inst_26089 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26100_26126 = state_26095__$1;
(statearr_26100_26126[(2)] = inst_26089);

(statearr_26100_26126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (6))){
var inst_26080 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
if(cljs.core.truth_(inst_26080)){
var statearr_26101_26127 = state_26095__$1;
(statearr_26101_26127[(1)] = (8));

} else {
var statearr_26102_26128 = state_26095__$1;
(statearr_26102_26128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (3))){
var inst_26093 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else {
if((state_val_26096 === (12))){
var state_26095__$1 = state_26095;
var statearr_26103_26129 = state_26095__$1;
(statearr_26103_26129[(2)] = null);

(statearr_26103_26129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (2))){
var inst_26072 = (state_26095[(7)]);
var state_26095__$1 = state_26095;
if(cljs.core.truth_(inst_26072)){
var statearr_26104_26130 = state_26095__$1;
(statearr_26104_26130[(1)] = (4));

} else {
var statearr_26105_26131 = state_26095__$1;
(statearr_26105_26131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (11))){
var inst_26086 = cljs.core.async.close_BANG_.call(null,ch);
var state_26095__$1 = state_26095;
var statearr_26106_26132 = state_26095__$1;
(statearr_26106_26132[(2)] = inst_26086);

(statearr_26106_26132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (9))){
var state_26095__$1 = state_26095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26107_26133 = state_26095__$1;
(statearr_26107_26133[(1)] = (11));

} else {
var statearr_26108_26134 = state_26095__$1;
(statearr_26108_26134[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (5))){
var inst_26072 = (state_26095[(7)]);
var state_26095__$1 = state_26095;
var statearr_26109_26135 = state_26095__$1;
(statearr_26109_26135[(2)] = inst_26072);

(statearr_26109_26135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (10))){
var inst_26091 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26110_26136 = state_26095__$1;
(statearr_26110_26136[(2)] = inst_26091);

(statearr_26110_26136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (8))){
var inst_26072 = (state_26095[(7)]);
var inst_26082 = cljs.core.next.call(null,inst_26072);
var inst_26072__$1 = inst_26082;
var state_26095__$1 = (function (){var statearr_26111 = state_26095;
(statearr_26111[(7)] = inst_26072__$1);

return statearr_26111;
})();
var statearr_26112_26137 = state_26095__$1;
(statearr_26112_26137[(2)] = null);

(statearr_26112_26137[(1)] = (2));


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
});})(c__25267__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_26116 = [null,null,null,null,null,null,null,null];
(statearr_26116[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_26116[(1)] = (1));

return statearr_26116;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_26095){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_26095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e26117){if((e26117 instanceof Object)){
var ex__25159__auto__ = e26117;
var statearr_26118_26138 = state_26095;
(statearr_26118_26138[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26139 = state_26095;
state_26095 = G__26139;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__))
})();
var state__25269__auto__ = (function (){var statearr_26119 = f__25268__auto__.call(null);
(statearr_26119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_26119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__))
);

return c__25267__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23013__auto__ = (((_ == null))?null:_);
var m__23014__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,_);
} else {
var m__23014__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23014__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,ch);
} else {
var m__23014__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m);
} else {
var m__23014__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26365 = (function (ch,cs,meta26366){
this.ch = ch;
this.cs = cs;
this.meta26366 = meta26366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26367,meta26366__$1){
var self__ = this;
var _26367__$1 = this;
return (new cljs.core.async.t_cljs$core$async26365(self__.ch,self__.cs,meta26366__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26367){
var self__ = this;
var _26367__$1 = this;
return self__.meta26366;
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26366","meta26366",467522934,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26365";

cljs.core.async.t_cljs$core$async26365.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async26365");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26365 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26365(ch__$1,cs__$1,meta26366){
return (new cljs.core.async.t_cljs$core$async26365(ch__$1,cs__$1,meta26366));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26365(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25267__auto___26590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___26590,cs,m,dchan,dctr,done){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___26590,cs,m,dchan,dctr,done){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26498 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26504_26591 = state_26502__$1;
(statearr_26504_26591[(2)] = inst_26498);

(statearr_26504_26591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (20))){
var inst_26401 = (state_26502[(7)]);
var inst_26413 = cljs.core.first.call(null,inst_26401);
var inst_26414 = cljs.core.nth.call(null,inst_26413,(0),null);
var inst_26415 = cljs.core.nth.call(null,inst_26413,(1),null);
var state_26502__$1 = (function (){var statearr_26505 = state_26502;
(statearr_26505[(8)] = inst_26414);

return statearr_26505;
})();
if(cljs.core.truth_(inst_26415)){
var statearr_26506_26592 = state_26502__$1;
(statearr_26506_26592[(1)] = (22));

} else {
var statearr_26507_26593 = state_26502__$1;
(statearr_26507_26593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (27))){
var inst_26450 = (state_26502[(9)]);
var inst_26445 = (state_26502[(10)]);
var inst_26370 = (state_26502[(11)]);
var inst_26443 = (state_26502[(12)]);
var inst_26450__$1 = cljs.core._nth.call(null,inst_26443,inst_26445);
var inst_26451 = cljs.core.async.put_BANG_.call(null,inst_26450__$1,inst_26370,done);
var state_26502__$1 = (function (){var statearr_26508 = state_26502;
(statearr_26508[(9)] = inst_26450__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26451)){
var statearr_26509_26594 = state_26502__$1;
(statearr_26509_26594[(1)] = (30));

} else {
var statearr_26510_26595 = state_26502__$1;
(statearr_26510_26595[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var state_26502__$1 = state_26502;
var statearr_26511_26596 = state_26502__$1;
(statearr_26511_26596[(2)] = null);

(statearr_26511_26596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (24))){
var inst_26401 = (state_26502[(7)]);
var inst_26420 = (state_26502[(2)]);
var inst_26421 = cljs.core.next.call(null,inst_26401);
var inst_26379 = inst_26421;
var inst_26380 = null;
var inst_26381 = (0);
var inst_26382 = (0);
var state_26502__$1 = (function (){var statearr_26512 = state_26502;
(statearr_26512[(13)] = inst_26379);

(statearr_26512[(14)] = inst_26420);

(statearr_26512[(15)] = inst_26382);

(statearr_26512[(16)] = inst_26381);

(statearr_26512[(17)] = inst_26380);

return statearr_26512;
})();
var statearr_26513_26597 = state_26502__$1;
(statearr_26513_26597[(2)] = null);

(statearr_26513_26597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (39))){
var state_26502__$1 = state_26502;
var statearr_26517_26598 = state_26502__$1;
(statearr_26517_26598[(2)] = null);

(statearr_26517_26598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var inst_26370 = (state_26502[(11)]);
var inst_26370__$1 = (state_26502[(2)]);
var inst_26371 = (inst_26370__$1 == null);
var state_26502__$1 = (function (){var statearr_26518 = state_26502;
(statearr_26518[(11)] = inst_26370__$1);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26371)){
var statearr_26519_26599 = state_26502__$1;
(statearr_26519_26599[(1)] = (5));

} else {
var statearr_26520_26600 = state_26502__$1;
(statearr_26520_26600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (15))){
var inst_26379 = (state_26502[(13)]);
var inst_26382 = (state_26502[(15)]);
var inst_26381 = (state_26502[(16)]);
var inst_26380 = (state_26502[(17)]);
var inst_26397 = (state_26502[(2)]);
var inst_26398 = (inst_26382 + (1));
var tmp26514 = inst_26379;
var tmp26515 = inst_26381;
var tmp26516 = inst_26380;
var inst_26379__$1 = tmp26514;
var inst_26380__$1 = tmp26516;
var inst_26381__$1 = tmp26515;
var inst_26382__$1 = inst_26398;
var state_26502__$1 = (function (){var statearr_26521 = state_26502;
(statearr_26521[(13)] = inst_26379__$1);

(statearr_26521[(15)] = inst_26382__$1);

(statearr_26521[(18)] = inst_26397);

(statearr_26521[(16)] = inst_26381__$1);

(statearr_26521[(17)] = inst_26380__$1);

return statearr_26521;
})();
var statearr_26522_26601 = state_26502__$1;
(statearr_26522_26601[(2)] = null);

(statearr_26522_26601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (21))){
var inst_26424 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26526_26602 = state_26502__$1;
(statearr_26526_26602[(2)] = inst_26424);

(statearr_26526_26602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (31))){
var inst_26450 = (state_26502[(9)]);
var inst_26454 = done.call(null,null);
var inst_26455 = cljs.core.async.untap_STAR_.call(null,m,inst_26450);
var state_26502__$1 = (function (){var statearr_26527 = state_26502;
(statearr_26527[(19)] = inst_26454);

return statearr_26527;
})();
var statearr_26528_26603 = state_26502__$1;
(statearr_26528_26603[(2)] = inst_26455);

(statearr_26528_26603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (32))){
var inst_26445 = (state_26502[(10)]);
var inst_26444 = (state_26502[(20)]);
var inst_26442 = (state_26502[(21)]);
var inst_26443 = (state_26502[(12)]);
var inst_26457 = (state_26502[(2)]);
var inst_26458 = (inst_26445 + (1));
var tmp26523 = inst_26444;
var tmp26524 = inst_26442;
var tmp26525 = inst_26443;
var inst_26442__$1 = tmp26524;
var inst_26443__$1 = tmp26525;
var inst_26444__$1 = tmp26523;
var inst_26445__$1 = inst_26458;
var state_26502__$1 = (function (){var statearr_26529 = state_26502;
(statearr_26529[(10)] = inst_26445__$1);

(statearr_26529[(20)] = inst_26444__$1);

(statearr_26529[(21)] = inst_26442__$1);

(statearr_26529[(12)] = inst_26443__$1);

(statearr_26529[(22)] = inst_26457);

return statearr_26529;
})();
var statearr_26530_26604 = state_26502__$1;
(statearr_26530_26604[(2)] = null);

(statearr_26530_26604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (40))){
var inst_26470 = (state_26502[(23)]);
var inst_26474 = done.call(null,null);
var inst_26475 = cljs.core.async.untap_STAR_.call(null,m,inst_26470);
var state_26502__$1 = (function (){var statearr_26531 = state_26502;
(statearr_26531[(24)] = inst_26474);

return statearr_26531;
})();
var statearr_26532_26605 = state_26502__$1;
(statearr_26532_26605[(2)] = inst_26475);

(statearr_26532_26605[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (33))){
var inst_26461 = (state_26502[(25)]);
var inst_26463 = cljs.core.chunked_seq_QMARK_.call(null,inst_26461);
var state_26502__$1 = state_26502;
if(inst_26463){
var statearr_26533_26606 = state_26502__$1;
(statearr_26533_26606[(1)] = (36));

} else {
var statearr_26534_26607 = state_26502__$1;
(statearr_26534_26607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (13))){
var inst_26391 = (state_26502[(26)]);
var inst_26394 = cljs.core.async.close_BANG_.call(null,inst_26391);
var state_26502__$1 = state_26502;
var statearr_26535_26608 = state_26502__$1;
(statearr_26535_26608[(2)] = inst_26394);

(statearr_26535_26608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (22))){
var inst_26414 = (state_26502[(8)]);
var inst_26417 = cljs.core.async.close_BANG_.call(null,inst_26414);
var state_26502__$1 = state_26502;
var statearr_26536_26609 = state_26502__$1;
(statearr_26536_26609[(2)] = inst_26417);

(statearr_26536_26609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (36))){
var inst_26461 = (state_26502[(25)]);
var inst_26465 = cljs.core.chunk_first.call(null,inst_26461);
var inst_26466 = cljs.core.chunk_rest.call(null,inst_26461);
var inst_26467 = cljs.core.count.call(null,inst_26465);
var inst_26442 = inst_26466;
var inst_26443 = inst_26465;
var inst_26444 = inst_26467;
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26537 = state_26502;
(statearr_26537[(10)] = inst_26445);

(statearr_26537[(20)] = inst_26444);

(statearr_26537[(21)] = inst_26442);

(statearr_26537[(12)] = inst_26443);

return statearr_26537;
})();
var statearr_26538_26610 = state_26502__$1;
(statearr_26538_26610[(2)] = null);

(statearr_26538_26610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (41))){
var inst_26461 = (state_26502[(25)]);
var inst_26477 = (state_26502[(2)]);
var inst_26478 = cljs.core.next.call(null,inst_26461);
var inst_26442 = inst_26478;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26539 = state_26502;
(statearr_26539[(27)] = inst_26477);

(statearr_26539[(10)] = inst_26445);

(statearr_26539[(20)] = inst_26444);

(statearr_26539[(21)] = inst_26442);

(statearr_26539[(12)] = inst_26443);

return statearr_26539;
})();
var statearr_26540_26611 = state_26502__$1;
(statearr_26540_26611[(2)] = null);

(statearr_26540_26611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (43))){
var state_26502__$1 = state_26502;
var statearr_26541_26612 = state_26502__$1;
(statearr_26541_26612[(2)] = null);

(statearr_26541_26612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (29))){
var inst_26486 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26542_26613 = state_26502__$1;
(statearr_26542_26613[(2)] = inst_26486);

(statearr_26542_26613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (44))){
var inst_26495 = (state_26502[(2)]);
var state_26502__$1 = (function (){var statearr_26543 = state_26502;
(statearr_26543[(28)] = inst_26495);

return statearr_26543;
})();
var statearr_26544_26614 = state_26502__$1;
(statearr_26544_26614[(2)] = null);

(statearr_26544_26614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (6))){
var inst_26434 = (state_26502[(29)]);
var inst_26433 = cljs.core.deref.call(null,cs);
var inst_26434__$1 = cljs.core.keys.call(null,inst_26433);
var inst_26435 = cljs.core.count.call(null,inst_26434__$1);
var inst_26436 = cljs.core.reset_BANG_.call(null,dctr,inst_26435);
var inst_26441 = cljs.core.seq.call(null,inst_26434__$1);
var inst_26442 = inst_26441;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26545 = state_26502;
(statearr_26545[(10)] = inst_26445);

(statearr_26545[(20)] = inst_26444);

(statearr_26545[(21)] = inst_26442);

(statearr_26545[(12)] = inst_26443);

(statearr_26545[(29)] = inst_26434__$1);

(statearr_26545[(30)] = inst_26436);

return statearr_26545;
})();
var statearr_26546_26615 = state_26502__$1;
(statearr_26546_26615[(2)] = null);

(statearr_26546_26615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (28))){
var inst_26442 = (state_26502[(21)]);
var inst_26461 = (state_26502[(25)]);
var inst_26461__$1 = cljs.core.seq.call(null,inst_26442);
var state_26502__$1 = (function (){var statearr_26547 = state_26502;
(statearr_26547[(25)] = inst_26461__$1);

return statearr_26547;
})();
if(inst_26461__$1){
var statearr_26548_26616 = state_26502__$1;
(statearr_26548_26616[(1)] = (33));

} else {
var statearr_26549_26617 = state_26502__$1;
(statearr_26549_26617[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (25))){
var inst_26445 = (state_26502[(10)]);
var inst_26444 = (state_26502[(20)]);
var inst_26447 = (inst_26445 < inst_26444);
var inst_26448 = inst_26447;
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26448)){
var statearr_26550_26618 = state_26502__$1;
(statearr_26550_26618[(1)] = (27));

} else {
var statearr_26551_26619 = state_26502__$1;
(statearr_26551_26619[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (34))){
var state_26502__$1 = state_26502;
var statearr_26552_26620 = state_26502__$1;
(statearr_26552_26620[(2)] = null);

(statearr_26552_26620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (17))){
var state_26502__$1 = state_26502;
var statearr_26553_26621 = state_26502__$1;
(statearr_26553_26621[(2)] = null);

(statearr_26553_26621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26500 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (12))){
var inst_26429 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26554_26622 = state_26502__$1;
(statearr_26554_26622[(2)] = inst_26429);

(statearr_26554_26622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (2))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(4),ch);
} else {
if((state_val_26503 === (23))){
var state_26502__$1 = state_26502;
var statearr_26555_26623 = state_26502__$1;
(statearr_26555_26623[(2)] = null);

(statearr_26555_26623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (35))){
var inst_26484 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26556_26624 = state_26502__$1;
(statearr_26556_26624[(2)] = inst_26484);

(statearr_26556_26624[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (19))){
var inst_26401 = (state_26502[(7)]);
var inst_26405 = cljs.core.chunk_first.call(null,inst_26401);
var inst_26406 = cljs.core.chunk_rest.call(null,inst_26401);
var inst_26407 = cljs.core.count.call(null,inst_26405);
var inst_26379 = inst_26406;
var inst_26380 = inst_26405;
var inst_26381 = inst_26407;
var inst_26382 = (0);
var state_26502__$1 = (function (){var statearr_26557 = state_26502;
(statearr_26557[(13)] = inst_26379);

(statearr_26557[(15)] = inst_26382);

(statearr_26557[(16)] = inst_26381);

(statearr_26557[(17)] = inst_26380);

return statearr_26557;
})();
var statearr_26558_26625 = state_26502__$1;
(statearr_26558_26625[(2)] = null);

(statearr_26558_26625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (11))){
var inst_26379 = (state_26502[(13)]);
var inst_26401 = (state_26502[(7)]);
var inst_26401__$1 = cljs.core.seq.call(null,inst_26379);
var state_26502__$1 = (function (){var statearr_26559 = state_26502;
(statearr_26559[(7)] = inst_26401__$1);

return statearr_26559;
})();
if(inst_26401__$1){
var statearr_26560_26626 = state_26502__$1;
(statearr_26560_26626[(1)] = (16));

} else {
var statearr_26561_26627 = state_26502__$1;
(statearr_26561_26627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (9))){
var inst_26431 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26562_26628 = state_26502__$1;
(statearr_26562_26628[(2)] = inst_26431);

(statearr_26562_26628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (5))){
var inst_26377 = cljs.core.deref.call(null,cs);
var inst_26378 = cljs.core.seq.call(null,inst_26377);
var inst_26379 = inst_26378;
var inst_26380 = null;
var inst_26381 = (0);
var inst_26382 = (0);
var state_26502__$1 = (function (){var statearr_26563 = state_26502;
(statearr_26563[(13)] = inst_26379);

(statearr_26563[(15)] = inst_26382);

(statearr_26563[(16)] = inst_26381);

(statearr_26563[(17)] = inst_26380);

return statearr_26563;
})();
var statearr_26564_26629 = state_26502__$1;
(statearr_26564_26629[(2)] = null);

(statearr_26564_26629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (14))){
var state_26502__$1 = state_26502;
var statearr_26565_26630 = state_26502__$1;
(statearr_26565_26630[(2)] = null);

(statearr_26565_26630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (45))){
var inst_26492 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26566_26631 = state_26502__$1;
(statearr_26566_26631[(2)] = inst_26492);

(statearr_26566_26631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (26))){
var inst_26434 = (state_26502[(29)]);
var inst_26488 = (state_26502[(2)]);
var inst_26489 = cljs.core.seq.call(null,inst_26434);
var state_26502__$1 = (function (){var statearr_26567 = state_26502;
(statearr_26567[(31)] = inst_26488);

return statearr_26567;
})();
if(inst_26489){
var statearr_26568_26632 = state_26502__$1;
(statearr_26568_26632[(1)] = (42));

} else {
var statearr_26569_26633 = state_26502__$1;
(statearr_26569_26633[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (16))){
var inst_26401 = (state_26502[(7)]);
var inst_26403 = cljs.core.chunked_seq_QMARK_.call(null,inst_26401);
var state_26502__$1 = state_26502;
if(inst_26403){
var statearr_26570_26634 = state_26502__$1;
(statearr_26570_26634[(1)] = (19));

} else {
var statearr_26571_26635 = state_26502__$1;
(statearr_26571_26635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (38))){
var inst_26481 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26572_26636 = state_26502__$1;
(statearr_26572_26636[(2)] = inst_26481);

(statearr_26572_26636[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (30))){
var state_26502__$1 = state_26502;
var statearr_26573_26637 = state_26502__$1;
(statearr_26573_26637[(2)] = null);

(statearr_26573_26637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26382 = (state_26502[(15)]);
var inst_26380 = (state_26502[(17)]);
var inst_26390 = cljs.core._nth.call(null,inst_26380,inst_26382);
var inst_26391 = cljs.core.nth.call(null,inst_26390,(0),null);
var inst_26392 = cljs.core.nth.call(null,inst_26390,(1),null);
var state_26502__$1 = (function (){var statearr_26574 = state_26502;
(statearr_26574[(26)] = inst_26391);

return statearr_26574;
})();
if(cljs.core.truth_(inst_26392)){
var statearr_26575_26638 = state_26502__$1;
(statearr_26575_26638[(1)] = (13));

} else {
var statearr_26576_26639 = state_26502__$1;
(statearr_26576_26639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (18))){
var inst_26427 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26577_26640 = state_26502__$1;
(statearr_26577_26640[(2)] = inst_26427);

(statearr_26577_26640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (42))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(45),dchan);
} else {
if((state_val_26503 === (37))){
var inst_26470 = (state_26502[(23)]);
var inst_26461 = (state_26502[(25)]);
var inst_26370 = (state_26502[(11)]);
var inst_26470__$1 = cljs.core.first.call(null,inst_26461);
var inst_26471 = cljs.core.async.put_BANG_.call(null,inst_26470__$1,inst_26370,done);
var state_26502__$1 = (function (){var statearr_26578 = state_26502;
(statearr_26578[(23)] = inst_26470__$1);

return statearr_26578;
})();
if(cljs.core.truth_(inst_26471)){
var statearr_26579_26641 = state_26502__$1;
(statearr_26579_26641[(1)] = (39));

} else {
var statearr_26580_26642 = state_26502__$1;
(statearr_26580_26642[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26382 = (state_26502[(15)]);
var inst_26381 = (state_26502[(16)]);
var inst_26384 = (inst_26382 < inst_26381);
var inst_26385 = inst_26384;
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26385)){
var statearr_26581_26643 = state_26502__$1;
(statearr_26581_26643[(1)] = (10));

} else {
var statearr_26582_26644 = state_26502__$1;
(statearr_26582_26644[(1)] = (11));

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
});})(c__25267__auto___26590,cs,m,dchan,dctr,done))
;
return ((function (switch__25155__auto__,c__25267__auto___26590,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25156__auto__ = null;
var cljs$core$async$mult_$_state_machine__25156__auto____0 = (function (){
var statearr_26586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26586[(0)] = cljs$core$async$mult_$_state_machine__25156__auto__);

(statearr_26586[(1)] = (1));

return statearr_26586;
});
var cljs$core$async$mult_$_state_machine__25156__auto____1 = (function (state_26502){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e26587){if((e26587 instanceof Object)){
var ex__25159__auto__ = e26587;
var statearr_26588_26645 = state_26502;
(statearr_26588_26645[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26646 = state_26502;
state_26502 = G__26646;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25156__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25156__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25156__auto____0;
cljs$core$async$mult_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25156__auto____1;
return cljs$core$async$mult_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___26590,cs,m,dchan,dctr,done))
})();
var state__25269__auto__ = (function (){var statearr_26589 = f__25268__auto__.call(null);
(statearr_26589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___26590);

return statearr_26589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___26590,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26647 = [];
var len__23458__auto___26650 = arguments.length;
var i__23459__auto___26651 = (0);
while(true){
if((i__23459__auto___26651 < len__23458__auto___26650)){
args26647.push((arguments[i__23459__auto___26651]));

var G__26652 = (i__23459__auto___26651 + (1));
i__23459__auto___26651 = G__26652;
continue;
} else {
}
break;
}

var G__26649 = args26647.length;
switch (G__26649) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26647.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,ch);
} else {
var m__23014__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,ch);
} else {
var m__23014__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m);
} else {
var m__23014__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,state_map);
} else {
var m__23014__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23013__auto__ = (((m == null))?null:m);
var m__23014__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,m,mode);
} else {
var m__23014__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23465__auto__ = [];
var len__23458__auto___26664 = arguments.length;
var i__23459__auto___26665 = (0);
while(true){
if((i__23459__auto___26665 < len__23458__auto___26664)){
args__23465__auto__.push((arguments[i__23459__auto___26665]));

var G__26666 = (i__23459__auto___26665 + (1));
i__23459__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((3) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23466__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26658){
var map__26659 = p__26658;
var map__26659__$1 = ((((!((map__26659 == null)))?((((map__26659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26659):map__26659);
var opts = map__26659__$1;
var statearr_26661_26667 = state;
(statearr_26661_26667[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26659,map__26659__$1,opts){
return (function (val){
var statearr_26662_26668 = state;
(statearr_26662_26668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26659,map__26659__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26663_26669 = state;
(statearr_26663_26669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26654){
var G__26655 = cljs.core.first.call(null,seq26654);
var seq26654__$1 = cljs.core.next.call(null,seq26654);
var G__26656 = cljs.core.first.call(null,seq26654__$1);
var seq26654__$2 = cljs.core.next.call(null,seq26654__$1);
var G__26657 = cljs.core.first.call(null,seq26654__$2);
var seq26654__$3 = cljs.core.next.call(null,seq26654__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26655,G__26656,G__26657,seq26654__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26837 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26838){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26838 = meta26838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26839,meta26838__$1){
var self__ = this;
var _26839__$1 = this;
return (new cljs.core.async.t_cljs$core$async26837(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26838__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26839){
var self__ = this;
var _26839__$1 = this;
return self__.meta26838;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26838","meta26838",-1741380174,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26837";

cljs.core.async.t_cljs$core$async26837.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async26837");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26837 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26837(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26838){
return (new cljs.core.async.t_cljs$core$async26837(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26838));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26837(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25267__auto___27004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (7))){
var inst_26856 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26943_27005 = state_26941__$1;
(statearr_26943_27005[(2)] = inst_26856);

(statearr_26943_27005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (20))){
var inst_26868 = (state_26941[(7)]);
var state_26941__$1 = state_26941;
var statearr_26944_27006 = state_26941__$1;
(statearr_26944_27006[(2)] = inst_26868);

(statearr_26944_27006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (27))){
var state_26941__$1 = state_26941;
var statearr_26945_27007 = state_26941__$1;
(statearr_26945_27007[(2)] = null);

(statearr_26945_27007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (1))){
var inst_26843 = (state_26941[(8)]);
var inst_26843__$1 = calc_state.call(null);
var inst_26845 = (inst_26843__$1 == null);
var inst_26846 = cljs.core.not.call(null,inst_26845);
var state_26941__$1 = (function (){var statearr_26946 = state_26941;
(statearr_26946[(8)] = inst_26843__$1);

return statearr_26946;
})();
if(inst_26846){
var statearr_26947_27008 = state_26941__$1;
(statearr_26947_27008[(1)] = (2));

} else {
var statearr_26948_27009 = state_26941__$1;
(statearr_26948_27009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (24))){
var inst_26892 = (state_26941[(9)]);
var inst_26901 = (state_26941[(10)]);
var inst_26915 = (state_26941[(11)]);
var inst_26915__$1 = inst_26892.call(null,inst_26901);
var state_26941__$1 = (function (){var statearr_26949 = state_26941;
(statearr_26949[(11)] = inst_26915__$1);

return statearr_26949;
})();
if(cljs.core.truth_(inst_26915__$1)){
var statearr_26950_27010 = state_26941__$1;
(statearr_26950_27010[(1)] = (29));

} else {
var statearr_26951_27011 = state_26941__$1;
(statearr_26951_27011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (4))){
var inst_26859 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26859)){
var statearr_26952_27012 = state_26941__$1;
(statearr_26952_27012[(1)] = (8));

} else {
var statearr_26953_27013 = state_26941__$1;
(statearr_26953_27013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (15))){
var inst_26886 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26886)){
var statearr_26954_27014 = state_26941__$1;
(statearr_26954_27014[(1)] = (19));

} else {
var statearr_26955_27015 = state_26941__$1;
(statearr_26955_27015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (21))){
var inst_26891 = (state_26941[(12)]);
var inst_26891__$1 = (state_26941[(2)]);
var inst_26892 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26893 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26894 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26941__$1 = (function (){var statearr_26956 = state_26941;
(statearr_26956[(9)] = inst_26892);

(statearr_26956[(12)] = inst_26891__$1);

(statearr_26956[(13)] = inst_26893);

return statearr_26956;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26941__$1,(22),inst_26894);
} else {
if((state_val_26942 === (31))){
var inst_26923 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26923)){
var statearr_26957_27016 = state_26941__$1;
(statearr_26957_27016[(1)] = (32));

} else {
var statearr_26958_27017 = state_26941__$1;
(statearr_26958_27017[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (32))){
var inst_26900 = (state_26941[(14)]);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26941__$1,(35),out,inst_26900);
} else {
if((state_val_26942 === (33))){
var inst_26891 = (state_26941[(12)]);
var inst_26868 = inst_26891;
var state_26941__$1 = (function (){var statearr_26959 = state_26941;
(statearr_26959[(7)] = inst_26868);

return statearr_26959;
})();
var statearr_26960_27018 = state_26941__$1;
(statearr_26960_27018[(2)] = null);

(statearr_26960_27018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (13))){
var inst_26868 = (state_26941[(7)]);
var inst_26875 = inst_26868.cljs$lang$protocol_mask$partition0$;
var inst_26876 = (inst_26875 & (64));
var inst_26877 = inst_26868.cljs$core$ISeq$;
var inst_26878 = (cljs.core.PROTOCOL_SENTINEL === inst_26877);
var inst_26879 = (inst_26876) || (inst_26878);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26879)){
var statearr_26961_27019 = state_26941__$1;
(statearr_26961_27019[(1)] = (16));

} else {
var statearr_26962_27020 = state_26941__$1;
(statearr_26962_27020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (22))){
var inst_26901 = (state_26941[(10)]);
var inst_26900 = (state_26941[(14)]);
var inst_26899 = (state_26941[(2)]);
var inst_26900__$1 = cljs.core.nth.call(null,inst_26899,(0),null);
var inst_26901__$1 = cljs.core.nth.call(null,inst_26899,(1),null);
var inst_26902 = (inst_26900__$1 == null);
var inst_26903 = cljs.core._EQ_.call(null,inst_26901__$1,change);
var inst_26904 = (inst_26902) || (inst_26903);
var state_26941__$1 = (function (){var statearr_26963 = state_26941;
(statearr_26963[(10)] = inst_26901__$1);

(statearr_26963[(14)] = inst_26900__$1);

return statearr_26963;
})();
if(cljs.core.truth_(inst_26904)){
var statearr_26964_27021 = state_26941__$1;
(statearr_26964_27021[(1)] = (23));

} else {
var statearr_26965_27022 = state_26941__$1;
(statearr_26965_27022[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (36))){
var inst_26891 = (state_26941[(12)]);
var inst_26868 = inst_26891;
var state_26941__$1 = (function (){var statearr_26966 = state_26941;
(statearr_26966[(7)] = inst_26868);

return statearr_26966;
})();
var statearr_26967_27023 = state_26941__$1;
(statearr_26967_27023[(2)] = null);

(statearr_26967_27023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (29))){
var inst_26915 = (state_26941[(11)]);
var state_26941__$1 = state_26941;
var statearr_26968_27024 = state_26941__$1;
(statearr_26968_27024[(2)] = inst_26915);

(statearr_26968_27024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (6))){
var state_26941__$1 = state_26941;
var statearr_26969_27025 = state_26941__$1;
(statearr_26969_27025[(2)] = false);

(statearr_26969_27025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (28))){
var inst_26911 = (state_26941[(2)]);
var inst_26912 = calc_state.call(null);
var inst_26868 = inst_26912;
var state_26941__$1 = (function (){var statearr_26970 = state_26941;
(statearr_26970[(7)] = inst_26868);

(statearr_26970[(15)] = inst_26911);

return statearr_26970;
})();
var statearr_26971_27026 = state_26941__$1;
(statearr_26971_27026[(2)] = null);

(statearr_26971_27026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (25))){
var inst_26937 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26972_27027 = state_26941__$1;
(statearr_26972_27027[(2)] = inst_26937);

(statearr_26972_27027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (34))){
var inst_26935 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26973_27028 = state_26941__$1;
(statearr_26973_27028[(2)] = inst_26935);

(statearr_26973_27028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (17))){
var state_26941__$1 = state_26941;
var statearr_26974_27029 = state_26941__$1;
(statearr_26974_27029[(2)] = false);

(statearr_26974_27029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (3))){
var state_26941__$1 = state_26941;
var statearr_26975_27030 = state_26941__$1;
(statearr_26975_27030[(2)] = false);

(statearr_26975_27030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (12))){
var inst_26939 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
if((state_val_26942 === (2))){
var inst_26843 = (state_26941[(8)]);
var inst_26848 = inst_26843.cljs$lang$protocol_mask$partition0$;
var inst_26849 = (inst_26848 & (64));
var inst_26850 = inst_26843.cljs$core$ISeq$;
var inst_26851 = (cljs.core.PROTOCOL_SENTINEL === inst_26850);
var inst_26852 = (inst_26849) || (inst_26851);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26852)){
var statearr_26976_27031 = state_26941__$1;
(statearr_26976_27031[(1)] = (5));

} else {
var statearr_26977_27032 = state_26941__$1;
(statearr_26977_27032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (23))){
var inst_26900 = (state_26941[(14)]);
var inst_26906 = (inst_26900 == null);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26906)){
var statearr_26978_27033 = state_26941__$1;
(statearr_26978_27033[(1)] = (26));

} else {
var statearr_26979_27034 = state_26941__$1;
(statearr_26979_27034[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (35))){
var inst_26926 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26926)){
var statearr_26980_27035 = state_26941__$1;
(statearr_26980_27035[(1)] = (36));

} else {
var statearr_26981_27036 = state_26941__$1;
(statearr_26981_27036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (19))){
var inst_26868 = (state_26941[(7)]);
var inst_26888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26868);
var state_26941__$1 = state_26941;
var statearr_26982_27037 = state_26941__$1;
(statearr_26982_27037[(2)] = inst_26888);

(statearr_26982_27037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (11))){
var inst_26868 = (state_26941[(7)]);
var inst_26872 = (inst_26868 == null);
var inst_26873 = cljs.core.not.call(null,inst_26872);
var state_26941__$1 = state_26941;
if(inst_26873){
var statearr_26983_27038 = state_26941__$1;
(statearr_26983_27038[(1)] = (13));

} else {
var statearr_26984_27039 = state_26941__$1;
(statearr_26984_27039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (9))){
var inst_26843 = (state_26941[(8)]);
var state_26941__$1 = state_26941;
var statearr_26985_27040 = state_26941__$1;
(statearr_26985_27040[(2)] = inst_26843);

(statearr_26985_27040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (5))){
var state_26941__$1 = state_26941;
var statearr_26986_27041 = state_26941__$1;
(statearr_26986_27041[(2)] = true);

(statearr_26986_27041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (14))){
var state_26941__$1 = state_26941;
var statearr_26987_27042 = state_26941__$1;
(statearr_26987_27042[(2)] = false);

(statearr_26987_27042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (26))){
var inst_26901 = (state_26941[(10)]);
var inst_26908 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26901);
var state_26941__$1 = state_26941;
var statearr_26988_27043 = state_26941__$1;
(statearr_26988_27043[(2)] = inst_26908);

(statearr_26988_27043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (16))){
var state_26941__$1 = state_26941;
var statearr_26989_27044 = state_26941__$1;
(statearr_26989_27044[(2)] = true);

(statearr_26989_27044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (38))){
var inst_26931 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26990_27045 = state_26941__$1;
(statearr_26990_27045[(2)] = inst_26931);

(statearr_26990_27045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (30))){
var inst_26892 = (state_26941[(9)]);
var inst_26901 = (state_26941[(10)]);
var inst_26893 = (state_26941[(13)]);
var inst_26918 = cljs.core.empty_QMARK_.call(null,inst_26892);
var inst_26919 = inst_26893.call(null,inst_26901);
var inst_26920 = cljs.core.not.call(null,inst_26919);
var inst_26921 = (inst_26918) && (inst_26920);
var state_26941__$1 = state_26941;
var statearr_26991_27046 = state_26941__$1;
(statearr_26991_27046[(2)] = inst_26921);

(statearr_26991_27046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (10))){
var inst_26843 = (state_26941[(8)]);
var inst_26864 = (state_26941[(2)]);
var inst_26865 = cljs.core.get.call(null,inst_26864,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26866 = cljs.core.get.call(null,inst_26864,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26867 = cljs.core.get.call(null,inst_26864,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26868 = inst_26843;
var state_26941__$1 = (function (){var statearr_26992 = state_26941;
(statearr_26992[(7)] = inst_26868);

(statearr_26992[(16)] = inst_26865);

(statearr_26992[(17)] = inst_26866);

(statearr_26992[(18)] = inst_26867);

return statearr_26992;
})();
var statearr_26993_27047 = state_26941__$1;
(statearr_26993_27047[(2)] = null);

(statearr_26993_27047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (18))){
var inst_26883 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26994_27048 = state_26941__$1;
(statearr_26994_27048[(2)] = inst_26883);

(statearr_26994_27048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (37))){
var state_26941__$1 = state_26941;
var statearr_26995_27049 = state_26941__$1;
(statearr_26995_27049[(2)] = null);

(statearr_26995_27049[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (8))){
var inst_26843 = (state_26941[(8)]);
var inst_26861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26843);
var state_26941__$1 = state_26941;
var statearr_26996_27050 = state_26941__$1;
(statearr_26996_27050[(2)] = inst_26861);

(statearr_26996_27050[(1)] = (10));


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
});})(c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25155__auto__,c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25156__auto__ = null;
var cljs$core$async$mix_$_state_machine__25156__auto____0 = (function (){
var statearr_27000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27000[(0)] = cljs$core$async$mix_$_state_machine__25156__auto__);

(statearr_27000[(1)] = (1));

return statearr_27000;
});
var cljs$core$async$mix_$_state_machine__25156__auto____1 = (function (state_26941){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27001){if((e27001 instanceof Object)){
var ex__25159__auto__ = e27001;
var statearr_27002_27051 = state_26941;
(statearr_27002_27051[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_26941;
state_26941 = G__27052;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25156__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25156__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25156__auto____0;
cljs$core$async$mix_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25156__auto____1;
return cljs$core$async$mix_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25269__auto__ = (function (){var statearr_27003 = f__25268__auto__.call(null);
(statearr_27003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27004);

return statearr_27003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27004,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23013__auto__ = (((p == null))?null:p);
var m__23014__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23014__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23013__auto__ = (((p == null))?null:p);
var m__23014__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,p,v,ch);
} else {
var m__23014__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27053 = [];
var len__23458__auto___27056 = arguments.length;
var i__23459__auto___27057 = (0);
while(true){
if((i__23459__auto___27057 < len__23458__auto___27056)){
args27053.push((arguments[i__23459__auto___27057]));

var G__27058 = (i__23459__auto___27057 + (1));
i__23459__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var G__27055 = args27053.length;
switch (G__27055) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27053.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23013__auto__ = (((p == null))?null:p);
var m__23014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,p);
} else {
var m__23014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23013__auto__ = (((p == null))?null:p);
var m__23014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23013__auto__)]);
if(!((m__23014__auto__ == null))){
return m__23014__auto__.call(null,p,v);
} else {
var m__23014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23014__auto____$1 == null))){
return m__23014__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27061 = [];
var len__23458__auto___27186 = arguments.length;
var i__23459__auto___27187 = (0);
while(true){
if((i__23459__auto___27187 < len__23458__auto___27186)){
args27061.push((arguments[i__23459__auto___27187]));

var G__27188 = (i__23459__auto___27187 + (1));
i__23459__auto___27187 = G__27188;
continue;
} else {
}
break;
}

var G__27063 = args27061.length;
switch (G__27063) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27061.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22345__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22345__auto__,mults){
return (function (p1__27060_SHARP_){
if(cljs.core.truth_(p1__27060_SHARP_.call(null,topic))){
return p1__27060_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27060_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22345__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27064 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27065){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27065 = meta27065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27066,meta27065__$1){
var self__ = this;
var _27066__$1 = this;
return (new cljs.core.async.t_cljs$core$async27064(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27065__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27066){
var self__ = this;
var _27066__$1 = this;
return self__.meta27065;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27065","meta27065",-796771128,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27064";

cljs.core.async.t_cljs$core$async27064.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async27064");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27064 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27065){
return (new cljs.core.async.t_cljs$core$async27064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27065));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27064(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25267__auto___27190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27190,mults,ensure_mult,p){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27190,mults,ensure_mult,p){
return (function (state_27138){
var state_val_27139 = (state_27138[(1)]);
if((state_val_27139 === (7))){
var inst_27134 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27140_27191 = state_27138__$1;
(statearr_27140_27191[(2)] = inst_27134);

(statearr_27140_27191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (20))){
var state_27138__$1 = state_27138;
var statearr_27141_27192 = state_27138__$1;
(statearr_27141_27192[(2)] = null);

(statearr_27141_27192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (1))){
var state_27138__$1 = state_27138;
var statearr_27142_27193 = state_27138__$1;
(statearr_27142_27193[(2)] = null);

(statearr_27142_27193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (24))){
var inst_27117 = (state_27138[(7)]);
var inst_27126 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27117);
var state_27138__$1 = state_27138;
var statearr_27143_27194 = state_27138__$1;
(statearr_27143_27194[(2)] = inst_27126);

(statearr_27143_27194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (4))){
var inst_27069 = (state_27138[(8)]);
var inst_27069__$1 = (state_27138[(2)]);
var inst_27070 = (inst_27069__$1 == null);
var state_27138__$1 = (function (){var statearr_27144 = state_27138;
(statearr_27144[(8)] = inst_27069__$1);

return statearr_27144;
})();
if(cljs.core.truth_(inst_27070)){
var statearr_27145_27195 = state_27138__$1;
(statearr_27145_27195[(1)] = (5));

} else {
var statearr_27146_27196 = state_27138__$1;
(statearr_27146_27196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (15))){
var inst_27111 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27147_27197 = state_27138__$1;
(statearr_27147_27197[(2)] = inst_27111);

(statearr_27147_27197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (21))){
var inst_27131 = (state_27138[(2)]);
var state_27138__$1 = (function (){var statearr_27148 = state_27138;
(statearr_27148[(9)] = inst_27131);

return statearr_27148;
})();
var statearr_27149_27198 = state_27138__$1;
(statearr_27149_27198[(2)] = null);

(statearr_27149_27198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (13))){
var inst_27093 = (state_27138[(10)]);
var inst_27095 = cljs.core.chunked_seq_QMARK_.call(null,inst_27093);
var state_27138__$1 = state_27138;
if(inst_27095){
var statearr_27150_27199 = state_27138__$1;
(statearr_27150_27199[(1)] = (16));

} else {
var statearr_27151_27200 = state_27138__$1;
(statearr_27151_27200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (22))){
var inst_27123 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
if(cljs.core.truth_(inst_27123)){
var statearr_27152_27201 = state_27138__$1;
(statearr_27152_27201[(1)] = (23));

} else {
var statearr_27153_27202 = state_27138__$1;
(statearr_27153_27202[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (6))){
var inst_27119 = (state_27138[(11)]);
var inst_27069 = (state_27138[(8)]);
var inst_27117 = (state_27138[(7)]);
var inst_27117__$1 = topic_fn.call(null,inst_27069);
var inst_27118 = cljs.core.deref.call(null,mults);
var inst_27119__$1 = cljs.core.get.call(null,inst_27118,inst_27117__$1);
var state_27138__$1 = (function (){var statearr_27154 = state_27138;
(statearr_27154[(11)] = inst_27119__$1);

(statearr_27154[(7)] = inst_27117__$1);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27119__$1)){
var statearr_27155_27203 = state_27138__$1;
(statearr_27155_27203[(1)] = (19));

} else {
var statearr_27156_27204 = state_27138__$1;
(statearr_27156_27204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (25))){
var inst_27128 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27157_27205 = state_27138__$1;
(statearr_27157_27205[(2)] = inst_27128);

(statearr_27157_27205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (17))){
var inst_27093 = (state_27138[(10)]);
var inst_27102 = cljs.core.first.call(null,inst_27093);
var inst_27103 = cljs.core.async.muxch_STAR_.call(null,inst_27102);
var inst_27104 = cljs.core.async.close_BANG_.call(null,inst_27103);
var inst_27105 = cljs.core.next.call(null,inst_27093);
var inst_27079 = inst_27105;
var inst_27080 = null;
var inst_27081 = (0);
var inst_27082 = (0);
var state_27138__$1 = (function (){var statearr_27158 = state_27138;
(statearr_27158[(12)] = inst_27104);

(statearr_27158[(13)] = inst_27082);

(statearr_27158[(14)] = inst_27080);

(statearr_27158[(15)] = inst_27081);

(statearr_27158[(16)] = inst_27079);

return statearr_27158;
})();
var statearr_27159_27206 = state_27138__$1;
(statearr_27159_27206[(2)] = null);

(statearr_27159_27206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (3))){
var inst_27136 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27138__$1,inst_27136);
} else {
if((state_val_27139 === (12))){
var inst_27113 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27160_27207 = state_27138__$1;
(statearr_27160_27207[(2)] = inst_27113);

(statearr_27160_27207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (2))){
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27138__$1,(4),ch);
} else {
if((state_val_27139 === (23))){
var state_27138__$1 = state_27138;
var statearr_27161_27208 = state_27138__$1;
(statearr_27161_27208[(2)] = null);

(statearr_27161_27208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (19))){
var inst_27119 = (state_27138[(11)]);
var inst_27069 = (state_27138[(8)]);
var inst_27121 = cljs.core.async.muxch_STAR_.call(null,inst_27119);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27138__$1,(22),inst_27121,inst_27069);
} else {
if((state_val_27139 === (11))){
var inst_27079 = (state_27138[(16)]);
var inst_27093 = (state_27138[(10)]);
var inst_27093__$1 = cljs.core.seq.call(null,inst_27079);
var state_27138__$1 = (function (){var statearr_27162 = state_27138;
(statearr_27162[(10)] = inst_27093__$1);

return statearr_27162;
})();
if(inst_27093__$1){
var statearr_27163_27209 = state_27138__$1;
(statearr_27163_27209[(1)] = (13));

} else {
var statearr_27164_27210 = state_27138__$1;
(statearr_27164_27210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (9))){
var inst_27115 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27165_27211 = state_27138__$1;
(statearr_27165_27211[(2)] = inst_27115);

(statearr_27165_27211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (5))){
var inst_27076 = cljs.core.deref.call(null,mults);
var inst_27077 = cljs.core.vals.call(null,inst_27076);
var inst_27078 = cljs.core.seq.call(null,inst_27077);
var inst_27079 = inst_27078;
var inst_27080 = null;
var inst_27081 = (0);
var inst_27082 = (0);
var state_27138__$1 = (function (){var statearr_27166 = state_27138;
(statearr_27166[(13)] = inst_27082);

(statearr_27166[(14)] = inst_27080);

(statearr_27166[(15)] = inst_27081);

(statearr_27166[(16)] = inst_27079);

return statearr_27166;
})();
var statearr_27167_27212 = state_27138__$1;
(statearr_27167_27212[(2)] = null);

(statearr_27167_27212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (14))){
var state_27138__$1 = state_27138;
var statearr_27171_27213 = state_27138__$1;
(statearr_27171_27213[(2)] = null);

(statearr_27171_27213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (16))){
var inst_27093 = (state_27138[(10)]);
var inst_27097 = cljs.core.chunk_first.call(null,inst_27093);
var inst_27098 = cljs.core.chunk_rest.call(null,inst_27093);
var inst_27099 = cljs.core.count.call(null,inst_27097);
var inst_27079 = inst_27098;
var inst_27080 = inst_27097;
var inst_27081 = inst_27099;
var inst_27082 = (0);
var state_27138__$1 = (function (){var statearr_27172 = state_27138;
(statearr_27172[(13)] = inst_27082);

(statearr_27172[(14)] = inst_27080);

(statearr_27172[(15)] = inst_27081);

(statearr_27172[(16)] = inst_27079);

return statearr_27172;
})();
var statearr_27173_27214 = state_27138__$1;
(statearr_27173_27214[(2)] = null);

(statearr_27173_27214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (10))){
var inst_27082 = (state_27138[(13)]);
var inst_27080 = (state_27138[(14)]);
var inst_27081 = (state_27138[(15)]);
var inst_27079 = (state_27138[(16)]);
var inst_27087 = cljs.core._nth.call(null,inst_27080,inst_27082);
var inst_27088 = cljs.core.async.muxch_STAR_.call(null,inst_27087);
var inst_27089 = cljs.core.async.close_BANG_.call(null,inst_27088);
var inst_27090 = (inst_27082 + (1));
var tmp27168 = inst_27080;
var tmp27169 = inst_27081;
var tmp27170 = inst_27079;
var inst_27079__$1 = tmp27170;
var inst_27080__$1 = tmp27168;
var inst_27081__$1 = tmp27169;
var inst_27082__$1 = inst_27090;
var state_27138__$1 = (function (){var statearr_27174 = state_27138;
(statearr_27174[(13)] = inst_27082__$1);

(statearr_27174[(14)] = inst_27080__$1);

(statearr_27174[(15)] = inst_27081__$1);

(statearr_27174[(17)] = inst_27089);

(statearr_27174[(16)] = inst_27079__$1);

return statearr_27174;
})();
var statearr_27175_27215 = state_27138__$1;
(statearr_27175_27215[(2)] = null);

(statearr_27175_27215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (18))){
var inst_27108 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27176_27216 = state_27138__$1;
(statearr_27176_27216[(2)] = inst_27108);

(statearr_27176_27216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (8))){
var inst_27082 = (state_27138[(13)]);
var inst_27081 = (state_27138[(15)]);
var inst_27084 = (inst_27082 < inst_27081);
var inst_27085 = inst_27084;
var state_27138__$1 = state_27138;
if(cljs.core.truth_(inst_27085)){
var statearr_27177_27217 = state_27138__$1;
(statearr_27177_27217[(1)] = (10));

} else {
var statearr_27178_27218 = state_27138__$1;
(statearr_27178_27218[(1)] = (11));

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
});})(c__25267__auto___27190,mults,ensure_mult,p))
;
return ((function (switch__25155__auto__,c__25267__auto___27190,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27182[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27182[(1)] = (1));

return statearr_27182;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27138){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27183){if((e27183 instanceof Object)){
var ex__25159__auto__ = e27183;
var statearr_27184_27219 = state_27138;
(statearr_27184_27219[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27220 = state_27138;
state_27138 = G__27220;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27190,mults,ensure_mult,p))
})();
var state__25269__auto__ = (function (){var statearr_27185 = f__25268__auto__.call(null);
(statearr_27185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27190);

return statearr_27185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27190,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27221 = [];
var len__23458__auto___27224 = arguments.length;
var i__23459__auto___27225 = (0);
while(true){
if((i__23459__auto___27225 < len__23458__auto___27224)){
args27221.push((arguments[i__23459__auto___27225]));

var G__27226 = (i__23459__auto___27225 + (1));
i__23459__auto___27225 = G__27226;
continue;
} else {
}
break;
}

var G__27223 = args27221.length;
switch (G__27223) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27221.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27228 = [];
var len__23458__auto___27231 = arguments.length;
var i__23459__auto___27232 = (0);
while(true){
if((i__23459__auto___27232 < len__23458__auto___27231)){
args27228.push((arguments[i__23459__auto___27232]));

var G__27233 = (i__23459__auto___27232 + (1));
i__23459__auto___27232 = G__27233;
continue;
} else {
}
break;
}

var G__27230 = args27228.length;
switch (G__27230) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27228.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27235 = [];
var len__23458__auto___27306 = arguments.length;
var i__23459__auto___27307 = (0);
while(true){
if((i__23459__auto___27307 < len__23458__auto___27306)){
args27235.push((arguments[i__23459__auto___27307]));

var G__27308 = (i__23459__auto___27307 + (1));
i__23459__auto___27307 = G__27308;
continue;
} else {
}
break;
}

var G__27237 = args27235.length;
switch (G__27237) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27235.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25267__auto___27310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27276){
var state_val_27277 = (state_27276[(1)]);
if((state_val_27277 === (7))){
var state_27276__$1 = state_27276;
var statearr_27278_27311 = state_27276__$1;
(statearr_27278_27311[(2)] = null);

(statearr_27278_27311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (1))){
var state_27276__$1 = state_27276;
var statearr_27279_27312 = state_27276__$1;
(statearr_27279_27312[(2)] = null);

(statearr_27279_27312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (4))){
var inst_27240 = (state_27276[(7)]);
var inst_27242 = (inst_27240 < cnt);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27242)){
var statearr_27280_27313 = state_27276__$1;
(statearr_27280_27313[(1)] = (6));

} else {
var statearr_27281_27314 = state_27276__$1;
(statearr_27281_27314[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (15))){
var inst_27272 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27282_27315 = state_27276__$1;
(statearr_27282_27315[(2)] = inst_27272);

(statearr_27282_27315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (13))){
var inst_27265 = cljs.core.async.close_BANG_.call(null,out);
var state_27276__$1 = state_27276;
var statearr_27283_27316 = state_27276__$1;
(statearr_27283_27316[(2)] = inst_27265);

(statearr_27283_27316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (6))){
var state_27276__$1 = state_27276;
var statearr_27284_27317 = state_27276__$1;
(statearr_27284_27317[(2)] = null);

(statearr_27284_27317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (3))){
var inst_27274 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27276__$1,inst_27274);
} else {
if((state_val_27277 === (12))){
var inst_27262 = (state_27276[(8)]);
var inst_27262__$1 = (state_27276[(2)]);
var inst_27263 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27262__$1);
var state_27276__$1 = (function (){var statearr_27285 = state_27276;
(statearr_27285[(8)] = inst_27262__$1);

return statearr_27285;
})();
if(cljs.core.truth_(inst_27263)){
var statearr_27286_27318 = state_27276__$1;
(statearr_27286_27318[(1)] = (13));

} else {
var statearr_27287_27319 = state_27276__$1;
(statearr_27287_27319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (2))){
var inst_27239 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27240 = (0);
var state_27276__$1 = (function (){var statearr_27288 = state_27276;
(statearr_27288[(9)] = inst_27239);

(statearr_27288[(7)] = inst_27240);

return statearr_27288;
})();
var statearr_27289_27320 = state_27276__$1;
(statearr_27289_27320[(2)] = null);

(statearr_27289_27320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (11))){
var inst_27240 = (state_27276[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27276,(10),Object,null,(9));
var inst_27249 = chs__$1.call(null,inst_27240);
var inst_27250 = done.call(null,inst_27240);
var inst_27251 = cljs.core.async.take_BANG_.call(null,inst_27249,inst_27250);
var state_27276__$1 = state_27276;
var statearr_27290_27321 = state_27276__$1;
(statearr_27290_27321[(2)] = inst_27251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (9))){
var inst_27240 = (state_27276[(7)]);
var inst_27253 = (state_27276[(2)]);
var inst_27254 = (inst_27240 + (1));
var inst_27240__$1 = inst_27254;
var state_27276__$1 = (function (){var statearr_27291 = state_27276;
(statearr_27291[(10)] = inst_27253);

(statearr_27291[(7)] = inst_27240__$1);

return statearr_27291;
})();
var statearr_27292_27322 = state_27276__$1;
(statearr_27292_27322[(2)] = null);

(statearr_27292_27322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (5))){
var inst_27260 = (state_27276[(2)]);
var state_27276__$1 = (function (){var statearr_27293 = state_27276;
(statearr_27293[(11)] = inst_27260);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(12),dchan);
} else {
if((state_val_27277 === (14))){
var inst_27262 = (state_27276[(8)]);
var inst_27267 = cljs.core.apply.call(null,f,inst_27262);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27276__$1,(16),out,inst_27267);
} else {
if((state_val_27277 === (16))){
var inst_27269 = (state_27276[(2)]);
var state_27276__$1 = (function (){var statearr_27294 = state_27276;
(statearr_27294[(12)] = inst_27269);

return statearr_27294;
})();
var statearr_27295_27323 = state_27276__$1;
(statearr_27295_27323[(2)] = null);

(statearr_27295_27323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (10))){
var inst_27244 = (state_27276[(2)]);
var inst_27245 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27276__$1 = (function (){var statearr_27296 = state_27276;
(statearr_27296[(13)] = inst_27244);

return statearr_27296;
})();
var statearr_27297_27324 = state_27276__$1;
(statearr_27297_27324[(2)] = inst_27245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (8))){
var inst_27258 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27298_27325 = state_27276__$1;
(statearr_27298_27325[(2)] = inst_27258);

(statearr_27298_27325[(1)] = (5));


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
});})(c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25155__auto__,c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27302[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27302[(1)] = (1));

return statearr_27302;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27276){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27303){if((e27303 instanceof Object)){
var ex__25159__auto__ = e27303;
var statearr_27304_27326 = state_27276;
(statearr_27304_27326[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27327 = state_27276;
state_27276 = G__27327;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25269__auto__ = (function (){var statearr_27305 = f__25268__auto__.call(null);
(statearr_27305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27310);

return statearr_27305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27310,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27329 = [];
var len__23458__auto___27387 = arguments.length;
var i__23459__auto___27388 = (0);
while(true){
if((i__23459__auto___27388 < len__23458__auto___27387)){
args27329.push((arguments[i__23459__auto___27388]));

var G__27389 = (i__23459__auto___27388 + (1));
i__23459__auto___27388 = G__27389;
continue;
} else {
}
break;
}

var G__27331 = args27329.length;
switch (G__27331) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27329.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___27391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27391,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27391,out){
return (function (state_27363){
var state_val_27364 = (state_27363[(1)]);
if((state_val_27364 === (7))){
var inst_27343 = (state_27363[(7)]);
var inst_27342 = (state_27363[(8)]);
var inst_27342__$1 = (state_27363[(2)]);
var inst_27343__$1 = cljs.core.nth.call(null,inst_27342__$1,(0),null);
var inst_27344 = cljs.core.nth.call(null,inst_27342__$1,(1),null);
var inst_27345 = (inst_27343__$1 == null);
var state_27363__$1 = (function (){var statearr_27365 = state_27363;
(statearr_27365[(9)] = inst_27344);

(statearr_27365[(7)] = inst_27343__$1);

(statearr_27365[(8)] = inst_27342__$1);

return statearr_27365;
})();
if(cljs.core.truth_(inst_27345)){
var statearr_27366_27392 = state_27363__$1;
(statearr_27366_27392[(1)] = (8));

} else {
var statearr_27367_27393 = state_27363__$1;
(statearr_27367_27393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (1))){
var inst_27332 = cljs.core.vec.call(null,chs);
var inst_27333 = inst_27332;
var state_27363__$1 = (function (){var statearr_27368 = state_27363;
(statearr_27368[(10)] = inst_27333);

return statearr_27368;
})();
var statearr_27369_27394 = state_27363__$1;
(statearr_27369_27394[(2)] = null);

(statearr_27369_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (4))){
var inst_27333 = (state_27363[(10)]);
var state_27363__$1 = state_27363;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27363__$1,(7),inst_27333);
} else {
if((state_val_27364 === (6))){
var inst_27359 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
var statearr_27370_27395 = state_27363__$1;
(statearr_27370_27395[(2)] = inst_27359);

(statearr_27370_27395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (3))){
var inst_27361 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27363__$1,inst_27361);
} else {
if((state_val_27364 === (2))){
var inst_27333 = (state_27363[(10)]);
var inst_27335 = cljs.core.count.call(null,inst_27333);
var inst_27336 = (inst_27335 > (0));
var state_27363__$1 = state_27363;
if(cljs.core.truth_(inst_27336)){
var statearr_27372_27396 = state_27363__$1;
(statearr_27372_27396[(1)] = (4));

} else {
var statearr_27373_27397 = state_27363__$1;
(statearr_27373_27397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (11))){
var inst_27333 = (state_27363[(10)]);
var inst_27352 = (state_27363[(2)]);
var tmp27371 = inst_27333;
var inst_27333__$1 = tmp27371;
var state_27363__$1 = (function (){var statearr_27374 = state_27363;
(statearr_27374[(11)] = inst_27352);

(statearr_27374[(10)] = inst_27333__$1);

return statearr_27374;
})();
var statearr_27375_27398 = state_27363__$1;
(statearr_27375_27398[(2)] = null);

(statearr_27375_27398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (9))){
var inst_27343 = (state_27363[(7)]);
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27363__$1,(11),out,inst_27343);
} else {
if((state_val_27364 === (5))){
var inst_27357 = cljs.core.async.close_BANG_.call(null,out);
var state_27363__$1 = state_27363;
var statearr_27376_27399 = state_27363__$1;
(statearr_27376_27399[(2)] = inst_27357);

(statearr_27376_27399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (10))){
var inst_27355 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
var statearr_27377_27400 = state_27363__$1;
(statearr_27377_27400[(2)] = inst_27355);

(statearr_27377_27400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27364 === (8))){
var inst_27344 = (state_27363[(9)]);
var inst_27343 = (state_27363[(7)]);
var inst_27342 = (state_27363[(8)]);
var inst_27333 = (state_27363[(10)]);
var inst_27347 = (function (){var cs = inst_27333;
var vec__27338 = inst_27342;
var v = inst_27343;
var c = inst_27344;
return ((function (cs,vec__27338,v,c,inst_27344,inst_27343,inst_27342,inst_27333,state_val_27364,c__25267__auto___27391,out){
return (function (p1__27328_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27328_SHARP_);
});
;})(cs,vec__27338,v,c,inst_27344,inst_27343,inst_27342,inst_27333,state_val_27364,c__25267__auto___27391,out))
})();
var inst_27348 = cljs.core.filterv.call(null,inst_27347,inst_27333);
var inst_27333__$1 = inst_27348;
var state_27363__$1 = (function (){var statearr_27378 = state_27363;
(statearr_27378[(10)] = inst_27333__$1);

return statearr_27378;
})();
var statearr_27379_27401 = state_27363__$1;
(statearr_27379_27401[(2)] = null);

(statearr_27379_27401[(1)] = (2));


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
});})(c__25267__auto___27391,out))
;
return ((function (switch__25155__auto__,c__25267__auto___27391,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27383[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27383[(1)] = (1));

return statearr_27383;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27363){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27384){if((e27384 instanceof Object)){
var ex__25159__auto__ = e27384;
var statearr_27385_27402 = state_27363;
(statearr_27385_27402[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27403 = state_27363;
state_27363 = G__27403;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27391,out))
})();
var state__25269__auto__ = (function (){var statearr_27386 = f__25268__auto__.call(null);
(statearr_27386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27391);

return statearr_27386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27391,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27404 = [];
var len__23458__auto___27453 = arguments.length;
var i__23459__auto___27454 = (0);
while(true){
if((i__23459__auto___27454 < len__23458__auto___27453)){
args27404.push((arguments[i__23459__auto___27454]));

var G__27455 = (i__23459__auto___27454 + (1));
i__23459__auto___27454 = G__27455;
continue;
} else {
}
break;
}

var G__27406 = args27404.length;
switch (G__27406) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27404.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___27457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27457,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27457,out){
return (function (state_27430){
var state_val_27431 = (state_27430[(1)]);
if((state_val_27431 === (7))){
var inst_27412 = (state_27430[(7)]);
var inst_27412__$1 = (state_27430[(2)]);
var inst_27413 = (inst_27412__$1 == null);
var inst_27414 = cljs.core.not.call(null,inst_27413);
var state_27430__$1 = (function (){var statearr_27432 = state_27430;
(statearr_27432[(7)] = inst_27412__$1);

return statearr_27432;
})();
if(inst_27414){
var statearr_27433_27458 = state_27430__$1;
(statearr_27433_27458[(1)] = (8));

} else {
var statearr_27434_27459 = state_27430__$1;
(statearr_27434_27459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (1))){
var inst_27407 = (0);
var state_27430__$1 = (function (){var statearr_27435 = state_27430;
(statearr_27435[(8)] = inst_27407);

return statearr_27435;
})();
var statearr_27436_27460 = state_27430__$1;
(statearr_27436_27460[(2)] = null);

(statearr_27436_27460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (4))){
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27430__$1,(7),ch);
} else {
if((state_val_27431 === (6))){
var inst_27425 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27437_27461 = state_27430__$1;
(statearr_27437_27461[(2)] = inst_27425);

(statearr_27437_27461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (3))){
var inst_27427 = (state_27430[(2)]);
var inst_27428 = cljs.core.async.close_BANG_.call(null,out);
var state_27430__$1 = (function (){var statearr_27438 = state_27430;
(statearr_27438[(9)] = inst_27427);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27430__$1,inst_27428);
} else {
if((state_val_27431 === (2))){
var inst_27407 = (state_27430[(8)]);
var inst_27409 = (inst_27407 < n);
var state_27430__$1 = state_27430;
if(cljs.core.truth_(inst_27409)){
var statearr_27439_27462 = state_27430__$1;
(statearr_27439_27462[(1)] = (4));

} else {
var statearr_27440_27463 = state_27430__$1;
(statearr_27440_27463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (11))){
var inst_27407 = (state_27430[(8)]);
var inst_27417 = (state_27430[(2)]);
var inst_27418 = (inst_27407 + (1));
var inst_27407__$1 = inst_27418;
var state_27430__$1 = (function (){var statearr_27441 = state_27430;
(statearr_27441[(8)] = inst_27407__$1);

(statearr_27441[(10)] = inst_27417);

return statearr_27441;
})();
var statearr_27442_27464 = state_27430__$1;
(statearr_27442_27464[(2)] = null);

(statearr_27442_27464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (9))){
var state_27430__$1 = state_27430;
var statearr_27443_27465 = state_27430__$1;
(statearr_27443_27465[(2)] = null);

(statearr_27443_27465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (5))){
var state_27430__$1 = state_27430;
var statearr_27444_27466 = state_27430__$1;
(statearr_27444_27466[(2)] = null);

(statearr_27444_27466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (10))){
var inst_27422 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27445_27467 = state_27430__$1;
(statearr_27445_27467[(2)] = inst_27422);

(statearr_27445_27467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (8))){
var inst_27412 = (state_27430[(7)]);
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27430__$1,(11),out,inst_27412);
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
});})(c__25267__auto___27457,out))
;
return ((function (switch__25155__auto__,c__25267__auto___27457,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27449[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27449[(1)] = (1));

return statearr_27449;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27430){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27450){if((e27450 instanceof Object)){
var ex__25159__auto__ = e27450;
var statearr_27451_27468 = state_27430;
(statearr_27451_27468[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27469 = state_27430;
state_27430 = G__27469;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27457,out))
})();
var state__25269__auto__ = (function (){var statearr_27452 = f__25268__auto__.call(null);
(statearr_27452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27457);

return statearr_27452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27457,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27477 = (function (f,ch,meta27478){
this.f = f;
this.ch = ch;
this.meta27478 = meta27478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27479,meta27478__$1){
var self__ = this;
var _27479__$1 = this;
return (new cljs.core.async.t_cljs$core$async27477(self__.f,self__.ch,meta27478__$1));
});

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27479){
var self__ = this;
var _27479__$1 = this;
return self__.meta27478;
});

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27480 = (function (f,ch,meta27478,_,fn1,meta27481){
this.f = f;
this.ch = ch;
this.meta27478 = meta27478;
this._ = _;
this.fn1 = fn1;
this.meta27481 = meta27481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27482,meta27481__$1){
var self__ = this;
var _27482__$1 = this;
return (new cljs.core.async.t_cljs$core$async27480(self__.f,self__.ch,self__.meta27478,self__._,self__.fn1,meta27481__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27482){
var self__ = this;
var _27482__$1 = this;
return self__.meta27481;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27470_SHARP_){
return f1.call(null,(((p1__27470_SHARP_ == null))?null:self__.f.call(null,p1__27470_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27478","meta27478",1948864285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27477","cljs.core.async/t_cljs$core$async27477",-1661835848,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27481","meta27481",-880582490,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27480";

cljs.core.async.t_cljs$core$async27480.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async27480");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27480 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27480(f__$1,ch__$1,meta27478__$1,___$2,fn1__$1,meta27481){
return (new cljs.core.async.t_cljs$core$async27480(f__$1,ch__$1,meta27478__$1,___$2,fn1__$1,meta27481));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27480(self__.f,self__.ch,self__.meta27478,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22333__auto__ = ret;
if(cljs.core.truth_(and__22333__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22333__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27478","meta27478",1948864285,null)], null);
});

cljs.core.async.t_cljs$core$async27477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27477";

cljs.core.async.t_cljs$core$async27477.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async27477");
});

cljs.core.async.__GT_t_cljs$core$async27477 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27477(f__$1,ch__$1,meta27478){
return (new cljs.core.async.t_cljs$core$async27477(f__$1,ch__$1,meta27478));
});

}

return (new cljs.core.async.t_cljs$core$async27477(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27486 = (function (f,ch,meta27487){
this.f = f;
this.ch = ch;
this.meta27487 = meta27487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27488,meta27487__$1){
var self__ = this;
var _27488__$1 = this;
return (new cljs.core.async.t_cljs$core$async27486(self__.f,self__.ch,meta27487__$1));
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27488){
var self__ = this;
var _27488__$1 = this;
return self__.meta27487;
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27487","meta27487",2058251734,null)], null);
});

cljs.core.async.t_cljs$core$async27486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27486";

cljs.core.async.t_cljs$core$async27486.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async27486");
});

cljs.core.async.__GT_t_cljs$core$async27486 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27486(f__$1,ch__$1,meta27487){
return (new cljs.core.async.t_cljs$core$async27486(f__$1,ch__$1,meta27487));
});

}

return (new cljs.core.async.t_cljs$core$async27486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27492 = (function (p,ch,meta27493){
this.p = p;
this.ch = ch;
this.meta27493 = meta27493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27494,meta27493__$1){
var self__ = this;
var _27494__$1 = this;
return (new cljs.core.async.t_cljs$core$async27492(self__.p,self__.ch,meta27493__$1));
});

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27494){
var self__ = this;
var _27494__$1 = this;
return self__.meta27493;
});

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27493","meta27493",1104528905,null)], null);
});

cljs.core.async.t_cljs$core$async27492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27492";

cljs.core.async.t_cljs$core$async27492.cljs$lang$ctorPrWriter = (function (this__22956__auto__,writer__22957__auto__,opt__22958__auto__){
return cljs.core._write.call(null,writer__22957__auto__,"cljs.core.async/t_cljs$core$async27492");
});

cljs.core.async.__GT_t_cljs$core$async27492 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27492(p__$1,ch__$1,meta27493){
return (new cljs.core.async.t_cljs$core$async27492(p__$1,ch__$1,meta27493));
});

}

return (new cljs.core.async.t_cljs$core$async27492(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27495 = [];
var len__23458__auto___27539 = arguments.length;
var i__23459__auto___27540 = (0);
while(true){
if((i__23459__auto___27540 < len__23458__auto___27539)){
args27495.push((arguments[i__23459__auto___27540]));

var G__27541 = (i__23459__auto___27540 + (1));
i__23459__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var G__27497 = args27495.length;
switch (G__27497) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27495.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___27543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27543,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27543,out){
return (function (state_27518){
var state_val_27519 = (state_27518[(1)]);
if((state_val_27519 === (7))){
var inst_27514 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27520_27544 = state_27518__$1;
(statearr_27520_27544[(2)] = inst_27514);

(statearr_27520_27544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (1))){
var state_27518__$1 = state_27518;
var statearr_27521_27545 = state_27518__$1;
(statearr_27521_27545[(2)] = null);

(statearr_27521_27545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (4))){
var inst_27500 = (state_27518[(7)]);
var inst_27500__$1 = (state_27518[(2)]);
var inst_27501 = (inst_27500__$1 == null);
var state_27518__$1 = (function (){var statearr_27522 = state_27518;
(statearr_27522[(7)] = inst_27500__$1);

return statearr_27522;
})();
if(cljs.core.truth_(inst_27501)){
var statearr_27523_27546 = state_27518__$1;
(statearr_27523_27546[(1)] = (5));

} else {
var statearr_27524_27547 = state_27518__$1;
(statearr_27524_27547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (6))){
var inst_27500 = (state_27518[(7)]);
var inst_27505 = p.call(null,inst_27500);
var state_27518__$1 = state_27518;
if(cljs.core.truth_(inst_27505)){
var statearr_27525_27548 = state_27518__$1;
(statearr_27525_27548[(1)] = (8));

} else {
var statearr_27526_27549 = state_27518__$1;
(statearr_27526_27549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (3))){
var inst_27516 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27518__$1,inst_27516);
} else {
if((state_val_27519 === (2))){
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(4),ch);
} else {
if((state_val_27519 === (11))){
var inst_27508 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27527_27550 = state_27518__$1;
(statearr_27527_27550[(2)] = inst_27508);

(statearr_27527_27550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (9))){
var state_27518__$1 = state_27518;
var statearr_27528_27551 = state_27518__$1;
(statearr_27528_27551[(2)] = null);

(statearr_27528_27551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (5))){
var inst_27503 = cljs.core.async.close_BANG_.call(null,out);
var state_27518__$1 = state_27518;
var statearr_27529_27552 = state_27518__$1;
(statearr_27529_27552[(2)] = inst_27503);

(statearr_27529_27552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (10))){
var inst_27511 = (state_27518[(2)]);
var state_27518__$1 = (function (){var statearr_27530 = state_27518;
(statearr_27530[(8)] = inst_27511);

return statearr_27530;
})();
var statearr_27531_27553 = state_27518__$1;
(statearr_27531_27553[(2)] = null);

(statearr_27531_27553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (8))){
var inst_27500 = (state_27518[(7)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27518__$1,(11),out,inst_27500);
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
});})(c__25267__auto___27543,out))
;
return ((function (switch__25155__auto__,c__25267__auto___27543,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27535 = [null,null,null,null,null,null,null,null,null];
(statearr_27535[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27535[(1)] = (1));

return statearr_27535;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27518){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27536){if((e27536 instanceof Object)){
var ex__25159__auto__ = e27536;
var statearr_27537_27554 = state_27518;
(statearr_27537_27554[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27555 = state_27518;
state_27518 = G__27555;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27543,out))
})();
var state__25269__auto__ = (function (){var statearr_27538 = f__25268__auto__.call(null);
(statearr_27538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27543);

return statearr_27538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27543,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27556 = [];
var len__23458__auto___27559 = arguments.length;
var i__23459__auto___27560 = (0);
while(true){
if((i__23459__auto___27560 < len__23458__auto___27559)){
args27556.push((arguments[i__23459__auto___27560]));

var G__27561 = (i__23459__auto___27560 + (1));
i__23459__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27556.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__){
return (function (state_27728){
var state_val_27729 = (state_27728[(1)]);
if((state_val_27729 === (7))){
var inst_27724 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27730_27771 = state_27728__$1;
(statearr_27730_27771[(2)] = inst_27724);

(statearr_27730_27771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (20))){
var inst_27694 = (state_27728[(7)]);
var inst_27705 = (state_27728[(2)]);
var inst_27706 = cljs.core.next.call(null,inst_27694);
var inst_27680 = inst_27706;
var inst_27681 = null;
var inst_27682 = (0);
var inst_27683 = (0);
var state_27728__$1 = (function (){var statearr_27731 = state_27728;
(statearr_27731[(8)] = inst_27683);

(statearr_27731[(9)] = inst_27682);

(statearr_27731[(10)] = inst_27681);

(statearr_27731[(11)] = inst_27680);

(statearr_27731[(12)] = inst_27705);

return statearr_27731;
})();
var statearr_27732_27772 = state_27728__$1;
(statearr_27732_27772[(2)] = null);

(statearr_27732_27772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (1))){
var state_27728__$1 = state_27728;
var statearr_27733_27773 = state_27728__$1;
(statearr_27733_27773[(2)] = null);

(statearr_27733_27773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (4))){
var inst_27669 = (state_27728[(13)]);
var inst_27669__$1 = (state_27728[(2)]);
var inst_27670 = (inst_27669__$1 == null);
var state_27728__$1 = (function (){var statearr_27734 = state_27728;
(statearr_27734[(13)] = inst_27669__$1);

return statearr_27734;
})();
if(cljs.core.truth_(inst_27670)){
var statearr_27735_27774 = state_27728__$1;
(statearr_27735_27774[(1)] = (5));

} else {
var statearr_27736_27775 = state_27728__$1;
(statearr_27736_27775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (15))){
var state_27728__$1 = state_27728;
var statearr_27740_27776 = state_27728__$1;
(statearr_27740_27776[(2)] = null);

(statearr_27740_27776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (21))){
var state_27728__$1 = state_27728;
var statearr_27741_27777 = state_27728__$1;
(statearr_27741_27777[(2)] = null);

(statearr_27741_27777[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (13))){
var inst_27683 = (state_27728[(8)]);
var inst_27682 = (state_27728[(9)]);
var inst_27681 = (state_27728[(10)]);
var inst_27680 = (state_27728[(11)]);
var inst_27690 = (state_27728[(2)]);
var inst_27691 = (inst_27683 + (1));
var tmp27737 = inst_27682;
var tmp27738 = inst_27681;
var tmp27739 = inst_27680;
var inst_27680__$1 = tmp27739;
var inst_27681__$1 = tmp27738;
var inst_27682__$1 = tmp27737;
var inst_27683__$1 = inst_27691;
var state_27728__$1 = (function (){var statearr_27742 = state_27728;
(statearr_27742[(8)] = inst_27683__$1);

(statearr_27742[(9)] = inst_27682__$1);

(statearr_27742[(10)] = inst_27681__$1);

(statearr_27742[(14)] = inst_27690);

(statearr_27742[(11)] = inst_27680__$1);

return statearr_27742;
})();
var statearr_27743_27778 = state_27728__$1;
(statearr_27743_27778[(2)] = null);

(statearr_27743_27778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (22))){
var state_27728__$1 = state_27728;
var statearr_27744_27779 = state_27728__$1;
(statearr_27744_27779[(2)] = null);

(statearr_27744_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (6))){
var inst_27669 = (state_27728[(13)]);
var inst_27678 = f.call(null,inst_27669);
var inst_27679 = cljs.core.seq.call(null,inst_27678);
var inst_27680 = inst_27679;
var inst_27681 = null;
var inst_27682 = (0);
var inst_27683 = (0);
var state_27728__$1 = (function (){var statearr_27745 = state_27728;
(statearr_27745[(8)] = inst_27683);

(statearr_27745[(9)] = inst_27682);

(statearr_27745[(10)] = inst_27681);

(statearr_27745[(11)] = inst_27680);

return statearr_27745;
})();
var statearr_27746_27780 = state_27728__$1;
(statearr_27746_27780[(2)] = null);

(statearr_27746_27780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (17))){
var inst_27694 = (state_27728[(7)]);
var inst_27698 = cljs.core.chunk_first.call(null,inst_27694);
var inst_27699 = cljs.core.chunk_rest.call(null,inst_27694);
var inst_27700 = cljs.core.count.call(null,inst_27698);
var inst_27680 = inst_27699;
var inst_27681 = inst_27698;
var inst_27682 = inst_27700;
var inst_27683 = (0);
var state_27728__$1 = (function (){var statearr_27747 = state_27728;
(statearr_27747[(8)] = inst_27683);

(statearr_27747[(9)] = inst_27682);

(statearr_27747[(10)] = inst_27681);

(statearr_27747[(11)] = inst_27680);

return statearr_27747;
})();
var statearr_27748_27781 = state_27728__$1;
(statearr_27748_27781[(2)] = null);

(statearr_27748_27781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (3))){
var inst_27726 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27728__$1,inst_27726);
} else {
if((state_val_27729 === (12))){
var inst_27714 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27749_27782 = state_27728__$1;
(statearr_27749_27782[(2)] = inst_27714);

(statearr_27749_27782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (2))){
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(4),in$);
} else {
if((state_val_27729 === (23))){
var inst_27722 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27750_27783 = state_27728__$1;
(statearr_27750_27783[(2)] = inst_27722);

(statearr_27750_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (19))){
var inst_27709 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27751_27784 = state_27728__$1;
(statearr_27751_27784[(2)] = inst_27709);

(statearr_27751_27784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (11))){
var inst_27694 = (state_27728[(7)]);
var inst_27680 = (state_27728[(11)]);
var inst_27694__$1 = cljs.core.seq.call(null,inst_27680);
var state_27728__$1 = (function (){var statearr_27752 = state_27728;
(statearr_27752[(7)] = inst_27694__$1);

return statearr_27752;
})();
if(inst_27694__$1){
var statearr_27753_27785 = state_27728__$1;
(statearr_27753_27785[(1)] = (14));

} else {
var statearr_27754_27786 = state_27728__$1;
(statearr_27754_27786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (9))){
var inst_27716 = (state_27728[(2)]);
var inst_27717 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27728__$1 = (function (){var statearr_27755 = state_27728;
(statearr_27755[(15)] = inst_27716);

return statearr_27755;
})();
if(cljs.core.truth_(inst_27717)){
var statearr_27756_27787 = state_27728__$1;
(statearr_27756_27787[(1)] = (21));

} else {
var statearr_27757_27788 = state_27728__$1;
(statearr_27757_27788[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (5))){
var inst_27672 = cljs.core.async.close_BANG_.call(null,out);
var state_27728__$1 = state_27728;
var statearr_27758_27789 = state_27728__$1;
(statearr_27758_27789[(2)] = inst_27672);

(statearr_27758_27789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (14))){
var inst_27694 = (state_27728[(7)]);
var inst_27696 = cljs.core.chunked_seq_QMARK_.call(null,inst_27694);
var state_27728__$1 = state_27728;
if(inst_27696){
var statearr_27759_27790 = state_27728__$1;
(statearr_27759_27790[(1)] = (17));

} else {
var statearr_27760_27791 = state_27728__$1;
(statearr_27760_27791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (16))){
var inst_27712 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27761_27792 = state_27728__$1;
(statearr_27761_27792[(2)] = inst_27712);

(statearr_27761_27792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (10))){
var inst_27683 = (state_27728[(8)]);
var inst_27681 = (state_27728[(10)]);
var inst_27688 = cljs.core._nth.call(null,inst_27681,inst_27683);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27728__$1,(13),out,inst_27688);
} else {
if((state_val_27729 === (18))){
var inst_27694 = (state_27728[(7)]);
var inst_27703 = cljs.core.first.call(null,inst_27694);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27728__$1,(20),out,inst_27703);
} else {
if((state_val_27729 === (8))){
var inst_27683 = (state_27728[(8)]);
var inst_27682 = (state_27728[(9)]);
var inst_27685 = (inst_27683 < inst_27682);
var inst_27686 = inst_27685;
var state_27728__$1 = state_27728;
if(cljs.core.truth_(inst_27686)){
var statearr_27762_27793 = state_27728__$1;
(statearr_27762_27793[(1)] = (10));

} else {
var statearr_27763_27794 = state_27728__$1;
(statearr_27763_27794[(1)] = (11));

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
});})(c__25267__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____1 = (function (state_27728){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__25159__auto__ = e27768;
var statearr_27769_27795 = state_27728;
(statearr_27769_27795[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27796 = state_27728;
state_27728 = G__27796;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__ = function(state_27728){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____1.call(this,state_27728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25156__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__))
})();
var state__25269__auto__ = (function (){var statearr_27770 = f__25268__auto__.call(null);
(statearr_27770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__))
);

return c__25267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27797 = [];
var len__23458__auto___27800 = arguments.length;
var i__23459__auto___27801 = (0);
while(true){
if((i__23459__auto___27801 < len__23458__auto___27800)){
args27797.push((arguments[i__23459__auto___27801]));

var G__27802 = (i__23459__auto___27801 + (1));
i__23459__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var G__27799 = args27797.length;
switch (G__27799) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27797.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27804 = [];
var len__23458__auto___27807 = arguments.length;
var i__23459__auto___27808 = (0);
while(true){
if((i__23459__auto___27808 < len__23458__auto___27807)){
args27804.push((arguments[i__23459__auto___27808]));

var G__27809 = (i__23459__auto___27808 + (1));
i__23459__auto___27808 = G__27809;
continue;
} else {
}
break;
}

var G__27806 = args27804.length;
switch (G__27806) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27804.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27811 = [];
var len__23458__auto___27862 = arguments.length;
var i__23459__auto___27863 = (0);
while(true){
if((i__23459__auto___27863 < len__23458__auto___27862)){
args27811.push((arguments[i__23459__auto___27863]));

var G__27864 = (i__23459__auto___27863 + (1));
i__23459__auto___27863 = G__27864;
continue;
} else {
}
break;
}

var G__27813 = args27811.length;
switch (G__27813) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27811.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___27866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27866,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27866,out){
return (function (state_27837){
var state_val_27838 = (state_27837[(1)]);
if((state_val_27838 === (7))){
var inst_27832 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27839_27867 = state_27837__$1;
(statearr_27839_27867[(2)] = inst_27832);

(statearr_27839_27867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (1))){
var inst_27814 = null;
var state_27837__$1 = (function (){var statearr_27840 = state_27837;
(statearr_27840[(7)] = inst_27814);

return statearr_27840;
})();
var statearr_27841_27868 = state_27837__$1;
(statearr_27841_27868[(2)] = null);

(statearr_27841_27868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (4))){
var inst_27817 = (state_27837[(8)]);
var inst_27817__$1 = (state_27837[(2)]);
var inst_27818 = (inst_27817__$1 == null);
var inst_27819 = cljs.core.not.call(null,inst_27818);
var state_27837__$1 = (function (){var statearr_27842 = state_27837;
(statearr_27842[(8)] = inst_27817__$1);

return statearr_27842;
})();
if(inst_27819){
var statearr_27843_27869 = state_27837__$1;
(statearr_27843_27869[(1)] = (5));

} else {
var statearr_27844_27870 = state_27837__$1;
(statearr_27844_27870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (6))){
var state_27837__$1 = state_27837;
var statearr_27845_27871 = state_27837__$1;
(statearr_27845_27871[(2)] = null);

(statearr_27845_27871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (3))){
var inst_27834 = (state_27837[(2)]);
var inst_27835 = cljs.core.async.close_BANG_.call(null,out);
var state_27837__$1 = (function (){var statearr_27846 = state_27837;
(statearr_27846[(9)] = inst_27834);

return statearr_27846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27837__$1,inst_27835);
} else {
if((state_val_27838 === (2))){
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27837__$1,(4),ch);
} else {
if((state_val_27838 === (11))){
var inst_27817 = (state_27837[(8)]);
var inst_27826 = (state_27837[(2)]);
var inst_27814 = inst_27817;
var state_27837__$1 = (function (){var statearr_27847 = state_27837;
(statearr_27847[(10)] = inst_27826);

(statearr_27847[(7)] = inst_27814);

return statearr_27847;
})();
var statearr_27848_27872 = state_27837__$1;
(statearr_27848_27872[(2)] = null);

(statearr_27848_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (9))){
var inst_27817 = (state_27837[(8)]);
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27837__$1,(11),out,inst_27817);
} else {
if((state_val_27838 === (5))){
var inst_27817 = (state_27837[(8)]);
var inst_27814 = (state_27837[(7)]);
var inst_27821 = cljs.core._EQ_.call(null,inst_27817,inst_27814);
var state_27837__$1 = state_27837;
if(inst_27821){
var statearr_27850_27873 = state_27837__$1;
(statearr_27850_27873[(1)] = (8));

} else {
var statearr_27851_27874 = state_27837__$1;
(statearr_27851_27874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (10))){
var inst_27829 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27852_27875 = state_27837__$1;
(statearr_27852_27875[(2)] = inst_27829);

(statearr_27852_27875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (8))){
var inst_27814 = (state_27837[(7)]);
var tmp27849 = inst_27814;
var inst_27814__$1 = tmp27849;
var state_27837__$1 = (function (){var statearr_27853 = state_27837;
(statearr_27853[(7)] = inst_27814__$1);

return statearr_27853;
})();
var statearr_27854_27876 = state_27837__$1;
(statearr_27854_27876[(2)] = null);

(statearr_27854_27876[(1)] = (2));


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
});})(c__25267__auto___27866,out))
;
return ((function (switch__25155__auto__,c__25267__auto___27866,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27858[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27858[(1)] = (1));

return statearr_27858;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27837){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27859){if((e27859 instanceof Object)){
var ex__25159__auto__ = e27859;
var statearr_27860_27877 = state_27837;
(statearr_27860_27877[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27837;
state_27837 = G__27878;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27866,out))
})();
var state__25269__auto__ = (function (){var statearr_27861 = f__25268__auto__.call(null);
(statearr_27861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27866);

return statearr_27861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27866,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27879 = [];
var len__23458__auto___27949 = arguments.length;
var i__23459__auto___27950 = (0);
while(true){
if((i__23459__auto___27950 < len__23458__auto___27949)){
args27879.push((arguments[i__23459__auto___27950]));

var G__27951 = (i__23459__auto___27950 + (1));
i__23459__auto___27950 = G__27951;
continue;
} else {
}
break;
}

var G__27881 = args27879.length;
switch (G__27881) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27879.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___27953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___27953,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___27953,out){
return (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27915 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27921_27954 = state_27919__$1;
(statearr_27921_27954[(2)] = inst_27915);

(statearr_27921_27954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var inst_27882 = (new Array(n));
var inst_27883 = inst_27882;
var inst_27884 = (0);
var state_27919__$1 = (function (){var statearr_27922 = state_27919;
(statearr_27922[(7)] = inst_27884);

(statearr_27922[(8)] = inst_27883);

return statearr_27922;
})();
var statearr_27923_27955 = state_27919__$1;
(statearr_27923_27955[(2)] = null);

(statearr_27923_27955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27887 = (state_27919[(9)]);
var inst_27887__$1 = (state_27919[(2)]);
var inst_27888 = (inst_27887__$1 == null);
var inst_27889 = cljs.core.not.call(null,inst_27888);
var state_27919__$1 = (function (){var statearr_27924 = state_27919;
(statearr_27924[(9)] = inst_27887__$1);

return statearr_27924;
})();
if(inst_27889){
var statearr_27925_27956 = state_27919__$1;
(statearr_27925_27956[(1)] = (5));

} else {
var statearr_27926_27957 = state_27919__$1;
(statearr_27926_27957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (15))){
var inst_27909 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27927_27958 = state_27919__$1;
(statearr_27927_27958[(2)] = inst_27909);

(statearr_27927_27958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (13))){
var state_27919__$1 = state_27919;
var statearr_27928_27959 = state_27919__$1;
(statearr_27928_27959[(2)] = null);

(statearr_27928_27959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (6))){
var inst_27884 = (state_27919[(7)]);
var inst_27905 = (inst_27884 > (0));
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27905)){
var statearr_27929_27960 = state_27919__$1;
(statearr_27929_27960[(1)] = (12));

} else {
var statearr_27930_27961 = state_27919__$1;
(statearr_27930_27961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (3))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (12))){
var inst_27883 = (state_27919[(8)]);
var inst_27907 = cljs.core.vec.call(null,inst_27883);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27919__$1,(15),out,inst_27907);
} else {
if((state_val_27920 === (2))){
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27919__$1,(4),ch);
} else {
if((state_val_27920 === (11))){
var inst_27899 = (state_27919[(2)]);
var inst_27900 = (new Array(n));
var inst_27883 = inst_27900;
var inst_27884 = (0);
var state_27919__$1 = (function (){var statearr_27931 = state_27919;
(statearr_27931[(7)] = inst_27884);

(statearr_27931[(8)] = inst_27883);

(statearr_27931[(10)] = inst_27899);

return statearr_27931;
})();
var statearr_27932_27962 = state_27919__$1;
(statearr_27932_27962[(2)] = null);

(statearr_27932_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (9))){
var inst_27883 = (state_27919[(8)]);
var inst_27897 = cljs.core.vec.call(null,inst_27883);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27919__$1,(11),out,inst_27897);
} else {
if((state_val_27920 === (5))){
var inst_27887 = (state_27919[(9)]);
var inst_27884 = (state_27919[(7)]);
var inst_27883 = (state_27919[(8)]);
var inst_27892 = (state_27919[(11)]);
var inst_27891 = (inst_27883[inst_27884] = inst_27887);
var inst_27892__$1 = (inst_27884 + (1));
var inst_27893 = (inst_27892__$1 < n);
var state_27919__$1 = (function (){var statearr_27933 = state_27919;
(statearr_27933[(11)] = inst_27892__$1);

(statearr_27933[(12)] = inst_27891);

return statearr_27933;
})();
if(cljs.core.truth_(inst_27893)){
var statearr_27934_27963 = state_27919__$1;
(statearr_27934_27963[(1)] = (8));

} else {
var statearr_27935_27964 = state_27919__$1;
(statearr_27935_27964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (14))){
var inst_27912 = (state_27919[(2)]);
var inst_27913 = cljs.core.async.close_BANG_.call(null,out);
var state_27919__$1 = (function (){var statearr_27937 = state_27919;
(statearr_27937[(13)] = inst_27912);

return statearr_27937;
})();
var statearr_27938_27965 = state_27919__$1;
(statearr_27938_27965[(2)] = inst_27913);

(statearr_27938_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27903 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27939_27966 = state_27919__$1;
(statearr_27939_27966[(2)] = inst_27903);

(statearr_27939_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27883 = (state_27919[(8)]);
var inst_27892 = (state_27919[(11)]);
var tmp27936 = inst_27883;
var inst_27883__$1 = tmp27936;
var inst_27884 = inst_27892;
var state_27919__$1 = (function (){var statearr_27940 = state_27919;
(statearr_27940[(7)] = inst_27884);

(statearr_27940[(8)] = inst_27883__$1);

return statearr_27940;
})();
var statearr_27941_27967 = state_27919__$1;
(statearr_27941_27967[(2)] = null);

(statearr_27941_27967[(1)] = (2));


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
});})(c__25267__auto___27953,out))
;
return ((function (switch__25155__auto__,c__25267__auto___27953,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_27945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27945[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_27945[(1)] = (1));

return statearr_27945;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_27919){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_27919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e27946){if((e27946 instanceof Object)){
var ex__25159__auto__ = e27946;
var statearr_27947_27968 = state_27919;
(statearr_27947_27968[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27969 = state_27919;
state_27919 = G__27969;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___27953,out))
})();
var state__25269__auto__ = (function (){var statearr_27948 = f__25268__auto__.call(null);
(statearr_27948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___27953);

return statearr_27948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___27953,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27970 = [];
var len__23458__auto___28044 = arguments.length;
var i__23459__auto___28045 = (0);
while(true){
if((i__23459__auto___28045 < len__23458__auto___28044)){
args27970.push((arguments[i__23459__auto___28045]));

var G__28046 = (i__23459__auto___28045 + (1));
i__23459__auto___28045 = G__28046;
continue;
} else {
}
break;
}

var G__27972 = args27970.length;
switch (G__27972) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27970.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25267__auto___28048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___28048,out){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___28048,out){
return (function (state_28014){
var state_val_28015 = (state_28014[(1)]);
if((state_val_28015 === (7))){
var inst_28010 = (state_28014[(2)]);
var state_28014__$1 = state_28014;
var statearr_28016_28049 = state_28014__$1;
(statearr_28016_28049[(2)] = inst_28010);

(statearr_28016_28049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (1))){
var inst_27973 = [];
var inst_27974 = inst_27973;
var inst_27975 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28014__$1 = (function (){var statearr_28017 = state_28014;
(statearr_28017[(7)] = inst_27974);

(statearr_28017[(8)] = inst_27975);

return statearr_28017;
})();
var statearr_28018_28050 = state_28014__$1;
(statearr_28018_28050[(2)] = null);

(statearr_28018_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (4))){
var inst_27978 = (state_28014[(9)]);
var inst_27978__$1 = (state_28014[(2)]);
var inst_27979 = (inst_27978__$1 == null);
var inst_27980 = cljs.core.not.call(null,inst_27979);
var state_28014__$1 = (function (){var statearr_28019 = state_28014;
(statearr_28019[(9)] = inst_27978__$1);

return statearr_28019;
})();
if(inst_27980){
var statearr_28020_28051 = state_28014__$1;
(statearr_28020_28051[(1)] = (5));

} else {
var statearr_28021_28052 = state_28014__$1;
(statearr_28021_28052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (15))){
var inst_28004 = (state_28014[(2)]);
var state_28014__$1 = state_28014;
var statearr_28022_28053 = state_28014__$1;
(statearr_28022_28053[(2)] = inst_28004);

(statearr_28022_28053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (13))){
var state_28014__$1 = state_28014;
var statearr_28023_28054 = state_28014__$1;
(statearr_28023_28054[(2)] = null);

(statearr_28023_28054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (6))){
var inst_27974 = (state_28014[(7)]);
var inst_27999 = inst_27974.length;
var inst_28000 = (inst_27999 > (0));
var state_28014__$1 = state_28014;
if(cljs.core.truth_(inst_28000)){
var statearr_28024_28055 = state_28014__$1;
(statearr_28024_28055[(1)] = (12));

} else {
var statearr_28025_28056 = state_28014__$1;
(statearr_28025_28056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (3))){
var inst_28012 = (state_28014[(2)]);
var state_28014__$1 = state_28014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28014__$1,inst_28012);
} else {
if((state_val_28015 === (12))){
var inst_27974 = (state_28014[(7)]);
var inst_28002 = cljs.core.vec.call(null,inst_27974);
var state_28014__$1 = state_28014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28014__$1,(15),out,inst_28002);
} else {
if((state_val_28015 === (2))){
var state_28014__$1 = state_28014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28014__$1,(4),ch);
} else {
if((state_val_28015 === (11))){
var inst_27982 = (state_28014[(10)]);
var inst_27978 = (state_28014[(9)]);
var inst_27992 = (state_28014[(2)]);
var inst_27993 = [];
var inst_27994 = inst_27993.push(inst_27978);
var inst_27974 = inst_27993;
var inst_27975 = inst_27982;
var state_28014__$1 = (function (){var statearr_28026 = state_28014;
(statearr_28026[(11)] = inst_27994);

(statearr_28026[(7)] = inst_27974);

(statearr_28026[(12)] = inst_27992);

(statearr_28026[(8)] = inst_27975);

return statearr_28026;
})();
var statearr_28027_28057 = state_28014__$1;
(statearr_28027_28057[(2)] = null);

(statearr_28027_28057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (9))){
var inst_27974 = (state_28014[(7)]);
var inst_27990 = cljs.core.vec.call(null,inst_27974);
var state_28014__$1 = state_28014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28014__$1,(11),out,inst_27990);
} else {
if((state_val_28015 === (5))){
var inst_27982 = (state_28014[(10)]);
var inst_27978 = (state_28014[(9)]);
var inst_27975 = (state_28014[(8)]);
var inst_27982__$1 = f.call(null,inst_27978);
var inst_27983 = cljs.core._EQ_.call(null,inst_27982__$1,inst_27975);
var inst_27984 = cljs.core.keyword_identical_QMARK_.call(null,inst_27975,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27985 = (inst_27983) || (inst_27984);
var state_28014__$1 = (function (){var statearr_28028 = state_28014;
(statearr_28028[(10)] = inst_27982__$1);

return statearr_28028;
})();
if(cljs.core.truth_(inst_27985)){
var statearr_28029_28058 = state_28014__$1;
(statearr_28029_28058[(1)] = (8));

} else {
var statearr_28030_28059 = state_28014__$1;
(statearr_28030_28059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (14))){
var inst_28007 = (state_28014[(2)]);
var inst_28008 = cljs.core.async.close_BANG_.call(null,out);
var state_28014__$1 = (function (){var statearr_28032 = state_28014;
(statearr_28032[(13)] = inst_28007);

return statearr_28032;
})();
var statearr_28033_28060 = state_28014__$1;
(statearr_28033_28060[(2)] = inst_28008);

(statearr_28033_28060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (10))){
var inst_27997 = (state_28014[(2)]);
var state_28014__$1 = state_28014;
var statearr_28034_28061 = state_28014__$1;
(statearr_28034_28061[(2)] = inst_27997);

(statearr_28034_28061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28015 === (8))){
var inst_27982 = (state_28014[(10)]);
var inst_27974 = (state_28014[(7)]);
var inst_27978 = (state_28014[(9)]);
var inst_27987 = inst_27974.push(inst_27978);
var tmp28031 = inst_27974;
var inst_27974__$1 = tmp28031;
var inst_27975 = inst_27982;
var state_28014__$1 = (function (){var statearr_28035 = state_28014;
(statearr_28035[(14)] = inst_27987);

(statearr_28035[(7)] = inst_27974__$1);

(statearr_28035[(8)] = inst_27975);

return statearr_28035;
})();
var statearr_28036_28062 = state_28014__$1;
(statearr_28036_28062[(2)] = null);

(statearr_28036_28062[(1)] = (2));


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
});})(c__25267__auto___28048,out))
;
return ((function (switch__25155__auto__,c__25267__auto___28048,out){
return (function() {
var cljs$core$async$state_machine__25156__auto__ = null;
var cljs$core$async$state_machine__25156__auto____0 = (function (){
var statearr_28040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28040[(0)] = cljs$core$async$state_machine__25156__auto__);

(statearr_28040[(1)] = (1));

return statearr_28040;
});
var cljs$core$async$state_machine__25156__auto____1 = (function (state_28014){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_28014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e28041){if((e28041 instanceof Object)){
var ex__25159__auto__ = e28041;
var statearr_28042_28063 = state_28014;
(statearr_28042_28063[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28064 = state_28014;
state_28014 = G__28064;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
cljs$core$async$state_machine__25156__auto__ = function(state_28014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25156__auto____1.call(this,state_28014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25156__auto____0;
cljs$core$async$state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25156__auto____1;
return cljs$core$async$state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___28048,out))
})();
var state__25269__auto__ = (function (){var statearr_28043 = f__25268__auto__.call(null);
(statearr_28043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___28048);

return statearr_28043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___28048,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map