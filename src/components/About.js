import React from 'react'

export const About = (props) => {
    return (
        <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#104a9e' : 'white', marginTop: '100px',paddingTop: '10px', paddingBottom: '20px'}}>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black', marginTop: '10px', marginBottom: '10px'}}>
                <strong>ABOUT US</strong>
            </div>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor: props.mode === 'dark' ? '#104a9e' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            All in one
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#1273DE' : 'white'}}>
                            <strong>Its an All in one app for text. </strong> It is can manipulate your text as you want using buttons. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? '#104a9e' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Stack used to built this
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#1273DE' : 'white'}}>
                            <strong>This is built using reactjs.</strong> Its a single page web app built using reactjs. I have used concepts of hooks and props to build every component of this app.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? '#104a9e' : 'white'}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact Us
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#1273DE' : 'white'}}>
                            <strong>This WebSite is owned by Pranjal Bisht.</strong> He is the student of IIT BHU Varanasi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
