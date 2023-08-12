import { useState } from "react";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    const handleClearClick = () => {
        setName('');
        setAge('');
        setAddress('');
        setZipcode('');
        setPhone('');
    }

    const handleSumbitForm = (evt) => {
        evt.preventDefault();
        console.log(
            name, age, address, zipcode, phone
        )
    }

    return (
        <form onSubmit={handleSumbitForm}>
            <label>
                Name
                <input value={name} onChange={(evt) => setName(evt.target.value)} required/>
            </label>
            <label>
                Age
                <input value={age} onChange={(evt) => setAge(evt.target.value)} required/>
            </label>
            <label>
                Address
                <input value={address} onChange={(evt) => setAddress(evt.target.value)} required/>
            </label>
            <label>
                Zipcode
                <input value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required/>
            </label>
            <label>
                Phone
                <input value={phone} onChange={(evt) => setPhone(evt.target.value)} required/>
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Signup</button>
            </div>
        </form>
    );
}

export default SignupForm;