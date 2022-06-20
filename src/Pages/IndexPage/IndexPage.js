import './IndexPage.css';
import Stories from "../../components/Stories/Stories";
import PostCards from "../../components/PostCards/PostCards";
import Suggestions from "../../components/Suggestions/Suggestions";
import React from "react";
import {useSelector} from "react-redux";


function IndexPage () {

    const users = useSelector((state) => state.users)
    const posts = useSelector((state) => state.posts)

    return (
            <div className="indexPage">
                <div className="container-content">
                    <div className="page-content">
                        <div className="main">
                            <Stories userList={users}/>
                            <PostCards posts={posts}/>
                        </div>
                        <div className="aside">
                            <Suggestions userList={users}/>
                        </div>
                    </div>
                </div>
                <div className="page__loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
}

export default IndexPage;