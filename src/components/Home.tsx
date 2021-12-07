import { useContext, useState } from 'react'
import ThemeContext from '../context/context';
import Task from './Task';

export interface ITask {
    id: string;
    description: string;
}

type TypehandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void
export type TypehandleClick = (e: React.MouseEvent<HTMLButtonElement>) => void

const Home = () => {

    const [task, setTask] = useState<ITask>({} as ITask);
    const [allTasks, setAllTasks] = useState<ITask[] | []>([]);
    const theme = useContext(ThemeContext)

    const handleChange: TypehandleChange = (e) => {
        setTask({
            id: new Date().getTime().toString(),
            description: e.target.value,
        });
    }

    const handleClick: TypehandleClick = (e) => {
        setAllTasks([...allTasks, task]);
        setTask({ id: "", description: "" });
    }

    const handleDelete: TypehandleClick = (e) => {
        let confirmDelete: boolean = window.confirm(`Are you sure you want to delete the task with the ID: ${e.currentTarget.id}`);
        if (confirmDelete === true) {
            let filtered = allTasks.filter((item: ITask) =>
                item.id !== e.currentTarget.id
            )
            setAllTasks(filtered);
        }
    }

    return (
        <div style={{ backgroundColor: theme.themeObject.backgroundColor, color: theme.themeObject.fontColor }}>
            <button onClick={theme?.changeTheme}>Change Theme</button>
            <h2>Enter a task</h2>
            <input type="text" value={task.description} onChange={handleChange} />
            <button onClick={handleClick}>Enter Task</button>
            <br />
            <br />
            <hr />
            {allTasks.map((item: ITask, index: number) => {
                return <div key={index}>
                    <Task item={item} handleDelete={handleDelete} />
                </div>
            })}
        </div>
    )
}

export default Home
