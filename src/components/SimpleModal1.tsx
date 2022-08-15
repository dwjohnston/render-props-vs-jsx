
import React, { useState } from 'react';

export type SimpleModal1Props = React.PropsWithChildren<{

    buttonText: string;
}>;



export const SimpleModal1 = (props: SimpleModal1Props) => {
    const { buttonText, children } = props;

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                {buttonText}
            </button>

            {isOpen &&

                <div style={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,

                    backgroundColor: "black",
                    opacity: 0.1
                }}
                    onClick={() => setIsOpen(false)}
                >


                </div>
            }

            {isOpen &&
                <div style={{
                    position: "fixed",
                    left: "25%",

                    top: "25%",
                    height: 300,
                    width: 300,
                    backgroundColor: "white",
                    color: "black",
                }}>{children}</div>}
        </>
    );
};
