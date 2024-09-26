// Write your JS code here
import {useState} from 'react'
import './index.css'

const RegistrationForm = () => {
  // State to store form input values and error status
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle blur event to validate if the field is empty
  const handleBlur = (event, setError) => {
    if (event.target.value === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    if (firstName === '' && lastName === '') {
      setFirstNameError(true)
      setLastNameError(true)
    } else if (firstName === '') {
      setFirstNameError(true)
    } else if (lastName === '') {
      setLastNameError(true)
    } else {
      setIsSubmitted(true)
    }
  }

  // Reset the form after success
  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setFirstNameError(false)
    setLastNameError(false)
    setIsSubmitted(false)
  }

  return (
    <div className="bg-container">
      <div className="registration-form-container">
        {isSubmitted ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-icon"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="submit-another-response-btn"
              onClick={resetForm}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="card-container">
              <h1>Registration</h1>
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  onBlur={e => handleBlur(e, setFirstNameError)}
                  className={`input-field ${
                    firstNameError ? 'input-error' : ''
                  }`}
                />
                {firstNameError && <p className="error-message">Required</p>}
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  onBlur={e => handleBlur(e, setLastNameError)}
                  className={`input-field ${
                    lastNameError ? 'input-error' : ''
                  }`}
                />
                {lastNameError && <p className="error-message">Required</p>}
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default RegistrationForm
