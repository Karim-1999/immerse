import { useState } from "react"

export function  useLogin(){
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
        console.log(data)
    }
    
    console.log(data.username, data.password)
    const userBody = {
        email: data.username,
        password: data.password
        }

    async function fetchData(){
        try {
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userBody),
            })
            //If api response = negative, it will activate the fail authentication function
            if (response.status === 400) {
                console.log("Invalid email or password")
                alert("Invalid email or password")
            } else {
                const responseJSON = await response.json();
                console.log(responseJSON)
                alert("Login successful")
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    return {
        data: data,
        onInputChange: handleInputChange,
        fetchData: fetchData
    }
}