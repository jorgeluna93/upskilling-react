import type { JSX } from "react";
import { Container } from "react-bootstrap";

function HomePage():JSX.Element{
    return(
        <>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{height:"80hv"}}>
                <h1>HomePage!</h1>
                <p className="text-muted">
                    Hello there!
                </p>
            </Container>
        </>
    );
}

export default HomePage;