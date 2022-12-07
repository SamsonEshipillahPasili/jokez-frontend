import {HiInformationCircle} from "react-icons/hi";
import {Alert} from "flowbite-react";

function JokezAlert({color, icon, title, description}: any) {
    return (
        <Alert
           color={color} icon={icon}>
          <span>
            <span className="font-medium">
              {title}
            </span>
            {' '} {description}
          </span>
        </Alert>
    );
}

export default JokezAlert;
