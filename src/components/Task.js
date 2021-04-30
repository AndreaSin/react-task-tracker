const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text}
                <i onClick={()=>onDelete(task.id)} className="fa fa-trash rediconcolor" color="red" aria-hidden="true"></i>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
