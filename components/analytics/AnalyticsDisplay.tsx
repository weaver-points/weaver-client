import { CardProps } from "@/utils/interface";
import ItemCard from "./ItemCard";


interface AnalyticsDisplayProps{
    data: CardProps[]
}

export default function AnalyticsDisplay({data}: AnalyticsDisplayProps) {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-7 min-h-[30vh] place-items-center " >
            {data.map((card, index) => (
                <ItemCard key={index} data={card} />
            ))}

        </div>
    )
}