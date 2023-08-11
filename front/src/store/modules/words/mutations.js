export const WORD_MUTATIONS = {
  mutations: {
    setAddNewWord(state, item) {
      state.words = [...state.words, item];
    },
    setDeleteWord(state, id) {
      state.words = state.words.filter((item) => item.id !== id);
    },
    setWord(state, value) {
      state.word = value;
    },
    setTranslate(state, value) {
      state.translate = value;
    },
    setId(state, value) {
      state.id = value;
    },
  },
};
