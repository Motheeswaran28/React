import { useState } from "react"

export default function Demopage(){

    const [userName, setUserName] = useState("Raja")
    const [userAge, setUserAge] = useState(26)
    const [userNation, setUserNation] = useState("India")
    const [userContact, setUserContact] = useState(6354678954)

    return(
        <div>
        <div>
            <span>User Name: {userName}</span>
            <span><button onClick={() =>setUserName("Ram")}>Change Name</button></span>
        </div>

        <div>
            <span>User Age: {userAge}</span>
            <span><button onClick={() =>setUserAge(28)}>Change Age</button></span>
        </div>

        <div>
            <span>User Nation: {userNation}</span>
            <span><button onClick={() => setUserNation("USA")}>Change Nation</button></span>
        </div>

        <div>
            <span>User Contact: {userContact}</span>
            <span><button onClick={() => setUserContact(8487987654)}>Change Contact</button></span>
        </div>




        </div>
        
    
    );
}