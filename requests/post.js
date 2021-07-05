export default (axios, store) => ({
    getAllPosts(){
      axios.get('/post/all').then(result=>{
        store.commit("post/allPosts", result.data)
      })
    },
    setPublished(id, data){
      axios.put(`/post/${id}`, {published: data}).then(result=>{
        console.log(data, result)
      })
    }
  })