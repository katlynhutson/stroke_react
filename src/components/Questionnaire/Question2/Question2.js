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
		<main>
			<div>
				<p>
					This form is not a substitute for prefessional care or emergency
					response services. Patients with none of the following symptoms may
					still require serious mediacal attention.
				</p>
			</div>
			<div>
				<h2>Question 2</h2>
				<p>This is question 2</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='facial-droop'>Facial Droop: </label>
				<label htmlFor='facial-droop-yes'>Yes</label>
				<input
					type='radio'
					id='facial-droop-yes'
					name='facial_droop'
					value={true}
					checked={formData.facial_droop === true}
					onChange={handleChange}
				/>
				<label htmlFor='facial-droop-no'>No</label>
				<input
					type='radio'
					id='facial-droop-no'
					name='facial_droop'
					value={false}
					checked={formData.facial_droop === false}
					onChange={handleChange}
				/>

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question2;
