import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-2">
            <div className="space-y-6 ">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    সিজনাল এডিট
                </span>

                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    আধুনিক <br />  জীবনের জন্য <br /> <span className="text-primary">ঐতিহ্যবাহী</span> জিনিসের গুণমান।
                </h1>

                <p className="/80 font-medium text-lg">
                    উচ্চমানের নিত্যপ্রয়োজনীয় জিনিসের একটি কঠোরভাবে ফিল্টার করা সংগ্রহ।                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href={'/shop'} className="btn btn-primary font-bold  px-8 py-3 rounded-full shadow-lg">
                        অনুসন্ধান করুন
                    </Link>
                    <button className="border-2 border-white/30 font-bold  px-8 py-3 rounded-full hover:bg-white/10 transition backdrop-blur-sm btn btn-outline">
                        আমাদের গল্প
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="relative group cursor-pointer">
                    <Image
                        className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        src="/images/food.png"
                        alt="food logo"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="relative group cursor-pointer mt-8">
                    <Image
                        className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        src="/images/clothes.png"
                        alt="clothes logo"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}