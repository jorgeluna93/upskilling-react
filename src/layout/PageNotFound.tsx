import type { JSX } from "react";
import { Container } from "react-bootstrap";

function PageNotFound():JSX.Element{
    return(
        <>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{height:"80hv"}}>
                <h1>PAGE NOT FOUND!</h1>
                <p className="text-muted">
                    This doesnt exist...
                </p>
            </Container>
        </>
    );
}

export default PageNotFound;