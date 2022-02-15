import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<main>
			<div>
				<div>
					<p>
						If you believe you or a loved one is having a stroke, call 911
						immediately. Every second counts.
					</p>
				</div>

				<div>
					<Link to='/question/1'>
						Tap to start suspected stroke questionnaire
					</Link>
				</div>
			</div>
		</main>
	);
}

export default Home;
