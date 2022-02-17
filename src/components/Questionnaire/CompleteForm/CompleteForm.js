import { useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from '../../../questionnaireContext';
import { useContext, useEffect, useState } from 'react';
import API_URL from '../../../apiConfig';

function CompleteForm(props) {
	const { formData, loggedIn } = useContext(QuestionnaireContext);
	const [dataDetail, setDataDetail] = useState(null);
	const navigate = useNavigate();

	const postDataDetail = async () => {
		const data = formData;
		try {
			const response = await fetch(`${API_URL}data/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			console.log(response);
			if (response.status === 201) {
				const data = await response.json();
				console.log(data);
				setDataDetail(data);
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
				console.log(data);

				navigate(`/previousevents/${data.id}`);
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
			<h2>Results</h2>
			<h3>Time of Onset</h3>
			<p>{dataDetail.onset_time}</p>
			<h3>Facial Droop</h3>
			<p>{dataDetail.facial_droop.toString()}</p>
			<h3>Arm Drift</h3>
			<p>{dataDetail.arm_drift.toString()}</p>
			<h3>Speech</h3>
			<p>{dataDetail.speech.toString()}</p>
			<h3>Additional Notes</h3>
			<p>{dataDetail.additional_notes}</p>
			<button onClick={handleCreate} disabled={loggedIn}>
				Create Account
			</button>
			<button onClick={handlePost} disabled={!loggedIn}>
				I'm already logged In
			</button>
		</div>
	);
}

export default CompleteForm;
