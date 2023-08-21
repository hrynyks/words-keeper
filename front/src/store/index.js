import { createStore } from "vuex";
import { word } from "@/store/modules/words/words";
import { ui } from "@/store/modules/ui/ui";

export default createStore({
  modules: {
    word: word,
    ui: ui,
  },
});
// component - dispatch(action) - commit(mutation) - change state
