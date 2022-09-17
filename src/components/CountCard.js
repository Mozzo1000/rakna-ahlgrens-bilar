import React, { useState }  from 'react'
import 'bulma/css/bulma.min.css';
import { Container, Columns, Hero, Heading, Image, Button } from 'react-bulma-components';

function CountCard(props) {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter+1)
        props.onChange(counter+1)
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter-1)
            props.onChange(counter-1)
        }
    };

    return (
        <div>
            <Hero color={props.background} className="is-fullheight" textAlign={"center"}>
                <Hero.Header textAlign={props.alignHeader} m={3}>
                    {props.header}
                </Hero.Header>
                <Hero.Body>
                    <Container>
                        <Image src={props.image} />
                        <Columns className='is-mobile'>
                            <Columns.Column>
                                <Button color="dark" onClick={() => decreaseCounter()} disabled={counter<1}>-</Button>
                            </Columns.Column>
                            <Columns.Column>
                                <Heading weight={"bold"}>
                                    {counter}
                                </Heading>
                            </Columns.Column>
                            <Columns.Column>
                                <Button color="dark" onClick={() => incrementCount()}>+</Button>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
                <Hero.Footer>
                    {props.footer}
                </Hero.Footer>
            </Hero>
        </div>
    )
}

export default CountCard