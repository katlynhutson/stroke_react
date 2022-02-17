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
				<h2>Impacted Speech</h2>
				<h4>
					Have the patient say, "You can't teach an old dog new tricks," or some
					other simple, familiar saying. Does the patient slur the words, get
					some words wrong, or are they unable to speak?
				</h4>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='speech'>Speech: </label>
				<label htmlFor='speech-yes'>Yes(Abnormal)</label>
				<input
					type='radio'
					id='speech-yes'
					name='speech'
					value={true}
					checked={formData.speech === true}
					onChange={handleChange}
				/>
				<label htmlFor='speech-no'>No(Normal)</label>
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
			<p>
				If you answered yes to this question, please call 911. With only one
				abnormal response, there is a 72% chance that the patient is having an
				ischemic stroke.
			</p>
		</main>
	);
}

export default Question4;
