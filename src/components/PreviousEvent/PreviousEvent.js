import { useParams } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { useState, useEffect, useContext } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';

const PreviousEvent = ({ getUsername }) => {
	const [previousEvent, setPreviousEvent] = useState(null);
	const { username } = useContext(QuestionnaireContext);
	const { id } = useParams();

	const getPreviousEvent = async () => {
		try {
			const response = await fetch(`${API_URL}questionnaires/${id}`);
			if (response.status === 200) {
				const data = await response.json();

				setPreviousEvent(data);
			}
		} catch (error) {}
	};

	useEffect(() => {
		getPreviousEvent();
		getUsername();
	}, []);

	if (!previousEvent) {
		return <p>no</p>;
	}
	if (previousEvent.owner !== username) {
		return <p> no again</p>;
	}

	return (
		<div>
			<h2>Previous Event</h2>
			<h3>Created On</h3>
			<p>{previousEvent.created_at}</p>
			<h3>onset time</h3>
			<p>{previousEvent.onset_time}</p>
			<h3>facial droop</h3>
			<p>{previousEvent.facial_droop.toString()}</p>
			<h3>arm drift</h3>
			<p>{previousEvent.arm_drift.toString()}</p>
			<h3>speech</h3>
			<p>{previousEvent.speech.toString()}</p>
			<h3>additional notes</h3>
			<p>{previousEvent.additional_notes}</p>
			<h3>Created By</h3>
			<p>{previousEvent.owner}</p>
		</div>
	);
};

export default PreviousEvent;
