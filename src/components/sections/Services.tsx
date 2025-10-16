import React from "react";
import { useTranslation } from "react-i18next";

type ServiceProps = {
    title: string;
};

const LargeService: React.FC<ServiceProps> = ({ title }) => (
    <div className="flex flex-col items-center text-black-800 p-6 w-72">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading mb-4 text-center">{title}</h3>
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
            <div className="flex flex-col justify-center gap-6 px-4 font-body">
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
