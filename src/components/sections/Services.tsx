import React from "react";
import { useTranslation } from "react-i18next";

type ServiceProps = {
    title: string;
};

const LargeService: React.FC<ServiceProps> = ({ title }) => (
    <div className="flex flex-col items-center text-black-800 p-4 w-64">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-heading text-center">{title}</h3>
    </div>
);

const Services: React.FC = () => {
    const { t } = useTranslation();
    
    const services = [
        {
            title: t("service1"),
        },
        {
            title: t("service2"),
        },
        {
            title: t("service3"),
        },
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center gap-4 px-4 font-body">
                {services.map((service, idx) => (
                    <LargeService
                        key={idx}
                        title={service.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
