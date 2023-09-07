import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListItemLink = styled(Link) <{ color: string }>`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => props.color};
`