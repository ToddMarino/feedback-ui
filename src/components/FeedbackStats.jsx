import PropTypes from "prop-types"

const FeedbackStats = ({feedback}) => {
    const {length} = feedback

    // Calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
        <h4>{length} {length === 1 ? 'Review' : 'Reviews'}</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })
)
}

export default FeedbackStats