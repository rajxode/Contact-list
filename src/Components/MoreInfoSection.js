import { useDispatch, useSelector } from "react-redux";
import { contactSelector, setShowAddContact, setShowContact } from "../Redux/Reducers/contactReducer";

import UpdateSection from "./UpdateSection";
import AddContact from "./AddContact";


const MoreInfoSection = () => {
    const dispatch = useDispatch();
    const {showContact,showAddContact}  = useSelector(contactSelector);

    return(
        <div className="hidden md:block w-full bg-indigo-300 p-2">
            <span className="text-lg">
                {showAddContact ? "Add Contact Page"
                                : "More Info Page" }
            </span>
            <button className="rounded bg-gray-500 w-[100px] h-7 float-right" onClick={() => dispatch(setShowAddContact())}>
                {showAddContact ? "Cancel"
                                    : "Add Contact" }
            </button>
            <div className="flex flex-col h-fit">
                {!showContact 
                    ? 
                        <h2 className="self-center justify-self-center">
                            {!showAddContact ? 'Click on a contact' : null}
                        </h2>
                    :
                    <>
                        <button onClick={() => dispatch(setShowContact(null))}>Close</button>
                        <div className="w-2/3 bg-orange-300 h-2/3 mt-3 justify-self-center self-center">
                            <UpdateSection showContact={showContact} />
                        </div>
                    </>
                }
                {!showAddContact
                    ?
                    null
                    :
                    <AddContact />
                }
            </div>
        </div>
    );
}

export default MoreInfoSection;