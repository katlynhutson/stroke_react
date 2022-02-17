import React from 'react';

function About(props) {
	return (
		<div className='about'>
			<p className='about-title'>About</p>
			<p className='about-section'>
				Stroke Response is a tool to help assess possible stroke victims.
			</p>
			<p className='about-section'>
				This application utilizes the{' '}
				<a href='https://en.wikipedia.org/wiki/Cincinnati_Prehospital_Stroke_Scale'>
					Cincinnati Prehospital Stroke Scale
				</a>
				, a system for diagnosing a possible stroke outside of the hospital
				setting. The Cincinnati Prehospital Stroke Scale is commonly used by
				EMT's and 911 operators to determine aid in patient care and establish{' '}
				<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4608338/#:~:text=The%20sensitivity%20of%2093.19%25%20(95,%25%20(95%25%20Cl%3A%200.09'>
					stroke-risk level.
				</a>
			</p>
			<p className='about-section'>
				By filling out the questionnaire provided, a user of this application
				has the ability to implement the Cincinnati Prehospital Stroke Scale
				personally, and is prompted to record information crucial for possible
				subsequent patient care.
			</p>
			<p className='about-section'>
				Most notably, the recorded time of symptom onset will be one of the most
				important pieces of information for the healthcare provider. The amount
				of time the stroke symptoms have progressed are a crucial decider in
				course of treatment. The sooner the patient is brought in, the better
				their outlook.
			</p>
			<p className='about-section'>
				When faced with a crisis like a family memeber experiencing a possible
				stroke, it is normal to panic. Individuals may dismiss the severity of
				the symptoms, you may be in a dangerous environment, the symptoms may be
				confusing or subtle. People well-versed in possible stroke protocol may
				forget or abandon that same protocol during a crisis. By prompting the
				user with each question, and prompting them to record the time of
				symptom onset, this application is reducing the likelihood of human
				error to be expected during a stressful event.
			</p>
			<p className='creator-title'>Creator</p>
			<p className='creator-section'>
				Hi, I'm Katy, a software engineer. I created this application for
				myself.
			</p>
			<p className='creator-section'>
				I was the sole witness to a family member experiencing stroke symptoms
				in January of 2022. That family member was experiencing a TIA or
				"mini-stroke', with an outcome of no permanent damage.
			</p>
			<p className='creator-section'>
				I caught it, I knew something was very wrong, but I didn't do as much as
				I could have. We were extremely lucky that the outcome wasn't worse.
			</p>
			<p className='creator-section'>
				This application is my way of not only preventing my failure to respond
				from happening again, but my way of helping guide others who will one
				day go through the same.
			</p>
			<p className='creator-section'>
				This application can help in the way I once needed it.
			</p>
			<p className='future-title'>Future Directions</p>
			<p className='future-section'>
				In the future, I would like users to be able to update their event log
				to include the outcome. By recording the data we are currently, we have
				the ability to research correlations in onset time, and symptom
				frequency. Outcome data would allow for valuable research of the
				Cincinnati Prehospital Stroke Scale itself.
			</p>
			<p className='future-section'>
				Along the same lines, I am currently seeking any medical professionals,
				emergency responders, or individuals well-versed in stroke protocol to
				offer feedback. Is there anything else that would be useful to record?
				What other information could be of use?
			</p>
			<p className='future-section'>Any feedback would be much appreciated!</p>
			<a href='mailto:kmhutson5@att.net?subject = Feedback&body = Message'>
				Send Feedback
			</a>
			<p className='plug'>
				Katlyn Hutson is a Software Engineer in DFW, Texas. She is currently
				seeking opportunities!{' '}
			</p>
		</div>
	);
}

export default About;
