import { useState } from 'react'

interface ITask {
    id: string;
    description: string;
}

const Home = () => {

    const [task, setTask] = useState<ITask>({ id: "", description: "" });
    const [allTasks, setAllTasks] = useState<ITask[] | []>([]);


    type TypehandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void

    const handleChange: TypehandleChange = (e) => {
        setTask({
            id: new Date().getTime().toString(),
            description: e.target.value,
        });
    }

    type TypehandleClick = (e: React.MouseEvent<HTMLButtonElement>) => void


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
        <div>
            <h2>Enter a task</h2>
            <input type="text" value={task?.description} onChange={handleChange} />
            <button onClick={handleClick}>Enter Task</button>
            <br />
            <br />
            <hr />
            {allTasks.map((item: ITask, index: number) => {
                return <div key={index}>
                    <p>Task: {item.description}</p>
                    <p>ID: {item.id}</p>
                    <button onClick={handleDelete} id={item.id}>Delete Task</button>
                    <hr />
                </div>
            })}
        </div>
    )
}

export default Home
