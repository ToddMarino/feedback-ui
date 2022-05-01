import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

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
		<>
			<Header />
			<div className='container'>
				{/* pass handleAdd as prop called addFeedback to FeedbackForm component */}
				<FeedbackForm handleAdd={addFeedback} />
				{/* pass feedback object as prop called feedback to FeedbackStats component */}
				<FeedbackStats feedback={feedback} />
				{/* pass feedback object and handleDelete function as props called feedback */}
				{/* and deleteFeedback to FeedbackList component */}
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}
export default App
