import { Star } from "lucide-react";
import Image from "next/image";
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  review: string;
}
function TestimonialCards({
  name,
  role,
  company,
  rating,
  image,
  review,
}: TestimonialCardProps) {
  return (
    <div className=" max-w-[500px] p-4 h-30 bg-white font-switzer text-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <Image
            width={12}
            height={12}
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="text-[17px] font-semibold text-gray-900">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              {role} <span className="font-medium">{company}</span>
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1">
          <Star size={14} />
          <span className="text-sm font-semibold text-gray-700">{rating}</span>
        </div>
      </div>

      {/* Review */}
      <p className="leading-7 text-gray-700">
        {review}
      </p>
    </div>
  );
}

export default TestimonialCards;
