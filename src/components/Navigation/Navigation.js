import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuestionnaireContext } from '../../questionnaireContext';

const Navigation = ({ handleLogout }) => {
	const { loggedIn, userId } = useContext(QuestionnaireContext);

	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				{loggedIn ? (
					<>
						<li>
							<Link to='/' onClick={handleLogout}>
								Log Out
							</Link>
						</li>
						<li>
							<Link to={`/myaccount/${userId}`}>My Account</Link>
						</li>
					</>
				) : (
					<li>
						<Link to='/login'>Log In</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
