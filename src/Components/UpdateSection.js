import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactSelector, removeContact } from "../Redux/Reducers/contactReducer";

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
        toast.success('Data updated!!');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeContact(formData));
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
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label for="name">Name</label></td>
                    <td>
                        <input type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="phone">Phone</label></td>
                    <td>
                        <input type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td><label for="email">Email</label></td>
                    <td>
                        <input type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td><label for="suite">Suite:</label></td>
                    <td>
                        <input type="text"
                            name="suite"
                            value={address.suite}
                            onChange={handleAddressChange} />
                    </td>
                </tr>
                <tr>
                    <td><label for="city">City:</label></td>
                    <td>
                        <input type="text"
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="zipcode">ZipCode:</label>
                    </td>
                    <td>
                        <input type="text"
                            name="zipcode"
                            value={address.zipcode}
                            onChange={handleAddressChange} />
                    </td>
                </tr>
            </table>
            <button className="float-left">
                Update
            </button>
            <button className="float-right" onClick={handleDelete}>
                Delete
            </button>
        </form>
    )
}


export default UpdateSection;