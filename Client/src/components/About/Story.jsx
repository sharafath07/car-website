import React from 'react'

function Story() {
    return (
        <div>
            <section className="about-story">
                <div className="container">
                    <div className="about-story-img" data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&q=80" alt="Auto Delux Showroom" />
                    </div>
                    <div className="about-story-text" data-aos="fade-left">
                        <h2>OUR STORY</h2>
                        <p>Auto Delux was established in 2014 in Malappuram,Alathoorpadi Kerala with a simple mission — to make quality
                            used cars accessible to everyone at fair prices. What started as a small showroom with a handful of cars has
                            grown into one of Kerala's most trusted used car dealerships.</p>
                        <p>We have served thousands of happy customers across Malappuram, Kozhikode, Thrissur, Kochi and beyond. Our
                            team of experts ensures every car is thoroughly inspected and certified before listing.</p>
                        <p>At Auto Delux, we believe in complete transparency. No hidden charges, no surprises. Just honest deals and
                            quality vehicles.</p>
                        <a href="contact.html" className="btn btn-primary">Contact Us <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Story
