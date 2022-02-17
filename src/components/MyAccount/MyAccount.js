import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuestionnaireContext } from '../../questionnaireContext';
import API_URL from '../../apiConfig';

const MyAccount = ({ getUsername }) => {
	const [previousEvents, setPreviousEvents] = useState(null);
	const { username } = useContext(QuestionnaireContext);

	const getPreviousEvents = async () => {
		try {
			const response = await fetch(`${API_URL}questionnaires/`);
			if (response.status === 200) {
				const data = await response.json();

				const filtered = data.filter((obj) => obj.owner.includes(username));

				setPreviousEvents(filtered);
			}
		} catch (error) {}
	};

	useEffect(() => {
		getUsername();
		getPreviousEvents();
	}, []);

	if (!previousEvents) {
		return <p>not ready</p>;
	}

	return (
		<div>
			<h2>My Records</h2>
			<h3>Earliest</h3>
			{previousEvents.map((previous, index) => {
				return (
					<div key={previous.id}>
						<Link to={`/previousevents/${previous.id}`}>{index + 1}</Link>
					</div>
				);
			})}
			<h3>Latest</h3>
		</div>
	);
};

export default MyAccount;
