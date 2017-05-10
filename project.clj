(defproject scores "0.1.0-SNAPSHOT"
  :description "Scores Website"
  :url "http://example.com/FIXME"
  :license {:name "GNU GENERAL PUBLIC LICENSE v3"
            :url "https://www.gnu.org/licenses/gpl-3.0.txt"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.521" :scope "provided"]
                 [reagent "0.6.1" :exclusions [cljsjs/react cljsjs/react-dom]]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.4-SNAPSHOT"]]

  :min-lein-version "2.7.1"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "public"
             :nrepl-port 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "scores.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "public/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :pretty-print false}}}}

  :aliases {"release" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[lein-figwheel "0.5.4-SNAPSHOT"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]]}})
