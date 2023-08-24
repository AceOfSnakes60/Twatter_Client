import { postTwatt } from "../../library/apiHandler";

const SubmitPost = (props)=>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {
            userId : 0,
            text : formData.get("body"),
            parent: props.parent,
            date : new Date()
        }
        postTwatt(data).catch(err=>console.error(err));
        window.location.reload();
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Content:
                <textarea rows="4" cols="50" type="text" name="body"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default SubmitPost;