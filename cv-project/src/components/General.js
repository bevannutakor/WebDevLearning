import React, {Component} from 'react'
import Information from './Information'
import uniqid from "uniqid";
import '../App.css'

class General extends Component{
    constructor(){
      super()
      this.state = {
        generalInfo: {
            nameInfo: '',
            emailInfo: '',
            phoneInfo: '',
            id: uniqid()
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

        generalArray: [],
        educationArray: [],
        practicalArray: []

      }
    }

    handleChange = (e) => {
        this.setState({
            generalInfo: {
                ...this.state.generalInfo,
                [e.target.name]: e.target.value,
                id: this.state.generalInfo.id 
            },

            educationalInfo: {
                ...this.state.educationalInfo,
                [e.target.name]: e.target.value,
                id: this.state.educationalInfo.id
            },

            practicalInfo: {
                ...this.state.practicalInfo,
                [e.target.name]: e.target.value,
                id: this.state.practicalInfo.id
            }
        })
        
    }

    submitInformation = (e) => {
        e.preventDefault()
        //this functionality is so that you cannot add multiple name, email, and phone numbers
        if(this.state.generalArray.length < 1){
            this.setState({
                generalArray: this.state.generalArray.concat(this.state.generalInfo),

                generalInfo: {
                    nameInfo: '',
                    emailInfo: '',
                    phoneInfo: '',
                    id: uniqid() 
                },
            })
        } else {
            let items = [...this.state.generalArray];
            let item = {...items[0]};
            item = this.state.generalInfo;
            items[0] = item;
            this.setState({items})
        }

        this.setState({
            educationArray: this.state.educationArray.concat(this.state.educationalInfo),

            practicalArray: this.state.educationArray.concat(this.state.educationalInfo),
    
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
        const {generalInfo, educationalInfo, practicalInfo, generalArray, educationArray, practicalArray} = this.state
        return(
            <div>
                <form onSubmit={this.submitInformation}>
                <h3>Personal information</h3>  
                <label htmlFor="nameInput">Enter Name</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.nameInfo}
                    name="nameInfo"
                    type="text" 
                    id="nameInput"
                />
                <label htmlFor="emailInput">Enter Email</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.emailInfo}
                    name="emailInfo"
                    type="text" 
                    id="emailInput"
                />
                <label htmlFor="phoneInput">Enter Phone Number</label>
                <input 
                    onChange={this.handleChange}
                    value={generalInfo.phoneInfo}
                    name="phoneInfo"
                    type="text" 
                    id="phoneInput"
                />
                <br></br>
                <h3>Educational Information</h3>
                <label htmlFor="schoolInput">Enter the name of your school</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.schoolName}
                    name="schoolName"
                    type="text" 
                    id="schoolInput"
                />
                <label htmlFor="studyInput">Enter the name of your degree</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.studyName}
                    name="studyName"
                    type="text" 
                    id="studyInput"
                />
                <label htmlFor="timeInput">Enter the time you have spent at the institution</label>
                <input 
                    onChange={this.handleChange}
                    value={educationalInfo.educationDate}
                    name="educationDate"
                    type="text" 
                    id="timeInput"
                />
                <br></br>
                <h3>Job experience</h3>
                <label htmlFor="companyInput">Enter the name of the company</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.companyName}
                    name="companyName"
                    type="text" 
                    id="companyInput"
                />
                <label htmlFor="positionInput">What was the name of the position you played</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.positionTitle}
                    name="positionTitle"
                    type="text" 
                    id="positionInput"
                />
                <label htmlFor="tasksInput">What did you do</label>
                <textarea 
                    onChange={this.handleChange}
                    value={practicalInfo.mainTasks}
                    name="mainTasks"
                    type="text" 
                    id="tasksInput"
                />
                <label htmlFor="jobDateInput">Enter the date of when you started to when you finished</label>
                <input 
                    onChange={this.handleChange}
                    value={practicalInfo.jobDate}
                    name="jobDate"
                    type="text" 
                    id="jobDateInput"
                />
                <button type="submit">
                    Save
                </button>
                </form>

                <Information 
                    generalArray={generalArray}
                    educationArray={educationArray}
                    practicalArray={practicalArray}
                />
            </div>
        )
    }
    
  }
  
  export default General;
