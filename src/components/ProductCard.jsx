export default function ProductCard({name, description}){
    return (
        <li>
            <div className="itemCard">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </li>
    )
}