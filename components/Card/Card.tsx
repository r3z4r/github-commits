import classes from "./card.module.css";

interface cardPropsTypes {
  readonly title: string;
  readonly date: Date;
  readonly user: string;
}

export const Card: React.FC<cardPropsTypes> = ({ title, date, user }) => {
  return (
    <div className={classes.card}>
      <h2>Deploy</h2>
      <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
    </div>
  );
};
