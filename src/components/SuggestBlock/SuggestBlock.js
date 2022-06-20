import './SuggestBlock.css'
import ProfileIcon from "../ProfileIcon/ProfileIcon";

function SuggestBlock(props) {
    const {
        firstName,
        lastName,
        avatar,
    } = props;
    return (
        <div className="aside__item">
            <div className="aside__profile-pic"><ProfileIcon iconSize={'medium'} image={avatar}/></div>
            <div className="aside__user-name">{firstName} {lastName}</div>
            <div className="aside__user-info">Lorem ipsum dolor</div>
        </div>
    )
}

export default SuggestBlock;