type PropsType = {
    data: {
        title: string;
        description: string;
    };
};
const ServicesContentBox = ({ data }: PropsType) => {
    return (
        <div className="col-md-4">
            <div className="service-box">
                <div className="service-ico">
                    <span className="ico-circle">
                        <i className="bi bi-briefcase"></i>
                    </span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">{data?.title}</h2>
                    <p style={{maxHeight:'250px',overflowY:'scroll' }} className="s-description  text-center">{data?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesContentBox;
