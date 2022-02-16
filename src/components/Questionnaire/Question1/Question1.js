import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question1(props) {
	const { oneData, setOneData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/2');
	};

	const handleChange = (event) => {
		setOneData(event.target.value);
	};

	return (
		<main>
			<div>
				<p>
					This form is not a substitute for prefessional care or emergency
					response services. Patients with none of the following symptoms may
					still require serious mediacal attention.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='time-of-onset'>Select a Time: </label>
				<input
					type='time'
					id='time'
					name='time'
					onChange={handleChange}
					value={oneData}
					required></input>

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question1;
