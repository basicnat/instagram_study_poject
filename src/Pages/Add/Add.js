import './Add.css'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useSelector} from "react-redux";

const Add = () => {
    let [desc, setDesc] = useState('')
    let [file, setFile] = useState(null)

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const users = useSelector((state) => state.users)

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addPost = (e) => {
        e.preventDefault()

        const user = users.filter(user => user.isCurrentUser)[0]

        const post = {
            id: posts.length + 1,
            user_id: user.id,
            post_date: new Date(),
            image: file,
            description:desc,
        }

        dispatch({type:'CREATE_POST', data:post})
    }


    return (
        <div className={'addPage'}>
            <form className={'addPage__form'}>

                <h1 className={'addPage__title'}>Create new post</h1>

                <div className={'addPage__input '}>
                    <input
                        id={'uploadInput'}
                        type={"file"}
                        accept={'image/*'}
                        placeholder={'Choose'}
                        onChange={e=>selectFile}

                    />
                    <div className={'uploadButton'}><label for={'uploadInput'}>Upload image</label></div>
                </div>
                <span className={'uploadEmpty'}>Add image</span>

                <div className={'addPage__input-textarea'}>
                    <label for={'description'}>Add a description</label>
                    <textarea
                        name={'description'}
                        maxLength={'200'}
                        rows="4"
                        placeholder={'Type text up to 200 characters...'}
                        value={desc}
                        onChange={e=>setDesc(e.target.value)}
                    />
                </div>
                <button className={'addPage__add-button'}
                        type={'submit'}
                        onClick={addPost}
                >
                    Create post
                </button>

            </form>
        </div>
    )
}

export default Add;