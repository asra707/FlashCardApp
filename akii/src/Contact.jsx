export default function Contact(){
    return(
        <div className="Contact">
            <h1>You can contact me here but pls dont</h1>
            <form action="http://localhost:3000/messages" method="post">
            <label for="subject">Subject: </label>
            <input type="text" name="subject" placeholder="Subject" />  <br />
            <label for="email">Email: </label> <br />
            <input type="email" name="email" placeholder="Email" /><br />
            <label for="message">Message:</label> <br />
            <textarea name="message" placeholder="Message" /><br />
    
            <input type="submit" value="send" />
            </form>
        </div>
    )
}