export default (axios, store, router) => ({
    setRole(id, data){
        axios.put(`/user/${id}`, {role: data}).then((res)=>{return res})
    },
    getUsers(){
        axios.get('/users').then((res)=>{
            store.commit("user/allUsers", res.data)
        })
    }
  })