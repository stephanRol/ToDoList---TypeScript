import { useContext } from "react"
import ThemeContext from "../context/context"
import { ITask } from "./Home"
import { TypehandleClick } from "./Home"


interface ITaskProps {
    item: ITask;
    handleDelete: TypehandleClick
}


const Task = ({ item, handleDelete }: ITaskProps) => {
    // const { } = useContext(ThemeContext)

    return (
        <div style={{}}>
            <p>Task: {item.description}</p>
            <p>ID: {item.id}</p>
            <button onClick={handleDelete} id={item.id}>Delete Task</button>
            <hr />
        </div>
    )
}

export default Task


