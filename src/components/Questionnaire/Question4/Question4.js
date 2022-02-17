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
		<div className='questionnaire'>
			<p className='liability'>
				This form is not a substitute for prefessional care or emergency
				response services. Patients with none of the following symptoms may
				still require serious mediacal attention.
			</p>

			<div className='question-box'>
				<p className='question-title'>Impacted Speech</p>
				<p className='question'>
					Have the patient say, "You can't teach an old dog new tricks," or some
					other simple, familiar saying. Does the patient slur the words, get
					some words wrong, or are they unable to speak?
				</p>
			</div>
			<form className='buttonform' onSubmit={handleSubmit}>
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

				<button className='question-submit' type='submit'>
					Next
				</button>
			</form>
			<p className='question-warning'>
				If you answered yes to this question, please call 911. With only one
				abnormal response, there is a 72% chance that the patient is having an
				ischemic stroke.
			</p>
		</div>
	);
}

export default Question4;
