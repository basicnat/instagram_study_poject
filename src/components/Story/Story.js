import './Story.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";

function Story(props) {
    const {
        firstName,
        lastName,
        avatar,
        } = props;
    return (
        <div className="Story story__item">
            <ProfileIcon iconSize={'big'} storyBorder={'true'} image={avatar}/>
            <div className="story__name">
                {firstName} {lastName}
            </div>
        </div>
    );
}

export default Story;