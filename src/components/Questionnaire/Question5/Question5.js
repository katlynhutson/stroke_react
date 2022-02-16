import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question5(props) {
	const {
		// fiveData,
		// setFiveData,
		// fourData,
		// threeData,
		// twoData,
		// oneData,
		setFormData,
		formData,
	} = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		// setFormData({
		// 	facial_droop: twoData,
		// 	arm_drift: threeData,
		// 	speech: fourData,
		// 	onset_time: oneData,
		// 	additional_notes: fiveData,
		// });
		navigate('/complete');
		// const data = formData;

		// try {
		// 	const response = await fetch(API_URL + 'data/', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data),
		// 	});
		// 	console.log(response);
		// 	if (response.status === 201) {
		// 		const data = await response.json();

		// 		setDataId(data.id);
		// 		navigate('/complete');
		// 	}
		// } catch (error) {}
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
				<h2>Question 5</h2>
				<p>This is question 5</p>
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
