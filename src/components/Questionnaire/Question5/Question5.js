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
		<main>
			<div>
				<p>
					This form is not a substitute for prefessional care or emergency
					response services. Patients with none of the following symptoms may
					still require serious mediacal attention.
				</p>
			</div>
			<div>
				<h2>Additional Notes</h2>
				<h4>Is there anything else? </h4>
				<p>
					Any symptoms not covered, or specific responses that may be noteworthy
					later? Any medical history or information that you want to remember to
					share with the doctor? If so, there is space to record it here.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='notes'>Additional Notes: </label>
				<input type='text' name='additional_notes' onChange={handleChange} />
				<button type='submit'>Next</button>
			</form>
		</main>
	);
}
export default Question5;
