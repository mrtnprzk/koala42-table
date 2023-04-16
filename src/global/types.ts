export interface SecretDataI {
    ID: string;
    'Nemesis ID': string;
    'Secrete Code': string;
}

export interface SecretRecordI {
    data: SecretDataI;
    children: object;
}

export interface NemesisDataI {
    ID: string;
    'Character ID': string;
    'Is alive?': string;
    Years: string;
}

export interface NemesisRecordI {
    data: NemesisDataI;
    children:
        | object
        | {
              has_secrete?: {
                  records: Array<SecretRecordI>;
              };
          };
}

export interface RecordDataI {
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

export interface MainRecordI {
    data: RecordDataI;
    children:
        | object
        | {
              has_nemesis?: {
                  records: Array<NemesisRecordI>;
              };
          };
}
