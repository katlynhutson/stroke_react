import { useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from '../../../questionnaireContext';
import { useContext, useEffect, useState } from 'react';
import API_URL from '../../../apiConfig';

function CompleteForm(props) {
	const { formData, loggedIn, userId } = useContext(QuestionnaireContext);
	const [dataDetail, setDataDetail] = useState(null);
	const [oneHundred, setOneHundred] = useState(false);
	const [sixtySix, setSixtySix] = useState(false);
	const [thirtythree, setThirtyThree] = useState(false);
	const [zero, setZero] = useState(false);
	const [time, setTime] = useState(false);
	const navigate = useNavigate();

	const getScore = () => {
		if (!formData.facial_droop && !formData.arm_drift && !formData.speech) {
			setZero(true);
		} else if (
			formData.facial_droop &&
			!formData.arm_drift &&
			!formData.speech
		) {
			setThirtyThree(true);
		} else if (
			formData.facial_droop &&
			formData.arm_drift &&
			!formData.speech
		) {
			setSixtySix(true);
		} else if (formData.facial_droop && formData.arm_drift && formData.speech) {
			setOneHundred(true);
		} else if (
			formData.facial_droop &&
			!formData.arm_drift &&
			formData.speech
		) {
			setSixtySix(true);
		} else if (
			!formData.facial_droop &&
			formData.arm_drift &&
			formData.speech
		) {
			setSixtySix(true);
		} else if (
			!formData.facial_droop &&
			!formData.arm_drift &&
			formData.speech
		) {
			setThirtyThree(true);
		} else if (
			!formData.facial_droop &&
			formData.arm_drift &&
			!formData.speech
		) {
			setThirtyThree(true);
		}
	};

	const postDataDetail = async () => {
		const data = formData;
		getScore();
		try {
			const response = await fetch(`${API_URL}data/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.status === 201) {
				const data = await response.json();
				const local = await new Date(data.created_at);
				setDataDetail(data);

				setTime(local);
			}
		} catch (error) {}
	};

	const handleCreate = () => {
		navigate('/createaccount');
	};

	const handlePost = async () => {
		try {
			const response = await fetch(API_URL + 'questionnaires/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (response.status === 201) {
				const data = await response.json();

				navigate(`/myaccount/${userId}`);
			}
		} catch (error) {}
	};

	useEffect(() => {
		postDataDetail();
	}, []);

	if (!dataDetail) {
		return <p className='loading'>Loading</p>;
	}

	return (
		<div className='submitted-form'>
			{oneHundred ? (
				<p className='message'>
					Based off of these results, the patient's risk of currently
					experiencing an acute stroke is over 85%. Please call 911 immediately
					with this information.
				</p>
			) : null}
			{sixtySix ? (
				<p className='message'>
					Based off of these results, the patient's risk of currently
					experiencing a stroke is high. Please call 911 immediately with this
					information.
				</p>
			) : null}
			{thirtythree ? (
				<p className='message'>
					Based off of these results, the patient's risk of currently
					experiencing an ischemic stroke is 72%. Please call 911 immediately
					with this information.
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
			<p className='message'>
				Screenshot this screen for a copy of this record.
			</p>
			<p className='message'>
				Make an account with us, and we'll save a copy of this report for you.
			</p>

			<div className='form-box'>
				<p className='form-title'>Results:</p>
				<p className='section-title'>When Form Completed:</p>
				<p className='form-data'>{time.toString()}</p>
				<p className='section-title'>Time of Symptom Onset:</p>
				<p className='form-data'>{dataDetail.onset_time}</p>
				<p className='section-title'>Facial Droop:</p>
				{dataDetail.facial_droop ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Arm Drift:</p>
				{dataDetail.arm_drift ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Speech:</p>
				{dataDetail.speech ? (
					<p className='form-data'>Abnormal</p>
				) : (
					<p className='form-data'>Normal</p>
				)}
				<p className='section-title'>Additional Notes:</p>
				<p className='form-data'>{dataDetail.additional_notes}</p>
			</div>
			<button
				className='form-submit'
				onClick={handleCreate}
				disabled={loggedIn}>
				Submit and Create Account
			</button>
			<button className='form-submit' onClick={handlePost} disabled={!loggedIn}>
				Submit to My Account
			</button>
		</div>
	);
}

export default CompleteForm;

// resource to grab timezone --> https://attacomsian.com/blog/javascript-current-timezone#:~:text=To%20get%20the%20current%20browser's,UTC%20time%20and%20local%20time.
