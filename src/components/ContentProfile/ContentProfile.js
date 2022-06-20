import './ContentProfile.css';
import PostedPhoto from "../PostedPhoto/PostedPhoto";

function ContentProfile(props) {
    const photos = []

    for (let i=0; i<props.posts.length; i++)
    {
        photos.push(<PostedPhoto photo={props.posts[i].image} sizePhoto={'preview'}/>)
    }
    return (
        <div className={'profile__content'}>
            <div className={'profile__content-wrap'}>
                {photos}
            </div>

        </div>
    )

}

export default ContentProfile;