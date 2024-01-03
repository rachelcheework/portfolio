import React from "react";

const Contact =()=>{
    return (
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6" id="description">
                <h3>any more questions?</h3>
                <h1>Get In Touch With Me!</h1>
            </div>

            <div class="col-lg-6" id="form">
                <form>       
                    <div><input id="name" name="name" type="text" class="feedback-input" placeholder="Name" /></div>   
                    <div><input id="email" name="email" type="email" class="feedback-input" placeholder="Email" /></div>
                    <div><textarea id="message" name="message" type="text" class="feedback-input" placeholder="Type Your Message Here..."></textarea></div>
                    <div><input id="submit" type="submit" value="SUBMIT"/></div>
                </form>
            </div>
        </div>
    </div>  
</div>
    );
}

export default Contact;