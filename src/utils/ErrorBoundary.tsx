import React, { useState, ErrorInfo, ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type HandleComponentErrorProps = {
  error: Error
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  const handleComponentError = (
    error: HandleComponentErrorProps,
    errorInfo: ErrorInfo
  ) => {
    // log the error to an error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo)
    setHasError(true)
  }

  if (hasError) {
    return <h3>Something went wrong.</h3>
  }

  return (
    <React.Fragment>
      {children}
      {/* Example usage of handleComponentError */}
      <button onClick={() => handleComponentError}>Simulate Error</button>
    </React.Fragment>
  )
}

export default ErrorBoundary
