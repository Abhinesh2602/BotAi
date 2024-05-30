import styles from "./Home.module.css";
import logo from "../assets/logo/logo.png";
import Input from "./Input";

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
      <div className={styles.templateQuestion}>
        <span className={styles.templateQuestion_title}>
          Hi, What is the Weather
        </span>
        <span className={styles.templateQuestion_subTitle}>
          Get Immediate AI generated response
        </span>
      </div>
      <div className={styles.templateQuestion}>
        <span className={styles.templateQuestion_title}>
          Hi, what is my location
        </span>
        <span className={styles.templateQuestion_subTitle}>
          Get Immediate AI generated response
        </span>
      </div>
      <div className={styles.templateQuestion}>
        <span className={styles.templateQuestion_title}>
          Hi, what is the temperature
        </span>
        <span className={styles.templateQuestion_subTitle}>
          Get Immediate AI generated response
        </span>
      </div>
      <div className={styles.templateQuestion}>
        <span className={styles.templateQuestion_title}>Hi, how are you</span>
        <span className={styles.templateQuestion_subTitle}>
          Get Immediate AI generated response
        </span>
      </div>
    </div>
  );
}
