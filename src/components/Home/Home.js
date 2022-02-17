import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';

function Home(props) {
	const { loggedIn } = useContext(QuestionnaireContext);
	return (
		<main>
			<p>
				If you believe you or a loved one is having a stroke, call 911
				immediately. Every second counts.
			</p>

			<div>
				<Link to='/question/1'>
					Tap to start suspected stroke questionnaire
				</Link>
			</div>
			{!loggedIn ? (
				<div>
					<Link to='/login'>
						Already have an account? Log in before proceeding.
					</Link>
				</div>
			) : null}
		</main>
	);
}

export default Home;
