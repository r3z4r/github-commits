import classes from "./loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={classes.progressContainer}>
      <div className={classes.progress}>
        <div className={classes.progressBar}></div>
      </div>
    </div>
  );
};

export default Loader;
