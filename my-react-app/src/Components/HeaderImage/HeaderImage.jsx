import React from 'react'
import './HeaderImage.css'

const HeaderImage = () => {
  return (
    <div className='container'>
      <div className='text'>
      <h1>Find Your Dream Home Today</h1>
      <p>Discover the perfect property that matches your lifestyle and budget from our extensive collection of listings.</p>
      <div className="search-box">
                    <form>
                        <input type="text" placeholder="Search by location..." />
                        <select>
                            <option value="">Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="villa">Villa</option>
                            <option value="condo">Condo</option>
                        </select>
                        <select>
                            <option value="">Price Range</option>
                            <option value="100-500">$100k - $500k</option>
                            <option value="500-1000">$500k - $1M</option>
                            <option value="1000+">$1M+</option>
                        </select>
                        <button type="submit" class="btn">Search</button>
                    </form>
                </div>
      </div>
    </div>
  )
}

export default HeaderImage
