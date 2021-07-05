export const state = () => ({
    allPosts:[]
})

export const mutations = {
    allPosts(state, data){
        state.allPosts = data
    }
}