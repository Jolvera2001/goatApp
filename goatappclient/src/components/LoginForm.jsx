import { useState } from 'react';

function LoginForm() {
    // setting state for form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    });

    const handleInputChanges = (event) => {
        const {email, value} = event.target;
        setFormData({...formData, [email]: value});

        setFormErrors({...formErrors, [email]: ''})
    };

    const validateForm = () => {
        const errors = {};

        // If 'email' is empty
        if (!formData.email.trim()) {
            errors.name = 'Email is required';
        }

        // check if password is empty
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    // Now we handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // validate form
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            // form is valid, proceed
            console.log('Form data:', formData);
        } else {
            // update formErrors state with validation errors
            setFormErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/*Name*/}
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChanges}
                />
                {formErrors.email && <div className='error'>{formErrors.email}</div>}
            </div>

            {/* password */}
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type='text'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleInputChanges}
                />
                {formErrors.password && <div className='error'>{formErrors.password}</div>}
            </div>

            {/* Submit Button */}
            <button type='submit'>Submit</button>
        </form>
    );
}

export default LoginForm