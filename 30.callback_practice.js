const postsData = [
    {
        title: "title 1",
        desc: "desc 1"
    },
    {
        title: "title 2",
        desc: "desc 2"
    },
    {
        title: "title 3",
        desc: "desc 3"
    }
]

//fetch all posts

function fetchPosts(){
    console.log("Fetching posts...")
    console.log(postsData)
}

fetchPosts()

//create posts

function createPosts(post, cb){
    //push the new post into existing posts
    setTimeout(function (){
        postsData.push(post);
        //invoke callback
        cb()
    }, 5000)

}

//invoke post
createPosts(
    {
        title: "title 4",
        desc: "desc 4"
    },
    fetchPosts
)

// Note: In the above code set time out function(present under create posts function) will be moved to callback queue it will be invoked only when set time out complete its time once time completes it will be invoked by callback function here callback function is cb() which is fetchPosts function which will be displayed updated pushed code.