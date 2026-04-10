"use client"
import Link from 'next/link';
import Image from 'next/image';

interface AlternativeToolsProps {
    alternative: string;
    link: string;
    logo: string;
    tag?: string;
}

const AlternativeTools = ({ alternative, link, logo, tag }: AlternativeToolsProps) => {
    return (
        <div className="relative flex items-center gap-3.5 px-6 py-2.5 transition-colors duration-150 hover:bg-neutral-50 group not-last:after:absolute not-last:after:bottom-0 not-last:after:left-6 not-last:after:right-6 not-last:after:h-px not-last:after:bg-neutral-100">
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <Image
                    src={logo}
                    alt={alternative}
                    width={18}
                    height={18}
                    className="object-contain"
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `<span class="text-[11px] font-medium text-neutral-500">${alternative.charAt(0)}</span>`;
                        }
                    }}
                />
            </div>

            <span className="flex-1 text-sm text-neutral-800">{alternative}</span>

            {tag && (
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] text-blue-600">
                    {tag}
                </span>
            )}

            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500 transition-all duration-150 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800"
            >
                Visit
                <span className="text-[10px] opacity-50">↗</span>
            </Link>
        </div>
    );
};

export default AlternativeTools;