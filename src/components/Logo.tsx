import type { FC } from "react";

import logo from "../assets/logo_light.png";

interface props {
    style?: never;
    height?: number;
    width?: number;
}

const Logo: FC<props> = ({ style, height = 120, width = 120 }) => {
    return (
        <img alt='logo' src={logo} style={style} height={height} width={width} />
    )
}

export default Logo