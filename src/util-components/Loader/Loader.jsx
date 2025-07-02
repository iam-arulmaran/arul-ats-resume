import { InfinitySpin } from "react-loader-spinner"
import "./Loader.scss";

export function Loader() {
    return (
        <div className="loader">
        <span className="loading-text">Resume Loading...</span>
        <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
        />
        </div>
    )
}