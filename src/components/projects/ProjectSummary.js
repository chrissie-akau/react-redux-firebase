import React from 'react'

const ProjectSummary = ({project}) => {
    return (  
        <div className="card z-depth-0 project-summary">
               <div className="card-content grey-test text-dark-3">
                   <span className="card-title">{project.title}</span>
                   <p>Posted by Chrissie</p>
                   <p className="grey-text">July 25, 2020</p>
               </div>
           </div>
    )
}
 
export default ProjectSummary