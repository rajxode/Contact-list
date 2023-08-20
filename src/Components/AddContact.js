import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewContact, contactSelector } from "../Redux/Reducers/contactReducer";

const AddContact = () => {
    const dispatch = useDispatch();
    const {contactList} = useSelector(contactSelector);
    const inputStructure = {
        id:`${contactList.length}`,
        name:'',
        email:'',
        phone:'',
        address:{
            suite:'',
            city:'',
            zipcode:''
        }
    };
    const [formData,setFormData]  = useState(inputStructure);
    const [address,setAddress] = useState(inputStructure.address);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addNewContact(formData));
        toast.success('Submit !!');
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleReset = (e) => {
        e.preventDefault();
        toast.success('Reset');
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
        <div className="w-full">
            <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label for="name">Name</label></td>
                    <td>
                        <input type="text" 
                            name="name" 
                            value={formData.name}
                            required 
                            onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="phone">Phone</label></td>
                    <td>
                        <input type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            // required 
                            />
                    </td>
                </tr>
                <tr>
                    <td><label for="email">Email</label></td>
                    <td>
                        <input type="text"
                            name="email"
                            value={formData.email}
                            // required
                            onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td><label for="suite">Suite:</label></td>
                    <td>
                        <input type="text"
                            name="suite"
                            value={address.suite}
                            // required
                            onChange={handleAddressChange} />
                    </td>
                </tr>
                <tr>
                    <td><label for="city">City:</label></td>
                    <td>
                        <input type="text"
                            name="city"
                            value={address.city}
                            // required
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
                            // required
                            onChange={handleAddressChange} />
                    </td>
                </tr>
            </table>
            <button className="float-left bg-indigo-500 text-white p-[2px] rounded">
                Submit
            </button>
            <button className="float-right bg-red-500 text-white p-[2px] rounded" onClick={handleReset}>
                Reset
            </button>
        </form>
        </div>
    )
}

export default AddContact;