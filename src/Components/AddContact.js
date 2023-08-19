import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContact = () => {

    const inputStructure = {
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

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Submit !!');
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
        <div>
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
                Submit
            </button>
            <button className="float-right" onClick={handleReset}>
                Reset
            </button>
        </form>
        </div>
    )
}

export default AddContact;