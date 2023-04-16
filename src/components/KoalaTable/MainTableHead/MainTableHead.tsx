import { FC } from 'react';

const MainTableHead: FC = (): JSX.Element => {
    return (
        <thead className="bg-koalaGreen sticky top-0 z-10">
            <tr>
                <th />
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Ability</th>
                <th>Minimal Distance</th>
                <th>Weight</th>
                <th>Born</th>
                <th>In space since</th>
                <th>Beer consumption (l/y)</th>
                <th>Knows the answer?</th>
                <th>delete</th>
            </tr>
        </thead>
    );
};

export default MainTableHead;
