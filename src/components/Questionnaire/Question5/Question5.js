import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';
import API_URL from '../../../apiConfig';

function Question5(props) {
	const {
		fiveData,
		setFiveData,
		fourData,
		threeData,
		twoData,
		oneData,
		formData,
		setFormData,
	} = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		setFormData({
			facial_droop: twoData,
			arm_drift: threeData,
			speech: fourData,
			onset_time: oneData,
			additional_notes: fiveData,
		});

		navigate('/complete');
	};

	const handleChange = (event) => {
		setFiveData(event.target.value);
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
				<h2>Question 5</h2>
				<p>This is question 5</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='notes'>Additional Notes: </label>
				<input type='text' onChange={handleChange} />
				<button type='submit'>Next</button>
			</form>
		</main>
	);
}
export default Question5;
