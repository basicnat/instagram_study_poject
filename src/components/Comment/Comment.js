import'./Comment.css'
let commentText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'


function Comment() {
    return (

            <div className="comments__item">
                <div className="comments__user-name">user.name</div>
                <div className="comments__content">{commentText}
                </div>
            </div>

    );
}

export default Comment;