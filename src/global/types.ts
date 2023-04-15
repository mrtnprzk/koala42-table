export interface SecretData {
    ID: string;
    'Nemesis ID': string;
    'Secrete Code': string;
}

export interface SecretRecord {
    data: SecretData;
    children: {};
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
        | {}
        | {
              has_secrete: {
                  records: SecretRecord[];
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
        | {}
        | {
              has_nemesis: {
                  records: NemesisRecord[];
              };
          };
}
