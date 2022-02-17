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
		return <p className='loading'>Loading</p>;
	}

	return (
		<div className='myaccount'>
			<p className='myaccount-title'>My Records</p>
			<p className='myaccount-new'>Newest</p>
			{previousEvents.map((previous, index) => {
				return (
					<div className='card' key={previous.id}>
						<Link to={`/previousevents/${previous.id}`}>{index + 1}</Link>
						<p className='direction'>Click for event log</p>
					</div>
				);
			})}
			<p className='myaccount-old'>Oldest</p>
		</div>
	);
};

export default MyAccount;
