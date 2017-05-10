// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.4-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32722 = [];
var len__23458__auto___32725 = arguments.length;
var i__23459__auto___32726 = (0);
while(true){
if((i__23459__auto___32726 < len__23458__auto___32725)){
args32722.push((arguments[i__23459__auto___32726]));

var G__32727 = (i__23459__auto___32726 + (1));
i__23459__auto___32726 = G__32727;
continue;
} else {
}
break;
}

var G__32724 = args32722.length;
switch (G__32724) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32722.length)].join('')));

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
var args__23465__auto__ = [];
var len__23458__auto___32730 = arguments.length;
var i__23459__auto___32731 = (0);
while(true){
if((i__23459__auto___32731 < len__23458__auto___32730)){
args__23465__auto__.push((arguments[i__23459__auto___32731]));

var G__32732 = (i__23459__auto___32731 + (1));
i__23459__auto___32731 = G__32732;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32729){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32729));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23465__auto__ = [];
var len__23458__auto___32734 = arguments.length;
var i__23459__auto___32735 = (0);
while(true){
if((i__23459__auto___32735 < len__23458__auto___32734)){
args__23465__auto__.push((arguments[i__23459__auto___32735]));

var G__32736 = (i__23459__auto___32735 + (1));
i__23459__auto___32735 = G__32736;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32733){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32733));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32737 = cljs.core._EQ_;
var expr__32738 = (function (){var or__22345__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32741){if((e32741 instanceof Error)){
var e = e32741;
return false;
} else {
throw e32741;

}
}})();
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32737.call(null,"true",expr__32738))){
return true;
} else {
if(cljs.core.truth_(pred__32737.call(null,"false",expr__32738))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32738)].join('')));
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

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32743){if((e32743 instanceof Error)){
var e = e32743;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e32743;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32744){
var map__32747 = p__32744;
var map__32747__$1 = ((((!((map__32747 == null)))?((((map__32747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32747):map__32747);
var message = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22345__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22333__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22333__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22333__auto__;
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
var c__25267__auto___32909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___32909,ch){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___32909,ch){
return (function (state_32878){
var state_val_32879 = (state_32878[(1)]);
if((state_val_32879 === (7))){
var inst_32874 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32880_32910 = state_32878__$1;
(statearr_32880_32910[(2)] = inst_32874);

(statearr_32880_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (1))){
var state_32878__$1 = state_32878;
var statearr_32881_32911 = state_32878__$1;
(statearr_32881_32911[(2)] = null);

(statearr_32881_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (4))){
var inst_32831 = (state_32878[(7)]);
var inst_32831__$1 = (state_32878[(2)]);
var state_32878__$1 = (function (){var statearr_32882 = state_32878;
(statearr_32882[(7)] = inst_32831__$1);

return statearr_32882;
})();
if(cljs.core.truth_(inst_32831__$1)){
var statearr_32883_32912 = state_32878__$1;
(statearr_32883_32912[(1)] = (5));

} else {
var statearr_32884_32913 = state_32878__$1;
(statearr_32884_32913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (15))){
var inst_32838 = (state_32878[(8)]);
var inst_32853 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32838);
var inst_32854 = cljs.core.first.call(null,inst_32853);
var inst_32855 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32854);
var inst_32856 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32855)].join('');
var inst_32857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32856);
var state_32878__$1 = state_32878;
var statearr_32885_32914 = state_32878__$1;
(statearr_32885_32914[(2)] = inst_32857);

(statearr_32885_32914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (13))){
var inst_32862 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32886_32915 = state_32878__$1;
(statearr_32886_32915[(2)] = inst_32862);

(statearr_32886_32915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (6))){
var state_32878__$1 = state_32878;
var statearr_32887_32916 = state_32878__$1;
(statearr_32887_32916[(2)] = null);

(statearr_32887_32916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (17))){
var inst_32860 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32888_32917 = state_32878__$1;
(statearr_32888_32917[(2)] = inst_32860);

(statearr_32888_32917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (3))){
var inst_32876 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32878__$1,inst_32876);
} else {
if((state_val_32879 === (12))){
var inst_32837 = (state_32878[(9)]);
var inst_32851 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32837,opts);
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32851)){
var statearr_32889_32918 = state_32878__$1;
(statearr_32889_32918[(1)] = (15));

} else {
var statearr_32890_32919 = state_32878__$1;
(statearr_32890_32919[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (2))){
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32878__$1,(4),ch);
} else {
if((state_val_32879 === (11))){
var inst_32838 = (state_32878[(8)]);
var inst_32843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32844 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32838);
var inst_32845 = cljs.core.async.timeout.call(null,(1000));
var inst_32846 = [inst_32844,inst_32845];
var inst_32847 = (new cljs.core.PersistentVector(null,2,(5),inst_32843,inst_32846,null));
var state_32878__$1 = state_32878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32878__$1,(14),inst_32847);
} else {
if((state_val_32879 === (9))){
var inst_32838 = (state_32878[(8)]);
var inst_32864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32865 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32838);
var inst_32866 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32865);
var inst_32867 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32866)].join('');
var inst_32868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32867);
var state_32878__$1 = (function (){var statearr_32891 = state_32878;
(statearr_32891[(10)] = inst_32864);

return statearr_32891;
})();
var statearr_32892_32920 = state_32878__$1;
(statearr_32892_32920[(2)] = inst_32868);

(statearr_32892_32920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (5))){
var inst_32831 = (state_32878[(7)]);
var inst_32833 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32834 = (new cljs.core.PersistentArrayMap(null,2,inst_32833,null));
var inst_32835 = (new cljs.core.PersistentHashSet(null,inst_32834,null));
var inst_32836 = figwheel.client.focus_msgs.call(null,inst_32835,inst_32831);
var inst_32837 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32836);
var inst_32838 = cljs.core.first.call(null,inst_32836);
var inst_32839 = figwheel.client.autoload_QMARK_.call(null);
var state_32878__$1 = (function (){var statearr_32893 = state_32878;
(statearr_32893[(8)] = inst_32838);

(statearr_32893[(9)] = inst_32837);

return statearr_32893;
})();
if(cljs.core.truth_(inst_32839)){
var statearr_32894_32921 = state_32878__$1;
(statearr_32894_32921[(1)] = (8));

} else {
var statearr_32895_32922 = state_32878__$1;
(statearr_32895_32922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (14))){
var inst_32849 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32896_32923 = state_32878__$1;
(statearr_32896_32923[(2)] = inst_32849);

(statearr_32896_32923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (16))){
var state_32878__$1 = state_32878;
var statearr_32897_32924 = state_32878__$1;
(statearr_32897_32924[(2)] = null);

(statearr_32897_32924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (10))){
var inst_32870 = (state_32878[(2)]);
var state_32878__$1 = (function (){var statearr_32898 = state_32878;
(statearr_32898[(11)] = inst_32870);

return statearr_32898;
})();
var statearr_32899_32925 = state_32878__$1;
(statearr_32899_32925[(2)] = null);

(statearr_32899_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (8))){
var inst_32837 = (state_32878[(9)]);
var inst_32841 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32837,opts);
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32841)){
var statearr_32900_32926 = state_32878__$1;
(statearr_32900_32926[(1)] = (11));

} else {
var statearr_32901_32927 = state_32878__$1;
(statearr_32901_32927[(1)] = (12));

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
});})(c__25267__auto___32909,ch))
;
return ((function (switch__25155__auto__,c__25267__auto___32909,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____0 = (function (){
var statearr_32905 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32905[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__);

(statearr_32905[(1)] = (1));

return statearr_32905;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____1 = (function (state_32878){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_32878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object)){
var ex__25159__auto__ = e32906;
var statearr_32907_32928 = state_32878;
(statearr_32907_32928[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32929 = state_32878;
state_32878 = G__32929;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__ = function(state_32878){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____1.call(this,state_32878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25156__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___32909,ch))
})();
var state__25269__auto__ = (function (){var statearr_32908 = f__25268__auto__.call(null);
(statearr_32908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___32909);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___32909,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32930_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32930_SHARP_));
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
var base_path_32933 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32933){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32932){if((e32932 instanceof Error)){
var e = e32932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32933], null));
} else {
var e = e32932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32933))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32934){
var map__32943 = p__32934;
var map__32943__$1 = ((((!((map__32943 == null)))?((((map__32943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32943):map__32943);
var opts = map__32943__$1;
var build_id = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32943,map__32943__$1,opts,build_id){
return (function (p__32945){
var vec__32946 = p__32945;
var seq__32947 = cljs.core.seq.call(null,vec__32946);
var first__32948 = cljs.core.first.call(null,seq__32947);
var seq__32947__$1 = cljs.core.next.call(null,seq__32947);
var map__32949 = first__32948;
var map__32949__$1 = ((((!((map__32949 == null)))?((((map__32949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);
var msg = map__32949__$1;
var msg_name = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32947__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32946,seq__32947,first__32948,seq__32947__$1,map__32949,map__32949__$1,msg,msg_name,_,map__32943,map__32943__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32946,seq__32947,first__32948,seq__32947__$1,map__32949,map__32949__$1,msg,msg_name,_,map__32943,map__32943__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32943,map__32943__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32957){
var vec__32958 = p__32957;
var seq__32959 = cljs.core.seq.call(null,vec__32958);
var first__32960 = cljs.core.first.call(null,seq__32959);
var seq__32959__$1 = cljs.core.next.call(null,seq__32959);
var map__32961 = first__32960;
var map__32961__$1 = ((((!((map__32961 == null)))?((((map__32961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);
var msg = map__32961__$1;
var msg_name = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32959__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32963){
var map__32975 = p__32963;
var map__32975__$1 = ((((!((map__32975 == null)))?((((map__32975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32975):map__32975);
var on_compile_warning = cljs.core.get.call(null,map__32975__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32975__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32975,map__32975__$1,on_compile_warning,on_compile_fail){
return (function (p__32977){
var vec__32978 = p__32977;
var seq__32979 = cljs.core.seq.call(null,vec__32978);
var first__32980 = cljs.core.first.call(null,seq__32979);
var seq__32979__$1 = cljs.core.next.call(null,seq__32979);
var map__32981 = first__32980;
var map__32981__$1 = ((((!((map__32981 == null)))?((((map__32981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32981):map__32981);
var msg = map__32981__$1;
var msg_name = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32979__$1;
var pred__32983 = cljs.core._EQ_;
var expr__32984 = msg_name;
if(cljs.core.truth_(pred__32983.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32984))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32983.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32984))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32975,map__32975__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__,msg_hist,msg_names,msg){
return (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33120 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33120)){
var statearr_33194_33240 = state_33192__$1;
(statearr_33194_33240[(1)] = (8));

} else {
var statearr_33195_33241 = state_33192__$1;
(statearr_33195_33241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (20))){
var inst_33186 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33196_33242 = state_33192__$1;
(statearr_33196_33242[(2)] = inst_33186);

(statearr_33196_33242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (27))){
var inst_33182 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33197_33243 = state_33192__$1;
(statearr_33197_33243[(2)] = inst_33182);

(statearr_33197_33243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var inst_33113 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33113)){
var statearr_33198_33244 = state_33192__$1;
(statearr_33198_33244[(1)] = (2));

} else {
var statearr_33199_33245 = state_33192__$1;
(statearr_33199_33245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (24))){
var inst_33184 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33200_33246 = state_33192__$1;
(statearr_33200_33246[(2)] = inst_33184);

(statearr_33200_33246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33192__$1,inst_33190);
} else {
if((state_val_33193 === (15))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33201_33247 = state_33192__$1;
(statearr_33201_33247[(2)] = inst_33188);

(statearr_33201_33247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (21))){
var inst_33147 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33202_33248 = state_33192__$1;
(statearr_33202_33248[(2)] = inst_33147);

(statearr_33202_33248[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (31))){
var inst_33171 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33171)){
var statearr_33203_33249 = state_33192__$1;
(statearr_33203_33249[(1)] = (34));

} else {
var statearr_33204_33250 = state_33192__$1;
(statearr_33204_33250[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (32))){
var inst_33180 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33205_33251 = state_33192__$1;
(statearr_33205_33251[(2)] = inst_33180);

(statearr_33205_33251[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (33))){
var inst_33169 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33206_33252 = state_33192__$1;
(statearr_33206_33252[(2)] = inst_33169);

(statearr_33206_33252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (13))){
var inst_33134 = figwheel.client.heads_up.clear.call(null);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(16),inst_33134);
} else {
if((state_val_33193 === (22))){
var inst_33151 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33152 = figwheel.client.heads_up.append_warning_message.call(null,inst_33151);
var state_33192__$1 = state_33192;
var statearr_33207_33253 = state_33192__$1;
(statearr_33207_33253[(2)] = inst_33152);

(statearr_33207_33253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (36))){
var inst_33178 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33208_33254 = state_33192__$1;
(statearr_33208_33254[(2)] = inst_33178);

(statearr_33208_33254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (29))){
var inst_33162 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33209_33255 = state_33192__$1;
(statearr_33209_33255[(2)] = inst_33162);

(statearr_33209_33255[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (6))){
var inst_33115 = (state_33192[(7)]);
var state_33192__$1 = state_33192;
var statearr_33210_33256 = state_33192__$1;
(statearr_33210_33256[(2)] = inst_33115);

(statearr_33210_33256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (28))){
var inst_33158 = (state_33192[(2)]);
var inst_33159 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33160 = figwheel.client.heads_up.display_warning.call(null,inst_33159);
var state_33192__$1 = (function (){var statearr_33211 = state_33192;
(statearr_33211[(8)] = inst_33158);

return statearr_33211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(29),inst_33160);
} else {
if((state_val_33193 === (25))){
var inst_33156 = figwheel.client.heads_up.clear.call(null);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(28),inst_33156);
} else {
if((state_val_33193 === (34))){
var inst_33173 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(37),inst_33173);
} else {
if((state_val_33193 === (17))){
var inst_33140 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33212_33257 = state_33192__$1;
(statearr_33212_33257[(2)] = inst_33140);

(statearr_33212_33257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (3))){
var inst_33132 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33132)){
var statearr_33213_33258 = state_33192__$1;
(statearr_33213_33258[(1)] = (13));

} else {
var statearr_33214_33259 = state_33192__$1;
(statearr_33214_33259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (12))){
var inst_33128 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33215_33260 = state_33192__$1;
(statearr_33215_33260[(2)] = inst_33128);

(statearr_33215_33260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (2))){
var inst_33115 = (state_33192[(7)]);
var inst_33115__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33192__$1 = (function (){var statearr_33216 = state_33192;
(statearr_33216[(7)] = inst_33115__$1);

return statearr_33216;
})();
if(cljs.core.truth_(inst_33115__$1)){
var statearr_33217_33261 = state_33192__$1;
(statearr_33217_33261[(1)] = (5));

} else {
var statearr_33218_33262 = state_33192__$1;
(statearr_33218_33262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (23))){
var inst_33154 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33154)){
var statearr_33219_33263 = state_33192__$1;
(statearr_33219_33263[(1)] = (25));

} else {
var statearr_33220_33264 = state_33192__$1;
(statearr_33220_33264[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (35))){
var state_33192__$1 = state_33192;
var statearr_33221_33265 = state_33192__$1;
(statearr_33221_33265[(2)] = null);

(statearr_33221_33265[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (19))){
var inst_33149 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33149)){
var statearr_33222_33266 = state_33192__$1;
(statearr_33222_33266[(1)] = (22));

} else {
var statearr_33223_33267 = state_33192__$1;
(statearr_33223_33267[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (11))){
var inst_33124 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33224_33268 = state_33192__$1;
(statearr_33224_33268[(2)] = inst_33124);

(statearr_33224_33268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var inst_33126 = figwheel.client.heads_up.clear.call(null);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(12),inst_33126);
} else {
if((state_val_33193 === (5))){
var inst_33117 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33192__$1 = state_33192;
var statearr_33225_33269 = state_33192__$1;
(statearr_33225_33269[(2)] = inst_33117);

(statearr_33225_33269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (14))){
var inst_33142 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33142)){
var statearr_33226_33270 = state_33192__$1;
(statearr_33226_33270[(1)] = (18));

} else {
var statearr_33227_33271 = state_33192__$1;
(statearr_33227_33271[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (26))){
var inst_33164 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33164)){
var statearr_33228_33272 = state_33192__$1;
(statearr_33228_33272[(1)] = (30));

} else {
var statearr_33229_33273 = state_33192__$1;
(statearr_33229_33273[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (16))){
var inst_33136 = (state_33192[(2)]);
var inst_33137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33138 = figwheel.client.heads_up.display_exception.call(null,inst_33137);
var state_33192__$1 = (function (){var statearr_33230 = state_33192;
(statearr_33230[(9)] = inst_33136);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(17),inst_33138);
} else {
if((state_val_33193 === (30))){
var inst_33166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33167 = figwheel.client.heads_up.display_warning.call(null,inst_33166);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(33),inst_33167);
} else {
if((state_val_33193 === (10))){
var inst_33130 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33231_33274 = state_33192__$1;
(statearr_33231_33274[(2)] = inst_33130);

(statearr_33231_33274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (18))){
var inst_33144 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33145 = figwheel.client.heads_up.display_exception.call(null,inst_33144);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(21),inst_33145);
} else {
if((state_val_33193 === (37))){
var inst_33175 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33232_33275 = state_33192__$1;
(statearr_33232_33275[(2)] = inst_33175);

(statearr_33232_33275[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33122 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33192__$1,(11),inst_33122);
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
});})(c__25267__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25155__auto__,c__25267__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____1 = (function (state_33192){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_33192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e33237){if((e33237 instanceof Object)){
var ex__25159__auto__ = e33237;
var statearr_33238_33276 = state_33192;
(statearr_33238_33276[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33277 = state_33192;
state_33192 = G__33277;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__,msg_hist,msg_names,msg))
})();
var state__25269__auto__ = (function (){var statearr_33239 = f__25268__auto__.call(null);
(statearr_33239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__,msg_hist,msg_names,msg))
);

return c__25267__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25267__auto___33340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto___33340,ch){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto___33340,ch){
return (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33325_33341 = state_33323__$1;
(statearr_33325_33341[(2)] = null);

(statearr_33325_33341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33323__$1,(4),ch);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (4))){
var inst_33311 = (state_33323[(7)]);
var inst_33311__$1 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33326 = state_33323;
(statearr_33326[(7)] = inst_33311__$1);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33311__$1)){
var statearr_33327_33342 = state_33323__$1;
(statearr_33327_33342[(1)] = (5));

} else {
var statearr_33328_33343 = state_33323__$1;
(statearr_33328_33343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var inst_33311 = (state_33323[(7)]);
var inst_33313 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33311);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33323__$1,(8),inst_33313);
} else {
if((state_val_33324 === (6))){
var state_33323__$1 = state_33323;
var statearr_33329_33344 = state_33323__$1;
(statearr_33329_33344[(2)] = null);

(statearr_33329_33344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33330_33345 = state_33323__$1;
(statearr_33330_33345[(2)] = inst_33319);

(statearr_33330_33345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (8))){
var inst_33315 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33331 = state_33323;
(statearr_33331[(8)] = inst_33315);

return statearr_33331;
})();
var statearr_33332_33346 = state_33323__$1;
(statearr_33332_33346[(2)] = null);

(statearr_33332_33346[(1)] = (2));


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
});})(c__25267__auto___33340,ch))
;
return ((function (switch__25155__auto__,c__25267__auto___33340,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25156__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25156__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25156__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var figwheel$client$heads_up_plugin_$_state_machine__25156__auto____1 = (function (state_33323){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_33323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e33337){if((e33337 instanceof Object)){
var ex__25159__auto__ = e33337;
var statearr_33338_33347 = state_33323;
(statearr_33338_33347[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33348 = state_33323;
state_33323 = G__33348;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25156__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25156__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25156__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25156__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto___33340,ch))
})();
var state__25269__auto__ = (function (){var statearr_33339 = f__25268__auto__.call(null);
(statearr_33339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto___33340);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto___33340,ch))
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
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__){
return (function (state_33369){
var state_val_33370 = (state_33369[(1)]);
if((state_val_33370 === (1))){
var inst_33364 = cljs.core.async.timeout.call(null,(3000));
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33369__$1,(2),inst_33364);
} else {
if((state_val_33370 === (2))){
var inst_33366 = (state_33369[(2)]);
var inst_33367 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33369__$1 = (function (){var statearr_33371 = state_33369;
(statearr_33371[(7)] = inst_33366);

return statearr_33371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33369__$1,inst_33367);
} else {
return null;
}
}
});})(c__25267__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____0 = (function (){
var statearr_33375 = [null,null,null,null,null,null,null,null];
(statearr_33375[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__);

(statearr_33375[(1)] = (1));

return statearr_33375;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____1 = (function (state_33369){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_33369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e33376){if((e33376 instanceof Object)){
var ex__25159__auto__ = e33376;
var statearr_33377_33379 = state_33369;
(statearr_33377_33379[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33380 = state_33369;
state_33369 = G__33380;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__ = function(state_33369){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____1.call(this,state_33369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25156__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__))
})();
var state__25269__auto__ = (function (){var statearr_33378 = f__25268__auto__.call(null);
(statearr_33378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_33378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__))
);

return c__25267__auto__;
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
var c__25267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25267__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__25268__auto__ = (function (){var switch__25155__auto__ = ((function (c__25267__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33403){
var state_val_33404 = (state_33403[(1)]);
if((state_val_33404 === (1))){
var inst_33397 = cljs.core.async.timeout.call(null,(2000));
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33403__$1,(2),inst_33397);
} else {
if((state_val_33404 === (2))){
var inst_33399 = (state_33403[(2)]);
var inst_33400 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!")].join('');
var inst_33401 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33400);
var state_33403__$1 = (function (){var statearr_33405 = state_33403;
(statearr_33405[(7)] = inst_33399);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33403__$1,inst_33401);
} else {
return null;
}
}
});})(c__25267__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__25155__auto__,c__25267__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null,null];
(statearr_33409[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____1 = (function (state_33403){
while(true){
var ret_value__25157__auto__ = (function (){try{while(true){
var result__25158__auto__ = switch__25155__auto__.call(null,state_33403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25158__auto__;
}
break;
}
}catch (e33410){if((e33410 instanceof Object)){
var ex__25159__auto__ = e33410;
var statearr_33411_33413 = state_33403;
(statearr_33411_33413[(5)] = ex__25159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33414 = state_33403;
state_33403 = G__33414;
continue;
} else {
return ret_value__25157__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__ = function(state_33403){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____1.call(this,state_33403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25156__auto__;
})()
;})(switch__25155__auto__,c__25267__auto__,figwheel_version,temp__4657__auto__))
})();
var state__25269__auto__ = (function (){var statearr_33412 = f__25268__auto__.call(null);
(statearr_33412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25267__auto__);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25269__auto__);
});})(c__25267__auto__,figwheel_version,temp__4657__auto__))
);

return c__25267__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33415){
var map__33419 = p__33415;
var map__33419__$1 = ((((!((map__33419 == null)))?((((map__33419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33419):map__33419);
var file = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33421 = "";
var G__33421__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33421),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33421);
var G__33421__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33421__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33421__$1);
if(cljs.core.truth_((function (){var and__22333__auto__ = line;
if(cljs.core.truth_(and__22333__auto__)){
return column;
} else {
return and__22333__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33421__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33421__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33422){
var map__33429 = p__33422;
var map__33429__$1 = ((((!((map__33429 == null)))?((((map__33429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33429):map__33429);
var ed = map__33429__$1;
var formatted_exception = cljs.core.get.call(null,map__33429__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33429__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33429__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33431_33435 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33432_33436 = null;
var count__33433_33437 = (0);
var i__33434_33438 = (0);
while(true){
if((i__33434_33438 < count__33433_33437)){
var msg_33439 = cljs.core._nth.call(null,chunk__33432_33436,i__33434_33438);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33439);

var G__33440 = seq__33431_33435;
var G__33441 = chunk__33432_33436;
var G__33442 = count__33433_33437;
var G__33443 = (i__33434_33438 + (1));
seq__33431_33435 = G__33440;
chunk__33432_33436 = G__33441;
count__33433_33437 = G__33442;
i__33434_33438 = G__33443;
continue;
} else {
var temp__4657__auto___33444 = cljs.core.seq.call(null,seq__33431_33435);
if(temp__4657__auto___33444){
var seq__33431_33445__$1 = temp__4657__auto___33444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33431_33445__$1)){
var c__23164__auto___33446 = cljs.core.chunk_first.call(null,seq__33431_33445__$1);
var G__33447 = cljs.core.chunk_rest.call(null,seq__33431_33445__$1);
var G__33448 = c__23164__auto___33446;
var G__33449 = cljs.core.count.call(null,c__23164__auto___33446);
var G__33450 = (0);
seq__33431_33435 = G__33447;
chunk__33432_33436 = G__33448;
count__33433_33437 = G__33449;
i__33434_33438 = G__33450;
continue;
} else {
var msg_33451 = cljs.core.first.call(null,seq__33431_33445__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33451);

var G__33452 = cljs.core.next.call(null,seq__33431_33445__$1);
var G__33453 = null;
var G__33454 = (0);
var G__33455 = (0);
seq__33431_33435 = G__33452;
chunk__33432_33436 = G__33453;
count__33433_33437 = G__33454;
i__33434_33438 = G__33455;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33456){
var map__33459 = p__33456;
var map__33459__$1 = ((((!((map__33459 == null)))?((((map__33459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33459):map__33459);
var w = map__33459__$1;
var message = cljs.core.get.call(null,map__33459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__22333__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22333__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22333__auto__;
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
var seq__33471 = cljs.core.seq.call(null,plugins);
var chunk__33472 = null;
var count__33473 = (0);
var i__33474 = (0);
while(true){
if((i__33474 < count__33473)){
var vec__33475 = cljs.core._nth.call(null,chunk__33472,i__33474);
var k = cljs.core.nth.call(null,vec__33475,(0),null);
var plugin = cljs.core.nth.call(null,vec__33475,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33481 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33471,chunk__33472,count__33473,i__33474,pl_33481,vec__33475,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33481.call(null,msg_hist);
});})(seq__33471,chunk__33472,count__33473,i__33474,pl_33481,vec__33475,k,plugin))
);
} else {
}

var G__33482 = seq__33471;
var G__33483 = chunk__33472;
var G__33484 = count__33473;
var G__33485 = (i__33474 + (1));
seq__33471 = G__33482;
chunk__33472 = G__33483;
count__33473 = G__33484;
i__33474 = G__33485;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33471);
if(temp__4657__auto__){
var seq__33471__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33471__$1)){
var c__23164__auto__ = cljs.core.chunk_first.call(null,seq__33471__$1);
var G__33486 = cljs.core.chunk_rest.call(null,seq__33471__$1);
var G__33487 = c__23164__auto__;
var G__33488 = cljs.core.count.call(null,c__23164__auto__);
var G__33489 = (0);
seq__33471 = G__33486;
chunk__33472 = G__33487;
count__33473 = G__33488;
i__33474 = G__33489;
continue;
} else {
var vec__33478 = cljs.core.first.call(null,seq__33471__$1);
var k = cljs.core.nth.call(null,vec__33478,(0),null);
var plugin = cljs.core.nth.call(null,vec__33478,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33490 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33471,chunk__33472,count__33473,i__33474,pl_33490,vec__33478,k,plugin,seq__33471__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33490.call(null,msg_hist);
});})(seq__33471,chunk__33472,count__33473,i__33474,pl_33490,vec__33478,k,plugin,seq__33471__$1,temp__4657__auto__))
);
} else {
}

var G__33491 = cljs.core.next.call(null,seq__33471__$1);
var G__33492 = null;
var G__33493 = (0);
var G__33494 = (0);
seq__33471 = G__33491;
chunk__33472 = G__33492;
count__33473 = G__33493;
i__33474 = G__33494;
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
var args33495 = [];
var len__23458__auto___33502 = arguments.length;
var i__23459__auto___33503 = (0);
while(true){
if((i__23459__auto___33503 < len__23458__auto___33502)){
args33495.push((arguments[i__23459__auto___33503]));

var G__33504 = (i__23459__auto___33503 + (1));
i__23459__auto___33503 = G__33504;
continue;
} else {
}
break;
}

var G__33497 = args33495.length;
switch (G__33497) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33495.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33498_33506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33499_33507 = null;
var count__33500_33508 = (0);
var i__33501_33509 = (0);
while(true){
if((i__33501_33509 < count__33500_33508)){
var msg_33510 = cljs.core._nth.call(null,chunk__33499_33507,i__33501_33509);
figwheel.client.socket.handle_incoming_message.call(null,msg_33510);

var G__33511 = seq__33498_33506;
var G__33512 = chunk__33499_33507;
var G__33513 = count__33500_33508;
var G__33514 = (i__33501_33509 + (1));
seq__33498_33506 = G__33511;
chunk__33499_33507 = G__33512;
count__33500_33508 = G__33513;
i__33501_33509 = G__33514;
continue;
} else {
var temp__4657__auto___33515 = cljs.core.seq.call(null,seq__33498_33506);
if(temp__4657__auto___33515){
var seq__33498_33516__$1 = temp__4657__auto___33515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33498_33516__$1)){
var c__23164__auto___33517 = cljs.core.chunk_first.call(null,seq__33498_33516__$1);
var G__33518 = cljs.core.chunk_rest.call(null,seq__33498_33516__$1);
var G__33519 = c__23164__auto___33517;
var G__33520 = cljs.core.count.call(null,c__23164__auto___33517);
var G__33521 = (0);
seq__33498_33506 = G__33518;
chunk__33499_33507 = G__33519;
count__33500_33508 = G__33520;
i__33501_33509 = G__33521;
continue;
} else {
var msg_33522 = cljs.core.first.call(null,seq__33498_33516__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33522);

var G__33523 = cljs.core.next.call(null,seq__33498_33516__$1);
var G__33524 = null;
var G__33525 = (0);
var G__33526 = (0);
seq__33498_33506 = G__33523;
chunk__33499_33507 = G__33524;
count__33500_33508 = G__33525;
i__33501_33509 = G__33526;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23465__auto__ = [];
var len__23458__auto___33531 = arguments.length;
var i__23459__auto___33532 = (0);
while(true){
if((i__23459__auto___33532 < len__23458__auto___33531)){
args__23465__auto__.push((arguments[i__23459__auto___33532]));

var G__33533 = (i__23459__auto___33532 + (1));
i__23459__auto___33532 = G__33533;
continue;
} else {
}
break;
}

var argseq__23466__auto__ = ((((0) < args__23465__auto__.length))?(new cljs.core.IndexedSeq(args__23465__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23466__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33528){
var map__33529 = p__33528;
var map__33529__$1 = ((((!((map__33529 == null)))?((((map__33529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33529):map__33529);
var opts = map__33529__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33527){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33527));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33535){if((e33535 instanceof Error)){
var e = e33535;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33535;

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
return (function (p__33539){
var map__33540 = p__33539;
var map__33540__$1 = ((((!((map__33540 == null)))?((((map__33540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);
var msg_name = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map