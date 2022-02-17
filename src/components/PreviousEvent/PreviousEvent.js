import { useParams } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { useState, useEffect, useContext } from 'react';
import { QuestionnaireContext } from '../../questionnaireContext';

const PreviousEvent = ({ getUsername }) => {
	const [previousEvent, setPreviousEvent] = useState(null);
	const { username } = useContext(QuestionnaireContext);
	const [time, setTime] = useState(false);
	const [oneHundred, setOneHundred] = useState(false);
	const [sixtySix, setSixtySix] = useState(false);
	const [thirtythree, setThirtyThree] = useState(false);
	const [zero, setZero] = useState(false);
	const { id } = useParams();

	const getScore = () => {
		if (
			!previousEvent.facial_droop &&
			!previousEvent.arm_drift &&
			!previousEvent.speech
		) {
			setZero(true);
		} else if (
			previousEvent.facial_droop &&
			!previousEvent.arm_drift &&
			!previousEvent.speech
		) {
			setThirtyThree(true);
		} else if (
			previousEvent.facial_droop &&
			previousEvent.arm_drift &&
			!previousEvent.speech
		) {
			setSixtySix(true);
		} else if (
			previousEvent.facial_droop &&
			previousEvent.arm_drift &&
			previousEvent.speech
		) {
			setOneHundred(true);
		} else if (
			previousEvent.facial_droop &&
			!previousEvent.arm_drift &&
			previousEvent.speech
		) {
			setSixtySix(true);
		} else if (
			!previousEvent.facial_droop &&
			previousEvent.arm_drift &&
			previousEvent.speech
		) {
			setSixtySix(true);
		} else if (
			!previousEvent.facial_droop &&
			!previousEvent.arm_drift &&
			previousEvent.speech
		) {
			setThirtyThree(true);
		} else if (
			!previousEvent.facial_droop &&
			previousEvent.arm_drift &&
			!previousEvent.speech
		) {
			setThirtyThree(true);
		}
	};

	const getPreviousEvent = async () => {
		try {
			const response = await fetch(`${API_URL}questionnaires/${id}`);
			if (response.status === 200) {
				const data = await response.json();

				const local = await new Date(data.created_at);

				setPreviousEvent(data);

				setTime(local);
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
			<p>{time.toString()}</p>
			<h3>onset time</h3>
			<p>{previousEvent.onset_time}</p>
			<h3>facial droop</h3>
			{previousEvent.facial_droop ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>arm drift</h3>
			{previousEvent.arm_drift ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>speech</h3>
			{previousEvent.speech ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>additional notes</h3>
			<p>{previousEvent.additional_notes}</p>
			<h3>Created By</h3>
			<p>user: {previousEvent.owner}</p>
			<h3>Cincinnati Prehosptal Stroke Score</h3>
			<button onClick={getScore}>Display</button>
			{oneHundred ? (
				<p>
					Based off of these results, the patient's risk of currently
					experiencing an acute stroke is over 85%. Please call 911 immediately
					with this information.
				</p>
			) : null}
			{sixtySix ? (
				<p>
					Based off of these results, the patient's risk of currently
					experiencing a stroke is high. Please call 911 immediately with this
					information.
				</p>
			) : null}
			{thirtythree ? (
				<p>
					Based off of these results, the patient's risk of currently
					experiencing an ischemic stroke is 72%. Please call 911 immediately
					with this information.
				</p>
			) : null}
			{zero ? (
				<p>
					Based off of these results, the patient does not fall on the
					Cincinnati Prehospital Stroke Scale. BUT, please keep in mind, they
					may still be experiencing a neurological event, or another serious
					medical event.
				</p>
			) : null}
		</div>
	);
};

export default PreviousEvent;
