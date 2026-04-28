import pets from "../pet"

export default function Dashboard (){

    return (
        <div>
            {pets.map ((pet)=>(
                <p key= {pet.id}>{pet.name}</p>
        
            )
        )}
    
        </div>
    )
}