import React from 'react'
import PropTypes from 'prop-types'



function UserDetail(props) {
  const { data } = props
  if (!data) return null
  return (
    <div>
     <h4>Name: {data.name}</h4>
     <h4>Age: {data.age}</h4>
     <h4>Job Title: {data.job_title }</h4>
     <h4>Gender: {data.gender}</h4>
     <h4>Country: {data.country}</h4>
    </div>
  )
}

UserDetail.propTypes = {
  data: PropTypes.object
}

export default UserDetail