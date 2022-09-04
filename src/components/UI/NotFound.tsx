import styled from 'styled-components';

type Props = {
    title: string
}

const NotFound = ({ title }: Props) => {
    return (
        <StyledNotFound>
            <h1>{title}</h1>
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div`
    width: 100%;

    & > h1 {
        
        text-align: center;
    }
`

export default NotFound;