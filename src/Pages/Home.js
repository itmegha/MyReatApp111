import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function Home(){
    const context= useContext(ThemeContext);
    console.log("this is",context);
    
    return(
        <h2>This is Home Page</h2>
    );
}
export default Home;