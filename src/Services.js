import React from 'react'

const Services = () => {
  return (
    <div className='service'>
<><>
<img src="https://s3.studytonight.com/tutorials/uploads/pictures/1629713661-101156.png" />
	  <div className="form-content">
	    <form>
		   <h1>Login</h1>
       
			<label htmlFor="email"><b>Email </b></label>
			<input type="text" placeholder="Enter Email" name="email" required />


			<label htmlFor="psw"><b>Password </b></label>
			<input type="password" placeholder="Enter Password" name="psw" required />

			<button type="submit" className="btn">Login</button>
		</form>
      </div>
</></>
        </div>
  )
}

export default Services