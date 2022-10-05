import React, {ReactNode} from 'react';
import {Logo} from "./Logo";

const Header: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            <nav className="relative z-10 shadow flex justify-center py-6 px-16 bg-white">
                <div className="max-w-7xl w-full">
                    <div className="flex items-center justify-center xs:justify-between flex-wrap w-full">
                        <div className="flex items-center justify-center sm:justify-start flex-shrink-0 text-white w-full xs:w-auto">
                            <Logo association="Enschede" region="IJsselland-Twente" regionClassName="text-blue-600"
                                  associationClassName="inline text-blue-600" className="text-orange-500 xs:mx-auto mx-0  flex flex-col w-min
                                  "/>
                        </div>
                        <div className="hidden flex items-center flex-shrink-0 text-white">
                            <a href="#lid-worden"
                                className="border border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-bold py-2 px-4 mr-2">Lid
                                worden
                            </a>
                            <button
                                className="border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-bold py-2 px-4">Toezicht
                                aanvragen
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
