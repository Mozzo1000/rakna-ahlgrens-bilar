import React, { useState }  from 'react'
import 'bulma/css/bulma.min.css';
import { Columns, Button, Modal, Heading} from 'react-bulma-components';
import CountCard from '../components/CountCard';
import { Link } from "react-router-dom";

function CountOriginalPage() {
    const [whiteCounter, setWhiteCounter] = useState(0);
    const [pinkCounter, setPinkCounter] = useState(0);
    const [greenCounter, setGreenCounter] = useState(0);

    const [saveScreen, setSaveScreen] = useState(false); 

    const onNext = () => {
        console.log("Clicked save")
        setSaveScreen(true);
    };

    return (
        <div>
            <Columns gap={0}>
                <Columns.Column>
                    <CountCard background={"primary"} image={"/assets/car_white_original.png"} onChange={(e)=>setWhiteCounter(e)} alignHeader={"left"} header={<Button renderAs={Link} to="/" color="danger">Cancel</Button>}/>
                </Columns.Column>
                    
                <Columns.Column>
                    <CountCard background={"danger"} image={"/assets/car_pink_original.png"} onChange={(e)=>setPinkCounter(e)}/>
                </Columns.Column>

                <Columns.Column>
                    <CountCard background={"warning"} image={"/assets/car_green_original.png"} onChange={(e)=>setGreenCounter(e)} alignHeader={"right"} header={<Button onClick={() => onNext()}color="primary">Next</Button>}/>
                </Columns.Column>
            </Columns>

            <Modal title="Save.." show={saveScreen} onClose={() => setSaveScreen(false)}>
                <Modal.Card >
                    <Modal.Card.Header>
                        <Modal.Card.Title>Save the results?</Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Heading size={6}>White: {whiteCounter}</Heading>
                        <Heading size={6}>Pink: {pinkCounter}</Heading>
                        <Heading size={6}>Green: {greenCounter}</Heading>
                    </Modal.Card.Body>
                    <Modal.Card.Footer>
                        <Button color="primary">Save</Button>
                    </Modal.Card.Footer>
                </Modal.Card>
            </Modal>

        </div>
    )
}

export default CountOriginalPage