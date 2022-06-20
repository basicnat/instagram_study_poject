import './HeaderProfile.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";

function HeaderProfile(props) {

    return (
        <div className='profile__header header'>
            <ProfileIcon iconSize={'large'} image={props.user.avatar}/>
            <div className='header__desc'>
                <p className='header__user-name'>{props.user.first_name} {props.user.last_name}</p>
                <div className='header__post-num'>{props.posts.length} posts</div>

            </div>
        </div>
    )
}

export default HeaderProfile;