import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { QuestionnaireContext } from './questionnaireContext';
import API_URL from './apiConfig';

import Question1 from './components/Questionnaire/Question1/Question1';
import Question2 from './components/Questionnaire/Question2/Question2';
import Question3 from './components/Questionnaire/Question3/Question3';
import Question4 from './components/Questionnaire/Question4/Question4';
import Question5 from './components/Questionnaire/Question5/Question5';
import CompleteForm from './components/Questionnaire/CompleteForm/CompleteForm';
import CreateAccount from './components/CreateAccount/CreateAccount';
import PreviousEvent from './components/PreviousEvent/PreviousEvent';

function App() {
	const initialData = {
		onset_time: '00:00',
		facial_droop: false,
		arm_drift: false,
		speech: false,
		additional_notes: '',
	};

	const [formData, setFormData] = useState(initialData);

	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

	const [username, setUsername] = useState(null);

	const getUsername = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				setUsername(data.username);
			} else {
				setUsername(null);
				setLoggedIn(false);

				localStorage.clear();
			}
		} catch (error) {}
	};

	return (
		<div>
			<header>
				<h1>STROKE RESPONSE</h1>
				<Navigation />
			</header>
			<QuestionnaireContext.Provider
				value={{
					formData,
					setFormData,
					username,
					setUsername,
					loggedIn,
					setLoggedIn,
					getUsername,
				}}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />

					<Route path='/question/1' element={<Question1 />} />

					<Route path='/question/2' element={<Question2 />} />
					<Route path='/question/3' element={<Question3 />} />
					<Route path='/question/4' element={<Question4 />} />
					<Route path='/question/5' element={<Question5 />} />

					<Route path='/complete' element={<CompleteForm />} />
					<Route path='/createaccount' element={<CreateAccount />} />
					<Route path='/previousevents/:id' element={<PreviousEvent />} />
				</Routes>
			</QuestionnaireContext.Provider>
		</div>
	);
}

export default App;
