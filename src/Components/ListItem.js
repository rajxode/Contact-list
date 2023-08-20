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
        <div className="w-full flex justify-between 
                        h-12 cursor-pointer hover:bg-[#9F91CC] 
                        border-b-2 border-black hover:border-[#5C4B99] 
                        p-2 hover:text-white" 
            onClick={handleClick}>
            <div>
                {name}
            </div>

            <div>
                <small>
                    {phone}
                </small>
            </div>
        </div>
        </>
    )
}

export default ListItem;