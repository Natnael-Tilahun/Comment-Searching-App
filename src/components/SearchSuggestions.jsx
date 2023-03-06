// Importing useState and useEffect modules from react library
import { useState, useEffect } from 'react'
import Loading from './Loading'

function SearchSuggestions() {
    // Using state array to hold the input value, search results, loading state, and selected index 
    const [inputValue, setInputValue] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(-1)

    // Function that sets the input value and triggers the loading state
    function setInputValueHandler(e) {
        setLoading(true)
        setInputValue(e.target.value)
    }

    // Asynchronous effect hook that fetches data when the inputValue changes
    useEffect(() => {
        setSelected(-1)
        async function searchCommentFromApi(value) {
            const res = await fetch(`http://localhost:4001/api/search?q=${value}`)
            const data = await res.json()
            setSearchResults(data)
            setLoading(false)
        }
        searchCommentFromApi(inputValue)
    }, [inputValue])

    // Returns the JSX displayed on the webpage 
    return (
        <>
            <h1 className='font-bold text-3xl'>Comment Search</h1>
            <div className='lg:w-1/2 px-5 md:px-14 lg:p-0'>
                
                {/* A label with an SVG image icon, and an input field that changes the inputValue when user types */}
                <label htmlFor="search" className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='absolute top-1/4 transform -translate-y-1/4 left-3 fill-gray-600 '><path fill="none" d="M0 0h24v24H0z" /><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" /></svg>
                    <input type="text" name='search' id='search' className='w-full p-3 rounded-lg text-black px-12' placeholder='Search any comment by name' onChange={setInputValueHandler} />
                </label>
                <ul className='my-4 text-xl text-gray-600 rounded-lg bg-slate-50 '>

                    {/* Maps through the searchResults and displays them in a list with selected index highlighted */}
                    {inputValue && searchResults.map((result, index) => (
                        <li className={`p-3 px-3 border-b-2 border-gray-300 hover:bg-slate-200 rounded-lg`} key={index} onClick={() => setSelected(index)}>{(selected >= 0 && selected == index) && <strong>Name: </strong>}{result.name}
                            {selected == index &&
                                <>
                                    <p className='py-1'><strong>Email:</strong> {result.email}</p>
                                    <p className='py-0'><strong>Comment:</strong> {result.body}</p>
                                </>
                            }
                        </li>
                    ))}

                    {/* Conditional statement that shows a loading message when the data is being fetched */}
                    {loading && <Loading />}
                </ul>
            </div>
        </>
    )
}

// Export this component to be used in other files
export default SearchSuggestions
