import { Link, useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from '../../../questionnaireContext';
import { useContext } from 'react';

function CompleteForm(props) {
	const { formData } = useContext(QuestionnaireContext);

	return (
		<div>
			<h2>Results</h2>
			<h3>Time of Onset</h3>
			<p>{formData.onset_time}</p>
			<h3>Facial Droop</h3>
			<p>{formData.facial_droop.toString()}</p>
			<h3>Arm Drift</h3>
			<p>{formData.arm_drift.toString()}</p>
			<h3>Speech</h3>
			<p>{formData.speech.toString()}</p>
			<h3>Additional Notes</h3>
			<p>{formData.additional_notes}</p>
		</div>
	);
}

export default CompleteForm;
