// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32136){
var map__32161 = p__32136;
var map__32161__$1 = ((((!((map__32161 == null)))?((((map__32161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32161):map__32161);
var m = map__32161__$1;
var n = cljs.core.get.call(null,map__32161__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32163_32185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32164_32186 = null;
var count__32165_32187 = (0);
var i__32166_32188 = (0);
while(true){
if((i__32166_32188 < count__32165_32187)){
var f_32189 = cljs.core._nth.call(null,chunk__32164_32186,i__32166_32188);
cljs.core.println.call(null,"  ",f_32189);

var G__32190 = seq__32163_32185;
var G__32191 = chunk__32164_32186;
var G__32192 = count__32165_32187;
var G__32193 = (i__32166_32188 + (1));
seq__32163_32185 = G__32190;
chunk__32164_32186 = G__32191;
count__32165_32187 = G__32192;
i__32166_32188 = G__32193;
continue;
} else {
var temp__4657__auto___32194 = cljs.core.seq.call(null,seq__32163_32185);
if(temp__4657__auto___32194){
var seq__32163_32195__$1 = temp__4657__auto___32194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32163_32195__$1)){
var c__23164__auto___32196 = cljs.core.chunk_first.call(null,seq__32163_32195__$1);
var G__32197 = cljs.core.chunk_rest.call(null,seq__32163_32195__$1);
var G__32198 = c__23164__auto___32196;
var G__32199 = cljs.core.count.call(null,c__23164__auto___32196);
var G__32200 = (0);
seq__32163_32185 = G__32197;
chunk__32164_32186 = G__32198;
count__32165_32187 = G__32199;
i__32166_32188 = G__32200;
continue;
} else {
var f_32201 = cljs.core.first.call(null,seq__32163_32195__$1);
cljs.core.println.call(null,"  ",f_32201);

var G__32202 = cljs.core.next.call(null,seq__32163_32195__$1);
var G__32203 = null;
var G__32204 = (0);
var G__32205 = (0);
seq__32163_32185 = G__32202;
chunk__32164_32186 = G__32203;
count__32165_32187 = G__32204;
i__32166_32188 = G__32205;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32206 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22345__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22345__auto__)){
return or__22345__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32206);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32206)))?cljs.core.second.call(null,arglists_32206):arglists_32206));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__32167_32207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32168_32208 = null;
var count__32169_32209 = (0);
var i__32170_32210 = (0);
while(true){
if((i__32170_32210 < count__32169_32209)){
var vec__32171_32211 = cljs.core._nth.call(null,chunk__32168_32208,i__32170_32210);
var name_32212 = cljs.core.nth.call(null,vec__32171_32211,(0),null);
var map__32174_32213 = cljs.core.nth.call(null,vec__32171_32211,(1),null);
var map__32174_32214__$1 = ((((!((map__32174_32213 == null)))?((((map__32174_32213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32174_32213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32174_32213):map__32174_32213);
var doc_32215 = cljs.core.get.call(null,map__32174_32214__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32216 = cljs.core.get.call(null,map__32174_32214__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32212);

cljs.core.println.call(null," ",arglists_32216);

if(cljs.core.truth_(doc_32215)){
cljs.core.println.call(null," ",doc_32215);
} else {
}

var G__32217 = seq__32167_32207;
var G__32218 = chunk__32168_32208;
var G__32219 = count__32169_32209;
var G__32220 = (i__32170_32210 + (1));
seq__32167_32207 = G__32217;
chunk__32168_32208 = G__32218;
count__32169_32209 = G__32219;
i__32170_32210 = G__32220;
continue;
} else {
var temp__4657__auto___32221 = cljs.core.seq.call(null,seq__32167_32207);
if(temp__4657__auto___32221){
var seq__32167_32222__$1 = temp__4657__auto___32221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32167_32222__$1)){
var c__23164__auto___32223 = cljs.core.chunk_first.call(null,seq__32167_32222__$1);
var G__32224 = cljs.core.chunk_rest.call(null,seq__32167_32222__$1);
var G__32225 = c__23164__auto___32223;
var G__32226 = cljs.core.count.call(null,c__23164__auto___32223);
var G__32227 = (0);
seq__32167_32207 = G__32224;
chunk__32168_32208 = G__32225;
count__32169_32209 = G__32226;
i__32170_32210 = G__32227;
continue;
} else {
var vec__32176_32228 = cljs.core.first.call(null,seq__32167_32222__$1);
var name_32229 = cljs.core.nth.call(null,vec__32176_32228,(0),null);
var map__32179_32230 = cljs.core.nth.call(null,vec__32176_32228,(1),null);
var map__32179_32231__$1 = ((((!((map__32179_32230 == null)))?((((map__32179_32230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32179_32230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32179_32230):map__32179_32230);
var doc_32232 = cljs.core.get.call(null,map__32179_32231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32233 = cljs.core.get.call(null,map__32179_32231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32229);

cljs.core.println.call(null," ",arglists_32233);

if(cljs.core.truth_(doc_32232)){
cljs.core.println.call(null," ",doc_32232);
} else {
}

var G__32234 = cljs.core.next.call(null,seq__32167_32222__$1);
var G__32235 = null;
var G__32236 = (0);
var G__32237 = (0);
seq__32167_32207 = G__32234;
chunk__32168_32208 = G__32235;
count__32169_32209 = G__32236;
i__32170_32210 = G__32237;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32181 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32182 = null;
var count__32183 = (0);
var i__32184 = (0);
while(true){
if((i__32184 < count__32183)){
var role = cljs.core._nth.call(null,chunk__32182,i__32184);
var temp__4657__auto___32238__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32238__$1)){
var spec_32239 = temp__4657__auto___32238__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_32239));
} else {
}

var G__32240 = seq__32181;
var G__32241 = chunk__32182;
var G__32242 = count__32183;
var G__32243 = (i__32184 + (1));
seq__32181 = G__32240;
chunk__32182 = G__32241;
count__32183 = G__32242;
i__32184 = G__32243;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32181);
if(temp__4657__auto____$1){
var seq__32181__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32181__$1)){
var c__23164__auto__ = cljs.core.chunk_first.call(null,seq__32181__$1);
var G__32244 = cljs.core.chunk_rest.call(null,seq__32181__$1);
var G__32245 = c__23164__auto__;
var G__32246 = cljs.core.count.call(null,c__23164__auto__);
var G__32247 = (0);
seq__32181 = G__32244;
chunk__32182 = G__32245;
count__32183 = G__32246;
i__32184 = G__32247;
continue;
} else {
var role = cljs.core.first.call(null,seq__32181__$1);
var temp__4657__auto___32248__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32248__$2)){
var spec_32249 = temp__4657__auto___32248__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_32249));
} else {
}

var G__32250 = cljs.core.next.call(null,seq__32181__$1);
var G__32251 = null;
var G__32252 = (0);
var G__32253 = (0);
seq__32181 = G__32250;
chunk__32182 = G__32251;
count__32183 = G__32252;
i__32184 = G__32253;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map