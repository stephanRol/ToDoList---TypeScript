import { ITask } from "./Home"
import { TypehandleClick } from "./Home"

interface ITaskProps {
    item: ITask;
    handleDelete: TypehandleClick
}


const Task = ({ item, handleDelete }: ITaskProps) => {
    return (
        <div>
            <p>Task: {item.description}</p>
            <p>ID: {item.id}</p>
            <button onClick={handleDelete} id={item.id}>Delete Task</button>
            <hr />
        </div>
    )
}

export default Task


