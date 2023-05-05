export type SecretData = {
    ID: string;
    'Nemesis ID': string;
    'Secrete Code': string;
};

export type SecretRecord = {
    data: SecretData;
    children: object;
};

export type NemesisData = {
    ID: string;
    'Character ID': string;
    'Is alive?': string;
    Years: string;
};

export type NemesisRecordChildren = {
    has_secrete?: {
        records: Array<SecretRecord>;
    };
};
export type NemesisRecord = {
    data: NemesisData;
    children: NemesisRecordChildren;
};

export type RecordData = {
    ID: string;
    Name: string;
    Gender: string;
    Ability: string;
    'Minimal distance': string;
    Weight: string;
    Born: string;
    'In space since': string;
    'Beer consumption (l/y)': string;
    'Knows the answer?': string;
};

export type MainRecordChildren = {
    has_nemesis?: {
        records: Array<NemesisRecord>;
    };
};

export type MainRecord = {
    data: RecordData;
    children: MainRecordChildren;
};
