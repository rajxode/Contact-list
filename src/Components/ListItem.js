import { useDispatch } from "react-redux";
import { setShowContact } from "../Redux/Reducers/contactReducer";


const ListItem = (props) => {
    const dispatch = useDispatch();
    const {name, phone} = props.contact;

    const handleClick = () =>{
        dispatch(setShowContact(props.contact));
    }

    return(
        <div className="w-full text-white" onClick={handleClick}>
            <p>{name}</p>
            <p>{phone}</p>
        </div>
    )
}

export default ListItem;