import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

export default function Hero() {
    return (
        <section
            className="max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map"/>

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image src="/camp.svg" alt="camp" width={50} height={50}
                       className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px"/>

                <h1 className="bold-52 lg:bold-88">Le camping entre amis</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    Notre application vous accompagne et vous guide dans chacune de vos aventures.
                </p>
                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image src="star.svg" alt="star" key={index} width={24} height={24}/>
                        ))}
                    </div>
                    <p className="bold-16 lg:bold-20 text-blue-70">198k

                        <span className="regular-16 lg:regular-20 ml-1">avis excellents</span>
                    </p>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button type="button" title="Télécharger l'application" variant="btn_green"/>
                    <Button type="button" title="Découvrir" icon="/play.svg" variant="btn_white_text"/>
                </div>

            </div>

            <div className="relative flex flex-1 items-start">
                <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 mt-8 px-7 py-8">
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">
                                Adresse
                            </p>
                            <Image src="/close.svg" alt="close" width={24} height={24} />
                        </div>
                        <p className="bold-20 text-white">Aguas Calientes</p>
                    </div>

                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="block regular-16 text-gray-20">
                                Distance
                            </p>
                            <p className="bold-20 text-white">120km</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="block regular-16 text-gray-20">
                                Elevation
                            </p>
                            <p className="bold-20 text-white">3.06km</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
