"use client"
import AlternativeTools from './AlternativeTools';

interface CategoryCardProps {
    googleProduct: string;
    alternatives: {
        alternative: string;
        link: string;
        logo: string;
        tag?: string;
    }[];
}

const CategoryCard = ({ googleProduct, alternatives }: CategoryCardProps) => {
    return (
        <div className="mb-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-300">
            <div className="flex items-center gap-3 border-b border-neutral-100 bg-neutral-50 px-6 py-3.5">
                <span className="mr-auto text-[10px] uppercase tracking-widest text-neutral-400">
                    Google product
                </span>
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-red-400" />
                <span className="text-sm font-medium text-neutral-800">{googleProduct}</span>
            </div>

            <div className="py-3">
                {alternatives.map((alt, index) => (
                    <AlternativeTools
                        key={index}
                        alternative={alt.alternative}
                        link={alt.link}
                        logo={alt.logo}
                        tag={alt.tag}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;