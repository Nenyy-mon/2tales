
const SvgComponent = ({ svgData }) => {
  return (
    <div>
      {svgData.map((svg, index) => (
        <div key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" width={svg.width} height={svg.height} viewBox={svg.viewBox}>
            <defs>
              <style>{`.cls-1 { fill: ${svg.fillColor}; fill-rule: evenodd; }`}</style>
            </defs>
            <path className="cls-1" d={svg.path} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SvgComponent;