
import { useSelector } from "react-redux";
import { contactSelector } from "../Redux/Reducers/contactReducer";
import ListItem from "./ListItem";

const List = () => {
    const {contactList} = useSelector(contactSelector);

    return(
        <div className="w-full md:w-[45%] h-fit flex flex-col flex-nowrap">
            {contactList.map((contact) => <ListItem contact={contact} />)}
        </div>
    )
}


export default List;