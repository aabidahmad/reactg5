import { useState } from 'react';
function useToggle(initialValue=false){
    const [isToggled, setIsToggled] = useState(initialValue);
    function toggle(){
        setIsToggled(!isToggled);
    }
    return [ isToggled, toggle ];
}
export default useToggle;