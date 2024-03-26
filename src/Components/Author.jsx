import { useLoaderData } from "react-router-dom";


const Author = () => {

    const blog = useLoaderData()
    return (
        <div>
            <h2>Hasan</h2>
        </div>
    );
};

export default Author;
