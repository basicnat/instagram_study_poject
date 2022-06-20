import './PostedPhoto.css';

function PostedPhoto(props) {
    const { photo, sizePhoto } = props;

    function getRandomPhoto(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomId = getRandomPhoto(1, 100);

    let postedPhoto = photo
        ? photo
        :`https://picsum.photos/900/700?random=${randomId}`;


    return (
        <div className="postedPhoto">
            <img className={`post__photo ${sizePhoto} profile__gallery-item`}
                 src={postedPhoto}
                 alt={''}/>
        </div>
    )
}

export default PostedPhoto;