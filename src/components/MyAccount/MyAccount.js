import { useState, useContext, useEffect } from 'react';
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

				const sorted = data.filter((obj) => obj.owner.includes(username));
				console.log(sorted);
				setPreviousEvents(sorted);
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
			<h2>Prior Events</h2>
			<p>{previousEvents.toString()}</p>
		</div>
	);
};

export default MyAccount;
