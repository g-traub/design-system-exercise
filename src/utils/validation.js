export function emailValidator(email) {
  return /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,10})+$/.test(
    email
  );
}

export function newPasswordValidator(password) {
  return password.trim().length >= 8;
}
