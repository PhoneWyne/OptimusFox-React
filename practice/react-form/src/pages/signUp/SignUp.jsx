import {useState} from "react"

export function SignUp(){
    // object to store multiple form fields
    const [formData, setFormData] = useState(
        {
            name: "", 
            email: "", 
            DOB: "", 
            password: "", 
            confirmPassword: "",
            role: ""
        });
    // set empty object for errors
    // if lenght of errors obj remains zero, that would mean no errors, and correct input has been given
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        // event.target represents what element triggered the change, in this case input fields
        // destructure event.target into name, value
        // name is `name` attribute of the element being called
        // value is what is entered by user
        const {name, value} = event.target;

        // copies old formData, by use of spread operator "..."
        // updates the changed value, by using [name] as key, and setting it to "value"
        // this way, only the field that was changed in form is updated, and old values of form are retained
        // without "...prevFormData", previous values will not be stored upon change in any field
        setFormData((prevFormData) => 
        ({
            ...prevFormData, 
            [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
        // check if every field filled, and passwords match
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.DOB) newErrors.DOB = 'Date of Birth is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        
        setErrors(newErrors);

        // if newErrors remains empty, {}, means no error were produced and all is fine
        if (Object.keys(newErrors).length ===0){
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nDate of Birth: ${formData.DOB}\nRole: ${formData.role}`)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/* bind label using htmlFor, to input field with matching id, in this case "name" */}
                <label htmlFor="name">
                    Name:
                    <input 
                        type="text"
                        id="name"
                        // important to keep this name attribute same as variables defined in formData object
                        name="name"
                        // initial value of field, is set using value
                        value={formData.name}
                        // when value of field changes, call this function
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </label>
            </div>

            <div>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </label>
            </div>

            <div>
                <label htmlFor="date">
                    Date of Birth:
                    <input
                        type="date"
                        id="date"
                        name="DOB"
                        value={formData.DOB}
                        onChange={handleChange}
                    />
                    {errors.DOB && <p style={{ color: 'red' }}>{errors.DOB}</p>}
                </label>
            </div>

            <div>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </label>
            </div>

            <div>
                <label htmlFor="confirmPassword">
                    Confirm Password:
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                </label>
            </div>

            <div>
                <label htmlFor="role">
                    Role:
                    <select 
                        id="role"
                        name="role"
                        value={formData.value}
                        onChange={handleChange}
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                    {errors.role && <p style={{ color: 'red' }}>{errors.role}</p>}
                </label>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}