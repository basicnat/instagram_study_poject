import './Stories.css';
import Story from "../Story/Story";
import React from "react";


export default class Stories extends React.Component {
    static defaultProps = {
        userList: []
    }
    render() {
        return (
            <div className="stories page-content__stories">

                {this.props.userList.map((user) => {
                    return (
                        <Story
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            firstName={user['first_name']}
                            lastName={user['last_name']}
                            avatar={user['avatar']}/>
                    )
                })
                }
            </div>
        );
    }
}

