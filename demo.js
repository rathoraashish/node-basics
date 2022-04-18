const fetch = require("node-fetch");
const showPosts = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    }
    //invoke function showPosts
showPosts();