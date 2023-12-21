import testimonials from '../testimonials'
import StarRating from './StarRating'

function Testimonials() {
    const testimonialsElements = testimonials.map((testimonial) => (
        <article key={testimonial.id} className='testimonial--card'>
            <h5 style={{margin: "20px"}}>{testimonial.name}</h5>
            <div className='rating'>
                <img src={testimonial.img} alt={testimonial.name} />
                <StarRating rating={testimonial.stars} />
            </div>
            <p style={{margin: "20px"}}>{testimonial.description}</p>
        </article>
    ))
    return (
        <div className='testimonials'>
            <h2>Testimonials</h2>
            <section className='testimonials--section'>{testimonialsElements}</section>
        </div>
    )
}

export default Testimonials