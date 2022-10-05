import React, {FC, HTMLAttributes, MutableRefObject, useLayoutEffect, useState} from 'react';
import {LogoImage} from "./LogoImage";
import useResizeObserver from '@react-hook/resize-observer'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    region?: string;
    association?: string;
    collapsed?: boolean;
    regionClassName?: string;
    associationClassName?: string;
}

interface ISize {
    width: number;
}

const useSize = (target: MutableRefObject<any>) => {
    const [size, setSize] = useState<ISize>()

    useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

export const Logo: FC<Props> = ({
                                    collapsed = false,
                                    region = '',
                                    association = '',
                                    className = 'text-orange text-small',
                                    regionClassName = 'text-orange text-small',
                                    associationClassName = 'text-orange text-small'
                                }) => {
    const target = React.useRef(null)
    const {width} = useSize(target) || {width: 0}

    return <div className={className} ref={target}>
        <LogoImage collapsed={collapsed ?? false} className={collapsed ? 'w-1/12' : 'w-40'}/>
        {!collapsed &&
            <div className={'font-bold font-sans flex-col w-fit'}
                 style={{fontSize: `${width * 0.039}px`, paddingLeft: `4.5%`, paddingTop: `2%`}}>
                <p className={regionClassName + ' text-base block font-bold leading-none text-sm' + (region?.length > 0 ? '' : ' hidden')}>{region}</p>
                <p className={associationClassName + ' leading-none text-base font-bold text-sm'}>{association}</p>
            </div>
        }
    </div>;
};
