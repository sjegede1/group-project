import React, {} from 'react'

function CitySearchBar() {
  const handleSubmit=(event)=>{
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='searchTerm'/>
      </form>
    </div>
  )
}

export default CitySearchBar