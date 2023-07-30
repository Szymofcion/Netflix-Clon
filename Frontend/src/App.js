
import { useState } from 'react'
import Welcome from './component/welcome-page/Welcome'

function App() {
	const [user, setUser] = useState()
	const onLogin = user => {
		setUser(user)
	}
	// const onLogout = () => {
	//   setUser();
	// };

	return <Welcome/>
}

export default App
