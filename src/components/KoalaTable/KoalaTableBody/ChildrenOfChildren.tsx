import { FC } from 'react';
import BodySecret from './BodySecret';

interface ChildrenOfChildrenProps {
    bgColor: string;
    secretData: any; //TODO: add type
}

const ChildrenOfChildren: FC<ChildrenOfChildrenProps> = ({ bgColor, secretData }): JSX.Element => {
    return (
        <>
            <tr className={bgColor}>
                <th colSpan={2} />
                <th className={'bg-koalaGreen'}>ID</th>
                <th className={'bg-koalaGreen'}>Nemesis ID</th>
                <th className={'bg-koalaGreen'}>Secret Code</th>
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={6} />
            </tr>
            {secretData?.map(({ data }: { data: any }, i: number) => (
                <BodySecret key={i} bgColor={bgColor} secretData={data} />
            ))}
        </>
    );
};

export default ChildrenOfChildren;
