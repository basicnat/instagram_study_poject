import './Post.css';
import likeIcon from '../../img/like.png';
import likeIconAct from '../../img/likeAct.png'
import comment from '../../img/comment.png';
import Comment from "../Comment/Comment";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import PostedPhoto from "../PostedPhoto/PostedPhoto";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function Post(props) {
    const navigate = useNavigate()
    const post = props.post
    const user = props.user
    const photoDesc = post.description ? post.description : 'Look at my new take';

    const dispatch = useDispatch()
    const removePost = (id) => {
        dispatch({type: 'REMOVE_POST', id:id});
    }



    return (
        <div className="post__item">
            <div className="post__header" onClick={()=> navigate('/' + (user.isCurrentUser ? 'profile' : user.id))}>
                <ProfileIcon iconSize={'medium'} image={user.avatar} />
                <p className="post__user-name">{user.first_name} {user.last_name}</p>
            </div>

            <PostedPhoto photo={post.image} sizePhoto={'full'}/>
            <div className="post__reactions reacts">
                <div className={'likeWrap'}>
                    <input className={'likeInput'} type={'checkbox'} id={'likeInput'}/>
                    <img className="post__icon likeAct" src={likeIconAct} alt=" "/>
                    <img className="post__icon like" src={likeIcon} alt=" "/>
                </div>
                <div className="post__photo-desc">{photoDesc}</div>

                <button className={'post__remove-button'}
                        type={'submit'}
                        onClick={() => removePost(post.id)}
                >
                    Remove
                </button>
            </div>

            <div className="post__comments">
                <Comment/>
                <Comment/>
            </div>
            <div className="post__user-comment">
                <img className="post__icon smile-icon" src={comment} alt=" "/>
                <input className="post__comment-box" type="textarea" placeholder="Add comment..."/>
                <button className="post__comment-button">Post</button>
            </div>
        </div>
    )
}

export default Post;