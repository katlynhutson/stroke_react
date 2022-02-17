import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question3(props) {
	const { formData, setFormData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/4');
	};

	const handleChange = (event) => {
		if (formData.arm_drift) {
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
				<p className='question-title'>Arm Drift</p>
				<p className='question'>
					Have the patient close their eyes and hold their arms straight out in
					front of them with their palms facing up for about 10 seconds. Does
					one arm not move, or drift down compared with the other arm?
				</p>
				<p className='question'>Both arms should move equally or not at all</p>
			</div>
			<form className='buttonform' onSubmit={handleSubmit}>
				<label htmlFor='arm-drift'>Arm Drift: </label>
				<label htmlFor='arm-drift-yes'>Yes(Abnormal)</label>
				<input
					type='radio'
					id='arm-drift-yes'
					name='arm_drift'
					value={true}
					checked={formData.arm_drift === true}
					onChange={handleChange}
				/>
				<label htmlFor='arm-drift-no'>No(Normal)</label>
				<input
					type='radio'
					id='arm-drift-no'
					name='arm_drift'
					value={false}
					checked={formData.arm_drift === false}
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

export default Question3;
