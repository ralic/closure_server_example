(ns scores.core
  (:require [reagent.core :as reagent :refer [atom]]))

;; -------------------------
;; Views


(defn home-page []
  (let [react-player (aget js/window "deps" "react-player")]
    [:div
     [:h2 "Never Stops"]
     [:> react-player {:url "https://player.vimeo.com/video/216399755?title=0&amp;byline=0"}]]))

     
;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))