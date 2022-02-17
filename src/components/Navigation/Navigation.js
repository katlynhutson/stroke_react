import { Squash as Hamburger } from 'hamburger-react';
// https://hamburger-react.netlify.app/
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuestionnaireContext } from '../../questionnaireContext';

const Navigation = ({ handleLogout }) => {
	const { loggedIn, userId } = useContext(QuestionnaireContext);
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
			<nav>
				<div className='hamburger'>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
				<ul style={{ display: isOpen ? 'flex' : 'none' }} className='nav-menu'>
					<li>
						<Link to='/' className='nav-link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' className='nav-link'>
							About
						</Link>
					</li>
					{loggedIn ? (
						<ul>
							<li>
								<Link to='/' onClick={handleLogout}>
									Log Out
								</Link>
							</li>
							<li>
								<Link to={`/myaccount/${userId}`}>My Account</Link>
							</li>
						</ul>
					) : (
						<li>
							<Link to='/login'>Log In</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;

// references for hamburger menu -->https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
