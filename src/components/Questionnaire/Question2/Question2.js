import { useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from '../../../questionnaireContext';
import { useContext } from 'react';

function Question2(props) {
	const { formData, setFormData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/3');
	};

	const handleChange = (event) => {
		if (formData.facial_droop) {
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
				<p className='question-title'>Facial Droop</p>
				<p className='question'>
					Have the patient smile or show their teeth. Does one side not move as
					well as the other? Does it seem to droop?
				</p>
			</div>
			<form className='buttonform' onSubmit={handleSubmit}>
				<label htmlFor='facial-droop'>Facial Droop: </label>
				<label htmlFor='facial-droop-yes'>Yes(Abnormal)</label>
				<input
					type='radio'
					id='facial-droop-yes'
					name='facial_droop'
					value={true}
					checked={formData.facial_droop === true}
					onChange={handleChange}
				/>
				<label htmlFor='facial-droop-no'>No(Normal)</label>
				<input
					type='radio'
					id='facial-droop-no'
					name='facial_droop'
					value={false}
					checked={formData.facial_droop === false}
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

export default Question2;
