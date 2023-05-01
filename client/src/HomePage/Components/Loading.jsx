import './Loading.css';

const Loading = () => {
    return (
        <div className="spinner-container">
            <div
                className="spinner-animation"
                role={"status"}
            >
        <span className="spinner">
          Loading...
        </span>
            </div>
        </div>
    );
};

export default Loading;
