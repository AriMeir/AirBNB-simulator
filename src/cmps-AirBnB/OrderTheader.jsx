import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export function OrderTheader({title, up, down}) {
    return (
        <div className="theader-container flex row align-center">{title} <div className="flex column center align-center"><TbTriangleFilled className="pointer hover" onClick={up}/><TbTriangleInvertedFilled className="pointer hover" onClick={down} /></div></div>
    )
}
