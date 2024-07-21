import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'

import refreshSession from '../utils/refreshSession'
import InputLogin from './InputLogi'
import InputPassword from './InputPassword'
import ButtonLogin from './ButtonLogin'
import netflixTitle from '../component/img/netflixTitle.png'

import './Login.scss'

const getUsers = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/users', {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`, // Use template literal for consistency
			},
			method: 'GET',
		})

		if (!response.ok) {
			if (response.status === 403) {
				// Attempt to refresh session if token is expired or invalid
				const sessionUpdated = await refreshSession()
				if (sessionUpdated) {
					return getUsers() // Retry fetching users after refreshing session
				}
			}
			console.error('Failed to fetch users. Status:', response.status)
			return false
		}

		const users = await response.json()
		const name = users[0]?.login
		const password = users[0]?.password
		console.log(name, password)
		return true // Indicate success
	} catch (error) {
		console.error('Error fetching users:', error)
		return false // Indicate failure
	}
}

const Login = () => {
	const navigate = useNavigate()

	const handleLogin = async event => {
		event.preventDefault()
		const formData = new FormData(event.target)

		try {
			const response = await fetch('http://localhost:3000/api/auth/login', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					login: formData.get('login'),
					password: formData.get('password'),
				}),
			})

			if (!response.ok) {
				console.error('Login failed. Status:', response.status)
				return false
			}

			const data = await response.json()

			if (data.refreshToken) {
				localStorage.setItem('refreshToken', data.refreshToken)
			}

			if (data.accessToken) {
				sessionStorage.setItem('accessToken', data.accessToken)
				navigate('/selectProfil') // Redirect after successful login
			}

			return true // Indicate success
		} catch (err) {
			console.error('Error during login:', err)
			return false // Indicate failure
		}
	}

	return (
		<section className='login'>
			<nav className='login-nav'>
				<Link to='/'>
					<button className='back-arrow'>
						<BsArrowLeftShort />
					</button>
				</Link>
			</nav>
			<main className='login__container'>
				<img src={netflixTitle} className='login__container-netflix' alt='logo netflix' />
				<button onClick={getUsers}>Get users</button>
				<form className='login__container-input' onSubmit={handleLogin}>
					<div className='login__container-input--style'>
						<InputLogin />
						<InputPassword />
						<ButtonLogin login={handleLogin} /> {/* Removed onClick from ButtonLogin */}
					</div>
					<p className='login__container-help'>Potrzebujesz pomocy?</p>
					<Link to='/'>
						<p className='login__container-signUp'>Nie masz jeszcze konta w serwisie Netflix? Zarejestruj się teraz.</p>
					</Link>
					<p className='login__container-description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi. Lorem ipsum dolor sit amet.
						Lorem ipsum dolor sit amet. Lorem, ipsum.
					</p>
				</form>
			</main>
		</section>
	)
}

export default Login
