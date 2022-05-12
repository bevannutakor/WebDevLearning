import React from 'react';

const Information = (props) => {
    const {generalInfo, educationArray, practicalArray} = props;

    return(
        <div>
            <div>
                <p>{generalInfo.nameInfo}</p>
                <p>{generalInfo.emailInfo}</p>
                <p>{generalInfo.phoneInfo}</p>
            </div>
            
            <div>
                {educationArray.map((educationalInfo) => {
                    return(
                        <div>
                            <p key={educationalInfo.id}>{educationalInfo.schoolName}</p>

                            <p key={educationalInfo.id}>{educationalInfo.studyName}</p>

                            <p key={educationalInfo.id}>{educationalInfo.educationDate}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                {practicalArray.map((practicalInfo) => {
                    return(
                        <div>
                            <p key={practicalInfo.id}>{practicalInfo.companyName}</p>

                            <p key={practicalInfo.id}>{practicalInfo.positionTitle}</p> 

                            <p key={practicalInfo.id}>{practicalInfo.mainTasks}</p>

                            <p key={practicalInfo.id}>{practicalInfo.jobDate}</p>                           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Information;