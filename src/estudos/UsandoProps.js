import CardUser from "./CardUser.js"
import "./UsandoProps.css"

const UsandoProps = () => {
    const users = [
        {
            id: 123,
            name: "Nicolas",
            lastname: "Sousa",
            avatar: "",
            status: "Curtindo"
        },{
            id: 123,
            name: "Renan",
            lastname: "Cavichi",
            avatar: "",
            status: "Tranfromando café..."
        }
    ]

    return(
        <div className="listusers">
            {users && 
                users.map(
                    (user) => {
                        return <CardUser {...user} />
                    }
                )
            }
                
            
        </div>
    )
}