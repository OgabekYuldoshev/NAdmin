import Post from "../requests/post";


export default (context, inject) => {
 // Initialize API factories
 const factories = {
 post: Post(context.$axios, context.store),
 };
//  console.log(context)
 // Inject $api
 inject("api", factories);
};