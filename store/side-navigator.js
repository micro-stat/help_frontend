export const state = () => ({
  activeCategory: '',
  isVisible: false
})

export const mutations = {
  setActiveCategory: (state, newCategory) => {
    state.activeCategory = newCategory
  },
  setVisibility: (state, isVisible) => {
    state.isVisible = isVisible
  }
}

export const actions = {
  setActiveCategory: ({ state, commit }, newCategory) => {
    if (newCategory === state.activeCategory) {
      commit('setActiveCategory', '')
    } else {
      commit('setActiveCategory', newCategory)
    }
  },

  setVisibility: ({ state, commit }, isVisible) => {
    commit('setVisibility', isVisible)
  }
}
