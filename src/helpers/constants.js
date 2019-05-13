export const candidateHeaderFields = ['First Name', 'Last Name', 'Third Name', 'Description'];
export const candidateBodyFields = ['firstName', 'lastName', 'thirdName', 'description'];
export const candidateFormFields = [
  {
    label: 'First Name',
    value: 'firstName'
  },
  {
    label: 'Last Name',
    value: 'lastName'
  },
  {
    label: 'Third Name',
    value: 'thirdName'
  },
  {
    label: 'Description',
    value: 'description',
    isMultiline: true
  },
  {
    label: 'Date of birth',
    value: 'birthDate',
    isDate: true
  }
];

export const regionHeaderFields = ['Caption', 'Description'];
export const regionBodyFields = ['caption', 'description'];
export const regionFormFields = [
  {
    label: 'Caption',
    value: 'caption'
  },
  {
    label: 'Description',
    value: 'description',
    isMultiline: true
  }
];

export const defaultCandidate = {
  firstName: '',
  lastName: '',
  thirdName: '',
  description: '',
  birthDate: null
};

export const defaultUser = {
  uid: '',
  role: 1,
  regionId: '',
  firstName: '',
  lastName: '',
  thirdName: '',
  birthDate: null,
  passportSerial: '',
  encryptedPassword: ''
};

export const defaultLoginUser = {
  uid: '',
  encryptedPassword: ''
};

export const defaultRegion = {
  caption: '',
  description: ''
};