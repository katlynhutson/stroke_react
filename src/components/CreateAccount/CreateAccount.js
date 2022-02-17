import API_URL from '../../apiConfig';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';

const CreateAccount = ({ handleSetLoggedIn }) => {
	const { formData } = useContext(QuestionnaireContext);

	const initalAccount = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [djangoError, setDjangoError] = useState(false);
	const [account, setAccount] = useState(initalAccount);

	const handleChange = (event) => {
		setAccount({ ...account, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(account);
		try {
			const response = await fetch(API_URL + 'users/', {
				method: 'POST',
				body: JSON.stringify(account),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response);
			if (response.status === 201) {
				const login = { email: account.email, password: account.password };

				try {
					const response = await fetch(API_URL + 'token/login/', {
						method: 'POST',
						body: JSON.stringify(login),
						headers: {
							'Content-Type': 'application/json',
						},
					});
					if (response.status === 200) {
						const data = await response.json();
						console.log(data.auth_token);
						handleSetLoggedIn(data.auth_token);
						console.log('Success!');

						console.log(formData);
						try {
							const response = await fetch(API_URL + 'questionnaires/', {
								method: 'POST',
								headers: {
									Authorization: `Token ${localStorage.getItem('token')}`,
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(formData),
							});
							if (response.status === 201) {
								const data = await response.json();
								console.log(data);

								navigate(`/previousevents/${data.id}`);
							}
						} catch (error) {}
					}
				} catch (error) {}
			} else {
				setDjangoError(true);
			}
		} catch (error) {}
	};

	const handleMatch = (event) => {
		if (account.password !== account.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};
	return (
		<div>
			<h2>Create Account</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					required
					name='username'
					value={account.username}
					onChange={handleChange}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					required
					value={account.email}
					name='email'
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					required
					name='password'
					value={account.password}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Confirm Password</label>
				<input
					type='password'
					required
					name='re_password'
					value={account.re_password}
					onChange={handleChange}
					onBlur={handleMatch}
					minLength='8'
				/>
				<button type='submit' disabled={error}>
					CreateAccount
				</button>
			</form>
			{djangoError ? (
				<div>
					<p>
						Passwords must not be similar to the username, too common, or all
						numbers!
					</p>
					<p>Please change your password to reflect these requirements</p>
				</div>
			) : (
				<p>
					Passwords must not be similar to the username, too common, or all
					numbers.
				</p>
			)}
			{error ? <p>passwords must match</p> : <p></p>}
		</div>
	);
};

export default CreateAccount;
