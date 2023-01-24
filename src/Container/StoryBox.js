import React , {useState, useEffect} from 'react'
import StoryForm from '../Components/StoryForm'
import StoryList from '../Components/StoryList'

const StoryBox = () => {

    const [stories, setStories] = useState([])
    const [listOfItems, setListOfItems] = useState([])
    const [foundItem, setFoundItem] = useState('')


    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(data => data.slice(0,20) )
            .then(data  => {
                setStories(data)
                storyPromises(data) 
    }, [])

    const storyPromises = (arrayIds) => {
        const arrayOfPromises = arrayIds.map(storyId => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then(response => response.json())
        })

        console.log(arrayOfPromises)

            Promise.all(arrayOfPromises)
            .then(storyId => setListOfItems(storyId))
    }}, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const value = evt.target.searchText.value;
        setFoundItem(listOfItems.includes(value))
    }
   

    return (
        <>
        <h1>Top 20</h1>
        <StoryForm handleSubmit={handleSubmit} ></StoryForm>
        <hr></hr>
        <StoryList listOfItems={listOfItems} ></StoryList>
        
        </>
    )
}

export default StoryBox



