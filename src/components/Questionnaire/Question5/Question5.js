import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question5(props) {
	const { setFormData, formData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		navigate('/complete');
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<div className='questionnaire'>
			<p className='liability'>
				This form is not a substitute for prefessional care or emergency
				response services. Patients with none of the following symptoms may
				still require serious mediacal attention.
			</p>

			<div className='question-box'>
				<p className='question-title'>Additional Notes</p>
				<p className='question'>Is there anything else? </p>
				<p className='question'>
					Any symptoms not covered, or specific responses that may be noteworthy
					later? Any medical history or information that you want to remember to
					share with the doctor? If so, there is space to record it here.
				</p>
			</div>
			<form className='notesform' onSubmit={handleSubmit}>
				<label htmlFor='notes'>Additional Notes: </label>
				<input type='text' name='additional_notes' onChange={handleChange} />
				<button className='question-submit' type='submit'>
					Next
				</button>
			</form>
		</div>
	);
}
export default Question5;
