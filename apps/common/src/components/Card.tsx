import React from "react";
import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  className = "",
  onClick,
  hoverable = false,
}) => {
  const cardClass = `card ${
    hoverable ? "card-hoverable" : ""
  } ${className}`.trim();

  return (
    <div className={cardClass} onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title || "Card image"} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
