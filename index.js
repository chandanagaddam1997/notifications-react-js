const Notification = props => {
  //  Write your code here.
  const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
}
}

const element = (
  //  Write your code here.   
  <div className = "notifications-container">
      <h1 className="notification">Notifications</h1>
      <div className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
       <div className = "color-box information">
        <img src = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className = "icon"/>
          <p className = "color-name">information Message</p>
       </div>
      </div>
      <div className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
        <div className = "color-box success">
        <img src = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" className = "icon"/>
          <p className = "color-name">Success Message</p>
        </div>
       </div>
       <div className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
        <div className = "color-box warning">
          <img src = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" className = "icon" />
          <p className = "color-name">Warning Message</p>
        </div>
      </div>
      <div className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
        <div className = "color-box error">
        <img src = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" className = "icon" />
          <p className = "color-name">Error Message</p>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
