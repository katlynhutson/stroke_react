import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../../questionnaireContext';

function Question5(props) {
	const { fiveData, setFiveData } = useContext(QuestionnaireContext);

	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/complete');
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
				<label for='notes'>Additional Notes: </label>
				<input type='text' />
				<button type='submit'>Next</button>
			</form>
		</main>
	);
}
export default Question5;
