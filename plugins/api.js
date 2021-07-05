import Post from "../requests/post";
import Category from "../requests/category";
import User from "../requests/user";



export default (context, inject) => {
 // Initialize API factories
 const factories = {
    user: User(context.$axios, context.store),
    post: Post(context.$axios, context.store),
    category: Category(context.$axios, context.store),
 };
//  console.log(context)
 // Inject $api
 inject("api", factories);
};