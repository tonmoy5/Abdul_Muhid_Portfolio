import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Bookkeeping",
            description: "Accurate and organized bookkeeping services to track your financial transactions.",
            icon: "icon-bookkeeping"
        },
        {
            title: "Tax Preparation",
            description: "Comprehensive tax preparation and filing services to ensure compliance and maximize deductions.",
            icon: "icon-tax"
        },
        {
            title: "Financial Planning",
            description: "Personalized financial planning solutions to help you achieve your financial goals.",
            icon: "icon-planning"
        },
        {
            title: "Audit Support",
            description: "Expert assistance and guidance during audits to ensure accurate representation of your financial records.",
            icon: "icon-audit"
        },
        {
            title: "Payroll Services",
            description: "Efficient and reliable payroll services to streamline your payroll process and ensure compliance.",
            icon: "icon-payroll"
        }
    ];
    return (
        <div className="container mx-auto">
            <div className="">
                <h1 className="text-6xl italic text-primary font-bold">My Services</h1>
            </div>

            <div className="full flex gap-4 flex-wrap">

            </div>
        </div>
    );
};

export default Services;