import React, {Component} from 'react'
import Information from './Information'
import uniqid from "uniqid";

class General extends Component{
    constructor(){
      super()
      this.state = {
        generalInfo: {
            nameInfo: '',
            emailInfo: '',
            phoneInfo: '',
        },

        educationalInfo: {
            schoolName: '',
            studyName: '',
            educationDate: '',
            id: uniqid()
        },

        practicalInfo:{ //job experience
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            jobDate: '',
            id: uniqid()
        },

        educationArray: [],
        practicalArray: []

      }
    }

    handleChange = (e) => {
        this.setState({
            generalInfo: {
                [e.target.name]: e.target.value
                
            },

            educationalInfo: {
                [e.target.name]: e.target.value,
                id: uniqid() //need to reset Id so it is different everytime
            },

            practicalInfo: {
                [e.target.name]: e.target.value,
                id: uniqid()
            }
        })
    }

    submitInformation = (e) =>{
        e.preventDefault()
        this.setState({
            educationArray: this.state.educationArray.concat(this.state.educationalInfo),

            practicalArray: this.state.educationArray.concat(this.state.educationalInfo),

            generalInfo: {
                nameInfo: '',
                emailInfo: '',
                phoneInfo: '',
            },
    
            educationalInfo: {
                schoolName: '',
                studyName: '',
                educationDate: '',
                id: uniqid()
            },
    
            practicalInfo:{ //job experience
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                jobDate: '',
                id: uniqid()
            },
        })
    }

    render(){
        const {generalInfo, educationalInfo, practicalInfo, educationArray, practicalArray} = this.state
        return(
            <div>
                <form onSubmit={this.submitInformation}>
                <h3>Personal information</h3>  
                <label htmlFor="nameInput">Enter Name</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.nameInfo}
                    type="text" 
                    id="nameInput"
                />
                <label htmlFor="nameInput">Enter Email</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.emailInfo}
                    type="text" 
                    id="emailInput"
                />
                <label htmlFor="nameInput">Enter Phone Number</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.phoneInfo}
                    type="text" 
                    id="nameInput"
                />
                <br></br>
                <h3>Educational Information</h3>
                <label htmlFor="nameInput">Enter the name of your school</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.schoolName}
                    type="text" 
                    id="schoolInput"
                />
                <label htmlFor="nameInput">Enter the name of your degree</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.studyName}
                    type="text" 
                    id="studyInput"
                />
                <label htmlFor="nameInput">Enter the time you have spent at the institution</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.educationDate}
                    type="text" 
                    id="timeInput"
                />
                <br></br>
                <h3>Job experience</h3>
                <label htmlFor="nameInput">Enter the name of the company</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.companyName}
                    type="text" 
                    id="companyInput"
                />
                <label htmlFor="nameInput">What was the name of the position you played</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.positionTitle}
                    type="text" 
                    id="positionInput"
                />
                <label htmlFor="nameInput">What did you do</label>
                <textarea 
                    onChange={this.handleChange}
                    value={practicalInfo.mainTasks}
                    type="text" 
                    id="tasksInput"
                />
                <label htmlFor="nameInput">Enter the date of when you started to when you finished</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.jobDate}
                    type="text" 
                    id="jobDateInput"
                />
                <button type="submit">
                    Save
                </button>
                </form>

                <Information 
                    generalInfo={generalInfo}
                    educationArray={educationArray}
                    practicalArray={practicalArray}
                />
            </div>
        )
    }
    
  }
  
  export default General;
