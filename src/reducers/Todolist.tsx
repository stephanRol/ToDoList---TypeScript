import React, { useReducer, useState } from 'react'

interface IState {
    task: string;
    id: string;
}

interface IActionPost {
    type: "Post";
    payload: React.ChangeEvent<HTMLInputElement>
}

interface IActionClear {
    type: "Clear";
    payload: string;
}

const initialState: IState = { task: "", id: "0" };

function reducer(state: IState, action: IActionPost | IActionClear) {
    switch (action.type) {
        case "Post":
            return { task: action.payload.target.value, id: new Date().getTime().toString() }
        case "Clear":
            return { task: "", id: "" }
    }
}

const Todolist = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [allPosts, setAllPosts] = useState<IState[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "Post", payload: e })
    const submitTask = (e: React.FormEvent) => {
        e.preventDefault();
        if ((document.querySelector("#textfield") as HTMLInputElement).value === "") {
            alert("Enter a task")
            return;
        }
        setAllPosts([...allPosts, state])
        dispatch({ type: "Clear", payload: "" })

    }
    const handledelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        let filtered = allPosts.filter((post) =>
            post.id !== e.currentTarget.id
        )
        setAllPosts(filtered);
    }

    return (
        <div>
            <form onSubmit={submitTask}>
                <input id="textfield" type="text" value={state.task} onChange={handleChange} />
            </form>
            <br />
            <hr />
            {allPosts.map((post: IState, key: number) => {
                return <div key={key}>
                    <p>Task: {post.task}</p>
                    <p>ID: {post.id}</p>
                    <button onClick={handledelete} id={post.id}>Delete</button>
                    <hr />
                </div>
            })}
        </div>
    )
}

export default Todolist
