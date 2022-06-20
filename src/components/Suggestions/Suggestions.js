import './Suggestions.css';
import SuggestBlock from "../SuggestBlock/SuggestBlock";
import React from "react";

export default class Suggestions extends React.Component {
    static defaultProps = {
        userList: []
    }

    render() {
        return (
            <div className="Suggestions page-content__aside aside">
                <div className="aside__suggestion-block">
                    <p className="aside__title">Suggestion for you</p>
                    {this.props.userList.slice(6,12).map((user) => {

                        return (
                            <SuggestBlock
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
            </div>
        )
    }

}

