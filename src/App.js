import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

/* SET STATE for user feedback */
const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData)

	// ADD AND DELETE FEEDBACK FUNCTIONS
	// deleteFeedback takes in id as parameter
	// add alert to confirm user wants to delete the feedback
	// set state: filter feedback array for the items that don't match the id
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	// addFeedback takes in newFeedback as parameter
	// assign id to newFeedback object using uuid
	// set state: add newFeedback and spread in previous feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route exact path='/' element={
						<>
						<FeedbackForm handleAdd={addFeedback} />
						<FeedbackStats feedback={feedback} />
						<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
						</>
					}>
					</Route>
					<Route path='/about' element={<AboutPage />} />
				</Routes>
					<AboutIconLink />
			</div>
		</Router>
	)
}
export default App
