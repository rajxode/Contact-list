import { useDispatch } from "react-redux";
import { setShowContact } from "../Redux/Reducers/contactReducer";


const ListItem = (props) => {
    const dispatch = useDispatch();
    const {name, phone} = props.contact;

    const handleClick = () =>{
        dispatch(setShowContact(props.contact));
    }

    return(
        <div className="w-full flex justify-between h-16 md:h-12 border-b-2 border-black p-1" 
            onClick={handleClick}>
            <div>
                {name}
                <br />
                <button className="rounded bg-[#b1d9fa] p-[2px] w-10 md:hidden">Edit</button>
            </div>

            <div>
                <small className="text-slate-400">
                    {phone}
                </small>
                <br />
                <button className="rounded bg-red-500 p-[2px] md:hidden float-right">Delete</button>
            </div>
        </div>
    )
}

export default ListItem;