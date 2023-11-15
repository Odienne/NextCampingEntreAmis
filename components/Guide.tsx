import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

export default function Guide() {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image src="/camp.svg" alt="camp" width={50} height={50}/>
                <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
                    Nous sommes là pour vous
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Votre guide pour un chemin facile</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        Avec notre application Hilink, vous n'allez plus jamais vous perdre. Nous prenons en charge les
                        cartes hors-ligne pour s'assurer que même sans connexion internet, nous pourrons vous aider.
                        Invitez vos amis et vos proches pour vous amuser dans la nature sauvage.
                    </p>
                </div>

            </div>

            <div className="flexCenter max-container relative w-full">
                <Image className="w-full object-cover object-center 2xl:rounded-5xl" src="/boat.png" alt="boat"
                       width={1440} height={580}/>
                <div
                    className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image className="h-full w-auto" src="/meter.svg" alt="meter" width={16} height={158}/>
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Destination</p>
                                <p className="bold-16 text-green-50">48 min</p>
                            </div>
                            <p className="bold-20 mt-2">Aguas calientes</p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className="regular-16 text-gray-20">Départ</p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
