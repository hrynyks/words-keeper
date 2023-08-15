export const WORD_MUTATIONS = {
  mutations: {
    setAddNewWord(state, item) {
      state.words = [...state.words, item];
    },
    setDeleteWord(state, id) {
      state.words = state.words.filter((item) => item.id !== id);
    },
    setUpdateWord(state, item) {
      state.words = state.words.map((el) => (el.id === item.id ? item : el));
    },

    setWord(state, value) {
      state.wordItem.word = value;
    },
    setTranslate(state, value) {
      state.wordItem.translate = value;
    },
    setId(state, value) {
      state.wordItem.id = value;
    },
  },
};
