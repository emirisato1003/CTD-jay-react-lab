import reactLogo from '../assets/react.svg';
import { BsCartFill } from "react-icons/bs";

export default function Header({cart}) {
    const styles = { height: 100, width: 100 };

    return (
        <div className="coming-soon">
            <h1>CTD Swag</h1> {/* `title` inserted into heading */}
            <div style={styles}>
                <img src={reactLogo} alt="Code The Dream Logo" />
            </div>
            <div><BsCartFill />{cart.length}</div>
            {/* <h2>{message}</h2> 'message' inserted into heading */}
        </div>
    );
}