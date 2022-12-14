import Head from 'next/head'
import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function DonateUs({ slug }) {

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    return (
        <div className='mt-22'>
            <div className="container mx-auto px-10 mb-8">
                <Head>
                    <title>Donate Us</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <section className="relative  object-fit: contain lg:pt-0 bg-blueGray-800">
                        <div className="container mx-auto px-4 py-4">
                            <h1 className="text-5xl font-semibold flex flex-wrap justify-center px-4 py-4 border-b-4 text-black border-black ">
                                Donation to Education
                            </h1>
                            <div className="  flex flex-wrap justify-center pt-8 ">
                                <div className="w-full lg:w-6/12  pt-8 ">
                                    <div className="bg-[#9acaeb] relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 px-8">
                                        <div className="flex-auto p-5 lg:p-10">
                                            <h4 className="text-2xl font-semibold flex flex-wrap justify-center">
                                                Fuel the Graduation Effect
                                            </h4>
                                            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                                High school graduation opens so many doors. Help more students living in low-income communities get there.
                                            </p>
                                            <div className="text-center mt-6">
                                                <PayPalScriptProvider options={{ "client-id": "Acod_sFqseWCYToCW3pNKn3Gz-wV1EblxcwzfkhvMxBPWQXY-zJVZdLwowzbLfjiNL8EUsoxQAJEIQWn" }}>
                                                    <PayPalButtons style={{ layout: "horizontal" }} />
                                                </PayPalScriptProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </main>


            </div>
        </div>
    );
}