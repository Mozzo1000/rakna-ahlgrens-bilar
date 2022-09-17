import React, { useState }  from 'react'
import 'bulma/css/bulma.min.css';
import { Container, Columns, Hero, Heading, Image, Button, Notification } from 'react-bulma-components';

function CountOriginalPage() {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter+1)
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    };

    return (
        <div>
            <Columns gap={0}>
                <Columns.Column>
                    <Hero color={"primary"} className="is-fullheight" textAlign={"center"}>
                        <Hero.Header>
                            Header
                        </Hero.Header>
                        <Hero.Body>
                            <Container>
                                <Image src="/assets/car_white_original.jpeg" />
                                <Columns>
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
                            Footer
                        </Hero.Footer>
                    </Hero>
                </Columns.Column>
                    
                <Columns.Column>
                    <Hero color={"danger"} className="is-fullheight" textAlign={"center"}>
                        <Hero.Header>
                            Header
                        </Hero.Header>
                        <Hero.Body>
                            <Container>
                                <Heading>
                                    hero title
                                </Heading>
                            </Container>
                        </Hero.Body>
                        <Hero.Footer>
                            Footer
                        </Hero.Footer>
                    </Hero>
                </Columns.Column>

                <Columns.Column>
                    <Hero color={"warning"} className="is-fullheight" textAlign={"center"}>
                        <Hero.Header>
                            Header
                        </Hero.Header>
                        <Hero.Body>
                            <Container>
                                <Heading>
                                    hero title
                                </Heading>
                            </Container>
                        </Hero.Body>
                        <Hero.Footer>
                            Footer
                        </Hero.Footer>
                    </Hero>
                </Columns.Column>
            </Columns>
        </div>
    )
}

export default CountOriginalPage