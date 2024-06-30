import { useReducer, useState } from "react";

// Styles
import styles from "./Contact.module.css";

// Data (json)
import myDetails from "../../data/myDetails.json";

// Components
import Icon from "../Widgets/SocialIcon/Icon";
import SocialIcon from "../Widgets/SocialIcon/SocialIcon";
import Button from "../Widgets/Button/Button";
import Input from "../Widgets/Input/Input";
import Clipboard from "../Widgets/ClipboardCopy/Clipboard";
import NotificationSnackBar from "../Widgets/NotificationSnackBar/NotificationSnackBar";

// React Icons
import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

// Assets
import myCv from "../../assets/myCv/MyResume.pdf";

const Contact = () => {
  const initialInputField = {
    name: "",
    email: "",
    phNumber: "",
    message: "",
  };
  const btnInitialtext = "Send Message";
  const [inputField, setInputField] = useState(initialInputField);
  const [btnText, setBtnText] = useState(btnInitialtext);
  const [snackbarStatus, setSnackbarStatus] = useState(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleTyping = (event) => {
    const { name, value } = event.target;

    setInputField((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setBtnText("Sending...");
    try {
      const response = await fetch(
        "https://portfolioserver-7o94.onrender.com/sendMail/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(inputField),
        }
      );

      if (response.ok) {
        setSnackbarStatus("success");
        setSnackbarMessage("Message Sent Successfully!");
      } else {
        setSnackbarStatus("error");
        setSnackbarMessage("Something went wrong!");
      }
    } catch (error) {
      setSnackbarStatus("error");
      setSnackbarMessage(`Error sending message: ${error.message}`);
    } finally {
      setBtnText(btnInitialtext);
      setInputField(initialInputField);
    }
  };

  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>Contact Me</h2>

        <div className={styles.container}>
          <div className={styles["contact-left"]}>
            <div className={styles.contactDetail}>
              <Icon icon={IoIosSend} border={false} />
              <Clipboard text={"Email"}>{myDetails.email}</Clipboard>
            </div>

            <div className={styles.contactDetail}>
              <Icon icon={FaPhone} border={false} />
              <Clipboard text={"Phone Number"}>{myDetails.phone}</Clipboard>
            </div>

            <SocialIcon />

            <Button
              label={"Download CV"}
              url={myCv}
              downloadable={true}
              fileName={"cvAslam.pdf"}
            />
          </div>

          <div className={styles["contact-right"]}>
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                value={inputField.name}
                placeholder="Your Name"
                action={handleTyping}
              />
              <Input
                name="email"
                value={inputField.email}
                placeholder="Your Email"
                action={handleTyping}
              />
              <Input
                name="phNumber"
                type={"tel"}
                value={inputField.phNumber}
                placeholder="Your Phone Number"
                action={handleTyping}
              />
              <Input
                name="message"
                value={inputField.message}
                placeholder="Your Message"
                action={handleTyping}
                isTextarea={true}
              />

              <Button label={btnText} />
            </form>
          </div>
        </div>
      </section>
      <NotificationSnackBar status={snackbarStatus} message={snackbarMessage} />
    </>
  );
};

export default Contact;
