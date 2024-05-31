import styles from "./Home.module.css";
import logo from "../assets/logo/logo.png";
import Input from "./Input";
import { useBotContext } from "../services/BotContextProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.headerTitle}>Bot AI</span>

        <div className={styles.bottomContainer}>
          <div className={styles.questionConatainer}>
            <span className={styles.questionConatainer_title}>
              How Can I Help You Today?
            </span>
            <img
              src={logo}
              alt="logo"
              className={styles.questionConatainer_logo}
            />
          </div>
          <TemplateQuestions />
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Home;

function TemplateQuestions() {
  return (
    <div className={styles.templateQuestionContainer}>
      <TemplateQuestion>What is A/B testing?</TemplateQuestion>
      <TemplateQuestion>What is the virtual DOM?</TemplateQuestion>
      <TemplateQuestion>Can you explain RESTful APIs?</TemplateQuestion>
      <TemplateQuestion>What is a Promise in JavaScript?</TemplateQuestion>
    </div>
  );
}

const TemplateQuestion = ({ children }) => {
  const { question, setQuestion } = useBotContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setQuestion(children);
    if (location.pathname !== "/conversations") {
      navigate("/conversations");
    }
  };

  return (
    <div className={styles.templateQuestion} onClick={handleClick}>
      <span className={styles.templateQuestion_title}>{children}</span>
      <span className={styles.templateQuestion_subTitle}>
        Get Immediate AI generated response
      </span>
    </div>
  );
};
