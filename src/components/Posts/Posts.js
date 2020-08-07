import React , {useState , useEffect} from "react"


const Posts = () => {
    // eslint-disable-next-line no-unused-vars
    const [posts , setPosts] = useState("")
    const fetchPosts = async () => {
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
        res 
            .json()
            .then(res => setPosts(res))
            .catch(err => console.log(err))
    }
    useEffect (() => {
        fetchPosts();
    })
    const postItems = (posts) ? 
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))            :
                (
                    <p>Loading ...</p>
                );
    return (
        <div>
            <h1>This is the posts</h1>
            {postItems}
        </div>
    )
}

export default Posts