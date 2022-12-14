export default function login_validate(values) {
    const errors = {};
    
    // validate email
    if (!values.email) {
        errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validate password
    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be greater than 8 character and less than 20 character';
    } else if (values.password.includes(' ')) {
        errors.password = 'Password must not contain space';
    }

    return errors;
}

export function register_validate(values) {
    const errors = {};

    // validate email
    if (!values.email) {
        errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    // validate Username
    if (!values.username) {
        errors.username = 'Username is Required';
    } else if (values.username.includes(' ')) {
        errors.username = 'Username must not contain space';
    }

    // validate password
    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be greater than 8 character and less than 20 character';
    } else if (values.password.includes(' ')) {
        errors.password = 'Password must not contain space';
    }

    // validate confirm password
    if (!values.cpassword) {
        errors.cpassword = 'Confirm Password is Required';
    } else if (values.cpassword != values.password) {
        errors.cpassword = 'Password does not match'
    }

    return errors;
}