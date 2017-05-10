// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25654 = [];
var len__22749__auto___25660 = arguments.length;
var i__22750__auto___25661 = (0);
while(true){
if((i__22750__auto___25661 < len__22749__auto___25660)){
args25654.push((arguments[i__22750__auto___25661]));

var G__25662 = (i__22750__auto___25661 + (1));
i__22750__auto___25661 = G__25662;
continue;
} else {
}
break;
}

var G__25656 = args25654.length;
switch (G__25656) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25654.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25657 = (function (f,blockable,meta25658){
this.f = f;
this.blockable = blockable;
this.meta25658 = meta25658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25659,meta25658__$1){
var self__ = this;
var _25659__$1 = this;
return (new cljs.core.async.t_cljs$core$async25657(self__.f,self__.blockable,meta25658__$1));
});

cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25659){
var self__ = this;
var _25659__$1 = this;
return self__.meta25658;
});

cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25658","meta25658",-617270685,null)], null);
});

cljs.core.async.t_cljs$core$async25657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25657";

cljs.core.async.t_cljs$core$async25657.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25657");
});

cljs.core.async.__GT_t_cljs$core$async25657 = (function cljs$core$async$__GT_t_cljs$core$async25657(f__$1,blockable__$1,meta25658){
return (new cljs.core.async.t_cljs$core$async25657(f__$1,blockable__$1,meta25658));
});

}

return (new cljs.core.async.t_cljs$core$async25657(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args25666 = [];
var len__22749__auto___25669 = arguments.length;
var i__22750__auto___25670 = (0);
while(true){
if((i__22750__auto___25670 < len__22749__auto___25669)){
args25666.push((arguments[i__22750__auto___25670]));

var G__25671 = (i__22750__auto___25670 + (1));
i__22750__auto___25670 = G__25671;
continue;
} else {
}
break;
}

var G__25668 = args25666.length;
switch (G__25668) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25666.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args25673 = [];
var len__22749__auto___25676 = arguments.length;
var i__22750__auto___25677 = (0);
while(true){
if((i__22750__auto___25677 < len__22749__auto___25676)){
args25673.push((arguments[i__22750__auto___25677]));

var G__25678 = (i__22750__auto___25677 + (1));
i__22750__auto___25677 = G__25678;
continue;
} else {
}
break;
}

var G__25675 = args25673.length;
switch (G__25675) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25673.length)].join('')));

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
var args25680 = [];
var len__22749__auto___25683 = arguments.length;
var i__22750__auto___25684 = (0);
while(true){
if((i__22750__auto___25684 < len__22749__auto___25683)){
args25680.push((arguments[i__22750__auto___25684]));

var G__25685 = (i__22750__auto___25684 + (1));
i__22750__auto___25684 = G__25685;
continue;
} else {
}
break;
}

var G__25682 = args25680.length;
switch (G__25682) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25680.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25687 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25687);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25687,ret){
return (function (){
return fn1.call(null,val_25687);
});})(val_25687,ret))
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
var args25688 = [];
var len__22749__auto___25691 = arguments.length;
var i__22750__auto___25692 = (0);
while(true){
if((i__22750__auto___25692 < len__22749__auto___25691)){
args25688.push((arguments[i__22750__auto___25692]));

var G__25693 = (i__22750__auto___25692 + (1));
i__22750__auto___25692 = G__25693;
continue;
} else {
}
break;
}

var G__25690 = args25688.length;
switch (G__25690) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25688.length)].join('')));

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
var n__22589__auto___25695 = n;
var x_25696 = (0);
while(true){
if((x_25696 < n__22589__auto___25695)){
(a[x_25696] = (0));

var G__25697 = (x_25696 + (1));
x_25696 = G__25697;
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

var G__25698 = (i + (1));
i = G__25698;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25702 = (function (alt_flag,flag,meta25703){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25703 = meta25703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25704,meta25703__$1){
var self__ = this;
var _25704__$1 = this;
return (new cljs.core.async.t_cljs$core$async25702(self__.alt_flag,self__.flag,meta25703__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25704){
var self__ = this;
var _25704__$1 = this;
return self__.meta25703;
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25703","meta25703",2105999256,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25702";

cljs.core.async.t_cljs$core$async25702.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25702");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25702 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25702(alt_flag__$1,flag__$1,meta25703){
return (new cljs.core.async.t_cljs$core$async25702(alt_flag__$1,flag__$1,meta25703));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25702(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25708 = (function (alt_handler,flag,cb,meta25709){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25709 = meta25709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25710,meta25709__$1){
var self__ = this;
var _25710__$1 = this;
return (new cljs.core.async.t_cljs$core$async25708(self__.alt_handler,self__.flag,self__.cb,meta25709__$1));
});

cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25710){
var self__ = this;
var _25710__$1 = this;
return self__.meta25709;
});

cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25709","meta25709",-1362754808,null)], null);
});

cljs.core.async.t_cljs$core$async25708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25708";

cljs.core.async.t_cljs$core$async25708.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25708");
});

cljs.core.async.__GT_t_cljs$core$async25708 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25708(alt_handler__$1,flag__$1,cb__$1,meta25709){
return (new cljs.core.async.t_cljs$core$async25708(alt_handler__$1,flag__$1,cb__$1,meta25709));
});

}

return (new cljs.core.async.t_cljs$core$async25708(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25711_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25712_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25712_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21674__auto__ = wport;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25713 = (i + (1));
i = G__25713;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21674__auto__ = ret;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21662__auto__;
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
var args__22756__auto__ = [];
var len__22749__auto___25719 = arguments.length;
var i__22750__auto___25720 = (0);
while(true){
if((i__22750__auto___25720 < len__22749__auto___25719)){
args__22756__auto__.push((arguments[i__22750__auto___25720]));

var G__25721 = (i__22750__auto___25720 + (1));
i__22750__auto___25720 = G__25721;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((1) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22757__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25716){
var map__25717 = p__25716;
var map__25717__$1 = ((((!((map__25717 == null)))?((((map__25717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25717):map__25717);
var opts = map__25717__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25714){
var G__25715 = cljs.core.first.call(null,seq25714);
var seq25714__$1 = cljs.core.next.call(null,seq25714);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25715,seq25714__$1);
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
var args25722 = [];
var len__22749__auto___25772 = arguments.length;
var i__22750__auto___25773 = (0);
while(true){
if((i__22750__auto___25773 < len__22749__auto___25772)){
args25722.push((arguments[i__22750__auto___25773]));

var G__25774 = (i__22750__auto___25773 + (1));
i__22750__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var G__25724 = args25722.length;
switch (G__25724) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25722.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25609__auto___25776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___25776){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___25776){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (7))){
var inst_25744 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25750_25777 = state_25748__$1;
(statearr_25750_25777[(2)] = inst_25744);

(statearr_25750_25777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (1))){
var state_25748__$1 = state_25748;
var statearr_25751_25778 = state_25748__$1;
(statearr_25751_25778[(2)] = null);

(statearr_25751_25778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (4))){
var inst_25727 = (state_25748[(7)]);
var inst_25727__$1 = (state_25748[(2)]);
var inst_25728 = (inst_25727__$1 == null);
var state_25748__$1 = (function (){var statearr_25752 = state_25748;
(statearr_25752[(7)] = inst_25727__$1);

return statearr_25752;
})();
if(cljs.core.truth_(inst_25728)){
var statearr_25753_25779 = state_25748__$1;
(statearr_25753_25779[(1)] = (5));

} else {
var statearr_25754_25780 = state_25748__$1;
(statearr_25754_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (13))){
var state_25748__$1 = state_25748;
var statearr_25755_25781 = state_25748__$1;
(statearr_25755_25781[(2)] = null);

(statearr_25755_25781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (6))){
var inst_25727 = (state_25748[(7)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25748__$1,(11),to,inst_25727);
} else {
if((state_val_25749 === (3))){
var inst_25746 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
if((state_val_25749 === (12))){
var state_25748__$1 = state_25748;
var statearr_25756_25782 = state_25748__$1;
(statearr_25756_25782[(2)] = null);

(statearr_25756_25782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (2))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(4),from);
} else {
if((state_val_25749 === (11))){
var inst_25737 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25737)){
var statearr_25757_25783 = state_25748__$1;
(statearr_25757_25783[(1)] = (12));

} else {
var statearr_25758_25784 = state_25748__$1;
(statearr_25758_25784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (9))){
var state_25748__$1 = state_25748;
var statearr_25759_25785 = state_25748__$1;
(statearr_25759_25785[(2)] = null);

(statearr_25759_25785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (5))){
var state_25748__$1 = state_25748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25760_25786 = state_25748__$1;
(statearr_25760_25786[(1)] = (8));

} else {
var statearr_25761_25787 = state_25748__$1;
(statearr_25761_25787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (14))){
var inst_25742 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25762_25788 = state_25748__$1;
(statearr_25762_25788[(2)] = inst_25742);

(statearr_25762_25788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (10))){
var inst_25734 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25763_25789 = state_25748__$1;
(statearr_25763_25789[(2)] = inst_25734);

(statearr_25763_25789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (8))){
var inst_25731 = cljs.core.async.close_BANG_.call(null,to);
var state_25748__$1 = state_25748;
var statearr_25764_25790 = state_25748__$1;
(statearr_25764_25790[(2)] = inst_25731);

(statearr_25764_25790[(1)] = (10));


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
});})(c__25609__auto___25776))
;
return ((function (switch__25497__auto__,c__25609__auto___25776){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_25748){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__25501__auto__ = e25769;
var statearr_25770_25791 = state_25748;
(statearr_25770_25791[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25792 = state_25748;
state_25748 = G__25792;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___25776))
})();
var state__25611__auto__ = (function (){var statearr_25771 = f__25610__auto__.call(null);
(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___25776);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___25776))
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
return (function (p__25980){
var vec__25981 = p__25980;
var v = cljs.core.nth.call(null,vec__25981,(0),null);
var p = cljs.core.nth.call(null,vec__25981,(1),null);
var job = vec__25981;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25609__auto___26167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results){
return (function (state_25988){
var state_val_25989 = (state_25988[(1)]);
if((state_val_25989 === (1))){
var state_25988__$1 = state_25988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25988__$1,(2),res,v);
} else {
if((state_val_25989 === (2))){
var inst_25985 = (state_25988[(2)]);
var inst_25986 = cljs.core.async.close_BANG_.call(null,res);
var state_25988__$1 = (function (){var statearr_25990 = state_25988;
(statearr_25990[(7)] = inst_25985);

return statearr_25990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25988__$1,inst_25986);
} else {
return null;
}
}
});})(c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results))
;
return ((function (switch__25497__auto__,c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1 = (function (state_25988){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_25988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__25501__auto__ = e25995;
var statearr_25996_26168 = state_25988;
(statearr_25996_26168[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26169 = state_25988;
state_25988 = G__26169;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = function(state_25988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1.call(this,state_25988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results))
})();
var state__25611__auto__ = (function (){var statearr_25997 = f__25610__auto__.call(null);
(statearr_25997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26167);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___26167,res,vec__25981,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25998){
var vec__25999 = p__25998;
var v = cljs.core.nth.call(null,vec__25999,(0),null);
var p = cljs.core.nth.call(null,vec__25999,(1),null);
var job = vec__25999;
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
var n__22589__auto___26170 = n;
var __26171 = (0);
while(true){
if((__26171 < n__22589__auto___26170)){
var G__26002_26172 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26002_26172) {
case "compute":
var c__25609__auto___26174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26171,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (__26171,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function (state_26015){
var state_val_26016 = (state_26015[(1)]);
if((state_val_26016 === (1))){
var state_26015__$1 = state_26015;
var statearr_26017_26175 = state_26015__$1;
(statearr_26017_26175[(2)] = null);

(statearr_26017_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (2))){
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26015__$1,(4),jobs);
} else {
if((state_val_26016 === (3))){
var inst_26013 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26015__$1,inst_26013);
} else {
if((state_val_26016 === (4))){
var inst_26005 = (state_26015[(2)]);
var inst_26006 = process.call(null,inst_26005);
var state_26015__$1 = state_26015;
if(cljs.core.truth_(inst_26006)){
var statearr_26018_26176 = state_26015__$1;
(statearr_26018_26176[(1)] = (5));

} else {
var statearr_26019_26177 = state_26015__$1;
(statearr_26019_26177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (5))){
var state_26015__$1 = state_26015;
var statearr_26020_26178 = state_26015__$1;
(statearr_26020_26178[(2)] = null);

(statearr_26020_26178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (6))){
var state_26015__$1 = state_26015;
var statearr_26021_26179 = state_26015__$1;
(statearr_26021_26179[(2)] = null);

(statearr_26021_26179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (7))){
var inst_26011 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
var statearr_26022_26180 = state_26015__$1;
(statearr_26022_26180[(2)] = inst_26011);

(statearr_26022_26180[(1)] = (3));


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
});})(__26171,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
;
return ((function (__26171,switch__25497__auto__,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1 = (function (state_26015){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object)){
var ex__25501__auto__ = e26027;
var statearr_26028_26181 = state_26015;
(statearr_26028_26181[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26182 = state_26015;
state_26015 = G__26182;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = function(state_26015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1.call(this,state_26015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__;
})()
;})(__26171,switch__25497__auto__,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
})();
var state__25611__auto__ = (function (){var statearr_26029 = f__25610__auto__.call(null);
(statearr_26029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26174);

return statearr_26029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(__26171,c__25609__auto___26174,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
);


break;
case "async":
var c__25609__auto___26183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26171,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (__26171,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function (state_26042){
var state_val_26043 = (state_26042[(1)]);
if((state_val_26043 === (1))){
var state_26042__$1 = state_26042;
var statearr_26044_26184 = state_26042__$1;
(statearr_26044_26184[(2)] = null);

(statearr_26044_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (2))){
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26042__$1,(4),jobs);
} else {
if((state_val_26043 === (3))){
var inst_26040 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26042__$1,inst_26040);
} else {
if((state_val_26043 === (4))){
var inst_26032 = (state_26042[(2)]);
var inst_26033 = async.call(null,inst_26032);
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_26033)){
var statearr_26045_26185 = state_26042__$1;
(statearr_26045_26185[(1)] = (5));

} else {
var statearr_26046_26186 = state_26042__$1;
(statearr_26046_26186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (5))){
var state_26042__$1 = state_26042;
var statearr_26047_26187 = state_26042__$1;
(statearr_26047_26187[(2)] = null);

(statearr_26047_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (6))){
var state_26042__$1 = state_26042;
var statearr_26048_26188 = state_26042__$1;
(statearr_26048_26188[(2)] = null);

(statearr_26048_26188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26043 === (7))){
var inst_26038 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26049_26189 = state_26042__$1;
(statearr_26049_26189[(2)] = inst_26038);

(statearr_26049_26189[(1)] = (3));


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
});})(__26171,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
;
return ((function (__26171,switch__25497__auto__,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_26053 = [null,null,null,null,null,null,null];
(statearr_26053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__);

(statearr_26053[(1)] = (1));

return statearr_26053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1 = (function (state_26042){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26054){if((e26054 instanceof Object)){
var ex__25501__auto__ = e26054;
var statearr_26055_26190 = state_26042;
(statearr_26055_26190[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26191 = state_26042;
state_26042 = G__26191;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = function(state_26042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1.call(this,state_26042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__;
})()
;})(__26171,switch__25497__auto__,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
})();
var state__25611__auto__ = (function (){var statearr_26056 = f__25610__auto__.call(null);
(statearr_26056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26183);

return statearr_26056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(__26171,c__25609__auto___26183,G__26002_26172,n__22589__auto___26170,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26192 = (__26171 + (1));
__26171 = G__26192;
continue;
} else {
}
break;
}

var c__25609__auto___26193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___26193,jobs,results,process,async){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___26193,jobs,results,process,async){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (1))){
var state_26078__$1 = state_26078;
var statearr_26080_26194 = state_26078__$1;
(statearr_26080_26194[(2)] = null);

(statearr_26080_26194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (2))){
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,(4),from);
} else {
if((state_val_26079 === (3))){
var inst_26076 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (4))){
var inst_26059 = (state_26078[(7)]);
var inst_26059__$1 = (state_26078[(2)]);
var inst_26060 = (inst_26059__$1 == null);
var state_26078__$1 = (function (){var statearr_26081 = state_26078;
(statearr_26081[(7)] = inst_26059__$1);

return statearr_26081;
})();
if(cljs.core.truth_(inst_26060)){
var statearr_26082_26195 = state_26078__$1;
(statearr_26082_26195[(1)] = (5));

} else {
var statearr_26083_26196 = state_26078__$1;
(statearr_26083_26196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (5))){
var inst_26062 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26078__$1 = state_26078;
var statearr_26084_26197 = state_26078__$1;
(statearr_26084_26197[(2)] = inst_26062);

(statearr_26084_26197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (6))){
var inst_26059 = (state_26078[(7)]);
var inst_26064 = (state_26078[(8)]);
var inst_26064__$1 = cljs.core.async.chan.call(null,(1));
var inst_26065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26066 = [inst_26059,inst_26064__$1];
var inst_26067 = (new cljs.core.PersistentVector(null,2,(5),inst_26065,inst_26066,null));
var state_26078__$1 = (function (){var statearr_26085 = state_26078;
(statearr_26085[(8)] = inst_26064__$1);

return statearr_26085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26078__$1,(8),jobs,inst_26067);
} else {
if((state_val_26079 === (7))){
var inst_26074 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26086_26198 = state_26078__$1;
(statearr_26086_26198[(2)] = inst_26074);

(statearr_26086_26198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (8))){
var inst_26064 = (state_26078[(8)]);
var inst_26069 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26087 = state_26078;
(statearr_26087[(9)] = inst_26069);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26078__$1,(9),results,inst_26064);
} else {
if((state_val_26079 === (9))){
var inst_26071 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26088 = state_26078;
(statearr_26088[(10)] = inst_26071);

return statearr_26088;
})();
var statearr_26089_26199 = state_26078__$1;
(statearr_26089_26199[(2)] = null);

(statearr_26089_26199[(1)] = (2));


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
});})(c__25609__auto___26193,jobs,results,process,async))
;
return ((function (switch__25497__auto__,c__25609__auto___26193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_26093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__);

(statearr_26093[(1)] = (1));

return statearr_26093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1 = (function (state_26078){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26094){if((e26094 instanceof Object)){
var ex__25501__auto__ = e26094;
var statearr_26095_26200 = state_26078;
(statearr_26095_26200[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26201 = state_26078;
state_26078 = G__26201;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___26193,jobs,results,process,async))
})();
var state__25611__auto__ = (function (){var statearr_26096 = f__25610__auto__.call(null);
(statearr_26096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26193);

return statearr_26096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___26193,jobs,results,process,async))
);


var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__,jobs,results,process,async){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__,jobs,results,process,async){
return (function (state_26134){
var state_val_26135 = (state_26134[(1)]);
if((state_val_26135 === (7))){
var inst_26130 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26136_26202 = state_26134__$1;
(statearr_26136_26202[(2)] = inst_26130);

(statearr_26136_26202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (20))){
var state_26134__$1 = state_26134;
var statearr_26137_26203 = state_26134__$1;
(statearr_26137_26203[(2)] = null);

(statearr_26137_26203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (1))){
var state_26134__$1 = state_26134;
var statearr_26138_26204 = state_26134__$1;
(statearr_26138_26204[(2)] = null);

(statearr_26138_26204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (4))){
var inst_26099 = (state_26134[(7)]);
var inst_26099__$1 = (state_26134[(2)]);
var inst_26100 = (inst_26099__$1 == null);
var state_26134__$1 = (function (){var statearr_26139 = state_26134;
(statearr_26139[(7)] = inst_26099__$1);

return statearr_26139;
})();
if(cljs.core.truth_(inst_26100)){
var statearr_26140_26205 = state_26134__$1;
(statearr_26140_26205[(1)] = (5));

} else {
var statearr_26141_26206 = state_26134__$1;
(statearr_26141_26206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (15))){
var inst_26112 = (state_26134[(8)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26134__$1,(18),to,inst_26112);
} else {
if((state_val_26135 === (21))){
var inst_26125 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26142_26207 = state_26134__$1;
(statearr_26142_26207[(2)] = inst_26125);

(statearr_26142_26207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (13))){
var inst_26127 = (state_26134[(2)]);
var state_26134__$1 = (function (){var statearr_26143 = state_26134;
(statearr_26143[(9)] = inst_26127);

return statearr_26143;
})();
var statearr_26144_26208 = state_26134__$1;
(statearr_26144_26208[(2)] = null);

(statearr_26144_26208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (6))){
var inst_26099 = (state_26134[(7)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26134__$1,(11),inst_26099);
} else {
if((state_val_26135 === (17))){
var inst_26120 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
if(cljs.core.truth_(inst_26120)){
var statearr_26145_26209 = state_26134__$1;
(statearr_26145_26209[(1)] = (19));

} else {
var statearr_26146_26210 = state_26134__$1;
(statearr_26146_26210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (3))){
var inst_26132 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26134__$1,inst_26132);
} else {
if((state_val_26135 === (12))){
var inst_26109 = (state_26134[(10)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26134__$1,(14),inst_26109);
} else {
if((state_val_26135 === (2))){
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26134__$1,(4),results);
} else {
if((state_val_26135 === (19))){
var state_26134__$1 = state_26134;
var statearr_26147_26211 = state_26134__$1;
(statearr_26147_26211[(2)] = null);

(statearr_26147_26211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (11))){
var inst_26109 = (state_26134[(2)]);
var state_26134__$1 = (function (){var statearr_26148 = state_26134;
(statearr_26148[(10)] = inst_26109);

return statearr_26148;
})();
var statearr_26149_26212 = state_26134__$1;
(statearr_26149_26212[(2)] = null);

(statearr_26149_26212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (9))){
var state_26134__$1 = state_26134;
var statearr_26150_26213 = state_26134__$1;
(statearr_26150_26213[(2)] = null);

(statearr_26150_26213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (5))){
var state_26134__$1 = state_26134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26151_26214 = state_26134__$1;
(statearr_26151_26214[(1)] = (8));

} else {
var statearr_26152_26215 = state_26134__$1;
(statearr_26152_26215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (14))){
var inst_26112 = (state_26134[(8)]);
var inst_26114 = (state_26134[(11)]);
var inst_26112__$1 = (state_26134[(2)]);
var inst_26113 = (inst_26112__$1 == null);
var inst_26114__$1 = cljs.core.not.call(null,inst_26113);
var state_26134__$1 = (function (){var statearr_26153 = state_26134;
(statearr_26153[(8)] = inst_26112__$1);

(statearr_26153[(11)] = inst_26114__$1);

return statearr_26153;
})();
if(inst_26114__$1){
var statearr_26154_26216 = state_26134__$1;
(statearr_26154_26216[(1)] = (15));

} else {
var statearr_26155_26217 = state_26134__$1;
(statearr_26155_26217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (16))){
var inst_26114 = (state_26134[(11)]);
var state_26134__$1 = state_26134;
var statearr_26156_26218 = state_26134__$1;
(statearr_26156_26218[(2)] = inst_26114);

(statearr_26156_26218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (10))){
var inst_26106 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26157_26219 = state_26134__$1;
(statearr_26157_26219[(2)] = inst_26106);

(statearr_26157_26219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (18))){
var inst_26117 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26158_26220 = state_26134__$1;
(statearr_26158_26220[(2)] = inst_26117);

(statearr_26158_26220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (8))){
var inst_26103 = cljs.core.async.close_BANG_.call(null,to);
var state_26134__$1 = state_26134;
var statearr_26159_26221 = state_26134__$1;
(statearr_26159_26221[(2)] = inst_26103);

(statearr_26159_26221[(1)] = (10));


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
});})(c__25609__auto__,jobs,results,process,async))
;
return ((function (switch__25497__auto__,c__25609__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_26163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__);

(statearr_26163[(1)] = (1));

return statearr_26163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1 = (function (state_26134){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26164){if((e26164 instanceof Object)){
var ex__25501__auto__ = e26164;
var statearr_26165_26222 = state_26134;
(statearr_26165_26222[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26223 = state_26134;
state_26134 = G__26223;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__ = function(state_26134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1.call(this,state_26134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__,jobs,results,process,async))
})();
var state__25611__auto__ = (function (){var statearr_26166 = f__25610__auto__.call(null);
(statearr_26166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_26166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__,jobs,results,process,async))
);

return c__25609__auto__;
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
var args26224 = [];
var len__22749__auto___26227 = arguments.length;
var i__22750__auto___26228 = (0);
while(true){
if((i__22750__auto___26228 < len__22749__auto___26227)){
args26224.push((arguments[i__22750__auto___26228]));

var G__26229 = (i__22750__auto___26228 + (1));
i__22750__auto___26228 = G__26229;
continue;
} else {
}
break;
}

var G__26226 = args26224.length;
switch (G__26226) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26224.length)].join('')));

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
var args26231 = [];
var len__22749__auto___26234 = arguments.length;
var i__22750__auto___26235 = (0);
while(true){
if((i__22750__auto___26235 < len__22749__auto___26234)){
args26231.push((arguments[i__22750__auto___26235]));

var G__26236 = (i__22750__auto___26235 + (1));
i__22750__auto___26235 = G__26236;
continue;
} else {
}
break;
}

var G__26233 = args26231.length;
switch (G__26233) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26231.length)].join('')));

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
var args26238 = [];
var len__22749__auto___26291 = arguments.length;
var i__22750__auto___26292 = (0);
while(true){
if((i__22750__auto___26292 < len__22749__auto___26291)){
args26238.push((arguments[i__22750__auto___26292]));

var G__26293 = (i__22750__auto___26292 + (1));
i__22750__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var G__26240 = args26238.length;
switch (G__26240) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26238.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25609__auto___26295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___26295,tc,fc){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___26295,tc,fc){
return (function (state_26266){
var state_val_26267 = (state_26266[(1)]);
if((state_val_26267 === (7))){
var inst_26262 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26268_26296 = state_26266__$1;
(statearr_26268_26296[(2)] = inst_26262);

(statearr_26268_26296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (1))){
var state_26266__$1 = state_26266;
var statearr_26269_26297 = state_26266__$1;
(statearr_26269_26297[(2)] = null);

(statearr_26269_26297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (4))){
var inst_26243 = (state_26266[(7)]);
var inst_26243__$1 = (state_26266[(2)]);
var inst_26244 = (inst_26243__$1 == null);
var state_26266__$1 = (function (){var statearr_26270 = state_26266;
(statearr_26270[(7)] = inst_26243__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26244)){
var statearr_26271_26298 = state_26266__$1;
(statearr_26271_26298[(1)] = (5));

} else {
var statearr_26272_26299 = state_26266__$1;
(statearr_26272_26299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (13))){
var state_26266__$1 = state_26266;
var statearr_26273_26300 = state_26266__$1;
(statearr_26273_26300[(2)] = null);

(statearr_26273_26300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (6))){
var inst_26243 = (state_26266[(7)]);
var inst_26249 = p.call(null,inst_26243);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26249)){
var statearr_26274_26301 = state_26266__$1;
(statearr_26274_26301[(1)] = (9));

} else {
var statearr_26275_26302 = state_26266__$1;
(statearr_26275_26302[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (3))){
var inst_26264 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26266__$1,inst_26264);
} else {
if((state_val_26267 === (12))){
var state_26266__$1 = state_26266;
var statearr_26276_26303 = state_26266__$1;
(statearr_26276_26303[(2)] = null);

(statearr_26276_26303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (2))){
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26266__$1,(4),ch);
} else {
if((state_val_26267 === (11))){
var inst_26243 = (state_26266[(7)]);
var inst_26253 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26266__$1,(8),inst_26253,inst_26243);
} else {
if((state_val_26267 === (9))){
var state_26266__$1 = state_26266;
var statearr_26277_26304 = state_26266__$1;
(statearr_26277_26304[(2)] = tc);

(statearr_26277_26304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (5))){
var inst_26246 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26247 = cljs.core.async.close_BANG_.call(null,fc);
var state_26266__$1 = (function (){var statearr_26278 = state_26266;
(statearr_26278[(8)] = inst_26246);

return statearr_26278;
})();
var statearr_26279_26305 = state_26266__$1;
(statearr_26279_26305[(2)] = inst_26247);

(statearr_26279_26305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (14))){
var inst_26260 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26280_26306 = state_26266__$1;
(statearr_26280_26306[(2)] = inst_26260);

(statearr_26280_26306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (10))){
var state_26266__$1 = state_26266;
var statearr_26281_26307 = state_26266__$1;
(statearr_26281_26307[(2)] = fc);

(statearr_26281_26307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (8))){
var inst_26255 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26255)){
var statearr_26282_26308 = state_26266__$1;
(statearr_26282_26308[(1)] = (12));

} else {
var statearr_26283_26309 = state_26266__$1;
(statearr_26283_26309[(1)] = (13));

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
});})(c__25609__auto___26295,tc,fc))
;
return ((function (switch__25497__auto__,c__25609__auto___26295,tc,fc){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_26287 = [null,null,null,null,null,null,null,null,null];
(statearr_26287[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_26287[(1)] = (1));

return statearr_26287;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_26266){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object)){
var ex__25501__auto__ = e26288;
var statearr_26289_26310 = state_26266;
(statearr_26289_26310[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26311 = state_26266;
state_26266 = G__26311;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___26295,tc,fc))
})();
var state__25611__auto__ = (function (){var statearr_26290 = f__25610__auto__.call(null);
(statearr_26290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26295);

return statearr_26290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___26295,tc,fc))
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
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__){
return (function (state_26375){
var state_val_26376 = (state_26375[(1)]);
if((state_val_26376 === (7))){
var inst_26371 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26377_26398 = state_26375__$1;
(statearr_26377_26398[(2)] = inst_26371);

(statearr_26377_26398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (1))){
var inst_26355 = init;
var state_26375__$1 = (function (){var statearr_26378 = state_26375;
(statearr_26378[(7)] = inst_26355);

return statearr_26378;
})();
var statearr_26379_26399 = state_26375__$1;
(statearr_26379_26399[(2)] = null);

(statearr_26379_26399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (4))){
var inst_26358 = (state_26375[(8)]);
var inst_26358__$1 = (state_26375[(2)]);
var inst_26359 = (inst_26358__$1 == null);
var state_26375__$1 = (function (){var statearr_26380 = state_26375;
(statearr_26380[(8)] = inst_26358__$1);

return statearr_26380;
})();
if(cljs.core.truth_(inst_26359)){
var statearr_26381_26400 = state_26375__$1;
(statearr_26381_26400[(1)] = (5));

} else {
var statearr_26382_26401 = state_26375__$1;
(statearr_26382_26401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (6))){
var inst_26358 = (state_26375[(8)]);
var inst_26362 = (state_26375[(9)]);
var inst_26355 = (state_26375[(7)]);
var inst_26362__$1 = f.call(null,inst_26355,inst_26358);
var inst_26363 = cljs.core.reduced_QMARK_.call(null,inst_26362__$1);
var state_26375__$1 = (function (){var statearr_26383 = state_26375;
(statearr_26383[(9)] = inst_26362__$1);

return statearr_26383;
})();
if(inst_26363){
var statearr_26384_26402 = state_26375__$1;
(statearr_26384_26402[(1)] = (8));

} else {
var statearr_26385_26403 = state_26375__$1;
(statearr_26385_26403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (3))){
var inst_26373 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26375__$1,inst_26373);
} else {
if((state_val_26376 === (2))){
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26375__$1,(4),ch);
} else {
if((state_val_26376 === (9))){
var inst_26362 = (state_26375[(9)]);
var inst_26355 = inst_26362;
var state_26375__$1 = (function (){var statearr_26386 = state_26375;
(statearr_26386[(7)] = inst_26355);

return statearr_26386;
})();
var statearr_26387_26404 = state_26375__$1;
(statearr_26387_26404[(2)] = null);

(statearr_26387_26404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (5))){
var inst_26355 = (state_26375[(7)]);
var state_26375__$1 = state_26375;
var statearr_26388_26405 = state_26375__$1;
(statearr_26388_26405[(2)] = inst_26355);

(statearr_26388_26405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (10))){
var inst_26369 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26389_26406 = state_26375__$1;
(statearr_26389_26406[(2)] = inst_26369);

(statearr_26389_26406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (8))){
var inst_26362 = (state_26375[(9)]);
var inst_26365 = cljs.core.deref.call(null,inst_26362);
var state_26375__$1 = state_26375;
var statearr_26390_26407 = state_26375__$1;
(statearr_26390_26407[(2)] = inst_26365);

(statearr_26390_26407[(1)] = (10));


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
});})(c__25609__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25498__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25498__auto____0 = (function (){
var statearr_26394 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26394[(0)] = cljs$core$async$reduce_$_state_machine__25498__auto__);

(statearr_26394[(1)] = (1));

return statearr_26394;
});
var cljs$core$async$reduce_$_state_machine__25498__auto____1 = (function (state_26375){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26395){if((e26395 instanceof Object)){
var ex__25501__auto__ = e26395;
var statearr_26396_26408 = state_26375;
(statearr_26396_26408[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26375;
state_26375 = G__26409;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25498__auto__ = function(state_26375){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25498__auto____1.call(this,state_26375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25498__auto____0;
cljs$core$async$reduce_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25498__auto____1;
return cljs$core$async$reduce_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__))
})();
var state__25611__auto__ = (function (){var statearr_26397 = f__25610__auto__.call(null);
(statearr_26397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_26397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__))
);

return c__25609__auto__;
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
var args26410 = [];
var len__22749__auto___26462 = arguments.length;
var i__22750__auto___26463 = (0);
while(true){
if((i__22750__auto___26463 < len__22749__auto___26462)){
args26410.push((arguments[i__22750__auto___26463]));

var G__26464 = (i__22750__auto___26463 + (1));
i__22750__auto___26463 = G__26464;
continue;
} else {
}
break;
}

var G__26412 = args26410.length;
switch (G__26412) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26410.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (7))){
var inst_26419 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26439_26466 = state_26437__$1;
(statearr_26439_26466[(2)] = inst_26419);

(statearr_26439_26466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (1))){
var inst_26413 = cljs.core.seq.call(null,coll);
var inst_26414 = inst_26413;
var state_26437__$1 = (function (){var statearr_26440 = state_26437;
(statearr_26440[(7)] = inst_26414);

return statearr_26440;
})();
var statearr_26441_26467 = state_26437__$1;
(statearr_26441_26467[(2)] = null);

(statearr_26441_26467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (4))){
var inst_26414 = (state_26437[(7)]);
var inst_26417 = cljs.core.first.call(null,inst_26414);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,(7),ch,inst_26417);
} else {
if((state_val_26438 === (13))){
var inst_26431 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26442_26468 = state_26437__$1;
(statearr_26442_26468[(2)] = inst_26431);

(statearr_26442_26468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (6))){
var inst_26422 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26422)){
var statearr_26443_26469 = state_26437__$1;
(statearr_26443_26469[(1)] = (8));

} else {
var statearr_26444_26470 = state_26437__$1;
(statearr_26444_26470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (12))){
var state_26437__$1 = state_26437;
var statearr_26445_26471 = state_26437__$1;
(statearr_26445_26471[(2)] = null);

(statearr_26445_26471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (2))){
var inst_26414 = (state_26437[(7)]);
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26414)){
var statearr_26446_26472 = state_26437__$1;
(statearr_26446_26472[(1)] = (4));

} else {
var statearr_26447_26473 = state_26437__$1;
(statearr_26447_26473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (11))){
var inst_26428 = cljs.core.async.close_BANG_.call(null,ch);
var state_26437__$1 = state_26437;
var statearr_26448_26474 = state_26437__$1;
(statearr_26448_26474[(2)] = inst_26428);

(statearr_26448_26474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (9))){
var state_26437__$1 = state_26437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26449_26475 = state_26437__$1;
(statearr_26449_26475[(1)] = (11));

} else {
var statearr_26450_26476 = state_26437__$1;
(statearr_26450_26476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (5))){
var inst_26414 = (state_26437[(7)]);
var state_26437__$1 = state_26437;
var statearr_26451_26477 = state_26437__$1;
(statearr_26451_26477[(2)] = inst_26414);

(statearr_26451_26477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (10))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26452_26478 = state_26437__$1;
(statearr_26452_26478[(2)] = inst_26433);

(statearr_26452_26478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (8))){
var inst_26414 = (state_26437[(7)]);
var inst_26424 = cljs.core.next.call(null,inst_26414);
var inst_26414__$1 = inst_26424;
var state_26437__$1 = (function (){var statearr_26453 = state_26437;
(statearr_26453[(7)] = inst_26414__$1);

return statearr_26453;
})();
var statearr_26454_26479 = state_26437__$1;
(statearr_26454_26479[(2)] = null);

(statearr_26454_26479[(1)] = (2));


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
});})(c__25609__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_26458 = [null,null,null,null,null,null,null,null];
(statearr_26458[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_26458[(1)] = (1));

return statearr_26458;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_26437){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26459){if((e26459 instanceof Object)){
var ex__25501__auto__ = e26459;
var statearr_26460_26480 = state_26437;
(statearr_26460_26480[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26481 = state_26437;
state_26437 = G__26481;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__))
})();
var state__25611__auto__ = (function (){var statearr_26461 = f__25610__auto__.call(null);
(statearr_26461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_26461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__))
);

return c__25609__auto__;
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
var x__22337__auto__ = (((_ == null))?null:_);
var m__22338__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,_);
} else {
var m__22338__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,_);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26707 = (function (mult,ch,cs,meta26708){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26708 = meta26708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26709,meta26708__$1){
var self__ = this;
var _26709__$1 = this;
return (new cljs.core.async.t_cljs$core$async26707(self__.mult,self__.ch,self__.cs,meta26708__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26709){
var self__ = this;
var _26709__$1 = this;
return self__.meta26708;
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26708","meta26708",383988973,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26707";

cljs.core.async.t_cljs$core$async26707.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26707");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26707 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26707(mult__$1,ch__$1,cs__$1,meta26708){
return (new cljs.core.async.t_cljs$core$async26707(mult__$1,ch__$1,cs__$1,meta26708));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26707(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25609__auto___26932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___26932,cs,m,dchan,dctr,done){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___26932,cs,m,dchan,dctr,done){
return (function (state_26844){
var state_val_26845 = (state_26844[(1)]);
if((state_val_26845 === (7))){
var inst_26840 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26846_26933 = state_26844__$1;
(statearr_26846_26933[(2)] = inst_26840);

(statearr_26846_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (20))){
var inst_26743 = (state_26844[(7)]);
var inst_26755 = cljs.core.first.call(null,inst_26743);
var inst_26756 = cljs.core.nth.call(null,inst_26755,(0),null);
var inst_26757 = cljs.core.nth.call(null,inst_26755,(1),null);
var state_26844__$1 = (function (){var statearr_26847 = state_26844;
(statearr_26847[(8)] = inst_26756);

return statearr_26847;
})();
if(cljs.core.truth_(inst_26757)){
var statearr_26848_26934 = state_26844__$1;
(statearr_26848_26934[(1)] = (22));

} else {
var statearr_26849_26935 = state_26844__$1;
(statearr_26849_26935[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (27))){
var inst_26787 = (state_26844[(9)]);
var inst_26712 = (state_26844[(10)]);
var inst_26792 = (state_26844[(11)]);
var inst_26785 = (state_26844[(12)]);
var inst_26792__$1 = cljs.core._nth.call(null,inst_26785,inst_26787);
var inst_26793 = cljs.core.async.put_BANG_.call(null,inst_26792__$1,inst_26712,done);
var state_26844__$1 = (function (){var statearr_26850 = state_26844;
(statearr_26850[(11)] = inst_26792__$1);

return statearr_26850;
})();
if(cljs.core.truth_(inst_26793)){
var statearr_26851_26936 = state_26844__$1;
(statearr_26851_26936[(1)] = (30));

} else {
var statearr_26852_26937 = state_26844__$1;
(statearr_26852_26937[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (1))){
var state_26844__$1 = state_26844;
var statearr_26853_26938 = state_26844__$1;
(statearr_26853_26938[(2)] = null);

(statearr_26853_26938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (24))){
var inst_26743 = (state_26844[(7)]);
var inst_26762 = (state_26844[(2)]);
var inst_26763 = cljs.core.next.call(null,inst_26743);
var inst_26721 = inst_26763;
var inst_26722 = null;
var inst_26723 = (0);
var inst_26724 = (0);
var state_26844__$1 = (function (){var statearr_26854 = state_26844;
(statearr_26854[(13)] = inst_26722);

(statearr_26854[(14)] = inst_26762);

(statearr_26854[(15)] = inst_26724);

(statearr_26854[(16)] = inst_26723);

(statearr_26854[(17)] = inst_26721);

return statearr_26854;
})();
var statearr_26855_26939 = state_26844__$1;
(statearr_26855_26939[(2)] = null);

(statearr_26855_26939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (39))){
var state_26844__$1 = state_26844;
var statearr_26859_26940 = state_26844__$1;
(statearr_26859_26940[(2)] = null);

(statearr_26859_26940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (4))){
var inst_26712 = (state_26844[(10)]);
var inst_26712__$1 = (state_26844[(2)]);
var inst_26713 = (inst_26712__$1 == null);
var state_26844__$1 = (function (){var statearr_26860 = state_26844;
(statearr_26860[(10)] = inst_26712__$1);

return statearr_26860;
})();
if(cljs.core.truth_(inst_26713)){
var statearr_26861_26941 = state_26844__$1;
(statearr_26861_26941[(1)] = (5));

} else {
var statearr_26862_26942 = state_26844__$1;
(statearr_26862_26942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (15))){
var inst_26722 = (state_26844[(13)]);
var inst_26724 = (state_26844[(15)]);
var inst_26723 = (state_26844[(16)]);
var inst_26721 = (state_26844[(17)]);
var inst_26739 = (state_26844[(2)]);
var inst_26740 = (inst_26724 + (1));
var tmp26856 = inst_26722;
var tmp26857 = inst_26723;
var tmp26858 = inst_26721;
var inst_26721__$1 = tmp26858;
var inst_26722__$1 = tmp26856;
var inst_26723__$1 = tmp26857;
var inst_26724__$1 = inst_26740;
var state_26844__$1 = (function (){var statearr_26863 = state_26844;
(statearr_26863[(13)] = inst_26722__$1);

(statearr_26863[(15)] = inst_26724__$1);

(statearr_26863[(16)] = inst_26723__$1);

(statearr_26863[(17)] = inst_26721__$1);

(statearr_26863[(18)] = inst_26739);

return statearr_26863;
})();
var statearr_26864_26943 = state_26844__$1;
(statearr_26864_26943[(2)] = null);

(statearr_26864_26943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (21))){
var inst_26766 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26868_26944 = state_26844__$1;
(statearr_26868_26944[(2)] = inst_26766);

(statearr_26868_26944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (31))){
var inst_26792 = (state_26844[(11)]);
var inst_26796 = done.call(null,null);
var inst_26797 = cljs.core.async.untap_STAR_.call(null,m,inst_26792);
var state_26844__$1 = (function (){var statearr_26869 = state_26844;
(statearr_26869[(19)] = inst_26796);

return statearr_26869;
})();
var statearr_26870_26945 = state_26844__$1;
(statearr_26870_26945[(2)] = inst_26797);

(statearr_26870_26945[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (32))){
var inst_26787 = (state_26844[(9)]);
var inst_26784 = (state_26844[(20)]);
var inst_26786 = (state_26844[(21)]);
var inst_26785 = (state_26844[(12)]);
var inst_26799 = (state_26844[(2)]);
var inst_26800 = (inst_26787 + (1));
var tmp26865 = inst_26784;
var tmp26866 = inst_26786;
var tmp26867 = inst_26785;
var inst_26784__$1 = tmp26865;
var inst_26785__$1 = tmp26867;
var inst_26786__$1 = tmp26866;
var inst_26787__$1 = inst_26800;
var state_26844__$1 = (function (){var statearr_26871 = state_26844;
(statearr_26871[(9)] = inst_26787__$1);

(statearr_26871[(20)] = inst_26784__$1);

(statearr_26871[(22)] = inst_26799);

(statearr_26871[(21)] = inst_26786__$1);

(statearr_26871[(12)] = inst_26785__$1);

return statearr_26871;
})();
var statearr_26872_26946 = state_26844__$1;
(statearr_26872_26946[(2)] = null);

(statearr_26872_26946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (40))){
var inst_26812 = (state_26844[(23)]);
var inst_26816 = done.call(null,null);
var inst_26817 = cljs.core.async.untap_STAR_.call(null,m,inst_26812);
var state_26844__$1 = (function (){var statearr_26873 = state_26844;
(statearr_26873[(24)] = inst_26816);

return statearr_26873;
})();
var statearr_26874_26947 = state_26844__$1;
(statearr_26874_26947[(2)] = inst_26817);

(statearr_26874_26947[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (33))){
var inst_26803 = (state_26844[(25)]);
var inst_26805 = cljs.core.chunked_seq_QMARK_.call(null,inst_26803);
var state_26844__$1 = state_26844;
if(inst_26805){
var statearr_26875_26948 = state_26844__$1;
(statearr_26875_26948[(1)] = (36));

} else {
var statearr_26876_26949 = state_26844__$1;
(statearr_26876_26949[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (13))){
var inst_26733 = (state_26844[(26)]);
var inst_26736 = cljs.core.async.close_BANG_.call(null,inst_26733);
var state_26844__$1 = state_26844;
var statearr_26877_26950 = state_26844__$1;
(statearr_26877_26950[(2)] = inst_26736);

(statearr_26877_26950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (22))){
var inst_26756 = (state_26844[(8)]);
var inst_26759 = cljs.core.async.close_BANG_.call(null,inst_26756);
var state_26844__$1 = state_26844;
var statearr_26878_26951 = state_26844__$1;
(statearr_26878_26951[(2)] = inst_26759);

(statearr_26878_26951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (36))){
var inst_26803 = (state_26844[(25)]);
var inst_26807 = cljs.core.chunk_first.call(null,inst_26803);
var inst_26808 = cljs.core.chunk_rest.call(null,inst_26803);
var inst_26809 = cljs.core.count.call(null,inst_26807);
var inst_26784 = inst_26808;
var inst_26785 = inst_26807;
var inst_26786 = inst_26809;
var inst_26787 = (0);
var state_26844__$1 = (function (){var statearr_26879 = state_26844;
(statearr_26879[(9)] = inst_26787);

(statearr_26879[(20)] = inst_26784);

(statearr_26879[(21)] = inst_26786);

(statearr_26879[(12)] = inst_26785);

return statearr_26879;
})();
var statearr_26880_26952 = state_26844__$1;
(statearr_26880_26952[(2)] = null);

(statearr_26880_26952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (41))){
var inst_26803 = (state_26844[(25)]);
var inst_26819 = (state_26844[(2)]);
var inst_26820 = cljs.core.next.call(null,inst_26803);
var inst_26784 = inst_26820;
var inst_26785 = null;
var inst_26786 = (0);
var inst_26787 = (0);
var state_26844__$1 = (function (){var statearr_26881 = state_26844;
(statearr_26881[(9)] = inst_26787);

(statearr_26881[(20)] = inst_26784);

(statearr_26881[(21)] = inst_26786);

(statearr_26881[(12)] = inst_26785);

(statearr_26881[(27)] = inst_26819);

return statearr_26881;
})();
var statearr_26882_26953 = state_26844__$1;
(statearr_26882_26953[(2)] = null);

(statearr_26882_26953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (43))){
var state_26844__$1 = state_26844;
var statearr_26883_26954 = state_26844__$1;
(statearr_26883_26954[(2)] = null);

(statearr_26883_26954[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (29))){
var inst_26828 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26884_26955 = state_26844__$1;
(statearr_26884_26955[(2)] = inst_26828);

(statearr_26884_26955[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (44))){
var inst_26837 = (state_26844[(2)]);
var state_26844__$1 = (function (){var statearr_26885 = state_26844;
(statearr_26885[(28)] = inst_26837);

return statearr_26885;
})();
var statearr_26886_26956 = state_26844__$1;
(statearr_26886_26956[(2)] = null);

(statearr_26886_26956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (6))){
var inst_26776 = (state_26844[(29)]);
var inst_26775 = cljs.core.deref.call(null,cs);
var inst_26776__$1 = cljs.core.keys.call(null,inst_26775);
var inst_26777 = cljs.core.count.call(null,inst_26776__$1);
var inst_26778 = cljs.core.reset_BANG_.call(null,dctr,inst_26777);
var inst_26783 = cljs.core.seq.call(null,inst_26776__$1);
var inst_26784 = inst_26783;
var inst_26785 = null;
var inst_26786 = (0);
var inst_26787 = (0);
var state_26844__$1 = (function (){var statearr_26887 = state_26844;
(statearr_26887[(9)] = inst_26787);

(statearr_26887[(29)] = inst_26776__$1);

(statearr_26887[(20)] = inst_26784);

(statearr_26887[(21)] = inst_26786);

(statearr_26887[(30)] = inst_26778);

(statearr_26887[(12)] = inst_26785);

return statearr_26887;
})();
var statearr_26888_26957 = state_26844__$1;
(statearr_26888_26957[(2)] = null);

(statearr_26888_26957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (28))){
var inst_26784 = (state_26844[(20)]);
var inst_26803 = (state_26844[(25)]);
var inst_26803__$1 = cljs.core.seq.call(null,inst_26784);
var state_26844__$1 = (function (){var statearr_26889 = state_26844;
(statearr_26889[(25)] = inst_26803__$1);

return statearr_26889;
})();
if(inst_26803__$1){
var statearr_26890_26958 = state_26844__$1;
(statearr_26890_26958[(1)] = (33));

} else {
var statearr_26891_26959 = state_26844__$1;
(statearr_26891_26959[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (25))){
var inst_26787 = (state_26844[(9)]);
var inst_26786 = (state_26844[(21)]);
var inst_26789 = (inst_26787 < inst_26786);
var inst_26790 = inst_26789;
var state_26844__$1 = state_26844;
if(cljs.core.truth_(inst_26790)){
var statearr_26892_26960 = state_26844__$1;
(statearr_26892_26960[(1)] = (27));

} else {
var statearr_26893_26961 = state_26844__$1;
(statearr_26893_26961[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (34))){
var state_26844__$1 = state_26844;
var statearr_26894_26962 = state_26844__$1;
(statearr_26894_26962[(2)] = null);

(statearr_26894_26962[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (17))){
var state_26844__$1 = state_26844;
var statearr_26895_26963 = state_26844__$1;
(statearr_26895_26963[(2)] = null);

(statearr_26895_26963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (3))){
var inst_26842 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26844__$1,inst_26842);
} else {
if((state_val_26845 === (12))){
var inst_26771 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26896_26964 = state_26844__$1;
(statearr_26896_26964[(2)] = inst_26771);

(statearr_26896_26964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (2))){
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(4),ch);
} else {
if((state_val_26845 === (23))){
var state_26844__$1 = state_26844;
var statearr_26897_26965 = state_26844__$1;
(statearr_26897_26965[(2)] = null);

(statearr_26897_26965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (35))){
var inst_26826 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26898_26966 = state_26844__$1;
(statearr_26898_26966[(2)] = inst_26826);

(statearr_26898_26966[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (19))){
var inst_26743 = (state_26844[(7)]);
var inst_26747 = cljs.core.chunk_first.call(null,inst_26743);
var inst_26748 = cljs.core.chunk_rest.call(null,inst_26743);
var inst_26749 = cljs.core.count.call(null,inst_26747);
var inst_26721 = inst_26748;
var inst_26722 = inst_26747;
var inst_26723 = inst_26749;
var inst_26724 = (0);
var state_26844__$1 = (function (){var statearr_26899 = state_26844;
(statearr_26899[(13)] = inst_26722);

(statearr_26899[(15)] = inst_26724);

(statearr_26899[(16)] = inst_26723);

(statearr_26899[(17)] = inst_26721);

return statearr_26899;
})();
var statearr_26900_26967 = state_26844__$1;
(statearr_26900_26967[(2)] = null);

(statearr_26900_26967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (11))){
var inst_26743 = (state_26844[(7)]);
var inst_26721 = (state_26844[(17)]);
var inst_26743__$1 = cljs.core.seq.call(null,inst_26721);
var state_26844__$1 = (function (){var statearr_26901 = state_26844;
(statearr_26901[(7)] = inst_26743__$1);

return statearr_26901;
})();
if(inst_26743__$1){
var statearr_26902_26968 = state_26844__$1;
(statearr_26902_26968[(1)] = (16));

} else {
var statearr_26903_26969 = state_26844__$1;
(statearr_26903_26969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (9))){
var inst_26773 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26904_26970 = state_26844__$1;
(statearr_26904_26970[(2)] = inst_26773);

(statearr_26904_26970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (5))){
var inst_26719 = cljs.core.deref.call(null,cs);
var inst_26720 = cljs.core.seq.call(null,inst_26719);
var inst_26721 = inst_26720;
var inst_26722 = null;
var inst_26723 = (0);
var inst_26724 = (0);
var state_26844__$1 = (function (){var statearr_26905 = state_26844;
(statearr_26905[(13)] = inst_26722);

(statearr_26905[(15)] = inst_26724);

(statearr_26905[(16)] = inst_26723);

(statearr_26905[(17)] = inst_26721);

return statearr_26905;
})();
var statearr_26906_26971 = state_26844__$1;
(statearr_26906_26971[(2)] = null);

(statearr_26906_26971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (14))){
var state_26844__$1 = state_26844;
var statearr_26907_26972 = state_26844__$1;
(statearr_26907_26972[(2)] = null);

(statearr_26907_26972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (45))){
var inst_26834 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26908_26973 = state_26844__$1;
(statearr_26908_26973[(2)] = inst_26834);

(statearr_26908_26973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (26))){
var inst_26776 = (state_26844[(29)]);
var inst_26830 = (state_26844[(2)]);
var inst_26831 = cljs.core.seq.call(null,inst_26776);
var state_26844__$1 = (function (){var statearr_26909 = state_26844;
(statearr_26909[(31)] = inst_26830);

return statearr_26909;
})();
if(inst_26831){
var statearr_26910_26974 = state_26844__$1;
(statearr_26910_26974[(1)] = (42));

} else {
var statearr_26911_26975 = state_26844__$1;
(statearr_26911_26975[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (16))){
var inst_26743 = (state_26844[(7)]);
var inst_26745 = cljs.core.chunked_seq_QMARK_.call(null,inst_26743);
var state_26844__$1 = state_26844;
if(inst_26745){
var statearr_26912_26976 = state_26844__$1;
(statearr_26912_26976[(1)] = (19));

} else {
var statearr_26913_26977 = state_26844__$1;
(statearr_26913_26977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (38))){
var inst_26823 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26914_26978 = state_26844__$1;
(statearr_26914_26978[(2)] = inst_26823);

(statearr_26914_26978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (30))){
var state_26844__$1 = state_26844;
var statearr_26915_26979 = state_26844__$1;
(statearr_26915_26979[(2)] = null);

(statearr_26915_26979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (10))){
var inst_26722 = (state_26844[(13)]);
var inst_26724 = (state_26844[(15)]);
var inst_26732 = cljs.core._nth.call(null,inst_26722,inst_26724);
var inst_26733 = cljs.core.nth.call(null,inst_26732,(0),null);
var inst_26734 = cljs.core.nth.call(null,inst_26732,(1),null);
var state_26844__$1 = (function (){var statearr_26916 = state_26844;
(statearr_26916[(26)] = inst_26733);

return statearr_26916;
})();
if(cljs.core.truth_(inst_26734)){
var statearr_26917_26980 = state_26844__$1;
(statearr_26917_26980[(1)] = (13));

} else {
var statearr_26918_26981 = state_26844__$1;
(statearr_26918_26981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (18))){
var inst_26769 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26919_26982 = state_26844__$1;
(statearr_26919_26982[(2)] = inst_26769);

(statearr_26919_26982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (42))){
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(45),dchan);
} else {
if((state_val_26845 === (37))){
var inst_26712 = (state_26844[(10)]);
var inst_26812 = (state_26844[(23)]);
var inst_26803 = (state_26844[(25)]);
var inst_26812__$1 = cljs.core.first.call(null,inst_26803);
var inst_26813 = cljs.core.async.put_BANG_.call(null,inst_26812__$1,inst_26712,done);
var state_26844__$1 = (function (){var statearr_26920 = state_26844;
(statearr_26920[(23)] = inst_26812__$1);

return statearr_26920;
})();
if(cljs.core.truth_(inst_26813)){
var statearr_26921_26983 = state_26844__$1;
(statearr_26921_26983[(1)] = (39));

} else {
var statearr_26922_26984 = state_26844__$1;
(statearr_26922_26984[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (8))){
var inst_26724 = (state_26844[(15)]);
var inst_26723 = (state_26844[(16)]);
var inst_26726 = (inst_26724 < inst_26723);
var inst_26727 = inst_26726;
var state_26844__$1 = state_26844;
if(cljs.core.truth_(inst_26727)){
var statearr_26923_26985 = state_26844__$1;
(statearr_26923_26985[(1)] = (10));

} else {
var statearr_26924_26986 = state_26844__$1;
(statearr_26924_26986[(1)] = (11));

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
});})(c__25609__auto___26932,cs,m,dchan,dctr,done))
;
return ((function (switch__25497__auto__,c__25609__auto___26932,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25498__auto__ = null;
var cljs$core$async$mult_$_state_machine__25498__auto____0 = (function (){
var statearr_26928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26928[(0)] = cljs$core$async$mult_$_state_machine__25498__auto__);

(statearr_26928[(1)] = (1));

return statearr_26928;
});
var cljs$core$async$mult_$_state_machine__25498__auto____1 = (function (state_26844){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_26844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object)){
var ex__25501__auto__ = e26929;
var statearr_26930_26987 = state_26844;
(statearr_26930_26987[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26988 = state_26844;
state_26844 = G__26988;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25498__auto__ = function(state_26844){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25498__auto____1.call(this,state_26844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25498__auto____0;
cljs$core$async$mult_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25498__auto____1;
return cljs$core$async$mult_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___26932,cs,m,dchan,dctr,done))
})();
var state__25611__auto__ = (function (){var statearr_26931 = f__25610__auto__.call(null);
(statearr_26931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___26932);

return statearr_26931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___26932,cs,m,dchan,dctr,done))
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
var args26989 = [];
var len__22749__auto___26992 = arguments.length;
var i__22750__auto___26993 = (0);
while(true){
if((i__22750__auto___26993 < len__22749__auto___26992)){
args26989.push((arguments[i__22750__auto___26993]));

var G__26994 = (i__22750__auto___26993 + (1));
i__22750__auto___26993 = G__26994;
continue;
} else {
}
break;
}

var G__26991 = args26989.length;
switch (G__26991) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26989.length)].join('')));

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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,state_map);
} else {
var m__22338__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,state_map);
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
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,mode);
} else {
var m__22338__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___27006 = arguments.length;
var i__22750__auto___27007 = (0);
while(true){
if((i__22750__auto___27007 < len__22749__auto___27006)){
args__22756__auto__.push((arguments[i__22750__auto___27007]));

var G__27008 = (i__22750__auto___27007 + (1));
i__22750__auto___27007 = G__27008;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((3) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22757__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27000){
var map__27001 = p__27000;
var map__27001__$1 = ((((!((map__27001 == null)))?((((map__27001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27001):map__27001);
var opts = map__27001__$1;
var statearr_27003_27009 = state;
(statearr_27003_27009[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27001,map__27001__$1,opts){
return (function (val){
var statearr_27004_27010 = state;
(statearr_27004_27010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27001,map__27001__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27005_27011 = state;
(statearr_27005_27011[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26996){
var G__26997 = cljs.core.first.call(null,seq26996);
var seq26996__$1 = cljs.core.next.call(null,seq26996);
var G__26998 = cljs.core.first.call(null,seq26996__$1);
var seq26996__$2 = cljs.core.next.call(null,seq26996__$1);
var G__26999 = cljs.core.first.call(null,seq26996__$2);
var seq26996__$3 = cljs.core.next.call(null,seq26996__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26997,G__26998,G__26999,seq26996__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27177 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27178){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27178 = meta27178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27179,meta27178__$1){
var self__ = this;
var _27179__$1 = this;
return (new cljs.core.async.t_cljs$core$async27177(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27178__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27179){
var self__ = this;
var _27179__$1 = this;
return self__.meta27178;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27178","meta27178",628936103,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27177";

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27177");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27177 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27177(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27178){
return (new cljs.core.async.t_cljs$core$async27177(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27178));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27177(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25609__auto___27342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27279){
var state_val_27280 = (state_27279[(1)]);
if((state_val_27280 === (7))){
var inst_27195 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27281_27343 = state_27279__$1;
(statearr_27281_27343[(2)] = inst_27195);

(statearr_27281_27343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (20))){
var inst_27207 = (state_27279[(7)]);
var state_27279__$1 = state_27279;
var statearr_27282_27344 = state_27279__$1;
(statearr_27282_27344[(2)] = inst_27207);

(statearr_27282_27344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (27))){
var state_27279__$1 = state_27279;
var statearr_27283_27345 = state_27279__$1;
(statearr_27283_27345[(2)] = null);

(statearr_27283_27345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (1))){
var inst_27183 = (state_27279[(8)]);
var inst_27183__$1 = calc_state.call(null);
var inst_27185 = (inst_27183__$1 == null);
var inst_27186 = cljs.core.not.call(null,inst_27185);
var state_27279__$1 = (function (){var statearr_27284 = state_27279;
(statearr_27284[(8)] = inst_27183__$1);

return statearr_27284;
})();
if(inst_27186){
var statearr_27285_27346 = state_27279__$1;
(statearr_27285_27346[(1)] = (2));

} else {
var statearr_27286_27347 = state_27279__$1;
(statearr_27286_27347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (24))){
var inst_27253 = (state_27279[(9)]);
var inst_27230 = (state_27279[(10)]);
var inst_27239 = (state_27279[(11)]);
var inst_27253__$1 = inst_27230.call(null,inst_27239);
var state_27279__$1 = (function (){var statearr_27287 = state_27279;
(statearr_27287[(9)] = inst_27253__$1);

return statearr_27287;
})();
if(cljs.core.truth_(inst_27253__$1)){
var statearr_27288_27348 = state_27279__$1;
(statearr_27288_27348[(1)] = (29));

} else {
var statearr_27289_27349 = state_27279__$1;
(statearr_27289_27349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (4))){
var inst_27198 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27198)){
var statearr_27290_27350 = state_27279__$1;
(statearr_27290_27350[(1)] = (8));

} else {
var statearr_27291_27351 = state_27279__$1;
(statearr_27291_27351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (15))){
var inst_27224 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27224)){
var statearr_27292_27352 = state_27279__$1;
(statearr_27292_27352[(1)] = (19));

} else {
var statearr_27293_27353 = state_27279__$1;
(statearr_27293_27353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (21))){
var inst_27229 = (state_27279[(12)]);
var inst_27229__$1 = (state_27279[(2)]);
var inst_27230 = cljs.core.get.call(null,inst_27229__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27231 = cljs.core.get.call(null,inst_27229__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27232 = cljs.core.get.call(null,inst_27229__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27279__$1 = (function (){var statearr_27294 = state_27279;
(statearr_27294[(13)] = inst_27231);

(statearr_27294[(12)] = inst_27229__$1);

(statearr_27294[(10)] = inst_27230);

return statearr_27294;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27279__$1,(22),inst_27232);
} else {
if((state_val_27280 === (31))){
var inst_27261 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27261)){
var statearr_27295_27354 = state_27279__$1;
(statearr_27295_27354[(1)] = (32));

} else {
var statearr_27296_27355 = state_27279__$1;
(statearr_27296_27355[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (32))){
var inst_27238 = (state_27279[(14)]);
var state_27279__$1 = state_27279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27279__$1,(35),out,inst_27238);
} else {
if((state_val_27280 === (33))){
var inst_27229 = (state_27279[(12)]);
var inst_27207 = inst_27229;
var state_27279__$1 = (function (){var statearr_27297 = state_27279;
(statearr_27297[(7)] = inst_27207);

return statearr_27297;
})();
var statearr_27298_27356 = state_27279__$1;
(statearr_27298_27356[(2)] = null);

(statearr_27298_27356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (13))){
var inst_27207 = (state_27279[(7)]);
var inst_27214 = inst_27207.cljs$lang$protocol_mask$partition0$;
var inst_27215 = (inst_27214 & (64));
var inst_27216 = inst_27207.cljs$core$ISeq$;
var inst_27217 = (inst_27215) || (inst_27216);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27217)){
var statearr_27299_27357 = state_27279__$1;
(statearr_27299_27357[(1)] = (16));

} else {
var statearr_27300_27358 = state_27279__$1;
(statearr_27300_27358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (22))){
var inst_27238 = (state_27279[(14)]);
var inst_27239 = (state_27279[(11)]);
var inst_27237 = (state_27279[(2)]);
var inst_27238__$1 = cljs.core.nth.call(null,inst_27237,(0),null);
var inst_27239__$1 = cljs.core.nth.call(null,inst_27237,(1),null);
var inst_27240 = (inst_27238__$1 == null);
var inst_27241 = cljs.core._EQ_.call(null,inst_27239__$1,change);
var inst_27242 = (inst_27240) || (inst_27241);
var state_27279__$1 = (function (){var statearr_27301 = state_27279;
(statearr_27301[(14)] = inst_27238__$1);

(statearr_27301[(11)] = inst_27239__$1);

return statearr_27301;
})();
if(cljs.core.truth_(inst_27242)){
var statearr_27302_27359 = state_27279__$1;
(statearr_27302_27359[(1)] = (23));

} else {
var statearr_27303_27360 = state_27279__$1;
(statearr_27303_27360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (36))){
var inst_27229 = (state_27279[(12)]);
var inst_27207 = inst_27229;
var state_27279__$1 = (function (){var statearr_27304 = state_27279;
(statearr_27304[(7)] = inst_27207);

return statearr_27304;
})();
var statearr_27305_27361 = state_27279__$1;
(statearr_27305_27361[(2)] = null);

(statearr_27305_27361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (29))){
var inst_27253 = (state_27279[(9)]);
var state_27279__$1 = state_27279;
var statearr_27306_27362 = state_27279__$1;
(statearr_27306_27362[(2)] = inst_27253);

(statearr_27306_27362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (6))){
var state_27279__$1 = state_27279;
var statearr_27307_27363 = state_27279__$1;
(statearr_27307_27363[(2)] = false);

(statearr_27307_27363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (28))){
var inst_27249 = (state_27279[(2)]);
var inst_27250 = calc_state.call(null);
var inst_27207 = inst_27250;
var state_27279__$1 = (function (){var statearr_27308 = state_27279;
(statearr_27308[(15)] = inst_27249);

(statearr_27308[(7)] = inst_27207);

return statearr_27308;
})();
var statearr_27309_27364 = state_27279__$1;
(statearr_27309_27364[(2)] = null);

(statearr_27309_27364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (25))){
var inst_27275 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27310_27365 = state_27279__$1;
(statearr_27310_27365[(2)] = inst_27275);

(statearr_27310_27365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (34))){
var inst_27273 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27311_27366 = state_27279__$1;
(statearr_27311_27366[(2)] = inst_27273);

(statearr_27311_27366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (17))){
var state_27279__$1 = state_27279;
var statearr_27312_27367 = state_27279__$1;
(statearr_27312_27367[(2)] = false);

(statearr_27312_27367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (3))){
var state_27279__$1 = state_27279;
var statearr_27313_27368 = state_27279__$1;
(statearr_27313_27368[(2)] = false);

(statearr_27313_27368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (12))){
var inst_27277 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27279__$1,inst_27277);
} else {
if((state_val_27280 === (2))){
var inst_27183 = (state_27279[(8)]);
var inst_27188 = inst_27183.cljs$lang$protocol_mask$partition0$;
var inst_27189 = (inst_27188 & (64));
var inst_27190 = inst_27183.cljs$core$ISeq$;
var inst_27191 = (inst_27189) || (inst_27190);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27191)){
var statearr_27314_27369 = state_27279__$1;
(statearr_27314_27369[(1)] = (5));

} else {
var statearr_27315_27370 = state_27279__$1;
(statearr_27315_27370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (23))){
var inst_27238 = (state_27279[(14)]);
var inst_27244 = (inst_27238 == null);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27244)){
var statearr_27316_27371 = state_27279__$1;
(statearr_27316_27371[(1)] = (26));

} else {
var statearr_27317_27372 = state_27279__$1;
(statearr_27317_27372[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (35))){
var inst_27264 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
if(cljs.core.truth_(inst_27264)){
var statearr_27318_27373 = state_27279__$1;
(statearr_27318_27373[(1)] = (36));

} else {
var statearr_27319_27374 = state_27279__$1;
(statearr_27319_27374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (19))){
var inst_27207 = (state_27279[(7)]);
var inst_27226 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27207);
var state_27279__$1 = state_27279;
var statearr_27320_27375 = state_27279__$1;
(statearr_27320_27375[(2)] = inst_27226);

(statearr_27320_27375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (11))){
var inst_27207 = (state_27279[(7)]);
var inst_27211 = (inst_27207 == null);
var inst_27212 = cljs.core.not.call(null,inst_27211);
var state_27279__$1 = state_27279;
if(inst_27212){
var statearr_27321_27376 = state_27279__$1;
(statearr_27321_27376[(1)] = (13));

} else {
var statearr_27322_27377 = state_27279__$1;
(statearr_27322_27377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (9))){
var inst_27183 = (state_27279[(8)]);
var state_27279__$1 = state_27279;
var statearr_27323_27378 = state_27279__$1;
(statearr_27323_27378[(2)] = inst_27183);

(statearr_27323_27378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (5))){
var state_27279__$1 = state_27279;
var statearr_27324_27379 = state_27279__$1;
(statearr_27324_27379[(2)] = true);

(statearr_27324_27379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (14))){
var state_27279__$1 = state_27279;
var statearr_27325_27380 = state_27279__$1;
(statearr_27325_27380[(2)] = false);

(statearr_27325_27380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (26))){
var inst_27239 = (state_27279[(11)]);
var inst_27246 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27239);
var state_27279__$1 = state_27279;
var statearr_27326_27381 = state_27279__$1;
(statearr_27326_27381[(2)] = inst_27246);

(statearr_27326_27381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (16))){
var state_27279__$1 = state_27279;
var statearr_27327_27382 = state_27279__$1;
(statearr_27327_27382[(2)] = true);

(statearr_27327_27382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (38))){
var inst_27269 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27328_27383 = state_27279__$1;
(statearr_27328_27383[(2)] = inst_27269);

(statearr_27328_27383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (30))){
var inst_27231 = (state_27279[(13)]);
var inst_27230 = (state_27279[(10)]);
var inst_27239 = (state_27279[(11)]);
var inst_27256 = cljs.core.empty_QMARK_.call(null,inst_27230);
var inst_27257 = inst_27231.call(null,inst_27239);
var inst_27258 = cljs.core.not.call(null,inst_27257);
var inst_27259 = (inst_27256) && (inst_27258);
var state_27279__$1 = state_27279;
var statearr_27329_27384 = state_27279__$1;
(statearr_27329_27384[(2)] = inst_27259);

(statearr_27329_27384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (10))){
var inst_27183 = (state_27279[(8)]);
var inst_27203 = (state_27279[(2)]);
var inst_27204 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27205 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27206 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27207 = inst_27183;
var state_27279__$1 = (function (){var statearr_27330 = state_27279;
(statearr_27330[(7)] = inst_27207);

(statearr_27330[(16)] = inst_27204);

(statearr_27330[(17)] = inst_27206);

(statearr_27330[(18)] = inst_27205);

return statearr_27330;
})();
var statearr_27331_27385 = state_27279__$1;
(statearr_27331_27385[(2)] = null);

(statearr_27331_27385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (18))){
var inst_27221 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27332_27386 = state_27279__$1;
(statearr_27332_27386[(2)] = inst_27221);

(statearr_27332_27386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (37))){
var state_27279__$1 = state_27279;
var statearr_27333_27387 = state_27279__$1;
(statearr_27333_27387[(2)] = null);

(statearr_27333_27387[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (8))){
var inst_27183 = (state_27279[(8)]);
var inst_27200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27183);
var state_27279__$1 = state_27279;
var statearr_27334_27388 = state_27279__$1;
(statearr_27334_27388[(2)] = inst_27200);

(statearr_27334_27388[(1)] = (10));


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
});})(c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25497__auto__,c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25498__auto__ = null;
var cljs$core$async$mix_$_state_machine__25498__auto____0 = (function (){
var statearr_27338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27338[(0)] = cljs$core$async$mix_$_state_machine__25498__auto__);

(statearr_27338[(1)] = (1));

return statearr_27338;
});
var cljs$core$async$mix_$_state_machine__25498__auto____1 = (function (state_27279){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27339){if((e27339 instanceof Object)){
var ex__25501__auto__ = e27339;
var statearr_27340_27389 = state_27279;
(statearr_27340_27389[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27390 = state_27279;
state_27279 = G__27390;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25498__auto__ = function(state_27279){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25498__auto____1.call(this,state_27279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25498__auto____0;
cljs$core$async$mix_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25498__auto____1;
return cljs$core$async$mix_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25611__auto__ = (function (){var statearr_27341 = f__25610__auto__.call(null);
(statearr_27341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27342);

return statearr_27341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27391 = [];
var len__22749__auto___27394 = arguments.length;
var i__22750__auto___27395 = (0);
while(true){
if((i__22750__auto___27395 < len__22749__auto___27394)){
args27391.push((arguments[i__22750__auto___27395]));

var G__27396 = (i__22750__auto___27395 + (1));
i__22750__auto___27395 = G__27396;
continue;
} else {
}
break;
}

var G__27393 = args27391.length;
switch (G__27393) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27391.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p);
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
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v);
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
var args27399 = [];
var len__22749__auto___27524 = arguments.length;
var i__22750__auto___27525 = (0);
while(true){
if((i__22750__auto___27525 < len__22749__auto___27524)){
args27399.push((arguments[i__22750__auto___27525]));

var G__27526 = (i__22750__auto___27525 + (1));
i__22750__auto___27525 = G__27526;
continue;
} else {
}
break;
}

var G__27401 = args27399.length;
switch (G__27401) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27399.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21674__auto__,mults){
return (function (p1__27398_SHARP_){
if(cljs.core.truth_(p1__27398_SHARP_.call(null,topic))){
return p1__27398_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27398_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27403 = meta27403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27404,meta27403__$1){
var self__ = this;
var _27404__$1 = this;
return (new cljs.core.async.t_cljs$core$async27402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27403__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27404){
var self__ = this;
var _27404__$1 = this;
return self__.meta27403;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27403","meta27403",1838808208,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27402";

cljs.core.async.t_cljs$core$async27402.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27402");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27402 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27403){
return (new cljs.core.async.t_cljs$core$async27402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27403));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25609__auto___27528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27528,mults,ensure_mult,p){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27528,mults,ensure_mult,p){
return (function (state_27476){
var state_val_27477 = (state_27476[(1)]);
if((state_val_27477 === (7))){
var inst_27472 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27478_27529 = state_27476__$1;
(statearr_27478_27529[(2)] = inst_27472);

(statearr_27478_27529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (20))){
var state_27476__$1 = state_27476;
var statearr_27479_27530 = state_27476__$1;
(statearr_27479_27530[(2)] = null);

(statearr_27479_27530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (1))){
var state_27476__$1 = state_27476;
var statearr_27480_27531 = state_27476__$1;
(statearr_27480_27531[(2)] = null);

(statearr_27480_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (24))){
var inst_27455 = (state_27476[(7)]);
var inst_27464 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27455);
var state_27476__$1 = state_27476;
var statearr_27481_27532 = state_27476__$1;
(statearr_27481_27532[(2)] = inst_27464);

(statearr_27481_27532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (4))){
var inst_27407 = (state_27476[(8)]);
var inst_27407__$1 = (state_27476[(2)]);
var inst_27408 = (inst_27407__$1 == null);
var state_27476__$1 = (function (){var statearr_27482 = state_27476;
(statearr_27482[(8)] = inst_27407__$1);

return statearr_27482;
})();
if(cljs.core.truth_(inst_27408)){
var statearr_27483_27533 = state_27476__$1;
(statearr_27483_27533[(1)] = (5));

} else {
var statearr_27484_27534 = state_27476__$1;
(statearr_27484_27534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (15))){
var inst_27449 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27485_27535 = state_27476__$1;
(statearr_27485_27535[(2)] = inst_27449);

(statearr_27485_27535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (21))){
var inst_27469 = (state_27476[(2)]);
var state_27476__$1 = (function (){var statearr_27486 = state_27476;
(statearr_27486[(9)] = inst_27469);

return statearr_27486;
})();
var statearr_27487_27536 = state_27476__$1;
(statearr_27487_27536[(2)] = null);

(statearr_27487_27536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (13))){
var inst_27431 = (state_27476[(10)]);
var inst_27433 = cljs.core.chunked_seq_QMARK_.call(null,inst_27431);
var state_27476__$1 = state_27476;
if(inst_27433){
var statearr_27488_27537 = state_27476__$1;
(statearr_27488_27537[(1)] = (16));

} else {
var statearr_27489_27538 = state_27476__$1;
(statearr_27489_27538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (22))){
var inst_27461 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
if(cljs.core.truth_(inst_27461)){
var statearr_27490_27539 = state_27476__$1;
(statearr_27490_27539[(1)] = (23));

} else {
var statearr_27491_27540 = state_27476__$1;
(statearr_27491_27540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (6))){
var inst_27457 = (state_27476[(11)]);
var inst_27455 = (state_27476[(7)]);
var inst_27407 = (state_27476[(8)]);
var inst_27455__$1 = topic_fn.call(null,inst_27407);
var inst_27456 = cljs.core.deref.call(null,mults);
var inst_27457__$1 = cljs.core.get.call(null,inst_27456,inst_27455__$1);
var state_27476__$1 = (function (){var statearr_27492 = state_27476;
(statearr_27492[(11)] = inst_27457__$1);

(statearr_27492[(7)] = inst_27455__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27457__$1)){
var statearr_27493_27541 = state_27476__$1;
(statearr_27493_27541[(1)] = (19));

} else {
var statearr_27494_27542 = state_27476__$1;
(statearr_27494_27542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (25))){
var inst_27466 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27495_27543 = state_27476__$1;
(statearr_27495_27543[(2)] = inst_27466);

(statearr_27495_27543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (17))){
var inst_27431 = (state_27476[(10)]);
var inst_27440 = cljs.core.first.call(null,inst_27431);
var inst_27441 = cljs.core.async.muxch_STAR_.call(null,inst_27440);
var inst_27442 = cljs.core.async.close_BANG_.call(null,inst_27441);
var inst_27443 = cljs.core.next.call(null,inst_27431);
var inst_27417 = inst_27443;
var inst_27418 = null;
var inst_27419 = (0);
var inst_27420 = (0);
var state_27476__$1 = (function (){var statearr_27496 = state_27476;
(statearr_27496[(12)] = inst_27420);

(statearr_27496[(13)] = inst_27418);

(statearr_27496[(14)] = inst_27442);

(statearr_27496[(15)] = inst_27417);

(statearr_27496[(16)] = inst_27419);

return statearr_27496;
})();
var statearr_27497_27544 = state_27476__$1;
(statearr_27497_27544[(2)] = null);

(statearr_27497_27544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (3))){
var inst_27474 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27476__$1,inst_27474);
} else {
if((state_val_27477 === (12))){
var inst_27451 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27498_27545 = state_27476__$1;
(statearr_27498_27545[(2)] = inst_27451);

(statearr_27498_27545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (2))){
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27476__$1,(4),ch);
} else {
if((state_val_27477 === (23))){
var state_27476__$1 = state_27476;
var statearr_27499_27546 = state_27476__$1;
(statearr_27499_27546[(2)] = null);

(statearr_27499_27546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (19))){
var inst_27457 = (state_27476[(11)]);
var inst_27407 = (state_27476[(8)]);
var inst_27459 = cljs.core.async.muxch_STAR_.call(null,inst_27457);
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27476__$1,(22),inst_27459,inst_27407);
} else {
if((state_val_27477 === (11))){
var inst_27431 = (state_27476[(10)]);
var inst_27417 = (state_27476[(15)]);
var inst_27431__$1 = cljs.core.seq.call(null,inst_27417);
var state_27476__$1 = (function (){var statearr_27500 = state_27476;
(statearr_27500[(10)] = inst_27431__$1);

return statearr_27500;
})();
if(inst_27431__$1){
var statearr_27501_27547 = state_27476__$1;
(statearr_27501_27547[(1)] = (13));

} else {
var statearr_27502_27548 = state_27476__$1;
(statearr_27502_27548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (9))){
var inst_27453 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27503_27549 = state_27476__$1;
(statearr_27503_27549[(2)] = inst_27453);

(statearr_27503_27549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (5))){
var inst_27414 = cljs.core.deref.call(null,mults);
var inst_27415 = cljs.core.vals.call(null,inst_27414);
var inst_27416 = cljs.core.seq.call(null,inst_27415);
var inst_27417 = inst_27416;
var inst_27418 = null;
var inst_27419 = (0);
var inst_27420 = (0);
var state_27476__$1 = (function (){var statearr_27504 = state_27476;
(statearr_27504[(12)] = inst_27420);

(statearr_27504[(13)] = inst_27418);

(statearr_27504[(15)] = inst_27417);

(statearr_27504[(16)] = inst_27419);

return statearr_27504;
})();
var statearr_27505_27550 = state_27476__$1;
(statearr_27505_27550[(2)] = null);

(statearr_27505_27550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (14))){
var state_27476__$1 = state_27476;
var statearr_27509_27551 = state_27476__$1;
(statearr_27509_27551[(2)] = null);

(statearr_27509_27551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (16))){
var inst_27431 = (state_27476[(10)]);
var inst_27435 = cljs.core.chunk_first.call(null,inst_27431);
var inst_27436 = cljs.core.chunk_rest.call(null,inst_27431);
var inst_27437 = cljs.core.count.call(null,inst_27435);
var inst_27417 = inst_27436;
var inst_27418 = inst_27435;
var inst_27419 = inst_27437;
var inst_27420 = (0);
var state_27476__$1 = (function (){var statearr_27510 = state_27476;
(statearr_27510[(12)] = inst_27420);

(statearr_27510[(13)] = inst_27418);

(statearr_27510[(15)] = inst_27417);

(statearr_27510[(16)] = inst_27419);

return statearr_27510;
})();
var statearr_27511_27552 = state_27476__$1;
(statearr_27511_27552[(2)] = null);

(statearr_27511_27552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (10))){
var inst_27420 = (state_27476[(12)]);
var inst_27418 = (state_27476[(13)]);
var inst_27417 = (state_27476[(15)]);
var inst_27419 = (state_27476[(16)]);
var inst_27425 = cljs.core._nth.call(null,inst_27418,inst_27420);
var inst_27426 = cljs.core.async.muxch_STAR_.call(null,inst_27425);
var inst_27427 = cljs.core.async.close_BANG_.call(null,inst_27426);
var inst_27428 = (inst_27420 + (1));
var tmp27506 = inst_27418;
var tmp27507 = inst_27417;
var tmp27508 = inst_27419;
var inst_27417__$1 = tmp27507;
var inst_27418__$1 = tmp27506;
var inst_27419__$1 = tmp27508;
var inst_27420__$1 = inst_27428;
var state_27476__$1 = (function (){var statearr_27512 = state_27476;
(statearr_27512[(17)] = inst_27427);

(statearr_27512[(12)] = inst_27420__$1);

(statearr_27512[(13)] = inst_27418__$1);

(statearr_27512[(15)] = inst_27417__$1);

(statearr_27512[(16)] = inst_27419__$1);

return statearr_27512;
})();
var statearr_27513_27553 = state_27476__$1;
(statearr_27513_27553[(2)] = null);

(statearr_27513_27553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (18))){
var inst_27446 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27514_27554 = state_27476__$1;
(statearr_27514_27554[(2)] = inst_27446);

(statearr_27514_27554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (8))){
var inst_27420 = (state_27476[(12)]);
var inst_27419 = (state_27476[(16)]);
var inst_27422 = (inst_27420 < inst_27419);
var inst_27423 = inst_27422;
var state_27476__$1 = state_27476;
if(cljs.core.truth_(inst_27423)){
var statearr_27515_27555 = state_27476__$1;
(statearr_27515_27555[(1)] = (10));

} else {
var statearr_27516_27556 = state_27476__$1;
(statearr_27516_27556[(1)] = (11));

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
});})(c__25609__auto___27528,mults,ensure_mult,p))
;
return ((function (switch__25497__auto__,c__25609__auto___27528,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_27520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27520[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_27520[(1)] = (1));

return statearr_27520;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_27476){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27521){if((e27521 instanceof Object)){
var ex__25501__auto__ = e27521;
var statearr_27522_27557 = state_27476;
(statearr_27522_27557[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27558 = state_27476;
state_27476 = G__27558;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_27476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_27476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27528,mults,ensure_mult,p))
})();
var state__25611__auto__ = (function (){var statearr_27523 = f__25610__auto__.call(null);
(statearr_27523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27528);

return statearr_27523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27528,mults,ensure_mult,p))
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
var args27559 = [];
var len__22749__auto___27562 = arguments.length;
var i__22750__auto___27563 = (0);
while(true){
if((i__22750__auto___27563 < len__22749__auto___27562)){
args27559.push((arguments[i__22750__auto___27563]));

var G__27564 = (i__22750__auto___27563 + (1));
i__22750__auto___27563 = G__27564;
continue;
} else {
}
break;
}

var G__27561 = args27559.length;
switch (G__27561) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27559.length)].join('')));

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
var args27566 = [];
var len__22749__auto___27569 = arguments.length;
var i__22750__auto___27570 = (0);
while(true){
if((i__22750__auto___27570 < len__22749__auto___27569)){
args27566.push((arguments[i__22750__auto___27570]));

var G__27571 = (i__22750__auto___27570 + (1));
i__22750__auto___27570 = G__27571;
continue;
} else {
}
break;
}

var G__27568 = args27566.length;
switch (G__27568) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27566.length)].join('')));

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
var args27573 = [];
var len__22749__auto___27644 = arguments.length;
var i__22750__auto___27645 = (0);
while(true){
if((i__22750__auto___27645 < len__22749__auto___27644)){
args27573.push((arguments[i__22750__auto___27645]));

var G__27646 = (i__22750__auto___27645 + (1));
i__22750__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var G__27575 = args27573.length;
switch (G__27575) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27573.length)].join('')));

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
var c__25609__auto___27648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (7))){
var state_27614__$1 = state_27614;
var statearr_27616_27649 = state_27614__$1;
(statearr_27616_27649[(2)] = null);

(statearr_27616_27649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (1))){
var state_27614__$1 = state_27614;
var statearr_27617_27650 = state_27614__$1;
(statearr_27617_27650[(2)] = null);

(statearr_27617_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (4))){
var inst_27578 = (state_27614[(7)]);
var inst_27580 = (inst_27578 < cnt);
var state_27614__$1 = state_27614;
if(cljs.core.truth_(inst_27580)){
var statearr_27618_27651 = state_27614__$1;
(statearr_27618_27651[(1)] = (6));

} else {
var statearr_27619_27652 = state_27614__$1;
(statearr_27619_27652[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (15))){
var inst_27610 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27620_27653 = state_27614__$1;
(statearr_27620_27653[(2)] = inst_27610);

(statearr_27620_27653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (13))){
var inst_27603 = cljs.core.async.close_BANG_.call(null,out);
var state_27614__$1 = state_27614;
var statearr_27621_27654 = state_27614__$1;
(statearr_27621_27654[(2)] = inst_27603);

(statearr_27621_27654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (6))){
var state_27614__$1 = state_27614;
var statearr_27622_27655 = state_27614__$1;
(statearr_27622_27655[(2)] = null);

(statearr_27622_27655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (3))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
if((state_val_27615 === (12))){
var inst_27600 = (state_27614[(8)]);
var inst_27600__$1 = (state_27614[(2)]);
var inst_27601 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27600__$1);
var state_27614__$1 = (function (){var statearr_27623 = state_27614;
(statearr_27623[(8)] = inst_27600__$1);

return statearr_27623;
})();
if(cljs.core.truth_(inst_27601)){
var statearr_27624_27656 = state_27614__$1;
(statearr_27624_27656[(1)] = (13));

} else {
var statearr_27625_27657 = state_27614__$1;
(statearr_27625_27657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (2))){
var inst_27577 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27578 = (0);
var state_27614__$1 = (function (){var statearr_27626 = state_27614;
(statearr_27626[(9)] = inst_27577);

(statearr_27626[(7)] = inst_27578);

return statearr_27626;
})();
var statearr_27627_27658 = state_27614__$1;
(statearr_27627_27658[(2)] = null);

(statearr_27627_27658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (11))){
var inst_27578 = (state_27614[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27614,(10),Object,null,(9));
var inst_27587 = chs__$1.call(null,inst_27578);
var inst_27588 = done.call(null,inst_27578);
var inst_27589 = cljs.core.async.take_BANG_.call(null,inst_27587,inst_27588);
var state_27614__$1 = state_27614;
var statearr_27628_27659 = state_27614__$1;
(statearr_27628_27659[(2)] = inst_27589);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (9))){
var inst_27578 = (state_27614[(7)]);
var inst_27591 = (state_27614[(2)]);
var inst_27592 = (inst_27578 + (1));
var inst_27578__$1 = inst_27592;
var state_27614__$1 = (function (){var statearr_27629 = state_27614;
(statearr_27629[(10)] = inst_27591);

(statearr_27629[(7)] = inst_27578__$1);

return statearr_27629;
})();
var statearr_27630_27660 = state_27614__$1;
(statearr_27630_27660[(2)] = null);

(statearr_27630_27660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var inst_27598 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27631 = state_27614;
(statearr_27631[(11)] = inst_27598);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(12),dchan);
} else {
if((state_val_27615 === (14))){
var inst_27600 = (state_27614[(8)]);
var inst_27605 = cljs.core.apply.call(null,f,inst_27600);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27614__$1,(16),out,inst_27605);
} else {
if((state_val_27615 === (16))){
var inst_27607 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27632 = state_27614;
(statearr_27632[(12)] = inst_27607);

return statearr_27632;
})();
var statearr_27633_27661 = state_27614__$1;
(statearr_27633_27661[(2)] = null);

(statearr_27633_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (10))){
var inst_27582 = (state_27614[(2)]);
var inst_27583 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27614__$1 = (function (){var statearr_27634 = state_27614;
(statearr_27634[(13)] = inst_27582);

return statearr_27634;
})();
var statearr_27635_27662 = state_27614__$1;
(statearr_27635_27662[(2)] = inst_27583);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (8))){
var inst_27596 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27636_27663 = state_27614__$1;
(statearr_27636_27663[(2)] = inst_27596);

(statearr_27636_27663[(1)] = (5));


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
});})(c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25497__auto__,c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_27640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27640[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_27640[(1)] = (1));

return statearr_27640;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_27614){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27641){if((e27641 instanceof Object)){
var ex__25501__auto__ = e27641;
var statearr_27642_27664 = state_27614;
(statearr_27642_27664[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27665 = state_27614;
state_27614 = G__27665;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25611__auto__ = (function (){var statearr_27643 = f__25610__auto__.call(null);
(statearr_27643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27648);

return statearr_27643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27648,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27667 = [];
var len__22749__auto___27725 = arguments.length;
var i__22750__auto___27726 = (0);
while(true){
if((i__22750__auto___27726 < len__22749__auto___27725)){
args27667.push((arguments[i__22750__auto___27726]));

var G__27727 = (i__22750__auto___27726 + (1));
i__22750__auto___27726 = G__27727;
continue;
} else {
}
break;
}

var G__27669 = args27667.length;
switch (G__27669) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27667.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___27729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27729,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27729,out){
return (function (state_27701){
var state_val_27702 = (state_27701[(1)]);
if((state_val_27702 === (7))){
var inst_27681 = (state_27701[(7)]);
var inst_27680 = (state_27701[(8)]);
var inst_27680__$1 = (state_27701[(2)]);
var inst_27681__$1 = cljs.core.nth.call(null,inst_27680__$1,(0),null);
var inst_27682 = cljs.core.nth.call(null,inst_27680__$1,(1),null);
var inst_27683 = (inst_27681__$1 == null);
var state_27701__$1 = (function (){var statearr_27703 = state_27701;
(statearr_27703[(9)] = inst_27682);

(statearr_27703[(7)] = inst_27681__$1);

(statearr_27703[(8)] = inst_27680__$1);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27683)){
var statearr_27704_27730 = state_27701__$1;
(statearr_27704_27730[(1)] = (8));

} else {
var statearr_27705_27731 = state_27701__$1;
(statearr_27705_27731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (1))){
var inst_27670 = cljs.core.vec.call(null,chs);
var inst_27671 = inst_27670;
var state_27701__$1 = (function (){var statearr_27706 = state_27701;
(statearr_27706[(10)] = inst_27671);

return statearr_27706;
})();
var statearr_27707_27732 = state_27701__$1;
(statearr_27707_27732[(2)] = null);

(statearr_27707_27732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (4))){
var inst_27671 = (state_27701[(10)]);
var state_27701__$1 = state_27701;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27701__$1,(7),inst_27671);
} else {
if((state_val_27702 === (6))){
var inst_27697 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27708_27733 = state_27701__$1;
(statearr_27708_27733[(2)] = inst_27697);

(statearr_27708_27733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (3))){
var inst_27699 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27701__$1,inst_27699);
} else {
if((state_val_27702 === (2))){
var inst_27671 = (state_27701[(10)]);
var inst_27673 = cljs.core.count.call(null,inst_27671);
var inst_27674 = (inst_27673 > (0));
var state_27701__$1 = state_27701;
if(cljs.core.truth_(inst_27674)){
var statearr_27710_27734 = state_27701__$1;
(statearr_27710_27734[(1)] = (4));

} else {
var statearr_27711_27735 = state_27701__$1;
(statearr_27711_27735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (11))){
var inst_27671 = (state_27701[(10)]);
var inst_27690 = (state_27701[(2)]);
var tmp27709 = inst_27671;
var inst_27671__$1 = tmp27709;
var state_27701__$1 = (function (){var statearr_27712 = state_27701;
(statearr_27712[(11)] = inst_27690);

(statearr_27712[(10)] = inst_27671__$1);

return statearr_27712;
})();
var statearr_27713_27736 = state_27701__$1;
(statearr_27713_27736[(2)] = null);

(statearr_27713_27736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (9))){
var inst_27681 = (state_27701[(7)]);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27701__$1,(11),out,inst_27681);
} else {
if((state_val_27702 === (5))){
var inst_27695 = cljs.core.async.close_BANG_.call(null,out);
var state_27701__$1 = state_27701;
var statearr_27714_27737 = state_27701__$1;
(statearr_27714_27737[(2)] = inst_27695);

(statearr_27714_27737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (10))){
var inst_27693 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27715_27738 = state_27701__$1;
(statearr_27715_27738[(2)] = inst_27693);

(statearr_27715_27738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (8))){
var inst_27682 = (state_27701[(9)]);
var inst_27681 = (state_27701[(7)]);
var inst_27680 = (state_27701[(8)]);
var inst_27671 = (state_27701[(10)]);
var inst_27685 = (function (){var cs = inst_27671;
var vec__27676 = inst_27680;
var v = inst_27681;
var c = inst_27682;
return ((function (cs,vec__27676,v,c,inst_27682,inst_27681,inst_27680,inst_27671,state_val_27702,c__25609__auto___27729,out){
return (function (p1__27666_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27666_SHARP_);
});
;})(cs,vec__27676,v,c,inst_27682,inst_27681,inst_27680,inst_27671,state_val_27702,c__25609__auto___27729,out))
})();
var inst_27686 = cljs.core.filterv.call(null,inst_27685,inst_27671);
var inst_27671__$1 = inst_27686;
var state_27701__$1 = (function (){var statearr_27716 = state_27701;
(statearr_27716[(10)] = inst_27671__$1);

return statearr_27716;
})();
var statearr_27717_27739 = state_27701__$1;
(statearr_27717_27739[(2)] = null);

(statearr_27717_27739[(1)] = (2));


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
});})(c__25609__auto___27729,out))
;
return ((function (switch__25497__auto__,c__25609__auto___27729,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_27721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27721[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_27721[(1)] = (1));

return statearr_27721;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_27701){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27722){if((e27722 instanceof Object)){
var ex__25501__auto__ = e27722;
var statearr_27723_27740 = state_27701;
(statearr_27723_27740[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27741 = state_27701;
state_27701 = G__27741;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_27701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_27701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27729,out))
})();
var state__25611__auto__ = (function (){var statearr_27724 = f__25610__auto__.call(null);
(statearr_27724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27729);

return statearr_27724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27729,out))
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
var args27742 = [];
var len__22749__auto___27791 = arguments.length;
var i__22750__auto___27792 = (0);
while(true){
if((i__22750__auto___27792 < len__22749__auto___27791)){
args27742.push((arguments[i__22750__auto___27792]));

var G__27793 = (i__22750__auto___27792 + (1));
i__22750__auto___27792 = G__27793;
continue;
} else {
}
break;
}

var G__27744 = args27742.length;
switch (G__27744) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27742.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___27795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27795,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27795,out){
return (function (state_27768){
var state_val_27769 = (state_27768[(1)]);
if((state_val_27769 === (7))){
var inst_27750 = (state_27768[(7)]);
var inst_27750__$1 = (state_27768[(2)]);
var inst_27751 = (inst_27750__$1 == null);
var inst_27752 = cljs.core.not.call(null,inst_27751);
var state_27768__$1 = (function (){var statearr_27770 = state_27768;
(statearr_27770[(7)] = inst_27750__$1);

return statearr_27770;
})();
if(inst_27752){
var statearr_27771_27796 = state_27768__$1;
(statearr_27771_27796[(1)] = (8));

} else {
var statearr_27772_27797 = state_27768__$1;
(statearr_27772_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (1))){
var inst_27745 = (0);
var state_27768__$1 = (function (){var statearr_27773 = state_27768;
(statearr_27773[(8)] = inst_27745);

return statearr_27773;
})();
var statearr_27774_27798 = state_27768__$1;
(statearr_27774_27798[(2)] = null);

(statearr_27774_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (4))){
var state_27768__$1 = state_27768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27768__$1,(7),ch);
} else {
if((state_val_27769 === (6))){
var inst_27763 = (state_27768[(2)]);
var state_27768__$1 = state_27768;
var statearr_27775_27799 = state_27768__$1;
(statearr_27775_27799[(2)] = inst_27763);

(statearr_27775_27799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (3))){
var inst_27765 = (state_27768[(2)]);
var inst_27766 = cljs.core.async.close_BANG_.call(null,out);
var state_27768__$1 = (function (){var statearr_27776 = state_27768;
(statearr_27776[(9)] = inst_27765);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27768__$1,inst_27766);
} else {
if((state_val_27769 === (2))){
var inst_27745 = (state_27768[(8)]);
var inst_27747 = (inst_27745 < n);
var state_27768__$1 = state_27768;
if(cljs.core.truth_(inst_27747)){
var statearr_27777_27800 = state_27768__$1;
(statearr_27777_27800[(1)] = (4));

} else {
var statearr_27778_27801 = state_27768__$1;
(statearr_27778_27801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (11))){
var inst_27745 = (state_27768[(8)]);
var inst_27755 = (state_27768[(2)]);
var inst_27756 = (inst_27745 + (1));
var inst_27745__$1 = inst_27756;
var state_27768__$1 = (function (){var statearr_27779 = state_27768;
(statearr_27779[(10)] = inst_27755);

(statearr_27779[(8)] = inst_27745__$1);

return statearr_27779;
})();
var statearr_27780_27802 = state_27768__$1;
(statearr_27780_27802[(2)] = null);

(statearr_27780_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (9))){
var state_27768__$1 = state_27768;
var statearr_27781_27803 = state_27768__$1;
(statearr_27781_27803[(2)] = null);

(statearr_27781_27803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (5))){
var state_27768__$1 = state_27768;
var statearr_27782_27804 = state_27768__$1;
(statearr_27782_27804[(2)] = null);

(statearr_27782_27804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (10))){
var inst_27760 = (state_27768[(2)]);
var state_27768__$1 = state_27768;
var statearr_27783_27805 = state_27768__$1;
(statearr_27783_27805[(2)] = inst_27760);

(statearr_27783_27805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27769 === (8))){
var inst_27750 = (state_27768[(7)]);
var state_27768__$1 = state_27768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27768__$1,(11),out,inst_27750);
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
});})(c__25609__auto___27795,out))
;
return ((function (switch__25497__auto__,c__25609__auto___27795,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_27787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27787[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_27787[(1)] = (1));

return statearr_27787;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_27768){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27788){if((e27788 instanceof Object)){
var ex__25501__auto__ = e27788;
var statearr_27789_27806 = state_27768;
(statearr_27789_27806[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27807 = state_27768;
state_27768 = G__27807;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_27768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_27768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27795,out))
})();
var state__25611__auto__ = (function (){var statearr_27790 = f__25610__auto__.call(null);
(statearr_27790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27795);

return statearr_27790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27795,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27815 = (function (map_LT_,f,ch,meta27816){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27816 = meta27816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27817,meta27816__$1){
var self__ = this;
var _27817__$1 = this;
return (new cljs.core.async.t_cljs$core$async27815(self__.map_LT_,self__.f,self__.ch,meta27816__$1));
});

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27817){
var self__ = this;
var _27817__$1 = this;
return self__.meta27816;
});

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27818 = (function (map_LT_,f,ch,meta27816,_,fn1,meta27819){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27816 = meta27816;
this._ = _;
this.fn1 = fn1;
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27820,meta27819__$1){
var self__ = this;
var _27820__$1 = this;
return (new cljs.core.async.t_cljs$core$async27818(self__.map_LT_,self__.f,self__.ch,self__.meta27816,self__._,self__.fn1,meta27819__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27820){
var self__ = this;
var _27820__$1 = this;
return self__.meta27819;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27808_SHARP_){
return f1.call(null,(((p1__27808_SHARP_ == null))?null:self__.f.call(null,p1__27808_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27816","meta27816",920966652,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27815","cljs.core.async/t_cljs$core$async27815",-1040494672,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27819","meta27819",2053433592,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27818";

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27818");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27818 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27818(map_LT___$1,f__$1,ch__$1,meta27816__$1,___$2,fn1__$1,meta27819){
return (new cljs.core.async.t_cljs$core$async27818(map_LT___$1,f__$1,ch__$1,meta27816__$1,___$2,fn1__$1,meta27819));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27818(self__.map_LT_,self__.f,self__.ch,self__.meta27816,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21662__auto__ = ret;
if(cljs.core.truth_(and__21662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27816","meta27816",920966652,null)], null);
});

cljs.core.async.t_cljs$core$async27815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27815";

cljs.core.async.t_cljs$core$async27815.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27815");
});

cljs.core.async.__GT_t_cljs$core$async27815 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27815(map_LT___$1,f__$1,ch__$1,meta27816){
return (new cljs.core.async.t_cljs$core$async27815(map_LT___$1,f__$1,ch__$1,meta27816));
});

}

return (new cljs.core.async.t_cljs$core$async27815(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27824 = (function (map_GT_,f,ch,meta27825){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27825 = meta27825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27826,meta27825__$1){
var self__ = this;
var _27826__$1 = this;
return (new cljs.core.async.t_cljs$core$async27824(self__.map_GT_,self__.f,self__.ch,meta27825__$1));
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27826){
var self__ = this;
var _27826__$1 = this;
return self__.meta27825;
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27825","meta27825",1596560720,null)], null);
});

cljs.core.async.t_cljs$core$async27824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27824";

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27824");
});

cljs.core.async.__GT_t_cljs$core$async27824 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27824(map_GT___$1,f__$1,ch__$1,meta27825){
return (new cljs.core.async.t_cljs$core$async27824(map_GT___$1,f__$1,ch__$1,meta27825));
});

}

return (new cljs.core.async.t_cljs$core$async27824(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27830 = (function (filter_GT_,p,ch,meta27831){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27831 = meta27831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27832,meta27831__$1){
var self__ = this;
var _27832__$1 = this;
return (new cljs.core.async.t_cljs$core$async27830(self__.filter_GT_,self__.p,self__.ch,meta27831__$1));
});

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27832){
var self__ = this;
var _27832__$1 = this;
return self__.meta27831;
});

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27831","meta27831",160464650,null)], null);
});

cljs.core.async.t_cljs$core$async27830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27830";

cljs.core.async.t_cljs$core$async27830.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27830");
});

cljs.core.async.__GT_t_cljs$core$async27830 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27830(filter_GT___$1,p__$1,ch__$1,meta27831){
return (new cljs.core.async.t_cljs$core$async27830(filter_GT___$1,p__$1,ch__$1,meta27831));
});

}

return (new cljs.core.async.t_cljs$core$async27830(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27833 = [];
var len__22749__auto___27877 = arguments.length;
var i__22750__auto___27878 = (0);
while(true){
if((i__22750__auto___27878 < len__22749__auto___27877)){
args27833.push((arguments[i__22750__auto___27878]));

var G__27879 = (i__22750__auto___27878 + (1));
i__22750__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var G__27835 = args27833.length;
switch (G__27835) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27833.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___27881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___27881,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___27881,out){
return (function (state_27856){
var state_val_27857 = (state_27856[(1)]);
if((state_val_27857 === (7))){
var inst_27852 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27858_27882 = state_27856__$1;
(statearr_27858_27882[(2)] = inst_27852);

(statearr_27858_27882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (1))){
var state_27856__$1 = state_27856;
var statearr_27859_27883 = state_27856__$1;
(statearr_27859_27883[(2)] = null);

(statearr_27859_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (4))){
var inst_27838 = (state_27856[(7)]);
var inst_27838__$1 = (state_27856[(2)]);
var inst_27839 = (inst_27838__$1 == null);
var state_27856__$1 = (function (){var statearr_27860 = state_27856;
(statearr_27860[(7)] = inst_27838__$1);

return statearr_27860;
})();
if(cljs.core.truth_(inst_27839)){
var statearr_27861_27884 = state_27856__$1;
(statearr_27861_27884[(1)] = (5));

} else {
var statearr_27862_27885 = state_27856__$1;
(statearr_27862_27885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (6))){
var inst_27838 = (state_27856[(7)]);
var inst_27843 = p.call(null,inst_27838);
var state_27856__$1 = state_27856;
if(cljs.core.truth_(inst_27843)){
var statearr_27863_27886 = state_27856__$1;
(statearr_27863_27886[(1)] = (8));

} else {
var statearr_27864_27887 = state_27856__$1;
(statearr_27864_27887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (3))){
var inst_27854 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27856__$1,inst_27854);
} else {
if((state_val_27857 === (2))){
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27856__$1,(4),ch);
} else {
if((state_val_27857 === (11))){
var inst_27846 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27865_27888 = state_27856__$1;
(statearr_27865_27888[(2)] = inst_27846);

(statearr_27865_27888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (9))){
var state_27856__$1 = state_27856;
var statearr_27866_27889 = state_27856__$1;
(statearr_27866_27889[(2)] = null);

(statearr_27866_27889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (5))){
var inst_27841 = cljs.core.async.close_BANG_.call(null,out);
var state_27856__$1 = state_27856;
var statearr_27867_27890 = state_27856__$1;
(statearr_27867_27890[(2)] = inst_27841);

(statearr_27867_27890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (10))){
var inst_27849 = (state_27856[(2)]);
var state_27856__$1 = (function (){var statearr_27868 = state_27856;
(statearr_27868[(8)] = inst_27849);

return statearr_27868;
})();
var statearr_27869_27891 = state_27856__$1;
(statearr_27869_27891[(2)] = null);

(statearr_27869_27891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (8))){
var inst_27838 = (state_27856[(7)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27856__$1,(11),out,inst_27838);
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
});})(c__25609__auto___27881,out))
;
return ((function (switch__25497__auto__,c__25609__auto___27881,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_27873 = [null,null,null,null,null,null,null,null,null];
(statearr_27873[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_27873[(1)] = (1));

return statearr_27873;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_27856){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_27856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e27874){if((e27874 instanceof Object)){
var ex__25501__auto__ = e27874;
var statearr_27875_27892 = state_27856;
(statearr_27875_27892[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27893 = state_27856;
state_27856 = G__27893;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_27856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_27856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___27881,out))
})();
var state__25611__auto__ = (function (){var statearr_27876 = f__25610__auto__.call(null);
(statearr_27876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___27881);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___27881,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27894 = [];
var len__22749__auto___27897 = arguments.length;
var i__22750__auto___27898 = (0);
while(true){
if((i__22750__auto___27898 < len__22749__auto___27897)){
args27894.push((arguments[i__22750__auto___27898]));

var G__27899 = (i__22750__auto___27898 + (1));
i__22750__auto___27898 = G__27899;
continue;
} else {
}
break;
}

var G__27896 = args27894.length;
switch (G__27896) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27894.length)].join('')));

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
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__){
return (function (state_28066){
var state_val_28067 = (state_28066[(1)]);
if((state_val_28067 === (7))){
var inst_28062 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28068_28109 = state_28066__$1;
(statearr_28068_28109[(2)] = inst_28062);

(statearr_28068_28109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (20))){
var inst_28032 = (state_28066[(7)]);
var inst_28043 = (state_28066[(2)]);
var inst_28044 = cljs.core.next.call(null,inst_28032);
var inst_28018 = inst_28044;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28066__$1 = (function (){var statearr_28069 = state_28066;
(statearr_28069[(8)] = inst_28018);

(statearr_28069[(9)] = inst_28019);

(statearr_28069[(10)] = inst_28043);

(statearr_28069[(11)] = inst_28021);

(statearr_28069[(12)] = inst_28020);

return statearr_28069;
})();
var statearr_28070_28110 = state_28066__$1;
(statearr_28070_28110[(2)] = null);

(statearr_28070_28110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (1))){
var state_28066__$1 = state_28066;
var statearr_28071_28111 = state_28066__$1;
(statearr_28071_28111[(2)] = null);

(statearr_28071_28111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (4))){
var inst_28007 = (state_28066[(13)]);
var inst_28007__$1 = (state_28066[(2)]);
var inst_28008 = (inst_28007__$1 == null);
var state_28066__$1 = (function (){var statearr_28072 = state_28066;
(statearr_28072[(13)] = inst_28007__$1);

return statearr_28072;
})();
if(cljs.core.truth_(inst_28008)){
var statearr_28073_28112 = state_28066__$1;
(statearr_28073_28112[(1)] = (5));

} else {
var statearr_28074_28113 = state_28066__$1;
(statearr_28074_28113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (15))){
var state_28066__$1 = state_28066;
var statearr_28078_28114 = state_28066__$1;
(statearr_28078_28114[(2)] = null);

(statearr_28078_28114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (21))){
var state_28066__$1 = state_28066;
var statearr_28079_28115 = state_28066__$1;
(statearr_28079_28115[(2)] = null);

(statearr_28079_28115[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (13))){
var inst_28018 = (state_28066[(8)]);
var inst_28019 = (state_28066[(9)]);
var inst_28021 = (state_28066[(11)]);
var inst_28020 = (state_28066[(12)]);
var inst_28028 = (state_28066[(2)]);
var inst_28029 = (inst_28021 + (1));
var tmp28075 = inst_28018;
var tmp28076 = inst_28019;
var tmp28077 = inst_28020;
var inst_28018__$1 = tmp28075;
var inst_28019__$1 = tmp28076;
var inst_28020__$1 = tmp28077;
var inst_28021__$1 = inst_28029;
var state_28066__$1 = (function (){var statearr_28080 = state_28066;
(statearr_28080[(8)] = inst_28018__$1);

(statearr_28080[(9)] = inst_28019__$1);

(statearr_28080[(14)] = inst_28028);

(statearr_28080[(11)] = inst_28021__$1);

(statearr_28080[(12)] = inst_28020__$1);

return statearr_28080;
})();
var statearr_28081_28116 = state_28066__$1;
(statearr_28081_28116[(2)] = null);

(statearr_28081_28116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (22))){
var state_28066__$1 = state_28066;
var statearr_28082_28117 = state_28066__$1;
(statearr_28082_28117[(2)] = null);

(statearr_28082_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (6))){
var inst_28007 = (state_28066[(13)]);
var inst_28016 = f.call(null,inst_28007);
var inst_28017 = cljs.core.seq.call(null,inst_28016);
var inst_28018 = inst_28017;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28066__$1 = (function (){var statearr_28083 = state_28066;
(statearr_28083[(8)] = inst_28018);

(statearr_28083[(9)] = inst_28019);

(statearr_28083[(11)] = inst_28021);

(statearr_28083[(12)] = inst_28020);

return statearr_28083;
})();
var statearr_28084_28118 = state_28066__$1;
(statearr_28084_28118[(2)] = null);

(statearr_28084_28118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (17))){
var inst_28032 = (state_28066[(7)]);
var inst_28036 = cljs.core.chunk_first.call(null,inst_28032);
var inst_28037 = cljs.core.chunk_rest.call(null,inst_28032);
var inst_28038 = cljs.core.count.call(null,inst_28036);
var inst_28018 = inst_28037;
var inst_28019 = inst_28036;
var inst_28020 = inst_28038;
var inst_28021 = (0);
var state_28066__$1 = (function (){var statearr_28085 = state_28066;
(statearr_28085[(8)] = inst_28018);

(statearr_28085[(9)] = inst_28019);

(statearr_28085[(11)] = inst_28021);

(statearr_28085[(12)] = inst_28020);

return statearr_28085;
})();
var statearr_28086_28119 = state_28066__$1;
(statearr_28086_28119[(2)] = null);

(statearr_28086_28119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (3))){
var inst_28064 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28066__$1,inst_28064);
} else {
if((state_val_28067 === (12))){
var inst_28052 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28087_28120 = state_28066__$1;
(statearr_28087_28120[(2)] = inst_28052);

(statearr_28087_28120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (2))){
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28066__$1,(4),in$);
} else {
if((state_val_28067 === (23))){
var inst_28060 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28088_28121 = state_28066__$1;
(statearr_28088_28121[(2)] = inst_28060);

(statearr_28088_28121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (19))){
var inst_28047 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28089_28122 = state_28066__$1;
(statearr_28089_28122[(2)] = inst_28047);

(statearr_28089_28122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (11))){
var inst_28018 = (state_28066[(8)]);
var inst_28032 = (state_28066[(7)]);
var inst_28032__$1 = cljs.core.seq.call(null,inst_28018);
var state_28066__$1 = (function (){var statearr_28090 = state_28066;
(statearr_28090[(7)] = inst_28032__$1);

return statearr_28090;
})();
if(inst_28032__$1){
var statearr_28091_28123 = state_28066__$1;
(statearr_28091_28123[(1)] = (14));

} else {
var statearr_28092_28124 = state_28066__$1;
(statearr_28092_28124[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (9))){
var inst_28054 = (state_28066[(2)]);
var inst_28055 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28066__$1 = (function (){var statearr_28093 = state_28066;
(statearr_28093[(15)] = inst_28054);

return statearr_28093;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28094_28125 = state_28066__$1;
(statearr_28094_28125[(1)] = (21));

} else {
var statearr_28095_28126 = state_28066__$1;
(statearr_28095_28126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (5))){
var inst_28010 = cljs.core.async.close_BANG_.call(null,out);
var state_28066__$1 = state_28066;
var statearr_28096_28127 = state_28066__$1;
(statearr_28096_28127[(2)] = inst_28010);

(statearr_28096_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (14))){
var inst_28032 = (state_28066[(7)]);
var inst_28034 = cljs.core.chunked_seq_QMARK_.call(null,inst_28032);
var state_28066__$1 = state_28066;
if(inst_28034){
var statearr_28097_28128 = state_28066__$1;
(statearr_28097_28128[(1)] = (17));

} else {
var statearr_28098_28129 = state_28066__$1;
(statearr_28098_28129[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (16))){
var inst_28050 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28099_28130 = state_28066__$1;
(statearr_28099_28130[(2)] = inst_28050);

(statearr_28099_28130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (10))){
var inst_28019 = (state_28066[(9)]);
var inst_28021 = (state_28066[(11)]);
var inst_28026 = cljs.core._nth.call(null,inst_28019,inst_28021);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28066__$1,(13),out,inst_28026);
} else {
if((state_val_28067 === (18))){
var inst_28032 = (state_28066[(7)]);
var inst_28041 = cljs.core.first.call(null,inst_28032);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28066__$1,(20),out,inst_28041);
} else {
if((state_val_28067 === (8))){
var inst_28021 = (state_28066[(11)]);
var inst_28020 = (state_28066[(12)]);
var inst_28023 = (inst_28021 < inst_28020);
var inst_28024 = inst_28023;
var state_28066__$1 = state_28066;
if(cljs.core.truth_(inst_28024)){
var statearr_28100_28131 = state_28066__$1;
(statearr_28100_28131[(1)] = (10));

} else {
var statearr_28101_28132 = state_28066__$1;
(statearr_28101_28132[(1)] = (11));

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
});})(c__25609__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____0 = (function (){
var statearr_28105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28105[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__);

(statearr_28105[(1)] = (1));

return statearr_28105;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____1 = (function (state_28066){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28106){if((e28106 instanceof Object)){
var ex__25501__auto__ = e28106;
var statearr_28107_28133 = state_28066;
(statearr_28107_28133[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28134 = state_28066;
state_28066 = G__28134;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__ = function(state_28066){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____1.call(this,state_28066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25498__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__))
})();
var state__25611__auto__ = (function (){var statearr_28108 = f__25610__auto__.call(null);
(statearr_28108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_28108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__))
);

return c__25609__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28135 = [];
var len__22749__auto___28138 = arguments.length;
var i__22750__auto___28139 = (0);
while(true){
if((i__22750__auto___28139 < len__22749__auto___28138)){
args28135.push((arguments[i__22750__auto___28139]));

var G__28140 = (i__22750__auto___28139 + (1));
i__22750__auto___28139 = G__28140;
continue;
} else {
}
break;
}

var G__28137 = args28135.length;
switch (G__28137) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28135.length)].join('')));

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
var args28142 = [];
var len__22749__auto___28145 = arguments.length;
var i__22750__auto___28146 = (0);
while(true){
if((i__22750__auto___28146 < len__22749__auto___28145)){
args28142.push((arguments[i__22750__auto___28146]));

var G__28147 = (i__22750__auto___28146 + (1));
i__22750__auto___28146 = G__28147;
continue;
} else {
}
break;
}

var G__28144 = args28142.length;
switch (G__28144) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28142.length)].join('')));

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
var args28149 = [];
var len__22749__auto___28200 = arguments.length;
var i__22750__auto___28201 = (0);
while(true){
if((i__22750__auto___28201 < len__22749__auto___28200)){
args28149.push((arguments[i__22750__auto___28201]));

var G__28202 = (i__22750__auto___28201 + (1));
i__22750__auto___28201 = G__28202;
continue;
} else {
}
break;
}

var G__28151 = args28149.length;
switch (G__28151) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28149.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___28204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___28204,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___28204,out){
return (function (state_28175){
var state_val_28176 = (state_28175[(1)]);
if((state_val_28176 === (7))){
var inst_28170 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28177_28205 = state_28175__$1;
(statearr_28177_28205[(2)] = inst_28170);

(statearr_28177_28205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (1))){
var inst_28152 = null;
var state_28175__$1 = (function (){var statearr_28178 = state_28175;
(statearr_28178[(7)] = inst_28152);

return statearr_28178;
})();
var statearr_28179_28206 = state_28175__$1;
(statearr_28179_28206[(2)] = null);

(statearr_28179_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (4))){
var inst_28155 = (state_28175[(8)]);
var inst_28155__$1 = (state_28175[(2)]);
var inst_28156 = (inst_28155__$1 == null);
var inst_28157 = cljs.core.not.call(null,inst_28156);
var state_28175__$1 = (function (){var statearr_28180 = state_28175;
(statearr_28180[(8)] = inst_28155__$1);

return statearr_28180;
})();
if(inst_28157){
var statearr_28181_28207 = state_28175__$1;
(statearr_28181_28207[(1)] = (5));

} else {
var statearr_28182_28208 = state_28175__$1;
(statearr_28182_28208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (6))){
var state_28175__$1 = state_28175;
var statearr_28183_28209 = state_28175__$1;
(statearr_28183_28209[(2)] = null);

(statearr_28183_28209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (3))){
var inst_28172 = (state_28175[(2)]);
var inst_28173 = cljs.core.async.close_BANG_.call(null,out);
var state_28175__$1 = (function (){var statearr_28184 = state_28175;
(statearr_28184[(9)] = inst_28172);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28175__$1,inst_28173);
} else {
if((state_val_28176 === (2))){
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(4),ch);
} else {
if((state_val_28176 === (11))){
var inst_28155 = (state_28175[(8)]);
var inst_28164 = (state_28175[(2)]);
var inst_28152 = inst_28155;
var state_28175__$1 = (function (){var statearr_28185 = state_28175;
(statearr_28185[(7)] = inst_28152);

(statearr_28185[(10)] = inst_28164);

return statearr_28185;
})();
var statearr_28186_28210 = state_28175__$1;
(statearr_28186_28210[(2)] = null);

(statearr_28186_28210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (9))){
var inst_28155 = (state_28175[(8)]);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28175__$1,(11),out,inst_28155);
} else {
if((state_val_28176 === (5))){
var inst_28152 = (state_28175[(7)]);
var inst_28155 = (state_28175[(8)]);
var inst_28159 = cljs.core._EQ_.call(null,inst_28155,inst_28152);
var state_28175__$1 = state_28175;
if(inst_28159){
var statearr_28188_28211 = state_28175__$1;
(statearr_28188_28211[(1)] = (8));

} else {
var statearr_28189_28212 = state_28175__$1;
(statearr_28189_28212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (10))){
var inst_28167 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28190_28213 = state_28175__$1;
(statearr_28190_28213[(2)] = inst_28167);

(statearr_28190_28213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (8))){
var inst_28152 = (state_28175[(7)]);
var tmp28187 = inst_28152;
var inst_28152__$1 = tmp28187;
var state_28175__$1 = (function (){var statearr_28191 = state_28175;
(statearr_28191[(7)] = inst_28152__$1);

return statearr_28191;
})();
var statearr_28192_28214 = state_28175__$1;
(statearr_28192_28214[(2)] = null);

(statearr_28192_28214[(1)] = (2));


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
});})(c__25609__auto___28204,out))
;
return ((function (switch__25497__auto__,c__25609__auto___28204,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_28196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28196[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_28196[(1)] = (1));

return statearr_28196;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_28175){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28197){if((e28197 instanceof Object)){
var ex__25501__auto__ = e28197;
var statearr_28198_28215 = state_28175;
(statearr_28198_28215[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28175;
state_28175 = G__28216;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_28175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_28175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___28204,out))
})();
var state__25611__auto__ = (function (){var statearr_28199 = f__25610__auto__.call(null);
(statearr_28199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___28204);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___28204,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28217 = [];
var len__22749__auto___28287 = arguments.length;
var i__22750__auto___28288 = (0);
while(true){
if((i__22750__auto___28288 < len__22749__auto___28287)){
args28217.push((arguments[i__22750__auto___28288]));

var G__28289 = (i__22750__auto___28288 + (1));
i__22750__auto___28288 = G__28289;
continue;
} else {
}
break;
}

var G__28219 = args28217.length;
switch (G__28219) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28217.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___28291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___28291,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___28291,out){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28259_28292 = state_28257__$1;
(statearr_28259_28292[(2)] = inst_28253);

(statearr_28259_28292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var inst_28220 = (new Array(n));
var inst_28221 = inst_28220;
var inst_28222 = (0);
var state_28257__$1 = (function (){var statearr_28260 = state_28257;
(statearr_28260[(7)] = inst_28222);

(statearr_28260[(8)] = inst_28221);

return statearr_28260;
})();
var statearr_28261_28293 = state_28257__$1;
(statearr_28261_28293[(2)] = null);

(statearr_28261_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28225 = (state_28257[(9)]);
var inst_28225__$1 = (state_28257[(2)]);
var inst_28226 = (inst_28225__$1 == null);
var inst_28227 = cljs.core.not.call(null,inst_28226);
var state_28257__$1 = (function (){var statearr_28262 = state_28257;
(statearr_28262[(9)] = inst_28225__$1);

return statearr_28262;
})();
if(inst_28227){
var statearr_28263_28294 = state_28257__$1;
(statearr_28263_28294[(1)] = (5));

} else {
var statearr_28264_28295 = state_28257__$1;
(statearr_28264_28295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (15))){
var inst_28247 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28265_28296 = state_28257__$1;
(statearr_28265_28296[(2)] = inst_28247);

(statearr_28265_28296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var state_28257__$1 = state_28257;
var statearr_28266_28297 = state_28257__$1;
(statearr_28266_28297[(2)] = null);

(statearr_28266_28297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28222 = (state_28257[(7)]);
var inst_28243 = (inst_28222 > (0));
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28243)){
var statearr_28267_28298 = state_28257__$1;
(statearr_28267_28298[(1)] = (12));

} else {
var statearr_28268_28299 = state_28257__$1;
(statearr_28268_28299[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (12))){
var inst_28221 = (state_28257[(8)]);
var inst_28245 = cljs.core.vec.call(null,inst_28221);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28257__$1,(15),out,inst_28245);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),ch);
} else {
if((state_val_28258 === (11))){
var inst_28237 = (state_28257[(2)]);
var inst_28238 = (new Array(n));
var inst_28221 = inst_28238;
var inst_28222 = (0);
var state_28257__$1 = (function (){var statearr_28269 = state_28257;
(statearr_28269[(7)] = inst_28222);

(statearr_28269[(8)] = inst_28221);

(statearr_28269[(10)] = inst_28237);

return statearr_28269;
})();
var statearr_28270_28300 = state_28257__$1;
(statearr_28270_28300[(2)] = null);

(statearr_28270_28300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var inst_28221 = (state_28257[(8)]);
var inst_28235 = cljs.core.vec.call(null,inst_28221);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28257__$1,(11),out,inst_28235);
} else {
if((state_val_28258 === (5))){
var inst_28222 = (state_28257[(7)]);
var inst_28225 = (state_28257[(9)]);
var inst_28230 = (state_28257[(11)]);
var inst_28221 = (state_28257[(8)]);
var inst_28229 = (inst_28221[inst_28222] = inst_28225);
var inst_28230__$1 = (inst_28222 + (1));
var inst_28231 = (inst_28230__$1 < n);
var state_28257__$1 = (function (){var statearr_28271 = state_28257;
(statearr_28271[(11)] = inst_28230__$1);

(statearr_28271[(12)] = inst_28229);

return statearr_28271;
})();
if(cljs.core.truth_(inst_28231)){
var statearr_28272_28301 = state_28257__$1;
(statearr_28272_28301[(1)] = (8));

} else {
var statearr_28273_28302 = state_28257__$1;
(statearr_28273_28302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var inst_28250 = (state_28257[(2)]);
var inst_28251 = cljs.core.async.close_BANG_.call(null,out);
var state_28257__$1 = (function (){var statearr_28275 = state_28257;
(statearr_28275[(13)] = inst_28250);

return statearr_28275;
})();
var statearr_28276_28303 = state_28257__$1;
(statearr_28276_28303[(2)] = inst_28251);

(statearr_28276_28303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28241 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28277_28304 = state_28257__$1;
(statearr_28277_28304[(2)] = inst_28241);

(statearr_28277_28304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28230 = (state_28257[(11)]);
var inst_28221 = (state_28257[(8)]);
var tmp28274 = inst_28221;
var inst_28221__$1 = tmp28274;
var inst_28222 = inst_28230;
var state_28257__$1 = (function (){var statearr_28278 = state_28257;
(statearr_28278[(7)] = inst_28222);

(statearr_28278[(8)] = inst_28221__$1);

return statearr_28278;
})();
var statearr_28279_28305 = state_28257__$1;
(statearr_28279_28305[(2)] = null);

(statearr_28279_28305[(1)] = (2));


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
});})(c__25609__auto___28291,out))
;
return ((function (switch__25497__auto__,c__25609__auto___28291,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_28283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28283[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_28283[(1)] = (1));

return statearr_28283;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_28257){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28284){if((e28284 instanceof Object)){
var ex__25501__auto__ = e28284;
var statearr_28285_28306 = state_28257;
(statearr_28285_28306[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28257;
state_28257 = G__28307;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___28291,out))
})();
var state__25611__auto__ = (function (){var statearr_28286 = f__25610__auto__.call(null);
(statearr_28286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___28291);

return statearr_28286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___28291,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28308 = [];
var len__22749__auto___28382 = arguments.length;
var i__22750__auto___28383 = (0);
while(true){
if((i__22750__auto___28383 < len__22749__auto___28382)){
args28308.push((arguments[i__22750__auto___28383]));

var G__28384 = (i__22750__auto___28383 + (1));
i__22750__auto___28383 = G__28384;
continue;
} else {
}
break;
}

var G__28310 = args28308.length;
switch (G__28310) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28308.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25609__auto___28386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___28386,out){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___28386,out){
return (function (state_28352){
var state_val_28353 = (state_28352[(1)]);
if((state_val_28353 === (7))){
var inst_28348 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28354_28387 = state_28352__$1;
(statearr_28354_28387[(2)] = inst_28348);

(statearr_28354_28387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (1))){
var inst_28311 = [];
var inst_28312 = inst_28311;
var inst_28313 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28352__$1 = (function (){var statearr_28355 = state_28352;
(statearr_28355[(7)] = inst_28312);

(statearr_28355[(8)] = inst_28313);

return statearr_28355;
})();
var statearr_28356_28388 = state_28352__$1;
(statearr_28356_28388[(2)] = null);

(statearr_28356_28388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (4))){
var inst_28316 = (state_28352[(9)]);
var inst_28316__$1 = (state_28352[(2)]);
var inst_28317 = (inst_28316__$1 == null);
var inst_28318 = cljs.core.not.call(null,inst_28317);
var state_28352__$1 = (function (){var statearr_28357 = state_28352;
(statearr_28357[(9)] = inst_28316__$1);

return statearr_28357;
})();
if(inst_28318){
var statearr_28358_28389 = state_28352__$1;
(statearr_28358_28389[(1)] = (5));

} else {
var statearr_28359_28390 = state_28352__$1;
(statearr_28359_28390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (15))){
var inst_28342 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28360_28391 = state_28352__$1;
(statearr_28360_28391[(2)] = inst_28342);

(statearr_28360_28391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (13))){
var state_28352__$1 = state_28352;
var statearr_28361_28392 = state_28352__$1;
(statearr_28361_28392[(2)] = null);

(statearr_28361_28392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (6))){
var inst_28312 = (state_28352[(7)]);
var inst_28337 = inst_28312.length;
var inst_28338 = (inst_28337 > (0));
var state_28352__$1 = state_28352;
if(cljs.core.truth_(inst_28338)){
var statearr_28362_28393 = state_28352__$1;
(statearr_28362_28393[(1)] = (12));

} else {
var statearr_28363_28394 = state_28352__$1;
(statearr_28363_28394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (3))){
var inst_28350 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28352__$1,inst_28350);
} else {
if((state_val_28353 === (12))){
var inst_28312 = (state_28352[(7)]);
var inst_28340 = cljs.core.vec.call(null,inst_28312);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28352__$1,(15),out,inst_28340);
} else {
if((state_val_28353 === (2))){
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28352__$1,(4),ch);
} else {
if((state_val_28353 === (11))){
var inst_28316 = (state_28352[(9)]);
var inst_28320 = (state_28352[(10)]);
var inst_28330 = (state_28352[(2)]);
var inst_28331 = [];
var inst_28332 = inst_28331.push(inst_28316);
var inst_28312 = inst_28331;
var inst_28313 = inst_28320;
var state_28352__$1 = (function (){var statearr_28364 = state_28352;
(statearr_28364[(7)] = inst_28312);

(statearr_28364[(11)] = inst_28330);

(statearr_28364[(12)] = inst_28332);

(statearr_28364[(8)] = inst_28313);

return statearr_28364;
})();
var statearr_28365_28395 = state_28352__$1;
(statearr_28365_28395[(2)] = null);

(statearr_28365_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (9))){
var inst_28312 = (state_28352[(7)]);
var inst_28328 = cljs.core.vec.call(null,inst_28312);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28352__$1,(11),out,inst_28328);
} else {
if((state_val_28353 === (5))){
var inst_28316 = (state_28352[(9)]);
var inst_28320 = (state_28352[(10)]);
var inst_28313 = (state_28352[(8)]);
var inst_28320__$1 = f.call(null,inst_28316);
var inst_28321 = cljs.core._EQ_.call(null,inst_28320__$1,inst_28313);
var inst_28322 = cljs.core.keyword_identical_QMARK_.call(null,inst_28313,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28323 = (inst_28321) || (inst_28322);
var state_28352__$1 = (function (){var statearr_28366 = state_28352;
(statearr_28366[(10)] = inst_28320__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28323)){
var statearr_28367_28396 = state_28352__$1;
(statearr_28367_28396[(1)] = (8));

} else {
var statearr_28368_28397 = state_28352__$1;
(statearr_28368_28397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (14))){
var inst_28345 = (state_28352[(2)]);
var inst_28346 = cljs.core.async.close_BANG_.call(null,out);
var state_28352__$1 = (function (){var statearr_28370 = state_28352;
(statearr_28370[(13)] = inst_28345);

return statearr_28370;
})();
var statearr_28371_28398 = state_28352__$1;
(statearr_28371_28398[(2)] = inst_28346);

(statearr_28371_28398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (10))){
var inst_28335 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28372_28399 = state_28352__$1;
(statearr_28372_28399[(2)] = inst_28335);

(statearr_28372_28399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (8))){
var inst_28312 = (state_28352[(7)]);
var inst_28316 = (state_28352[(9)]);
var inst_28320 = (state_28352[(10)]);
var inst_28325 = inst_28312.push(inst_28316);
var tmp28369 = inst_28312;
var inst_28312__$1 = tmp28369;
var inst_28313 = inst_28320;
var state_28352__$1 = (function (){var statearr_28373 = state_28352;
(statearr_28373[(7)] = inst_28312__$1);

(statearr_28373[(14)] = inst_28325);

(statearr_28373[(8)] = inst_28313);

return statearr_28373;
})();
var statearr_28374_28400 = state_28352__$1;
(statearr_28374_28400[(2)] = null);

(statearr_28374_28400[(1)] = (2));


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
});})(c__25609__auto___28386,out))
;
return ((function (switch__25497__auto__,c__25609__auto___28386,out){
return (function() {
var cljs$core$async$state_machine__25498__auto__ = null;
var cljs$core$async$state_machine__25498__auto____0 = (function (){
var statearr_28378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28378[(0)] = cljs$core$async$state_machine__25498__auto__);

(statearr_28378[(1)] = (1));

return statearr_28378;
});
var cljs$core$async$state_machine__25498__auto____1 = (function (state_28352){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_28352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object)){
var ex__25501__auto__ = e28379;
var statearr_28380_28401 = state_28352;
(statearr_28380_28401[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28402 = state_28352;
state_28352 = G__28402;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
cljs$core$async$state_machine__25498__auto__ = function(state_28352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25498__auto____1.call(this,state_28352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25498__auto____0;
cljs$core$async$state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25498__auto____1;
return cljs$core$async$state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___28386,out))
})();
var state__25611__auto__ = (function (){var statearr_28381 = f__25610__auto__.call(null);
(statearr_28381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___28386);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___28386,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map