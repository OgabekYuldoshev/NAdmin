export default (axios, store) => ({
    createNewPost(data){
      axios.post(`/post/create`, data,  {
        headers:{
          "Accept":"multipart/form-data"
        },
        cridentials:true
      })
    },
    deletePost(postId, userId){
      axios.delete(`post/delete/${postId}`)
    },
    getNewestPosts(){
      axios.get('/post/get').then(result=>{
        store.commit("post/setNewestPosts", result.data)
      })
    }
  })