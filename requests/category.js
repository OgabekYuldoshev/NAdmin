export default (axios, store) => ({
    allCategory(){
      axios.get('/category/all').then(result=>{
        store.commit("category/allCategory", result.data)
      })
    },
    addCategory(data){
        axios.post('/category/create', {title: data})
    },
    deleteCategory(slug){
        axios.delete(`/category/${slug}`)
    }
  })