import * as eventService from '../../services/eventServices'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Search.css'



const Search = (props) => {
  const [keywordData, setKeywordData] = useState([])
  const [searchData, setSearchData] = useState([{
    keyword: '',
    city: ''
  }])
  const [searchResults, setSearchResults] = useState([{}])
  const [page, setPage] = useState(0)

  // let page = 0

  // if (page > 0) {
  //   if (page > eventService.getSearch.json.page.totalPages-1) {
  //     page = 0
  //   }
  // }

  // const handleNextPage = () => {
  //   eventService.getSearch(++page)
  // }


  // handle change of input
  const handleChange = (evt) => {
    setSearchData({ ...searchData, [evt.target.name]: evt.target.value })
  }

  // handle submit
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      eventService.getSearch(searchData.keyword, searchData.city, page)
      .then(searchData => {
        setKeywordData(searchData)
        setSearchResults(searchData)
      })
    } catch (err) {
      console.log(err)
    }
    nextPage()
  }

  function nextPage(){
    setPage(page + 1)
    console.log("page: ", page)
  }

  const { keyword } = searchData
  const { city } = searchData

  // form validation
  const isKeywordFormValid = () => {
    return !(keyword)
  }

  console.log("search data", searchData)
  console.log("search results", searchResults.length)
  console.log("searchData: ", searchData)
  
  return (
    <>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChange} />
          <input type="text" value={city} name="city" placeholder="search city" onChange={handleChange} />
          <button disabled={isKeywordFormValid()}>Search</button>
        </form>
      </div>
      <div>
        {searchResults.length === undefined ?
          <div>
            {searchResults._embedded.events.map(event =>
              <section>
                <div className="container py-2">
                  <article className="postcard">
                    <Link to={`/event/${event.id}`} className="postcard_img_link" state={{event}}>
                        <img
                          className="postcard_img"
                          alt="concert"
                          src={event.images.find(image => image.height > 110 && image.width > 100).url}
                          style={{ width: '260px', height: '200px' }}
                          />
                    </Link>
                    <div className='postcard-information'>
                      <Link to={`/event/${event.id}`} state={{event}}>
                        <h1 className='postcard_title'>{event.name}</h1>
                      </Link>
                      <div className="postcard_subtitle small">
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                        <a className="see-more-link" href={`/event/${event.id}`}>See More</a>
                      </div>
                      <div className="postcard_preview-txt">
                        some information about the event...
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            )}
            <button onClick={handleSubmit}>Next Page</button>
          </div>
          :
          <p>Nothing Searched</p>
        }
        <button id='next' href='#'>Next Page</button>
      </div>
    </>
  )
}

export default Search

