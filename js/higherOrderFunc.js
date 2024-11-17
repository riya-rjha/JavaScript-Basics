//higher order functions
//performs at least one of the tasks : 
//takes one or more function as an argument{parameter}
//returns a function as the result

//forEach() - selecting from DOM
import { posts } from "./posts.js";
posts.forEach(post => {
    console.log(post);
})
console.clear();

//filter - filter out elements from Node list or DOM
//filter ot some values
const filteredPosts = posts.filter((post)=>{
    return post.userId === 1;
})
console.log(filteredPosts);

//map - returns function
//input.length == output.length
const mappedPosts = posts.map((post)=>{
    return post.id;
})
console.log(mappedPosts);

//reduce - iterates over every element
//helps in performing calculations on every element
//input -> smaller no of outputs
const reducePostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducePostsValue);

