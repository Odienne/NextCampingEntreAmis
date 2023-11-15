import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

export default function GetApp() {
    return (
        <section className="flexCenter w-full flex-col pb-[100px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Télécharger gratuitement</h2>
                    <p className="regular-16 text-gray-10">Disponible sur IOS et Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button icon="/apple.svg" type="button" title="App Store" variant="btn_white" full/>
                        <Button icon="/android.svg" type="button" title="Play Store" variant="btn_dark_green_outline"
                                full/>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <Image src="/phones.png" alt="phones" width={550} height={870}/>
                </div>
            </div>
        </section>
    )
}
