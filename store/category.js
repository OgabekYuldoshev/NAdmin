export const state = () => ({
    allCategory:[]
})

export const mutations = {
    allCategory(state, data){
        state.allCategory = data
    }
}