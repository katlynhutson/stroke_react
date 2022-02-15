import { Squash as Hamburger } from 'hamburger-react';
// https://hamburger-react.netlify.app/
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
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
					{/* <li>
						<Link to='/question/1' className='nav-link'>
							Questionnaire
						</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;

// references for hamburger menu -->https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
