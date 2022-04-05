import React, { useEffect } from "react";

const BlockpassButton = (props) => {
    const { address } = props;
    console.log('address', address);

    useEffect(() => {
        const loadBlockpassWidget = () => {
            const blockpass = new window.BlockpassKYCConnect(
                'use_case_1_76c0b', // service client_id from the admin console // keep in env when dev
                {
                    refId: address, // assign the local user_id of the connected user // get from our system when dev
                }
            )

            blockpass.startKYCConnect()

            blockpass.on('KYCConnectSuccess', (res) => {
                console.log('result', res);
                //add code that will trigger when data have been sent.
            })
        }
        loadBlockpassWidget();
        return () => {
            // do coompnent un mount
        };
    });
    return (
        <button
            id="blockpass-kyc-connect"
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
            <p className="text-white text-base font-semibold">
                Verify with Blockpass
            </p>
        </button>
    )
}

export default BlockpassButton;