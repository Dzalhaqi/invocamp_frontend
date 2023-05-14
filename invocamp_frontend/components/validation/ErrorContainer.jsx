import React, { useEffect } from 'react'

const ErrorContainer = ({ error }) => {
  return (
    <>
      {error && (
        <div className="error-container">
          {Object.keys(error).map((err, i) => {
            return (
              <div key={i}>
                {/* show the field name also and make it remove _ and Title Case */}
                <div className="error-field font-bold text-black">{err.replace(/_/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</div>
                {error[err].map((err, i) => {
                  return <div key={i}>{err}</div>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  )
}

export default ErrorContainer