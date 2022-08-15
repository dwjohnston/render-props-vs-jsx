
import React, { useState } from 'react';

export type SimpleModal3Props = {

    buttonText: string;

    renderButton?: (onClick: () => void) => React.ReactNode;

    renderContent: (closeModalFn: () => void) => React.ReactNode; 
};



export const SimpleModal3 = (props: SimpleModal3Props) => {
    const { buttonText, renderContent, renderButton } = props;

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            {renderButton? renderButton(() => setIsOpen(true)) : 
            <button onClick={() => setIsOpen(true)}>
                {buttonText}
            </button>}

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
                }}>{renderContent(() => setIsOpen(false))}</div>}
        </>
    );
};
