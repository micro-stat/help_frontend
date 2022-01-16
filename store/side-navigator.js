export const state = () => ({
  activeCategory: ''
})

export const mutations = {
  setActiveCategory: (state, newCategory) => {
    state.activeCategory = newCategory
  }
}

export const actions = {
  setActiveCategory: ({ state, commit }, newCategory) => {
    if (newCategory === state.activeCategory) {
      commit('setActiveCategory', '')
    } else {
      commit('setActiveCategory', newCategory)
    }
  }
}
