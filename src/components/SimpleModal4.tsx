
import React, { useState } from 'react';

export type SimpleModal4Props = {

    buttonText: string;

    renderButton?: (onClick: () => void) => React.ReactNode;

    ModalContent: (props: {closeModalFn: () => void}) => React.ReactElement; 
};



export const SimpleModal4 = (props: SimpleModal4Props) => {
    const { buttonText, ModalContent, renderButton } = props;

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
                }}>
                    <ModalContent closeModalFn={() => setIsOpen(false)}/>
                
                </div>}
        </>
    );
};
