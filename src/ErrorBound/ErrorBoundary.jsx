/* eslint-disable react/prop-types */
import React, { useState } from "react";

// This is a placeholder function to simulate logging errors to a service
const logErrorToMyService = (error, componentStack) => {
    // Simulate sending error information to a service
    console.error('Error occurred:', error);
    console.error('Component Stack:', componentStack);
    // Here you would typically make an API call to log the error to your service
    // Example: axios.post('/logError', { error, componentStack });
  };
  
  const ErrorBoundary = (props) => {
    const [hasError, setHasError] = useState(false);
  
    const handleComponentError = (error, info) => {
      logErrorToMyService(error, info.componentStack);
      setHasError(true);
    };
  
    if (hasError) {
      return props.fallback;
    }
  
    return (
      <React.ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={handleComponentError}
      >
        {props.children}
      </React.ErrorBoundary>
    );
  };
  
  const ErrorFallback = ({ error }) => (
    <div>
      <p>Something went wrong: {error.message}</p>
    </div>
  );
  
  export default ErrorBoundary;
  