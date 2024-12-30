import React, { createContext,useReducer} from "react";

export const ThemeContext = createContext();

const themeReducer = (state,action)=>{
     switch(action.type){
      case 'Change_Theme':
            return{
                ...state,
                theme:action.payload
            };
        default :
         return state;
     }

}
function ContextProvider(props){
       const[state,dispatch] = useReducer(themeReducer,{theme:'light'});
   
       const ChangeTheme = (theme)=>{
        dispatch({type:'Change_Theme',payload:theme});
       }
       return(
    <ThemeContext.Provider value={{...state,ChangeTheme}}>
         {props.children}
    </ThemeContext.Provider>
    );
}

export default ContextProvider;







// function ContextProvider(props){
//     const [theme,setTheme] = useState('light')
//     return(
//     <ThemeContext.Provider value={{theme,setTheme}}>
//          {props.children}
//     </ThemeContext.Provider>
//     );
// }

// export default ContextProvider;