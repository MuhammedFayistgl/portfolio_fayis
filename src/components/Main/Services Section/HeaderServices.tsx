
const HeaderServices = () => {
  const style: object = {
    // Adding media query..
    "@media (maxWidth: 375px)": {
      margintop: "10px",
    },
  };
    return (
        <div className="row" style={style}>
            <div className="col-sm-12">
                <div className="title-box text-center">
                    <h3 className="title-a">Services</h3>
                    <p className="subtitle-a">I design and code beautifully simple things, and I love what I do.</p>
                    <div className="line-mf"></div>
                </div>
            </div>
        </div>
    );
};

export default HeaderServices;
