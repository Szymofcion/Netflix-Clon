const refreshSession = async () => {
	const refreshToken = localStorage.getItem('refreshToken')

	if (!refreshToken) {
		console.log('No refresh token found in localStorage.')
		return false
	}

	try {
		const refreshResponse = await fetch('http://localhost:3000/api/auth/refresh', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({ refreshToken }),
		})

		if (!refreshResponse.ok) {
			const errorText = await refreshResponse.text()
			console.error('Failed to refresh session. Status:', refreshResponse.status)
			console.error('Error response:', errorText)
			return false
		}

		const data = await refreshResponse.json()

		console.log('Refresh response data:', data)

		if (data.refreshToken) {
			localStorage.setItem('refreshToken', data.refreshToken)
		}

		if (data.accessToken) {
			sessionStorage.setItem('accessToken', data.accessToken)
			return true
		}

		return false
	} catch (error) {
		console.error('Error occurred during refresh session:', error)
		return false
	}
}

export default refreshSession
