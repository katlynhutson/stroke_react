import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question3(props) {
	const { threeData, setThreeData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate('/question/4');
	};

	const handleChange = (event) => {
		if (threeData) {
			setThreeData(false);
		} else {
			setThreeData(true);
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
				<h2>Question 3</h2>
				<p>This is question 3</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='arm-drift'>Arm-Drift: </label>
				<label htmlFor='arm-drift-yes'>Yes</label>
				<input
					type='radio'
					id='arm-drift-yes'
					name='yes'
					value={true}
					checked={threeData === true}
					onChange={handleChange}
				/>
				<label htmlFor='arm-drift-no'>No</label>
				<input
					type='radio'
					id='arm-drift-no'
					name='no'
					value={false}
					checked={threeData === false}
					onChange={handleChange}
				/>

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question3;
