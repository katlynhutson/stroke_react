import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { QuestionnaireContext } from './questionnaireContext';

import Question1 from './components/Questionnaire/Question1/Question1';
import Question2 from './components/Questionnaire/Question2/Question2';
import Question3 from './components/Questionnaire/Question3/Question3';
import Question4 from './components/Questionnaire/Question4/Question4';
import Question5 from './components/Questionnaire/Question5/Question5';
import CompleteForm from './components/Questionnaire/CompleteForm/CompleteForm';
import CreateAccount from './components/CreateAccount/CreateAccount';

function App() {
	const initialOne = '00:00';
	const initialTwo = false;
	const initialThree = false;
	const initialFour = false;
	const initialFive = '';

	const initialForm = {};

	const [formData, setFormData] = useState(initialForm);

	const [formQuestionnaire, setFormQuestionnaire] = useState(initialForm);

	const [oneData, setOneData] = useState(initialOne);
	const [twoData, setTwoData] = useState(initialTwo);
	const [threeData, setThreeData] = useState(initialThree);
	const [fourData, setFourData] = useState(initialFour);
	const [fiveData, setFiveData] = useState(initialFive);

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

					formQuestionnaire,
					setFormQuestionnaire,
					oneData,
					setOneData,
					twoData,
					setTwoData,
					threeData,
					setThreeData,
					fourData,
					setFourData,
					fiveData,
					setFiveData,
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
				</Routes>
			</QuestionnaireContext.Provider>
		</div>
	);
}

export default App;
