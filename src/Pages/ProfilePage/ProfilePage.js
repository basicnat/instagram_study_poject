import './ProfilePage.css';
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import ContentProfile from "../../components/ContentProfile/ContentProfile";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function ProfilePage() {
    const param = useParams()
    const id = param.id
    const user = useSelector(state => (!param.id ? state.users.filter(user => user.isCurrentUser)[0] : state.users[id]))
    const posts = useSelector(state => state.posts.filter(post => post.user_id === user.id))

    return (
        <div className='profile__page'>
            <HeaderProfile user={user} posts={posts}/>
            <ContentProfile posts={posts}/>

            <div className="page__loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfilePage;