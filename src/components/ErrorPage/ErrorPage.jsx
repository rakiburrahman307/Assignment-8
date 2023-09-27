
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center top-24">
            <div>
                <h2 className="text-5xl font-bold">Oops SomeThing Is Wrong</h2>
                <p className="text-3xl font-bold">Page Not Found </p>
                <button className="btn btn-primary"><Link to="/">Back To Home</Link></button>
            </div>
        </div>
    );
};


export default ErrorPage;