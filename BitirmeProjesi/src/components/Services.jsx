import React from "react";
import "../assets/styles/Services.css";

const ServiceCard = ({title, description, icon: Icon, variant}) => {
    return(
        <div className={`service-card ${variant}`}>
            <div className="icon">
        {typeof Icon === "string" ? (
          <img src={Icon} alt={title} />
        ) : (
          <Icon />
        )}
      </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div> 
    )
};

const Services = ({ headerText, showHeader=true, contentStyle, containerStyle, serviceList, contentTitle}) => {
    return(
        <div className={`services-container ${containerStyle}`}>
            <div className={`services-content ${contentStyle}`}>
            <div className="services-content-title">{contentTitle}</div>
            {showHeader && <p className="header">{headerText}</p>}
            <div className="services-grid-container">
            <div className="services-grid">
                {serviceList.map((service,index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        variant={service.variant}
                    />
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Services;
