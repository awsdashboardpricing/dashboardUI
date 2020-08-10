import axios from 'axios';

async function LoginFetchAction({
    email,
    password
}) {
    const response = await axios.get('http://localhost:3000/login', {username: email, password})
    return response
}

export default LoginFetchAction;