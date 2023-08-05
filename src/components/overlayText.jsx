import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export const OverlayText = ({ text = "N/A", children, ...rest }) => {
    return (
        <Tooltip title={text} position='top' duration={200} {...rest}>
            {children}
        </Tooltip>
    );
};
