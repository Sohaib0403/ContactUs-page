import { MdMessage } from "react-icons/md";
import Button from "./Button/Button";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import UserInput from "./UserInput/UserInput";

const Form = () => {
  return (
    <div className="mainContainer">
      <div className="column1">
      <div className="btn-row-1">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
        <Button text="VIA CALL" icon={<FaPhone fontSize={24} />} />
      </div>
      <div className="btn-row-2">
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={24} />}
        />
      </div>

      <UserInput text="Name" />
      <div className="submit_btn">
        <Button text="SUBMIT" />
      </div>
      </div>

      <div className="column2">
        <div className="img_"></div>
       
      </div>
    </div>
  );
};

export default Form;
