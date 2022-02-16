import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question4(props) {
	const { formData, setFormData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/5');
	};

	const handleChange = (event) => {
		if (formData.speech) {
			setFormData({ ...formData, [event.target.name]: false });
		} else {
			setFormData({ ...formData, [event.target.name]: true });
		}
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
			<div>
				<h2>Question 4</h2>
				<p>This is question 4</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='speech'>Speech: </label>
				<label htmlFor='speech-yes'>Yes</label>
				<input
					type='radio'
					id='speech-yes'
					name='speech'
					value={true}
					checked={formData.speech === true}
					onChange={handleChange}
				/>
				<label htmlFor='speech-no'>No</label>
				<input
					type='radio'
					id='speech-no'
					name='speech'
					value={false}
					checked={formData.speech === false}
					onChange={handleChange}
				/>

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question4;
