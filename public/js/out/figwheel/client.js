// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31644 = [];
var len__22749__auto___31647 = arguments.length;
var i__22750__auto___31648 = (0);
while(true){
if((i__22750__auto___31648 < len__22749__auto___31647)){
args31644.push((arguments[i__22750__auto___31648]));

var G__31649 = (i__22750__auto___31648 + (1));
i__22750__auto___31648 = G__31649;
continue;
} else {
}
break;
}

var G__31646 = args31644.length;
switch (G__31646) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31644.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31652 = arguments.length;
var i__22750__auto___31653 = (0);
while(true){
if((i__22750__auto___31653 < len__22749__auto___31652)){
args__22756__auto__.push((arguments[i__22750__auto___31653]));

var G__31654 = (i__22750__auto___31653 + (1));
i__22750__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31651){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31651));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31656 = arguments.length;
var i__22750__auto___31657 = (0);
while(true){
if((i__22750__auto___31657 < len__22749__auto___31656)){
args__22756__auto__.push((arguments[i__22750__auto___31657]));

var G__31658 = (i__22750__auto___31657 + (1));
i__22750__auto___31657 = G__31658;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31655){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31655));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31659 = cljs.core._EQ_;
var expr__31660 = (function (){var or__21674__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31663){if((e31663 instanceof Error)){
var e = e31663;
return false;
} else {
throw e31663;

}
}})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31659.call(null,"true",expr__31660))){
return true;
} else {
if(cljs.core.truth_(pred__31659.call(null,"false",expr__31660))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31660)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31665){if((e31665 instanceof Error)){
var e = e31665;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31665;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31666){
var map__31669 = p__31666;
var map__31669__$1 = ((((!((map__31669 == null)))?((((map__31669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31669):map__31669);
var message = cljs.core.get.call(null,map__31669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31669__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21674__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21662__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21662__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21662__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25609__auto___31831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___31831,ch){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___31831,ch){
return (function (state_31800){
var state_val_31801 = (state_31800[(1)]);
if((state_val_31801 === (7))){
var inst_31796 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31802_31832 = state_31800__$1;
(statearr_31802_31832[(2)] = inst_31796);

(statearr_31802_31832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (1))){
var state_31800__$1 = state_31800;
var statearr_31803_31833 = state_31800__$1;
(statearr_31803_31833[(2)] = null);

(statearr_31803_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (4))){
var inst_31753 = (state_31800[(7)]);
var inst_31753__$1 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31804 = state_31800;
(statearr_31804[(7)] = inst_31753__$1);

return statearr_31804;
})();
if(cljs.core.truth_(inst_31753__$1)){
var statearr_31805_31834 = state_31800__$1;
(statearr_31805_31834[(1)] = (5));

} else {
var statearr_31806_31835 = state_31800__$1;
(statearr_31806_31835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (15))){
var inst_31760 = (state_31800[(8)]);
var inst_31775 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31760);
var inst_31776 = cljs.core.first.call(null,inst_31775);
var inst_31777 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31776);
var inst_31778 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31777)].join('');
var inst_31779 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31778);
var state_31800__$1 = state_31800;
var statearr_31807_31836 = state_31800__$1;
(statearr_31807_31836[(2)] = inst_31779);

(statearr_31807_31836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (13))){
var inst_31784 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31808_31837 = state_31800__$1;
(statearr_31808_31837[(2)] = inst_31784);

(statearr_31808_31837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (6))){
var state_31800__$1 = state_31800;
var statearr_31809_31838 = state_31800__$1;
(statearr_31809_31838[(2)] = null);

(statearr_31809_31838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (17))){
var inst_31782 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31810_31839 = state_31800__$1;
(statearr_31810_31839[(2)] = inst_31782);

(statearr_31810_31839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (3))){
var inst_31798 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31800__$1,inst_31798);
} else {
if((state_val_31801 === (12))){
var inst_31759 = (state_31800[(9)]);
var inst_31773 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31759,opts);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31773)){
var statearr_31811_31840 = state_31800__$1;
(statearr_31811_31840[(1)] = (15));

} else {
var statearr_31812_31841 = state_31800__$1;
(statearr_31812_31841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (2))){
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(4),ch);
} else {
if((state_val_31801 === (11))){
var inst_31760 = (state_31800[(8)]);
var inst_31765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31766 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31760);
var inst_31767 = cljs.core.async.timeout.call(null,(1000));
var inst_31768 = [inst_31766,inst_31767];
var inst_31769 = (new cljs.core.PersistentVector(null,2,(5),inst_31765,inst_31768,null));
var state_31800__$1 = state_31800;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31800__$1,(14),inst_31769);
} else {
if((state_val_31801 === (9))){
var inst_31760 = (state_31800[(8)]);
var inst_31786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31787 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31760);
var inst_31788 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31787);
var inst_31789 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31788)].join('');
var inst_31790 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31789);
var state_31800__$1 = (function (){var statearr_31813 = state_31800;
(statearr_31813[(10)] = inst_31786);

return statearr_31813;
})();
var statearr_31814_31842 = state_31800__$1;
(statearr_31814_31842[(2)] = inst_31790);

(statearr_31814_31842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (5))){
var inst_31753 = (state_31800[(7)]);
var inst_31755 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31756 = (new cljs.core.PersistentArrayMap(null,2,inst_31755,null));
var inst_31757 = (new cljs.core.PersistentHashSet(null,inst_31756,null));
var inst_31758 = figwheel.client.focus_msgs.call(null,inst_31757,inst_31753);
var inst_31759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31758);
var inst_31760 = cljs.core.first.call(null,inst_31758);
var inst_31761 = figwheel.client.autoload_QMARK_.call(null);
var state_31800__$1 = (function (){var statearr_31815 = state_31800;
(statearr_31815[(8)] = inst_31760);

(statearr_31815[(9)] = inst_31759);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31761)){
var statearr_31816_31843 = state_31800__$1;
(statearr_31816_31843[(1)] = (8));

} else {
var statearr_31817_31844 = state_31800__$1;
(statearr_31817_31844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (14))){
var inst_31771 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31818_31845 = state_31800__$1;
(statearr_31818_31845[(2)] = inst_31771);

(statearr_31818_31845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (16))){
var state_31800__$1 = state_31800;
var statearr_31819_31846 = state_31800__$1;
(statearr_31819_31846[(2)] = null);

(statearr_31819_31846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (10))){
var inst_31792 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31820 = state_31800;
(statearr_31820[(11)] = inst_31792);

return statearr_31820;
})();
var statearr_31821_31847 = state_31800__$1;
(statearr_31821_31847[(2)] = null);

(statearr_31821_31847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (8))){
var inst_31759 = (state_31800[(9)]);
var inst_31763 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31759,opts);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31763)){
var statearr_31822_31848 = state_31800__$1;
(statearr_31822_31848[(1)] = (11));

} else {
var statearr_31823_31849 = state_31800__$1;
(statearr_31823_31849[(1)] = (12));

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
});})(c__25609__auto___31831,ch))
;
return ((function (switch__25497__auto__,c__25609__auto___31831,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____1 = (function (state_31800){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_31800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e31828){if((e31828 instanceof Object)){
var ex__25501__auto__ = e31828;
var statearr_31829_31850 = state_31800;
(statearr_31829_31850[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31851 = state_31800;
state_31800 = G__31851;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25498__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___31831,ch))
})();
var state__25611__auto__ = (function (){var statearr_31830 = f__25610__auto__.call(null);
(statearr_31830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___31831);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___31831,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31852_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31852_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31855 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31855){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31854){if((e31854 instanceof Error)){
var e = e31854;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31855], null));
} else {
var e = e31854;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31855))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31856){
var map__31865 = p__31856;
var map__31865__$1 = ((((!((map__31865 == null)))?((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var opts = map__31865__$1;
var build_id = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31865,map__31865__$1,opts,build_id){
return (function (p__31867){
var vec__31868 = p__31867;
var seq__31869 = cljs.core.seq.call(null,vec__31868);
var first__31870 = cljs.core.first.call(null,seq__31869);
var seq__31869__$1 = cljs.core.next.call(null,seq__31869);
var map__31871 = first__31870;
var map__31871__$1 = ((((!((map__31871 == null)))?((((map__31871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31871):map__31871);
var msg = map__31871__$1;
var msg_name = cljs.core.get.call(null,map__31871__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31869__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31868,seq__31869,first__31870,seq__31869__$1,map__31871,map__31871__$1,msg,msg_name,_,map__31865,map__31865__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31868,seq__31869,first__31870,seq__31869__$1,map__31871,map__31871__$1,msg,msg_name,_,map__31865,map__31865__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31865,map__31865__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31879){
var vec__31880 = p__31879;
var seq__31881 = cljs.core.seq.call(null,vec__31880);
var first__31882 = cljs.core.first.call(null,seq__31881);
var seq__31881__$1 = cljs.core.next.call(null,seq__31881);
var map__31883 = first__31882;
var map__31883__$1 = ((((!((map__31883 == null)))?((((map__31883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31883):map__31883);
var msg = map__31883__$1;
var msg_name = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31881__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31885){
var map__31897 = p__31885;
var map__31897__$1 = ((((!((map__31897 == null)))?((((map__31897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31897):map__31897);
var on_compile_warning = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31897,map__31897__$1,on_compile_warning,on_compile_fail){
return (function (p__31899){
var vec__31900 = p__31899;
var seq__31901 = cljs.core.seq.call(null,vec__31900);
var first__31902 = cljs.core.first.call(null,seq__31901);
var seq__31901__$1 = cljs.core.next.call(null,seq__31901);
var map__31903 = first__31902;
var map__31903__$1 = ((((!((map__31903 == null)))?((((map__31903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);
var msg = map__31903__$1;
var msg_name = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31901__$1;
var pred__31905 = cljs.core._EQ_;
var expr__31906 = msg_name;
if(cljs.core.truth_(pred__31905.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31906))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31905.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31906))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31897,map__31897__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__,msg_hist,msg_names,msg){
return (function (state_32114){
var state_val_32115 = (state_32114[(1)]);
if((state_val_32115 === (7))){
var inst_32042 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32042)){
var statearr_32116_32162 = state_32114__$1;
(statearr_32116_32162[(1)] = (8));

} else {
var statearr_32117_32163 = state_32114__$1;
(statearr_32117_32163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (20))){
var inst_32108 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32118_32164 = state_32114__$1;
(statearr_32118_32164[(2)] = inst_32108);

(statearr_32118_32164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (27))){
var inst_32104 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32119_32165 = state_32114__$1;
(statearr_32119_32165[(2)] = inst_32104);

(statearr_32119_32165[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (1))){
var inst_32035 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32035)){
var statearr_32120_32166 = state_32114__$1;
(statearr_32120_32166[(1)] = (2));

} else {
var statearr_32121_32167 = state_32114__$1;
(statearr_32121_32167[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (24))){
var inst_32106 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32122_32168 = state_32114__$1;
(statearr_32122_32168[(2)] = inst_32106);

(statearr_32122_32168[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (4))){
var inst_32112 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32114__$1,inst_32112);
} else {
if((state_val_32115 === (15))){
var inst_32110 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32123_32169 = state_32114__$1;
(statearr_32123_32169[(2)] = inst_32110);

(statearr_32123_32169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (21))){
var inst_32069 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32124_32170 = state_32114__$1;
(statearr_32124_32170[(2)] = inst_32069);

(statearr_32124_32170[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (31))){
var inst_32093 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32093)){
var statearr_32125_32171 = state_32114__$1;
(statearr_32125_32171[(1)] = (34));

} else {
var statearr_32126_32172 = state_32114__$1;
(statearr_32126_32172[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (32))){
var inst_32102 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32127_32173 = state_32114__$1;
(statearr_32127_32173[(2)] = inst_32102);

(statearr_32127_32173[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (33))){
var inst_32091 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32128_32174 = state_32114__$1;
(statearr_32128_32174[(2)] = inst_32091);

(statearr_32128_32174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (13))){
var inst_32056 = figwheel.client.heads_up.clear.call(null);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(16),inst_32056);
} else {
if((state_val_32115 === (22))){
var inst_32073 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32074 = figwheel.client.heads_up.append_warning_message.call(null,inst_32073);
var state_32114__$1 = state_32114;
var statearr_32129_32175 = state_32114__$1;
(statearr_32129_32175[(2)] = inst_32074);

(statearr_32129_32175[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (36))){
var inst_32100 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32130_32176 = state_32114__$1;
(statearr_32130_32176[(2)] = inst_32100);

(statearr_32130_32176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (29))){
var inst_32084 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32131_32177 = state_32114__$1;
(statearr_32131_32177[(2)] = inst_32084);

(statearr_32131_32177[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (6))){
var inst_32037 = (state_32114[(7)]);
var state_32114__$1 = state_32114;
var statearr_32132_32178 = state_32114__$1;
(statearr_32132_32178[(2)] = inst_32037);

(statearr_32132_32178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (28))){
var inst_32080 = (state_32114[(2)]);
var inst_32081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32082 = figwheel.client.heads_up.display_warning.call(null,inst_32081);
var state_32114__$1 = (function (){var statearr_32133 = state_32114;
(statearr_32133[(8)] = inst_32080);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(29),inst_32082);
} else {
if((state_val_32115 === (25))){
var inst_32078 = figwheel.client.heads_up.clear.call(null);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(28),inst_32078);
} else {
if((state_val_32115 === (34))){
var inst_32095 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(37),inst_32095);
} else {
if((state_val_32115 === (17))){
var inst_32062 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32134_32179 = state_32114__$1;
(statearr_32134_32179[(2)] = inst_32062);

(statearr_32134_32179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (3))){
var inst_32054 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32054)){
var statearr_32135_32180 = state_32114__$1;
(statearr_32135_32180[(1)] = (13));

} else {
var statearr_32136_32181 = state_32114__$1;
(statearr_32136_32181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (12))){
var inst_32050 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32137_32182 = state_32114__$1;
(statearr_32137_32182[(2)] = inst_32050);

(statearr_32137_32182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (2))){
var inst_32037 = (state_32114[(7)]);
var inst_32037__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32114__$1 = (function (){var statearr_32138 = state_32114;
(statearr_32138[(7)] = inst_32037__$1);

return statearr_32138;
})();
if(cljs.core.truth_(inst_32037__$1)){
var statearr_32139_32183 = state_32114__$1;
(statearr_32139_32183[(1)] = (5));

} else {
var statearr_32140_32184 = state_32114__$1;
(statearr_32140_32184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (23))){
var inst_32076 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32076)){
var statearr_32141_32185 = state_32114__$1;
(statearr_32141_32185[(1)] = (25));

} else {
var statearr_32142_32186 = state_32114__$1;
(statearr_32142_32186[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (35))){
var state_32114__$1 = state_32114;
var statearr_32143_32187 = state_32114__$1;
(statearr_32143_32187[(2)] = null);

(statearr_32143_32187[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (19))){
var inst_32071 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32071)){
var statearr_32144_32188 = state_32114__$1;
(statearr_32144_32188[(1)] = (22));

} else {
var statearr_32145_32189 = state_32114__$1;
(statearr_32145_32189[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (11))){
var inst_32046 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32146_32190 = state_32114__$1;
(statearr_32146_32190[(2)] = inst_32046);

(statearr_32146_32190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (9))){
var inst_32048 = figwheel.client.heads_up.clear.call(null);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(12),inst_32048);
} else {
if((state_val_32115 === (5))){
var inst_32039 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32114__$1 = state_32114;
var statearr_32147_32191 = state_32114__$1;
(statearr_32147_32191[(2)] = inst_32039);

(statearr_32147_32191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (14))){
var inst_32064 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32064)){
var statearr_32148_32192 = state_32114__$1;
(statearr_32148_32192[(1)] = (18));

} else {
var statearr_32149_32193 = state_32114__$1;
(statearr_32149_32193[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (26))){
var inst_32086 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32086)){
var statearr_32150_32194 = state_32114__$1;
(statearr_32150_32194[(1)] = (30));

} else {
var statearr_32151_32195 = state_32114__$1;
(statearr_32151_32195[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (16))){
var inst_32058 = (state_32114[(2)]);
var inst_32059 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32060 = figwheel.client.heads_up.display_exception.call(null,inst_32059);
var state_32114__$1 = (function (){var statearr_32152 = state_32114;
(statearr_32152[(9)] = inst_32058);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(17),inst_32060);
} else {
if((state_val_32115 === (30))){
var inst_32088 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32089 = figwheel.client.heads_up.display_warning.call(null,inst_32088);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(33),inst_32089);
} else {
if((state_val_32115 === (10))){
var inst_32052 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32153_32196 = state_32114__$1;
(statearr_32153_32196[(2)] = inst_32052);

(statearr_32153_32196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (18))){
var inst_32066 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32067 = figwheel.client.heads_up.display_exception.call(null,inst_32066);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(21),inst_32067);
} else {
if((state_val_32115 === (37))){
var inst_32097 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32154_32197 = state_32114__$1;
(statearr_32154_32197[(2)] = inst_32097);

(statearr_32154_32197[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (8))){
var inst_32044 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(11),inst_32044);
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
});})(c__25609__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25497__auto__,c__25609__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____0 = (function (){
var statearr_32158 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32158[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__);

(statearr_32158[(1)] = (1));

return statearr_32158;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____1 = (function (state_32114){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_32114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e32159){if((e32159 instanceof Object)){
var ex__25501__auto__ = e32159;
var statearr_32160_32198 = state_32114;
(statearr_32160_32198[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32199 = state_32114;
state_32114 = G__32199;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__ = function(state_32114){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____1.call(this,state_32114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__,msg_hist,msg_names,msg))
})();
var state__25611__auto__ = (function (){var statearr_32161 = f__25610__auto__.call(null);
(statearr_32161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_32161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__,msg_hist,msg_names,msg))
);

return c__25609__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25609__auto___32262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto___32262,ch){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto___32262,ch){
return (function (state_32245){
var state_val_32246 = (state_32245[(1)]);
if((state_val_32246 === (1))){
var state_32245__$1 = state_32245;
var statearr_32247_32263 = state_32245__$1;
(statearr_32247_32263[(2)] = null);

(statearr_32247_32263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (2))){
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32245__$1,(4),ch);
} else {
if((state_val_32246 === (3))){
var inst_32243 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32245__$1,inst_32243);
} else {
if((state_val_32246 === (4))){
var inst_32233 = (state_32245[(7)]);
var inst_32233__$1 = (state_32245[(2)]);
var state_32245__$1 = (function (){var statearr_32248 = state_32245;
(statearr_32248[(7)] = inst_32233__$1);

return statearr_32248;
})();
if(cljs.core.truth_(inst_32233__$1)){
var statearr_32249_32264 = state_32245__$1;
(statearr_32249_32264[(1)] = (5));

} else {
var statearr_32250_32265 = state_32245__$1;
(statearr_32250_32265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (5))){
var inst_32233 = (state_32245[(7)]);
var inst_32235 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32233);
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32245__$1,(8),inst_32235);
} else {
if((state_val_32246 === (6))){
var state_32245__$1 = state_32245;
var statearr_32251_32266 = state_32245__$1;
(statearr_32251_32266[(2)] = null);

(statearr_32251_32266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (7))){
var inst_32241 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
var statearr_32252_32267 = state_32245__$1;
(statearr_32252_32267[(2)] = inst_32241);

(statearr_32252_32267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (8))){
var inst_32237 = (state_32245[(2)]);
var state_32245__$1 = (function (){var statearr_32253 = state_32245;
(statearr_32253[(8)] = inst_32237);

return statearr_32253;
})();
var statearr_32254_32268 = state_32245__$1;
(statearr_32254_32268[(2)] = null);

(statearr_32254_32268[(1)] = (2));


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
});})(c__25609__auto___32262,ch))
;
return ((function (switch__25497__auto__,c__25609__auto___32262,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25498__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25498__auto____0 = (function (){
var statearr_32258 = [null,null,null,null,null,null,null,null,null];
(statearr_32258[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25498__auto__);

(statearr_32258[(1)] = (1));

return statearr_32258;
});
var figwheel$client$heads_up_plugin_$_state_machine__25498__auto____1 = (function (state_32245){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_32245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e32259){if((e32259 instanceof Object)){
var ex__25501__auto__ = e32259;
var statearr_32260_32269 = state_32245;
(statearr_32260_32269[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32270 = state_32245;
state_32245 = G__32270;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25498__auto__ = function(state_32245){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25498__auto____1.call(this,state_32245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25498__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25498__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto___32262,ch))
})();
var state__25611__auto__ = (function (){var statearr_32261 = f__25610__auto__.call(null);
(statearr_32261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto___32262);

return statearr_32261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto___32262,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__){
return (function (state_32291){
var state_val_32292 = (state_32291[(1)]);
if((state_val_32292 === (1))){
var inst_32286 = cljs.core.async.timeout.call(null,(3000));
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32291__$1,(2),inst_32286);
} else {
if((state_val_32292 === (2))){
var inst_32288 = (state_32291[(2)]);
var inst_32289 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32291__$1 = (function (){var statearr_32293 = state_32291;
(statearr_32293[(7)] = inst_32288);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32291__$1,inst_32289);
} else {
return null;
}
}
});})(c__25609__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____0 = (function (){
var statearr_32297 = [null,null,null,null,null,null,null,null];
(statearr_32297[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__);

(statearr_32297[(1)] = (1));

return statearr_32297;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____1 = (function (state_32291){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_32291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e32298){if((e32298 instanceof Object)){
var ex__25501__auto__ = e32298;
var statearr_32299_32301 = state_32291;
(statearr_32299_32301[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32302 = state_32291;
state_32291 = G__32302;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__ = function(state_32291){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____1.call(this,state_32291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25498__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__))
})();
var state__25611__auto__ = (function (){var statearr_32300 = f__25610__auto__.call(null);
(statearr_32300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_32300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__))
);

return c__25609__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25609__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__25610__auto__ = (function (){var switch__25497__auto__ = ((function (c__25609__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32325){
var state_val_32326 = (state_32325[(1)]);
if((state_val_32326 === (1))){
var inst_32319 = cljs.core.async.timeout.call(null,(2000));
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32325__$1,(2),inst_32319);
} else {
if((state_val_32326 === (2))){
var inst_32321 = (state_32325[(2)]);
var inst_32322 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_32323 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32322);
var state_32325__$1 = (function (){var statearr_32327 = state_32325;
(statearr_32327[(7)] = inst_32321);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32325__$1,inst_32323);
} else {
return null;
}
}
});})(c__25609__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__25497__auto__,c__25609__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____0 = (function (){
var statearr_32331 = [null,null,null,null,null,null,null,null];
(statearr_32331[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__);

(statearr_32331[(1)] = (1));

return statearr_32331;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____1 = (function (state_32325){
while(true){
var ret_value__25499__auto__ = (function (){try{while(true){
var result__25500__auto__ = switch__25497__auto__.call(null,state_32325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25500__auto__;
}
break;
}
}catch (e32332){if((e32332 instanceof Object)){
var ex__25501__auto__ = e32332;
var statearr_32333_32335 = state_32325;
(statearr_32333_32335[(5)] = ex__25501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32336 = state_32325;
state_32325 = G__32336;
continue;
} else {
return ret_value__25499__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__ = function(state_32325){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____1.call(this,state_32325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25498__auto__;
})()
;})(switch__25497__auto__,c__25609__auto__,figwheel_version,temp__4657__auto__))
})();
var state__25611__auto__ = (function (){var statearr_32334 = f__25610__auto__.call(null);
(statearr_32334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25609__auto__);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25611__auto__);
});})(c__25609__auto__,figwheel_version,temp__4657__auto__))
);

return c__25609__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32337){
var map__32341 = p__32337;
var map__32341__$1 = ((((!((map__32341 == null)))?((((map__32341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32341):map__32341);
var file = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32343 = "";
var G__32343__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32343),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32343);
var G__32343__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32343__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32343__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = line;
if(cljs.core.truth_(and__21662__auto__)){
return column;
} else {
return and__21662__auto__;
}
})())){
return [cljs.core.str(G__32343__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32343__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32344){
var map__32351 = p__32344;
var map__32351__$1 = ((((!((map__32351 == null)))?((((map__32351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);
var ed = map__32351__$1;
var formatted_exception = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32353_32357 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32354_32358 = null;
var count__32355_32359 = (0);
var i__32356_32360 = (0);
while(true){
if((i__32356_32360 < count__32355_32359)){
var msg_32361 = cljs.core._nth.call(null,chunk__32354_32358,i__32356_32360);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32361);

var G__32362 = seq__32353_32357;
var G__32363 = chunk__32354_32358;
var G__32364 = count__32355_32359;
var G__32365 = (i__32356_32360 + (1));
seq__32353_32357 = G__32362;
chunk__32354_32358 = G__32363;
count__32355_32359 = G__32364;
i__32356_32360 = G__32365;
continue;
} else {
var temp__4657__auto___32366 = cljs.core.seq.call(null,seq__32353_32357);
if(temp__4657__auto___32366){
var seq__32353_32367__$1 = temp__4657__auto___32366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32353_32367__$1)){
var c__22485__auto___32368 = cljs.core.chunk_first.call(null,seq__32353_32367__$1);
var G__32369 = cljs.core.chunk_rest.call(null,seq__32353_32367__$1);
var G__32370 = c__22485__auto___32368;
var G__32371 = cljs.core.count.call(null,c__22485__auto___32368);
var G__32372 = (0);
seq__32353_32357 = G__32369;
chunk__32354_32358 = G__32370;
count__32355_32359 = G__32371;
i__32356_32360 = G__32372;
continue;
} else {
var msg_32373 = cljs.core.first.call(null,seq__32353_32367__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32373);

var G__32374 = cljs.core.next.call(null,seq__32353_32367__$1);
var G__32375 = null;
var G__32376 = (0);
var G__32377 = (0);
seq__32353_32357 = G__32374;
chunk__32354_32358 = G__32375;
count__32355_32359 = G__32376;
i__32356_32360 = G__32377;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32378){
var map__32381 = p__32378;
var map__32381__$1 = ((((!((map__32381 == null)))?((((map__32381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32381):map__32381);
var w = map__32381__$1;
var message = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21662__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32393 = cljs.core.seq.call(null,plugins);
var chunk__32394 = null;
var count__32395 = (0);
var i__32396 = (0);
while(true){
if((i__32396 < count__32395)){
var vec__32397 = cljs.core._nth.call(null,chunk__32394,i__32396);
var k = cljs.core.nth.call(null,vec__32397,(0),null);
var plugin = cljs.core.nth.call(null,vec__32397,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32403 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32393,chunk__32394,count__32395,i__32396,pl_32403,vec__32397,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32403.call(null,msg_hist);
});})(seq__32393,chunk__32394,count__32395,i__32396,pl_32403,vec__32397,k,plugin))
);
} else {
}

var G__32404 = seq__32393;
var G__32405 = chunk__32394;
var G__32406 = count__32395;
var G__32407 = (i__32396 + (1));
seq__32393 = G__32404;
chunk__32394 = G__32405;
count__32395 = G__32406;
i__32396 = G__32407;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32393);
if(temp__4657__auto__){
var seq__32393__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32393__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__32393__$1);
var G__32408 = cljs.core.chunk_rest.call(null,seq__32393__$1);
var G__32409 = c__22485__auto__;
var G__32410 = cljs.core.count.call(null,c__22485__auto__);
var G__32411 = (0);
seq__32393 = G__32408;
chunk__32394 = G__32409;
count__32395 = G__32410;
i__32396 = G__32411;
continue;
} else {
var vec__32400 = cljs.core.first.call(null,seq__32393__$1);
var k = cljs.core.nth.call(null,vec__32400,(0),null);
var plugin = cljs.core.nth.call(null,vec__32400,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32412 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32393,chunk__32394,count__32395,i__32396,pl_32412,vec__32400,k,plugin,seq__32393__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32412.call(null,msg_hist);
});})(seq__32393,chunk__32394,count__32395,i__32396,pl_32412,vec__32400,k,plugin,seq__32393__$1,temp__4657__auto__))
);
} else {
}

var G__32413 = cljs.core.next.call(null,seq__32393__$1);
var G__32414 = null;
var G__32415 = (0);
var G__32416 = (0);
seq__32393 = G__32413;
chunk__32394 = G__32414;
count__32395 = G__32415;
i__32396 = G__32416;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32417 = [];
var len__22749__auto___32424 = arguments.length;
var i__22750__auto___32425 = (0);
while(true){
if((i__22750__auto___32425 < len__22749__auto___32424)){
args32417.push((arguments[i__22750__auto___32425]));

var G__32426 = (i__22750__auto___32425 + (1));
i__22750__auto___32425 = G__32426;
continue;
} else {
}
break;
}

var G__32419 = args32417.length;
switch (G__32419) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32417.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32420_32428 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32421_32429 = null;
var count__32422_32430 = (0);
var i__32423_32431 = (0);
while(true){
if((i__32423_32431 < count__32422_32430)){
var msg_32432 = cljs.core._nth.call(null,chunk__32421_32429,i__32423_32431);
figwheel.client.socket.handle_incoming_message.call(null,msg_32432);

var G__32433 = seq__32420_32428;
var G__32434 = chunk__32421_32429;
var G__32435 = count__32422_32430;
var G__32436 = (i__32423_32431 + (1));
seq__32420_32428 = G__32433;
chunk__32421_32429 = G__32434;
count__32422_32430 = G__32435;
i__32423_32431 = G__32436;
continue;
} else {
var temp__4657__auto___32437 = cljs.core.seq.call(null,seq__32420_32428);
if(temp__4657__auto___32437){
var seq__32420_32438__$1 = temp__4657__auto___32437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32420_32438__$1)){
var c__22485__auto___32439 = cljs.core.chunk_first.call(null,seq__32420_32438__$1);
var G__32440 = cljs.core.chunk_rest.call(null,seq__32420_32438__$1);
var G__32441 = c__22485__auto___32439;
var G__32442 = cljs.core.count.call(null,c__22485__auto___32439);
var G__32443 = (0);
seq__32420_32428 = G__32440;
chunk__32421_32429 = G__32441;
count__32422_32430 = G__32442;
i__32423_32431 = G__32443;
continue;
} else {
var msg_32444 = cljs.core.first.call(null,seq__32420_32438__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32444);

var G__32445 = cljs.core.next.call(null,seq__32420_32438__$1);
var G__32446 = null;
var G__32447 = (0);
var G__32448 = (0);
seq__32420_32428 = G__32445;
chunk__32421_32429 = G__32446;
count__32422_32430 = G__32447;
i__32423_32431 = G__32448;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22756__auto__ = [];
var len__22749__auto___32453 = arguments.length;
var i__22750__auto___32454 = (0);
while(true){
if((i__22750__auto___32454 < len__22749__auto___32453)){
args__22756__auto__.push((arguments[i__22750__auto___32454]));

var G__32455 = (i__22750__auto___32454 + (1));
i__22750__auto___32454 = G__32455;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32450){
var map__32451 = p__32450;
var map__32451__$1 = ((((!((map__32451 == null)))?((((map__32451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32451):map__32451);
var opts = map__32451__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32449){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32449));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32457){if((e32457 instanceof Error)){
var e = e32457;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32457;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32461){
var map__32462 = p__32461;
var map__32462__$1 = ((((!((map__32462 == null)))?((((map__32462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32462):map__32462);
var msg_name = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map