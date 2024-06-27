// Data (json)
import myDetails from "../../../data/myDetails.json";

// Icons from "react-icons.github.io/"
import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Icon from "./Icon";

const SocialIcon = () => {
  return (
    <>
      <div>
        <Icon icon={FaGithub} url={myDetails["github"]} border={true} />
        {/* <Icon icon={FaLinkedin} /> */}
        <Icon
          icon={FaWhatsapp}
          url={`https://wa.me/${myDetails["what'sApp"]}`}
          border={true}
        />
        <Icon icon={FaInstagram} url={myDetails["instagram"]} border={true} />
      </div>
    </>
  );
};

export default SocialIcon;
