import React from 'react'

const StoryForm = ({handleSubmit}) => {

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchText">Search bar</label>
            <input type="text" id="searchText" name="searchText"></input>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default StoryForm
