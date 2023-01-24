import React from 'react'
import StoryDetail from './StoryDetail'
    
    const StoryList = ({listOfItems}) => {  
        
        const listOfStories = listOfItems.map((story, index) => {
            return (
            <StoryDetail
            key={index} 
            title={story.title}
            link={story.url}>                
            </StoryDetail>
        )
    })
        
        return (
            <>
            {listOfStories}
            </>
        )
    }


export default StoryList