
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { getStoredCardInformation } from "../Utility/utility";


const totalDonationCard = getStoredCardInformation();
const totalDonationLength = totalDonationCard.length;
const percentage = ((totalDonationLength / 12) * 100);
const totalCard = 100 - percentage;
const data = [
    { name: "Total Donation Percentage", value: percentage },
    { name: "Total Remaining", value: totalCard },

];
const colors = ["red", "green"];


export default function Statistics() {

    return (

        <div>
            <h2 className="text-center font-bold text-2xl">After Reload The Current Value Is Adding</h2>
            <PieChart className="mx-auto" width={450} height={400}>

                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="green"
                    label
                >
                    {data.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
                    ))}
                </Pie>
                <Legend onMouseEnter={data} onMouseLeave={data} />
                <Tooltip />
            </PieChart>
        </div>
    );
}
