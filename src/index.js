import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store/indexStore";

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

function GeneratePosts(userData)
{
    for (let i = 0; i < randomInteger(3, 5); i++)
    {
        const posts = store.getState().posts

        const post = {
            id: posts.length + 1,
            user_id: userData.id,
            post_date: new Date(2021, randomInteger(1, 11), randomInteger(1, 12), randomInteger(1, 12), randomInteger(0, 259)),
            image: `https://picsum.photos/900/700?random=` + randomInteger(1, 10000)
        }

        store.dispatch({type:'CREATE_POST', data: post})
    }
}

fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((result) => {
        result.data.map((user) => {
            let userData = user
            Object.assign(userData, {isCurrentUser: false})
            store.dispatch({type:'CREATE_USER', data: userData})

            GeneratePosts(userData)

        })
    })

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
