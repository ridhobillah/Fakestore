import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CardComp({ item }) {
  return (
    <Card
      className="max-w-sm mt-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={item.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         <Link to={`/categories/${item.id}`}>{item.name}</Link> 
      </h5>
    </Card>
  );
}
