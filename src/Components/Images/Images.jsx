import './Images.css'
import { LiaStarSolid } from 'react-icons/Lia'

const Images = ({ beds, photo, rating, superHost, title, type }) => {
    return (
        <article>
            <div className='image'>
                <img src={photo} alt={title} style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
            </div>
        </article>
    )
}