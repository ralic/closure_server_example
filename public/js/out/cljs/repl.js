// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29514){
var map__29539 = p__29514;
var map__29539__$1 = ((((!((map__29539 == null)))?((((map__29539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var m = map__29539__$1;
var n = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29541_29563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29542_29564 = null;
var count__29543_29565 = (0);
var i__29544_29566 = (0);
while(true){
if((i__29544_29566 < count__29543_29565)){
var f_29567 = cljs.core._nth.call(null,chunk__29542_29564,i__29544_29566);
cljs.core.println.call(null,"  ",f_29567);

var G__29568 = seq__29541_29563;
var G__29569 = chunk__29542_29564;
var G__29570 = count__29543_29565;
var G__29571 = (i__29544_29566 + (1));
seq__29541_29563 = G__29568;
chunk__29542_29564 = G__29569;
count__29543_29565 = G__29570;
i__29544_29566 = G__29571;
continue;
} else {
var temp__4657__auto___29572 = cljs.core.seq.call(null,seq__29541_29563);
if(temp__4657__auto___29572){
var seq__29541_29573__$1 = temp__4657__auto___29572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29541_29573__$1)){
var c__22485__auto___29574 = cljs.core.chunk_first.call(null,seq__29541_29573__$1);
var G__29575 = cljs.core.chunk_rest.call(null,seq__29541_29573__$1);
var G__29576 = c__22485__auto___29574;
var G__29577 = cljs.core.count.call(null,c__22485__auto___29574);
var G__29578 = (0);
seq__29541_29563 = G__29575;
chunk__29542_29564 = G__29576;
count__29543_29565 = G__29577;
i__29544_29566 = G__29578;
continue;
} else {
var f_29579 = cljs.core.first.call(null,seq__29541_29573__$1);
cljs.core.println.call(null,"  ",f_29579);

var G__29580 = cljs.core.next.call(null,seq__29541_29573__$1);
var G__29581 = null;
var G__29582 = (0);
var G__29583 = (0);
seq__29541_29563 = G__29580;
chunk__29542_29564 = G__29581;
count__29543_29565 = G__29582;
i__29544_29566 = G__29583;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29584 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29584);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29584)))?cljs.core.second.call(null,arglists_29584):arglists_29584));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29545_29585 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29546_29586 = null;
var count__29547_29587 = (0);
var i__29548_29588 = (0);
while(true){
if((i__29548_29588 < count__29547_29587)){
var vec__29549_29589 = cljs.core._nth.call(null,chunk__29546_29586,i__29548_29588);
var name_29590 = cljs.core.nth.call(null,vec__29549_29589,(0),null);
var map__29552_29591 = cljs.core.nth.call(null,vec__29549_29589,(1),null);
var map__29552_29592__$1 = ((((!((map__29552_29591 == null)))?((((map__29552_29591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29552_29591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29552_29591):map__29552_29591);
var doc_29593 = cljs.core.get.call(null,map__29552_29592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29594 = cljs.core.get.call(null,map__29552_29592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29590);

cljs.core.println.call(null," ",arglists_29594);

if(cljs.core.truth_(doc_29593)){
cljs.core.println.call(null," ",doc_29593);
} else {
}

var G__29595 = seq__29545_29585;
var G__29596 = chunk__29546_29586;
var G__29597 = count__29547_29587;
var G__29598 = (i__29548_29588 + (1));
seq__29545_29585 = G__29595;
chunk__29546_29586 = G__29596;
count__29547_29587 = G__29597;
i__29548_29588 = G__29598;
continue;
} else {
var temp__4657__auto___29599 = cljs.core.seq.call(null,seq__29545_29585);
if(temp__4657__auto___29599){
var seq__29545_29600__$1 = temp__4657__auto___29599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29545_29600__$1)){
var c__22485__auto___29601 = cljs.core.chunk_first.call(null,seq__29545_29600__$1);
var G__29602 = cljs.core.chunk_rest.call(null,seq__29545_29600__$1);
var G__29603 = c__22485__auto___29601;
var G__29604 = cljs.core.count.call(null,c__22485__auto___29601);
var G__29605 = (0);
seq__29545_29585 = G__29602;
chunk__29546_29586 = G__29603;
count__29547_29587 = G__29604;
i__29548_29588 = G__29605;
continue;
} else {
var vec__29554_29606 = cljs.core.first.call(null,seq__29545_29600__$1);
var name_29607 = cljs.core.nth.call(null,vec__29554_29606,(0),null);
var map__29557_29608 = cljs.core.nth.call(null,vec__29554_29606,(1),null);
var map__29557_29609__$1 = ((((!((map__29557_29608 == null)))?((((map__29557_29608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29557_29608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557_29608):map__29557_29608);
var doc_29610 = cljs.core.get.call(null,map__29557_29609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29611 = cljs.core.get.call(null,map__29557_29609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29607);

cljs.core.println.call(null," ",arglists_29611);

if(cljs.core.truth_(doc_29610)){
cljs.core.println.call(null," ",doc_29610);
} else {
}

var G__29612 = cljs.core.next.call(null,seq__29545_29600__$1);
var G__29613 = null;
var G__29614 = (0);
var G__29615 = (0);
seq__29545_29585 = G__29612;
chunk__29546_29586 = G__29613;
count__29547_29587 = G__29614;
i__29548_29588 = G__29615;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__29539,map__29539__$1,m,n,nm){
return (function (p__29559){
var vec__29560 = p__29559;
var role = cljs.core.nth.call(null,vec__29560,(0),null);
var spec = cljs.core.nth.call(null,vec__29560,(1),null);
if(cljs.core.truth_((function (){var and__21662__auto__ = spec;
if(cljs.core.truth_(and__21662__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__29539,map__29539__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map