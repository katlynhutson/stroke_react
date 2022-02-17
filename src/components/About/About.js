import React from 'react';

function About(props) {
	return (
		<div>
			<h2>About</h2>
			<p>Stroke Response is a tool to help assess possible stroke victims.</p>
			<p>
				This application utilizes the{' '}
				<a href='https://en.wikipedia.org/wiki/Cincinnati_Prehospital_Stroke_Scale'>
					Cincinnati Prehospital Stroke Scale
				</a>
				, a system for diagnosing a possible stroke outside of the hospital
				setting. The Cincinnati Prehospital Stroke Scale is commonly used by
				EMT's and 911 operators to determine aid in patient care and establish
				stroke-risk level.
			</p>
			<p>
				By filling out the questionnaire provided, a user of this application
				has the ability to implement the Cincinnati Prehospital Stroke Scale
				personally, and is prompted to record information crucial for possible
				subsequent patient care.
			</p>
			<p>
				Most notably, the recorded time of symptom onset will be one of the most
				important pieces of information for the healthcare provider. The amount
				of time the stroke symptoms have progressed are a crucial decider in
				course of treatment. The sooner the patient is brought in, the better
				their outlook.
			</p>
			<p>
				When faced with a crisis like a family memeber experiencing a possible
				stroke, it is normal to panic. Individuals may dismiss the severity of
				the symptoms, you may be in a dangerous environment, the symptoms may be
				confusing or subtle. People well-versed in possible stroke protocol may
				forget or abandon that same protocol during a crisis. By prompting the
				user with each question, and prompting them to record the time of
				symptom onset, this application is reducing the likelihood of human
				error to be expected during a stressful event.
			</p>
			<h3>Creator</h3>
			<p>I created this application for myself.</p>
			<p>
				I was the sole witness to a family member experiencing stroke symptoms
				in January of 2022. That family member was experiencing a TIA or
				"mini-stroke', with an outcome of no permanent damage.
			</p>
			<p>
				I caught it, I knew something was very wrong, but I didn't do as much as
				I could have. We were extremely lucky that the outcome wasn't worse.
			</p>
			<p>
				This application is my way of not only preventing my failure to respond
				from happening again, but my way of helping guide others who will one
				day go through the same.
			</p>
			<p>This application can help in the way I once needed it.</p>
			<h3>Future Directions</h3>
			<p>
				In the future, I would like users to be able to update their event log
				to include the outcome. By recording the data we are currently, we have
				the ability to research correlations in onset time, and symptom
				frequency. Outcome data would allow for valuable research of the
				Cincinnati Prehospital Stroke Scale itself.
			</p>
			<p>
				Along the same lines, I am currently seeking any medical professionals,
				emergency responders, or individuals well-versed in stroke protocol to
				offer feedback. Is there anything else that would be useful to record?
				What other information could be of use?
			</p>
			<p>Any feedback would be much appreciated!</p>
			<a href='mailto:kmhutson5@att.net?subject = Feedback&body = Message'>
				Send Feedback
			</a>
		</div>
	);
}

export default About;
