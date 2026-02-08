import BodyText from "../typography/body-text.js";

interface NotificationBarProps {
  backgroundColor: string;
  color: string;
  author: string;
  authorUrl: string | null;
}

const NotificationBar = ({
  author,
  authorUrl,
  backgroundColor,
  color,
}: NotificationBarProps): React.ReactElement => {
  return (
    <div
      className="notification-bar shimmer"
      style={{ background: backgroundColor, color: color }}
    >
      <BodyText className="notification-bar-text">
        Thème élaboré par{" "}
        {authorUrl ? (
          <a href={authorUrl} target="_blank" rel="noopener noreferrer">
            {author}
          </a>
        ) : (
          author
        )}
      </BodyText>
    </div>
  );
};

export default NotificationBar;
