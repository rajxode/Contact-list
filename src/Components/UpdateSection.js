import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactSelector, deleteContactThunk, removeContact, setShowContact, updateContactThunk } from "../Redux/Reducers/contactReducer";

const UpdateSection = () => {
    const dispatch = useDispatch();

    const {showContact} = useSelector(contactSelector);
    const [formData, setFormData] = useState({});
    const [address,setAddress] = useState({});

    useEffect(()=>{
        setFormData(showContact);
        setAddress(showContact.address);
    },[showContact])

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({ 
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateContactThunk(formData));
        toast.success('Data updated!!');
        dispatch(setShowContact(null));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        // dispatch(removeContact(formData));
        dispatch(deleteContactThunk(formData));
        dispatch(setShowContact(null));
        toast.success('Contact Deleted');
    }


    const handleAddressChange = (e) => {
        const {name,value} = e.target;
        setAddress({
            ...address,
            [name]:value,
        })

        setFormData({
            ...formData,
            address:{
                ...address,
                [name]:value
            }
        });
    }

    return(
        <>
            <button className="bg-red-500 px-[2px] w-5 text-white rounded shadow-md" onClick={() => dispatch(setShowContact(null))}>
                X
            </button>
            <div className="flex h-[200px] justify-center items-center m-2">
                <div className="w-[200px] h-full bg-black rounded-full overflow-hidden ">
                    <img src={require('../Assets/dummy-avatar.jpg')} alt="avatar" />
                </div>
            </div>
            <div className="bg-[#313866] p-2 rounded">
                <form onSubmit={handleSubmit}>
                    <table className="border-separate border-spacing-2">
                        <tr>
                            <td><label for="name" className="text-white font-semibold">Name:</label></td>
                            <td>
                                <input type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "/>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="phone" className="text-white font-semibold">Phone:</label></td>
                            <td>
                                <input type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] " />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="email" className="text-white font-semibold">Email:</label></td>
                            <td>
                                <input type="text"
                                    name="email"
                                    value={formData.email}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="suite" className="text-white font-semibold">H. No.:</label></td>
                            <td>
                                <input type="text"
                                    name="suite"
                                    value={address.suite}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                                    onChange={handleAddressChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="city" className="text-white font-semibold">City:</label></td>
                            <td>
                                <input type="text"
                                    name="city"
                                    value={address.city}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                                    onChange={handleAddressChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="zipcode" className="text-white font-semibold">ZipCode:</label>
                            </td>
                            <td>
                                <input type="text"
                                    name="zipcode"
                                    value={address.zipcode}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                                    onChange={handleAddressChange} />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <button className="float-left bg-blue-400 rounded text-white p-[2px] mt-1 shadow-md" onClick={handleSubmit}>
                Update
            </button>
            <button className="float-right bg-red-500 p-[2px] rounded text-white mt-1 shadow-md" onClick={handleDelete}>
                Delete
            </button>
        </>
    )
}


export default UpdateSection;