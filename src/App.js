import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}
export default App
