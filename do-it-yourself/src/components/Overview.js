import React from 'react';

const Overview = (props) => {
    const { tasks, handleDelete} = props;
    
    return (
        <ul >
            {tasks.map((task) => {
                return <li key={task.id}>{task.counter}. {task.text} <button onClick={handleDelete.bind(this, task.id)}>Delete</button></li>
            })}
        </ul>
    )
}

export default Overview;