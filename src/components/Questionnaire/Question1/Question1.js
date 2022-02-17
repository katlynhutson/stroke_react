import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question1(props) {
	const { formData, setFormData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/2');
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<main>
			<div>
				<p>
					This form is not a substitute for prefessional care or emergency
					response services. Patients with none of the following symptoms may
					still require serious mediacal attention.
				</p>
				<h2>Time of Onset</h2>
				<h4>
					What time did the patient begin to experience neurological symptoms?
				</h4>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='onset_time'>Select a Time: </label>
				<input
					type='time'
					id='onset_time'
					name='onset_time'
					onChange={handleChange}
					value={formData.onset_time}
					required></input>

				<button type='submit'>Next</button>
			</form>
			<p>
				Do they have a headache? Double-vision? Weakness or numbness? Memory
				loss? Issues with speech? Brain fog? Lack of coordination? When did it
				start?
			</p>
			<p>
				The time of onset of neurological symptoms is one of the key deciders in
				stroke treatment. Try to be as accurate as possible. If no symptoms were
				noted prior, simply record the current time.
			</p>
		</main>
	);
}

export default Question1;
