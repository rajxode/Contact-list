import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewContact, contactSelector, addContactThunk } from "../Redux/Reducers/contactReducer";

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
        dispatch(addContactThunk(formData));
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
        setFormData(inputStructure);
        setAddress(inputStructure.address);
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
    <>
        <div className="w-full bg-[#313866] p-2 rounded">
            <form onSubmit={handleSubmit}>
                <table className="border-separate border-spacing-2">
                    <tr>
                        <td><label for="name" className="text-white font-semibold">Name :</label></td>
                        <td>
                            <input type="text" 
                                name="name" 
                                value={formData.name}
                                required 
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="phone" className="text-white font-semibold">Phone :</label></td>
                        <td>
                            <input type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="email" className="text-white font-semibold">Email :</label></td>
                        <td>
                            <input type="text"
                                name="email"
                                value={formData.email}
                                required
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="suite" className="text-white font-semibold">H. No. :</label></td>
                        <td>
                            <input type="text"
                                name="suite"
                                value={address.suite}
                                required
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee]"
                                onChange={handleAddressChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="city" className="text-white font-semibold">City :</label></td>
                        <td>
                            <input type="text"
                                name="city"
                                value={address.city}
                                required
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                onChange={handleAddressChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="zipcode" className="text-white font-semibold">ZipCode :</label>
                        </td>
                        <td>
                            <input type="text"
                                name="zipcode"
                                value={address.zipcode}
                                className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                required
                                onChange={handleAddressChange} />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <button className="float-left bg-[#75C2F6] text-white p-[2px] mt-1 rounded shadow-md" onClick={handleSubmit}>
            Submit
        </button>
        <button className="float-right bg-red-500 text-white p-[2px] mt-1 rounded shadow-md" onClick={handleReset}>
            Reset
        </button>
    </>
    )
}

export default AddContact;