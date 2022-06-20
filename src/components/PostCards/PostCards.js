import './PostCards.css';
import Post from "../Post/Post";
import React from "react";
import {useSelector} from "react-redux";

function PostCards(props) {
    const users = useSelector(state => state.users)

    const posts = props.posts.sort((a,b) => (a.post_date < b.post_date) ? 1 : ((b.post_date < a.post_date) ? -1 : 0))

    return (
        <div className="PostCards">
            {posts.map((post) => {

                let user = users.filter((user) => user.id === post.user_id)[0]

                return (
                    <div className={'card-list__item'} key={post.id}>
                        <Post
                            post={post}
                            user={user}
                        />
                    </div>
                )
            })
            }
        </div>
    );

}
export default PostCards;
