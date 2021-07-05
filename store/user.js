export const state = () => ({
    allUsers:[]
})

export const mutations = {
    allUsers(state, data){
        state.allUsers = data
    }
}