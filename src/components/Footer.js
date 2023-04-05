import SocialFollow from './SocialFollow';

export default function footer() {
    return (
        <>
        <br />
            <div className="footer text-center" >
                <div className="row">
                    <div className="col-md-15 pt-2 mt-3 pb-2 mb-3">
                            <a href="/">Home</a>
                            <a href="/about">About </a>
                            <a href="/contact">Contact </a>
                            <a href="/feedbackdata">Feedback</a>
                        
                    </div>
                    <SocialFollow />
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a style={{ color:"black" }} href="https://walking-tales.com/"> walking-tales.com</a>
            </div>




        </>
    )
}

