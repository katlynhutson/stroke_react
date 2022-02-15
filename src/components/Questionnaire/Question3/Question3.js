import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question3(props) {
	const { threeData, setThreeData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/question/4');
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
				<label for='arm-drift'>Arm-Drift: </label>
				<label for='arm-drift-yes'>Yes</label>
				<input type='radio' id='arm-drift-yes' name='yes' value='True' />
				<label for='arm-drift-no'>No</label>
				<input type='radio' id='arm-drift-no' name='no' value='True' />

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question3;
