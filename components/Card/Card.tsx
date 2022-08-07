import classes from "./card.module.css";

interface cardPropsTypes {
  readonly title: string;
  readonly date: Date;
  readonly user: string;
}

export const Card: React.FC<cardPropsTypes> = ({ title, date, user }) => {
  return (
    <div className={classes.card}>
      <h2>{title}</h2>
      <p>{date.toLocaleString()}</p>
      <p> by </p>
      <p>{user}</p>
    </div>
  );
};
