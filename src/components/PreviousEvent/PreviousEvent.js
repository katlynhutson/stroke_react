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
		return <p className='loading'>Loading.</p>;
	}
	if (previousEvent.owner !== username) {
		return <p className='loading'> Loading.</p>;
	}

	return (
		<div className='submitted-form'>
			<div className='form-box'>
				<p className='form-title'>Previous Event:</p>
				<p className='section-title'>Created On:</p>
				<p className='form-data'>{time.toString()}</p>
				<p className='section-title'>Time of Onset:</p>
				<p className='form-data'>{previousEvent.onset_time}</p>
				<p className='section-title'>Facial Droop:</p>
				{previousEvent.facial_droop ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Arm Drift:</p>
				{previousEvent.arm_drift ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Speech:</p>
				{previousEvent.speech ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Additional Notes:</p>
				<p className='form-data'>{previousEvent.additional_notes}</p>
				<p className='section-title'>Created By:</p>
				<p className='form-data'>user: {previousEvent.owner}</p>
				<p className='section-title'>Cincinnati Prehosptal Stroke Score:</p>
				<div className='form-data'>
					<button className='form-submit' onClick={getScore}>
						Display Score
					</button>
				</div>
				{oneHundred ? (
					<p className='message'>
						Based off of these results, the patient's risk of currently
						experiencing an acute stroke is over 85%.
					</p>
				) : null}
				{sixtySix ? (
					<p className='message'>
						Based off of these results, the patient's risk of currently
						experiencing a stroke is high.
					</p>
				) : null}
				{thirtythree ? (
					<p className='message'>
						Based off of these results, the patient's risk of currently
						experiencing an ischemic stroke is 72%.
					</p>
				) : null}
				{zero ? (
					<p className='message'>
						Based off of these results, the patient does not fall on the
						Cincinnati Prehospital Stroke Scale. BUT, please keep in mind, they
						may still be experiencing a neurological event, or another serious
						medical event.
					</p>
				) : null}
			</div>
		</div>
	);
};

export default PreviousEvent;
