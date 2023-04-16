export interface SecretData {
    ID: string;
    'Nemesis ID': string;
    'Secrete Code': string;
}

export interface SecretRecord {
    data: SecretData;
    children: object;
}

export interface NemesisData {
    ID: string;
    'Character ID': string;
    'Is alive?': string;
    Years: string;
}

export interface NemesisRecord {
    data: NemesisData;
    children:
        | object
        | {
              has_secrete: {
                  records: Array<SecretRecord>;
              };
          };
}

export interface RecordData {
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
}

export interface MainRecord {
    data: RecordData;
    children:
        | object
        | {
              has_nemesis: {
                  records: Array<NemesisRecord>;
              };
          };
}
