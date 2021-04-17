import React from "react";
import Card from "../card-component/card-component";
import UseFetch from "../../effects/use-fetch.effect";

const Post = ({ id }) => {
    const post = UseFetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);

    return (
        <Card>
            {
                post ? (
                    <div>
                        <h3>Title: {post.title}</h3>
                        <p>Text: {post.body}</p>
                    </div>
                ) : (
                    <p>No post found</p>
                )
            }

        </Card>
    )
};

export default Post;