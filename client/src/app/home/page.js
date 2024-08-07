'use client'
import React from 'react'
import { MdContactPhone } from "react-icons/md";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Layout from '@/components/layout/page';
const page = () => {
const router = useRouter();

  return (
    <Layout>
    <div className="flex flex-wrap -m-4 text-center">
           <div
                onClick={() => {
                  router.push("/shipment-details")}}
                className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-orange-100">
                  <Image
                    className="mx-auto"
                    src="/shipment.jpg"
                    width="110"
                    height="110"
                  />
                  <h2 className="title-font font-medium text-3xl text-gray-900 m-2">
                    Create New Shipment
                  </h2>
                  <p className="leading-relaxed">
                    Ship your products easily with ParcelApp.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-orange-100">
                  <Image
                    className="mx-auto"
                    src="/Track.webp"
                    width="1500"
                    height="2000"
                  />
                  <h2 className="title-font font-medium text-3xl text-gray-900 m-2">
                    Trace your order
                  </h2>
                  <p className="leading-relaxed">
                    Get Details about the product.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-orange-100">
                  <Image
                    className="mx-auto"
                    src="/history.webp"
                    width="120"
                    height="120"
                  />
                  <h2 className="title-font font-medium text-3xl text-gray-900 m-2">
                    Order History
                  </h2>
                  <p className="leading-relaxed">
                    Browse all your Shipment logs.
                  </p>
                </div>
              </div>
              <div
                onClick={() => router.push("/contact")}
                className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-orange-100">
                  <MdContactPhone className="mx-auto" size={120} color="orangered" />
                  <h2 className="title-font font-medium text-3xl text-gray-900 m-2">
                    Add Contact
                  </h2>
                  <p className="leading-relaxed">
                    Create your new contact.
                  </p>
                </div>
              </div>
    </div>
    </Layout>
  )
}

export default page