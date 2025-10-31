import type { JSX } from "react";
import type { TitleProps } from "./types";
import { Container } from "react-bootstrap";

function Footer({title}: TitleProps):JSX.Element{
    return(
        <>
            <footer className="bg-dark text-light py-3 mt-auto" >
                <Container className="text-center">
                    <small>{title}</small>
                </Container>
            </footer>
        </>
    );
}

export default Footer;