import React from "react";
import { transactionCategoryStyles } from '@/constants';
import { cn } from '@/lib/utils';
import Image from "next/image";


const categoryImages: { [key: string]: string } = {
    "FOOD AND DRINK": '/icons/utils.svg', 
    INCOME: '/icons/coins.svg',
    "LOAN PAYMENTS": '/icons/dollar-circle.svg',
    TRANSPORTATION: '/icons/car.svg',
    
  };

const Category = ({ name, percentage }: CategoryProps) => {
    const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
      transactionCategoryStyles[name as keyof typeof transactionCategoryStyles] || 
      transactionCategoryStyles.default;

      const categoryImage = categoryImages[name] || '/images/default-icon.svg';
  
    return (
      <div className={cn("flex flex-row items-center  bg-white p-4 rounded-lg shadow-md ", borderColor)}>
       
            <div className={cn("w-12 h-10 mx-2 rounded-full bg-opacity-20 flex items-center justify-center ", backgroundColor)}>
                <Image src={categoryImage} alt={name} width={20} height={20}  />
            </div>
          <div className={cn("flex flex-col w-full gap-2 px-2 py-1 rounded-md", chipBackgroundColor)}>


                <div className="flex justify-between gap-10 items-center ">
                    <div >
                            <span className={cn("size-3 rounded-full", backgroundColor)} />
                            <span className={cn("text-sm font-medium", textColor)}>{name}</span>
                    </div>
                            <span className="text-gray-600 font-semibold">{percentage}%</span>
                </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                        <div className={cn("h-full", backgroundColor)} style={{ width: `${percentage}%` }} />
                    </div>
            </div>

            




      </div>
    );
  };
export default Category;
