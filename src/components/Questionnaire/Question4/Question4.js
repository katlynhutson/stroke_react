import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question4(props) {
	const { fourData, setFourData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/question/5');
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
				<h2>Question 4</h2>
				<p>This is question 4</p>
			</div>
			<form onSubmit={handleSubmit}>
				<label for='speech'>Speech: </label>
				<label for='speech-yes'>Yes</label>
				<input type='radio' id='speech-yes' name='yes' value='True' />
				<label for='speech-no'>No</label>
				<input type='radio' id='speech-no' name='no' value='True' />

				<button type='submit'>Next</button>
			</form>
		</main>
	);
}

export default Question4;
