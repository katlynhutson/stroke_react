import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';
import { Animated } from 'react-animated-css';
//https://www.npmjs.com/package/react-animated-css

function Home(props) {
	const { loggedIn } = useContext(QuestionnaireContext);
	return (
		<div className='home'>
			<p className='warning'>
				If you believe you or a loved one is having a stroke, call 911
				immediately. Every second counts.
			</p>

			<Animated className='start' animationIn='flash'>
				<Link to='/question/1'>
					Tap to start suspected stroke questionnaire
				</Link>
			</Animated>
			{!loggedIn ? (
				<div className='log-in'>
					<Link to='/login'>
						Already have an account? Log in before proceeding.
					</Link>
				</div>
			) : null}
		</div>
	);
}

export default Home;
