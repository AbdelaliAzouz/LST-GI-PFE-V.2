/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import logo from "../../images/UaeLogo.png";


const NavbarLogo = () => {
    return (
        <img src={logo} alt="UAE LOGO" css={styles} />
    )
}

const styles = css`
width:110px;  
`

export default NavbarLogo;