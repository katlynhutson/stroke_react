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
		return <p>no</p>;
	}

	return (
		<div>
			<p>Screenshot this screen for a copy of this record</p>
			<p>
				Make an account with us and we'll save a copy of this report for you.
			</p>

			<h2>Results</h2>
			<h3>When Form Completed</h3>
			<p>{time.toString()}</p>
			<h3>Time of Symptom Onset</h3>
			<p>{dataDetail.onset_time}</p>
			<h3>Facial Droop</h3>
			{dataDetail.facial_droop ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>Arm Drift</h3>
			{dataDetail.arm_drift ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>Speech</h3>
			{dataDetail.speech ? <p>Abnormal</p> : <p>Normal</p>}
			<h3>Additional Notes</h3>
			<p>{dataDetail.additional_notes}</p>
			<button onClick={handleCreate} disabled={loggedIn}>
				Submit and Create Account
			</button>
			<button onClick={handlePost} disabled={!loggedIn}>
				Submit to My Account
			</button>
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
}

export default CompleteForm;

// resource to grab timezone --> https://attacomsian.com/blog/javascript-current-timezone#:~:text=To%20get%20the%20current%20browser's,UTC%20time%20and%20local%20time.
