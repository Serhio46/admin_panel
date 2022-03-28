import {PieChart, Pie, Cell} from 'recharts';

const CirculerChart = () => {
    const data = [
        { id: "1", name: "L1", value: 25 },
        { id: "2", name: "L2", value: 75 }
      ];

      return (
        <PieChart width={200} height={200}>
            <text
                x={100}
                y={110}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={50}
            >
            75%
            </text>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="90%"
                    outerRadius="100%"
                    fill="#82ca9d"
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={0}
                    blendStroke
                >
                    <Cell
                        key="test"
                        fill="#CCC"
                    />
                </Pie>
      </PieChart>
      );
}

export default CirculerChart;