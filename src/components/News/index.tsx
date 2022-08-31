import React from 'react'
import {
    Container
} from './styles'

interface Props {
    tipo: string;
    tweet: string;
    numeros: string;
}

const News: React.FC<Props> = ({
    tipo,
    tweet,
    numeros
    }) => {
        return(
            <Container>
                <p>{tipo}</p>
                <strong>{tweet}</strong>
                <p>{numeros}</p>
            </Container>
        )
    }

export default News