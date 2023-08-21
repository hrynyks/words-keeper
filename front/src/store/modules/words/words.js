import { WORD_MUTATIONS } from "@/store/modules/words/mutations";
import { WORD_ACTIONS } from "@/store/modules/words/actions";
import { WORD_STATE } from "@/store/modules/words/states";

export const word = {
  state: WORD_STATE.state,
  mutations: WORD_MUTATIONS.mutations,
  actions: WORD_ACTIONS.actions,
};
