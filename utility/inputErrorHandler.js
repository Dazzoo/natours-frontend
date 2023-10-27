export default function (type) {
  switch (type) {
    case 'required':
      return 'This is required field.';
      break;
    case 'min':
      return 'This field must be at least 3 characters long.';
      break;
    case 'maxLength':
      return 'This field must not exceed 30 characters.';
      break;
    case 'pattern':
      return 'Minimum eight characters, at least one letter and one number';
      break;
    default:
      return type;
  }
}
