const initialState = {
    users: [
        {
            id: 999,
            first_name: "Natasha",
            last_name: "Bazhenova",
            avatar: 'https://sun7-14.userapi.com/s/v1/ig2/pkJu790XQTJgGxDOohadQKLUb0iBa0nYU70KDFEboMWjVlscJcXwUa_lqCHRFzXTk4VGIZzDLpiFg7YR22S3gFVY.jpg?size=200x200&quality=95&crop=1080,128,1424,1428&ava=1',
            isCurrentUser: true
        }
    ],
    posts: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...state, users: [...state.users, action.data]}
        case 'CREATE_POST':
            return {...state, posts: [...state.posts, action.data]}
        case 'REMOVE_POST':
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        default:
            return state
    }
}
