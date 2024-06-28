export const EmployeeConstants = {
  ADD_EMPLOYEE: 'Add',
  EDIT_EMPLOYEE: 'Edit',
};

export const validationRegexes = {
  AGE_REGEX: /^[0-9]*$/,
  EMAIL_REGEX:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  MOBILE_REGEX: /^[0-9]{10}$/,
};

export const alertMessages = {
  LOGIN_SUCCESS: 'Logged in successfully',
  LOGIN_FAILED: 'Please enter the valid credentials',
  RECORD_ADDED: 'Record created successfully',
  RECORD_UPDATED: 'Record updated successfully',
  RECORD_DELETED: 'Record deleted successfully',
  FETCH_ERROR: 'Something went wrong',
};

export const confirmMessages = {
  DELETE_CONFIRM: 'Are you sure you want to delete this record ?',
  LEAVE_THE_SITE:
    'Are you sure you want to leave the page ? you may have unsaved changes',
  LOGOUT_CONFIRMATION: 'ARe you  sure you want to logout?',
};
