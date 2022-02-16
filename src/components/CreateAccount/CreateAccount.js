import API_URL from '../../apiConfig';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';

function CreateAccount(props) {
	const initalAccount = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [account, setAccount] = useState(initalAccount);

	const handleChange = (event) => {
		setAccount({ ...account, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(account);
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
				/>
				<button type='submit' disabled={error}>
					CreateAccount
				</button>
			</form>
		</div>
	);
}

export default CreateAccount;
