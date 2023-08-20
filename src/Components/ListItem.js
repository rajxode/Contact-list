import { useDispatch } from "react-redux";
import { setShowContact } from "../Redux/Reducers/contactReducer";


const ListItem = (props) => {
    const dispatch = useDispatch();
    const {name, phone} = props.contact;

    const handleClick = (e) =>{
        dispatch(setShowContact(props.contact));
    }

    return(
        <>
        <div className="w-full flex justify-between h-12 cursor-pointer hover:bg-red-300 border-b-2 border-black p-2" 
            onClick={handleClick}>
            <div>
                {name}
            </div>

            <div>
                <small className="text-slate-400">
                    {phone}
                </small>
            </div>
        </div>
        </>
    )
}

export default ListItem;