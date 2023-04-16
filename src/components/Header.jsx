import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
  position: static;

`

export const Header = () => {
    return (
        <Container>
            <Toolbar>
                Codepen Clone
            </Toolbar>
        </Container>
    )
}