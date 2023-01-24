import React from 'react'

const StoryDetail = ({title, link}) => {



    return (
        <li> <a href={link}>{title}</a> </li>
    )
}

export default StoryDetail