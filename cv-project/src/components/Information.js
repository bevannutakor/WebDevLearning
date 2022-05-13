import React from 'react';
import '../App.css'

const Information = (props) => {
    const {generalArray, educationArray, practicalArray} = props;

    return(
        <div>
            <div>
                <h3>General Information</h3>
                {generalArray.map((generalInfo) => {
                    return(
                        <React.Fragment key={generalInfo.id}>
                            <p>{generalInfo.nameInfo}</p>

                            <p>{generalInfo.emailInfo}</p>

                            <p>{generalInfo.phoneInfo}</p>
                        </React.Fragment>
                    )
                })}
            </div>
            
            <div>
                <h3>Educational Information</h3>
                {educationArray.map((educationalInfo) => {
                    return(
                        <React.Fragment key={educationalInfo.id}>
                            <p>{educationalInfo.schoolName}</p>

                            <p>{educationalInfo.studyName}</p>

                            <p>{educationalInfo.educationDate}</p>
                        </React.Fragment>
                    )
                })}
            </div>

            <div>
                <h3>Job experience</h3>
                {practicalArray.map((practicalInfo) => {
                    return(
                        <React.Fragment key={practicalInfo.id}>
                            <p>{practicalInfo.companyName}</p>

                            <p >{practicalInfo.positionTitle}</p> 

                            <p>{practicalInfo.mainTasks}</p>

                            <p>{practicalInfo.jobDate}</p>                           
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Information;