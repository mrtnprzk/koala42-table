import { FC } from 'react';

import BodyParent from './BodyParent';

interface KoalaTableBodyProps {
    data: any; //TODO: add type
}

const KoalaTableBody: FC<KoalaTableBodyProps> = ({ data }): JSX.Element => {
    return (
        <tbody className="text-center w-screen bg-koalaDarkGrey">
            {data?.map(({ data, children }: { data: any; children: any }, i: number) => (
                <BodyParent key={i} parentData={data} childrenData={children} index={i} />
            ))}
        </tbody>
    );
};

export default KoalaTableBody;
