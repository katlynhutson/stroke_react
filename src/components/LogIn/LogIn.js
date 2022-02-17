import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../apiConfig';

const LogIn = ({ handleSetLoggedIn }) => {
	const initialCredentials = {
		email: '',
		password: '',
	};

	const navigate = useNavigate();
	const [credentials, setCredentials] = useState(initialCredentials);

	const handleChange = (event) => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(API_URL + 'token/login/', {
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.status === 200) {
				const data = await response.json();

				handleSetLoggedIn(data.auth_token);

				navigate('/');
			}
		} catch (error) {}
	};

	return (
		<div className='create'>
			<form className='createform' onSubmit={handleLogin}>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					required
					name='email'
					value={credentials.email}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					required
					name='password'
					value={credentials.password}
					onChange={handleChange}
				/>
				<button className='submit-create' type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

export default LogIn;
