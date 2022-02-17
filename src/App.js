import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import LogIn from './components/LogIn/LogIn';
import MyAccount from './components/MyAccount/MyAccount';

import './style/header.css';
import './style/home.css';
import './style/question.css';
import './style/submitted-form.css';
import './style/create-account.css';
import './style/about.css';
import './style/my-account.css';

import { Animated } from 'react-animated-css';
//https://www.npmjs.com/package/react-animated-css

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

	const [userId, setUserId] = useState(null);

	const navigate = useNavigate();

	const getUsername = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200) {
				const data = await response.json();

				setUsername(data.username);
			} else {
				setUsername(null);
				setLoggedIn(false);

				localStorage.clear();
			}
		} catch (error) {}
	};

	const getUserId = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200) {
				const data = await response.json();

				setUserId(data.id);
			} else {
				setUserId(null);
				setLoggedIn(false);

				localStorage.clear();
			}
		} catch (error) {}
	};

	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		setLoggedIn(true);
		return;
		//referenced token auth md for this functionality
	};

	const handleLogout = async () => {
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				body: JSON.stringify(localStorage.getItem('token')),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				setUsername(null);
				setLoggedIn(false);

				localStorage.clear();
				navigate('/login');
			}
		} catch (error) {}
		//referenced token auth md for this functionality
	};

	useEffect(() => {
		if (loggedIn) {
			getUsername();
			getUserId();
		}
	}, [loggedIn]);

	return (
		<div className='overall-container'>
			<QuestionnaireContext.Provider
				value={{
					formData,
					setFormData,
					username,
					setUsername,
					loggedIn,
					setLoggedIn,
					userId,
				}}>
				<header>
					<Animated animationIn='bounceInDown' className='title'>
						<h1>Stroke Response</h1>
					</Animated>

					<Navigation handleLogout={handleLogout} />
				</header>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />

					<Route path='/question/1' element={<Question1 />} />

					<Route path='/question/2' element={<Question2 />} />
					<Route path='/question/3' element={<Question3 />} />
					<Route path='/question/4' element={<Question4 />} />
					<Route path='/question/5' element={<Question5 />} />

					<Route path='/complete' element={<CompleteForm />} />
					<Route
						path='/createaccount'
						element={<CreateAccount handleSetLoggedIn={handleSetLoggedIn} />}
					/>
					<Route
						path='/previousevents/:id'
						element={<PreviousEvent getUsername={getUsername} />}
					/>
					<Route
						path='/login'
						element={<LogIn handleSetLoggedIn={handleSetLoggedIn} />}
					/>
					<Route
						path='/myaccount/:id'
						element={<MyAccount getUsername={getUsername} />}
					/>
				</Routes>
			</QuestionnaireContext.Provider>
		</div>
	);
}

export default App;
