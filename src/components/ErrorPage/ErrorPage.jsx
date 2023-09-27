
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
            <h2>Oops SomeThing Is Wrong</h2>
            <p>Page Not Found </p>
            <button><Link to="/">Back To Home</Link></button>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;